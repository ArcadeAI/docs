"use client";
import { Button } from "@arcadeai/design-system";
import {
  // Bot,
  Cloud,
  // Code,
  // Key,
  // PencilRuler,
  // Puzzle,
  // RefreshCcw,
  Rocket,
  // Shield,
  Users,
  Wrench,
  // Zap,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
// import { ChallengeSolution } from "./ChallengeSolution";
import { QuickStartCard } from "../../_components/quick-start-card";
import { SampleAppCard } from "../../_components/sample-app-card";

// Constants for magic numbers
const IMAGE_SCALE_FACTOR = 3;
const OVERVIEW_IMAGE_WIDTH = 2922;
const OVERVIEW_IMAGE_HEIGHT = 1861;

const ANIMATION_DURATION = 0.5;
const ANIMATION_DELAYS = {
  initial: 0.2,
  secondary: 0.4,
  buttons: 0.6,
  final: 0.8,
} as const;

export function LandingPage() {
  return (
    <div>
      <section className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-24 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[24rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ee175e] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[48rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-12 text-center sm:py-48 lg:py-24">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-extrabold text-4xl text-black tracking-tight md:text-5xl lg:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: ANIMATION_DURATION }}
          >
            Ship AI agents that take action
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 max-w-4xl text-pretty font-medium text-base text-gray-600 italic leading-relaxed dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: ANIMATION_DURATION,
              delay: ANIMATION_DELAYS.initial,
            }}
          >
            <span className="font-bold text-primary">
              Learn how to move AI agents from demo to production with Arcade.
            </span>
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: ANIMATION_DURATION,
              delay: ANIMATION_DELAYS.secondary,
            }}
          >
            <p className="pt-8 text-left text-gray-700 dark:text-gray-200">
              Give your agents the ability to send emails, update calendars,
              manage files, and interact with any system—not just answer
              questions. Arcade handles authentication, permissions, and API
              integrations so your agents can work on behalf of real users,
              securely.
            </p>
            <ul>
              <li>
                <strong>Pre-built integrations</strong> Gmail, Slack, GitHub,
                and 50+ tools
              </li>
              <li>
                <strong>Custom tools</strong> Build and deploy your own with our
                SDK
              </li>
              <li>
                <strong>Built on MCP</strong> Model Context Protocol for
                universal agent compatibility
              </li>
            </ul>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 flex items-center justify-center gap-x-6"
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
              <Link href="/home/quickstarts/call-tool-easy">
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
              <Link href="/mcp-servers">
                <Wrench className="mr-2 h-5 w-5" />
                Browse the tools
              </Link>
            </Button>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: ANIMATION_DURATION,
              delay: ANIMATION_DELAYS.final,
            }}
          >
            <div className="rounded-lg border border-gray-300 bg-gray-50/50 p-4 text-gray-700 italic backdrop-blur-sm dark:border-white dark:bg-gray-900/50 dark:text-white">
              Arcade works with your AI IDE:
              <br />
              <Link
                className="text-primary hover:underline"
                href="/home/setup/connect-arcade-docs"
              >
                Give your coding agent access to Arcade.dev's documentation
              </Link>
            </div>
          </motion.div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[24rem] -translate-x-1/2 bg-gradient-to-tr from-[#ee175e] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[48rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </section>

      {/* <section className="relative py-16">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Start Building in Minutes
            </h2>
            <p className="text-gray-300">
              Everything you need to get started with Arcade.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <QuickStartCard
              icon={Rocket}
              title="Quick Start Guide"
              description="Start using Arcade in minutes with our quick start guide. We'll show you how to equip LLMs with the ability to take action."
              href="/home/quickstart"
            />
            <QuickStartCard
              icon={Puzzle}
              title="Browse Integrations"
              description="Explore our library of integrations for popular services. Find the perfect integration for your needs."
              href="/mcp-servers"
            />
            <QuickStartCard
              icon={Wrench}
              title="Start Building"
              description="Learn how to build and deploy your own custom tools. Use Arcade's tool SDK to create custom capabilities for your agents."
              href="/home/custom-tools"
            />
            <QuickStartCard
              icon={Cloud}
              title="Deploy Arcade"
              description="Run Arcade locally, in Docker, or in the cloud. We'll show you how to get started with each option."
              href="/home/hosting-overview"
            />
          </div>
        </div>
      </section> */}

      {/* <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Why Developers Choose Arcade
            </h2>
            <p className="font-medium text-gray-300">
              Arcade solves the fundamental challenges that have limited AI
              agents, empowering them to take meaningful actions in real-world
              applications.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <ChallengeSolution
              challenge={{
                icon: Shield,
                title: "Agents Can't Act on Users' Behalf",
                description:
                  "Today's agents can't securely access user data or perform actions as the user, limiting them to generic tools like search engines and calculators.",
              }}
              solution={{
                icon: Key,
                title: "Secure User Impersonation",
                description:
                  "Arcade lets agents securely access user-specific services like email, calendars, and documents through built-in OAuth and token management.",
                href: "/home/auth/how-arcade-helps",
              }}
            />
            <ChallengeSolution
              challenge={{
                icon: RefreshCcw,
                title: "Tools Can't Scale Independently",
                description:
                  "Tools run on the same resources as your application, creating performance bottlenecks and limiting what agents can do as demand grows.",
              }}
              solution={{
                icon: Zap,
                title: "Tools That Scale Independently",
                description:
                  "Arcade separates tool execution from your application, allowing each tool to run on its optimal infrastructure and scale based on its specific needs.",
                href: "/home/use-tools/tools-overview",
              }}
            />
            <ChallengeSolution
              challenge={{
                icon: Puzzle,
                title: "Fragmented Tool Ecosystem",
                description:
                  "Each LLM provider and orchestration framework requires different tool formats, forcing developers to maintain multiple versions of the same tool for different models.",
              }}
              solution={{
                icon: Code,
                title: "Build Once, Run Anywhere",
                description:
                  "Define your tool once with Arcade's SDK and it works seamlessly across OpenAI, Anthropic, and frameworks like LangChain and CrewAI without any changes.",
                href: "/home/build-tools/create-a-mcp-server",
              }}
            />
            <ChallengeSolution
              challenge={{
                icon: Bot,
                title: "Enterprise Requirements Aren't Met",
                description:
                  "Existing solutions lack the security, compliance, and integration capabilities needed for enterprise adoption of AI agents.",
              }}
              solution={{
                icon: PencilRuler,
                title: "Enterprise-Ready Platform",
                description:
                  "Arcade provides the authentication, compliance, and integration capabilities required for production deployment in enterprise environments.",
                href: "/mcp-servers",
              }}
            />
          </div>
        </div>
      </section> */}

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
              Sample Applications
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Get started quickly with our pre-built templates and example
              applications.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <SampleAppCard
              blank
              description="A chatbot that can help you with your daily tasks."
              href="https://chat.arcade.dev/"
              image="/images/sample-apps/arcade-chat.png"
              title="Arcade Chat"
            />
            <SampleAppCard
              description="A bot for Slack that can act on your behalf."
              href="https://github.com/ArcadeAI/ArcadeSlackAgent"
              image="/images/logo/arcade.png"
              title="Archer"
            />
            <SampleAppCard
              description="A Slack bot that extracts and summarizes YouTube transcripts in Weaviate, perfect for AI podcasts."
              href="https://github.com/dforwardfeed/slack-AIpodcast-summaries"
              image="/images/sample-apps/slack-aipodcast-summaries.jpg"
              title="Summarize YouTube Podcasts in Slack"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 tracking-tight md:text-4xl dark:text-white">
              Arcade Overview
            </h2>
          </div>
          <div className="flex w-full justify-center">
            {/* The images come from https://whimsical.com/docs-overview-page-vMjufYdxnhfF6K9WjD8FL */}
            <Image
              alt={"arcade overview"}
              className="max-w-full dark:hidden"
              height={OVERVIEW_IMAGE_HEIGHT / IMAGE_SCALE_FACTOR}
              src={"/images/overview-light.png"}
              width={OVERVIEW_IMAGE_WIDTH / IMAGE_SCALE_FACTOR}
            />
            <Image
              alt={"arcade overview"}
              className="hidden max-w-full dark:block"
              height={OVERVIEW_IMAGE_HEIGHT / IMAGE_SCALE_FACTOR}
              src={"/images/overview-dark.png"}
              width={OVERVIEW_IMAGE_WIDTH / IMAGE_SCALE_FACTOR}
            />
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <QuickStartCard
              description="Users grant permissions once, agents inherit scoped access."
              href="#"
              icon={Rocket}
              title="Arcade Engine"
            />
            <QuickStartCard
              description="Discover pre-built integrations and custom tools."
              href="/mcp-servers"
              icon={Users}
              title="Tool Registry"
            />
            <QuickStartCard
              description="Built on Model Context Protocol (MCP) for compatibility with Claude, GPT, and other LLMs."
              href="#"
              icon={Cloud}
              title="MCP native"
            />
            <QuickStartCard
              description="Your agent calls tools, we handle the rest."
              href="#"
              icon={Wrench}
              title="Execution Runtime"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
