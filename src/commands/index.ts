import play from "./play";
import skip from "./skip";
import leave from "./leave";
import { loadCommand } from "../handlers/command";

[play, skip, leave].forEach((command) => {
  loadCommand(command);
});
