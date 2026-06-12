import type { APIRoute } from 'astro';
import { getDb } from '../../lib/db';
import { CITIES } from '../../lib/cities';

export const prerender = false;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// GET /api/trucks — all approved trucks, for the map pins.
export const GET: APIRoute = async () => {
  try {
    const db = await getDb();
    const result = await db.execute(
      "SELECT id, name, city, cuisine, hours, phone, instagram, lat, lng, created_at FROM trucks WHERE status = 'approved' ORDER BY name"
    );
    return json({ trucks: result.rows });
  } catch (err) {
    // Details go to the server logs only.
    console.error('GET /api/trucks failed:', err);
    return json({ error: 'Database error' }, 500);
  }
};

// POST /api/trucks — self-registration. New trucks start as pending.
export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'Invalid request body' }, 400);
  }

  const field = (key: string, max: number, required: boolean) => {
    const value = typeof data[key] === 'string' ? (data[key] as string).trim() : '';
    if (required && !value) throw new Error(`${key} is required`);
    if (value.length > max) throw new Error(`${key} is too long`);
    return value || null;
  };

  try {
    const name = field('name', 100, true);
    const owner = field('owner', 100, true);
    const city = field('city', 50, true);
    const cuisine = field('cuisine', 50, true);
    const hours = field('hours', 200, true);
    const phone = field('phone', 30, false);
    const instagram = field('instagram', 60, false);

    const coords = CITIES[city as string];
    if (!coords) throw new Error('city must be one of our covered cities');

    // Small random offset so trucks in the same city don't stack on one point.
    const jitter = () => (Math.random() - 0.5) * 0.02;
    const lat = coords.lat + jitter();
    const lng = coords.lng + jitter();

    const db = await getDb();
    await db.execute({
      sql: `INSERT INTO trucks (name, owner, city, cuisine, hours, phone, instagram, lat, lng, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`,
      args: [name, owner, city, cuisine, hours, phone, instagram, lat, lng],
    });

    return json({ ok: true }, 201);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Something went wrong';
    return json({ error: message }, 400);
  }
};
