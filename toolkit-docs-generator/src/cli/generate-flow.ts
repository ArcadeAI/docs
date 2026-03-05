import type { ChangeDetectionResult } from "../diff/index.js";

/**
 * Extract the lowercase toolkit IDs that were removed (present in previous
 * output but absent from the current API response). The caller should add
 * these IDs to its excludedToolkitIds set so the cleanup step deletes the
 * stale JSON files and rebuilds index.json.
 */
export const collectRemovedToolkitIds = (
  result: ChangeDetectionResult
): Set<string> =>
  new Set(
    result.toolkitChanges
      .filter((c) => c.changeType === "removed")
      .map((c) => c.toolkitId.toLowerCase())
  );

export interface ProcessingStats {
  totalToolkits: number;
  effectiveSkipped: number;
  toProcess: number;
  unknownSkipIds: string[];
}

export interface ProviderEntry {
  provider: string;
  version?: string | undefined;
}

export interface FilteredProviders<T extends ProviderEntry> {
  providersToProcess: T[];
  skippedProviders: T[];
}

/**
 * Compute how many toolkits will actually be processed after applying skip IDs.
 *
 * Uses the intersection of skipToolkitIds with the actual fetched toolkit list
 * to avoid negative toProcess values when unknown IDs are in the skip set.
 */
export const computeProcessingStats = (
  toolkitList: ReadonlyMap<string, unknown>,
  skipToolkitIds: ReadonlySet<string>
): ProcessingStats => {
  const normalizedToolkitIds = new Set(
    Array.from(toolkitList.keys()).map((id) => id.toLowerCase())
  );

  const unknownSkipIds: string[] = [];
  let effectiveSkipped = 0;

  for (const skipId of skipToolkitIds) {
    const normalized = skipId.toLowerCase();
    if (normalizedToolkitIds.has(normalized)) {
      effectiveSkipped += 1;
    } else {
      unknownSkipIds.push(skipId);
    }
  }

  const totalToolkits = toolkitList.size;
  const toProcess = Math.max(0, totalToolkits - effectiveSkipped);

  return { totalToolkits, effectiveSkipped, toProcess, unknownSkipIds };
};

/**
 * Partition providers into those to process and those filtered out by skip IDs.
 * Comparison is case-insensitive.
 */
export const filterProvidersBySkipIds = <T extends ProviderEntry>(
  providers: T[],
  skipToolkitIds: ReadonlySet<string>
): FilteredProviders<T> => {
  const normalizedSkipIds = new Set(
    Array.from(skipToolkitIds).map((id) => id.toLowerCase())
  );

  const providersToProcess: T[] = [];
  const skippedProviders: T[] = [];

  for (const provider of providers) {
    if (normalizedSkipIds.has(provider.provider.toLowerCase())) {
      skippedProviders.push(provider);
    } else {
      providersToProcess.push(provider);
    }
  }

  return { providersToProcess, skippedProviders };
};
