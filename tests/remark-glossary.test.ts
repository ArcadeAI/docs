import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import { describe, expect, test } from "vitest";
import { remarkGlossary } from "@/lib/remark-glossary";

// A fixture glossary where one term ("agent runtime") contains a shorter
// term ("agent"). When the longer term is matched mid-sentence, the plugin
// must NOT then wrap "agent" inside the GlossaryTerm it just created —
// GlossaryTerm renders a <button>, and a button inside a button is invalid
// HTML that triggers a React hydration error.
const GLOSSARY_FIXTURE = "tests/fixtures/glossary-nesting.mdx";

type JsxNode = { type: string; name?: string };

function buildParagraph(text: string): Root {
  return {
    type: "root",
    children: [
      { type: "paragraph", children: [{ type: "text", value: text }] },
    ],
  } as Root;
}

function countGlossaryTerms(tree: Root): { total: number; nested: number } {
  let total = 0;
  let nested = 0;
  visit(tree, (node) => {
    const outer = node as JsxNode;
    if (outer.type === "mdxJsxTextElement" && outer.name === "GlossaryTerm") {
      total += 1;
      visit(node, (descendant) => {
        if (descendant === node) {
          return;
        }
        const inner = descendant as JsxNode;
        if (
          inner.type === "mdxJsxTextElement" &&
          inner.name === "GlossaryTerm"
        ) {
          nested += 1;
        }
      });
    }
  });
  return { total, nested };
}

describe("remarkGlossary", () => {
  test("links a glossary term that appears mid-sentence", () => {
    const tree = buildParagraph("Use the agent runtime here.");
    remarkGlossary({ glossaryPath: GLOSSARY_FIXTURE })(tree, {
      history: ["/tmp/test-page.mdx"],
    });
    const { total } = countGlossaryTerms(tree);
    expect(total).toBeGreaterThan(0);
  });

  test("never nests one GlossaryTerm inside another (no button-in-button)", () => {
    const tree = buildParagraph("Use the agent runtime here.");
    remarkGlossary({ glossaryPath: GLOSSARY_FIXTURE })(tree, {
      history: ["/tmp/test-page.mdx"],
    });
    const { nested } = countGlossaryTerms(tree);
    expect(nested).toBe(0);
  });
});
