import path from "node:path";
import type { FileTypeHandler } from "../types";
import { getLanguageName } from "../utils";

// Top-level regexes per performance rule
const META_EXPORT_REGEX = /export\s+default\s+\{([\s\S]*?)\}\s*;?/;
const NEWLINE_REGEX = /\r?\n/;
const CODE_FENCE_REGEX = /^```/;
const LANG_ATTR_REGEX = /lang="[a-z]{2}(?:-[A-Z]{2})?"/;

/**
 * File type handlers for different content types
 */
export const FILE_TYPE_HANDLERS: FileTypeHandler[] = [
  {
    fileType: "mdx",
    extensions: new Set([".mdx"]),
    systemPrompt: (locale: string) => buildSystemPrompt(locale),
    preprocessContent: (content: string) => content,
    postprocessContent: (content: string) => sanitizeMdxWrappingFences(content),
    validateOutput: (content: string) =>
      !(content.includes("CONTENT START") || content.includes("CONTENT END")),
  },
  {
    fileType: "meta",
    extensions: new Set(["_meta.ts", "_meta.tsx", "_meta.js"]),
    systemPrompt: (locale: string) => buildMetaSystemPrompt(locale),
    preprocessContent: (content: string) =>
      extractMetaObject(content) || content,
    postprocessContent: (content: string) =>
      reconstructMeta(sanitizeMetaBody(content)),
    validateOutput: (content: string) =>
      content.includes("export default {") && content.endsWith("};\n"),
  },
  {
    fileType: "tsx",
    extensions: new Set([".ts", ".tsx", ".js", ".jsx"]),
    systemPrompt: (locale: string) => buildTsxSystemPrompt(locale),
    preprocessContent: (content: string) => content,
    postprocessContent: (content: string) => content,
    validateOutput: (_content: string) => true, // Basic TSX validation could be added
  },
  {
    fileType: "layout",
    extensions: new Set(["layout.tsx"]),
    systemPrompt: (locale: string) => buildLayoutSystemPrompt(locale),
    preprocessContent: (content: string) => content,
    postprocessContent: (content: string) => content,
    // We cannot access locale here; ensure a lang attribute exists at least
    validateOutput: (content: string) => LANG_ATTR_REGEX.test(content),
  },
];

/**
 * Get file type handler for processing
 */
export function getFileTypeHandler(fileName: string): FileTypeHandler {
  const handler = FILE_TYPE_HANDLERS.find(
    (h) =>
      h.extensions.has(path.basename(fileName)) ||
      (fileName === "layout.tsx" && h.fileType === "layout")
  );

  const fallback = FILE_TYPE_HANDLERS.find((h) => h.fileType === "tsx");
  return handler ?? fallback ?? FILE_TYPE_HANDLERS[0];
}

const ARCADE_CONTEXT = `Context about the product (Arcade):
- This documentation belongs to Arcade, a platform that helps AI agents securely take real-world actions with user-specific permissions, pre-built integrations (e.g., Gmail, Slack, GitHub), and an engine/runtime for tools and MCP servers.
- Reference: https://docs.arcade.dev/home`;

const buildStyleGuidelines = (
  languageName: string
) => `Style and terminology (very important):
- Use idiomatic, native ${languageName} as used in high-quality developer docs.
- Avoid literal calques; prefer the most widely used community term.
- Keep dominant technical terms in English when they are typically left untranslated in ${languageName} developer materials.
- Prefer natural collocations over word-by-word mappings; choose concise, direct documentation tone.`;

/**
 * Build system prompt for MDX files
 */
function buildSystemPrompt(locale: string): string {
  const languageName = getLanguageName(locale);
  return `You are a professional technical translator for developer documentation.
Translate the following Nextra MDX file from English to ${languageName}.

${ARCADE_CONTEXT}

Audience and perspective:
- You are translating documentation for users who speak ${languageName}.
- If the source mentions the language (e.g., "English version"), localize it from the reader's perspective (e.g., "${languageName} version").

Structural constraints (follow exactly):
- Do NOT add, remove, or reorder characters or lines, except to replace human-readable text with its translation.
- Preserve MDX/JSX, imports/exports, props/attributes, frontmatter, headings (#), lists (-, 1.), punctuation, ALL whitespace, blank lines, and indentation exactly.
- Translate ONLY visible prose (headings, paragraphs, list items, and text nodes inside JSX elements).
- Do NOT translate code blocks/fences, inline code (\`like this\`), URLs, identifiers, tag/prop names, attribute values (unless visible UI text), or anything in backticks.
- Do NOT translate Dashboard UI element names (e.g., "Create API Key", "API Keys page", "Dashboard").
- Do NOT add Markdown code fences anywhere.

${buildStyleGuidelines(languageName)}
- When unsure, prefer the term most common in ${languageName} developer communities; if still ambiguous, leave the source text unchanged.

Return ONLY the full translated document content with the exact original structure.`;
}

/**
 * Build user prompt for MDX files
 */
export function buildUserPrompt(params: {
  content: string;
  filePath: string;
  locale: string;
}): string {
  const { content, filePath, locale } = params;
  return `Context: ${filePath}\nTarget locale: ${locale}\n\nTranslate the prose only. Keep MDX/JSX and code blocks intact.\nReturn ONLY the translated file content, no extra text.\n\nCONTENT START\n${content}\nCONTENT END`;
}

/**
 * Build system prompt for meta files
 */
function buildMetaSystemPrompt(locale: string): string {
  const languageName = getLanguageName(locale);
  return `You are localizing TypeScript object literals for documentation UI strings. Translate ONLY string literal values from English to ${languageName}.

${ARCADE_CONTEXT}
- Keep brand/product names like Arcade, Arcade Engine, Control Plane in English unless a widely accepted localized form exists.

Structural constraints:
- Preserve all keys and their order; do NOT add or remove keys.
- Preserve quotes style, commas (including trailing commas), spacing, and formatting.
- Do NOT include code fences, backticks, comments, or an export statement.
- Do NOT modify URLs, identifiers, or non-string values.

${buildStyleGuidelines(languageName)}

Return ONLY the object body lines between { and }, not including the braces.`;
}

/**
 * Build system prompt for TSX files
 */
function buildTsxSystemPrompt(locale: string): string {
  const languageName = getLanguageName(locale);
  return `You are a professional technical translator for React/TypeScript. Translate user-visible UI strings from English to ${languageName} while preserving all code exactly.

${ARCADE_CONTEXT}
- Keep brand/product names like Arcade, Arcade Engine, Control Plane in English unless a widely accepted localized form exists.

CRITICAL RULES:
- Translate ONLY user-visible string literals (in quotes) used for UI text, labels, titles, or messages.
- Do NOT translate: variable/function names, property names, import paths, URLs, technical identifiers, comments, alt attributes, className values, data attributes, or other technical strings.
- Do NOT translate Dashboard UI element names (e.g., "Create API Key", "API Keys page", "Dashboard").
- Preserve ALL formatting and code structure exactly (imports/exports, types, indentation, spacing, line breaks, semicolons, brackets).
- Do NOT add or remove any lines of code. Do NOT add code fences or markdown.

${buildStyleGuidelines(languageName)}

Examples of what TO translate:
- "Add to Slack" → "Agregar a Slack" (if Spanish)
- "Contact us" → "Contáctanos" (if Spanish)
- title: "Home" → title: "Inicio" (if Spanish)

Examples of what NOT to translate:
- alt="Add to Slack" (technical attribute)
- className="flex items-center"
- import statements
- function names
- variable names
- "Create API Key" (Dashboard UI element)
- "API Keys page" (Dashboard UI element)
- "Dashboard" (when referring to the Arcade Dashboard)

Return ONLY the complete translated file content with exact original structure.`;
}

/**
 * Build system prompt for layout files
 */
function buildLayoutSystemPrompt(locale: string): string {
  const languageName = getLanguageName(locale);
  const localeCode = locale === "pt-BR" ? "pt-BR" : "es";
  return `You are translating a Next.js layout component for ${languageName} locale.

${ARCADE_CONTEXT}

CRITICAL RULES:
- Update the lang attribute value from "en" to "${localeCode}"
- Preserve ALL other code exactly as-is
- Do NOT translate any other strings, variable names, or code elements
- Do NOT add code fences or markdown formatting

Return ONLY the complete file content with the updated lang attribute.`;
}

/**
 * Extract meta object content from file
 */
function extractMetaObject(content: string): string | null {
  // naive: export default { ... } ;
  const match = content.match(META_EXPORT_REGEX);
  if (!match) {
    return null;
  }
  return match[1] ?? null;
}

/**
 * Reconstruct meta file content
 */
function reconstructMeta(contentBody: string): string {
  return `export default {\n${contentBody}\n};\n`;
}

/**
 * Sanitize meta body content
 */
function sanitizeMetaBody(raw: string): string {
  // Remove markdown code fences
  const withoutFences = raw
    .split(NEWLINE_REGEX)
    .filter((line) => !CODE_FENCE_REGEX.test(line.trim()))
    .join("\n")
    .trim();

  // If it contains an export default block, extract again
  const exportMatch = withoutFences.match(META_EXPORT_REGEX);
  if (exportMatch?.[1]) {
    return exportMatch[1].trim();
  }

  // If it is a full object literal, strip the outer braces
  const startsWithBrace = withoutFences.startsWith("{");
  const endsWithBrace = withoutFences.endsWith("}");
  if (startsWithBrace && endsWithBrace) {
    const inner = withoutFences.slice(1, -1).trim();
    return inner;
  }

  return withoutFences;
}

/**
 * Sanitize MDX wrapping fences
 */
function sanitizeMdxWrappingFences(raw: string): string {
  const lines = raw.split(NEWLINE_REGEX);
  let start = 0;
  let end = lines.length - 1;

  while (start <= end && lines[start].trim() === "") {
    start += 1;
  }
  while (end >= start && lines[end].trim() === "") {
    end -= 1;
  }

  if (start > end) {
    return raw;
  }

  const first = lines[start].trim();
  const last = lines[end].trim();

  if (CODE_FENCE_REGEX.test(first) && CODE_FENCE_REGEX.test(last)) {
    const kept = [
      ...lines.slice(0, start),
      ...lines.slice(start + 1, end),
      ...lines.slice(end + 1),
    ];
    return kept.join("\n");
  }

  return raw;
}
