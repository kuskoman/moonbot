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

    const voiceChannel = msg.member?.voice.channel;
    if (!voiceChannel) {
      return msg.channel.send("You are not in a voice channel");
    }

    const song = await findSongOnYouTube(args);
    const queue = voice.queues.get(msg.guild.id);
    await queue.player.join(voiceChannel.id);
    await queue.add(song.track);
    await queue.start();
  },
};

export default play;
