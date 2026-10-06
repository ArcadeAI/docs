/**
 * Toolkit (MCP server) pages are not MDX files: they are rendered from the JSON
 * data in toolkit-docs-generator/data/toolkits. The docs catch-all route
 * (app/en/[[...slug]]/page.tsx) falls back to this module when no MDX page
 * matches the slug.
 *
 * STUB: the toolkit workstream replaces this file with the real implementation
 * while keeping these exact exports.
 */
import type { Metadata } from "next";
import type { ReactNode } from "react";

export type ToolkitRouteMatch = {
  category: string;
  toolkitId: string;
};

/** Returns a match when `slug` looks like resources/integrations/<category>/<toolkitId>. */
export function matchToolkitRoute(
  slug: string[] | undefined
): ToolkitRouteMatch | null {
  if (!slug || slug.length !== 4) {
    return null;
  }
  const [a, b, category, toolkitId] = slug;
  if (a !== "resources" || b !== "integrations" || !category || !toolkitId) {
    return null;
  }
  return { category, toolkitId };
}

/** Static params for every generated toolkit page, as `{ slug: string[] }`. */
export function generateToolkitParams(): Promise<{ slug: string[] }[]> {
  return Promise.resolve([]);
}

/** Metadata for a toolkit page, or null when the toolkit does not exist. */
export function toolkitRouteMetadata(
  _match: ToolkitRouteMatch
): Promise<Metadata | null> {
  return Promise.resolve(null);
}

/** Renders the full toolkit page (DocsPage chrome included), or null when the toolkit does not exist. */
export function ToolkitRoutePage(_props: {
  match: ToolkitRouteMatch;
}): Promise<ReactNode | null> {
  return Promise.resolve(null);
}
