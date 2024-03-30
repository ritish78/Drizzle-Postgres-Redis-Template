import { drizzle } from "drizzle-orm/node-postgres";
import pkg from "pg";
const { Client } = pkg;

import {
  POSTGRES_URL,
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_PORT
} from "../config/config.ts";

// const client: pkg.Client = new Client({ connectionString: POSTGRES_URL });
const client: pkg.Client =
  process.env.NODE_ENV === "production"
    ? new Client({ connectionString: POSTGRES_URL })
    : new Client({
        host: POSTGRES_HOST,
        database: POSTGRES_DATABASE,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: POSTGRES_PORT
      });

export async function connectToPostgresDB() {
  await client.connect();
}

connectToPostgresDB();

export const db = drizzle(client);
