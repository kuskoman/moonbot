import config from "./config";
import chalk from "chalk";

if (!config.token) {
  console.log(chalk.red("DISCORD_TOKEN not specified. Exiting program."));
  process.exit(1);
}

if (!config.password) {
  console.log(
    chalk.yellow("LAVALINK_PASSWORD not specified. Using empty string instead.")
  );
}
