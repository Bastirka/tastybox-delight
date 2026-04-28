# TODO: Fix Vercel Deployment 404

## Steps:
- [x] 1. Create vercel.json with SPA rewrites
- [x] 2. Test build: `npx vite build` succeeds, outputs dist/client/ (TanStack Start structure, Vercel uses dist/client for static SPA)

- [x] 3. Changes ready: Add/commit vercel.json, push to GitHub, Vercel will auto-redeploy. Test https://tastybox-delight.vercel.app/

