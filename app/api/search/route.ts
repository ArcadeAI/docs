import { builtinSearch } from "@/lib/builtin-search";

// Results depend only on the query string and the deployed content, so a CDN
// can cache them. Vercel keys its cache per deployment, so a new deploy never
// serves results from an older index.
const CACHE_CONTROL = "public, s-maxage=3600, stale-while-revalidate=86400";

export async function GET(request: Request) {
  const response = await builtinSearch.GET(request);
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", CACHE_CONTROL);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
