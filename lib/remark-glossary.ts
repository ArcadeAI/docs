import type { Paragraph, PhrasingContent, Root, Text } from "mdast";
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

// Cache for parsed glossary terms
let cachedTerms: GlossaryTerm[] | null = null;
let cachedGlossaryPath: string | null = null;

/**
 * Remark plugin to automatically detect and link glossary terms
 */
export function remarkGlossary(options: RemarkGlossaryOptions) {
  const { glossaryPath, caseSensitive = false } = options;

  // biome-ignore lint/suspicious/noExplicitAny: unist file types are not fully typed
  return (tree: Root, file: any) => {
    // Don't process the glossary page itself
    if (file.history?.[0]?.includes("glossary/page.mdx")) {
      return;
    }

    // don't process the many MCP tool pages
    if (file.history?.[0]?.includes("/resources/integrations/")) {
      return;
    }

    // Lazy-load and cache glossary terms
    if (!cachedTerms || cachedGlossaryPath !== glossaryPath) {
      cachedTerms = sortTermsByLength(parseGlossary(glossaryPath));
      cachedGlossaryPath = glossaryPath;
    }

    const terms = cachedTerms;

    // Track which terms have been marked (per paragraph)
    // biome-ignore lint/suspicious/noExplicitAny: mdast node types are complex
    const markedTermsPerParagraph = new Map<any, Set<string>>();

    visit(tree, "paragraph", (paragraphNode: Paragraph) => {
      markedTermsPerParagraph.set(paragraphNode, new Set());

      // Process text nodes within the paragraph
      visit(
        paragraphNode,
        "text",
        // biome-ignore lint/suspicious/noExplicitAny: unist parent nodes are not fully typed
        // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: necessary for term matching logic
        (textNode: Text, index: number | undefined, parent: any) => {
          // Skip if we don't have parent or index
          if (!parent || index === undefined) {
            return;
          }

          // Skip if parent is a link or other special node
          if (parent.type === "link" || parent.type === "inlineCode") {
            return SKIP;
          }

          const markedTerms =
            markedTermsPerParagraph.get(paragraphNode) || new Set();
          let text = textNode.value;
          let modified = false;
          const newNodes: PhrasingContent[] = [];

          // Try to match terms in order of length (longest first)
          for (const term of terms) {
            // Skip if we've already marked this term in this paragraph
            if (markedTerms.has(term.term)) {
              continue;
            }

            // Try each alias
            for (const alias of term.aliases) {
              // Build regex with word boundaries
              const flags = caseSensitive ? "g" : "gi";
              const pattern = new RegExp(`\\b${escapeRegex(alias)}\\b`, flags);
              const match = pattern.exec(text);

              if (match && match.index !== undefined) {
                // Found a match! Split the text and insert the glossary term component
                modified = true;
                markedTerms.add(term.term);

                const beforeText = text.slice(0, match.index);
                const matchedText = match[0];
                const afterText = text.slice(match.index + matchedText.length);

                // Add text before match
                if (beforeText) {
                  newNodes.push({
                    type: "text",
                    value: beforeText,
                  });
                }

                // Add glossary term component
                newNodes.push({
                  type: "mdxJsxTextElement",
                  name: "GlossaryTerm",
                  attributes: [
                    {
                      type: "mdxJsxAttribute",
                      name: "term",
                      value: term.term,
                    },
                    {
                      type: "mdxJsxAttribute",
                      name: "definition",
                      value: term.definition,
                    },
                    {
                      type: "mdxJsxAttribute",
                      name: "link",
                      value: term.link,
                    },
                  ],
                  children: [
                    {
                      type: "text",
                      value: matchedText,
                    },
                  ],
                  // biome-ignore lint/suspicious/noExplicitAny: mdxJsxTextElement not in base mdast types
                } as any);

                // Continue with the remaining text
                text = afterText;

                // Stop after first match for this term
                break;
              }
            }

            // If we modified the text, stop trying other terms for this node
            if (modified) {
              break;
            }
          }

          // If we modified the text, replace the node
          if (modified) {
            // Add any remaining text
            if (text) {
              newNodes.push({
                type: "text",
                value: text,
              });
            }

            // Replace the text node with our new nodes
            parent.children.splice(index, 1, ...newNodes);

            // Return SKIP to avoid re-processing the nodes we just added
            return SKIP;
          }
        }
      );
    });
  };
}

/**
 * Escape special regex characters in a string
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
