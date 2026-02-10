import { NextResponse } from "next/server";
import { readToolkitData } from "@/app/_lib/toolkit-data";

// Cache headers for toolkit data responses
const CACHE_HEADERS = {
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
};

export async function GET(
  _request: Request,
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
