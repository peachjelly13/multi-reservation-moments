import dotenv from 'dotenv'; 
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../../../.env')
});

import { z } from "zod";
import { zpStr } from "./zpStr.ts";
import {logger} from "./logger.ts";

// console.log('ENV VARS:', {
//   user: process.env.user,
//   password: process.env.password,
//   host: process.env.host,
//   port: process.env.port,
//   database: process.env.database,
// });

//only for testing purposes

const envSchema = z.object({
    connectionString: zpStr(z.string().describe("Postgres database connection string")).default(
      `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`
    ),
    host:zpStr(z.string().describe("Postgres database host")).default("localhost"),
    port: z.coerce.number(),
    user:zpStr(z.string().describe("Postgres database user")),
    database:zpStr(z.string().describe("Postgres database name")),
    password:zpStr(z.string().describe("Postgres database password")),
    PORT:  z.coerce.number()
})

const parsed = envSchema.safeParse(process.env);
// Format of parsed object
//{ success: boolean, data?: T, error?: ZodError }

// Check if the parsed object is valid if not then which env variable is invalid
if (!parsed.success) {
  logger.error("Invalid environment variables:");
  const formatted = parsed.error.format();
  for (const key of Object.keys(envSchema.shape) as (keyof typeof envSchema.shape)[]) {
    const issues = formatted[key]?._errors;
    if (issues && issues.length > 0) {
      for (const issue of issues) {
        logger.error(`${key}: ${issue}`);
      }
    }
  }
  process.exit(1);
}


export const env = parsed.data;
logger.info("Environment variables loaded successfully");

