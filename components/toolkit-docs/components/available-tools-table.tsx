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
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { SCROLLING_CELL } from "../constants";
import { splitEmails } from "../lib/neutralize-emails";
import type {
  AvailableToolsTableProps,
  BehaviorFlagKey,
  SecretType,
} from "../types";
import {
  type AvailableToolsFilter,
  filterTools,
} from "./available-tools-filter";
import { normalizeScopes } from "./scopes-display";

export {
  type AvailableToolsFilter,
  type FilterToolsOptions,
  filterTools,
} from "./available-tools-filter";

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
  const goToFirstPage = useCallback(() => onPageChange(1), [onPageChange]);
  const goToPreviousPage = useCallback(
    () => onPageChange(Math.max(1, page - 1)),
    [onPageChange, page]
  );
  const goToNextPage = useCallback(
    () => onPageChange(Math.min(pageCount, page + 1)),
    [onPageChange, page, pageCount]
  );
  const goToLastPage = useCallback(
    () => onPageChange(pageCount),
    [onPageChange, pageCount]
  );

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
        onClick={goToFirstPage}
        size={buttonSize}
        title="First page"
        variant="outline"
      >
        <ChevronsLeft className={iconClass} />
      </Button>
      <Button
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={goToPreviousPage}
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
        onClick={goToNextPage}
        size={buttonSize}
        title="Next page"
        variant="outline"
      >
        <ChevronRight className={iconClass} />
      </Button>
      <Button
        aria-label="Last page"
        disabled={page >= pageCount}
        onClick={goToLastPage}
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

  const handleMouseEnter = useCallback(() => {
    if (isOverflowing) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(true);
      }, delay);
    }
  }, [delay, isOverflowing]);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovered(false);
  }, []);

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
                transitionDuration: `${isHovered ? duration : SCROLLING_CELL.returnDurationMs}ms`,
                transitionProperty: "transform",
              } as React.CSSProperties)
            : undefined
        }
      >
        {children}
      </div>
      {isOverflowing ? (
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-dark/80 to-transparent transition-opacity ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
      ) : null}
    </div>
  );
}

export function toToolAnchorId(value: string): string {
  return value.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
}

export type AvailableToolsSort =
  | "name_asc"
  | "name_desc"
  | "scopes_first"
  | "secrets_first"
  | "selected_first";

const BEHAVIOR_FILTER_LABELS: Record<BehaviorFlagKey, string> = {
  destructive: "Destructive",
  idempotent: "Idempotent",
  openWorld: "Open world",
  readOnly: "Read only",
};

const BEHAVIOR_FILTER_ORDER: BehaviorFlagKey[] = [
  "readOnly",
  "destructive",
  "idempotent",
  "openWorld",
];

function formatMetadataLabel(value: string): string {
  const words = value.split("_");
  return words
    .map((word, index) => {
      if (word === "crm") {
        return "CRM";
      }
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");
}

type BehaviorFlagsState = Partial<Record<BehaviorFlagKey, boolean>>;

function getBehaviorFilterStateLabel(value: boolean | undefined): string {
  if (value === undefined) {
    return "Any";
  }
  if (value) {
    return "Yes";
  }
  return "No";
}

function getNextBehaviorFilterValue(
  value: boolean | undefined
): boolean | undefined {
  if (value === undefined) {
    return true;
  }
  if (value) {
    return false;
  }
}

function getBehaviorFilterToneClass(value: boolean | undefined): string {
  if (value === undefined) {
    return "border-muted/60 bg-neutral-dark/20 text-muted-foreground hover:bg-neutral-dark/35";
  }
  if (value) {
    return "border-emerald-500/45 bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25";
  }
  return "border-rose-500/45 bg-rose-500/15 text-rose-200 hover:bg-rose-500/25";
}

type BehaviorFlagsUpdater = (
  updater: (current: BehaviorFlagsState) => BehaviorFlagsState
) => void;

function BehaviorFilterButton({
  flagKey,
  currentValue,
  onBehaviorFlagsChange,
  onFiltersChanged,
}: {
  flagKey: BehaviorFlagKey;
  currentValue: boolean | undefined;
  onBehaviorFlagsChange: BehaviorFlagsUpdater;
  onFiltersChanged: () => void;
}) {
  const stateLabel = getBehaviorFilterStateLabel(currentValue);

  const handleClick = useCallback(() => {
    onBehaviorFlagsChange((current) => {
      const next = { ...current };
      const nextValue = getNextBehaviorFilterValue(current[flagKey]);

      if (nextValue === undefined) {
        delete next[flagKey];
      } else {
        next[flagKey] = nextValue;
      }

      return next;
    });
    onFiltersChanged();
  }, [flagKey, onBehaviorFlagsChange, onFiltersChanged]);

  return (
    <Button
      aria-label={`${BEHAVIOR_FILTER_LABELS[flagKey]} filter: ${stateLabel}`}
      className={`h-7 px-2.5 text-xs ${getBehaviorFilterToneClass(
        currentValue
      )}`}
      onClick={handleClick}
      size="sm"
      title={`${BEHAVIOR_FILTER_LABELS[flagKey]} filter. Click to cycle Any, Yes, and No.`}
      variant="outline"
    >
      {BEHAVIOR_FILTER_LABELS[flagKey]}: {stateLabel}
    </Button>
  );
}

function BehaviorFilterButtons({
  behaviorFilterKeys,
  behaviorFlags,
  onBehaviorFlagsChange,
  onFiltersChanged,
}: {
  behaviorFilterKeys: BehaviorFlagKey[];
  behaviorFlags: BehaviorFlagsState;
  onBehaviorFlagsChange: BehaviorFlagsUpdater;
  onFiltersChanged: () => void;
}) {
  return behaviorFilterKeys.map((key) => (
    <BehaviorFilterButton
      currentValue={behaviorFlags[key]}
      flagKey={key}
      key={key}
      onBehaviorFlagsChange={onBehaviorFlagsChange}
      onFiltersChanged={onFiltersChanged}
    />
  ));
}

type ActiveOperationsUpdater = (
  updater: (current: Set<string>) => Set<string>
) => void;

function OperationFilterButton({
  operation,
  isActive,
  onActiveOperationsChange,
  onFiltersChanged,
}: {
  operation: string;
  isActive: boolean;
  onActiveOperationsChange: ActiveOperationsUpdater;
  onFiltersChanged: () => void;
}) {
  const handleClick = useCallback(() => {
    onActiveOperationsChange((current) => {
      const next = new Set(current);
      if (next.has(operation)) {
        next.delete(operation);
      } else {
        next.add(operation);
      }
      return next;
    });
    onFiltersChanged();
  }, [onActiveOperationsChange, onFiltersChanged, operation]);

  return (
    <Button
      className="h-7 px-2.5 text-xs"
      onClick={handleClick}
      size="sm"
      variant={isActive ? "default" : "outline"}
    >
      {formatMetadataLabel(operation)}
    </Button>
  );
}

function MetadataFilterSection({
  operationOptions,
  activeOperations,
  onActiveOperationsChange,
  behaviorFilterKeys,
  behaviorFlags,
  onBehaviorFlagsChange,
  hasActiveMetadataFilters,
  onFiltersChanged,
}: {
  operationOptions: string[];
  activeOperations: Set<string>;
  onActiveOperationsChange: ActiveOperationsUpdater;
  behaviorFilterKeys: BehaviorFlagKey[];
  behaviorFlags: BehaviorFlagsState;
  onBehaviorFlagsChange: BehaviorFlagsUpdater;
  hasActiveMetadataFilters: boolean;
  onFiltersChanged: () => void;
}) {
  const handleClearFilters = useCallback(() => {
    onActiveOperationsChange(() => new Set());
    onBehaviorFlagsChange(() => ({}));
    onFiltersChanged();
  }, [onActiveOperationsChange, onBehaviorFlagsChange, onFiltersChanged]);

  return (
    <div className="rounded-lg bg-neutral-dark/15 p-3">
      <div className="flex flex-wrap items-start gap-3">
        {operationOptions.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground/85 text-xs uppercase tracking-wide">
              Operations
            </span>
            {operationOptions.map((operation) => (
              <OperationFilterButton
                isActive={activeOperations.has(operation)}
                key={operation}
                onActiveOperationsChange={onActiveOperationsChange}
                onFiltersChanged={onFiltersChanged}
                operation={operation}
              />
            ))}
          </div>
        ) : null}
        {behaviorFilterKeys.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground/85 text-xs uppercase tracking-wide">
              Behavior
            </span>
            <BehaviorFilterButtons
              behaviorFilterKeys={behaviorFilterKeys}
              behaviorFlags={behaviorFlags}
              onBehaviorFlagsChange={onBehaviorFlagsChange}
              onFiltersChanged={onFiltersChanged}
            />
          </div>
        ) : null}
        {hasActiveMetadataFilters ? (
          <Button
            className="h-7 px-2.5 text-xs"
            onClick={handleClearFilters}
            size="sm"
            variant="ghost"
          >
            Clear filters
          </Button>
        ) : null}
      </div>
    </div>
  );
}

interface SecretDisplayItem {
  href?: string;
  label: string;
}

const DEFAULT_SECRET_LABELS: Record<SecretType, string> = {
  api_key: "API key",
  client_secret: "Client secret",
  password: "Password",
  private_key: "Private key",
  token: "Token",
  unknown: "Unknown",
  webhook_secret: "Webhook secret",
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

// Keep checkbox clicks from bubbling to the row's navigation handler.
const stopPropagation = (event: React.SyntheticEvent): void => {
  event.stopPropagation();
};

interface AvailableToolsRowProps {
  index: number;
  onToggleSelection?: AvailableToolsTableProps["onToggleSelection"];
  secretsDisplay?: AvailableToolsTableProps["secretsDisplay"];
  secretTypeDocsBaseUrl?: AvailableToolsTableProps["secretTypeDocsBaseUrl"];
  secretTypeLabels?: AvailableToolsTableProps["secretTypeLabels"];
  selectedTools?: Set<string>;
  showSelection: boolean;
  tool: AvailableToolsTableProps["tools"][number];
}

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
  const handleChange = useCallback(() => {
    onToggleSelection?.(toolName);
  }, [onToggleSelection, toolName]);

  return (
    <td
      className={`relative sticky left-0 z-10 p-0 text-center ${selectionCellBg} group-hover:bg-brand-accent/10`}
    >
      <label className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center rounded-none">
        <input
          aria-label={getSelectionLabel(isSelected)}
          checked={isSelected}
          className="h-4 w-4 rounded border-neutral-dark-high text-brand-accent accent-brand-accent focus:ring-brand-accent"
          onChange={handleChange}
          onClick={stopPropagation}
          type="checkbox"
        />
      </label>
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
    secretTypeDocsBaseUrl,
    secretTypeLabels,
  });
  const isSelected = selectedTools?.has(tool.name) ?? false;
  const rowBg = getRowBackground(isSelected, index);
  const selectionCellBg = getSelectionCellBackground(isSelected, index);
  const anchorId = toToolAnchorId(tool.qualifiedName);
  const handleRowClick = useCallback(() => {
    window.location.hash = `#${anchorId}`;
  }, [anchorId]);
  return (
    <tr
      className={`group cursor-pointer transition-colors duration-150 hover:bg-muted/50 dark:hover:bg-brand-accent/5 ${rowBg}`}
      key={tool.qualifiedName}
      onClick={handleRowClick}
    >
      {showSelection ? (
        <SelectionCell
          isSelected={isSelected}
          onToggleSelection={onToggleSelection}
          selectionCellBg={selectionCellBg}
          toolName={tool.name}
        />
      ) : null}
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
          <span>
            {tool.description
              ? splitEmails(tool.description)
              : "No description provided."}
          </span>
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
      href: baseUrl ? `${baseUrl}/${type}` : undefined,
      label: secretTypeLabels[type] ?? "Unknown",
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

/**
 * Search box, filter/sort/page-size selects and the metadata filter row.
 * Renders nothing when both search and filters are disabled.
 */
function AvailableToolsToolbar({
  enableSearch,
  enableFilters,
  query,
  filter,
  sort,
  pageSize,
  showSelection,
  searchPlaceholder,
  filterLabel,
  filteredCount,
  totalCount,
  hasMetadataFilters,
  hasActiveMetadataFilters,
  activeOperations,
  behaviorFilterKeys,
  behaviorFlags,
  operationOptions,
  onActiveOperationsChange,
  onBehaviorFlagsChange,
  onQueryChange,
  onClearQuery,
  onFilterChange,
  onPageSizeChange,
  onSortChange,
  onFiltersChanged,
}: {
  enableSearch: boolean;
  enableFilters: boolean;
  query: string;
  filter: AvailableToolsFilter;
  sort: AvailableToolsSort;
  pageSize: number;
  showSelection: boolean;
  searchPlaceholder: string;
  filterLabel: string;
  filteredCount: number;
  totalCount: number;
  hasMetadataFilters: boolean;
  hasActiveMetadataFilters: boolean;
  activeOperations: Set<string>;
  behaviorFilterKeys: BehaviorFlagKey[];
  behaviorFlags: BehaviorFlagsState;
  operationOptions: string[];
  onActiveOperationsChange: ActiveOperationsUpdater;
  onBehaviorFlagsChange: BehaviorFlagsUpdater;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearQuery: () => void;
  onFilterChange: (value: string | null) => void;
  onPageSizeChange: (value: string | null) => void;
  onSortChange: (value: string | null) => void;
  onFiltersChanged: () => void;
}) {
  if (!(enableSearch || enableFilters)) {
    return null;
  }

  return (
    <div className="space-y-3 rounded-lg bg-neutral-dark/20 p-3">
      <div className="flex flex-wrap items-center gap-3">
        {enableSearch ? (
          <div className="relative w-full flex-1 sm:min-w-[200px] sm:max-w-md">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pr-9 pl-9"
              onChange={onQueryChange}
              placeholder={searchPlaceholder}
              type="text"
              value={query}
            />
            {query ? (
              <Button
                aria-label="Clear search"
                className="absolute top-1/2 right-3 h-auto -translate-y-1/2 p-0"
                onClick={onClearQuery}
                size="sm"
                variant="ghost"
              >
                <X className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        ) : null}
        {enableFilters ? (
          <>
            <Select onValueChange={onFilterChange} value={filter}>
              <SelectTrigger
                aria-label={filterLabel}
                className="h-9 w-full sm:w-[180px] border-muted/60 text-sm hover:border-muted"
              >
                <SelectValue placeholder={filterLabel} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All tools</SelectItem>
                <SelectItem value="has_scopes">
                  Requires OAuth scopes only
                </SelectItem>
                <SelectItem value="no_scopes">No OAuth scopes</SelectItem>
                <SelectItem value="has_secrets">
                  Requires secrets only
                </SelectItem>
                <SelectItem value="no_secrets">No secrets required</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={onPageSizeChange} value={String(pageSize)}>
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
            <Select onValueChange={onSortChange} value={sort}>
              <SelectTrigger
                aria-label="Sort by"
                className="h-9 w-full sm:w-[180px] border-muted/60 text-sm hover:border-muted"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name_asc">Name A-Z</SelectItem>
                <SelectItem value="name_desc">Name Z-A</SelectItem>
                <SelectItem value="scopes_first">
                  Requires OAuth scopes first
                </SelectItem>
                <SelectItem value="secrets_first">
                  Requires secrets first
                </SelectItem>
                {showSelection ? (
                  <SelectItem value="selected_first">Selected first</SelectItem>
                ) : null}
              </SelectContent>
            </Select>
          </>
        ) : null}
        <span className="w-full text-muted-foreground text-sm tabular-nums sm:ml-auto sm:w-[220px] sm:flex-none sm:text-right">
          <span className="font-medium text-foreground">{filteredCount}</span>{" "}
          of {totalCount} tools
        </span>
      </div>

      {enableFilters && hasMetadataFilters ? (
        <MetadataFilterSection
          activeOperations={activeOperations}
          behaviorFilterKeys={behaviorFilterKeys}
          behaviorFlags={behaviorFlags}
          hasActiveMetadataFilters={hasActiveMetadataFilters}
          onActiveOperationsChange={onActiveOperationsChange}
          onBehaviorFlagsChange={onBehaviorFlagsChange}
          onFiltersChanged={onFiltersChanged}
          operationOptions={operationOptions}
        />
      ) : null}
    </div>
  );
}

/**
 * Stable handlers for the table controls. Every control change resets to the
 * first page, since the result set it paginates has changed.
 */
function useAvailableToolsControls({
  setQuery,
  setFilter,
  setSort,
  setPageSize,
  setPage,
}: {
  setQuery: (value: string) => void;
  setFilter: (value: AvailableToolsFilter) => void;
  setSort: (value: AvailableToolsSort) => void;
  setPageSize: (value: number) => void;
  setPage: (value: number) => void;
}) {
  const handleQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
      setPage(1);
    },
    [setPage, setQuery]
  );
  const handleClearQuery = useCallback(() => setQuery(""), [setQuery]);
  const handleFilterChange = useCallback(
    (value: string | null) => {
      setFilter(value as AvailableToolsFilter);
      setPage(1);
    },
    [setFilter, setPage]
  );
  const handlePageSizeChange = useCallback(
    (value: string | null) => {
      setPageSize(Number(value));
      setPage(1);
    },
    [setPage, setPageSize]
  );
  const handleSortChange = useCallback(
    (value: string | null) => {
      setSort(value as AvailableToolsSort);
      setPage(1);
    },
    [setPage, setSort]
  );
  const handleFiltersChanged = useCallback(() => setPage(1), [setPage]);

  return {
    handleClearQuery,
    handleFilterChange,
    handleFiltersChanged,
    handlePageSizeChange,
    handleQueryChange,
    handleSortChange,
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
  const [activeOperations, setActiveOperations] = useState<Set<string>>(
    () => new Set()
  );
  const [behaviorFlags, setBehaviorFlags] = useState<BehaviorFlagsState>({});
  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [page, setPage] = useState<number>(1);

  const operationOptions = useMemo(() => {
    const values = new Set<string>();
    for (const tool of safeTools) {
      for (const operation of tool.metadata?.behavior?.operations ?? []) {
        if (operation.trim().length > 0) {
          values.add(operation);
        }
      }
    }
    return [...values].sort((a, b) => a.localeCompare(b));
  }, [safeTools]);

  const behaviorFilterKeys = useMemo(() => {
    const available = new Set<BehaviorFlagKey>();
    for (const tool of safeTools) {
      const behavior = tool.metadata?.behavior;
      if (!behavior) {
        continue;
      }
      for (const key of BEHAVIOR_FILTER_ORDER) {
        if (behavior[key] !== undefined) {
          available.add(key);
        }
      }
    }
    return BEHAVIOR_FILTER_ORDER.filter((key) => available.has(key));
  }, [safeTools]);

  const hasMetadataFilters =
    operationOptions.length > 0 || behaviorFilterKeys.length > 0;
  const hasActiveMetadataFilters =
    activeOperations.size > 0 || Object.keys(behaviorFlags).length > 0;

  const filteredTools = useMemo(() => {
    const filtered = filterTools(safeTools, query, filter, {
      activeOperations,
      behaviorFlags,
    });
    return sortTools(filtered, sort, selectedTools);
  }, [
    safeTools,
    query,
    filter,
    sort,
    selectedTools,
    activeOperations,
    behaviorFlags,
  ]);

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

  const {
    handleClearQuery,
    handleFilterChange,
    handleFiltersChanged,
    handlePageSizeChange,
    handleQueryChange,
    handleSortChange,
  } = useAvailableToolsControls({
    setFilter,
    setPage,
    setPageSize,
    setQuery,
    setSort,
  });

  if (!hasTools) {
    return (
      <p className="my-3 text-muted-foreground text-sm">No tools available.</p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      <AvailableToolsToolbar
        activeOperations={activeOperations}
        behaviorFilterKeys={behaviorFilterKeys}
        behaviorFlags={behaviorFlags}
        enableFilters={enableFilters}
        enableSearch={enableSearch}
        filter={filter}
        filteredCount={filteredTools.length}
        filterLabel={filterLabel}
        hasActiveMetadataFilters={hasActiveMetadataFilters}
        hasMetadataFilters={hasMetadataFilters}
        onActiveOperationsChange={setActiveOperations}
        onBehaviorFlagsChange={setBehaviorFlags}
        onClearQuery={handleClearQuery}
        onFilterChange={handleFilterChange}
        onFiltersChanged={handleFiltersChanged}
        onPageSizeChange={handlePageSizeChange}
        onQueryChange={handleQueryChange}
        onSortChange={handleSortChange}
        operationOptions={operationOptions}
        pageSize={pageSize}
        query={query}
        searchPlaceholder={searchPlaceholder}
        showSelection={showSelection}
        sort={sort}
        totalCount={safeTools.length}
      />
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
                  {showSelection ? (
                    <th className="sticky left-0 z-10 w-[50px] bg-neutral-dark px-3 py-3 text-center font-semibold text-neutral-light-high/80 text-xs uppercase tracking-wider">
                      <Check className="mx-auto h-3.5 w-3.5" />
                    </th>
                  ) : null}
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
          {pageCount > 1 ? (
            <div className="flex items-center justify-center bg-neutral-dark/30 px-4 py-3">
              <PaginationControls
                itemsShowing={pagedTools.length}
                onPageChange={setPage}
                page={page}
                pageCount={pageCount}
                totalItems={filteredTools.length}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
