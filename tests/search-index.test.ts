import { copyFile, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { createBm25Index } from "@/app/_lib/search/bm25";
import { buildSearchIndex } from "@/app/_lib/search/build-index";
import { documentsFromMdx } from "@/app/_lib/search/mdx-documents";
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

const sectionAnchors = (source: string): string[] =>
  documentsFromMdx("/en/page", source)
    .filter((document) => document.type !== "page")
    .map((document) => document.url.replace("/en/page#", ""));

describe("documentsFromMdx", () => {
  it("matches Nextra heading IDs, including duplicates, code, and flags", () => {
    const anchors = sectionAnchors(`# Page

## Example

First.

## Example

Second.

### \`__init__\`

Constructor.

### \`--use-provider\`, \`-p\`

Flag.

### Using [the dashboard](/en/dashboard) **today**

Link.
`);
    expect(anchors).toEqual([
      "example",
      "example-1",
      "__init__",
      "--use-provider--p",
      "using-the-dashboard-today",
    ]);
  });

  it("keeps inline code in the displayed heading", () => {
    const init = documentsFromMdx(
      "/en/page",
      "# Page\n\n### `__init__`\n\nConstructor.\n"
    ).find((document) => document.type !== "page");
    expect(init?.heading).toBe("__init__");
  });

  it("counts tab labels and summaries toward duplicate suffixes", () => {
    const anchors = sectionAnchors(`# Page

<Tabs items={["Python", "JavaScript"]}>
  <Tabs.Tab>
Python code.
  </Tabs.Tab>
  <Tabs.Tab>
JavaScript code.
  </Tabs.Tab>
</Tabs>

<details>
<summary>Setup</summary>
Details.
</details>

## Python

Heading after a Python tab.

## Setup

Heading after a Setup summary.
`);
    expect(anchors).toEqual(["python-1", "setup-1"]);
  });

  it("ignores import and export lines inside code fences", () => {
    const anchors = sectionAnchors(`# Page

## Install

\`\`\`python
import httpx
\`\`\`

\`\`\`bash
export PATH="$HOME/.local/bin:$PATH"
\`\`\`

## Next steps

Keep going.
`);
    expect(anchors).toEqual(["install", "next-steps"]);
  });

  it("strips multi-line imports without a trailing semicolon", () => {
    const anchors = sectionAnchors(`import {
  CheatSheetGrid,
  InfoBox
} from '../_components/cheat-sheet'
import '../cheat-sheet-print.css'

# Page

  ### Options

Indented inside a component.
`);
    expect(anchors).toEqual(["options"]);
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
