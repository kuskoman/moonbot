import "dotenv/config";

export default {
  prefix: process.env.PREFIX || "?",
  token: process.env.DISCORD_TOKEN,
  userId: process.env.DISCORD_ID,
  lavalink: {
    host: process.env.LAVALINK_HOST || "localhost",
    password: process.env.LAVALINK_PASSWORD || "",
    port: process.env.LAVALINK_PORT || "2333",
  },
};
