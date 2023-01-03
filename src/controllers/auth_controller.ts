import { NextFunction, Request, Response } from "express"
import asyncHandler from "express-async-handler"
import Prisma from "../helpers/prisma_client"
import CreateHttpError from "../utils/create_http_error"
import bcrypt from "bcrypt"
import JwtHelper, { JwtPayload } from "../helpers/jwt_helper"
import { UserService } from "../services"
import CloudinaryHelper from "../helpers/cloudinary_helper"
import fs from "fs/promises"

interface LoginBodyInterface {
  email: string
  password: string
}

class AuthController {
  /**
   * @route auth/login
   * @desc Login the admin
   * @access Public
   */
  static login = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password } = <LoginBodyInterface>req.body

      const user = await UserService.findByEmail(email, false)

      if (!user)
        return next(
          CreateHttpError.notFound("Invalid email address or password!")
        )

      const isValidPassword = await bcrypt.compare(password, user.password)

      if (!isValidPassword)
        return next(
          CreateHttpError.unauthorized("Invalid email address or password!")
        )

      const { accessToken, refreshToken } = JwtHelper.generateTokens(user.id)

      await Prisma.get().session.create({
        data: {
          token: refreshToken,
          userId: user.id,
        },
      })

      res.cookie("x_access_token", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        secure: true,
        sameSite: "none",
      })

      res.cookie("x_refresh_token", refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        secure: true,
        sameSite: "none",
      })

      res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          info: {
            ...user.info,
          },
        },
        success: true,
      })
    }
  )

  /**
   * @route auth/me
   * @desc Get the current logged in user information
   * @access Private
   */
  static me = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.user

      const user = await UserService.findByID(id)

      if (!user) return next(CreateHttpError.notFound("User does not exits!"))

      res.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          about: user.info,
        },
      })
    }
  )

  /**
   * @route auth/logout
   * @desc Log out the account
   * @access Private
   */
  static logout = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      await Prisma.get().session.deleteMany({
        where: { userId: req.user?.id },
      })

      res.clearCookie("x_access_token")
      res.clearCookie("x_refresh_token")

      res.json({
        success: true,
        message: "Log out successfully!",
      })
    }
  )

  /**
   * @route auth/refresh
   * @desc Refresh token
   * @access Public
   */
  static refresh = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { x_refresh_token: jwtToken } = req.cookies

      // check if token found or not
      if (!jwtToken) {
        return next(CreateHttpError.unauthorized("Jwt token not found!"))
      }

      let payload: JwtPayload | null = null

      // validate the token
      try {
        payload = JwtHelper.validateRefreshToken(jwtToken)
      } catch (error) {
        return next(CreateHttpError.unauthorized("Jwt token expired!"))
      }

      // check for token reuse
      const foundSession = await Prisma.get().session.findFirst({
        where: {
          token: jwtToken,
        },
      })

      // if no token found the reuse detected expire all the tokens
      if (!foundSession) {
        res.clearCookie("x_access_token")
        res.clearCookie("x_refresh_token")

        await Prisma.get().session.deleteMany({
          where: { userId: payload.id },
        })

        return next(CreateHttpError.forbidden("Access denied!"))
      }

      // find user
      const user = await Prisma.get().user.findUnique({
        where: { id: payload.id },
      })

      if (!user) return next(CreateHttpError.notFound("User not found!"))

      // generate new tokens
      const { accessToken, refreshToken } = JwtHelper.generateTokens(user.id)

      res.cookie("x_access_token", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        secure: true,
        sameSite: "none",
      })

      res.cookie("x_refresh_token", refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        secure: true,
        sameSite: "none",
      })

      // delete the previous session
      await Prisma.get().session.delete({
        where: {
          id: foundSession.id,
        },
      })

      await Prisma.get().session.create({
        data: {
          userId: user.id,
          token: refreshToken,
        },
      })

      res.json({
        success: true,
        accessToken,
        refreshToken,
      })
    }
  )

  /**
   * @route auth/add-user
   * @desc Add admin user
   * @access Private
   */
  static addUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password, name, about } = req.body

      const isUserExits = await UserService.findByEmail(email)

      if (isUserExits)
        return next(
          CreateHttpError.badRequest("Email address is already in use!")
        )

      const hashPassword = await bcrypt.hash(password, 12)

      await UserService.createNewUser({ email, hashPassword, about })

      res.status(201).json({
        success: true,
        message: "User created successfully!",
      })
    }
  )

  /**
   * @route auth/update-user/:id
   * @desc update the user profile
   * @access Private
   */
  static updateUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const {
        about,
        heading,
        subHeading,
        email,
        contactHeading,
        contactSubHeading,
      } = req.body
      const { id } = req.params
      const image = req.file

      const user = await UserService.findByID(id)

      if (!user) return next(CreateHttpError.notFound("User not found!"))

      let cloudImageId = null

      if (image) {
        // if image is present then update the cloud image
        const uploadedImage = await CloudinaryHelper.uploadImage(image.path)

        if (!uploadedImage)
          return next(
            CreateHttpError.internalServerError(
              "Something went wrong while uploading image please try again later!"
            )
          )

        await fs.unlink(image.path)

        const cloudImage = await Prisma.get().cloudImage.create({
          data: {
            publicId: uploadedImage.public_id,
            url: uploadedImage.secure_url,
          },
        })

        cloudImageId = cloudImage.id
      }

      const techStack = await UserService.updateUser(id, {
        email,
        heading,
        subHeading,
        about,
        cloudImageId: cloudImageId ? cloudImageId : user.info?.image?.id,
        contactHeading,
        contactSubHeading,
      })

      if (cloudImageId && user.info?.image?.id) {
        await Prisma.get().cloudImage.delete({
          where: {
            id: user.info?.image?.id,
          },
        })
      }

      res.json({
        success: true,
        message: "User updated successfully!",
        techStack,
      })
    }
  )
}

export default AuthController
