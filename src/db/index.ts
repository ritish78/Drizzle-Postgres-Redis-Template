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
} from "../config";

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
  try {
    console.log("Connecting to PostgreSQL. Won't take long!");
    await client.connect();
    console.log("Connected to PostgreSQL!");
  } catch (error) {
    console.error("Error while connecting to postgress!");
    process.exit(1);
  }
}

// connectToPostgresDB();

const db = drizzle(client);

export default db;
