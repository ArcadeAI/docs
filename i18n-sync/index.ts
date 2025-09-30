#!/usr/bin/env -S pnpm dlx tsx

/**
 * i18n Translation Sync Script - Enhanced Modular Version
 *
 * Usage:
 *   pnpm dlx tsx i18n-sync/index.ts                    # Translate new/changed files
 *   pnpm dlx tsx i18n-sync/index.ts --force            # Force translate all files
 *   pnpm dlx tsx i18n-sync/index.ts --file <path>      # Translate specific file
 *   pnpm dlx tsx i18n-sync/index.ts --add-to-cache <path>  # Mark file as translated (skip future translations)
 *   pnpm dlx tsx i18n-sync/index.ts --concurrency <num>    # Set max concurrent translations (default: 5)
 *   pnpm dlx tsx i18n-sync/index.ts --locale <locale>      # Translate to specific locale only (es, pt-BR)
 *   pnpm dlx tsx i18n-sync/index.ts --batch-size <num>     # Set max files per batch (default: 10)
 *   pnpm dlx tsx i18n-sync/index.ts --no-batch             # Disable batch processing (translate files individually)
 *   pnpm dlx tsx i18n-sync/index.ts --cleanup-deleted      # Remove translated files when English originals are deleted
 *
 * Examples:
 *   # Add a file to cache without translating it
 *   pnpm dlx tsx i18n-sync/index.ts --add-to-cache toolkits/productivity/jira/page.mdx
 *
 *   # Force translate a specific file
 *   pnpm dlx tsx i18n-sync/index.ts --force --file toolkits/productivity/jira/page.mdx
 *
 *   # Translate only to Spanish
 *   pnpm dlx tsx i18n-sync/index.ts --locale es
 *
 *   # Translate only to Portuguese (Brazil) with higher concurrency
 *   pnpm dlx tsx i18n-sync/index.ts --locale pt-BR --concurrency 10
 *
 *   # Force translate all files to Spanish only
 *   pnpm dlx tsx i18n-sync/index.ts --force --locale es
 *
 *   # Use higher concurrency for faster processing
 *   pnpm dlx tsx i18n-sync/index.ts --concurrency 10
 *
 *   # Use environment variable to set concurrency
 *   I18N_CONCURRENCY=8 pnpm dlx tsx i18n-sync/index.ts
 *
 *   # Use smaller batches for more granular control
 *   pnpm dlx tsx i18n-sync/index.ts --batch-size 5
 *
 *   # Disable batching for debugging or when batch translation fails
 *   pnpm dlx tsx i18n-sync/index.ts --no-batch
 *
 *   # Clean up deleted files without translating
 *   pnpm dlx tsx i18n-sync/index.ts --cleanup-deleted
 */

import { parseCliArgs } from "./lib/cli-args";
import { logger } from "./lib/logger";
import { TranslationProcessor } from "./lib/processor";
import { OpenAITranslationProvider } from "./providers/openai";
import { EnvSchema, SecurityError, ValidationError } from "./types";
import {
  addFileToCache as addFileToCacheUtil,
  cleanupDeletedFiles as cleanupDeletedFilesUtil,
  collectSourceFiles,
} from "./utils";

/**
 * Main translation sync function
 */
async function sync(
  provider: TranslationProvider,
  sourceFiles: string[],
  options: ReturnType<typeof parseCliArgs>
): Promise<void> {
  if (sourceFiles.length === 0) {
    logger.info("No source files found to translate.");
    return;
  }

  logger.info("");
  logger.info(logger.formatHeader("🚀 Translation Starting"));
  if (options.forceAll) {
    logger.info(logger.formatSubHeader("⚡", "Mode:", "Force all files"));
  }
  if (options.forceFile) {
    logger.info(logger.formatSubHeader("🎯", "Target:", options.forceFile));
  }
  if (options.targetLocale) {
    logger.info(
      logger.formatSubHeader("🌍", "Target locale:", options.targetLocale)
    );
  }
  logger.info(
    logger.formatSubHeader("🗂️", "Source files found:", sourceFiles.length)
  );
  logger.info(
    logger.formatSubHeader("⚙️", "Concurrency:", options.maxConcurrency)
  );
  logger.info(
    logger.formatSubHeader(
      "📦",
      options.noBatch ? "Batching:" : "Batch size:",
      options.noBatch ? "Disabled" : options.customBatchSize
    )
  );
  logger.info("");

  const localesToProcess = options.targetLocale
    ? [options.targetLocale]
    : ["es", "pt-BR"];

  const processor = new TranslationProcessor(provider);
  await processor.initialize();
  processor.setDryRun(options.dryRun);

  for (const locale of localesToProcess) {
    await processLocale(processor, locale, sourceFiles, options);
  }

  logger.info("");
  logger.info(logger.formatHeader("🎉 Translation Complete"));
  logger.info(
    logger.formatSubHeader("🌍", "Languages:", localesToProcess.join(", "))
  );
  logger.info(logger.formatFooter());
  logger.info("");
}

/**
 * Process a single locale
 */
async function processLocale(
  processor: TranslationProcessor,
  locale: string,
  sourceFiles: string[],
  options: { forceAll: boolean; forceFile: string | null }
): Promise<void> {
  const result = await processor.processLocale(locale, sourceFiles, {
    forceAll: options.forceAll,
    forceFile: options.forceFile,
  });

  if (result.okCount > 0 || result.failCount > 0) {
    logger.info("│");
    logger.info("│ 📊 Summary:");
    if (result.okCount > 0) {
      logger.info(logger.formatSubHeader("✅", "Successful:", result.okCount));
    }
    if (result.failCount > 0) {
      logger.info(logger.formatSubHeader("❌", "Failed:", result.failCount));
    }
  }
}

/**
 * Main execution function
 */
async function main() {
  try {
    const env = EnvSchema.parse(process.env);
    const options = parseCliArgs();

    logger.setVerbose(options.debug);
    logger.setSilent(options.silent);

    const provider = new OpenAITranslationProvider(
      env.OPENAI_API_KEY,
      env.OPENAI_MODEL
    );

    // Execute command
    if (options.addToCache) {
      await addFileToCacheUtil(options.addToCache);
    } else if (options.cleanupDeleted) {
      await cleanupDeletedFilesUtil();
    } else {
      const sourceFiles = await collectSourceFiles();
      await sync(provider, sourceFiles, options);
    }
  } catch (error) {
    const exitCodes = { validation: 2, security: 3, unknown: 1 };

    if (error instanceof ValidationError) {
      logger.error(error.message);
      process.exitCode = exitCodes.validation;
    } else if (error instanceof SecurityError) {
      logger.error(`Security error: ${error.message}`);
      process.exitCode = exitCodes.security;
    } else {
      logger.error(
        `Unexpected error: ${error instanceof Error ? error.message : String(error)}`
      );
      process.exitCode = exitCodes.unknown;
    }
  }
}

// Execute main function if this script is run directly
main().catch((error) => {
  logger.error(`Fatal error: ${error}`);
  process.exit(1);
});
