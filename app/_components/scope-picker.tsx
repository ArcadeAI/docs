"use client";

import { Button } from "@arcadeai/design-system";
import { Check, Copy, KeyRound, ShieldCheck, Wrench } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useCallback, useEffect, useMemo, useState } from "react";

const COPY_FEEDBACK_MS = 2000;

const TOOL_PAGE_SIZE_SMALL = 15;
const DEFAULT_TOOLS_PAGE_SIZE = 30;
const TOOL_PAGE_SIZE_LARGE = 60;
const TOOL_PAGE_SIZE_XL = 120;

const TOOLS_PAGE_SIZE_OPTIONS = [
  TOOL_PAGE_SIZE_SMALL,
  DEFAULT_TOOLS_PAGE_SIZE,
  TOOL_PAGE_SIZE_LARGE,
  TOOL_PAGE_SIZE_XL,
] as const;

const JSON_PRETTY_PRINT_INDENT = 2;

type ToolParameter = {
  name: string;
  type: string;
  required: boolean;
  description: string | null;
  enum: string[] | null;
};

type Tool = {
  name: string;
  scopes: string[];
  secrets?: string[];
  // Full tool definition fields (optional for backward compatibility)
  qualifiedName?: string;
  fullyQualifiedName?: string;
  description?: string | null;
  parameters?: ToolParameter[];
  output?: { type: string; description: string | null } | null;
};

export const DEFAULT_SHOW_UNSELECTED_TOOLS = false;

type ScopePickerProps = {
  tools: Tool[];
  selectedTools?: string[];
  onSelectedToolsChange?: (selectedTools: string[]) => void;
};

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    } catch {
      // Ignore clipboard errors (e.g., permissions, unsupported browser).
    }
  }, [text]);

  return (
    <Button onClick={handleCopy} size="sm" title={label} variant="outline">
      {copied ? (
        <Check className="h-3 w-3 text-green-400" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {copied ? "Copied!" : label}
    </Button>
  );
}

export function getSelectedToolNames(
  tools: Tool[],
  selectedTools: Set<string>
): string[] {
  const validToolNames = new Set(tools.map((tool) => tool.name));
  return Array.from(selectedTools).filter((name) => validToolNames.has(name));
}

export function getRequiredScopes(
  tools: Tool[],
  selectedTools: Set<string>
): string[] {
  const selectedToolNames = new Set(getSelectedToolNames(tools, selectedTools));
  const normalizedScopes = tools
    .filter((tool) => selectedToolNames.has(tool.name))
    .flatMap((tool) => tool.scopes)
    .map((scope) => scope.trim())
    .filter((scope) => scope.length > 0);

  return Array.from(new Set(normalizedScopes)).sort();
}

export function getRequiredSecrets(
  tools: Tool[],
  selectedTools: Set<string>
): string[] {
  const selectedToolNames = new Set(getSelectedToolNames(tools, selectedTools));
  const secrets = tools
    .filter((tool) => selectedToolNames.has(tool.name))
    .flatMap((tool) => tool.secrets ?? [])
    .map((secret) => secret.trim())
    .filter((secret) => secret.length > 0);

  return Array.from(new Set(secrets)).sort();
}

export function getToolsForSelectionGrid(
  tools: Tool[],
  selectedTools: Set<string>,
  showUnselectedTools: boolean = DEFAULT_SHOW_UNSELECTED_TOOLS
): Tool[] {
  if (showUnselectedTools) {
    return tools;
  }
  return tools.filter((tool) => selectedTools.has(tool.name));
}

function RequirementsPanel({
  onToggleAdvanced,
  requiredScopes,
  requiredSecrets,
  selectedToolNames,
  showAdvanced,
}: {
  onToggleAdvanced: () => void;
  requiredScopes: string[];
  requiredSecrets: string[];
  selectedToolNames: string[];
  showAdvanced: boolean;
}) {
  if (selectedToolNames.length === 0) {
    return (
      <div className="rounded-lg bg-neutral-dark/30 p-4">
        <h4 className="mb-3 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
          Requirements
        </h4>
        <p className="text-muted-foreground/70 text-sm">
          Select tools to see requirements
        </p>
      </div>
    );
  }

  const hasScopes = requiredScopes.length > 0;
  const hasSecrets = requiredSecrets.length > 0;
  const noRequirements = !(hasScopes || hasSecrets);

  return (
    <div className="rounded-lg bg-neutral-dark/30 p-4">
      <h4 className="mb-3 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
        Requirements
      </h4>

      {/* No requirements case */}
      {noRequirements && (
        <p className="text-muted-foreground/70 text-sm">
          No authentication required for selected tools
        </p>
      )}

      {/* OAuth scopes - always show count when present */}
      {hasScopes && (
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
          <span className="text-sm text-foreground">
            {requiredScopes.length} OAuth scope
            {requiredScopes.length > 1 ? "s" : ""} required
          </span>
        </div>
      )}

      {/* Secrets - only show if there are secrets */}
      {hasSecrets && (
        <div className="flex items-start gap-2">
          <KeyRound className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-foreground">Secrets:</span>
            {requiredSecrets.map((secret) => (
              <code
                className="font-mono text-amber-600 dark:text-amber-300 text-xs"
                key={secret}
              >
                {secret}
              </code>
            ))}
          </div>
        </div>
      )}

      {/* Show OAuth Scopes Toggle - only when there are scopes */}
      {hasScopes && (
        <div className="mt-3 pt-3">
          <Button
            onClick={onToggleAdvanced}
            size="sm"
            title="Show OAuth requirements (scopes)"
            variant={showAdvanced ? "default" : "outline"}
          >
            <ShieldCheck className="h-3 w-3" />
            {showAdvanced ? "Hide OAuth details" : "Show OAuth details"}
          </Button>
        </div>
      )}
    </div>
  );
}

function OAuthScopesDetails({
  requiredScopes,
  scopesAsText,
  selectedToolNames,
  showAdvanced,
}: {
  requiredScopes: string[];
  scopesAsText: string;
  selectedToolNames: string[];
  showAdvanced: boolean;
}) {
  if (
    !(showAdvanced && selectedToolNames.length > 0 && requiredScopes.length > 0)
  ) {
    return null;
  }

  return (
    <div className="mt-4 rounded-lg bg-red-500/5 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="flex items-center gap-2 font-semibold text-red-300/80 text-sm uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4" />
          Required OAuth scopes
          <span className="font-normal text-red-300 text-xs normal-case">
            ({requiredScopes.length})
          </span>
        </h4>
        <CopyButton label="Copy scopes" text={scopesAsText} />
      </div>
      <div className="flex flex-wrap gap-2">
        {requiredScopes.map((scope) => (
          <code
            className="max-w-full break-all font-mono text-red-300 text-xs"
            key={scope}
            title={scope}
          >
            {scope}
          </code>
        ))}
      </div>
    </div>
  );
}

export default function ScopePicker({
  tools,
  selectedTools,
  onSelectedToolsChange,
}: ScopePickerProps) {
  const [internalSelectedTools, setInternalSelectedTools] = useState<
    Set<string>
  >(new Set());
  const [showAdvanced, setShowAdvanced] = useState(false);
  const isControlled = Array.isArray(selectedTools);
  const selectedToolsSet = useMemo(
    () => (isControlled ? new Set(selectedTools) : internalSelectedTools),
    [isControlled, selectedTools, internalSelectedTools]
  );
  const posthog = usePostHog();
  const [pageSize, setPageSize] = useState<number>(DEFAULT_TOOLS_PAGE_SIZE);
  const [page, setPage] = useState<number>(1);
  const [showUnselectedTools, setShowUnselectedTools] = useState(
    DEFAULT_SHOW_UNSELECTED_TOOLS
  );

  const trackScopeCalculatorUsed = (
    action: string,
    toolName: string | undefined,
    newSelectedCount: number
  ) => {
    posthog?.capture("scope_calculator_used", {
      action,
      tool_name: toolName || null,
      selected_tools_count: newSelectedCount,
      total_tools_available: tools.length,
    });
  };

  const updateSelectedTools = (
    nextSelected: Set<string>,
    action: string,
    toolName?: string
  ) => {
    const nextList = Array.from(nextSelected).sort();
    trackScopeCalculatorUsed(action, toolName, nextSelected.size);
    if (isControlled) {
      onSelectedToolsChange?.(nextList);
    } else {
      setInternalSelectedTools(nextSelected);
    }
  };

  const toggleTool = (toolName: string) => {
    const newSelected = new Set(selectedToolsSet);
    const isSelecting = !newSelected.has(toolName);
    if (newSelected.has(toolName)) {
      newSelected.delete(toolName);
    } else {
      newSelected.add(toolName);
    }
    updateSelectedTools(
      newSelected,
      isSelecting ? "tool_selected" : "tool_deselected",
      toolName
    );
  };

  const selectAll = () => {
    updateSelectedTools(new Set(tools.map((t) => t.name)), "select_all");
  };

  const clearAll = () => {
    updateSelectedTools(new Set(), "clear_all");
  };

  const selectedToolNames = getSelectedToolNames(tools, selectedToolsSet);
  const requiredScopes = getRequiredScopes(tools, selectedToolsSet);
  const requiredSecrets = getRequiredSecrets(tools, selectedToolsSet);

  const toolsForSelectionGrid = useMemo(
    () =>
      getToolsForSelectionGrid(tools, selectedToolsSet, showUnselectedTools),
    [tools, selectedToolsSet, showUnselectedTools]
  );

  const pageCount = useMemo(
    () => Math.max(1, Math.ceil(toolsForSelectionGrid.length / pageSize)),
    [toolsForSelectionGrid.length, pageSize]
  );

  useEffect(() => {
    setPage((current) => Math.min(Math.max(1, current), pageCount));
  }, [pageCount]);

  const pagedTools = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return toolsForSelectionGrid.slice(start, end);
  }, [toolsForSelectionGrid, page, pageSize]);

  const scopesAsText = requiredScopes.join("\n");
  const secretsAsText = requiredSecrets.join("\n");
  const toolNamesAsText = selectedToolNames.join(", ");
  const selectedToolsAsJson = JSON.stringify(
    tools
      .filter((t) => selectedToolsSet.has(t.name))
      .map((t) => {
        // If full tool definition is available, include all fields
        if (t.qualifiedName && t.parameters) {
          return {
            name: t.qualifiedName,
            description: t.description ?? null,
            parameters: t.parameters.map((p) => ({
              name: p.name,
              type: p.type,
              required: p.required,
              description: p.description,
              ...(p.enum ? { enum: p.enum } : {}),
            })),
            scopes: t.scopes,
            secrets: t.secrets ?? [],
            output: t.output ?? null,
          };
        }
        // Fallback to basic format
        return {
          name: t.name,
          scopes: t.scopes,
          secrets: t.secrets ?? [],
        };
      }),
    null,
    JSON_PRETTY_PRINT_INDENT
  );

  return (
    <div className="my-6 overflow-hidden rounded-xl bg-neutral-dark/20">
      {/* Header */}
      <div className="bg-neutral-dark/40 px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-semibold text-sm text-foreground">
            <Wrench className="h-4 w-4 text-muted-foreground" />
            Selected tools
            {selectedToolNames.length > 0 && (
              <span className="text-muted-foreground text-xs">
                {selectedToolNames.length} of {tools.length}
              </span>
            )}
          </h3>
          <div className="flex items-center gap-2">
            <Button
              aria-pressed={showUnselectedTools}
              onClick={() => {
                setShowUnselectedTools((current) => !current);
                setPage(1);
              }}
              size="sm"
              variant={showUnselectedTools ? "default" : "outline"}
            >
              {showUnselectedTools ? "Show selected only" : "Show all tools"}
            </Button>
            {selectedToolNames.length < tools.length && (
              <Button onClick={selectAll} size="sm" variant="outline">
                Select all
              </Button>
            )}
            {selectedToolNames.length > 0 && (
              <Button onClick={clearAll} size="sm" variant="ghost">
                Deselect all
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="p-4">
        {pageCount > 1 && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-neutral-dark/30 px-3 py-2">
            <div className="flex items-center gap-2">
              <select
                aria-label="Tools per page"
                className="rounded-md border border-neutral-dark-high bg-neutral-dark/60 px-2.5 py-1.5 text-muted-foreground text-xs transition-colors focus:border-brand-accent focus:outline-none"
                onChange={(event) => {
                  setPageSize(Number(event.target.value));
                  setPage(1);
                }}
                value={pageSize}
              >
                {TOOLS_PAGE_SIZE_OPTIONS.map((size) => (
                  <option key={size} value={size}>
                    {size} / page
                  </option>
                ))}
              </select>
              <span className="text-muted-foreground text-xs">
                Page {page} of {pageCount}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="rounded-md border border-neutral-dark-high bg-neutral-dark/60 px-2.5 py-1.5 text-muted-foreground text-xs transition-colors hover:bg-neutral-dark disabled:cursor-not-allowed disabled:opacity-50"
                disabled={page <= 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                type="button"
              >
                Prev
              </button>
              <button
                className="rounded-md border border-neutral-dark-high bg-neutral-dark/60 px-2.5 py-1.5 text-muted-foreground text-xs transition-colors hover:bg-neutral-dark disabled:cursor-not-allowed disabled:opacity-50"
                disabled={page >= pageCount}
                onClick={() =>
                  setPage((current) => Math.min(pageCount, current + 1))
                }
                type="button"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {pagedTools.length > 0 ? (
          <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {pagedTools.map((tool) => {
              const toolHasScopes = (tool.scopes?.length ?? 0) > 0;
              const toolHasSecrets = (tool.secrets?.length ?? 0) > 0;
              return (
                <label
                  className={`group flex cursor-pointer items-center gap-2 rounded-lg p-2.5 transition-colors ${
                    selectedToolsSet.has(tool.name)
                      ? "border border-brand-accent/40 bg-brand-accent/10"
                      : "border border-neutral-dark-high/50 bg-neutral-dark/30 hover:bg-neutral-dark/50"
                  }`}
                  key={tool.name}
                >
                  <input
                    checked={selectedToolsSet.has(tool.name)}
                    className="rounded border-neutral-dark-high text-brand-accent focus:ring-brand-accent"
                    onChange={() => toggleTool(tool.name)}
                    type="checkbox"
                  />
                  <div className="relative flex-1 overflow-hidden">
                    <span className="block truncate text-sm text-foreground group-hover:opacity-0">
                      {tool.name}
                    </span>
                    <span className="pointer-events-none absolute inset-0 hidden whitespace-nowrap text-sm text-foreground group-hover:block group-hover:animate-[tool-name-marquee_6s_linear_infinite]">
                      {tool.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {showAdvanced && toolHasScopes && (
                      <ShieldCheck
                        aria-label="Requires scopes"
                        className="h-3 w-3 text-red-400"
                      />
                    )}
                    {toolHasSecrets && (
                      <KeyRound
                        aria-label="Requires secrets"
                        className="h-3 w-3 text-amber-400"
                      />
                    )}
                  </div>
                </label>
              );
            })}
          </div>
        ) : (
          <div className="mb-4 rounded-lg bg-neutral-dark/30 p-4">
            <p className="text-sm text-foreground">No tools selected.</p>
            {!showUnselectedTools && (
              <p className="mt-1 text-muted-foreground text-xs">
                Click &quot;Show all tools&quot; to add tools.
              </p>
            )}
          </div>
        )}

        {/* Copy Actions */}
        {selectedToolNames.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            <CopyButton label="Copy tool names" text={toolNamesAsText} />
            <CopyButton label="Copy tools JSON" text={selectedToolsAsJson} />
            {showAdvanced && requiredScopes.length > 0 && (
              <CopyButton label="Copy scopes" text={scopesAsText} />
            )}
            {requiredSecrets.length > 0 && (
              <CopyButton label="Copy secrets" text={secretsAsText} />
            )}
          </div>
        )}

        {/* Requirements Summary */}
        <RequirementsPanel
          onToggleAdvanced={() => setShowAdvanced((current) => !current)}
          requiredScopes={requiredScopes}
          requiredSecrets={requiredSecrets}
          selectedToolNames={selectedToolNames}
          showAdvanced={showAdvanced}
        />
        <OAuthScopesDetails
          requiredScopes={requiredScopes}
          scopesAsText={scopesAsText}
          selectedToolNames={selectedToolNames}
          showAdvanced={showAdvanced}
        />
      </div>
    </div>
  );
}

export { CopyButton };
