import path from "node:path";
import { fileURLToPath } from "node:url";

// ========== PATHS ==========
export const MODULE_FILENAME = fileURLToPath(import.meta.url);
export const MODULE_DIRNAME = path.dirname(MODULE_FILENAME);
export const PROJECT_ROOT = path.resolve(MODULE_DIRNAME, "../..");
export const APP_DIR = path.join(PROJECT_ROOT, "app");
export const CACHE_DIR = path.join(PROJECT_ROOT, ".i18n-cache");
export const CACHE_FILE = path.join(CACHE_DIR, "hashes.json");
export const CACHE_VERSION = "2.0.0";

// ========== CONSTANTS ==========
export const sourceLocale = "en" as const;
export const trackedExtensions = new Set([
  ".mdx",
  ".ts",
  ".js",
  ".tsx",
  ".jsx",
]);
export const trackedMetaFiles = new Set(["_meta.ts", "_meta.tsx", "_meta.js"]);

// ========== PROCESSING CONFIGURATION ==========
export const PROGRESS_UPDATE_FREQUENCY = 20;
export const MAX_BATCH_TOKENS = 15_000;
export const ESTIMATED_TOKENS_PER_CHAR = 0.25;

export const THRESHOLDS = {
  largeFile: 5000,
  veryLargeFile: 20_000,
};

export const RATE_LIMIT = {
  initialDelayMs: 100,
  maxDelayMs: 5000,
  delayMultiplier: 2,
  retryCount: 3,
};

// ========== UI CONSTANTS ==========
export const PROGRESS_BAR_WIDTH = 20;
export const HEADER_WIDTH = 40;
export const FOOTER_WIDTH = 50;
export const ERROR_MESSAGE_MAX_LENGTH = 80;
export const HASH_PREVIEW_LENGTH = 12;

// ========== REGEX PATTERNS ==========
export const META_EXPORT_REGEX = /export\s+default\s+\{([\s\S]*?)\}\s*;?/;
export const NEWLINE_REGEX = /\r?\n/;
export const CODE_FENCE_REGEX = /^```/;
