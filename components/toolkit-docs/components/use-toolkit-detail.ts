"use client";

import { useEffect, useState } from "react";
import type { ToolDefinition, ToolkitData } from "../types";

/**
 * Lazy per-tool detail loading.
 *
 * Toolkit reference pages ship only a lightweight per-tool summary in the
 * initial HTML (see `toToolkitSummary`); the heavy fields — parameters, output
 * schema and code example — are fetched on demand when a tool section expands,
 * from the existing `/api/toolkit-data/[toolkitId]` route. This keeps the
 * server-rendered document under Googlebot's 2 MB crawl limit.
 *
 * One fetch per toolkit per page (the full toolkit JSON), shared across every
 * tool section via a module-level cache and keyed by `qualifiedName`.
 */
type DetailMap = Map<string, ToolDefinition>;

const detailCache = new Map<string, Promise<DetailMap>>();

export function loadToolkitDetail(toolkitId: string): Promise<DetailMap> {
  const cached = detailCache.get(toolkitId);
  if (cached) {
    return cached;
  }

  const promise = fetch(`/api/toolkit-data/${encodeURIComponent(toolkitId)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load toolkit detail (${response.status})`);
      }
      return response.json() as Promise<ToolkitData>;
    })
    .then((data) => {
      const map: DetailMap = new Map();
      for (const tool of data.tools ?? []) {
        map.set(tool.qualifiedName, tool);
      }
      return map;
    })
    .catch((error) => {
      // Evict so a remounted/retried section can fetch again.
      detailCache.delete(toolkitId);
      throw error;
    });

  detailCache.set(toolkitId, promise);
  return promise;
}

export type ToolDetailState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; tool: ToolDefinition };

export function useToolDetail(
  toolkitId: string,
  qualifiedName: string,
  enabled: boolean,
  reloadToken = 0
): ToolDetailState {
  // Start idle — nothing is loading until a section is actually enabled
  // (expanded). Reporting "loading" while disabled would misrepresent the state.
  const [state, setState] = useState<ToolDetailState>({ status: "idle" });

  useEffect(() => {
    if (!enabled) {
      setState({ status: "idle" });
      return;
    }

    let active = true;
    setState({ status: "loading" });

    // A bumped reloadToken is a manual retry: drop any cached (failed) result so
    // the load actually re-fetches.
    if (reloadToken > 0) {
      detailCache.delete(toolkitId);
    }

    loadToolkitDetail(toolkitId)
      .then((map) => {
        if (!active) {
          return;
        }
        const tool = map.get(qualifiedName);
        setState(tool ? { status: "ready", tool } : { status: "error" });
      })
      .catch(() => {
        if (active) {
          setState({ status: "error" });
        }
      });

    return () => {
      active = false;
    };
  }, [toolkitId, qualifiedName, enabled, reloadToken]);

  return state;
}
