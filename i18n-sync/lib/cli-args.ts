import {
  DEFAULT_CONCURRENCY,
  type Locale,
  MAX_BATCH_SIZE,
  MAX_RECOMMENDED_CONCURRENCY,
  targetLocales,
  ValidationError,
} from "../types";
import { logger } from "./logger";

function getFlagValue(argv: string[], flag: string): string | null {
  const index = argv.indexOf(flag);
  return index !== -1 && argv[index + 1] ? argv[index + 1] : null;
}

function validateLocale(locale: string | null): Locale | null {
  if (locale && !targetLocales.includes(locale as Locale)) {
    throw new ValidationError(
      `Invalid locale: ${locale}. Supported locales: ${targetLocales.join(", ")}`
    );
  }
  return locale as Locale | null;
}

/**
 * Parse and validate CLI arguments
 */
export function parseCliArgs() {
  const argv = process.argv.slice(2);

  // Basic flags
  const forceAll = argv.includes("--force");
  const cleanupDeleted = argv.includes("--cleanup-deleted");
  const noBatch = argv.includes("--no-batch");
  const debug = argv.includes("--debug");
  const silent = argv.includes("--silent");
  const dryRun = argv.includes("--dry-run");

  // File flags
  const forceFile = getFlagValue(argv, "--file");
  const addToCacheFile = getFlagValue(argv, "--add-to-cache");
  const targetLocale = validateLocale(getFlagValue(argv, "--locale"));

  // Concurrency configuration
  const maxConcurrency = (() => {
    const value = getFlagValue(argv, "--concurrency");
    let concurrency = value
      ? Number.parseInt(value, 10)
      : Number.parseInt(
          process.env.I18N_CONCURRENCY || String(DEFAULT_CONCURRENCY),
          10
        );

    if (Number.isNaN(concurrency) || concurrency < 1) {
      logger.warn(
        `Invalid concurrency value. Using default: ${DEFAULT_CONCURRENCY}`
      );
      concurrency = DEFAULT_CONCURRENCY;
    }

    if (concurrency > MAX_RECOMMENDED_CONCURRENCY) {
      logger.warn(
        `Concurrency ${concurrency} is very high. Consider using a lower value.`
      );
    }

    return concurrency;
  })();

  // Batch configuration
  const customBatchSize = (() => {
    const value = getFlagValue(argv, "--batch-size");
    const size = value ? Number.parseInt(value, 10) : null;

    if (size !== null && (Number.isNaN(size) || size < 1)) {
      logger.warn(`Invalid batch size. Using default: ${MAX_BATCH_SIZE}`);
      return MAX_BATCH_SIZE;
    }

    return size || MAX_BATCH_SIZE;
  })();

  return {
    forceAll,
    forceFile,
    addToCache: addToCacheFile,
    cleanupDeleted,
    targetLocale,
    maxConcurrency,
    customBatchSize,
    noBatch,
    debug,
    silent,
    dryRun,
  };
}
