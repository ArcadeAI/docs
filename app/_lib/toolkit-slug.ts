import type { Toolkit } from "@arcadeai/design-system";
import type { IntegrationCategory } from "./toolkit-category";

const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]+/g;
const CAMEL_BOUNDARY = /([a-z0-9])([A-Z])/g;

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
 * `category` is widened with `IntegrationCategory` so normalized route
 * categories (including `"others"`) remain assignable after
 * `normalizeCategory` — DS `ToolkitCategory` does not include `"others"`.
 */
export type ToolkitWithDocsLink = Omit<Toolkit, "category"> & {
  category: Toolkit["category"] | IntegrationCategory;
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
  return segments.at(-1) ?? null;
};

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
