/**
 * Where the generated toolkit JSON lives, shared by the Next.js docs app and
 * toolkit-docs-generator. Kept separate from `toolkit-primitives.ts` because
 * this module reaches for `node:path`: the primitives are pure string helpers
 * that client components pull in through the integrations index, and a Node
 * built-in anywhere in that import graph fails the webpack browser build.
 */

import { join } from "node:path";

/**
 * toolkit-docs-generator/data/toolkits, relative to the repo root.
 *
 * Anchored on `process.cwd()` rather than this file's own location, because
 * this module is bundled into the Next.js server build. Webpack replaces
 * `import.meta.url` with a compile-time constant — the absolute path of the
 * source file on the build machine — so a self-relative path resolves to a
 * build-time directory that does not exist in the deployed function, and
 * `/api/toolkit-data/[toolkitId]` fails at runtime. `process.cwd()` is the
 * repo root during `next build`/`next dev` and the function root at runtime,
 * and Next.js file tracing recognizes it well enough to ship the JSON.
 *
 * Every entry point here (root `pnpm` scripts, CI workflows, Vitest) runs from
 * the repo root; anything that doesn't can set `TOOLKIT_DATA_DIR`.
 */
export const DEFAULT_TOOLKIT_DATA_DIR = join(
  process.cwd(),
  "toolkit-docs-generator",
  "data",
  "toolkits"
);

/**
 * Resolve the toolkit data directory: an explicit override wins, then the
 * `TOOLKIT_DATA_DIR` env var (used by tests and CI to point at a fixture or
 * scratch copy), then the real generator output directory.
 */
export function resolveToolkitDataDir(override?: string): string {
  return override ?? process.env.TOOLKIT_DATA_DIR ?? DEFAULT_TOOLKIT_DATA_DIR;
}
