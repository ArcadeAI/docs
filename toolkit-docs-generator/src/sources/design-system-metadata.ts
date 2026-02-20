/**
 * Design System Metadata Source
 *
 * Loads toolkit metadata from @arcadeai/design-system (TOOLKITS).
 *
 * This is the preferred metadata source when running the generator inside the
 * Arcade docs repo.
 */
import { z } from "zod";
import type { ToolkitMetadata } from "../types/index.js";
import { ToolkitMetadataSchema } from "../types/index.js";
import type { IMetadataSource } from "./internal.js";

// ============================================================================
// Types
// ============================================================================

// Keep this intentionally loose: the design system can evolve without breaking
// compilation here. We validate after mapping.
const DesignSystemToolkitSchema = z.object({
  id: z.string(),
  label: z.string(),
  category: z.string(),
  type: z.string(),
  docsLink: z.string(),
  publicIconUrl: z.string().optional(),
  iconUrl: z.string().optional(),
  isBYOC: z.boolean(),
  isPro: z.boolean(),
  isComingSoon: z.boolean(),
  isHidden: z.boolean(),
});

type DesignSystemToolkit = z.infer<typeof DesignSystemToolkitSchema>;

// ============================================================================
// Helpers
// ============================================================================

const LOOKUP_KEY_REGEX = /[^a-z0-9]/g;
const DESIGN_SYSTEM_PACKAGE = "@arcadeai/design-system";

function normalizeLookupKey(value: string): string {
  return value.toLowerCase().replace(LOOKUP_KEY_REGEX, "");
}

function toToolkitMetadata(entry: DesignSystemToolkit): ToolkitMetadata | null {
  const iconUrl = entry.publicIconUrl ?? entry.iconUrl;
  if (!iconUrl) return null;

  const parsed = ToolkitMetadataSchema.safeParse({
    id: entry.id,
    label: entry.label,
    category: entry.category,
    iconUrl,
    isBYOC: entry.isBYOC,
    isPro: entry.isPro,
    type: entry.type,
    docsLink: entry.docsLink,
    isComingSoon: entry.isComingSoon,
    isHidden: entry.isHidden,
  });

  return parsed.success ? parsed.data : null;
}

function withApiSuffix(label: string): string {
  // If it already ends with API, keep as-is.
  if (/\bapi$/i.test(label.trim())) return label;
  return `${label} API`;
}

// ============================================================================
// Source
// ============================================================================

export class DesignSystemMetadataSource implements IMetadataSource {
  private readonly toolkits: readonly ToolkitMetadata[];
  private readonly indexByIdOrLabel: Map<string, ToolkitMetadata>;

  constructor(toolkits: readonly ToolkitMetadata[]) {
    this.toolkits = toolkits;
    this.indexByIdOrLabel = new Map<string, ToolkitMetadata>();

    for (const toolkit of toolkits) {
      this.indexByIdOrLabel.set(normalizeLookupKey(toolkit.id), toolkit);
      this.indexByIdOrLabel.set(normalizeLookupKey(toolkit.label), toolkit);
    }
  }

  async getToolkitMetadata(toolkitId: string): Promise<ToolkitMetadata | null> {
    const key = normalizeLookupKey(toolkitId);
    const direct = this.indexByIdOrLabel.get(key);
    if (direct) return direct;

    // Fallback 1: "github-api" / "github_api" style inputs.
    // (normalizeLookupKey already strips separators)

    // Fallback 2: If this looks like an API toolkit, try the base provider.
    if (key.endsWith("api")) {
      const baseKey = key.slice(0, -3);
      const base = this.indexByIdOrLabel.get(baseKey);
      if (base) {
        return {
          ...base,
          // Keep base icon, but make the label explicit for API variants.
          label: withApiSuffix(base.label),
        };
      }
    }

    return null;
  }

  async getAllToolkitsMetadata(): Promise<readonly ToolkitMetadata[]> {
    return this.toolkits;
  }

  async listToolkitIds(): Promise<readonly string[]> {
    return this.toolkits.map((t) => t.id);
  }
}

// ============================================================================
// Factories
// ============================================================================

export function createDesignSystemMetadataSourceFromToolkits(
  toolkits: readonly ToolkitMetadata[]
): IMetadataSource {
  return new DesignSystemMetadataSource(toolkits);
}

export async function createDesignSystemMetadataSource(): Promise<IMetadataSource> {
  let maybeToolkits: unknown;
  try {
    const designSystem = (await import(DESIGN_SYSTEM_PACKAGE)) as {
      TOOLKITS?: unknown;
    };
    maybeToolkits = designSystem.TOOLKITS;
  } catch {
    maybeToolkits = [];
  }
  const toolkits = Array.isArray(maybeToolkits) ? maybeToolkits : [];

  const parsed: ToolkitMetadata[] = [];
  for (const raw of toolkits) {
    const dsParsed = DesignSystemToolkitSchema.safeParse(raw);
    if (!dsParsed.success) continue;
    const mapped = toToolkitMetadata(dsParsed.data);
    if (mapped) parsed.push(mapped);
  }

  return new DesignSystemMetadataSource(parsed);
}
