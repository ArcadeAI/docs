/**
 * Tests for check-toolkit-coverage.ts
 *
 * Run with: npx vitest run tests/scripts/check-toolkit-coverage.test.ts
 */

import { describe, expect, it } from "vitest";
import {
  checkCoverage,
  normalizeId,
  parseSidebarEntries,
  parseSkipFile,
  readIndexIds,
  readJsonFileStems,
  readSidebarEntries,
  readSkipIds,
  type ToolkitSummaryEntry,
} from "../../scripts/check-toolkit-coverage";

// ── Helpers ───────────────────────────────────────────────────────────────────

const entry = (name: string, toolCount = 5): ToolkitSummaryEntry => ({
  name,
  version: "1.0.0",
  toolCount,
});

// ── normalizeId ───────────────────────────────────────────────────────────────

describe("normalizeId", () => {
  it("lowercases plain names", () => {
    expect(normalizeId("Github")).toBe("github");
  });

  it("strips hyphens (kebab-case sidebar keys)", () => {
    expect(normalizeId("google-calendar")).toBe("googlecalendar");
  });

  it("lowercases and strips hyphens together", () => {
    expect(normalizeId("Google-Calendar")).toBe("googlecalendar");
  });

  it("handles already-normalized names", () => {
    expect(normalizeId("googlecalendar")).toBe("googlecalendar");
  });
});

// ── checkCoverage ─────────────────────────────────────────────────────────────

describe("checkCoverage", () => {
  it("returns empty report when everything matches", () => {
    const apiToolkits = [entry("Github"), entry("Slack")];
    const jsonFiles = ["github", "slack"];
    const sidebarEntries = new Set(["github", "slack"]);

    const report = checkCoverage(apiToolkits, jsonFiles, sidebarEntries);

    expect(report.missingJson).toHaveLength(0);
    expect(report.missingFromApi).toHaveLength(0);
    expect(report.missingFromSidebar).toHaveLength(0);
  });

  it("detects API toolkit with no JSON file", () => {
    const apiToolkits = [entry("Github"), entry("Attio")];
    const jsonFiles = ["github"];
    const sidebarEntries = new Set(["github"]);

    const report = checkCoverage(apiToolkits, jsonFiles, sidebarEntries);

    expect(report.missingJson).toEqual([
      { name: "Attio", version: "1.0.0", toolCount: 5 },
    ]);
    expect(report.missingFromSidebar).toHaveLength(0);
  });

  it("detects JSON file with no API entry (orphaned)", () => {
    const apiToolkits = [entry("Github")];
    const jsonFiles = ["github", "complextools", "test2"];
    const sidebarEntries = new Set(["github", "complextools", "test2"]);

    const report = checkCoverage(apiToolkits, jsonFiles, sidebarEntries);

    expect(report.missingFromApi).toContain("complextools");
    expect(report.missingFromApi).toContain("test2");
  });

  it("detects API toolkit with JSON but missing from sidebar", () => {
    const apiToolkits = [entry("Github"), entry("Slack")];
    const jsonFiles = ["github", "slack"];
    const sidebarEntries = new Set(["github"]); // slack missing

    const report = checkCoverage(apiToolkits, jsonFiles, sidebarEntries);

    expect(report.missingFromSidebar).toEqual([
      { name: "Slack", version: "1.0.0", toolCount: 5 },
    ]);
    expect(report.missingJson).toHaveLength(0);
  });

  it("does not double-count: toolkit missing JSON is not also flagged as missing sidebar", () => {
    const apiToolkits = [entry("Attio")];
    const jsonFiles: string[] = [];
    const sidebarEntries = new Set<string>();

    const report = checkCoverage(apiToolkits, jsonFiles, sidebarEntries);

    expect(report.missingJson).toHaveLength(1);
    expect(report.missingFromSidebar).toHaveLength(0);
  });

  it("normalizes names case-insensitively for JSON matching", () => {
    const apiToolkits = [entry("GoogleCalendar")];
    const jsonFiles = ["googlecalendar"]; // lowercase file on disk
    const sidebarEntries = new Set(["google-calendar"]); // kebab in _meta.tsx

    const report = checkCoverage(apiToolkits, jsonFiles, sidebarEntries);

    expect(report.missingJson).toHaveLength(0);
    expect(report.missingFromSidebar).toHaveLength(0);
  });

  it("handles empty API response gracefully", () => {
    const report = checkCoverage([], ["github", "slack"], new Set(["github"]));

    expect(report.missingJson).toHaveLength(0);
    expect(report.missingFromApi).toEqual(["github", "slack"]);
    expect(report.missingFromSidebar).toHaveLength(0);
  });

  it("handles empty local files gracefully", () => {
    const apiToolkits = [entry("Github")];
    const report = checkCoverage(apiToolkits, [], new Set());

    expect(report.missingJson).toHaveLength(1);
    expect(report.missingFromSidebar).toHaveLength(0);
    expect(report.missingFromApi).toHaveLength(0);
  });

  it("handles all sources empty", () => {
    const report = checkCoverage([], [], new Set());

    expect(report.missingJson).toHaveLength(0);
    expect(report.missingFromApi).toHaveLength(0);
    expect(report.missingFromSidebar).toHaveLength(0);
  });

  it("correctly counts tool count in missing entries", () => {
    const apiToolkits = [entry("Attio", 42)];
    const report = checkCoverage(apiToolkits, [], new Set());

    expect(report.missingJson[0]?.toolCount).toBe(42);
  });
});

// ── parseSidebarEntries ───────────────────────────────────────────────────────

describe("parseSidebarEntries", () => {
  it("extracts bare identifier keys", () => {
    const content = `
const meta = {
  github: { title: "GitHub", href: "/en/resources/integrations/development/github" },
  slack: { title: "Slack", href: "/en/resources/integrations/social/slack" },
};
export default meta;
    `;
    const entries = parseSidebarEntries(content);
    expect(entries).toContain("github");
    expect(entries).toContain("slack");
  });

  it("extracts quoted string keys (kebab-case)", () => {
    const content = `
const meta = {
  "google-calendar": { title: "Google Calendar", href: "..." },
};
export default meta;
    `;
    const entries = parseSidebarEntries(content);
    expect(entries).toContain("google-calendar");
  });

  it("excludes separator entries starting with --", () => {
    const content = `
const meta = {
  "-- Optimized": { type: "separator", title: "Optimized" },
  github: { title: "GitHub", href: "..." },
  "-- Starter": { type: "separator", title: "Starter" },
  "arcade-engine-api": { title: "Arcade Engine API", href: "..." },
};
export default meta;
    `;
    const entries = parseSidebarEntries(content);
    expect(entries).not.toContain("-- Optimized");
    expect(entries).not.toContain("-- Starter");
    expect(entries).toContain("github");
    expect(entries).toContain("arcade-engine-api");
  });

  it("returns empty array for empty content", () => {
    expect(parseSidebarEntries("")).toHaveLength(0);
  });

  it("extracts slug values from createCategoryMeta format", () => {
    const content = `
import { createCategoryMeta } from "../create-category-meta";

export default createCategoryMeta([
  {
    slug: "imgflip",
    title: "Imgflip",
    href: "/en/resources/integrations/entertainment/imgflip",
    type: "arcade",
  },
  {
    slug: "spotify",
    title: "Spotify",
    href: "/en/resources/integrations/entertainment/spotify",
    type: "arcade",
  },
]);
    `;
    const entries = parseSidebarEntries(content);
    expect(entries).toContain("imgflip");
    expect(entries).toContain("spotify");
  });

  it("handles type: separator format without crashes", () => {
    const content = `
const meta: MetaRecord = {
  "-- Section": { type: "separator", title: "Section" },
  brightdata: { title: "Bright Data", href: "/..." },
};
    `;
    const entries = parseSidebarEntries(content);
    expect(entries).toContain("brightdata");
  });
});

// ── readJsonFileStems ─────────────────────────────────────────────────────────

describe("readJsonFileStems", () => {
  it("returns empty array for a non-existent directory", () => {
    const stems = readJsonFileStems("/this/path/does/not/exist");
    expect(stems).toEqual([]);
  });
});

// ── readSidebarEntries ────────────────────────────────────────────────────────

describe("readSidebarEntries", () => {
  it("returns empty set for a non-existent directory", () => {
    const entries = readSidebarEntries("/this/path/does/not/exist");
    expect(entries.size).toBe(0);
  });
});

// ── readIndexIds ──────────────────────────────────────────────────────────────

describe("readIndexIds", () => {
  it("returns empty array for a non-existent directory", () => {
    expect(readIndexIds("/this/path/does/not/exist")).toEqual([]);
  });
});

// ── index.json drift via checkCoverage ───────────────────────────────────────

describe("checkCoverage — index.json drift", () => {
  it("is clean when index matches JSON files exactly", () => {
    const report = checkCoverage([], ["github", "slack"], new Set(), [
      "Github",
      "Slack",
    ]);
    expect(report.indexOrphans).toHaveLength(0);
    expect(report.missingFromIndex).toHaveLength(0);
  });

  it("detects index entry whose JSON file was deleted", () => {
    // github.json was deleted but index.json still has Github
    const report = checkCoverage([], ["slack"], new Set(), ["Github", "Slack"]);
    expect(report.indexOrphans).toContain("Github");
    expect(report.missingFromIndex).toHaveLength(0);
  });

  it("detects JSON file not listed in index.json", () => {
    // slack.json was added but index.json was not updated
    const report = checkCoverage([], ["github", "slack"], new Set(), [
      "Github",
    ]);
    expect(report.missingFromIndex).toContain("slack");
    expect(report.indexOrphans).toHaveLength(0);
  });

  it("normalizes casing when comparing index IDs to file stems", () => {
    // index uses CamelCase; files are lowercase on disk
    const report = checkCoverage([], ["googlecalendar"], new Set(), [
      "GoogleCalendar",
    ]);
    expect(report.indexOrphans).toHaveLength(0);
    expect(report.missingFromIndex).toHaveLength(0);
  });

  it("works with empty index (backward compat if index.json is missing)", () => {
    const report = checkCoverage([], ["github", "slack"], new Set(), []);
    expect(report.missingFromIndex).toEqual(["github", "slack"]);
    expect(report.indexOrphans).toHaveLength(0);
  });

  it("flags the exact toolkits that were stale in the original incident", () => {
    // Simulates complextools / deepwiki / test2 being deleted from JSON
    // but left dangling in index.json
    const report = checkCoverage([], ["github"], new Set(["github"]), [
      "Github",
      "ComplexTools",
      "Deepwiki",
      "Test2",
    ]);
    expect(report.indexOrphans).toEqual(
      expect.arrayContaining(["ComplexTools", "Deepwiki", "Test2"])
    );
    expect(report.indexOrphans).not.toContain("Github");
  });
});

// ── parseSkipFile ─────────────────────────────────────────────────────────────

describe("parseSkipFile", () => {
  it("parses plain toolkit IDs", () => {
    const result = parseSkipFile("Google\nMicrosoft\n");
    expect(result).toEqual(["Google", "Microsoft"]);
  });

  it("strips comment lines", () => {
    const result = parseSkipFile(
      "# Toolkits to exclude\nGoogle\n# another comment\nMicrosoft"
    );
    expect(result).toEqual(["Google", "Microsoft"]);
  });

  it("strips blank lines", () => {
    const result = parseSkipFile("Google\n\n\nMicrosoft\n");
    expect(result).toEqual(["Google", "Microsoft"]);
  });

  it("returns empty array for empty content", () => {
    expect(parseSkipFile("")).toEqual([]);
    expect(parseSkipFile("# only comments\n")).toEqual([]);
  });
});

// ── readSkipIds ───────────────────────────────────────────────────────────────

describe("readSkipIds", () => {
  it("returns empty set for a non-existent directory", () => {
    expect(readSkipIds("/this/path/does/not/exist").size).toBe(0);
  });
});

// ── skip list filtering via checkCoverage ─────────────────────────────────────

describe("checkCoverage — skip list filtering", () => {
  const skipIds = new Set([
    "complextools",
    "deepwiki",
    "test2",
    "myserver",
    "mytest",
  ]);

  it("does not flag excluded toolkits as missing JSON", () => {
    const apiToolkits = [
      entry("ComplexTools"),
      entry("Github"),
      entry("Deepwiki"),
    ];
    const report = checkCoverage(
      apiToolkits,
      ["github"],
      new Set(["github"]),
      [],
      skipIds
    );
    expect(report.missingJson).toHaveLength(0);
  });

  it("does not flag excluded toolkits as missing from sidebar", () => {
    const apiToolkits = [entry("ComplexTools"), entry("Github")];
    const report = checkCoverage(
      apiToolkits,
      ["github", "complextools"],
      new Set(["github"]), // complextools not in sidebar
      [],
      skipIds
    );
    expect(report.missingFromSidebar).toHaveLength(0);
  });

  it("does not flag orphaned index entries for excluded toolkits", () => {
    // ComplexTools is in index.json but its JSON file was deleted — expected, it's excluded
    const report = checkCoverage(
      [],
      ["github"],
      new Set(),
      ["Github", "ComplexTools"],
      skipIds
    );
    expect(report.indexOrphans).toHaveLength(0);
  });

  it("does not flag missing index entries for excluded toolkit files", () => {
    // If somehow an excluded file exists on disk, don't warn about index missing
    const report = checkCoverage(
      [],
      ["github", "complextools"],
      new Set(),
      ["Github"],
      skipIds
    );
    expect(report.missingFromIndex).not.toContain("complextools");
  });

  it("still reports non-excluded toolkits normally", () => {
    const apiToolkits = [entry("Attio"), entry("ComplexTools")];
    const report = checkCoverage(apiToolkits, [], new Set(), [], skipIds);
    expect(report.missingJson).toHaveLength(1);
    expect(report.missingJson[0]?.name).toBe("Attio");
  });
});
