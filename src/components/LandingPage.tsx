import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code,
  Key,
  PencilRuler,
  Puzzle,
  RefreshCcw,
  Rocket,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { ChallengeSolution } from "./ChallengeSolution";
import { QuickStartCard } from "./QuickStartCard";
import { SampleAppCard } from "./SampleAppCard";

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
            Welcome to Arcade AI!
          </motion.h1>
          <motion.p
            className="mx-auto mt-8 max-w-2xl text-pretty text-base font-medium leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            What if AI could do more than suggest? Imagine instead of getting a
            to-do list, your AI could{" "}
            <span className="font-bold text-primary">take action</span> -
            sending urgent emails, updating customer records, or kicking off
            complex workflows.
          </motion.p>
          <motion.div
            className="mt-20 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
      <section className="relative py-16">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Start Building in Minutes
            </h2>
            <p className="text-gray-300">
              Everything you need to get started with Arcade AI.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <QuickStartCard
              icon={Rocket}
              title="Quick Start Guide"
              description="Get up and running with Arcade AI in no time. Follow our step-by-step guide to start building your first AI agent."
              href="/home/quickstart"
            />
            <QuickStartCard
              icon={Puzzle}
              title="Browse Integrations"
              description="Explore our library of 30+ production-ready tools for popular services. Find the perfect integration for your needs."
              href="/toolkits"
            />
            <QuickStartCard
              icon={Wrench}
              title="Create Custom Tools"
              description="Learn how to build and deploy your own custom tools. Extend Arcade AI's capabilities to match your specific requirements."
              href="/home/custom-tools"
            />
            <QuickStartCard
              icon={Cloud}
              title="Deploy Anywhere"
              description="Choose between local deployment, Docker, Kubernetes, or our cloud service. Deploy Arcade AI wherever you need it."
              href="/home/install/overview"
            />
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              The Hard Parts of AI Development
            </h2>
            <p className="font-medium text-gray-300">
              Creating AI tools that interact with real-world services is
              complex. Arcade AI solves the hard technical challenges, so you
              can focus on building tools that deliver value.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <ChallengeSolution
              challenge={{
                icon: Shield,
                title: "Auth Management",
                description:
                  "Managing authentication across services is complex, from OAuth flows and API keys to storing credentials, refreshing tokens, and keeping your AI agent connected to services.",
              }}
              solution={{
                icon: Key,
                title: "Built-in Auth Management",
                description:
                  "Securely manages OAuth flows, API keys, and user tokens with automatic refresh and scoped access, allowing agents to retrieve and act on user-specific data seamlessly and securely.",
                href: "/learn/how-arcade-helps",
              }}
            />
            <ChallengeSolution
              challenge={{
                icon: Bot,
                title: "AI Model Compatibility",
                description:
                  "Each AI provider (OpenAI, Anthropic, etc.) has its own approach to function calling. You need a unified interface that works consistently across providers while maintaining flexibility to swap models.",
              }}
              solution={{
                icon: Code,
                title: "Flexible SDK",
                description:
                  "Provides a unified SDK to create and execute tools seamlessly across LLM providers like OpenAI and Anthropic. Build once, integrate everywhere, with powerful evaluation and testing tools.",
                href: "/home/supported-models",
              }}
            />
            <ChallengeSolution
              challenge={{
                icon: Puzzle,
                title: "Tool Integration",
                description:
                  "Building and maintaining integrations is challenging. Developers often face the burden of navigating complex documentation, adapting to API changes, and managing authentication intricacies.",
              }}
              solution={{
                icon: PencilRuler,
                title: "Production-ready Tools",
                description:
                  "30+ pre-built integrations with popular services, ready to use with built-in auth handling.",
                href: "/toolkits",
              }}
            />
            <ChallengeSolution
              challenge={{
                icon: RefreshCcw,
                title: "Failures, monitoring & scalability",
                description:
                  "AI systems need to handle failures smoothly, from network issues to unexpected responses, while ensuring effective monitoring, scaling and orchestration.",
              }}
              solution={{
                icon: Zap,
                title: "Reliable execution & monitoring",
                description:
                  "Ensure smooth and reliable execution by handling errors with intelligent retries, timeouts, and fallbacks. Monitor your AI tools comprehensively and scale effortlessly to meet demands.",
                href: "/home/evaluate-tools/why-evaluate-tools",
              }}
            />
          </div>
        </div>
      </section>

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
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              image=""
              href="#"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
