import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { cache } from "react";
import type { z } from "zod";
import type {
  ToolkitData,
  ToolkitSummary,
  ToolSummary,
} from "@/app/_components/toolkit-docs/types";
import { resolveToolkitDataDir } from "@/toolkit-docs-generator/src/shared/toolkit-data-dir";
import {
  getToolkitSlug,
  normalizeToolkitId,
} from "@/toolkit-docs-generator/src/shared/toolkit-primitives";
import {
  MergedToolkitSchema,
  type ToolkitIndexEntrySchema,
  ToolkitIndexSchema,
} from "@/toolkit-docs-generator/src/shared/toolkit-schemas";

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

export type ToolkitIndexEntry = z.infer<typeof ToolkitIndexEntrySchema>;
export type ToolkitIndex = z.infer<typeof ToolkitIndexSchema>;

type ToolkitDataOptions = {
  dataDir?: string;
};

const resolveDataDir = (options?: ToolkitDataOptions): string =>
  resolveToolkitDataDir(options?.dataDir);

const isEnoent = (error: unknown): boolean =>
  error instanceof Error && (error as NodeJS.ErrnoException).code === "ENOENT";

const describeError = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

/**
 * Read and validate a single merged-toolkit JSON file.
 *
 * A missing file is a legitimate, quiet outcome (`null`) — not every toolkit
 * has generated docs yet. Anything else wrong with the file — unreadable,
 * not valid JSON, or valid JSON that doesn't match `MergedToolkitSchema` — is
 * corruption, not absence, and throws with the file path and the underlying
 * error so a bad nightly-generated file fails `next build` loudly instead of
 * quietly dropping the toolkit from the site. Mirrors the read/parse/schema
 * split in toolkit-docs-generator/src/generator/output-verifier.ts.
 */
export const readToolkitFile = async (
  filePath: string
): Promise<ToolkitData | null> => {
  let content: string;
  try {
    content = await readFile(filePath, "utf-8");
  } catch (error) {
    if (isEnoent(error)) {
      return null;
    }
    throw new Error(
      `Failed to read toolkit file ${filePath}: ${describeError(error)}`
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch (error) {
    throw new Error(
      `Invalid JSON in toolkit file ${filePath}: ${describeError(error)}`
    );
  }

  const result = MergedToolkitSchema.safeParse(parsed);
  if (!result.success) {
    throw new Error(
      `Invalid toolkit schema in ${filePath}: ${result.error.message}`
    );
  }

  return result.data;
};

/**
 * Every toolkit's data, indexed two ways: by the normalized id its filename
 * is derived from (the common case — an id-shaped lookup), and by its docs
 * slug (a hand-authored `docsLink` can diverge from the id, e.g. a route
 * reached by "posthog-api" for a file whose id normalizes differently).
 * `readToolkitData` below tries the id map first, then the slug map, mirroring
 * the direct-file-then-scan order the old implementation used.
 */
type ToolkitDataMap = {
  byNormalizedId: Map<string, ToolkitData>;
  bySlug: Map<string, ToolkitData>;
};

/**
 * One process-wide load per data directory in production. Keyed by directory
 * (not a single flat variable) because tests point `TOOLKIT_DATA_DIR` at
 * scratch fixtures and must not see another test's cached data.
 *
 * Failed loads are removed from the cache so a transient read or deployment
 * error can recover. Development is deliberately excluded from this cache:
 * the generator can update JSON while `next dev` is running, and a refresh
 * should see that new snapshot.
 */
const loadsByDataDir = new Map<string, Promise<ToolkitDataMap>>();
const DEFAULT_DATA_DIR = resolveToolkitDataDir();

const loadAllToolkitDataUncached = async (
  dataDir: string
): Promise<ToolkitDataMap> => {
  let entries: string[];
  try {
    entries = await readdir(dataDir);
  } catch (error) {
    throw new Error(
      `Failed to read toolkit data directory ${dataDir}: ${describeError(error)}`
    );
  }

  const byNormalizedId = new Map<string, ToolkitData>();
  const bySlug = new Map<string, ToolkitData>();

  for (const entry of entries) {
    if (!entry.endsWith(".json") || entry === "index.json") {
      continue;
    }

    // Throws on a corrupt file (see readToolkitFile) — a malformed file here
    // is never legitimately "absent", so it fails the build/request loudly
    // rather than being dropped from the map.
    const data = await readToolkitFile(join(dataDir, entry));
    if (!data) {
      continue;
    }

    byNormalizedId.set(normalizeToolkitId(data.id), data);
    const slug = getToolkitSlug({
      id: data.id,
      docsLink: data.metadata?.docsLink,
    });
    bySlug.set(slug.toLowerCase(), data);
  }

  return { byNormalizedId, bySlug };
};

/**
 * Load every toolkit's data from `dataDir` into one shared map, read once per
 * process rather than once per caller.
 *
 * Wrapped in React's `cache()` so, when a live cache scope exists (build-time
 * static generation, a Route Handler, a Server Component render), concurrent
 * callers within that same scope share one in-flight read rather than each
 * independently reading the directory. `cache()` is a no-op outside a cache
 * scope (Vitest, plain scripts) — see its implementation in
 * react/cjs/react.react-server.development.js — so `loadsByDataDir` is the
 * mechanism that actually guarantees one read per directory everywhere, with
 * `cache()` as the layer that also dedupes concurrent build-time work.
 */
export const loadAllToolkitData = cache(
  async (dataDir: string): Promise<ToolkitDataMap> => {
    if (
      process.env.NODE_ENV === "development" ||
      dataDir !== DEFAULT_DATA_DIR
    ) {
      return await loadAllToolkitDataUncached(dataDir);
    }

    let promise = loadsByDataDir.get(dataDir);
    if (!promise) {
      promise = loadAllToolkitDataUncached(dataDir);
      loadsByDataDir.set(dataDir, promise);

      // A transient read or deployment error must not poison the process
      // forever. Keep successful loads warm, but allow the next lookup to
      // retry after a failed load.
      promise.catch(() => {
        if (loadsByDataDir.get(dataDir) === promise) {
          loadsByDataDir.delete(dataDir);
        }
      });
    }
    return await promise;
  }
);

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

  const dataDir = resolveDataDir(options);
  // The API route normally receives the normalized toolkit id. Keep that
  // common path O(1), especially on a cold serverless instance: eagerly
  // loading every toolkit JSON file just to serve one toolkit adds tens of
  // megabytes of parsing and memory overhead. The full directory index below
  // is reserved for slug lookups and build-time enumeration.
  const direct = await readToolkitFile(join(dataDir, `${normalizedId}.json`));
  if (direct) {
    return direct;
  }

  const { byNormalizedId, bySlug } = await loadAllToolkitData(dataDir);

  return (
    byNormalizedId.get(normalizedId) ??
    bySlug.get(toolkitId.toLowerCase()) ??
    null
  );
};

export const readToolkitIndex = async (
  options?: ToolkitDataOptions
): Promise<ToolkitIndex | null> => {
  const filePath = join(resolveDataDir(options), "index.json");

  let content: string;
  try {
    content = await readFile(filePath, "utf-8");
  } catch (error) {
    if (isEnoent(error)) {
      return null;
    }
    throw new Error(
      `Failed to read toolkit index ${filePath}: ${describeError(error)}`
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch (error) {
    throw new Error(
      `Invalid JSON in toolkit index ${filePath}: ${describeError(error)}`
    );
  }

  const result = ToolkitIndexSchema.safeParse(parsed);
  if (!result.success) {
    throw new Error(
      `Invalid toolkit index schema in ${filePath}: ${result.error.message}`
    );
  }

  return result.data;
};
