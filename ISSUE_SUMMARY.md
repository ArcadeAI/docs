# Module Resolution Issue Summary

## Problem
`pnpm dev` fails with module resolution errors for `@arcadeai/design-system` package.

## Root Cause
The `@arcadeai/design-system@3.28.2` package has:
1. `"type": "module"` in package.json (ESM package)
2. Exports field with "development" condition pointing to non-existent source files (`./lib/lib/*.ts`)
3. Only `dist/` directory is published to npm (per `"files": ["dist"]`)
4. Webpack in Next.js dev mode cannot resolve the package with pnpm's symlink structure

## What Works
- `pnpm build` - Production build works fine
- Node.js direct `require()` - Works fine
- Webpack in production mode - Works fine

## What Doesn't Work  
- `pnpm dev` - Webpack in dev mode fails to resolve the package

## Fixes Applied

### 1. Created Local Utils File
- Created `/app/_lib/utils.ts` with `cn()` and `getCookie()` functions
- Replaced all imports from `@arcadeai/design-system/lib/utils` with local imports
- This fixes the specific `/lib/utils` import issue

### 2. Next.js Configuration Updates
- Added `transpilePackages: ["@arcadeai/design-system"]`
- Added webpack config to disable cache and symlinks in dev mode
- These help but don't fully resolve the issue

## Remaining Issue
Webpack still cannot resolve the base `@arcadeai/design-system` import in dev mode.
Files like `app/not-found.tsx` and `app/_components/back-button.tsx` that import from the package root still fail.

## Recommended Solutions

### Short-term (Workarounds)
1. Use `pnpm build && pnpm start` instead of `pnpm dev` for local development
2. Create local wrapper components for all design-system components
3. Use npm instead of pnpm (may work better with webpack)

### Long-term (Package Fix Required)
The `@arcadeai/design-system` package needs to be updated to:
1. Remove or fix the "development" condition in exports field
2. Either publish source files or remove development condition
3. Test compatibility with pnpm + Next.js webpack dev mode

## Files Changed
- `app/_lib/utils.ts` - New file with utility functions
- `app/_components/analytics.tsx` - Updated import
- `app/_components/guide-overview.tsx` - Updated import
- `app/_components/integration-card.tsx` - Updated import
- `app/_components/platform-card.tsx` - Updated import
- `app/_components/tabbed-code-block/language-tabs.tsx` - Updated import
- `app/_components/translation-banner.tsx` - Updated import
- `app/not-found.tsx` - Updated import
- `app/en/resources/integrations/components/tool-card.tsx` - Updated import
- `app/en/resources/integrations/components/toolkits-client.tsx` - Updated import
- `next.config.ts` - Added transpilePackages and webpack config
