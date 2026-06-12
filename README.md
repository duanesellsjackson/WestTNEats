# WestTNEats

A community-first food discovery platform for West Tennessee.
Built by Jeepney Ventures, LLC.

- **Layer 1**: Interactive map (Leaflet.js + Turso) where food truck owners add themselves for free
- **Layer 2**: Facebook page that promotes each truck and tells their story
- **Layer 3**: Astro-powered SEO blog monetized with Google AdSense

## Project structure

```text
/
├── public/                 Static assets
├── src/
│   ├── components/
│   │   └── map/            Layer 1: Leaflet map components (next step)
│   ├── content/
│   │   └── blog/           Layer 3: blog posts (markdown)
│   ├── layouts/            Shared page layouts
│   ├── lib/                Turso client and helpers (next step)
│   ├── pages/              Routes: /, /map/, /blog/
│   └── styles/             Global mobile-first CSS
└── astro.config.mjs
```

## Commands

| Command           | Action                                  |
| :---------------- | :-------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start dev server at `localhost:4321`    |
| `npm run build`   | Build production site to `./dist/`      |
| `npm run preview` | Preview the build locally               |

## Deployment

Hosted on Vercel. Domain WestTNEats.com via Cloudflare DNS.
