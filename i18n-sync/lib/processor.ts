import { getFileTypeHandler } from "../handlers";
import type {
  CacheShape,
  PerFileEntry,
  ProcessingResult,
  TranslationProvider,
} from "../types";
import {
  buildPerFileEntries,
  createBatches,
  loadCache,
  processInParallel,
  sanitizeError,
  saveCache,
  selectFilesToProcess,
  sleep,
  validateTranslation,
  writeText,
} from "../utils";
import { PROGRESS_UPDATE_FREQUENCY, RATE_LIMIT, THRESHOLDS } from "./constants";
import { logger } from "./logger";
import { ProgressTracker } from "./progress-tracker";

/**
 * Main translation processor that orchestrates the translation workflow
 */
export class TranslationProcessor {
  private cache: CacheShape;
  private readonly provider: TranslationProvider;
  private isDryRun = false;

  constructor(provider: TranslationProvider) {
    this.provider = provider;
    this.cache = { _metadata: {}, data: {} };
  }

  setDryRun(dryRun: boolean): void {
    this.isDryRun = dryRun;
  }

  async initialize(): Promise<void> {
    this.cache = await loadCache();
  }

  async processLocale(
    locale: string,
    sourceFiles: string[],
    options: { forceAll: boolean; forceFile: string | null }
  ): Promise<{
    okCount: number;
    failCount: number;
    results: ProcessingResult[];
  }> {
    const localeCache = this.cache.data[locale] || {};
    const perFile = await buildPerFileEntries(sourceFiles, locale, localeCache);
    const toProcess = selectFilesToProcess(perFile, options);

    logger.info("");
    logger.info(logger.formatHeader(`🌍 ${locale.toUpperCase()}`));
    logger.info(logger.formatSubHeader("🔍", "Files scanned:", perFile.length));
    logger.info(
      logger.formatSubHeader("⚙️", "Files to process:", toProcess.length)
    );

    const skippedCount = perFile.length - toProcess.length;
    if (skippedCount > 0) {
      logger.info(logger.formatSubHeader("⏭️", "Already exist:", skippedCount));
    }

    if (toProcess.length === 0) {
      logger.info(`${"│"}`);
      logger.info(
        logger.formatSuccess("✨", "No files to process - all up to date!")
      );
      logger.info(logger.formatFooter());
      return { okCount: 0, failCount: 0, results: [] };
    }

    const progress = new ProgressTracker(toProcess.length);
    const results = await this.processFilesInParallel(
      toProcess,
      locale,
      progress
    );

    // Update cache for successful translations
    for (const result of results) {
      if (result.success && result.hash) {
        const file = toProcess.find((f) => f.rel === result.file);
        if (file) {
          this.cache.data[locale] = this.cache.data[locale] || {};
          this.cache.data[locale][file.rel] = result.hash;
        }
      }
    }

    await saveCache(this.cache);

    return {
      okCount: progress.successes,
      failCount: progress.failures,
      results,
    };
  }

  // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: grouped workflow is intentional for progress clarity
  private async processFilesInParallel(
    files: PerFileEntry[],
    locale: string,
    progress: ProgressTracker
  ): Promise<ProcessingResult[]> {
    const DefaultConcurrency = 5;
    // Categorize files by size
    const veryLargeFiles = files.filter(
      (f) => f.size > THRESHOLDS.veryLargeFile
    );
    const largeFiles = files.filter(
      (f) => f.size > THRESHOLDS.largeFile && f.size <= THRESHOLDS.veryLargeFile
    );
    const smallFiles = files.filter((f) => f.size <= THRESHOLDS.largeFile);

    const results: ProcessingResult[] = [];

    // Process very large files sequentially with streaming
    for (const file of veryLargeFiles) {
      const startTime = Date.now();
      const result = await this.processFileWithStreaming(file, locale);
      const processingTime = Date.now() - startTime;

      if (result.success) {
        progress.incrementSuccess(processingTime);
      } else {
        progress.incrementFailure(processingTime);
      }

      results.push(result);
      this.updateProgress(progress);
    }

    // Process large files with individual translation
    if (largeFiles.length > 0) {
      const largeResults = await processInParallel(
        largeFiles,
        async (file) => {
          const startTime = Date.now();
          const result = await this.processFile(file, locale);
          const processingTime = Date.now() - startTime;
          return { result, processingTime };
        },
        DefaultConcurrency
      );

      for (const { result, processingTime } of largeResults) {
        if (result.success) {
          progress.incrementSuccess(processingTime);
        } else {
          progress.incrementFailure(processingTime);
        }
        results.push(result);
        this.updateProgress(progress);
      }
    }

    // Process small files in batches
    if (smallFiles.length > 0) {
      const DefaultBatchSize = 10;
      const batches = createBatches(smallFiles, false, DefaultBatchSize);

      const BatchConcurrencyDivisor = 2;
      const _batchResults = await processInParallel(
        batches,
        async (batch) => {
          const startTime = Date.now();
          const batchResults = await this.processBatch(batch, locale);
          const processingTime = Date.now() - startTime;

          // Optimistic update (will be corrected if any fail)
          progress.completed += batch.length;
          progress.successes += batch.length;

          return { results: batchResults, processingTime };
        },
        Math.max(1, Math.floor(DefaultConcurrency / BatchConcurrencyDivisor))
      );

      for (const { results: batchResults } of _batchResults) {
        for (const result of batchResults) {
          if (!result.success) {
            progress.successes--; // Correct optimistic count
            progress.failures++;
          }
          results.push(result);
        }
        this.updateProgress(progress);
      }
    }

    return results;
  }

  private async processFile(
    file: PerFileEntry,
    locale: string
  ): Promise<ProcessingResult> {
    try {
      logger.debug(`Processing file: ${file.rel} (${file.fileType})`);

      const handler = getFileTypeHandler(file.rel);
      const contentToTranslate = handler.preprocessContent(file.src);

      const translated = await this.provider.translate({
        content: contentToTranslate,
        locale,
        filePath: file.srcPath,
        fileType: file.fileType,
      });

      // Validate translation quality
      const validation = validateTranslation(
        file.src,
        translated,
        file.fileType
      );
      if (!validation.valid) {
        return {
          success: false,
          error: `Translation validation failed: ${validation.issues.join(", ")}`,
          file: file.rel,
        };
      }

      const output = handler.postprocessContent(translated);

      if (this.isDryRun) {
        logger.debug(`Dry run: Would write to ${file.tgtPath}`);
      } else {
        await writeText(file.tgtPath, output);
      }

      return { success: true, file: file.rel, hash: file.hash };
    } catch (error) {
      const sanitizedError = sanitizeError(error);
      return {
        success: false,
        error: sanitizedError,
        file: file.rel,
      };
    }
  }

  private async processFileWithStreaming(
    file: PerFileEntry,
    locale: string
  ): Promise<ProcessingResult> {
    try {
      logger.info(`${"│"} 📄 Streaming translation: ${file.rel}`);

      const handler = getFileTypeHandler(file.rel);
      const contentToTranslate = handler.preprocessContent(file.src);

      let streamedChunks = "";
      const DotThreshold = 1000;
      const translated = await this.provider.translateStreaming({
        content: contentToTranslate,
        locale,
        filePath: file.srcPath,
        fileType: file.fileType,
        onProgress: (chunk) => {
          streamedChunks += chunk;
          if (streamedChunks.length % DotThreshold === 0) {
            process.stdout.write(".");
          }
        },
      });

      process.stdout.write("\n"); // Clear progress dots

      const output = handler.postprocessContent(translated);

      if (!this.isDryRun) {
        await writeText(file.tgtPath, output);
      }

      return { success: true, file: file.rel, hash: file.hash };
    } catch (error) {
      const sanitizedError = sanitizeError(error);
      return {
        success: false,
        error: sanitizedError,
        file: file.rel,
      };
    }
  }

  private async processBatch(
    batch: PerFileEntry[],
    locale: string
  ): Promise<ProcessingResult[]> {
    if (batch.length === 0) {
      return [];
    }

    try {
      const fileType = batch[0].fileType;
      const allSameType = batch.every((file) => file.fileType === fileType);

      if (!allSameType) {
        // Fallback to individual processing for mixed types
        const results: ProcessingResult[] = [];
        for (const file of batch) {
          const result = await this.processFile(file, locale);
          results.push(result);
        }
        return results;
      }

      const batchItems = batch.map((file, index) => {
        const handler = getFileTypeHandler(file.rel);
        return {
          fileIndex: index,
          fileName: file.rel,
          content: handler.preprocessContent(file.src),
          fileType: file.fileType,
        };
      });

      const batchResult = await this.provider.translateBatch({
        items: batchItems,
        locale,
        fileType,
      });

      const results: ProcessingResult[] = [];
      for (let i = 0; i < batch.length; i++) {
        const file = batch[i];
        const translation = batchResult.translations.find(
          (t) => t.fileIndex === i
        );

        if (!translation) {
          results.push({
            success: false,
            error: "Translation not found in batch response",
            file: file.rel,
          });
          continue;
        }

        try {
          const handler = getFileTypeHandler(file.rel);
          const output = handler.postprocessContent(translation.content);

          if (!this.isDryRun) {
            await writeText(file.tgtPath, output);
          }

          results.push({
            success: true,
            file: file.rel,
            hash: file.hash,
          });
        } catch (error) {
          results.push({
            success: false,
            error: `Post-processing failed: ${sanitizeError(error)}`,
            file: file.rel,
          });
        }
      }

      return results;
    } catch (error) {
      logger.warn(
        `Batch translation failed, falling back to individual processing: ${sanitizeError(error)}`
      );

      // Fallback to individual processing
      const results: ProcessingResult[] = [];
      for (const file of batch) {
        await sleep(RATE_LIMIT.initialDelayMs);
        const result = await this.processFile(file, locale);
        results.push(result);
      }
      return results;
    }
  }

  private updateProgress(progress: ProgressTracker): void {
    const stats = progress.getStats();
    if (
      stats.completed %
        Math.max(1, Math.floor(stats.total / PROGRESS_UPDATE_FREQUENCY)) ===
        0 ||
      stats.completed === stats.total
    ) {
      logger.info(
        `${"│"} ${logger.makeProgressBar(stats.completed, stats.total, progress.getRemainingTime())}`
      );
    }
  }
}
