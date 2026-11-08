

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add MONGODB_URI to your .env.local file");
}

const options = {};

declare global {
  var _mongoClient: MongoClient | undefined;
}

const client =
  global._mongoClient ?? new MongoClient(uri, options);

if (process.env.NODE_ENV !== "production") {
  global._mongoClient = client;
}

export const db = client.db("bazar_dor");
export default client;

export async function connectDB() {
  await client.connect();
  await db.command({ ping: 1 });
  return db;
}
