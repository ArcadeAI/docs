import { urlConfig } from "@/lib/config";

/**
 * Links shown in the docs chrome (components/chrome/navbar.tsx). The contact
 * address never appears here as a `mailto:` link; see
 * tests/chrome-no-mailto.test.ts.
 */
export const GITHUB_REPO_URL = "https://github.com/ArcadeAI/arcade-mcp";
export const DISCORD_URL = urlConfig.company.discord;
/** The navbar logo links to the marketing site, not the docs home. */
export const LOGO_URL = urlConfig.company.url;
/** Base of the "Edit this page on GitHub" link. */
export const DOCS_REPOSITORY_BASE =
  "https://github.com/ArcadeAI/docs/tree/main";
