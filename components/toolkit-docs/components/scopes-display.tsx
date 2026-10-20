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
      <span className="text-muted-foreground/70 text-sm">None required</span>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {scopes.map((scope) => (
        <code
          className="max-w-[220px] truncate font-mono text-red-300 text-xs"
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
    return <p className="text-muted-foreground/70 text-sm">None required</p>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {scopes.map((scope) => (
        <code
          className="max-w-full break-all font-mono text-red-300 text-xs"
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
      <div className="mt-3 rounded-xl bg-neutral-dark/30 p-4">
        {heading && (
          <div className="mb-3 flex items-center gap-2 font-semibold text-sm text-foreground">
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
