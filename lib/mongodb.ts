import { MongoClient, Db } from 'mongodb';

// MongoDB URI and options
const uri = process.env.DB_URL as string;

if (!uri) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

let client: MongoClient | null = null;

// Singleton function to get the MongoDB client
async function getMongoClient(): Promise<MongoClient> {
  if (!client) {
    client = new MongoClient(uri, {});
    await client.connect();
  }
  return client;
}

// Helper function to get the database
export async function getDatabase(dbName: string): Promise<Db> {
  const client = await getMongoClient();
  return client.db(dbName);
}

export default getMongoClient;
