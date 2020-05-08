import { readFileSync, existsSync } from "fs";
import chalk from "chalk";
import { UserConfig } from "./config.interfaces";

const defaultConfig = {
  prefix: "?",
  lavalink: {
    host: "localhost",
    password: "",
    port: "2333",
  },
};

const readConfigFile = (): UserConfig => {
  const path = "../config.json";
  const fileExists = existsSync(path);
  if (!fileExists) {
    console.log(chalk.red("Can't find config.json file. Exiting application."));
    process.exit(1);
  }
  const configFile = readFileSync(path, "utf-8");
  const configJson = JSON.parse(configFile);
  return configJson;
};

export const getConfig = () => {
  const userConfig = readConfigFile();
  return { ...defaultConfig, ...userConfig };
};
