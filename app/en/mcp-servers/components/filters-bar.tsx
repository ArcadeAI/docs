"use client";
import {
  Badge,
  Button,
  CATEGORIES,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Separator,
  type ToolkitType,
} from "@arcadeai/design-system";
import { Check, Filter, FolderOpen, Layers, Search, X } from "lucide-react";
import type React from "react";
import { TYPE_CONFIG } from "./type-config";
import { useFilterStore } from "./use-toolkit-filters";

type FiltersBarProps = {
  resultsCount: number;
};

export function FiltersBar({ resultsCount }: FiltersBarProps) {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedType,
    setSelectedType,
    filterByPro,
    setFilterByPro,
    filterByByoc,
    setFilterByByoc,
    searchQuery,
    setSearchQuery,
    clearAllFilters,
  } = useFilterStore();

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedType !== "all" ||
    filterByPro ||
    filterByByoc ||
    searchQuery !== "";

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="py-6">
      {/* Search and Filters */}
      <div className="mb-4 space-y-3 sm:mb-6 sm:space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Search */}
          <div className="relative w-full flex-1 sm:min-w-[200px] sm:max-w-md">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              className="pr-9 pl-9"
              onChange={handleSearchChange}
              placeholder="Search MCP Servers..."
              type="text"
              value={searchQuery}
            />
            {searchQuery && (
              <button
                aria-label="Clear search"
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={() => setSearchQuery("")}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Filter dropdowns and results count */}
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            {/* Category dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex-1 sm:flex-none"
                  size="sm"
                  variant="outline"
                >
                  <FolderOpen className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Category</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 border-gray-200 p-2 dark:border-gray-700"
              >
                {CATEGORIES.map((c) => (
                  <DropdownMenuItem
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                  >
                    {selectedCategory === c.id && (
                      <Check className="mr-2 h-3.5 w-3.5" />
                    )}
                    {selectedCategory !== c.id && (
                      <span className="mr-2 h-3.5 w-3.5" />
                    )}
                    {c.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Type dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex-1 sm:flex-none"
                  size="sm"
                  variant="outline"
                >
                  <Layers className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Type</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 border-gray-200 p-2 dark:border-gray-700"
              >
                <DropdownMenuItem onClick={() => setSelectedType("all")}>
                  {selectedType === "all" && (
                    <Check className="mr-2 h-3.5 w-3.5" />
                  )}
                  {selectedType !== "all" && (
                    <span className="mr-2 h-3.5 w-3.5" />
                  )}
                  All Types
                </DropdownMenuItem>
                {Object.entries(TYPE_CONFIG).map(
                  ([key, { label, icon: Icon }]) => (
                    <DropdownMenuItem
                      key={key}
                      onClick={() => setSelectedType(key as ToolkitType)}
                    >
                      {selectedType === key ? (
                        <Check className="mr-2 h-3.5 w-3.5" />
                      ) : (
                        <Icon className="mr-2 h-3.5 w-3.5" />
                      )}
                      {label}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Features dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex-1 sm:flex-none"
                  size="sm"
                  variant="outline"
                >
                  <Filter className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Features</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-64 border-gray-200 p-2 dark:border-gray-700"
              >
                <DropdownMenuCheckboxItem
                  checked={filterByPro}
                  onCheckedChange={(v) => setFilterByPro(Boolean(v))}
                >
                  Pro
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filterByByoc}
                  onCheckedChange={(v) => setFilterByByoc(Boolean(v))}
                >
                  BYOC
                </DropdownMenuCheckboxItem>

                {(filterByPro || filterByByoc) && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => {
                        setFilterByPro(false);
                        setFilterByByoc(false);
                      }}
                    >
                      <X className="mr-2 h-3.5 w-3.5" />
                      Clear features
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {hasActiveFilters && (
              <Button
                className="h-9 flex-1 sm:flex-none"
                onClick={clearAllFilters}
                size="sm"
                variant="ghost"
              >
                <X className="h-4 w-4 sm:mr-1.5" />
                <span className="hidden sm:inline">Clear all</span>
              </Button>
            )}

            {/* Divider - hidden on mobile */}
            <div className="mx-1 hidden h-6 w-px bg-gray-300 sm:block dark:bg-gray-700" />

            {/* Results count */}
            <div className="w-full text-center text-muted-foreground text-sm sm:w-auto sm:text-left">
              <span className="font-semibold text-foreground">
                {resultsCount}
              </span>{" "}
              {resultsCount === 1 ? "server" : "servers"}
            </div>
          </div>
        </div>

        {/* Active filter chips */}
        {(selectedCategory !== "all" ||
          selectedType !== "all" ||
          filterByPro ||
          filterByByoc) && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs">Active:</span>
            {selectedCategory !== "all" && (
              <Badge className="gap-1" variant="secondary">
                {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                <button
                  aria-label="Remove category filter"
                  className="hover:opacity-70"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory("all");
                  }}
                  type="button"
                >
                  <X className="h-3 w-3 cursor-pointer" />
                </button>
              </Badge>
            )}
            {selectedType !== "all" && (
              <Badge className="gap-1" variant="secondary">
                {TYPE_CONFIG[selectedType as ToolkitType].label}
                <button
                  aria-label="Remove type filter"
                  className="hover:opacity-70"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedType("all");
                  }}
                  type="button"
                >
                  <X className="h-3 w-3 cursor-pointer" />
                </button>
              </Badge>
            )}
            {filterByPro && (
              <Badge className="gap-1" variant="secondary">
                Pro
                <button
                  aria-label="Remove Pro filter"
                  className="hover:opacity-70"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterByPro(false);
                  }}
                  type="button"
                >
                  <X className="h-3 w-3 cursor-pointer" />
                </button>
              </Badge>
            )}
            {filterByByoc && (
              <Badge className="gap-1" variant="secondary">
                BYOC
                <button
                  aria-label="Remove BYOC filter"
                  className="hover:opacity-70"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilterByByoc(false);
                  }}
                  type="button"
                >
                  <X className="h-3 w-3 cursor-pointer" />
                </button>
              </Badge>
            )}
          </div>
        )}
      </div>

      <Separator />
    </div>
  );
}
