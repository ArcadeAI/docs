import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  getToolkitStaticParamsForCategory,
  listToolkitRoutes,
  type ToolkitCatalogEntry,
} from "@/lib/toolkit-static-params";
import { normalizeToolkitId } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";

const INVALID_TOOLKIT_INDEX_SCHEMA_ERROR = /Invalid toolkit index schema/;

const withTempDir = async (fn: (dir: string) => Promise<void>) => {
  const dir = await mkdtemp(join(tmpdir(), "toolkit-static-params-"));
  try {
    await fn(dir);
  } finally {
    await rm(dir, { force: true, recursive: true });
  }
};

const writeIndex = async (
  dir: string,
  toolkits: Array<{ id: string; category?: string }>
) => {
  const entries = toolkits.map((toolkit) => ({
    authType: "none",
    category: toolkit.category ?? "development",
    id: toolkit.id,
    label: toolkit.id,
    toolCount: 0,
    type: "arcade",
    version: "1.0.0",
  }));
  const indexFixture = JSON.stringify(
    {
      generatedAt: "2026-01-15T00:00:00.000Z",
      toolkits: entries,
      version: "1.0.0",
    },
    null,
    2
  );
  await writeFile(join(dir, "index.json"), indexFixture, "utf-8");
};

const writeToolkitData = async (
  dir: string,
  toolkit: {
    id: string;
    label?: string;
    metadata?: { category?: string; docsLink?: string; isHidden?: boolean };
  }
) => {
  const fileName = `${normalizeToolkitId(toolkit.id)}.json`;
  // Fill in the fields the merged toolkit schema requires but this test
  // suite doesn't care about, so fixtures stay valid without every call
  // site restating boilerplate.
  const toolkitFixture = JSON.stringify(
    {
      auth: null,
      description: null,
      label: toolkit.label ?? toolkit.id,
      tools: [],
      version: "1.0.0",
      ...toolkit,
      metadata: {
        category: "productivity",
        docsLink: "",
        iconUrl: "https://design-system.arcade.dev/icons/placeholder.svg",
        isBYOC: false,
        isComingSoon: false,
        isHidden: false,
        isPro: false,
        type: "arcade",
        ...toolkit.metadata,
      },
    },
    null,
    2
  );
  await writeFile(join(dir, fileName), toolkitFixture, "utf-8");
};

describe("toolkit static params", () => {
  it("normalizes toolkit IDs into URL-safe slugs", () => {
    expect(normalizeToolkitId("GithubApi")).toBe("githubapi");
    expect(normalizeToolkitId("GitHub API")).toBe("githubapi");
  });

  it("lists toolkit routes from the index", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [
        { category: "development", id: "Github" },
        { category: "productivity", id: "Gmail" },
      ]);

      const routes = await listToolkitRoutes({
        dataDir: dir,
        toolkitsCatalog: [],
      });

      expect(routes).toEqual(
        expect.arrayContaining([
          { category: "development", toolkitId: "github" },
          { category: "productivity", toolkitId: "gmail" },
        ])
      );
    });
  });

  it("uses catalog category as fallback when JSON file is absent", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [{ category: "development", id: "Github" }]);

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        { category: "social", id: "Github" },
      ];

      // No JSON file written — catalog is the only source for category
      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([{ category: "social", toolkitId: "github" }]);
    });
  });

  it("prefers JSON category over catalog when JSON file is present", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [{ category: "development", id: "Github" }]);
      // JSON says "social"; catalog says "development" — JSON wins
      await writeToolkitData(dir, {
        id: "Github",
        metadata: { category: "social" },
      });

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        { category: "development", id: "Github" },
      ];

      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([{ category: "social", toolkitId: "github" }]);

      const params = await getToolkitStaticParamsForCategory("social", {
        dataDir: dir,
        toolkitsCatalog,
      });
      expect(params).toEqual([{ toolkitId: "github" }]);
    });
  });

  it("reads correct category from JSON for *Api toolkit with stale index", async () => {
    await withTempDir(async (dir) => {
      // Simulates WeaviateApi: index.json says "development" (stale), JSON says "databases"
      await writeIndex(dir, [{ category: "development", id: "WeaviateApi" }]);
      await writeToolkitData(dir, {
        id: "WeaviateApi",
        metadata: {
          category: "databases",
          docsLink:
            "https://docs.arcade.dev/en/resources/integrations/databases/weaviate-api",
        },
      });

      const routes = await listToolkitRoutes({
        dataDir: dir,
        toolkitsCatalog: [],
      });
      expect(routes).toEqual([
        { category: "databases", toolkitId: "weaviate-api" },
      ]);

      const params = await getToolkitStaticParamsForCategory("databases", {
        dataDir: dir,
        toolkitsCatalog: [],
      });
      expect(params).toEqual([{ toolkitId: "weaviate-api" }]);
    });
  });

  it("uses docsLink slugs when available", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [
        { category: "productivity", id: "GoogleCalendar" },
      ]);

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        {
          category: "productivity",
          docsLink:
            "https://docs.arcade.dev/en/mcp-servers/productivity/google-calendar",
          id: "GoogleCalendar",
        },
      ];

      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([
        { category: "productivity", toolkitId: "google-calendar" },
      ]);
    });
  });

  it("falls back to data docsLink when catalog entry lacks it", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [
        { category: "sales", id: "HubspotConversationsApi" },
      ]);
      await writeToolkitData(dir, {
        id: "HubspotConversationsApi",
        metadata: {
          category: "sales",
          docsLink:
            "https://docs.arcade.dev/en/mcp-servers/sales/hubspot-conversations-api",
        },
      });

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        { category: "sales", id: "HubspotConversationsApi" },
      ];

      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([
        { category: "sales", toolkitId: "hubspot-conversations-api" },
      ]);
    });
  });

  it("falls back to scanning data files when the index is missing", async () => {
    await withTempDir(async (dir) => {
      await writeToolkitData(dir, {
        id: "GoogleCalendar",
        metadata: {
          category: "productivity",
          docsLink:
            "https://docs.arcade.dev/en/mcp-servers/productivity/google-calendar",
        },
      });

      const routes = await listToolkitRoutes({
        dataDir: dir,
        toolkitsCatalog: [],
      });

      expect(routes).toEqual([
        { category: "productivity", toolkitId: "google-calendar" },
      ]);
    });
  });

  it("skips toolkits marked as hidden in the design system catalog", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [{ category: "development", id: "Github" }]);

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        { category: "development", id: "Github", isHidden: true },
      ];

      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([]);
    });
  });

  it("rejects an unrecognized category in the index schema", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [{ category: "weird", id: "Github" }]);

      await expect(
        listToolkitRoutes({ dataDir: dir, toolkitsCatalog: [] })
      ).rejects.toThrow(INVALID_TOOLKIT_INDEX_SCHEMA_ERROR);
    });
  });

  it("skips a toolkit with no category when the index is absent", async () => {
    await withTempDir(async (dir) => {
      // No JSON file, no catalog entry, and no index — nothing to route this
      // toolkit under.

      const routes = await listToolkitRoutes({
        dataDir: dir,
        toolkitsCatalog: [],
      });

      expect(routes).toEqual([]);
    });
  });
});
