import { Client } from "discord.js";
import { voice } from "./voice";
import config from "./config";
import logger from "./logger";

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
  if (msg.content !== "%join") {
    return;
  }
  const guild = msg.member?.guild;
  if (!guild) {
    return;
  }
  const player = voice.players.get(guild.id);
  const channel = msg.member?.voice.channel;
  if (!channel) {
    return;
  }
  await player.join(channel.id);
  const res = await voice.load("ytsearch:dj hazel wez pigulke");
  await player.play(res.tracks[0]);
});
