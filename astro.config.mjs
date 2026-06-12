// @ts-check
import { defineConfig, envField } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://westtneats.com',
  adapter: vercel(),
  env: {
    schema: {
      // Secrets are read at runtime (process.env on Vercel), never baked
      // into the build output.
      TURSO_DATABASE_URL: envField.string({ context: 'server', access: 'secret' }),
      TURSO_AUTH_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
});
