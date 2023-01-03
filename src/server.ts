import express from "express"
import Prisma from "./helpers/prisma_client"
import initServer from "./utils/initServer"
import logger from "./utils/logger"

const app = express()

const PORT = process.env.PORT || 9000

initServer(app)

app.listen(PORT, async () => {
  try {
    await Prisma.get().$connect()
    logger.info(`Listening on port ${PORT} 🚀🚀`)
    logger.info("Database connected successfully! ✅✅")
  } catch (err) {
    logger.error(err)
    process.exit(0)
  }
})
