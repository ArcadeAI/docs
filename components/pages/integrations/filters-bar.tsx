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
  type ToolkitCategory,
  type ToolkitType,
} from "@arcadeai/design-system";
import { Check, Filter, FolderOpen, Layers, Search, X } from "lucide-react";
import type React from "react";
import { useCallback } from "react";
import { TYPE_CONFIG, TYPE_CONFIG_ENTRIES } from "./type-config";
import { useFilters } from "./use-filters";

interface FiltersBarProps {
  resultsCount: number;
}

type Category = (typeof CATEGORIES)[number];

function CategoryMenuItem({
  category,
  isSelected,
  onSelect,
}: {
  category: Category;
  isSelected: boolean;
  onSelect: (category: ToolkitCategory) => void;
}) {
  const handleClick = useCallback(
    () => onSelect(category.id),
    [category.id, onSelect]
  );
  return (
    <DropdownMenuItem onClick={handleClick}>
      {isSelected ? (
        <Check className="mr-2 h-3.5 w-3.5" />
      ) : (
        <span className="mr-2 h-3.5 w-3.5" />
      )}
      {category.name}
    </DropdownMenuItem>
  );
}

function TypeMenuItem({
  typeKey,
  label,
  icon: Icon,
  isSelected,
  onSelect,
}: {
  typeKey: ToolkitType;
  label: string;
  icon: React.ElementType;
  isSelected: boolean;
  onSelect: (type: ToolkitType | "all") => void;
}) {
  const handleClick = useCallback(() => onSelect(typeKey), [onSelect, typeKey]);
  return (
    <DropdownMenuItem onClick={handleClick}>
      {isSelected ? (
        <Check className="mr-2 h-3.5 w-3.5" />
      ) : (
        <Icon className="mr-2 h-3.5 w-3.5" />
      )}
      {label}
    </DropdownMenuItem>
  );
}

function FilterChip({
  label,
  removeLabel,
  onRemove,
}: {
  label: React.ReactNode;
  removeLabel: string;
  onRemove: () => void;
}) {
  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemove();
    },
    [onRemove]
  );
  return (
    <Badge className="gap-1" variant="secondary">
      {label}
      <button
        aria-label={removeLabel}
        className="hover:opacity-70"
        onClick={handleRemove}
        type="button"
      >
        <X className="h-3 w-3 cursor-pointer" />
      </button>
    </Badge>
  );
}

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
  } = useFilters();

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedType !== "all" ||
    filterByPro ||
    filterByByoc ||
    searchQuery !== "";

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    [setSearchQuery]
  );
  const handleClearSearch = useCallback(
    () => setSearchQuery(""),
    [setSearchQuery]
  );
  const handleSelectAllTypes = useCallback(
    () => setSelectedType("all"),
    [setSelectedType]
  );
  const handleProChange = useCallback(
    (v: boolean | "indeterminate") => setFilterByPro(Boolean(v)),
    [setFilterByPro]
  );
  const handleByocChange = useCallback(
    (v: boolean | "indeterminate") => setFilterByByoc(Boolean(v)),
    [setFilterByByoc]
  );
  const handleClearFeatures = useCallback(() => {
    setFilterByPro(false);
    setFilterByByoc(false);
  }, [setFilterByByoc, setFilterByPro]);
  const handleRemoveCategory = useCallback(
    () => setSelectedCategory("all"),
    [setSelectedCategory]
  );
  const handleRemovePro = useCallback(
    () => setFilterByPro(false),
    [setFilterByPro]
  );
  const handleRemoveByoc = useCallback(
    () => setFilterByByoc(false),
    [setFilterByByoc]
  );

  return (
    <div className="py-6">
      {/* Search and Filters */}
      <div className="mb-4 space-y-3 sm:mb-6 sm:space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Search */}
          <div className="relative w-full flex-1 sm:min-w-[200px] sm:max-w-md">
            <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pr-9 pl-9"
              onChange={handleSearchChange}
              placeholder="Search MCP Servers..."
              type="text"
              value={searchQuery}
            />
            {searchQuery ? (
              <button
                aria-label="Clear search"
                className="-translate-y-1/2 absolute top-1/2 right-3 text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={handleClearSearch}
                type="button"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          {/* Filter dropdowns and results count */}
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            {/* Category dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    className="flex-1 sm:flex-none"
                    size="sm"
                    variant="outline"
                  />
                }
              >
                <FolderOpen className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Category</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 border-gray-200 p-2 dark:border-gray-700"
              >
                {CATEGORIES.map((c) => (
                  <CategoryMenuItem
                    category={c}
                    isSelected={selectedCategory === c.id}
                    key={c.id}
                    onSelect={setSelectedCategory}
                  />
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Type dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    className="flex-1 sm:flex-none"
                    size="sm"
                    variant="outline"
                  />
                }
              >
                <Layers className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Type</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-56 border-gray-200 p-2 dark:border-gray-700"
              >
                <DropdownMenuItem onClick={handleSelectAllTypes}>
                  {selectedType === "all" ? (
                    <Check className="mr-2 h-3.5 w-3.5" />
                  ) : (
                    <span className="mr-2 h-3.5 w-3.5" />
                  )}
                  All Types
                </DropdownMenuItem>
                {TYPE_CONFIG_ENTRIES.map(([key, { label, icon: Icon }]) => (
                  <TypeMenuItem
                    icon={Icon}
                    isSelected={selectedType === key}
                    key={key}
                    label={label}
                    onSelect={setSelectedType}
                    typeKey={key as ToolkitType}
                  />
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Features dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    className="flex-1 sm:flex-none"
                    size="sm"
                    variant="outline"
                  />
                }
              >
                <Filter className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Features</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-64 border-gray-200 p-2 dark:border-gray-700"
              >
                <DropdownMenuCheckboxItem
                  checked={filterByPro}
                  onCheckedChange={handleProChange}
                >
                  Pro
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filterByByoc}
                  onCheckedChange={handleByocChange}
                >
                  BYOC
                </DropdownMenuCheckboxItem>

                {filterByPro || filterByByoc ? (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleClearFeatures}>
                      <X className="mr-2 h-3.5 w-3.5" />
                      Clear features
                    </DropdownMenuItem>
                  </>
                ) : null}
              </DropdownMenuContent>
            </DropdownMenu>

            {hasActiveFilters ? (
              <Button
                className="h-9 flex-1 sm:flex-none"
                onClick={clearAllFilters}
                size="sm"
                variant="ghost"
              >
                <X className="h-4 w-4 sm:mr-1.5" />
                <span className="hidden sm:inline">Clear all</span>
              </Button>
            ) : null}

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
        {selectedCategory !== "all" ||
        selectedType !== "all" ||
        filterByPro ||
        filterByByoc ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs">Active:</span>
            {selectedCategory === "all" ? null : (
              <FilterChip
                label={CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                onRemove={handleRemoveCategory}
                removeLabel="Remove category filter"
              />
            )}
            {selectedType === "all" ? null : (
              <FilterChip
                label={TYPE_CONFIG[selectedType as ToolkitType].label}
                onRemove={handleSelectAllTypes}
                removeLabel="Remove type filter"
              />
            )}
            {filterByPro ? (
              <FilterChip
                label="Pro"
                onRemove={handleRemovePro}
                removeLabel="Remove Pro filter"
              />
            ) : null}
            {filterByByoc ? (
              <FilterChip
                label="BYOC"
                onRemove={handleRemoveByoc}
                removeLabel="Remove BYOC filter"
              />
            ) : null}
          </div>
        ) : null}
      </div>

      <Separator />
    </div>
  );
}
