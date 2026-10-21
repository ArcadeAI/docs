import { Discord, Github } from "@arcadeai/design-system";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links";
import { urlConfig } from "@/lib/config";

/**
 * Links shown in the docs chrome. The contact address never appears here as a
 * `mailto:` link; see tests/chrome-no-mailto.test.ts.
 */
export const GITHUB_REPO_URL = "https://github.com/ArcadeAI/arcade-mcp";
export const DISCORD_URL = urlConfig.company.discord;
/** The navbar logo links to the marketing site, not the docs home. */
export const LOGO_URL = urlConfig.company.url;
/** Base of the "Edit this page on GitHub" link. */
export const DOCS_REPOSITORY_BASE =
  "https://github.com/ArcadeAI/docs/tree/main";

/**
 * Navbar of every docs page (Fumadocs' notebook layout): the Arcade logo,
 * search, GitHub and Discord, the Sign Up / Dashboard buttons and the theme
 * switch.
 */
export function baseOptions(): BaseLayoutProps {
  return {
    links: [
      {
        external: true,
        icon: <Github className="[&>path]:fill-current" />,
        label: "GitHub",
        text: "GitHub",
        type: "icon",
        url: GITHUB_REPO_URL,
      },
      {
        external: true,
        icon: <Discord className="[&>path]:fill-current" />,
        label: "Discord",
        text: "Discord",
        type: "icon",
        url: DISCORD_URL,
      },
      {
        children: (
          <div className="flex items-center gap-2">
            <NavLinks />
          </div>
        ),
        secondary: true,
        type: "custom",
      },
    ],
    nav: {
      title: <Logo />,
      url: LOGO_URL,
    },
  };
}
