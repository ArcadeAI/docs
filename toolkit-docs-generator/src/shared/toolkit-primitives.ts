/**
 * Toolkit primitives shared by the Next.js docs app (app/_lib and its
 * consumers) and toolkit-docs-generator. Both halves need the same toolkit
 * ID/slug/category logic, but the generator's tsconfig pins `rootDir` to its
 * own `src/`, so a module outside that directory fails its build
 * (`TS6059: File '...' is not under 'rootDir'`). Living here satisfies the
 * generator's rootDir trivially, while the app side can still reach it with
 * a normal relative or `@/`-aliased import — root tsconfig has no `rootDir`
 * restriction, only a `toolkit-docs-generator` entry in `exclude`, which
 * only affects automatic root-file discovery, not files reached via import.
 *
 * Everything here must stay free of Node built-ins: client components reach
 * this module through the integrations index, so a `node:*` import anywhere
 * in the graph fails the webpack browser build. Filesystem concerns live in
 * `toolkit-data-dir.ts` instead.
 */

// ============================================================================
// Toolkit ID normalization
// ============================================================================

const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]+/g;

/**
 * Strip all non-alphanumeric characters and lowercase.
 * Used for case/punctuation-insensitive matching of toolkit IDs and labels
 * (e.g. matching "GitHub API" against a design system entry keyed "Github").
 */
export function normalizeToolkitId(value: string): string {
  return value.toLowerCase().replace(TOOLKIT_ID_NORMALIZER, "");
}

/**
 * Whether a toolkit ID looks like an auto-generated "*Api" wrapper toolkit
 * (e.g. "GithubApi", "hubspot-crm-api", "stripe_api"). These get special-
 * cased in several places: starter-type override, provider-id metadata
 * fallback, and "-api"-suffixed docs slugs/icons.
 */
export function isApiSuffixedToolkitId(toolkitId: string): boolean {
  return normalizeToolkitId(toolkitId).endsWith("api");
}

// ============================================================================
// Slug generation
// ============================================================================

const CAMEL_BOUNDARY = /([a-z0-9])([A-Z])/g;

/**
 * Convert a CamelCase toolkit ID to a kebab-case URL slug.
 *
 * Examples:
 *   PosthogApi      → posthog-api
 *   GoogleCalendar  → google-calendar
 *   E2b             → e2b
 *   HubspotCrmApi   → hubspot-crm-api
 */
export function toKebabCase(value: string): string {
  return value.replace(CAMEL_BOUNDARY, "$1-$2").toLowerCase();
}

export type ToolkitSlugSource = {
  id: string;
  docsLink?: string | null;
};

function extractSlugFromPath(path: string): string | null {
  const segments = path.split("/").filter(Boolean);
  return segments.at(-1) ?? null;
}

/**
 * The canonical docs slug for a toolkit: the last path segment of its
 * `docsLink` when present (preserves hand-authored slugs like "stripe_api"),
 * otherwise the kebab-case of its ID.
 */
export function getToolkitSlug({ id, docsLink }: ToolkitSlugSource): string {
  if (docsLink) {
    try {
      const url = new URL(docsLink);
      const slug = extractSlugFromPath(url.pathname);
      if (slug) {
        return slug;
      }
    } catch {
      const slug = extractSlugFromPath(docsLink);
      if (slug) {
        return slug;
      }
    }
  }

  return toKebabCase(id);
}

// ============================================================================
// Integration categories
// ============================================================================

/**
 * The docs-generation category buckets. Each value corresponds to exactly
 * one `app/en/resources/integrations/<category>/[toolkitId]` route directory
 * (see tests/integration-category-routes.test.ts) and to the design system's
 * own `ToolkitCategory` union (minus its "all" filter meta-value) — see
 * app/en/resources/integrations/components/filter-params.ts. There is
 * deliberately no "others" catch-all: a toolkit whose category doesn't match
 * one of these has no page to render, so `normalizeCategory` in
 * app/_lib/toolkit-static-params.ts throws instead of bucketing it here.
 *
 * `ToolkitCategorySchema` in ./toolkit-schemas.ts is built from this array,
 * so the generator's contract and the docs app's route set can't drift
 * apart.
 */
export const INTEGRATION_CATEGORIES = [
  "productivity",
  "social",
  "entertainment",
  "development",
  "payments",
  "search",
  "sales",
  "databases",
  "customer-support",
] as const;

export type IntegrationCategory = (typeof INTEGRATION_CATEGORIES)[number];
