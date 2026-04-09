import type { ToolDefinition } from "../types/index.js";
import { extractVersion } from "./fp.js";

/**
 * Parse the numeric MAJOR.MINOR.PATCH tuple from a semver string,
 * stripping pre-release (`-alpha.1`) and build metadata (`+build.456`).
 *
 * Handles formats produced by arcade-mcp's normalize_version():
 *   "3.1.3", "1.2.3-beta.1", "1.2.3+build.456", "1.2.3-rc.1+build.789"
 */
const parseNumericVersion = (version: string): number[] => {
  // Strip build metadata (after +) then pre-release (after -)
  const core = version.split("+")[0]?.split("-")[0] ?? version;
  return core.split(".").map((s) => {
    const n = Number(s);
    return Number.isNaN(n) ? 0 : n;
  });
};

/**
 * Compare two semver version strings numerically by MAJOR.MINOR.PATCH.
 * Pre-release and build metadata are ignored for ordering purposes
 * (they are unlikely to appear in Engine API responses, but we handle
 * them defensively since arcade-mcp's semver allows them).
 *
 * Returns a positive number if a > b, negative if a < b, 0 if equal.
 */
const compareVersions = (a: string, b: string): number => {
  const aParts = parseNumericVersion(a);
  const bParts = parseNumericVersion(b);
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
