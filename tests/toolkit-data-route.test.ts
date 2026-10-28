import { describe, expect, test } from "vitest";
import { GET } from "@/app/api/toolkit-data/[toolkitId]/route";

/**
 * The toolkit page's "Copy Markdown" and "View as Markdown" actions (Fumadocs)
 * fetch or open a plain URL, so they cannot send `Accept: text/markdown`.
 * `?format=markdown` must give them the same Markdown the header does.
 */

const call = (url: string, headers?: HeadersInit) =>
  GET(new Request(url, { headers }), {
    params: Promise.resolve({ toolkitId: "github" }),
  });

describe("toolkit data route", () => {
  test("answers with JSON by default", async () => {
    const response = await call("http://localhost/api/toolkit-data/github");
    expect(response.headers.get("content-type")).toContain("application/json");
  });

  test("answers with Markdown for Accept: text/markdown", async () => {
    const response = await call("http://localhost/api/toolkit-data/github", {
      Accept: "text/markdown",
    });
    expect(response.headers.get("content-type")).toContain("text/markdown");
  });

  test("answers with the same Markdown for ?format=markdown", async () => {
    const [byHeader, byQuery] = await Promise.all([
      call("http://localhost/api/toolkit-data/github", {
        Accept: "text/markdown",
      }),
      call("http://localhost/api/toolkit-data/github?format=markdown"),
    ]);
    expect(byQuery.headers.get("content-type")).toContain("text/markdown");
    const markdown = await byQuery.text();
    expect(markdown.startsWith("# ")).toBe(true);
    expect(markdown).toBe(await byHeader.text());
  });
});
