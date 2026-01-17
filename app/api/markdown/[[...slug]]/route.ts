import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Regex pattern for removing .md extension
const MD_EXTENSION_REGEX = /\.md$/;

// Regex patterns for MDX to Markdown compilation (top-level for performance)
const FRONTMATTER_REGEX = /^---\n([\s\S]*?)\n---\n?/;
const IMPORT_FROM_REGEX = /^import\s+.*?from\s+['"].*?['"];?\s*$/gm;
const IMPORT_DIRECT_REGEX = /^import\s+['"].*?['"];?\s*$/gm;
const IMPORT_DESTRUCTURE_REGEX =
  /^import\s*\{[\s\S]*?\}\s*from\s*['"].*?['"];?\s*$/gm;
const EXPORT_REGEX =
  /^export\s+(const|let|var|function|default)\s+[\s\S]*?(?=\n(?:import|export|#|\n|$))/gm;
const SELF_CLOSING_JSX_REGEX = /<([A-Z][a-zA-Z0-9.]*)[^>]*\/>/g;
const JSX_WITH_CHILDREN_REGEX = /<([A-Z][a-zA-Z0-9.]*)[^>]*>([\s\S]*?)<\/\1>/g;
const CODE_BLOCK_REGEX = /```[\s\S]*?```/g;
const JSX_EXPRESSION_REGEX = /\{[^}]+\}/g;
const EXCESSIVE_NEWLINES_REGEX = /\n{3,}/g;
const CODE_BLOCK_PLACEHOLDER_REGEX = /__CODE_BLOCK_(\d+)__/g;

// Regex for extracting frontmatter fields
const TITLE_REGEX = /title:\s*["']?([^"'\n]+)["']?/;
const DESCRIPTION_REGEX = /description:\s*["']?([^"'\n]+)["']?/;

/**
 * Extracts title and description from frontmatter
 */
function extractFrontmatterMeta(frontmatter: string): {
  title: string;
  description: string;
} {
  const titleMatch = frontmatter.match(TITLE_REGEX);
  const descriptionMatch = frontmatter.match(DESCRIPTION_REGEX);
  return {
    title: titleMatch?.[1] || "Arcade Documentation",
    description: descriptionMatch?.[1] || "",
  };
}

/**
 * Compiles MDX content to clean markdown by:
 * - Preserving frontmatter
 * - Removing import statements
 * - Converting JSX components to their text content
 * - Preserving standard markdown
 * - Providing fallback content for component-only pages
 */
function compileMdxToMarkdown(content: string, pagePath: string): string {
  let result = content;

  // Extract and preserve frontmatter if present
  let frontmatter = "";
  const frontmatterMatch = result.match(FRONTMATTER_REGEX);
  if (frontmatterMatch) {
    frontmatter = frontmatterMatch[0];
    result = result.slice(frontmatterMatch[0].length);
  }

  // Remove import statements (various formats)
  result = result.replace(IMPORT_FROM_REGEX, "");
  result = result.replace(IMPORT_DIRECT_REGEX, "");
  result = result.replace(IMPORT_DESTRUCTURE_REGEX, "");

  // Remove export statements (like export const metadata)
  result = result.replace(EXPORT_REGEX, "");

  // Process self-closing JSX components (e.g., <Component /> or <Component prop="value" />)
  // Handles components with dots like <GuideOverview.Item />
  result = result.replace(SELF_CLOSING_JSX_REGEX, "");

  // Process JSX components with children - extract the text content
  // Handles components with dots like <Tabs.Tab>content</Tabs.Tab>
  // Keep processing until no more JSX components remain
  let previousResult = "";
  while (previousResult !== result) {
    previousResult = result;
    // Match opening tag, capture tag name (with dots), and content until matching closing tag
    result = result.replace(JSX_WITH_CHILDREN_REGEX, (_, _tag, innerContent) =>
      innerContent.trim()
    );
  }

  // Remove any remaining JSX expressions like {variable} or {expression}
  // But preserve code blocks by temporarily replacing them
  const codeBlocks: string[] = [];
  result = result.replace(CODE_BLOCK_REGEX, (match) => {
    codeBlocks.push(match);
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`;
  });

  // Now remove JSX expressions outside code blocks
  result = result.replace(JSX_EXPRESSION_REGEX, "");

  // Restore code blocks
  result = result.replace(
    CODE_BLOCK_PLACEHOLDER_REGEX,
    (_, index) => codeBlocks[Number.parseInt(index, 10)]
  );

  // Clean up excessive blank lines (more than 2 consecutive)
  result = result.replace(EXCESSIVE_NEWLINES_REGEX, "\n\n");

  // Trim leading/trailing whitespace
  result = result.trim();

  // If content is essentially empty (component-only page), provide fallback
  if (!result || result.length < 10) {
    const { title, description } = extractFrontmatterMeta(frontmatter);
    const htmlUrl = `https://docs.arcade.dev${pagePath}`;
    return `${frontmatter}# ${title}

${description}

This page contains interactive content. Visit the full page at: ${htmlUrl}
`;
  }

  // Reconstruct with frontmatter
  return `${frontmatter}${result}\n`;
}

export async function GET(
  request: NextRequest,
  _context: { params: Promise<{ slug?: string[] }> }
) {
  try {
    // Get the original pathname from the request
    const url = new URL(request.url);
    // Remove /api/markdown prefix to get the original path
    const originalPath = url.pathname.replace("/api/markdown", "");

    // Remove .md extension
    const pathWithoutMd = originalPath.replace(MD_EXTENSION_REGEX, "");

    // Map URL to file path
    // e.g., /en/home/quickstart -> app/en/home/quickstart/page.mdx
    const filePath = join(process.cwd(), "app", `${pathWithoutMd}/page.mdx`);

    // Check if file exists
    try {
      await access(filePath);
    } catch {
      return new NextResponse("Markdown file not found", { status: 404 });
    }

    const rawContent = await readFile(filePath, "utf-8");

    // Compile MDX to clean markdown
    const content = compileMdxToMarkdown(rawContent, pathWithoutMd);

    // Return the compiled markdown with proper headers
    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": "inline",
      },
    });
  } catch (error) {
    return new NextResponse(`Internal server error: ${error}`, {
      status: 500,
    });
  }
}
