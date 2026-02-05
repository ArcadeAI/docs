import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { describe, expect, it } from "vitest";

import { readToolkitData, readToolkitIndex } from "../toolkit-data";

const loadFixture = async (fileName: string): Promise<string> => {
  const fixturesDir = new URL(
    "../../../toolkit-docs-generator/tests/fixtures/",
    import.meta.url
  );
  const filePath = new URL(fileName, fixturesDir);
  return await readFile(filePath, "utf-8");
};

const withTempDir = async (fn: (dir: string) => Promise<void>) => {
  const dir = await mkdtemp(join(tmpdir(), "toolkit-data-"));
  try {
    await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
};

describe("toolkit data loader", () => {
  it("reads toolkit data from the provided directory", async () => {
    await withTempDir(async (dir) => {
      const fixture = await loadFixture("github-toolkit.json");
      await writeFile(join(dir, "github.json"), fixture, "utf-8");

      const data = await readToolkitData("Github", { dataDir: dir });

      expect(data?.id).toBe("Github");
      expect(data?.tools.length).toBeGreaterThan(0);
    });
  });

  it("returns null when toolkit data is missing", async () => {
    await withTempDir(async (dir) => {
      const data = await readToolkitData("Missing", { dataDir: dir });

      expect(data).toBeNull();
    });
  });

  it("reads index data from the provided directory", async () => {
    await withTempDir(async (dir) => {
      const indexFixture = JSON.stringify(
        {
          generatedAt: "2026-01-15T00:00:00.000Z",
          version: "1.0.0",
          toolkits: [
            {
              id: "Github",
              label: "GitHub",
              version: "1.0.0",
              category: "development",
              toolCount: 3,
              authType: "oauth2",
            },
          ],
        },
        null,
        2
      );
      await writeFile(join(dir, "index.json"), indexFixture, "utf-8");

      const index = await readToolkitIndex({ dataDir: dir });

      expect(index?.toolkits).toHaveLength(1);
      expect(index?.toolkits[0]?.id).toBe("Github");
    });
  });

  it("finds toolkit data by docsLink slug when file name doesn't match", async () => {
    await withTempDir(async (dir) => {
      // File is named posthogapi.json (normalized) but we look up by the
      // hyphenated slug "posthog-api" that comes from the docsLink.
      const toolkitData = {
        id: "PosthogApi",
        label: "PostHog API",
        tools: [],
        metadata: {
          docsLink:
            "https://docs.arcade.dev/en/mcp-servers/development/posthog-api",
        },
      };
      await writeFile(
        join(dir, "posthogapi.json"),
        JSON.stringify(toolkitData),
        "utf-8"
      );

      // Look up by the hyphenated slug — the direct file "posthog-api.json"
      // doesn't exist, so the fallback findToolkitDataBySlug must match.
      const data = await readToolkitData("posthog-api", { dataDir: dir });

      expect(data).not.toBeNull();
      expect(data?.id).toBe("PosthogApi");
    });
  });

  it("prevents path traversal when reading toolkit data", async () => {
    await withTempDir(async (dir) => {
      const escapeId = `${basename(dir)}-escape`;
      const escapeFilePath = join(dir, "..", `${escapeId}.json`);
      await writeFile(
        escapeFilePath,
        JSON.stringify({ id: "Escape", tools: [] }),
        "utf-8"
      );

      try {
        const data = await readToolkitData(`../${escapeId}`, {
          dataDir: dir,
        });

        expect(data).toBeNull();
      } finally {
        await rm(escapeFilePath, { force: true });
      }
    });
  });
});
