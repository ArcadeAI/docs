import type {
  ToolAuth,
  ToolCodeExample,
  ToolDefinition,
  ToolkitAuth,
  ToolkitData,
  ToolParameter,
  ToolSecret,
} from "../../app/_components/toolkit-docs/types";

const TOOL_LIMIT = 500;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Format a parameter type with innerType for arrays
 */
function formatParameterType(param: ToolParameter): string {
  if (param.type === "array" && param.innerType) {
    return `array[${param.innerType}]`;
  }
  return param.type;
}

/**
 * Format authentication information for toolkit level
 */
function formatToolkitAuth(auth: ToolkitAuth | null): string[] {
  if (!auth) {
    return [];
  }

  const lines: string[] = ["", "## Authentication", ""];
  lines.push(getToolkitAuthTypeLabel(auth.type));
  appendProviderLine(lines, auth.providerId);
  appendScopesSection(lines, auth.type, auth.allScopes);

  return lines;
}

function getToolkitAuthTypeLabel(authType: ToolkitAuth["type"]): string {
  if (authType === "oauth2") {
    return "**Type:** OAuth 2.0";
  }
  if (authType === "api_key") {
    return "**Type:** API Key";
  }
  return "**Type:** Mixed (OAuth 2.0 and API Keys)";
}

function appendProviderLine(lines: string[], providerId?: string | null): void {
  if (providerId) {
    lines.push(`**Provider:** ${providerId}`);
  }
}

function appendScopesSection(
  lines: string[],
  authType: ToolkitAuth["type"],
  allScopes?: string[] | null
): void {
  if (!allScopes || allScopes.length === 0) {
    return;
  }

  if (authType === "oauth2") {
    lines.push("", "**Required scopes:**");
  } else if (authType === "mixed") {
    lines.push("", "**OAuth scopes used:**");
  } else {
    return;
  }

  for (const scope of allScopes) {
    lines.push(`- \`${scope}\``);
  }
}

/**
 * Format tool-level authentication (scopes)
 */
function formatToolAuth(auth: ToolAuth | null): string[] {
  if (!auth?.scopes || auth.scopes.length === 0) {
    return [];
  }

  const lines: string[] = [
    "",
    "**OAuth Scopes:**",
    ...auth.scopes.map((scope) => `- \`${scope}\``),
  ];

  return lines;
}

/**
 * Format secrets information
 */
function formatSecrets(
  secrets: string[],
  secretsInfo?: ToolSecret[]
): string[] {
  if (!secrets || secrets.length === 0) {
    return [];
  }

  const lines: string[] = ["", "**Required Secrets:**"];

  for (const secretName of secrets) {
    const info = secretsInfo?.find((s) => s.name === secretName);
    const typeLabel = info?.type ? ` (${info.type})` : "";
    lines.push(`- \`${secretName}\`${typeLabel}`);
  }

  return lines;
}

/**
 * Format parameters as a detailed schema
 */
function formatParameters(parameters: ToolParameter[]): string[] {
  if (!parameters || parameters.length === 0) {
    return ["", "**Parameters:** None"];
  }

  const lines: string[] = ["", "**Parameters:**", ""];

  for (const param of parameters) {
    const requiredLabel = param.required ? " *(required)*" : " *(optional)*";
    const typeStr = formatParameterType(param);

    lines.push(`- \`${param.name}\`: \`${typeStr}\`${requiredLabel}`);

    if (param.description) {
      lines.push(`  - ${param.description}`);
    }

    if (param.enum && param.enum.length > 0) {
      lines.push(
        `  - Allowed values: ${param.enum.map((v) => `\`${v}\``).join(", ")}`
      );
    }

    if (param.default !== undefined) {
      lines.push(`  - Default: \`${JSON.stringify(param.default)}\``);
    }
  }

  return lines;
}

/**
 * Format output schema
 */
function formatOutput(
  output: { type: string; description: string | null } | null
): string[] {
  if (!output) {
    return [];
  }

  const lines: string[] = ["", `**Output:** \`${output.type}\``];
  if (output.description) {
    lines.push(`- ${output.description}`);
  }

  return lines;
}

/**
 * Format code example as JSON schema with full tool metadata
 */
function formatCodeExample(
  codeExample: ToolCodeExample | undefined,
  auth: ToolAuth | null,
  secrets: string[],
  secretsInfo?: ToolSecret[]
): string[] {
  if (!codeExample) {
    return [];
  }

  const lines: string[] = ["", "**Example:**", ""];

  // Create a simplified example object for parameters
  const exampleParams: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(codeExample.parameters)) {
    exampleParams[key] = val.value;
  }

  // Build the full tool JSON schema
  const toolSchema: Record<string, unknown> = {
    tool: codeExample.toolName,
    parameters: exampleParams,
  };

  // Add authentication info
  const hasAuthScopes = Boolean(auth?.scopes && auth.scopes.length > 0);
  if (codeExample.requiresAuth || hasAuthScopes) {
    toolSchema.requires_auth = codeExample.requiresAuth || hasAuthScopes;
    if (codeExample.authProvider) {
      toolSchema.auth_provider = codeExample.authProvider;
    }
    if (hasAuthScopes) {
      toolSchema.scopes = auth.scopes;
    }
  }

  // Add secrets info
  if (secrets && secrets.length > 0) {
    const secretsWithTypes = secrets.map((secretName) => {
      const info = secretsInfo?.find((s) => s.name === secretName);
      return {
        name: secretName,
        type: info?.type ?? "unknown",
      };
    });
    toolSchema.secrets = secretsWithTypes;
  }

  const exampleJson = JSON.stringify(toolSchema, null, 2);

  lines.push("```json", exampleJson, "```");

  return lines;
}

/**
 * Format a complete tool definition with all details
 */
function formatToolDefinition(tool: ToolDefinition): string[] {
  const lines: string[] = [];

  // Tool header
  lines.push(`### ${tool.qualifiedName}`);
  lines.push("");

  // Version info
  if (
    tool.fullyQualifiedName &&
    tool.fullyQualifiedName !== tool.qualifiedName
  ) {
    const version = tool.fullyQualifiedName.split("@")[1];
    if (version) {
      lines.push(`**Version:** ${version}`);
    }
  }

  // Description
  if (tool.description) {
    lines.push("");
    lines.push(tool.description);
  }

  // Parameters
  lines.push(...formatParameters(tool.parameters));

  // Auth scopes
  lines.push(...formatToolAuth(tool.auth));

  // Secrets
  lines.push(...formatSecrets(tool.secrets, tool.secretsInfo));

  // Output
  lines.push(...formatOutput(tool.output));

  // Code example with auth and secrets
  lines.push(
    ...formatCodeExample(
      tool.codeExample,
      tool.auth,
      tool.secrets,
      tool.secretsInfo
    )
  );

  lines.push("");

  return lines;
}

// ============================================================================
// Main Export
// ============================================================================

/**
 * Convert toolkit data to comprehensive markdown documentation
 * Includes all available information: parameters, auth, secrets, examples
 */
export function toolkitDataToSearchMarkdown(toolkit: ToolkitData): string {
  const title = toolkit.label || toolkit.id;
  const sections: string[] = buildToolkitHeaderSections(toolkit, title);
  sections.push(...formatToolkitAuth(toolkit.auth));
  sections.push(...buildDocumentationChunkSections(toolkit));

  const toolsToInclude = toolkit.tools.slice(0, TOOL_LIMIT);
  const truncatedCount = Math.max(
    0,
    toolkit.tools.length - toolsToInclude.length
  );

  sections.push(
    ...buildToolsSummarySections(
      toolkit.tools.length,
      toolsToInclude,
      truncatedCount
    )
  );
  sections.push(...buildToolDetailsSections(toolsToInclude));
  sections.push(...buildGeneratedAtSection(toolkit.generatedAt));

  return sections.join("\n");
}

function buildToolkitHeaderSections(
  toolkit: ToolkitData,
  title: string
): string[] {
  const sections: string[] = [`# ${title}`];

  if (toolkit.version) {
    sections.push(`**Version:** ${toolkit.version}`);
  }

  if (toolkit.description) {
    sections.push("", toolkit.description);
  }

  if (toolkit.summary) {
    sections.push("", "## Overview", "", toolkit.summary);
  }

  return sections;
}

function buildDocumentationChunkSections(toolkit: ToolkitData): string[] {
  if (
    !toolkit.documentationChunks ||
    toolkit.documentationChunks.length === 0
  ) {
    return [];
  }

  const sections: string[] = [];
  for (const chunk of toolkit.documentationChunks) {
    if (chunk.content) {
      sections.push("", chunk.content);
    }
  }
  return sections;
}

function buildToolsSummarySections(
  totalTools: number,
  toolsToInclude: ToolDefinition[],
  truncatedCount: number
): string[] {
  const sections: string[] = [
    "",
    "## Tools",
    "",
    `This toolkit provides **${totalTools} tools**:`,
    "",
    "### Quick Reference",
    "",
  ];

  for (const tool of toolsToInclude) {
    sections.push(buildQuickReferenceLine(tool));
  }

  if (truncatedCount > 0) {
    sections.push("", `*... and ${truncatedCount} more tools.*`);
  }

  return sections;
}

function buildQuickReferenceLine(tool: ToolDefinition): string {
  const description = tool.description
    ? ` — ${tool.description.split("\n")[0]}`
    : "";
  const anchor = tool.qualifiedName.toLowerCase().replace(/\./g, "");
  return `- [\`${tool.qualifiedName}\`](#${anchor})${description}`;
}

function buildToolDetailsSections(toolsToInclude: ToolDefinition[]): string[] {
  const sections: string[] = ["", "---", "", "## Tool Details", ""];
  for (const tool of toolsToInclude) {
    sections.push(...formatToolDefinition(tool), "---", "");
  }
  return sections;
}

function buildGeneratedAtSection(generatedAt?: string): string[] {
  if (!generatedAt) {
    return [];
  }
  return ["", `*Documentation generated: ${generatedAt}*`];
}
