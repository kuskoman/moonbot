/* Idk if it works and how it actually works
 * however it seems to do the right job
 * for 1 element *ba dum tish* */
export const getShardId = (
  guildId: string | number,
  numberOfshards: number
): number => {
  let guildNumber: number;

  if (typeof guildId === "string") {
    guildNumber = Number(guildId);
  } else {
    guildNumber = guildId;
  }

  return guildNumber >>> 22 % numberOfshards;
};
