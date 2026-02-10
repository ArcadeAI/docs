import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import type { ToolkitData } from "../../../app/_components/toolkit-docs/types";
import { generateToolkitMarkdown } from "../../scripts/generate-toolkit-markdown";

const createToolkit = (overrides: Partial<ToolkitData> = {}): ToolkitData => ({
  id: "Github",
  label: "GitHub",
  version: "1.0.0",
  description: null,
  metadata: {
    category: "development",
    iconUrl: "https://design-system.arcade.dev/icons/github.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade",
    docsLink: "https://docs.arcade.dev",
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  tools: [],
  documentationChunks: [],
  customImports: [],
  subPages: [],
  generatedAt: new Date().toISOString(),
  ...overrides,
});

const createTempDir = async (): Promise<string> =>
  mkdtemp(join(tmpdir(), "toolkit-markdown-"));

const cleanupTempDir = async (dir: string | null) => {
  if (dir) {
    await rm(dir, { recursive: true, force: true });
  }
};

describe("generateToolkitMarkdown", () => {
  let tempDir: string | null = null;

  afterEach(async () => {
    await cleanupTempDir(tempDir);
    tempDir = null;
  });

  it("fails when no routes exist and failOnEmptyRoutes is true", async () => {
    tempDir = await createTempDir();
    await expect(
      generateToolkitMarkdown({
        routes: [],
        outputRoot: tempDir,
        failOnEmptyRoutes: true,
      })
    ).rejects.toThrow("No toolkit routes found");
  });

  it("writes markdown for available toolkits and skips missing data", async () => {
    tempDir = await createTempDir();

    const routes = [
      { category: "development", toolkitId: "github" },
      { category: "sales", toolkitId: "hubspot" },
    ];

    const result = await generateToolkitMarkdown({
      outputRoot: tempDir,
      routes,
      readToolkitDataFn: (toolkitId: string) => {
        if (toolkitId === "github") {
          return Promise.resolve(
            createToolkit({ id: "Github", label: "GitHub" })
          );
        }
        return Promise.resolve(null);
      },
      toMarkdown: () => "# Generated\n",
      failOnEmptyRoutes: false,
    });

    const outputPath = join(tempDir, "development", "github.md");
    const content = await readFile(outputPath, "utf-8");

    expect(content).toBe("# Generated\n");
    expect(result.written).toBe(1);
    expect(result.skipped).toBe(1);
  });

  it("fails when no markdown is written and failOnEmptyRoutes is true", async () => {
    tempDir = await createTempDir();

    await expect(
      generateToolkitMarkdown({
        outputRoot: tempDir,
        routes: [{ category: "development", toolkitId: "github" }],
        readToolkitDataFn: async () => null,
        toMarkdown: () => "# Generated\n",
        failOnEmptyRoutes: true,
      })
    ).rejects.toThrow("No toolkit markdown generated");
  });
});
