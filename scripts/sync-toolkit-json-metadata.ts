#!/usr/bin/env node
/**
 * Sync `data/toolkits/*.json` top-level label + metadata fields using
 * @arcadeai/design-system as the source of truth.
 *
 * This keeps the UI consistent (spaced labels, correct categories, valid icons,
 * and `arcade_starter` for "*Api" toolkits).
 *
 * Usage:
 *   pnpm dlx tsx scripts/sync-toolkit-json-metadata.ts
 *   pnpm dlx tsx scripts/sync-toolkit-json-metadata.ts --dry-run
 *   pnpm dlx tsx scripts/sync-toolkit-json-metadata.ts --verbose
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { TOOLKITS } from "@arcadeai/design-system";
import fg from "fast-glob";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const verbose = args.includes("--verbose") || args.includes("-v");

const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]/g;

function normalizeId(value: string): string {
  return value.toLowerCase().replace(TOOLKIT_ID_NORMALIZER, "");
}

function isApiToolkitId(toolkitId: string): boolean {
  return normalizeId(toolkitId).endsWith("api");
}

type DesignSystemToolkit = (typeof TOOLKITS)[number];

type ToolkitJson = {
  id: string;
  label?: string;
  metadata?: {
    category?: string;
    iconUrl?: string;
    isBYOC?: boolean;
    isPro?: boolean;
    type?: string;
    docsLink?: string;
    isComingSoon?: boolean;
    isHidden?: boolean;
  };
  auth?: { providerId?: string } | null;
  [key: string]: unknown;
};

const dsById = new Map<string, DesignSystemToolkit>();
for (const toolkit of TOOLKITS) {
  dsById.set(normalizeId(toolkit.id), toolkit);
}

type ResolvedDesignSystem = {
  toolkit: DesignSystemToolkit;
  matchReason: "id" | "providerId+api";
} | null;

function resolveDesignSystemToolkit(json: ToolkitJson): ResolvedDesignSystem {
  const direct = dsById.get(normalizeId(json.id));
  if (direct) return { toolkit: direct, matchReason: "id" };

  // If this is an "*Api" toolkit and has a providerId, try "<providerId>Api".
  if (isApiToolkitId(json.id) && json.auth?.providerId) {
    const candidate = dsById.get(`${normalizeId(json.auth.providerId)}api`);
    if (candidate) return { toolkit: candidate, matchReason: "providerId+api" };
  }

  return null;
}

function withApiSuffix(label: string): string {
  if (/\bapi$/i.test(label.trim())) return label;
  return `${label} API`;
}

function applyDesignSystemMetadata(
  json: ToolkitJson,
  resolved: ResolvedDesignSystem
): { updated: ToolkitJson; changed: boolean } {
  const next: ToolkitJson = { ...json };
  const nextMetadata = { ...(json.metadata ?? {}) };

  let changed = false;
  const apiToolkit = isApiToolkitId(json.id);

  if (resolved) {
    const ds = resolved.toolkit;

    // Update label:
    // - Always for API toolkits (the UI should show "GitHub API", not "GithubApi").
    // - Also for direct ID matches.
    const nextLabel =
      apiToolkit || resolved.matchReason === "id"
        ? ds.label
        : (next.label ?? ds.label);

    if (nextLabel !== next.label) {
      next.label = nextLabel;
      changed = true;
    }

    // Metadata fields from design system.
    const dsIconUrl = ds.publicIconUrl ?? nextMetadata.iconUrl;
    if (dsIconUrl && dsIconUrl !== nextMetadata.iconUrl) {
      nextMetadata.iconUrl = dsIconUrl;
      changed = true;
    }

    if (ds.category !== nextMetadata.category) {
      nextMetadata.category = ds.category;
      changed = true;
    }

    if (ds.isBYOC !== nextMetadata.isBYOC) {
      nextMetadata.isBYOC = ds.isBYOC;
      changed = true;
    }
    if (ds.isPro !== nextMetadata.isPro) {
      nextMetadata.isPro = ds.isPro;
      changed = true;
    }
    if (ds.isComingSoon !== nextMetadata.isComingSoon) {
      nextMetadata.isComingSoon = ds.isComingSoon;
      changed = true;
    }
    if (ds.isHidden !== nextMetadata.isHidden) {
      nextMetadata.isHidden = ds.isHidden;
      changed = true;
    }

    // Prefer design system docsLink.
    if (ds.docsLink && ds.docsLink !== nextMetadata.docsLink) {
      nextMetadata.docsLink = ds.docsLink;
      changed = true;
    }

    // Prefer design system type, but enforce "arcade_starter" for API toolkits.
    const dsType =
      apiToolkit && ds.type === "arcade" ? "arcade_starter" : ds.type;
    if (dsType !== nextMetadata.type) {
      nextMetadata.type = dsType;
      changed = true;
    }
  }

  // Heuristic fallback: any "*Api" Arcade toolkit should be arcade_starter.
  if (apiToolkit && nextMetadata.type === "arcade") {
    nextMetadata.type = "arcade_starter";
    changed = true;
  }

  // Icon fallback for "*Api": if design system doesn't have a match, try base icon.
  if (apiToolkit && !resolved) {
    const baseKey = normalizeId(json.id).slice(0, -3);
    const base = dsById.get(baseKey);
    if (base?.publicIconUrl && base.publicIconUrl !== nextMetadata.iconUrl) {
      nextMetadata.iconUrl = base.publicIconUrl;
      changed = true;
    }

    if (base?.category && base.category !== nextMetadata.category) {
      nextMetadata.category = base.category;
      changed = true;
    }

    if (base?.label && typeof next.label === "string") {
      const derived = withApiSuffix(base.label);
      if (derived !== next.label) {
        next.label = derived;
        changed = true;
      }
    }
  }

  next.metadata = nextMetadata;

  return { updated: next, changed };
}

function formatJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}

async function main(): Promise<void> {
  const dataDir = join(process.cwd(), "data", "toolkits");
  const toolkitFiles = await fg(["data/toolkits/*.json"], { dot: false });

  let filesChanged = 0;

  for (const file of toolkitFiles) {
    if (file.endsWith("/index.json")) continue;

    const absolutePath = join(process.cwd(), file);
    const original = readFileSync(absolutePath, "utf8");
    const parsed = JSON.parse(original) as ToolkitJson;

    const resolved = resolveDesignSystemToolkit(parsed);
    const result = applyDesignSystemMetadata(parsed, resolved);

    if (!result.changed) continue;

    filesChanged += 1;

    if (verbose) {
      const reason = resolved ? resolved.matchReason : "heuristic";
      console.log(`${dryRun ? "[dry-run] " : ""}${file} (${reason})`);
    }

    if (!dryRun) {
      writeFileSync(absolutePath, formatJson(result.updated));
    }
  }

  // Also update the index file (if present) to keep labels/categories in sync.
  const indexPath = join(dataDir, "index.json");
  try {
    const original = readFileSync(indexPath, "utf8");
    const parsed = JSON.parse(original) as {
      toolkits?: Array<{
        id: string;
        label: string;
        category?: string;
        type?: string;
        [key: string]: unknown;
      }>;
      [key: string]: unknown;
    };

    if (Array.isArray(parsed.toolkits)) {
      let changed = false;
      const nextToolkits = parsed.toolkits.map((t) => {
        const ds = dsById.get(normalizeId(t.id));
        if (!ds) return t;

        const apiToolkit = isApiToolkitId(t.id);
        const next = { ...t };
        next.label = apiToolkit ? ds.label : ds.label;
        next.category = ds.category;
        next.type =
          apiToolkit && ds.type === "arcade" ? "arcade_starter" : ds.type;

        if (
          next.label !== t.label ||
          next.category !== t.category ||
          next.type !== t.type
        ) {
          changed = true;
        }

        return next;
      });

      if (changed) {
        filesChanged += 1;
        if (verbose) {
          console.log(
            `${dryRun ? "[dry-run] " : ""}data/toolkits/index.json (design-system)`
          );
        }
        if (!dryRun) {
          writeFileSync(
            indexPath,
            formatJson({ ...parsed, toolkits: nextToolkits })
          );
        }
      }
    }
  } catch {
    // Ignore missing/invalid index.json
  }

  console.log(
    `\nUpdated ${filesChanged} file(s).${dryRun ? " (dry-run)" : ""}`
  );
  console.log(`Design System toolkits: ${TOOLKITS.length}`);
  console.log(`Toolkit JSON files scanned: ${toolkitFiles.length}`);
}

await main();
