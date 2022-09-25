import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import CreateHttpError from "../utils/create_http_error";

const validateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return next(CreateHttpError.unprocessableEntity(errors.array()[0].msg));

  next();
};

export default validateRequest;
