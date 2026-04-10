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
 * Find the highest version among all tools in a toolkit.
 * This is the version we keep — stale tools from older releases are dropped.
 */
export const getHighestVersion = (
  tools: readonly ToolDefinition[]
): string | null => {
  if (tools.length === 0) {
    return null;
  }

  let best = "";
  for (const tool of tools) {
    const version = extractVersion(tool.fullyQualifiedName);
    if (best === "" || compareVersions(version, best) > 0) {
      best = version;
    }
  }

  return best || null;
};

/**
 * Keep only tools whose @version matches the highest version for
 * their toolkit. If all tools share the same version (the common
 * case), returns the original array unchanged.
 *
 * This drops stale tools from older releases that Engine still serves,
 * while always preserving the newest version — even if it has fewer tools
 * (e.g. tools were removed/consolidated in the new release).
 */
export const filterToolsByHighestVersion = (
  tools: readonly ToolDefinition[]
): readonly ToolDefinition[] => {
  const highest = getHighestVersion(tools);
  if (highest === null) {
    return tools;
  }

  // Fast path: if every tool is already at the highest version, skip filtering
  const allSame = tools.every(
    (t) => extractVersion(t.fullyQualifiedName) === highest
  );
  if (allSame) {
    return tools;
  }

  return tools.filter((t) => extractVersion(t.fullyQualifiedName) === highest);
};
