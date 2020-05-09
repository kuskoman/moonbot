import { Msg } from "./general.interfaces";

export interface Command {
  name: string;
  patterns: string[];
  execute(msg: Msg): any;
}
