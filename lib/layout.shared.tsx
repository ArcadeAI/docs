import { Discord, Github } from "@arcadeai/design-system";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/logo";
import { NavLinks } from "@/components/nav-links";
import { urlConfig } from "@/lib/config";

export const GITHUB_REPO_URL = "https://github.com/ArcadeAI/arcade-mcp";
export const DISCORD_URL = urlConfig.company.discord;

/**
 * Shared layout options: logo (links to arcade.dev), GitHub + Discord icons,
 * and the Sign Up / Dashboard buttons. Mirrors the Nextra navbar. `githubUrl`
 * is intentionally not set: it would add a second GitHub icon.
 */
export function baseOptions(): BaseLayoutProps {
  return {
    links: [
      {
        children: <NavLinks />,
        on: "nav",
        type: "custom",
      },
      {
        external: true,
        icon: (
          <Github className="size-5 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
        ),
        label: "Arcade on GitHub",
        text: "GitHub",
        type: "icon",
        url: GITHUB_REPO_URL,
      },
      {
        external: true,
        icon: (
          <Discord className="size-6 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
        ),
        label: "Join us on Discord",
        text: "Discord",
        type: "icon",
        url: DISCORD_URL,
      },
      // Mobile/menu fallbacks for the custom nav buttons above.
      {
        external: true,
        on: "menu",
        text: "Sign Up",
        url: "https://app.arcade.dev/register?utm_source=docs&utm_campaign=docs&utm_medium=navbar",
      },
      {
        external: true,
        on: "menu",
        text: "Dashboard",
        url: "https://app.arcade.dev/playground/chat",
      },
    ],
    nav: {
      title: <Logo />,
      transparentMode: "none",
      url: urlConfig.company.url,
    },
  };
}
