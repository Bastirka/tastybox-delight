# TODO: Fix Vercel Deployment 404 - Phase 2 (Static Adaptation)

## Previous Steps Complete:
- [x] vercel.json rewrites
- [x] Deps & build test
- [x] Git push

## New Steps:
- [x] 1. Create public/index.html for static SPA entry (loads TanStack client JS)

- [x] 2. Update vercel.json: add "outputDirectory": "./dist/client"

- [x] 3. Rebuild: `rm -rf dist && npx vite build` done (public/index.html copied to dist/client/index.html)

- [ ] 4. Git commit/push for redeploy
