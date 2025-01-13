// Make sure your changes are in sync with public/_redirects

export interface CompanyConfig {
  url: string;
  email: string;
  linkedIn: string;
  github: string;
  discord: string;
}

export interface EngineConfig {
  github: string;
  newIssue: string;
  releases: string;
  conduct: string;
  contributing: string;
  examples: string;
  dockerhub: string;
}

export interface AppConfig {
  company: CompanyConfig;
  engine: EngineConfig;
}

export const config: AppConfig = {
  company: {
    url: "https://arcade-ai.com/",
    email: "contact@arcade-ai.com",
    linkedIn: "https://www.linkedin.com/company/arcade-ai/",
    github: "https://github.com/ArcadeAI",
    discord: "https://discord.gg/GUZEMpEZ9p",
  },
  engine: {
    github: "https://github.com/ArcadeAI/arcade-ai",
    newIssue: "https://github.com/ArcadeAI/arcade-ai/issues/new",
    releases: "https://github.com/ArcadeAI/arcade-ai/releases",
    conduct: "https://github.com/ArcadeAI/arcade-ai/CODE_OF_CONDUCT.md",
    contributing: "https://github.com/ArcadeAI/arcade-ai/CONTRIBUTING.md",
    examples: "https://github.com/ArcadeAI/arcade-ai",
    dockerhub: "https://hub.docker.com/r/arcade-ai/engine",
  },
};
