/**
 * Scenario Test: Hand-authored prose survives --force-regenerate
 *
 * `documentationChunks`, `customImports`, and `subPages` have no upstream
 * source. Before curation files, they survived only by carry-forward from the
 * previous artifact — and `--force-regenerate` / `--overwrite-output` set the
 * previous-output directory to undefined, discarding all of it.
 *
 * These tests reproduce the force-regenerate condition (no previous toolkit)
 * and assert that prose loaded from a `curation/` directory still lands in the
 * merged output. The final test pins the old bug: with no previous toolkit and
 * no curation, the prose is gone.
 */
import { mkdtemp, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { mergeToolkit } from "../../src/merger/data-merger.js";
import { createCustomSectionsFileSource } from "../../src/sources/custom-sections-file.js";
import type { ToolDefinition } from "../../src/types/index.js";

const createTool = (): ToolDefinition => ({
  name: "TestTool",
  qualifiedName: "TestKit.TestTool",
  fullyQualifiedName: "TestKit.TestTool@1.0.0",
  description: "A test tool",
  toolkitDescription: "Toolkit description",
  parameters: [],
  auth: null,
  secrets: [],
  output: { type: "object", description: "Result" },
});

const curationEntry = {
  documentationChunks: [
    {
      type: "warning",
      location: "description",
      position: "after",
      content: "Hand-authored guidance that has no upstream source.",
    },
  ],
  customImports: ['import { Callout } from "nextra/components";'],
  subPages: [
    {
      type: "environment-variables",
      content: "# Environment Variables\n",
      relativePath: "environment-variables/page.mdx",
    },
  ],
};

describe("prose survives --force-regenerate", () => {
  let tempDir: string | null = null;

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
      tempDir = null;
    }
  });

  it("keeps curation prose when there is no previous toolkit to carry forward", async () => {
    tempDir = await mkdtemp(join(tmpdir(), "curation-"));
    // File name is the toolkit id; loaded from a directory like `curation/`.
    await writeFile(
      join(tempDir, "testkit.json"),
      JSON.stringify(curationEntry, null, 2)
    );

    const source = createCustomSectionsFileSource(tempDir);
    const customSections = await source.getCustomSections("TestKit");
    expect(customSections).not.toBeNull();

    // previousToolkit undefined == what --force-regenerate produces.
    const result = await mergeToolkit(
      "TestKit",
      [createTool()],
      null,
      customSections,
      undefined,
      { previousToolkit: undefined }
    );

    expect(result.toolkit.documentationChunks).toHaveLength(1);
    expect(result.toolkit.documentationChunks[0]?.content).toBe(
      "Hand-authored guidance that has no upstream source."
    );
    expect(result.toolkit.customImports).toEqual(curationEntry.customImports);
    expect(result.toolkit.subPages).toEqual(curationEntry.subPages);
  });

  it("normalizes the toolkit id when matching curation files", async () => {
    tempDir = await mkdtemp(join(tmpdir(), "curation-"));
    await writeFile(
      join(tempDir, "notiontoolkit.json"),
      JSON.stringify(curationEntry, null, 2)
    );

    const source = createCustomSectionsFileSource(tempDir);
    // File stem "notiontoolkit" must match toolkit id "NotionToolkit".
    const customSections = await source.getCustomSections("NotionToolkit");

    expect(customSections?.documentationChunks).toHaveLength(1);
  });

  it("loses prose without curation and without a previous toolkit (the bug)", async () => {
    const result = await mergeToolkit(
      "TestKit",
      [createTool()],
      null,
      null,
      undefined,
      { previousToolkit: undefined }
    );

    expect(result.toolkit.documentationChunks).toHaveLength(0);
    expect(result.toolkit.customImports).toHaveLength(0);
    expect(result.toolkit.subPages).toHaveLength(0);
  });

  it("clears prose when curation exists but is explicitly empty", async () => {
    tempDir = await mkdtemp(join(tmpdir(), "curation-"));
    await writeFile(
      join(tempDir, "testkit.json"),
      JSON.stringify(curationEntry, null, 2)
    );

    const withProse =
      await createCustomSectionsFileSource(tempDir).getCustomSections(
        "TestKit"
      );

    const previousResult = await mergeToolkit(
      "TestKit",
      [createTool()],
      null,
      withProse,
      undefined,
      { previousToolkit: undefined }
    );
    expect(previousResult.toolkit.documentationChunks).toHaveLength(1);

    await writeFile(join(tempDir, "testkit.json"), "{}");
    const clearedCuration =
      await createCustomSectionsFileSource(tempDir).getCustomSections(
        "TestKit"
      );

    const result = await mergeToolkit(
      "TestKit",
      [createTool()],
      null,
      clearedCuration,
      undefined,
      { previousToolkit: previousResult.toolkit }
    );

    expect(result.toolkit.documentationChunks).toHaveLength(0);
    expect(result.toolkit.customImports).toHaveLength(0);
    expect(result.toolkit.subPages).toHaveLength(0);
  });
});
