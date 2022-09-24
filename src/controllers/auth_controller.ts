import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import Prisma from "../helpers/prisma_client";
import ApiHttpError from "../utils/api_http_error";
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
          ApiHttpError.notFound("Invalid email address or password!")
        );

      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword)
        return next(
          ApiHttpError.unauthorized("Invalid email address or password!")
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
      });

      res.cookie("x_refresh_token", refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
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

      if (!jwtToken) {
        return next(ApiHttpError.unauthorized("Jwt token not found!"));
      }

      let payload: JwtPayload | null = null;

      try {
        payload = JwtHelper.validateRefreshToken(jwtToken);
      } catch (error) {
        return next(ApiHttpError.unauthorized("Jwt token expired!"));
      }

      const foundSession = await Prisma.get().session.findFirst({
        where: {
          token: jwtToken,
        },
      });

      if (!foundSession) {
        res.clearCookie("x_access_token");
        res.clearCookie("x_refresh_token");

        await Prisma.get().session.deleteMany({
          where: { userId: payload.id },
        });

        return next(ApiHttpError.forbidden("Access denied!"));
      }

      const user = await Prisma.get().user.findUnique({
        where: { id: payload.id },
      });

      if (!user) return next(ApiHttpError.notFound("User not found!"));

      const { accessToken, refreshToken } = JwtHelper.generateTokens(user.id);

      res.cookie("x_access_token", accessToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      });

      res.cookie("x_refresh_token", refreshToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
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
          ApiHttpError.badRequest("Email address is already in use!")
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
