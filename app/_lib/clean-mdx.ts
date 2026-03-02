const FRONTMATTER_REGEX = /^---[\s\S]*?---\n?/;
const IMPORT_REGEX = /^import\s[^\n]+\n?/gm;
const EXPORT_LINE_REGEX = /^export\s[^\n]+\n?/gm;
const JSX_SELF_CLOSING_REGEX = /<[A-Z][A-Za-z.]*[^>]*\/>/g;
const JSX_OPENING_REGEX = /<[A-Z][A-Za-z.]*[^>]*>/g;
const JSX_CLOSING_REGEX = /<\/[A-Z][A-Za-z.]*>/g;
const HTML_OPEN_REGEX = /<(div|span|video|img|a|section|article)[^>]*>/gi;
const HTML_CLOSE_REGEX = /<\/(div|span|video|img|a|section|article)>/gi;
const CODE_FENCE_REGEX = /^```[\s\S]*?^```/gm;
const EXCESS_NEWLINES_REGEX = /\n{3,}/g;

/**
 * Converts raw MDX source into clean markdown that LLMs can read.
 * Strips frontmatter, import/export statements, and JSX component tags
 * while preserving all actual text content and standard markdown.
 *
 * Code blocks are protected — their contents are never modified.
 */
export function cleanMdxToMarkdown(raw: string): string {
  let text = raw;

  text = text.replace(FRONTMATTER_REGEX, "");

  // Extract code blocks and replace with placeholders to protect their contents
  const codeBlocks: string[] = [];
  text = text.replace(CODE_FENCE_REGEX, (match) => {
    const index = codeBlocks.length;
    codeBlocks.push(match);
    return `\n%%CODE_BLOCK_${index}%%\n`;
  });

  text = text.replace(IMPORT_REGEX, "");
  text = text.replace(EXPORT_LINE_REGEX, "");
  text = text.replace(JSX_SELF_CLOSING_REGEX, "");
  text = text.replace(JSX_OPENING_REGEX, "");
  text = text.replace(JSX_CLOSING_REGEX, "");
  text = text.replace(HTML_OPEN_REGEX, "");
  text = text.replace(HTML_CLOSE_REGEX, "");

  // Restore code blocks
  for (let i = 0; i < codeBlocks.length; i += 1) {
    text = text.replace(`%%CODE_BLOCK_${i}%%`, codeBlocks[i]);
  }

  text = text.replace(EXCESS_NEWLINES_REGEX, "\n\n");
  return text.trim();
}
