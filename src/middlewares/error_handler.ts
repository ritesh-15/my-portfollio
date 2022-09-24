import { NextFunction, Request, Response } from "express";
import ApiHttpError from "../utils/api_http_error";
import logger from "../utils/logger";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error);

  if (error instanceof ApiHttpError) {
    return res.status(error.status).json({
      success: false,
      message: error.message,
      code: error.status,
      error: error.error,
    });
  }

  return res.status(500).json({
    success: false,
    message: "Something went wrong at our side, please try again later!",
    code: 500,
    error: "Internal server error!",
  });
};

export default errorHandler;
