"use client";

import { Badge } from "@arcadeai/design-system";
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

type BehaviorRow = {
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
  return value.replaceAll("_", " ");
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
    <Badge className={styleClass} variant="outline">
      {formatEnumLabel(value)}
    </Badge>
  );
}

function BooleanBadge({ value }: { value: boolean | null }) {
  if (value === null) {
    return (
      <Badge
        className="border-muted/60 bg-muted/20 text-muted-foreground/70"
        variant="outline"
      >
        N/A
      </Badge>
    );
  }

  return value ? (
    <Badge
      className="border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
      variant="outline"
    >
      true
    </Badge>
  ) : (
    <Badge
      className="border-zinc-500/40 bg-zinc-500/10 text-zinc-300"
      variant="outline"
    >
      false
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
    <div className="mt-6 rounded-lg bg-neutral-dark/30 p-4">
      <h4 className="mb-3 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
        Metadata
      </h4>

      <div className="space-y-4">
        {hasOperations && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs">Operations:</span>
            {metadata.behavior.operations.map((operation) => (
              <EnumBadge
                key={operation}
                styles={TOOL_METADATA_OPERATION_STYLES}
                value={operation}
              />
            ))}
          </div>
        )}

        {hasServiceDomains && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs">
              Service domains:
            </span>
            {metadata.classification.serviceDomains.map((domain) => (
              <EnumBadge
                key={domain}
                styles={TOOL_METADATA_SERVICE_DOMAIN_STYLES}
                value={domain}
              />
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
          {behaviorRows.map((row) => (
            <div className="flex flex-col gap-1" key={row.key}>
              <span className="text-muted-foreground/70 text-xs">
                {row.label}
              </span>
              <BooleanBadge value={row.value} />
            </div>
          ))}
        </div>

        {hasExtras && (
          <div className="space-y-1">
            <span className="text-muted-foreground text-xs">Extras:</span>
            <pre className="overflow-auto rounded bg-neutral-dark/40 p-3 text-muted-foreground text-xs">
              {JSON.stringify(metadata.extras, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
