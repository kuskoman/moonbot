import "dotenv/config";

export default {
  prefix: process.env.PREFIX || "?",
  token: process.env.DISCORD_TOKEN,
  password: process.env.LAVALINK_PASSWORD || "",
};
