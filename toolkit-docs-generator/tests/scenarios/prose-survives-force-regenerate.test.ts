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
import { mkdir, mkdtemp, rm, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { mergeToolkit } from "../../src/merger/data-merger";
import { createMarkdownCurationSource } from "../../src/sources/markdown-curation";
import type { ToolDefinition } from "../../src/types/index";

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

const writeCuration = async (root: string): Promise<void> => {
  await mkdir(join(root, "testkit/chunks"), { recursive: true });
  await mkdir(join(root, "testkit/pages/environment-variables"), {
    recursive: true,
  });
  await writeFile(
    join(root, "testkit/chunks/guidance.mdx"),
    `---
type: warning
location: description
position: after
---
Hand-authored guidance that has no upstream source.
`
  );
  await writeFile(
    join(root, "testkit/pages/environment-variables/page.mdx"),
    `---
type: environment-variables
---
# Environment Variables
`
  );
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
    await writeCuration(tempDir);

    const source = createMarkdownCurationSource(tempDir);
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
    expect(result.toolkit.customImports).toEqual([]);
    expect(result.toolkit.subPages).toEqual([
      {
        type: "environment-variables",
        content: "# Environment Variables",
        relativePath: "environment-variables/page.mdx",
      },
    ]);
  });

  it("normalizes the toolkit id when matching curation files", async () => {
    tempDir = await mkdtemp(join(tmpdir(), "curation-"));
    await mkdir(join(tempDir, "notiontoolkit/chunks"), { recursive: true });
    await writeFile(
      join(tempDir, "notiontoolkit/chunks/guidance.mdx"),
      `---
type: warning
location: description
position: after
---
Prose
`
    );

    const source = createMarkdownCurationSource(tempDir);
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

  it("clears prose when the toolkit directory is deleted", async () => {
    tempDir = await mkdtemp(join(tmpdir(), "curation-"));
    await writeCuration(tempDir);

    const withProse =
      await createMarkdownCurationSource(tempDir).getCustomSections("TestKit");

    const previousResult = await mergeToolkit(
      "TestKit",
      [createTool()],
      null,
      withProse,
      undefined,
      { previousToolkit: undefined }
    );
    expect(previousResult.toolkit.documentationChunks).toHaveLength(1);

    await rm(join(tempDir, "testkit"), { recursive: true, force: true });
    const clearedCuration =
      await createMarkdownCurationSource(tempDir).getCustomSections("TestKit");

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
