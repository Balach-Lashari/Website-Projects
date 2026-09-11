# Urdu Sikho 🌸

A playful, colorful flashcard web app that helps English speakers learn beginner Urdu vocabulary — organized by category (Greetings, Numbers, Family, Colors, Food, Common Phrases).

## Features

- Six beginner categories, ~87 words total
- Each card shows Urdu script, romanized pronunciation, and English meaning together
- Next / Previous navigation (also works with ← → arrow keys)
- Shuffle button
- Mark cards "Known" or "Still Learning"
- Progress bars per category and overall, saved automatically in your browser (no account needed)

## Tech

Plain HTML, CSS, and vanilla JavaScript. No build step, no backend, no dependencies to install. Progress is stored in the browser's `localStorage`, so it's per-device/per-browser and stays even if you close the tab (it resets only if you clear your browser data).

## Running it locally

Just open `index.html` in your browser — that's it. (Or, for a local server, run `npx serve .` in this folder and visit the URL it prints.)

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `urdu-sikho`) and push this folder's contents to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Urdu Sikho flashcard app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/urdu-sikho.git
   git push -u origin main
   ```
2. On GitHub, go to your repository's **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`.
4. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
5. Wait a minute or two, then refresh the Pages settings page — it will show your live URL, something like:
   ```
   https://<your-username>.github.io/urdu-sikho/
   ```

That's it — no server to manage, and every future `git push` to `main` updates the live site automatically.

## Project structure

```
urdu-sikho/
├── index.html   # Page structure (home screen + flashcard screen)
├── style.css    # All styling
├── data.js      # Word data (categories + Urdu/transliteration/English)
├── script.js    # App logic (rendering, navigation, shuffle, progress)
└── README.md    # This file
```

## Adding more words

Open `data.js` and add entries to any category's `words` array, following the existing format:

```js
{ urdu: "مثال", translit: "Misaal", english: "Example" }
```

You can also add a whole new category by copying an existing category object and giving it a unique `id`.
