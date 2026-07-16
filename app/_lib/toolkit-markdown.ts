import { sortDocumentationChunks } from "@/app/_components/toolkit-docs/lib/documentation-chunks";
import type {
  DocumentationChunk,
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

function documentationBlocks(
  chunks: readonly DocumentationChunk[] | null | undefined,
  location: DocumentationChunk["location"],
  position: DocumentationChunk["position"]
): string[] {
  const blocks: string[] = [];
  const sorted = sortDocumentationChunks(
    (chunks ?? []).filter(
      (chunk) => chunk.location === location && chunk.position === position
    )
  );

  for (const chunk of sorted) {
    const content = chunk.content.trim();
    if (!content) {
      continue;
    }
    blocks.push(
      chunk.type === "code" ? `\`\`\`text\n${content}\n\`\`\`` : content
    );
  }

  return blocks;
}

function sectionBlocks(
  chunks: readonly DocumentationChunk[] | null | undefined,
  location: DocumentationChunk["location"],
  defaultBlock: string | null
): string[] {
  const before = documentationBlocks(chunks, location, "before");
  const replacement = documentationBlocks(chunks, location, "replace");
  const after = documentationBlocks(chunks, location, "after");
  const hasReplacement = (chunks ?? []).some(
    (chunk) => chunk.location === location && chunk.position === "replace"
  );
  let content: string[] = [];
  if (hasReplacement) {
    content = replacement;
  } else if (defaultBlock) {
    content = [defaultBlock];
  }
  return [...before, ...content, ...after];
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

  blocks.push(
    ...sectionBlocks(
      tool.documentationChunks,
      "description",
      tool.description?.trim() ?? null
    )
  );

  const parameterBlock =
    tool.parameters && tool.parameters.length > 0
      ? `**Parameters**\n\n${[
          "| Name | Type | Required | Description |",
          "| --- | --- | --- | --- |",
          ...tool.parameters.map(parameterRow),
        ].join("\n")}`
      : "_No parameters._";
  blocks.push(
    ...sectionBlocks(tool.documentationChunks, "parameters", parameterBlock)
  );

  const secrets = tool.secrets ?? [];
  const secretsBlock =
    secrets.length > 0
      ? `**Secrets:** ${secrets.map((secret) => `\`${secret}\``).join(", ")}`
      : null;
  blocks.push(
    ...sectionBlocks(tool.documentationChunks, "secrets", secretsBlock)
  );

  const scopes = tool.auth?.scopes ?? [];
  const scopesBlock =
    scopes.length > 0
      ? `**Required OAuth scopes:** ${scopes
          .map((scope) => `\`${scope}\``)
          .join(", ")}`
      : null;
  blocks.push(...sectionBlocks(tool.documentationChunks, "auth", scopesBlock));

  const outputBlock = tool.output
    ? `**Output:** \`${tool.output.type}\`${
        tool.output.description ? ` — ${tool.output.description}` : ""
      }`
    : null;
  blocks.push(
    ...sectionBlocks(tool.documentationChunks, "output", outputBlock)
  );

  const example = exampleBlock(tool);
  if (example) {
    blocks.push(example);
  }

  return blocks.join("\n\n");
}

export function toToolkitMarkdown(data: ToolkitData): string {
  const blocks: string[] = [`# ${data.label || data.id}`];
  const chunks = data.documentationChunks;

  blocks.push(...documentationBlocks(chunks, "header", "before"));
  blocks.push(
    ...sectionBlocks(chunks, "description", data.description?.trim() ?? null)
  );
  blocks.push(...documentationBlocks(chunks, "header", "replace"));
  blocks.push(...documentationBlocks(chunks, "header", "after"));
  if (data.summary) {
    blocks.push(data.summary.trim());
  }
  blocks.push(...documentationBlocks(chunks, "auth", "before"));
  blocks.push(...documentationBlocks(chunks, "auth", "after"));
  blocks.push(
    ...documentationBlocks(chunks, "before_available_tools", "before")
  );
  blocks.push(
    ...documentationBlocks(chunks, "before_available_tools", "after")
  );
  blocks.push(...documentationBlocks(chunks, "custom_section", "before"));
  blocks.push(...documentationBlocks(chunks, "custom_section", "after"));

  const tools = data.tools ?? [];
  blocks.push(`## Tools (${tools.length})`);
  blocks.push(
    ...documentationBlocks(chunks, "after_available_tools", "before")
  );
  blocks.push(...documentationBlocks(chunks, "after_available_tools", "after"));
  for (const tool of tools) {
    blocks.push(toolBlock(tool));
  }
  blocks.push(...documentationBlocks(chunks, "footer", "before"));
  blocks.push(...documentationBlocks(chunks, "footer", "replace"));
  blocks.push(...documentationBlocks(chunks, "footer", "after"));

  return `${blocks.join("\n\n")}\n`;
}
