"use client";

import { Badge } from "@arcadeai/design-system";
import { Check, ChevronDown, Lightbulb, Minus, X } from "lucide-react";
import {
  TOOL_METADATA_FALLBACK_STYLE,
  TOOL_METADATA_OPERATION_STYLES,
  TOOL_METADATA_SERVICE_DOMAIN_STYLES,
} from "../constants";
import type { ToolMetadata, ToolMetadataBehavior } from "../types";

type BehaviorFlagKey = "readOnly" | "destructive" | "idempotent" | "openWorld";

const BEHAVIOR_LABELS: Record<BehaviorFlagKey, string> = {
  readOnly: "Read only",
  destructive: "Destructive",
  idempotent: "Idempotent",
  openWorld: "Open world",
};

const BEHAVIOR_DESCRIPTIONS: Record<BehaviorFlagKey, string> = {
  readOnly: "Does not modify remote state.",
  destructive: "May delete or overwrite remote data.",
  idempotent: "Safe to retry without extra side effects.",
  openWorld: "Can call out to external systems.",
};

export type BehaviorRow = {
  key: BehaviorFlagKey;
  label: string;
  value: boolean | null;
};

export function buildBehaviorRows(
  behavior: ToolMetadataBehavior
): readonly BehaviorRow[] {
  return (Object.keys(BEHAVIOR_LABELS) as BehaviorFlagKey[]).map((key) => ({
    key,
    label: BEHAVIOR_LABELS[key],
    value: behavior[key] ?? null,
  }));
}

function formatEnumLabel(value: string): string {
  const words = value.split("_");
  return words
    .map((word, index) => {
      if (word === "crm") {
        return "CRM";
      }
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(" ");
}

function EnumBadge({
  value,
  styles,
}: {
  value: string;
  styles: Record<string, string>;
}) {
  const styleClass = styles[value] ?? TOOL_METADATA_FALLBACK_STYLE;
  return (
    <Badge
      className={`${styleClass} gap-1.5 border-0 text-xs font-medium`}
      variant="secondary"
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current/80" />
      {formatEnumLabel(value)}
    </Badge>
  );
}

function BooleanBadge({ value }: { value: boolean | null }) {
  if (value === null) {
    return (
      <Badge
        className="border-0 bg-neutral-dark/40 text-muted-foreground/70"
        variant="secondary"
      >
        <Minus className="mr-1 h-3 w-3" /> Unknown
      </Badge>
    );
  }

  return value ? (
    <Badge
      className="border-0 bg-emerald-500/15 text-emerald-300"
      variant="secondary"
    >
      <Check className="mr-1 h-3 w-3" /> Yes
    </Badge>
  ) : (
    <Badge
      className="border-0 bg-neutral-500/15 text-neutral-300"
      variant="secondary"
    >
      <X className="mr-1 h-3 w-3" /> No
    </Badge>
  );
}

export function ToolMetadataSection({
  metadata,
}: {
  metadata?: ToolMetadata | null;
}) {
  if (!metadata) {
    return null;
  }

  const behaviorRows = buildBehaviorRows(metadata.behavior);
  const hasOperations = metadata.behavior.operations.length > 0;
  const hasServiceDomains = metadata.classification.serviceDomains.length > 0;
  const hasAnyBehaviorValue = behaviorRows.some((row) => row.value !== null);
  const hasExtras =
    metadata.extras != null && Object.keys(metadata.extras).length > 0;

  if (
    !(hasOperations || hasServiceDomains || hasAnyBehaviorValue || hasExtras)
  ) {
    return null;
  }

  return (
    <div className="mb-6 rounded-xl bg-neutral-dark/15 p-4">
      <div className="mb-4 flex items-start gap-2.5">
        <div className="mt-0.5 rounded-md bg-brand-accent/10 p-1.5 text-brand-accent">
          <Lightbulb className="h-3.5 w-3.5" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm">
            Execution hints
          </h4>
          <p className="mt-1 text-muted-foreground/75 text-xs">
            Signals for MCP clients and agents about how this tool behaves.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {(hasOperations || hasServiceDomains) && (
          <div className="grid gap-3 md:grid-cols-2">
            {hasOperations && (
              <div className="rounded-lg bg-neutral-dark/20 p-3">
                <span className="mb-2 block text-muted-foreground/80 text-xs font-medium">
                  Operations
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {metadata.behavior.operations.map((operation) => (
                    <EnumBadge
                      key={operation}
                      styles={TOOL_METADATA_OPERATION_STYLES}
                      value={operation}
                    />
                  ))}
                </div>
              </div>
            )}

            {hasServiceDomains && (
              <div className="rounded-lg bg-neutral-dark/20 p-3">
                <span className="mb-2 block text-muted-foreground/80 text-xs font-medium">
                  Service domains
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {metadata.classification.serviceDomains.map((domain) => (
                    <EnumBadge
                      key={domain}
                      styles={TOOL_METADATA_SERVICE_DOMAIN_STYLES}
                      value={domain}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {hasAnyBehaviorValue && (
          <div className="rounded-lg bg-neutral-dark/20 p-3">
            <span className="mb-2 block text-muted-foreground/80 text-xs font-medium">
              MCP behavior
            </span>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {behaviorRows.map((row) => (
                <div
                  className="rounded-md bg-neutral-dark/25 p-2.5"
                  key={row.key}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-medium text-foreground text-xs">
                      {row.label}
                    </span>
                    <div className="flex shrink-0">
                      <BooleanBadge value={row.value} />
                    </div>
                  </div>
                  <p className="mt-1.5 text-[11px] text-muted-foreground/70 leading-relaxed">
                    {BEHAVIOR_DESCRIPTIONS[row.key]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {hasExtras && (
          <details className="group mt-2 rounded-lg bg-neutral-dark/20">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-2.5 text-muted-foreground/85 text-xs font-medium">
              Additional metadata
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
            </summary>
            <pre className="overflow-auto p-3 text-muted-foreground text-xs">
              {JSON.stringify(metadata.extras, null, 2)}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
