import dotenv from "dotenv";
dotenv.config();

import { z } from "zod";

/**
 * Creating a schema to check the environment variables.
 * If these fields, don't satisfy then Zod will throw error
 *
 */
const environmentVariableSchema = z.object({
  //Check for Node Environment
  NODE_ENV: z.enum(["development", "test", "production"]),
  //Check for Express config
  EXPRESS_ENV: z.string().trim().min(1),
  //Postgres URL and other environment variables for Postgres
  POSTGRES_URL: z.string().optional(),
  POSTGRES_HOST: z.string().trim().min(1),
  POSTGRES_PORT: z.number().positive().int(),
  POSTGRES_DATABASE: z.string().trim().min(1),
  POSTGRES_PASSWORD: z.string().trim().min(1),
  POSTGRES_USER: z.string().trim().min(1),

  //Redis URL and other environment variables for Redis
  REDIS_URL: z.string().optional(),
  REDIS_HOST: z.string().trim().min(1),
  REDIS_PORT: z.number().positive().int(),
  // REDIS_SECRET: z.string().trim().min(1),

  //JWT and its tokens
  JWT_SECRET: z.string().trim().min(1),
  JWT_REFRESH_TOKEN: z.string().trim().min(1),
  JWT_ACCESS_TOKEN: z.string().trim().min(1)
});

/**
 * Now, we load the environment variables
 */
try {
  environmentVariableSchema.parse(process.env);
} catch (error) {
  throw new Error("Please specify all environment variables");
}

type EnvSchemaType = z.infer<typeof environmentVariableSchema>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends EnvSchemaType {}
  }
}
