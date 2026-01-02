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
        {
          source: "/en/home/agent-frameworks-overview",
          destination: "/en/guides/agent-frameworks/",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/agentic-development",
          destination: "/en/get-started/setup/connect-arcade-docs",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/api-keys",
          destination: "/en/get-started/setup/api-key",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/arcade-cli",
          destination: "/en/references/arcade-cli",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth-providers",
          destination: "/en/references/auth-providers",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth-providers",
          destination: "/en/references/auth-providers/",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth-providers/...",
          destination: "/en/references/auth-providers/...",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth-providers/airtable",
          destination: "/en/references/auth-providers/airtable",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth/auth-tool-calling",
          destination:
            "/en/guides/tool-calling/custom-apps/authorized-tool-calling",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth/call-third-party-apis-directly",
          destination: "/en/guides/tool-calling/call-third-party-apis",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth/how-arcade-helps",
          destination: "/en/get-started/about-arcade",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth/secure-auth-production",
          destination: "/en/guides/user-facing-agents/configure-oauth-provider",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth/secure-auth-production",
          destination: "/en/guides/user-facing-agents/brand-provider",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/auth/tool-auth-status",
          destination: "/en/guides/tool-calling/custom-apps/check-auth-status",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/call-tools-from-mcp-clients",
          destination: "/en/guides/create-tools/tool-basics/call-tools-mcp",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/create-a-mcp-server",
          destination: "/en/guides/create-tools/tool-basics/build-mcp-server",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/create-a-tool-with-auth",
          destination: "/en/guides/create-tools/tool-basics/create-tool-auth",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/create-a-tool-with-secrets",
          destination:
            "/en/guides/create-tools/tool-basics/create-tool-secrets",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/migrate-from-toolkits",
          destination: "/en/guides/create-tools/migrate-toolkits",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/organize-mcp-server-tools",
          destination: "/en/guides/create-tools/tool-basics/organize-mcp-tools",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/providing-useful-tool-errors",
          destination:
            "/en/guides/create-tools/error-handling/useful-tool-errors",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/retry-tools-with-improved-prompt",
          destination: "/en/guides/create-tools/error-handling/retry-tools",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/build-tools/tool-context",
          destination:
            "/en/guides/create-tools/tool-basics/runtime-data-access",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/changelog",
          destination: "/en/references/changelog",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/compare-server-types",
          destination:
            "/en/guides/create-tools/tool-basics/compare-server-types",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/contact-us",
          destination: "/en/resources/contact-us",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/crewai/custom-auth-flow",
          destination: "/en/guides/agent-frameworks/crewai/custom-auth-flow",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/crewai/use-arcade-tools",
          destination: "/en/guides/agent-frameworks/crewai/python",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/custom-mcp-server-quickstart",
          destination: "/en/get-started/quickstarts/mcp-server-quickstart",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/deployment/arcade-cloud-infra",
          destination: "/en/guides/deployment-hosting/arcade-cloud",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/deployment/engine-configuration",
          destination: "/en/guides/deployment-hosting/configure-engine",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/evaluate-tools/create-an-evaluation-suite",
          destination:
            "/en/guides/create-tools/evaluate-tools/create-evaluation-suite",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/evaluate-tools/run-evaluations",
          destination: "/en/guides/create-tools/performance/run-evaluations",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/evaluate-tools/why-evaluate-tools",
          destination: "/en/guides/create-tools/evaluate-tools/why-evaluate",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/examples",
          destination: "/en/resources/examples",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/faq",
          destination: "/en/resources/faq",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/glossary",
          destination: "/en/resources/glossary",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/google-adk/use-arcade-tools",
          destination: "/en/guides/agent-frameworks/google-adk/python",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/hosting-overview",
          destination: "/en/guides/deployment-hosting/",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/langchain/auth-langchain-tools",
          destination: "/en/guides/agent-frameworks/langchain/tools",
          permanent: true, // 308 redirect for SEO
        },
        {
          source:
            "/en/home/langchain/use-arcade-tools /en/home/langchain/user-auth-interrupts",
          destination: "/en/guides/agent-frameworks/langchain/python",
          permanent: true, // 308 redirect for SEO
        },
        {
          source:
            "/en/home/mastra/use-arcade-tools, /en/home/mastra/user-auth-interrupts",
          destination: "/en/guides/agent-frameworks/mastra/typescript",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/mcp-clients/claude-desktop",
          destination: "/en/guides/tool-calling/mcp-client/visual-studio-code",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/mcp-clients/cursor",
          destination: "/en/guides/tool-calling/mcp-client/visual-studio-code",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/mcp-clients/visual-studio-code",
          destination: "/en/guides/tool-calling/mcp-client/visual-studio-code",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/mcp-gateway-quickstart",
          destination: "/en/get-started/quickstarts/call-tool-client",
          permanent: true, // 308 redirect for SEO
        },
        {
          source:
            "/en/home/oai-agents/use-arcade-tools, /en/home/oai-agents/user-auth-interrupts",
          destination: "/en/guides/agent-frameworks/openai/python",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/quickstart",
          destination: "/en/get-started/quickstarts/call-tool-agent",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/registry-early-access",
          destination: "/en/guides/create-tools/contribute/registry",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/serve-tools/arcade-deploy",
          destination: "/en/guides/deployment-hosting/arcade-deploy",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/serve-tools/hybrid-worker",
          destination: "/en/guides/deployment-hosting/on-prem",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/use-tools/get-tool-definitions",
          destination:
            "/en/guides/tool-calling/custom-apps/get-tool-definitions",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/use-tools/tools-overview",
          destination: "/en/guides/tool-calling/",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/use-tools/types-of-tools",
          destination: "/en/guides/create-tools/improve/types-of-tools",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/vercelai/using-arcade-tools",
          destination: "/en/guides/agent-frameworks/vercel-ai/typescript",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/mcp-servers",
          destination: "/en/resources/integrations",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/references/mcp",
          destination: "/en/references/mcp/python/overview",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/references/mcp/python",
          destination: "/en/references/mcp/python/overview",
          permanent: true, // 308 redirect for SEO
        },
        {
          source: "/en/home/use-tools/error-handling",
          destination: "/en/guides/tool-calling/error-handling",
          permanent: true, // 308 redirect for SEO
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
