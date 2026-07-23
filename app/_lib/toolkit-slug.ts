import type { Toolkit } from "@arcadeai/design-system";
import type { IntegrationCategory } from "./toolkit-category";

const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]+/g;
const CAMEL_BOUNDARY = /([a-z0-9])([A-Z])/g;
const SAFE_SLUG = /^[a-z0-9](?:[a-z0-9_-]*[a-z0-9])?$/;

export type ToolkitSlugSource = {
  id: string;
  docsLink?: string | null;
};

/**
 * Toolkit with optional `docsLink` and `isPartner` properties.
 * The design-system `Toolkit` type doesn't include either field, but some
 * docs-local entries carry them at runtime (e.g. partner toolkits that
 * render a Partner badge on cards). This type makes the properties explicit
 * so both server and client code can share it.
 *
 * `category` is widened to `IntegrationCategory` so docs routes can use
 * `others` (design-system `ToolkitCategory` does not include that value).
 */
export type ToolkitWithDocsLink = Omit<Toolkit, "category"> & {
  category: IntegrationCategory;
  docsLink?: string | null;
  isPartner?: boolean;
};

/**
 * Strip all non-alphanumeric characters and lowercase.
 * Used for case-insensitive matching of toolkit IDs to filenames.
 */
export function normalizeToolkitId(value: string): string {
  return value.toLowerCase().replace(TOOLKIT_ID_NORMALIZER, "");
}

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

const extractSlugFromPath = (path: string): string | null => {
  const segments = path.split("/").filter(Boolean);
  const slug = segments.at(-1);
  return slug && SAFE_SLUG.test(slug) ? slug : null;
};

export function getToolkitSlug({
  id,
  docsLink,
}: ToolkitSlugSource): string | null {
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

  const kebabId = toKebabCase(id);
  if (SAFE_SLUG.test(kebabId)) {
    return kebabId;
  }
  const normalizedId = normalizeToolkitId(id);
  return normalizedId || null;
}
