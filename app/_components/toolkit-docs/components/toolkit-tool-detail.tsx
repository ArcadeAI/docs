"use client";

import ScopePicker from "../../scope-picker";
import type { ToolSummary } from "../types";
import { toToolAnchorId } from "./available-tools-table";
import { ToolSection } from "./tool-section";

// Must match TOOLKIT_PAGE_SELECTED_TOOLS_LINK.id in toolkit-page.tsx — the
// sidebar's "Selected tools" nav link points at this anchor.
const SELECTED_TOOLS_SECTION_ID = "selected-tools";

type ToolkitToolDetailProps = {
  tools: ToolSummary[];
  toolkitId: string;
  selectedTools: Set<string>;
  shouldShowSelection: boolean;
  activeHash: string;
  onToggleSelection: (toolName: string) => void;
  onScopeSelectionChange: (toolNames: string[]) => void;
};

/**
 * The per-tool detail area (scope picker + tool sections). Loaded via
 * `next/dynamic({ ssr: false })`, so none of it is server-rendered — the server
 * HTML carries only the crawlable summary (Available Tools table + sidebar),
 * which keeps large toolkit pages under Googlebot's 2 MB crawl limit. Per-tool
 * detail is fetched on expand.
 */
export function ToolkitToolDetail({
  tools,
  toolkitId,
  selectedTools,
  shouldShowSelection,
  activeHash,
  onToggleSelection,
  onScopeSelectionChange,
}: ToolkitToolDetailProps) {
  const selectionTools = tools.map((tool) => {
    const secrets =
      (tool.secrets ?? []).length > 0
        ? (tool.secrets ?? [])
        : (tool.secretsInfo ?? []).map((secret) => secret.name);
    return {
      name: tool.name,
      scopes: tool.auth?.scopes ?? [],
      secrets,
      qualifiedName: tool.qualifiedName,
      fullyQualifiedName: tool.fullyQualifiedName,
      description: tool.description,
    };
  });

  return (
    <>
      {shouldShowSelection && (
        <section className="mt-10 scroll-mt-20" id={SELECTED_TOOLS_SECTION_ID}>
          <ScopePicker
            onSelectedToolsChange={onScopeSelectionChange}
            selectedTools={Array.from(selectedTools)}
            toolkitId={toolkitId}
            tools={selectionTools}
          />
        </section>
      )}

      {tools.map((tool) => (
        <ToolSection
          forceExpanded={toToolAnchorId(tool.qualifiedName) === activeHash}
          isSelected={selectedTools.has(tool.name)}
          key={tool.qualifiedName}
          onToggleSelection={onToggleSelection}
          showSelection={shouldShowSelection}
          tool={tool}
          toolkitId={toolkitId}
        />
      ))}
    </>
  );
}
