import { access, readFile } from "node:fs/promises";
import { join } from "node:path";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Regex pattern for removing .md extension
const MD_EXTENSION_REGEX = /\.md$/;

// Directory containing pre-generated clean markdown files
const CLEAN_MARKDOWN_DIR = join(process.cwd(), "public", "_markdown");

export async function GET(
  request: NextRequest,
  _context: { params: Promise<{ slug?: string[] }> }
) {
  try {
    // Get the original pathname from the request
    const url = new URL(request.url);
    // Remove /api/markdown prefix to get the original path
    const originalPath = url.pathname.replace("/api/markdown", "");

    // Remove .md extension if present
    const pathWithoutMd = originalPath.replace(MD_EXTENSION_REGEX, "");

    // Try clean markdown first (preferred)
    // e.g., /en/home/quickstart -> public/_markdown/en/home/quickstart.md
    const cleanMarkdownPath = join(CLEAN_MARKDOWN_DIR, `${pathWithoutMd}.md`);

    try {
      await access(cleanMarkdownPath);
      const content = await readFile(cleanMarkdownPath, "utf-8");

      return new NextResponse(content, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Content-Disposition": "inline",
          "Cache-Control": "public, max-age=3600", // Cache for 1 hour
          Vary: "Accept",
        },
      });
    } catch {
      // Clean markdown not found, fall back to raw MDX
    }

    // Fallback: serve raw MDX (for backwards compatibility or if clean files not generated)
    // e.g., /en/home/quickstart -> app/en/home/quickstart/page.mdx
    const rawMdxPath = join(process.cwd(), "app", `${pathWithoutMd}/page.mdx`);

    try {
      await access(rawMdxPath);
    } catch {
      return new NextResponse("Markdown file not found", { status: 404 });
    }

    const content = await readFile(rawMdxPath, "utf-8");

    // Return the raw MDX with a warning header
    return new NextResponse(content, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Content-Disposition": "inline",
        "X-Content-Source": "raw-mdx", // Indicate this is raw MDX, not clean markdown
        Vary: "Accept",
      },
    });
  } catch (error) {
    return new NextResponse(`Internal server error: ${error}`, {
      status: 500,
    });
  }
}
