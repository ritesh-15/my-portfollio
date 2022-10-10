import express from "express";
import Prisma from "./helpers/prisma_client";
import initServer from "./utils/initServer";
import logger from "./utils/logger";

const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, async () => {
  initServer(app);
  logger.info(`Listening on port ${PORT} 🚀🚀`);
  await Prisma.get().$connect();
  logger.info("Database connected successfully! ✅✅");
});