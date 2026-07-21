import { normalizeCategory } from "./toolkit-category";
import { getToolkitSlug, type ToolkitWithDocsLink } from "./toolkit-slug";

const INTEGRATIONS_BASE = "/en/resources/integrations";

/**
 * The integrations link a toolkit card points to: `/en/resources/integrations/
 * <category>/<slug>`. Mirrors the slug + category logic used to generate the
 * dynamic `[toolkitId]` routes so cards and pages agree.
 *
 * Returns null when the toolkit cannot form a safe slug — callers skip it.
 */
export function toIntegrationLink(toolkit: {
  id: string;
  docsLink?: string | null;
  category?: string | null;
}): string | null {
  const slug = getToolkitSlug({ id: toolkit.id, docsLink: toolkit.docsLink });
  if (!slug) {
    return null;
  }
  const category = normalizeCategory(toolkit.category);
  return `${INTEGRATIONS_BASE}/${category}/${slug}`;
}

export type ResolvedIndexToolkit = ToolkitWithDocsLink & {
  hasPage: boolean;
  /** Final card href (may remap bare names onto a real `-api` page). */
  link: string;
};

const catalogOwnsLink = (
  toolkits: ToolkitWithDocsLink[],
  targetLink: string,
  except: ToolkitWithDocsLink
): boolean =>
  toolkits.some((other) => {
    if (other === except || other.isHidden) {
      return false;
    }
    return toIntegrationLink(other) === targetLink;
  });

/**
 * Decide which catalog toolkits the integrations index should render, and
 * whether each one links to a real page.
 *
 * The design-system catalog carries legacy bare-name entries (e.g. "Datadog"
 * alongside "DatadogApi") and doc-less placeholders (e.g. "Discord") that have
 * no generated docs page — linking to them 404s. Given the set of links that
 * actually resolve (`validLinks`: dynamic toolkit routes + authored static
 * pages), this:
 *   - drops a bare entry when another catalog toolkit owns the `-api` page
 *     (collapses Datadog/DatadogApi, …),
 *   - remaps a lone bare entry onto the `-api` page when that page exists but
 *     no sibling catalog entry claims it,
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
    if (!link) {
      continue;
    }

    let resolvedLink = link;
    let hasPage = validLinks.has(link);

    // Bare name with no page, but a real `-api` page exists.
    if (!hasPage && validLinks.has(`${link}-api`)) {
      const apiLink = `${link}-api`;
      if (catalogOwnsLink(toolkits, apiLink, toolkit)) {
        // Sibling (e.g. DatadogApi) owns the page — drop the bare duplicate.
        continue;
      }
      // Lone bare entry: surface the generated `-api` page instead of vanishing.
      resolvedLink = apiLink;
      hasPage = true;
    }

    // Collapse multiple catalog entries that point at the same URL.
    if (seen.has(resolvedLink)) {
      continue;
    }
    seen.add(resolvedLink);
    resolved.push({ ...toolkit, hasPage, link: resolvedLink });
  }

  return resolved;
}
