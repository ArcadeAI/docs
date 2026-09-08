/**
 * Every install surface for the Arcade agent plugin resolves from the values
 * here. The gateway still points at staging, so swapping these two constants
 * at public launch updates the prose, the copyable commands, and the one-click
 * install links together.
 *
 * MDX pages reach these through `{{TOKEN}}` placeholders — see
 * `lib/remark-substitute.ts` for the token list.
 */
export const AGENT_PLUGIN_ENGINE_PUBLIC_URL = "https://api.bosslevel.dev";
export const AGENT_PLUGIN_GATEWAY_SLUG = "all-optimized";
export const AGENT_PLUGIN_GATEWAY_URL = `${AGENT_PLUGIN_ENGINE_PUBLIC_URL}/mcp/${AGENT_PLUGIN_GATEWAY_SLUG}`;

export const AGENT_PLUGIN_REPO = "ArcadeAI/arcade-plugin";

export const AGENT_PLUGIN_INSTALL_COMMAND = `npx plugins add ${AGENT_PLUGIN_REPO}`;

/**
 * The Claude Desktop bundle, served off the latest GitHub release so the link
 * does not need updating per version. Confirm the asset filename matches what
 * the release actually publishes.
 */
export const AGENT_PLUGIN_MCPB_URL = `https://github.com/${AGENT_PLUGIN_REPO}/releases/latest/download/arcade.mcpb`;
