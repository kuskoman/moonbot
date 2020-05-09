import { client } from "./client";
import config from "./config";
import console from "./console";

client.login(config.token);
if (config.interactiveConsole) {
  console.start();
}
