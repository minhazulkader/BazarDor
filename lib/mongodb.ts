import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add MONGODB_URI to .env.local");
}

let client: MongoClient;

declare global {
  var mongoClient: MongoClient | undefined;
}

if (process.env.NODE_ENV === "development") {
  client = global.mongoClient ?? new MongoClient(uri);
  global.mongoClient = client;
} else {
  client = new MongoClient(uri);
}

export const db = client.db("bazardor");
export default client;