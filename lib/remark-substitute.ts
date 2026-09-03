import type { Root } from "mdast";
import { visit } from "unist-util-visit";
import {
  AGENT_PLUGIN_CURSOR_INSTALL_LINK,
  AGENT_PLUGIN_GATEWAY_URL,
  AGENT_PLUGIN_INSTALL_COMMAND,
  AGENT_PLUGIN_REPO,
  AGENT_PLUGIN_VSCODE_INSTALL_LINK,
} from "./agent-plugin";

/**
 * Tokens an MDX page can write as `{{NAME}}`. Prose, inline code, fenced code
 * blocks, and link targets all resolve them, which is why pages use these
 * instead of importing the constants directly — a fenced code block cannot
 * interpolate JavaScript.
 */
export const substitutions: Record<string, string> = {
  ARCADE_PLUGIN_GATEWAY_URL: AGENT_PLUGIN_GATEWAY_URL,
  ARCADE_PLUGIN_REPO: AGENT_PLUGIN_REPO,
  ARCADE_PLUGIN_INSTALL_COMMAND: AGENT_PLUGIN_INSTALL_COMMAND,
  ARCADE_PLUGIN_CURSOR_INSTALL_LINK: AGENT_PLUGIN_CURSOR_INSTALL_LINK,
  ARCADE_PLUGIN_VSCODE_INSTALL_LINK: AGENT_PLUGIN_VSCODE_INSTALL_LINK,
};

/**
 * Unknown tokens are left alone. Auth provider reference pages already write
 * OAuth placeholders such as `{{client_id}}`, and those have to survive to the
 * rendered page.
 */
export function applySubstitutions(value: string): string {
  let result = value;
  for (const [token, replacement] of Object.entries(substitutions)) {
    result = result.split(`{{${token}}}`).join(replacement);
  }
  return result;
}

/**
 * The shape of a VFile that this plugin touches. Declared here so the plugin
 * does not depend on `vfile` directly.
 */
type SourceFile = { value?: unknown };

export function remarkSubstitute() {
  return (tree: Root, file: SourceFile) => {
    // Nextra exports the untouched source string alongside the AST, and that
    // copy is what feeds the "copy page" button and the markdown the site
    // serves to agents. Substitute there too, or those readers get the raw
    // token.
    if (typeof file.value === "string") {
      file.value = applySubstitutions(file.value);
    }

    visit(tree, (node) => {
      if (
        node.type === "text" ||
        node.type === "inlineCode" ||
        node.type === "code"
      ) {
        node.value = applySubstitutions(node.value);
        return;
      }

      if (node.type === "link" || node.type === "definition") {
        node.url = applySubstitutions(node.url);
      }
    });
  };
}
