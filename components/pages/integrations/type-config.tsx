import type { ToolkitType } from "@arcadeai/design-system";
import { BadgeCheck, CheckCircle, Key, Terminal, Users } from "lucide-react";
import type React from "react";
import { isToolkitType, type ListedToolkitType } from "./filter-params";

export const TYPE_CONFIG: Record<
  ToolkitType,
  { label: string; icon: React.ElementType; color: string }
> = {
  arcade: {
    label: "Arcade Optimized",
    icon: BadgeCheck,
    color: "text-emerald-500",
  },
  arcade_starter: {
    label: "Arcade Unoptimized",
    icon: Terminal,
    color: "text-orange-500",
  },
  verified: {
    label: "Verified",
    icon: CheckCircle,
    color: "text-blue-500",
  },
  community: {
    label: "Community",
    icon: Users,
    color: "text-purple-500",
  },
  auth: {
    label: "Auth Provider",
    icon: Key,
    color: "text-indigo-500",
  },
};

/** The designations the index lists. No toolkit is assigned `community`. */
export const LISTED_TYPE_CONFIG = Object.entries(TYPE_CONFIG).filter(
  (entry): entry is [ListedToolkitType, (typeof TYPE_CONFIG)[ToolkitType]] =>
    isToolkitType(entry[0])
);

export const TOOL_CARD_TYPE_CONFIG: Record<
  ToolkitType,
  { className: string; label: string; icon: React.ElementType; color: string }
> = {
  arcade: {
    className:
      "border-emerald-600/20 hover:border-primary bg-emerald-600/[0.02] hover:bg-emerald-600/[0.03]",
    label: "Arcade Optimized MCP Server",
    icon: BadgeCheck,
    color: "text-emerald-400",
  },
  arcade_starter: {
    className:
      "border-orange-600/20 hover:border-primary bg-orange-600/[0.02] hover:bg-orange-600/[0.03]",
    label: "Arcade Unoptimized MCP Server",
    icon: Terminal,
    color: "text-orange-400",
  },
  verified: {
    className:
      "border-blue-600/20 hover:border-primary bg-blue-600/[0.02] hover:bg-blue-600/[0.03]",
    label: "Verified MCP Server",
    icon: CheckCircle,
    color: "text-blue-400",
  },
  community: {
    className:
      "border-orange-600/20 hover:border-primary bg-orange-600/[0.02] hover:bg-orange-600/[0.03]",
    label: "Community MCP Server",
    icon: Users,
    color: "text-orange-400",
  },
  auth: {
    className:
      "border-purple-600/20 hover:border-primary bg-purple-600/[0.02] hover:bg-purple-600/[0.03]",
    label: "Auth Provider",
    icon: Key,
    color: "text-purple-400",
  },
};

export const TYPE_DESCRIPTIONS: Record<ListedToolkitType, React.ReactNode> = {
  arcade: (
    <>
      Official MCP Servers hand-crafted by Arcade that are ready for use and
      optimized for LLM-usage.{" "}
      <a
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
        className="text-blue-600 underline decoration-blue-600/30 underline-offset-2 transition-colors hover:text-blue-700 hover:decoration-blue-700/50 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:text-blue-300 dark:hover:decoration-blue-300/50"
        href="/build/create-tools/improve/types-of-tools#unoptimized-tools"
      >
        Learn more
      </a>
      .
    </>
  ),
  verified: "MCP Servers built outside Arcade, tested and verified by Arcade.",
  auth: "Auth integrations allow you to develop custom tools that connect your agent APIs and services.",
};
