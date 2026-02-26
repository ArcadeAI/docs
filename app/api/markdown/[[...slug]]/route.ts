import { access, readdir, readFile } from "node:fs/promises";
import { join, normalize, resolve } from "node:path";
import { type NextRequest, NextResponse } from "next/server";
import { captureServerPageView } from "@/app/_lib/posthog-server";

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

// Length of base64 slice for generating distinct IDs
const DISTINCT_ID_LENGTH = 32;

/**
 * Track markdown request for AI agent analytics.
 * Non-blocking - errors don't affect response.
 */
async function trackMarkdownRequest(request: NextRequest, pathname: string) {
  try {
    const userAgent = request.headers.get("user-agent") || "";
    const referer = request.headers.get("referer") || undefined;
    const acceptHeader = request.headers.get("accept") || undefined;
    const acceptLanguage = request.headers.get("accept-language") || undefined;

    // Use IP or a hash as distinct_id for anonymous tracking
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Create a semi-stable ID from IP + user agent
    const distinctId = `server_${Buffer.from(`${ip}:${userAgent}`).toString("base64").slice(0, DISTINCT_ID_LENGTH)}`;

    await captureServerPageView({
      distinctId,
      pathname,
      userAgent,
      referer,
      ip,
      acceptHeader,
      acceptLanguage,
    });
  } catch (error) {
    // Log but don't throw - tracking errors should not affect the response
    // biome-ignore lint/suspicious/noConsole: intentional error logging for debugging
    console.error("[PostHog] Failed to track markdown request:", error);
  }
}

type ToolkitMarkdownTarget = {
  category: string;
  toolkitId: string;
};

/**
 * Try to serve clean pre-generated markdown.
 * Returns NextResponse if found, null otherwise.
 */
async function tryServeCleanMarkdown(
  request: NextRequest,
  sanitizedPath: string
): Promise<NextResponse | null> {
  const cleanMarkdownPath = join(CLEAN_MARKDOWN_DIR, `${sanitizedPath}.md`);

  try {
    await access(cleanMarkdownPath);
    if (!isPathWithinDirectory(cleanMarkdownPath, CLEAN_MARKDOWN_DIR)) {
      return null;
    }

    const content = await readFile(cleanMarkdownPath, "utf-8");
    await trackMarkdownRequest(request, sanitizedPath);

    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=3600",
        Vary: "Accept, User-Agent",
      },
    });
  } catch {
    return null;
  }
}

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
      const cleanResponse = await tryServeCleanMarkdown(request, sanitizedPath);
      if (cleanResponse) {
        return cleanResponse;
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

    const content = await readFile(filePath, "utf-8");

    // Track server-side pageview for AI agent analytics
    await trackMarkdownRequest(request, sanitizedPath);

    const contentSource = filePath.includes(TOOLKIT_MARKDOWN_ROOT)
      ? "toolkit-markdown"
      : "raw-mdx";

    // Return the raw markdown with proper headers
    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": "inline",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        "X-Content-Source": contentSource,
        Vary: "Accept, User-Agent",
      },
    });
  } catch (error) {
    return new NextResponse(`Internal server error: ${error}`, {
      status: 500,
    });
  }
}
