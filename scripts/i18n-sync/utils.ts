import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Cache, CacheEntries, TranslationOptions } from "./types.js";

// Constants
export const APP_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../app"
);
export const CACHE_DIR = path.join(APP_DIR, "../.i18n-cache");
export const CACHE_FILE = path.join(CACHE_DIR, "hashes.json");
export const CACHE_VERSION = "1.0.0";
export const SOURCE_LOCALE = "en";
export const TARGET_LOCALES = ["es", "pt-BR"];

export const trackedExtensions = new Set([
  ".mdx",
  ".ts",
  ".js",
  ".tsx",
  ".jsx",
]);
export const trackedMetaFiles = new Set(["_meta.ts", "_meta.tsx", "_meta.js"]);

export const DEFAULT_OPENAI_MODEL = "gpt-4o-mini";
export const TRANSLATION_TEMPERATURE = 0.2;
export const SPINNER_RESUME_DELAY_MS = 100;
export const MAX_CLEANUP_FILES_TO_SHOW = 5;
export const MAX_PRETTY_PATH_LENGTH = 80;
export const PRETTY_PATH_SUFFIX_LENGTH = 77;

// File utilities
export function readText(file: string) {
  return fs.readFile(file, "utf8");
}

export async function writeText(file: string, content: string) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, content);
}

export async function fileExists(file: string) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

export function hashContent(str: string) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

export function localePath(locale: string, rel: string) {
  return path.join(APP_DIR, locale, rel);
}

export function prettyPath(rel: string) {
  if (rel.length <= MAX_PRETTY_PATH_LENGTH) {
    return rel;
  }
  return `...${rel.slice(-PRETTY_PATH_SUFFIX_LENGTH)}`;
}

export function plural(count: number, suffix = "s") {
  return count !== 1 ? suffix : "";
}

// Cache utilities
export async function loadCache(): Promise<Cache> {
  try {
    const raw = await readText(CACHE_FILE);
    const cache = JSON.parse(raw);
    if (cache._metadata?.version === CACHE_VERSION) {
      return cache as Cache;
    }
  } catch (_error) {
    // Cache file is missing or invalid; fall back to a fresh cache.
  }
  return {
    _metadata: {
      version: CACHE_VERSION,
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
    },
    data: {},
  };
}

export async function saveCache(cache: Cache) {
  cache._metadata.updated = new Date().toISOString();
  await fs.mkdir(CACHE_DIR, { recursive: true });
  await writeText(CACHE_FILE, JSON.stringify(cache, null, 2));
}

// File filtering
export function isTrackedFile(filename: string) {
  return (
    trackedExtensions.has(path.extname(filename)) ||
    trackedMetaFiles.has(filename)
  );
}

export function shouldTranslateFile(
  rel: string,
  localeCache: CacheEntries,
  options: TranslationOptions
): boolean {
  if (options.only) {
    return rel === options.only;
  }
  return options.force || !localeCache[rel];
}
