import type { ToolDefinition } from "../types/index.js";
import { extractVersion } from "./fp.js";

/**
 * Compare two semver-like version strings numerically.
 * Returns a positive number if a > b, negative if a < b, 0 if equal.
 */
const compareVersions = (a: string, b: string): number => {
  const aParts = a.split(".").map(Number);
  const bParts = b.split(".").map(Number);
  const len = Math.max(aParts.length, bParts.length);
  for (let i = 0; i < len; i++) {
    const diff = (aParts[i] ?? 0) - (bParts[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
};

/**
 * Compute the version shared by the most tools in a toolkit.
 * Ties are broken by numeric semver comparison (highest version wins).
 */
export const getMajorityVersion = (
  tools: readonly ToolDefinition[]
): string | null => {
  if (tools.length === 0) {
    return null;
  }

  const counts = new Map<string, number>();
  for (const tool of tools) {
    const version = extractVersion(tool.fullyQualifiedName);
    counts.set(version, (counts.get(version) ?? 0) + 1);
  }

  let bestVersion = "";
  let bestCount = 0;
  for (const [version, count] of counts) {
    if (
      count > bestCount ||
      (count === bestCount && compareVersions(version, bestVersion) > 0)
    ) {
      bestVersion = version;
      bestCount = count;
    }
  }

  return bestVersion || null;
};

/**
 * Keep only tools whose @version matches the majority version for
 * their toolkit.  If all tools share the same version (the common
 * case), returns the original array unchanged.
 */
export const filterToolsByMajorityVersion = (
  tools: readonly ToolDefinition[]
): readonly ToolDefinition[] => {
  const majorityVersion = getMajorityVersion(tools);
  if (majorityVersion === null) {
    return tools;
  }

  // Fast path: if every tool is already at the majority version, skip filtering
  const allSame = tools.every(
    (t) => extractVersion(t.fullyQualifiedName) === majorityVersion
  );
  if (allSame) {
    return tools;
  }

  return tools.filter(
    (t) => extractVersion(t.fullyQualifiedName) === majorityVersion
  );
};
