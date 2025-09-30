import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import pc from "picocolors";
import {
  APP_DIR,
  CACHE_DIR,
  CACHE_FILE,
  CACHE_VERSION,
  CODE_FENCE_REGEX,
  ERROR_MESSAGE_MAX_LENGTH,
  ESTIMATED_TOKENS_PER_CHAR,
  HASH_PREVIEW_LENGTH,
  MAX_BATCH_TOKENS,
  META_EXPORT_REGEX,
  NEWLINE_REGEX,
  sourceLocale,
} from "../lib/constants";
import { logger } from "../lib/logger";
import type {
  CacheShape,
  FileType,
  FileTypeHandler,
  PerFileEntry,
} from "../types";
import { ValidationError } from "../types";

/**
 * Sleep for the specified number of milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Rate limiting wrapper for API calls
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: retry logic with branching is deliberate and readable
export async function withRateLimit<T>(
  apiCall: () => Promise<T>,
  retries = 3
): Promise<T> {
  const InitialDelayMs = 100;
  const MaxDelayMs = 5000;
  const DelayMultiplier = 2;
  let delay = InitialDelayMs;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      if (attempt > 0) {
        await sleep(delay);
        delay = Math.min(delay * DelayMultiplier, MaxDelayMs);
      }

      return await apiCall();
    } catch (error) {
      // Check if it's a rate limit error or server error that might be transient
      const isRateLimit =
        error instanceof Error &&
        (error.message.includes("rate limit") ||
          error.message.includes("429") ||
          error.message.includes("quota"));

      const isRetryableError =
        error instanceof Error &&
        (error.message.includes("500") ||
          error.message.includes("502") ||
          error.message.includes("503") ||
          error.message.includes("504") ||
          error.message.includes("timeout") ||
          error.message.includes("network"));

      if ((isRateLimit || isRetryableError) && attempt < retries) {
        const reason = isRateLimit ? "Rate limit hit" : "Server error";
        logger.info(
          `${pc.dim("│")} ${pc.yellow(`${reason}, retrying...`)} ${pc.dim(`attempt ${attempt + 1}/${retries}`)}`
        );
        continue;
      }

      throw error;
    }
  }

  throw new Error(`Rate limit exceeded after ${retries} retries`);
}

/**
 * Process items in parallel with controlled concurrency
 */
export async function processInParallel<T, R>(
  items: T[],
  processor: (item: T, index: number) => Promise<R>,
  concurrency = 5
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  const executing: Promise<void>[] = [];

  let index = 0;

  const processNext = async (): Promise<void> => {
    const currentIndex = index++;
    if (currentIndex >= items.length) {
      return;
    }

    results[currentIndex] = await processor(items[currentIndex], currentIndex);

    // Process next item
    await processNext();
  };

  // Start initial batch of concurrent processes
  for (let i = 0; i < Math.min(concurrency, items.length); i++) {
    executing.push(processNext());
  }

  await Promise.all(executing);
  return results;
}

/**
 * Load or initialize the translation cache with metadata
 */
export async function loadCache(): Promise<CacheShape> {
  try {
    const raw = await fs.readFile(CACHE_FILE, "utf8");
    const parsed = JSON.parse(raw);

    // Handle legacy cache format (without metadata)
    if (!parsed._metadata) {
      return {
        _metadata: {
          version: CACHE_VERSION,
          created: new Date().toISOString(),
          updated: new Date().toISOString(),
        },
        data: parsed,
      };
    }

    // Check if we need to upgrade the cache version
    if (parsed._metadata.version !== CACHE_VERSION) {
      logger.warn(
        `Cache version mismatch. Expected ${CACHE_VERSION}, found ${parsed._metadata.version}. Upgrading...`
      );
      return {
        _metadata: {
          version: CACHE_VERSION,
          created: parsed._metadata.created,
          updated: new Date().toISOString(),
        },
        data: parsed.data || parsed,
      };
    }

    return parsed;
  } catch {
    // Create new cache
    return {
      _metadata: {
        version: CACHE_VERSION,
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
      },
      data: {},
    };
  }
}

/**
 * Save cache with updated timestamp
 */
export async function saveCache(cache: CacheShape): Promise<void> {
  await fs.mkdir(CACHE_DIR, { recursive: true });
  cache._metadata.updated = new Date().toISOString();
  await fs.writeFile(CACHE_FILE, JSON.stringify(cache, null, 2));
}

/**
 * Generate SHA256 hash of content
 */
export function sha256(content: string): string {
  return crypto.createHash("sha256").update(content).digest("hex");
}

/**
 * Generate content hash for change detection
 */
export function getContentHash(content: string, fileType: FileType): string {
  // For better change detection, hash only the translatable content
  let hashableContent = content;

  if (fileType === "meta") {
    // Only hash the object content for meta files
    hashableContent = extractMetaObject(content) ?? content;
  } else if (fileType === "mdx") {
    // For MDX, normalize whitespace and remove code blocks for more stable hashing
    hashableContent = content
      .replace(/```[\s\S]*?```/g, "[CODE_BLOCK]") // Replace code blocks
      .replace(/`[^`]+`/g, "[INLINE_CODE]") // Replace inline code
      .replace(/\s+/g, " ") // Normalize whitespace
      .trim();
  }

  return sha256(normalizeWhitespace(hashableContent));
}

/**
 * Read text file content
 */
export function readText(filePath: string): Promise<string> {
  return fs.readFile(filePath, "utf8");
}

/**
 * Write text content to file
 */
export async function writeText(
  filePath: string,
  content: string
): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content);
}

/**
 * Check if file exists
 */
export async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Create locale-specific path
 */
export function toLocalePath(locale: string, relFromApp: string): string {
  return path.join(APP_DIR, locale, relFromApp);
}

/**
 * Normalize whitespace for consistent hashing
 */
export function normalizeWhitespace(str: string): string {
  // Keep formatting stable for hashing while not altering meaningful content
  return str.replace(/[\r\t ]+$/gm, "");
}

/**
 * Get language name for locale
 */
export function getLanguageName(locale: string): string {
  if (locale === "pt-BR") {
    return "Brazilian Portuguese";
  }
  if (locale === "es") {
    return "Spanish";
  }
  return locale;
}

/**
 * Extract meta object content from file
 */
export function extractMetaObject(content: string): string | null {
  const match = content.match(META_EXPORT_REGEX);
  if (!match) {
    return null;
  }
  return match[1] ?? null;
}

/**
 * Reconstruct meta file content
 */
export function reconstructMeta(contentBody: string): string {
  return `export default {\n${contentBody}\n};\n`;
}

/**
 * Sanitize meta body content
 */
export function sanitizeMetaBody(raw: string): string {
  // Remove markdown code fences
  const withoutFences = raw
    .split(NEWLINE_REGEX)
    .filter((line) => !CODE_FENCE_REGEX.test(line.trim()))
    .join("\n")
    .trim();

  // If it contains an export default block, extract again
  const exportMatch = withoutFences.match(META_EXPORT_REGEX);
  if (exportMatch?.[1]) {
    return exportMatch[1].trim();
  }

  // If it is a full object literal, strip the outer braces
  const startsWithBrace = withoutFences.startsWith("{");
  const endsWithBrace = withoutFences.endsWith("}");
  if (startsWithBrace && endsWithBrace) {
    const inner = withoutFences.slice(1, -1).trim();
    return inner;
  }

  return withoutFences;
}

/**
 * Sanitize MDX wrapping fences
 */
export function sanitizeMdxWrappingFences(raw: string): string {
  const lines = raw.split(NEWLINE_REGEX);
  let start = 0;
  let end = lines.length - 1;

  while (start <= end && lines[start].trim() === "") {
    start += 1;
  }
  while (end >= start && lines[end].trim() === "") {
    end -= 1;
  }

  if (start > end) {
    return raw;
  }

  const first = lines[start].trim();
  const last = lines[end].trim();

  if (CODE_FENCE_REGEX.test(first) && CODE_FENCE_REGEX.test(last)) {
    const kept = [
      ...lines.slice(0, start),
      ...lines.slice(start + 1, end),
      ...lines.slice(end + 1),
    ];
    return kept.join("\n");
  }

  return raw;
}

/**
 * Validate translation quality
 */
export function validateTranslation(
  original: string,
  translated: string,
  fileType: FileType,
  handler?: FileTypeHandler
): { valid: boolean; issues: string[] } {
  const issues: string[] = [];

  // Use provided handler or get default
  let fileHandler = handler;
  if (!fileHandler) {
    let sampleName = "file.tsx";
    if (fileType === "mdx") {
      sampleName = "file.mdx";
    } else if (fileType === "meta") {
      sampleName = "_meta.ts";
    }
    fileHandler = getFileTypeHandler(sampleName);
  }

  // Basic validation from handler
  if (!fileHandler.validateOutput(translated)) {
    issues.push("Output format validation failed");
  }

  // Check for prompt markers
  if (
    translated.includes("CONTENT START") ||
    translated.includes("CONTENT END")
  ) {
    issues.push("Contains prompt markers");
  }

  // For MDX files, check tag count preservation
  if (fileType === "mdx") {
    const originalTags = (original.match(/<[^>]+>/g) || []).length;
    const translatedTags = (translated.match(/<[^>]+>/g) || []).length;
    if (originalTags !== translatedTags) {
      issues.push(`Tag count mismatch: ${originalTags} vs ${translatedTags}`);
    }
  }

  return { valid: issues.length === 0, issues };
}

/**
 * Sanitize error messages
 */
export function sanitizeError(error: unknown): string {
  const msg = error instanceof Error ? error.message : String(error);

  // Redact API keys
  const redacted = msg.replace(/sk-[a-zA-Z0-9]{48}/g, "sk-***REDACTED***");

  // Truncate long error messages
  return redacted.length > ERROR_MESSAGE_MAX_LENGTH
    ? `${redacted.slice(0, ERROR_MESSAGE_MAX_LENGTH)}...`
    : redacted;
}

/**
 * Estimate token count for content
 */
export function estimateTokenCount(content: string): number {
  return Math.ceil(content.length * ESTIMATED_TOKENS_PER_CHAR);
}

/**
 * Create batches for processing
 */
export function createBatches(
  files: PerFileEntry[],
  noBatch = false,
  customBatchSize = 10
): PerFileEntry[][] {
  if (noBatch) {
    // Return each file as its own batch when batching is disabled
    return files.map((file) => [file]);
  }

  const batches: PerFileEntry[][] = [];
  let currentBatch: PerFileEntry[] = [];
  let currentBatchTokens = 0;

  for (const file of files) {
    // Group by file type for consistent prompting
    const needsNewBatch =
      currentBatch.length >= customBatchSize ||
      currentBatchTokens + estimateTokenCount(file.src) > MAX_BATCH_TOKENS ||
      (currentBatch.length > 0 && currentBatch[0].fileType !== file.fileType);

    if (needsNewBatch && currentBatch.length > 0) {
      batches.push(currentBatch);
      currentBatch = [];
      currentBatchTokens = 0;
    }

    currentBatch.push(file);
    currentBatchTokens += estimateTokenCount(file.src);
  }

  if (currentBatch.length > 0) {
    batches.push(currentBatch);
  }

  return batches;
}

/**
 * Collect source files for translation
 */
export function collectSourceFiles(): Promise<string[]> {
  const sourceRoot = path.join(APP_DIR, sourceLocale);

  async function walk(currentDir: string, baseRel: string): Promise<string[]> {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    const collected: string[] = [];

    const tasks = entries.map(async (entry) => {
      const abs = path.join(currentDir, entry.name);
      const rel = baseRel ? path.join(baseRel, entry.name) : entry.name;

      if (entry.isDirectory()) {
        const nested = await walk(abs, rel);
        if (nested.length > 0) {
          collected.push(...nested);
        }
        return;
      }

      if (
        entry.isFile() &&
        (isTrackedFile(entry.name) || isMetaFile(entry.name))
      ) {
        collected.push(rel);
      }
    });

    await Promise.all(tasks);
    return collected;
  }

  return walk(sourceRoot, "");
}

/**
 * Check if file is tracked for translation
 */
export function isTrackedFile(file: string): boolean {
  const trackedExtensions = new Set([".mdx", ".ts", ".js", ".tsx", ".jsx"]);
  return trackedExtensions.has(path.extname(file));
}

/**
 * Check if file is a meta file
 */
export function isMetaFile(file: string): boolean {
  const trackedMetaFiles = new Set(["_meta.ts", "_meta.tsx", "_meta.js"]);
  return trackedMetaFiles.has(file);
}

/**
 * Get file type for processing
 */
export function getFileType(fileName: string): FileType {
  if (isMetaFile(fileName)) {
    return "meta";
  }
  if (fileName === "layout.tsx") {
    return "layout";
  }
  if (path.extname(fileName) === ".mdx") {
    return "mdx";
  }
  // For .ts, .js, .tsx, .jsx files that are not meta or layout
  return "tsx";
}

/**
 * Select files to process based on options
 */
export function selectFilesToProcess(
  perFile: PerFileEntry[],
  options: { forceAll: boolean; forceFile: string | null }
): PerFileEntry[] {
  const isForceAll = options.forceAll === true;
  const forcedRel =
    typeof options.forceFile === "string" ? options.forceFile : null;
  if (isForceAll) {
    return forcedRel ? perFile.filter((f) => f.rel === forcedRel) : perFile;
  }
  if (forcedRel) {
    return perFile.filter((f) => f.rel === forcedRel);
  }
  // Skip files that have matching hash in cache (already processed)
  return perFile.filter((f) => f.hash !== f.cachedHash);
}

/**
 * Build per-file entries for processing
 */
export function buildPerFileEntries(
  sourceFiles: string[],
  locale: string,
  localeCache: Record<string, string>
): Promise<PerFileEntry[]> {
  return Promise.all(
    sourceFiles.map(async (fileName) => {
      const rel = fileName;
      const srcPath = toLocalePath(sourceLocale, rel);
      const tgtPath = toLocalePath(locale, rel);
      const fileType = getFileType(fileName);

      const [src, targetExists] = await Promise.all([
        readText(srcPath),
        exists(tgtPath),
      ]);

      const hash = getContentHash(src, fileType);
      const cachedHash = localeCache[rel];

      return {
        rel,
        src,
        hash,
        srcPath,
        tgtPath,
        fileType,
        targetExists,
        cachedHash,
        size: src.length,
      } as PerFileEntry;
    })
  );
}

/**
 * Get file type handler for processing
 */
export function getFileTypeHandler(fileName: string): FileTypeHandler {
  // Import here to avoid circular dependency
  const { getFileTypeHandler: getHandler } = require("../handlers");
  return getHandler(fileName);
}

/**
 * Add file to translation cache
 */
export async function addFileToCache(filePath: string): Promise<void> {
  const cache = await loadCache();
  const sourceFiles = await collectSourceFiles();

  if (!sourceFiles.includes(filePath)) {
    throw new ValidationError(
      `File not found under app/${sourceLocale}: ${filePath}`
    );
  }

  const srcPath = toLocalePath(sourceLocale, filePath);
  const src = await readText(srcPath);
  const fileType = getFileType(path.basename(filePath));
  const hash = getContentHash(src, fileType);

  logger.info("");
  logger.info(logger.formatHeader(`${"📄"} Adding File to Cache`));
  logger.info(logger.formatSubHeader("📄", "File:", filePath));
  logger.info(
    logger.formatSubHeader(
      "🔒",
      "Hash:",
      `${hash.slice(0, HASH_PREVIEW_LENGTH)}...`
    )
  );
  logger.info("");

  for (const locale of ["es", "pt-BR"]) {
    const localeCache = cache.data[locale] || {};
    localeCache[filePath] = hash;
    cache.data[locale] = localeCache;

    logger.info(
      logger.formatSuccess("✅", `Added to ${locale.toUpperCase()} cache`)
    );
  }

  await saveCache(cache);

  logger.info("");
  logger.info(
    logger.formatSuccess(
      "🎉",
      "File successfully added to cache for all locales"
    )
  );
  logger.info(
    logger.formatSubHeader(
      "ℹ️",
      "Note:",
      "This file will be skipped in future translations"
    )
  );
  logger.info(logger.formatFooter());
  logger.info("");
}

/**
 * Clean up deleted files from translation cache
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: walkthrough intentionally verbose for UX clarity
export async function cleanupDeletedFiles(): Promise<void> {
  const cache = await loadCache();
  const sourceFiles = await collectSourceFiles();
  const sourceFileSet = new Set(sourceFiles);

  logger.info("");
  logger.info(logger.formatHeader("🚀 Cleanup Deleted Files"));
  logger.info(
    logger.formatSubHeader("🗂️", "Source files found:", sourceFiles.length)
  );

  let totalDeletedFiles = 0;
  const deletedFilesByLocale: Record<string, string[]> = {};

  for (const locale of ["es", "pt-BR"]) {
    const localeCache = cache.data[locale] || {};
    const cachedFiles = Object.keys(localeCache);
    const filesToDelete: string[] = [];

    logger.info("");
    logger.info(logger.formatHeader(`🌍 ${locale.toUpperCase()}`));
    logger.info(
      logger.formatSubHeader("📋", "Cached files:", cachedFiles.length)
    );

    for (const cachedFile of cachedFiles) {
      if (!sourceFileSet.has(cachedFile)) {
        // This file exists in cache but not in source, so delete it
        const targetPath = toLocalePath(locale, cachedFile);

        try {
          const fileExists = await exists(targetPath);
          if (fileExists) {
            await fs.unlink(targetPath);
            filesToDelete.push(cachedFile);
            logger.info(`${"│"} ❌ Deleted: ${cachedFile}`);
          } else {
            // File already doesn't exist, just remove from cache
            filesToDelete.push(cachedFile);
            logger.info(`${"│"} ⏭️ Cache only: ${cachedFile}`);
          }
        } catch (error) {
          logger.info(
            `${"│"} ❌ Failed to delete: ${cachedFile} ${String(error)}`
          );
        }
      }
    }

    // Remove deleted files from cache
    if (filesToDelete.length > 0) {
      for (const file of filesToDelete) {
        delete localeCache[file];
      }
      cache.data[locale] = localeCache;
      deletedFilesByLocale[locale] = filesToDelete;
      totalDeletedFiles += filesToDelete.length;

      logger.info(`${"│"}`);
      logger.info(
        logger.formatSuccess("✅", `Cleaned up ${filesToDelete.length} files`)
      );
    } else {
      logger.info(`${"│"}`);
      logger.info(
        logger.formatSuccess("✨", "No cleanup needed - all files are current")
      );
    }

    logger.info(logger.formatFooter());
  }

  // Save updated cache
  await saveCache(cache);

  // Final summary
  logger.info("");
  logger.info(logger.formatHeader("🎉 Cleanup Complete"));
  logger.info(
    logger.formatSubHeader("🗑️", "Total files deleted:", totalDeletedFiles)
  );

  if (totalDeletedFiles > 0) {
    logger.info(`${"│"}`);
    logger.info(`${"│"} 📊 Deleted by locale:`);
    for (const [locale, files] of Object.entries(deletedFilesByLocale)) {
      if (files.length > 0) {
        logger.info(logger.formatSubHeader("", `${locale}:`, files.length));
      }
    }
  }

  logger.info(logger.formatFooter());
  logger.info("");
}
