import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  buildValidationOutputLines,
  validateMergedCustomSections,
} from "../../scripts/validate-merge";

const JSON_INDENT_SPACES = 2;
const ZERO = 0;
const ONE = 1;
const TWO = 2;
const THREE = 3;

async function createTempToolkitDir(): Promise<string> {
  const root = await mkdtemp(join(tmpdir(), "validate-merge-"));
  const dataDir = join(root, "toolkits");
  await writeFile(join(root, ".keep"), "");
  await mkdir(dataDir, { recursive: true });
  return dataDir;
}

async function writeToolkitFile(
  dataDir: string,
  fileName: string,
  content: string
): Promise<void> {
  await writeFile(join(dataDir, fileName), content, "utf-8");
}

describe("validateMergedCustomSections", () => {
  const tempDirs: string[] = [];

  afterEach(async () => {
    await Promise.all(
      tempDirs.map((dir) => rm(dir, { force: true, recursive: true }))
    );
    tempDirs.length = ZERO;
  });

  it("aggregates toolkit custom-section counts", async () => {
    const dataDir = await createTempToolkitDir();
    tempDirs.push(join(dataDir, ".."));

    await writeToolkitFile(
      dataDir,
      "alpha.json",
      JSON.stringify(
        {
          customImports: ["import A from 'a';"],
          documentationChunks: [{ content: "alpha-doc" }],
          id: "Alpha",
          label: "Alpha",
        },
        null,
        JSON_INDENT_SPACES
      )
    );
    await writeToolkitFile(
      dataDir,
      "beta.json",
      JSON.stringify(
        {
          id: "Beta",
          label: "Beta",
          subPages: [{ slug: "details" }],
        },
        null,
        JSON_INDENT_SPACES
      )
    );
    await writeToolkitFile(
      dataDir,
      "gamma.json",
      JSON.stringify({ id: "Gamma", label: "Gamma" }, null, JSON_INDENT_SPACES)
    );
    await writeToolkitFile(dataDir, "index.json", JSON.stringify({}));

    const result = validateMergedCustomSections(dataDir);
    const expectedTotalToolkits = THREE;
    const expectedToolkitsWithCustomSections = TWO;
    const expectedSingleCount = ONE;
    const expectedNoErrors = ZERO;

    expect(result.totalToolkits).toBe(expectedTotalToolkits);
    expect(result.withDocChunks).toBe(expectedSingleCount);
    expect(result.withCustomImports).toBe(expectedSingleCount);
    expect(result.withSubPages).toBe(expectedSingleCount);
    expect(result.detailedResults).toHaveLength(
      expectedToolkitsWithCustomSections
    );
    expect(result.errors).toHaveLength(expectedNoErrors);
  });

  it("continues when one toolkit JSON is malformed", async () => {
    const dataDir = await createTempToolkitDir();
    tempDirs.push(join(dataDir, ".."));

    await writeToolkitFile(
      dataDir,
      "good.json",
      JSON.stringify(
        { customImports: ["x"], id: "Good", label: "Good" },
        null,
        JSON_INDENT_SPACES
      )
    );
    await writeToolkitFile(dataDir, "broken.json", "{ not-valid-json ");

    const result = validateMergedCustomSections(dataDir);
    const expectedSingleCount = ONE;

    expect(result.totalToolkits).toBe(expectedSingleCount);
    expect(result.detailedResults).toHaveLength(expectedSingleCount);
    expect(result.errors).toHaveLength(expectedSingleCount);
    expect(result.errors[0]).toContain("broken.json");
  });
});

describe("buildValidationOutputLines", () => {
  it("renders no-custom-sections guidance when details are empty", () => {
    const lines = buildValidationOutputLines({
      detailedResults: [],
      errors: [],
      totalToolkits: TWO,
      withCustomImports: ZERO,
      withDocChunks: ZERO,
      withSubPages: ZERO,
    });

    expect(lines.join("\n")).toContain(
      "No toolkits found with custom sections."
    );
    expect(lines.join("\n")).toContain(
      "bun toolkit-docs-generator/scripts/merge-custom-sections.ts"
    );
  });
});
