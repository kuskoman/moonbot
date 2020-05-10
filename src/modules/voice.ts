import { Client as Node } from "lavaqueue";
import config from "../config";
import { client } from "../client";
import { getShardId } from "../utils/shardUtils";

export const voice = new Node({
  host: `${config.lavalinkHost}:${config.lavalinkPort}`,
  userID: config.userId as string,
  password: config.lavalinkPassword,
  hosts: {
    redis: "redis://localhost:2334",
  },
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
