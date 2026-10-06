"use client";
import { Button } from "@arcadeai/design-system";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Cog,
  FileText,
  HelpCircle,
  Monitor,
  Plug,
  Puzzle,
  Rocket,
  ServerCog,
  Shield,
  ToolCase,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { QuickStartCard } from "@/components/quick-start-card";
import { SampleAppCard } from "@/components/sample-app-card";

const ANIMATION_DURATION = 0.5;
const ANIMATION_DELAYS = {
  buttons: 0.6,
  initial: 0.2,
  secondary: 0.4,
} as const;
const INTEGRATIONS_PAGE_HREF = "/en/resources/integrations";

// Popular integrations to showcase (row 1: productivity/work)
const POPULAR_INTEGRATIONS_ROW1 = [
  {
    href: "/resources/integrations/productivity/google-sheets",
    icon: "/images/icons/google_sheets.svg",
    name: "Google Sheets",
  },
  {
    href: "/resources/integrations/productivity/jira",
    icon: "/images/icons/jira.svg",
    name: "Jira",
  },
  {
    href: "/resources/integrations/productivity/gmail",
    icon: "/images/icons/gmail.png",
    name: "Gmail",
  },
  {
    href: "/resources/integrations/productivity/confluence",
    icon: "/images/icons/confluence.svg",
    invertInDark: true,
    name: "Confluence",
  },
  {
    href: "/resources/integrations/social/slack",
    icon: "/images/icons/slack.png",
    name: "Slack",
  },
  {
    href: "/resources/integrations/productivity/google-docs",
    icon: "/images/icons/google_docs.png",
    name: "Google Docs",
  },
  {
    href: "/resources/integrations/productivity/google-slides",
    icon: "/images/icons/google_slides.png",
    name: "Google Slides",
  },
  {
    href: "/resources/integrations/sales/hubspot",
    icon: "/images/icons/hubspot.png",
    name: "HubSpot",
  },
  {
    href: "/resources/integrations/productivity/linear",
    icon: "/images/icons/linear.svg",
    name: "Linear",
  },
  {
    href: "/resources/integrations/productivity/google-drive",
    icon: "/images/icons/google_drive.png",
    name: "Google Drive",
  },
];

// Row 2: developer/fun integrations
const POPULAR_INTEGRATIONS_ROW2 = [
  {
    href: "/resources/integrations/development/github",
    icon: "/images/icons/github.png",
    invertInLight: true,
    name: "GitHub",
  },
  {
    href: "/resources/integrations/social/x",
    icon: "/images/icons/twitter.png",
    name: "X",
  },
  {
    href: "/resources/integrations/social/microsoft-teams",
    icon: "/images/icons/ms_teams.png",
    name: "MS Teams",
  },
  {
    href: "/resources/integrations/payments/stripe",
    icon: "/images/icons/stripe.svg",
    name: "Stripe",
  },
  {
    href: "/resources/integrations/productivity/notion",
    icon: "/images/icons/notion.png",
    name: "Notion",
  },
  {
    href: "/resources/integrations/productivity/asana",
    icon: "/images/icons/asana.svg",
    name: "Asana",
  },
  {
    href: "/resources/integrations/social/reddit",
    icon: "/images/icons/reddit.png",
    name: "Reddit",
  },
  {
    href: "/resources/integrations/search/youtube",
    icon: "/images/icons/youtube.png",
    name: "YouTube",
  },
  {
    href: "/resources/integrations/productivity/dropbox",
    icon: "/images/icons/dropbox.png",
    name: "Dropbox",
  },
];

// Supported agent frameworks
const FRAMEWORKS = [
  {
    href: "/get-started/agent-frameworks/ag2/use-arcade-tools",
    icon: "/images/icons/ag2.svg",
    invertInDark: true,
    name: "AG2",
  },
  {
    href: "/get-started/agent-frameworks/langchain/use-arcade-tools",
    icon: "/images/icons/langchain.svg",
    invertInDark: true,
    name: "LangChain",
  },
  {
    href: "/get-started/agent-frameworks/openai-agents/overview",
    icon: "/images/icons/openai.png",
    name: "OpenAI Agents",
  },
  {
    href: "/get-started/agent-frameworks/crewai/use-arcade-tools",
    icon: "https://avatars.githubusercontent.com/u/170677839?s=200&v=4",
    name: "CrewAI",
  },
  {
    href: "/get-started/agent-frameworks/vercelai",
    icon: "/images/icons/vercel.svg",
    invertInDark: true,
    name: "Vercel AI",
  },
  {
    href: "/get-started/agent-frameworks/google-adk/overview",
    icon: "/images/icons/google.png",
    name: "Google ADK",
  },
  {
    href: "/get-started/agent-frameworks/mastra/use-arcade-tools",
    icon: "/images/icons/mastra.svg",
    invertInDark: true,
    name: "Mastra",
  },
  {
    href: "/get-started/agent-frameworks/tanstack-ai",
    icon: "https://avatars.githubusercontent.com/u/72518640?s=200&v=4",
    name: "TanStack AI",
  },
];

// Helper function to get theme-aware invert classes
function getInvertClass(item: {
  invertInLight?: boolean;
  invertInDark?: boolean;
}): string {
  if (item.invertInLight) {
    return "invert dark:invert-0";
  }
  if (item.invertInDark) {
    return "dark:invert";
  }
  return "";
}

export function LandingPage() {
  const trackClick = (eventName: string, destination: string) => () => {
    posthog.capture(eventName, {
      button_location: "landing_page",
      destination,
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="-top-24 -z-10 sm:-top-40 absolute inset-x-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            className="-translate-x-1/2 relative left-[calc(50%-11rem)] aspect-1155/678 w-sm rotate-30 bg-linear-to-tr from-primary to-primary/30 opacity-20 sm:left-[calc(50%-30rem)] sm:w-3xl"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl px-4 py-12 lg:py-20">
          <div className="text-center">
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 font-extrabold text-4xl text-black tracking-tight md:text-5xl lg:text-6xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: ANIMATION_DURATION }}
            >
              The enterprise-ready actions runtime for AI agents.
            </motion.h1>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-gray-600 text-lg leading-relaxed dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                delay: ANIMATION_DELAYS.initial,
                duration: ANIMATION_DURATION,
              }}
            >
              Arcade handles OAuth and manages user tokens, enforces your
              security policies on every action, executes reliably across 7,500+
              agent-optimized tools, and governs agents centrally — so your
              agents take real action in production.
            </motion.p>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                delay: ANIMATION_DELAYS.buttons,
                duration: ANIMATION_DURATION,
              }}
            >
              <Button
                className="h-12 px-6"
                render={
                  <Link
                    href="/get-started/quickstarts/call-tool-agent"
                    onClick={trackClick(
                      "hero_build_clicked",
                      "/get-started/quickstarts/call-tool-agent"
                    )}
                  />
                }
                size="lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Build agents & tools
              </Button>
              <Button
                className="h-12 px-6"
                render={
                  <Link
                    href="/operate/quickstart"
                    onClick={trackClick(
                      "hero_operate_clicked",
                      "/operate/quickstart"
                    )}
                  />
                }
                size="lg"
              >
                <ServerCog className="mr-2 h-5 w-5" />
                Deploy & operate Arcade
              </Button>
              <Button
                className="h-12 px-6"
                render={
                  <Link
                    href={INTEGRATIONS_PAGE_HREF}
                    onClick={trackClick(
                      "hero_explore_tools_clicked",
                      INTEGRATIONS_PAGE_HREF
                    )}
                  />
                }
                size="lg"
                variant="outline"
              >
                <Puzzle className="mr-2 h-5 w-5" />
                Explore Tools
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LLM-friendly docs banner (desktop only) */}
      <div className="flex justify-center px-4">
        <Link
          className="group inline-flex items-center gap-2.5 rounded-full border border-brand-accent/30 bg-gradient-to-r from-brand-accent/10 to-brand-accent/5 px-5 py-2 font-medium text-brand-accent text-sm shadow-sm transition-all hover:border-brand-accent/50 hover:shadow-md hover:shadow-brand-accent/10 dark:border-primary/40 dark:from-primary/15 dark:to-primary/5"
          href="/get-started/setup/connect-arcade-docs"
          onClick={trackClick(
            "llm_banner_clicked",
            "/get-started/setup/connect-arcade-docs"
          )}
        >
          <Bot className="h-4 w-4" />
          These docs are LLM-friendly — AI agents get clean markdown
          automatically
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Choose Your Path Section — agent developers vs platform operators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
              Choose your path
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Docs for the two jobs Arcade supports: building agents and tools,
              and operating Arcade for your organization.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 min-[1062px]:grid-cols-2 min-[1062px]:gap-x-8">
            <h3 className="mb-2 text-center font-bold text-2xl text-gray-900 tracking-tight md:text-3xl dark:text-white min-[1062px]:col-start-1 min-[1062px]:row-start-1">
              Build agents & tools
            </h3>
            <div className="min-[1062px]:col-start-1 min-[1062px]:row-start-2">
              <QuickStartCard
                description="Call Arcade tools from your agent framework in minutes."
                href="/get-started/quickstarts/call-tool-agent"
                icon={Rocket}
                title="Agent quickstart"
              />
            </div>
            <div className="min-[1062px]:col-start-1 min-[1062px]:row-start-3">
              <QuickStartCard
                description="Create MCP servers and custom tools with the Arcade SDK."
                href="/build/create-tools/tool-basics/build-mcp-server"
                icon={Wrench}
                title="Build custom tools"
              />
            </div>
            <div className="min-[1062px]:col-start-1 min-[1062px]:row-start-4">
              <QuickStartCard
                description="Add tools to Cursor, VS Code, Claude Desktop, or any MCP client."
                href="/get-started/mcp-clients"
                icon={Monitor}
                logos={[
                  {
                    alt: "Cursor",
                    invertInLight: true,
                    src: "/images/icons/cursor.png",
                  },
                  { alt: "VS Code", src: "/images/icons/vscode.svg" },
                  {
                    alt: "Claude Desktop",
                    invertInLight: true,
                    src: "/images/icons/claude.png",
                  },
                ]}
                title="MCP clients"
              />
            </div>
            <h3 className="mb-2 text-center font-bold text-2xl text-gray-900 tracking-tight md:text-3xl dark:text-white min-[1062px]:col-start-2 min-[1062px]:row-start-1">
              Deploy & operate Arcade
            </h3>
            <div className="min-[1062px]:col-start-2 min-[1062px]:row-start-2">
              <QuickStartCard
                description="Stand up Arcade for your org: hosting, identity, gateways, and governance."
                href="/operate/quickstart"
                icon={ServerCog}
                title="Operator quickstart"
              />
            </div>
            <div className="min-[1062px]:col-start-2 min-[1062px]:row-start-3">
              <QuickStartCard
                description="Arcade Cloud, cloud marketplaces, or self-host with Helm."
                href="/operate/deploy"
                icon={Cog}
                title="Deployment & hosting"
              />
            </div>
            <div className="min-[1062px]:col-start-2 min-[1062px]:row-start-4">
              <QuickStartCard
                description="User Sources, MCP Gateways, Contextual Access, and Audit Logs."
                href="/operate"
                icon={Shield}
                title="Identity & governance"
              />
            </div>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 min-[1062px]:grid-cols-2 min-[1062px]:gap-x-8">
            <QuickStartCard
              description="Browse 7,500+ ready-to-use integrations for Gmail, Slack, GitHub, and more."
              href={INTEGRATIONS_PAGE_HREF}
              icon={Puzzle}
              logos={[
                { alt: "Gmail", src: "/images/icons/gmail.png" },
                { alt: "Slack", src: "/images/icons/slack.png" },
                {
                  alt: "GitHub",
                  invertInLight: true,
                  src: "/images/icons/github.png",
                },
                {
                  alt: "Google Sheets",
                  src: "/images/icons/google_sheets.svg",
                },
                { alt: "Jira", src: "/images/icons/jira.svg" },
                { alt: "Notion", src: "/images/icons/notion.png" },
                { alt: "Linear", src: "/images/icons/linear.svg" },
                { alt: "HubSpot", src: "/images/icons/hubspot.png" },
                { alt: "Stripe", src: "/images/icons/stripe.svg" },
                {
                  alt: "Google Drive",
                  src: "/images/icons/google_drive.png",
                },
                { alt: "Dropbox", src: "/images/icons/dropbox.png" },
                {
                  alt: "Confluence",
                  invertInDark: true,
                  src: "/images/icons/confluence.svg",
                },
                { alt: "Reddit", src: "/images/icons/reddit.png" },
              ]}
              title="Pre-built integrations"
            />
            <QuickStartCard
              description="Already run an MCP server, or use a vendor's? Register it with Arcade and govern its tools alongside Arcade's own."
              href="/operate/governance/remote-mcp-servers"
              icon={Plug}
              title="Bring your own MCP server"
            />
          </div>
        </div>
      </section>

      {/* Popular Integrations Section */}
      <section className="relative bg-gray-50/50 py-16 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col items-center text-center min-[1062px]:flex-row min-[1062px]:items-end min-[1062px]:justify-between min-[1062px]:text-left">
            <div>
              <h2 className="font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
                Popular Integrations
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Pre-built MCP servers ready to use with your agents.
              </p>
            </div>
            <Button
              className="mt-4 min-[1062px]:mt-0"
              render={
                <Link
                  href={INTEGRATIONS_PAGE_HREF}
                  onClick={trackClick(
                    "view_all_integrations_clicked",
                    INTEGRATIONS_PAGE_HREF
                  )}
                />
              }
              variant="outline"
            >
              See all 7,500+
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-10">
              {POPULAR_INTEGRATIONS_ROW1.map((integration) => (
                <Link
                  className="flex flex-col items-center gap-3 rounded-lg p-4 transition-all hover:shadow-md dark:hover:bg-gray-800"
                  href={integration.href}
                  key={integration.name}
                  onClick={trackClick(
                    `integration_${integration.name.toLowerCase()}_clicked`,
                    integration.href
                  )}
                >
                  <div className="flex h-8 w-8 items-center justify-center">
                    <Image
                      alt={integration.name}
                      className={`h-8 w-8 object-contain ${getInvertClass(integration)}`}
                      height={32}
                      src={integration.icon}
                      width={32}
                    />
                  </div>
                  <span className="break-keep text-center font-medium text-gray-900 text-sm dark:text-white">
                    {integration.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 lg:grid-cols-10">
              {POPULAR_INTEGRATIONS_ROW2.map((integration) => (
                <Link
                  className="flex flex-col items-center gap-3 rounded-lg p-4 transition-all hover:shadow-md dark:hover:bg-gray-800"
                  href={integration.href}
                  key={integration.name}
                  onClick={trackClick(
                    `integration_${integration.name.toLowerCase()}_clicked`,
                    integration.href
                  )}
                >
                  <div className="flex h-8 w-8 items-center justify-center">
                    <Image
                      alt={integration.name}
                      className={`h-8 w-8 object-contain ${getInvertClass(integration)}`}
                      height={32}
                      src={integration.icon}
                      width={32}
                    />
                  </div>
                  <span className="break-keep text-center font-medium text-gray-900 text-sm dark:text-white">
                    {integration.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[200px] bg-linear-to-t from-white to-transparent dark:from-[#0a0a0a]"
        />
      </section>

      {/* Framework Compatibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
              Works With Your Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Arcade integrates with popular agent frameworks and LLM providers.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-7">
            {FRAMEWORKS.map((framework) => (
              <Link
                className="flex flex-col items-center gap-2 rounded-lg border border-none p-4 transition-all hover:shadow-md dark:hover:bg-gray-800"
                href={framework.href}
                key={framework.name}
                onClick={trackClick(
                  `framework_${framework.name.toLowerCase().replace(/\s+/g, "_")}_clicked`,
                  framework.href
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
                  <Image
                    alt={framework.name}
                    className={`h-10 w-10 rounded ${getInvertClass(framework)}`}
                    height={40}
                    src={framework.icon}
                    unoptimized
                    width={40}
                  />
                </div>
                <span className="break-keep text-center font-medium text-gray-900 text-sm dark:text-white">
                  {framework.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Concepts Section */}
      <section className="bg-gray-50/50 py-16 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
              How Arcade Works
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Three pillars that power AI agents in production.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 min-[1062px]:grid-cols-3">
            <QuickStartCard
              description="Deploy agents your security team approves. Arcade handles OAuth and manages user tokens, API keys, and secrets for tools like Gmail and Google Drive — then enforces your existing IdP, DLP, and compliance policies plus per-action authorization at runtime."
              href="/build/tool-calling/custom-apps/auth-tool-calling"
              icon={Shield}
              title="Enforce — Agent Authorization"
            />
            <QuickStartCard
              description="Agents that work across every business system. Browse 7,500+ agent-optimized tools across 81 MCP servers, built for reliable execution at scale — not thin API wrappers."
              href={INTEGRATIONS_PAGE_HREF}
              icon={ToolCase}
              title="Execute — Agent-Optimized Tools"
            />
            <QuickStartCard
              description="Scale agents across your org from a central control plane. Shared registry, version control, visibility filtering, and OpenTelemetry audit logs."
              href="/operate"
              icon={Cog}
              title="Govern — Agent Lifecycle Governance"
            />
          </div>
        </div>
      </section>

      {/* Sample Applications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col items-center text-center min-[1062px]:flex-row min-[1062px]:items-end min-[1062px]:justify-between min-[1062px]:text-left">
            <div>
              <h2 className="font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
                Sample Applications
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                See Arcade in action with these example applications.
              </p>
            </div>
            <Button
              className="mt-4 min-[1062px]:mt-0"
              render={
                <Link
                  href="/resources/examples"
                  onClick={trackClick(
                    "view_all_examples_clicked",
                    "/resources/examples"
                  )}
                />
              }
              variant="outline"
            >
              See all examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 min-[1062px]:grid-cols-2">
            <SampleAppCard
              description="A bot for Slack that can act on your behalf."
              href="https://github.com/ArcadeAI/ArcadeSlackAgent"
              title="Archer"
            />
            <SampleAppCard
              description="A Slack bot that extracts and summarizes YouTube transcripts."
              href="https://github.com/dforwardfeed/slack-AIpodcast-summaries"
              title="YouTube Podcast Summarizer"
            />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="border-gray-200 border-t py-16 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 font-bold text-2xl text-gray-900 tracking-tight dark:text-white">
              Quick Links
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-brand-accent dark:text-gray-400 dark:hover:text-brand-accent"
              href="/references/api"
              onClick={trackClick("quick_link_api_clicked", "/references/api")}
            >
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">API Reference</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-brand-accent dark:text-gray-400 dark:hover:text-brand-accent"
              href="/references/cli-cheat-sheet"
              onClick={trackClick(
                "quick_link_cli_clicked",
                "/references/cli-cheat-sheet"
              )}
            >
              <FileText className="h-5 w-5" />
              <span className="font-medium">CLI Cheat Sheet</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-brand-accent dark:text-gray-400 dark:hover:text-brand-accent"
              href="/resources/faq"
              onClick={trackClick("quick_link_faq_clicked", "/resources/faq")}
            >
              <HelpCircle className="h-5 w-5" />
              <span className="font-medium">FAQ</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-brand-accent dark:text-gray-400 dark:hover:text-brand-accent"
              href="/references/changelog"
              onClick={trackClick(
                "quick_link_changelog_clicked",
                "/references/changelog"
              )}
            >
              <FileText className="h-5 w-5" />
              <span className="font-medium">Changelog</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Background decoration at bottom */}
      <div
        aria-hidden="true"
        className="-z-10 absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="-translate-x-1/2 relative left-[calc(50%+3rem)] aspect-1155/678 w-sm bg-linear-to-tr from-primary to-primary/30 opacity-20 sm:left-[calc(50%+36rem)] sm:w-3xl"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
