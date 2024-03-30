import type { Config } from "drizzle-kit";
import { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE, POSTGRES_PORT } from "./src/config/config";

export default {
  driver: "pg",
  schema: "./src/db/schema.ts",
  out: "./src/drizzle",
  dbCredentials: {
    host: process.env.DB_HOST as string,
    port: POSTGRES_PORT as number,
    user: POSTGRES_USER as string,
    password: POSTGRES_PASSWORD as string,
    database: POSTGRES_DATABASE as string
  },
  //Print all messages/statements
  verbose: true,
  //Always ask for confirmation
  strict: true
} satisfies Config;
