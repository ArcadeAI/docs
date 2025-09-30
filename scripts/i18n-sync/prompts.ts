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
  return `Style (CRITICAL):
- Use natural ${languageName} that developers actually speak - NOT literal word-by-word translations
- Choose concise terms over verbose calques (e.g., "Herramientas" NOT "Kits de herramientas")
- Keep common technical terms in English: API, CLI, SDK, Framework, Plugin, Toolkit
- Think: "What would a ${languageName} developer say?" not "What's the dictionary translation?"`;
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

Preserve exactly:
- MDX/JSX structure, imports/exports, props, frontmatter, whitespace, indentation
- Code blocks/fences, inline code (\`...\`), URLs, identifiers, backticked text
- Dashboard UI names ("Create API Key", "API Keys page", "Dashboard")

Translate ONLY:
- Visible text: headings, paragraphs, list items, text inside JSX elements
- Localize language references (e.g., "English version" → "${languageName} version")

${styleGuidelines}

Return ONLY the translated content with exact original structure.`;
}

function buildMetaSystemPrompt(locale: string): string {
  const { languageName, arcadeContext, styleGuidelines } =
    buildCommonPromptContext(locale);
  return `Localize TypeScript/JavaScript meta file. Translate ONLY string values to ${languageName}.

${arcadeContext}

Preserve exactly:
- ALL imports, exports, type annotations, code structure
- Object keys (property names), variable/function names, URLs, hrefs, className
- Formatting: quotes, commas, spacing, indentation

Translate ONLY: String literal values (text in quotes) for titles/labels

Examples:
- "Toolkits" → "Herramientas" NOT "Kits de herramientas"
- "Getting Started" → "Primeros pasos" NOT "Obteniendo comenzado"

${styleGuidelines}

Return complete file with imports/exports.`;
}

function buildTsxSystemPrompt(locale: string): string {
  const { languageName, arcadeContext, styleGuidelines } =
    buildCommonPromptContext(locale);
  return `Translate React/TypeScript UI strings from English to ${languageName}.

${arcadeContext}

Translate ONLY: User-visible string literals (in quotes) for UI text, labels, titles

Do NOT translate:
- Variable/function names, imports, URLs, className, alt attributes
- Dashboard UI elements ("Create API Key", "API Keys page", "Dashboard")
- Preserve ALL code structure exactly

${styleGuidelines}

Examples:
- "Toolkits" → "Herramientas" or keep "Toolkits"
- "Contact us" → "Contáctanos" (Spanish) / "Contate-nos" (Portuguese)
- "Getting Started" → "Primeros pasos"

Return complete file with exact structure.`;
}

function buildLayoutSystemPrompt(locale: string): string {
  const { arcadeContext } = buildCommonPromptContext(locale);
  const localeCode = locale === "pt-BR" ? "pt-BR" : "es";
  return `Translate Next.js layout for ${localeCode} locale.

${arcadeContext}

Change: lang attribute from "en" to "${localeCode}"
Preserve: ALL other code exactly as-is

Return complete file.`;
}

export const FILE_TYPE_PROMPTS: Record<FileType, (locale: string) => string> = {
  mdx: buildMdxSystemPrompt,
  meta: buildMetaSystemPrompt,
  tsx: buildTsxSystemPrompt,
  layout: buildLayoutSystemPrompt,
};
