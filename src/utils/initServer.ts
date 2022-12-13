import { Application, json, NextFunction, Request, Response } from "express";
import cors from "cors";
import { CLIENT_URL } from "../constants";
import helmet from "helmet";
import morgan from "morgan";
import {
  authRouter,
  contactRouter,
  mainRouter,
  projectRouter,
} from "../routes";
import CreateHttpError from "./create_http_error";
import errorHandler from "../middlewares/error_handler";
import rateLimiter from "./rate_limiter";
import cookieParser from "cookie-parser";

const initServer = (app: Application) => {
  app.use(json());

  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

  app.use(cookieParser());

  app.use(helmet());

  app.use(morgan("dev"));

  app.use(rateLimiter);

  app.use("/api/auth", authRouter);

  app.use("/api/project", projectRouter);

  app.use("/api/contact", contactRouter);

  app.use("/api", mainRouter);

  app.use((req: Request, res: Response, next: NextFunction) => {
    next(
      CreateHttpError.notImplemented(
        "The route your looking for is not implemented!"
      )
    );
  });

  app.use(errorHandler);
};

export default initServer;
