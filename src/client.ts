import { Client } from "discord.js";
import { voice } from "./modules/voice";
import config from "./config";
import logger from "./modules/logger";
import { handleCommand } from "./handlers/command";

export const client = new Client();

client.ws.on("VOICE_SERVER_UPDATE", (data: any, _shardID: number) => {
  voice.voiceServerUpdate(data);
});

client.ws.on("VOICE_STATE_UPDATE", (data: any, _shardID: number) => {
  voice.voiceStateUpdate(data);
});

client.on("ready", () => {
  logger.info(`Bot logged in as ${client.user?.tag}`);
  logger.info(`Bot prefix is set to "${config.prefix}"`);
});

client.on("message", async (msg) => {
  handleCommand(msg);
});
