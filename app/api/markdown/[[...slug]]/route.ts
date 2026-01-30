import { access, readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Regex pattern for removing .md extension
const MD_EXTENSION_REGEX = /\.md$/;
const TOOLKIT_MARKDOWN_ROOT = join(process.cwd(), "public", "toolkit-markdown");

// Minimum path segments for toolkit markdown: [lang, "resources", "integrations", category, toolkitId]
const MIN_TOOLKIT_PATH_SEGMENTS = 5;

// Valid toolkit categories
const TOOLKIT_CATEGORIES = [
  "customer-support",
  "development",
  "entertainment",
  "payments",
  "productivity",
  "sales",
  "search",
  "social-communication",
  "preview",
  "databases",
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

    const toolkitTarget = getToolkitMarkdownTarget(pathWithoutMd);

    let filePath: string;

    if (toolkitTarget) {
      // Try to find the toolkit markdown file
      const toolkitFile = await findToolkitMarkdownFile(
        toolkitTarget.category,
        toolkitTarget.toolkitId
      );

      if (toolkitFile) {
        filePath = toolkitFile;
      } else {
        // Fall back to MDX file if toolkit markdown not found
        filePath = join(process.cwd(), "app", `${pathWithoutMd}/page.mdx`);
      }
    } else {
      // Non-toolkit page - use MDX file
      filePath = join(process.cwd(), "app", `${pathWithoutMd}/page.mdx`);
    }

    // Check if file exists
    try {
      await access(filePath);
    } catch {
      return new NextResponse("Markdown file not found", { status: 404 });
    }

    const content = await readFile(filePath, "utf-8");

    // Return the raw markdown with proper headers
    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": "inline",
      },
    });
  } catch (error) {
    return new NextResponse(`Internal server error: ${error}`, {
      status: 500,
    });
  }
}
