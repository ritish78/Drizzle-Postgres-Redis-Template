import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "./db.ts";

//TODO: Make an async function with a try catch block for migration
migrate(db, { migrationsFolder: "./drizzle" });
