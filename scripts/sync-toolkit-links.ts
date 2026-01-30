#!/usr/bin/env node
/**
 * Sync toolkit doc links from /integrations/preview/<toolkitId> to
 * /integrations/<category>/<toolkitId>.
 *
 * Uses @arcadeai/design-system as the source of truth for categories.
 *
 * Usage:
 *   pnpm dlx tsx scripts/sync-toolkit-links.ts
 *   pnpm dlx tsx scripts/sync-toolkit-links.ts --dry-run
 *   pnpm dlx tsx scripts/sync-toolkit-links.ts --verbose
 */

import { readFileSync, writeFileSync } from "node:fs";
import { TOOLKITS } from "@arcadeai/design-system";
import fg from "fast-glob";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const verbose = args.includes("--verbose") || args.includes("-v");

const EN_PREVIEW_PREFIX = "/en/resources/integrations/preview/";
const NO_LOCALE_PREVIEW_PREFIX = "/resources/integrations/preview/";
const EN_INTEGRATIONS_PREFIX = "/en/resources/integrations/";

const categoryBySlug = new Map<string, string>();
for (const toolkit of TOOLKITS) {
  categoryBySlug.set(toolkit.id.toLowerCase(), toolkit.category);
}

type RewriteResult = {
  content: string;
  replacements: number;
  matches: number;
  unknownSlugs: Set<string>;
};

function rewritePreviewLinks(input: string): RewriteResult {
  let replacements = 0;
  let matches = 0;
  const unknownSlugs = new Set<string>();

  const replace = (_match: string, slug: string, suffix: string): string => {
    matches++;
    const resolved = categoryBySlug.get(slug.toLowerCase());
    const category = resolved ?? "others";
    if (!resolved) unknownSlugs.add(slug);
    replacements++;
    return `${EN_INTEGRATIONS_PREFIX}${category}/${slug}${suffix}`;
  };

  // Match:
  // - /en/resources/integrations/preview/<toolkitSlug>
  // - /resources/integrations/preview/<toolkitSlug>
  // Optionally followed by an anchor (#...) and/or querystring (?...)
  // NOTE: toolkitSlug here is the toolkit ID lowercased (e.g. githubapi).
  const withLocale = new RegExp(
    `${EN_PREVIEW_PREFIX.replace(/\//g, "\\/")}([a-z0-9]+)([#?][^\\s)\\]]*)?`,
    "g"
  );
  const withoutLocale = new RegExp(
    `${NO_LOCALE_PREVIEW_PREFIX.replace(/\//g, "\\/")}([a-z0-9]+)([#?][^\\s)\\]]*)?`,
    "g"
  );

  let content = input.replace(
    withLocale,
    (match, slug: string, suffix: string | undefined) =>
      replace(match, slug, suffix ?? "")
  );
  content = content.replace(
    withoutLocale,
    (match, slug: string, suffix: string | undefined) =>
      replace(match, slug, suffix ?? "")
  );

  return { content, replacements, matches, unknownSlugs };
}

async function main(): Promise<void> {
  const files = await fg(["app/en/**/*.mdx"], { dot: false });
  let filesChanged = 0;
  let totalReplacements = 0;
  let totalMatches = 0;
  const unknown = new Set<string>();

  for (const file of files) {
    const original = readFileSync(file, "utf-8");
    const result = rewritePreviewLinks(original);
    totalMatches += result.matches;
    for (const slug of result.unknownSlugs) {
      unknown.add(slug);
    }

    if (result.content !== original) {
      filesChanged++;
      totalReplacements += result.replacements;

      if (verbose) {
        console.log(
          `${dryRun ? "[dry-run] " : ""}Updated ${file} (${result.replacements} links)`
        );
      }

      if (!dryRun) {
        writeFileSync(file, result.content);
      }
    }
  }

  console.log(
    `\nFound ${totalMatches} preview links. Updated ${filesChanged} files (${totalReplacements} links).${
      dryRun ? " (dry-run)" : ""
    }`
  );

  if (unknown.size > 0) {
    const unknownList = Array.from(unknown).sort().join(", ");
    console.log(
      `Unknown toolkit slugs (not in design system; mapped to others): ${unknownList}`
    );
  }
}

await main();
