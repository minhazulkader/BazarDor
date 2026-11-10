import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const databaseUri =
  process.env.MONGODB_URI || process.env.DATABASE_URI;

if (!databaseUri) {
  throw new Error("MONGODB_URI or DATABASE_URI is missing");
}

const client = new MongoClient(databaseUri);

const db = client.db(process.env.MONGODB_DB_NAME || "bazar-dor");

const baseURL =
  process.env.BETTER_AUTH_URL ||
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL;

if (!baseURL) {
  throw new Error("BETTER_AUTH_URL is missing");
}

export const auth = betterAuth({
  baseURL,

  trustedOrigins: [
    baseURL,
    "http://localhost:3000",
  ],

  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },

    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});