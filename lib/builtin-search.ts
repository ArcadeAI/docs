import type { Index } from "fumadocs-core/search/server";
import { createSearchAPI } from "fumadocs-core/search/server";
import { resolveToolkitDataDir } from "@/toolkit-docs-generator/src/shared/toolkit-data-dir";
import { source } from "./source";
import { loadAllToolkitData } from "./toolkit-data";
import { getToolkitCanonicalPath } from "./toolkit-static-params";

const LOCALE_PREFIX = /^\/en\/?/;
const PATH_SEPARATORS = /[/-]+/g;

/** "/en/operate/deploy/on-prem" -> "operate deploy on prem": slug words are
 * searchable, so "faq" finds /resources/faq and "on prem" finds on-prem. */
function urlKeywords(url: string): string {
  return url.replace(LOCALE_PREFIX, "").replace(PATH_SEPARATORS, " ");
}

/**
 * Docs search: Fumadocs' built-in search (ZBSearch), served at /api/search and
 * used by the search dialog.
 *
 * - "simple" mode returns one result per page and boosts page titles, which
 *   ranks the page named after the query above long pages that mention it.
 * - English stemming plus a typo tolerance of 2 lets swapped letters
 *   ("gmial") still match.
 * - URL slugs are indexed as keywords, so "faq" finds /resources/faq even
 *   though the title is "Frequently Asked Questions".
 * - Generated toolkit pages are not MDX, so they are indexed here from the
 *   toolkit JSON: tool names and descriptions become the page content.
 */
async function buildIndexes(): Promise<Index[]> {
  const pages: Index[] = source.getPages().map((page) => ({
    title: page.data.title ?? "",
    description: page.data.description,
    url: page.url,
    keywords: urlKeywords(page.url),
    content: [
      ...page.data.structuredData.headings.map((h) => h.content),
      ...page.data.structuredData.contents.map((c) => c.content),
    ].join("\n"),
  }));

  const { byNormalizedId } = await loadAllToolkitData(resolveToolkitDataDir());
  const toolkits: Index[] = [];
  for (const toolkit of byNormalizedId.values()) {
    if (toolkit.metadata.isHidden || !toolkit.metadata.category) {
      continue;
    }
    toolkits.push({
      title: toolkit.label,
      description: toolkit.description ?? undefined,
      url: getToolkitCanonicalPath({
        id: toolkit.id,
        category: toolkit.metadata.category,
        docsLink: toolkit.metadata.docsLink,
      }),
      keywords: `${toolkit.id} ${toolkit.label} integration`,
      content: [
        `${toolkit.label} MCP server`,
        ...toolkit.tools.map(
          (tool) => `${tool.qualifiedName}\n${tool.description ?? ""}`
        ),
      ].join("\n"),
    });
  }

  return [...pages, ...toolkits];
}

export const builtinSearch = createSearchAPI("simple", {
  indexes: buildIndexes,
  tokenizer: { language: "english", stemming: true },
  search: { tolerance: 2, boost: { title: 2, keywords: 1.5 } },
});
