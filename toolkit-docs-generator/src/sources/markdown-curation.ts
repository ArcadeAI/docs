/**
 * Compile hand-authored Markdown and MDX into the generator's structured
 * custom-sections contract.
 *
 * A configured curation root is authoritative for every toolkit. Missing
 * toolkit directories therefore resolve to empty custom sections instead of
 * falling back to prose embedded in a previous generated artifact.
 */
import { compile } from "@mdx-js/mdx";
import { readdir, readFile, stat } from "fs/promises";
import { join, relative, sep } from "path";
import { parse as parseYaml } from "yaml";
import { z } from "zod";
import {
  type CustomSections,
  CustomSectionsSchema,
  type DocumentationChunk,
  DocumentationChunkSchema,
  type ToolkitSubPage,
} from "../types/index";
import { normalizeId } from "../utils/fp";
import type { ICustomSectionsSource } from "./interfaces";

const FRONTMATTER_PATTERN =
  /^---\r?\n(?<frontmatter>[\s\S]*?)\r?\n---(?:\r?\n|$)(?<body>[\s\S]*)$/;
const MARKDOWN_EXTENSIONS = new Set([".md", ".mdx"]);

const ChunkFrontmatterSchema = DocumentationChunkSchema.omit({
  content: true,
})
  .extend({
    /** Optional fully qualified tool name for a tool-level chunk. */
    tool: z.string().min(1).optional(),
  })
  .strict();

const PageFrontmatterSchema = z
  .object({
    type: z.string().min(1),
  })
  .strict();

type MarkdownDocument = {
  body: string;
  frontmatter: unknown;
};

type CompiledChunk = {
  chunk: DocumentationChunk;
  sourcePath: string;
  toolName?: string;
};

const emptyCustomSections = (): CustomSections =>
  CustomSectionsSchema.parse({});

const extensionOf = (fileName: string): string => {
  const dot = fileName.lastIndexOf(".");
  return dot === -1 ? "" : fileName.slice(dot).toLowerCase();
};

const isMarkdownFile = (fileName: string): boolean =>
  MARKDOWN_EXTENSIONS.has(extensionOf(fileName));

const parseMarkdownDocument = (
  source: string,
  sourcePath: string
): MarkdownDocument => {
  const match = source.match(FRONTMATTER_PATTERN);
  if (!(match?.groups?.frontmatter && match.groups.body !== undefined)) {
    throw new Error(
      `Curation document must start with YAML frontmatter (${sourcePath})`
    );
  }

  let frontmatter: unknown;
  try {
    frontmatter = parseYaml(match.groups.frontmatter);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Curation frontmatter is invalid (${sourcePath}): ${message}`
    );
  }

  const body = match.groups.body.replaceAll("\r\n", "\n").replace(/\n$/, "");
  if (body.trim().length === 0) {
    throw new Error(`Curation document body is empty (${sourcePath})`);
  }

  return { body, frontmatter };
};

const validateMdx = async (body: string, sourcePath: string): Promise<void> => {
  try {
    await compile(body, { development: false });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(
      `Curation document has invalid MDX (${sourcePath}): ${message}`
    );
  }
};

const parseChunk = async (
  sourcePath: string,
  toolkitId: string
): Promise<CompiledChunk> => {
  const document = parseMarkdownDocument(
    await readFile(sourcePath, "utf-8"),
    sourcePath
  );
  const parsed = ChunkFrontmatterSchema.safeParse(document.frontmatter);
  if (!parsed.success) {
    throw new Error(
      `Curation chunk frontmatter has invalid schema (${sourcePath}): ${parsed.error.message}`
    );
  }
  await validateMdx(document.body, sourcePath);

  let toolName: string | undefined;
  if (parsed.data.tool) {
    const separator = parsed.data.tool.indexOf(".");
    const toolToolkitId = parsed.data.tool.slice(0, separator);
    toolName = parsed.data.tool.slice(separator + 1);
    if (
      separator <= 0 ||
      toolName.length === 0 ||
      normalizeId(toolToolkitId) !== normalizeId(toolkitId)
    ) {
      throw new Error(
        `Curation tool target must be fully qualified and match toolkit ${toolkitId} (${sourcePath})`
      );
    }
  }

  const { tool: _tool, ...metadata } = parsed.data;
  return {
    chunk: DocumentationChunkSchema.parse({
      ...metadata,
      content: document.body,
    }),
    sourcePath,
    ...(toolName ? { toolName } : {}),
  };
};

const assertSafeRelativePath = (
  relativePath: string,
  sourcePath: string
): void => {
  const parts = relativePath.split(/[\\/]/);
  if (
    relativePath.length === 0 ||
    relativePath.startsWith(sep) ||
    parts.some((part) => part === "" || part === "." || part === "..")
  ) {
    throw new Error(`Curation page path is unsafe (${sourcePath})`);
  }
};

const parsePage = async (
  sourcePath: string,
  relativePath: string
): Promise<ToolkitSubPage> => {
  assertSafeRelativePath(relativePath, sourcePath);
  const document = parseMarkdownDocument(
    await readFile(sourcePath, "utf-8"),
    sourcePath
  );
  const parsed = PageFrontmatterSchema.safeParse(document.frontmatter);
  if (!parsed.success) {
    throw new Error(
      `Curation page frontmatter has invalid schema (${sourcePath}): ${parsed.error.message}`
    );
  }
  await validateMdx(document.body, sourcePath);
  return {
    type: parsed.data.type,
    content: document.body,
    relativePath,
  };
};

const listFilesRecursively = async (dirPath: string): Promise<string[]> => {
  const entries = (await readdir(dirPath, { withFileTypes: true })).sort(
    (left, right) => left.name.localeCompare(right.name)
  );
  const files: string[] = [];
  for (const entry of entries) {
    const entryPath = join(dirPath, entry.name);
    if (entry.isSymbolicLink()) {
      throw new Error(
        `Curation directory may not contain symlinks (${entryPath})`
      );
    }
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursively(entryPath)));
    } else if (entry.isFile()) {
      files.push(entryPath);
    }
  }
  return files;
};

const rejectJsonFiles = (files: readonly string[]): void => {
  const jsonFile = files.find((file) => extensionOf(file) === ".json");
  if (jsonFile) {
    throw new Error(
      `JSON curation is no longer supported; convert this file to Markdown (${jsonFile})`
    );
  }
};

const compareChunks = (left: CompiledChunk, right: CompiledChunk): number =>
  left.sourcePath.localeCompare(right.sourcePath);

const loadToolkitDirectory = async (
  toolkitPath: string,
  toolkitId: string
): Promise<CustomSections> => {
  const chunksPath = join(toolkitPath, "chunks");
  const pagesPath = join(toolkitPath, "pages");
  const allFiles = await listFilesRecursively(toolkitPath);
  rejectJsonFiles(allFiles);

  const chunkFiles = allFiles.filter(
    (file) => file.startsWith(`${chunksPath}${sep}`) && isMarkdownFile(file)
  );
  const pageFiles = allFiles.filter(
    (file) => file.startsWith(`${pagesPath}${sep}`) && isMarkdownFile(file)
  );

  const chunks = (
    await Promise.all(chunkFiles.map((file) => parseChunk(file, toolkitId)))
  ).sort(compareChunks);
  const documentationChunks: DocumentationChunk[] = [];
  const toolChunks: Record<string, DocumentationChunk[]> = {};
  for (const compiled of chunks) {
    if (compiled.toolName) {
      const chunksForTool = toolChunks[compiled.toolName] ?? [];
      chunksForTool.push(compiled.chunk);
      toolChunks[compiled.toolName] = chunksForTool;
    } else {
      documentationChunks.push(compiled.chunk);
    }
  }

  const subPages = await Promise.all(
    pageFiles
      .sort()
      .map((file) =>
        parsePage(file, relative(pagesPath, file).split(sep).join("/"))
      )
  );
  const pagePaths = subPages.map((page) =>
    typeof page === "string" ? page : page.relativePath.toLowerCase()
  );
  if (new Set(pagePaths).size !== pagePaths.length) {
    throw new Error(`Curation contains duplicate page paths (${toolkitPath})`);
  }

  return CustomSectionsSchema.parse({
    documentationChunks,
    customImports: [],
    subPages,
    toolChunks,
  });
};

export class MarkdownCurationSource implements ICustomSectionsSource {
  private readonly rootPath: string;
  private cachedData: Readonly<Record<string, CustomSections>> | null = null;

  constructor(rootPath: string) {
    this.rootPath = rootPath;
  }

  private async loadData(): Promise<Readonly<Record<string, CustomSections>>> {
    if (this.cachedData) {
      return this.cachedData;
    }

    let rootStats: Awaited<ReturnType<typeof stat>>;
    try {
      rootStats = await stat(this.rootPath);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        throw new Error(
          `Configured curation directory does not exist: ${this.rootPath}`
        );
      }
      throw error;
    }
    if (!rootStats.isDirectory()) {
      throw new Error(
        `Configured curation path is not a directory: ${this.rootPath}`
      );
    }

    const entries = (
      await readdir(this.rootPath, { withFileTypes: true })
    ).sort((left, right) => left.name.localeCompare(right.name));
    const data: Record<string, CustomSections> = {};
    const normalizedIds = new Map<string, string>();
    for (const entry of entries) {
      const entryPath = join(this.rootPath, entry.name);
      if (entry.isSymbolicLink()) {
        throw new Error(
          `Curation directory may not contain symlinks (${entryPath})`
        );
      }
      if (entry.isFile() && extensionOf(entry.name) === ".json") {
        rejectJsonFiles([entryPath]);
      }
      if (!entry.isDirectory()) {
        continue;
      }
      const normalizedId = normalizeId(entry.name);
      const duplicate = normalizedIds.get(normalizedId);
      if (duplicate) {
        throw new Error(
          `Curation toolkit directories normalize to the same ID: ${duplicate}, ${entry.name}`
        );
      }
      normalizedIds.set(normalizedId, entry.name);
      data[entry.name] = await loadToolkitDirectory(entryPath, entry.name);
    }

    this.cachedData = data;
    return data;
  }

  async getCustomSections(toolkitId: string): Promise<CustomSections> {
    const data = await this.loadData();
    const normalizedId = normalizeId(toolkitId);
    const entry = Object.entries(data).find(
      ([key]) => normalizeId(key) === normalizedId
    );
    return entry?.[1] ?? emptyCustomSections();
  }

  async getAllCustomSections(): Promise<
    Readonly<Record<string, CustomSections>>
  > {
    return this.loadData();
  }
}

export const createMarkdownCurationSource = (
  rootPath: string
): MarkdownCurationSource => new MarkdownCurationSource(rootPath);
