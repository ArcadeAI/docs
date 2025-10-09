"use client";
import { Button } from "@arcadeai/design-system";
import { motion } from "motion/react";
import Link from "next/link";

const ANIMATION_DURATION = 0.5;
const ANIMATION_DELAYS = {
  initial: 0.2,
  secondary: 0.3,
  tertiary: 0.4,
} as const;

export default function APIReferencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <h1 className="mb-4 font-extrabold text-4xl text-gray-900 tracking-tight md:text-5xl dark:text-white">
          API Reference
        </h1>
        <p className="mb-12 text-gray-600 text-lg dark:text-gray-300">
          Complete reference documentation for Arcade's APIs and SDKs.
        </p>

        <div className="space-y-8">
          {/* Engine API Section */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ee175e]/30 hover:shadow-md dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: ANIMATION_DURATION,
              delay: ANIMATION_DELAYS.initial,
            }}
          >
            <h3 className="mb-4 font-bold text-2xl text-gray-900 dark:text-white">
              Engine API
            </h3>
            <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-300">
              The Engine API is Arcade's REST API for orchestrating tools,
              managing authentication, and controlling agent workflows at
              runtime. Use this API to integrate Arcade's tool execution and
              permission management into your agent applications.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="https://reference.arcade.dev/">
                  View API Reference
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* MCP Server SDK Section */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ee175e]/30 hover:shadow-md dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: ANIMATION_DURATION,
              delay: ANIMATION_DELAYS.secondary,
            }}
          >
            <h3 className="mb-4 font-bold text-2xl text-gray-900 dark:text-white">
              MCP Server SDK
            </h3>
            <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-300">
              Arcade's MCP SDK provides a FastAPI-like interface for building
              custom Model Context Protocol servers. Use this SDK to create your
              own tools and expose them through the standardized MCP protocol.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="https://reference.arcade.dev/mcp">
                  View SDK Reference
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* MCP Client SDKs Section */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ee175e]/30 hover:shadow-md dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]"
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: ANIMATION_DURATION,
              delay: ANIMATION_DELAYS.tertiary,
            }}
          >
            <h3 className="mb-4 font-bold text-2xl text-gray-900 dark:text-white">
              MCP Client SDKs
            </h3>
            <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-300">
              Arcade's MCP client SDKs make it easy to integrate MCP servers
              into your AI applications. These SDKs handle server discovery,
              tool execution, and transport protocols in your preferred
              language.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="https://reference.arcade.dev/mcp/python">
                  Python
                </Link>
              </Button>
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90"
              >
                <Link href="https://reference.arcade.dev/mcp/typescript">
                  TypeScript
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
