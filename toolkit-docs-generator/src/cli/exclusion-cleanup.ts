import { resolve } from "path";
import type { RebuildIndexResult } from "../generator/json-generator.js";
import { removeExcludedToolkitFiles } from "../utils/excluded-output-cleanup.js";

type RebuildIndexGenerator = {
  rebuildIndexFromOutput: () => Promise<RebuildIndexResult>;
};

export interface CleanupExcludedToolkitOutputOptions {
  outputDir: string;
  excludedToolkitIds: Set<string>;
  generator: RebuildIndexGenerator;
  verbose: boolean;
}

export interface CleanupExcludedToolkitOutputResult {
  deleted: string[];
  warnings: string[];
}

const appendReadWarnings = (
  warnings: string[],
  result: RebuildIndexResult,
  verbose: boolean
): void => {
  if (result.readErrors.length > 0) {
    warnings.push(
      `Index rebuild skipped ${result.readErrors.length} unreadable toolkit file(s).`
    );
    if (verbose) {
      warnings.push(
        ...result.readErrors.map(
          (error) => `Index rebuild read error: ${error}`
        )
      );
    }
  }

  if (result.readWarnings.length > 0) {
    warnings.push(
      `Index rebuild reported ${result.readWarnings.length} warning(s).`
    );
    if (verbose) {
      warnings.push(
        ...result.readWarnings.map(
          (warning) => `Index rebuild warning: ${warning}`
        )
      );
    }
  }
};

export const cleanupExcludedToolkitOutput = async (
  options: CleanupExcludedToolkitOutputOptions
): Promise<CleanupExcludedToolkitOutputResult> => {
  if (options.excludedToolkitIds.size === 0) {
    return { deleted: [], warnings: [] };
  }

  const deleted = await removeExcludedToolkitFiles(
    resolve(options.outputDir),
    options.excludedToolkitIds
  );
  if (deleted.length === 0) {
    return { deleted, warnings: [] };
  }

  const warnings: string[] = [];

  try {
    const rebuildResult = await options.generator.rebuildIndexFromOutput();

    appendReadWarnings(warnings, rebuildResult, options.verbose);
  } catch (error) {
    warnings.push(
      `Excluded toolkit files were deleted, but index rebuild failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }

  return { deleted, warnings };
};
