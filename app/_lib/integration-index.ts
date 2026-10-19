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

export type ResolvedIndexToolkit = ToolkitWithDocsLink & { link: string };

/**
 * Decide which catalog toolkits the integrations index should render, and the
 * page each card links to.
 *
 * Given the set of links that actually resolve (`validLinks`: dynamic toolkit
 * routes + authored static pages), this:
 *   - drops toolkits without a page, so no card links to a 404,
 *   - de-dupes entries that resolve to the same URL (e.g. Notion/NotionToolkit).
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
    if (link === null || !validLinks.has(link) || seen.has(link)) {
      continue;
    }
    seen.add(link);
    resolved.push({ ...toolkit, link });
  }

  return resolved;
}
