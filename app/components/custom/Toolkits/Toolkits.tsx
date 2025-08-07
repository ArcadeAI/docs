import { ToolCard } from "@/components/custom/Toolkits/ToolCard";
import { Category, Tool } from "@/components/custom/Toolkits/toolkits-config";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useDebounce } from "@uidotdev/usehooks";
import {
  BadgeCheck,
  CheckCircle,
  Key,
  Search,
  Users,
  X,
  Plus,
} from "lucide-react";
import React, { useCallback, useMemo, useState } from "react";
import { ComingSoonProvider } from "./ComingSoonContext";
import Link from "next/link";

export type ToolkitType = "arcade" | "verified" | "community" | "auth";

const typeConfig = {
  arcade: {
    label: "Arcade Toolkit",
    icon: BadgeCheck,
    color: "text-emerald-400",
  },
  verified: {
    label: "Verified Toolkit",
    icon: CheckCircle,
    color: "text-blue-400",
  },
  community: {
    label: "Community Toolkit",
    icon: Users,
    color: "text-orange-400",
  },
  auth: {
    label: "Auth Integration",
    icon: Key,
    color: "text-purple-400",
  },
};

type ToolkitsProps = {
  tools: Tool[];
  categories: Category[];
};

export default function Toolkits({ tools, categories }: ToolkitsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const filteredTools = useMemo(() => {
    const filtered = tools.filter(
      (tool) =>
        (selectedCategory === "all" || tool.category === selectedCategory) &&
        (tool.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
          tool.summary
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase()) ||
          tool.category
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase()) ||
          typeConfig[tool.type].label
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase())),
    );

    // Sort with multiple priorities: available first, then by type, then alphabetically
    return filtered.sort((a, b) => {
      // First prioritize available tools over coming soon tools
      if (a.isComingSoon && !b.isComingSoon) return 1;
      if (!a.isComingSoon && b.isComingSoon) return -1;

      // Within each availability group, prioritize by type (arcade > verified > others)
      if (!a.isComingSoon && !b.isComingSoon) {
        if (a.type === "arcade" && b.type !== "arcade") return -1;
        if (b.type === "arcade" && a.type !== "arcade") return 1;
        if (a.type === "verified" && b.type !== "verified") return -1;
        if (b.type === "verified" && a.type !== "verified") return 1;
      }

      // Finally sort alphabetically within each group
      return a.name.localeCompare(b.name);
    });
  }, [tools, selectedCategory, debouncedSearchQuery]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [],
  );

  return (
    <ComingSoonProvider>
      <div className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 pb-4 pt-6 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-50 sm:text-3xl">
              Integrations
            </h1>
            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              There are 4 designations for Arcade integrations:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:gap-4 md:grid-cols-4">
              {Object.entries(typeConfig).map(
                ([key, { label, icon: Icon, color }]) => (
                  <div key={key} className="flex items-start space-x-4">
                    <div className="mt-1">
                      <Icon className={`h-5 w-5 ${color}`} />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-gray-200 sm:text-base">
                        {label}
                      </h2>
                      <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                        {key === "arcade" &&
                          "Official integrations developed and maintained by Arcade."}
                        {key === "verified" &&
                          "Community-created integrations, thoroughly tested and verified by Arcade."}
                        {key === "community" &&
                          "Created and maintained by the Arcade community, offering a wide range of integrations."}
                        {key === "auth" &&
                          "Auth integrations allow you to develop custom tools that connect your agent APIs and services."}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Custom Integration Call-to-Action */}
            <div className="mt-6 rounded-lg border border-dashed border-blue-500/50 bg-blue-500/10 p-4">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20">
                  <Plus className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-base font-bold text-gray-100">
                    Build your own integration
                  </h2>
                  <p className="!mt-1.5 text-sm text-gray-300">
                    Don't see what you need? Use Arcade's SDK to integrate with
                    any service or API.
                  </p>
                  <div className="mb-1 mt-3">
                    <Link
                      href="https://docs.arcade.dev/home/build-tools/create-a-toolkit"
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "bg-blue-600 hover:bg-blue-700 active:bg-blue-700",
                      )}
                    >
                      Learn how to build a toolkit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mt-4 max-w-7xl border-t border-gray-600/60 px-4">
            <div className="py-6">
              <div className="w-full sm:w-64 lg:w-80">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search ..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="flex w-full items-center gap-4 border-none bg-[#f9fafb1a] pl-10 text-white placeholder:text-white/50"
                  />
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500 transition-colors hover:text-gray-300"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <p className="mt-2 !text-xs text-gray-400 sm:text-sm">
                  {filteredTools.length} result(s) found
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap justify-end gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={
                          selectedCategory === category.id
                            ? "default"
                            : "secondary"
                        }
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "h-10 px-4 text-xs sm:text-sm",
                          selectedCategory === category.id
                            ? "bg-primary/80 text-white hover:bg-primary/90"
                            : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50",
                        )}
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
