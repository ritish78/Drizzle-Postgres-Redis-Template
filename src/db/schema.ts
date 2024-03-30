import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, varchar, uuid } from "drizzle-orm/pg-core";

export const user = pgTable("User", {
  id: uuid("id").primaryKey().defaultRandom().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  phone: varchar("phone", { length: 10 }).unique()
});

export type User = InferSelectModel<typeof user>;
