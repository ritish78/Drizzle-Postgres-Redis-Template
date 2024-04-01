import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, varchar, uuid } from "drizzle-orm/pg-core";

/**
 * Creating table using drizzle. We are using postgres like
 * sql commands to create table. Also helps in type definitions.
 * If you make change to the below table or creating the table for the first time follow;
 * To create SQL command for this table, cd into backend folder terminal and type:
 * `pnpm run migration:generate`
 * To push the generated SQL command to Postgres, in the terminal type:
 * `pnpm run migration:push`
 * Or, to generate and push from the same command, in the terminal type:
 * `pnpm run migrate`
 */
export const user = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom().unique(),
  firstName: varchar("first_name", { length: 30 }).notNull(),
  lastName: varchar("last_name", { length: 30 }).notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  phone: varchar("phone", { length: 10 }).unique()
});

export type User = InferSelectModel<typeof user>;
