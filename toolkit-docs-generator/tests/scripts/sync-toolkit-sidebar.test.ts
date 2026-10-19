/**
 * Tests for sync-toolkit-sidebar.ts
 *
 * Run with: bunx vitest run toolkit-docs-generator/tests/scripts/sync-toolkit-sidebar.test.ts
 * Or: bunx vitest watch toolkit-docs-generator/tests/scripts/sync-toolkit-sidebar.test.ts
 */

import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getToolkitStaticParamsForCategory } from "../../../lib/toolkit-static-params";
import {
  buildCategoryMeta,
  buildPartnerToolkitInfoList,
  buildToolkitInfoList,
  type CategoryMeta,
  findMissingMainMetaCategories,
  generateCategoryMeta,
  getToolkitCategory,
  getToolkitFiles,
  getToolkitLabel,
  getToolkitLabelFromJson,
  groupByCategory,
  mergeToolkitAndPartnerInfo,
  type PartnerNavSource,
  parseBooleanCliFlag,
  resolveRemoveEmptySections,
  setToolkitsForTesting,
  syncToolkitSidebar,
  type ToolkitInfo,
} from "../../scripts/sync-toolkit-sidebar";
import { INTEGRATION_CATEGORIES } from "../../src/shared/toolkit-primitives";

setToolkitsForTesting([
  { id: "Gmail", label: "Gmail", category: "productivity" },
  { id: "Slack", label: "Slack", category: "social" },
  { id: "Github", label: "GitHub", category: "development" },
  { id: "Stripe", label: "Stripe", category: "payments" },
  { id: "Zendesk", label: "Zendesk", category: "customer-support" },
  { id: "GoogleSearch", label: "Google Search", category: "search" },
  { id: "Hubspot", label: "HubSpot", category: "sales" },
  { id: "Spotify", label: "Spotify", category: "entertainment" },
  { id: "Postgres", label: "Postgres", category: "databases" },
  { id: "WeaviateApi", label: "Weaviate API", category: "development" },
  {
    id: "HiddenToolkit",
    label: "Hidden",
    category: "productivity",
    isHidden: true,
  },
]);

// Test directory setup
const TEST_DIR = join(process.cwd(), ".test-sync-sidebar");
const TEST_DATA_DIR = join(TEST_DIR, "data/toolkits");
const TEST_INTEGRATIONS_DIR = join(
  TEST_DIR,
  "content/docs/resources/integrations"
);

function setupTestDirs() {
  mkdirSync(TEST_DATA_DIR, { recursive: true });
  mkdirSync(TEST_INTEGRATIONS_DIR, { recursive: true });
}

function cleanupTestDirs() {
  if (existsSync(TEST_DIR)) {
    rmSync(TEST_DIR, { recursive: true });
  }
}

const parseMeta = (content: string): CategoryMeta =>
  JSON.parse(content) as CategoryMeta;

const BRACKET_LABEL_ERROR_REGEX = /contains "\]"/;
const UNRECOGNIZED_ALL_CATEGORY_REGEX =
  /Unrecognized integration category "all"/;
const PARTNER_SLUG_COLLISION_REGEX =
  /Partner "Tavily" and toolkit "GoogleSearch" both resolve to search\/tavily/;

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

    expect(result).toHaveLength(2);
    expect(result[0].label).toBe("Gmail");
    expect(result[1].label).toBe("Slack");
    expect(result.some((item) => item.label === "Unknown Toolkit")).toBe(false);
  });

  it("rejects an unrecognized category instead of routing it to others", () => {
    createToolkitJson("unknowncategory", {
      label: "Unknown Category",
      metadata: { category: "weird" },
    });

    expect(() => buildToolkitInfoList(TEST_DATA_DIR)).toThrow(
      'Unrecognized integration category "weird"'
    );
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

  it("keeps sidebar href categories consistent with static params", async () => {
    // This fixture also flows through getToolkitStaticParamsForCategory
    // below, which validates it against the full merged toolkit schema —
    // unlike the other fixtures in this file, it needs every required field,
    // not just the ones buildToolkitInfoList itself reads.
    createToolkitJson("weaviateapi", {
      id: "WeaviateApi",
      label: "Weaviate API",
      version: "1.0.0",
      description: null,
      auth: null,
      tools: [],
      metadata: {
        category: "databases",
        docsLink:
          "https://docs.arcade.dev/en/mcp-servers/databases/weaviate-api",
        iconUrl: "https://design-system.arcade.dev/icons/placeholder.svg",
        isBYOC: false,
        isPro: false,
        type: "arcade",
        isComingSoon: false,
        isHidden: false,
      },
    });

    const result = buildToolkitInfoList(TEST_DATA_DIR);
    const weaviate = result.find((item) => item.id === "WeaviateApi");
    expect(weaviate).toBeDefined();
    if (!weaviate) {
      throw new Error("Expected WeaviateApi toolkit in sidebar data");
    }
    expect(weaviate.category).toBe("databases");
    expect(weaviate.slug).toBe("weaviate-api");

    const sidebarMeta = generateCategoryMeta(
      [weaviate],
      weaviate.category,
      "/en/resources/integrations"
    );
    expect(parseMeta(sidebarMeta).pages).toContain(
      "[Weaviate API](/en/resources/integrations/databases/weaviate-api)"
    );

    const toolkitsCatalog = [
      { id: "WeaviateApi", category: "development", docsLink: undefined },
    ];
    const databasesParams = await getToolkitStaticParamsForCategory(
      "databases",
      {
        dataDir: TEST_DATA_DIR,
        toolkitsCatalog,
      }
    );
    const developmentParams = await getToolkitStaticParamsForCategory(
      "development",
      {
        dataDir: TEST_DATA_DIR,
        toolkitsCatalog,
      }
    );

    expect(databasesParams).toContainEqual({ toolkitId: "weaviate-api" });
    expect(developmentParams).not.toContainEqual({
      toolkitId: "weaviate-api",
    });
  });
});

// ============================================================================
// Unit Tests: groupByCategory
// ============================================================================

describe("groupByCategory", () => {
  it("should group toolkits by category", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "gmail",
        slug: "gmail",
        label: "Gmail",
        navGroup: "optimized",
        category: "productivity",
      },
      {
        id: "slack",
        slug: "slack",
        label: "Slack",
        navGroup: "optimized",
        category: "social",
      },
      {
        id: "dropbox",
        slug: "dropbox",
        label: "Dropbox",
        navGroup: "optimized",
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
      {
        id: "zoom",
        slug: "zoom",
        label: "Zoom",
        navGroup: "optimized",
        category: "social",
      },
      {
        id: "slack",
        slug: "slack",
        label: "Slack",
        navGroup: "optimized",
        category: "social",
      },
      {
        id: "discord",
        slug: "discord",
        label: "Discord",
        navGroup: "optimized",
        category: "social",
      },
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

  it("should group toolkits by category", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "custom",
        slug: "custom",
        label: "Custom",
        navGroup: "optimized",
        category: "payments",
      },
    ];

    const result = groupByCategory(toolkits);
    expect(result.has("payments")).toBe(true);
    expect(result.get("payments")).toHaveLength(1);
  });
});

// ============================================================================
// Unit Tests: remove empty section flags
// ============================================================================

describe("remove empty section flags", () => {
  it("defaults to false when no flag is provided", () => {
    expect(resolveRemoveEmptySections({})).toBe(false);
  });

  it("supports the explicit removeEmptySections option", () => {
    expect(resolveRemoveEmptySections({ removeEmptySections: true })).toBe(
      true
    );
    expect(resolveRemoveEmptySections({ removeEmptySections: false })).toBe(
      false
    );
  });

  it("supports prune as a backward-compatible alias", () => {
    expect(resolveRemoveEmptySections({ prune: true })).toBe(true);
    expect(resolveRemoveEmptySections({ prune: false })).toBe(false);
  });

  it("prefers removeEmptySections over prune when both are set", () => {
    expect(
      resolveRemoveEmptySections({ removeEmptySections: false, prune: true })
    ).toBe(false);
    expect(
      resolveRemoveEmptySections({ removeEmptySections: true, prune: false })
    ).toBe(true);
  });

  it("parses boolean CLI flags in value and shorthand formats", () => {
    expect(
      parseBooleanCliFlag(
        ["--remove-empty-sections=true"],
        "--remove-empty-sections"
      )
    ).toBe(true);
    expect(
      parseBooleanCliFlag(
        ["--remove-empty-sections=false"],
        "--remove-empty-sections"
      )
    ).toBe(false);
    expect(
      parseBooleanCliFlag(
        ["--remove-empty-sections"],
        "--remove-empty-sections"
      )
    ).toBe(true);
  });
});

// ============================================================================
// Unit Tests: generateCategoryMeta
// ============================================================================

describe("generateCategoryMeta", () => {
  it("should generate valid Fumadocs meta.json content", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "gmail",
        slug: "gmail",
        label: "Gmail",
        navGroup: "optimized",
        category: "productivity",
      },
      {
        id: "dropbox",
        slug: "dropbox",
        label: "Dropbox",
        navGroup: "optimized",
        category: "productivity",
      },
    ];

    const result = generateCategoryMeta(
      toolkits,
      "productivity",
      "/en/resources/integrations"
    );

    expect(result.endsWith("\n")).toBe(true);
    expect(parseMeta(result)).toEqual({
      pages: [
        "---Optimized---",
        "[Dropbox](/en/resources/integrations/productivity/dropbox)",
        "[Gmail](/en/resources/integrations/productivity/gmail)",
      ],
      title: "Productivity & Docs",
    });
  });

  it("rejects a label Fumadocs link syntax cannot encode", () => {
    const toolkits: ToolkitInfo[] = [
      {
        category: "productivity",
        id: "test",
        label: "Test [Bracketed] Label",
        navGroup: "optimized",
        slug: "test",
      },
    ];

    expect(() =>
      generateCategoryMeta(toolkits, "productivity", "/preview")
    ).toThrow(BRACKET_LABEL_ERROR_REGEX);
  });

  it("keeps quotes in labels intact through JSON encoding", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "test",
        slug: "test",
        label: 'Test "Quoted" Label',
        navGroup: "optimized",
        category: "productivity",
      },
    ];

    const result = generateCategoryMeta(toolkits, "productivity", "/preview");

    expect(parseMeta(result).pages).toContain(
      '[Test "Quoted" Label](/preview/productivity/test)'
    );
  });

  it("should handle empty array", () => {
    const result = generateCategoryMeta([], "productivity", "/preview");

    expect(parseMeta(result)).toEqual({
      pages: [],
      title: "Productivity & Docs",
    });
  });

  it("falls back to the category id when it has no display name", () => {
    expect(buildCategoryMeta([], "others", "/preview").title).toBe("others");
  });

  it("should handle single toolkit", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "gmail",
        slug: "gmail",
        label: "Gmail",
        navGroup: "optimized",
        category: "productivity",
      },
    ];

    const result = generateCategoryMeta(toolkits, "productivity", "/preview");

    expect(parseMeta(result).pages).toEqual([
      "---Optimized---",
      "[Gmail](/preview/productivity/gmail)",
    ]);
  });

  it("adds Optimized separator even when no starter entries exist", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "imgflip",
        slug: "imgflip",
        label: "Imgflip",
        category: "entertainment",
        navGroup: "optimized",
      },
      {
        id: "spotify",
        slug: "spotify",
        label: "Spotify",
        category: "entertainment",
        navGroup: "optimized",
      },
    ];

    const { pages } = buildCategoryMeta(
      toolkits,
      "entertainment",
      "/en/resources/integrations"
    );

    expect(pages).toContain("---Optimized---");
    expect(pages).not.toContain("---Starter---");
    expect(pages).toContain(
      "[Imgflip](/en/resources/integrations/entertainment/imgflip)"
    );
    expect(pages).toContain(
      "[Spotify](/en/resources/integrations/entertainment/spotify)"
    );
  });

  it("adds Starter separator even when no optimized entries exist", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "my-api",
        slug: "my-api",
        label: "My API",
        category: "productivity",
        navGroup: "starter",
      },
    ];

    const { pages } = buildCategoryMeta(
      toolkits,
      "productivity",
      "/en/resources/integrations"
    );

    expect(pages).not.toContain("---Optimized---");
    expect(pages).toEqual([
      "---Starter---",
      "[My API](/en/resources/integrations/productivity/my-api)",
    ]);
  });

  it("adds both separators when both optimized and starter entries exist", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "gmail",
        slug: "gmail",
        label: "Gmail",
        category: "productivity",
        navGroup: "optimized",
      },
      {
        id: "airtable-api",
        slug: "airtable-api",
        label: "Airtable API",
        category: "productivity",
        navGroup: "starter",
      },
    ];

    const { pages } = buildCategoryMeta(
      toolkits,
      "productivity",
      "/en/resources/integrations"
    );

    const optimizedIndex = pages.indexOf("---Optimized---");
    const starterIndex = pages.indexOf("---Starter---");
    expect(optimizedIndex).toBeGreaterThan(-1);
    expect(starterIndex).toBeGreaterThan(optimizedIndex);
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
// Unit Tests: findMissingMainMetaCategories
// ============================================================================

describe("findMissingMainMetaCategories", () => {
  it("returns nothing when every active category is listed", () => {
    const mainMeta = {
      pages: [
        "index",
        "productivity",
        "social",
        "---Feedback---",
        "tool-feedback",
      ],
    };

    expect(
      findMissingMainMetaCategories(mainMeta, ["productivity", "social"])
    ).toEqual([]);
  });

  it("names the active categories the main meta.json omits", () => {
    const mainMeta = { pages: ["index", "productivity"] };

    expect(
      findMissingMainMetaCategories(mainMeta, [
        "sales",
        "productivity",
        "development",
      ])
    ).toEqual(["sales", "development"]);
  });

  it("treats a rest marker as listing every folder", () => {
    expect(
      findMissingMainMetaCategories({ pages: ["index", "..."] }, ["sales"])
    ).toEqual([]);
  });

  it("ignores categories that are not integration categories", () => {
    expect(
      findMissingMainMetaCategories({ pages: ["index"] }, [
        "others",
        "productivity",
      ])
    ).toEqual(["productivity"]);
  });

  it("treats a missing or malformed pages list as listing nothing", () => {
    expect(findMissingMainMetaCategories(null, ["productivity"])).toEqual([
      "productivity",
    ]);
    expect(
      findMissingMainMetaCategories({ pages: "productivity" }, ["productivity"])
    ).toEqual(["productivity"]);
  });

  it("does not mutate the input array", () => {
    const categories = ["sales", "productivity", "development"];
    const originalOrder = [...categories];

    findMissingMainMetaCategories({ pages: [] }, categories);

    expect(categories).toEqual(originalOrder);
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
      partnerCount: expect.any(Number),
      errors: expect.any(Array),
    });
  });
});

// ============================================================================
// Category move / cleanup logic
// ============================================================================

describe("category move cleanup logic", () => {
  it("toolkit moved to a new category is removed from the old one", () => {
    // Simulate: Pylon was in "others", now design system says "development"
    const toolkits: ToolkitInfo[] = [
      {
        id: "Pylon",
        slug: "pylon",
        label: "Pylon",
        category: "development",
        navGroup: "optimized",
      },
      {
        id: "Github",
        slug: "github",
        label: "GitHub",
        category: "development",
        navGroup: "optimized",
      },
    ];

    const grouped = groupByCategory(toolkits);
    const activeCategories = Array.from(grouped.keys());

    // "others" is no longer an active category
    expect(activeCategories).not.toContain("others");
    expect(activeCategories).toContain("development");

    // The development category contains Pylon
    const devToolkits = grouped.get("development");
    expect(devToolkits?.some((t) => t.id === "Pylon")).toBe(true);
  });

  it("old category directory is identified for removal when empty", () => {
    const toolkits: ToolkitInfo[] = [
      {
        id: "Pylon",
        slug: "pylon",
        label: "Pylon",
        category: "development",
        navGroup: "optimized",
      },
    ];

    const grouped = groupByCategory(toolkits);
    const activeCategories = Array.from(grouped.keys());

    // Simulate existing directories on disk
    const existingDirs = ["development", "others", "productivity"];

    // Directories not in activeCategories should be removed
    const toRemove = existingDirs.filter(
      (dir) => !activeCategories.includes(dir)
    );

    expect(toRemove).toContain("others");
    expect(toRemove).toContain("productivity");
    expect(toRemove).not.toContain("development");
  });

  it("category with remaining toolkits is NOT removed when one toolkit moves out", () => {
    // "others" still has CustomTool, even though Pylon moved to "development"
    const toolkits: ToolkitInfo[] = [
      {
        id: "Pylon",
        slug: "pylon",
        label: "Pylon",
        category: "development",
        navGroup: "optimized",
      },
      {
        id: "CustomTool",
        slug: "custom-tool",
        label: "Custom Tool",
        category: "others",
        navGroup: "optimized",
      },
    ];

    const grouped = groupByCategory(toolkits);
    const activeCategories = Array.from(grouped.keys());

    expect(activeCategories).toContain("others");
    expect(activeCategories).toContain("development");

    // "others" still has one toolkit so it won't be pruned
    expect(grouped.get("others")).toHaveLength(1);

    // But Pylon is NOT in "others" anymore
    const othersToolkits = grouped.get("others");
    expect(othersToolkits?.some((t) => t.id === "Pylon")).toBe(false);
  });

  it("generateCategoryMeta only includes current toolkits (not stale ones)", () => {
    // After Pylon moves, the "others" meta.json should only contain remaining toolkits
    const othersToolkits: ToolkitInfo[] = [
      {
        id: "CustomTool",
        slug: "custom-tool",
        label: "Custom Tool",
        category: "others",
        navGroup: "optimized",
      },
    ];

    const meta = generateCategoryMeta(
      othersToolkits,
      "others",
      "/en/resources/integrations"
    );

    expect(meta).toContain("custom-tool");
    expect(meta).not.toContain("pylon");
  });

  it("a category with zero toolkits is flagged only when the main meta.json still lists it", () => {
    const activeCategories = ["development", "productivity"];

    expect(
      findMissingMainMetaCategories(
        { pages: ["development", "productivity", "others"] },
        activeCategories
      )
    ).toEqual([]);
  });
});

// ============================================================================
// Unit Tests: partner integrations
// ============================================================================

const tavilyPartner: PartnerNavSource = {
  id: "Tavily",
  label: "Tavily",
  category: "search",
  relativeDocsLink: "/en/resources/integrations/search/tavily",
};

describe("buildPartnerToolkitInfoList", () => {
  it("derives a partner sidebar entry from the partner catalog", () => {
    const result = buildPartnerToolkitInfoList([tavilyPartner]);

    expect(result).toEqual([
      {
        id: "Tavily",
        slug: "tavily",
        label: "Tavily",
        category: "search",
        navGroup: "partner",
      },
    ]);
  });

  // "all" is the design system's filter meta-value: a legal ToolkitCategory
  // with no integrations route behind it.
  it("throws on a category with no integrations route", () => {
    expect(() =>
      buildPartnerToolkitInfoList([{ ...tavilyPartner, category: "all" }])
    ).toThrow(UNRECOGNIZED_ALL_CATEGORY_REGEX);
  });

  it("keeps the real partner catalog routable", () => {
    const result = buildPartnerToolkitInfoList();

    expect(result.length).toBeGreaterThan(0);
    for (const entry of result) {
      expect(INTEGRATION_CATEGORIES).toContain(entry.category);
      expect(entry.navGroup).toBe("partner");
    }
  });
});

describe("mergeToolkitAndPartnerInfo", () => {
  const searchToolkit: ToolkitInfo = {
    id: "GoogleSearch",
    slug: "google-search",
    label: "Google Search",
    category: "search",
    navGroup: "optimized",
  };
  const searchPartner: ToolkitInfo = {
    id: "Tavily",
    slug: "tavily",
    label: "Tavily",
    category: "search",
    navGroup: "partner",
  };

  it("appends the partners to the toolkits", () => {
    expect(
      mergeToolkitAndPartnerInfo([searchToolkit], [searchPartner])
    ).toEqual([searchToolkit, searchPartner]);
  });

  it("throws when a partner and a toolkit share a slug in one category", () => {
    expect(() =>
      mergeToolkitAndPartnerInfo(
        [{ ...searchToolkit, slug: "tavily" }],
        [searchPartner]
      )
    ).toThrow(PARTNER_SLUG_COLLISION_REGEX);
  });

  it("allows the same slug in different categories", () => {
    expect(() =>
      mergeToolkitAndPartnerInfo(
        [{ ...searchToolkit, slug: "tavily", category: "development" }],
        [searchPartner]
      )
    ).not.toThrow();
  });
});

describe("generateCategoryMeta partner section", () => {
  const toolkits: ToolkitInfo[] = [
    {
      id: "GoogleSearch",
      slug: "google-search",
      label: "Google Search",
      category: "search",
      navGroup: "optimized",
    },
    {
      id: "ExaApi",
      slug: "exa-api",
      label: "Exa API",
      category: "search",
      navGroup: "starter",
    },
    {
      id: "Tavily",
      slug: "tavily",
      label: "Tavily",
      category: "search",
      navGroup: "partner",
    },
  ];

  it("renders partners in their own section after the generated toolkits", () => {
    const result = generateCategoryMeta(
      toolkits,
      "search",
      "/en/resources/integrations"
    );

    const { pages } = parseMeta(result);
    expect(pages).toContain("---Partners---");
    // Partner pages are authored MDX files in the category folder, so they
    // are listed by slug (Fumadocs reads the title from the page), not as a
    // link entry.
    expect(pages).toContain("tavily");
    expect(pages).not.toContain(
      "[Tavily](/en/resources/integrations/search/tavily)"
    );
    expect(pages.indexOf("---Partners---")).toBeGreaterThan(
      pages.indexOf("---Starter---")
    );
    expect(pages.indexOf("tavily")).toBeGreaterThan(
      pages.indexOf("---Partners---")
    );
  });

  it("omits the Partners separator when the category has no partners", () => {
    const result = generateCategoryMeta(
      toolkits.filter((t) => t.navGroup !== "partner"),
      "search",
      "/en/resources/integrations"
    );

    const { pages } = parseMeta(result);
    expect(pages).not.toContain("---Partners---");
    expect(pages).not.toContain("tavily");
  });

  it("renders a partner-only category without duplicating entries", () => {
    const result = generateCategoryMeta(
      toolkits.filter((t) => t.navGroup === "partner"),
      "search",
      "/en/resources/integrations"
    );

    const { pages } = parseMeta(result);
    expect(pages).toEqual(["---Partners---", "tavily"]);
  });
});
