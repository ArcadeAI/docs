export interface CompanyConfig {
  discord: string;
  email: string;
  github: string;
  linkedIn: string;
  url: string;
}

export interface EngineConfig {
  conduct: string;
  contributing: string;
  dockerhub: string;
  examples: string;
  github: string;
  newIssue: string;
  releases: string;
}

export interface AppConfig {
  company: CompanyConfig;
  engine: EngineConfig;
}

export const urlConfig: AppConfig = {
  company: {
    discord: "https://discord.gg/GUZEMpEZ9p",
    email: "contact@arcade.dev",
    github: "https://github.com/ArcadeAI",
    linkedIn: "https://www.linkedin.com/company/arcade-ai/",
    url: "https://arcade.dev/",
  },
  engine: {
    conduct: "https://github.com/ArcadeAI/arcade-ai/CODE_OF_CONDUCT.md",
    contributing: "https://github.com/ArcadeAI/arcade-ai/CONTRIBUTING.md",
    dockerhub: "https://hub.docker.com/r/arcade-ai/engine",
    examples: "https://github.com/ArcadeAI/arcade-ai",
    github: "https://github.com/ArcadeAI/arcade-ai",
    newIssue: "https://github.com/ArcadeAI/arcade-ai/issues/new",
    releases: "https://github.com/ArcadeAI/arcade-ai/releases",
  },
};
