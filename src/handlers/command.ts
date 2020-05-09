import { Msg } from "../types/general.interfaces";
import { Command } from "../types/command.interfaces";
import config from "../config";

const commands: Map<string, Command> = new Map();

export const loadCommand = (command: Command): void => {
  command.patterns.forEach((pattern) => {
    commands.set(pattern, command);
  });
};

export const handleCommand = async (msg: Msg): Promise<void> => {
  const content = msg.content;
  if (!(content && content.startsWith(config.prefix))) return;

  const commandPattern = extractCommand(msg);
  const commandArgs = extractArgs(msg);

  if (!commandPattern) return;

  const command = commands.get(commandPattern);
  if (!command) return;

  command.execute({ msg, command: commandPattern, args: commandArgs });
};

const extractCommand = (msg: Msg) => {
  return msg.content?.slice(config.prefix.length).split(" ")[0];
};

const extractArgs = (msg: Msg) => {
  return msg.content?.slice(config.prefix.length).split(" ").slice(1).join(" ");
};
