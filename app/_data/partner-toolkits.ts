import type { Toolkit } from "@arcadeai/design-system";

/**
 * Docs-local partner toolkits (remote MCP Servers offered by our partners).
 *
 * These entries are merged into the live integrations catalog alongside the
 * TOOLKITS exported from @arcadeai/design-system. Each partner toolkit uses
 * a standard ToolkitType (typically "verified") plus an `isPartner: true`
 * flag that renders a Partner badge next to BYOC/Pro on catalog cards.
 *
 * Once DS adds an explicit `isPartner` field to its Toolkit shape, migrate
 * these entries into the DS TOOLKITS array and delete this file.
 */

export type PartnerToolkit = Toolkit & {
  isPartner: true;
  /**
   * Remote MCP Server URL displayed on the partner detail page. Use a
   * placeholder like `YOUR_API_KEY` for any per-user secrets so the URL can
   * be copied without leaking credentials. Updating this field updates the
   * detail page automatically.
   */
  mcpUrl: string;
};

export const PARTNER_TOOLKITS: PartnerToolkit[] = [
  {
    id: "Tavily",
    label: "Tavily",
    category: "search",
    publicIconUrl: "/images/partners/tavily.svg",
    isBYOC: true,
    isPro: false,
    isPartner: true,
    type: "verified",
    mcpUrl: "https://mcp.tavily.com/mcp/?tavilyApiKey=YOUR_API_KEY",
    docsLink: "https://docs.arcade.dev/en/resources/integrations/search/tavily",
    relativeDocsLink: "/en/resources/integrations/search/tavily",
    isComingSoon: false,
    isHidden: false,
  },
];
