import dotenv from "dotenv";
dotenv.config();

//Express Config
export const EXPRESS_SERVER_PORT = process.env.EXPRESS_SERVER_PORT || 5000;

//Postgres Config
export const POSTGRES_URL = process.env.POSTGRES_URL;
export const POSTGRES_HOST = process.env.POSTGRES_HOST;
export const POSTGRES_PORT = Number(process.env.POSTGRES_PORT);
export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_USER = process.env.POSTGRES_USER;

//Salt Rounds
export const NUMBER_OF_SALT_ROUNDS = 10;

//Redis Config
export const REDIS_URL = process.env.REDIS_URL;
export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PORT = Number(process.env.REDIS_PORT);
export const REDIS_SECRET = process.env.REDIS_SECRET || "";

//JWT Secrets
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
export const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_TOKEN;
