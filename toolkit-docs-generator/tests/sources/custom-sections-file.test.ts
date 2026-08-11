import { mkdir, mkdtemp, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { createCustomSectionsFileSource } from "../../src/sources/custom-sections-file";

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

  it("loads rich subpage entries supported by generated toolkit output", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "custom-sections.json");
    const subPage = {
      type: "mdx",
      content: "# Setup",
      relativePath: "setup/page.mdx",
    };
    await writeFile(
      filePath,
      JSON.stringify({ Github: { subPages: [subPage] } }, null, 2)
    );

    const source = createCustomSectionsFileSource(filePath);
    const result = await source.getCustomSections("Github");

    expect(result?.subPages).toEqual([subPage]);
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

  it("loads a directory of per-toolkit files keyed by file name", async () => {
    tempDir = await createTempDir();
    const dirPath = join(tempDir, "curation");
    await mkdir(dirPath);
    await writeFile(
      join(dirPath, "github.json"),
      JSON.stringify(
        {
          documentationChunks: [
            {
              type: "warning",
              location: "description",
              position: "after",
              content: "Prose",
            },
          ],
        },
        null,
        2
      )
    );
    await writeFile(
      join(dirPath, "slack.json"),
      JSON.stringify({ customImports: ["import X from 'x';"] }, null, 2)
    );

    const source = createCustomSectionsFileSource(dirPath);

    const github = await source.getCustomSections("Github");
    expect(github?.documentationChunks).toHaveLength(1);
    // File stem "github" matches toolkit id "Github" via normalization.
    expect(github?.customImports).toEqual([]);

    const slack = await source.getCustomSections("Slack");
    expect(slack?.customImports).toEqual(["import X from 'x';"]);

    const all = await source.getAllCustomSections();
    expect(Object.keys(all).sort()).toEqual(["github", "slack"]);
  });

  it("throws a helpful error when a directory file has an invalid schema", async () => {
    tempDir = await createTempDir();
    const dirPath = join(tempDir, "curation");
    await mkdir(dirPath);
    const badPath = join(dirPath, "github.json");
    await writeFile(
      badPath,
      JSON.stringify({ documentationChunks: "not-an-array" }, null, 2)
    );

    const source = createCustomSectionsFileSource(dirPath);

    await expect(source.getAllCustomSections()).rejects.toThrow(
      `Custom sections file has invalid schema (${badPath})`
    );
  });

  it("rejects malformed rich subpage entries", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "invalid-subpage.json");
    await writeFile(
      filePath,
      JSON.stringify({ Github: { subPages: [{ type: "mdx" }] } }, null, 2)
    );

    const source = createCustomSectionsFileSource(filePath);

    await expect(source.getAllCustomSections()).rejects.toThrow(
      `Custom sections file has invalid schema (${filePath})`
    );
  });
});
