import play from "./play";
import { loadCommand } from "../handlers/command";

[play].forEach((command) => {
  loadCommand(command);
});
