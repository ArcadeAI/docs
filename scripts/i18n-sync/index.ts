#!/usr/bin/env -S pnpm dlx tsx

import { Command } from "commander";
import {
  cleanupDeleted,
  collectSourceFiles,
  createOpenAi,
  translateLocale,
} from "./translate.js";
import type { Cache } from "./types.js";
import {
  DEFAULT_OPENAI_MODEL,
  loadCache,
  plural,
  shouldTranslateFile,
  TARGET_LOCALES,
} from "./utils.js";

function displayTranslationSummary(
  locales: string[],
  files: string[],
  cache: Cache,
  options: { force: boolean; only: string | null; dryRun?: boolean }
) {
  // Calculate files to process per locale
  const stats = locales.map((locale) => {
    const localeCache = cache.data[locale] ?? {};
    const toTranslate = files.filter((rel) =>
      shouldTranslateFile(rel, localeCache, options)
    ).length;
    const skipped = options.only ? 0 : files.length - toTranslate;
    return { locale, toTranslate, skipped };
  });

  const totalToTranslate = stats.reduce((sum, s) => sum + s.toTranslate, 0);

  // Only show summary if there's work to do
  if (totalToTranslate === 0) {
    console.log("\n✨ All translations are up to date!\n");
    return;
  }

  // Generic info first
  const model = process.env.OPENAI_MODEL || DEFAULT_OPENAI_MODEL;

  console.log("\n📖 Translation started");
  console.log(`   📁 ${files.length} source file${plural(files.length)}`);
  console.log(`   🌍 ${locales.join(", ")}`);
  console.log(`   🤖 ${model}`);

  const modes = [
    options.force && "🔄 force",
    options.dryRun && "🧪 dry-run",
  ].filter(Boolean);
  if (modes.length > 0) {
    console.log(`   ${modes.join("  ")}`);
  }

  console.log("");
  for (const stat of stats.filter((s) => s.toTranslate > 0)) {
    console.log(
      options.only
        ? `   📄 ${stat.locale}: ${options.only}`
        : `   ▸ ${stat.locale}: ${stat.toTranslate} to translate • ${stat.skipped} cached`
    );
  }

  console.log("");
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: CLI entry point handles multiple options
async function main(argv: string[]) {
  const program = new Command();
  program
    .name("i18n-sync")
    .description("Translate Arcade docs using OpenAI")
    .option("--locale <code>", "translate only this locale")
    .option("--file <path>", "translate only this file (relative to app/en)")
    .option("--force", "translate even if cached")
    .option("--dry-run", "do not write files or cache")
    .option("--cleanup", "remove translations whose sources were deleted")
    .parse(argv);

  const opts = program.opts();
  const envKey = process.env.OPENAI_API_KEY;
  const envModel = process.env.OPENAI_MODEL;
  const openai = opts.cleanup ? null : createOpenAi(envKey, envModel);
  const cache = await loadCache();

  if (opts.cleanup) {
    const locales = opts.locale ? [opts.locale] : TARGET_LOCALES;
    console.log("\n🧹 Cleanup mode");
    console.log(`   🌍 ${locales.join(", ")}`);
    const deleted = await cleanupDeleted(cache, locales);
    console.log(
      deleted > 0
        ? `   ✅ Removed ${deleted} file${plural(deleted)}\n`
        : "   ✨ Nothing to clean\n"
    );
    return;
  }

  const locales = opts.locale ? [opts.locale] : TARGET_LOCALES;
  const files = await collectSourceFiles();

  if (!openai) {
    throw new Error("OpenAI client is required for translation");
  }

  const translationOpts = {
    force: Boolean(opts.force),
    only: opts.file ?? null,
    dryRun: Boolean(opts.dryRun),
  };

  // Display summary and check if there's work to do
  const hasWork = locales.some((locale) => {
    const localeCache = cache.data[locale] ?? {};
    return files.some((rel) =>
      shouldTranslateFile(rel, localeCache, translationOpts)
    );
  });
  displayTranslationSummary(locales, files, cache, translationOpts);

  if (!hasWork) {
    return;
  }

  let totalOk = 0;
  let totalFailed = 0;

  for (const locale of locales) {
    const result = await translateLocale(openai, locale, cache, {
      files,
      ...translationOpts,
    });

    totalOk += result.ok;
    totalFailed += result.failed;
    if (result.ok > 0 || result.failed > 0) {
      const status =
        result.failed > 0
          ? `${result.ok} ✅  ${result.failed} ❌`
          : `${result.ok} ✅`;
      console.log(`   ${locale}: ${status}`);
    }
  }

  console.log("");
  console.log(
    totalFailed === 0
      ? `✅ Success! Translated ${totalOk} file${plural(totalOk)}`
      : `⚠️  Completed with errors\n   Succeeded: ${totalOk}\n   Failed: ${totalFailed}`
  );
  console.log("");
}

main(process.argv);
