import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Regex pattern for removing .md extension
const MD_EXTENSION_REGEX = /\.md$/;

export function GET(
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
    if (existsSync(filePath)) {
      const content = readFileSync(filePath, "utf-8");

      // Return the raw markdown with proper headers
      return new NextResponse(content, {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition": "inline",
        },
      });
    }

    return new NextResponse("Markdown file not found", { status: 404 });
  } catch (error) {
    return new NextResponse(`Internal server error: ${error}`, {
      status: 500,
    });
  }
}
