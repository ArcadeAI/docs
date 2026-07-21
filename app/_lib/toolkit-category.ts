/**
 * Shared integration category allow-list and normalization.
 *
 * Kept free of Node/fs imports so client components (integration cards) and
 * server route helpers can share one contract without pulling server-only code
 * into the browser bundle.
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
  "others",
] as const;

export type IntegrationCategory = (typeof INTEGRATION_CATEGORIES)[number];

/**
 * Categories that have a real `app/.../integrations/<category>/[toolkitId]`
 * route. `"others"` remains in `INTEGRATION_CATEGORIES` as the normalize
 * fallback for stable card identity, but `next.config.ts` redirects
 * `/integrations/others/*` to the index — so it is never clickable.
 */
export const ROUTABLE_INTEGRATION_CATEGORIES = INTEGRATION_CATEGORIES.filter(
  (category): category is Exclude<IntegrationCategory, "others"> =>
    category !== "others"
);

export function isRoutableIntegrationCategory(
  category: string
): category is Exclude<IntegrationCategory, "others"> {
  return (ROUTABLE_INTEGRATION_CATEGORIES as readonly string[]).includes(
    category
  );
}

export function normalizeCategory(
  value: string | null | undefined
): IntegrationCategory {
  if (!value) {
    return "others";
  }

  return INTEGRATION_CATEGORIES.includes(value as IntegrationCategory)
    ? (value as IntegrationCategory)
    : "others";
}
