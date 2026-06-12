import type { Client } from '@libsql/client';
import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from 'astro:env/server';

let client: Client | undefined;

// The clients are imported dynamically so the native SQLite driver is only
// loaded for local file: databases. The node build of @libsql/client pulls in
// a platform-native binary at import time, which does not survive serverless
// bundling on Vercel; remote databases use the fetch-based web client instead.
export async function getDb(): Promise<Client> {
  if (client) return client;

  if (TURSO_DATABASE_URL.startsWith('file:')) {
    const { createClient } = await import('@libsql/client');
    client = createClient({ url: TURSO_DATABASE_URL });
  } else {
    const { createClient } = await import('@libsql/client/web');
    client = createClient({ url: TURSO_DATABASE_URL, authToken: TURSO_AUTH_TOKEN });
  }

  return client;
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
