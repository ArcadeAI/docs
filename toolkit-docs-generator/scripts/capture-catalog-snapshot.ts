#!/usr/bin/env npx tsx
/**
 * Capture a raw catalog snapshot from the Engine `/v1/tool_metadata` endpoint
 * to a local file, for the join parity harness (see verify-toolkit-join.ts).
 *
 * The snapshot is the raw API response items, paginated and concatenated, so
 * the verifier can reshape them with the same production code path the build
 * will use. It is ~10 MB and must never be committed — `.gitignore` covers the
 * default path.
 *
 * Requires only two env vars:
 *   ENGINE_API_URL   base URL (this script appends /v1/tool_metadata)
 *   ENGINE_API_KEY   bearer token; the key alone scopes the catalog
 *
 * Usage from the generator package root:
 *   ENGINE_API_URL=... ENGINE_API_KEY=... pnpm dlx tsx \
 *     scripts/capture-catalog-snapshot.ts [--out catalog-snapshot.json]
 *
 * The request mirrors EngineApiSource: latest-only (the server default), page
 * size 1000, `Authorization: Bearer`. `total_count` is recorded so a truncated
 * fetch is detectable both here and by the verifier.
 */
import { writeFile } from "fs/promises";

const DEFAULT_OUT = "catalog-snapshot.json";
const PAGE_SIZE = 1000;
const JSON_INDENT = 2;

type CliOptions = { out: string };

type ToolMetadataResponse = {
  items: unknown[];
  total_count: number;
};

/** Raw payload written to disk; the verifier reads `items` and `totalCount`. */
type CatalogSnapshot = {
  capturedAt: string;
  source: string;
  totalCount: number;
  items: unknown[];
};

const parseArgs = (argv: string[]): CliOptions => {
  let out = DEFAULT_OUT;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--out" && argv[i + 1]) {
      out = argv[i + 1];
      i++;
    }
  }
  return { out };
};

/** Mirror of EngineApiSource.buildEndpointUrl so the request path matches. */
const buildEndpointUrl = (baseUrl: string): string => {
  const normalized = baseUrl.replace(/\/+$/, "");
  return normalized.endsWith("/v1")
    ? `${normalized}/tool_metadata`
    : `${normalized}/v1/tool_metadata`;
};

const requireEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const fetchPage = async (
  endpoint: string,
  apiKey: string,
  offset: number
): Promise<ToolMetadataResponse> => {
  const url = new URL(endpoint);
  url.searchParams.set("limit", String(PAGE_SIZE));
  url.searchParams.set("offset", String(offset));

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Engine API error ${response.status} at offset ${offset}: ${response.statusText}`
    );
  }

  const payload = (await response.json()) as ToolMetadataResponse;
  if (
    !Array.isArray(payload.items) ||
    typeof payload.total_count !== "number"
  ) {
    throw new Error(
      `Unexpected response shape at offset ${offset}: missing items[] or total_count`
    );
  }
  return payload;
};

async function main(): Promise<void> {
  const { out } = parseArgs(process.argv.slice(2));
  const baseUrl = requireEnv("ENGINE_API_URL");
  const apiKey = requireEnv("ENGINE_API_KEY");
  const endpoint = buildEndpointUrl(baseUrl);

  const items: unknown[] = [];
  let totalCount = Number.POSITIVE_INFINITY;

  for (let offset = 0; items.length < totalCount; offset += PAGE_SIZE) {
    const page = await fetchPage(endpoint, apiKey, offset);
    totalCount = page.total_count;
    if (page.items.length === 0) {
      // Guard against an endless loop if the server reports more than it returns.
      break;
    }
    items.push(...page.items);
    process.stdout.write(`\r  fetched ${items.length}/${totalCount} tools`);
  }
  process.stdout.write("\n");

  if (items.length !== totalCount) {
    throw new Error(
      `Truncated fetch: collected ${items.length} tools but total_count is ${totalCount}. ` +
        "Refusing to write a partial snapshot."
    );
  }

  const snapshot: CatalogSnapshot = {
    capturedAt: new Date().toISOString(),
    source: endpoint,
    totalCount,
    items,
  };

  await writeFile(
    out,
    `${JSON.stringify(snapshot, null, JSON_INDENT)}\n`,
    "utf-8"
  );
  console.log(`Wrote ${items.length} tools to ${out}`);
}

main().catch((error) => {
  console.error("Snapshot capture failed:", error);
  process.exit(1);
});
