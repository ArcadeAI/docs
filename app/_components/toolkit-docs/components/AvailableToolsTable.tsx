"use client";

import { Check, KeyRound } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { SCROLLING_CELL } from "../constants";
import type { AvailableToolsTableProps, SecretType } from "../types";
import { normalizeScopes } from "./scopes-display";

/**
 * A cell content wrapper that auto-scrolls on hover when content overflows.
 * Scroll duration is proportional to content length.
 * Only scrolls when this specific cell is hovered, with a delay.
 */
function ScrollingCell({
  children,
  className = "",
  pixelsPerSecond = SCROLLING_CELL.pixelsPerSecond,
  delay = SCROLLING_CELL.delayMs,
}: {
  children: React.ReactNode;
  className?: string;
  pixelsPerSecond?: number;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [duration, setDuration] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const overflow = contentWidth - containerWidth;
        setIsOverflowing(overflow > 0);
        setScrollOffset(overflow + SCROLLING_CELL.extraPadding);
        // Calculate duration based on scroll distance
        setDuration(
          Math.max(
            SCROLLING_CELL.minDurationMs,
            ((overflow + SCROLLING_CELL.extraPadding) / pixelsPerSecond) * 1000
          )
        );
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [pixelsPerSecond]);

  const handleMouseEnter = () => {
    if (isOverflowing) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(true);
      }, delay);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(false);
  };

  useEffect(
    () => () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    },
    []
  );

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div
        className="whitespace-nowrap ease-linear"
        ref={contentRef}
        style={
          isOverflowing
            ? ({
                transform: isHovered
                  ? `translateX(-${scrollOffset}px)`
                  : "translateX(0)",
                transitionProperty: "transform",
                transitionDuration: `${isHovered ? duration : SCROLLING_CELL.returnDurationMs}ms`,
              } as React.CSSProperties)
            : undefined
        }
      >
        {children}
      </div>
      {isOverflowing && (
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-dark/80 to-transparent transition-opacity ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
    </div>
  );
}

export function toToolAnchorId(value: string): string {
  return value.toLowerCase().replace(/\s+/g, "-").replace(".", "");
}

export type AvailableToolsFilter =
  | "all"
  | "has_scopes"
  | "no_scopes"
  | "has_secrets"
  | "no_secrets";

export type AvailableToolsSort =
  | "name_asc"
  | "name_desc"
  | "scopes_first"
  | "secrets_first"
  | "selected_first";

type SecretDisplayItem = {
  label: string;
  href?: string;
};

const DEFAULT_SECRET_LABELS: Record<SecretType, string> = {
  api_key: "API key",
  token: "Token",
  client_secret: "Client secret",
  webhook_secret: "Webhook secret",
  private_key: "Private key",
  password: "Password",
  unknown: "Unknown",
};

function normalizeBaseUrl(baseUrl?: string): string | undefined {
  if (!baseUrl) {
    return;
  }
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

export function buildSecretDisplayItems(
  tool: AvailableToolsTableProps["tools"][number],
  options?: Pick<
    AvailableToolsTableProps,
    "secretsDisplay" | "secretTypeLabels" | "secretTypeDocsBaseUrl"
  >
): SecretDisplayItem[] {
  const displayMode = options?.secretsDisplay ?? "summary";
  const secretsInfo = tool.secretsInfo ?? [];
  const secrets = tool.secrets ?? [];
  const secretTypeLabels = {
    ...DEFAULT_SECRET_LABELS,
    ...options?.secretTypeLabels,
  };
  const baseUrl = normalizeBaseUrl(options?.secretTypeDocsBaseUrl);

  if (displayMode === "names") {
    return secrets.map((secret) => ({ label: secret }));
  }

  if (
    displayMode === "types" ||
    (displayMode === "summary" && secretsInfo.length > 0)
  ) {
    const uniqueTypes = Array.from(
      new Set(secretsInfo.map((secret) => secret.type))
    );

    return uniqueTypes.map((type) => ({
      label: secretTypeLabels[type] ?? "Unknown",
      href: baseUrl ? `${baseUrl}/${type}` : undefined,
    }));
  }

  return secrets.map((secret) => ({ label: secret }));
}

export function buildScopeDisplayItems(scopes: string[]): string[] {
  return normalizeScopes(scopes);
}

export function sortTools(
  tools: AvailableToolsTableProps["tools"],
  sort: AvailableToolsSort,
  selectedTools?: Set<string>
): AvailableToolsTableProps["tools"] {
  const sorted = [...tools];

  const countSecrets = (tool: (typeof tools)[number]): number => {
    const names = [
      ...(tool.secrets ?? []),
      ...(tool.secretsInfo ?? []).map((secret) => secret.name),
    ];
    return new Set(names).size;
  };

  switch (sort) {
    case "name_asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name_desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "scopes_first":
      return sorted.sort((a, b) => {
        const aScopes = (a.scopes ?? []).length;
        const bScopes = (b.scopes ?? []).length;
        if (aScopes !== bScopes) {
          return bScopes - aScopes;
        }
        return a.name.localeCompare(b.name);
      });
    case "secrets_first":
      return sorted.sort((a, b) => {
        const aSecrets = countSecrets(a);
        const bSecrets = countSecrets(b);
        if (aSecrets !== bSecrets) {
          return bSecrets - aSecrets;
        }
        return a.name.localeCompare(b.name);
      });
    case "selected_first":
      return sorted.sort((a, b) => {
        const aSelected = selectedTools?.has(a.name) ? 1 : 0;
        const bSelected = selectedTools?.has(b.name) ? 1 : 0;
        if (aSelected !== bSelected) {
          return bSelected - aSelected;
        }
        return a.name.localeCompare(b.name);
      });
    default:
      return sorted;
  }
}

export function filterTools(
  tools: AvailableToolsTableProps["tools"],
  query: string,
  filter: AvailableToolsFilter,
  selectedScopes: string[]
): AvailableToolsTableProps["tools"] {
  const normalizedQuery = query.trim().toLowerCase();

  return tools.filter((tool) => {
    const haystack = [tool.name, tool.qualifiedName, tool.description ?? ""]
      .join(" ")
      .toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 || haystack.includes(normalizedQuery);

    if (!matchesQuery) {
      return false;
    }

    const toolScopes = buildScopeDisplayItems(tool.scopes ?? []);
    const hasScopes = toolScopes.length > 0;
    const hasSecrets =
      (tool.secretsInfo?.length ?? 0) > 0 || (tool.secrets?.length ?? 0) > 0;

    const matchesScopes =
      selectedScopes.length === 0 ||
      selectedScopes.some((scope) => toolScopes.includes(scope));

    if (!matchesScopes) {
      return false;
    }

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
  });
}

function truncateItems(items: string[], maxItems: number) {
  if (items.length <= maxItems) {
    return { visibleItems: items, remainingCount: 0 };
  }
  return {
    visibleItems: items.slice(0, maxItems),
    remainingCount: items.length - maxItems,
  };
}

/**
 * AvailableToolsTable
 *
 * Renders a table of tools with clickable rows.
 */
export function AvailableToolsTable({
  tools,
  secretsColumnLabel = "Secrets",
  secretsDisplay = "summary",
  secretTypeLabels,
  secretTypeDocsBaseUrl,
  enableSearch = true,
  enableFilters = true,
  enableScopeFilter = true,
  searchPlaceholder = "Search tools...",
  filterLabel = "Filter",
  scopeFilterLabel = "Filter by scope",
  scopeFilterDescription = "Select scopes to narrow the tool list.",
  defaultFilter = "all",
  selectedTools,
  onToggleSelection,
  showSelection = false,
}: AvailableToolsTableProps) {
  if (!tools || tools.length === 0) {
    return (
      <p className="my-3 text-muted-foreground text-sm">No tools available.</p>
    );
  }

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<AvailableToolsFilter>(defaultFilter);
  const [sort, setSort] = useState<AvailableToolsSort>("name_asc");
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);

  const _availableScopes = useMemo(() => {
    const allScopes = tools.flatMap((tool) =>
      buildScopeDisplayItems(tool.scopes ?? [])
    );
    return Array.from(new Set(allScopes)).sort();
  }, [tools]);

  const filteredTools = useMemo(() => {
    const filtered = filterTools(tools, query, filter, selectedScopes);
    return sortTools(filtered, sort, selectedTools);
  }, [tools, query, filter, selectedScopes, sort, selectedTools]);

  const _toggleScope = (scope: string) => {
    setSelectedScopes((current) => {
      if (current.includes(scope)) {
        return current.filter((item) => item !== scope);
      }
      return [...current, scope];
    });
  };

  const _clearScopes = () => {
    setSelectedScopes([]);
  };

  return (
    <div className="mt-6 space-y-4">
      {(enableSearch || enableFilters) && (
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-neutral-dark-high/50 bg-neutral-dark/30 p-3">
          {enableSearch && (
            <div className="relative flex-1">
              <svg
                className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                className="w-full rounded-lg border border-neutral-dark-high bg-neutral-dark/60 py-2.5 pr-4 pl-10 text-sm transition-colors focus:border-brand-accent focus:outline-none"
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                type="search"
                value={query}
              />
            </div>
          )}
          {enableFilters && (
            <select
              aria-label={filterLabel}
              className="rounded-lg border border-neutral-dark-high bg-neutral-dark/60 px-3 py-2.5 text-sm transition-colors focus:border-brand-accent focus:outline-none"
              onChange={(event) =>
                setFilter(event.target.value as AvailableToolsFilter)
              }
              value={filter}
            >
              <option value="all">All tools</option>
              <option value="has_secrets">Has secrets</option>
              <option value="no_secrets">No secrets</option>
            </select>
          )}
          <select
            aria-label="Sort by"
            className="rounded-lg border border-neutral-dark-high bg-neutral-dark/60 px-3 py-2.5 text-sm transition-colors focus:border-brand-accent focus:outline-none"
            onChange={(event) =>
              setSort(event.target.value as AvailableToolsSort)
            }
            value={sort}
          >
            <option value="name_asc">Name A-Z</option>
            <option value="name_desc">Name Z-A</option>
            <option value="secrets_first">Requires secrets first</option>
            {showSelection && (
              <option value="selected_first">Selected first</option>
            )}
          </select>
          <span className="whitespace-nowrap rounded-full bg-neutral-dark-medium px-3 py-1 text-muted-foreground text-xs">
            {filteredTools.length} of {tools.length}
          </span>
        </div>
      )}
      {filteredTools.length === 0 ? (
        <div className="rounded-lg border border-neutral-dark-high/50 bg-neutral-dark/20 p-8 text-center">
          <p className="text-muted-foreground">No tools match your search.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-neutral-dark-high/50 shadow-sm">
          <div className="relative overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-neutral-dark to-neutral-dark/80">
                  {showSelection && (
                    <th className="sticky left-0 z-10 w-[50px] bg-neutral-dark px-3 py-3 text-center font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider">
                      <Check className="mx-auto h-3.5 w-3.5" />
                    </th>
                  )}
                  <th className="w-[200px] min-w-[180px] px-4 py-3 text-left font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider">
                    Tool name
                  </th>
                  <th className="min-w-[200px] px-4 py-3 text-left font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider">
                    Description
                  </th>
                  <th className="w-[120px] min-w-[100px] px-4 py-3 text-left font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1.5">
                      <KeyRound className="h-3.5 w-3.5" />
                      {secretsColumnLabel}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-dark-high/30">
                {filteredTools.map((tool, index) => {
                  const scopes = buildScopeDisplayItems(tool.scopes ?? []);
                  const { visibleItems, remainingCount } = truncateItems(
                    scopes,
                    2
                  );
                  const secretItems = buildSecretDisplayItems(tool, {
                    secretsDisplay,
                    secretTypeLabels,
                    secretTypeDocsBaseUrl,
                  });
                  const isSelected = selectedTools?.has(tool.name) ?? false;
                  const rowBg = isSelected
                    ? "bg-brand-accent/10"
                    : index % 2 === 0
                      ? "bg-neutral-dark/20"
                      : "bg-neutral-dark/5";

                  return (
                    <tr
                      className={`group cursor-pointer transition-colors hover:bg-brand-accent/5 ${rowBg}`}
                      key={tool.qualifiedName}
                      onClick={() => {
                        window.location.hash = `#${toToolAnchorId(tool.qualifiedName)}`;
                      }}
                    >
                      {showSelection && (
                        <td
                          className={`sticky left-0 z-10 px-3 py-3.5 text-center ${
                            isSelected
                              ? "bg-brand-accent/10"
                              : index % 2 === 0
                                ? "bg-neutral-dark/95"
                                : "bg-neutral-dark/90"
                          } group-hover:bg-brand-accent/10`}
                        >
                          <button
                            className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
                              isSelected
                                ? "border-brand-accent bg-brand-accent text-white"
                                : "border-neutral-dark-high bg-neutral-dark/40 hover:border-brand-accent/50"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleSelection?.(tool.name);
                            }}
                            title={isSelected ? "Deselect tool" : "Select tool"}
                            type="button"
                          >
                            {isSelected && <Check className="h-3 w-3" />}
                          </button>
                        </td>
                      )}
                      <td className="max-w-[200px] px-4 py-3.5">
                        <ScrollingCell>
                          <a
                            className="font-medium text-brand-accent no-underline transition-colors group-hover:text-brand-accent/80"
                            href={`#${toToolAnchorId(tool.qualifiedName)}`}
                          >
                            {tool.qualifiedName}
                          </a>
                        </ScrollingCell>
                      </td>
                      <td className="max-w-[300px] px-4 py-3.5 text-sm text-text-color/80">
                        <ScrollingCell>
                          <span>
                            {tool.description ?? "No description provided."}
                          </span>
                        </ScrollingCell>
                      </td>
                      <td className="px-4 py-3.5">
                        {secretItems.length === 0 ? (
                          <span className="text-muted-foreground/60 text-xs">
                            —
                          </span>
                        ) : (
                          <div className="flex flex-col gap-1">
                            {secretItems.map((item) =>
                              item.href ? (
                                <a
                                  className="text-red-300 hover:underline"
                                  href={item.href}
                                  key={item.label}
                                >
                                  <code className="block rounded-md border border-red-400/30 bg-red-500/10 px-2 py-1 text-xs">
                                    {item.label}
                                  </code>
                                </a>
                              ) : (
                                <code
                                  className="block rounded-md border border-red-400/30 bg-red-500/10 px-2 py-1 text-red-300 text-xs"
                                  key={item.label}
                                >
                                  {item.label}
                                </code>
                              )
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default AvailableToolsTable;
