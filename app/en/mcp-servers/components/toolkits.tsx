"use client";
import { Button, buttonVariants, Input } from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import { useDebounce } from "@uidotdev/usehooks";
import {
  BadgeCheck,
  CheckCircle,
  Key,
  Plus,
  Search,
  Terminal,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useCallback, useMemo, useState } from "react";
import { ComingSoonProvider } from "@/app/_components/coming-soon-context";
import { ToolCard } from "./tool-card";
import type { Category, Tool } from "./toolkits-config";

export type ToolkitType =
  | "arcade"
  | "arcade_starter"
  | "verified"
  | "community"
  | "auth";

const DEFAULT_PRIORITY = 5;

const TYPE_PRIORITY = {
  arcade: 0,
  // biome-ignore lint/style/useNamingConvention: this is ok
  arcade_starter: 1,
  verified: 2,
  community: 3,
  auth: 4,
} as const;

const typeConfig = {
  arcade: {
    label: "Arcade Optimized MCP Server",
    icon: BadgeCheck,
    color: "text-emerald-400",
  },
  // biome-ignore lint/style/useNamingConvention: this is ok
  arcade_starter: {
    label: "Arcade Starter MCP Server",
    icon: Terminal,
    color: "text-orange-400",
  },
  verified: {
    label: "Verified MCP Server",
    icon: CheckCircle,
    color: "text-blue-400",
  },
  community: {
    label: "Community MCP Server",
    icon: Users,
    color: "text-orange-400",
  },
  auth: {
    label: "Auth Provider",
    icon: Key,
    color: "text-purple-400",
  },
};

const DEBOUNCE_TIME = 300;

type ToolkitsProps = {
  tools: Tool[];
  categories: Category[];
};

const getTypePriority = (type: string): number =>
  TYPE_PRIORITY[type as ToolkitType] ?? DEFAULT_PRIORITY;

const compareTools = (a: Tool, b: Tool): number => {
  // First prioritize available tools over coming soon tools
  if (a.isComingSoon !== b.isComingSoon) {
    return a.isComingSoon ? 1 : -1;
  }

  // Within each availability group, prioritize by type
  if (!(a.isComingSoon || b.isComingSoon)) {
    const aPriority = getTypePriority(a.type);
    const bPriority = getTypePriority(b.type);

    if (aPriority !== bPriority) {
      return aPriority - bPriority;
    }
  }

  // Finally sort alphabetically within each group
  return a.name.localeCompare(b.name);
};

export default function Toolkits({ tools, categories }: ToolkitsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);

  const filteredTools = useMemo(() => {
    const searchLower = debouncedSearchQuery.toLowerCase();

    const filtered = tools.filter((tool) => {
      const matchesCategory =
        selectedCategory === "all" || tool.category === selectedCategory;
      const matchesSearch =
        searchLower === "" ||
        tool.name.toLowerCase().includes(searchLower) ||
        tool.summary.toLowerCase().includes(searchLower) ||
        tool.category.toLowerCase().includes(searchLower) ||
        (tool.type in typeConfig &&
          typeConfig[tool.type as ToolkitType].label
            .toLowerCase()
            .includes(searchLower));

      return matchesCategory && matchesSearch;
    });

    return filtered.sort(compareTools);
  }, [tools, selectedCategory, debouncedSearchQuery]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  return (
    <ComingSoonProvider>
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 pt-6 pb-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="font-bold text-2xl text-gray-900 sm:text-3xl dark:text-gray-50">
              MCP Servers
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed sm:text-base dark:text-gray-400">
              There are 4 designations for Arcade MCP Servers:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:gap-4 md:grid-cols-3">
              {Object.entries(typeConfig).map(
                ([key, { label, icon: Icon, color }]) => (
                  <div className="flex items-start space-x-4" key={key}>
                    <div className="mt-1">
                      <Icon className={`h-5 w-5 ${color}`} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-800 text-sm sm:text-base dark:text-gray-200">
                        {label}
                      </h2>
                      <p className="mt-1 text-gray-600 text-xs sm:text-sm dark:text-gray-400">
                        {key === "arcade" && (
                          <>
                            Official MCP Servers hand-crafted by Arcade that are
                            ready for use and optimized for LLM-usage.{" "}
                            <a
                              href="/home/use-tools/types-of-tools#optimized-tools"
                              style={{ textDecoration: "none" }}
                            >
                              Learn more
                            </a>
                            .
                          </>
                        )}
                        {key === "arcade_starter" && (
                          <>
                            Auto-generated MCP Servers developed by Arcade that
                            may require customization.{" "}
                            <a
                              href="/home/use-tools/types-of-tools#starter-tools"
                              style={{ textDecoration: "none" }}
                            >
                              Learn more
                            </a>
                            .
                          </>
                        )}
                        {key === "verified" &&
                          "Community-created MCP Servers, thoroughly tested and verified by Arcade."}
                        {key === "community" &&
                          "Created and maintained by the Arcade community, offering a wide range of MCP Servers."}
                        {key === "auth" &&
                          "Auth integrations allow you to develop custom tools that connect your agent APIs and services."}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Custom Integration Call-to-Action */}
            <div className="mt-6 rounded-lg border border-blue-500/50 border-dashed bg-blue-500/10 p-4 dark:bg-blue-500/10">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                  <Plus className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-bold text-base text-gray-900 dark:text-gray-100">
                    Build your own MCP Server
                  </h2>
                  <p className="!mt-1.5 text-gray-700 text-sm dark:text-gray-300">
                    Don't see what you need? Use Arcade's SDK to integrate with
                    any service or API.
                  </p>
                  <div className="mt-3 mb-1">
                    <Link
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "bg-blue-600 hover:bg-blue-700 active:bg-blue-700"
                      )}
                      href="/home/build-tools/create-a-mcp-server"
                    >
                      Learn how to build a MCP Server
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mt-4 max-w-7xl border-gray-300/60 border-t px-4 dark:border-gray-600/60">
            <div className="py-6">
              <div className="w-full sm:w-64 lg:w-80">
                <div className="relative">
                  <Input
                    className="flex w-full items-center gap-4 border-none bg-gray-100/80 pl-10 text-gray-900 placeholder:text-gray-500 dark:bg-[#f9fafb1a] dark:text-white dark:placeholder:text-white/50"
                    onChange={handleSearchChange}
                    placeholder="Search ..."
                    type="text"
                    value={searchQuery}
                  />
                  <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 transform text-gray-500" />
                  {searchQuery && (
                    <button
                      className="-translate-y-1/2 absolute top-1/2 right-3 transform text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
                      onClick={() => setSearchQuery("")}
                      type="button"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <p className="!text-xs mt-2 text-gray-600 sm:text-sm dark:text-gray-400">
                  {filteredTools.length} MCP Server(s) found
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap justify-end gap-2">
                    {categories.map((category) => (
                      <Button
                        className={cn(
                          "h-10 px-4 text-xs sm:text-sm",
                          selectedCategory === category.id
                            ? "bg-primary/80 text-white hover:bg-primary/90"
                            : "bg-gray-200/80 text-gray-700 hover:bg-gray-300/80 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-700/50"
                        )}
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        size="sm"
                        variant={
                          selectedCategory === category.id
                            ? "default"
                            : "secondary"
                        }
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="mx-auto max-w-7xl px-4 py-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </ComingSoonProvider>
  );
}
