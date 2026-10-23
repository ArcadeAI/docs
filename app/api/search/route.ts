import { builtinSearch } from "@/lib/builtin-search";

// Results depend only on the query string and the deployed content, so a CDN
// can cache them. Vercel keys its cache per deployment, so a new deploy never
// serves results from an older index.
const CACHE_CONTROL = "public, s-maxage=3600, stale-while-revalidate=86400";

// Real queries are short, but people paste error messages and ask full
// questions, so allow plenty. Anything longer is cut rather than rejected:
// the extra words add little signal, and the dialog never shows an error.
// Cutting also keeps one cache entry per query instead of one per paste.
const MAX_QUERY_LENGTH = 200;

function limitQueryLength(request: Request): Request {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  if (query === null || query.length <= MAX_QUERY_LENGTH) {
    return request;
  }
  url.searchParams.set("query", query.slice(0, MAX_QUERY_LENGTH).trimEnd());
  return new Request(url, request);
}

export async function GET(request: Request) {
  const response = await builtinSearch.GET(limitQueryLength(request));
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", CACHE_CONTROL);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
