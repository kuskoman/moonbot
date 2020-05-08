export interface UserConfig {
  prefix?: string;
  token?: string;
  userId?: string;
  lavalink?: {
    host?: string;
    password?: string;
    port?: string;
  };
  logToFile?: boolean;
}

export interface Config {
  prefix: string;
  token: string;
  userId: string;
  lavalink: {
    host: string;
    password: string;
    port: string;
  };
  logToFile: boolean;
}
