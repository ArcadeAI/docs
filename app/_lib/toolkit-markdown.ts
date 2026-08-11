import type {
  DocumentationChunk,
  DocumentationChunkLocation,
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
const DEFAULT_CHUNK_PRIORITY = 100;
const HEADER_PREFIX_REGEX = /^#+\s*/;

function compareChunks(
  left: DocumentationChunk,
  right: DocumentationChunk
): number {
  const priorityDifference =
    (left.priority ?? DEFAULT_CHUNK_PRIORITY) -
    (right.priority ?? DEFAULT_CHUNK_PRIORITY);
  if (priorityDifference !== 0) {
    return priorityDifference;
  }

  const leftHeader = (left.header ?? "")
    .replace(HEADER_PREFIX_REGEX, "")
    .trim();
  const rightHeader = (right.header ?? "")
    .replace(HEADER_PREFIX_REGEX, "")
    .trim();
  if (leftHeader && rightHeader) {
    return leftHeader.localeCompare(rightHeader);
  }
  if (leftHeader) {
    return -1;
  }
  if (rightHeader) {
    return 1;
  }
  return left.content.localeCompare(right.content);
}

function chunkBlocks(
  chunks: readonly DocumentationChunk[],
  location: DocumentationChunkLocation,
  position: DocumentationChunk["position"]
): string[] {
  return chunks
    .filter(
      (chunk) => chunk.location === location && chunk.position === position
    )
    .sort(compareChunks)
    .map((chunk) => {
      if (chunk.type === "code") {
        return `\`\`\`\n${chunk.content.trim()}\n\`\`\``;
      }
      if (chunk.title) {
        return `**${chunk.title}**\n\n${chunk.content.trim()}`;
      }
      return chunk.content.trim();
    });
}

function sectionBlocks(
  chunks: readonly DocumentationChunk[],
  location: DocumentationChunkLocation,
  defaultBlock: string | null
): string[] {
  const before = chunkBlocks(chunks, location, "before");
  const replacement = chunkBlocks(chunks, location, "replace");
  const after = chunkBlocks(chunks, location, "after");
  let middle: string[] = [];
  if (replacement.length > 0) {
    middle = replacement;
  } else if (defaultBlock) {
    middle = [defaultBlock];
  }
  return [...before, ...middle, ...after];
}

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
  const chunks = tool.documentationChunks ?? [];

  blocks.push(
    ...sectionBlocks(chunks, "description", tool.description?.trim() ?? null)
  );

  const scopes = tool.auth?.scopes ?? [];
  blocks.push(
    ...sectionBlocks(
      chunks,
      "auth",
      scopes.length > 0
        ? `**Required OAuth scopes:** ${scopes.map((s) => `\`${s}\``).join(", ")}`
        : null
    )
  );

  const secrets = tool.secrets ?? [];
  blocks.push(
    ...sectionBlocks(
      chunks,
      "secrets",
      secrets.length > 0
        ? `**Secrets:** ${secrets.map((s) => `\`${s}\``).join(", ")}`
        : null
    )
  );

  let parametersBlock: string;
  if (tool.parameters && tool.parameters.length > 0) {
    const rows = [
      "| Name | Type | Required | Description |",
      "| --- | --- | --- | --- |",
      ...tool.parameters.map(parameterRow),
    ];
    parametersBlock = `**Parameters**\n\n${rows.join("\n")}`;
  } else {
    parametersBlock = "_No parameters._";
  }
  blocks.push(...sectionBlocks(chunks, "parameters", parametersBlock));

  const outputDescription = tool.output?.description
    ? ` — ${tool.output.description}`
    : "";
  blocks.push(
    ...sectionBlocks(
      chunks,
      "output",
      tool.output
        ? `**Output:** \`${tool.output.type}\`${outputDescription}`
        : null
    )
  );

  const example = exampleBlock(tool);
  if (example) {
    blocks.push(example);
  }

  return blocks.join("\n\n");
}

export function toToolkitMarkdown(data: ToolkitData): string {
  const blocks: string[] = [`# ${data.label || data.id}`];
  const chunks = data.documentationChunks ?? [];

  if (data.description) {
    blocks.push(data.description.trim());
  }
  blocks.push(...chunkBlocks(chunks, "header", "before"));
  blocks.push(...chunkBlocks(chunks, "description", "before"));
  blocks.push(...chunkBlocks(chunks, "description", "after"));
  blocks.push(...chunkBlocks(chunks, "header", "replace"));
  blocks.push(...chunkBlocks(chunks, "header", "after"));
  if (data.summary) {
    blocks.push(data.summary.trim());
  }
  blocks.push(...chunkBlocks(chunks, "auth", "before"));
  blocks.push(...chunkBlocks(chunks, "auth", "after"));
  blocks.push(...chunkBlocks(chunks, "before_available_tools", "before"));
  blocks.push(...chunkBlocks(chunks, "before_available_tools", "after"));
  blocks.push(...chunkBlocks(chunks, "custom_section", "before"));
  blocks.push(...chunkBlocks(chunks, "custom_section", "after"));

  const tools = data.tools ?? [];
  blocks.push(`## Tools (${tools.length})`);
  blocks.push(...chunkBlocks(chunks, "after_available_tools", "before"));
  blocks.push(...chunkBlocks(chunks, "after_available_tools", "after"));
  for (const tool of tools) {
    blocks.push(toolBlock(tool));
  }

  blocks.push(...chunkBlocks(chunks, "footer", "before"));
  blocks.push(...chunkBlocks(chunks, "footer", "replace"));
  blocks.push(...chunkBlocks(chunks, "footer", "after"));

  return `${blocks.join("\n\n")}\n`;
}
