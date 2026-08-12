/**
 * Tests for the join parity harness (scripts/verify-toolkit-join.ts).
 *
 * The harness's promise is: joining a catalog against the enrichment and
 * curation layers reproduces the committed toolkit JSON. These tests prove
 * that offline, without a live catalog, by treating the committed data as its
 * own consistent catalog — every committed tool is projected back to the
 * pre-merge `ToolDefinition` shape and re-joined. If the merge round-trips,
 * the harness reports zero differences; the failure-mode tests confirm it also
 * catches injected drift and missing catalog items.
 */
import { readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import { pathToFileURL } from "url";
import { describe, expect, it } from "vitest";
import {
  firstDifference,
  isInvokedDirectly,
  joinToolkit,
  missingCatalogTools,
  verifyOneToolkit,
} from "../../scripts/verify-toolkit-join.js";
import { createMarkdownCurationSource } from "../../src/sources/markdown-curation.js";
import { parseToolMetadataResponse } from "../../src/sources/tool-metadata-schema.js";
import type {
  MergedToolkit,
  ToolDefinition,
  ToolkitMetadata,
} from "../../src/types/index.js";

const TOOLKITS_DIR = join(__dirname, "../../data/toolkits");
const CURATION_DIR = join(__dirname, "../../curation");
const FIXTURES_DIR = join(__dirname, "../fixtures");

const listToolkitFiles = (): string[] =>
  readdirSync(TOOLKITS_DIR)
    .filter((file) => file.endsWith(".json") && file !== "index.json")
    .sort();

const loadToolkit = (file: string): MergedToolkit =>
  JSON.parse(readFileSync(join(TOOLKITS_DIR, file), "utf-8")) as MergedToolkit;

/** Reconstruct the design-system metadata that produced a committed toolkit. */
const metadataFromToolkit = (toolkit: MergedToolkit): ToolkitMetadata =>
  ({
    id: toolkit.id,
    label: toolkit.label,
    ...toolkit.metadata,
  }) as ToolkitMetadata;

/** Project a committed tool back to its pre-merge catalog shape. */
const catalogToolsFromToolkit = (toolkit: MergedToolkit): ToolDefinition[] =>
  (toolkit.tools ?? []).map((tool) => ({
    name: tool.name,
    qualifiedName: tool.qualifiedName,
    fullyQualifiedName: tool.fullyQualifiedName,
    description: tool.description,
    toolkitDescription: toolkit.description,
    parameters: tool.parameters,
    auth: tool.auth,
    secrets: tool.secrets,
    output: tool.output,
    metadata: tool.metadata ?? null,
  }));

describe("firstDifference", () => {
  it("returns null for equal objects", () => {
    expect(
      firstDifference({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] })
    ).toBeNull();
  });

  it("ignores the volatile generatedAt field", () => {
    expect(
      firstDifference(
        { a: 1, generatedAt: "2026-01-01" },
        { a: 1, generatedAt: "2026-08-05" }
      )
    ).toBeNull();
  });

  it("ignores curationSourceHash, which records provenance rather than content", () => {
    expect(
      firstDifference(
        { a: 1, curationSourceHash: "abc123" },
        { a: 1, curationSourceHash: "def456" }
      )
    ).toBeNull();
  });

  it("reports customImports differences, since curation is their source", () => {
    expect(
      firstDifference(
        { customImports: ['import { Callout } from "nextra/components";'] },
        { customImports: [] }
      )
    ).toEqual({
      path: "customImports",
      reason: "array length 1 vs 0",
      expected: 1,
      actual: 0,
    });
  });

  it("reports the JSON path of a nested value mismatch", () => {
    const diff = firstDifference(
      { tools: [{ codeExample: { tabLabel: "A" } }] },
      { tools: [{ codeExample: { tabLabel: "B" } }] }
    );
    expect(diff?.path).toBe("tools[0].codeExample.tabLabel");
    expect(diff?.reason).toBe("value mismatch");
  });

  it("reports array length differences", () => {
    const diff = firstDifference({ xs: [1, 2] }, { xs: [1] });
    expect(diff?.path).toBe("xs");
    expect(diff?.reason).toContain("array length");
  });

  it("reports a missing key", () => {
    const diff = firstDifference({ a: 1, b: 2 }, { a: 1 });
    expect(diff?.path).toBe("b");
    expect(diff?.reason).toBe("missing key");
  });
});

describe("missingCatalogTools", () => {
  const reference = {
    id: "Github",
    tools: [{ qualifiedName: "Github.A" }, { qualifiedName: "Github.B" }],
  } as unknown as MergedToolkit;

  it("returns reference tools absent from the catalog", () => {
    const catalog = [{ qualifiedName: "Github.A" }] as ToolDefinition[];
    expect(missingCatalogTools(reference, catalog)).toEqual(["Github.B"]);
  });

  it("returns empty when every reference tool is present", () => {
    const catalog = [
      { qualifiedName: "Github.A" },
      { qualifiedName: "Github.B" },
    ] as ToolDefinition[];
    expect(missingCatalogTools(reference, catalog)).toEqual([]);
  });
});

describe("isInvokedDirectly", () => {
  it("recognizes a relative script path", () => {
    expect(
      isInvokedDirectly(
        pathToFileURL(
          resolve("toolkit-docs-generator/scripts/verify-toolkit-join.ts")
        ).href,
        "toolkit-docs-generator/scripts/verify-toolkit-join.ts"
      )
    ).toBe(true);
  });
});

describe("raw /v1/tool_metadata reshape", () => {
  it("turns API items into pre-merge tools (value_schema.val_type -> type)", () => {
    const raw = JSON.parse(
      readFileSync(join(FIXTURES_DIR, "engine-api-response.json"), "utf-8")
    ) as { items: unknown[]; total_count: number };
    const { items } = parseToolMetadataResponse(raw);

    expect(items.length).toBeGreaterThan(0);
    const withParams = items.find((tool) => tool.parameters.length > 0);
    expect(withParams).toBeDefined();
    for (const parameter of withParams?.parameters ?? []) {
      expect(typeof parameter.type).toBe("string");
      expect(parameter).not.toHaveProperty("value_schema");
    }
  });
});

describe("join reproduces committed output", () => {
  it("reports zero differences across every committed toolkit", async () => {
    const files = listToolkitFiles();
    expect(files.length).toBeGreaterThan(0);
    const curationSource = createMarkdownCurationSource(CURATION_DIR);

    const mismatches: string[] = [];
    for (const file of files) {
      const reference = loadToolkit(file);
      const curation = await curationSource.getCustomSections(reference.id);
      const result = await verifyOneToolkit({
        reference,
        catalogTools: catalogToolsFromToolkit(reference),
        enrichment: reference,
        curation,
        metadata: metadataFromToolkit(reference),
      });
      if (result.missing.length > 0) {
        mismatches.push(`${file}: missing ${result.missing.join(", ")}`);
      } else if (result.diff) {
        mismatches.push(`${file}: ${result.diff.path} — ${result.diff.reason}`);
      }
    }

    expect(mismatches).toEqual([]);
  }, 120_000);
});

describe("join detects drift", () => {
  it("flags a one-character change to an enrichment value", async () => {
    const reference = loadToolkit("github.json");
    const curation = await createMarkdownCurationSource(
      CURATION_DIR
    ).getCustomSections(reference.id);
    const toolWithExample = (reference.tools ?? []).find(
      (tool) => tool.codeExample !== undefined
    );
    expect(toolWithExample).toBeDefined();

    const enrichment = JSON.parse(JSON.stringify(reference)) as MergedToolkit;
    const mutated = (enrichment.tools ?? []).find(
      (tool) => tool.qualifiedName === toolWithExample?.qualifiedName
    );
    if (mutated?.codeExample) {
      mutated.codeExample.tabLabel = `${mutated.codeExample.tabLabel ?? ""}X`;
    }

    const emitted = await joinToolkit({
      toolkitId: reference.id,
      catalogTools: catalogToolsFromToolkit(reference),
      enrichment,
      curation,
      metadata: metadataFromToolkit(reference),
    });

    const diff = firstDifference(
      reference as unknown as Record<string, unknown>,
      emitted as unknown as Record<string, unknown>
    );
    expect(diff).not.toBeNull();
    expect(diff?.path).toContain("codeExample");
  });

  it("flags a reference tool missing from the catalog", async () => {
    const reference = loadToolkit("github.json");
    const curation = await createMarkdownCurationSource(
      CURATION_DIR
    ).getCustomSections(reference.id);
    const catalogTools = catalogToolsFromToolkit(reference).slice(1);

    const result = await verifyOneToolkit({
      reference,
      catalogTools,
      enrichment: reference,
      curation,
      metadata: metadataFromToolkit(reference),
    });

    expect(result.missing.length).toBeGreaterThan(0);
    expect(result.diff).toBeNull();
  });
});
