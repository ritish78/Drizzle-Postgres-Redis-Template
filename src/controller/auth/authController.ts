import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

import db from "src/db";
import { user } from "src/model/user";

import hashPassword from "src/utils/hashPassword";
import { AuthError, BadRequestError } from "src/utils/error";

import { NUMBER_OF_SALT_ROUNDS } from "src/config";

/**
 * First, we make a function that retrieves user from the database.
 * We can use that function in auth and registering
 */
export const getUserByEmail = async (email: string) => {
  //Drizzle returns the result in the array even if we have set the limit of just 1 return
  //So, we destructure the array to get the user.
  console.log("Getting user of email:", email);
  const [userFromDatabase] = await db.select().from(user).where(eq(user.email, email)).limit(1);
  console.log(userFromDatabase);
  return userFromDatabase;
};

/**
 * @route                 /api/v1/auth/register
 * @method                POST
 * @desc                  Register new user
 * @access                Public
 * @param firstName       string
 * @param lastName        string
 * @param email           string
 * @param password        string
 * @param confirmPassword string
 * @param phone           string
 * @returns               void
 */

export const registerUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  phone: string
) => {
  //First let's check if the supplied password and confirmPassword matches
  if (password !== confirmPassword) {
    throw new BadRequestError("Mismatched Password!");
  }

  //Then, we check if an account of the supplied email already exists in our database
  const userFromDatabase = await getUserByEmail(email);

  //If user already requests, we throw error as one user should not be able
  //to signup more than once
  if (userFromDatabase) {
    throw new BadRequestError("User already exists! Login instead!");
  }

  //By default, hashPassword() function salts 10 times even if we don't specify the second parameter.
  const hashedPassword = await hashPassword(password, NUMBER_OF_SALT_ROUNDS);

  //Finally, storing the new user in the database! Yay!, new user.
  await db.insert(user).values({ firstName, lastName, email, password: hashedPassword, phone });
};

/**
 * @route           /api/v1/auth/login
 * @method          POST
 * @desc            Authenticate user
 * @access          Public
 * @param email     string
 * @param password  string
 * @returns         User Object
 */
export const authUser = async (email: string, password: string) => {
  const userFromDatabase = await getUserByEmail(email);

  //If user from supplied email does not exists, we throw an error.
  if (!userFromDatabase) {
    throw new AuthError("Invalid Credentials!");
  }

  //Then we compare the hash of password provided by user to the hashed password stored in database
  const passwordMatches = await bcrypt.compare(password, userFromDatabase.password);

  if (!passwordMatches) {
    throw new AuthError("Invalid Credentials!");
  }

  //If the checks of email and password is satisfied, we return the user that we selected from database
  return userFromDatabase;
};
