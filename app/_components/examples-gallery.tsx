"use client";

import {
  ChevronDown,
  LayoutGrid,
  List,
  type LucideIcon,
  Network,
  Plug,
  Search,
  SlidersHorizontal,
  Workflow,
  X,
} from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import { type Dispatch, type SetStateAction, useMemo, useState } from "react";
import {
  EXAMPLES,
  type ExampleItem,
  type ExampleLevel,
  type ExampleType,
  LEVELS,
} from "../en/resources/examples/examples-data";
import { SampleAppCard } from "./sample-app-card";

// Tag taxonomy mirrors the badge colors in <SampleAppCard /> so the filter
// rail groups tags the same way the cards present them.
const LANGUAGES = ["JavaScript", "Python", "TypeScript", "Java", "Go", "Rust"];
const FRAMEWORKS = [
  "Langchain",
  "mastra",
  "CrewAI",
  "LangGraph",
  "OpenAI",
  "Anthropic",
  "Next.js",
];
const INTEGRATIONS = [
  "Slack",
  "GitHub",
  "Gmail",
  "Discord",
  "Notion",
  "Linear",
  "Jira",
  "Weaviate",
  "Email",
  "Stytch",
];

const TYPES: ExampleType[] = ["Sample app", "MCP server"];

// The outcome-driven skill levels, in display order (beginner first).
const LEVEL_VALUES: ExampleLevel[] = LEVELS.map((meta) => meta.level);

// Display label for the primary (skill-level) facet. Change it in one place.
const LEVEL_FACET_LABEL = "Goal";

function levelId(level: string): string {
  return `level-${level.toLowerCase()}`;
}

// Seconds between each goal card's "alive" pulse so they breathe out of sync.
const PULSE_STAGGER_S = 0.4;

// An icon per goal so the overview cards read as the page's focal point.
const LEVEL_ICONS: Record<ExampleLevel, LucideIcon> = {
  Connect: Plug,
  Automate: Workflow,
  Orchestrate: Network,
};

const MONTHS: Record<string, number> = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

// Weight years above months so "Dec 2025" sorts after "Jan 2025".
const YEAR_WEIGHT = 100;

function sortKey(date: string): number {
  const [mon, year] = date.split(" ");
  return Number(year) * YEAR_WEIGHT + (MONTHS[mon] ?? 0);
}

type FacetGroup = {
  label: string;
  options: { value: string; count: number }[];
};

function buildGroups(items: ExampleItem[]): FacetGroup[] {
  const count = (predicate: (item: ExampleItem) => boolean) =>
    items.filter(predicate).length;

  const pick = (label: string, candidates: string[]): FacetGroup => ({
    label,
    options: candidates
      .map((value) => ({
        value,
        count: count((item) => item.tags.includes(value)),
      }))
      .filter((opt) => opt.count > 0),
  });

  // Goal (skill level) is intentionally NOT a filter facet: it's already the
  // page's grouping + the jump nav, so a chip row would just duplicate those.
  return [
    {
      label: "Type",
      options: TYPES.map((value) => ({
        value,
        count: count((item) => item.type === value),
      })).filter((opt) => opt.count > 0),
    },
    pick("Language", LANGUAGES),
    pick("Framework", FRAMEWORKS),
    pick("Integration", INTEGRATIONS),
  ].filter((group) => group.options.length > 0);
}

function filterItems(
  items: ExampleItem[],
  query: string,
  active: Set<string>
): ExampleItem[] {
  const q = query.trim().toLowerCase();
  const selectedTypes = TYPES.filter((t) => active.has(t));
  const selectedLevels = LEVEL_VALUES.filter((l) => active.has(l));
  const selectedTags = [...active].filter(
    (v) =>
      !(
        TYPES.includes(v as ExampleType) ||
        LEVEL_VALUES.includes(v as ExampleLevel)
      )
  );

  return items.filter((item) => {
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(item.type);
    const matchesLevel =
      selectedLevels.length === 0 || selectedLevels.includes(item.level);
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.every((tag) => item.tags.includes(tag));
    const haystack =
      `${item.title} ${item.description} ${item.tags.join(" ")} ${item.type} ${item.level}`.toLowerCase();
    const matchesQuery = q === "" || haystack.includes(q);
    return matchesType && matchesLevel && matchesTags && matchesQuery;
  });
}

// One facet's label + its selectable chips. Counts are intentionally omitted to
// keep the bar calm; the running "N examples" total below already conveys scope.
function FacetChips({
  group,
  active,
  onToggle,
}: {
  group: FacetGroup;
  active: Set<string>;
  onToggle: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-medium text-[0.7rem] text-gray-400 uppercase tracking-wide dark:text-gray-500">
        {group.label}
      </span>
      {group.options.map((opt) => {
        const on = active.has(opt.value);
        return (
          <button
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              on
                ? "border-primary bg-primary/10 text-primary dark:bg-primary/15"
                : "border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-white"
            }`}
            key={opt.value}
            onClick={() => onToggle(opt.value)}
            type="button"
          >
            {opt.value}
          </button>
        );
      })}
    </div>
  );
}

function CardGrid({ items }: { items: ExampleItem[] }) {
  return (
    <div className="mt-4 grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <SampleAppCard
          blank
          date={item.date}
          description={item.description}
          fallbackVisual
          href={item.href}
          image={item.image}
          key={item.href}
          tags={item.tags}
          title={item.title}
        />
      ))}
    </div>
  );
}

// A numbered header + short description for each skill-level bucket.
function LevelHeading({
  index,
  level,
  tier,
  outcome,
}: {
  index: number;
  level: string;
  tier: string;
  outcome: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary text-sm tabular-nums">
        {index}
      </span>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-semibold text-gray-900 text-xl tracking-tight dark:text-white">
            {level}
          </h2>
          <span className="inline-flex items-center rounded-full border border-gray-200 px-2 py-0.5 font-medium text-[0.7rem] text-gray-500 uppercase tracking-wide dark:border-gray-700 dark:text-gray-400">
            {tier}
          </span>
        </div>
        <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
          {outcome}
        </p>
      </div>
    </div>
  );
}

function FiltersToggle({
  showMore,
  setShowMore,
  secondaryActiveCount,
}: {
  showMore: boolean;
  setShowMore: Dispatch<SetStateAction<boolean>>;
  secondaryActiveCount: number;
}) {
  const on = showMore || secondaryActiveCount > 0;
  return (
    <button
      aria-expanded={showMore}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-2 font-medium text-sm transition-colors ${
        on
          ? "border-primary/40 text-primary"
          : "border-gray-200 text-gray-500 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white"
      }`}
      onClick={() => setShowMore((prev) => !prev)}
      type="button"
    >
      <SlidersHorizontal className="h-4 w-4" />
      Filters
      {secondaryActiveCount > 0 && (
        <span className="tabular-nums">· {secondaryActiveCount}</span>
      )}
      <ChevronDown
        className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`}
      />
    </button>
  );
}

function Controls({
  query,
  setQuery,
  view,
  setView,
  showMore,
  setShowMore,
  hasSecondary,
  secondaryActiveCount,
  hasFilters,
  clear,
}: {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  view: "grid" | "list";
  setView: Dispatch<SetStateAction<"grid" | "list">>;
  showMore: boolean;
  setShowMore: Dispatch<SetStateAction<boolean>>;
  hasSecondary: boolean;
  secondaryActiveCount: number;
  hasFilters: boolean;
  clear: () => void;
}) {
  const tabClass = (active: boolean) =>
    `inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium text-sm transition-colors ${
      active
        ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    }`;

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-3 h-4 w-4 text-gray-400" />
        <input
          aria-label="Search examples"
          autoComplete="off"
          className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pr-3 pl-10 text-gray-900 text-sm placeholder:text-gray-400 focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-[rgba(17,17,17,0.8)] dark:text-white"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search examples"
          type="search"
          value={query}
        />
      </div>

      <div className="flex items-center gap-2">
        {hasSecondary && (
          <FiltersToggle
            secondaryActiveCount={secondaryActiveCount}
            setShowMore={setShowMore}
            showMore={showMore}
          />
        )}
        {hasFilters && (
          <button
            className="inline-flex items-center gap-1 text-gray-500 text-sm transition-colors hover:text-primary dark:text-gray-400"
            onClick={clear}
            type="button"
          >
            <X className="h-3.5 w-3.5" /> Clear
          </button>
        )}
        <div className="ml-auto inline-flex shrink-0 gap-0.5 rounded-lg border border-gray-200 bg-white p-1 sm:ml-0 dark:border-gray-700 dark:bg-[rgba(17,17,17,0.8)]">
          <button
            aria-pressed={view === "grid"}
            className={tabClass(view === "grid")}
            onClick={() => setView("grid")}
            type="button"
          >
            <LayoutGrid className="h-4 w-4" /> Grid
          </button>
          <button
            aria-pressed={view === "list"}
            className={tabClass(view === "list")}
            onClick={() => setView("list")}
            type="button"
          >
            <List className="h-4 w-4" /> List
          </button>
        </div>
      </div>
    </div>
  );
}

function SecondaryFilters({
  groups,
  active,
  toggle,
}: {
  groups: FacetGroup[];
  active: Set<string>;
  toggle: (value: string) => void;
}) {
  return (
    <div className="mt-3 flex flex-col gap-3 rounded-lg border border-gray-200 bg-gray-50/50 p-3 dark:border-gray-800 dark:bg-white/[0.02]">
      {groups.map((group) => (
        <FacetChips
          active={active}
          group={group}
          key={group.label}
          onToggle={toggle}
        />
      ))}
    </div>
  );
}

function LevelSections({ gridItems }: { gridItems: ExampleItem[] }) {
  return (
    <>
      {LEVELS.map((meta, idx) => {
        const levelItems = gridItems.filter(
          (item) => item.level === meta.level
        );
        if (levelItems.length === 0) {
          return null;
        }
        return (
          <section
            className="mt-10 scroll-mt-24 first:mt-6"
            id={levelId(meta.level)}
            key={meta.level}
          >
            <LevelHeading
              index={idx + 1}
              level={meta.level}
              outcome={meta.outcome}
              tier={meta.tier}
            />
            <CardGrid items={levelItems} />
          </section>
        );
      })}
    </>
  );
}

function ListView({ items }: { items: ExampleItem[] }) {
  return (
    <div className="mt-4">
      <div className="hidden grid-cols-[1fr_120px_120px_72px] gap-5 border-gray-200 border-b px-2 pb-3 font-medium text-gray-500 text-xs uppercase tracking-wide md:grid dark:border-gray-800 dark:text-gray-400">
        <span>Example</span>
        <span>{LEVEL_FACET_LABEL}</span>
        <span>Type</span>
        <span className="text-right">Date</span>
      </div>
      {items.map((item) => (
        <Link
          className="group grid grid-cols-1 gap-2 border-gray-200 border-b px-2 py-4 transition-colors hover:bg-gray-50 md:grid-cols-[1fr_120px_120px_72px] md:items-baseline md:gap-5 dark:border-gray-800 dark:hover:bg-white/[0.03]"
          href={item.href}
          key={item.href}
          onClick={() =>
            posthog.capture("Sample app clicked", {
              app_title: item.title,
              app_href: item.href,
              tags: item.tags,
              opens_in_new_tab: true,
            })
          }
          target="_blank"
        >
          <div className="min-w-0">
            <h3 className="font-semibold text-base text-gray-900 leading-snug tracking-tight transition-colors group-hover:text-primary dark:text-white">
              {item.title}
            </h3>
            <p className="mt-0.5 line-clamp-1 text-gray-500 text-sm dark:text-gray-400">
              {item.description}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  className="inline-flex items-center rounded border border-gray-200 px-1.5 py-0.5 text-[0.7rem] text-gray-500 dark:border-gray-700 dark:text-gray-400"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="text-gray-600 text-sm dark:text-gray-300">
            {item.level}
          </div>
          <div className="text-gray-600 text-sm dark:text-gray-300">
            {item.type}
          </div>
          <div className="whitespace-nowrap text-gray-500 text-sm md:text-right dark:text-gray-400">
            {item.date}
          </div>
        </Link>
      ))}
    </div>
  );
}

// Each goal card previews one example from its bucket (the newest) so the
// overview features an example per goal instead of a single hero.
function LevelNav({ gridItems }: { gridItems: ExampleItem[] }) {
  return (
    <nav className="mb-8 grid gap-4 sm:grid-cols-3">
      {LEVELS.map((meta, idx) => {
        const levelItems = gridItems.filter(
          (item) => item.level === meta.level
        );
        const example = levelItems[0];
        if (!example) {
          return null;
        }
        const Icon = LEVEL_ICONS[meta.level];
        return (
          <div
            className="goal-pulse-card flex h-full flex-col rounded-xl border border-gray-200 bg-white/60 bg-gradient-to-br from-primary/[0.08] to-transparent p-5 dark:border-gray-700 dark:bg-white/[0.02] dark:from-primary/[0.07]"
            key={meta.level}
            style={{ animationDelay: `${idx * PULSE_STAGGER_S}s` }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-medium text-gray-400 text-xs uppercase tracking-wide dark:text-gray-500">
                {meta.tier}
              </span>
            </div>
            <h3 className="font-semibold text-gray-900 text-xl tracking-tight dark:text-white">
              {meta.level}
            </h3>
            <p className="mt-2 mb-4 text-gray-500 text-sm leading-relaxed dark:text-gray-400">
              {meta.outcome}
            </p>
            <Link
              className="group/ex mt-auto flex min-h-[4.75rem] items-center gap-2.5 rounded-lg border border-gray-200/80 bg-white/50 p-2.5 transition-colors hover:border-primary/40 dark:border-gray-700/70 dark:bg-white/[0.03]"
              href={example.href}
              onClick={() =>
                posthog.capture("Sample app clicked", {
                  app_title: example.title,
                  app_href: example.href,
                  tags: example.tags,
                  opens_in_new_tab: true,
                  featured: true,
                })
              }
              target="_blank"
            >
              {example.image && (
                <img
                  alt={example.title}
                  className="h-10 w-10 shrink-0 rounded-md object-cover"
                  height={80}
                  src={example.image}
                  width={80}
                />
              )}
              <span className="min-w-0 flex-1 font-medium text-gray-900 text-sm leading-snug transition-colors group-hover/ex:text-primary dark:text-white">
                {example.title}
              </span>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}

function Results({
  view,
  grouped,
  gridItems,
  visibleCount,
  total,
  clear,
}: {
  view: "grid" | "list";
  grouped: boolean;
  gridItems: ExampleItem[];
  visibleCount: number;
  total: number;
  clear: () => void;
}) {
  const hasCards = gridItems.length > 0;
  const showFlatGrid = !grouped && view === "grid" && hasCards;
  const showList = view === "list" && hasCards;

  return (
    <div>
      <p className="mt-4 text-gray-500 text-sm dark:text-gray-400">
        {visibleCount === total
          ? `${total} examples`
          : `${visibleCount} of ${total} examples`}
      </p>

      {grouped && <LevelSections gridItems={gridItems} />}
      {showFlatGrid && <CardGrid items={gridItems} />}
      {showList && <ListView items={gridItems} />}

      {visibleCount === 0 && (
        <div className="mt-8 rounded-lg border border-gray-200 border-dashed p-10 text-center text-gray-500 text-sm dark:border-gray-700 dark:text-gray-400">
          No examples match your filters.{" "}
          <button
            className="text-primary underline underline-offset-2"
            onClick={clear}
            type="button"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}

export function ExamplesGallery() {
  const items = useMemo(
    () => [...EXAMPLES].sort((a, b) => sortKey(b.date) - sortKey(a.date)),
    []
  );
  const groups = useMemo(() => buildGroups(items), [items]);

  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Set<string>>(new Set());
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showMore, setShowMore] = useState(false);

  // Goal isn't a filter chip (it's the grouping + jump nav), so every facet
  // here is "secondary" and lives behind the Filters disclosure.
  const secondaryActiveCount = active.size;

  const toggle = (value: string) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  };

  const clear = () => {
    setActive(new Set());
    setQuery("");
  };

  const visible = useMemo(
    () => filterItems(items, query, active),
    [items, query, active]
  );

  const hasFilters = active.size > 0 || query.trim() !== "";

  const gridItems = visible;

  // Default browse state groups cards into outcome buckets so people can find
  // the right starting point. Filtering/searching collapses to a flat result
  // set (grouping by level no longer helps once you've narrowed).
  const grouped = view === "grid" && !hasFilters;

  return (
    <div className="mt-8">
      {grouped && <LevelNav gridItems={gridItems} />}

      <div className="border-gray-200 border-b pb-4 dark:border-gray-800">
        <Controls
          clear={clear}
          hasFilters={hasFilters}
          hasSecondary={groups.length > 0}
          query={query}
          secondaryActiveCount={secondaryActiveCount}
          setQuery={setQuery}
          setShowMore={setShowMore}
          setView={setView}
          showMore={showMore}
          view={view}
        />
        {showMore && groups.length > 0 && (
          <SecondaryFilters active={active} groups={groups} toggle={toggle} />
        )}
      </div>

      <Results
        clear={clear}
        gridItems={gridItems}
        grouped={grouped}
        total={items.length}
        view={view}
        visibleCount={visible.length}
      />
    </div>
  );
}
