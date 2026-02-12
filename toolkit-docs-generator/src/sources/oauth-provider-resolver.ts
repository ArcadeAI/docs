/**
 * OAuth Provider ID Resolver
 *
 * Resolves toolkit IDs to OAuth provider IDs using the design system's
 * OAUTH_PROVIDER_CATALOGUE. This provides a fallback when the Engine API
 * returns provider_id: null for toolkits that have known OAuth providers.
 *
 * Resolution strategy:
 * 1. Exact match (normalized toolkit ID against catalogue keys)
 * 2. Strip "api" suffix and try again
 * 3. Longest-prefix match (e.g. "hubspotcrm" → "hubspot")
 */

// ============================================================================
// Types
// ============================================================================

/** Callback that resolves a toolkit ID to an OAuth provider ID, or null. */
export type ProviderIdResolver = (toolkitId: string) => string | null;

// ============================================================================
// Helpers
// ============================================================================

const NORMALIZER = /[^a-z0-9]/g;

/**
 * Minimum provider ID length for prefix matching.
 * Prevents false positives like "xero" matching "x" (X/Twitter).
 */
const MIN_PREFIX_LENGTH = 3;

/** Lowercase and strip non-alphanumeric characters. */
export const normalizeLookup = (value: string): string =>
  value.toLowerCase().replace(NORMALIZER, "");

// ============================================================================
// Core resolver builder (pure, no external dependencies)
// ============================================================================

/**
 * Build a provider ID resolver from a set of known provider IDs.
 *
 * The returned function maps a toolkit ID (e.g. "HubspotCrmApi") to the best
 * matching provider ID (e.g. "hubspot"), or null if no match is found.
 */
export function buildProviderIdResolver(
  knownProviderIds: ReadonlySet<string>
): ProviderIdResolver {
  // Pre-sort by length descending so the longest prefix wins.
  const sortedByLength = [...knownProviderIds].sort(
    (a, b) => b.length - a.length
  );

  return (toolkitId: string): string | null => {
    const normalized = normalizeLookup(toolkitId);

    // 1. Exact match
    if (knownProviderIds.has(normalized)) {
      return normalized;
    }

    // 2. Strip "api" suffix
    if (normalized.endsWith("api")) {
      const base = normalized.slice(0, -3);

      if (knownProviderIds.has(base)) {
        return base;
      }

      // 3. Longest-prefix match on the base (e.g. "hubspotcrm" → "hubspot")
      //    Require the prefix to be at least 3 chars to avoid false positives
      //    (e.g. "xero" should NOT match "x").
      for (const providerId of sortedByLength) {
        if (
          providerId.length >= MIN_PREFIX_LENGTH &&
          base.startsWith(providerId) &&
          base !== providerId
        ) {
          return providerId;
        }
      }
    }

    return null;
  };
}

// ============================================================================
// Design System factory (dynamic import)
// ============================================================================

/**
 * Create a provider ID resolver from the design system's OAUTH_PROVIDER_CATALOGUE.
 *
 * Uses a dynamic import so the generator can still run in environments where
 * `@arcadeai/design-system` is not installed (returns null in that case).
 */
export async function createDesignSystemProviderIdResolver(): Promise<ProviderIdResolver | null> {
  try {
    const designSystem = await import("@arcadeai/design-system");
    const catalogue = (
      designSystem as {
        OAUTH_PROVIDER_CATALOGUE?: Record<string, unknown>;
      }
    ).OAUTH_PROVIDER_CATALOGUE;

    if (!catalogue || typeof catalogue !== "object") {
      return null;
    }

    const knownIds = new Set(Object.keys(catalogue));
    return buildProviderIdResolver(knownIds);
  } catch {
    return null;
  }
}
