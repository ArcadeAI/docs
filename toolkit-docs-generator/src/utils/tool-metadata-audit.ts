import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

type BooleanCounts = { true: number; false: number; undefined: number };
type BooleanKey = "readOnly" | "destructive" | "idempotent" | "openWorld";

type ToolMeta = {
  classification?: { serviceDomains?: string[] };
  behavior?: {
    operations?: string[];
    readOnly?: boolean;
    destructive?: boolean;
    idempotent?: boolean;
    openWorld?: boolean;
  };
  extras?: Record<string, unknown> | null;
} | null;

type ToolEntry = { metadata?: ToolMeta };

export type ToolMetadataStats = {
  coverage: {
    totalTools: number;
    withMetadata: number;
  };
  distinct: {
    operations: string[];
    serviceDomains: string[];
  };
  booleans: {
    readOnly: BooleanCounts;
    destructive: BooleanCounts;
    idempotent: BooleanCounts;
    openWorld: BooleanCounts;
  };
  extras: {
    toolsWithExtras: number;
    distinctKeys: string[];
  };
};

type AccumulatorState = {
  operationsSet: Set<string>;
  serviceDomainsSet: Set<string>;
  extrasKeysSet: Set<string>;
  totalTools: number;
  withMetadata: number;
  toolsWithExtras: number;
  booleans: Record<BooleanKey, BooleanCounts>;
};

function incrementBoolean(counts: BooleanCounts, val: boolean | undefined) {
  if (val === true) counts.true++;
  else if (val === false) counts.false++;
  else counts.undefined++;
}

function accumulateToolMeta(
  meta: NonNullable<ToolMeta>,
  acc: AccumulatorState
) {
  for (const op of meta.behavior?.operations ?? []) {
    acc.operationsSet.add(op);
  }
  for (const sd of meta.classification?.serviceDomains ?? []) {
    acc.serviceDomainsSet.add(sd);
  }

  const b = meta.behavior;
  if (b) {
    for (const key of [
      "readOnly",
      "destructive",
      "idempotent",
      "openWorld",
    ] as const) {
      incrementBoolean(acc.booleans[key], b[key]);
    }
  }

  if (meta.extras && Object.keys(meta.extras).length > 0) {
    acc.toolsWithExtras++;
    for (const k of Object.keys(meta.extras)) {
      acc.extrasKeysSet.add(k);
    }
  }
}

function accumulateTools(tools: ToolEntry[], acc: AccumulatorState) {
  for (const tool of tools) {
    acc.totalTools++;
    const meta = tool.metadata;
    if (!meta) continue;
    acc.withMetadata++;
    accumulateToolMeta(meta, acc);
  }
}

async function parseJsonFile(
  path: string
): Promise<{ tools?: unknown[] } | null> {
  try {
    const content = await readFile(path, "utf-8");
    return JSON.parse(content) as { tools?: unknown[] };
  } catch (err) {
    console.warn(
      `[tool-metadata-audit] Skipping unreadable or malformed JSON: ${path} — ${err}`
    );
    return null;
  }
}

export async function collectToolMetadataStats(opts: {
  dataDir: string;
}): Promise<ToolMetadataStats> {
  const { dataDir } = opts;
  const files = await readdir(dataDir);
  const jsonFiles = files.filter((f) => f.endsWith(".json"));

  const acc: AccumulatorState = {
    operationsSet: new Set(),
    serviceDomainsSet: new Set(),
    extrasKeysSet: new Set(),
    totalTools: 0,
    withMetadata: 0,
    toolsWithExtras: 0,
    booleans: {
      readOnly: { true: 0, false: 0, undefined: 0 },
      destructive: { true: 0, false: 0, undefined: 0 },
      idempotent: { true: 0, false: 0, undefined: 0 },
      openWorld: { true: 0, false: 0, undefined: 0 },
    },
  };

  for (const file of jsonFiles) {
    const data = await parseJsonFile(join(dataDir, file));
    if (!data) continue;
    const tools = Array.isArray(data.tools) ? (data.tools as ToolEntry[]) : [];
    accumulateTools(tools, acc);
  }

  return {
    coverage: { totalTools: acc.totalTools, withMetadata: acc.withMetadata },
    distinct: {
      operations: Array.from(acc.operationsSet).sort(),
      serviceDomains: Array.from(acc.serviceDomainsSet).sort(),
    },
    booleans: acc.booleans,
    extras: {
      toolsWithExtras: acc.toolsWithExtras,
      distinctKeys: Array.from(acc.extrasKeysSet).sort(),
    },
  };
}
