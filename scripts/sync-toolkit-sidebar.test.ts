/**
 * Tests for sync-toolkit-sidebar.ts
 *
 * Run with: npx vitest run scripts/sync-toolkit-sidebar.test.ts
 * Or: npx vitest watch scripts/sync-toolkit-sidebar.test.ts
 */

import * as fs from "fs";
import * as path from "path";
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
} from "./sync-toolkit-sidebar";

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
const TEST_DIR = path.join(process.cwd(), ".test-sync-sidebar");
const TEST_DATA_DIR = path.join(TEST_DIR, "data/toolkits");
const TEST_INTEGRATIONS_DIR = path.join(
  TEST_DIR,
  "app/en/resources/integrations"
);

function setupTestDirs() {
  fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
  fs.mkdirSync(TEST_INTEGRATIONS_DIR, { recursive: true });
}

function cleanupTestDirs() {
  if (fs.existsSync(TEST_DIR)) {
    fs.rmSync(TEST_DIR, { recursive: true });
  }
}

function createToolkitJson(slug: string, data: object = {}) {
  const filePath = path.join(TEST_DATA_DIR, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify({ id: slug, ...data }, null, 2));
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

  it("should return empty array for non-existent directory", () => {
    const result = getToolkitFiles("/non/existent/path");
    expect(result).toEqual([]);
  });

  it("should return empty array for empty directory", () => {
    const result = getToolkitFiles(TEST_DATA_DIR);
    expect(result).toEqual([]);
  });

  it("should return JSON file slugs without extension", () => {
    createToolkitJson("gmail");
    createToolkitJson("slack");
    createToolkitJson("github");

    const result = getToolkitFiles(TEST_DATA_DIR);
    expect(result).toHaveLength(3);
    expect(result).toContain("gmail");
    expect(result).toContain("slack");
    expect(result).toContain("github");
  });

  it("should exclude index.json", () => {
    createToolkitJson("gmail");
    fs.writeFileSync(
      path.join(TEST_DATA_DIR, "index.json"),
      JSON.stringify({ toolkits: [] })
    );

    const result = getToolkitFiles(TEST_DATA_DIR);
    expect(result).toHaveLength(1);
    expect(result).toContain("gmail");
    expect(result).not.toContain("index");
  });

  it("should return lowercase slugs", () => {
    // Create file with uppercase name (filesystem may normalize this)
    fs.writeFileSync(
      path.join(TEST_DATA_DIR, "MyToolkit.json"),
      JSON.stringify({ id: "MyToolkit" })
    );

    const result = getToolkitFiles(TEST_DATA_DIR);
    expect(result[0]).toBe("mytoolkit");
  });

  it("should ignore non-JSON files", () => {
    createToolkitJson("gmail");
    fs.writeFileSync(path.join(TEST_DATA_DIR, "readme.md"), "# Test");
    fs.writeFileSync(
      path.join(TEST_DATA_DIR, "config.ts"),
      "export const x = 1;"
    );

    const result = getToolkitFiles(TEST_DATA_DIR);
    expect(result).toHaveLength(1);
    expect(result).toContain("gmail");
  });
});

// ============================================================================
// Unit Tests: getToolkitCategory
// ============================================================================

describe("getToolkitCategory", () => {
  it("should return category for known toolkit", () => {
    expect(getToolkitCategory("Gmail")).toBe("productivity");
    expect(getToolkitCategory("Slack")).toBe("social");
    expect(getToolkitCategory("Github")).toBe("development");
  });

  it("should be case-insensitive", () => {
    expect(getToolkitCategory("gmail")).toBe("productivity");
    expect(getToolkitCategory("GMAIL")).toBe("productivity");
    expect(getToolkitCategory("GmAiL")).toBe("productivity");
  });

  it("should return null for unknown toolkit", () => {
    expect(getToolkitCategory("UnknownToolkit")).toBeNull();
    expect(getToolkitCategory("RandomName")).toBeNull();
  });

  it("should return null for hidden toolkit", () => {
    expect(getToolkitCategory("HiddenToolkit")).toBeNull();
  });

  it("should handle empty string", () => {
    expect(getToolkitCategory("")).toBeNull();
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

  it("should be case-insensitive", () => {
    expect(getToolkitLabel("gmail")).toBe("Gmail");
    expect(getToolkitLabel("GITHUB")).toBe("GitHub");
  });

  it("should generate fallback label for unknown toolkit", () => {
    expect(getToolkitLabel("MyCustomToolkit")).toBe("My Custom Toolkit");
    expect(getToolkitLabel("APIHelper")).toBe("A P I Helper");
  });

  it("should handle single word", () => {
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
    createToolkitJson("mytoolkit", { name: "My Custom Name" });

    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "mytoolkit");
    expect(result).toBe("My Custom Name");
  });

  it("should prefer label over name", () => {
    createToolkitJson("mytoolkit", { label: "Label", name: "Name" });

    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "mytoolkit");
    expect(result).toBe("Label");
  });

  it("should return null for non-existent file", () => {
    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "nonexistent");
    expect(result).toBeNull();
  });

  it("should return null for invalid JSON", () => {
    fs.writeFileSync(
      path.join(TEST_DATA_DIR, "invalid.json"),
      "not valid json"
    );

    const result = getToolkitLabelFromJson(TEST_DATA_DIR, "invalid");
    expect(result).toBeNull();
  });

  it("should return null if no label or name in JSON", () => {
    createToolkitJson("mytoolkit", { version: "1.0.0" });

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

  it("should return empty array for empty directory", () => {
    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result).toEqual([]);
  });

  it("should build toolkit info with design system category", () => {
    createToolkitJson("gmail");
    createToolkitJson("slack");

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result).toHaveLength(2);

    const gmail = result.find((t) => t.slug === "gmail");
    expect(gmail).toBeDefined();
    expect(gmail?.category).toBe("productivity");
    expect(gmail?.label).toBe("Gmail");

    const slack = result.find((t) => t.slug === "slack");
    expect(slack).toBeDefined();
    expect(slack?.category).toBe("social");
    expect(slack?.label).toBe("Slack");
  });

  it("should use 'others' category for unknown toolkits", () => {
    createToolkitJson("unknowntoolkit", { label: "Unknown Toolkit" });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe("others");
    expect(result[0].label).toBe("Unknown Toolkit");
  });

  it("should prefer label from JSON over design system", () => {
    createToolkitJson("gmail", { label: "Custom Gmail Label" });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result[0].label).toBe("Custom Gmail Label");
  });

  it("should use design system label as fallback", () => {
    createToolkitJson("gmail");

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result[0].label).toBe("Gmail");
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
    const social = result.get("social")!;

    expect(social[0].label).toBe("Discord");
    expect(social[1].label).toBe("Slack");
    expect(social[2].label).toBe("Zoom");
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
      "/en/resources/integrations/preview"
    );

    expect(result).toContain('import type { MetaRecord } from "nextra"');
    expect(result).toContain('"gmail": {');
    expect(result).toContain('title: "Gmail"');
    expect(result).toContain(
      'href: "/en/resources/integrations/preview/gmail"'
    );
    expect(result).toContain('"dropbox": {');
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

    const result = generateCategoryMeta(toolkits, "/preview");

    expect(result).toContain('title: "Test \\"Quoted\\" Label"');
  });

  it("should handle empty array", () => {
    const result = generateCategoryMeta([], "/preview");

    expect(result).toContain("const meta: MetaRecord = {");
    expect(result).toContain("};");
    expect(result).toContain("export default meta");
  });

  it("should handle single toolkit", () => {
    const toolkits: ToolkitInfo[] = [
      { id: "gmail", slug: "gmail", label: "Gmail", category: "productivity" },
    ];

    const result = generateCategoryMeta(toolkits, "/preview");

    expect(result).toContain('"gmail": {');
    expect(result).not.toContain(",\n,"); // No trailing comma issues
  });
});

// ============================================================================
// Unit Tests: generateMainMeta
// ============================================================================

describe("generateMainMeta", () => {
  it("should generate main _meta.tsx with active categories", () => {
    const result = generateMainMeta(["productivity", "social"]);

    expect(result).toContain('import type { MetaRecord } from "nextra"');
    expect(result).toContain('"productivity": {');
    expect(result).toContain('title: "Productivity & Docs"');
    expect(result).toContain('"social": {');
    expect(result).toContain('title: "Social & Communication"');
    expect(result).toContain('"contribute-a-server"');
    expect(result).toContain("preview:");
  });

  it("should sort categories by defined order", () => {
    const result = generateMainMeta(["sales", "productivity", "development"]);

    const productivityIndex = result.indexOf('"productivity"');
    const developmentIndex = result.indexOf('"development"');
    const salesIndex = result.indexOf('"sales"');

    expect(productivityIndex).toBeLessThan(developmentIndex);
    expect(developmentIndex).toBeLessThan(salesIndex);
  });

  it("should include 'others' category when present", () => {
    const result = generateMainMeta(["productivity", "others"]);

    expect(result).toContain('"others": {');
    expect(result).toContain('title: "Others"');
  });

  it("should place 'others' at the end", () => {
    const result = generateMainMeta(["others", "productivity"]);

    const productivityIndex = result.indexOf('"productivity"');
    const othersIndex = result.indexOf('"others"');

    expect(productivityIndex).toBeLessThan(othersIndex);
  });

  it("should handle empty categories", () => {
    const result = generateMainMeta([]);

    expect(result).toContain("const meta: MetaRecord = {");
    expect(result).toContain("index:");
    expect(result).toContain('"contribute-a-server"');
  });

  it("should include required structure elements", () => {
    const result = generateMainMeta(["productivity"]);

    expect(result).toContain('"*":'); // Theme config
    expect(result).toContain("index:"); // Overview
    expect(result).toContain('"-- Submit your Server"'); // Separator
    expect(result).toContain('"contribute-a-server"'); // Contribute page
    expect(result).toContain("preview:"); // Hidden preview page
    expect(result).toContain('display: "hidden"'); // Preview is hidden
  });
});

// ============================================================================
// Integration Tests: syncToolkitSidebar
// ============================================================================

describe("syncToolkitSidebar", () => {
  // Note: These tests would require mocking the CONFIG object
  // or using dependency injection. For now, we test the logic separately.

  it("should be a function", () => {
    expect(typeof syncToolkitSidebar).toBe("function");
  });

  it("should return SyncResult structure", () => {
    // Dry run to avoid actual file changes
    const result = syncToolkitSidebar({ dryRun: true });

    expect(result).toHaveProperty("categoriesUpdated");
    expect(result).toHaveProperty("categoriesCreated");
    expect(result).toHaveProperty("categoriesRemoved");
    expect(result).toHaveProperty("toolkitCount");
    expect(result).toHaveProperty("errors");

    expect(Array.isArray(result.categoriesUpdated)).toBe(true);
    expect(Array.isArray(result.categoriesCreated)).toBe(true);
    expect(Array.isArray(result.categoriesRemoved)).toBe(true);
    expect(Array.isArray(result.errors)).toBe(true);
    expect(typeof result.toolkitCount).toBe("number");
  });
});

// ============================================================================
// Edge Cases and Error Handling
// ============================================================================

describe("Edge Cases", () => {
  beforeEach(() => {
    setupTestDirs();
  });

  afterEach(() => {
    cleanupTestDirs();
  });

  it("should handle toolkit with special characters in label", () => {
    createToolkitJson("test", { label: "Test & More <Special>" });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result[0].label).toBe("Test & More <Special>");
  });

  it("should handle very long toolkit labels", () => {
    const longLabel = "A".repeat(1000);
    createToolkitJson("test", { label: longLabel });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result[0].label).toBe(longLabel);
  });

  it("should handle unicode in labels", () => {
    createToolkitJson("test", { label: "日本語ツールキット" });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result[0].label).toBe("日本語ツールキット");
  });

  it("should handle empty JSON file", () => {
    fs.writeFileSync(path.join(TEST_DATA_DIR, "empty.json"), "{}");

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result).toHaveLength(1);
    expect(result[0].category).toBe("others");
  });

  it("should handle JSON with nested objects", () => {
    createToolkitJson("test", {
      label: "Test",
      metadata: { nested: { deeply: { value: 123 } } },
    });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    expect(result[0].label).toBe("Test");
  });

  it("should handle multiple toolkits in same category", () => {
    createToolkitJson("gmail");
    createToolkitJson("slack");
    createToolkitJson("github");
    createToolkitJson("stripe");
    createToolkitJson("custom1", { label: "Custom 1" });
    createToolkitJson("custom2", { label: "Custom 2" });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    const grouped = groupByCategory(result);

    expect(grouped.get("productivity")).toHaveLength(1); // gmail
    expect(grouped.get("social")).toHaveLength(1); // slack
    expect(grouped.get("development")).toHaveLength(1); // github
    expect(grouped.get("payments")).toHaveLength(1); // stripe
    expect(grouped.get("others")).toHaveLength(2); // custom1, custom2
  });
});

// ============================================================================
// Category Mapping Tests
// ============================================================================

describe("Category Mapping", () => {
  it("should map all known categories correctly", () => {
    const categories = [
      { id: "Gmail", expected: "productivity" },
      { id: "Slack", expected: "social" },
      { id: "Github", expected: "development" },
      { id: "Stripe", expected: "payments" },
      { id: "Zendesk", expected: "customer-support" },
      { id: "GoogleSearch", expected: "search" },
      { id: "Hubspot", expected: "sales" },
      { id: "Spotify", expected: "entertainment" },
      { id: "Postgres", expected: "databases" },
    ];

    for (const { id, expected } of categories) {
      expect(getToolkitCategory(id)).toBe(expected);
    }
  });

  it("should return null for hidden toolkit", () => {
    expect(getToolkitCategory("HiddenToolkit")).toBeNull();
  });
});

// ============================================================================
// Meta Content Validation Tests
// ============================================================================

describe("Meta Content Validation", () => {
  it("should generate syntactically valid TypeScript", () => {
    const toolkits: ToolkitInfo[] = [
      { id: "gmail", slug: "gmail", label: "Gmail", category: "productivity" },
      { id: "slack", slug: "slack", label: "Slack", category: "social" },
    ];

    const result = generateCategoryMeta(toolkits, "/preview");

    // Basic syntax checks
    expect(result).toMatch(/^import type \{ MetaRecord \} from "nextra";/);
    expect(result).toMatch(/const meta: MetaRecord = \{/);
    expect(result).toMatch(/\};[\s\S]*export default meta;/);

    // No syntax errors (basic checks)
    expect(result.match(/\{/g)?.length).toBe(result.match(/\}/g)?.length);
    expect(result).not.toContain("undefined");
    expect(result).not.toContain("null");
  });

  it("should generate proper JSON-like object structure", () => {
    const toolkits: ToolkitInfo[] = [
      { id: "gmail", slug: "gmail", label: "Gmail", category: "productivity" },
    ];

    const result = generateCategoryMeta(toolkits, "/preview");

    // Extract the object part
    const objectMatch = result.match(
      /const meta: MetaRecord = (\{[\s\S]*?\});/
    );
    expect(objectMatch).toBeTruthy();
  });
});
