import { Command } from "../types/command.interfaces";
import { voice } from "../modules/voice";
import { findSongOnYouTube } from "../utils/voiceUtils";

const play: Command = {
  name: "play",
  patterns: ["play", "p"],
  async execute({ msg, args }) {
    if (!args) {
      return msg.channel.send("No song specified to play");
    }

    if (!msg.guild) {
      return msg.channel.send("Cannot find server to play song on");
    }

    const song = await findSongOnYouTube(args);
    const player = voice.players.get(msg.guild.id);
    player.play(song);
  },
};

export default play;
