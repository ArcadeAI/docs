"use client";
import { Button } from "@arcadeai/design-system";
import Link from "next/link";

export default function APIReferencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-extrabold text-4xl text-gray-900 tracking-tight md:text-5xl dark:text-white">
          API Reference
        </h1>
        <p className="mb-12 text-gray-600 text-lg dark:text-gray-300">
          Complete reference documentation for Arcade's APIs and SDKs.
        </p>

        <div className="space-y-8">
          {/* Engine API Section */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ee175e]/30 hover:shadow-md dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]">
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
                <Link href="/home/reference/api">View API Reference</Link>
              </Button>
            </div>
          </div>

          {/* MCP Server SDK Section */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ee175e]/30 hover:shadow-md dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]">
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
          </div>

          {/* Arcade Clients Section */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-[#ee175e]/30 hover:shadow-md dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]">
            <h3 className="mb-4 font-bold text-2xl text-gray-900 dark:text-white">
              Arcade Clients
            </h3>
            <p className="mb-6 text-gray-600 leading-relaxed dark:text-gray-300">
              Arcade provides clients for several languages. These clients make
              it easy to use Arcade's tools within your agents and applications.
            </p>

            <div className="space-y-6">
              {/* Python Client */}
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 text-lg dark:text-white">
                  Python Client
                </h4>
                <p className="mb-2 text-gray-600 text-sm dark:text-gray-300">
                  Install with:
                </p>
                <code className="mb-3 block rounded bg-gray-100 px-3 py-2 font-mono text-sm dark:bg-gray-900">
                  pip install arcadepy
                </code>
                <a
                  className="text-primary text-sm hover:underline"
                  href="https://github.com/ArcadeAI/arcade-py"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Learn more about the Python Client
                </a>
              </div>

              {/* JavaScript / TypeScript Client */}
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 text-lg dark:text-white">
                  JavaScript / TypeScript Client
                </h4>
                <p className="mb-2 text-gray-600 text-sm dark:text-gray-300">
                  Install with:
                </p>
                <code className="mb-3 block rounded bg-gray-100 px-3 py-2 font-mono text-sm dark:bg-gray-900">
                  npm install @arcadeai/arcadejs
                </code>
                <a
                  className="text-primary text-sm hover:underline"
                  href="https://github.com/ArcadeAI/arcade-js"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Learn more about the JavaScript / TypeScript Client
                </a>
              </div>

              {/* Go Client */}
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 text-lg dark:text-white">
                  Go Client
                </h4>
                <p className="mb-2 text-gray-600 text-sm dark:text-gray-300">
                  Install with:
                </p>
                <code className="mb-3 block rounded bg-gray-100 px-3 py-2 font-mono text-sm dark:bg-gray-900">
                  go get -u 'github.com/ArcadeAI/arcade-go'
                </code>
                <a
                  className="text-primary text-sm hover:underline"
                  href="https://github.com/ArcadeAI/arcade-go"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Learn more about the Go Client
                </a>
              </div>
            </div>

            <p className="mt-6 text-gray-500 text-sm italic dark:text-gray-400">
              Note: MCP-compatible versions of these clients are in development
              and will be documented soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
