"use client";

import { Check, Copy, KeyRound, ShieldCheck, Wrench } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useCallback, useMemo, useState } from "react";

type Tool = {
  name: string;
  scopes: string[];
  secrets?: string[];
};

type ScopePickerProps = {
  tools: Tool[];
  selectedTools?: string[];
  onSelectedToolsChange?: (selectedTools: string[]) => void;
};

function CopyButton({
  text,
  label,
  variant = "default",
}: {
  text: string;
  label: string;
  variant?: "default" | "small";
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  }, [text]);

  if (variant === "small") {
    return (
      <button
        className="inline-flex items-center gap-1 rounded-md border border-neutral-dark-high bg-neutral-dark/60 px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-neutral-dark hover:text-text-color"
        onClick={handleCopy}
        title={label}
        type="button"
      >
        {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
        {copied ? "Copied" : label}
      </button>
    );
  }

  return (
    <button
      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-dark-high bg-neutral-dark/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-neutral-dark hover:text-text-color"
      onClick={handleCopy}
      title={label}
      type="button"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? "Copied!" : label}
    </button>
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

export default function ScopePicker({
  tools,
  selectedTools,
  onSelectedToolsChange,
}: ScopePickerProps) {
  const [internalSelectedTools, setInternalSelectedTools] = useState<Set<string>>(
    new Set()
  );
  const [showAdvanced, setShowAdvanced] = useState(false);
  const isControlled = Array.isArray(selectedTools);
  const selectedToolsSet = useMemo(
    () => (isControlled ? new Set(selectedTools) : internalSelectedTools),
    [isControlled, selectedTools, internalSelectedTools]
  );
  const posthog = usePostHog();

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

  const scopesAsText = requiredScopes.join("\n");
  const secretsAsText = requiredSecrets.join("\n");
  const toolNamesAsText = selectedToolNames.join(", ");
  const selectedToolsAsJson = JSON.stringify(
    tools
      .filter((t) => selectedToolsSet.has(t.name))
      .map((t) => ({ name: t.name, scopes: t.scopes, secrets: t.secrets ?? [] })),
    null,
    2
  );

  const hasRequirements = requiredScopes.length > 0 || requiredSecrets.length > 0;
  const hasScopes = requiredScopes.length > 0;

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-neutral-dark-high/50 bg-neutral-dark/20">
      {/* Header */}
      <div className="border-b border-neutral-dark-high/50 bg-neutral-dark/40 px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 font-semibold text-text-color text-sm">
            <Wrench className="h-4 w-4 text-muted-foreground" />
            Selected tools
            {selectedToolNames.length > 0 && (
              <span className="rounded-full bg-brand-accent/20 px-2 py-0.5 text-xs text-brand-accent">
                {selectedToolNames.length} of {tools.length}
              </span>
            )}
          </h3>
          <div className="flex items-center gap-2">
            <button
              className="rounded-md border border-brand-accent/30 bg-brand-accent/10 px-2.5 py-1 text-xs text-brand-accent transition-colors hover:bg-brand-accent/20"
              onClick={selectAll}
              type="button"
            >
              Select all
            </button>
            <button
              className="rounded-md border border-neutral-dark-high bg-neutral-dark/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-neutral-dark"
              onClick={clearAll}
              type="button"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="p-4">
        <div className="mb-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
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
                  <span className="block truncate text-sm text-text-color group-hover:opacity-0">
                    {tool.name}
                  </span>
                  <span className="pointer-events-none absolute inset-0 hidden whitespace-nowrap text-sm text-text-color group-hover:block group-hover:animate-[tool-name-marquee_6s_linear_infinite]">
                    {tool.name}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {showAdvanced && toolHasScopes && (
                    <ShieldCheck className="h-3 w-3 text-red-400" title="Requires scopes" />
                  )}
                  {toolHasSecrets && (
                    <KeyRound className="h-3 w-3 text-amber-400" title="Requires secrets" />
                  )}
                </div>
              </label>
            );
          })}
        </div>

        {/* Copy Actions */}
        {selectedToolNames.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            <CopyButton label="Copy tool names" text={toolNamesAsText} variant="small" />
            <CopyButton label="Copy tools JSON" text={selectedToolsAsJson} variant="small" />
            {showAdvanced && requiredScopes.length > 0 && (
              <CopyButton label="Copy scopes" text={scopesAsText} variant="small" />
            )}
            {requiredSecrets.length > 0 && (
              <CopyButton label="Copy secrets" text={secretsAsText} variant="small" />
            )}
          </div>
        )}

        {/* Requirements Summary */}
        <div className="rounded-lg border border-neutral-dark-high/50 bg-neutral-dark/30 p-4">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Requirements
          </h4>
          {selectedToolNames.length === 0 ? (
            <p className="text-sm text-muted-foreground/70">
              Select tools to see requirements
            </p>
          ) : (
            <>
              {/* Scopes indicator - only shown when advanced is enabled and there are scopes */}
              {showAdvanced && requiredScopes.length > 0 && (
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-red-400" />
                  <span className="text-sm text-text-color">
                    {requiredScopes.length} OAuth scope{requiredScopes.length > 1 ? "s" : ""} required
                  </span>
                </div>
              )}

              {/* Secrets - always show the actual secret names */}
              <div className="flex items-start gap-2">
                <KeyRound className={`mt-0.5 h-4 w-4 shrink-0 ${requiredSecrets.length > 0 ? "text-amber-400" : "text-muted-foreground/50"}`} />
                {requiredSecrets.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-text-color">Secrets:</span>
                    {requiredSecrets.map((secret) => (
                      <code
                        className="rounded-md border border-amber-400/30 bg-amber-500/10 px-2 py-0.5 text-xs text-amber-300"
                        key={secret}
                      >
                        {secret}
                      </code>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground/70">No secrets required</span>
                )}
              </div>

              {/* Show OAuth Scopes Toggle - inside the box, only when there are scopes */}
              {requiredScopes.length > 0 && (
                <div className="mt-3 border-t border-neutral-dark-high/30 pt-3">
                  <button
                    className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs transition-colors ${
                      showAdvanced
                        ? "border-brand-accent/40 bg-brand-accent/10 text-brand-accent"
                        : "border-neutral-dark-high/60 bg-neutral-dark/40 text-muted-foreground hover:bg-neutral-dark/60"
                    }`}
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    title="Show OAuth requirements (scopes)"
                    type="button"
                  >
                    <ShieldCheck className="h-3 w-3" />
                    {showAdvanced ? "Hide OAuth requirements" : "Show OAuth requirements"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* OAuth Scopes Details - only shown when advanced is enabled and there are scopes */}
        {showAdvanced && selectedToolNames.length > 0 && requiredScopes.length > 0 && (
          <div className="mt-4 rounded-lg border border-red-400/20 bg-red-500/5 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-red-300/80">
                <ShieldCheck className="h-4 w-4" />
                Required OAuth scopes
                <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-normal normal-case text-red-300">
                  {requiredScopes.length}
                </span>
              </h4>
              <CopyButton label="Copy scopes" text={scopesAsText} variant="small" />
            </div>
            <div className="flex flex-wrap gap-2">
              {requiredScopes.map((scope) => (
                <code
                  className="max-w-full break-all rounded-md border border-red-400/30 bg-red-500/10 px-2 py-1 text-xs text-red-300"
                  key={scope}
                  title={scope}
                >
                  {scope}
                </code>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { CopyButton };
