import { Discord, Github } from "@arcadeai/design-system";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Link from "next/link";
import { SignupLink } from "@/components/analytics";
import { getDashboardUrl } from "@/components/dashboard-link";
import { Logo } from "@/components/logo";
import { NavBarButton } from "@/components/nav-bar-button";
import { urlConfig } from "@/lib/config";

export const GITHUB_REPO_URL = "https://github.com/ArcadeAI/arcade-mcp";
export const DISCORD_URL = urlConfig.company.discord;

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: GITHUB_REPO_URL,
    links: [
      {
        external: true,
        icon: (
          <Discord className="size-5 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
        ),
        label: "Join us in Discord",
        text: "Discord",
        type: "icon",
        url: DISCORD_URL,
      },
      {
        external: true,
        icon: (
          <Github className="size-5 transition-colors duration-150 ease-in-out [&>path]:fill-current" />
        ),
        label: "View on GitHub",
        text: "GitHub",
        type: "icon",
        url: GITHUB_REPO_URL,
      },
      {
        children: (
          <SignupLink
            className="text-inherit"
            linkLocation="docs:navbar"
            utmMedium="navbar"
          >
            <NavBarButton
              hideOnPath={[
                "/build/create-tools/add-tools-to-arcade-catalog",
                "/en/build/create-tools/add-tools-to-arcade-catalog",
              ]}
              text="Sign Up"
            />
          </SignupLink>
        ),
        secondary: true,
        type: "custom",
      },
      {
        children: (
          <Link href={getDashboardUrl("playground/chat")}>
            <NavBarButton text="Dashboard" variant="outline" />
          </Link>
        ),
        secondary: true,
        type: "custom",
      },
    ],
    nav: {
      title: <Logo />,
      transparentMode: "none",
      url: urlConfig.company.url,
    },
  };
}
