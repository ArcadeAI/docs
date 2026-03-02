import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

/**
 * Extracts the `title` field from MDX/Markdown YAML frontmatter.
 * Returns undefined if no frontmatter or no title field is present.
 */
export function extractFrontmatterTitle(content: string): string | undefined {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return undefined;
  const titleMatch = match[1].match(/^title:\s*["']?(.+?)["']?\s*$/m);
  return titleMatch?.[1];
}

/**
 * Strips MDX-specific syntax (frontmatter, imports, exports, JSX tags)
 * from content, leaving clean markdown suitable for search indexing.
 */
export function stripMdxSyntax(content: string): string {
  return (
    content
      // Remove YAML frontmatter block
      .replace(/^---\n[\s\S]*?\n---\n?/, "")
      // Remove import/export statements
      .replace(/^import\s+.*$/gm, "")
      .replace(/^export\s+.*$/gm, "")
      // Remove self-closing JSX tags: <Component /> or <Component prop="val" />
      .replace(/^<[A-Z]\w*\b[^>]*\/>\s*$/gm, "")
      // Remove opening JSX tags: <Component> or <Component prop="val">
      .replace(/^<[A-Z]\w*\b[^>]*>\s*$/gm, "")
      // Remove closing JSX tags: </Component>
      .replace(/^<\/[A-Z]\w*>\s*$/gm, "")
      .trim()
  );
}

/**
 * Converts markdown to HTML for Pagefind indexing.
 * Falls back to the raw markdown on error.
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  try {
    const result = await remark()
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(markdown);
    return String(result);
  } catch {
    return markdown;
  }
}
