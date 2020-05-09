import { client } from "./client";
import config from "./config";
import "./commands";

client.login(config.token);
