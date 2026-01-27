"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { useCallback, useState } from "react";
import type { ToolDefinition, ToolkitData } from "../types";

const COPY_FEEDBACK_MS = 2000;
const JSON_PRETTY_PRINT_INDENT = 2;

const GITHUB_JSON_BASE_URL =
  "https://github.com/ArcadeAI/docs/blob/main/data/toolkits";

/**
 * Builds a tool definition object for copying, excluding design system metadata.
 */
function buildToolDefinitionForCopy(tool: ToolDefinition) {
  return {
    name: tool.qualifiedName,
    fullyQualifiedName: tool.fullyQualifiedName,
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
}

/**
 * Builds the pip package name from toolkit ID.
 */
function buildPipPackageName(toolkitId: string): string {
  const normalized = toolkitId.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  return `arcade_${normalized}`;
}

/**
 * Determines if toolkit is optimized based on type.
 */
function isOptimizedToolkit(type: string): boolean {
  return type === "arcade" || type === "verified";
}

/**
 * Builds the optimized page content for copying.
 * Structure: Package info first, then overview, then tools.
 */
function buildOptimizedPageContent(data: ToolkitData): string {
  const pipPackageName = data.pipPackageName ?? buildPipPackageName(data.id);

  const content = {
    // Package info (first)
    package: {
      id: data.id,
      label: data.label,
      version: data.version,
      pipPackage: pipPackageName,
      pypiUrl: `https://pypi.org/project/${pipPackageName}/`,
      iconUrl: data.metadata.iconUrl,
      toolCount: data.tools.length,
      isOptimized: isOptimizedToolkit(data.metadata.type),
      type: data.metadata.type,
      category: data.metadata.category,
      isBYOC: data.metadata.isBYOC,
      isPro: data.metadata.isPro,
    },
    // Auth info
    auth: data.auth
      ? {
          type: data.auth.type,
          providerId: data.auth.providerId,
          allScopes: data.auth.allScopes,
        }
      : null,
    // Overview section
    overview: {
      description: data.description,
      summary: data.summary ?? null,
    },
    // Tools with full definitions
    tools: data.tools.map(buildToolDefinitionForCopy),
  };

  return JSON.stringify(content, null, JSON_PRETTY_PRINT_INDENT);
}

/**
 * Builds the GitHub URL for editing the toolkit JSON file.
 */
function buildGithubEditUrl(toolkitId: string): string {
  const jsonFileName = `${toolkitId.toLowerCase()}.json`;
  return `${GITHUB_JSON_BASE_URL}/${jsonFileName}`;
}

type CopyOptimizedPageContentProps = {
  data: ToolkitData;
};

/**
 * CopyOptimizedPageContent
 *
 * Renders a button to copy the optimized page content (base info, overview, tools).
 */
export function CopyOptimizedPageContent({
  data,
}: CopyOptimizedPageContentProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      const content = buildOptimizedPageContent(data);
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    } catch {
      // Ignore clipboard errors (e.g., permissions, unsupported browser).
    }
  }, [data]);

  return (
    <button
      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-dark-high bg-neutral-dark/60 px-3 py-1.5 font-medium text-muted-foreground text-xs transition-colors hover:bg-neutral-dark hover:text-text-color"
      onClick={handleCopy}
      title="Copy optimized page content as JSON"
      type="button"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? "Copied!" : "Copy optimized page content"}
    </button>
  );
}

type EditJsonOnGithubProps = {
  toolkitId: string;
};

/**
 * EditJsonOnGithub
 *
 * Renders a link to edit the toolkit JSON file on GitHub.
 */
export function EditJsonOnGithub({ toolkitId }: EditJsonOnGithubProps) {
  const editUrl = buildGithubEditUrl(toolkitId);

  return (
    <a
      className="inline-flex items-center gap-1.5 text-muted-foreground text-xs transition-colors hover:text-text-color"
      href={editUrl}
      rel="noopener noreferrer"
      target="_blank"
      title="Edit the toolkit JSON file on GitHub"
    >
      Edit content in GitHub
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

type PageActionsBarProps = {
  data: ToolkitData;
};

/**
 * PageActionsBar
 *
 * Renders the page actions bar with copy and edit buttons.
 * This component is designed to be placed in the header area of toolkit pages.
 */
export function PageActionsBar({ data }: PageActionsBarProps) {
  return (
    <div
      className="mb-4 flex flex-wrap items-center justify-end gap-3"
      data-toolkit-page-actions
    >
      <CopyOptimizedPageContent data={data} />
      <EditJsonOnGithub toolkitId={data.id} />
    </div>
  );
}

export default PageActionsBar;
