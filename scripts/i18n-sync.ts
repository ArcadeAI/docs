#!/usr/bin/env -S pnpm dlx tsx
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import OpenAi from "openai";
import pc from "picocolors";

// Types
type Locale = "es" | "pt-BR";

type PerFileEntry = {
  rel: string;
  src: string;
  hash: string;
  srcPath: string;
  tgtPath: string;
  isMeta: boolean;
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
const trackedExtensions = new Set([".mdx"]);
const trackedMetaFile = "_meta.ts";

const cacheDir = path.join(projectRoot, ".i18n-cache");
const cacheFile = path.join(cacheDir, "hashes.json");

// CLI options
const argv = process.argv.slice(2);
const forceAll = argv.includes("--force");
const fileFlagIndex = argv.indexOf("--file");
const forceFile =
  fileFlagIndex !== -1 && argv[fileFlagIndex + 1]
    ? argv[fileFlagIndex + 1]
    : null;

function logInfo(message: string): void {
  process.stdout.write(`${message}\n`);
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

function isTrackedMdx(file: string): boolean {
  return trackedExtensions.has(path.extname(file));
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
  isMeta: boolean;
}): Promise<string> {
  const { content, locale, filePath, isMeta } = params;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }
  const client = new OpenAi({ apiKey });

  const system = isMeta
    ? buildMetaSystemPrompt(locale)
    : buildSystemPrompt(locale);
  const user = isMeta
    ? `Translate the values only and return the object body.\n\n${content}`
    : buildUserPrompt({ content, filePath, locale });

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
        (isTrackedMdx(entry.name) || entry.name === trackedMetaFile)
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
  return perFile.filter((f) => !f.targetExists);
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
  logInfo(formatSubHeader("🗂️", "Source files found:", sourceFiles.length));
  logInfo("");

  // Buffer logs per-locale to avoid interleaving while keeping parallel processing
  const localeLogs: Record<string, string[]> = {};

  const getLocaleLogger = (locale: string) => {
    if (!localeLogs[locale]) {
      localeLogs[locale] = [];
    }
    return (message: string) => {
      localeLogs[locale].push(message);
    };
  };

  await Promise.all(
    // biome-ignore lint: This function orchestrates the main translation flow
    targetLocales.map(async (locale) => {
      const localeCache = cache[locale] || {};
      const log = getLocaleLogger(locale);

      const perFile: PerFileEntry[] = await Promise.all(
        sourceFiles.map(async (fileName) => {
          const rel = fileName;
          const srcPath = toLocalePath(sourceLocale, rel);
          const tgtPath = toLocalePath(locale, rel);
          const isMeta = fileName === trackedMetaFile;

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
            isMeta,
            targetExists,
            cachedHash,
          } as PerFileEntry;
        })
      );

      const toProcess = selectFilesToProcess(perFile, { forceAll, forceFile });
      const skippedCount = perFile.length - toProcess.length;
      log("");
      log(formatHeader(`${ICONS.locale} ${locale.toUpperCase()}`));
      log(formatSubHeader("🔍", "Files scanned:", perFile.length));
      log(formatSubHeader("⚙️", "Files to process:", toProcess.length));
      if (skippedCount > 0) {
        log(formatSubHeader(ICONS.skip, "Already exist:", skippedCount));
      }
      if (toProcess.length === 0) {
        log(`${pc.dim("│")}`);
        log(formatSuccess("✨", "No files to process - all up to date!"));
        log(formatFooter());
        cache[locale] = localeCache;
        return;
      }

      log(`${pc.dim("│")}`);
      log(`${pc.dim("│")} ${makeProgressBar(0, toProcess.length)}`);

      let completed = 0;
      const results = await Promise.allSettled(
        toProcess.map(async (item) => {
          const translated = await translateWithOpenAI({
            content: item.isMeta
              ? (extractMetaObject(item.src) ?? item.src)
              : item.src,
            locale,
            filePath: item.srcPath,
            isMeta: item.isMeta,
          });

          const output = item.isMeta
            ? reconstructMeta(sanitizeMetaBody(translated))
            : sanitizeMdxWrappingFences(translated);
          await writeText(item.tgtPath, output);
          completed += 1;

          // Update progress bar in place and show completed file
          log(`${pc.dim("│")} ${makeProgressBar(completed, toProcess.length)}`);
          log(formatSuccess(ICONS.success, `Translated ${pc.bold(item.rel)}`));
          return { rel: item.rel, hash: item.hash };
        })
      );

      let okCount = 0;
      let failCount = 0;
      for (const res of results) {
        if (res.status === "fulfilled") {
          const { rel, hash } = res.value;
          localeCache[rel] = hash;
          okCount += 1;
        } else {
          const reason =
            res.reason instanceof Error
              ? res.reason.stack || res.reason.message
              : String(res.reason);
          const truncatedReason =
            reason.length > ERROR_MESSAGE_MAX_LENGTH
              ? `${reason.slice(0, ERROR_MESSAGE_MAX_LENGTH)}...`
              : reason;
          log(`${pc.dim("│")}`);
          log(
            `${pc.dim("│")} ${ICONS.error} ${pc.red("Translation failed:")} ${pc.dim(truncatedReason)}`
          );
          failCount += 1;
        }
      }

      // Only show summary if there's something to summarize
      if (okCount > 0 || failCount > 0) {
        log(`${pc.dim("│")}`);
        log(`${pc.dim("│")} ${ICONS.summary} ${pc.bold("Summary:")}`);

        if (okCount > 0) {
          log(
            formatSubHeader(
              ICONS.success,
              "Successful:",
              pc.green(String(okCount))
            )
          );
        }

        if (failCount > 0) {
          log(
            formatSubHeader(ICONS.error, "Failed:", pc.red(String(failCount)))
          );
        }
      }

      log(formatFooter());
      cache[locale] = localeCache;
    })
  );

  await saveCache(cache);
  // Flush buffered logs in deterministic order
  for (const locale of targetLocales) {
    const lines = localeLogs[locale] || [];
    for (const line of lines) {
      process.stdout.write(`${line}\n`);
    }
  }
  logInfo("");
  logInfo(formatHeader(`${ICONS.finish} Translation Complete`));
  const totalProcessed = targetLocales.reduce((sum, locale) => {
    const logs = localeLogs[locale] || [];
    return sum + logs.filter((line) => line.includes(ICONS.success)).length;
  }, 0);
  logInfo(formatSubHeader("🎯", "Files processed:", totalProcessed));
  logInfo(formatSubHeader("🌍", "Languages:", targetLocales.join(", ")));
  logInfo(formatFooter());
  logInfo("");
}

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
