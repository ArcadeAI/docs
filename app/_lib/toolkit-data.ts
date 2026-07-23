import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";
import type {
  ToolkitData,
  ToolkitSummary,
  ToolSummary,
} from "@/app/_components/toolkit-docs/types";
import { getToolkitSlug, normalizeToolkitId } from "./toolkit-slug";

/**
 * Strip each tool's heavy fields (parameters, output, codeExample) so the
 * client `ToolkitPage` ships only a lightweight summary in the initial HTML.
 * The detail is fetched on expand from `/api/toolkit-data/[toolkitId]`. This is
 * what keeps the largest reference pages under Googlebot's 2 MB crawl limit.
 *
 * The `ToolSummary` return annotation keeps this in sync with the type: if a
 * non-heavy field is added to `ToolDefinition`, TypeScript flags the omission.
 */
export function toToolkitSummary(data: ToolkitData): ToolkitSummary {
  return {
    ...data,
    tools: data.tools.map(
      (tool): ToolSummary => ({
        name: tool.name,
        qualifiedName: tool.qualifiedName,
        fullyQualifiedName: tool.fullyQualifiedName,
        description: tool.description,
        auth: tool.auth,
        secrets: tool.secrets,
        secretsInfo: tool.secretsInfo,
        metadata: tool.metadata,
        documentationChunks: tool.documentationChunks,
      })
    ),
  };
}

export type ToolkitIndexEntry = {
  id: string;
  label: string;
  version: string;
  category: string;
  type?: string;
  toolCount: number;
  authType: string;
};

export type ToolkitIndex = {
  generatedAt: string;
  version: string;
  toolkits: ToolkitIndexEntry[];
};

type ToolkitDataOptions = {
  dataDir?: string;
};

const DEFAULT_DATA_DIR = join(
  process.cwd(),
  "toolkit-docs-generator",
  "data",
  "toolkits"
);

const resolveDataDir = (options?: ToolkitDataOptions): string =>
  options?.dataDir ?? process.env.TOOLKIT_DATA_DIR ?? DEFAULT_DATA_DIR;

// App-local Zod schemas (generator schemas live under toolkit-docs-generator and
// can't be imported here due to module resolution). Keep the index envelope
// loose so one bad entry is filtered instead of dropping the whole catalog.
const ToolkitIndexEntrySchema = z.object({
  id: z.string(),
  label: z.string(),
  version: z.string(),
  category: z.string(),
  type: z.string().optional(),
  toolCount: z.number().int().nonnegative(),
  authType: z.string(),
});

const ToolkitIndexEnvelopeSchema = z.object({
  generatedAt: z.string(),
  version: z.string(),
  toolkits: z.array(z.unknown()),
});

const ToolkitDataSchema = z
  .object({
    id: z.string(),
    label: z.string().optional(),
    name: z.string().optional(),
    metadata: z.object({}).passthrough(),
  })
  .passthrough()
  .refine((value) => value.label !== undefined || value.name !== undefined);

const parseToolkitData = (parsed: unknown): ToolkitData | null => {
  const result = ToolkitDataSchema.safeParse(parsed);
  return result.success ? (result.data as ToolkitData) : null;
};

const parseToolkitIndexEntry = (value: unknown): ToolkitIndexEntry | null => {
  const result = ToolkitIndexEntrySchema.safeParse(value);
  return result.success ? result.data : null;
};

const readToolkitFile = async (
  filePath: string
): Promise<ToolkitData | null> => {
  try {
    const content = await readFile(filePath, "utf-8");
    const parsed: unknown = JSON.parse(content);
    return parseToolkitData(parsed);
  } catch {
    return null;
  }
};

const findToolkitDataBySlug = async (
  dataDir: string,
  slug: string
): Promise<ToolkitData | null> => {
  const entries = await readdir(dataDir);
  const slugKey = slug.toLowerCase();

  for (const entry of entries) {
    if (!entry.endsWith(".json") || entry === "index.json") {
      continue;
    }

    const data = await readToolkitFile(join(dataDir, entry));
    if (!data) {
      continue;
    }

    const candidateSlug = getToolkitSlug({
      id: data.id,
      docsLink: data.metadata?.docsLink,
    })?.toLowerCase();

    if (candidateSlug && candidateSlug === slugKey) {
      return data;
    }
  }

  return null;
};

export const readToolkitData = async (
  toolkitId: string,
  options?: ToolkitDataOptions
): Promise<ToolkitData | null> => {
  // Normalize the toolkit ID to lowercase alphanumeric
  const normalizedId = normalizeToolkitId(toolkitId);

  // Guard against empty normalized ID (e.g., input was only special characters)
  if (!normalizedId) {
    return null;
  }

  const fileName = `${normalizedId}.json`;
  const dataDir = resolveDataDir(options);
  const filePath = join(dataDir, fileName);
  const direct = await readToolkitFile(filePath);
  if (direct) {
    return direct;
  }

  return await findToolkitDataBySlug(dataDir, toolkitId);
};

export const readToolkitIndex = async (
  options?: ToolkitDataOptions
): Promise<ToolkitIndex | null> => {
  const filePath = join(resolveDataDir(options), "index.json");

  try {
    const content = await readFile(filePath, "utf-8");
    const parsed: unknown = JSON.parse(content);
    const envelope = ToolkitIndexEnvelopeSchema.safeParse(parsed);

    if (!envelope.success) {
      return null;
    }

    return {
      generatedAt: envelope.data.generatedAt,
      version: envelope.data.version,
      toolkits: envelope.data.toolkits.flatMap((entry) => {
        const parsedEntry = parseToolkitIndexEntry(entry);
        return parsedEntry ? [parsedEntry] : [];
      }),
    };
  } catch {
    return null;
  }
};
