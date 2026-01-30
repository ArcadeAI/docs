/**
 * Change Detection Module
 *
 * Exports change detection functionality for comparing API data with previous output.
 */

export {
  buildToolDefinitionSignature,
  type ChangeDetectionResult,
  type ChangeSummary,
  compareToolkit,
  compareTools,
  detectChanges,
  formatChangeSummary,
  formatDetailedChanges,
  getChangedToolkitIds,
  hasChanges,
  type ToolChange,
  type ToolChangeType,
  type ToolkitChange,
  type ToolkitChangeType,
} from "./toolkit-diff.js";
