import { getToolkitSlug } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";
import type { ToolkitWithDocsLink } from "./toolkit-slug";

const INTEGRATIONS_BASE = "/en/resources/integrations";

/**
 * The integrations link a toolkit card points to: `/en/resources/integrations/
 * <category>/<slug>`. Mirrors the slug + category logic used to generate the
 * dynamic `[toolkitId]` routes so cards and pages agree.
 */
export function toIntegrationLink(toolkit: {
  id: string;
  docsLink?: string | null;
  category?: string | null;
}): string | null {
  const slug = getToolkitSlug({ id: toolkit.id, docsLink: toolkit.docsLink });
  const category = toolkit.category;
  if (!category) {
    return null;
  }
  return `${INTEGRATIONS_BASE}/${category}/${slug}`;
}

export type ResolvedIndexToolkit = ToolkitWithDocsLink & { hasPage: boolean };

/**
 * Decide which catalog toolkits the integrations index should render, and
 * whether each one links to a real page.
 *
 * The design-system catalog carries legacy bare-name entries (e.g. "Datadog"
 * alongside "DatadogApi") and doc-less placeholders (e.g. "Discord") that have
 * no generated docs page — linking to them 404s. Given the set of links that
 * actually resolve (`validLinks`: dynamic toolkit routes + authored static
 * pages), this:
 *   - drops a bare entry when its `-api` sibling owns the real page (collapses
 *     Datadog/DatadogApi, Vercel/VercelApi, Ashby/AshbyApi, Customerio/...),
 *   - de-dupes entries that resolve to the same URL (e.g. Notion/NotionToolkit),
 *   - flags the rest with `hasPage` so the caller can render doc-less toolkits
 *     as non-clickable cards instead of as broken links.
 */
export function resolveIndexToolkits(
  toolkits: ToolkitWithDocsLink[],
  validLinks: ReadonlySet<string>
): ResolvedIndexToolkit[] {
  const seen = new Set<string>();
  const resolved: ResolvedIndexToolkit[] = [];

  for (const toolkit of toolkits) {
    // Hidden toolkits never render in the index (matches the client filter).
    if (toolkit.isHidden) {
      continue;
    }

    const link = toIntegrationLink(toolkit);
    const hasPage = link !== null && validLinks.has(link);

    // A bare duplicate of a real "-api" toolkit: drop it; the real card stays.
    if (link && !hasPage && validLinks.has(`${link}-api`)) {
      continue;
    }

    // Collapse multiple catalog entries that point at the same URL.
    if (link) {
      if (seen.has(link)) {
        continue;
      }
      seen.add(link);
    }

    // "Coming soon" means there is nothing to read yet, so derive it from
    // whether a page exists rather than trusting the design-system flag. That
    // flag is a hand-maintained constant in a published package, so it goes
    // stale the moment a toolkit ships and keeps a live toolkit looking
    // unavailable. Deriving it here also keeps the badge and the sort order
    // (`use-toolkit-filters`) reading the same value, which they previously
    // did not.
    resolved.push({ ...toolkit, hasPage, isComingSoon: !hasPage });
  }

  return resolved;
}
