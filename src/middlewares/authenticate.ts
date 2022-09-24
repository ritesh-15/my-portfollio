import { NextFunction, Request, Response } from "express";
import JwtHelper from "../helpers/jwt_helper";
import Prisma from "../helpers/prisma_client";
import ApiHttpError from "../utils/api_http_error";

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { x_access_token: jwtToken } = req.cookies;

  try {
    if (!jwtToken) throw Error();
    const payload = JwtHelper.validateAccessToken(jwtToken);

    const user = await Prisma.get().user.findUnique({
      where: {
        id: payload.id,
      },
    });

    if (!user) throw Error();

    req.user = {
      id: user.id,
      email: user.email,
    };

    next();
  } catch (error) {
    next(
      ApiHttpError.unauthorized(
        "You are not authenticated, not allowed to use this resource!"
      )
    );
  }
};

export default authenticate;
