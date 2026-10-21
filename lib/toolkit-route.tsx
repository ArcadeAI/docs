/**
 * Toolkit (MCP server) pages are not MDX files: they are rendered from the JSON
 * data in toolkit-docs-generator/data/toolkits. The docs catch-all route
 * (app/en/[[...slug]]/page.tsx) calls `source.getPage(slug)` first and falls
 * back to this module when no MDX page matches the slug:
 *
 *   matchToolkitRoute(slug)  -> { category, toolkitId } | null
 *   ToolkitRoutePage(match)  -> rendered page, or null when no toolkit exists
 *
 * `generateToolkitParams` feeds `generateStaticParams` so every toolkit page is
 * prerendered; `toolkitRouteMetadata` builds the per-toolkit metadata (title,
 * description, canonical, and `noindex` for hidden toolkits).
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ToolkitPage } from "@/components/toolkit-docs";
import { source } from "@/lib/source";
import { readToolkitData, toToolkitSummary } from "@/lib/toolkit-data";
import {
  getToolkitCanonicalPath,
  getToolkitStaticParamsForCategory,
} from "@/lib/toolkit-static-params";
import { INTEGRATION_CATEGORIES } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";

export type ToolkitRouteMatch = {
  category: string;
  toolkitId: string;
};

const ROUTE_PREFIX = ["resources", "integrations"] as const;
const ROUTE_LENGTH = ROUTE_PREFIX.length + 2;

/** Returns a match when `slug` looks like resources/integrations/<category>/<toolkitId>. */
export function matchToolkitRoute(
  slug: string[] | undefined
): ToolkitRouteMatch | null {
  if (!slug || slug.length !== ROUTE_LENGTH) {
    return null;
  }
  const [a, b, category, toolkitId] = slug;
  if (
    a !== ROUTE_PREFIX[0] ||
    b !== ROUTE_PREFIX[1] ||
    !category ||
    !toolkitId
  ) {
    return null;
  }
  return { category, toolkitId };
}

const toSlug = (match: ToolkitRouteMatch): string[] => [
  ...ROUTE_PREFIX,
  match.category,
  match.toolkitId,
];

/**
 * Static params for every generated toolkit page, as `{ slug: string[] }`.
 *
 * Authored MDX pages that live under the same category folders (the partner
 * pages `search/nimble` and `search/tavily`) are served by the MDX branch of
 * the catch-all route, so a toolkit whose slug collides with one is dropped
 * here rather than emitted twice.
 */
export async function generateToolkitParams(): Promise<{ slug: string[] }[]> {
  const perCategory = await Promise.all(
    INTEGRATION_CATEGORIES.map(async (category) => {
      const params = await getToolkitStaticParamsForCategory(category);
      return params.map(({ toolkitId }) => ({ category, toolkitId }));
    })
  );

  return perCategory
    .flat()
    .map(toSlug)
    .filter((slug) => source.getPage(slug) === undefined)
    .map((slug) => ({ slug }));
}

/** Metadata for a toolkit page, or null when the toolkit does not exist. */
export async function toolkitRouteMetadata(
  match: ToolkitRouteMatch
): Promise<Metadata | null> {
  const data = await readToolkitData(match.toolkitId);
  if (!data) {
    return null;
  }

  // Canonicalize to the toolkit's own category + slug, not the URL it was
  // reached through. The route accepts any category segment, so a
  // wrong-category alias (e.g. development/pagerduty-api for a customer-support
  // toolkit) must point at the one generated, index-linked page.
  const canonical = getToolkitCanonicalPath({
    category: data.metadata?.category,
    docsLink: data.metadata?.docsLink,
    id: data.id,
  });

  const metadata: Metadata = {
    alternates: { canonical },
    description: data.description || "Generated MCP server documentation.",
    title: data.label || data.id,
  };

  // Hidden toolkits stay reachable via the route (and render as non-clickable
  // cards in the index), but must not be indexed — otherwise their
  // self-canonical is flagged as an orphan with no incoming links.
  if (data.metadata?.isHidden) {
    metadata.robots = { index: false };
  }

  return metadata;
}

/**
 * URL of a toolkit page as Markdown, for "Copy Markdown" and "View as
 * Markdown". The data route answers with the full page as Markdown (the page
 * itself loads per-tool detail on demand, so its HTML does not contain it).
 */
export function toolkitMarkdownUrl(match: ToolkitRouteMatch): string {
  return `/api/toolkit-data/${encodeURIComponent(match.toolkitId)}?format=markdown`;
}

/**
 * Renders the toolkit page content, or null when the toolkit does not exist.
 * `ToolkitPage` is a client component that ships its own breadcrumb, "On this
 * page" panel and scroll controls, so the docs page around it shows neither.
 */
export async function ToolkitRoutePage(props: {
  /** Page actions shown in the toolkit's own actions row. */
  actions?: ReactNode;
  match: ToolkitRouteMatch;
}): Promise<ReactNode | null> {
  const data = await readToolkitData(props.match.toolkitId);
  if (!data) {
    return null;
  }

  // Pass a summary (per-tool detail stripped) so the heavy fields never enter
  // the initial Flight payload — detail is fetched on expand. See MARTECH-17.
  return <ToolkitPage actions={props.actions} data={toToolkitSummary(data)} />;
}
