import { NextResponse } from "next/server";
import { buildSearchIndex } from "@/app/_lib/search/build-index";

export const dynamic =
  process.env.NODE_ENV === "development" ? "force-dynamic" : "force-static";

const CACHE_HEADERS = {
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
};

export async function GET() {
  const documents = await buildSearchIndex();
  return NextResponse.json({ documents }, { headers: CACHE_HEADERS });
}
