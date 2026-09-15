import { copyFile, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { createBm25Index } from "@/app/_lib/search/bm25";
import { buildSearchIndex } from "@/app/_lib/search/build-index";
import { documentsFromToolkit } from "@/app/_lib/search/toolkit-documents";
import { readToolkitData } from "@/app/_lib/toolkit-data";

const fixtureToolkit = new URL(
  "../toolkit-docs-generator/tests/fixtures/github-toolkit.json",
  import.meta.url
);

const tempDirs: string[] = [];

const makeTempDir = async (): Promise<string> => {
  const dir = await mkdtemp(join(tmpdir(), "search-index-"));
  tempDirs.push(dir);
  return dir;
};

afterEach(async () => {
  await Promise.all(
    tempDirs.splice(0).map((dir) => rm(dir, { recursive: true, force: true }))
  );
});

describe("documentsFromToolkit", () => {
  it("indexes the toolkit page and each tool with matching anchors", async () => {
    const dataDir = await makeTempDir();
    await copyFile(fixtureToolkit, join(dataDir, "github.json"));
    const toolkit = await readToolkitData("Github", { dataDir });
    expect(toolkit).not.toBeNull();
    if (!toolkit) {
      return;
    }

    const documents = documentsFromToolkit(toolkit);
    const page = documents.find((document) => document.type === "page");
    expect(page?.title).toBe("GitHub");
    expect(page?.url).toBe("/en/resources/integrations/development/github");

    const createIssue = documents.find(
      (document) => document.heading === "Github.CreateIssue"
    );
    expect(createIssue?.type).toBe("tool");
    expect(createIssue?.url).toBe(
      "/en/resources/integrations/development/github#githubcreateissue"
    );
    expect(createIssue?.content).toContain("Create a new issue");
  });

  it("skips hidden toolkits", async () => {
    const dataDir = await makeTempDir();
    await copyFile(fixtureToolkit, join(dataDir, "github.json"));
    const toolkit = await readToolkitData("Github", { dataDir });
    expect(toolkit).not.toBeNull();
    if (!toolkit) {
      return;
    }

    const hidden = {
      ...toolkit,
      metadata: { ...toolkit.metadata, isHidden: true },
    };
    expect(documentsFromToolkit(hidden)).toEqual([]);
  });
});

describe("buildSearchIndex", () => {
  it("indexes authored MDX and skips dynamic-route templates", async () => {
    const pagesDir = await makeTempDir();
    const dataDir = await makeTempDir();
    await writeFile(
      join(pagesDir, "page.mdx"),
      `---
title: "Home"
description: "Arcade docs home"
---

# Home

Welcome to Arcade.
`,
      "utf8"
    );

    const documents = await buildSearchIndex({ pagesDir, dataDir });
    expect(documents.some((document) => document.title === "Home")).toBe(true);
    expect(
      documents.some((document) => document.url.includes("[toolkitId]"))
    ).toBe(false);
  });

  it("lets authored MDX win the page record when it occupies a toolkit URL", async () => {
    const pagesDir = await makeTempDir();
    const dataDir = await makeTempDir();
    const partnerDir = join(
      pagesDir,
      "resources",
      "integrations",
      "search",
      "tavily"
    );
    await mkdir(partnerDir, { recursive: true });
    await writeFile(
      join(partnerDir, "page.mdx"),
      `---
title: "Tavily"
description: "Partner search MCP server"
---

# Tavily

Enable agents to search the web.
`,
      "utf8"
    );
    await copyFile(fixtureToolkit, join(dataDir, "github.json"));

    const documents = await buildSearchIndex({ pagesDir, dataDir });
    const tavilyPages = documents.filter(
      (document) =>
        document.type === "page" &&
        document.url === "/en/resources/integrations/search/tavily"
    );
    expect(tavilyPages).toHaveLength(1);
    expect(tavilyPages[0].title).toBe("Tavily");
    expect(
      documents.some((document) => document.heading === "Github.CreateIssue")
    ).toBe(true);
  });

  it("builds a corpus from the live docs tree that BM25 can search", async () => {
    const documents = await buildSearchIndex();
    expect(documents.length).toBeGreaterThan(100);

    expect(
      documents.some(
        (document) => document.url === "/en/get-started/setup/api-keys"
      )
    ).toBe(true);
    expect(
      documents.some(
        (document) =>
          document.url === "/en/resources/integrations/development/github"
      )
    ).toBe(true);
    expect(documents.some((document) => document.type === "tool")).toBe(true);
    expect(
      documents.some((document) => document.url.includes("[toolkitId]"))
    ).toBe(false);

    const index = createBm25Index(documents);
    const apiKeyHits = index.search("getting your api key");
    expect(apiKeyHits[0]?.url).toContain("/en/get-started/setup/api-keys");

    const githubHits = index.search("github create issue");
    expect(
      githubHits.some((hit) =>
        hit.url.startsWith("/en/resources/integrations/development/github")
      )
    ).toBe(true);
  });
});
