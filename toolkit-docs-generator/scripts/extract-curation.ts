#!/usr/bin/env npx tsx
/**
 * Extract hand-authored prose from committed toolkit artifacts into Markdown
 * and MDX source files.
 *
 * Each documentation chunk becomes one file under
 * `curation/<toolkit>/chunks/`. Rich subpages keep their generated relative
 * path below `curation/<toolkit>/pages/`. Structured placement metadata lives
 * in frontmatter; the document body is the authored content.
 */
import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import { basename, dirname, isAbsolute, join } from "path";
import { fileURLToPath } from "url";
import { stringify as stringifyYaml } from "yaml";
import type { DocumentationChunk, ToolkitSubPage } from "../src/types/index";

const GENERATOR_ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TOOLKITS_DIR = join(GENERATOR_ROOT, "data", "toolkits");
const CURATION_DIR = join(GENERATOR_ROOT, "curation");

type ToolkitArtifact = {
  id: string;
  documentationChunks?: DocumentationChunk[];
  subPages?: ToolkitSubPage[];
  tools?: { name: string; documentationChunks?: DocumentationChunk[] }[];
};

const slugify = (value: string): string =>
  value
    .replace(/^#+\s*/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 64);

const frontmatter = (data: Record<string, unknown>): string =>
  `---\n${stringifyYaml(data).trimEnd()}\n---\n`;

const chunkFileName = (chunk: DocumentationChunk, index: number): string => {
  const label = slugify(
    chunk.header ?? `${chunk.location}-${chunk.position}-${chunk.type}`
  );
  return `${String(index + 1).padStart(3, "0")}-${label || "section"}.mdx`;
};

const writeChunk = async (
  toolkitId: string,
  chunk: DocumentationChunk,
  index: number,
  tool?: string
): Promise<void> => {
  const { content, ...metadata } = chunk;
  const chunksDir = join(CURATION_DIR, toolkitId, "chunks");
  await mkdir(chunksDir, { recursive: true });
  await writeFile(
    join(chunksDir, chunkFileName(chunk, index)),
    `${frontmatter({ ...metadata, ...(tool ? { tool } : {}) })}${content}\n`,
    "utf-8"
  );
};

const assertSafeSubPagePath = (relativePath: string): void => {
  if (
    isAbsolute(relativePath) ||
    relativePath.split(/[\\/]/).some((part) => part === ".." || part === "")
  ) {
    throw new Error(`Unsafe toolkit subpage path: ${relativePath}`);
  }
};

const writeSubPage = async (
  toolkitId: string,
  subPage: ToolkitSubPage
): Promise<void> => {
  if (typeof subPage === "string") {
    throw new Error(
      `Cannot extract legacy subpage without content: ${toolkitId}/${subPage}`
    );
  }
  assertSafeSubPagePath(subPage.relativePath);
  const pagePath = join(CURATION_DIR, toolkitId, "pages", subPage.relativePath);
  await mkdir(dirname(pagePath), { recursive: true });
  await writeFile(
    pagePath,
    `${frontmatter({ type: subPage.type })}${subPage.content}\n`,
    "utf-8"
  );
};

const extractToolkit = async (
  fileName: string,
  toolkit: ToolkitArtifact
): Promise<{ chunks: number; subPages: number }> => {
  const toolkitId = basename(fileName, ".json");
  let chunkIndex = 0;
  for (const chunk of toolkit.documentationChunks ?? []) {
    await writeChunk(toolkitId, chunk, chunkIndex);
    chunkIndex += 1;
  }
  for (const tool of toolkit.tools ?? []) {
    for (const chunk of tool.documentationChunks ?? []) {
      await writeChunk(
        toolkitId,
        chunk,
        chunkIndex,
        `${toolkit.id}.${tool.name}`
      );
      chunkIndex += 1;
    }
  }

  for (const subPage of toolkit.subPages ?? []) {
    await writeSubPage(toolkitId, subPage);
  }

  return {
    chunks: chunkIndex,
    subPages: toolkit.subPages?.length ?? 0,
  };
};

async function main(): Promise<void> {
  await mkdir(CURATION_DIR, { recursive: true });
  const files = (await readdir(TOOLKITS_DIR))
    .filter((file) => file.endsWith(".json") && file !== "index.json")
    .sort();

  let toolkitCount = 0;
  let chunkCount = 0;
  let subPageCount = 0;
  for (const file of files) {
    const toolkit = JSON.parse(
      await readFile(join(TOOLKITS_DIR, file), "utf-8")
    ) as ToolkitArtifact;
    const extracted = await extractToolkit(file, toolkit);
    if (extracted.chunks > 0 || extracted.subPages > 0) {
      toolkitCount += 1;
    }
    chunkCount += extracted.chunks;
    subPageCount += extracted.subPages;
  }

  console.log(`Wrote Markdown curation for ${toolkitCount} toolkits.`);
  console.log(
    `  documentation chunks: ${chunkCount}, subpages: ${subPageCount}`
  );
}

main().catch((error) => {
  console.error("Extraction failed:", error);
  process.exit(1);
});
