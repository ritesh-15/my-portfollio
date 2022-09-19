import { Application, json } from "express";
import cors from "cors";
import { CLIENT_URL } from "../constants";
import helmet from "helmet";
import morgan from "morgan";

const initServer = (app: Application) => {
  app.use(json());

  app.use(
    cors({
      origin: [CLIENT_URL],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

  app.use(helmet());

  app.use(morgan("dev"));
};

export default initServer;
