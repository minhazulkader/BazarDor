import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is missing in .env.local");
}

const dbName = process.env.MONGODB_DB_NAME || "bazar-dor";

const globalForMongo = globalThis as typeof globalThis & {
  mongoClient?: MongoClient;
};

export const client =
  globalForMongo.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

export const db = client.db(dbName);