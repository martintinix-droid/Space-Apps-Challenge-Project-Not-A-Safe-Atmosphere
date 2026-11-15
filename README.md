# Astro Wreckage – Not A Safe Atmosphere

Static website (HTML/CSS/JS). No build step.

## Deploy on Render
1. Push this folder to a GitHub repo (files at the repo root).
2. Render dashboard → **New → Blueprint** → pick the repo (it reads `render.yaml`).
   - Or **New → Static Site** manually: Build Command blank, Publish Directory `.`
3. Deploy. The site is served at `https://<name>.onrender.com`.

## Notes
- The game on `game.html` is an iframe of an external Netlify site; it must stay online.
- `crew3.jpg` (Akshat's photo) was missing from the repo – add it to the root to replace the initial-letter placeholder.
