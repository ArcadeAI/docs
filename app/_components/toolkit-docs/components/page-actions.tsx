"use client";

import { Button } from "@arcadeai/design-system";
import { Check, Copy, ExternalLink } from "lucide-react";
import { useCallback, useState } from "react";
import { getPackageName } from "../constants";
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
 * Builds a generic tool execution example for copy payloads.
 */
function buildGenericToolExample(
  language: "javascript" | "typescript"
): string {
  const lines: string[] = [
    'import { Arcade } from "@arcadeai/arcadejs";',
    "",
    "const client = new Arcade(); // Automatically finds the `ARCADE_API_KEY` env variable",
    "",
    'const TOOL_NAME = "Toolkit.Tool";',
  ];

  if (language === "typescript") {
    lines.push("const toolInput: Record<string, unknown> = {");
  } else {
    lines.push("const toolInput = {");
  }

  lines.push("  // TODO: add parameters", "};", "");

  lines.push(
    "const response = await client.tools.execute({",
    "  tool_name: TOOL_NAME,",
    "  input: toolInput,",
    "});",
    "",
    "console.log(response);"
  );

  return lines.join("\n");
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
export function buildOptimizedPageContent(data: ToolkitData): string {
  const pipPackageName = data.pipPackageName ?? getPackageName(data.id);

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
    // Generic tool execution examples
    examples: {
      javascript: buildGenericToolExample("javascript"),
      typescript: buildGenericToolExample("typescript"),
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
    <Button
      onClick={handleCopy}
      size="sm"
      title="Copy optimized page content as JSON"
      variant="outline"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-green-400" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
      {copied ? "Copied!" : "Copy optimized page content"}
    </Button>
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
    <Button asChild size="sm" variant="ghost">
      <a
        href={editUrl}
        rel="noopener noreferrer"
        target="_blank"
        title="Edit the toolkit JSON file on GitHub"
      >
        Edit content in GitHub
        <ExternalLink className="ml-1 h-3.5 w-3.5" />
      </a>
    </Button>
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
