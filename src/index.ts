import "./cfgCheck";
import { Client } from "discord.js";
import { Node } from "lavalink";
import config from "./config";

const client = new Client();
const voice = new Node({
  host: `${config.lavalink.host}:${config.lavalink.port}`,
  userID: "",
  password: config.lavalink.password,
  send(guildID, packet) {
    if (guildID in client.guilds) return client.ws.emit(packet);
    throw new Error("attempted to send a packet on the wrong shard");
  },
});

client.ws.on("VOICE_SERVER_UPDATE", (data: any, _shardID: number) => {
  voice.voiceServerUpdate(data);
});

client.ws.on("VOICE_STATE_UPDATE", (data: any, _shardID: number) => {
  voice.voiceStateUpdate(data);
});

client.login(config.token);
