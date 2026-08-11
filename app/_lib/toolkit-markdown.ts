import type {
  ToolDefinition,
  ToolkitData,
  ToolParameter,
} from "@/app/_components/toolkit-docs/types";

/**
 * Serialize full toolkit data to markdown for the "copy page as markdown" /
 * agent view. Toolkit reference pages render per-tool detail client-only (to
 * stay under Googlebot's 2 MB HTML limit), so the edge HTML→markdown view would
 * miss parameters/output/examples — this builds them straight from ToolkitData,
 * independent of the rendered HTML.
 */
const JSON_INDENT = 2;

/** Collapse newlines and escape pipes so a value is safe inside a table cell. */
function cell(value: string | null | undefined): string {
  return (value ?? "")
    .replace(/\s*\n\s*/g, " ")
    .replace(/\|/g, "\\|")
    .trim();
}

function parameterRow(param: ToolParameter): string {
  const type = param.enum ? `${param.type} (enum)` : param.type;
  const required = param.required ? "Yes" : "No";
  return `| \`${param.name}\` | ${cell(type)} | ${required} | ${cell(param.description)} |`;
}

function exampleBlock(tool: ToolDefinition): string | null {
  const example = tool.codeExample;
  if (!example?.parameters) {
    return null;
  }
  const input: Record<string, unknown> = {};
  for (const [name, param] of Object.entries(example.parameters)) {
    input[name] = param.value;
  }
  return [
    "**Example input**",
    "",
    "```json",
    JSON.stringify(input, null, JSON_INDENT),
    "```",
  ].join("\n");
}

function toolBlock(tool: ToolDefinition): string {
  const blocks: string[] = [`### ${tool.qualifiedName}`];

  if (tool.description) {
    blocks.push(tool.description.trim());
  }

  const scopes = tool.auth?.scopes ?? [];
  if (scopes.length > 0) {
    blocks.push(
      `**Required OAuth scopes:** ${scopes.map((s) => `\`${s}\``).join(", ")}`
    );
  }

  const secrets = tool.secrets ?? [];
  if (secrets.length > 0) {
    blocks.push(`**Secrets:** ${secrets.map((s) => `\`${s}\``).join(", ")}`);
  }

  if (tool.parameters && tool.parameters.length > 0) {
    const rows = [
      "| Name | Type | Required | Description |",
      "| --- | --- | --- | --- |",
      ...tool.parameters.map(parameterRow),
    ];
    blocks.push(`**Parameters**\n\n${rows.join("\n")}`);
  } else {
    blocks.push("_No parameters._");
  }

  if (tool.output) {
    const desc = tool.output.description ? ` — ${tool.output.description}` : "";
    blocks.push(`**Output:** \`${tool.output.type}\`${desc}`);
  }

  const example = exampleBlock(tool);
  if (example) {
    blocks.push(example);
  }

  return blocks.join("\n\n");
}

export function toToolkitMarkdown(data: ToolkitData): string {
  const blocks: string[] = [`# ${data.label || data.id}`];

  if (data.description) {
    blocks.push(data.description.trim());
  }
  if (data.summary) {
    blocks.push(data.summary.trim());
  }

  const tools = data.tools ?? [];
  blocks.push(`## Tools (${tools.length})`);
  for (const tool of tools) {
    blocks.push(toolBlock(tool));
  }

  return `${blocks.join("\n\n")}\n`;
}
