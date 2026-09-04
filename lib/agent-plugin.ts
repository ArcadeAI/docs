/**
 * Every install surface for the Arcade agent plugin resolves from the values
 * here. The gateway still points at staging, so swapping these two constants
 * at public launch updates the prose, the copyable commands, and the one-click
 * install links together.
 *
 * MDX pages reach these through `{{TOKEN}}` placeholders — see
 * `lib/remark-substitute.ts` for the token list.
 */
export const AGENT_PLUGIN_GATEWAY_URL =
  "https://api.bosslevel.dev/mcp/all-optimized";

export const AGENT_PLUGIN_REPO = "ArcadeAI/arcade-plugin";

export const AGENT_PLUGIN_INSTALL_COMMAND = `npx plugins add ${AGENT_PLUGIN_REPO}`;

/**
 * The Claude Desktop bundle, served off the latest GitHub release so the link
 * does not need updating per version. Confirm the asset filename matches what
 * the release actually publishes.
 */
export const AGENT_PLUGIN_MCPB_URL = `https://github.com/${AGENT_PLUGIN_REPO}/releases/latest/download/arcade.mcpb`;

/**
 * Cursor takes its MCP config as base64-encoded JSON in a query parameter.
 */
export const AGENT_PLUGIN_CURSOR_INSTALL_LINK = (() => {
  const config = JSON.stringify({ url: AGENT_PLUGIN_GATEWAY_URL });
  const encoded = Buffer.from(config, "utf-8").toString("base64");
  return `https://cursor.com/install-mcp?name=arcade&config=${encoded}`;
})();

/**
 * VS Code takes the same JSON percent-encoded instead, and wants the transport
 * named explicitly.
 */
export const AGENT_PLUGIN_VSCODE_INSTALL_LINK = (() => {
  const config = JSON.stringify({
    type: "http",
    url: AGENT_PLUGIN_GATEWAY_URL,
  });
  return `https://vscode.dev/redirect/mcp/install?name=arcade&config=${encodeURIComponent(config)}`;
})();
