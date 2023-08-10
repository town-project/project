// pages/api/connectToDatabase.ts

import { MongoClient, Db } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

let cachedDb: Db | null = null;

async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI!);

  const db = await client.db(process.env.MONGODB_DB!);
  cachedDb = db;
  console.log(db);

  return db;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDatabase();

  // Perform database operations here
  const collection = db.collection("test");
  const data = await collection.find({}).toArray();

  res.json({ data });
};


