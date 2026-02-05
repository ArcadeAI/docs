import { describe, expect, it } from "vitest";

import {
  detectSummaryChanges,
  formatSummaryChangeSummary,
  getChangedToolkitIdsFromSummary,
  hasSummaryChanges,
  type SummaryToolkit,
} from "../../src/diff/index.js";
import type { MergedToolkit } from "../../src/types/index.js";

const createMergedToolkit = (id: string, version: string): MergedToolkit => ({
  id,
  label: id,
  version,
  description: "A toolkit",
  metadata: {
    category: "development",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.example.com",
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  tools: [],
  documentationChunks: [],
  customImports: [],
  subPages: [],
  generatedAt: new Date().toISOString(),
});

describe("detectSummaryChanges", () => {
  it("marks unchanged and modified toolkits by version", () => {
    const summary: SummaryToolkit[] = [
      {
        name: "Github",
        version: "1.0.1",
        toolCount: 10,
        requiresSecrets: true,
        requiresOauth: true,
      },
      {
        name: "Slack",
        version: "1.0.0",
        toolCount: 8,
        requiresSecrets: false,
        requiresOauth: true,
      },
    ];

    const previous = new Map<string, MergedToolkit>([
      ["github", createMergedToolkit("Github", "1.0.0")],
      ["slack", createMergedToolkit("Slack", "1.0.0")],
    ]);

    const result = detectSummaryChanges(summary, previous);

    expect(result.summary.modifiedToolkits).toBe(1);
    expect(result.summary.unchangedToolkits).toBe(1);
    expect(hasSummaryChanges(result)).toBe(true);
  });

  it("includes new and removed toolkits in the summary", () => {
    const summary: SummaryToolkit[] = [
      {
        name: "Github",
        version: "1.0.0",
        toolCount: 10,
        requiresSecrets: true,
        requiresOauth: true,
      },
      {
        name: "Jira",
        version: "2.0.0",
        toolCount: 5,
        requiresSecrets: false,
        requiresOauth: false,
      },
    ];

    const previous = new Map<string, MergedToolkit>([
      ["github", createMergedToolkit("Github", "1.0.0")],
      ["slack", createMergedToolkit("Slack", "1.0.0")],
    ]);

    const result = detectSummaryChanges(summary, previous);

    expect(result.summary.newToolkits).toBe(1);
    expect(result.summary.removedToolkits).toBe(1);
  });

  it("returns changed toolkit IDs for added and modified toolkits", () => {
    const summary: SummaryToolkit[] = [
      {
        name: "Github",
        version: "1.0.1",
        toolCount: 10,
        requiresSecrets: true,
        requiresOauth: true,
      },
      {
        name: "Jira",
        version: "2.0.0",
        toolCount: 5,
        requiresSecrets: false,
        requiresOauth: false,
      },
    ];

    const previous = new Map<string, MergedToolkit>([
      ["github", createMergedToolkit("Github", "1.0.0")],
    ]);

    const result = detectSummaryChanges(summary, previous);
    const changedIds = getChangedToolkitIdsFromSummary(result);

    expect(changedIds).toEqual(["Github", "Jira"]);
  });

  it("normalizes toolkit names with spaces and punctuation", () => {
    const summary: SummaryToolkit[] = [
      {
        name: "Google Calendar",
        version: "2.0.0",
        toolCount: 12,
        requiresSecrets: true,
        requiresOauth: true,
      },
    ];

    const previous = new Map<string, MergedToolkit>([
      ["googlecalendar", createMergedToolkit("GoogleCalendar", "1.0.0")],
    ]);

    const result = detectSummaryChanges(summary, previous);
    const changedIds = getChangedToolkitIdsFromSummary(result);

    expect(changedIds).toEqual(["Google Calendar"]);
  });

  it("formats summary change output", () => {
    const summary: SummaryToolkit[] = [
      {
        name: "Github",
        version: "1.0.1",
        toolCount: 10,
        requiresSecrets: true,
        requiresOauth: true,
      },
    ];

    const previous = new Map<string, MergedToolkit>([
      ["github", createMergedToolkit("Github", "1.0.0")],
    ]);

    const result = detectSummaryChanges(summary, previous);
    const formatted = formatSummaryChangeSummary(result);

    expect(formatted).toContain("modified toolkit");
  });
});
