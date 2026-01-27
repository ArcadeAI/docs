"use client";

import { Button } from "@arcadeai/design-system";
import {
  Check,
  Copy,
  ExternalLink,
  KeyRound,
  Lock,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { useCallback, useState } from "react";
import { useOrySession } from "../../../_lib/ory-session-context";
import { getDashboardUrl } from "../../dashboard-link";
import type { ToolSectionProps } from "../types";
import { toToolAnchorId } from "./AvailableToolsTable";
import {
  DocumentationChunkRenderer,
  hasChunksAt,
} from "./documentation-chunk-renderer";
import { DynamicCodeBlock } from "./DynamicCodeBlock";
import { ParametersTable } from "./parameters-table";
import { ScopesDisplay } from "./scopes-display";

function CopyToolButton({ tool }: { tool: ToolSectionProps["tool"] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const toolDefinition = {
      name: tool.qualifiedName,
      description: tool.description,
      parameters: tool.parameters.map((p) => ({
        name: p.name,
        type: p.type,
        required: p.required,
        description: p.description,
        ...(p.enum ? { enum: p.enum } : {}),
      })),
      scopes: tool.auth?.scopes ?? [],
      secrets: tool.secrets,
      output: tool.output,
    };

    try {
      await navigator.clipboard.writeText(
        JSON.stringify(toolDefinition, null, 2)
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }, [tool]);

  return (
    <button
      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-dark-high bg-neutral-dark/60 px-3 py-1.5 font-medium text-muted-foreground text-xs transition-colors hover:bg-neutral-dark hover:text-text-color"
      onClick={handleCopy}
      title="Copy tool definition as JSON"
      type="button"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? "Copied!" : "Copy definition"}
    </button>
  );
}

function CopyScopesButton({ scopes }: { scopes: string[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(scopes.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }, [scopes]);

  return (
    <button
      className="inline-flex items-center gap-1 rounded-md border border-red-400/30 bg-red-500/10 px-2 py-1 text-red-300 text-xs transition-colors hover:bg-red-500/20"
      onClick={handleCopy}
      title="Copy scopes list"
      type="button"
    >
      {copied ? (
        <Check className="h-3 w-3 text-green-400" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {copied ? "Copied!" : "Copy scopes"}
    </button>
  );
}

export function shouldRenderDefaultSection(
  chunks: ToolSectionProps["tool"]["documentationChunks"],
  location: "description" | "parameters" | "auth" | "secrets" | "output"
): boolean {
  return !hasChunksAt(chunks, location, "replace");
}

/**
 * ToolSection
 *
 * Renders a single tool section with parameters, scopes, secrets, output, and example.
 */
export function ToolSection({
  tool,
  isSelected = false,
  showSelection = false,
  onToggleSelection,
}: ToolSectionProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const anchorId = toToolAnchorId(tool.qualifiedName);
  const scopes = tool.auth?.scopes ?? [];
  const secretsInfo = tool.secretsInfo ?? [];
  const hasScopes = scopes.length > 0;
  const hasSecrets =
    (tool.secrets?.length ?? 0) > 0 || (tool.secretsInfo?.length ?? 0) > 0;

  const showDescription = shouldRenderDefaultSection(
    tool.documentationChunks,
    "description"
  );
  const showParameters = shouldRenderDefaultSection(
    tool.documentationChunks,
    "parameters"
  );
  const showAuth = shouldRenderDefaultSection(tool.documentationChunks, "auth");
  const _showSecrets = shouldRenderDefaultSection(
    tool.documentationChunks,
    "secrets"
  );
  const showOutput = shouldRenderDefaultSection(
    tool.documentationChunks,
    "output"
  );

  const { email, loading } = useOrySession();
  const isLoggedIn = !loading && !!email;
  const loginUrl = getDashboardUrl();
  const executeUrl = getDashboardUrl(
    `playground/execute?toolId=${encodeURIComponent(tool.qualifiedName)}`
  );

  const getActionHref = (href: string) => (isLoggedIn ? href : loginUrl);
  const getActionTitle = (label: string) =>
    isLoggedIn ? label : "Sign in to use this in the Arcade dashboard";

  const actionHint = isLoggedIn
    ? "Run this tool directly in the Arcade dashboard."
    : "Sign in to run tools. You'll be redirected to the dashboard login.";

  return (
    <section
      className="mt-10 scroll-mt-20 rounded-xl border border-neutral-dark-high/40 bg-gradient-to-b from-neutral-dark/30 to-transparent p-6"
      id={anchorId}
    >
      {/* Tool Header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-brand-accent/10 p-2">
            <Wrench className="h-5 w-5 text-brand-accent" />
          </div>
          <h3 className="font-semibold text-text-color text-xl">
            {tool.qualifiedName}
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <CopyToolButton tool={tool} />
          {showSelection && (
            <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-dark-high bg-neutral-dark/40 px-3 py-1.5 text-muted-foreground text-xs transition-colors hover:bg-neutral-dark/60">
              <input
                aria-label={`Add ${tool.name} to selected tools`}
                checked={isSelected}
                className="rounded border-gray-300 text-brand-accent focus:ring-brand-accent"
                onChange={() => onToggleSelection?.(tool.name)}
                type="checkbox"
              />
              Add to selected tools
              {!(hasScopes || hasSecrets) && (
                <span className="text-muted-foreground/60">
                  (no auth required)
                </span>
              )}
            </label>
          )}
        </div>
      </div>

      {/* Description */}
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="description"
        position="before"
      />
      {showDescription && (
        <p className="text-sm text-text-color/90 leading-relaxed">
          {tool.description ?? "No description provided."}
        </p>
      )}
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="description"
        position="replace"
      />
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="description"
        position="after"
      />

      {/* Parameters */}
      <div className="mt-6">
        <h4 className="mb-3 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
          Parameters
        </h4>
        <DocumentationChunkRenderer
          chunks={tool.documentationChunks}
          location="parameters"
          position="before"
        />
        {showParameters && <ParametersTable parameters={tool.parameters} />}
        <DocumentationChunkRenderer
          chunks={tool.documentationChunks}
          location="parameters"
          position="replace"
        />
        <DocumentationChunkRenderer
          chunks={tool.documentationChunks}
          location="parameters"
          position="after"
        />
      </div>

      {/* Requirements Summary */}
      <div className="mt-6 rounded-lg border border-neutral-dark-high/40 bg-neutral-dark/30 p-4">
        <h4 className="mb-3 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
          Requirements
        </h4>

        {/* Scopes indicator - only shown when advanced is enabled and there are scopes */}
        {showAdvanced && hasScopes && (
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-red-400" />
            <span className="text-sm text-text-color">
              Requires {scopes.length} OAuth scope{scopes.length > 1 ? "s" : ""}
            </span>
          </div>
        )}

        {/* Secrets - always show the actual secret names */}
        <div className="flex items-start gap-2">
          <KeyRound
            className={`mt-0.5 h-4 w-4 shrink-0 ${hasSecrets ? "text-amber-400" : "text-muted-foreground/50"}`}
          />
          {hasSecrets ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-text-color">Secrets:</span>
              {secretsInfo.length > 0
                ? secretsInfo.map((secret) => (
                    <span
                      className="inline-flex items-center gap-1 rounded-md border border-amber-400/30 bg-amber-500/10 px-2 py-0.5 text-xs"
                      key={secret.name}
                    >
                      <code className="text-amber-300">{secret.name}</code>
                      <span className="text-amber-300/60">({secret.type})</span>
                    </span>
                  ))
                : tool.secrets.map((secret) => (
                    <code
                      className="rounded-md border border-amber-400/30 bg-amber-500/10 px-2 py-0.5 text-amber-300 text-xs"
                      key={secret}
                    >
                      {secret}
                    </code>
                  ))}
            </div>
          ) : (
            <span className="text-muted-foreground/70 text-sm">
              No secrets required
            </span>
          )}
        </div>

        {/* Show OAuth Scopes Toggle - inside the box, only when there are scopes */}
        {hasScopes && (
          <div className="mt-3 border-neutral-dark-high/30 border-t pt-3">
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
              {showAdvanced
                ? "Hide OAuth requirements"
                : "Show OAuth requirements"}
            </button>
          </div>
        )}
      </div>

      {/* OAuth Scopes Details - only shown when advanced mode is enabled and there are scopes */}
      {showAdvanced && hasScopes && (
        <div className="mt-4 rounded-lg border border-red-400/20 bg-red-500/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="flex items-center gap-2 font-semibold text-red-300/80 text-sm uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              Required OAuth scopes
            </h4>
            <CopyScopesButton scopes={scopes} />
          </div>
          <DocumentationChunkRenderer
            chunks={tool.documentationChunks}
            location="auth"
            position="before"
          />
          {showAuth && <ScopesDisplay scopes={scopes} variant="inline" />}
          <DocumentationChunkRenderer
            chunks={tool.documentationChunks}
            location="auth"
            position="replace"
          />
          <DocumentationChunkRenderer
            chunks={tool.documentationChunks}
            location="auth"
            position="after"
          />
        </div>
      )}

      {/* Output */}
      <div className="mt-6">
        <h4 className="mb-3 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
          Output
        </h4>
        <DocumentationChunkRenderer
          chunks={tool.documentationChunks}
          location="output"
          position="before"
        />
        {showOutput && (
          <div className="rounded-lg border border-neutral-dark-high/40 bg-neutral-dark/30 p-4 text-sm">
            {tool.output ? (
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">Type:</span>
                <code className="rounded-md bg-neutral-dark-medium px-2 py-1 font-medium text-text-color text-xs">
                  {tool.output.type}
                </code>
                {tool.output.description && (
                  <span className="text-text-color/80">
                    — {tool.output.description}
                  </span>
                )}
              </div>
            ) : (
              <p className="text-muted-foreground/70">
                No output schema provided.
              </p>
            )}
          </div>
        )}
        <DocumentationChunkRenderer
          chunks={tool.documentationChunks}
          location="output"
          position="replace"
        />
        <DocumentationChunkRenderer
          chunks={tool.documentationChunks}
          location="output"
          position="after"
        />
      </div>

      {/* Try it in Arcade */}
      <div className="mt-6 overflow-hidden rounded-xl border border-brand-accent/20 bg-gradient-to-r from-brand-accent/5 to-transparent">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4">
          <div>
            <h4 className="font-semibold text-text-color">Try it in Arcade</h4>
            <p className="mt-0.5 text-muted-foreground text-xs">{actionHint}</p>
          </div>
          <Button
            asChild
            size="sm"
            variant={isLoggedIn ? "default" : "secondary"}
          >
            <a
              href={getActionHref(executeUrl)}
              rel="noreferrer"
              target="_blank"
              title={getActionTitle("Run on Arcade dashboard")}
            >
              {isLoggedIn ? (
                <ExternalLink className="mr-2 h-4 w-4" />
              ) : (
                <Lock className="mr-2 h-4 w-4" />
              )}
              Run on Arcade dashboard
            </a>
          </Button>
        </div>
      </div>

      {/* Code Example */}
      {tool.codeExample ? (
        <div className="mt-6">
          <DynamicCodeBlock codeExample={tool.codeExample} />
        </div>
      ) : (
        <p className="mt-6 text-muted-foreground/70 text-sm">
          No code example available for this tool.
        </p>
      )}
    </section>
  );
}

export default ToolSection;
