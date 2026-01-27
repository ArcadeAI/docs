/**
 * Change Detection Module
 *
 * Exports change detection functionality for comparing API data with previous output.
 */

export {
  type ChangeDetectionResult,
  type ChangeSummary,
  type ToolChange,
  type ToolChangeType,
  type ToolkitChange,
  type ToolkitChangeType,
  buildToolDefinitionSignature,
  compareToolkit,
  compareTools,
  detectChanges,
  formatChangeSummary,
  formatDetailedChanges,
  getChangedToolkitIds,
  hasChanges,
} from "./toolkit-diff.js";
