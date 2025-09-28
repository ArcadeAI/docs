#!/usr/bin/env -S pnpm dlx tsx
/**
 * i18n Translation Sync Script
 *
 * Usage:
 *   pnpm dlx tsx scripts/i18n-sync.ts                    # Translate new/changed files
 *   pnpm dlx tsx scripts/i18n-sync.ts --force            # Force translate all files
 *   pnpm dlx tsx scripts/i18n-sync.ts --file <path>      # Translate specific file
 *   pnpm dlx tsx scripts/i18n-sync.ts --add-to-cache <path>  # Mark file as translated (skip future translations)
 *   pnpm dlx tsx scripts/i18n-sync.ts --concurrency <num>    # Set max concurrent translations (default: 5)
 *   pnpm dlx tsx scripts/i18n-sync.ts --locale <locale>      # Translate to specific locale only (es, pt-BR)
 *
 * Examples:
 *   # Add a file to cache without translating it
 *   pnpm dlx tsx scripts/i18n-sync.ts --add-to-cache toolkits/productivity/jira/page.mdx
 *
 *   # Force translate a specific file
 *   pnpm dlx tsx scripts/i18n-sync.ts --force --file toolkits/productivity/jira/page.mdx
 *
 *   # Translate only to Spanish
 *   pnpm dlx tsx scripts/i18n-sync.ts --locale es
 *
 *   # Translate only to Portuguese (Brazil) with higher concurrency
 *   pnpm dlx tsx scripts/i18n-sync.ts --locale pt-BR --concurrency 10
 *
 *   # Force translate all files to Spanish only
 *   pnpm dlx tsx scripts/i18n-sync.ts --force --locale es
 *
 *   # Use higher concurrency for faster processing
 *   pnpm dlx tsx scripts/i18n-sync.ts --concurrency 10
 *
 *   # Use environment variable to set concurrency
 *   I18N_CONCURRENCY=8 pnpm dlx tsx scripts/i18n-sync.ts
 */
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import OpenAi from "openai";
import pc from "picocolors";

// Types
type Locale = "es" | "pt-BR";

type FileType = "mdx" | "meta" | "tsx" | "layout";

type PerFileEntry = {
  rel: string;
  src: string;
  hash: string;
  srcPath: string;
  tgtPath: string;
  fileType: FileType;
  targetExists: boolean;
  cachedHash?: string;
};

type CacheShape = Record<string, Record<string, string>>;

type SelectOptions = {
  forceAll: boolean;
  forceFile: string | null;
};

// Top-level regex per performance rule
const META_EXPORT_REGEX = /export\s+default\s+\{([\s\S]*?)\}\s*;?/;
const NEWLINE_REGEX = /\r?\n/;
const CODE_FENCE_REGEX = /^```/;

const moduleFilename = fileURLToPath(import.meta.url);
const moduleDirname = path.dirname(moduleFilename);

const projectRoot = path.resolve(moduleDirname, "..");
const appDir = path.join(projectRoot, "app");

const sourceLocale = "en" as const;
const targetLocales: Locale[] = ["es", "pt-BR"];
const trackedExtensions = new Set([".mdx", ".ts", ".js", ".tsx", ".jsx"]);
const trackedMetaFiles = new Set(["_meta.ts", "_meta.tsx", "_meta.js"]);

const cacheDir = path.join(projectRoot, ".i18n-cache");
const cacheFile = path.join(cacheDir, "hashes.json");

// Constants
const DEFAULT_CONCURRENCY = 5;
const MAX_RECOMMENDED_CONCURRENCY = 20;
const PROGRESS_UPDATE_FREQUENCY = 20;

// CLI options
const argv = process.argv.slice(2);
const forceAll = argv.includes("--force");
const fileFlagIndex = argv.indexOf("--file");
const forceFile =
  fileFlagIndex !== -1 && argv[fileFlagIndex + 1]
    ? argv[fileFlagIndex + 1]
    : null;
const addToCacheFlagIndex = argv.indexOf("--add-to-cache");
const addToCacheFile =
  addToCacheFlagIndex !== -1 && argv[addToCacheFlagIndex + 1]
    ? argv[addToCacheFlagIndex + 1]
    : null;
const localeFlagIndex = argv.indexOf("--locale");
const targetLocale = (() => {
  const locale =
    localeFlagIndex !== -1 && argv[localeFlagIndex + 1]
      ? argv[localeFlagIndex + 1]
      : null;

  // Validate locale if provided
  if (locale && !targetLocales.includes(locale as Locale)) {
    console.error(
      `Invalid locale: ${locale}. Supported locales: ${targetLocales.join(", ")}`
    );
    process.exit(1);
  }

  return locale as Locale | null;
})();

// Concurrency configuration
const concurrencyFlagIndex = argv.indexOf("--concurrency");
const maxConcurrency = (() => {
  let concurrency =
    concurrencyFlagIndex !== -1 && argv[concurrencyFlagIndex + 1]
      ? Number.parseInt(argv[concurrencyFlagIndex + 1], 10)
      : Number.parseInt(
          process.env.I18N_CONCURRENCY || String(DEFAULT_CONCURRENCY),
          10
        );

  // Validate concurrency value
  if (Number.isNaN(concurrency) || concurrency < 1) {
    console.warn(
      `Invalid concurrency value: ${concurrency}. Using default: ${DEFAULT_CONCURRENCY}`
    );
    concurrency = DEFAULT_CONCURRENCY;
  }

  // Cap at reasonable maximum to avoid overwhelming OpenAI API
  if (concurrency > MAX_RECOMMENDED_CONCURRENCY) {
    console.warn(
      `Concurrency ${concurrency} is very high. Consider using a lower value to avoid rate limits.`
    );
  }

  return concurrency;
})();

function logInfo(message: string): void {
  process.stdout.write(`${message}\n`);
}

/**
 * Process items in parallel with controlled concurrency
 */
async function processInParallel<T, R>(
  items: T[],
  processor: (item: T, index: number) => Promise<R>,
  concurrency: number = maxConcurrency
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

// Use per-locale buffered logging instead of direct stderr to keep order

// Visual elements
const ICONS = {
  start: "🚀",
  locale: "🌍",
  file: "📄",
  success: "✅",
  error: "❌",
  skip: "⏭️",
  summary: "📊",
  finish: "🎉",
} as const;

// Visual constants
const PROGRESS_BAR_WIDTH = 20;
const HEADER_WIDTH = 40;
const FOOTER_WIDTH = 50;
const ERROR_MESSAGE_MAX_LENGTH = 80;
const PERCENTAGE_BASE = 100;
const HASH_PREVIEW_LENGTH = 12;

function makeProgressBar(
  done: number,
  total: number,
  width = PROGRESS_BAR_WIDTH
): string {
  if (total === 0) {
    return `${pc.dim("[")}${pc.dim(".".repeat(width))}${pc.dim("]")} ${pc.yellow("0/0")}`;
  }

  const percentage = Math.round((done / total) * PERCENTAGE_BASE);
  const completed = Math.round((done / total) * width);
  const clamped = Math.max(0, Math.min(width, completed));

  const progressChar = "█";
  const emptyChar = "░";

  const filled = pc.bgGreen(pc.white(progressChar.repeat(clamped)));
  const empty = pc.dim(emptyChar.repeat(width - clamped));

  return `${pc.dim("[")}${filled}${empty}${pc.dim("]")} ${pc.bold(pc.cyan(`${percentage}%`))} ${pc.dim("(")}${pc.yellow(String(done))}${pc.dim("/")}${pc.yellow(String(total))}${pc.dim(")")}`;
}

function formatHeader(text: string): string {
  const padding = "═".repeat(Math.max(0, HEADER_WIDTH - text.length));
  return pc.bold(pc.cyan(`╭─ ${text} ${padding}`));
}

function formatSubHeader(
  icon: string,
  label: string,
  value: string | number
): string {
  return `${pc.dim("│")} ${icon} ${pc.dim(label)} ${pc.bold(pc.white(String(value)))}`;
}

function formatSuccess(icon: string, message: string): string {
  return `${pc.dim("│")} ${icon} ${pc.green(message)}`;
}

function formatFooter(): string {
  return pc.dim(`╰${"─".repeat(FOOTER_WIDTH)}`);
}

/**
 * Load or initialize the translation cache mapping { locale: { filepath: hash } }
 */
async function loadCache(): Promise<CacheShape> {
  try {
    const raw = await fs.readFile(cacheFile, "utf8");
    return JSON.parse(raw) as CacheShape;
  } catch {
    return {} as CacheShape;
  }
}

async function saveCache(cache: CacheShape): Promise<void> {
  await fs.mkdir(cacheDir, { recursive: true });
  await fs.writeFile(cacheFile, JSON.stringify(cache, null, 2));
}

function sha256(content: string): string {
  return crypto.createHash("sha256").update(content).digest("hex");
}

function readText(filePath: string): Promise<string> {
  return fs.readFile(filePath, "utf8");
}

async function writeText(filePath: string, content: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, content);
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function isTrackedFile(file: string): boolean {
  return trackedExtensions.has(path.extname(file));
}

function isMetaFile(file: string): boolean {
  return trackedMetaFiles.has(file);
}

function getFileType(fileName: string): FileType {
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

function toLocalePath(locale: string, relFromApp: string): string {
  return path.join(appDir, locale, relFromApp);
}

function normalizeWhitespace(str: string): string {
  // Keep formatting stable for hashing while not altering meaningful content
  return str.replace(/[\r\t ]+$/gm, "");
}

function getLanguageName(locale: string): string {
  if (locale === "pt-BR") {
    return "Brazilian Portuguese";
  }
  if (locale === "es") {
    return "Spanish";
  }
  return locale;
}

function buildSystemPrompt(locale: string): string {
  const languageName = getLanguageName(locale);
  return `You are a professional technical translator.
Translate the following Nextra MDX file from English to ${languageName}.

Context about the product (Arcade):
- This documentation belongs to Arcade, a platform that helps AI agents securely take real-world actions with user-specific permissions, pre-built integrations (e.g., Gmail, Slack, GitHub), and an engine/runtime for tools and MCP servers.
- Reference: https://docs.arcade.dev/home

CRITICAL CONTEXT AWARENESS:
- You are translating documentation FOR users who speak ${languageName}
- When the source mentions "English version" or "English documentation", translate it as "${languageName} version" or "${languageName} documentation"
- When content refers to "this version", understand it means the ${languageName} version from the reader's perspective
- Adapt language-specific references contextually (e.g., "English version" → "${languageName} version")

Hard constraints (follow exactly):
- Do NOT add, remove, or reorder any characters or lines, except replacing human-readable text with its translation.
- Preserve imports/exports, MDX/JSX tags and components, props/attributes, frontmatter, heading markers (#), list markers (-, 1.), punctuation, ALL whitespace (including leading/trailing spaces), blank lines, and indentation exactly.
- Translate ONLY visible prose: headings text, paragraph text, list item text, and inner text nodes inside JSX elements.
- Do NOT translate: code blocks/fences, inline code (\`like this\`), URLs, identifiers, tag/prop names, attribute values unless they are visible UI text, or anything in backticks.
- Do NOT translate Dashboard UI elements: The Arcade Dashboard is only available in English, so keep all Dashboard UI references in English (e.g., "Create API Key", "API Keys page", "Dashboard" button names, etc.).
- Do NOT add Markdown code fences (e.g., \`\`\`mdx) anywhere.
- Do NOT paraphrase; produce faithful, concise translations.
- Keep brand and product names in English unless a widely accepted localized form exists.
- If something is ambiguous, leave it unchanged.

Return ONLY the full translated document content with the exact original structure.`;
}

function buildUserPrompt(params: {
  content: string;
  filePath: string;
  locale: string;
}): string {
  const { content, filePath, locale } = params;
  return `Context: ${filePath}\nTarget locale: ${locale}\n\nTranslate the prose only. Keep MDX/JSX and code blocks intact.\nReturn ONLY the translated file content, no extra text.\n\nCONTENT START\n${content}\nCONTENT END`;
}

function buildMetaSystemPrompt(locale: string): string {
  const languageName = getLanguageName(locale);
  return `You localize TypeScript object literals. Translate ONLY the string literal values from English to ${languageName}.

Context about the product (Arcade):
- This metadata belongs to Arcade documentation. Arcade enables AI agents to take real-world actions through user-specific permissions, pre-built integrations, and an engine/runtime for agentic tools and MCP servers.
- Keep brand/product names like Arcade, Arcade Engine, Control Plane in English unless a widely accepted localized form exists.
- Reference: https://docs.arcade.dev/home

Hard constraints:
- Preserve all keys and their order; do NOT add or remove keys.
- Preserve quotes style, commas (including trailing commas), spacing, and formatting.
- Do NOT include code fences, backticks, comments, or an export statement.
- Do NOT modify URLs, identifiers, or non-string values.

Return ONLY the object body lines between { and }, not including the braces.`;
}

function buildTsxSystemPrompt(locale: string): string {
  const languageName = getLanguageName(locale);
  return `You are a professional technical translator specializing in React/TypeScript code.
Translate user-visible strings from English to ${languageName} while preserving all code structure.

Context about the product (Arcade):
- This code belongs to Arcade documentation. Arcade enables AI agents to take real-world actions through user-specific permissions, pre-built integrations, and an engine/runtime for agentic tools and MCP servers.
- Keep brand/product names like Arcade, Arcade Engine, Control Plane in English unless a widely accepted localized form exists.
- Reference: https://docs.arcade.dev/home

CRITICAL RULES:
- Translate ONLY user-visible string literals (in quotes) that represent UI text, labels, titles, or messages
- Do NOT translate: variable names, function names, property names, import paths, URLs, technical identifiers, or code comments
- Do NOT translate: alt attributes for images, className values, data attributes, or any technical strings
- Do NOT translate Dashboard UI elements: The Arcade Dashboard is only available in English, so keep all Dashboard UI references in English (e.g., "Create API Key", "API Keys page", "Dashboard" button names, etc.)
- Preserve ALL formatting: indentation, spacing, line breaks, semicolons, brackets, etc.
- Preserve ALL imports, exports, type definitions, and code structure exactly
- Do NOT add or remove any lines of code
- Do NOT add code fences or markdown formatting

Examples of what TO translate:
- "Add to Slack" → "Agregar a Slack" (if Spanish)
- "Contact us" → "Contáctanos" (if Spanish)
- title: "Home" → title: "Inicio" (if Spanish)

Examples of what NOT to translate:
- alt="Add to Slack" (technical attribute)
- className="flex items-center"
- import statements
- function names
- variable names
- "Create API Key" (Dashboard UI element)
- "API Keys page" (Dashboard UI element)
- "Dashboard" (when referring to the Arcade Dashboard)

Return ONLY the complete translated file content with exact original structure.`;
}

function buildLayoutSystemPrompt(locale: string): string {
  const languageName = getLanguageName(locale);
  return `You are translating a Next.js layout component for ${languageName} locale.

Context about the product (Arcade):
- This layout belongs to Arcade documentation. Arcade enables AI agents to take real-world actions through user-specific permissions, pre-built integrations, and an engine/runtime for agentic tools and MCP servers.
- Reference: https://docs.arcade.dev/home

CRITICAL RULES:
- Update the lang attribute value from "en" to the appropriate locale code
- For Spanish: "es"
- For Portuguese (Brazil): "pt-BR"
- Preserve ALL other code exactly as-is
- Do NOT translate any other strings, variable names, or code elements
- Do NOT add code fences or markdown formatting

Return ONLY the complete file content with the updated lang attribute.`;
}

function extractMetaObject(content: string): string | null {
  // naive: export default { ... } ;
  const match = content.match(META_EXPORT_REGEX);
  if (!match) {
    return null;
  }
  return match[1] ?? null;
}

function reconstructMeta(contentBody: string): string {
  return `export default {\n${contentBody}\n};\n`;
}

function sanitizeMetaBody(raw: string): string {
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

function sanitizeMdxWrappingFences(raw: string): string {
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

// Intentionally avoid padding alignment to prevent indentation issues in meta files

// biome-ignore lint/style/useNamingConvention: This is ok for OpenAI
async function translateWithOpenAI(params: {
  content: string;
  locale: string;
  filePath: string;
  fileType: FileType;
}): Promise<string> {
  const { content, locale, filePath, fileType } = params;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }
  const client = new OpenAi({ apiKey });

  let system: string;
  let user: string;

  switch (fileType) {
    case "meta":
      system = buildMetaSystemPrompt(locale);
      user = `Translate the values only and return the object body.\n\n${content}`;
      break;
    case "tsx":
      system = buildTsxSystemPrompt(locale);
      user = `Translate user-visible strings only. Keep all code structure intact.\n\nFile: ${filePath}\nTarget locale: ${locale}\n\n${content}`;
      break;
    case "layout":
      system = buildLayoutSystemPrompt(locale);
      user = `Update the lang attribute for ${locale} locale.\n\n${content}`;
      break;
    case "mdx":
      system = buildSystemPrompt(locale);
      user = buildUserPrompt({ content, filePath, locale });
      break;
    default:
      throw new Error(`Unsupported file type: ${fileType}`);
  }

  // gpt-4o-mini provides strong quality/cost; configurable via env
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const response = await client.chat.completions.create({
    model,
    temperature: 0.2,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
  });

  const text = response.choices?.[0]?.message?.content ?? "";
  if (!text) {
    throw new Error("Empty translation response");
  }
  return text.trim();
}

function collectSourceFiles(): Promise<string[]> {
  const sourceRoot = path.join(appDir, sourceLocale);

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

function selectFilesToProcess(
  perFile: PerFileEntry[],
  options: SelectOptions
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

function buildPerFileEntries(
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

      const hash = sha256(normalizeWhitespace(src));
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
      } as PerFileEntry;
    })
  );
}

async function processFilesInParallel(
  toProcess: PerFileEntry[],
  locale: string,
  cache: CacheShape
): Promise<{
  okCount: number;
  failCount: number;
  results: Array<{
    success: boolean;
    error?: string;
    file: string;
    hash?: string;
  }>;
}> {
  let completed = 0;
  let okCount = 0;
  let failCount = 0;
  const results: Array<{
    success: boolean;
    error?: string;
    file: string;
    hash?: string;
  }> = [];

  const processResults = await processInParallel(
    toProcess,
    async (item: PerFileEntry) => {
      const result = await processFile(item, locale, cache);

      // Update progress atomically
      completed += 1;
      if (result.success) {
        okCount += 1;
      } else {
        failCount += 1;
      }

      // Show progress update every few completions to avoid spam
      if (
        completed %
          Math.max(
            1,
            Math.floor(toProcess.length / PROGRESS_UPDATE_FREQUENCY)
          ) ===
          0 ||
        completed === toProcess.length
      ) {
        logInfo(
          `${pc.dim("│")} ${makeProgressBar(completed, toProcess.length)}`
        );
      }

      return { ...result, file: item.rel };
    },
    maxConcurrency
  );

  results.push(...processResults);
  return { okCount, failCount, results };
}

function logProcessingResults(
  results: Array<{ success: boolean; error?: string; file: string }>
) {
  // Log successful translations
  for (const result of results) {
    if (result.success) {
      logInfo(
        formatSuccess(ICONS.success, `Translated ${pc.bold(result.file)}`)
      );
    }
  }

  // Log failed translations
  for (const result of results) {
    if (!result.success) {
      logInfo(
        `${pc.dim("│")} ${ICONS.error} ${pc.red("Translation failed:")} ${pc.dim(result.error || "Unknown error")}`
      );
      logInfo(
        `${pc.dim("│")} ${ICONS.error} ${pc.red(`File: ${result.file}`)}`
      );
    }
  }
}

function logSummary(okCount: number, failCount: number) {
  if (okCount > 0 || failCount > 0) {
    logInfo(`${pc.dim("│")}`);
    logInfo(`${pc.dim("│")} ${ICONS.summary} ${pc.bold("Summary:")}`);

    if (okCount > 0) {
      logInfo(
        formatSubHeader(ICONS.success, "Successful:", pc.green(String(okCount)))
      );
    }

    if (failCount > 0) {
      logInfo(
        formatSubHeader(ICONS.error, "Failed:", pc.red(String(failCount)))
      );
    }
  }
}

async function processLocale(
  locale: string,
  sourceFiles: string[],
  cache: CacheShape,
  options: SelectOptions
): Promise<void> {
  const localeCache = cache[locale] || {};
  const perFile = await buildPerFileEntries(sourceFiles, locale, localeCache);
  const toProcess = selectFilesToProcess(perFile, options);
  const skippedCount = perFile.length - toProcess.length;

  logInfo("");
  logInfo(formatHeader(`${ICONS.locale} ${locale.toUpperCase()}`));
  logInfo(formatSubHeader("🔍", "Files scanned:", perFile.length));
  logInfo(formatSubHeader("⚙️", "Files to process:", toProcess.length));
  if (skippedCount > 0) {
    logInfo(formatSubHeader(ICONS.skip, "Already exist:", skippedCount));
  }
  if (toProcess.length === 0) {
    logInfo(`${pc.dim("│")}`);
    logInfo(formatSuccess("✨", "No files to process - all up to date!"));
    logInfo(formatFooter());
    cache[locale] = localeCache;
    return;
  }

  logInfo(`${pc.dim("│")}`);
  logInfo(`${pc.dim("│")} ${makeProgressBar(0, toProcess.length)}`);
  logInfo(
    `${pc.dim("│")} ${pc.dim("Concurrency:")} ${pc.bold(pc.cyan(String(maxConcurrency)))}`
  );

  try {
    const { okCount, failCount, results } = await processFilesInParallel(
      toProcess,
      locale,
      cache
    );

    // Batch update cache for all successful translations
    const updatedLocaleCache = cache[locale] || {};
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      if (result.success && result.hash) {
        updatedLocaleCache[toProcess[i].rel] = result.hash;
      }
    }
    cache[locale] = updatedLocaleCache;
    await saveCache(cache);

    // Show final results
    logInfo(
      `${pc.dim("│")} ${makeProgressBar(toProcess.length, toProcess.length)}`
    );

    logProcessingResults(results);
    logSummary(okCount, failCount);
  } catch (error) {
    logInfo(
      `${pc.dim("│")} ${ICONS.error} ${pc.red("Parallel processing failed:")} ${pc.dim(String(error))}`
    );
    throw error;
  }

  logInfo(formatFooter());
}

async function processFile(
  item: PerFileEntry,
  locale: string,
  _cache: CacheShape
): Promise<{ success: boolean; error?: string; hash?: string }> {
  try {
    let contentToTranslate = item.src;

    // For meta files, extract just the object content
    if (item.fileType === "meta") {
      contentToTranslate = extractMetaObject(item.src) ?? item.src;
    }

    const translated = await translateWithOpenAI({
      content: contentToTranslate,
      locale,
      filePath: item.srcPath,
      fileType: item.fileType,
    });

    let output: string;
    switch (item.fileType) {
      case "meta":
        output = reconstructMeta(sanitizeMetaBody(translated));
        break;
      case "mdx":
        output = sanitizeMdxWrappingFences(translated);
        break;
      case "tsx":
      case "layout":
        output = translated;
        break;
      default:
        throw new Error(`Unsupported file type: ${item.fileType}`);
    }

    await writeText(item.tgtPath, output);

    // Return hash for batch cache update (don't update cache here to avoid race conditions)
    return { success: true, hash: item.hash };
  } catch (error) {
    const reason =
      error instanceof Error ? error.stack || error.message : String(error);
    const truncatedReason =
      reason.length > ERROR_MESSAGE_MAX_LENGTH
        ? `${reason.slice(0, ERROR_MESSAGE_MAX_LENGTH)}...`
        : reason;
    return { success: false, error: truncatedReason };
  }
}

async function addFileToCache(filePath: string): Promise<void> {
  const cache = await loadCache();
  const sourceFiles = await collectSourceFiles();

  if (!sourceFiles.includes(filePath)) {
    throw new Error(`File not found under app/${sourceLocale}: ${filePath}`);
  }

  const srcPath = toLocalePath(sourceLocale, filePath);
  const src = await readText(srcPath);
  const hash = sha256(normalizeWhitespace(src));

  logInfo("");
  logInfo(formatHeader(`${ICONS.file} Adding File to Cache`));
  logInfo(formatSubHeader("📄", "File:", filePath));
  logInfo(
    formatSubHeader("🔒", "Hash:", `${hash.slice(0, HASH_PREVIEW_LENGTH)}...`)
  );
  logInfo("");

  for (const locale of targetLocales) {
    const localeCache = cache[locale] || {};
    localeCache[filePath] = hash;
    cache[locale] = localeCache;

    logInfo(
      formatSuccess(ICONS.success, `Added to ${locale.toUpperCase()} cache`)
    );
  }

  await saveCache(cache);

  logInfo("");
  logInfo(
    formatSuccess(
      ICONS.finish,
      "File successfully added to cache for all locales"
    )
  );
  logInfo(
    formatSubHeader(
      "ℹ️",
      "Note:",
      "This file will be skipped in future translations"
    )
  );
  logInfo(formatFooter());
  logInfo("");
}

async function sync(): Promise<void> {
  const cache = await loadCache();
  const sourceFiles = await collectSourceFiles();

  if (forceFile && !sourceFiles.includes(forceFile)) {
    throw new Error(`--file not found under app/${sourceLocale}: ${forceFile}`);
  }

  logInfo("");
  logInfo(formatHeader(`${ICONS.start} Translation Starting`));
  if (forceAll) {
    logInfo(formatSubHeader("⚡", "Mode:", "Force all files"));
  }
  if (forceFile) {
    logInfo(formatSubHeader("🎯", "Target:", forceFile));
  }
  if (targetLocale) {
    logInfo(formatSubHeader("🌍", "Target locale:", targetLocale));
  }
  logInfo(formatSubHeader("🗂️", "Source files found:", sourceFiles.length));
  logInfo("");

  // Determine which locales to process
  const localesToProcess = targetLocale ? [targetLocale] : targetLocales;

  // Process each locale sequentially to avoid interleaved output
  for (const locale of localesToProcess) {
    await processLocale(locale, sourceFiles, cache, { forceAll, forceFile });
  }

  // Final cache save (redundant but ensures consistency)
  await saveCache(cache);

  logInfo("");
  logInfo(formatHeader(`${ICONS.finish} Translation Complete`));
  logInfo(formatSubHeader("🌍", "Languages:", localesToProcess.join(", ")));
  logInfo(formatFooter());
  logInfo("");
}

// Handle CLI commands
if (addToCacheFile) {
  addFileToCache(addToCacheFile)
    .then(() => {
      // Completion handled in addFileToCache() function
    })
    .catch((err) => {
      const msg = err instanceof Error ? err.stack || err.message : String(err);
      logInfo("");
      logInfo(`${ICONS.error} ${pc.red(pc.bold("Add to Cache Failed"))}`);
      logInfo(pc.red(msg));
      logInfo("");
      process.exitCode = 1;
    });
} else {
  sync()
    .then(() => {
      // Completion handled in sync() function
    })
    .catch((err) => {
      const msg = err instanceof Error ? err.stack || err.message : String(err);
      logInfo("");
      logInfo(`${ICONS.error} ${pc.red(pc.bold("Translation Failed"))}`);
      logInfo(pc.red(msg));
      logInfo("");
      process.exitCode = 1;
    });
}
