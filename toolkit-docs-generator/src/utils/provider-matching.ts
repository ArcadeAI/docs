/**
 * Provider / toolkit ID matching helpers
 *
 * The generator accepts user input like:
 * - "GithubApi"
 * - "github-api"
 * - "GitHub API"
 *
 * This module provides best-effort normalization and matching against known
 * toolkit metadata IDs.
 */

import type { ProviderVersion } from "../types/index.js";

const PROVIDER_LOOKUP_KEY_REGEX = /[^a-z0-9]/g;

export const normalizeProviderKey = (value: string): string =>
  value.toLowerCase().replace(PROVIDER_LOOKUP_KEY_REGEX, "");

export type MinimalToolkitIdentity = {
  id: string;
  label: string;
};

/**
 * Resolve provider IDs from user input using a known toolkit list.
 *
 * - Matches by toolkit `id` and `label`
 * - Ignores spaces, hyphens, underscores, and casing
 */
export const resolveProviderIdsFromMetadata = (
  providers: ProviderVersion[],
  toolkits: readonly MinimalToolkitIdentity[]
): ProviderVersion[] => {
  if (toolkits.length === 0) return providers;

  const idByKey = new Map<string, string>();
  for (const t of toolkits) {
    idByKey.set(normalizeProviderKey(t.id), t.id);
    idByKey.set(normalizeProviderKey(t.label), t.id);
  }

  const resolveOne = (input: string): string => {
    const key = normalizeProviderKey(input);
    const direct = idByKey.get(key);
    if (direct) return direct;

    // Handle separators: "github-api" / "github_api".
    if (key.endsWith("api")) {
      const baseKey = key.slice(0, -3);
      const baseApi = idByKey.get(`${baseKey}api`);
      if (baseApi) return baseApi;
      const base = idByKey.get(baseKey);
      if (base) return base;
    }

    return input;
  };

  return providers.map((pv) => ({
    ...pv,
    provider: resolveOne(pv.provider),
  }));
};
