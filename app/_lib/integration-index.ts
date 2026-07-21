import {
  isRoutableIntegrationCategory,
  normalizeCategory,
} from "./toolkit-category";
import { getToolkitSlug, type ToolkitWithDocsLink } from "./toolkit-slug";

const INTEGRATIONS_BASE = "/en/resources/integrations";

/**
 * The integrations link a toolkit card points to: `/en/resources/integrations/
 * <category>/<slug>`. Mirrors the slug + category logic used to generate the
 * dynamic `[toolkitId]` routes so cards and pages agree.
 *
 * Unknown categories normalize to `"others"` for a stable identity, but those
 * URLs are redirect-only (`next.config.ts`) — see `resolveIndexToolkits`.
 */
export function toIntegrationLink(toolkit: {
  id: string;
  docsLink?: string | null;
  category?: string | null;
}): string {
  const slug = getToolkitSlug({ id: toolkit.id, docsLink: toolkit.docsLink });
  const category = normalizeCategory(toolkit.category);
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
 *   - never marks `"others"` links clickable — that category redirects to the
 *     integrations index and has no `[toolkitId]` route.
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
    const category = normalizeCategory(toolkit.category);
    // `/others/...` is redirect-only; never treat it as a real page.
    const hasPage =
      isRoutableIntegrationCategory(category) && validLinks.has(link);

    // A bare duplicate of a real "-api" toolkit: drop it; the real card stays.
    if (!hasPage && validLinks.has(`${link}-api`)) {
      continue;
    }

    // Collapse multiple catalog entries that point at the same URL.
    if (seen.has(link)) {
      continue;
    }
    seen.add(link);
    resolved.push({ ...toolkit, hasPage });
  }

  return resolved;
}
