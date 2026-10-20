import type { AvailableToolsTableProps, BehaviorFlagKey } from "../types";
import { normalizeScopes } from "./scopes-display";

export type AvailableToolsFilter =
  | "all"
  | "has_scopes"
  | "no_scopes"
  | "has_secrets"
  | "no_secrets";

export type FilterToolsOptions = {
  activeOperations?: Set<string>;
  behaviorFlags?: Partial<Record<BehaviorFlagKey, boolean>>;
};

function buildScopeDisplayItems(scopes: string[]): string[] {
  return normalizeScopes(scopes);
}

function matchesFilterCategory(
  tool: AvailableToolsTableProps["tools"][number],
  filter: AvailableToolsFilter
): boolean {
  const hasScopes = buildScopeDisplayItems(tool.scopes ?? []).length > 0;
  const hasSecrets =
    (tool.secretsInfo?.length ?? 0) > 0 || (tool.secrets?.length ?? 0) > 0;

  switch (filter) {
    case "has_scopes":
      return hasScopes;
    case "no_scopes":
      return !hasScopes;
    case "has_secrets":
      return hasSecrets;
    case "no_secrets":
      return !hasSecrets;
    default:
      return true;
  }
}

function matchesOperations(
  tool: AvailableToolsTableProps["tools"][number],
  activeOperations: Set<string>
): boolean {
  if (activeOperations.size === 0) {
    return true;
  }
  const toolOps = tool.metadata?.behavior?.operations ?? [];
  return toolOps.some((op) => activeOperations.has(op));
}

function matchesBehaviorFlags(
  tool: AvailableToolsTableProps["tools"][number],
  behaviorFlags: Partial<Record<BehaviorFlagKey, boolean>>
): boolean {
  for (const [key, expected] of Object.entries(behaviorFlags) as [
    BehaviorFlagKey,
    boolean | undefined,
  ][]) {
    if (expected === undefined) {
      continue;
    }
    if (tool.metadata?.behavior?.[key] !== expected) {
      return false;
    }
  }
  return true;
}

export function filterTools(
  tools: AvailableToolsTableProps["tools"],
  query: string,
  filter: AvailableToolsFilter,
  options: FilterToolsOptions = {}
): AvailableToolsTableProps["tools"] {
  const { activeOperations = new Set(), behaviorFlags = {} } = options;
  const normalizedQuery = query.trim().toLowerCase();

  return tools.filter((tool) => {
    const haystack = [tool.name, tool.qualifiedName, tool.description ?? ""]
      .join(" ")
      .toLowerCase();
    if (normalizedQuery.length > 0 && !haystack.includes(normalizedQuery)) {
      return false;
    }
    if (!matchesFilterCategory(tool, filter)) {
      return false;
    }
    if (!matchesOperations(tool, activeOperations)) {
      return false;
    }
    return matchesBehaviorFlags(tool, behaviorFlags);
  });
}
