import { VoiceServerUpdate, VoiceStateUpdate } from "lavalink";

declare module "discord.js" {
  interface ClientEvents {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    raw: [Raw];
  }
}

interface Raw {
  t: string;
  d: StateUpdate;
}

interface StateUpdate extends VoiceServerUpdate, VoiceStateUpdate {}
