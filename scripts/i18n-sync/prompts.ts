import type { FileType } from "./types.js";

const ARCADE_CONTEXT = `Context about the product (Arcade):
- This documentation belongs to Arcade, a platform that helps AI agents securely take real-world actions with user-specific permissions, pre-built integrations (e.g., Gmail, Slack, GitHub), and an engine/runtime for tools and MCP servers.
- Reference: https://docs.arcade.dev/en/home`;

const LOCALE_LANGUAGE_NAMES: Record<string, string> = {
  en: "English",
  es: "Spanish",
  "pt-BR": "Brazilian Portuguese",
};

function getLanguageName(locale: string): string {
  return LOCALE_LANGUAGE_NAMES[locale] ?? locale;
}

function buildStyleGuidelines(languageName: string): string {
  return `Style (CRITICAL - Read carefully):
- Write NATURAL ${languageName} as developers actually speak - NOT word-by-word literal translations
- Restructure sentences to sound natural in ${languageName}, don't keep English sentence structure
- Use SHORT, direct terms (e.g., "Herramientas" NOT "Kits de herramientas")
- Keep technical terms in English: API, CLI, SDK, Framework, Plugin, OAuth, endpoint, webhook
- BAD: "Detrás de escena, gestiona sin problemas" (too literal, sounds unnatural)
- GOOD: "Gestiona automáticamente" or "El sistema maneja" (natural, concise)
- Think: "How would a native ${languageName} developer write this?" NOT "What's each word's translation?"`;
}

function buildCommonPromptContext(locale: string) {
  const languageName = getLanguageName(locale);
  return {
    languageName,
    arcadeContext: ARCADE_CONTEXT,
    styleGuidelines: buildStyleGuidelines(languageName),
  };
}

function buildMdxSystemPrompt(locale: string): string {
  const { languageName, arcadeContext, styleGuidelines } =
    buildCommonPromptContext(locale);
  return `Translate this Nextra MDX file from English to ${languageName}.

${arcadeContext}

!!!CRITICAL - ABSOLUTELY NO ADDITIONS!!!
- DO NOT wrap in code fences (\`\`\`mdx, \`\`\`, etc.)
- DO NOT add ANY markdown formatting around the content
- DO NOT add language tags, backticks, or any wrapper
- The first character of your response MUST be the first character of the MDX file
- The last character of your response MUST be the last character of the MDX file

Preserve exactly:
- MDX/JSX structure, imports/exports, props, frontmatter, whitespace, indentation
- Existing code blocks/fences, inline code (\`...\`), URLs, identifiers
- Dashboard UI names ("Create API Key", "API Keys page", "Dashboard")

Translate ONLY: Visible text (headings, paragraphs, list items, JSX text)

${styleGuidelines}

Return ONLY the raw MDX file content, character-for-character with translated text.`;
}

function buildMetaSystemPrompt(locale: string): string {
  const { languageName, arcadeContext, styleGuidelines } =
    buildCommonPromptContext(locale);
  return `Localize TypeScript/JavaScript meta file. Translate ONLY string values to ${languageName}.

${arcadeContext}

!!!CRITICAL - ABSOLUTELY NO ADDITIONS!!!
- DO NOT wrap in code fences (\`\`\`typescript, \`\`\`ts, \`\`\`, etc.)
- DO NOT add ANY formatting or wrapper text
- The first line MUST start with "import" (or whatever the file starts with)
- DO NOT add language tags or any extra characters

Preserve exactly:
- ALL imports, exports, type annotations, code structure
- Object keys (property names), variable/function names, URLs, hrefs
- Formatting: quotes, commas, spacing, indentation

Translate ONLY: String literal values (text in quotes) for titles/labels

Examples:
- "Toolkits" → "Herramientas" NOT "Kits de herramientas"
- "Getting Started" → "Primeros pasos" NOT "Obteniendo comenzado"

${styleGuidelines}

Return raw TypeScript code ONLY - start with imports, end with export.`;
}

function buildTsxSystemPrompt(locale: string): string {
  const { languageName, arcadeContext, styleGuidelines } =
    buildCommonPromptContext(locale);
  return `Translate React/TypeScript UI strings from English to ${languageName}.

${arcadeContext}

!!!CRITICAL - ABSOLUTELY NO ADDITIONS!!!
- DO NOT wrap in code fences (\`\`\`tsx, \`\`\`typescript, \`\`\`, etc.)
- DO NOT add ANY wrapper or formatting
- First line MUST start with the actual file content (usually "import")
- DO NOT add language tags or extra characters

Translate ONLY: User-visible string literals (in quotes) for UI text, labels, titles

Do NOT translate:
- Variable/function names, imports, URLs, className, alt attributes
- Dashboard UI elements ("Create API Key", "API Keys page", "Dashboard")

${styleGuidelines}

Examples:
- "Toolkits" → "Herramientas" or keep "Toolkits"
- "Contact us" → "Contáctanos" (Spanish) / "Contate-nos" (Portuguese)

Return raw TypeScript/TSX code ONLY - NO wrappers.`;
}

function buildLayoutSystemPrompt(locale: string): string {
  const { arcadeContext } = buildCommonPromptContext(locale);
  const localeCode = locale === "pt-BR" ? "pt-BR" : "es";
  return `Translate Next.js layout for ${localeCode} locale.

${arcadeContext}

!!!CRITICAL - ABSOLUTELY NO ADDITIONS!!!
- DO NOT wrap in code fences (\`\`\`tsx, \`\`\`, etc.)
- DO NOT add ANY formatting or wrapper
- First character MUST be the start of the actual file
- Return ONLY raw TypeScript code

Change ONLY: lang attribute from "en" to "${localeCode}"
Preserve: ALL other code exactly as-is

Return raw TSX file content - NO wrappers.`;
}

export const FILE_TYPE_PROMPTS: Record<FileType, (locale: string) => string> = {
  mdx: buildMdxSystemPrompt,
  meta: buildMetaSystemPrompt,
  tsx: buildTsxSystemPrompt,
  layout: buildLayoutSystemPrompt,
};
