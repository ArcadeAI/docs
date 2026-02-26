import { mkdtemp, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { createCustomSectionsFileSource } from "../../src/sources/custom-sections-file.js";

const createTempDir = async (): Promise<string> =>
  mkdtemp(join(tmpdir(), "custom-sections-"));

describe("CustomSectionsFileSource", () => {
  let tempDir: string | null = null;

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
      tempDir = null;
    }
  });

  it("returns empty data when file is missing", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "missing.json");
    const source = createCustomSectionsFileSource(filePath);

    const result = await source.getCustomSections("Github");
    expect(result).toBeNull();

    const all = await source.getAllCustomSections();
    expect(all).toEqual({});
  });

  it("loads custom sections with defaults applied", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "custom-sections.json");
    await writeFile(
      filePath,
      JSON.stringify(
        {
          Github: {},
        },
        null,
        2
      )
    );

    const source = createCustomSectionsFileSource(filePath);
    const result = await source.getCustomSections("Github");

    expect(result).not.toBeNull();
    expect(result?.documentationChunks).toEqual([]);
    expect(result?.customImports).toEqual([]);
    expect(result?.subPages).toEqual([]);
    expect(result?.toolChunks).toEqual({});
  });

  it("throws a helpful error when JSON is invalid", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "invalid.json");
    await writeFile(filePath, "{ invalid-json");

    const source = createCustomSectionsFileSource(filePath);

    await expect(source.getAllCustomSections()).rejects.toThrow(
      `Custom sections file is not valid JSON (${filePath})`
    );
  });

  it("throws a helpful error when schema is invalid", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "invalid-schema.json");
    await writeFile(
      filePath,
      JSON.stringify(
        {
          Github: {
            documentationChunks: "not-an-array",
          },
        },
        null,
        2
      )
    );

    const source = createCustomSectionsFileSource(filePath);

    await expect(source.getAllCustomSections()).rejects.toThrow(
      `Custom sections file has invalid schema (${filePath})`
    );
  });
});
