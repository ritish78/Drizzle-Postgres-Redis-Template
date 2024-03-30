/* eslint-disable prettier/prettier */
import "dotenv/config";
import { db } from "./src/db/db.ts";
import { user } from "./src/db/schema.ts";

async function seedDataToDB() {
  try {
    console.log("Deleting previous data");
    await db.delete(user);

    console.log("Inserting to DB!");
    await db.insert(user).values({
      id: "3fe0cb67-9bd1-45a5-8b4f-2b0a7e5d9e1c",
      firstName: "my",
      lastName: "name",
      phone: "1234567890"
    });
    console.log("Added to DB!");
  } catch (error) {
    console.error("Error while seeding data to db.", error);
  }
}

seedDataToDB();
