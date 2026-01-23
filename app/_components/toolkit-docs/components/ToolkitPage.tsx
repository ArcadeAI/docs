"use client";

import { KeyRound } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

import ScopePicker from "../../scope-picker";
import ToolFooter from "../../tool-footer";
import { AvailableToolsTable, toToolAnchorId } from "./AvailableToolsTable";
import { DocumentationChunkRenderer, hasChunksAt } from "./DocumentationChunkRenderer";
import { ToolkitHeader } from "./ToolkitHeader";
import { ToolSection } from "./ToolSection";
import type { ToolkitPageProps, ToolDefinition, ToolkitCategory } from "../types";

export function buildPipPackageName(toolkitId: string): string {
  const normalized = toolkitId.toLowerCase().replace(/[^a-z0-9]+/g, "_");
  return `arcade_${normalized}`;
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
    <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
      <a className="hover:text-brand-accent" href="/en/resources">
        Resources
      </a>
      <span className="text-muted-foreground/40">›</span>
      <a className="hover:text-brand-accent" href="/en/resources/integrations">
        Integrations
      </a>
      <span className="text-muted-foreground/40">›</span>
      <span className="text-muted-foreground">{toTitleCaseCategory(category)}</span>
      <span className="text-muted-foreground/40">›</span>
      <span className="font-medium text-text-color">{label}</span>
    </nav>
  );
}

/**
 * Right sidebar that lists the tools on the page.
 * Kept fixed and flush to the window edge, without narrowing main content.
 * Auto-scrolls and highlights the currently visible section.
 */
function ToolsOnThisPage({ tools }: { tools: ToolDefinition[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Build list of all section IDs to observe
  const sectionIds = useMemo(() => {
    const ids = ["available-tools"];
    for (const tool of tools) {
      ids.push(toToolAnchorId(tool.qualifiedName));
    }
    ids.push("get-building");
    return ids;
  }, [tools]);

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

  // Auto-scroll sidebar to keep active item visible
  useEffect(() => {
    if (activeId && sidebarRef.current) {
      const activeItem = itemRefs.current.get(activeId);
      if (activeItem) {
        const sidebar = sidebarRef.current;
        const itemTop = activeItem.offsetTop;
        const itemHeight = activeItem.offsetHeight;
        const sidebarScrollTop = sidebar.scrollTop;
        const sidebarHeight = sidebar.clientHeight;

        // Check if item is outside visible area
        if (itemTop < sidebarScrollTop + 60) {
          sidebar.scrollTo({ top: Math.max(0, itemTop - 60), behavior: "smooth" });
        } else if (itemTop + itemHeight > sidebarScrollTop + sidebarHeight - 60) {
          sidebar.scrollTo({
            top: itemTop + itemHeight - sidebarHeight + 60,
            behavior: "smooth",
          });
        }
      }
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
    <aside
      className="fixed right-0 top-28 hidden h-[calc(100vh-7rem)] w-72 overflow-y-auto border-l border-neutral-dark-high/30 bg-neutral-dark/40 px-6 py-6 xl:block 2xl:w-80"
      ref={sidebarRef}
    >
      <h2 className="text-sm font-semibold text-text-color">On this page</h2>
      <div className="mt-4 space-y-2">
        <a
          className={`block text-sm transition-colors ${getLinkClasses("available-tools")}`}
          href="#available-tools"
          ref={(el) => setItemRef("available-tools", el)}
        >
          Available tools
        </a>
        <div className="space-y-1">
          {tools.map((tool) => {
            const hasSecrets =
              (tool.secretsInfo?.length ?? 0) > 0 || (tool.secrets?.length ?? 0) > 0;
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
        <a
          className={`block pt-2 text-sm transition-colors ${getLinkClasses("get-building")}`}
          href="#get-building"
          ref={(el) => setItemRef("get-building", el)}
        >
          Get building
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
    withScopes: tools.filter((tool) => (tool.auth?.scopes ?? []).length > 0).length,
    withSecrets: tools.filter(
      (tool) =>
        (tool.secretsInfo?.length ?? 0) > 0 || (tool.secrets?.length ?? 0) > 0
    ).length,
  };
  const showToolFooter = !hasChunksAt(data.documentationChunks, "footer", "replace");
  const pipPackageName =
    data.pipPackageName ?? buildPipPackageName(data.id);

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
      <BreadcrumbBar category={data.metadata.category} label={data.label} />
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-text-color">
        {data.label}
      </h1>
      <DocumentationChunkRenderer
        chunks={data.documentationChunks}
        location="header"
        position="before"
      />
      <ToolkitHeader
        auth={data.auth}
        description={data.description}
        id={data.id}
        label={data.label}
        metadata={data.metadata}
        toolStats={toolStats}
        version={data.version}
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

      <div className="mt-10 scroll-mt-20" id="available-tools">
        <h2 className="flex items-center gap-3 text-2xl font-semibold">
          <span className="rounded-lg bg-brand-accent/10 p-2">
            <svg className="h-5 w-5 text-brand-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Available tools
          <span className="ml-2 rounded-full bg-neutral-dark-medium px-3 py-1 text-sm font-normal text-muted-foreground">
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
    </div>
  );
}

export default ToolkitPage;
