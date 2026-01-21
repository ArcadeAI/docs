"use client";
import { Button } from "@arcadeai/design-system";
import {
  ArrowRight,
  BookOpen,
  Code,
  Cog,
  FileText,
  HelpCircle,
  Monitor,
  Puzzle,
  Rocket,
  Shield,
  Sparkles,
  ToolCase,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { QuickStartCard } from "../../_components/quick-start-card";
import { SampleAppCard } from "../../_components/sample-app-card";

const ANIMATION_DURATION = 0.5;
const ANIMATION_DELAYS = {
  initial: 0.2,
  secondary: 0.4,
  buttons: 0.6,
} as const;

// Popular integrations to showcase (row 1: productivity/work)
const POPULAR_INTEGRATIONS_ROW1 = [
  {
    name: "Google Sheets",
    icon: "/images/icons/google_sheets.svg",
    href: "/resources/integrations/productivity/google-sheets",
  },
  {
    name: "Jira",
    icon: "/images/icons/jira.svg",
    href: "/resources/integrations/productivity/jira",
  },
  {
    name: "Gmail",
    icon: "/images/icons/gmail.png",
    href: "/resources/integrations/productivity/gmail",
  },
  {
    name: "Confluence",
    icon: "/images/icons/confluence.svg",
    href: "/resources/integrations/productivity/confluence",
    invertInDark: true,
  },
  {
    name: "Slack",
    icon: "/images/icons/slack.png",
    href: "/resources/integrations/social-communication/slack",
  },
  {
    name: "Google Docs",
    icon: "/images/icons/google_docs.png",
    href: "/resources/integrations/productivity/google-docs",
  },
  {
    name: "Google Slides",
    icon: "/images/icons/google_slides.png",
    href: "/resources/integrations/productivity/google-slides",
  },
  {
    name: "HubSpot",
    icon: "/images/icons/hubspot.png",
    href: "/resources/integrations/crm/hubspot",
  },
  {
    name: "Linear",
    icon: "/images/icons/linear.svg",
    href: "/resources/integrations/productivity/linear",
  },
  {
    name: "Google Drive",
    icon: "/images/icons/google_drive.png",
    href: "/resources/integrations/productivity/google-drive",
  },
];

// Row 2: developer/fun integrations
const POPULAR_INTEGRATIONS_ROW2 = [
  {
    name: "GitHub",
    icon: "/images/icons/github.png",
    href: "/resources/integrations/development/github",
    invertInLight: true,
  },
  {
    name: "X",
    icon: "/images/icons/twitter.png",
    href: "/resources/integrations/social-communication/x",
  },
  {
    name: "MS Teams",
    icon: "/images/icons/ms_teams.png",
    href: "/resources/integrations/social-communication/microsoft-teams",
  },
  {
    name: "Outlook",
    icon: "/images/icons/outlook_mail.png",
    href: "/resources/integrations/productivity/outlook-mail",
  },
  {
    name: "Stripe",
    icon: "/images/icons/stripe.svg",
    href: "/resources/integrations/payments/stripe",
  },
  {
    name: "Notion",
    icon: "/images/icons/notion.png",
    href: "/resources/integrations/productivity/notion",
  },
  {
    name: "Asana",
    icon: "/images/icons/asana.svg",
    href: "/resources/integrations/productivity/asana",
  },
  {
    name: "Reddit",
    icon: "/images/icons/reddit.png",
    href: "/resources/integrations/social-communication/reddit",
  },
  {
    name: "YouTube",
    icon: "/images/icons/youtube.png",
    href: "/resources/integrations/search/youtube",
  },
  {
    name: "Dropbox",
    icon: "/images/icons/dropbox.png",
    href: "/resources/integrations/productivity/dropbox",
  },
];

// Supported agent frameworks
const FRAMEWORKS = [
  {
    name: "LangChain",
    href: "/guides/agent-frameworks/langchain/use-arcade-tools",
    icon: "/images/icons/langchain.svg",
    invertInDark: true,
  },
  {
    name: "OpenAI Agents",
    href: "/guides/agent-frameworks/openai-agents/use-arcade-tools",
    icon: "/images/icons/openai.png",
  },
  {
    name: "CrewAI",
    href: "/guides/agent-frameworks/crewai/use-arcade-tools",
    icon: "https://avatars.githubusercontent.com/u/170677839?s=200&v=4",
  },
  {
    name: "Vercel AI",
    href: "/guides/agent-frameworks/vercelai",
    icon: "/images/icons/vercel.svg",
    invertInDark: true,
  },
  {
    name: "Google ADK",
    href: "/guides/agent-frameworks/google-adk/use-arcade-tools",
    icon: "/images/icons/google.png",
  },
  {
    name: "Mastra",
    href: "/guides/agent-frameworks/mastra/use-arcade-tools",
    icon: "/images/icons/mastra.svg",
    invertInDark: true,
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
          className="absolute inset-x-0 -top-24 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-sm -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ee175e] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-3xl"
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
              MCP Runtime for AI agents that get things done.
            </motion.h1>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-gray-600 text-lg leading-relaxed dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: ANIMATION_DELAYS.initial,
              }}
            >
              Arcade handles OAuth, manages user tokens, and gives you
              100+pre-built integrations so your agents can take real action in
              production.
            </motion.p>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 flex items-center justify-center gap-x-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                duration: ANIMATION_DURATION,
                delay: ANIMATION_DELAYS.buttons,
              }}
            >
              <Button
                asChild
                className="h-12 bg-primary px-6 text-white hover:bg-primary/90"
                size="lg"
              >
                <Link
                  href="/get-started/quickstarts/call-tool-agent"
                  onClick={trackClick(
                    "hero_get_started_clicked",
                    "/get-started/quickstarts/call-tool-agent"
                  )}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Started
                </Link>
              </Button>
              <Button
                asChild
                className="h-12 border-gray-900 bg-transparent px-6 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
                size="lg"
                variant="outline"
              >
                <Link
                  href="/resources/integrations"
                  onClick={trackClick(
                    "hero_explore_tools_clicked",
                    "/resources/integrations"
                  )}
                >
                  <Puzzle className="mr-2 h-5 w-5" />
                  Explore Tools
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Choose Your Path Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 min-[1062px]:grid-cols-2">
            {/* Get Tools Column */}
            <div>
              <h2 className="mb-6 text-center font-bold text-2xl text-gray-900 tracking-tight md:text-3xl dark:text-white">
                Get Tools
              </h2>
              <div className="space-y-4">
                <QuickStartCard
                  description="Browse 100+ ready-to-use integrations for Gmail, Slack, GitHub, and more."
                  href="/resources/integrations"
                  icon={Puzzle}
                  logos={[
                    { src: "/images/icons/gmail.png", alt: "Gmail" },
                    { src: "/images/icons/slack.png", alt: "Slack" },
                    {
                      src: "/images/icons/github.png",
                      alt: "GitHub",
                      invertInLight: true,
                    },
                    {
                      src: "/images/icons/google_sheets.svg",
                      alt: "Google Sheets",
                    },
                    { src: "/images/icons/jira.svg", alt: "Jira" },
                    { src: "/images/icons/notion.png", alt: "Notion" },
                    { src: "/images/icons/linear.svg", alt: "Linear" },
                    { src: "/images/icons/hubspot.png", alt: "HubSpot" },
                    { src: "/images/icons/stripe.svg", alt: "Stripe" },
                    {
                      src: "/images/icons/google_drive.png",
                      alt: "Google Drive",
                    },
                    { src: "/images/icons/dropbox.png", alt: "Dropbox" },
                    {
                      src: "/images/icons/confluence.svg",
                      alt: "Confluence",
                      invertInDark: true,
                    },
                    { src: "/images/icons/reddit.png", alt: "Reddit" },
                  ]}
                  title="Pre-built Integrations"
                />
                <QuickStartCard
                  description="Create your own MCP servers and custom tools with our SDK."
                  href="/guides/create-tools/tool-basics/build-mcp-server"
                  icon={Wrench}
                  title="Build Custom Tools"
                />
              </div>
            </div>
            {/* Use Tools Column */}
            <div>
              <h2 className="mb-6 text-center font-bold text-2xl text-gray-900 tracking-tight md:text-3xl dark:text-white">
                Use Arcade
              </h2>
              <div className="space-y-4">
                <QuickStartCard
                  description="Add tools to Cursor, VS Code, Claude Desktop, or any MCP client."
                  href="/get-started/mcp-clients"
                  icon={Monitor}
                  logos={[
                    {
                      src: "/images/icons/cursor.png",
                      alt: "Cursor",
                      invertInLight: true,
                    },
                    { src: "/images/icons/vscode.svg", alt: "VS Code" },
                    {
                      src: "/images/icons/claude.png",
                      alt: "Claude Desktop",
                      invertInLight: true,
                    },
                  ]}
                  title="Connect to Your IDE"
                />
                <QuickStartCard
                  description="Integrate with LangChain, OpenAI Agents, CrewAI, Vercel AI, and more."
                  href="/get-started/agent-frameworks"
                  icon={Code}
                  logos={[
                    {
                      src: "/images/icons/langchain.svg",
                      alt: "LangChain",
                      invertInDark: true,
                    },
                    { src: "/images/icons/openai.png", alt: "OpenAI" },
                    {
                      src: "https://avatars.githubusercontent.com/u/170677839?s=200&v=4",
                      alt: "CrewAI",
                    },
                    {
                      src: "/images/icons/vercel.svg",
                      alt: "Vercel AI",
                      invertInDark: true,
                    },
                    { src: "/images/icons/google.png", alt: "Google ADK" },
                    {
                      src: "/images/icons/mastra.svg",
                      alt: "Mastra",
                      invertInDark: true,
                    },
                  ]}
                  title="Power Your Agent"
                />
              </div>
            </div>
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
              asChild
              className="mt-4 min-[1062px]:mt-0"
              variant="outline"
            >
              <Link
                href="/resources/integrations"
                onClick={trackClick(
                  "view_all_integrations_clicked",
                  "/resources/integrations"
                )}
              >
                See all 100+
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
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
              Three core components that power your AI agents.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 min-[1062px]:grid-cols-3">
            <QuickStartCard
              description="Your MCP server and agentic tool provider. Manages authentication, tool registration, and execution."
              href="/get-started/about-arcade"
              icon={Cog}
              title="Runtime"
            />
            <QuickStartCard
              description="Catalog of pre-built tools and integrations. Browse 100+ ready-to-use MCP servers."
              href="/resources/integrations"
              icon={ToolCase}
              title="Tool Catalog"
            />
            <QuickStartCard
              description="Let agents act on behalf of users. Handle OAuth, API keys, and tokens for tools like Gmail and Google Drive."
              href="/guides/tool-calling/custom-apps/auth-tool-calling"
              icon={Shield}
              title="Agent Authorization"
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
              asChild
              className="mt-4 min-[1062px]:mt-0"
              variant="outline"
            >
              <Link
                href="/resources/examples"
                onClick={trackClick(
                  "view_all_examples_clicked",
                  "/resources/examples"
                )}
              >
                See all examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-8 min-[1062px]:grid-cols-3">
            <SampleAppCard
              blank
              description="A chatbot that can help you with your daily tasks."
              href="https://chat.arcade.dev/"
              title="Arcade Chat"
            />
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

      {/* Agentic Development Callout */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link
            className="mx-auto block max-w-2xl rounded-xl border border-[#ee175e]/20 bg-linear-to-r from-[#ee175e]/5 to-transparent p-6 transition-all hover:border-[#ee175e]/40 hover:shadow-lg"
            href="/get-started/setup/connect-arcade-docs"
            onClick={trackClick(
              "agentic_development_clicked",
              "/get-started/setup/connect-arcade-docs"
            )}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ee175e]/10">
                <Sparkles className="h-5 w-5 text-[#ee175e]" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg dark:text-white">
                  Connect Your IDE with Arcade&apos;s LLMs.txt
                </h3>
                <p className="mt-1 text-gray-600 text-sm dark:text-gray-400">
                  Give Cursor, Claude Code, and other AI IDEs access to
                  Arcade&apos;s documentation so they can write integration code
                  for you.
                </p>
              </div>
              <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#ee175e]" />
            </div>
          </Link>
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
              className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              href="/references/api"
              onClick={trackClick("quick_link_api_clicked", "/references/api")}
            >
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">API Reference</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
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
              className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
              href="/resources/faq"
              onClick={trackClick("quick_link_faq_clicked", "/resources/faq")}
            >
              <HelpCircle className="h-5 w-5" />
              <span className="font-medium">FAQ</span>
            </Link>
            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
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
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-sm -translate-x-1/2 bg-linear-to-tr from-[#ee175e] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-3xl"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
