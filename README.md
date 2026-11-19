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

The site is a static Vite build and uses hash-based routes (for example
`/#/servicios`), so it works from any repository subpath without server rewrites.

1. Create a GitHub repository and push this folder to it (`main` or `master`).
2. In the repo, go to **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions**.
4. Push again (or run the `Deploy to GitHub Pages` workflow manually). The
   workflow in `.github/workflows/deploy.yml` builds `dist/` and deploys it.

The site will be available at `https://<username>.github.io/<repo-name>/`.
