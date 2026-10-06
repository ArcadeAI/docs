import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Arcade Docs",
      url: "/en/home",
    },
    githubUrl: "https://github.com/ArcadeAI/arcade-mcp",
  };
}
