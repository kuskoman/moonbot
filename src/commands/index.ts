import play from "./play";
import skip from "./skip";
import { loadCommand } from "../handlers/command";

[play, skip].forEach((command) => {
  loadCommand(command);
});
