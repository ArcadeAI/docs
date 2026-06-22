import { NextResponse } from "next/server";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import { toToolkitMarkdown } from "@/app/_lib/toolkit-markdown";

// Cache headers for toolkit data responses. This route content-negotiates on
// Accept (JSON vs. text/markdown), so Vary: Accept is required — without it a
// shared cache/CDN could serve one representation for a request that asked for
// the other.
const CACHE_HEADERS = {
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  Vary: "Accept",
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ toolkitId: string }> }
) {
  try {
    const { toolkitId } = await params;

    // Validate toolkitId is not empty
    if (!toolkitId?.trim()) {
      return NextResponse.json(
        { error: "Toolkit ID is required" },
        { status: 400 }
      );
    }

    const data = await readToolkitData(toolkitId);

    if (!data) {
      return NextResponse.json(
        { error: `Toolkit not found: ${toolkitId}` },
        { status: 404 }
      );
    }

    // Content-negotiate markdown: the toolkit page renders per-tool detail
    // client-only, so the "copy as markdown" / agent view builds full markdown
    // straight from the data here instead of from the slimmed HTML.
    if ((request.headers.get("accept") ?? "").includes("text/markdown")) {
      return new NextResponse(toToolkitMarkdown(data), {
        headers: {
          ...CACHE_HEADERS,
          "Content-Type": "text/markdown; charset=utf-8",
        },
      });
    }

    return NextResponse.json(data, { headers: CACHE_HEADERS });
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: Server-side error logging is appropriate
    console.error("Error fetching toolkit data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
