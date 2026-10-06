import { describe, expect, it } from "vitest";

import {
  detectSummaryChanges,
  formatSummaryChangeSummary,
  getChangedToolkitIdsFromSummary,
  hasSummaryChanges,
  type SummaryToolkit,
} from "../../src/diff/index";
import type { MergedToolkit } from "../../src/types/index";

const createMergedToolkit = (id: string, version: string): MergedToolkit => ({
  auth: null,
  customImports: [],
  description: "A toolkit",
  documentationChunks: [],
  generatedAt: new Date().toISOString(),
  id,
  label: id,
  metadata: {
    category: "development",
    docsLink: "https://docs.example.com",
    iconUrl: "https://example.com/icon.svg",
    isBYOC: false,
    isComingSoon: false,
    isHidden: false,
    isPro: false,
    type: "arcade",
  },
  subPages: [],
  tools: [],
  version,
});

describe("detectSummaryChanges", () => {
  it("marks unchanged and modified toolkits by version", () => {
    const summary: SummaryToolkit[] = [
      {
        name: "Github",
        requiresOauth: true,
        requiresSecrets: true,
        toolCount: 10,
        version: "1.0.1",
      },
      {
        name: "Slack",
        requiresOauth: true,
        requiresSecrets: false,
        toolCount: 8,
        version: "1.0.0",
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
        requiresOauth: true,
        requiresSecrets: true,
        toolCount: 10,
        version: "1.0.0",
      },
      {
        name: "Jira",
        requiresOauth: false,
        requiresSecrets: false,
        toolCount: 5,
        version: "2.0.0",
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
        requiresOauth: true,
        requiresSecrets: true,
        toolCount: 10,
        version: "1.0.1",
      },
      {
        name: "Jira",
        requiresOauth: false,
        requiresSecrets: false,
        toolCount: 5,
        version: "2.0.0",
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
        requiresOauth: true,
        requiresSecrets: true,
        toolCount: 12,
        version: "2.0.0",
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
        requiresOauth: true,
        requiresSecrets: true,
        toolCount: 10,
        version: "1.0.1",
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
