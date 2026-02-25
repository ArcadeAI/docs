"use client";

import { Button } from "@arcadeai/design-system";
import { ArrowDown, ArrowUp, KeyRound } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import ScopePicker from "../../scope-picker";
import ToolFooter from "../../tool-footer";
import { getPackageName } from "../constants";

// Scroll detection thresholds
const SCROLL_SHOW_BUTTONS_THRESHOLD = 300;
const SCROLL_BOTTOM_THRESHOLD = 100;

// Intersection observer thresholds for TOC highlighting
const TOC_OBSERVER_THRESHOLD_MIN = 0.1;
const TOC_OBSERVER_THRESHOLD_MID = 0.5;

// Scroll padding for TOC item visibility
const TOC_SCROLL_PADDING = 20;

import type {
  ToolDefinition,
  ToolkitCategory,
  ToolkitPageProps,
  ToolkitType,
} from "../types";
import { AvailableToolsTable, toToolAnchorId } from "./available-tools-table";
import {
  DocumentationChunkRenderer,
  hasChunksAt,
  headerToAnchorId,
  sortChunksDeterministically,
} from "./documentation-chunk-renderer";
import { PageActionsBar } from "./page-actions";
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

      // Show buttons after scrolling past threshold
      setShowButtons(scrollTop > SCROLL_SHOW_BUTTONS_THRESHOLD);

      // Check if near bottom (within threshold)
      setAtBottom(
        scrollTop + windowHeight >= documentHeight - SCROLL_BOTTOM_THRESHOLD
      );
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
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-2 xl:right-80 2xl:right-80">
      <Button
        aria-label="Scroll to top"
        className="h-10 w-10 rounded-full shadow-lg backdrop-blur-sm"
        onClick={scrollToTop}
        size="sm"
        title="Scroll to top"
        variant="outline"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      {!atBottom && (
        <Button
          aria-label="Scroll to bottom"
          className="h-10 w-10 rounded-full shadow-lg backdrop-blur-sm"
          onClick={scrollToBottom}
          size="sm"
          title="Scroll to bottom"
          variant="outline"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}

export function buildPipPackageName(toolkitId: string): string {
  return getPackageName(toolkitId);
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

export const TOOLKIT_PAGE_SELECTED_TOOLS_LINK = {
  id: "selected-tools",
  label: "Selected tools",
  href: "#selected-tools",
} as const;

export const TOOLKIT_PAGE_GET_BUILDING_LINK = {
  id: "get-building",
  label: "Get building",
  href: "#get-building",
} as const;

// Regex for removing leading ## from headers (used for display label extraction)
const HEADER_PREFIX_REGEX = /^#+\s*/;

/**
 * Extracts section links from documentation chunks that have headers.
 * Chunks are sorted deterministically before extraction to ensure consistent TOC order.
 */
export function extractChunkSectionLinks(
  chunks: ReadonlyArray<{
    header?: string;
    priority?: number;
    content?: string;
  }>
): Array<{ id: string; label: string; href: string }> {
  const links: Array<{ id: string; label: string; href: string }> = [];
  const seenIds = new Set<string>();

  // Sort chunks deterministically before extracting links
  const sortedChunks = sortChunksDeterministically(
    chunks as Parameters<typeof sortChunksDeterministically>[0]
  );

  for (const chunk of sortedChunks) {
    if (chunk.header) {
      const id = headerToAnchorId(chunk.header);
      if (!seenIds.has(id)) {
        seenIds.add(id);
        links.push({
          id,
          label: chunk.header.replace(HEADER_PREFIX_REGEX, ""), // Remove ## prefix for display
          href: `#${id}`,
        });
      }
    }
  }

  return links;
}

export function buildObservedSectionIds(
  tools: ReadonlyArray<{ qualifiedName: string }>,
  documentationChunks: ReadonlyArray<{ header?: string }> = []
): string[] {
  const ids: string[] = [
    TOOLKIT_PAGE_OVERVIEW_LINK.id,
    TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.id,
    TOOLKIT_PAGE_SELECTED_TOOLS_LINK.id,
  ];

  // Add custom section IDs from documentation chunks
  const chunkSections = extractChunkSectionLinks(documentationChunks);
  for (const section of chunkSections) {
    ids.push(section.id);
  }

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
      <span className="font-medium text-foreground">{label}</span>
    </nav>
  );
}

/**
 * Right sidebar that lists the tools on the page.
 * Structure: Fixed header/footer with scrollable middle tool list.
 * Auto-scrolls and highlights the currently visible section.
 */
function ToolsOnThisPage({
  tools,
  selectedTools,
  documentationChunks = [],
}: {
  tools: ToolDefinition[];
  selectedTools: Set<string>;
  documentationChunks?: ReadonlyArray<{ header?: string }>;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const toolListRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [query, setQuery] = useState("");

  // Extract custom section links from documentation chunks
  const customSections = useMemo(
    () => extractChunkSectionLinks(documentationChunks),
    [documentationChunks]
  );

  // Build list of all section IDs to observe
  const sectionIds = useMemo(
    () => buildObservedSectionIds(tools, documentationChunks),
    [tools, documentationChunks]
  );

  const filteredTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) {
      return tools;
    }
    return tools.filter((tool) => tool.qualifiedName.toLowerCase().includes(q));
  }, [tools, query]);

  const selectedToolsList = useMemo(
    () => tools.filter((tool) => selectedTools.has(tool.name)),
    [tools, selectedTools]
  );

  // Intersection Observer to track visible sections
  useEffect(() => {
    // Track visibility state for all sections
    const visibleSections = new Map<string, number>();

    // Helper: find section closest to top of viewport
    const findClosestSection = (): string | null => {
      let closestId: string | null = null;
      let closestTop = Number.POSITIVE_INFINITY;

      for (const [id, top] of visibleSections) {
        if (top >= 0 && top < closestTop) {
          closestTop = top;
          closestId = id;
        }
      }

      // Fallback: use topmost visible section if none below viewport top
      if (!closestId && visibleSections.size > 0) {
        const sorted = [...visibleSections.entries()].sort(
          (a, b) => a[1] - b[1]
        );
        return sorted[0][0];
      }

      return closestId;
    };

    // Helper: update visibility map from observer entries
    const updateVisibilityMap = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visibleSections.set(entry.target.id, entry.boundingClientRect.top);
        } else {
          visibleSections.delete(entry.target.id);
        }
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        updateVisibilityMap(entries);
        const closestId = findClosestSection();
        if (closestId) {
          setActiveId(closestId);
        }
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: [0, TOC_OBSERVER_THRESHOLD_MIN, TOC_OBSERVER_THRESHOLD_MID],
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
    if (itemTop < containerScrollTop + TOC_SCROLL_PADDING) {
      container.scrollTo({
        top: Math.max(0, itemTop - TOC_SCROLL_PADDING),
        behavior: "smooth",
      });
    } else if (
      itemTop + itemHeight >
      containerScrollTop + containerHeight - TOC_SCROLL_PADDING
    ) {
      container.scrollTo({
        top: itemTop + itemHeight - containerHeight + TOC_SCROLL_PADDING,
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
    <aside className="fixed top-28 right-0 hidden w-80 flex-col border-muted/60 border-l bg-background xl:flex 2xl:w-80 dark:border-neutral-dark-high/30 dark:bg-neutral-dark/40">
      {/* Header section */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="font-semibold text-foreground text-sm">On this page</h2>
        <div className="mt-4 space-y-3">
          <input
            aria-label="Search tools on this page"
            className="w-full rounded-lg border border-muted/60 bg-background px-3 py-2 text-sm transition-colors placeholder:text-muted-foreground/70 focus:border-brand-accent focus:outline-none dark:border-neutral-dark-high dark:bg-neutral-dark/60"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search tools..."
            type="search"
            value={query}
          />
          <div className="text-muted-foreground text-xs">
            {filteredTools.length} of {tools.length} tools
          </div>
        </div>
        {/* Navigation links */}
        <div className="mt-4 space-y-2">
          <a
            className={`block text-sm transition-colors ${getLinkClasses(TOOLKIT_PAGE_OVERVIEW_LINK.id)}`}
            href={TOOLKIT_PAGE_OVERVIEW_LINK.href}
            ref={(el) => setItemRef(TOOLKIT_PAGE_OVERVIEW_LINK.id, el)}
          >
            {TOOLKIT_PAGE_OVERVIEW_LINK.label}
          </a>
          {/* Custom documentation sections */}
          {customSections.map((section) => (
            <a
              className={`block pl-3 text-sm transition-colors ${getLinkClasses(section.id)}`}
              href={section.href}
              key={section.id}
              ref={(el) => setItemRef(section.id, el)}
            >
              {section.label}
            </a>
          ))}
          <a
            className={`block text-sm transition-colors ${getLinkClasses(TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.id)}`}
            href={TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.href}
            ref={(el) => setItemRef(TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.id, el)}
          >
            {TOOLKIT_PAGE_AVAILABLE_TOOLS_LINK.label}
          </a>
          <a
            className={`block text-sm transition-colors ${getLinkClasses(TOOLKIT_PAGE_SELECTED_TOOLS_LINK.id)}`}
            href={TOOLKIT_PAGE_SELECTED_TOOLS_LINK.href}
            ref={(el) => setItemRef(TOOLKIT_PAGE_SELECTED_TOOLS_LINK.id, el)}
          >
            {TOOLKIT_PAGE_SELECTED_TOOLS_LINK.label} ({selectedToolsList.length}
            )
          </a>
        </div>
      </div>

      {/* Divider + Scrollable tool list (constrained height) */}
      <div className="border-muted/60 border-t dark:border-neutral-dark-high/30">
        <div
          className="max-h-[50vh] overflow-y-auto px-6 py-3"
          ref={toolListRef}
        >
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
      </div>

      {/* Footer section */}
      <div className="border-muted/60 border-t px-6 py-4 dark:border-neutral-dark-high/20">
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
  useEffect(() => {
    document.documentElement.dataset.pageKind = "toolkit";
    return () => {
      delete document.documentElement.dataset.pageKind;
    };
  }, []);

  const tools = data.tools ?? [];
  const documentationChunks = data.documentationChunks ?? [];
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
      // Full tool definition for enhanced copy functionality
      qualifiedName: tool.qualifiedName,
      fullyQualifiedName: tool.fullyQualifiedName,
      description: tool.description,
      parameters: tool.parameters,
      output: tool.output,
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
  const showToolFooter = !hasChunksAt(documentationChunks, "footer", "replace");
  const pipPackageName = data.pipPackageName ?? buildPipPackageName(data.id);
  const metadata = useMemo(
    () => ({
      ...data.metadata,
      type: inferToolkitType(data.id, data.metadata?.type),
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
        <BreadcrumbBar category={data.metadata?.category} label={data.label} />
        <PageActionsBar toolkitId={data.id} />
        <h1 className="mb-6 font-bold text-4xl text-foreground tracking-tight">
          {data.label}
        </h1>
        <DocumentationChunkRenderer
          chunks={documentationChunks}
          location="header"
          position="before"
        />
        <DocumentationChunkRenderer
          chunks={documentationChunks}
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
          chunks={documentationChunks}
          location="description"
          position="after"
        />
        <DocumentationChunkRenderer
          chunks={documentationChunks}
          location="header"
          position="replace"
        />
        <DocumentationChunkRenderer
          chunks={documentationChunks}
          location="header"
          position="after"
        />

        {data.summary && (
          <div className="prose prose-sm dark:prose-invert mt-6 max-w-none text-foreground">
            <ReactMarkdown>{data.summary}</ReactMarkdown>
          </div>
        )}

        <DocumentationChunkRenderer
          chunks={documentationChunks}
          location="auth"
          position="before"
        />
        <DocumentationChunkRenderer
          chunks={documentationChunks}
          location="auth"
          position="after"
        />
      </section>

      <DocumentationChunkRenderer
        chunks={documentationChunks}
        location="before_available_tools"
        position="before"
      />
      <DocumentationChunkRenderer
        chunks={documentationChunks}
        location="before_available_tools"
        position="after"
      />

      <DocumentationChunkRenderer
        chunks={documentationChunks}
        location="custom_section"
        position="before"
      />
      <DocumentationChunkRenderer
        chunks={documentationChunks}
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
          <span className="ml-2 text-muted-foreground text-sm">
            ({tools.length})
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
        chunks={documentationChunks}
        location="after_available_tools"
        position="before"
      />
      <DocumentationChunkRenderer
        chunks={documentationChunks}
        location="after_available_tools"
        position="after"
      />

      {shouldShowSelection && (
        <section
          className="mt-10 scroll-mt-20"
          id={TOOLKIT_PAGE_SELECTED_TOOLS_LINK.id}
        >
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
        />
      ))}

      <section className="mt-10 scroll-mt-20" id="get-building">
        <DocumentationChunkRenderer
          chunks={documentationChunks}
          location="footer"
          position="before"
        />
        {showToolFooter && <ToolFooter pipPackageName={pipPackageName} />}
        <DocumentationChunkRenderer
          chunks={documentationChunks}
          location="footer"
          position="replace"
        />
        <DocumentationChunkRenderer
          chunks={documentationChunks}
          location="footer"
          position="after"
        />
      </section>

      <ToolsOnThisPage
        documentationChunks={documentationChunks}
        selectedTools={selectedTools}
        tools={tools}
      />
      <ScrollToButtons />
    </div>
  );
}

export default ToolkitPage;
