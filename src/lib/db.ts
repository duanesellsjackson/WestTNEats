import { createClient } from '@libsql/client';

export function getDb() {
  const url = import.meta.env.TURSO_DATABASE_URL;
  const authToken = import.meta.env.TURSO_AUTH_TOKEN;

  if (!url) {
    throw new Error('TURSO_DATABASE_URL is not set');
  }

  return createClient({ url, authToken });
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
