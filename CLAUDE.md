# WestTNEats — Project Brain File
# CLAUDE.md | Jeepney Ventures, LLC
# Maintained by Duane Mangalindan

---

## What This Project Is

WestTNEats is a community-first food discovery platform for West Tennessee.
Layer 1 is an interactive map where food truck owners add themselves for free.
Layer 2 is a Facebook page that promotes each truck and tells their story.
Layer 3 is an Astro-powered SEO blog monetized with Google AdSense.

This is not a directory. It is a living map built by the community, for the community.

---

## The Mission

Put every food truck in West Tennessee literally on the map.
No gatekeeping. No fees. No barriers.
Special heart for underrepresented vendors — including Filipino food trucks in Martin and Henderson, TN.

---

## Territory

Primary corridor:
- Jackson, TN
- Milan, TN
- Dyersburg, TN
- Paris, TN

Extended coverage (open to all):
- Martin, TN
- Henderson, TN
- Humboldt, TN
- McKenzie, TN
- Huntingdon, TN

---

## Tech Stack

| Layer | Tool | Notes |
|-------|------|-------|
| Map (Layer 1) | Astro + Leaflet.js + Turso | Self-registration form |
| Blog (Layer 3) | Astro | SEO-first, AdSense ready |
| Hosting | Vercel | Same as TU Network Map |
| Backup | GitHub | Repo: WestTNEats |
| DNS | Cloudflare | Domain: WestTNEats.com |
| Database | Turso | Food truck submissions |

---

## Folder Structure

```
~/Documents/Projects/WestTNEats/    ← build layer (Claude Code works here)
~/Documents/Projects/DMBrain (Obsidian)/30-Projects/WestTNEats/    ← planning layer
```

---

## Brand Voice

- Conversational. Warm. Local pride.
- Short sentences. Mobile-first.
- 5th–8th grade reading level.
- Faith present but not performative.
- Community and service before money.
- No em dashes.
- No filler words: unlock, leverage, seamless, game-changer, dive in, vibrant.
- Tone: like a neighbor telling you about the best taco truck they just found.

---

## Content Rules

- Every food truck gets equal treatment on the map.
- Facebook posts highlight the owner story, not just the food.
- Blog content targets local search — city + food type keywords.
- No steering. No gatekeeping. No paid placement.
- Filipino food trucks in Martin and Henderson get proactive outreach.

---

## Facebook Page

Page name: WestTNEats
Purpose: Promote trucks, tell owner stories, drive map traffic.
Post formats: Truck spotlights, new additions, event callouts, community polls.
Tone: Same as brand voice above.
No compliance disclaimers needed (not a real estate page).

---

## SEO Strategy

Target keywords (Layer 3 blog):
- food trucks in Jackson TN
- food trucks in Dyersburg TN
- food trucks in Milan TN
- food trucks near me West Tennessee
- Filipino food truck Tennessee
- best food trucks West TN

Internal linking: Every blog post links back to the map.
Monetization: Google AdSense (display ads, auto-placed).

---

## Owner

Duane Mangalindan
Jeepney Ventures, LLC — "Built for the people. Powered by purpose."
Based in Humboldt, TN
Contact context: Faith-driven, community-first, Filipino-American entrepreneur.

---

## Build Order

1. Confirm folder structure ✅
2. Write CLAUDE.md ✅
3. Create Claude Project ✅
4. Scaffold Astro project in build folder
5. Build Leaflet.js map with Turso self-registration
6. Deploy to Vercel + connect WestTNEats.com via Cloudflare
7. Create Facebook page + profile/cover art
8. Launch Layer 3 blog with first 3 SEO posts
9. Submit to Google AdSense

---

## Notes for Claude Code

- Always read this file before making any changes.
- Build mobile-first. Most food truck customers find trucks on their phones.
- Keep the map fast. No heavy libraries unless necessary.
- Self-registration form must be simple — truck name, owner name, location, cuisine type, hours, phone/Instagram.
- Every commit message should be clear and descriptive.
