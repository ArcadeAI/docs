import fs from "node:fs/promises";
import path from "node:path";
import { setTimeout as sleep } from "node:timers/promises";
import OpenAi from "openai";
import ora from "ora";
import { FILE_TYPE_PROMPTS } from "./prompts.js";
import type {
  Cache,
  FileType,
  OpenAiClient,
  TranslateParams,
} from "./types.js";
import {
  DEFAULT_OPENAI_MODEL,
  fileExists,
  hashContent,
  isTrackedFile,
  localePath,
  MAX_CLEANUP_FILES_TO_SHOW,
  prettyPath,
  readText,
  SOURCE_LOCALE,
  SPINNER_RESUME_DELAY_MS,
  saveCache,
  TARGET_LOCALES,
  TRANSLATION_TEMPERATURE,
  trackedMetaFiles,
  writeText,
} from "./utils.js";

// OpenAI utilities
export function createOpenAi(apiKey?: string, model?: string): OpenAiClient {
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required");
  }
  const client = new OpenAi({ apiKey });
  const modelToUse = model ?? DEFAULT_OPENAI_MODEL;
  return { client, model: modelToUse };
}

export async function translate({
  openai,
  locale,
  type,
  input,
}: TranslateParams): Promise<string> {
  const systemPrompt = FILE_TYPE_PROMPTS[type](locale);
  const response = await openai.client.chat.completions.create({
    model: openai.model,
    temperature: TRANSLATION_TEMPERATURE,
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: input },
    ],
  });
  const output = response.choices?.[0]?.message?.content?.trim();
  if (!output) {
    throw new Error("Empty translation response");
  }
  return output;
}

// File helpers
export function detectType(file: string): FileType {
  if (trackedMetaFiles.has(path.basename(file))) {
    return "meta";
  }
  const ext = path.extname(file);
  return ext === ".mdx" ? "mdx" : "tsx";
}

export async function collectSourceFiles(): Promise<string[]> {
  const root = localePath(SOURCE_LOCALE, "");
  async function walk(dir: string, base = ""): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];
    for (const entry of entries) {
      const rel = base ? path.join(base, entry.name) : entry.name;
      const abs = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        files.push(...(await walk(abs, rel)));
      } else if (isTrackedFile(entry.name)) {
        files.push(rel);
      }
    }
    return files;
  }
  return await walk(root);
}

export async function buildEntries(
  locale: string,
  cache: Cache,
  files: string[]
) {
  const localeCache = cache.data[locale] ?? {};
  return await Promise.all(
    files.map(async (rel) => {
      const srcPath = localePath(SOURCE_LOCALE, rel);
      const tgtPath = localePath(locale, rel);
      const content = await readText(srcPath);
      const hash = hashContent(content);
      return {
        rel,
        srcPath,
        tgtPath,
        content,
        type: detectType(rel),
        hash,
        cachedHash: localeCache[rel],
      };
    })
  );
}

// Main translation
export async function translateLocale(
  openai: OpenAiClient,
  locale: string,
  cache: Cache,
  options: {
    files: string[];
    force: boolean;
    only: string | null;
    dryRun?: boolean;
    concurrency?: number;
  }
) {
  const { files, force, only, dryRun, concurrency = 1 } = options;
  const entries = (await buildEntries(locale, cache, files)).filter((entry) =>
    only ? entry.rel === only : force || entry.hash !== entry.cachedHash
  );

  if (entries.length === 0) {
    return { ok: 0, failed: 0 };
  }

  const totalBatches = Math.ceil(entries.length / concurrency);
  const spinner = ora({
    text: `(${locale}) preparing translations...`,
    spinner: "dots",
  }).start();
  let ok = 0;
  let failed = 0;

  // Process in batches for concurrency
  for (let i = 0; i < entries.length; i += concurrency) {
    const batch = entries.slice(i, i + concurrency);
    const batchNum = Math.floor(i / concurrency) + 1;

    spinner.text = `(${locale}) batch ${batchNum}/${totalBatches} | ${batch.length} in progress | ${ok + failed}/${entries.length} done`;

    const results = await Promise.allSettled(
      batch.map(async (entry) => {
        try {
          const translated = await translate({
            openai,
            locale,
            type: entry.type,
            input: entry.content,
          });
          if (!dryRun) {
            await writeText(entry.tgtPath, translated);
            cache.data[locale] = cache.data[locale] || {};
            cache.data[locale][entry.rel] = entry.hash;
          }
          ok += 1;
          spinner.text = `(${locale}) batch ${batchNum}/${totalBatches} | ${batch.length - (ok + failed - i)} in progress | ${ok + failed}/${entries.length} done`;
          return { entry, success: true };
        } catch (error) {
          failed += 1;
          spinner.text = `(${locale}) batch ${batchNum}/${totalBatches} | ${batch.length - (ok + failed - i)} in progress | ${ok + failed}/${entries.length} done`;
          return { entry, success: false, error };
        }
      })
    );

    // Handle any failures
    for (const result of results) {
      if (result.status === "fulfilled" && !result.value.success) {
        spinner.warn(
          `${prettyPath(result.value.entry.rel)}: ${String(result.value.error)}`
        );
        await sleep(SPINNER_RESUME_DELAY_MS);
        spinner.start();
        spinner.text = `(${locale}) batch ${batchNum}/${totalBatches} | 0 in progress | ${ok + failed}/${entries.length} done`;
      } else if (result.status === "rejected") {
        spinner.warn(`Unexpected error: ${String(result.reason)}`);
        await sleep(SPINNER_RESUME_DELAY_MS);
        spinner.start();
        spinner.text = `(${locale}) batch ${batchNum}/${totalBatches} | 0 in progress | ${ok + failed}/${entries.length} done`;
      }
    }

    if (!dryRun && ok > 0) {
      await saveCache(cache);
    }
  }

  spinner.succeed(`(${locale}) ${ok} success, ${failed} failed`);
  return { ok, failed };
}

export async function cleanupDeleted(
  cache: Cache,
  locales = TARGET_LOCALES
): Promise<number> {
  const sourceSet = new Set(await collectSourceFiles());
  let totalDeleted = 0;
  const deletedFiles: string[] = [];

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Directory traversal inherently complex
  async function scanDir(dir: string, locale: string, base = "") {
    if (!(await fileExists(dir))) {
      return;
    }
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const rel = base ? path.join(base, entry.name) : entry.name;
        const abs = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          await scanDir(abs, locale, rel);
        } else if (isTrackedFile(entry.name) && !sourceSet.has(rel)) {
          try {
            await fs.unlink(abs);
            deletedFiles.push(`${locale}/${rel}`);
            totalDeleted += 1;
          } catch {
            // Ignore deletion errors
          }
        }
      }
    } catch {
      // Ignore directory read errors
    }
  }

  for (const locale of locales) {
    await scanDir(localePath(locale, ""), locale);
    const localeCache = cache.data[locale] || {};
    for (const file of Object.keys(localeCache)) {
      if (!sourceSet.has(file)) {
        delete localeCache[file];
      }
    }
    cache.data[locale] = localeCache;
  }

  if (
    deletedFiles.length > 0 &&
    deletedFiles.length <= MAX_CLEANUP_FILES_TO_SHOW
  ) {
    for (const file of deletedFiles) {
      console.log(`   - ${file}`);
    }
  }

  await saveCache(cache);
  return totalDeleted;
}
