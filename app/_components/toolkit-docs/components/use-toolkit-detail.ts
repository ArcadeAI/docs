"use client";

import { useEffect, useState } from "react";
import type { ToolDetail, ToolkitData } from "../types";

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
type DetailMap = Map<string, ToolDetail>;

const detailCache = new Map<string, Promise<DetailMap>>();

function loadToolkitDetail(toolkitId: string): Promise<DetailMap> {
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
        map.set(tool.qualifiedName, {
          parameters: tool.parameters,
          output: tool.output,
          codeExample: tool.codeExample,
        });
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
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; detail: ToolDetail };

export function useToolDetail(
  toolkitId: string,
  qualifiedName: string,
  enabled: boolean,
  reloadToken = 0
): ToolDetailState {
  const [state, setState] = useState<ToolDetailState>({ status: "loading" });

  useEffect(() => {
    if (!enabled) {
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
        const detail = map.get(qualifiedName);
        setState(detail ? { status: "ready", detail } : { status: "error" });
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
