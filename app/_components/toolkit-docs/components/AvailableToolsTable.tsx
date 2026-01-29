"use client";

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@arcadeai/design-system";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  KeyRound,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import { SCROLLING_CELL } from "../constants";
import type { AvailableToolsTableProps, SecretType } from "../types";
import { normalizeScopes } from "./scopes-display";

const DEFAULT_PAGE_SIZE = 25;
const PAGE_SIZE_OPTIONS = [25, 50, 100, 200] as const;

/**
 * Pagination controls with First, Prev, Next, Last buttons.
 */
function PaginationControls({
  page,
  pageCount,
  onPageChange,
  itemsShowing,
  totalItems,
  size = "default",
}: {
  page: number;
  pageCount: number;
  onPageChange: (newPage: number) => void;
  itemsShowing: number;
  totalItems: number;
  size?: "sm" | "default";
}) {
  if (pageCount <= 1) {
    return null;
  }

  const buttonSize = size === "sm" ? "sm" : "default";
  const iconClass = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";
  const textClass = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="flex items-center gap-2">
      <Button
        aria-label="First page"
        disabled={page <= 1}
        onClick={() => onPageChange(1)}
        size={buttonSize}
        title="First page"
        variant="outline"
      >
        <ChevronsLeft className={iconClass} />
      </Button>
      <Button
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        size={buttonSize}
        title="Previous page"
        variant="outline"
      >
        <ChevronLeft className={iconClass} />
      </Button>
      <span
        className={`whitespace-nowrap px-2 text-muted-foreground ${textClass}`}
      >
        Page {page} of {pageCount}
      </span>
      <Button
        aria-label="Next page"
        disabled={page >= pageCount}
        onClick={() => onPageChange(Math.min(pageCount, page + 1))}
        size={buttonSize}
        title="Next page"
        variant="outline"
      >
        <ChevronRight className={iconClass} />
      </Button>
      <Button
        aria-label="Last page"
        disabled={page >= pageCount}
        onClick={() => onPageChange(pageCount)}
        size={buttonSize}
        title="Last page"
        variant="outline"
      >
        <ChevronsRight className={iconClass} />
      </Button>
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
  return value.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
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

const getRowBackground = (isSelected: boolean, index: number): string => {
  if (isSelected) {
    return "bg-brand-accent/10";
  }
  return index % 2 === 0
    ? "bg-muted/30 dark:bg-neutral-dark/40"
    : "bg-transparent";
};

const getSelectionCellBackground = (
  isSelected: boolean,
  index: number
): string => {
  if (isSelected) {
    return "bg-brand-accent/10";
  }
  return index % 2 === 0
    ? "bg-muted/30 dark:bg-neutral-dark/95"
    : "bg-background dark:bg-neutral-dark/90";
};

const getSelectionLabel = (isSelected: boolean): string =>
  isSelected ? "Deselect tool" : "Select tool";

type AvailableToolsRowProps = {
  tool: AvailableToolsTableProps["tools"][number];
  index: number;
  showSelection: boolean;
  selectedTools?: Set<string>;
  onToggleSelection?: AvailableToolsTableProps["onToggleSelection"];
  secretsDisplay?: AvailableToolsTableProps["secretsDisplay"];
  secretTypeLabels?: AvailableToolsTableProps["secretTypeLabels"];
  secretTypeDocsBaseUrl?: AvailableToolsTableProps["secretTypeDocsBaseUrl"];
};

function SelectionCell({
  isSelected,
  selectionCellBg,
  toolName,
  onToggleSelection,
}: {
  isSelected: boolean;
  selectionCellBg: string;
  toolName: string;
  onToggleSelection?: AvailableToolsTableProps["onToggleSelection"];
}) {
  return (
    <td
      className={`relative sticky left-0 z-10 p-0 text-center ${selectionCellBg} group-hover:bg-brand-accent/10`}
    >
      <Button
        aria-label={getSelectionLabel(isSelected)}
        className="absolute inset-0 h-full w-full rounded-none"
        onClick={(event) => {
          handleSelectionButtonClick(event, onToggleSelection, toolName);
        }}
        size="sm"
        title={getSelectionLabel(isSelected)}
        variant="ghost"
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
      </Button>
    </td>
  );
}

function SecretsCell({ secretCount }: { secretCount: number }) {
  if (secretCount === 0) {
    return (
      <span aria-hidden="true" className="text-muted-foreground/60 text-xs">
        —
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-amber-300 text-xs">
      <KeyRound className="h-3 w-3" />
      {secretCount}
    </span>
  );
}

function AvailableToolsRow({
  tool,
  index,
  showSelection,
  selectedTools,
  onToggleSelection,
  secretsDisplay,
  secretTypeLabels,
  secretTypeDocsBaseUrl,
}: AvailableToolsRowProps) {
  const secretItems = buildSecretDisplayItems(tool, {
    secretsDisplay,
    secretTypeLabels,
    secretTypeDocsBaseUrl,
  });
  const isSelected = selectedTools?.has(tool.name) ?? false;
  const rowBg = getRowBackground(isSelected, index);
  const selectionCellBg = getSelectionCellBackground(isSelected, index);
  return (
    <tr
      className={`group cursor-pointer transition-colors duration-150 hover:bg-muted/50 dark:hover:bg-brand-accent/5 ${rowBg}`}
      key={tool.qualifiedName}
      onClick={() => {
        window.location.hash = `#${toToolAnchorId(tool.qualifiedName)}`;
      }}
    >
      {showSelection && (
        <SelectionCell
          isSelected={isSelected}
          onToggleSelection={onToggleSelection}
          selectionCellBg={selectionCellBg}
          toolName={tool.name}
        />
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
      <td className="max-w-[300px] px-4 py-3.5 text-sm text-foreground">
        <ScrollingCell>
          <span>{tool.description ?? "No description provided."}</span>
        </ScrollingCell>
      </td>
      <td className="px-4 py-3.5">
        <SecretsCell secretCount={secretItems.length} />
      </td>
    </tr>
  );
}

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
  searchPlaceholder = "Search tools...",
  filterLabel = "Filter",
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
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [page, setPage] = useState<number>(1);
  const selectedScopes: string[] = [];

  const filteredTools = useMemo(() => {
    const filtered = filterTools(safeTools, query, filter, selectedScopes);
    return sortTools(filtered, sort, selectedTools);
  }, [safeTools, query, filter, sort, selectedTools]);

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

  if (!hasTools) {
    return (
      <p className="my-3 text-muted-foreground text-sm">No tools available.</p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {(enableSearch || enableFilters) && (
        <div className="flex flex-wrap items-center gap-3 rounded-lg bg-neutral-dark/20 p-3">
          {enableSearch && (
            <div className="relative w-full flex-1 sm:min-w-[200px] sm:max-w-md">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pr-9 pl-9"
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder={searchPlaceholder}
                type="text"
                value={query}
              />
              {query && (
                <Button
                  aria-label="Clear search"
                  className="absolute top-1/2 right-3 h-auto -translate-y-1/2 p-0"
                  onClick={() => setQuery("")}
                  size="sm"
                  variant="ghost"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
          {enableFilters && (
            <Select
              onValueChange={(value) => {
                setFilter(value as AvailableToolsFilter);
                setPage(1);
              }}
              value={filter}
            >
              <SelectTrigger
                aria-label={filterLabel}
                className="h-9 w-full sm:w-[180px] border-muted/60 text-sm hover:border-muted"
              >
                <SelectValue placeholder={filterLabel} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All tools</SelectItem>
                <SelectItem value="has_secrets">
                  Requires secrets only
                </SelectItem>
                <SelectItem value="no_secrets">No secrets required</SelectItem>
              </SelectContent>
            </Select>
          )}
          <Select
            onValueChange={(value) => {
              setPageSize(Number(value));
              setPage(1);
            }}
            value={String(pageSize)}
          >
            <SelectTrigger
              aria-label="Rows per page"
              className="h-9 w-full sm:w-[140px] border-muted/60 text-sm hover:border-muted"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PAGE_SIZE_OPTIONS.map((size) => (
                <SelectItem key={size} value={String(size)}>
                  {size} / page
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            onValueChange={(value) => {
              setSort(value as AvailableToolsSort);
              setPage(1);
            }}
            value={sort}
          >
            <SelectTrigger
              aria-label="Sort by"
              className="h-9 w-full sm:w-[180px] border-muted/60 text-sm hover:border-muted"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name_asc">Name A-Z</SelectItem>
              <SelectItem value="name_desc">Name Z-A</SelectItem>
              <SelectItem value="secrets_first">
                Requires secrets first
              </SelectItem>
              {showSelection && (
                <SelectItem value="selected_first">Selected first</SelectItem>
              )}
            </SelectContent>
          </Select>
          <span className="text-muted-foreground text-sm">
            <span className="font-medium text-foreground">
              {filteredTools.length}
            </span>{" "}
            of {safeTools.length}
          </span>
        </div>
      )}
      {filteredTools.length === 0 ? (
        <div className="rounded-lg bg-neutral-dark/20 p-8 text-center">
          <p className="text-muted-foreground">No tools match your search.</p>
        </div>
      ) : (
        <div className="rounded-xl bg-neutral-dark/10">
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
                {pagedTools.map((tool, index) => (
                  <AvailableToolsRow
                    index={index}
                    key={tool.qualifiedName}
                    onToggleSelection={onToggleSelection}
                    secretsDisplay={secretsDisplay}
                    secretTypeDocsBaseUrl={secretTypeDocsBaseUrl}
                    secretTypeLabels={secretTypeLabels}
                    selectedTools={selectedTools}
                    showSelection={showSelection}
                    tool={tool}
                  />
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination bar below the table */}
          {pageCount > 1 && (
            <div className="flex items-center justify-center bg-neutral-dark/30 px-4 py-3">
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
