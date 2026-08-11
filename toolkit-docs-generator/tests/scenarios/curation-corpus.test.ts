import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { describe, expect, it } from "vitest";
import { createMarkdownCurationSource } from "../../src/sources/markdown-curation";
import type { MergedToolkit } from "../../src/types/index";

const GENERATOR_ROOT = join(__dirname, "../..");
const CURATION_DIR = join(GENERATOR_ROOT, "curation");
const TOOLKITS_DIR = join(GENERATOR_ROOT, "data", "toolkits");

describe("checked-in Markdown curation", () => {
  it("reproduces every authored chunk and subpage in committed toolkit data", async () => {
    const source = createMarkdownCurationSource(CURATION_DIR);
    const files = (await readdir(TOOLKITS_DIR))
      .filter((file) => file.endsWith(".json") && file !== "index.json")
      .sort();

    let chunkCount = 0;
    let subPageCount = 0;
    for (const file of files) {
      const toolkit = JSON.parse(
        await readFile(join(TOOLKITS_DIR, file), "utf-8")
      ) as MergedToolkit;
      const current = await source.getCustomSections(toolkit.id);
      const expectedToolChunks = Object.fromEntries(
        toolkit.tools
          .filter((tool) => tool.documentationChunks.length > 0)
          .map((tool) => [tool.name, tool.documentationChunks])
      );

      expect(current.documentationChunks, file).toEqual(
        toolkit.documentationChunks
      );
      expect(current.toolChunks, file).toEqual(expectedToolChunks);
      expect(current.subPages, file).toEqual(toolkit.subPages);
      expect(current.customImports, file).toEqual([]);

      chunkCount += current.documentationChunks.length;
      chunkCount += Object.values(current.toolChunks).reduce(
        (total, chunks) => total + chunks.length,
        0
      );
      subPageCount += current.subPages.length;
    }

    expect(chunkCount).toBe(82);
    expect(subPageCount).toBe(2);
  });
});
