"use client";

import { ArrowDown, ArrowUp, KeyRound } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import ScopePicker from "../../scope-picker";
import ToolFooter from "../../tool-footer";
import type {
  ToolDefinition,
  ToolkitCategory,
  ToolkitPageProps,
  ToolkitType,
} from "../types";
import { AvailableToolsTable, toToolAnchorId } from "./AvailableToolsTable";
import {
  DocumentationChunkRenderer,
  hasChunksAt,
} from "./documentation-chunk-renderer";
import { ToolSection } from "./tool-section";
import { ToolkitHeader } from "./toolkit-header";

/**
 * Floating buttons to scroll to top/bottom of the page.
 * Only shows when user has scrolled past a threshold.
 */
function ScrollToButtons() {
  const [showButtons, setShowButtons] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show buttons after scrolling 300px
      setShowButtons(scrollTop > 300);

      // Check if near bottom (within 100px)
      setAtBottom(scrollTop + windowHeight >= documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!showButtons) {
    return null;
  }

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-2 xl:right-80 2xl:right-[22rem]">
      <button
        aria-label="Scroll to top"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-dark-high bg-neutral-dark/90 text-muted-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-neutral-dark hover:text-text-color"
        onClick={scrollToTop}
        title="Scroll to top"
        type="button"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      {!atBottom && (
        <button
          aria-label="Scroll to bottom"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-dark-high bg-neutral-dark/90 text-muted-foreground shadow-lg backdrop-blur-sm transition-all hover:bg-neutral-dark hover:text-text-color"
          onClick={scrollToBottom}
          title="Scroll to bottom"
          type="button"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export function buildPipPackageName(toolkitId: string): string {
  const normalized = toolkitId.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  return `arcade_${normalized}`;
}

export const TOOLKIT_PAGE_OVERVIEW_LINK = {
  id: "overview",
  label: "Overview",
  href: "#overview",
} as const;

export const TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK = {
  id: "available-tools",
  label: "Available tools",
  href: "#available-tools",
} as const;

export const TOOLKIT_PAGE_GET_BUILDING_LINK = {
  id: "get-building",
  label: "Get building",
  href: "#get-building",
} as const;

export function buildObservedSectionIds(
  tools: ReadonlyArray<{ qualifiedName: string }>
): string[] {
  const ids: string[] = [
    TOOLKIT_PAGE_OVERVIEW_LINK.id,
    TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.id,
  ];

  for (const tool of tools) {
    ids.push(toToolAnchorId(tool.qualifiedName));
  }

  ids.push(TOOLKIT_PAGE_GET_BUILDING_LINK.id);
  return ids;
}

function inferToolkitType(toolkitId: string, type: ToolkitType): ToolkitType {
  if (toolkitId.toLowerCase().endsWith("api") && type === "arcade") {
    return "arcade_starter";
  }
  return type;
}

function toTitleCaseCategory(category: ToolkitCategory): string {
  return category
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/**
 * Breadcrumb bar like older integration pages.
 *
 * Note: preview pages are dynamic, so we render this in-page.
 */
function BreadcrumbBar({
  label,
  category,
}: {
  label: string;
  category: ToolkitCategory;
}) {
  return (
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
      <a className="hover:text-brand-accent" href="/en/resources">
        Resources
      </a>
      <span className="text-muted-foreground/40">›</span>
      <a className="hover:text-brand-accent" href="/en/resources/integrations">
        Integrations
      </a>
      <span className="text-muted-foreground/40">›</span>
      <span className="text-muted-foreground">
        {toTitleCaseCategory(category)}
      </span>
      <span className="text-muted-foreground/40">›</span>
      <span className="font-medium text-text-color">{label}</span>
    </nav>
  );
}

/**
 * Right sidebar that lists the tools on the page.
 * Structure: Fixed header/footer with scrollable middle tool list.
 * Auto-scrolls and highlights the currently visible section.
 */
function ToolsOnThisPage({ tools }: { tools: ToolDefinition[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const toolListRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [query, setQuery] = useState("");

  // Build list of all section IDs to observe
  const sectionIds = useMemo(() => {
    return buildObservedSectionIds(tools);
  }, [tools]);

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) {
      return tools;
    }
    return tools.filter((tool) => tool.qualifiedName.toLowerCase().includes(q));
  }, [tools, query]);

  // Intersection Observer to track visible sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible section (from top)
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    // Observe all sections
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  // Auto-scroll tool list to keep active item visible
  useEffect(() => {
    if (!(activeId && toolListRef.current)) {
      return;
    }

    const activeItem = itemRefs.current.get(activeId);
    if (!activeItem) {
      return;
    }

    const container = toolListRef.current;
    const itemTop = activeItem.offsetTop - container.offsetTop;
    const itemHeight = activeItem.offsetHeight;
    const containerScrollTop = container.scrollTop;
    const containerHeight = container.clientHeight;

    // Check if item is outside visible area
    if (itemTop < containerScrollTop + 20) {
      container.scrollTo({
        top: Math.max(0, itemTop - 20),
        behavior: "smooth",
      });
    } else if (itemTop + itemHeight > containerScrollTop + containerHeight - 20) {
      container.scrollTo({
        top: itemTop + itemHeight - containerHeight + 20,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const setItemRef = useCallback((id: string, el: HTMLAnchorElement | null) => {
    if (el) {
      itemRefs.current.set(id, el);
    } else {
      itemRefs.current.delete(id);
    }
  }, []);

  const getLinkClasses = (id: string) => {
    const isActive = activeId === id;
    return isActive
      ? "text-brand-accent font-medium border-l-2 border-brand-accent -ml-[2px] pl-[14px]"
      : "text-muted-foreground hover:text-brand-accent";
  };

  return (
    <aside className="fixed top-28 right-0 hidden h-[calc(100vh-7rem)] w-72 flex-col border-neutral-dark-high/30 border-l bg-neutral-dark/40 xl:flex 2xl:w-80">
      {/* Fixed header section */}
      <div className="shrink-0 border-neutral-dark-high/20 border-b px-6 pt-6 pb-4">
        <h2 className="font-semibold text-sm text-text-color">On this page</h2>
        <div className="mt-4 space-y-3">
          <input
            aria-label="Search tools on this page"
            className="w-full rounded-lg border border-neutral-dark-high bg-neutral-dark/60 px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground/70 focus:border-brand-accent focus:outline-none"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tools..."
            type="search"
            value={query}
          />
          <div className="text-muted-foreground text-xs">
            {filteredTools.length} of {tools.length} tools
          </div>
        </div>
        {/* Navigation links - fixed above scrollable list */}
        <div className="mt-4 space-y-2">
          <a
            className={`block text-sm transition-colors ${getLinkClasses(TOOLKIT_PAGE_OVERVIEW_LINK.id)}`}
            href={TOOLKIT_PAGE_OVERVIEW_LINK.href}
            ref={(el) => setItemRef(TOOLKIT_PAGE_OVERVIEW_LINK.id, el)}
          >
            {TOOLKIT_PAGE_OVERVIEW_LINK.label}
          </a>
          <a
            className={`block text-sm transition-colors ${getLinkClasses(TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.id)}`}
            href={TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.href}
            ref={(el) => setItemRef(TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.id, el)}
          >
            {TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.label}
          </a>
        </div>
      </div>

      {/* Scrollable tool list */}
      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-3" ref={toolListRef}>
        <div className="space-y-1">
          {filteredTools.map((tool) => {
            const hasSecrets =
              (tool.secretsInfo?.length ?? 0) > 0 ||
              (tool.secrets?.length ?? 0) > 0;
            const toolId = toToolAnchorId(tool.qualifiedName);
            return (
              <a
                className={`flex items-center gap-2 py-1 pl-3 text-sm transition-colors ${getLinkClasses(toolId)}`}
                href={`#${toolId}`}
                key={tool.qualifiedName}
                ref={(el) => setItemRef(toolId, el)}
                title={tool.qualifiedName}
              >
                <span className="truncate">{tool.qualifiedName}</span>
                {hasSecrets && (
                  <KeyRound className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* Fixed footer section */}
      <div className="shrink-0 border-neutral-dark-high/20 border-t px-6 py-4">
        <a
          className={`block text-sm transition-colors ${getLinkClasses(TOOLKIT_PAGE_GET_BUILDING_LINK.id)}`}
          href={TOOLKIT_PAGE_GET_BUILDING_LINK.href}
          ref={(el) => setItemRef(TOOLKIT_PAGE_GET_BUILDING_LINK.id, el)}
        >
          {TOOLKIT_PAGE_GET_BUILDING_LINK.label}
        </a>
      </div>
    </aside>
  );
}

/**
 * ToolkitPage
 *
 * Composes the full toolkit documentation page from JSON data.
 */
export function ToolkitPage({ data }: ToolkitPageProps) {
  const rawTools = data.tools ?? [];
  // Temporary UI fallback for toolkit-level secrets that are documented but not yet
  // emitted by the Engine tool metadata endpoint.
  //
  // Example: GitHub toolkit docs require `GITHUB_SERVER_URL` for all tools.
  const toolkitSecretOverrides =
    data.id.toLowerCase() === "github" ? (["GITHUB_SERVER_URL"] as const) : [];
  const tools = rawTools.map((tool) => {
    if (toolkitSecretOverrides.length === 0) {
      return tool;
    }
    return {
      ...tool,
      secrets: Array.from(
        new Set([...(tool.secrets ?? []), ...toolkitSecretOverrides])
      ),
    };
  });
  const [selectedTools, setSelectedTools] = useState<Set<string>>(new Set());
  const selectionTools = tools.map((tool) => {
    const secrets =
      (tool.secrets ?? []).length > 0
        ? (tool.secrets ?? [])
        : (tool.secretsInfo ?? []).map((secret) => secret.name);

    return {
      name: tool.name,
      scopes: tool.auth?.scopes ?? [],
      secrets,
    };
  });
  const shouldShowSelection = tools.length > 0;

  // Compute tool stats
  const toolStats = {
    total: tools.length,
    withScopes: tools.filter((tool) => (tool.auth?.scopes ?? []).length > 0)
      .length,
    withSecrets: tools.filter(
      (tool) =>
        (tool.secretsInfo?.length ?? 0) > 0 || (tool.secrets?.length ?? 0) > 0
    ).length,
  };
  const showToolFooter = !hasChunksAt(
    data.documentationChunks,
    "footer",
    "replace"
  );
  const pipPackageName = data.pipPackageName ?? buildPipPackageName(data.id);
  const metadata = useMemo(
    () => ({
      ...data.metadata,
      type: inferToolkitType(data.id, data.metadata.type),
    }),
    [data.id, data.metadata]
  );

  const handleScopeSelectionChange = (toolNames: string[]) => {
    setSelectedTools(new Set(toolNames));
  };

  const toggleToolSelection = (toolName: string) => {
    setSelectedTools((prevSelected) => {
      const nextSelected = new Set(prevSelected);
      if (nextSelected.has(toolName)) {
        nextSelected.delete(toolName);
      } else {
        nextSelected.add(toolName);
      }
      return nextSelected;
    });
  };

  return (
    <div className="w-full">
      {/* Overview section */}
      <section className="scroll-mt-20" id={TOOLKIT_PAGE_OVERVIEW_LINK.id}>
        <BreadcrumbBar category={data.metadata.category} label={data.label} />
        <h1 className="mb-6 font-bold text-4xl text-text-color tracking-tight">
          {data.label}
        </h1>
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="header"
          position="before"
        />
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="description"
          position="before"
        />
        <ToolkitHeader
          auth={data.auth}
          description={data.description}
          id={data.id}
          label={data.label}
          metadata={metadata}
          toolStats={toolStats}
          version={data.version}
        />
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="description"
          position="after"
        />
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="header"
          position="replace"
        />
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="header"
          position="after"
        />

        {data.summary && (
          <div className="prose prose-sm prose-invert mt-6 max-w-none text-text-color/90">
            <ReactMarkdown>{data.summary}</ReactMarkdown>
          </div>
        )}

        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="auth"
          position="before"
        />
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="auth"
          position="after"
        />
      </section>

      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="before_available_tools"
        position="before"
      />
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="before_available_tools"
        position="after"
      />

      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="custom_section"
        position="before"
      />
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="custom_section"
        position="after"
      />

      <div className="mt-10 scroll-mt-20" id="available-tools">
        <h2 className="flex items-center gap-3 font-semibold text-2xl">
          <span className="rounded-lg bg-brand-accent/10 p-2">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-brand-accent"
              fill="none"
              focusable="false"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Available tools
          <span className="ml-2 rounded-full bg-neutral-dark-medium px-3 py-1 font-normal text-muted-foreground text-sm">
            {tools.length}
          </span>
        </h2>
      </div>
      <AvailableToolsTable
        onToggleSelection={toggleToolSelection}
        selectedTools={selectedTools}
        showSelection={shouldShowSelection}
        tools={tools.map((tool) => ({
          name: tool.name,
          qualifiedName: tool.qualifiedName,
          description: tool.description,
          secrets: tool.secrets,
          secretsInfo: tool.secretsInfo,
          scopes: tool.auth?.scopes ?? [],
        }))}
      />

      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="after_available_tools"
        position="before"
      />
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="after_available_tools"
        position="after"
      />

      {shouldShowSelection && (
        <section className="mt-10">
          <ScopePicker
            onSelectedToolsChange={handleScopeSelectionChange}
            selectedTools={Array.from(selectedTools)}
            tools={selectionTools}
          />
        </section>
      )}

      {tools.map((tool) => (
        <ToolSection
          isSelected={selectedTools.has(tool.name)}
          key={tool.qualifiedName}
          onToggleSelection={toggleToolSelection}
          showSelection={shouldShowSelection}
          tool={tool}
          toolkitId={data.id}
        />
      ))}

      <section className="mt-10 scroll-mt-20" id="get-building">
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="footer"
          position="before"
        />
        {showToolFooter && <ToolFooter pipPackageName={pipPackageName} />}
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="footer"
          position="replace"
        />
        <DocumentationChunkRenderer
          chunks={data.documentationChunks}
          location="footer"
          position="after"
        />
      </section>

      <ToolsOnThisPage tools={tools} />
      <ScrollToButtons />
    </div>
  );
}

export default ToolkitPage;
