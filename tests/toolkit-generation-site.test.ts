import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, test } from "vitest";
import { readToolkitData, readToolkitIndex } from "@/app/_lib/toolkit-data";
import { listToolkitRoutes } from "@/app/_lib/toolkit-static-params";
import { createJsonGenerator } from "@/toolkit-docs-generator/src/generator/json-generator";
import type { MergedToolkit } from "@/toolkit-docs-generator/src/shared/toolkit-schemas";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true }))
  );
});

const fixtureToolkit: MergedToolkit = {
  id: "FixtureApi",
  label: "Fixture API",
  version: "1.0.0",
  description: "A generated fixture toolkit.",
  metadata: {
    category: "development",
    iconUrl: "https://example.com/fixture.svg",
    isBYOC: false,
    isPro: false,
    type: "arcade_starter",
    docsLink:
      "https://docs.arcade.dev/en/resources/integrations/development/fixture-api",
    isComingSoon: false,
    isHidden: false,
  },
  auth: null,
  tools: [],
  documentationChunks: [],
  customImports: [],
  subPages: [],
};

describe("generated toolkit output through the docs app", () => {
  test("generation, index loading, data loading, and route enumeration agree", async () => {
    const dataDir = await mkdtemp(join(tmpdir(), "toolkit-generation-site-"));
    temporaryDirectories.push(dataDir);

    const generator = createJsonGenerator({
      outputDir: dataDir,
      generateIndex: true,
    });
    const result = await generator.generateAll([fixtureToolkit]);

    expect(result.errors).toEqual([]);
    expect(result.filesWritten).toHaveLength(2);

    const index = await readToolkitIndex({ dataDir });
    const data = await readToolkitData("fixture-api", { dataDir });
    const routes = await listToolkitRoutes({
      dataDir,
      toolkitsCatalog: [],
    });

    expect(index?.toolkits).toEqual([
      expect.objectContaining({
        id: "FixtureApi",
        category: "development",
        toolCount: 0,
      }),
    ]);
    expect(data).toMatchObject(fixtureToolkit);
    expect(routes).toEqual([
      { toolkitId: "fixture-api", category: "development" },
    ]);

    const generatedFile = JSON.parse(
      await readFile(join(dataDir, "fixtureapi.json"), "utf8")
    ) as MergedToolkit;
    expect(generatedFile.id).toBe("FixtureApi");
  });
});
