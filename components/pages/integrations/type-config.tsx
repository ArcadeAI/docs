import type { ToolkitType } from "@arcadeai/design-system";
import { BadgeCheck, CheckCircle, Key, Terminal, Users } from "lucide-react";
import type React from "react";

export const TYPE_CONFIG: Record<
  ToolkitType,
  { label: string; icon: React.ElementType; color: string }
> = {
  arcade: {
    color: "text-emerald-500",
    icon: BadgeCheck,
    label: "Arcade Optimized",
  },
  arcade_starter: {
    color: "text-orange-500",
    icon: Terminal,
    label: "Arcade Unoptimized",
  },
  auth: {
    color: "text-indigo-500",
    icon: Key,
    label: "Auth Provider",
  },
  community: {
    color: "text-purple-500",
    icon: Users,
    label: "Community",
  },
  verified: {
    color: "text-blue-500",
    icon: CheckCircle,
    label: "Verified",
  },
};

/**
 * Display order of toolkit types in the catalog header and filters. Object
 * keys above are sorted alphabetically by the linter, so the order lives here.
 */
export const TYPE_ORDER: readonly ToolkitType[] = [
  "arcade",
  "arcade_starter",
  "verified",
  "community",
  "auth",
];

export const TYPE_CONFIG_ENTRIES = TYPE_ORDER.map(
  (type) => [type, TYPE_CONFIG[type]] as const
);

export const TOOL_CARD_TYPE_CONFIG: Record<
  ToolkitType,
  { className: string; label: string; icon: React.ElementType; color: string }
> = {
  arcade: {
    className:
      "border-emerald-600/20 hover:border-primary bg-emerald-600/[0.02] hover:bg-emerald-600/[0.03]",
    color: "text-emerald-400",
    icon: BadgeCheck,
    label: "Arcade Optimized MCP Server",
  },
  arcade_starter: {
    className:
      "border-orange-600/20 hover:border-primary bg-orange-600/[0.02] hover:bg-orange-600/[0.03]",
    color: "text-orange-400",
    icon: Terminal,
    label: "Arcade Unoptimized MCP Server",
  },
  auth: {
    className:
      "border-purple-600/20 hover:border-primary bg-purple-600/[0.02] hover:bg-purple-600/[0.03]",
    color: "text-purple-400",
    icon: Key,
    label: "Auth Provider",
  },
  community: {
    className:
      "border-orange-600/20 hover:border-primary bg-orange-600/[0.02] hover:bg-orange-600/[0.03]",
    color: "text-orange-400",
    icon: Users,
    label: "Community MCP Server",
  },
  verified: {
    className:
      "border-blue-600/20 hover:border-primary bg-blue-600/[0.02] hover:bg-blue-600/[0.03]",
    color: "text-blue-400",
    icon: CheckCircle,
    label: "Verified MCP Server",
  },
};

export const TYPE_DESCRIPTIONS: Record<ToolkitType, React.ReactNode> = {
  arcade: (
    <>
      Official MCP Servers hand-crafted by Arcade that are ready for use and
      optimized for LLM-usage.{" "}
      <a
        aria-label="Learn more about optimized tools"
        className="text-blue-600 underline decoration-blue-600/30 underline-offset-2 transition-colors hover:text-blue-700 hover:decoration-blue-700/50 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:text-blue-300 dark:hover:decoration-blue-300/50"
        href="/build/create-tools/improve/types-of-tools#optimized-tools"
      >
        Learn more
      </a>
      .
    </>
  ),
  arcade_starter: (
    <>
      Unoptimized (auto-generated) MCP Servers developed by Arcade that may
      require customization.{" "}
      <a
        aria-label="Learn more about unoptimized tools"
        className="text-blue-600 underline decoration-blue-600/30 underline-offset-2 transition-colors hover:text-blue-700 hover:decoration-blue-700/50 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:text-blue-300 dark:hover:decoration-blue-300/50"
        href="/build/create-tools/improve/types-of-tools#unoptimized-tools"
      >
        Learn more
      </a>
      .
    </>
  ),
  auth: "Auth integrations allow you to develop custom tools that connect your agent APIs and services.",
  community:
    "Created and maintained by the Arcade community, offering a wide range of MCP Servers.",
  verified:
    "Community-created MCP Servers, thoroughly tested and verified by Arcade.",
};
