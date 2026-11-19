<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/8985666e-73cd-4ded-b1be-e8a8dcba83ff

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

Live site: https://julio-daligrp.github.io/lighthouse-studio/

The site is a static Vite build and uses hash-based routes (for example
`/#/servicios`), so it works from the `/lighthouse-studio/` subpath without
server rewrites. GitHub Pages serves the contents of the `gh-pages` branch
(**Settings → Pages → Source: Deploy from a branch → gh-pages / root**).

To publish changes:

1. `npm run build`
2. Copy the contents of `dist/` into a checkout of the `gh-pages` branch,
   replacing the previous files.
3. Commit and push that branch:
   `git add -A && git commit -m "Update site" && git push origin gh-pages`
