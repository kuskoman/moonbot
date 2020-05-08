import "./cfgCheck";
import { Client } from "discord.js";
import { Node } from "lavalink";
import config from "./config";
import chalk from "chalk";
import { getShardId } from "./utils/shardUtils";

const client = new Client();
const voice = new Node({
  host: `${config.lavalink.host}:${config.lavalink.port}`,
  userID: config.userId as string,
  password: config.lavalink.password,
  send(guildId, packet) {
    const numberOfshards = client.ws.shards.keyArray().length;
    const shardId = getShardId(guildId, numberOfshards);
    const shard = client.ws.shards.get(shardId);
    if (!shard) {
      return console.log("Shard not found");
    }
    shard.send(packet);
  },
});

client.ws.on("VOICE_SERVER_UPDATE", (data: any, _shardID: number) => {
  voice.voiceServerUpdate(data);
});

client.ws.on("VOICE_STATE_UPDATE", (data: any, _shardID: number) => {
  voice.voiceStateUpdate(data);
});

client.on("ready", () => {
  console.log(chalk.green(`Bot logged in as ${client.user?.tag}`));
  console.log(chalk.green(`Bot prefix is set to "${config.prefix}"`));
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

client.login(config.token);
