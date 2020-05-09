import { Msg } from "./general.interfaces";

export interface Command {
  name: string;
  description?: string;
  patterns: string[];
  execute(msg: Msg): any;
}
