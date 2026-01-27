import type { NextConfig } from "next";
import nextra from "nextra";
import { withLlmsTxt } from "./lib/next-plugin-llmstxt";
import { remarkGlossary } from "./lib/remark-glossary";

// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  codeHighlight: true,
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
        // Old /home/* paths to new structure
        {
          source: "/:locale/home/build-tools/server-level-vs-tool-level-auth",
          destination: "/:locale/learn/server-level-vs-tool-level-auth",
          permanent: true,
        },
        {
          source: "/:locale/home/build-tools/secure-your-mcp-server",
          destination: "/:locale/guides/security/secure-your-mcp-server",
          permanent: true,
        },
        {
          source: "/:locale/home/agent-frameworks-overview",
          destination: "/:locale/guides/agent-frameworks",
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
            "/:locale/guides/agent-frameworks/crewai/custom-auth-flow",
          permanent: true,
        },
        {
          source: "/:locale/home/crewai/use-arcade-tools",
          destination:
            "/:locale/guides/agent-frameworks/crewai/use-arcade-tools",
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
            "/:locale/guides/agent-frameworks/google-adk/use-arcade-tools",
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
            "/:locale/guides/agent-frameworks/langchain/auth-langchain-tools",
          permanent: true,
        },
        {
          source: "/:locale/home/langchain/use-arcade-tools",
          destination:
            "/:locale/guides/agent-frameworks/langchain/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/:locale/home/mastra/use-arcade-tools",
          destination:
            "/:locale/guides/agent-frameworks/mastra/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/:locale/home/mcp-clients/claude-desktop",
          destination:
            "/:locale/guides/tool-calling/mcp-clients/claude-desktop",
          permanent: true,
        },
        {
          source: "/:locale/home/mcp-clients/cursor",
          destination: "/:locale/guides/tool-calling/mcp-clients/cursor",
          permanent: true,
        },
        {
          source: "/:locale/home/mcp-clients/visual-studio-code",
          destination:
            "/:locale/guides/tool-calling/mcp-clients/visual-studio-code",
          permanent: true,
        },
        {
          source: "/:locale/home/mcp-gateway-quickstart",
          destination: "/:locale/get-started/quickstarts/call-tool-client",
          permanent: true,
        },
        {
          source: "/:locale/home/oai-agents/use-arcade-tools",
          destination:
            "/:locale/guides/agent-frameworks/openai-agents/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/:locale/home/quickstart",
          destination: "/:locale/get-started/quickstarts/call-tool-agent",
          permanent: true,
        },
        {
          source: "/:locale/home/registry-early-access",
          destination:
            "/:locale/guides/create-tools/contribute/registry-early-access",
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
          destination:
            "/:locale/guides/agent-frameworks/vercelai/using-arcade-tools",
          permanent: true,
        },
        // MCP servers to integrations
        {
          source: "/:locale/mcp-servers",
          destination: "/:locale/resources/integrations",
          permanent: true,
        },
        {
          source: "/:locale/mcp-servers/:path*",
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
          destination: "/:locale/guides/tool-calling/mcp-clients/:client",
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
          destination:
            "/:locale/guides/create-tools/contribute/registry-early-access",
          permanent: true,
        },
        // Framework path aliases (old naming conventions)
        {
          source: "/:locale/guides/agent-frameworks/crewai/python",
          destination:
            "/:locale/guides/agent-frameworks/crewai/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/:locale/guides/agent-frameworks/langchain/python",
          destination:
            "/:locale/guides/agent-frameworks/langchain/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/:locale/guides/agent-frameworks/langchain/tools",
          destination:
            "/:locale/guides/agent-frameworks/langchain/auth-langchain-tools",
          permanent: true,
        },
        {
          source: "/:locale/guides/agent-frameworks/mastra/typescript",
          destination:
            "/:locale/guides/agent-frameworks/mastra/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/:locale/guides/agent-frameworks/google-adk/python",
          destination:
            "/:locale/guides/agent-frameworks/google-adk/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/:locale/guides/agent-frameworks/openai/python",
          destination:
            "/:locale/guides/agent-frameworks/openai-agents/use-arcade-tools",
          permanent: true,
        },
        {
          source: "/:locale/guides/agent-frameworks/vercel-ai/typescript",
          destination:
            "/:locale/guides/agent-frameworks/vercelai/using-arcade-tools",
          permanent: true,
        },
        // Old resource paths
        {
          source: "/:locale/resources/mastra/user-auth-interrupts",
          destination:
            "/:locale/guides/agent-frameworks/mastra/user-auth-interrupts",
          permanent: true,
        },
        {
          source: "/:locale/resources/oai-agents/overview",
          destination:
            "/:locale/guides/agent-frameworks/openai-agents/overview",
          permanent: true,
        },
        {
          source: "/:locale/resources/creating-tools/:path*",
          destination: "/:locale/guides/create-tools/:path*",
          permanent: true,
        },
        // Old integration category paths to new preview pages
        {
          source: "/:locale/resources/integrations/productivity/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/development/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
          permanent: true,
        },
        {
          source:
            "/:locale/resources/integrations/social-communication/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/entertainment/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/payments/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/search/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/sales/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/databases/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
          permanent: true,
        },
        {
          source: "/:locale/resources/integrations/customer-support/:toolkit",
          destination: "/:locale/resources/integrations/preview/:toolkit",
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
