import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import type { Root } from "mdast";
import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { remarkGlossary } from "../lib/remark-glossary";

type AstNode = {
  type: string;
  name?: string;
  attributes?: Array<{ name?: string; value?: unknown }>;
  children?: AstNode[];
  value?: string;
};

let tempDirectory: string;
let glossaryPath: string;

beforeAll(() => {
  tempDirectory = mkdtempSync(path.join(tmpdir(), "remark-glossary-"));
  glossaryPath = path.join(tempDirectory, "glossary.mdx");
  writeFileSync(
    glossaryPath,
    [
      "## Agents and Tools",
      "",
      "### Tool",
      "",
      "A function that an agent can call.",
      "",
      "### Tool Recommendation",
      "",
      "Finds the tools relevant to a task.",
    ].join("\n")
  );
});

afterAll(() => {
  rmSync(tempDirectory, { recursive: true, force: true });
});

function transformParagraph(children: AstNode[]): AstNode {
  const tree: AstNode = {
    type: "root",
    children: [{ type: "paragraph", children }],
  };

  const transform = remarkGlossary({ glossaryPath });
  transform(tree as Root, { history: ["/docs/example/page.mdx"] });

  return tree.children?.[0] as AstNode;
}

function glossaryTerms(node: AstNode): AstNode[] {
  const matches =
    node.type === "mdxJsxTextElement" && node.name === "GlossaryTerm"
      ? [node]
      : [];

  return [
    ...matches,
    ...(node.children?.flatMap((child) => glossaryTerms(child)) ?? []),
  ];
}

function termName(node: AstNode): unknown {
  return node.attributes?.find((attribute) => attribute.name === "term")?.value;
}

describe("remarkGlossary", () => {
  test("prefers the longest term without nesting a shorter term inside it", () => {
    const paragraph = transformParagraph([
      { type: "text", value: "Tool Recommendation chooses a standalone Tool." },
    ]);
    const terms = glossaryTerms(paragraph);

    expect(terms.map(termName)).toEqual(["Tool Recommendation", "Tool"]);
    expect(glossaryTerms(terms[0])).toHaveLength(1);
  });

  test("matches case-insensitive plural aliases", () => {
    const paragraph = transformParagraph([
      { type: "text", value: "tool recommendations choose tools" },
    ]);

    expect(glossaryTerms(paragraph).map(termName)).toEqual([
      "Tool Recommendation",
      "Tool",
    ]);
  });

  test("does not transform links, inline code, or existing glossary terms", () => {
    const existingGlossaryTerm: AstNode = {
      type: "mdxJsxTextElement",
      name: "GlossaryTerm",
      attributes: [
        { type: "mdxJsxAttribute", name: "term", value: "Existing" } as never,
      ],
      children: [{ type: "text", value: "Tool Recommendation" }],
    };
    const paragraph = transformParagraph([
      {
        type: "link",
        children: [{ type: "text", value: "Tool Recommendation" }],
      },
      { type: "text", value: " and " },
      { type: "inlineCode", value: "Tool Recommendation" },
      { type: "text", value: " and " },
      existingGlossaryTerm,
    ]);

    expect(glossaryTerms(paragraph)).toEqual([existingGlossaryTerm]);
  });

  test("marks each glossary term at most once per paragraph", () => {
    const paragraph = transformParagraph([
      { type: "text", value: "Tool and another Tool." },
    ]);

    expect(glossaryTerms(paragraph).map(termName)).toEqual(["Tool"]);
  });
});
