import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
import Link from "next/link";
// import { ChallengeSolution } from "./ChallengeSolution";
import { QuickStartCard } from "./QuickStartCard";
import { SampleAppCard } from "./SampleAppCard";
import Image from "next/image";

export function LandingPage() {
  return (
    <div>
      <section className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-24 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
          aria-hidden="true"
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
            className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Arcade!
          </motion.h1>
          <motion.p
            className="mx-auto mt-8 max-w-4xl text-pretty text-base font-medium italic leading-relaxed text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="font-bold text-primary">
              Learn how to move AI agents from demo to production with Arcade.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p style={{ textAlign: "left", paddingTop: "2rem" }}>
              Arcade enables your AI agent to securely take real-world actions
              through user-specific permissions, pre-built integrations with
              Gmail, Slack, GitHub, and more. You can also build your own
              agentic tools and MCP servers with our authoring and testing
              suite. Arcade is your tool{" "}
              <span className="font-bold text-primary">engine</span>,{" "}
              <span className="font-bold text-primary">registry</span>, and{" "}
              <span className="font-bold text-primary">runtime</span>.
            </p>
            <p style={{ textAlign: "left", paddingTop: "2rem" }}>
              Get started with a 5-minute quickstart.
            </p>
          </motion.div>
          <motion.div
            className="mt-20 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="h-12 bg-primary px-6 text-white hover:bg-primary/90"
            >
              <Link href="/home/quickstart">
                <Rocket className="mr-2 h-5 w-5" />
                Get Started
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-white bg-transparent px-6 text-white hover:bg-white/10"
            >
              <Link href="/home/build-tools/create-a-toolkit">
                <Wrench className="mr-2 h-5 w-5" />
                Build a tool
              </Link>
            </Button>
          </motion.div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
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
              href="/toolkits"
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
              href="/home/install/overview"
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
                href: "/home/build-tools/create-a-toolkit",
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
                href: "/toolkits",
              }}
            />
          </div>
        </div>
      </section> */}

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Sample Applications
            </h2>
            <p className="text-gray-300">
              Get started quickly with our pre-built templates and example
              applications.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <SampleAppCard
              title="Arcade Chat"
              description="A chatbot that can help you with your daily tasks."
              image="/images/sample-apps/arcade-chat.png"
              href="https://chat.arcade.dev/"
              blank
            />
            <SampleAppCard
              title="Archer"
              description="A bot for Slack that can act on your behalf."
              image="/images/logo/arcade.png"
              href="https://github.com/ArcadeAI/ArcadeSlackAgent"
            />
            <SampleAppCard
              title="Summarize YouTube Podcasts in Slack"
              description="A Slack bot that extracts and summarizes YouTube transcripts in Weaviate, perfect for AI podcasts."
              image="/images/sample-apps/slack-aipodcast-summaries.jpg"
              href="https://github.com/dforwardfeed/slack-AIpodcast-summaries"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Arcade Overview
            </h2>
          </div>
          <div className="flex w-full justify-center">
            <Image
              src={"/images/overview.png"}
              alt={"arcade overview"}
              width={1880 / 3}
              height={1676 / 3}
              className="max-w-full"
            />
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <QuickStartCard
              icon={Rocket}
              title="Arcade Engine"
              description="The Arcade engine is your MCP Server and Agentic tool provider.  It allows you to write your tools once and serve them across any LLM or orchestration framework, no matter the protocol.  The engine manages agent authentication, tool registration, and tool execution."
              href="#"
            />
            <QuickStartCard
              icon={Users}
              title="Control Plane"
              description="The Control Plane is how you manage your tools, users, and deployments from a single place.  No matter how large your deployment or organization gets, the Control Plane will scale with you."
              href="#"
            />
            <QuickStartCard
              icon={Cloud}
              title="Public and Private Tools"
              description="Arcade makes it easy to develop custom tools that just work with Agents.  Our SDKs and framework integrations make it easy to get started.  When you are ready, it's easy to run your tools either on-prem or in our cloud."
              href="#"
            />
            <QuickStartCard
              icon={Wrench}
              title="Tools and MCP Servers Together"
              description="The Arcade Engine is the only way to combine MCP servers with your Agentic tools. Regardless of where your tool is hosted, you can serve and manage access to it via the Engine.  You easily can mix our public tools with your own private tools in your agents."
              href="#"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
