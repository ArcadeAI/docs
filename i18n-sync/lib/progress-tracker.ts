import type { ProgressStats } from "../types";

/**
 * Progress tracker for translation operations
 */
export class ProgressTracker {
  completed = 0;
  successes = 0;
  failures = 0;
  startTime = Date.now();
  private readonly processingTimes: number[] = [];
  private readonly totalCount: number;

  constructor(total: number) {
    this.totalCount = total;
  }

  incrementSuccess(processingTime?: number): void {
    this.completed++;
    this.successes++;
    if (processingTime) {
      this.processingTimes.push(processingTime);
    }
  }

  incrementFailure(processingTime?: number): void {
    this.completed++;
    this.failures++;
    if (processingTime) {
      this.processingTimes.push(processingTime);
    }
  }

  getElapsedTime(): number {
    return Date.now() - this.startTime;
  }

  getRemainingTime(): string {
    if (this.completed === 0) {
      return "calculating...";
    }

    const avgTime =
      this.processingTimes.length > 0
        ? this.processingTimes.reduce((a, b) => a + b, 0) /
          this.processingTimes.length
        : this.getElapsedTime() / this.completed;

    const remainingMs = avgTime * (this.totalCount - this.completed);
    const minuteInMs = 60_000;
    const secondInMs = 1000;

    return remainingMs < minuteInMs
      ? `${Math.round(remainingMs / secondInMs)}s`
      : `${Math.round(remainingMs / minuteInMs)}m`;
  }

  getStats(): ProgressStats {
    return {
      total: this.totalCount,
      completed: this.completed,
      successes: this.successes,
      failures: this.failures,
      elapsed: this.getElapsedTime(),
      remaining: this.getRemainingTime(),
    };
  }
}
