/**
 * Redirect rules for renamed, merged, or deleted pages.
 *
 * This is a plain data module (not next.config.ts) so it can be imported
 * directly by scripts/check-redirects.ts and tests/sitemap.test.ts instead of
 * regex-parsing next.config.ts as text.
 *
 * `pnpm check-redirects --auto-fix` appends new entries under the
 * "Auto-added redirects" comment near the end of this file.
 */

export type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

export const redirects: Redirect[] = [
  {
    source: "/:locale/resources",
    destination: "/:locale/resources/integrations",
    permanent: true,
  },
  {
    source: "/:locale/references/auth-providers/squareup",
    destination: "/:locale/references/auth-providers/square",
    permanent: true,
  },
  {
    source: "/:locale/guides/security/security-research-program",
    destination: "/:locale/resources/security-research-program",
    permanent: true,
  },
  {
    source: "/:locale/guides/security/securing-arcade-mcp",
    destination: "/:locale/build/create-tools/secure-your-server",
    permanent: true,
  },
  {
    source: "/:locale/guides/security/secure-your-mcp-server",
    destination:
      "/:locale/build/create-tools/secure-your-server/secure-your-mcp-server",
    permanent: true,
  },
  {
    source: "/:locale/guides/security",
    destination: "/:locale/build/create-tools/secure-your-server",
    permanent: true,
  },
  {
    source: "/:locale/references/mcp/python/transports",
    destination: "/:locale/references/mcp/python",
    permanent: true,
  },
  {
    source: "/:locale/references/mcp/python/types",
    destination: "/:locale/references/mcp/python",
    permanent: true,
  },
  {
    source: "/:locale/get-started/agent-frameworks/crewai/custom-auth-flow",
    destination:
      "/:locale/get-started/agent-frameworks/crewai/use-arcade-tools",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/others/:path*",
    destination: "/:locale/resources/integrations",
    permanent: false,
  },
  {
    source: "/:locale/get-started/agent-frameworks/google-adk/use-arcade-tools",
    destination: "/:locale/get-started/agent-frameworks/google-adk/overview",
    permanent: true,
  },
  {
    source: "/:locale/references/logic-extensions-api",
    destination: "/:locale/references/contextual-access-webhook-api",
    permanent: true,
  },
  {
    source: "/:locale/guides/logic-extensions",
    destination: "/:locale/operate/governance/contextual-access",
    permanent: true,
  },
  {
    source: "/:locale/guides/logic-extensions/build-your-own",
    destination: "/:locale/operate/governance/contextual-access/build-your-own",
    permanent: true,
  },
  {
    source: "/:locale/guides/logic-extensions/examples",
    destination: "/:locale/operate/governance/contextual-access/examples",
    permanent: true,
  },
  {
    source: "/:locale/guides/logic-extensions/how-hooks-work",
    destination: "/:locale/operate/governance/contextual-access/how-hooks-work",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/preview",
    destination: "/:locale/resources/integrations",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/customer-support/zendesk/reference",
    destination: "/:locale/resources/integrations/customer-support/zendesk",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/development/firecrawl/reference",
    destination: "/:locale/resources/integrations/development/firecrawl",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/productivity/asana/reference",
    destination: "/:locale/resources/integrations/productivity/asana",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/productivity/clickup/reference",
    destination: "/:locale/resources/integrations/productivity/clickup",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/productivity/dropbox/reference",
    destination: "/:locale/resources/integrations/productivity/dropbox",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/productivity/gmail/reference",
    destination: "/:locale/resources/integrations/productivity/gmail",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/productivity/google-calendar/reference",
    destination: "/:locale/resources/integrations/productivity/google-calendar",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/productivity/google-docs/reference",
    destination: "/:locale/resources/integrations/productivity/google-docs",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/productivity/google-drive/reference",
    destination: "/:locale/resources/integrations/productivity/google-drive",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/productivity/google-sheets/reference",
    destination: "/:locale/resources/integrations/productivity/google-sheets",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/productivity/jira/environment-variables",
    destination: "/:locale/resources/integrations/productivity/jira",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/productivity/jira/reference",
    destination: "/:locale/resources/integrations/productivity/jira",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/sales/hubspot/reference",
    destination: "/:locale/resources/integrations/sales/hubspot",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/discord",
    destination: "/:locale/resources/integrations",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/linkedin",
    destination: "/:locale/resources/integrations/social/linkedin",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/social-communication/microsoft-teams",
    destination: "/:locale/resources/integrations/social/microsoft-teams",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/social-communication/microsoft-teams/reference",
    destination: "/:locale/resources/integrations/social/microsoft-teams",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/reddit",
    destination: "/:locale/resources/integrations/social/reddit",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/slack-api",
    destination: "/:locale/resources/integrations/social/slack-api",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/social-communication/slack/environment-variables",
    destination: "/:locale/resources/integrations/social/slack",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/social-communication/slack/install",
    destination: "/:locale/resources/integrations/social/slack",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/slack",
    destination: "/:locale/resources/integrations/social/slack",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/social-communication/slack/reference",
    destination: "/:locale/resources/integrations/social/slack",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/social-communication/teams/reference",
    destination: "/:locale/resources/integrations/social/microsoft-teams",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/twilio",
    destination: "/:locale/resources/integrations",
    permanent: true,
  },
  {
    source:
      "/:locale/resources/integrations/social-communication/twilio/reference",
    destination: "/:locale/resources/integrations",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/x",
    destination: "/:locale/resources/integrations/social/x",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/zoom/install",
    destination: "/:locale/resources/integrations/social/zoom",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/social-communication/zoom",
    destination: "/:locale/resources/integrations/social/zoom",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/contribute/registry-early-access",
    destination: "/:locale/resources/registry-early-access",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/contribute-a-server",
    destination: "/:locale/resources/registry-early-access",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/mcp-gateways",
    destination: "/:locale/operate/governance/mcp-gateways",
    permanent: true,
  },
  {
    source: "/:locale/get-started/agent-frameworks/langchain/use-arcade-tools",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
    permanent: true,
  },
  {
    source:
      "/:locale/get-started/agent-frameworks/langchain/user-auth-interrupts",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
    permanent: true,
  },
  {
    source: "/:locale/get-started/agent-frameworks/mastra/overview",
    destination: "/:locale/get-started/agent-frameworks/mastra",
    permanent: true,
  },
  {
    source: "/:locale/get-started/agent-frameworks/mastra/use-arcade-tools",
    destination: "/:locale/get-started/agent-frameworks/mastra",
    permanent: true,
  },
  {
    source: "/:locale/get-started/agent-frameworks/mastra/user-auth-interrupts",
    destination: "/:locale/get-started/agent-frameworks/mastra",
    permanent: true,
  },
  {
    source:
      "/:locale/get-started/agent-frameworks/openai-agents/use-arcade-with-openai-agents",
    destination: "/:locale/get-started/agent-frameworks/openai-agents/overview",
    permanent: true,
  },
  {
    source:
      "/:locale/get-started/agent-frameworks/openai-agents/use-arcade-tools",
    destination: "/:locale/get-started/agent-frameworks/openai-agents/overview",
    permanent: true,
  },
  {
    source:
      "/:locale/get-started/agent-frameworks/openai-agents/user-auth-interrupts",
    destination: "/:locale/get-started/agent-frameworks/openai-agents/overview",
    permanent: true,
  },
  {
    source:
      "/:locale/guides/agent-frameworks/setup-arcade-with-your-llm-python",
    destination:
      "/:locale/get-started/agent-frameworks/setup-arcade-with-your-llm-python",
    permanent: true,
  },
  {
    source: "/:locale/home/langchain/use-arcade-tools",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/langchain/use-arcade-tools",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
    permanent: true,
  },
  {
    source: "/:locale/home/langchain/user-auth-interrupts",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/langchain/user-auth-interrupts",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
    permanent: true,
  },
  {
    source:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
    permanent: true,
  },
  {
    source: "/:locale/home/oai-agents/user-auth-interrupts",
    destination: "/:locale/get-started/agent-frameworks/openai-agents/overview",
    permanent: true,
  },
  {
    source: "/:locale/home/mastra/user-auth-interrupts",
    destination: "/:locale/get-started/agent-frameworks/mastra",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/server-level-vs-tool-level-auth",
    destination: "/:locale/learn/server-level-vs-tool-level-auth",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/secure-your-mcp-server",
    destination:
      "/:locale/build/create-tools/secure-your-server/secure-your-mcp-server",
    permanent: true,
  },
  {
    source: "/:locale/home/agent-frameworks-overview",
    destination: "/:locale/get-started/agent-frameworks",
    permanent: true,
  },
  {
    source: "/:locale/home/agentic-development",
    destination: "/:locale/get-started/setup/connect-arcade-docs",
    permanent: true,
  },
  {
    source: "/:locale/home/api-keys",
    destination: "/:locale/get-started/setup/api-keys",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/vercelai/using-arcade-tools",
    destination: "/:locale/get-started/agent-frameworks/vercelai",
    permanent: true,
  },
  {
    source: "/:locale/home/arcade-cli",
    destination: "/:locale/references/arcade-cli",
    permanent: true,
  },
  {
    source: "/:locale/home/auth-providers",
    destination: "/:locale/references/auth-providers",
    permanent: true,
  },
  {
    source: "/:locale/home/auth-providers/:path*",
    destination: "/:locale/references/auth-providers/:path*",
    permanent: true,
  },
  {
    source: "/:locale/home/auth/auth-tool-calling",
    destination: "/:locale/build/tool-calling/custom-apps/auth-tool-calling",
    permanent: true,
  },
  {
    source: "/:locale/home/auth/call-third-party-apis-directly",
    destination: "/:locale/build/tool-calling/call-third-party-apis",
    permanent: true,
  },
  {
    source: "/:locale/home/auth/how-arcade-helps",
    destination: "/:locale/get-started/about-arcade",
    permanent: true,
  },
  {
    source: "/:locale/home/auth/secure-auth-production",
    destination: "/:locale/build/user-facing-agents/secure-auth-production",
    permanent: true,
  },
  {
    source: "/:locale/home/auth/tool-auth-status",
    destination: "/:locale/build/tool-calling/custom-apps/check-auth-status",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/call-tools-from-mcp-clients",
    destination: "/:locale/build/create-tools/tool-basics/call-tools-mcp",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/create-a-mcp-server",
    destination: "/:locale/build/create-tools/tool-basics/build-mcp-server",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/create-a-tool-with-auth",
    destination: "/:locale/build/create-tools/tool-basics/create-tool-auth",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/create-a-tool-with-secrets",
    destination: "/:locale/build/create-tools/tool-basics/create-tool-secrets",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/migrate-from-toolkits",
    destination: "/:locale/build/create-tools/migrate-toolkits",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/organize-mcp-server-tools",
    destination: "/:locale/build/create-tools/tool-basics/organize-mcp-tools",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/providing-useful-tool-errors",
    destination:
      "/:locale/build/create-tools/error-handling/useful-tool-errors",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/retry-tools-with-improved-prompt",
    destination: "/:locale/build/create-tools/error-handling/retry-tools",
    permanent: true,
  },
  {
    source: "/:locale/home/build-tools/tool-context",
    destination: "/:locale/build/create-tools/tool-basics/runtime-data-access",
    permanent: true,
  },
  {
    source: "/:locale/home/changelog",
    destination: "/:locale/references/changelog",
    permanent: true,
  },
  {
    source: "/:locale/home/compare-server-types",
    destination: "/:locale/build/create-tools/tool-basics/compare-server-types",
    permanent: true,
  },
  {
    source: "/:locale/home/contact-us",
    destination: "/:locale/resources/contact-us",
    permanent: true,
  },
  {
    source: "/:locale/home/crewai/custom-auth-flow",
    destination:
      "/:locale/get-started/agent-frameworks/crewai/use-arcade-tools",
    permanent: true,
  },
  {
    source: "/:locale/home/crewai/use-arcade-tools",
    destination:
      "/:locale/get-started/agent-frameworks/crewai/use-arcade-tools",
    permanent: true,
  },
  {
    source: "/:locale/home/custom-mcp-server-quickstart",
    destination: "/:locale/get-started/quickstarts/mcp-server-quickstart",
    permanent: true,
  },
  {
    source: "/:locale/home/deployment/arcade-cloud-infra",
    destination: "/:locale/operate/deploy/arcade-cloud",
    permanent: true,
  },
  {
    source: "/:locale/home/deployment/engine-configuration",
    destination: "/:locale/operate/deploy/helm",
    permanent: true,
  },
  {
    source: "/:locale/home/evaluate-tools/create-an-evaluation-suite",
    destination:
      "/:locale/build/create-tools/evaluate-tools/create-evaluation-suite",
    permanent: true,
  },
  {
    source: "/:locale/home/evaluate-tools/run-evaluations",
    destination: "/:locale/build/create-tools/evaluate-tools/run-evaluations",
    permanent: true,
  },
  {
    source: "/:locale/home/evaluate-tools/why-evaluate-tools",
    destination: "/:locale/build/create-tools/evaluate-tools/why-evaluate",
    permanent: true,
  },
  {
    source: "/:locale/home/examples",
    destination: "/:locale/resources/examples",
    permanent: true,
  },
  {
    source: "/:locale/home/faq",
    destination: "/:locale/resources/faq",
    permanent: true,
  },
  {
    source: "/:locale/home/glossary",
    destination: "/:locale/resources/glossary",
    permanent: true,
  },
  {
    source: "/:locale/home/google-adk/use-arcade-tools",
    destination:
      "/:locale/get-started/agent-frameworks/google-adk/setup-python",
    permanent: true,
  },
  {
    source: "/:locale/home/hosting-overview",
    destination: "/:locale/operate/deploy",
    permanent: true,
  },
  {
    source: "/:locale/home/langchain/auth-langchain-tools",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/auth-langchain-tools",
    permanent: true,
  },
  {
    source: "/:locale/home/mastra/use-arcade-tools",
    destination: "/:locale/get-started/agent-frameworks/mastra",
    permanent: true,
  },
  {
    source: "/:locale/home/mcp-clients/claude-desktop",
    destination: "/:locale/get-started/mcp-clients/claude-desktop",
    permanent: true,
  },
  {
    source: "/:locale/home/mcp-clients/claude-code",
    destination: "/:locale/get-started/mcp-clients/claude-code",
    permanent: true,
  },
  {
    source: "/:locale/home/mcp-clients/cursor",
    destination: "/:locale/get-started/mcp-clients/cursor",
    permanent: true,
  },
  {
    source: "/:locale/home/mcp-clients/visual-studio-code",
    destination: "/:locale/get-started/mcp-clients/visual-studio-code",
    permanent: true,
  },
  {
    source: "/:locale/home/mcp-gateway-quickstart",
    destination: "/:locale/get-started/quickstarts/call-tool-client",
    permanent: true,
  },
  {
    source: "/:locale/home/mcp-gateways",
    destination: "/:locale/operate/governance/mcp-gateways",
    permanent: true,
  },
  {
    source: "/:locale/home/oai-agents/use-arcade-tools",
    destination: "/:locale/get-started/agent-frameworks/openai-agents/overview",
    permanent: true,
  },
  {
    source: "/:locale/home/quickstart",
    destination: "/:locale/get-started/quickstarts/call-tool-agent",
    permanent: true,
  },
  {
    source: "/:locale/home/registry-early-access",
    destination: "/:locale/resources/registry-early-access",
    permanent: true,
  },
  {
    source: "/:locale/home/serve-tools/arcade-deploy",
    destination: "/:locale/build/arcade-deploy",
    permanent: true,
  },
  {
    source: "/:locale/home/serve-tools/hybrid-worker",
    destination: "/:locale/operate/deploy/on-prem",
    permanent: true,
  },
  {
    source: "/:locale/home/use-tools/get-tool-definitions",
    destination: "/:locale/build/tool-calling/custom-apps/get-tool-definitions",
    permanent: true,
  },
  {
    source: "/:locale/home/use-tools/tools-overview",
    destination: "/:locale/build/tool-calling",
    permanent: true,
  },
  {
    source: "/:locale/home/use-tools/types-of-tools",
    destination: "/:locale/build/create-tools/improve/types-of-tools",
    permanent: true,
  },
  {
    source: "/:locale/home/use-tools/error-handling",
    destination: "/:locale/build/tool-calling/error-handling",
    permanent: true,
  },
  {
    source: "/:locale/home/vercelai/using-arcade-tools",
    destination: "/:locale/get-started/agent-frameworks/vercelai",
    permanent: true,
  },
  {
    source: "/:locale(en|es|pt-BR)/integrations",
    destination: "/:locale/resources/integrations",
    permanent: true,
  },
  {
    source: "/:locale(en|es|pt-BR)/integrations/:path*",
    destination: "/:locale/resources/integrations/:path*",
    permanent: true,
  },
  {
    source: "/:locale(en|es|pt-BR)/mcp-servers",
    destination: "/:locale/resources/integrations",
    permanent: true,
  },
  {
    source: "/:locale(en|es|pt-BR)/mcp-servers/:path*",
    destination: "/:locale/resources/integrations/:path*",
    permanent: true,
  },
  {
    source: "/:locale/references/mcp",
    destination: "/:locale/references/mcp/python",
    permanent: true,
  },
  {
    source: "/:locale/references/mcp/python/overview",
    destination: "/:locale/references/mcp/python",
    permanent: true,
  },
  {
    source: "/:locale/references/arcade-cliarcade-configure",
    destination: "/:locale/references/arcade-cli",
    permanent: true,
  },
  {
    source: "/:locale/get-started/setup/api-key",
    destination: "/:locale/get-started/setup/api-keys",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/custom-apps/authorized-tool-calling",
    destination: "/:locale/build/tool-calling/custom-apps/auth-tool-calling",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-facing-agents/brand-provider",
    destination: "/:locale/build/user-facing-agents/secure-auth-production",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-facing-agents/configure-oauth-provider",
    destination: "/:locale/build/user-facing-agents/secure-auth-production",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/mcp-client/:client",
    destination: "/:locale/get-started/mcp-clients/:client",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/get-tool-definitions",
    destination: "/:locale/build/tool-calling/custom-apps/get-tool-definitions",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/engine-configuration",
    destination: "/:locale/operate/deploy/helm",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/configure-engine",
    destination: "/:locale/operate/deploy/helm",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/performance/run-evaluations",
    destination: "/:locale/build/create-tools/evaluate-tools/run-evaluations",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/contribute/registry",
    destination: "/:locale/resources/registry-early-access",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/crewai/python",
    destination:
      "/:locale/get-started/agent-frameworks/crewai/use-arcade-tools",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/langchain/python",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/langchain/tools",
    destination:
      "/:locale/get-started/agent-frameworks/langchain/auth-langchain-tools",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/mastra/typescript",
    destination: "/:locale/get-started/agent-frameworks/mastra",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/google-adk/python",
    destination:
      "/:locale/get-started/agent-frameworks/google-adk/setup-python",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/openai/python",
    destination: "/:locale/get-started/agent-frameworks/openai-agents/overview",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/vercel-ai/typescript",
    destination: "/:locale/get-started/agent-frameworks/vercelai",
    permanent: true,
  },
  {
    source: "/:locale/resources/mastra/user-auth-interrupts",
    destination: "/:locale/get-started/agent-frameworks/mastra",
    permanent: true,
  },
  {
    source: "/:locale/resources/oai-agents/overview",
    destination: "/:locale/get-started/agent-frameworks/openai-agents/overview",
    permanent: true,
  },
  {
    source: "/:locale/resources/creating-tools/:path*",
    destination: "/:locale/build/create-tools/:path*",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks",
    destination: "/:locale/get-started/agent-frameworks",
    permanent: true,
  },
  {
    source: "/:locale/guides/agent-frameworks/:path*",
    destination: "/:locale/get-started/agent-frameworks/:path*",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/mcp-clients",
    destination: "/:locale/get-started/mcp-clients",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/mcp-clients/:path*",
    destination: "/:locale/get-started/mcp-clients/:path*",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/productivity/sharepoint",
    destination:
      "/:locale/resources/integrations/productivity/microsoft-sharepoint",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/productivity/outlook-mail",
    destination:
      "/:locale/resources/integrations/productivity/microsoft-outlook-mail",
    permanent: true,
  },
  {
    source: "/:locale/resources/integrations/productivity/outlook-calendar",
    destination:
      "/:locale/resources/integrations/productivity/microsoft-outlook-calendar",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/arcade-deploy",
    destination: "/:locale/build/arcade-deploy",
    permanent: true,
  },
  {
    source: "/:locale/operate/deploy/arcade-deploy",
    destination: "/:locale/build/arcade-deploy",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/error-handling",
    destination: "/:locale/build/create-tools/error-handling",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/error-handling/retry-tools",
    destination: "/:locale/build/create-tools/error-handling/retry-tools",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/error-handling/useful-tool-errors",
    destination:
      "/:locale/build/create-tools/error-handling/useful-tool-errors",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/evaluate-tools/capture-mode",
    destination: "/:locale/build/create-tools/evaluate-tools/capture-mode",
    permanent: true,
  },
  {
    source:
      "/:locale/guides/create-tools/evaluate-tools/comparative-evaluations",
    destination:
      "/:locale/build/create-tools/evaluate-tools/comparative-evaluations",
    permanent: true,
  },
  {
    source:
      "/:locale/guides/create-tools/evaluate-tools/create-evaluation-suite",
    destination:
      "/:locale/build/create-tools/evaluate-tools/create-evaluation-suite",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/evaluate-tools",
    destination: "/:locale/build/create-tools/evaluate-tools",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/evaluate-tools/run-evaluations",
    destination: "/:locale/build/create-tools/evaluate-tools/run-evaluations",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/evaluate-tools/why-evaluate",
    destination: "/:locale/build/create-tools/evaluate-tools/why-evaluate",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/improve/types-of-tools",
    destination: "/:locale/build/create-tools/improve/types-of-tools",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/migrate-toolkits",
    destination: "/:locale/build/create-tools/migrate-toolkits",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/secure-your-server",
    destination: "/:locale/build/create-tools/secure-your-server",
    permanent: true,
  },
  {
    source:
      "/:locale/guides/create-tools/secure-your-server/secure-your-mcp-server",
    destination:
      "/:locale/build/create-tools/secure-your-server/secure-your-mcp-server",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics/add-tool-metadata",
    destination: "/:locale/build/create-tools/tool-basics/add-tool-metadata",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics/build-mcp-server",
    destination: "/:locale/build/create-tools/tool-basics/build-mcp-server",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics/call-tools-mcp",
    destination: "/:locale/build/create-tools/tool-basics/call-tools-mcp",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics/compare-server-types",
    destination: "/:locale/build/create-tools/tool-basics/compare-server-types",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics/create-tool-auth",
    destination: "/:locale/build/create-tools/tool-basics/create-tool-auth",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics/create-tool-secrets",
    destination: "/:locale/build/create-tools/tool-basics/create-tool-secrets",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics/organize-mcp-tools",
    destination: "/:locale/build/create-tools/tool-basics/organize-mcp-tools",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics",
    destination: "/:locale/build/create-tools/tool-basics",
    permanent: true,
  },
  {
    source: "/:locale/guides/create-tools/tool-basics/runtime-data-access",
    destination: "/:locale/build/create-tools/tool-basics/runtime-data-access",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/call-third-party-apis",
    destination: "/:locale/build/tool-calling/call-third-party-apis",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/custom-apps/auth-tool-calling",
    destination: "/:locale/build/tool-calling/custom-apps/auth-tool-calling",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/custom-apps/check-auth-status",
    destination: "/:locale/build/tool-calling/custom-apps/check-auth-status",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/custom-apps/get-tool-definitions",
    destination: "/:locale/build/tool-calling/custom-apps/get-tool-definitions",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/custom-apps",
    destination: "/:locale/build/tool-calling/custom-apps",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling/error-handling",
    destination: "/:locale/build/tool-calling/error-handling",
    permanent: true,
  },
  {
    source: "/:locale/guides/tool-calling",
    destination: "/:locale/build/tool-calling",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-facing-agents/secure-auth-production",
    destination: "/:locale/build/user-facing-agents/secure-auth-production",
    permanent: true,
  },
  {
    source: "/:locale/guides/audit-logs",
    destination: "/:locale/operate/governance/audit-logs",
    permanent: true,
  },
  {
    source: "/:locale/guides/contextual-access/build-your-own",
    destination: "/:locale/operate/governance/contextual-access/build-your-own",
    permanent: true,
  },
  {
    source: "/:locale/guides/contextual-access/examples",
    destination: "/:locale/operate/governance/contextual-access/examples",
    permanent: true,
  },
  {
    source: "/:locale/guides/contextual-access/how-hooks-work",
    destination: "/:locale/operate/governance/contextual-access/how-hooks-work",
    permanent: true,
  },
  {
    source: "/:locale/guides/contextual-access",
    destination: "/:locale/operate/governance/contextual-access",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/arcade-cloud",
    destination: "/:locale/operate/deploy/arcade-cloud",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/aws",
    destination: "/:locale/operate/deploy/aws",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/azure",
    destination: "/:locale/operate/deploy/azure",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/gcp",
    destination: "/:locale/operate/deploy/gcp",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/helm",
    destination: "/:locale/operate/deploy/helm",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/on-prem",
    destination: "/:locale/operate/deploy/on-prem",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting",
    destination: "/:locale/operate/deploy",
    permanent: true,
  },
  {
    source: "/:locale/guides/deployment-hosting/warp-pipes",
    destination: "/:locale/operate/deploy/warp-pipes",
    permanent: true,
  },
  {
    source: "/:locale/guides/mcp-gateways/add-remote-servers",
    destination: "/:locale/operate/governance/mcp-gateways/add-remote-servers",
    permanent: true,
  },
  {
    source: "/:locale/guides/mcp-gateways/create-via-ai",
    destination: "/:locale/operate/governance/mcp-gateways/create-via-ai",
    permanent: true,
  },
  {
    source: "/:locale/guides/mcp-gateways/create-via-dashboard",
    destination:
      "/:locale/operate/governance/mcp-gateways/create-via-dashboard",
    permanent: true,
  },
  {
    source: "/:locale/guides/mcp-gateways",
    destination: "/:locale/operate/governance/mcp-gateways",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-sources/auth0",
    destination: "/:locale/operate/identity/user-sources/auth0",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-sources/clerk",
    destination: "/:locale/operate/identity/user-sources/clerk",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-sources/microsoft-entra-id",
    destination: "/:locale/operate/identity/user-sources/microsoft-entra-id",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-sources/okta",
    destination: "/:locale/operate/identity/user-sources/okta",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-sources",
    destination: "/:locale/operate/identity/user-sources",
    permanent: true,
  },
  {
    source: "/:locale/guides/user-sources/stytch",
    destination: "/:locale/operate/identity/user-sources/stytch",
    permanent: true,
  },
  {
    source: "/:locale/guides",
    destination: "/:locale/build",
    permanent: true,
  },
  {
    source: "/:locale/operate/deployment",
    destination: "/:locale/operate/deploy",
    permanent: true,
  },
  {
    source: "/:locale/operate/deployment/arcade-cloud",
    destination: "/:locale/operate/deploy/arcade-cloud",
    permanent: true,
  },
  {
    source: "/:locale/operate/deployment/aws",
    destination: "/:locale/operate/deploy/aws",
    permanent: true,
  },
  {
    source: "/:locale/operate/deployment/azure",
    destination: "/:locale/operate/deploy/azure",
    permanent: true,
  },
  {
    source: "/:locale/operate/deployment/gcp",
    destination: "/:locale/operate/deploy/gcp",
    permanent: true,
  },
  {
    source: "/:locale/operate/deployment/helm",
    destination: "/:locale/operate/deploy/helm",
    permanent: true,
  },
  {
    source: "/:locale/operate/deployment/on-prem",
    destination: "/:locale/operate/deploy/on-prem",
    permanent: true,
  },
  {
    source: "/:locale/operate/deployment/warp-pipes",
    destination: "/:locale/operate/deploy/warp-pipes",
    permanent: true,
  },
  {
    source: "/:locale/operate/user-sources",
    destination: "/:locale/operate/identity/user-sources",
    permanent: true,
  },
  {
    source: "/:locale/operate/user-sources/auth0",
    destination: "/:locale/operate/identity/user-sources/auth0",
    permanent: true,
  },
  {
    source: "/:locale/operate/user-sources/clerk",
    destination: "/:locale/operate/identity/user-sources/clerk",
    permanent: true,
  },
  {
    source: "/:locale/operate/user-sources/microsoft-entra-id",
    destination: "/:locale/operate/identity/user-sources/microsoft-entra-id",
    permanent: true,
  },
  {
    source: "/:locale/operate/user-sources/okta",
    destination: "/:locale/operate/identity/user-sources/okta",
    permanent: true,
  },
  {
    source: "/:locale/operate/user-sources/stytch",
    destination: "/:locale/operate/identity/user-sources/stytch",
    permanent: true,
  },
  {
    source: "/:locale/operate/mcp-gateways",
    destination: "/:locale/operate/governance/mcp-gateways",
    permanent: true,
  },
  {
    source: "/:locale/operate/mcp-gateways/add-remote-servers",
    destination: "/:locale/operate/governance/mcp-gateways/add-remote-servers",
    permanent: true,
  },
  {
    source: "/:locale/operate/mcp-gateways/create-via-ai",
    destination: "/:locale/operate/governance/mcp-gateways/create-via-ai",
    permanent: true,
  },
  {
    source: "/:locale/operate/mcp-gateways/create-via-dashboard",
    destination:
      "/:locale/operate/governance/mcp-gateways/create-via-dashboard",
    permanent: true,
  },
  {
    source: "/:locale/operate/contextual-access",
    destination: "/:locale/operate/governance/contextual-access",
    permanent: true,
  },
  {
    source: "/:locale/operate/contextual-access/build-your-own",
    destination: "/:locale/operate/governance/contextual-access/build-your-own",
    permanent: true,
  },
  {
    source: "/:locale/operate/contextual-access/examples",
    destination: "/:locale/operate/governance/contextual-access/examples",
    permanent: true,
  },
  {
    source: "/:locale/operate/contextual-access/how-hooks-work",
    destination: "/:locale/operate/governance/contextual-access/how-hooks-work",
    permanent: true,
  },
  {
    source: "/:locale/operate/audit-logs",
    destination: "/:locale/operate/governance/audit-logs",
    permanent: true,
  },
];
