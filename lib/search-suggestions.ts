import type { SearchLink } from "fumadocs-ui/contexts/search";

/**
 * Pages shown in the search dialog before the user types anything. Each link
 * must resolve to a page; tests/builtin-search.test.ts checks that.
 */
export const SEARCH_SUGGESTIONS: SearchLink[] = [
  ["Build an MCP server", "/en/get-started/quickstarts/mcp-server-quickstart"],
  ["Call tools in your agent", "/en/get-started/quickstarts/call-tool-agent"],
  ["Get your API key", "/en/get-started/setup/api-keys"],
  ["Browse MCP servers", "/en/resources/integrations"],
  ["Auth providers", "/en/references/auth-providers"],
  ["Hosting options", "/en/operate/deploy"],
  ["Arcade CLI cheat sheet", "/en/references/cli-cheat-sheet"],
];
