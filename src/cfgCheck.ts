import config from "./config";
import chalk from "chalk";

if (!config.token) {
  console.log(chalk.red("DISCORD_TOKEN not specified. Exiting program."));
  process.exit(1);
}
