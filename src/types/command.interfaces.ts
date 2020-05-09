import { Msg } from "./general.interfaces";

export interface Command {
  name: string;
  patterns: string[];
  execute(opts: CommandOpts): any;
}

export interface CommandOpts {
  msg: Msg;
  args: string | undefined;
  command: string;
}
