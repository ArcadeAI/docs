/**
 * Metadata Freshness Check
 *
 * Compares the previously generated toolkit metadata with the current
 * design system metadata and reports field-level drifts.
 *
 * This is a modular, pure step that can run as part of the merge pipeline
 * or independently (e.g. in a CI check).
 */
import type { MergedToolkit, MergedToolkitMetadata } from "../types/index.js";

// ============================================================================
// Types
// ============================================================================

/** A single field that differs between previous and current metadata. */
export interface MetadataFieldChange {
  readonly field: string;
  readonly previous: unknown;
  readonly current: unknown;
}

/** Full result of a metadata freshness check for one toolkit. */
export interface MetadataFreshnessResult {
  readonly toolkitId: string;
  /** True when the toolkit transitioned from default metadata to real DS data. */
  readonly gainedDesignSystemMetadata: boolean;
  /** True when the toolkit label changed. */
  readonly labelChanged: boolean;
  readonly previousLabel: string | null;
  readonly currentLabel: string | null;
  /** Individual field diffs inside MergedToolkitMetadata. */
  readonly fieldChanges: readonly MetadataFieldChange[];
  /** True if there are any changes at all. */
  readonly hasChanges: boolean;
}

// ============================================================================
// Helpers
// ============================================================================

/** Fields inside MergedToolkitMetadata we compare. */
const METADATA_FIELDS: ReadonlyArray<keyof MergedToolkitMetadata> = [
  "category",
  "iconUrl",
  "isBYOC",
  "isPro",
  "type",
  "docsLink",
  "isComingSoon",
  "isHidden",
];

/**
 * Heuristic: metadata was built from defaults if the iconUrl follows the
 * default pattern AND category is "development" (the hardcoded default).
 */
const looksLikeDefaultMetadata = (
  toolkitId: string,
  metadata: MergedToolkitMetadata
): boolean => {
  const normalized = toolkitId.toLowerCase().replace(/[^a-z0-9]/g, "");
  const expectedDefaultIcon = `https://design-system.arcade.dev/icons/${
    normalized.endsWith("api") ? normalized.slice(0, -3) : normalized
  }.svg`;

  return (
    metadata.iconUrl === expectedDefaultIcon &&
    metadata.category === "development"
  );
};

// ============================================================================
// Core detection (pure)
// ============================================================================

/**
 * Detect metadata drifts between a previously generated toolkit and the
 * current design system metadata.
 *
 * Returns null when there is no previous toolkit to compare against
 * (nothing to check on a brand-new toolkit).
 */
export const detectMetadataChanges = (
  toolkitId: string,
  currentMetadata: MergedToolkitMetadata,
  currentLabel: string,
  previousToolkit: MergedToolkit | undefined
): MetadataFreshnessResult | null => {
  if (!previousToolkit) {
    return null;
  }

  const prev = previousToolkit.metadata;
  const fieldChanges: MetadataFieldChange[] = [];

  for (const field of METADATA_FIELDS) {
    const prevValue = prev[field];
    const currValue = currentMetadata[field];
    if (prevValue !== currValue) {
      fieldChanges.push({ field, previous: prevValue, current: currValue });
    }
  }

  const labelChanged = previousToolkit.label !== currentLabel;

  const gainedDesignSystemMetadata =
    looksLikeDefaultMetadata(toolkitId, prev) &&
    !looksLikeDefaultMetadata(toolkitId, currentMetadata);

  const hasChanges =
    fieldChanges.length > 0 || labelChanged || gainedDesignSystemMetadata;

  return {
    toolkitId,
    gainedDesignSystemMetadata,
    labelChanged,
    previousLabel: previousToolkit.label,
    currentLabel,
    fieldChanges,
    hasChanges,
  };
};

// ============================================================================
// Warning formatter (for merge pipeline integration)
// ============================================================================

/**
 * Convert a freshness result into human-readable warning strings
 * suitable for the merge pipeline's `warnings` array.
 */
export const formatFreshnessWarnings = (
  result: MetadataFreshnessResult
): string[] => {
  if (!result.hasChanges) {
    return [];
  }

  const warnings: string[] = [];
  const prefix = `[metadata-freshness] ${result.toolkitId}`;

  if (result.gainedDesignSystemMetadata) {
    warnings.push(
      `${prefix}: now has design system metadata (was using defaults)`
    );
  }

  if (result.labelChanged) {
    warnings.push(
      `${prefix}: label changed "${result.previousLabel}" → "${result.currentLabel}"`
    );
  }

  for (const change of result.fieldChanges) {
    warnings.push(
      `${prefix}: ${change.field} changed ${JSON.stringify(change.previous)} → ${JSON.stringify(change.current)}`
    );
  }

  return warnings;
};
