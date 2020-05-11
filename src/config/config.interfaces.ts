export interface UserConfig {
  prefix?: string;
  token?: string;
  userId?: string;
  lavalinkHost?: string;
  lavalinkPassword?: string;
  lavalinkPort?: string | number;
  logToFile?: boolean;
  logToConsole?: boolean;
  redisHost?: string;
  redisPort?: string | number;
}

export interface Config {
  prefix: string;
  token: string;
  userId: string;
  lavalinkHost: string;
  lavalinkPassword: string;
  lavalinkPort: string | number;
  logToFile: boolean;
  logToConsole: boolean;
  redisHost: string;
  redisPort: string | number;
}
