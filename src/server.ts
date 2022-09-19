import express from "express";
import initServer from "./utils/initServer";
import logger from "./utils/logger";

const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  initServer(app);
  logger.info(`Listening on port ${PORT} 🚀🚀`);
});
