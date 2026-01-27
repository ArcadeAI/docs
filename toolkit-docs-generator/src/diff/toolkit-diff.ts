/**
 * Toolkit Change Detection
 *
 * Compares current API data with previous output to detect changes.
 * Used to determine which toolkits need regeneration.
 */

import { buildToolSignature, extractVersion } from "../merger/data-merger.js";
import type { MergedToolkit, ToolDefinition } from "../types/index.js";

// ============================================================================
// Types
// ============================================================================

export type ToolChangeType = "added" | "removed" | "modified";
export type ToolkitChangeType = "added" | "removed" | "modified" | "unchanged";

export interface ToolChange {
  /** Tool qualified name (e.g., "Github.CreateIssue") */
  readonly qualifiedName: string;
  /** Type of change */
  readonly changeType: ToolChangeType;
  /** Tool name (e.g., "CreateIssue") */
  readonly toolName: string;
}

export interface ToolkitChange {
  /** Toolkit ID (e.g., "Github") */
  readonly toolkitId: string;
  /** Type of change */
  readonly changeType: ToolkitChangeType;
  /** List of tool changes within this toolkit */
  readonly toolChanges: readonly ToolChange[];
  /** Toolkit version derived from current tool definitions */
  readonly currentVersion: string;
  /** Toolkit version from previous output (if available) */
  readonly previousVersion: string;
  /** Whether the toolkit version changed */
  readonly versionChanged: boolean;
  /** Current tool count (0 if removed) */
  readonly currentToolCount: number;
  /** Previous tool count (0 if new) */
  readonly previousToolCount: number;
}

export interface ChangeDetectionResult {
  /** List of toolkit changes */
  readonly toolkitChanges: readonly ToolkitChange[];
  /** Summary statistics */
  readonly summary: ChangeSummary;
}

export interface ChangeSummary {
  /** Number of new toolkits */
  readonly newToolkits: number;
  /** Number of removed toolkits */
  readonly removedToolkits: number;
  /** Number of modified toolkits */
  readonly modifiedToolkits: number;
  /** Number of toolkits with version-only changes */
  readonly versionOnlyToolkits: number;
  /** Number of unchanged toolkits */
  readonly unchangedToolkits: number;
  /** Total number of new tools */
  readonly newTools: number;
  /** Total number of removed tools */
  readonly removedTools: number;
  /** Total number of modified tools */
  readonly modifiedTools: number;
}

// ============================================================================
// Signature Building for Tool Definitions
// ============================================================================

/**
 * Build a signature for a ToolDefinition (from API)
 * This is different from MergedTool signatures as it uses the raw API format
 */
export const buildToolDefinitionSignature = (tool: ToolDefinition): string =>
  buildToolSignature(tool);

/**
 * Build a map of tool signatures for quick lookup
 */
const buildToolSignatureMap = (
  tools: readonly ToolDefinition[]
): ReadonlyMap<string, string> => {
  const map = new Map<string, string>();
  for (const tool of tools) {
    map.set(tool.qualifiedName, buildToolDefinitionSignature(tool));
  }
  return map;
};

/**
 * Build a map of tool signatures from MergedToolkit
 */
const buildMergedToolSignatureMap = (
  toolkit: MergedToolkit
): ReadonlyMap<string, string> => {
  const map = new Map<string, string>();
  for (const tool of toolkit.tools) {
    map.set(tool.qualifiedName, buildToolSignature(tool));
  }
  return map;
};

/**
 * Extract toolkit version from current tool definitions
 */
const getToolkitVersion = (tools: readonly ToolDefinition[]): string => {
  const firstTool = tools[0];
  return firstTool ? extractVersion(firstTool.fullyQualifiedName) : "0.0.0";
};

// ============================================================================
// Change Detection Functions
// ============================================================================

/**
 * Compare tools within a toolkit to detect changes
 */
export const compareTools = (
  currentTools: readonly ToolDefinition[],
  previousToolkit: MergedToolkit | undefined
): readonly ToolChange[] => {
  const changes: ToolChange[] = [];

  // Build signature maps
  const currentSignatures = buildToolSignatureMap(currentTools);
  const previousSignatures = previousToolkit
    ? buildMergedToolSignatureMap(previousToolkit)
    : new Map<string, string>();

  // Build name lookup for current tools
  const currentToolNames = new Map<string, string>();
  for (const tool of currentTools) {
    currentToolNames.set(tool.qualifiedName, tool.name);
  }

  // Build name lookup for previous tools
  const previousToolNames = new Map<string, string>();
  if (previousToolkit) {
    for (const tool of previousToolkit.tools) {
      previousToolNames.set(tool.qualifiedName, tool.name);
    }
  }

  // Check for added and modified tools
  for (const [qualifiedName, currentSig] of currentSignatures) {
    const previousSig = previousSignatures.get(qualifiedName);
    const toolName = currentToolNames.get(qualifiedName) ?? qualifiedName;

    if (!previousSig) {
      // New tool
      changes.push({
        qualifiedName,
        changeType: "added",
        toolName,
      });
    } else if (currentSig !== previousSig) {
      // Modified tool
      changes.push({
        qualifiedName,
        changeType: "modified",
        toolName,
      });
    }
  }

  // Check for removed tools
  for (const qualifiedName of previousSignatures.keys()) {
    if (!currentSignatures.has(qualifiedName)) {
      const toolName = previousToolNames.get(qualifiedName) ?? qualifiedName;
      changes.push({
        qualifiedName,
        changeType: "removed",
        toolName,
      });
    }
  }

  return changes;
};

/**
 * Compare a single toolkit to detect changes
 */
export const compareToolkit = (
  toolkitId: string,
  currentTools: readonly ToolDefinition[],
  previousToolkit: MergedToolkit | undefined
): ToolkitChange => {
  const toolChanges = compareTools(currentTools, previousToolkit);
  const currentVersion = getToolkitVersion(currentTools);
  const previousVersion = previousToolkit?.version ?? "0.0.0";
  const versionChanged =
    Boolean(previousToolkit) && currentVersion !== previousVersion;

  // Determine overall change type
  let changeType: ToolkitChangeType;
  if (!previousToolkit) {
    changeType = "added";
  } else if (currentTools.length === 0 && previousToolkit.tools.length > 0) {
    // This shouldn't happen normally, but handle it
    changeType = "removed";
  } else if (toolChanges.length === 0 && !versionChanged) {
    changeType = "unchanged";
  } else {
    changeType = "modified";
  }

  return {
    toolkitId,
    changeType,
    toolChanges,
    currentVersion,
    previousVersion,
    versionChanged,
    currentToolCount: currentTools.length,
    previousToolCount: previousToolkit?.tools.length ?? 0,
  };
};

/**
 * Compare all toolkits to detect changes
 *
 * @param currentToolkitTools - Map of toolkit ID to current tools from API
 * @param previousToolkits - Map of toolkit ID to previous merged output
 */
export const detectChanges = (
  currentToolkitTools: ReadonlyMap<string, readonly ToolDefinition[]>,
  previousToolkits: ReadonlyMap<string, MergedToolkit>
): ChangeDetectionResult => {
  const toolkitChanges: ToolkitChange[] = [];

  // Normalize keys for comparison
  const normalizeKey = (key: string): string => key.toLowerCase();

  // Build normalized lookup for previous toolkits
  const previousByNormalizedId = new Map<string, MergedToolkit>();
  for (const [id, toolkit] of previousToolkits) {
    previousByNormalizedId.set(normalizeKey(id), toolkit);
  }

  // Track which previous toolkits we've seen
  const seenPreviousIds = new Set<string>();

  // Check current toolkits
  for (const [toolkitId, tools] of currentToolkitTools) {
    const normalizedId = normalizeKey(toolkitId);
    const previousToolkit = previousByNormalizedId.get(normalizedId);

    if (previousToolkit) {
      seenPreviousIds.add(normalizedId);
    }

    const change = compareToolkit(toolkitId, tools, previousToolkit);
    toolkitChanges.push(change);
  }

  // Check for removed toolkits (in previous but not in current)
  for (const [id, toolkit] of previousToolkits) {
    const normalizedId = normalizeKey(id);
    if (!seenPreviousIds.has(normalizedId)) {
      toolkitChanges.push({
        toolkitId: toolkit.id,
        changeType: "removed",
        toolChanges: toolkit.tools.map((tool) => ({
          qualifiedName: tool.qualifiedName,
          changeType: "removed" as const,
          toolName: tool.name,
        })),
        currentVersion: "0.0.0",
        previousVersion: toolkit.version,
        versionChanged: false,
        currentToolCount: 0,
        previousToolCount: toolkit.tools.length,
      });
    }
  }

  // Sort by toolkit ID for consistent output
  toolkitChanges.sort((a, b) => a.toolkitId.localeCompare(b.toolkitId));

  // Calculate summary
  const summary = calculateSummary(toolkitChanges);

  return {
    toolkitChanges,
    summary,
  };
};

/**
 * Calculate summary statistics from toolkit changes
 */
const calculateSummary = (
  toolkitChanges: readonly ToolkitChange[]
): ChangeSummary => {
  let newToolkits = 0;
  let removedToolkits = 0;
  let modifiedToolkits = 0;
  let versionOnlyToolkits = 0;
  let unchangedToolkits = 0;
  let newTools = 0;
  let removedTools = 0;
  let modifiedTools = 0;

  for (const change of toolkitChanges) {
    switch (change.changeType) {
      case "added":
        newToolkits++;
        newTools += change.toolChanges.filter(
          (t) => t.changeType === "added"
        ).length;
        break;
      case "removed":
        removedToolkits++;
        removedTools += change.toolChanges.filter(
          (t) => t.changeType === "removed"
        ).length;
        break;
      case "modified":
        modifiedToolkits++;
        if (change.toolChanges.length === 0 && change.versionChanged) {
          versionOnlyToolkits++;
        }
        for (const toolChange of change.toolChanges) {
          switch (toolChange.changeType) {
            case "added":
              newTools++;
              break;
            case "removed":
              removedTools++;
              break;
            case "modified":
              modifiedTools++;
              break;
          }
        }
        break;
      case "unchanged":
        unchangedToolkits++;
        break;
    }
  }

  return {
    newToolkits,
    removedToolkits,
    modifiedToolkits,
    versionOnlyToolkits,
    unchangedToolkits,
    newTools,
    removedTools,
    modifiedTools,
  };
};

/**
 * Check if there are any changes that require regeneration
 */
export const hasChanges = (result: ChangeDetectionResult): boolean =>
  result.summary.newToolkits > 0 ||
  result.summary.removedToolkits > 0 ||
  result.summary.modifiedToolkits > 0;

/**
 * Get IDs of toolkits that have changes (excluding unchanged and removed)
 * Removed toolkits are not included since they don't need regeneration
 */
export const getChangedToolkitIds = (
  result: ChangeDetectionResult
): readonly string[] =>
  result.toolkitChanges
    .filter((c) => c.changeType !== "unchanged" && c.changeType !== "removed")
    .map((c) => c.toolkitId);

/**
 * Format a change detection result for logging
 */
export const formatChangeSummary = (result: ChangeDetectionResult): string => {
  const { summary } = result;
  const parts: string[] = [];

  if (summary.newToolkits > 0) {
    parts.push(`${summary.newToolkits} new toolkit(s)`);
  }
  if (summary.removedToolkits > 0) {
    parts.push(`${summary.removedToolkits} removed toolkit(s)`);
  }
  if (summary.modifiedToolkits > 0) {
    parts.push(`${summary.modifiedToolkits} modified toolkit(s)`);
  }
  if (summary.versionOnlyToolkits > 0) {
    parts.push(`${summary.versionOnlyToolkits} version-only toolkit(s)`);
  }
  if (summary.unchangedToolkits > 0) {
    parts.push(`${summary.unchangedToolkits} unchanged toolkit(s)`);
  }

  if (parts.length === 0) {
    return "No toolkits found";
  }

  return parts.join(", ");
};

/**
 * Format detailed changes for logging
 */
export const formatDetailedChanges = (
  result: ChangeDetectionResult
): string[] => {
  const lines: string[] = [];

  for (const toolkitChange of result.toolkitChanges) {
    if (toolkitChange.changeType === "unchanged") {
      continue;
    }

    const changeLabel = {
      added: "[NEW]",
      removed: "[REMOVED]",
      modified: "[MODIFIED]",
      unchanged: "",
    }[toolkitChange.changeType];

    const versionSuffix =
      toolkitChange.versionChanged && toolkitChange.previousVersion !== "0.0.0"
        ? ` (version ${toolkitChange.previousVersion} -> ${toolkitChange.currentVersion})`
        : toolkitChange.versionChanged
          ? ` (version -> ${toolkitChange.currentVersion})`
          : "";

    lines.push(
      `${changeLabel} ${toolkitChange.toolkitId} (${toolkitChange.currentToolCount} tools)${versionSuffix}`
    );

    // Show tool-level changes for modified toolkits
    if (
      toolkitChange.changeType === "modified" ||
      toolkitChange.changeType === "added"
    ) {
      if (
        toolkitChange.changeType === "modified" &&
        toolkitChange.toolChanges.length === 0 &&
        toolkitChange.versionChanged
      ) {
        lines.push("  ~ version update only");
      }
      for (const toolChange of toolkitChange.toolChanges) {
        const toolLabel = {
          added: "  + ",
          removed: "  - ",
          modified: "  ~ ",
        }[toolChange.changeType];

        lines.push(`${toolLabel}${toolChange.toolName}`);
      }
    }

    if (toolkitChange.changeType === "removed") {
      lines.push("  ~ not returned by API; existing docs retained");
    }
  }

  return lines;
};
