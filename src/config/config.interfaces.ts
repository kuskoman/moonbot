export interface UserConfig {
  prefix?: string;
  token?: string;
  userId?: string;
  lavalinkHost?: string;
  lavalinkPassword?: string;
  lavalinkPort?: string;
  logToFile?: boolean;
}

export interface Config {
  prefix: string;
  token: string;
  userId: string;
  lavalinkHost: string;
  lavalinkPassword: string;
  lavalinkPort: string;
  logToFile: boolean;
}
