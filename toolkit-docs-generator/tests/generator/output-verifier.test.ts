import { mkdtemp, readFile, rename, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { describe, expect, it } from "vitest";

import {
  createJsonGenerator,
  verifyOutputDir,
} from "../../src/generator/index.js";
import type { MergedToolkit } from "../../src/types/index.js";

const loadFixture = async (fileName: string): Promise<MergedToolkit> => {
  const fixturesDir = new URL("../fixtures/", import.meta.url);
  const filePath = new URL(fileName, fixturesDir);
  const content = await readFile(filePath, "utf-8");
  return JSON.parse(content) as MergedToolkit;
};

const withTempDir = async (fn: (dir: string) => Promise<void>) => {
  const dir = await mkdtemp(join(tmpdir(), "toolkit-docs-"));
  try {
    await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
};

describe("verifyOutputDir", () => {
  it("flags an empty output directory", async () => {
    await withTempDir(async (dir) => {
      const result = await verifyOutputDir(dir);

      expect(result.valid).toBe(false);
      expect(
        result.errors.some((error) =>
          error.includes("No toolkit JSON files found")
        )
      ).toBe(true);
      expect(
        result.errors.some((error) =>
          error.includes("Missing or invalid index.json")
        )
      ).toBe(true);
    });
  });

  it("accepts a valid output directory", async () => {
    await withTempDir(async (dir) => {
      const toolkits = await Promise.all([
        loadFixture("github-toolkit.json"),
        loadFixture("slack-toolkit.json"),
      ]);
      const generator = createJsonGenerator({
        outputDir: dir,
        prettyPrint: false,
        generateIndex: true,
      });

      await generator.generateAll(toolkits);

      const result = await verifyOutputDir(dir);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });
  });

  it("flags missing index.json", async () => {
    await withTempDir(async (dir) => {
      const toolkits = await Promise.all([
        loadFixture("github-toolkit.json"),
        loadFixture("slack-toolkit.json"),
      ]);
      const generator = createJsonGenerator({
        outputDir: dir,
        prettyPrint: false,
        generateIndex: true,
      });

      await generator.generateAll(toolkits);
      await rm(join(dir, "index.json"));

      const result = await verifyOutputDir(dir);

      expect(result.valid).toBe(false);
      expect(result.errors.some((error) => error.includes("index.json"))).toBe(
        true
      );
    });
  });

  it("flags index entries that do not match toolkit metadata", async () => {
    await withTempDir(async (dir) => {
      const toolkits = await Promise.all([
        loadFixture("github-toolkit.json"),
        loadFixture("slack-toolkit.json"),
      ]);
      const generator = createJsonGenerator({
        outputDir: dir,
        prettyPrint: false,
        generateIndex: true,
      });

      await generator.generateAll(toolkits);

      const indexPath = join(dir, "index.json");
      const index = JSON.parse(await readFile(indexPath, "utf-8")) as {
        toolkits: Record<string, unknown>[];
      };
      const githubEntry = index.toolkits.find((entry) => entry.id === "Github");
      if (githubEntry) {
        githubEntry.version = "9.9.9";
        githubEntry.category = "social";
        githubEntry.type = "community";
        githubEntry.toolCount = 999;
        githubEntry.authType = "none";
      }
      await writeFile(indexPath, JSON.stringify(index, null, 2), "utf-8");

      const result = await verifyOutputDir(dir);

      expect(result.valid).toBe(false);
      expect(
        result.errors.some((error) =>
          error.includes("version mismatch for Github")
        )
      ).toBe(true);
      expect(
        result.errors.some((error) =>
          error.includes("category mismatch for Github")
        )
      ).toBe(true);
      expect(
        result.errors.some((error) =>
          error.includes("type mismatch for Github")
        )
      ).toBe(true);
      expect(
        result.errors.some((error) =>
          error.includes("toolCount mismatch for Github")
        )
      ).toBe(true);
      expect(
        result.errors.some((error) =>
          error.includes("authType mismatch for Github")
        )
      ).toBe(true);
    });
  });

  it("flags index entries without matching files", async () => {
    await withTempDir(async (dir) => {
      const toolkits = await Promise.all([
        loadFixture("github-toolkit.json"),
        loadFixture("slack-toolkit.json"),
      ]);
      const generator = createJsonGenerator({
        outputDir: dir,
        prettyPrint: false,
        generateIndex: true,
      });

      await generator.generateAll(toolkits);

      const indexPath = join(dir, "index.json");
      const index = JSON.parse(await readFile(indexPath, "utf-8")) as {
        toolkits: Record<string, unknown>[];
      };
      index.toolkits.push({
        id: "Ghost",
        label: "Ghost",
        version: "1.0.0",
        category: "development",
        type: "arcade",
        toolCount: 0,
        authType: "none",
      });
      await writeFile(indexPath, JSON.stringify(index, null, 2), "utf-8");

      const result = await verifyOutputDir(dir);

      expect(result.valid).toBe(false);
      expect(
        result.errors.some((error) =>
          error.includes("index.json entry has no matching file: Ghost")
        )
      ).toBe(true);
    });
  });

  it("flags toolkit files that are not lowercase", async () => {
    await withTempDir(async (dir) => {
      const toolkits = await Promise.all([loadFixture("github-toolkit.json")]);
      const generator = createJsonGenerator({
        outputDir: dir,
        prettyPrint: false,
        generateIndex: true,
      });

      await generator.generateAll(toolkits);

      await rename(join(dir, "github.json"), join(dir, "Github.json"));

      const result = await verifyOutputDir(dir);

      expect(result.valid).toBe(false);
      expect(
        result.errors.some((error) =>
          error.includes("File name must be lowercase: Github.json")
        )
      ).toBe(true);
    });
  });

  it("flags toolkit files that do not match toolkit id", async () => {
    await withTempDir(async (dir) => {
      const toolkits = await Promise.all([loadFixture("github-toolkit.json")]);
      const generator = createJsonGenerator({
        outputDir: dir,
        prettyPrint: false,
        generateIndex: true,
      });

      await generator.generateAll(toolkits);

      await rename(join(dir, "github.json"), join(dir, "mismatch.json"));

      const result = await verifyOutputDir(dir);

      expect(result.valid).toBe(false);
      expect(
        result.errors.some((error) =>
          error.includes("File name does not match toolkit id: mismatch.json")
        )
      ).toBe(true);
    });
  });
});
