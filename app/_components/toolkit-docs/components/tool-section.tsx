"use client";

import { Button } from "@arcadeai/design-system";
import { Check, Copy, KeyRound, ShieldCheck } from "lucide-react";
import { useCallback, useState } from "react";
import type { ToolSectionProps } from "../types";
import { toToolAnchorId } from "./available-tools-table";
import {
  DocumentationChunkRenderer,
  hasChunksAt,
} from "./documentation-chunk-renderer";
import { DynamicCodeBlock } from "./dynamic-code-block";
import { ParametersTable } from "./parameters-table";
import { ScopesDisplay } from "./scopes-display";

const COPY_FEEDBACK_MS = 2000;
const JSON_PRETTY_PRINT_INDENT = 2;

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
        JSON.stringify(toolDefinition, null, JSON_PRETTY_PRINT_INDENT)
      );
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    } catch {
      // Ignore clipboard errors (e.g., permissions, unsupported browser).
    }
  }, [tool]);

  return (
    <Button
      onClick={handleCopy}
      size="sm"
      title="Copy tool definition as JSON"
      variant="outline"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? "Copied!" : "Copy definition"}
    </Button>
  );
}

function CopyScopesButton({ scopes }: { scopes: string[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(scopes.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    } catch {
      // Ignore clipboard errors (e.g., permissions, unsupported browser).
    }
  }, [scopes]);

  return (
    <Button
      onClick={handleCopy}
      size="sm"
      title="Copy scopes list"
      variant="outline"
    >
      {copied ? (
        <Check className="h-3 w-3 text-green-400" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
      {copied ? "Copied!" : "Copy scopes"}
    </Button>
  );
}

export function shouldRenderDefaultSection(
  chunks: ToolSectionProps["tool"]["documentationChunks"],
  location: "description" | "parameters" | "auth" | "secrets" | "output"
): boolean {
  return !hasChunksAt(chunks, location, "replace");
}

function ToolHeaderSection({
  tool,
  showSelection,
  isSelected,
  onToggleSelection,
  hasScopes,
  hasSecrets,
  anchorId,
}: {
  tool: ToolSectionProps["tool"];
  showSelection: boolean;
  isSelected: boolean;
  onToggleSelection?: (toolName: string) => void;
  hasScopes: boolean;
  hasSecrets: boolean;
  anchorId: string;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div className="group flex items-center gap-2">
        <a
          aria-label={`Link to ${tool.qualifiedName}`}
          className="text-muted-foreground/40 opacity-0 transition-opacity hover:text-brand-accent group-hover:opacity-100"
          href={`#${anchorId}`}
        >
          #
        </a>
        <h3 className="font-semibold text-foreground text-xl">
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
  );
}

function ToolDescriptionSection({
  tool,
  showDescription,
}: {
  tool: ToolSectionProps["tool"];
  showDescription: boolean;
}) {
  return (
    <>
      <DocumentationChunkRenderer
        chunks={tool.documentationChunks}
        location="description"
        position="before"
      />
      {showDescription && (
        <p className="text-foreground text-sm leading-relaxed">
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
    </>
  );
}

function ToolParametersSection({
  tool,
  showParameters,
}: {
  tool: ToolSectionProps["tool"];
  showParameters: boolean;
}) {
  return (
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
  );
}

function ToolRequirementsSection({
  tool,
  showAdvanced,
  onToggleAdvanced,
  scopes,
  secretsInfo,
  hasScopes,
  hasSecrets,
}: {
  tool: ToolSectionProps["tool"];
  showAdvanced: boolean;
  onToggleAdvanced: () => void;
  scopes: string[];
  secretsInfo: ToolSectionProps["tool"]["secretsInfo"];
  hasScopes: boolean;
  hasSecrets: boolean;
}) {
  const secretsInfoList = secretsInfo ?? [];
  return (
    <div className="mt-6 rounded-lg bg-neutral-dark/30 p-4">
      <h4 className="mb-3 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
        Requirements
      </h4>

      {showAdvanced && hasScopes && (
        <div className="mb-3 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
          <span className="text-foreground text-sm">
            Requires {scopes.length} OAuth scope{scopes.length > 1 ? "s" : ""}
          </span>
        </div>
      )}

      <div className="flex items-start gap-2">
        <KeyRound
          className={`mt-0.5 h-4 w-4 shrink-0 ${hasSecrets ? "text-amber-400" : "text-muted-foreground/50"}`}
        />
        {hasSecrets ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-foreground text-sm">Secrets:</span>
            {secretsInfoList.length > 0
              ? secretsInfoList.map((secret) => (
                  <span
                    className="font-mono text-amber-600 text-xs dark:text-amber-300"
                    key={secret.name}
                  >
                    {secret.name}
                  </span>
                ))
              : tool.secrets.map((secret) => (
                  <span
                    className="font-mono text-amber-600 text-xs dark:text-amber-300"
                    key={secret}
                  >
                    {secret}
                  </span>
                ))}
          </div>
        ) : (
          <span className="text-muted-foreground/70 text-sm">
            No secrets required
          </span>
        )}
      </div>

      {hasScopes && (
        <div className="mt-3 border-neutral-dark-high/30 border-t pt-3">
          <Button
            onClick={onToggleAdvanced}
            size="sm"
            title="Show OAuth requirements (scopes)"
            variant={showAdvanced ? "default" : "outline"}
          >
            <ShieldCheck className="h-3 w-3" />
            {showAdvanced
              ? "Hide OAuth requirements"
              : "Show OAuth requirements"}
          </Button>
        </div>
      )}
    </div>
  );
}

function ToolScopesDetailsSection({
  tool,
  showAdvanced,
  hasScopes,
  showAuth,
  scopes,
}: {
  tool: ToolSectionProps["tool"];
  showAdvanced: boolean;
  hasScopes: boolean;
  showAuth: boolean;
  scopes: string[];
}) {
  if (!(showAdvanced && hasScopes)) {
    return null;
  }

  return (
    <div className="mt-4 rounded-lg bg-red-500/5 p-4">
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
  );
}

function ToolOutputSection({
  tool,
  showOutput,
}: {
  tool: ToolSectionProps["tool"];
  showOutput: boolean;
}) {
  return (
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
        <div className="rounded-lg bg-neutral-dark/30 p-4 text-sm">
          {tool.output ? (
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">Type:</span>
              <code className="font-mono text-foreground text-xs">
                {tool.output.type}
              </code>
              {tool.output.description && (
                <span className="text-foreground">
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
  );
}

function ToolExampleSection({ tool }: { tool: ToolSectionProps["tool"] }) {
  return tool.codeExample ? (
    <div className="mt-6">
      <DynamicCodeBlock codeExample={tool.codeExample} />
    </div>
  ) : (
    <p className="mt-6 text-muted-foreground/70 text-sm">
      No code example available for this tool.
    </p>
  );
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
  const showOutput = shouldRenderDefaultSection(
    tool.documentationChunks,
    "output"
  );

  return (
    <section
      className="mt-10 scroll-mt-20 rounded-xl border-neutral-dark-high/20 border-b bg-neutral-dark/20 p-6 last:border-b-0"
      id={anchorId}
    >
      <ToolHeaderSection
        anchorId={anchorId}
        hasScopes={hasScopes}
        hasSecrets={hasSecrets}
        isSelected={isSelected}
        onToggleSelection={onToggleSelection}
        showSelection={showSelection}
        tool={tool}
      />
      <ToolDescriptionSection showDescription={showDescription} tool={tool} />
      <ToolParametersSection showParameters={showParameters} tool={tool} />
      <ToolRequirementsSection
        hasScopes={hasScopes}
        hasSecrets={hasSecrets}
        onToggleAdvanced={() => setShowAdvanced(!showAdvanced)}
        scopes={scopes}
        secretsInfo={secretsInfo}
        showAdvanced={showAdvanced}
        tool={tool}
      />
      <ToolScopesDetailsSection
        hasScopes={hasScopes}
        scopes={scopes}
        showAdvanced={showAdvanced}
        showAuth={showAuth}
        tool={tool}
      />
      <ToolOutputSection showOutput={showOutput} tool={tool} />
      <ToolExampleSection tool={tool} />
    </section>
  );
}

export default ToolSection;
