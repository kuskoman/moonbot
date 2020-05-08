import { getConfig } from "./loader";
import chalk from "chalk";

type ConfigToValidate = ReturnType<typeof getConfig>;

export const validate = (config: ConfigToValidate): void => {
  if (!config.token) {
    panicLog(
      "Discord token is missing. Add token property to configuration file. Exiting application."
    );
  }

  if (!config.userId) {
    panicLog(
      "Discord Bot ID is missing. Add userId property to configuration file. Exiting application."
    );
  }
};

const panicLog = (s: string) => {
  console.error(chalk.red(s));
  process.exit(1);
};
