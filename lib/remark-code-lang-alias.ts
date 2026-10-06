import type { Code, Root } from "mdast";
import { visit } from "unist-util-visit";

/**
 * Fence languages used in the docs that Shiki knows under another name.
 * Shiki's lazy language loading only accepts bundled names, so aliases are
 * resolved here, before rehype-code runs.
 */
export const CODE_LANG_ALIASES: Record<string, string> = {
  env: "dotenv",
};

export function remarkCodeLangAlias(
  aliases: Record<string, string> = CODE_LANG_ALIASES
): (tree: Root) => void {
  return (tree: Root) => {
    visit(tree, "code", (node: Code) => {
      if (node.lang && aliases[node.lang.toLowerCase()]) {
        node.lang = aliases[node.lang.toLowerCase()];
      }
    });
  };
}
