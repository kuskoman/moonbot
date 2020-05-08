import { readFileSync, existsSync } from "fs";
import { UserConfig } from "./config.interfaces";
import chalk from "chalk";

const defaultConfig = {
  prefix: "?",
  lavalink: {
    host: "localhost",
    password: "",
    port: "2333",
  },
  logToFile: true,
};

const readConfigFile = (): UserConfig => {
  const path = "config.json";
  const fileExists = existsSync(path);
  if (!fileExists) {
    console.error(
      chalk.red("Can't find config.json file. Exiting application.")
    );
    process.exit(1);
  }
  let parsedConfig: UserConfig;
  try {
    const configFile = readFileSync(path, "utf-8");
    parsedConfig = JSON.parse(configFile);
  } catch (_e) {
    console.error(chalk.red("Error when parsing configuration file."));
    process.exit(1);
  }
  return parsedConfig;
};

export const getConfig = () => {
  const userConfig = readConfigFile();
  const userKeys = Object.keys(userConfig);
  for (let [key, value] of Object.entries(defaultConfig)) {
    if (!(key in userKeys)) {
      console.warn(
        `Property ${key} not found in configuration file. Using default ${value} instead`
      );
    }
  }
  return { ...defaultConfig, ...userConfig };
};
