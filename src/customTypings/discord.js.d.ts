import { ClientEvents } from "discord.js";

declare module "discord.js" {
  interface ClientEvents extends ClientEvents {
    raw: unknown;
  }
}
