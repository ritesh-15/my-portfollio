import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Prisma from "../helpers/prisma_client";
import CreateHttpError from "../utils/create_http_error";
import bcrypt from "bcrypt";
import JwtHelper, { JwtPayload } from "../helpers/jwt_helper";
import { UserService } from "../services";

interface LoginBodyInterface {
  email: string;
  password: string;
}

class AuthController {
  /**
   * @route auth/login
   * @desc Login the admin
   * @access Public
   */
  static login = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password } = <LoginBodyInterface>req.body;

      const user = await UserService.findUserByIdOrEmail(email, false);

      if (!user)
        return next(
          CreateHttpError.notFound("Invalid email address or password!")
        );

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword)
        return next(
          CreateHttpError.unauthorized("Invalid email address or password!")
        );

      const { accessToken, refreshToken } = JwtHelper.generateTokens(user.id);

      await Prisma.get().session.create({
        data: {
          token: refreshToken,
          userId: user.id,
        },
      });

      res.cookie("x_access_token", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        secure: true,
        sameSite: "none",
      });

      res.cookie("x_refresh_token", refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        secure: true,
        sameSite: "none",
      });

      res.json({
        user: {
          id: user.id,
          email: user.email,
          about: {
            name: user.about?.name,
            about: user.about?.about,
          },
        },
        success: true,
      });
    }
  );

  /**
   * @route auth/me
   * @desc Get the current logged in user information
   * @access Private
   */
  static me = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.user;

      const user = await UserService.findUserByIdOrEmail(id);

      if (!user) return next(CreateHttpError.notFound("User does not exits!"));

      res.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          about: user.about,
        },
      });
    }
  );

  /**
   * @route auth/logout
   * @desc Log out the account
   * @access Private
   */
  static logout = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      await Prisma.get().session.deleteMany({
        where: { userId: req.user?.id },
      });

      res.clearCookie("x_access_token");
      res.clearCookie("x_refresh_token");

      res.json({
        success: true,
        message: "Log out successfully!",
      });
    }
  );

  /**
   * @route auth/refresh
   * @desc Refresh token
   * @access Public
   */
  static refresh = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { x_refresh_token: jwtToken } = req.cookies;

      // check if token found or not
      if (!jwtToken) {
        return next(CreateHttpError.unauthorized("Jwt token not found!"));
      }

      let payload: JwtPayload | null = null;

      // validate the token
      try {
        payload = JwtHelper.validateRefreshToken(jwtToken);
      } catch (error) {
        return next(CreateHttpError.unauthorized("Jwt token expired!"));
      }

      // check for token reuse
      const foundSession = await Prisma.get().session.findFirst({
        where: {
          token: jwtToken,
        },
      });

      // if no token found the reuse detected expire all the tokens
      if (!foundSession) {
        res.clearCookie("x_access_token");
        res.clearCookie("x_refresh_token");

        await Prisma.get().session.deleteMany({
          where: { userId: payload.id },
        });

        return next(CreateHttpError.forbidden("Access denied!"));
      }

      // find user
      const user = await Prisma.get().user.findUnique({
        where: { id: payload.id },
      });

      if (!user) return next(CreateHttpError.notFound("User not found!"));

      // generate new tokens
      const { accessToken, refreshToken } = JwtHelper.generateTokens(user.id);

      res.cookie("x_access_token", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        secure: true,
        sameSite: "none",
      });

      res.cookie("x_refresh_token", refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        secure: true,
        sameSite: "none",
      });

      // delete the previous session
      await Prisma.get().session.delete({
        where: {
          id: foundSession.id,
        },
      });

      await Prisma.get().session.create({
        data: {
          userId: user.id,
          token: refreshToken,
        },
      });

      res.json({
        success: true,
        accessToken,
        refreshToken,
      });
    }
  );

  /**
   * @route auth/add-user
   * @desc Add admin user
   * @access Private
   */
  static addUser = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const { email, password, name, about } = req.body;

      const isUserExits = await Prisma.get().user.findUnique({
        where: {
          email,
        },
      });

      if (isUserExits)
        return next(
          CreateHttpError.badRequest("Email address is already in use!")
        );

      const hashPassword = await bcrypt.hash(password, 12);

      await Prisma.get().user.create({
        data: {
          email,
          password: hashPassword,
          about: {
            create: {
              name,
              about,
            },
          },
        },
      });

      res.status(201).json({
        success: true,
        message: "User created successfully!",
      });
    }
  );
}

export default AuthController;
