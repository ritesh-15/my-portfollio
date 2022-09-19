import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: "debug",
  format: combine(
    format.colorize(),
    timestamp({ format: "YYYY:MM:DD hh:mm:ss" }),
    myFormat
  ),
  transports: [new transports.Console()],
});

export default logger;
