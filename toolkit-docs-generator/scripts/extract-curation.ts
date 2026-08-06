#!/usr/bin/env npx tsx
/**
 * One-time extraction of hand-authored prose out of the committed toolkit
 * artifacts and into per-toolkit curation files.
 *
 * `documentationChunks`, `customImports`, and `subPages` have no upstream
 * source — they exist only inside the generated `data/toolkits/*.json`. This
 * script gives them a real home under `curation/`, one file per toolkit, so
 * they stop depending on carry-forward from the previous artifact. The
 * generator reads them back via `--custom-sections curation`.
 *
 * Run from the generator package root:
 *   pnpm dlx tsx scripts/extract-curation.ts
 *
 * The output shape matches `CustomSectionsSchema`: each file holds a single
 * `{ documentationChunks?, customImports?, subPages?, toolChunks? }` object,
 * keyed by nothing (the file name is the toolkit id). Empty fields are omitted
 * so diffs stay small; the schema fills them back in with defaults on read.
 */
import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const TOOLKITS_DIR = "data/toolkits";
const CURATION_DIR = "curation";
const JSON_INDENT = 2;

type DocumentationChunk = Record<string, unknown>;
type SubPage = string | Record<string, unknown>;

type ToolkitArtifact = {
  id: string;
  documentationChunks?: DocumentationChunk[];
  customImports?: string[];
  subPages?: SubPage[];
  tools?: { name: string; documentationChunks?: DocumentationChunk[] }[];
};

type CurationFile = {
  documentationChunks?: DocumentationChunk[];
  customImports?: string[];
  subPages?: SubPage[];
  toolChunks?: Record<string, DocumentationChunk[]>;
};

const isNonEmptyArray = <T>(value: T[] | undefined): value is T[] =>
  Array.isArray(value) && value.length > 0;

/**
 * Pull the per-tool documentation chunks out of the artifact, keyed by tool
 * name — that is the key the merger looks the chunks up by. Today every
 * toolkit has zero per-tool chunks, but extract them anyway so the format is
 * complete if that changes.
 */
const extractToolChunks = (
  toolkit: ToolkitArtifact
): Record<string, DocumentationChunk[]> => {
  const toolChunks: Record<string, DocumentationChunk[]> = {};
  for (const tool of toolkit.tools ?? []) {
    if (isNonEmptyArray(tool.documentationChunks)) {
      toolChunks[tool.name] = tool.documentationChunks;
    }
  }
  return toolChunks;
};

const buildCurationFile = (toolkit: ToolkitArtifact): CurationFile | null => {
  const curation: CurationFile = {};
  if (isNonEmptyArray(toolkit.documentationChunks)) {
    curation.documentationChunks = toolkit.documentationChunks;
  }
  if (isNonEmptyArray(toolkit.customImports)) {
    curation.customImports = toolkit.customImports;
  }
  if (isNonEmptyArray(toolkit.subPages)) {
    curation.subPages = toolkit.subPages;
  }
  const toolChunks = extractToolChunks(toolkit);
  if (Object.keys(toolChunks).length > 0) {
    curation.toolChunks = toolChunks;
  }

  return Object.keys(curation).length > 0 ? curation : null;
};

async function main(): Promise<void> {
  await mkdir(CURATION_DIR, { recursive: true });

  const files = (await readdir(TOOLKITS_DIR))
    .filter((file) => file.endsWith(".json") && file !== "index.json")
    .sort();

  let written = 0;
  let chunkCount = 0;
  let subPageCount = 0;
  let importCount = 0;

  for (const file of files) {
    const toolkit = JSON.parse(
      await readFile(join(TOOLKITS_DIR, file), "utf-8")
    ) as ToolkitArtifact;

    const curation = buildCurationFile(toolkit);
    if (!curation) {
      continue;
    }

    await writeFile(
      join(CURATION_DIR, file),
      `${JSON.stringify(curation, null, JSON_INDENT)}\n`,
      "utf-8"
    );

    written++;
    chunkCount += curation.documentationChunks?.length ?? 0;
    for (const chunks of Object.values(curation.toolChunks ?? {})) {
      chunkCount += chunks.length;
    }
    subPageCount += curation.subPages?.length ?? 0;
    importCount += curation.customImports?.length ?? 0;
  }

  console.log(`Wrote ${written} curation files to ${CURATION_DIR}/`);
  console.log(
    `  documentationChunks: ${chunkCount}, subPages: ${subPageCount}, customImports: ${importCount}`
  );
}

main().catch((error) => {
  console.error("Extraction failed:", error);
  process.exit(1);
});
