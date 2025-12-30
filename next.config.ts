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
      [remarkGlossary, { glossaryPath: "./app/en/home/glossary/page.mdx" }],
    ],
  },
});

const nextConfig: NextConfig = withLlmsTxt({
  enabled: false, // disabled for now, we will recreate this every week
})(
  withNextra({
    redirects: async () => [
      // Auth/How Arcade Helps -> About Arcade
      {
        source: "/en/home/auth/how-arcade-helps",
        destination: "/en/home/about-arcade",
        permanent: true,
      },
      // API Keys -> Setup/API Key
      {
        source: "/en/home/api-keys",
        destination: "/en/home/setup/api-key",
        permanent: true,
      },
      // Agentic Development -> Setup/Connect Arcade Docs
      {
        source: "/en/home/agentic-development",
        destination: "/en/home/setup/connect-arcade-docs",
        permanent: true,
      },
      // Quickstart -> Quickstarts/Call Tool Agent
      {
        source: "/en/home/quickstart",
        destination: "/en/home/quickstarts/call-tool-agent",
        permanent: true,
      },
      // Custom MCP Server Quickstart -> Quickstarts/MCP Server Quickstart
      {
        source: "/en/home/custom-mcp-server-quickstart",
        destination: "/en/home/quickstarts/mcp-server-quickstart",
        permanent: true,
      },
      // MCP Servers -> Integrations
      {
        source: "/en/mcp-servers",
        destination: "/en/home/integrations",
        permanent: true,
      },
      {
        source: "/en/mcp-servers/:path*",
        destination: "/en/home/integrations/:path*",
        permanent: true,
      },
      // Tool Calling redirects
      {
        source: "/en/home/use-tools/tools-overview",
        destination: "/en/home/tool-calling",
        permanent: true,
      },
      {
        source: "/en/home/use-tools/error-handling",
        destination: "/en/home/tool-calling/error-handling",
        permanent: true,
      },
      {
        source: "/en/home/auth/call-third-party-apis-directly",
        destination: "/en/home/tool-calling/call-third-party-apis-directly",
        permanent: true,
      },
      {
        source: "/en/home/auth/auth-tool-calling",
        destination: "/en/home/tool-calling/authorized-tool-calling",
        permanent: true,
      },
      {
        source: "/en/home/auth/tool-auth-status",
        destination: "/en/home/tool-calling/check-auth-status",
        permanent: true,
      },
      {
        source: "/en/home/use-tools/get-tool-definitions",
        destination: "/en/home/tool-calling/tool-formats",
        permanent: true,
      },
      // MCP Clients
      {
        source: "/en/home/mcp-clients/:path*",
        destination: "/en/home/tool-calling/mcp-clients/:path*",
        permanent: true,
      },
      // Create Tools redirects
      {
        source: "/en/home/compare-server-types",
        destination: "/en/home/create-tools/tool-basics/compare-server-types",
        permanent: true,
      },
      {
        source: "/en/home/build-tools/create-a-mcp-server",
        destination: "/en/home/create-tools/tool-basics/build-mcp-server",
        permanent: true,
      },
      {
        source: "/en/home/build-tools/create-a-tool-with-auth",
        destination: "/en/home/create-tools/tool-basics/create-tool-auth",
        permanent: true,
      },
      {
        source: "/en/home/build-tools/create-a-tool-with-secrets",
        destination: "/en/home/create-tools/tool-basics/create-tool-secrets",
        permanent: true,
      },
      {
        source: "/en/home/build-tools/tool-context",
        destination: "/en/home/create-tools/tool-basics/runtime-data-access",
        permanent: true,
      },
      {
        source: "/en/home/build-tools/call-tools-from-mcp-clients",
        destination: "/en/home/create-tools/tool-basics/call-tools-mcp",
        permanent: true,
      },
      {
        source: "/en/home/build-tools/organize-mcp-server-tools",
        destination: "/en/home/create-tools/tool-basics/organize-mcp-tools",
        permanent: true,
      },
      // Evaluate Tools
      {
        source: "/en/home/evaluate-tools/:path*",
        destination: "/en/home/create-tools/evaluate-tools/:path*",
        permanent: true,
      },
      // Error Handling
      {
        source: "/en/home/build-tools/providing-useful-tool-errors",
        destination: "/en/home/create-tools/error-handling/useful-tool-errors",
        permanent: true,
      },
      {
        source: "/en/home/build-tools/retry-tools-with-improved-prompt",
        destination: "/en/home/create-tools/error-handling/retry-tools",
        permanent: true,
      },
      // Migrate from Toolkits
      {
        source: "/en/home/build-tools/migrate-from-toolkits",
        destination: "/en/home/create-tools/migrate-toolkits",
        permanent: true,
      },
      // Agent Frameworks
      {
        source: "/en/home/agent-frameworks-overview",
        destination: "/en/home/agent-frameworks",
        permanent: true,
      },
      {
        source: "/en/home/langchain/:path*",
        destination: "/en/home/agent-frameworks/langchain/:path*",
        permanent: true,
      },
      {
        source: "/en/home/oai-agents/:path*",
        destination: "/en/home/agent-frameworks/oai-agents/:path*",
        permanent: true,
      },
      {
        source: "/en/home/crewai/:path*",
        destination: "/en/home/agent-frameworks/crewai/:path*",
        permanent: true,
      },
      {
        source: "/en/home/google-adk/:path*",
        destination: "/en/home/agent-frameworks/google-adk/:path*",
        permanent: true,
      },
      {
        source: "/en/home/mastra/:path*",
        destination: "/en/home/agent-frameworks/mastra/:path*",
        permanent: true,
      },
      {
        source: "/en/home/vercelai/:path*",
        destination: "/en/home/agent-frameworks/vercelai/:path*",
        permanent: true,
      },
      // User-facing Agents
      {
        source: "/en/home/auth/secure-auth-production",
        destination: "/en/home/user-facing-agents/configure-oauth-provider",
        permanent: true,
      },
      // Deployment & Hosting
      {
        source: "/en/home/hosting-overview",
        destination: "/en/home/deployment-hosting",
        permanent: true,
      },
      {
        source: "/en/home/deployment/arcade-cloud-infra",
        destination: "/en/home/deployment-hosting/arcade-cloud",
        permanent: true,
      },
      {
        source: "/en/home/deployment/engine-configuration",
        destination: "/en/home/deployment-hosting/configure-engine",
        permanent: true,
      },
      {
        source: "/en/home/deployment/on-prem-mcp",
        destination: "/en/home/deployment-hosting/on-prem",
        permanent: true,
      },
      {
        source: "/en/home/serve-tools/arcade-deploy",
        destination: "/en/home/deployment-hosting/arcade-deploy",
        permanent: true,
      },
      // Registry
      {
        source: "/en/home/registry-early-access",
        destination: "/en/home/create-tools/add-tools-to-arcade-catalog/registry",
        permanent: true,
      },
      // References
      {
        source: "/en/references/api",
        destination: "/en/home/api",
        permanent: true,
      },
      {
        source: "/en/references/mcp/:path*",
        destination: "/en/home/mcp/:path*",
        permanent: true,
      },
      // Auth Providers -> Sharing with End Users
      {
        source: "/en/home/auth-providers",
        destination: "/en/home/sharing-with-end-users/custom-auth",
        permanent: true,
      },
      {
        source: "/en/home/auth-providers/:provider",
        destination: "/en/home/sharing-with-end-users/custom-auth/:provider",
        permanent: true,
      },
    ],
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
