import { describe, expect, it, vi } from "vitest";
import { GET } from "@/app/api/search/route";
import { builtinSearch } from "@/lib/builtin-search";
import { SEARCH_SUGGESTIONS } from "@/lib/search-suggestions";
import { source } from "@/lib/source";

// lib/source.ts compiles every MDX page, which Vitest can't do cheaply (see
// tests/helpers/fs-source.ts). Index the pages from disk instead, using each
// page's title, slug and description. MDX bodies are not indexed here, so these
// cases cover title, slug and toolkit matching, typo tolerance and ranking.
vi.mock("@/lib/source", async () => {
  const { createFsSource } = await import("./helpers/fs-source");
  const fsSource = createFsSource();
  return {
    source: {
      getPages: () =>
        fsSource.getPages().map((page) => ({
          ...page,
          data: {
            ...page.data,
            structuredData: {
              headings: [],
              contents: [
                { heading: undefined, content: page.data.description ?? "" },
              ],
            },
          },
        })),
    },
  };
});

type SearchResult = { url: string; content: string };

async function search(query: string): Promise<string[]> {
  const response = await builtinSearch.GET(
    new Request(
      `http://localhost/api/search?query=${encodeURIComponent(query)}`
    )
  );
  const results = (await response.json()) as SearchResult[];
  return results.map((result) => result.url);
}

// Each query must return the expected page within the top three results.
const EXPECTATIONS: [query: string, url: string][] = [
  ["api key", "/en/get-started/setup/api-keys"],
  ["oauth", "/en/references/auth-providers/oauth2"],
  ["audit logs", "/en/operate/governance/audit-logs"],
  ["mcp gateway", "/en/operate/governance/mcp-gateways"],
  // Generated toolkit pages are indexed from the toolkit JSON.
  ["gmail", "/en/resources/integrations/productivity/gmail"],
  ["Gmail.SendEmail", "/en/resources/integrations/productivity/gmail"],
  // Typo tolerance.
  ["gmial", "/en/resources/integrations/productivity/gmail"],
];

describe("builtin search", () => {
  it.each(EXPECTATIONS)("%s finds %s", async (query, url) => {
    const urls = await search(query);
    expect(urls.slice(0, 3)).toContain(url);
  });

  it("returns no results for an empty query", async () => {
    expect(await search("")).toEqual([]);
  });
});

describe("search suggestions", () => {
  it("link to pages that exist", () => {
    const urls = new Set(source.getPages().map((page) => page.url));
    for (const [, url] of SEARCH_SUGGESTIONS) {
      expect(urls.has(url), `${url} is not a docs page`).toBe(true);
    }
  });
});

describe("/api/search route", () => {
  const get = (query: string) =>
    GET(
      new Request(
        `http://localhost/api/search?query=${encodeURIComponent(query)}`
      )
    );

  it("lets a CDN cache responses", async () => {
    const response = await get("gmail");
    expect(response.headers.get("Cache-Control")).toContain("s-maxage");
  });

  it("cuts very long queries instead of rejecting them", async () => {
    const question = "how do I send an email from my agent with gmail ";
    const longQuery = question.repeat(100);
    const response = await get(longQuery);
    expect(response.status).toBe(200);

    // The same results as the first 200 characters on their own.
    const expected = await (
      await get(longQuery.slice(0, 200).trimEnd())
    ).json();
    expect(await response.json()).toEqual(expected);
  });
});
