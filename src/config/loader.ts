import { readFileSync, existsSync } from "fs";
import { UserConfig } from "./config.interfaces";
import chalk from "chalk";
import { Indexable } from "src/utils/objectUtils";

const defaultConfig = {
  prefix: "?",
  lavalinkHost: "localhost",
  lavalinkPassword: "",
  lavalinkPort: "2333",
  logToFile: true,
  logToConsole: true,
  interactiveConsole: false,
  redisHost: "localhost",
  redisPort: "2334",
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
  const mergedConfig = {
    ...defaultConfig,
    ...userConfig,
  };

  for (let [key, value] of Object.entries(mergedConfig)) {
    const usrCfg = userConfig as Indexable;
    if (typeof usrCfg[key] === "undefined") {
      warnAboutDefault(key, value);
    }
  }

  return mergedConfig;
};

const warnAboutDefault = (k: string, v: any): void => {
  console.warn(
    chalk.yellow(
      `Property ${k} not found in configuration file. Using default '${v}' instead`
    )
  );
};
