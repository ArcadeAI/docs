"use client";
import { Button, getToolkitIcon, Separator } from "@arcadeai/design-system";
import { Generic as GenericIcon } from "@arcadeai/design-system/components/ui/atoms/icons";
import { cn } from "@arcadeai/design-system/lib/utils";
import { Code2, MessageSquarePlus, Search } from "lucide-react";
import Link from "next/link";
import { ComingSoonProvider } from "@/app/_components/coming-soon-context";
import type { ResolvedIndexToolkit } from "@/app/_lib/integration-index";
import { FiltersBar } from "./filters-bar";
import { ToolCard } from "./tool-card";
import { TYPE_CONFIG, TYPE_DESCRIPTIONS } from "./type-config";
import { useFilters } from "./use-filters";
import { useToolkitFilters } from "./use-toolkit-filters";

type ToolkitsClientProps = {
  toolkits: ResolvedIndexToolkit[];
};

/**
 * Get toolkit icon with fallback for API toolkits.
 *
 * `getToolkitIcon` from @arcadeai/design-system returns the Generic placeholder
 * (not null) when a toolkit id isn't in its icon map. For toolkits that ship
 * their own `publicIconUrl` (e.g. partner toolkits not yet in the DS),
 * we treat Generic as "no match" so the caller can fall through to `iconUrl`.
 */
function getToolkitIconWithFallback(
  toolkitId: string
): React.ComponentType<React.SVGProps<SVGSVGElement>> | null {
  const apiSuffix = "api";

  const resolved = getToolkitIcon(toolkitId);
  if (resolved && resolved !== GenericIcon) {
    return resolved;
  }

  const normalizedId = toolkitId.toLowerCase();
  if (normalizedId.endsWith(apiSuffix)) {
    const baseProviderId = toolkitId.slice(0, -apiSuffix.length);
    const baseIcon = getToolkitIcon(baseProviderId);
    if (baseIcon && baseIcon !== GenericIcon) {
      return baseIcon;
    }
  }

  return null;
}

export default function ToolkitsClient({ toolkits }: ToolkitsClientProps) {
  const { clearAllFilters } = useFilters();

  const { hasActiveFilters, filteredToolkits, resultsCount } =
    useToolkitFilters(toolkits);

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

            {/* Don't see what you need? Two paths to fix that. */}
            <div className="mt-4 rounded-lg border border-blue-500/50 border-dashed bg-blue-500/10 p-4 sm:mt-6 sm:p-5 dark:border-blue-400/50 dark:bg-blue-500/20">
              <h2 className="text-center font-bold text-base text-gray-900 sm:text-left dark:text-gray-50">
                Don't see what you need?
              </h2>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4">
                <div className="flex flex-col rounded-md border border-blue-500/30 bg-white/70 p-4 dark:border-blue-400/30 dark:bg-gray-900/40">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-semibold text-gray-900 text-sm dark:text-gray-50">
                      Build it yourself
                    </h3>
                  </div>
                  <p className="!mt-2 flex-1 text-gray-700 text-xs leading-relaxed dark:text-gray-300">
                    Use Arcade's SDK to integrate with any service or API.
                  </p>
                  <Button
                    className="mt-3"
                    render={
                      <Link href="/guides/create-tools/tool-basics/build-mcp-server" />
                    }
                    size="sm"
                  >
                    Learn how to build a MCP Server
                  </Button>
                </div>
                <div className="flex flex-col rounded-md border border-blue-500/30 bg-white/70 p-4 dark:border-blue-400/30 dark:bg-gray-900/40">
                  <div className="flex items-center gap-2">
                    <MessageSquarePlus className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="font-semibold text-gray-900 text-sm dark:text-gray-50">
                      Tell us what's missing
                    </h3>
                  </div>
                  <p className="!mt-2 flex-1 text-gray-700 text-xs leading-relaxed dark:text-gray-300">
                    Request a missing tool, suggest a feature, or report a bug.
                  </p>
                  <Button
                    className="mt-3"
                    render={
                      <Link href="/resources/integrations/tool-feedback" />
                    }
                    size="sm"
                    variant="outline"
                  >
                    Submit tool feedback
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl scroll-mt-20 px-4" id="list">
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
                  // Get icon with fallback for API toolkits (e.g., GithubApi → Github)
                  const IconComponent = getToolkitIconWithFallback(toolkit.id);
                  // Use publicIconUrl from Design System as additional fallback
                  const iconUrl =
                    "publicIconUrl" in toolkit
                      ? (toolkit.publicIconUrl as string)
                      : undefined;
                  return (
                    <ToolCard
                      icon={IconComponent}
                      iconUrl={iconUrl}
                      isByoc={toolkit.isBYOC}
                      // Doc-less toolkits have no page; render them as
                      // non-clickable (coming-soon) cards instead of links to
                      // a 404.
                      isComingSoon={
                        toolkit.isComingSoon || toolkit.hasPage === false
                      }
                      isPartner={toolkit.isPartner}
                      isPro={toolkit.isPro}
                      key={toolkit.id}
                      link={toolkit.link}
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
