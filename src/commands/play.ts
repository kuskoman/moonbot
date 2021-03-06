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
    await queue.add(song.track);

    if (queue.player.playing) {
      return msg.channel.send(`Song **${song.info.title}** added to queue`);
    }

    const current = await queue.current();
    if (!current) {
      msg.channel.send(`Playing **${song.info.title}**`);
    } else {
      msg.channel.send(
        `Resumed player and added **${song.info.title}** to queue`
      );
    }

    await queue.player.join(voiceChannel.id);
    await queue.add(song.track);
    queue.start();
  },
};

export default play;
