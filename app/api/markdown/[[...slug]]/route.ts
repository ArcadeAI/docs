import { access, readdir, readFile } from "node:fs/promises";
import { join, normalize, resolve } from "node:path";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Regex pattern for removing .md extension
const MD_EXTENSION_REGEX = /\.md$/;
const TOOLKIT_MARKDOWN_ROOT = join(process.cwd(), "public", "toolkit-markdown");
const APP_ROOT = join(process.cwd(), "app");

// Directory containing pre-generated clean markdown files
const CLEAN_MARKDOWN_DIR = join(process.cwd(), "public", "_markdown");

/**
 * Validates that a resolved path is within the allowed directory.
 * Prevents path traversal attacks (e.g., ../../../etc/passwd).
 */
function isPathWithinDirectory(filePath: string, allowedDir: string): boolean {
  const resolvedPath = resolve(filePath);
  const resolvedAllowedDir = resolve(allowedDir);
  return (
    resolvedPath.startsWith(`${resolvedAllowedDir}/`) ||
    resolvedPath === resolvedAllowedDir
  );
}

/**
 * Sanitizes a path by removing path traversal sequences.
 * Returns null if the path contains suspicious patterns.
 */
function sanitizePath(inputPath: string): string | null {
  // Normalize the path to resolve . and .. segments
  const normalized = normalize(inputPath);

  // Reject paths that try to escape (contain .. after normalization that go above root)
  if (normalized.includes("..")) {
    return null;
  }

  // Reject null bytes (common attack vector)
  if (inputPath.includes("\0")) {
    return null;
  }

  return normalized;
}

// Minimum path segments for toolkit markdown: [lang, "resources", "integrations", category, toolkitId]
const MIN_TOOLKIT_PATH_SEGMENTS = 5;

// Valid toolkit categories
const TOOLKIT_CATEGORIES = [
  "customer-support",
  "databases",
  "development",
  "entertainment",
  "others",
  "payments",
  "productivity",
  "sales",
  "search",
  "social",
];

type ToolkitMarkdownTarget = {
  category: string;
  toolkitId: string;
};

/**
 * Check if a path matches the toolkit documentation pattern.
 * Handles both actual toolkit IDs and the [toolkitId] dynamic route pattern.
 */
const getToolkitMarkdownTarget = (
  pathWithoutMd: string
): ToolkitMarkdownTarget | null => {
  const segments = pathWithoutMd.split("/").filter(Boolean);

  // Expected: [lang, "resources", "integrations", category, toolkitId]
  if (segments.length < MIN_TOOLKIT_PATH_SEGMENTS) {
    return null;
  }

  const [, resources, integrations, category, toolkitId] = segments;

  // Check if this is a toolkit integration path
  if (resources !== "resources" || integrations !== "integrations") {
    return null;
  }

  // Check if category is valid
  if (!TOOLKIT_CATEGORIES.includes(category)) {
    return null;
  }

  // Skip if toolkitId is the literal "[toolkitId]" (dynamic route pattern)
  if (toolkitId === "[toolkitId]") {
    return null;
  }

  return { category, toolkitId: toolkitId.toLowerCase() };
};

/**
 * Try to find the toolkit markdown file with case-insensitive matching.
 */
async function findToolkitMarkdownFile(
  category: string,
  toolkitId: string
): Promise<string | null> {
  const categoryDir = join(TOOLKIT_MARKDOWN_ROOT, category);

  try {
    const files = await readdir(categoryDir);
    const targetFile = `${toolkitId}.md`;

    // Try exact match first
    if (files.includes(targetFile)) {
      return join(categoryDir, targetFile);
    }

    // Try case-insensitive match
    const match = files.find(
      (f) => f.toLowerCase() === targetFile.toLowerCase()
    );
    if (match) {
      return join(categoryDir, match);
    }

    return null;
  } catch {
    return null;
  }
}

// Regex patterns for MDX to Markdown compilation (top-level for performance)
const FRONTMATTER_REGEX = /^---\n([\s\S]*?)\n---\n?/;
const IMPORT_FROM_REGEX = /^import\s+.*?from\s+['"].*?['"];?\s*$/gm;
const IMPORT_DIRECT_REGEX = /^import\s+['"].*?['"];?\s*$/gm;
const IMPORT_DESTRUCTURE_REGEX =
  /^import\s*\{[\s\S]*?\}\s*from\s*['"].*?['"];?\s*$/gm;
const EXPORT_REGEX =
  /^export\s+(const|let|var|function|default)\s+[\s\S]*?(?=\n(?:import|export|#|\n|$))/gm;
// JSX attribute pattern that properly handles:
// - Quoted strings containing ">" characters
// - JSX expressions in curly braces containing ">" (arrow functions, comparisons)
// - Multiline attributes (newlines allowed between attributes)
// - Up to 3 levels of brace nesting for style={{outer: {inner: 1}}} patterns
// The brace pattern uses a recursive-like structure to handle nested braces
const BRACE_CONTENT_L0 = "[^{}]*"; // Innermost: no braces
const BRACE_CONTENT_L1 = `(?:${BRACE_CONTENT_L0}|\\{${BRACE_CONTENT_L0}\\})*`; // 1 level
const BRACE_CONTENT_L2 = `(?:${BRACE_CONTENT_L0}|\\{${BRACE_CONTENT_L1}\\})*`; // 2 levels
const BRACE_PATTERN = `\\{${BRACE_CONTENT_L2}\\}`; // Full brace expression (supports 3 levels)
const JSX_ATTRS_PATTERN = `(?:[^>"'{}]|"[^"]*"|'[^']*'|${BRACE_PATTERN})*`;
const SELF_CLOSING_JSX_REGEX = new RegExp(
  `<([A-Z][a-zA-Z0-9.]*)${JSX_ATTRS_PATTERN}\\/>`,
  "g"
);
const JSX_WITH_CHILDREN_REGEX = new RegExp(
  `<([A-Z][a-zA-Z0-9.]*)${JSX_ATTRS_PATTERN}>([\\s\\S]*?)<\\/\\1>`,
  "g"
);
const CODE_BLOCK_REGEX = /```[\s\S]*?```/g;
const JSX_EXPRESSION_REGEX = new RegExp(BRACE_PATTERN, "g");
const EXCESSIVE_NEWLINES_REGEX = /\n{3,}/g;
const CODE_BLOCK_PLACEHOLDER_REGEX = /__CODE_BLOCK_(\d+)__/g;

// GuideOverview component patterns - convert to markdown headers
const GUIDE_OVERVIEW_OUTCOMES_REGEX =
  /<GuideOverview\.Outcomes>\s*([\s\S]*?)\s*<\/GuideOverview\.Outcomes>/g;
const GUIDE_OVERVIEW_PREREQUISITES_REGEX =
  /<GuideOverview\.Prerequisites>\s*([\s\S]*?)\s*<\/GuideOverview\.Prerequisites>/g;
const GUIDE_OVERVIEW_YOU_WILL_LEARN_REGEX =
  /<GuideOverview\.YouWillLearn>\s*([\s\S]*?)\s*<\/GuideOverview\.YouWillLearn>/g;

// Image component pattern - extract alt and src for markdown image
// Handles both quoted strings and JSX expressions: alt="text" or alt={"text"}, src="/path" or src={"/path"}
const IMAGE_ALT_REGEX = /alt=(?:"([^"]*)"|'([^']*)'|\{"([^"]*)"\}|\{'([^']*)'\})/;
const IMAGE_SRC_REGEX = /src=(?:"([^"]*)"|'([^']*)'|\{"([^"]*)"\}|\{'([^']*)'\})/;
const IMAGE_COMPONENT_REGEX = new RegExp(`<Image\\s+${JSX_ATTRS_PATTERN}\\/>`,"g");

// Internal markdown links - add .md extension
// Matches [text](/path) but not [text](http...) or [text](#anchor)
// Captures path and fragment separately to insert .md before fragment
const INTERNAL_LINK_REGEX = /\[([^\]]+)\]\(\/([^)#][^)#]*)(#[^)]*)?\)/g;

// Check if path has a file extension
const HAS_EXTENSION_REGEX = /\.[a-zA-Z0-9]+$/;

// Regex for detecting markdown list items and numbered lists
const UNORDERED_LIST_REGEX = /^[-*+]\s/;
const ORDERED_LIST_REGEX = /^\d+[.)]\s/;

// Regex for extracting frontmatter fields
// Handles: "double quoted", 'single quoted', or unquoted values
// Group 1 = double-quoted content, Group 2 = single-quoted content, Group 3 = unquoted/fallback
// Quoted patterns require closing quote at end of line to prevent apostrophes being misread as delimiters
const TITLE_REGEX = /title:\s*(?:"([^"]*)"\s*$|'([^']*)'\s*$|([^\n]+))/;
const DESCRIPTION_REGEX =
  /description:\s*(?:"([^"]*)"\s*$|'([^']*)'\s*$|([^\n]+))/;

// Regex for detecting leading whitespace on lines
const LEADING_WHITESPACE_REGEX = /^[ \t]+/;

/**
 * Removes consistent leading indentation from all lines of text.
 * This normalizes content that was indented inside JSX components.
 * Code block markers (```) are ignored when calculating minimum indent
 * since they typically start at column 0 in MDX files.
 */
function dedent(text: string): string {
  const lines = text.split("\n");

  // Find minimum indentation, ignoring:
  // - Empty lines
  // - Code block markers (lines starting with ```)
  let minIndent = Number.POSITIVE_INFINITY;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "" || trimmed.startsWith("```")) {
      continue; // Ignore empty lines and code block markers
    }
    const match = line.match(LEADING_WHITESPACE_REGEX);
    const indent = match ? match[0].length : 0;
    if (indent < minIndent) {
      minIndent = indent;
    }
  }

  // If no indentation found, return as-is
  if (minIndent === 0 || minIndent === Number.POSITIVE_INFINITY) {
    return text;
  }

  // Remove the minimum indentation from each line (except code block content)
  return lines
    .map((line) => {
      const trimmed = line.trim();
      // Calculate leading whitespace length for this line
      const leadingMatch = line.match(LEADING_WHITESPACE_REGEX);
      const leadingLength = leadingMatch ? leadingMatch[0].length : 0;
      // Don't modify empty lines or lines with less indentation than min
      if (trimmed === "" || leadingLength < minIndent) {
        return line.trimStart();
      }
      // Preserve code block markers - just remove leading whitespace
      // This matches the logic that ignores them when calculating minIndent
      if (trimmed.startsWith("```")) {
        return trimmed;
      }
      return line.slice(minIndent);
    })
    .join("\n");
}

/**
 * Strips surrounding quotes from a value if present.
 * Used for unquoted fallback values that may contain quotes due to apostrophe handling.
 */
function stripSurroundingQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/**
 * Extracts title and description from frontmatter.
 * Handles double-quoted, single-quoted, and unquoted YAML values.
 */
function extractFrontmatterMeta(frontmatter: string): {
  title: string;
  description: string;
} {
  const titleMatch = frontmatter.match(TITLE_REGEX);
  const descriptionMatch = frontmatter.match(DESCRIPTION_REGEX);

  // Extract from whichever capture group matched:
  // Group 1 = double-quoted, Group 2 = single-quoted, Group 3 = unquoted/fallback
  // For group 3 (fallback), strip surrounding quotes if present
  const title =
    titleMatch?.[1] ??
    titleMatch?.[2] ??
    stripSurroundingQuotes(titleMatch?.[3] ?? "");
  const description =
    descriptionMatch?.[1] ??
    descriptionMatch?.[2] ??
    stripSurroundingQuotes(descriptionMatch?.[3] ?? "");

  return {
    title: title || "Arcade Documentation",
    description,
  };
}

/**
 * Normalizes indentation in the final output.
 * Removes stray leading whitespace outside code blocks while preserving
 * meaningful markdown indentation (nested lists, blockquotes).
 */
function normalizeIndentation(text: string): string {
  const finalLines: string[] = [];
  let inCodeBlock = false;
  let fenceIndent = 0; // Track indentation level of opening fence

  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    const leadingSpaces = line.length - trimmed.length;

    if (trimmed.startsWith("```")) {
      if (!inCodeBlock) {
        // Opening fence - track its indentation
        inCodeBlock = true;
        fenceIndent = leadingSpaces;
        finalLines.push(line.trimStart()); // Code block markers should start at column 0
      } else if (leadingSpaces <= fenceIndent) {
        // Closing fence - only if not indented more than opening fence
        inCodeBlock = false;
        fenceIndent = 0;
        finalLines.push(line.trimStart());
      } else {
        // ``` inside code block (indented more than opening fence)
        finalLines.push(line); // Preserve as code block content
      }
    } else if (inCodeBlock) {
      finalLines.push(line); // Preserve indentation inside code blocks
    } else {
      const trimmedLine = line.trimStart();
      // Preserve indentation for nested list items and blockquotes
      const isListItem =
        UNORDERED_LIST_REGEX.test(trimmedLine) ||
        ORDERED_LIST_REGEX.test(trimmedLine);
      const isBlockquote = trimmedLine.startsWith(">");
      if ((isListItem || isBlockquote) && line.startsWith("  ")) {
        // Keep markdown-meaningful indentation (but normalize to 2-space increments)
        const leadingSpacesCount = line.length - line.trimStart().length;
        const normalizedIndent = "  ".repeat(Math.floor(leadingSpacesCount / 2));
        finalLines.push(normalizedIndent + trimmedLine);
      } else {
        finalLines.push(trimmedLine); // Remove leading whitespace for other lines
      }
    }
  }

  return finalLines.join("\n");
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

  // Convert GuideOverview components to markdown headers before generic JSX stripping
  result = result.replace(
    GUIDE_OVERVIEW_OUTCOMES_REGEX,
    (_, inner) => `## Outcomes\n\n${dedent(inner).trim()}\n`
  );
  result = result.replace(
    GUIDE_OVERVIEW_PREREQUISITES_REGEX,
    (_, inner) => `## Prerequisites\n\n${dedent(inner).trim()}\n`
  );
  result = result.replace(
    GUIDE_OVERVIEW_YOU_WILL_LEARN_REGEX,
    (_, inner) => `## You Will Learn\n\n${dedent(inner).trim()}\n`
  );

  // Convert Image components to markdown image syntax
  // Extract alt and src from component attributes (handles both quoted and JSX expression syntax)
  result = result.replace(IMAGE_COMPONENT_REGEX, (match) => {
    const altMatch = match.match(IMAGE_ALT_REGEX);
    const srcMatch = match.match(IMAGE_SRC_REGEX);

    // Extract from whichever capture group matched (double quotes, single quotes, or JSX expression with either)
    const alt = altMatch?.[1] || altMatch?.[2] || altMatch?.[3] || altMatch?.[4];
    const src = srcMatch?.[1] || srcMatch?.[2] || srcMatch?.[3] || srcMatch?.[4];

    if (alt && src) {
      // Make src absolute if it starts with /
      const fullSrc = src.startsWith("/")
        ? `https://docs.arcade.dev${src}`
        : src;
      return `![${alt}](${fullSrc})`;
    }
    return "";
  });

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
    // Apply dedent to each extracted piece to normalize indentation
    result = result.replace(JSX_WITH_CHILDREN_REGEX, (_, _tag, innerContent) =>
      dedent(innerContent).trim()
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

  // Restore code blocks (return original placeholder if index doesn't exist)
  result = result.replace(
    CODE_BLOCK_PLACEHOLDER_REGEX,
    (match, index) => codeBlocks[Number.parseInt(index, 10)] ?? match
  );

  // Convert internal links to .md links for LLM consumption
  // [text](/path/to/page) -> [text](/path/to/page.md)
  // [text](/path/to/page#section) -> [text](/path/to/page.md#section)
  result = result.replace(INTERNAL_LINK_REGEX, (_, text, path, fragment) => {
    // Don't add .md if path already has an extension
    if (HAS_EXTENSION_REGEX.test(path)) {
      return `[${text}](/${path}${fragment || ""})`;
    }
    return `[${text}](/${path}.md${fragment || ""})`;
  });

  // Normalize indentation (remove stray whitespace, preserve meaningful markdown indentation)
  result = normalizeIndentation(result);

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

    // Sanitize the path to prevent traversal attacks
    const sanitizedPath = sanitizePath(pathWithoutMd);
    if (!sanitizedPath) {
      return new NextResponse("Invalid path", { status: 400 });
    }

    const toolkitTarget = getToolkitMarkdownTarget(sanitizedPath);

    let filePath: string;

    if (toolkitTarget) {
      // Try to find the toolkit markdown file
      const toolkitFile = await findToolkitMarkdownFile(
        toolkitTarget.category,
        toolkitTarget.toolkitId
      );

      if (toolkitFile) {
        // Validate toolkit file is within allowed directory
        if (!isPathWithinDirectory(toolkitFile, TOOLKIT_MARKDOWN_ROOT)) {
          return new NextResponse("Invalid path", { status: 400 });
        }
        filePath = toolkitFile;
      } else {
        // Fall back to MDX file if toolkit markdown not found
        filePath = join(APP_ROOT, `${sanitizedPath}/page.mdx`);
      }
    } else {
      // Try clean markdown first (preferred)
      // e.g., /en/home/quickstart -> public/_markdown/en/home/quickstart.md
      const cleanMarkdownPath = join(CLEAN_MARKDOWN_DIR, `${sanitizedPath}.md`);

      try {
        await access(cleanMarkdownPath);
        if (isPathWithinDirectory(cleanMarkdownPath, CLEAN_MARKDOWN_DIR)) {
          const content = await readFile(cleanMarkdownPath, "utf-8");

          return new NextResponse(content, {
            status: 200,
            headers: {
              "Content-Type": "text/markdown; charset=utf-8",
              "Content-Disposition": "inline",
              "Cache-Control": "public, max-age=3600",
              Vary: "Accept, User-Agent",
            },
          });
        }
      } catch {
        // Clean markdown not found, fall back to raw MDX
      }

      // Fallback: raw MDX file
      filePath = join(APP_ROOT, `${sanitizedPath}/page.mdx`);
    }

    // Final validation: ensure file path is within allowed directories
    const isValidPath =
      isPathWithinDirectory(filePath, APP_ROOT) ||
      isPathWithinDirectory(filePath, TOOLKIT_MARKDOWN_ROOT);

    if (!isValidPath) {
      return new NextResponse("Invalid path", { status: 400 });
    }

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
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        "X-Content-Source": "raw-mdx",
        Vary: "Accept, User-Agent",
      },
    });
  } catch (error) {
    return new NextResponse(`Internal server error: ${error}`, {
      status: 500,
    });
  }
}
