import { NextFunction, Request, Response } from "express";
import CreateHttpError from "../utils/create_http_error";

const parseBody = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.data) {
    return next(
      CreateHttpError.unprocessableEntity(
        "Data not found, please provide required data!"
      )
    );
  }

  req.body = JSON.parse(req.body.data);
  next();
};

export default parseBody;
