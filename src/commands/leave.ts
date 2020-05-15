import { Command } from "../types/command.interfaces";
import { voice } from "../modules/voice";

const leave: Command = {
  name: "leave",
  patterns: ["leave", "l"],
  async execute({ msg }) {
    if (!msg.guild) {
      return msg.channel.send("Cannot find server");
    }

    const queue = voice.queues.get(msg.guild.id);
    await queue.stop();
    await queue.player.stop();
    await queue.player.leave();
  },
};

export default leave;
