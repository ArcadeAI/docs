/**
 * Summary-based change detection
 *
 * Compares tool metadata summaries with previous output to detect version changes.
 */
import type { MergedToolkit } from "../types/index.js";
import { normalizeId } from "../utils/fp.js";

export type SummaryToolkit = {
  name: string;
  version: string;
  toolCount: number;
  requiresSecrets: boolean;
  requiresOauth: boolean;
};

export type SummaryToolkitChangeType =
  | "added"
  | "modified"
  | "removed"
  | "unchanged";

export type SummaryToolkitChange = {
  toolkitId: string;
  changeType: SummaryToolkitChangeType;
  currentVersion: string;
  previousVersion: string;
  versionChanged: boolean;
  currentToolCount: number;
};

export type SummaryChangeSummary = {
  newToolkits: number;
  removedToolkits: number;
  modifiedToolkits: number;
  unchangedToolkits: number;
};

export type SummaryChangeResult = {
  toolkitChanges: SummaryToolkitChange[];
  summary: SummaryChangeSummary;
};

const normalizeKey = (value: string): string => normalizeId(value);

export const detectSummaryChanges = (
  summaryToolkits: readonly SummaryToolkit[],
  previousToolkits: ReadonlyMap<string, MergedToolkit>
): SummaryChangeResult => {
  const toolkitChanges: SummaryToolkitChange[] = [];
  const previousByNormalizedId = new Map<string, MergedToolkit>();
  for (const [id, toolkit] of previousToolkits) {
    previousByNormalizedId.set(normalizeKey(id), toolkit);
  }

  const seenPreviousIds = new Set<string>();

  for (const toolkit of summaryToolkits) {
    const normalizedId = normalizeKey(toolkit.name);
    const previousToolkit = previousByNormalizedId.get(normalizedId);
    if (previousToolkit) {
      seenPreviousIds.add(normalizedId);
    }

    const previousVersion = previousToolkit?.version ?? "0.0.0";
    const versionChanged =
      Boolean(previousToolkit) && toolkit.version !== previousVersion;
    const changeType: SummaryToolkitChangeType = previousToolkit
      ? versionChanged
        ? "modified"
        : "unchanged"
      : "added";

    toolkitChanges.push({
      toolkitId: toolkit.name,
      changeType,
      currentVersion: toolkit.version,
      previousVersion,
      versionChanged,
      currentToolCount: toolkit.toolCount,
    });
  }

  for (const [id, toolkit] of previousToolkits) {
    const normalizedId = normalizeKey(id);
    if (!seenPreviousIds.has(normalizedId)) {
      toolkitChanges.push({
        toolkitId: toolkit.id,
        changeType: "removed",
        currentVersion: "0.0.0",
        previousVersion: toolkit.version,
        versionChanged: false,
        currentToolCount: 0,
      });
    }
  }

  toolkitChanges.sort((a, b) => a.toolkitId.localeCompare(b.toolkitId));

  const summary = toolkitChanges.reduce<SummaryChangeSummary>(
    (acc, change) => {
      switch (change.changeType) {
        case "added":
          acc.newToolkits += 1;
          break;
        case "modified":
          acc.modifiedToolkits += 1;
          break;
        case "removed":
          acc.removedToolkits += 1;
          break;
        case "unchanged":
          acc.unchangedToolkits += 1;
          break;
        default:
          break;
      }
      return acc;
    },
    {
      newToolkits: 0,
      removedToolkits: 0,
      modifiedToolkits: 0,
      unchangedToolkits: 0,
    }
  );

  return { toolkitChanges, summary };
};

export const getChangedToolkitIdsFromSummary = (
  result: SummaryChangeResult
): readonly string[] =>
  result.toolkitChanges
    .filter(
      (change) =>
        change.changeType === "added" || change.changeType === "modified"
    )
    .map((change) => change.toolkitId);

export const hasSummaryChanges = (result: SummaryChangeResult): boolean =>
  result.summary.newToolkits > 0 ||
  result.summary.modifiedToolkits > 0 ||
  result.summary.removedToolkits > 0;

export const formatSummaryChangeSummary = (
  result: SummaryChangeResult
): string => {
  const parts: string[] = [];
  if (result.summary.newToolkits > 0) {
    parts.push(`${result.summary.newToolkits} new toolkit(s)`);
  }
  if (result.summary.modifiedToolkits > 0) {
    parts.push(`${result.summary.modifiedToolkits} modified toolkit(s)`);
  }
  if (result.summary.removedToolkits > 0) {
    parts.push(`${result.summary.removedToolkits} removed toolkit(s)`);
  }
  if (result.summary.unchangedToolkits > 0) {
    parts.push(`${result.summary.unchangedToolkits} unchanged toolkit(s)`);
  }
  return parts.length > 0 ? parts.join(", ") : "No toolkits found";
};
