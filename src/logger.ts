import { createLogger, transports, format } from "winston";
import config from "./config";

const logger = createLogger({
  level: "debug",
});

if (config.logToConsole) {
  logger.add(new transports.Console({ format: format.cli() }));
}

if (config.logToFile) {
  const filename = `log/${+new Date()}.log`;
  logger.add(new transports.File({ filename, format: format.simple() }));
}

logger.info("Logger loaded");

export default logger;
