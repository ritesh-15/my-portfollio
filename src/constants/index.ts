import { config } from "dotenv";
config();

export const APP_BASE_URL = process.env.APP_BASE_URL!!;

export const CLIENT_URL = process.env.CLIENT_URL!!;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!!;

export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET!!;

export const CLOUD_NAME = process.env.CLOUD_NAME!!;

export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY!!;

export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET!!;
