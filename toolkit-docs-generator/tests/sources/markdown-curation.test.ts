import { mkdir, mkdtemp, rm, symlink, writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, describe, expect, it } from "vitest";
import { createMarkdownCurationSource } from "../../src/sources/markdown-curation";

const createTempDir = async (): Promise<string> =>
  mkdtemp(join(tmpdir(), "markdown-curation-"));

const writeDocument = async (
  root: string,
  relativePath: string,
  source: string
): Promise<void> => {
  const filePath = join(root, relativePath);
  await mkdir(join(filePath, ".."), { recursive: true });
  await writeFile(filePath, source);
};

const chunk = (overrides = "", body = "Authored prose"): string => `---
type: warning
location: description
position: after
${overrides}---
${body}
`;

describe("MarkdownCurationSource", () => {
  let tempDir: string | null = null;

  afterEach(async () => {
    if (tempDir) {
      await rm(tempDir, { recursive: true, force: true });
      tempDir = null;
    }
  });

  it("fails when the configured root is missing", async () => {
    tempDir = await createTempDir();
    const source = createMarkdownCurationSource(join(tempDir, "missing"));

    await expect(source.getAllCustomSections()).rejects.toThrow(
      "Configured curation directory does not exist"
    );
  });

  it("returns authoritative empty sections for a missing toolkit", async () => {
    tempDir = await createTempDir();
    const source = createMarkdownCurationSource(tempDir);

    await expect(source.getCustomSections("Github")).resolves.toEqual({
      documentationChunks: [],
      customImports: [],
      subPages: [],
      toolChunks: {},
    });
  });

  it("compiles toolkit and tool chunks from Markdown", async () => {
    tempDir = await createTempDir();
    await writeDocument(
      tempDir,
      "github/chunks/01-toolkit.mdx",
      chunk("header: '## Setup'\n", "## Setup\n\n<Callout>Read this.</Callout>")
    );
    await writeDocument(
      tempDir,
      "github/chunks/02-tool.mdx",
      chunk("tool: Github.CreateIssue\n", "Tool guidance")
    );

    const sections =
      await createMarkdownCurationSource(tempDir).getCustomSections("GitHub");

    expect(sections.documentationChunks).toEqual([
      expect.objectContaining({
        header: "## Setup",
        content: "## Setup\n\n<Callout>Read this.</Callout>",
      }),
    ]);
    expect(sections.toolChunks.CreateIssue).toEqual([
      expect.objectContaining({ content: "Tool guidance" }),
    ]);
    expect(sections.customImports).toEqual([]);
  });

  it("compiles nested subpages and derives their relative paths", async () => {
    tempDir = await createTempDir();
    await writeDocument(
      tempDir,
      "jira/pages/environment-variables/page.mdx",
      `---
type: environment-variables
---
# Environment variables
`
    );

    const sections =
      await createMarkdownCurationSource(tempDir).getCustomSections("Jira");

    expect(sections.subPages).toEqual([
      {
        type: "environment-variables",
        content: "# Environment variables",
        relativePath: "environment-variables/page.mdx",
      },
    ]);
  });

  it("loads custom imports from Markdown", async () => {
    tempDir = await createTempDir();
    await writeDocument(
      tempDir,
      "github/imports/01-starter-tool-info.mdx",
      `---
type: import
---
import StarterToolInfo from "@/app/_components/starter-tool-info";
`
    );

    const sections =
      await createMarkdownCurationSource(tempDir).getCustomSections("Github");

    expect(sections.customImports).toEqual([
      'import StarterToolInfo from "@/app/_components/starter-tool-info";',
    ]);
  });

  it("orders chunks by source path while preserving priority metadata", async () => {
    tempDir = await createTempDir();
    await writeDocument(
      tempDir,
      "github/chunks/b.mdx",
      chunk("priority: 20\n", "Second")
    );
    await writeDocument(
      tempDir,
      "github/chunks/c.mdx",
      chunk("priority: 10\n", "First")
    );
    await writeDocument(
      tempDir,
      "github/chunks/a.mdx",
      chunk("priority: 20\n", "Middle")
    );

    const sections =
      await createMarkdownCurationSource(tempDir).getCustomSections("Github");

    expect(
      sections.documentationChunks.map(({ content, priority }) => ({
        content,
        priority,
      }))
    ).toEqual([
      { content: "Middle", priority: 20 },
      { content: "Second", priority: 20 },
      { content: "First", priority: 10 },
    ]);
  });

  it("rejects leftover JSON curation", async () => {
    tempDir = await createTempDir();
    await writeFile(join(tempDir, "github.json"), "{}");

    await expect(
      createMarkdownCurationSource(tempDir).getAllCustomSections()
    ).rejects.toThrow("JSON curation is no longer supported");
  });

  it("rejects invalid frontmatter with the source path", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "github/chunks/bad.mdx");
    await writeDocument(
      tempDir,
      "github/chunks/bad.mdx",
      chunk("unknown: true\n")
    );

    await expect(
      createMarkdownCurationSource(tempDir).getAllCustomSections()
    ).rejects.toThrow(`invalid schema (${filePath})`);
  });

  it("rejects malformed MDX with the source path", async () => {
    tempDir = await createTempDir();
    const filePath = join(tempDir, "github/chunks/bad.mdx");
    await writeDocument(
      tempDir,
      "github/chunks/bad.mdx",
      chunk("", "<Callout>Unclosed")
    );

    await expect(
      createMarkdownCurationSource(tempDir).getAllCustomSections()
    ).rejects.toThrow(`invalid MDX (${filePath})`);
  });

  it("rejects a tool target from another toolkit", async () => {
    tempDir = await createTempDir();
    await writeDocument(
      tempDir,
      "github/chunks/bad-tool.mdx",
      chunk("tool: Slack.SendMessage\n")
    );

    await expect(
      createMarkdownCurationSource(tempDir).getAllCustomSections()
    ).rejects.toThrow("must be fully qualified and match toolkit github");
  });

  it("rejects normalized toolkit directory collisions", async () => {
    tempDir = await createTempDir();
    await mkdir(join(tempDir, "NotionToolkit"));
    await mkdir(join(tempDir, "notion-toolkit"));

    await expect(
      createMarkdownCurationSource(tempDir).getAllCustomSections()
    ).rejects.toThrow("normalize to the same ID");
  });

  it("rejects symlinked toolkit directories", async () => {
    tempDir = await createTempDir();
    const target = join(tempDir, "target");
    await mkdir(target);
    await symlink(target, join(tempDir, "github"));

    await expect(
      createMarkdownCurationSource(tempDir).getAllCustomSections()
    ).rejects.toThrow("may not contain symlinks");
  });
});
