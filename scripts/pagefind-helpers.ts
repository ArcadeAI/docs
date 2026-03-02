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
 * Strips MDX-specific syntax (frontmatter, imports, exports) from content,
 * leaving clean text suitable for search indexing.
 */
export function stripMdxSyntax(content: string): string {
  return content
    .replace(/^---\n[\s\S]*?\n---\n?/, "")
    .replace(/^import\s+.*$/gm, "")
    .replace(/^export\s+.*$/gm, "")
    .trim();
}
