import chalk from "chalk";
import "./config";

if (!process.env.DISCORD_TOKEN) {
  console.log(chalk.red("DISCORD_TOKEN not specified. Exiting program."));
  process.exit(1);
}

if (!process.env.PREFIX) {
  console.log(chalk.blue("PREFIX not specified. Using '?' instead."));
} else {
  console.log(chalk.blue(`Prefix set to '${process.env.PREFIX}'`));
}

if (!process.env.LAVALINK_PASSWORD) {
  console.log(
    chalk.yellow("LAVALINK_PASSWORD not specified. Using empty string instead.")
  );
}

if (!process.env.LAVALINK_HOST) {
  console.log(
    chalk.yellow("LAVALINK_HOST not specified. Using localhost instead.")
  );
}

if (!process.env.LAVALINK_PORT) {
  console.log(chalk.yellow("LAVALINK_PORT not specified. Using 2333 instead."));
}
