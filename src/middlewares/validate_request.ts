import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import ApiHttpError from "../utils/api_http_error";

const validateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return next(ApiHttpError.unprocessableEntity(errors.array()[0].msg));

  next();
};

export default validateRequest;
