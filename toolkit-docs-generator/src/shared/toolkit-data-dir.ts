/**
 * Where the generated toolkit JSON lives, shared by the Next.js docs app and
 * toolkit-docs-generator. Kept separate from `toolkit-primitives.ts` because
 * this module reaches for `node:path` / `node:url`: the primitives are pure
 * string helpers that client components pull in through the integrations
 * index, and a Node built-in anywhere in that import graph fails the webpack
 * browser build.
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

/**
 * toolkit-docs-generator/data/toolkits, resolved relative to this file rather
 * than `process.cwd()` — correct regardless of which directory a script or the
 * Next.js server happened to be started from.
 */
export const DEFAULT_TOOLKIT_DATA_DIR = join(
  HERE,
  "..",
  "..",
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
