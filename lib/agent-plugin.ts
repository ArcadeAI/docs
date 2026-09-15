/**
 * Every install surface for the Arcade agent plugin resolves from the values
 * here. Swapping these constants updates the prose, the copyable commands, and
 * the one-click install links together.
 *
 * MDX pages reach these through `{{TOKEN}}` placeholders — see
 * `lib/remark-substitute.ts` for the token list.
 */
export const AGENT_PLUGIN_ENGINE_PUBLIC_URL = "https://api.arcade.dev";
export const AGENT_PLUGIN_GATEWAY_SLUG = "arcade";
export const AGENT_PLUGIN_GATEWAY_URL = `${AGENT_PLUGIN_ENGINE_PUBLIC_URL}/mcp/${AGENT_PLUGIN_GATEWAY_SLUG}`;

export const AGENT_PLUGIN_REPO = "ArcadeAI/arcade-plugin";

export const AGENT_PLUGIN_INSTALL_COMMAND = `npx plugins add ${AGENT_PLUGIN_REPO}`;
