# aemilius.dev
Personal site and portfolio of Aimilios Seimenis.

Built with Next.js (pages router) and Tailwind CSS, deployed on Vercel.

## Run locally
```bash
npm ci
npm run dev
```
Then open http://localhost:3000.

## Where things live
- `pages/` – one file per route (home, about, games, photo/video, music)
- `components/` – shared UI
- `utils/games.js` – the games list; `featured: true` also shows a game on the home page
- `public/` – images, CV, and the playable WebGL builds
