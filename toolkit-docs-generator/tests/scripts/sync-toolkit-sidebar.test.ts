/**
 * Tests for sync-toolkit-sidebar.ts
 *
 * Run with: npx vitest run tests/github-scripts/sync-toolkit-sidebar.test.ts
 * Or: npx vitest watch tests/github-scripts/sync-toolkit-sidebar.test.ts
 */

import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  buildToolkitInfoList,
  generateCategoryMeta,
  generateMainMeta,
  getToolkitCategory,
  getToolkitFiles,
  getToolkitLabel,
  getToolkitLabelFromJson,
  groupByCategory,
  syncToolkitSidebar,
  type ToolkitInfo,
} from "../../scripts/sync-toolkit-sidebar";

// Mock the design system
vi.mock("@arcadeai/design-system", () => ({
  TOOLKITS: [
    { id: "Gmail", label: "Gmail", category: "productivity" },
    { id: "Slack", label: "Slack", category: "social" },
    { id: "Github", label: "GitHub", category: "development" },
    { id: "Stripe", label: "Stripe", category: "payments" },
    { id: "Zendesk", label: "Zendesk", category: "customer-support" },
    { id: "GoogleSearch", label: "Google Search", category: "search" },
    { id: "Hubspot", label: "HubSpot", category: "sales" },
    { id: "Spotify", label: "Spotify", category: "entertainment" },
    { id: "Postgres", label: "Postgres", category: "databases" },
    {
      id: "HiddenToolkit",
      label: "Hidden",
      category: "productivity",
      isHidden: true,
    },
  ],
}));

// Test directory setup
const TEST_DIR = join(process.cwd(), ".test-sync-sidebar");
const TEST_DATA_DIR = join(TEST_DIR, "data/toolkits");
const TEST_INTEGRATIONS_DIR = join(TEST_DIR, "app/en/resources/integrations");

function setupTestDirs() {
  mkdirSync(TEST_DATA_DIR, { recursive: true });
  mkdirSync(TEST_INTEGRATIONS_DIR, { recursive: true });
}

function cleanupTestDirs() {
  if (existsSync(TEST_DIR)) {
    rmSync(TEST_DIR, { recursive: true });
  }
}

function createToolkitJson(slug: string, data: object = {}) {
  const filePath = join(TEST_DATA_DIR, `${slug}.json`);
  writeFileSync(filePath, JSON.stringify({ id: slug, ...data }, null, 2));
}

// ============================================================================
// Unit Tests: getToolkitFiles
// ============================================================================

describe("getToolkitFiles", () => {
  beforeEach(() => {
    setupTestDirs();
  });

  afterEach(() => {
    cleanupTestDirs();
  });

  it("returns empty array when directory does not exist", () => {
    const result = getToolkitFiles("/nonexistent");
    expect(result).toEqual([]);
  });

  it("returns JSON filenames without extension", () => {
    createToolkitJson("gmail");
    createToolkitJson("slack");
    writeFileSync(join(TEST_DATA_DIR, "index.json"), "{}");

    const result = getToolkitFiles(TEST_DATA_DIR);

    expect(result).toContain("gmail");
    expect(result).toContain("slack");
    expect(result).not.toContain("index");
  });
});

// ============================================================================
// Unit Tests: getToolkitCategory
// ============================================================================

describe("getToolkitCategory", () => {
  it("should return category for known toolkit", () => {
    expect(getToolkitCategory("Gmail")).toBe("productivity");
    expect(getToolkitCategory("Slack")).toBe("social");
  });

  it("should return null for unknown toolkit", () => {
    expect(getToolkitCategory("Unknown")).toBeNull();
  });

  it("should return null for hidden toolkit", () => {
    expect(getToolkitCategory("HiddenToolkit")).toBeNull();
  });
});

// ============================================================================
// Unit Tests: getToolkitLabel
// ============================================================================

describe("getToolkitLabel", () => {
  it("should return label for known toolkit", () => {
    expect(getToolkitLabel("Gmail")).toBe("Gmail");
    expect(getToolkitLabel("Github")).toBe("GitHub");
    expect(getToolkitLabel("GoogleSearch")).toBe("Google Search");
  });

  it("should return label for known toolkit regardless of case", () => {
    expect(getToolkitLabel("gmail")).toBe("Gmail");
    expect(getToolkitLabel("GITHUB")).toBe("GitHub");
  });

  it("should generate fallback label for unknown toolkit", () => {
    expect(getToolkitLabel("MyCustomToolkit")).toBe("My Custom Toolkit");
    expect(getToolkitLabel("APIHelper")).toBe("A P I Helper");
  });

  it("should handle single-word toolkit", () => {
    expect(getToolkitLabel("Test")).toBe("Test");
  });
});

// ============================================================================
// Unit Tests: getToolkitLabelFromJson
// ============================================================================

describe("getToolkitLabelFromJson", () => {
  beforeEach(() => {
    setupTestDirs();
  });

  afterEach(() => {
    cleanupTestDirs();
  });

  it("should return label from JSON file", () => {
    createToolkitJson("mytoolkit", { label: "My Custom Label" });

    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "mytoolkit");

    expect(result).toBe("My Custom Label");
  });

  it("should return name if label not present", () => {
    createToolkitJson("mytoolkit", { name: "Toolkit Name" });

    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "mytoolkit");

    expect(result).toBe("Toolkit Name");
  });

  it("should prefer label over name", () => {
    createToolkitJson("mytoolkit", { label: "Label", name: "Name" });

    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "mytoolkit");

    expect(result).toBe("Label");
  });

  it("should return null if file doesn't exist", () => {
    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "nonexistent");

    expect(result).toBeNull();
  });

  it("should handle invalid JSON", () => {
    const filePath = join(TEST_DATA_DIR, "invalid.json");
    writeFileSync(filePath, "{invalid json}");

    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "invalid");

    expect(result).toBeNull();
  });

  it("should return null if no label or name in JSON", () => {
    createToolkitJson("mytoolkit", { other: "data" });

    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "mytoolkit");

    expect(result).toBeNull();
  });
});

// ============================================================================
// Unit Tests: buildToolkitInfoList
// ============================================================================

describe("buildToolkitInfoList", () => {
  beforeEach(() => {
    setupTestDirs();
  });

  afterEach(() => {
    cleanupTestDirs();
  });

  it("should build list of toolkits with correct labels and categories", () => {
    createToolkitJson("gmail", { label: "Gmail" });
    createToolkitJson("slack", { label: "Slack" });
    createToolkitJson("unknowntoolkit", { label: "Unknown Toolkit" });

    const result = buildToolkitInfoList(TEST_DATA_DIR);

    expect(result).toHaveLength(3);
    expect(result[0].label).toBe("Gmail");
    expect(result[1].label).toBe("Slack");
    expect(result[2].label).toBe("Unknown Toolkit");
  });

  it("should skip hidden toolkits", () => {
    createToolkitJson("HiddenToolkit", { label: "Hidden" });

    const result = buildToolkitInfoList(TEST_DATA_DIR);

    expect(result).toHaveLength(0);
  });

  it("should prefer design system label over JSON", () => {
    createToolkitJson("gmail", { label: "Custom Gmail Label" });

    const result = buildToolkitInfoList(TEST_DATA_DIR);

    expect(result[0].label).toBe("Gmail");
  });

  it("should use design system label as fallback", () => {
    createToolkitJson("gmail", { label: null });

    const result = buildToolkitInfoList(TEST_DATA_DIR);

    expect(result[0].label).toBe("Gmail");
  });

  it("should use docsLink slug when available", () => {
    createToolkitJson("hubspotconversationsapi", {
      id: "HubspotConversationsApi",
      label: "HubSpot Conversations API",
      metadata: {
        category: "sales",
        docsLink:
          "https://docs.arcade.dev/en/mcp-servers/sales/hubspot-conversations-api",
      },
    });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    const entry = result.find((item) => item.id === "HubspotConversationsApi");

    expect(entry?.slug).toBe("hubspot-conversations-api");
    expect(entry?.category).toBe("sales");
  });

  it("should dedupe entries that share a docsLink slug", () => {
    createToolkitJson("upclickapi", {
      id: "UpclickApi",
      label: "ClickUp API",
      metadata: {
        category: "productivity",
        docsLink:
          "https://docs.arcade.dev/en/mcp-servers/productivity/clickup-api",
      },
    });
    createToolkitJson("clickupapi", {
      id: "ClickupApi",
      label: "ClickUp API",
      metadata: {
        category: "productivity",
        docsLink:
          "https://docs.arcade.dev/en/mcp-servers/productivity/clickup-api",
      },
    });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    const matches = result.filter((item) => item.slug === "clickup-api");
    expect(matches).toHaveLength(1);
  });
});

// ============================================================================
// Unit Tests: groupByCategory
// ============================================================================

describe("groupByCategory", () => {
  it("should group toolkits by category", () => {
    const toolkits: ToolkitInfo[] = [
      { id: "gmail", slug: "gmail", label: "Gmail", category: "productivity" },
      { id: "slack", slug: "slack", label: "Slack", category: "social" },
      {
        id: "dropbox",
        slug: "dropbox",
        label: "Dropbox",
        category: "productivity",
      },
    ];

    const result = groupByCategory(toolkits);

    expect(result.size).toBe(2);
    expect(result.get("productivity")).toHaveLength(2);
    expect(result.get("social")).toHaveLength(1);
  });

  it("should sort toolkits alphabetically by label", () => {
    const toolkits: ToolkitInfo[] = [
      { id: "zoom", slug: "zoom", label: "Zoom", category: "social" },
      { id: "slack", slug: "slack", label: "Slack", category: "social" },
      { id: "discord", slug: "discord", label: "Discord", category: "social" },
    ];

    const result = groupByCategory(toolkits);
    const social = result.get("social");

    expect(social?.[0].label).toBe("Discord");
    expect(social?.[1].label).toBe("Slack");
    expect(social?.[2].label).toBe("Zoom");
  });

  it("should handle empty array", () => {
    const result = groupByCategory([]);
    expect(result.size).toBe(0);
  });

  it("should handle 'others' category", () => {
    const toolkits: ToolkitInfo[] = [
      { id: "custom", slug: "custom", label: "Custom", category: "others" },
    ];

    const result = groupByCategory(toolkits);
    expect(result.has("others")).toBe(true);
    expect(result.get("others")).toHaveLength(1);
  });
});

// ============================================================================
// Unit Tests: generateCategoryMeta
// ============================================================================

describe("generateCategoryMeta", () => {
  it("should generate valid _meta.tsx content", () => {
    const toolkits: ToolkitInfo[] = [
      { id: "gmail", slug: "gmail", label: "Gmail", category: "productivity" },
      {
        id: "dropbox",
        slug: "dropbox",
        label: "Dropbox",
        category: "productivity",
      },
    ];

    const result = generateCategoryMeta(
      toolkits,
      "productivity",
      "/en/resources/integrations"
    );

    expect(result).toContain('import type { MetaRecord } from "nextra"');
    expect(result).toContain("gmail: {");
    expect(result).toContain('title: "Gmail"');
    expect(result).toContain(
      'href: "/en/resources/integrations/productivity/gmail"'
    );
    expect(result).toContain("dropbox: {");
    expect(result).toContain("export default meta");
  });

  it("should escape quotes in labels", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "test",
        slug: "test",
        label: 'Test "Quoted" Label',
        category: "others",
      },
    ];

    const result = generateCategoryMeta(toolkits, "others", "/preview");

    expect(result).toContain('title: "Test \\"Quoted\\" Label"');
  });

  it("should handle empty array", () => {
    const result = generateCategoryMeta([], "productivity", "/preview");

    expect(result).toContain("const meta: MetaRecord = {");
    expect(result).toContain("};");
    expect(result).toContain("export default meta");
  });

  it("should handle single toolkit", () => {
    const toolkits: ToolkitInfo[] = [
      { id: "gmail", slug: "gmail", label: "Gmail", category: "productivity" },
    ];

    const result = generateCategoryMeta(toolkits, "productivity", "/preview");

    expect(result).toContain("gmail: {");
    expect(result).not.toContain(",\n,"); // No trailing comma issues
  });

  it("does not mutate the input array", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "zoom",
        slug: "zoom",
        label: "Zoom",
        category: "social",
        navGroup: "optimized",
      },
      {
        id: "slack",
        slug: "slack",
        label: "Slack",
        category: "social",
        navGroup: "optimized",
      },
    ];
    const originalOrder = [...toolkits];

    generateCategoryMeta(toolkits, "social", "/preview");

    expect(toolkits).toEqual(originalOrder);
  });
});

// ============================================================================
// Unit Tests: generateMainMeta
// ============================================================================

describe("generateMainMeta", () => {
  it("should generate main _meta.tsx with active categories", () => {
    const result = generateMainMeta(["productivity", "social"]);

    expect(result).toContain('import type { MetaRecord } from "nextra"');
    expect(result).toContain("productivity: {");
    expect(result).toContain('title: "Productivity & Docs"');
    expect(result).toContain("social: {");
    expect(result).toContain('title: "Social & Communication"');
    expect(result).toContain('"contribute-a-server"');
    expect(result).not.toContain("preview:");
  });

  it("should sort categories by defined order", () => {
    const result = generateMainMeta(["sales", "productivity", "development"]);

    const productivityIndex = result.indexOf("productivity:");
    const developmentIndex = result.indexOf("development:");
    const salesIndex = result.indexOf("sales:");

    expect(productivityIndex).toBeLessThan(developmentIndex);
    expect(developmentIndex).toBeLessThan(salesIndex);
  });

  it("should include 'others' category when present", () => {
    const result = generateMainMeta(["productivity", "others"]);

    expect(result).toContain("others: {");
    expect(result).toContain('title: "Others"');
  });

  it("should place 'others' at the end", () => {
    const result = generateMainMeta(["others", "productivity"]);

    const productivityIndex = result.indexOf("productivity:");
    const othersIndex = result.indexOf("others:");

    expect(productivityIndex).toBeLessThan(othersIndex);
  });

  it("should handle empty categories", () => {
    const result = generateMainMeta([]);

    expect(result).toContain("const meta: MetaRecord = {");
    expect(result).toContain("index:");
    expect(result).toContain('"contribute-a-server"');
  });

  it("does not mutate the input array", () => {
    const categories = ["sales", "productivity", "development"];
    const originalOrder = [...categories];

    generateMainMeta(categories);

    expect(categories).toEqual(originalOrder);
  });

  it("should include required structure elements", () => {
    const result = generateMainMeta(["productivity"]);

    expect(result).toContain('"*":'); // Theme config
    expect(result).toContain("index:"); // Overview
    expect(result).toContain('"-- Submit your Server"'); // Separator
    expect(result).toContain('"contribute-a-server"'); // Contribute page
    expect(result).not.toContain("preview:"); // Preview page removed
  });
});

// ============================================================================
// Integration Tests: syncToolkitSidebar
// ============================================================================

describe("syncToolkitSidebar", () => {
  // Note: These tests would require mocking the CONFIG object
  // or using dependency injection. For now, we test the logic separately.

  it("returns expected result shape", () => {
    const result = syncToolkitSidebar({ dryRun: true });

    expect(result).toEqual({
      categoriesUpdated: expect.any(Array),
      categoriesCreated: expect.any(Array),
      categoriesRemoved: expect.any(Array),
      toolkitCount: expect.any(Number),
      errors: expect.any(Array),
    });
  });
});
