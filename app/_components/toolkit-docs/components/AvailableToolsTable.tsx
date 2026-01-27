"use client";

import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  KeyRound,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { SCROLLING_CELL } from "../constants";
import type { AvailableToolsTableProps, SecretType } from "../types";
import { normalizeScopes } from "./scopes-display";

const DEFAULT_PAGE_SIZE = 25;
const PAGE_SIZE_OPTIONS = [25, 50, 100, 200] as const;

/**
 * Custom styled select dropdown with chevron indicator.
 */
function StyledSelect({
  "aria-label": ariaLabel,
  value,
  onChange,
  children,
  className = "",
}: {
  "aria-label": string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <select
        aria-label={ariaLabel}
        className="w-full appearance-none rounded-lg border border-neutral-dark-high bg-neutral-dark/60 py-2.5 pr-9 pl-3 text-sm transition-colors focus:border-brand-accent focus:outline-none"
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}

/**
 * Pagination controls with First, Prev, Next, Last buttons.
 */
function PaginationControls({
  page,
  pageCount,
  onPageChange,
  itemsShowing,
  totalItems,
  size = "md",
}: {
  page: number;
  pageCount: number;
  onPageChange: (newPage: number) => void;
  itemsShowing: number;
  totalItems: number;
  size?: "sm" | "md";
}) {
  if (pageCount <= 1) {
    return null;
  }

  const buttonClass =
    size === "sm"
      ? "rounded-md border border-neutral-dark-high bg-neutral-dark/60 p-1.5 text-muted-foreground transition-colors hover:bg-neutral-dark hover:text-text-color disabled:cursor-not-allowed disabled:opacity-40"
      : "rounded-md border border-neutral-dark-high bg-neutral-dark/60 p-2 text-muted-foreground transition-colors hover:bg-neutral-dark hover:text-text-color disabled:cursor-not-allowed disabled:opacity-40";

  const iconClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const textClass = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="First page"
        className={buttonClass}
        disabled={page <= 1}
        onClick={() => onPageChange(1)}
        title="First page"
        type="button"
      >
        <ChevronsLeft className={iconClass} />
      </button>
      <button
        aria-label="Previous page"
        className={buttonClass}
        disabled={page <= 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        title="Previous page"
        type="button"
      >
        <ChevronLeft className={iconClass} />
      </button>
      <span
        className={`whitespace-nowrap px-2 text-muted-foreground ${textClass}`}
      >
        Page {page} of {pageCount}
      </span>
      <button
        aria-label="Next page"
        className={buttonClass}
        disabled={page >= pageCount}
        onClick={() => onPageChange(Math.min(pageCount, page + 1))}
        title="Next page"
        type="button"
      >
        <ChevronRight className={iconClass} />
      </button>
      <button
        aria-label="Last page"
        className={buttonClass}
        disabled={page >= pageCount}
        onClick={() => onPageChange(pageCount)}
        title="Last page"
        type="button"
      >
        <ChevronsRight className={iconClass} />
      </button>
      <span
        className={`whitespace-nowrap text-muted-foreground/70 ${textClass}`}
      >
        ({itemsShowing} of {totalItems})
      </span>
    </div>
  );
}

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
    // biome-ignore lint/a11y/noStaticElementInteractions: hover-only affordance for overflowing text.
    // biome-ignore lint/a11y/noNoninteractiveElementInteractions: hover-only affordance for overflowing text.
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

export function handleSelectionButtonClick(
  event: { stopPropagation: () => void },
  onToggleSelection: AvailableToolsTableProps["onToggleSelection"],
  toolName: string
): void {
  event.stopPropagation();
  onToggleSelection?.(toolName);
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
  enableScopeFilter: _enableScopeFilter = true,
  searchPlaceholder = "Search tools...",
  filterLabel = "Filter",
  scopeFilterLabel: _scopeFilterLabel = "Filter by scope",
  scopeFilterDescription:
    _scopeFilterDescription = "Select scopes to narrow the tool list.",
  defaultFilter = "all",
  selectedTools,
  onToggleSelection,
  showSelection = false,
}: AvailableToolsTableProps) {
  const safeTools = tools ?? [];
  const hasTools = safeTools.length > 0;

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<AvailableToolsFilter>(defaultFilter);
  const [sort, setSort] = useState<AvailableToolsSort>("name_asc");
  const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [page, setPage] = useState<number>(1);

  const _availableScopes = useMemo(() => {
    const allScopes = safeTools.flatMap((tool) =>
      buildScopeDisplayItems(tool.scopes ?? [])
    );
    return Array.from(new Set(allScopes)).sort();
  }, [safeTools]);

  const filteredTools = useMemo(() => {
    const filtered = filterTools(safeTools, query, filter, selectedScopes);
    return sortTools(filtered, sort, selectedTools);
  }, [safeTools, query, filter, selectedScopes, sort, selectedTools]);

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(filteredTools.length / pageSize)),
    [filteredTools.length, pageSize]
  );

  // Clamp page when result set shrinks.
  useEffect(() => {
    setPage((current) => Math.min(Math.max(1, current), pageCount));
  }, [pageCount]);

  const pagedTools = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filteredTools.slice(start, end);
  }, [filteredTools, page, pageSize]);

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

  if (!hasTools) {
    return (
      <p className="my-3 text-muted-foreground text-sm">No tools available.</p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {(enableSearch || enableFilters) && (
        <div className="flex flex-wrap items-center gap-3 rounded-lg border border-neutral-dark-high/50 bg-neutral-dark/30 p-3">
          {enableSearch && (
            <div className="relative flex-1">
              <svg
                aria-hidden="true"
                className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                fill="none"
                focusable="false"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                className="w-full rounded-lg border border-neutral-dark-high bg-neutral-dark/60 py-2.5 pr-4 pl-10 text-sm transition-colors focus:border-brand-accent focus:outline-none"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder={searchPlaceholder}
                type="search"
                value={query}
              />
            </div>
          )}
          {enableFilters && (
            <StyledSelect
              aria-label={filterLabel}
              onChange={(event) => {
                setFilter(event.target.value as AvailableToolsFilter);
                setPage(1);
              }}
              value={filter}
            >
              <option value="all">All tools</option>
              <option value="has_secrets">Requires secrets only</option>
              <option value="no_secrets">No secrets required</option>
            </StyledSelect>
          )}
          <StyledSelect
            aria-label="Rows per page"
            onChange={(event) => {
              setPageSize(Number(event.target.value));
              setPage(1);
            }}
            value={pageSize}
          >
            {PAGE_SIZE_OPTIONS.map((size) => (
              <option key={size} value={size}>
                {size} / page
              </option>
            ))}
          </StyledSelect>
          <StyledSelect
            aria-label="Sort by"
            onChange={(event) => {
              setSort(event.target.value as AvailableToolsSort);
              setPage(1);
            }}
            value={sort}
          >
            <option value="name_asc">Name A-Z</option>
            <option value="name_desc">Name Z-A</option>
            <option value="secrets_first">Requires secrets first</option>
            {showSelection && (
              <option value="selected_first">Selected first</option>
            )}
          </StyledSelect>
          <span className="whitespace-nowrap rounded-full bg-neutral-dark-medium px-3 py-1 text-muted-foreground text-xs">
            {filteredTools.length} of {safeTools.length}
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
                {pagedTools.map((tool, index) => {
                  const secretItems = buildSecretDisplayItems(tool, {
                    secretsDisplay,
                    secretTypeLabels,
                    secretTypeDocsBaseUrl,
                  });
                  const isSelected = selectedTools?.has(tool.name) ?? false;
                  let rowBg = "bg-neutral-dark/5";
                  if (isSelected) {
                    rowBg = "bg-brand-accent/10";
                  } else if (index % 2 === 0) {
                    rowBg = "bg-neutral-dark/20";
                  }

                  let selectionCellBg = "bg-neutral-dark/90";
                  if (isSelected) {
                    selectionCellBg = "bg-brand-accent/10";
                  } else if (index % 2 === 0) {
                    selectionCellBg = "bg-neutral-dark/95";
                  }

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
                          className={`relative sticky left-0 z-10 p-0 text-center ${selectionCellBg} group-hover:bg-brand-accent/10`}
                        >
                          <button
                            aria-label={
                              isSelected ? "Deselect tool" : "Select tool"
                            }
                            className="absolute inset-0 flex items-center justify-center"
                            onClick={(e) => {
                              handleSelectionButtonClick(
                                e,
                                onToggleSelection,
                                tool.name
                              );
                            }}
                            title={isSelected ? "Deselect tool" : "Select tool"}
                            type="button"
                          >
                            <span
                              className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
                                isSelected
                                  ? "border-brand-accent bg-brand-accent text-white"
                                  : "border-neutral-dark-high bg-neutral-dark/40 hover:border-brand-accent/50"
                              }`}
                            >
                              {isSelected && <Check className="h-3 w-3" />}
                            </span>
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
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-2.5 py-1 text-amber-300 text-xs">
                            <KeyRound className="h-3 w-3" />
                            {secretItems.length}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* Pagination bar below the table */}
          {pageCount > 1 && (
            <div className="flex items-center justify-center border-neutral-dark-high/30 border-t bg-neutral-dark/20 px-4 py-3">
              <PaginationControls
                itemsShowing={pagedTools.length}
                onPageChange={setPage}
                page={page}
                pageCount={pageCount}
                totalItems={filteredTools.length}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AvailableToolsTable;
