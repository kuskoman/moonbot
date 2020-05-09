import { Msg } from "../types/general.interfaces";
import { Command } from "../types/command.interfaces";
import config from "../config";
import logger from "../logger";

const commands: Map<string, Command> = new Map();

export const loadCommand = (command: Command): void => {
  command.patterns.forEach((pattern) => {
    commands.set(pattern, command);
  });
};

export const handleCommand = async (msg: Msg): Promise<any> => {
  const content = msg.content;
  if (!(content && content.startsWith(config.prefix))) return;

  const commandPattern = extractCommand(msg);
  const commandArgs = extractArgs(msg);

  if (!commandPattern) {
    return logger.debug("Command pattern not found");
  }

  const command = commands.get(commandPattern);
  if (!command) {
    return logger.debug("Command not found");
  }

  logger.debug(
    `"${msg.content}" recognised as command. Executing using ${command.name}`
  );

  command.execute({ msg, command: commandPattern, args: commandArgs });
};

const extractCommand = (msg: Msg) => {
  return msg.content?.slice(config.prefix.length).split(" ")[0];
};

const extractArgs = (msg: Msg) => {
  return msg.content?.slice(config.prefix.length).split(" ").slice(1).join(" ");
};
