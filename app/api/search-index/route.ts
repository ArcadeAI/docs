import { NextResponse } from "next/server";
import { buildSearchIndex } from "@/app/_lib/search/build-index";

// Next.js requires a string literal here — a ternary is rejected at build
// (`invalid-page-config`). `next dev` still re-runs the handler on each
// request, so local edits to MDX or toolkit JSON show up without a restart.
export const dynamic = "force-static";

const CACHE_HEADERS = {
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
};

export async function GET() {
  const documents = await buildSearchIndex();
  return NextResponse.json({ documents }, { headers: CACHE_HEADERS });
}
