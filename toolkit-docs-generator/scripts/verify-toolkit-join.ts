#!/usr/bin/env npx tsx
/**
 * Join parity harness.
 *
 * Answers one question mechanically: does joining the extracted layers
 * (enrichment + curation) against a catalog snapshot reproduce the toolkit
 * JSON we ship today? S5 and S6 both rest on that answer, so this harness is
 * the oracle they are judged by rather than a human eyeballing diffs.
 *
 * The join reuses the real generator pipeline — `mergeToolkit` with no LLM and
 * the committed toolkit as `previousToolkit` — so every reshape, provider
 * resolution, and enrichment carry-forward matches production. The only thing
 * this harness supplies is the catalog (from the snapshot) and the layers.
 *
 * Comparison is structural (by JSON path), not raw-byte: `generatedAt` is the
 * one volatile field, and `summary`'s key *position* varies across generator
 * versions without changing content, so a byte compare would report false
 * differences. Any real content difference exits non-zero and names the file
 * and JSON path.
 *
 * Until S3/S5 land the `enrichment/` and `curation/` directories, run this
 * with enrichment and curation read straight out of the committed toolkit
 * JSON (the default when `--enrichment` / `--curation` are omitted).
 *
 * Usage from the generator package root:
 *   pnpm dlx tsx scripts/verify-toolkit-join.ts \
 *     --snapshot catalog-snapshot.json \
 *     --reference data/toolkits \
 *     [--enrichment data/toolkits] [--curation data/toolkits] \
 *     [--metadata tests/fixtures/metadata.json]
 *
 * Exit code is non-zero if any toolkit differs or any reference tool has no
 * matching catalog item.
 */
import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import {
  groupToolsByToolkit,
  mergeToolkit,
} from "../src/merger/data-merger.js";
import { createDesignSystemMetadataSource } from "../src/sources/design-system-metadata.js";
import type { IMetadataSource } from "../src/sources/interfaces.js";
import { createMockMetadataSource } from "../src/sources/mock-metadata.js";
import {
  createDesignSystemProviderIdResolver,
  type ProviderIdResolver,
} from "../src/sources/oauth-provider-resolver.js";
import { parseToolMetadataResponse } from "../src/sources/tool-metadata-schema.js";
import type {
  CustomSections,
  MergedToolkit,
  ToolDefinition,
  ToolkitMetadata,
} from "../src/types/index.js";

// ============================================================================
// Structural diff
// ============================================================================

export type JsonPathDiff = {
  path: string;
  reason: string;
  expected: unknown;
  actual: unknown;
};

/** The only field that legitimately changes run-to-run. */
const VOLATILE_ROOT_KEYS = ["generatedAt"];

const kindOf = (value: unknown): string => {
  if (Array.isArray(value)) {
    return "array";
  }
  if (value === null) {
    return "null";
  }
  return typeof value;
};

/** A key counts as present only when it holds a defined value. */
const hasValue = (obj: Record<string, unknown>, key: string): boolean =>
  key in obj && obj[key] !== undefined;

const diffArrays = (
  expected: unknown[],
  actual: unknown[],
  path: string
): JsonPathDiff | null => {
  if (expected.length !== actual.length) {
    return {
      path,
      reason: `array length ${expected.length} vs ${actual.length}`,
      expected: expected.length,
      actual: actual.length,
    };
  }
  for (let i = 0; i < expected.length; i++) {
    const diff = deepDiff(expected[i], actual[i], `${path}[${i}]`);
    if (diff) {
      return diff;
    }
  }
  return null;
};

/**
 * Compare one key's presence. Absent, undefined, and explicit null are all
 * equivalent for an optional key (the generator emits `metadata: null` where
 * older files omit it). Returns "skip" when equivalent, "recurse" when both
 * sides hold a value to compare, or a diff for a real presence mismatch.
 */
const compareKeyPresence = (
  expected: Record<string, unknown>,
  actual: Record<string, unknown>,
  key: string,
  childPath: string
): JsonPathDiff | "skip" | "recurse" => {
  const inExpected = hasValue(expected, key);
  const inActual = hasValue(actual, key);
  if (!(inExpected || inActual)) {
    return "skip";
  }
  if (!inExpected) {
    return actual[key] === null
      ? "skip"
      : {
          path: childPath,
          reason: "unexpected key",
          expected: undefined,
          actual: actual[key],
        };
  }
  if (!inActual) {
    return expected[key] === null
      ? "skip"
      : {
          path: childPath,
          reason: "missing key",
          expected: expected[key],
          actual: undefined,
        };
  }
  return "recurse";
};

const diffObjects = (
  expected: Record<string, unknown>,
  actual: Record<string, unknown>,
  path: string
): JsonPathDiff | null => {
  const keys = [
    ...new Set([...Object.keys(expected), ...Object.keys(actual)]),
  ].sort();
  for (const key of keys) {
    const childPath = path ? `${path}.${key}` : key;
    const verdict = compareKeyPresence(expected, actual, key, childPath);
    if (verdict === "skip") {
      continue;
    }
    const diff =
      verdict === "recurse"
        ? deepDiff(expected[key], actual[key], childPath)
        : verdict;
    if (diff) {
      return diff;
    }
  }
  return null;
};

const deepDiff = (
  expected: unknown,
  actual: unknown,
  path: string
): JsonPathDiff | null => {
  const expectedKind = kindOf(expected);
  const actualKind = kindOf(actual);
  if (expectedKind !== actualKind) {
    return {
      path,
      reason: `type ${expectedKind} vs ${actualKind}`,
      expected,
      actual,
    };
  }
  if (expectedKind === "array") {
    return diffArrays(expected as unknown[], actual as unknown[], path);
  }
  if (expectedKind === "object") {
    return diffObjects(
      expected as Record<string, unknown>,
      actual as Record<string, unknown>,
      path
    );
  }
  return expected === actual
    ? null
    : { path, reason: "value mismatch", expected, actual };
};

/**
 * First structural difference between the expected (committed) toolkit and the
 * emitted one, ignoring the volatile `generatedAt`. Returns null when equal.
 */
export const firstDifference = (
  expected: Record<string, unknown>,
  actual: Record<string, unknown>
): JsonPathDiff | null => {
  const strip = (value: Record<string, unknown>): Record<string, unknown> => {
    const copy = { ...value };
    for (const key of VOLATILE_ROOT_KEYS) {
      delete copy[key];
    }
    return copy;
  };
  return deepDiff(strip(expected), strip(actual), "");
};

// ============================================================================
// Join
// ============================================================================

/** Read the curation layer out of a committed/merged toolkit. */
export const curationFromToolkit = (
  toolkit: MergedToolkit
): CustomSections => ({
  documentationChunks: toolkit.documentationChunks ?? [],
  customImports: toolkit.customImports ?? [],
  subPages: toolkit.subPages ?? [],
  toolChunks: {},
});

export type JoinParams = {
  toolkitId: string;
  catalogTools: readonly ToolDefinition[];
  /** Committed toolkit supplying codeExample / secretsInfo / summary. */
  enrichment: MergedToolkit;
  curation: CustomSections | null;
  metadata: ToolkitMetadata | null;
  resolveProviderId?: ProviderIdResolver;
};

/**
 * Join catalog tools with the enrichment and curation layers via the real
 * merger, then overlay the enrichment layer verbatim.
 *
 * The merger supplies the catalog-derived fields, curation, and structure. The
 * enrichment layer (per-tool `codeExample` / `secretsInfo`, toolkit `summary`)
 * is LLM output with no upstream source, so the harness holds it fixed and
 * places it directly rather than depending on the merger's carry-forward
 * heuristics — those decide whether to *regenerate*, which is a different
 * question from whether the frozen layers reproduce today's output.
 */
export const joinToolkit = async (
  params: JoinParams
): Promise<MergedToolkit> => {
  const { toolkit } = await mergeToolkit(
    params.toolkitId,
    params.catalogTools,
    params.metadata,
    params.curation,
    undefined,
    {
      previousToolkit: params.enrichment,
      ...(params.resolveProviderId
        ? { resolveProviderId: params.resolveProviderId }
        : {}),
    }
  );

  const enrichmentByName = new Map(
    (params.enrichment.tools ?? []).map((tool) => [tool.qualifiedName, tool])
  );
  for (const tool of toolkit.tools ?? []) {
    const enriched = enrichmentByName.get(tool.qualifiedName);
    if (!enriched) {
      continue;
    }
    if (enriched.secretsInfo !== undefined) {
      tool.secretsInfo = enriched.secretsInfo;
    }
    // undefined here reads as "absent" — the diff treats it the same as a
    // committed tool that omits codeExample entirely.
    tool.codeExample = enriched.codeExample;
  }

  if (params.enrichment.summary !== undefined) {
    toolkit.summary = params.enrichment.summary;
  }
  if (params.enrichment.summaryStale !== undefined) {
    toolkit.summaryStale = params.enrichment.summaryStale;
  }
  if (params.enrichment.summaryStaleReason !== undefined) {
    toolkit.summaryStaleReason = params.enrichment.summaryStaleReason;
  }

  return toolkit;
};

/** Reference tools whose qualified name has no matching catalog item. */
export const missingCatalogTools = (
  reference: MergedToolkit,
  catalogTools: readonly ToolDefinition[]
): string[] => {
  const available = new Set(catalogTools.map((tool) => tool.qualifiedName));
  return (reference.tools ?? [])
    .map((tool) => tool.qualifiedName)
    .filter((qualifiedName) => !available.has(qualifiedName));
};

export type ToolkitVerification = {
  toolkitId: string;
  missing: string[];
  diff: JsonPathDiff | null;
};

export const verifyOneToolkit = async (params: {
  reference: MergedToolkit;
  catalogTools: readonly ToolDefinition[];
  enrichment: MergedToolkit;
  curation: CustomSections | null;
  metadata: ToolkitMetadata | null;
  resolveProviderId?: ProviderIdResolver;
}): Promise<ToolkitVerification> => {
  const toolkitId = params.reference.id;
  const missing = missingCatalogTools(params.reference, params.catalogTools);
  if (missing.length > 0) {
    return { toolkitId, missing, diff: null };
  }

  const emitted = await joinToolkit({
    toolkitId,
    catalogTools: params.catalogTools,
    enrichment: params.enrichment,
    curation: params.curation,
    metadata: params.metadata,
    resolveProviderId: params.resolveProviderId,
  });

  const diff = firstDifference(
    params.reference as unknown as Record<string, unknown>,
    emitted as unknown as Record<string, unknown>
  );
  return { toolkitId, missing: [], diff };
};

// ============================================================================
// CLI
// ============================================================================

type CliOptions = {
  snapshot: string;
  reference: string;
  enrichment: string;
  curation: string;
  metadata?: string;
};

const parseArgs = (argv: string[]): CliOptions => {
  const values: Record<string, string> = {};
  for (let i = 0; i < argv.length; i++) {
    const flag = argv[i];
    if (flag.startsWith("--") && argv[i + 1]) {
      values[flag.slice(2)] = argv[i + 1];
      i++;
    }
  }
  if (!(values.snapshot && values.reference)) {
    throw new Error(
      "Usage: verify-toolkit-join.ts --snapshot <file> --reference <dir> " +
        "[--enrichment <dir>] [--curation <dir>] [--metadata <file>]"
    );
  }
  return {
    snapshot: values.snapshot,
    reference: values.reference,
    enrichment: values.enrichment ?? values.reference,
    curation: values.curation ?? values.reference,
    metadata: values.metadata,
  };
};

const readToolkitFile = async (
  dir: string,
  file: string
): Promise<MergedToolkit> =>
  JSON.parse(await readFile(join(dir, file), "utf-8")) as MergedToolkit;

/** Parse the snapshot (capture format or a raw /v1 response) into tools. */
const loadCatalogTools = async (
  snapshotPath: string
): Promise<ReadonlyMap<string, readonly ToolDefinition[]>> => {
  const raw = JSON.parse(await readFile(snapshotPath, "utf-8")) as {
    items: unknown[];
    total_count?: number;
    totalCount?: number;
  };
  const total_count = raw.total_count ?? raw.totalCount ?? raw.items.length;
  const { items } = parseToolMetadataResponse({
    items: raw.items,
    total_count,
  });
  return groupToolsByToolkit(items);
};

const truncate = (value: unknown): string => {
  const text = typeof value === "string" ? value : JSON.stringify(value);
  if (text === undefined) {
    return "undefined";
  }
  return text.length > 120 ? `${text.slice(0, 117)}...` : text;
};

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));

  const catalog = await loadCatalogTools(options.snapshot);
  const metadataSource: IMetadataSource = options.metadata
    ? createMockMetadataSource(options.metadata)
    : await createDesignSystemMetadataSource();
  const resolveProviderId =
    (await createDesignSystemProviderIdResolver()) ?? undefined;

  const files = (await readdir(options.reference))
    .filter((file) => file.endsWith(".json") && file !== "index.json")
    .sort();

  let matched = 0;
  const problems: string[] = [];

  for (const file of files) {
    const reference = await readToolkitFile(options.reference, file);
    const toolkitId = reference.id;
    const catalogTools = catalog.get(toolkitId) ?? [];
    const enrichment = await readToolkitFile(options.enrichment, file);
    const curationToolkit = await readToolkitFile(options.curation, file);
    const metadata = await metadataSource.getToolkitMetadata(toolkitId);

    const result = await verifyOneToolkit({
      reference,
      catalogTools,
      enrichment,
      curation: curationFromToolkit(curationToolkit),
      metadata,
      resolveProviderId,
    });

    if (result.missing.length > 0) {
      problems.push(
        `✗ ${file}: ${result.missing.length} reference tool(s) missing from catalog: ` +
          `${result.missing.slice(0, 5).join(", ")}`
      );
    } else if (result.diff) {
      problems.push(
        `✗ ${file}: ${result.diff.path} — ${result.diff.reason}\n` +
          `      expected: ${truncate(result.diff.expected)}\n` +
          `      actual:   ${truncate(result.diff.actual)}`
      );
    } else {
      matched++;
    }
  }

  console.log(
    `\n${matched}/${files.length} toolkits reproduce the committed output.`
  );
  if (problems.length > 0) {
    console.log(`\n${problems.length} problem(s):\n`);
    for (const problem of problems) {
      console.log(problem);
    }
    process.exit(1);
  }
  console.log("Parity verified: 0 differences.");
}

const invokedDirectly =
  process.argv[1] !== undefined &&
  fileURLToPath(import.meta.url) === process.argv[1];

if (invokedDirectly) {
  main().catch((error) => {
    console.error("Verification failed:", error);
    process.exit(1);
  });
}
