import type { ToolDefinition } from "../types/index.js";

/**
 * Extract version from a fully qualified tool name.
 * "Github.CreateIssue@3.1.3" → "3.1.3"
 */
const extractVersion = (fullyQualifiedName: string): string => {
  const parts = fullyQualifiedName.split("@");
  return parts[1] ?? "0.0.0";
};

/**
 * Compute the version shared by the most tools in a toolkit.
 * Ties are broken by lexicographic comparison (highest version wins).
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
    if (count > bestCount || (count === bestCount && version > bestVersion)) {
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
