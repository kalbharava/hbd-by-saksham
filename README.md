# Birthday-V3 — Merged Cake Animation

This repository contains a small demo that merges a birthday cake animation into the Birthday-V3 project.

## Features
- Animated cake with three layers
- Floating candle with realistic flame flicker
- Click / keyboard toggle to blow out / relight the candle
- Optional background "Happy Birthday" music (included)
- Accessible controls and simple responsive layout

## Files
- `index.html` — demo page
- `style.css` — main page styles
- `cake.css` — cake + animation styles
- `script.js` — interaction (toggle candle, play music)
- `audio/happy-birthday.mp3` — optional audio (placeholder)

## How to run locally (quick)
1. Clone the repo:
   ```bash
   git clone <your-repo-url>.git
   cd Birthday-V3
   ```

2. Serve locally (recommended — some browsers block local file audio):
   ```bash
   # Python 3
   python -m http.server 8000
   # then open http://localhost:8000 in your browser
   ```

## GitHub-ready steps
1. Create a new repository on GitHub (e.g. `Birthday-V3`).
2. Push this project:
   ```bash
   git init
   git add .
   git commit -m "Add Birthday cake animation merged into Birthday-V3"
   git remote add origin https://github.com/<your-username>/Birthday-V3.git
   git branch -M main
   git push -u origin main
   ```

## Notes
- The `audio/happy-birthday.mp3` file in this package is a placeholder. If you see no sound, modern browsers may block autoplay — click the 'Play Birthday Music' button.
- The demo is intentionally self-contained and dependency-free.
