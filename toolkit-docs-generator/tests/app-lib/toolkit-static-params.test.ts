import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { normalizeToolkitId } from "../../../app/_lib/toolkit-slug";
import {
  getToolkitStaticParamsForCategory,
  listToolkitRoutes,
  type ToolkitCatalogEntry,
} from "../../../app/_lib/toolkit-static-params";

const withTempDir = async (fn: (dir: string) => Promise<void>) => {
  const dir = await mkdtemp(join(tmpdir(), "toolkit-static-params-"));
  try {
    await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
};

const writeIndex = async (
  dir: string,
  toolkits: Array<{ id: string; category?: string }>
) => {
  const indexFixture = JSON.stringify(
    {
      generatedAt: "2026-01-15T00:00:00.000Z",
      version: "1.0.0",
      toolkits,
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
  const toolkitFixture = JSON.stringify(
    { label: toolkit.label ?? toolkit.id, ...toolkit },
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
        { id: "Github", category: "development" },
        { id: "Gmail", category: "productivity" },
      ]);

      const routes = await listToolkitRoutes({
        dataDir: dir,
        toolkitsCatalog: [],
      });

      expect(routes).toEqual(
        expect.arrayContaining([
          { toolkitId: "github", category: "development" },
          { toolkitId: "gmail", category: "productivity" },
        ])
      );
    });
  });

  it("uses catalog category as fallback when JSON file is absent", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [{ id: "Github", category: "development" }]);

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        { id: "Github", category: "social" },
      ];

      // No JSON file written — catalog is the only source for category
      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([{ toolkitId: "github", category: "social" }]);
    });
  });

  it("prefers JSON category over catalog when JSON file is present", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [{ id: "Github", category: "development" }]);
      // JSON says "social"; catalog says "development" — JSON wins
      await writeToolkitData(dir, {
        id: "Github",
        metadata: { category: "social" },
      });

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        { id: "Github", category: "development" },
      ];

      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([{ toolkitId: "github", category: "social" }]);

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
      await writeIndex(dir, [{ id: "WeaviateApi", category: "development" }]);
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
        { toolkitId: "weaviate-api", category: "databases" },
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
        { id: "GoogleCalendar", category: "productivity" },
      ]);

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        {
          id: "GoogleCalendar",
          category: "productivity",
          docsLink:
            "https://docs.arcade.dev/en/mcp-servers/productivity/google-calendar",
        },
      ];

      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([
        { toolkitId: "google-calendar", category: "productivity" },
      ]);
    });
  });

  it("falls back to data docsLink when catalog entry lacks it", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [
        { id: "HubspotConversationsApi", category: "sales" },
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
        { id: "HubspotConversationsApi", category: "sales" },
      ];

      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([
        { toolkitId: "hubspot-conversations-api", category: "sales" },
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
        { toolkitId: "google-calendar", category: "productivity" },
      ]);
    });
  });

  it("skips toolkits marked as hidden in the design system catalog", async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [{ id: "Github", category: "development" }]);

      const toolkitsCatalog: ToolkitCatalogEntry[] = [
        { id: "Github", category: "development", isHidden: true },
      ];

      const routes = await listToolkitRoutes({ dataDir: dir, toolkitsCatalog });
      expect(routes).toEqual([]);
    });
  });

  it('maps unknown categories to "others"', async () => {
    await withTempDir(async (dir) => {
      await writeIndex(dir, [{ id: "Github", category: "weird" }]);

      const routes = await listToolkitRoutes({
        dataDir: dir,
        toolkitsCatalog: [],
      });

      expect(routes).toEqual([{ toolkitId: "github", category: "others" }]);
    });
  });
});
