import dotenv from "dotenv";
dotenv.config();

//Postgres Config
export const POSTGRES_URL = process.env.POSTGRES_URL;
export const POSTGRES_HOST = process.env.POSTGRES_HOST;
export const POSTGRES_PORT = Number(process.env.POSTGRES_PORT);
export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_USER = process.env.POSTGRES_USER;
