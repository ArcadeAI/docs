import type { Paragraph, Parent, PhrasingContent, Root, Text } from "mdast";
import { SKIP, visit } from "unist-util-visit";
import {
  type GlossaryTerm,
  parseGlossary,
  sortTermsByLength,
} from "./glossary-parser";

type RemarkGlossaryOptions = {
  glossaryPath: string;
  maxOccurrencesPerPage?: number;
  caseSensitive?: boolean;
};

/** The subset of a `VFile` this plugin reads. */
type FileLike = {
  history?: string[];
  path?: string;
};

/** Minimal shape of an `mdxJsxTextElement` (from mdast-util-mdx-jsx). */
type MdxJsxTextElement = {
  attributes: { type: "mdxJsxAttribute"; name: string; value: string }[];
  children: PhrasingContent[];
  name: string;
  type: "mdxJsxTextElement";
};

// Cache for parsed glossary terms
let cachedTerms: GlossaryTerm[] | null = null;
let cachedGlossaryPath: string | null = null;

const SPECIAL_REGEX_CHARS = /[.*+?^${}()|[\]\\]/g;

function normalize(filePath: string): string {
  return filePath.replaceAll("\\", "/");
}

/**
 * Pages that must not get glossary links:
 * - the glossary page itself (`resources/glossary.mdx` or `resources/glossary/index.mdx`)
 * - the many MCP server pages under `resources/integrations/`
 * - User Source per-provider pages: they discuss Microsoft, Auth0, Okta, etc.
 *   concepts (account, tenant, realm) that collide with Arcade glossary terms
 *   in ways that mislead readers. The User Sources overview itself stays opted-in.
 */
export function shouldSkipGlossary(filePath: string | undefined): boolean {
  if (!filePath) {
    return false;
  }
  const p = normalize(filePath);
  if (
    p.endsWith("/resources/glossary.mdx") ||
    p.endsWith("/resources/glossary/index.mdx")
  ) {
    return true;
  }
  if (p.includes("/resources/integrations/")) {
    return true;
  }
  if (
    p.includes("/operate/identity/user-sources/") &&
    !p.endsWith("/operate/identity/user-sources/index.mdx")
  ) {
    return true;
  }
  return false;
}

function getTerms(glossaryPath: string): GlossaryTerm[] {
  if (!cachedTerms || cachedGlossaryPath !== glossaryPath) {
    cachedTerms = sortTermsByLength(parseGlossary(glossaryPath));
    cachedGlossaryPath = glossaryPath;
  }
  return cachedTerms;
}

function glossaryNode(
  term: GlossaryTerm,
  matchedText: string
): PhrasingContent {
  const node: MdxJsxTextElement = {
    attributes: [
      { name: "term", type: "mdxJsxAttribute", value: term.term },
      { name: "definition", type: "mdxJsxAttribute", value: term.definition },
      { name: "link", type: "mdxJsxAttribute", value: term.link },
    ],
    children: [{ type: "text", value: matchedText }],
    name: "GlossaryTerm",
    type: "mdxJsxTextElement",
  };
  // mdast's PhrasingContent union does not include MDX JSX nodes; remark-mdx adds them.
  return node as unknown as PhrasingContent;
}

type Match = {
  index: number;
  length: number;
  term: GlossaryTerm;
};

/** Split `textNode` around `match`: text before, the GlossaryTerm element, text after. */
function splitTextNode(textNode: Text, match: Match): PhrasingContent[] {
  const text = textNode.value;
  const beforeText = text.slice(0, match.index);
  const matchedText = text.slice(match.index, match.index + match.length);
  const afterText = text.slice(match.index + match.length);

  const newNodes: PhrasingContent[] = [];
  if (beforeText) {
    newNodes.push({ type: "text", value: beforeText });
  }
  newNodes.push(glossaryNode(match.term, matchedText));
  if (afterText) {
    newNodes.push({ type: "text", value: afterText });
  }
  return newNodes;
}

/** Find the first (longest-term-first) unmarked glossary term in `text`. */
function findMatch(
  text: string,
  terms: GlossaryTerm[],
  markedTerms: Set<string>,
  caseSensitive: boolean
): Match | null {
  const flags = caseSensitive ? "g" : "gi";
  for (const term of terms) {
    if (markedTerms.has(term.term)) {
      continue;
    }
    for (const alias of term.aliases) {
      const pattern = new RegExp(`\\b${escapeRegex(alias)}\\b`, flags);
      const match = pattern.exec(text);
      if (match) {
        return { index: match.index, length: match[0].length, term };
      }
    }
  }
  return null;
}

/**
 * Remark plugin to automatically detect and link glossary terms
 */
export function remarkGlossary(
  options: RemarkGlossaryOptions
): (tree: Root, file: FileLike) => void {
  const { glossaryPath, caseSensitive = false } = options;

  return (tree: Root, file: FileLike) => {
    const filePath = file.history?.[0] ?? file.path;
    if (shouldSkipGlossary(filePath)) {
      return;
    }

    const terms = getTerms(glossaryPath);

    visit(tree, "paragraph", (paragraphNode: Paragraph) => {
      // Track which terms have been marked in this paragraph
      const markedTerms = new Set<string>();

      visit(
        paragraphNode,
        "text",
        (
          textNode: Text,
          index: number | undefined,
          parent: Parent | undefined
        ) => {
          if (!parent || index === undefined) {
            return;
          }

          // Skip if parent is a link or other special node
          if (parent.type === "link" || parent.type === "inlineCode") {
            return SKIP;
          }

          const match = findMatch(
            textNode.value,
            terms,
            markedTerms,
            caseSensitive
          );
          if (!match) {
            return;
          }

          markedTerms.add(match.term.term);
          // Replace the text node with the split nodes and skip re-processing them
          parent.children.splice(index, 1, ...splitTextNode(textNode, match));
          return SKIP;
        }
      );
    });
  };
}

/**
 * Escape special regex characters in a string
 */
function escapeRegex(str: string): string {
  return str.replace(SPECIAL_REGEX_CHARS, "\\$&");
}
