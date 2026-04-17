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

const compareCoreVersions = (
  aCore: readonly number[],
  bCore: readonly number[]
): number => {
  const len = Math.max(aCore.length, bCore.length);
  for (let i = 0; i < len; i++) {
    const diff = (aCore[i] ?? 0) - (bCore[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
};

/**
 * Compare two prerelease identifiers following SemVer 2.0.0 §11.4.2:
 * numeric identifiers always rank lower than alphanumeric identifiers,
 * numeric identifiers compare numerically, and alphanumeric identifiers
 * compare by ASCII byte order (not locale).
 */
const comparePrereleaseIdentifier = (
  aPart: number | string,
  bPart: number | string
): number => {
  if (typeof aPart === "number" && typeof bPart === "number") {
    return aPart - bPart;
  }
  if (typeof aPart === "number") return -1;
  if (typeof bPart === "number") return 1;
  if (aPart < bPart) return -1;
  if (aPart > bPart) return 1;
  return 0;
};

/**
 * Compare prerelease identifier arrays following SemVer 2.0.0 §11.4:
 * a prerelease version has lower precedence than the associated normal
 * version, and longer identifier lists with matching prefix rank higher.
 */
const comparePrerelease = (
  aPrerelease: readonly (number | string)[] | null,
  bPrerelease: readonly (number | string)[] | null
): number => {
  if (!(aPrerelease || bPrerelease)) return 0;
  if (!aPrerelease) return 1;
  if (!bPrerelease) return -1;

  const len = Math.max(aPrerelease.length, bPrerelease.length);
  for (let i = 0; i < len; i++) {
    const aPart = aPrerelease[i];
    const bPart = bPrerelease[i];
    if (aPart === undefined) return -1;
    if (bPart === undefined) return 1;
    const diff = comparePrereleaseIdentifier(aPart, bPart);
    if (diff !== 0) return diff;
  }

  return 0;
};

/**
 * Compare two semver version strings using SemVer 2.0.0 precedence:
 * - MAJOR.MINOR.PATCH compared numerically
 * - Stable release > prerelease when core is equal
 * - Numeric prerelease identifiers compare numerically
 * - Alphanumeric prerelease identifiers compare by ASCII byte order
 * - Build metadata is ignored for precedence
 *
 * Returns a positive number if a > b, negative if a < b, 0 if equal.
 */
export const compareVersions = (a: string, b: string): number => {
  const aSemver = parseSemver(a);
  const bSemver = parseSemver(b);
  const coreDiff = compareCoreVersions(aSemver.core, bSemver.core);
  if (coreDiff !== 0) return coreDiff;
  return comparePrerelease(aSemver.prerelease, bSemver.prerelease);
};

/**
 * Find the highest version among all tools in a toolkit.
 * Returns null when no tool carries a usable version.
 */
export const getHighestVersion = (
  tools: readonly ToolDefinition[]
): string | null => {
  let best: string | null = null;
  for (const tool of tools) {
    const version = extractVersion(tool.fullyQualifiedName);
    if (best === null || compareVersions(version, best) > 0) {
      best = version;
    }
  }
  return best;
};

/**
 * Keep only tools whose @version is semver-equivalent to the highest
 * version for their toolkit. If all tools share the highest version
 * (the common case), returns the original array unchanged.
 *
 * Tools are compared via `compareVersions`, so build metadata is
 * ignored when deciding equivalence — a tool at `@1.0.0+build.1`
 * survives alongside `@1.0.0` instead of being silently dropped.
 */
export const filterToolsByHighestVersion = (
  tools: readonly ToolDefinition[]
): readonly ToolDefinition[] => {
  const highest = getHighestVersion(tools);
  if (highest === null) {
    return tools;
  }

  const allSame = tools.every(
    (t) => compareVersions(extractVersion(t.fullyQualifiedName), highest) === 0
  );
  if (allSame) {
    return tools;
  }

  return tools.filter(
    (t) => compareVersions(extractVersion(t.fullyQualifiedName), highest) === 0
  );
};
