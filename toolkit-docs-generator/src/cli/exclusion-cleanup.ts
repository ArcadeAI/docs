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

    if (rebuildResult.readErrors.length > 0) {
      warnings.push(
        `Index rebuild skipped ${rebuildResult.readErrors.length} unreadable toolkit file(s).`
      );
      if (options.verbose) {
        for (const error of rebuildResult.readErrors) {
          warnings.push(`Index rebuild read error: ${error}`);
        }
      }
    }

    if (rebuildResult.readWarnings.length > 0) {
      warnings.push(
        `Index rebuild reported ${rebuildResult.readWarnings.length} warning(s).`
      );
      if (options.verbose) {
        for (const warning of rebuildResult.readWarnings) {
          warnings.push(`Index rebuild warning: ${warning}`);
        }
      }
    }
  } catch (error) {
    warnings.push(
      `Excluded toolkit files were deleted, but index rebuild failed: ${error instanceof Error ? error.message : String(error)}`
    );
  }

  return { deleted, warnings };
};
