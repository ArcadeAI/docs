"use client";

import { Callout } from "nextra/components";

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
      <span className="text-muted-foreground text-sm">
        No scopes required.
      </span>
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {scopes.map((scope) => (
        <code
          className="rounded bg-neutral-dark px-2 py-1 text-xs"
          key={scope}
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
      <p className="text-muted-foreground text-sm">No scopes required.</p>
    );
  }

  return (
    <ul className="ml-4 list-disc space-y-1 text-sm">
      {scopes.map((scope) => (
        <li key={scope}>
          <code>{scope}</code>
        </li>
      ))}
    </ul>
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
    return (
      <Callout title={title ?? "Scopes required"} type="info">
        <ScopesList scopes={normalizedScopes} />
      </Callout>
    );
  }

  return <ScopesInline scopes={normalizedScopes} />;
}

export default ScopesDisplay;
