/**
 * Progress tracking utility for CLI output
 */

import chalk from "chalk";

export interface ProgressEvent {
  readonly type: "start" | "update" | "complete" | "error";
  readonly toolkitId: string;
  readonly current: number;
  readonly total: number;
  readonly toolCount?: number | undefined;
  readonly message?: string | undefined;
}

export interface ProgressTrackerConfig {
  /** Total number of items to process */
  readonly total: number;
  /** Progress bar width in characters (default: 30) */
  readonly barWidth?: number;
  /** Show percentage (default: true) */
  readonly showPercentage?: boolean;
  /** Show count (default: true) */
  readonly showCount?: boolean;
  /** Show elapsed time (default: true) */
  readonly showElapsed?: boolean;
  /** Callback when progress updates */
  readonly onUpdate?: ((event: ProgressEvent) => void) | undefined;
}

interface ToolkitProgress {
  readonly toolkitId: string;
  readonly status: "pending" | "in_progress" | "done" | "error";
  readonly toolCount?: number | undefined;
  readonly startedAt?: number | undefined;
  readonly completedAt?: number | undefined;
}

/**
 * Format milliseconds to human-readable duration
 */
const formatDuration = (ms: number): string => {
  if (ms < 1000) {
    return `${ms}ms`;
  }
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) {
    return `${seconds}s`;
  }
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes < 60) {
    return `${minutes}m ${remainingSeconds}s`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

/**
 * Create a visual progress bar
 */
const createProgressBar = (
  current: number,
  total: number,
  width: number
): string => {
  const percentage = total > 0 ? current / total : 0;
  const filled = Math.round(percentage * width);
  const empty = width - filled;

  const filledBar = "█".repeat(filled);
  const emptyBar = "░".repeat(empty);

  return `${chalk.green(filledBar)}${chalk.dim(emptyBar)}`;
};

/**
 * Progress tracker for batch operations
 */
export class ProgressTracker {
  private readonly total: number;
  private readonly barWidth: number;
  private readonly showPercentage: boolean;
  private readonly showCount: boolean;
  private readonly showElapsed: boolean;
  private readonly onUpdate: ((event: ProgressEvent) => void) | undefined;
  private readonly startedAt: number;
  private readonly toolkitProgress: Map<string, ToolkitProgress>;
  private completed: number;

  constructor(config: ProgressTrackerConfig) {
    this.total = config.total;
    this.barWidth = config.barWidth ?? 30;
    this.showPercentage = config.showPercentage ?? true;
    this.showCount = config.showCount ?? true;
    this.showElapsed = config.showElapsed ?? true;
    this.onUpdate = config.onUpdate;
    this.startedAt = Date.now();
    this.toolkitProgress = new Map();
    this.completed = 0;
  }

  /**
   * Mark a toolkit as started
   */
  start(toolkitId: string): void {
    this.toolkitProgress.set(toolkitId, {
      toolkitId,
      status: "in_progress",
      startedAt: Date.now(),
    });

    this.onUpdate?.({
      type: "start",
      toolkitId,
      current: this.completed,
      total: this.total,
    });
  }

  /**
   * Mark a toolkit as completed
   */
  complete(toolkitId: string, toolCount?: number): void {
    const existing = this.toolkitProgress.get(toolkitId);
    this.toolkitProgress.set(toolkitId, {
      toolkitId,
      status: "done",
      toolCount,
      startedAt: existing?.startedAt,
      completedAt: Date.now(),
    });

    this.completed += 1;

    this.onUpdate?.({
      type: "complete",
      toolkitId,
      current: this.completed,
      total: this.total,
      toolCount,
    });
  }

  /**
   * Mark a toolkit as errored
   */
  error(toolkitId: string, message: string): void {
    const existing = this.toolkitProgress.get(toolkitId);
    this.toolkitProgress.set(toolkitId, {
      toolkitId,
      status: "error",
      startedAt: existing?.startedAt,
      completedAt: Date.now(),
    });

    this.completed += 1;

    this.onUpdate?.({
      type: "error",
      toolkitId,
      current: this.completed,
      total: this.total,
      message,
    });
  }

  /**
   * Get the current progress percentage
   */
  getPercentage(): number {
    return this.total > 0 ? Math.round((this.completed / this.total) * 100) : 0;
  }

  /**
   * Get elapsed time in milliseconds
   */
  getElapsedMs(): number {
    return Date.now() - this.startedAt;
  }

  /**
   * Estimate remaining time based on current progress
   */
  getEstimatedRemainingMs(): number | null {
    if (this.completed === 0) {
      return null;
    }
    const avgTimePerItem = this.getElapsedMs() / this.completed;
    const remaining = this.total - this.completed;
    return Math.round(avgTimePerItem * remaining);
  }

  /**
   * Get a formatted progress string for display
   */
  getProgressString(currentToolkit?: string): string {
    const parts: string[] = [];

    // Progress bar
    const bar = createProgressBar(this.completed, this.total, this.barWidth);
    parts.push(bar);

    // Count
    if (this.showCount) {
      parts.push(chalk.cyan(`${this.completed}/${this.total}`));
    }

    // Percentage
    if (this.showPercentage) {
      parts.push(chalk.dim(`(${this.getPercentage()}%)`));
    }

    // Current toolkit
    if (currentToolkit) {
      parts.push(chalk.yellow(currentToolkit));
    }

    // Elapsed time
    if (this.showElapsed) {
      const elapsed = formatDuration(this.getElapsedMs());
      const remaining = this.getEstimatedRemainingMs();
      if (remaining !== null && this.completed < this.total) {
        parts.push(
          chalk.dim(
            `[${elapsed} elapsed, ~${formatDuration(remaining)} remaining]`
          )
        );
      } else {
        parts.push(chalk.dim(`[${elapsed}]`));
      }
    }

    return parts.join(" ");
  }

  /**
   * Get summary statistics
   */
  getSummary(): {
    total: number;
    completed: number;
    errors: number;
    totalTools: number;
    elapsed: string;
    avgTimePerToolkit: string;
  } {
    let errors = 0;
    let totalTools = 0;

    for (const progress of this.toolkitProgress.values()) {
      if (progress.status === "error") {
        errors += 1;
      }
      if (progress.toolCount) {
        totalTools += progress.toolCount;
      }
    }

    const elapsed = this.getElapsedMs();
    const avgTime = this.completed > 0 ? elapsed / this.completed : 0;

    return {
      total: this.total,
      completed: this.completed,
      errors,
      totalTools,
      elapsed: formatDuration(elapsed),
      avgTimePerToolkit: formatDuration(avgTime),
    };
  }
}

/**
 * Create a progress callback for use with DataMerger
 */
export const createMergerProgressCallback = (
  tracker: ProgressTracker,
  getSpinnerText: (text: string) => void
): ((
  toolkitId: string,
  status: "start" | "done",
  toolCount?: number
) => void) => {
  return (toolkitId: string, status: "start" | "done", toolCount?: number) => {
    if (status === "start") {
      tracker.start(toolkitId);
      getSpinnerText(tracker.getProgressString(toolkitId));
    } else {
      tracker.complete(toolkitId, toolCount);
      getSpinnerText(tracker.getProgressString());
    }
  };
};

/**
 * Extended progress callback interface for DataMerger
 */
export type ExtendedProgressCallback = (
  toolkitId: string,
  status: "start" | "done",
  toolCount?: number
) => void;

/**
 * Factory function to create a progress tracker
 */
export const createProgressTracker = (
  config: ProgressTrackerConfig
): ProgressTracker => new ProgressTracker(config);

/**
 * Format a summary line for completed toolkit
 */
export const formatToolkitComplete = (
  toolkitId: string,
  toolCount: number,
  durationMs?: number
): string => {
  const duration = durationMs
    ? chalk.dim(` (${formatDuration(durationMs)})`)
    : "";
  return `${chalk.green("✓")} ${toolkitId}: ${toolCount} tools${duration}`;
};

/**
 * Format a summary line for errored toolkit
 */
export const formatToolkitError = (
  toolkitId: string,
  error: string
): string => {
  return `${chalk.red("✗")} ${toolkitId}: ${error}`;
};

export { formatDuration };
