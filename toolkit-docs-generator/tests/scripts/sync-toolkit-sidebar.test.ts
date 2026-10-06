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
  { category: "productivity", id: "Gmail", label: "Gmail" },
  { category: "social", id: "Slack", label: "Slack" },
  { category: "development", id: "Github", label: "GitHub" },
  { category: "payments", id: "Stripe", label: "Stripe" },
  { category: "customer-support", id: "Zendesk", label: "Zendesk" },
  { category: "search", id: "GoogleSearch", label: "Google Search" },
  { category: "sales", id: "Hubspot", label: "HubSpot" },
  { category: "entertainment", id: "Spotify", label: "Spotify" },
  { category: "databases", id: "Postgres", label: "Postgres" },
  { category: "development", id: "WeaviateApi", label: "Weaviate API" },
  {
    category: "productivity",
    id: "HiddenToolkit",
    isHidden: true,
    label: "Hidden",
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
      auth: null,
      description: null,
      id: "WeaviateApi",
      label: "Weaviate API",
      metadata: {
        category: "databases",
        docsLink:
          "https://docs.arcade.dev/en/mcp-servers/databases/weaviate-api",
        iconUrl: "https://design-system.arcade.dev/icons/placeholder.svg",
        isBYOC: false,
        isComingSoon: false,
        isHidden: false,
        isPro: false,
        type: "arcade",
      },
      tools: [],
      version: "1.0.0",
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
      { category: "development", docsLink: undefined, id: "WeaviateApi" },
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
        category: "productivity",
        id: "gmail",
        label: "Gmail",
        navGroup: "optimized",
        slug: "gmail",
      },
      {
        category: "social",
        id: "slack",
        label: "Slack",
        navGroup: "optimized",
        slug: "slack",
      },
      {
        category: "productivity",
        id: "dropbox",
        label: "Dropbox",
        navGroup: "optimized",
        slug: "dropbox",
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
        category: "social",
        id: "zoom",
        label: "Zoom",
        navGroup: "optimized",
        slug: "zoom",
      },
      {
        category: "social",
        id: "slack",
        label: "Slack",
        navGroup: "optimized",
        slug: "slack",
      },
      {
        category: "social",
        id: "discord",
        label: "Discord",
        navGroup: "optimized",
        slug: "discord",
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
        category: "payments",
        id: "custom",
        label: "Custom",
        navGroup: "optimized",
        slug: "custom",
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
      resolveRemoveEmptySections({ prune: true, removeEmptySections: false })
    ).toBe(false);
    expect(
      resolveRemoveEmptySections({ prune: false, removeEmptySections: true })
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
        category: "productivity",
        id: "gmail",
        label: "Gmail",
        navGroup: "optimized",
        slug: "gmail",
      },
      {
        category: "productivity",
        id: "dropbox",
        label: "Dropbox",
        navGroup: "optimized",
        slug: "dropbox",
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
        category: "productivity",
        id: "test",
        label: 'Test "Quoted" Label',
        navGroup: "optimized",
        slug: "test",
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
        category: "productivity",
        id: "gmail",
        label: "Gmail",
        navGroup: "optimized",
        slug: "gmail",
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
        category: "entertainment",
        id: "imgflip",
        label: "Imgflip",
        navGroup: "optimized",
        slug: "imgflip",
      },
      {
        category: "entertainment",
        id: "spotify",
        label: "Spotify",
        navGroup: "optimized",
        slug: "spotify",
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
        category: "productivity",
        id: "my-api",
        label: "My API",
        navGroup: "starter",
        slug: "my-api",
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
        category: "productivity",
        id: "gmail",
        label: "Gmail",
        navGroup: "optimized",
        slug: "gmail",
      },
      {
        category: "productivity",
        id: "airtable-api",
        label: "Airtable API",
        navGroup: "starter",
        slug: "airtable-api",
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
        category: "social",
        id: "zoom",
        label: "Zoom",
        navGroup: "optimized",
        slug: "zoom",
      },
      {
        category: "social",
        id: "slack",
        label: "Slack",
        navGroup: "optimized",
        slug: "slack",
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
      categoriesCreated: expect.any(Array),
      categoriesRemoved: expect.any(Array),
      categoriesUpdated: expect.any(Array),
      errors: expect.any(Array),
      partnerCount: expect.any(Number),
      toolkitCount: expect.any(Number),
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
        category: "development",
        id: "Pylon",
        label: "Pylon",
        navGroup: "optimized",
        slug: "pylon",
      },
      {
        category: "development",
        id: "Github",
        label: "GitHub",
        navGroup: "optimized",
        slug: "github",
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
        category: "development",
        id: "Pylon",
        label: "Pylon",
        navGroup: "optimized",
        slug: "pylon",
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
        category: "development",
        id: "Pylon",
        label: "Pylon",
        navGroup: "optimized",
        slug: "pylon",
      },
      {
        category: "others",
        id: "CustomTool",
        label: "Custom Tool",
        navGroup: "optimized",
        slug: "custom-tool",
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
        category: "others",
        id: "CustomTool",
        label: "Custom Tool",
        navGroup: "optimized",
        slug: "custom-tool",
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
  category: "search",
  id: "Tavily",
  label: "Tavily",
  relativeDocsLink: "/en/resources/integrations/search/tavily",
};

describe("buildPartnerToolkitInfoList", () => {
  it("derives a partner sidebar entry from the partner catalog", () => {
    const result = buildPartnerToolkitInfoList([tavilyPartner]);

    expect(result).toEqual([
      {
        category: "search",
        id: "Tavily",
        label: "Tavily",
        navGroup: "partner",
        slug: "tavily",
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
    category: "search",
    id: "GoogleSearch",
    label: "Google Search",
    navGroup: "optimized",
    slug: "google-search",
  };
  const searchPartner: ToolkitInfo = {
    category: "search",
    id: "Tavily",
    label: "Tavily",
    navGroup: "partner",
    slug: "tavily",
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
        [{ ...searchToolkit, category: "development", slug: "tavily" }],
        [searchPartner]
      )
    ).not.toThrow();
  });
});

describe("generateCategoryMeta partner section", () => {
  const toolkits: ToolkitInfo[] = [
    {
      category: "search",
      id: "GoogleSearch",
      label: "Google Search",
      navGroup: "optimized",
      slug: "google-search",
    },
    {
      category: "search",
      id: "ExaApi",
      label: "Exa API",
      navGroup: "starter",
      slug: "exa-api",
    },
    {
      category: "search",
      id: "Tavily",
      label: "Tavily",
      navGroup: "partner",
      slug: "tavily",
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
