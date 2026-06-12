import type { Client } from '@libsql/client';
import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from 'astro:env/server';

// Kept in sync with scripts/setup-db.mjs. Runs once per server instance so a
// fresh database (new environment, new Turso instance) initializes itself.
const SCHEMA_SQL = `
  CREATE TABLE IF NOT EXISTS trucks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    owner TEXT NOT NULL,
    city TEXT NOT NULL,
    cuisine TEXT NOT NULL,
    hours TEXT NOT NULL,
    phone TEXT,
    instagram TEXT,
    lat REAL NOT NULL,
    lng REAL NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved')),
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`;

let clientPromise: Promise<Client> | undefined;

// The clients are imported dynamically so the native SQLite driver is only
// loaded for local file: databases. The node build of @libsql/client pulls in
// a platform-native binary at import time, which does not survive serverless
// bundling on Vercel; remote databases use the fetch-based web client instead.
async function createDb(): Promise<Client> {
  let client: Client;
  if (TURSO_DATABASE_URL.startsWith('file:')) {
    const { createClient } = await import('@libsql/client');
    client = createClient({ url: TURSO_DATABASE_URL });
  } else {
    const { createClient } = await import('@libsql/client/web');
    client = createClient({ url: TURSO_DATABASE_URL, authToken: TURSO_AUTH_TOKEN });
  }
  await client.execute(SCHEMA_SQL);
  return client;
}

export function getDb(): Promise<Client> {
  // Reset on failure so a transient error does not poison the cache.
  clientPromise ??= createDb().catch((err) => {
    clientPromise = undefined;
    throw err;
  });
  return clientPromise;
}

export interface Truck {
  id: number;
  name: string;
  owner: string;
  city: string;
  cuisine: string;
  hours: string;
  phone: string | null;
  instagram: string | null;
  lat: number;
  lng: number;
  status: 'pending' | 'approved';
}
