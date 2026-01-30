import type {
  ToolkitData,
  ToolDefinition,
  ToolParameter,
  ToolAuth,
  ToolkitAuth,
  ToolSecret,
  ToolCodeExample,
} from "@/app/_components/toolkit-docs/types";

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

  if (auth.type === "oauth2") {
    lines.push(`**Type:** OAuth 2.0`);
    if (auth.providerId) {
      lines.push(`**Provider:** ${auth.providerId}`);
    }
    if (auth.allScopes && auth.allScopes.length > 0) {
      lines.push("", "**Required scopes:**");
      for (const scope of auth.allScopes) {
        lines.push(`- \`${scope}\``);
      }
    }
  } else if (auth.type === "api_key") {
    lines.push(`**Type:** API Key`);
    if (auth.providerId) {
      lines.push(`**Provider:** ${auth.providerId}`);
    }
  } else if (auth.type === "mixed") {
    lines.push(`**Type:** Mixed (OAuth 2.0 and API Keys)`);
    if (auth.providerId) {
      lines.push(`**Provider:** ${auth.providerId}`);
    }
    if (auth.allScopes && auth.allScopes.length > 0) {
      lines.push("", "**OAuth scopes used:**");
      for (const scope of auth.allScopes) {
        lines.push(`- \`${scope}\``);
      }
    }
  }

  return lines;
}

/**
 * Format tool-level authentication (scopes)
 */
function formatToolAuth(auth: ToolAuth | null): string[] {
  if (!auth || !auth.scopes || auth.scopes.length === 0) {
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
      lines.push(`  - Allowed values: ${param.enum.map((v) => `\`${v}\``).join(", ")}`);
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
function formatOutput(output: { type: string; description: string | null } | null): string[] {
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
  if (codeExample.requiresAuth || (auth && auth.scopes && auth.scopes.length > 0)) {
    toolSchema.requires_auth = codeExample.requiresAuth;
    if (codeExample.authProvider) {
      toolSchema.auth_provider = codeExample.authProvider;
    }
    if (auth && auth.scopes && auth.scopes.length > 0) {
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
  if (tool.fullyQualifiedName && tool.fullyQualifiedName !== tool.qualifiedName) {
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
  lines.push(...formatCodeExample(tool.codeExample, tool.auth, tool.secrets, tool.secretsInfo));

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
  const sections: string[] = [];

  // Title
  sections.push(`# ${title}`);

  // Version
  if (toolkit.version) {
    sections.push(`**Version:** ${toolkit.version}`);
  }

  // Description
  if (toolkit.description) {
    sections.push("", toolkit.description);
  }

  // Summary (LLM-generated overview)
  if (toolkit.summary) {
    sections.push("", "## Overview", "", toolkit.summary);
  }

  // Authentication
  sections.push(...formatToolkitAuth(toolkit.auth));

  // Toolkit-level documentation chunks
  if (toolkit.documentationChunks && toolkit.documentationChunks.length > 0) {
    for (const chunk of toolkit.documentationChunks) {
      if (chunk.content) {
        sections.push("", chunk.content);
      }
    }
  }

  // Tools section
  const toolsToInclude = toolkit.tools.slice(0, TOOL_LIMIT);
  const truncatedCount = Math.max(0, toolkit.tools.length - toolsToInclude.length);

  sections.push("", "## Tools", "");
  sections.push(`This toolkit provides **${toolkit.tools.length} tools**:`);
  sections.push("");

  // Quick reference list
  sections.push("### Quick Reference");
  sections.push("");
  for (const tool of toolsToInclude) {
    const desc = tool.description ? ` — ${tool.description.split("\n")[0]}` : "";
    sections.push(`- [\`${tool.qualifiedName}\`](#${tool.qualifiedName.toLowerCase().replace(/\./g, "")})${desc}`);
  }

  if (truncatedCount > 0) {
    sections.push("");
    sections.push(`*... and ${truncatedCount} more tools.*`);
  }

  // Detailed tool definitions
  sections.push("", "---", "");
  sections.push("## Tool Details");
  sections.push("");

  for (const tool of toolsToInclude) {
    sections.push(...formatToolDefinition(tool));
    sections.push("---", "");
  }

  // Footer
  if (toolkit.generatedAt) {
    sections.push("");
    sections.push(`*Documentation generated: ${toolkit.generatedAt}*`);
  }

  return sections.join("\n");
}

