import { Command } from "../types/command.interfaces";
import { voice } from "../modules/voice";

const skip: Command = {
  name: "skip",
  patterns: ["skip", "s"],
  async execute({ msg }) {
    if (!msg.guild) {
      return msg.channel.send("Cannot find server to skip song on");
    }

    const voiceChannel = msg.member?.voice.channel;
    if (!voiceChannel) {
      return msg.channel.send("You are not in a voice channel");
    }

    const queue = voice.queues.get(msg.guild.id);
    queue.next();
  },
};

export default skip;
