import { readdir, readFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { loadAllToolkitData } from "@/app/_lib/toolkit-data";
import { resolveToolkitDataDir } from "@/toolkit-docs-generator/src/shared/toolkit-data-dir";
import { documentsFromMdx } from "./mdx-documents";
import { documentsFromToolkit } from "./toolkit-documents";
import type { SearchDocument } from "./types";

const DEFAULT_PAGES_DIR = join(process.cwd(), "app", "en");
const PAGE_MDX = "page.mdx";

async function collectMdxFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("_") || entry.name.includes("[")) {
        continue;
      }
      files.push(...(await collectMdxFiles(fullPath)));
      continue;
    }
    if (entry.name === PAGE_MDX) {
      files.push(fullPath);
    }
  }

  return files;
}

function urlFromMdxPath(pagesDir: string, filePath: string): string {
  const relativeDir = relative(pagesDir, dirname(filePath)).replaceAll(
    "\\",
    "/"
  );
  if (relativeDir === "" || relativeDir === ".") {
    return "/en";
  }
  return `/en/${relativeDir}`;
}

async function collectMdxDocuments(
  pagesDir: string
): Promise<SearchDocument[]> {
  const files = await collectMdxFiles(pagesDir);
  const documents: SearchDocument[] = [];

  for (const filePath of files) {
    const source = await readFile(filePath, "utf8");
    documents.push(
      ...documentsFromMdx(urlFromMdxPath(pagesDir, filePath), source)
    );
  }

  return documents;
}

async function collectToolkitDocuments(
  dataDir: string | undefined,
  indexedPageUrls: Set<string>
): Promise<SearchDocument[]> {
  const { byNormalizedId } = await loadAllToolkitData(
    dataDir ?? resolveToolkitDataDir()
  );
  const documents: SearchDocument[] = [];

  for (const toolkit of byNormalizedId.values()) {
    const toolkitDocuments = documentsFromToolkit(toolkit);
    for (const document of toolkitDocuments) {
      const isPageRecord = document.type === "page";
      if (isPageRecord && indexedPageUrls.has(document.url)) {
        continue;
      }
      documents.push(document);
    }
  }

  return documents;
}

/**
 * Build the full docs search corpus from authored MDX and generated toolkit
 * JSON. Dynamic-route templates (`[toolkitId]`) are skipped; toolkit pages
 * come from the same JSON the site renders.
 *
 * When an authored MDX page already occupies a toolkit URL (a partner page),
 * the MDX page record wins and the JSON page record is dropped. Tool records
 * from JSON are still added.
 */
export async function buildSearchIndex(options?: {
  pagesDir?: string;
  dataDir?: string;
}): Promise<SearchDocument[]> {
  const pagesDir = options?.pagesDir ?? DEFAULT_PAGES_DIR;
  const mdxDocuments = await collectMdxDocuments(pagesDir);
  const indexedPageUrls = new Set(
    mdxDocuments
      .filter((document) => document.type === "page")
      .map((document) => document.url)
  );
  const toolkitDocuments = await collectToolkitDocuments(
    options?.dataDir,
    indexedPageUrls
  );
  return [...mdxDocuments, ...toolkitDocuments];
}
