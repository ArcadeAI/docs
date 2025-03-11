import { ToolCard } from "@/components/custom/Toolkits/ToolCard";
import { Category, Tool } from "@/components/custom/Toolkits/toolkits-config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useDebounce } from "@uidotdev/usehooks";
import { BadgeCheck, CheckCircle, Key, Search, Users, X } from "lucide-react";
import React, { useCallback, useMemo, useState } from "react";

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

    // Sort alphabetically and prioritize Arcade toolkits
    return filtered.sort((a, b) => {
      if (a.type === "arcade" && b.type !== "arcade") return -1;
      if (b.type === "arcade" && a.type !== "arcade") return 1;
      if (a.type === "verified" && b.type !== "verified") return -1;
      if (b.type === "verified" && a.type !== "verified") return 1;
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
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-600/60 py-6">
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
                      selectedCategory === category.id ? "default" : "secondary"
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
