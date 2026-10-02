import { describe, expect, it } from "vitest";
import { createBm25Index } from "@/app/_lib/search/bm25";
import { highlightQuery } from "@/app/_lib/search/highlight";
import { documentsFromMdx } from "@/app/_lib/search/mdx-documents";
import { tokenize } from "@/app/_lib/search/tokenize";
import type { SearchDocument } from "@/app/_lib/search/types";

const doc = (
  overrides: Partial<SearchDocument> & Pick<SearchDocument, "id" | "title">
): SearchDocument => ({
  url: overrides.url ?? overrides.id,
  heading: overrides.heading ?? null,
  content: overrides.content ?? "",
  type: overrides.type ?? "page",
  ...overrides,
});

describe("tokenize", () => {
  it("splits camelCase, dotted names, and snake_case", () => {
    expect(tokenize("Github.CreateIssue")).toEqual([
      "github",
      "create",
      "issue",
    ]);
    expect(tokenize("arcade_api_key")).toEqual(["arcade", "api", "key"]);
  });

  it("drops single-character tokens", () => {
    expect(tokenize("a key")).toEqual(["key"]);
  });
});

describe("highlightQuery", () => {
  it("marks query tokens inside the display text", () => {
    const parts = highlightQuery("Getting Your API Key", "api key");
    const matched = parts.filter((part) => part.match).map((part) => part.text);
    expect(matched).toEqual(["API", "Key"]);
  });

  it("returns the original text when the query is empty", () => {
    expect(highlightQuery("Arcade", "")).toEqual([
      { text: "Arcade", match: false },
    ]);
  });
});

describe("createBm25Index", () => {
  const corpus: SearchDocument[] = [
    doc({
      id: "/en/get-started/setup/api-keys",
      title: "Getting Your API Key",
      content: "Generate an Arcade API key from the dashboard or CLI.",
    }),
    doc({
      id: "/en/resources/integrations/development/github",
      title: "GitHub",
      content: "Repository and collaboration tools for agents.",
    }),
    doc({
      id: "/en/resources/integrations/development/github#githubcreateissue",
      title: "GitHub",
      heading: "Github.CreateIssue",
      content: "Create a new issue in a GitHub repository.",
      type: "tool",
    }),
    doc({
      id: "/en/operate/deploy",
      title: "Deploy Arcade",
      content: "Host the Arcade Engine on your own infrastructure.",
    }),
  ];

  const index = createBm25Index(corpus);

  it("returns no hits for an empty query", () => {
    expect(index.search("")).toEqual([]);
    expect(index.search("   ")).toEqual([]);
  });

  it("ranks a title match above a content-only mention", () => {
    const hits = index.search("api key");
    expect(hits.length).toBeGreaterThan(0);
    expect(hits[0].id).toBe("/en/get-started/setup/api-keys");
  });

  it("keeps the best record per page so a tool hash can win", () => {
    const hits = index.search("create issue");
    const github = hits.find((hit) =>
      hit.url.startsWith("/en/resources/integrations/development/github")
    );
    expect(github?.heading).toBe("Github.CreateIssue");
    expect(github?.url).toContain("#");
  });

  it("caps the number of hits", () => {
    expect(index.search("arcade", 1)).toHaveLength(1);
  });
});

describe("documentsFromMdx", () => {
  it("emits a page record and heading records with anchors", () => {
    const source = `---
title: "Getting Your API Key"
description: "Learn how to obtain and manage your Arcade API key"
---

import { Steps } from "nextra/components";

# Getting Your API Key

Before you begin, generate an Arcade API key.

## Using the Dashboard

Visit the API Keys page in Arcade Dashboard.

## Using the CLI

Run \`arcade login\` then create a key.
`;

    const documents = documentsFromMdx(
      "/en/get-started/setup/api-keys",
      source
    );

    expect(documents[0]).toMatchObject({
      type: "page",
      title: "Getting Your API Key",
      url: "/en/get-started/setup/api-keys",
    });
    expect(documents[0].content).toContain("Learn how to obtain");

    const dashboard = documents.find(
      (document) => document.heading === "Using the Dashboard"
    );
    expect(dashboard?.url).toBe(
      "/en/get-started/setup/api-keys#using-the-dashboard"
    );
    expect(dashboard?.content).toContain("API Keys page");
    expect(
      documents.some((document) => document.content.includes("import"))
    ).toBe(false);
  });
});
