"use client";
import {
  Button,
  buttonVariants,
  getToolkitIcon,
  Separator,
} from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { ComingSoonProvider } from "@/app/_components/coming-soon-context";
import { FiltersBar } from "./filters-bar";
import { ToolCard } from "./tool-card";
import { TYPE_CONFIG, TYPE_DESCRIPTIONS } from "./type-config";
import { useFilterStore, useToolkitFilters } from "./use-toolkit-filters";

export default function Toolkits() {
  const clearAllFilters = useFilterStore((state) => state.clearAllFilters);

  const { hasActiveFilters, filteredToolkits, resultsCount } =
    useToolkitFilters();

  return (
    <ComingSoonProvider>
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 pt-4 pb-4 sm:px-6 sm:pt-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="font-bold text-2xl text-gray-900 sm:text-3xl dark:text-gray-50">
              MCP Servers
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed sm:text-base dark:text-gray-400">
              There are 5 designations for Arcade MCP Servers:
            </p>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(TYPE_CONFIG).map(
                ([key, { label, icon: Icon, color }]) => (
                  <div className="flex items-start space-x-3" key={key}>
                    <div className="mt-1">
                      <Icon className={cn("h-5 w-5", color)} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-800 text-sm sm:text-base dark:text-gray-200">
                        {label}
                      </h2>
                      <p className="mt-1 text-gray-600 text-xs leading-relaxed sm:text-sm dark:text-gray-400">
                        {
                          TYPE_DESCRIPTIONS[
                            key as keyof typeof TYPE_DESCRIPTIONS
                          ]
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Custom Integration Call-to-Action */}
            <div className="mt-4 rounded-lg border border-blue-500/50 border-dashed bg-blue-500/10 p-4 sm:mt-6 sm:p-5 dark:border-blue-400/50 dark:bg-blue-500/20">
              <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 dark:bg-blue-400/20">
                  <Plus className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-bold text-base text-gray-900 dark:text-gray-50">
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
                        "bg-blue-600 hover:bg-blue-700 active:bg-blue-700 dark:bg-blue-500 dark:active:bg-blue-600 dark:hover:bg-blue-600"
                      )}
                      href="/guides/create-tools/tool-basics/build-mcp-server"
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
          <Separator className="mt-4" />
          <FiltersBar resultsCount={resultsCount} />
          <main className="mx-auto max-w-7xl px-4 pt-2 pb-8 sm:pb-12">
            {filteredToolkits.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center sm:py-16">
                <div className="rounded-full bg-gray-100 p-5 sm:p-6 dark:bg-gray-800">
                  <Search className="h-10 w-10 text-gray-400 sm:h-12 sm:w-12 dark:text-gray-500" />
                </div>
                <h3 className="mt-5 font-semibold text-base text-gray-900 sm:mt-6 sm:text-lg dark:text-gray-100">
                  No MCP Servers found
                </h3>
                <p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
                  Try adjusting your filters or search query
                </p>
                {hasActiveFilters && (
                  <Button
                    className="mt-4"
                    onClick={clearAllFilters}
                    size="sm"
                    variant="outline"
                  >
                    Clear all filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:gap-5 lg:grid-cols-3">
                {filteredToolkits.map((toolkit) => {
                  // Get the icon component from the Design System utility
                  const IconComponent = getToolkitIcon(toolkit.id);
                  return (
                    <ToolCard
                      icon={IconComponent}
                      isByoc={toolkit.isBYOC}
                      isComingSoon={toolkit.isComingSoon}
                      isPro={toolkit.isPro}
                      key={toolkit.id}
                      link={toolkit.relativeDocsLink}
                      name={toolkit.label}
                      type={toolkit.type}
                    />
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </ComingSoonProvider>
  );
}
