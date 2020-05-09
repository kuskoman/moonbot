import { Track } from "lavalink";
import { voice } from "../modules/voice";

export const findOnYouTube = async (query: string): Promise<Track> => {
  const res = await voice.load(`ytsearch:${query}`);
  return res.tracks[0];
};
