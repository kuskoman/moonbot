import { getConfig } from "./loader";
import { validate } from "./checker";
import { Config } from "./config.interfaces";

const config = getConfig();
validate(config);
const validatedConfig = config as Config;
export default validatedConfig;
