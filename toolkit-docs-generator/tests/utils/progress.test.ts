import { describe, expect, it, vi } from "vitest";
import {
  createProgressTracker,
  formatDuration,
  formatToolkitComplete,
  formatToolkitError,
} from "../../src/utils/progress.js";

describe("formatDuration", () => {
  it("formats milliseconds", () => {
    expect(formatDuration(500)).toBe("500ms");
    expect(formatDuration(999)).toBe("999ms");
  });

  it("formats seconds", () => {
    expect(formatDuration(1000)).toBe("1s");
    expect(formatDuration(5000)).toBe("5s");
    expect(formatDuration(59_000)).toBe("59s");
  });

  it("formats minutes and seconds", () => {
    expect(formatDuration(60_000)).toBe("1m 0s");
    expect(formatDuration(90_000)).toBe("1m 30s");
    expect(formatDuration(3_599_000)).toBe("59m 59s");
  });

  it("formats hours and minutes", () => {
    expect(formatDuration(3_600_000)).toBe("1h 0m");
    expect(formatDuration(7_200_000)).toBe("2h 0m");
    expect(formatDuration(5_400_000)).toBe("1h 30m");
  });
});

describe("ProgressTracker", () => {
  it("initializes with correct total", () => {
    const tracker = createProgressTracker({ total: 10 });
    expect(tracker.getPercentage()).toBe(0);
  });

  it("tracks progress when items start", () => {
    const tracker = createProgressTracker({ total: 5 });

    tracker.start("Toolkit1");
    expect(tracker.getPercentage()).toBe(0); // Not completed yet
  });

  it("tracks progress when items complete", () => {
    const tracker = createProgressTracker({ total: 5 });

    tracker.start("Toolkit1");
    tracker.complete("Toolkit1", 10);
    expect(tracker.getPercentage()).toBe(20);

    tracker.start("Toolkit2");
    tracker.complete("Toolkit2", 5);
    expect(tracker.getPercentage()).toBe(40);
  });

  it("calculates percentage correctly", () => {
    const tracker = createProgressTracker({ total: 4 });

    tracker.start("T1");
    tracker.complete("T1");
    expect(tracker.getPercentage()).toBe(25);

    tracker.start("T2");
    tracker.complete("T2");
    expect(tracker.getPercentage()).toBe(50);

    tracker.start("T3");
    tracker.complete("T3");
    expect(tracker.getPercentage()).toBe(75);

    tracker.start("T4");
    tracker.complete("T4");
    expect(tracker.getPercentage()).toBe(100);
  });

  it("handles errors", () => {
    const tracker = createProgressTracker({ total: 3 });

    tracker.start("T1");
    tracker.complete("T1", 10);

    tracker.start("T2");
    tracker.error("T2", "Something went wrong");

    expect(tracker.getPercentage()).toBe(67); // 2/3 rounded

    const summary = tracker.getSummary();
    expect(summary.errors).toBe(1);
    expect(summary.completed).toBe(2);
  });

  it("calls onUpdate callback on start", () => {
    const onUpdate = vi.fn();
    const tracker = createProgressTracker({ total: 2, onUpdate });

    tracker.start("Toolkit1");

    expect(onUpdate).toHaveBeenCalledWith({
      type: "start",
      toolkitId: "Toolkit1",
      current: 0,
      total: 2,
    });
  });

  it("calls onUpdate callback on complete with tool count", () => {
    const onUpdate = vi.fn();
    const tracker = createProgressTracker({ total: 2, onUpdate });

    tracker.start("Toolkit1");
    tracker.complete("Toolkit1", 15);

    expect(onUpdate).toHaveBeenCalledWith({
      type: "complete",
      toolkitId: "Toolkit1",
      current: 1,
      total: 2,
      toolCount: 15,
    });
  });

  it("calls onUpdate callback on error", () => {
    const onUpdate = vi.fn();
    const tracker = createProgressTracker({ total: 2, onUpdate });

    tracker.start("Toolkit1");
    tracker.error("Toolkit1", "Failed!");

    expect(onUpdate).toHaveBeenCalledWith({
      type: "error",
      toolkitId: "Toolkit1",
      current: 1,
      total: 2,
      message: "Failed!",
    });
  });

  it("tracks elapsed time", async () => {
    const tracker = createProgressTracker({ total: 1 });

    // Wait a bit
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(tracker.getElapsedMs()).toBeGreaterThanOrEqual(50);
  });

  it("estimates remaining time", () => {
    const tracker = createProgressTracker({ total: 10 });

    // No estimate when nothing completed
    expect(tracker.getEstimatedRemainingMs()).toBeNull();

    // Complete one item
    tracker.start("T1");
    tracker.complete("T1");

    // Now we can estimate (9 remaining * avg time per item)
    const remaining = tracker.getEstimatedRemainingMs();
    expect(remaining).not.toBeNull();
    expect(remaining).toBeGreaterThanOrEqual(0);
  });

  it("generates progress string with all components", () => {
    const tracker = createProgressTracker({
      total: 10,
      barWidth: 10,
      showPercentage: true,
      showCount: true,
      showElapsed: true,
    });

    tracker.start("TestToolkit");
    tracker.complete("TestToolkit", 5);

    const progressString = tracker.getProgressString("CurrentToolkit");

    // Should contain progress bar characters
    expect(progressString).toMatch(/[█░]/);
    // Should contain count
    expect(progressString).toContain("1/10");
    // Should contain percentage
    expect(progressString).toContain("10%");
    // Should contain current toolkit name
    expect(progressString).toContain("CurrentToolkit");
    // Should contain elapsed time
    expect(progressString).toMatch(/\[.*\]/);
  });

  it("generates summary with all statistics", () => {
    const tracker = createProgressTracker({ total: 3 });

    tracker.start("T1");
    tracker.complete("T1", 10);

    tracker.start("T2");
    tracker.complete("T2", 5);

    tracker.start("T3");
    tracker.error("T3", "Failed");

    const summary = tracker.getSummary();

    expect(summary.total).toBe(3);
    expect(summary.completed).toBe(3); // Errors count as completed
    expect(summary.errors).toBe(1);
    expect(summary.totalTools).toBe(15); // 10 + 5, errored one has no tools
    expect(summary.elapsed).toBeDefined();
    expect(summary.avgTimePerToolkit).toBeDefined();
  });

  it("handles zero total gracefully", () => {
    const tracker = createProgressTracker({ total: 0 });

    expect(tracker.getPercentage()).toBe(0);
    expect(tracker.getProgressString()).toBeDefined();
  });
});

describe("formatToolkitComplete", () => {
  it("formats toolkit completion message", () => {
    const message = formatToolkitComplete("Slack", 12);
    expect(message).toContain("Slack");
    expect(message).toContain("12");
    expect(message).toContain("tools");
    expect(message).toContain("✓");
  });

  it("includes duration when provided", () => {
    const message = formatToolkitComplete("Github", 25, 1500);
    expect(message).toContain("Github");
    expect(message).toContain("25");
    expect(message).toContain("1s");
  });
});

describe("formatToolkitError", () => {
  it("formats toolkit error message", () => {
    const message = formatToolkitError("BrokenToolkit", "Connection failed");
    expect(message).toContain("BrokenToolkit");
    expect(message).toContain("Connection failed");
    expect(message).toContain("✗");
  });
});
