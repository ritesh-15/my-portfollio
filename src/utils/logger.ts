import path from "path";
import winston, { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

let logger: winston.Logger;

const errorLog = path.resolve("logs/error.log");
const infoLog = path.resolve("logs/info.log");
const debugLog = path.resolve("logs/debug.log");

if (process.env.NODE_ENV === "production") {
  logger = createLogger({
    level: "debug",
    format: combine(timestamp(), myFormat),
    transports: [
      new transports.Console(),
      new transports.File({
        level: "error",
        filename: errorLog,
        format: format.prettyPrint(),
      }),
      new transports.File({
        level: "info",
        filename: infoLog,
        format: format.prettyPrint(),
      }),
      new transports.File({
        level: "debug",
        filename: debugLog,
        format: format.prettyPrint(),
      }),
    ],
  });
} else {
  logger = createLogger({
    level: "debug",
    format: combine(
      format.colorize(),
      timestamp({ format: "YYYY:MM:DD hh:mm:ss" }),
      myFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        level: "error",
        filename: errorLog,
        format: format.prettyPrint(),
      }),
      new transports.File({
        level: "info",
        filename: infoLog,
        format: format.prettyPrint(),
      }),
      new transports.File({
        level: "debug",
        filename: debugLog,
        format: format.prettyPrint(),
      }),
    ],
  });
}

export default logger;
