import type { ToolDefinition } from "../types/index.js";
import { extractVersion } from "./fp.js";

interface ParsedSemver {
  readonly core: readonly number[];
  readonly prerelease: readonly (number | string)[] | null;
}

/**
 * Parse a semver-ish string into numeric core + optional pre-release parts.
 * Build metadata (+...) is ignored for ordering.
 */
const parseSemver = (version: string): ParsedSemver => {
  const withoutBuild = version.split("+")[0] ?? version;
  const prereleaseIndex = withoutBuild.indexOf("-");
  const coreText =
    prereleaseIndex >= 0
      ? withoutBuild.slice(0, prereleaseIndex)
      : withoutBuild;
  const prereleaseText =
    prereleaseIndex >= 0 ? withoutBuild.slice(prereleaseIndex + 1) : "";

  const core = coreText.split(".").map((segment) => {
    const n = Number(segment);
    return Number.isNaN(n) ? 0 : n;
  });

  const prerelease =
    prereleaseText.length > 0
      ? prereleaseText.split(".").map((identifier) => {
          const n = Number(identifier);
          return Number.isNaN(n) ? identifier : n;
        })
      : null;

  return { core, prerelease };
};

/**
 * Compare two semver version strings using semver precedence rules:
 * - Compare MAJOR.MINOR.PATCH numerically
 * - For equal core versions, stable release > pre-release
 * - Numeric pre-release identifiers compare numerically
 * - String pre-release identifiers compare lexicographically
 * - Build metadata is ignored
 *
 * Returns a positive number if a > b, negative if a < b, 0 if equal.
 */
const compareVersions = (a: string, b: string): number => {
  const aSemver = parseSemver(a);
  const bSemver = parseSemver(b);
  const len = Math.max(aSemver.core.length, bSemver.core.length);
  for (let i = 0; i < len; i++) {
    const diff = (aSemver.core[i] ?? 0) - (bSemver.core[i] ?? 0);
    if (diff !== 0) return diff;
  }

  const aPrerelease = aSemver.prerelease;
  const bPrerelease = bSemver.prerelease;
  if (!(aPrerelease || bPrerelease)) return 0;
  if (!aPrerelease && bPrerelease) return 1;
  if (aPrerelease && !bPrerelease) return -1;

  const prereleaseLen = Math.max(
    aPrerelease?.length ?? 0,
    bPrerelease?.length ?? 0
  );
  for (let i = 0; i < prereleaseLen; i++) {
    const aPart = aPrerelease?.[i];
    const bPart = bPrerelease?.[i];

    if (aPart === undefined && bPart !== undefined) return -1;
    if (aPart !== undefined && bPart === undefined) return 1;
    if (aPart === undefined && bPart === undefined) return 0;

    const aIsNumber = typeof aPart === "number";
    const bIsNumber = typeof bPart === "number";
    if (aIsNumber && bIsNumber) {
      const diff = (aPart as number) - (bPart as number);
      if (diff !== 0) return diff;
      continue;
    }
    if (aIsNumber && !bIsNumber) return -1;
    if (!aIsNumber && bIsNumber) return 1;

    const diff = String(aPart).localeCompare(String(bPart), "en");
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
