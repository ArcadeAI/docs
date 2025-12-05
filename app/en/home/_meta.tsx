import { BadgeHelp, Globe, HeartPulse, Home, Shield } from "lucide-react";
import type { MetaRecord } from "nextra";

function TitleWithIcon({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <span className="flex items-center gap-2 font-medium">
      <Icon className="size-4" />
      {children}
    </span>
  );
}

export const meta: MetaRecord = {
  "*": {
    theme: {
      copyPage: true,
    },
  },
  index: {
    title: <TitleWithIcon icon={Home}>Home</TitleWithIcon>,
    theme: {
      breadcrumb: false,
      layout: "full",
      toc: false,
      copyPage: false,
    },
  },
  arcade: {
    title: <TitleWithIcon icon={Globe}>Arcade.dev</TitleWithIcon>,
    href: "https://arcade.dev",
  },
  "-- Getting Started with tool calling": {
    type: "separator",
    title: "Getting Started with tool calling",
  },
  "calling-tools-custom-apps": {
    title: "Calling tools in your custom apps",
    href: "/calling-tools-custom-apps",
  },
  "api-keys": {
    title: "Get an API Key",
  },
  "mcp-gateway-quickstart": {
    title: "Calling tools in 3rd party agents, apps, or IDEs",
    href: "/mcp-gateway-quickstart",
  },
  "mcp-server-quickstart": {
    title: "Build MCP Server to write custom tools",
    href: "/mcp-server-quickstart",
  },
  "sample-agents": {
    title: "Sample agents with tool calling",
    href: "/sample-agents",
  },
  "configure-arcade": {
    title: "Configure Arcade",
    href: "/configure-arcade",
  },
  "overview-updated": {
    title: "Overview",
    href: "/overview-updated",
  },
  dashboard: {
    title: "Dashboard",
    href: "/dashboard",
  },
  "create-tenants": {
    title: "Create Tenants",
    href: "/create-tenants",
  },
  "create-projects": {
    title: "Create Projects",
    href: "/create-projects",
  },
  "arcade-cli": {
    title: "Using Arcade's CLI",
    href: "/arcade-cli",
  },
  "security-compliance": {
    title: "Security & Compliance",
    href: "/security-compliance",
  },
  "identity-providers": {
    title: "Supported Identity Providers",
    href: "/identity-providers",
  },
  "soc-2": {
    title: "SOC-2",
    href: "/soc-2",
  },
  "enterprise-sso": {
    title: "Enterprise Single Sign On",
    href: "/enterprise-sso",
  },
  "rbac-config": {
    title: "Configuring Role Based Access Control for your organization",
    href: "/rbac-config",
  },
  "-- Tool Calling": {
    type: "separator",
    title: "Tool Calling",
  },
  "tool-calling-intro": {
    title: "Introduction",
    href: "/tool-calling-intro",
  },
  "error-handling": {
    title: "Error Handling",
    href: "/error-handling",
  },
  "third-party-apps": {
    type: "separator",
    title: "In 3rd party applications",
  },
  "mcp-gateway-quickstart-2": {
    title: "Calling tools in 3rd party agents, apps, or IDEs",
    href: "/mcp-gateway-quickstart",
  },
  "mcp-clients": {
    title: "Connecting to a MCP Client",
  },
  "cursor-client": {
    title: "Cursor",
    href: "/cursor-client",
  },
  "claude-desktop": {
    title: "Claude Desktop",
    href: "/claude-desktop",
  },
  "vscode-client": {
    title: "Visual Studio Code",
    href: "/vscode-client",
  },
  "evaluation-suite": {
    title: "Creating an evaluation suite to test tools",
    href: "/evaluation-suite",
  },
  "custom-apps": {
    type: "separator",
    title: "In custom applications",
  },
  "calling-tools-custom-apps-2": {
    title: "Calling tools in your custom apps",
    href: "/calling-tools-custom-apps",
  },
  "authorized-tool-calling": {
    title: "Authorized Tool Calling",
    href: "/authorized-tool-calling",
  },
  "auth-status-check": {
    title: "Checking Authorization Status",
    href: "/auth-status-check",
  },
  "tool-formats": {
    title: "Tool formats",
    href: "/tool-formats",
  },
  "connect-arcade-llm": {
    title: "Connecting Arcade tools to your LLM",
    href: "/connect-arcade-llm",
  },
  "test-tool-performance": {
    title: "Testing tool performance",
    href: "/test-tool-performance",
  },
  triggers: {
    type: "separator",
    title: "Triggers",
  },
  "background-agents": {
    title: "Set up a background agent using events",
    href: "/background-agents",
  },
  "scheduled-executions": {
    title: "Set up scheduled tool executions",
    href: "/scheduled-executions",
  },
  "direct-api-call": {
    title: "Direct Third-Party API Call",
    href: "/direct-api-call",
  },
  "-- Tool Writing": {
    type: "separator",
    title: "Tool Writing",
  },
  "learn-basics": {
    type: "separator",
    title: "Learn the basics",
  },
  "when-build-tools": {
    title: "When to build tools",
    href: "/when-build-tools",
  },
  "compare-server-types": {
    title: "Compare Server Types",
  },
  "build-tools": {
    title: "Build MCP Server to write custom tools",
  },
  "create-tool-auth": {
    title: "Create a tool with auth",
    href: "/create-tool-auth",
  },
  "create-tool-secrets": {
    title: "Create a tool with secrets",
    href: "/create-tool-secrets",
  },
  "runtime-data-access": {
    title: "Accessing runtime data",
    href: "/runtime-data-access",
  },
  "call-tools-mcp": {
    title: "Call tools from MCP clients",
    href: "/call-tools-mcp",
  },
  "evaluate-tools": {
    title: "Create an evaluation suite",
  },
  "run-evaluations": {
    title: "Run evaluations",
    href: "/run-evaluations",
  },
  "improve-performance": {
    type: "separator",
    title: "Building tools to get more performance out of existing toolkits",
  },
  "types-of-tools": {
    title: "Types of tools",
    href: "/types-of-tools",
  },
  "eval-starter-tools": {
    title: "Write eval to assess combo of starter tools",
    href: "/eval-starter-tools",
  },
  "custom-tool-improvements": {
    title: "Write custom tool that improves on relevant Starter tools",
    href: "/custom-tool-improvements",
  },
  "run-evaluations-2": {
    title: "Run evaluations",
    href: "/run-evaluations",
  },
  "serve-tools": {
    title: "Arcade Deploy",
  },
  "new-functionality": {
    type: "separator",
    title: "Building tools with agent functionality that doesn't exist",
  },
  "eval-new-functionality": {
    title: "Write eval for functionality you want",
    href: "/eval-new-functionality",
  },
  "custom-toolkit": {
    title: "Write custom toolkit",
    href: "/custom-toolkit",
  },
  "arcade-deploy-2": {
    title: "Arcade Deploy",
    href: "/arcade-deploy",
  },
  "newest-models": {
    type: "separator",
    title: "Ensure tools work with the newest models",
  },
  "run-eval-new-model": {
    title: "Run existing eval and observe outcome with new model",
    href: "/run-eval-new-model",
  },
  "modify-tool-new-model": {
    title: "Modify tool to work well with new model",
    href: "/modify-tool-new-model",
  },
  "tool-writing-reference": {
    type: "separator",
    title: "Reference",
  },
  "organize-mcp-tools": {
    title: "Organize MCP server tools",
    href: "/organize-mcp-tools",
  },
  "useful-tool-errors": {
    title: "Providing useful tool errors",
    href: "/useful-tool-errors",
  },
  "retry-tools": {
    title: "Retry tools with improved prompt",
    href: "/retry-tools",
  },
  "migrate-toolkits": {
    title: "Migrate from toolkits to MCP Servers",
    href: "/migrate-toolkits",
  },
  "why-evaluate": {
    title: "Why evaluate tools?",
    href: "/why-evaluate",
  },
  "-- Configuring Arcade with Agent Orchestrators": {
    type: "separator",
    title: "Configuring Arcade with Agent Orchestrators",
  },
  "orchestrator-overview": {
    title:
      "Overview to route based on language / orchestration framework combo",
    href: "/orchestrator-overview",
  },
  "python-quickstart": {
    title: "Python Quickstart",
    href: "/python-quickstart",
  },
  "typescript-quickstart": {
    title: "Typescript Quickstart",
    href: "/typescript-quickstart",
  },
  langchain: {
    title: "LangGraph",
  },
  "langgraph-python": {
    title: "Quickstart (Python)",
    href: "/langgraph-python",
  },
  "langgraph-typescript": {
    title: "Quickstart (Typescript)",
    href: "/langgraph-typescript",
  },
  "langgraph-tools": {
    title: "Using LangGraph tools",
    href: "/langgraph-tools",
  },
  "oai-agents": {
    title: "OpenAI Agents",
  },
  "openai-python": {
    title: "Quickstart (Python)",
    href: "/openai-python",
  },
  "openai-typescript": {
    title: "Quickstart (Typescript)",
    href: "/openai-typescript",
  },
  crewai: {
    title: "CrewAI",
  },
  "crewai-python": {
    title: "Quickstart (Python)",
    href: "/crewai-python",
  },
  "crewai-typescript": {
    title: "Quickstart (Typescript)",
    href: "/crewai-typescript",
  },
  "crewai-custom-auth": {
    title: "Custom auth flow",
    href: "/crewai-custom-auth",
  },
  "open-agents": {
    title: "OpenAgents",
    href: "/open-agents",
  },
  "openagents-python": {
    title: "Quickstart (Python)",
    href: "/openagents-python",
  },
  "google-adk": {
    title: "Google ADK",
  },
  "google-adk-python": {
    title: "Quickstart (Python)",
    href: "/google-adk-python",
  },
  "google-adk-typescript": {
    title: "Quickstart (Typescript)",
    href: "/google-adk-typescript",
  },
  mastra: {
    title: "Mastra",
  },
  "mastra-typescript": {
    title: "Quickstart (Typescript)",
    href: "/mastra-typescript",
  },
  vercelai: {
    title: "Vercel AI",
  },
  "vercelai-typescript": {
    title: "Quickstart (Typescript)",
    href: "/vercelai-typescript",
  },
  "-- Scaling your app to many end-users": {
    type: "separator",
    title: "Scaling your app to many end-users",
  },
  "multi-user-auth": {
    title: "Set-up secure multi-user auth for your app",
    href: "/multi-user-auth",
  },
  "auth-providers": {
    title: "Customizing Auth",
  },
  "auth-overview": {
    title: "Overview",
    href: "/auth-overview",
  },
  oauth2: {
    title: "OAuth 2.0",
    href: "/oauth2",
  },
  "-- Hosting Options": {
    type: "separator",
    title: "Hosting Options",
  },
  "hosting-overview": {
    title: "Overview",
    href: "/hosting-overview",
  },
  "cloud-infrastructure": {
    title: "Using Arcade's Cloud Infrastructure",
    href: "/cloud-infrastructure",
  },
  "on-premise-mcp": {
    title: "Using On-premise MCP Servers",
    href: "/on-premise-mcp",
  },
  "engine-config": {
    title: "Engine configuration",
    href: "/engine-config",
  },
  "-- Guides": {
    type: "separator",
    title: "Guides",
  },
  glossary: {
    title: "Glossary",
  },
  faq: {
    title: "FAQ",
  },
  "connect-docs-ide": {
    title: "Connect Arcade Docs to Your IDE",
    href: "/connect-docs-ide",
  },
  changelog: {
    title: "Changelog",
  },
  "-- Tool Registry": {
    type: "separator",
    title: "Tool Registry",
  },
  "registry-early-access": {
    title: "Registry Early Access",
  },
  "-- Resources": {
    type: "separator",
    title: "Resources",
  },
  "contact-us": {
    title: <TitleWithIcon icon={BadgeHelp}>Contact us</TitleWithIcon>,
  },
  security: {
    title: <TitleWithIcon icon={Shield}>Security</TitleWithIcon>,
  },
  status: {
    title: <TitleWithIcon icon={HeartPulse}>Status</TitleWithIcon>,
    href: "https://status.arcade.dev/",
  },
};

export default meta;
