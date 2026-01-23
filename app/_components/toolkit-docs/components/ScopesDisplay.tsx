"use client";

import { ShieldCheck } from "lucide-react";

import type { ScopesDisplayProps } from "../types";

/**
 * Normalizes scope values by trimming and removing duplicates.
 */
export function normalizeScopes(scopes: string[]): string[] {
  const uniqueScopes = new Set<string>();

  for (const scope of scopes) {
    const trimmed = scope.trim();
    if (trimmed.length > 0) {
      uniqueScopes.add(trimmed);
    }
  }

  return Array.from(uniqueScopes);
}

function ScopesInline({ scopes }: { scopes: string[] }) {
  if (scopes.length === 0) {
    return (
      <span className="text-sm text-muted-foreground/70">
        None required
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {scopes.map((scope) => (
        <code
          className="max-w-[220px] truncate rounded-md border border-red-400/30 bg-red-500/10 px-2 py-1 text-xs text-red-300"
          dir="rtl"
          key={scope}
          title={scope}
        >
          {scope}
        </code>
      ))}
    </div>
  );
}

function ScopesList({ scopes }: { scopes: string[] }) {
  if (scopes.length === 0) {
    return (
      <p className="text-sm text-muted-foreground/70">None required</p>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {scopes.map((scope) => (
        <code
          className="max-w-full break-all rounded-md border border-red-400/30 bg-red-500/10 px-2.5 py-1.5 text-xs text-red-300"
          key={scope}
          title={scope}
        >
          {scope}
        </code>
      ))}
    </div>
  );
}

/**
 * ScopesDisplay
 *
 * Renders OAuth scopes inline or inside a callout.
 */
export function ScopesDisplay({
  scopes,
  variant = "inline",
  title,
}: ScopesDisplayProps) {
  const normalizedScopes = normalizeScopes(scopes);

  if (variant === "callout") {
    const heading = title?.trim();
    return (
      <div className="mt-3 rounded-xl border border-neutral-dark-high/40 bg-neutral-dark/30 p-4">
        {heading && (
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-text-color">
            <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            {heading}
          </div>
        )}
        <ScopesList scopes={normalizedScopes} />
      </div>
    );
  }

  return <ScopesInline scopes={normalizedScopes} />;
}

export default ScopesDisplay;
