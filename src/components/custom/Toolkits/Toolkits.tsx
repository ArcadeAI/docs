import React, { useState, useCallback, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { ToolCard } from "@/components/custom/Toolkits/ToolCard";
import { Button } from "@/components/ui/button";
import { Search, X, BadgeCheck, CheckCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDebounce } from "@uidotdev/usehooks";
import { Category, Tool } from "@pages/home/toolkits/toolkits";

export type ToolkitType = "arcade" | "verified" | "community";

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
};

type ToolkitsProps = {
  tools: Tool[];
  categories: Category[];
};

export default function Toolkits({ tools, categories }: ToolkitsProps) {
  console.log(tools);
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

    // Sort alphabetically and prioritize Arcade toolkits
    return filtered.sort((a, b) => {
      if (a.type === "arcade" && b.type !== "arcade") return -1;
      if (b.type === "arcade" && a.type !== "arcade") return 1;
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
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-gray-50 sm:text-3xl">
            Toolkits
          </h1>
          <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
            Enhance your AI agents with powerful integrations and capabilities.
            Our toolkits come in three types:
          </p>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {Object.entries(typeConfig).map(
              ([key, { label, icon: Icon, color }]) => (
                <div key={key} className="flex items-start space-x-3">
                  <div className="mt-1">
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-gray-200 sm:text-base">
                      {label}
                    </h2>
                    <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                      {key === "arcade" &&
                        "Official integrations developed and maintained by Arcade AI."}
                      {key === "verified" &&
                        "Community-created integrations, thoroughly tested and verified by Arcade AI."}
                      {key === "community" &&
                        "Created and maintained by the Arcade AI community, offering a wide range of integrations."}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800/60">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="w-full sm:w-64 lg:w-80">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search toolkits..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full rounded-md border-gray-700/50 bg-gray-900/50 py-2 pl-10 pr-10 text-gray-200 placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
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
            <p className="mt-2 text-xs text-gray-400 sm:text-sm">
              {filteredTools.length} toolkit(s) found
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap justify-end gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "secondary"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "text-xs sm:text-sm",
                      selectedCategory === category.id
                        ? "bg-gray-200 text-gray-900 hover:bg-gray-300"
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
      <main className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </main>
    </div>
  );
}
