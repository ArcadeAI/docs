import type { NextConfig } from "next";
import nextra from "nextra";
import { withLlmsTxt } from "./lib/next-plugin-llmstxt";
import { remarkGlossary } from "./lib/remark-glossary";

// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  codeHighlight: true,
  search: false,
  mdxOptions: {
    remarkPlugins: [
      [
        remarkGlossary,
        { glossaryPath: "./app/en/resources/glossary/page.mdx" },
      ],
    ],
  },
});

const nextConfig: NextConfig = withLlmsTxt({
  enabled: false, // disabled for now, we will recreate this every week
})(
  withNextra({
    async redirects() {
      return [
        // Locale-less siblings for single-hop redirect (D-1)
        {
          source: "/home/auth/authorized-tool-calling",
          destination: "/en/guides/tool-calling/custom-apps/auth-tool-calling",
          permanent: true,
        },
        {
          source: "/home/build-tools/create-a-toolkit",
          destination: "/en/guides/create-tools/tool-basics",
          permanent: true,
        },
        {
          source: "/home/configure/arcade-deploy",
          destination: "/en/guides/deployment-hosting/arcade-deploy",
          permanent: true,
        },
        {
          source: "/home/hybrid-deployment/hybrid-worker",
          destination: "/en/guides/deployment-hosting",
          permanent: true,
        },
        {
          source: "/home/local-deployment/install/local",
          destination: "/en/guides/deployment-hosting/on-prem",
          permanent: true,
        },
        {
          source: "/home/local-deployment/install/overview",
          destination: "/en/guides/deployment-hosting",
          permanent: true,
        },
        {
          source: "/references/auth-providers/squareup",
          destination: "/en/references/auth-providers/square",
          permanent: true,
        },
        {
          source: "/resources/integrations/entertainment/twitch",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source: "/resources/integrations/social/discord",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source: "/resources/integrations/social/twilio",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/obsidian",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/closeio",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source: "/resources/integrations/daytona/overview",
          destination: "/en/resources/integrations/development/daytona",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/google/gmail",
          destination: "/en/resources/integrations/productivity/gmail",
          permanent: true,
        },
        {
          source: "/guides/security/security-research-program",
          destination: "/en/resources/security-research-program",
          permanent: true,
        },
        {
          source: "/guides/security/securing-arcade-mcp",
          destination: "/en/guides/create-tools/secure-your-server",
          permanent: true,
        },
        {
          source: "/guides/security/secure-your-mcp-server",
          destination:
            "/en/guides/create-tools/secure-your-server/secure-your-mcp-server",
          permanent: true,
        },
        {
          source: "/guides/security",
          destination: "/en/guides/create-tools/secure-your-server",
          permanent: true,
        },
        {
          source: "/references/mcp/python/transports",
          destination: "/en/references/mcp/python",
          permanent: true,
        },
        {
          source: "/references/mcp/python/types",
          destination: "/en/references/mcp/python",
          permanent: true,
        },
        {
          source: "/get-started/agent-frameworks/crewai/custom-auth-flow",
          destination:
            "/en/get-started/agent-frameworks/crewai/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/resources/integrations/others/:path*",
          destination: "/en/resources/integrations",
          permanent: false,
        },
        {
          source: "/get-started/agent-frameworks/google-adk/use-arcade-tools",
          destination: "/en/get-started/agent-frameworks/google-adk/overview",
          permanent: true,
        },
        {
          source: "/references/logic-extensions-api",
          destination: "/en/references/contextual-access-webhook-api",
          permanent: true,
        },
        {
          source: "/guides/logic-extensions",
          destination: "/en/guides/contextual-access",
          permanent: true,
        },
        {
          source: "/guides/logic-extensions/build-your-own",
          destination: "/en/guides/contextual-access/build-your-own",
          permanent: true,
        },
        {
          source: "/guides/logic-extensions/examples",
          destination: "/en/guides/contextual-access/examples",
          permanent: true,
        },
        {
          source: "/guides/logic-extensions/how-hooks-work",
          destination: "/en/guides/contextual-access/how-hooks-work",
          permanent: true,
        },
        {
          source: "/resources/integrations/preview",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source: "/resources/integrations/customer-support/zendesk/reference",
          destination: "/en/resources/integrations/customer-support/zendesk",
          permanent: true,
        },
        {
          source: "/resources/integrations/development/firecrawl/reference",
          destination: "/en/resources/integrations/development/firecrawl",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/asana/reference",
          destination: "/en/resources/integrations/productivity/asana",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/clickup/reference",
          destination: "/en/resources/integrations/productivity/clickup",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/dropbox/reference",
          destination: "/en/resources/integrations/productivity/dropbox",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/gmail/reference",
          destination: "/en/resources/integrations/productivity/gmail",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/productivity/google-calendar/reference",
          destination:
            "/en/resources/integrations/productivity/google-calendar",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/google-docs/reference",
          destination: "/en/resources/integrations/productivity/google-docs",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/google-drive/reference",
          destination: "/en/resources/integrations/productivity/google-drive",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/productivity/google-sheets/reference",
          destination: "/en/resources/integrations/productivity/google-sheets",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/productivity/jira/environment-variables",
          destination: "/en/resources/integrations/productivity/jira",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/jira/reference",
          destination: "/en/resources/integrations/productivity/jira",
          permanent: true,
        },
        {
          source: "/resources/integrations/sales/hubspot/reference",
          destination: "/en/resources/integrations/sales/hubspot",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/discord",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/linkedin",
          destination: "/en/resources/integrations/social/linkedin",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/social-communication/microsoft-teams",
          destination: "/en/resources/integrations/social/microsoft-teams",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/social-communication/microsoft-teams/reference",
          destination: "/en/resources/integrations/social/microsoft-teams",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/reddit",
          destination: "/en/resources/integrations/social/reddit",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/slack-api",
          destination: "/en/resources/integrations/social/slack-api",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/social-communication/slack/environment-variables",
          destination: "/en/resources/integrations/social/slack",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/slack/install",
          destination: "/en/resources/integrations/social/slack",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/slack",
          destination: "/en/resources/integrations/social/slack",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/social-communication/slack/reference",
          destination: "/en/resources/integrations/social/slack",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/social-communication/teams/reference",
          destination: "/en/resources/integrations/social/microsoft-teams",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/twilio",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source:
            "/resources/integrations/social-communication/twilio/reference",
          destination: "/en/resources/integrations",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/x",
          destination: "/en/resources/integrations/social/x",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/zoom/install",
          destination: "/en/resources/integrations/social/zoom",
          permanent: true,
        },
        {
          source: "/resources/integrations/social-communication/zoom",
          destination: "/en/resources/integrations/social/zoom",
          permanent: true,
        },
        {
          source: "/guides/create-tools/contribute/registry-early-access",
          destination: "/en/resources/registry-early-access",
          permanent: true,
        },
        {
          source: "/resources/integrations/contribute-a-server",
          destination: "/en/resources/registry-early-access",
          permanent: true,
        },
        {
          source: "/guides/create-tools/mcp-gateways",
          destination: "/en/guides/mcp-gateways",
          permanent: true,
        },
        {
          source: "/get-started/agent-frameworks/langchain/use-arcade-tools",
          destination:
            "/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
          permanent: true,
        },
        {
          source:
            "/get-started/agent-frameworks/langchain/user-auth-interrupts",
          destination:
            "/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
          permanent: true,
        },
        {
          source: "/get-started/agent-frameworks/mastra/overview",
          destination: "/en/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source: "/get-started/agent-frameworks/mastra/use-arcade-tools",
          destination: "/en/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source: "/get-started/agent-frameworks/mastra/user-auth-interrupts",
          destination: "/en/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source:
            "/get-started/agent-frameworks/openai-agents/use-arcade-with-openai-agents",
          destination:
            "/en/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source:
            "/get-started/agent-frameworks/openai-agents/use-arcade-tools",
          destination:
            "/en/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source:
            "/get-started/agent-frameworks/openai-agents/user-auth-interrupts",
          destination:
            "/en/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/setup-arcade-with-your-llm-python",
          destination:
            "/en/get-started/agent-frameworks/setup-arcade-with-your-llm-python",
          permanent: true,
        },
        {
          source: "/home/langchain/use-arcade-tools",
          destination:
            "/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/langchain/use-arcade-tools",
          destination:
            "/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
          permanent: true,
        },
        {
          source: "/home/langchain/user-auth-interrupts",
          destination:
            "/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/langchain/user-auth-interrupts",
          destination:
            "/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
          permanent: true,
        },
        {
          source:
            "/get-started/agent-frameworks/langchain/use-arcade-with-langchain",
          destination:
            "/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
          permanent: true,
        },
        {
          source: "/home/oai-agents/user-auth-interrupts",
          destination:
            "/en/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source: "/home/mastra/user-auth-interrupts",
          destination: "/en/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source: "/home/build-tools/server-level-vs-tool-level-auth",
          destination: "/en/learn/server-level-vs-tool-level-auth",
          permanent: true,
        },
        {
          source: "/home/build-tools/secure-your-mcp-server",
          destination:
            "/en/guides/create-tools/secure-your-server/secure-your-mcp-server",
          permanent: true,
        },
        {
          source: "/home/agent-frameworks-overview",
          destination: "/en/get-started/agent-frameworks",
          permanent: true,
        },
        {
          source: "/home/agentic-development",
          destination: "/en/get-started/setup/connect-arcade-docs",
          permanent: true,
        },
        {
          source: "/home/api-keys",
          destination: "/en/get-started/setup/api-keys",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/vercelai/using-arcade-tools",
          destination: "/en/get-started/agent-frameworks/vercelai",
          permanent: true,
        },
        {
          source: "/home/arcade-cli",
          destination: "/en/references/arcade-cli",
          permanent: true,
        },
        {
          source: "/home/auth-providers",
          destination: "/en/references/auth-providers",
          permanent: true,
        },
        {
          source: "/home/auth-providers/:path*",
          destination: "/en/references/auth-providers/:path*",
          permanent: true,
        },
        {
          source: "/home/auth/auth-tool-calling",
          destination: "/en/guides/tool-calling/custom-apps/auth-tool-calling",
          permanent: true,
        },
        {
          source: "/home/auth/call-third-party-apis-directly",
          destination: "/en/guides/tool-calling/call-third-party-apis",
          permanent: true,
        },
        {
          source: "/home/auth/how-arcade-helps",
          destination: "/en/get-started/about-arcade",
          permanent: true,
        },
        {
          source: "/home/auth/secure-auth-production",
          destination: "/en/guides/user-facing-agents/secure-auth-production",
          permanent: true,
        },
        {
          source: "/home/auth/tool-auth-status",
          destination: "/en/guides/tool-calling/custom-apps/check-auth-status",
          permanent: true,
        },
        {
          source: "/home/build-tools/call-tools-from-mcp-clients",
          destination: "/en/guides/create-tools/tool-basics/call-tools-mcp",
          permanent: true,
        },
        {
          source: "/home/build-tools/create-a-mcp-server",
          destination: "/en/guides/create-tools/tool-basics/build-mcp-server",
          permanent: true,
        },
        {
          source: "/home/build-tools/create-a-tool-with-auth",
          destination: "/en/guides/create-tools/tool-basics/create-tool-auth",
          permanent: true,
        },
        {
          source: "/home/build-tools/create-a-tool-with-secrets",
          destination:
            "/en/guides/create-tools/tool-basics/create-tool-secrets",
          permanent: true,
        },
        {
          source: "/home/build-tools/migrate-from-toolkits",
          destination: "/en/guides/create-tools/migrate-toolkits",
          permanent: true,
        },
        {
          source: "/home/build-tools/organize-mcp-server-tools",
          destination: "/en/guides/create-tools/tool-basics/organize-mcp-tools",
          permanent: true,
        },
        {
          source: "/home/build-tools/providing-useful-tool-errors",
          destination:
            "/en/guides/create-tools/error-handling/useful-tool-errors",
          permanent: true,
        },
        {
          source: "/home/build-tools/retry-tools-with-improved-prompt",
          destination: "/en/guides/create-tools/error-handling/retry-tools",
          permanent: true,
        },
        {
          source: "/home/build-tools/tool-context",
          destination:
            "/en/guides/create-tools/tool-basics/runtime-data-access",
          permanent: true,
        },
        {
          source: "/home/changelog",
          destination: "/en/references/changelog",
          permanent: true,
        },
        {
          source: "/home/compare-server-types",
          destination:
            "/en/guides/create-tools/tool-basics/compare-server-types",
          permanent: true,
        },
        {
          source: "/home/contact-us",
          destination: "/en/resources/contact-us",
          permanent: true,
        },
        {
          source: "/home/crewai/custom-auth-flow",
          destination:
            "/en/get-started/agent-frameworks/crewai/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/home/crewai/use-arcade-tools",
          destination:
            "/en/get-started/agent-frameworks/crewai/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/home/custom-mcp-server-quickstart",
          destination: "/en/get-started/quickstarts/mcp-server-quickstart",
          permanent: true,
        },
        {
          source: "/home/deployment/arcade-cloud-infra",
          destination: "/en/guides/deployment-hosting/arcade-cloud",
          permanent: true,
        },
        {
          source: "/home/deployment/engine-configuration",
          destination: "/en/guides/deployment-hosting/configure-engine",
          permanent: true,
        },
        {
          source: "/home/evaluate-tools/create-an-evaluation-suite",
          destination:
            "/en/guides/create-tools/evaluate-tools/create-evaluation-suite",
          permanent: true,
        },
        {
          source: "/home/evaluate-tools/run-evaluations",
          destination: "/en/guides/create-tools/evaluate-tools/run-evaluations",
          permanent: true,
        },
        {
          source: "/home/evaluate-tools/why-evaluate-tools",
          destination: "/en/guides/create-tools/evaluate-tools/why-evaluate",
          permanent: true,
        },
        {
          source: "/home/examples",
          destination: "/en/resources/examples",
          permanent: true,
        },
        {
          source: "/home/faq",
          destination: "/en/resources/faq",
          permanent: true,
        },
        {
          source: "/home/glossary",
          destination: "/en/resources/glossary",
          permanent: true,
        },
        {
          source: "/home/google-adk/use-arcade-tools",
          destination:
            "/en/get-started/agent-frameworks/google-adk/setup-python",
          permanent: true,
        },
        {
          source: "/home/hosting-overview",
          destination: "/en/guides/deployment-hosting",
          permanent: true,
        },
        {
          source: "/home/langchain/auth-langchain-tools",
          destination:
            "/en/get-started/agent-frameworks/langchain/auth-langchain-tools",
          permanent: true,
        },
        {
          source: "/home/mastra/use-arcade-tools",
          destination: "/en/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source: "/home/mcp-clients/claude-desktop",
          destination: "/en/get-started/mcp-clients/claude-desktop",
          permanent: true,
        },
        {
          source: "/home/mcp-clients/claude-code",
          destination: "/en/get-started/mcp-clients/claude-code",
          permanent: true,
        },
        {
          source: "/home/mcp-clients/cursor",
          destination: "/en/get-started/mcp-clients/cursor",
          permanent: true,
        },
        {
          source: "/home/mcp-clients/visual-studio-code",
          destination: "/en/get-started/mcp-clients/visual-studio-code",
          permanent: true,
        },
        {
          source: "/home/mcp-gateway-quickstart",
          destination: "/en/get-started/quickstarts/call-tool-client",
          permanent: true,
        },
        {
          source: "/home/mcp-gateways",
          destination: "/en/guides/mcp-gateways",
          permanent: true,
        },
        {
          source: "/home/oai-agents/use-arcade-tools",
          destination:
            "/en/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source: "/home/quickstart",
          destination: "/en/get-started/quickstarts/call-tool-agent",
          permanent: true,
        },
        {
          source: "/home/registry-early-access",
          destination: "/en/resources/registry-early-access",
          permanent: true,
        },
        {
          source: "/home/serve-tools/arcade-deploy",
          destination: "/en/guides/deployment-hosting/arcade-deploy",
          permanent: true,
        },
        {
          source: "/home/serve-tools/hybrid-worker",
          destination: "/en/guides/deployment-hosting/on-prem",
          permanent: true,
        },
        {
          source: "/home/use-tools/get-tool-definitions",
          destination:
            "/en/guides/tool-calling/custom-apps/get-tool-definitions",
          permanent: true,
        },
        {
          source: "/home/use-tools/tools-overview",
          destination: "/en/guides/tool-calling",
          permanent: true,
        },
        {
          source: "/home/use-tools/types-of-tools",
          destination: "/en/guides/create-tools/improve/types-of-tools",
          permanent: true,
        },
        {
          source: "/home/use-tools/error-handling",
          destination: "/en/guides/tool-calling/error-handling",
          permanent: true,
        },
        {
          source: "/home/vercelai/using-arcade-tools",
          destination: "/en/get-started/agent-frameworks/vercelai",
          permanent: true,
        },
        {
          source: "/references/mcp",
          destination: "/en/references/mcp/python",
          permanent: true,
        },
        {
          source: "/references/mcp/python/overview",
          destination: "/en/references/mcp/python",
          permanent: true,
        },
        {
          source: "/references/arcade-cliarcade-configure",
          destination: "/en/references/arcade-cli",
          permanent: true,
        },
        {
          source: "/get-started/setup/api-key",
          destination: "/en/get-started/setup/api-keys",
          permanent: true,
        },
        {
          source: "/guides/tool-calling/custom-apps/authorized-tool-calling",
          destination: "/en/guides/tool-calling/custom-apps/auth-tool-calling",
          permanent: true,
        },
        {
          source: "/guides/user-facing-agents/brand-provider",
          destination: "/en/guides/user-facing-agents/secure-auth-production",
          permanent: true,
        },
        {
          source: "/guides/user-facing-agents/configure-oauth-provider",
          destination: "/en/guides/user-facing-agents/secure-auth-production",
          permanent: true,
        },
        {
          source: "/guides/tool-calling/mcp-client/:client",
          destination: "/en/get-started/mcp-clients/:client",
          permanent: true,
        },
        {
          source: "/guides/tool-calling/get-tool-definitions",
          destination:
            "/en/guides/tool-calling/custom-apps/get-tool-definitions",
          permanent: true,
        },
        {
          source: "/guides/deployment-hosting/engine-configuration",
          destination: "/en/guides/deployment-hosting/configure-engine",
          permanent: true,
        },
        {
          source: "/guides/create-tools/performance/run-evaluations",
          destination: "/en/guides/create-tools/evaluate-tools/run-evaluations",
          permanent: true,
        },
        {
          source: "/guides/create-tools/contribute/registry",
          destination: "/en/resources/registry-early-access",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/crewai/python",
          destination:
            "/en/get-started/agent-frameworks/crewai/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/langchain/python",
          destination:
            "/en/get-started/agent-frameworks/langchain/use-arcade-with-langchain-py",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/langchain/tools",
          destination:
            "/en/get-started/agent-frameworks/langchain/auth-langchain-tools",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/mastra/typescript",
          destination: "/en/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/google-adk/python",
          destination:
            "/en/get-started/agent-frameworks/google-adk/setup-python",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/openai/python",
          destination:
            "/en/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/vercel-ai/typescript",
          destination: "/en/get-started/agent-frameworks/vercelai",
          permanent: true,
        },
        {
          source: "/resources/mastra/user-auth-interrupts",
          destination: "/en/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source: "/resources/oai-agents/overview",
          destination:
            "/en/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source: "/resources/creating-tools/:path*",
          destination: "/en/guides/create-tools/:path*",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks",
          destination: "/en/get-started/agent-frameworks",
          permanent: true,
        },
        {
          source: "/guides/agent-frameworks/:path*",
          destination: "/en/get-started/agent-frameworks/:path*",
          permanent: true,
        },
        {
          source: "/guides/tool-calling/mcp-clients",
          destination: "/en/get-started/mcp-clients",
          permanent: true,
        },
        {
          source: "/guides/tool-calling/mcp-clients/:path*",
          destination: "/en/get-started/mcp-clients/:path*",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/sharepoint",
          destination:
            "/en/resources/integrations/productivity/microsoft-sharepoint",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/outlook-mail",
          destination:
            "/en/resources/integrations/productivity/microsoft-outlook-mail",
          permanent: true,
        },
        {
          source: "/resources/integrations/productivity/outlook-calendar",
          destination:
            "/en/resources/integrations/productivity/microsoft-outlook-calendar",
          permanent: true,
        },

        // Broken /en/home/* paths from old doc structure — redirect to current locations
        {
          source: "/:locale/home/auth/authorized-tool-calling",
          destination:
            "/:locale/guides/tool-calling/custom-apps/auth-tool-calling",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/create-a-toolkit",
          destination: "/:locale/guides/create-tools/tool-basics",
          permanent: true,
        },
        {
          source: "/:locale/home/configure/arcade-deploy",
          destination: "/:locale/guides/deployment-hosting/arcade-deploy",
          permanent: true,
        },
        {
          source: "/:locale/home/hybrid-deployment/hybrid-worker",
          destination: "/:locale/guides/deployment-hosting",
          permanent: true,
        },
        {
          source: "/:locale/home/local-deployment/install/local",
          destination: "/:locale/guides/deployment-hosting/on-prem",
          permanent: true,
        },
        {
          source: "/:locale/home/local-deployment/install/overview",
          destination: "/:locale/guides/deployment-hosting",
          permanent: true,
        },
        // squareup renamed to square
        {
          source: "/:locale/references/auth-providers/squareup",
          destination: "/:locale/references/auth-providers/square",
          permanent: true,
        },
        // Removed toolkit pages — redirect to integrations index
        {
          source: "/:locale/resources/integrations/entertainment/twitch",
          destination: "/:locale/resources/integrations",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/social/discord",
          destination: "/:locale/resources/integrations",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/social/twilio",
          destination: "/:locale/resources/integrations",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/productivity/obsidian",
          destination: "/:locale/resources/integrations",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/productivity/closeio",
          destination: "/:locale/resources/integrations",
          permanent: true,
        },
        // Old daytona path structure — redirect to current category page
        {
          source: "/:locale/resources/integrations/daytona/overview",
          destination: "/:locale/resources/integrations/development/daytona",
          permanent: true,
        },
        // Old nested Google/Gmail toolkit path
        {
          source: "/:locale/resources/integrations/productivity/google/gmail",
          destination: "/:locale/resources/integrations/productivity/gmail",
          permanent: true,
        },
        // Dissolved guides/security section
        {
          source: "/:locale/guides/security/security-research-program",
          destination: "/:locale/resources/security-research-program",
          permanent: true,
        },
        {
          source: "/:locale/guides/security/securing-arcade-mcp",
          destination: "/:locale/guides/create-tools/secure-your-server",
          permanent: true,
        },
        {
          source: "/:locale/guides/security/secure-your-mcp-server",
          destination:
            "/:locale/guides/create-tools/secure-your-server/secure-your-mcp-server",
          permanent: true,
        },
        {
          source: "/:locale/guides/security",
          destination: "/:locale/guides/create-tools/secure-your-server",
          permanent: true,
        },
        // Auto-added redirects for deleted pages
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
        // CrewAI custom auth flow redirect to use-arcade-tools
        {
          source:
            "/:locale/get-started/agent-frameworks/crewai/custom-auth-flow",
          destination:
            "/:locale/get-started/agent-frameworks/crewai/use-arcade-tools",
          permanent: true,
        },
        // "others" category removed — toolkits moved to proper categories
        {
          source: "/:locale/resources/integrations/others/:path*",
          destination: "/:locale/resources/integrations",
          permanent: false,
        },
        // Google ADK tutorial consolidation - redirect old URL to new
        {
          source:
            "/:locale/get-started/agent-frameworks/google-adk/use-arcade-tools",
          destination:
            "/:locale/get-started/agent-frameworks/google-adk/overview",
          permanent: true,
        },
        // Auto-added redirects for deleted pages
        {
          source: "/:locale/references/logic-extensions-api",
          destination: "/:locale/references/contextual-access-webhook-api",
          permanent: true,
        },
        // Auto-added redirects for deleted pages
        {
          source: "/:locale/guides/logic-extensions",
          destination: "/:locale/guides/contextual-access",
          permanent: true,
        },
        {
          source: "/:locale/guides/logic-extensions/build-your-own",
          destination: "/:locale/guides/contextual-access/build-your-own",
          permanent: true,
        },
        {
          source: "/:locale/guides/logic-extensions/examples",
          destination: "/:locale/guides/contextual-access/examples",
          permanent: true,
        },
        {
          source: "/:locale/guides/logic-extensions/how-hooks-work",
          destination: "/:locale/guides/contextual-access/how-hooks-work",
          permanent: true,
        },
        // Auto-added redirects for deleted pages
        {
          source: "/:locale/resources/integrations/preview",
          destination: "/:locale/resources/integrations",
          permanent: true,
        },
        // Auto-added redirects for deleted pages
        {
          source:
            "/:locale/resources/integrations/customer-support/zendesk/reference",
          destination:
            "/:locale/resources/integrations/customer-support/zendesk",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/development/firecrawl/reference",
          destination: "/:locale/resources/integrations/development/firecrawl",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/productivity/asana/reference",
          destination: "/:locale/resources/integrations/productivity/asana",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/productivity/clickup/reference",
          destination: "/:locale/resources/integrations/productivity/clickup",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/productivity/dropbox/reference",
          destination: "/:locale/resources/integrations/productivity/dropbox",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/productivity/gmail/reference",
          destination: "/:locale/resources/integrations/productivity/gmail",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/productivity/google-calendar/reference",
          destination:
            "/:locale/resources/integrations/productivity/google-calendar",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/productivity/google-docs/reference",
          destination:
            "/:locale/resources/integrations/productivity/google-docs",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/productivity/google-drive/reference",
          destination:
            "/:locale/resources/integrations/productivity/google-drive",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/productivity/google-sheets/reference",
          destination:
            "/:locale/resources/integrations/productivity/google-sheets",
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
          source:
            "/:locale/resources/integrations/social-communication/discord",
          destination: "/:locale/resources/integrations",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/social-communication/linkedin",
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
          source:
            "/:locale/resources/integrations/social-communication/slack-api",
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
          source:
            "/:locale/resources/integrations/social-communication/zoom/install",
          destination: "/:locale/resources/integrations/social/zoom",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/social-communication/zoom",
          destination: "/:locale/resources/integrations/social/zoom",
          permanent: true,
        },
        // Auto-added redirects for deleted pages
        {
          source:
            "/:locale/guides/create-tools/contribute/registry-early-access",
          destination: "/:locale/resources/registry-early-access",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/contribute-a-server",
          destination: "/:locale/resources/registry-early-access",
          permanent: true,
        },
        // Moved MCP Gateway UI guide to guides
        {
          source: "/:locale/guides/create-tools/mcp-gateways",
          destination: "/:locale/guides/mcp-gateways",
          permanent: true,
        },
        // Removed LangChain old stuff
        {
          source:
            "/:locale/get-started/agent-frameworks/langchain/use-arcade-tools",
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
        // Mastra tutorial consolidation
        {
          source: "/:locale/get-started/agent-frameworks/mastra/overview",
          destination: "/:locale/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source:
            "/:locale/get-started/agent-frameworks/mastra/use-arcade-tools",
          destination: "/:locale/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source:
            "/:locale/get-started/agent-frameworks/mastra/user-auth-interrupts",
          destination: "/:locale/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        // OpenAI Agents tutorial consolidation
        {
          source:
            "/:locale/get-started/agent-frameworks/openai-agents/use-arcade-with-openai-agents",
          destination:
            "/:locale/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source:
            "/:locale/get-started/agent-frameworks/openai-agents/use-arcade-tools",
          destination:
            "/:locale/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source:
            "/:locale/get-started/agent-frameworks/openai-agents/user-auth-interrupts",
          destination:
            "/:locale/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        // Moved from guides to get-started
        {
          source:
            "/:locale/guides/agent-frameworks/setup-arcade-with-your-llm-python",
          destination:
            "/:locale/get-started/agent-frameworks/setup-arcade-with-your-llm-python",
          permanent: true,
        },
        // Old /home/* paths to new structure
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
          source:
            "/:locale/guides/agent-frameworks/langchain/user-auth-interrupts",
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
          destination:
            "/:locale/get-started/agent-frameworks/openai-agents/overview",
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
            "/:locale/guides/create-tools/secure-your-server/secure-your-mcp-server",
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
          source:
            "/:locale/guides/agent-frameworks/vercelai/using-arcade-tools",
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
          destination:
            "/:locale/guides/tool-calling/custom-apps/auth-tool-calling",
          permanent: true,
        },
        {
          source: "/:locale/home/auth/call-third-party-apis-directly",
          destination: "/:locale/guides/tool-calling/call-third-party-apis",
          permanent: true,
        },
        {
          source: "/:locale/home/auth/how-arcade-helps",
          destination: "/:locale/get-started/about-arcade",
          permanent: true,
        },
        {
          source: "/:locale/home/auth/secure-auth-production",
          destination:
            "/:locale/guides/user-facing-agents/secure-auth-production",
          permanent: true,
        },
        {
          source: "/:locale/home/auth/tool-auth-status",
          destination:
            "/:locale/guides/tool-calling/custom-apps/check-auth-status",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/call-tools-from-mcp-clients",
          destination:
            "/:locale/guides/create-tools/tool-basics/call-tools-mcp",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/create-a-mcp-server",
          destination:
            "/:locale/guides/create-tools/tool-basics/build-mcp-server",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/create-a-tool-with-auth",
          destination:
            "/:locale/guides/create-tools/tool-basics/create-tool-auth",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/create-a-tool-with-secrets",
          destination:
            "/:locale/guides/create-tools/tool-basics/create-tool-secrets",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/migrate-from-toolkits",
          destination: "/:locale/guides/create-tools/migrate-toolkits",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/organize-mcp-server-tools",
          destination:
            "/:locale/guides/create-tools/tool-basics/organize-mcp-tools",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/providing-useful-tool-errors",
          destination:
            "/:locale/guides/create-tools/error-handling/useful-tool-errors",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/retry-tools-with-improved-prompt",
          destination:
            "/:locale/guides/create-tools/error-handling/retry-tools",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/tool-context",
          destination:
            "/:locale/guides/create-tools/tool-basics/runtime-data-access",
          permanent: true,
        },
        {
          source: "/:locale/home/changelog",
          destination: "/:locale/references/changelog",
          permanent: true,
        },
        {
          source: "/:locale/home/compare-server-types",
          destination:
            "/:locale/guides/create-tools/tool-basics/compare-server-types",
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
          destination: "/:locale/guides/deployment-hosting/arcade-cloud",
          permanent: true,
        },
        {
          source: "/:locale/home/deployment/engine-configuration",
          destination: "/:locale/guides/deployment-hosting/configure-engine",
          permanent: true,
        },
        {
          source: "/:locale/home/evaluate-tools/create-an-evaluation-suite",
          destination:
            "/:locale/guides/create-tools/evaluate-tools/create-evaluation-suite",
          permanent: true,
        },
        {
          source: "/:locale/home/evaluate-tools/run-evaluations",
          destination:
            "/:locale/guides/create-tools/evaluate-tools/run-evaluations",
          permanent: true,
        },
        {
          source: "/:locale/home/evaluate-tools/why-evaluate-tools",
          destination:
            "/:locale/guides/create-tools/evaluate-tools/why-evaluate",
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
          destination: "/:locale/guides/deployment-hosting",
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
          destination: "/:locale/guides/mcp-gateways",
          permanent: true,
        },
        {
          source: "/:locale/home/oai-agents/use-arcade-tools",
          destination:
            "/:locale/get-started/agent-frameworks/openai-agents/overview",
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
          destination: "/:locale/guides/deployment-hosting/arcade-deploy",
          permanent: true,
        },
        {
          source: "/:locale/home/serve-tools/hybrid-worker",
          destination: "/:locale/guides/deployment-hosting/on-prem",
          permanent: true,
        },
        {
          source: "/:locale/home/use-tools/get-tool-definitions",
          destination:
            "/:locale/guides/tool-calling/custom-apps/get-tool-definitions",
          permanent: true,
        },
        {
          source: "/:locale/home/use-tools/tools-overview",
          destination: "/:locale/guides/tool-calling",
          permanent: true,
        },
        {
          source: "/:locale/home/use-tools/types-of-tools",
          destination: "/:locale/guides/create-tools/improve/types-of-tools",
          permanent: true,
        },
        {
          source: "/:locale/home/use-tools/error-handling",
          destination: "/:locale/guides/tool-calling/error-handling",
          permanent: true,
        },
        {
          source: "/:locale/home/vercelai/using-arcade-tools",
          destination: "/:locale/get-started/agent-frameworks/vercelai",
          permanent: true,
        },
        // Legacy /integrations path
        // NOTE: :locale is constrained to actual locale values to prevent
        // collisions with locale-less paths like /resources/integrations,
        // which would otherwise match with :locale="resources" and redirect
        // to /resources/resources/integrations (a 404).
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
        // MCP servers to integrations
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
        // References fixes
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
        // Path corrections (typos, renames)
        {
          source: "/:locale/get-started/setup/api-key",
          destination: "/:locale/get-started/setup/api-keys",
          permanent: true,
        },
        {
          source:
            "/:locale/guides/tool-calling/custom-apps/authorized-tool-calling",
          destination:
            "/:locale/guides/tool-calling/custom-apps/auth-tool-calling",
          permanent: true,
        },
        {
          source: "/:locale/guides/user-facing-agents/brand-provider",
          destination:
            "/:locale/guides/user-facing-agents/secure-auth-production",
          permanent: true,
        },
        {
          source: "/:locale/guides/user-facing-agents/configure-oauth-provider",
          destination:
            "/:locale/guides/user-facing-agents/secure-auth-production",
          permanent: true,
        },
        {
          source: "/:locale/guides/tool-calling/mcp-client/:client",
          destination: "/:locale/get-started/mcp-clients/:client",
          permanent: true,
        },
        {
          source: "/:locale/guides/tool-calling/get-tool-definitions",
          destination:
            "/:locale/guides/tool-calling/custom-apps/get-tool-definitions",
          permanent: true,
        },
        {
          source: "/:locale/guides/deployment-hosting/engine-configuration",
          destination: "/:locale/guides/deployment-hosting/configure-engine",
          permanent: true,
        },
        {
          source: "/:locale/guides/create-tools/performance/run-evaluations",
          destination:
            "/:locale/guides/create-tools/evaluate-tools/run-evaluations",
          permanent: true,
        },
        {
          source: "/:locale/guides/create-tools/contribute/registry",
          destination: "/:locale/resources/registry-early-access",
          permanent: true,
        },
        // Framework path aliases (old naming conventions)
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
          destination:
            "/:locale/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source: "/:locale/guides/agent-frameworks/vercel-ai/typescript",
          destination: "/:locale/get-started/agent-frameworks/vercelai",
          permanent: true,
        },
        // Old resource paths
        {
          source: "/:locale/resources/mastra/user-auth-interrupts",
          destination: "/:locale/get-started/agent-frameworks/mastra",
          permanent: true,
        },
        {
          source: "/:locale/resources/oai-agents/overview",
          destination:
            "/:locale/get-started/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source: "/:locale/resources/creating-tools/:path*",
          destination: "/:locale/guides/create-tools/:path*",
          permanent: true,
        },
        // Agent frameworks moved from guides to get-started
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
        // MCP clients moved from guides/tool-calling to get-started
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
        // Deprecated toolkit renames (microsoft_* prefix, ArcadeAI/monorepo#601)
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
          source:
            "/:locale/resources/integrations/productivity/outlook-calendar",
          destination:
            "/:locale/resources/integrations/productivity/microsoft-outlook-calendar",
          permanent: true,
        },
      ];
    },
    headers: async () => [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), geolocation=(), microphone=()",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ],
  })
);

export default nextConfig;
