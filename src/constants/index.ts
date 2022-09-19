import { config } from "dotenv";
config();

export const APP_BASE_URL = process.env.APP_BASE_URL!!;

export const CLIENT_URL = process.env.CLIENT_URL!!;
