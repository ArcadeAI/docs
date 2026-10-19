import type { ComponentProps, CSSProperties, ReactNode } from "react";
import { cx } from "./elements";
import {
  GitHubCautionIcon,
  GitHubImportantIcon,
  GitHubNoteIcon,
  GitHubTipIcon,
  GitHubWarningIcon,
} from "./icons";

export type CalloutType =
  | "default"
  | "info"
  | "warning"
  | "error"
  | "important";

const ICON_CLASS = "mt-[.3em]";

const TypeToEmoji: Record<CalloutType, ReactNode> = {
  default: <GitHubTipIcon className={ICON_CLASS} height=".8em" />,
  error: <GitHubCautionIcon className={ICON_CLASS} height=".8em" />,
  important: <GitHubImportantIcon className={ICON_CLASS} height=".8em" />,
  info: <GitHubNoteIcon className={ICON_CLASS} height=".8em" />,
  warning: <GitHubWarningIcon className={ICON_CLASS} height=".8em" />,
};

const classes: Record<CalloutType, string> = {
  default: cx(
    "bg-green-100 dark:bg-green-900/30",
    "text-green-700 dark:text-green-500",
    "border-green-700 dark:border-green-800"
  ),
  error: cx(
    "bg-red-100 dark:bg-red-900/30",
    "text-red-700 dark:text-red-500",
    "border-red-700 dark:border-red-600"
  ),
  important: cx(
    "bg-purple-100 dark:bg-purple-900/30",
    "text-purple-600 dark:text-purple-400",
    "border-purple-600"
  ),
  info: cx(
    "bg-blue-100 dark:bg-blue-900/30",
    "text-blue-700 dark:text-blue-400",
    "border-blue-700 dark:border-blue-600"
  ),
  warning: cx(
    "bg-yellow-50 dark:bg-yellow-700/30",
    "text-yellow-700 dark:text-yellow-500",
    "border-yellow-700"
  ),
};

/**
 * Type names the toolkit-page rules in app/global.css select on
 * (`[data-callout][data-type="warn"]`, …).
 */
const DATA_TYPE: Record<CalloutType, string> = {
  default: "idea",
  error: "error",
  important: "important",
  info: "info",
  warning: "warn",
};

const EMOJI_STYLE: CSSProperties = {
  fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

export type CalloutProps = Omit<ComponentProps<"div">, "type"> & {
  type?: CalloutType | null;
  emoji?: ReactNode;
};

/** Nextra's `<Callout>` (nextra/components), ported class for class. */
export function Callout({
  className,
  type = "default",
  emoji = type ? TypeToEmoji[type] : undefined,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cx(
        "nextra-callout not-first:mt-[1.25em] flex overflow-x-auto rounded-[.5rem] border py-[.5em] pe-[1em]",
        "contrast-more:border-current!",
        type ? classes[type] : undefined
      )}
      data-callout=""
      data-type={type ? DATA_TYPE[type] : undefined}
    >
      <div
        className="select-none ps-[.6em] pe-[.4em] text-[1.25em]"
        data-pagefind-ignore="all"
        style={EMOJI_STYLE}
      >
        {emoji}
      </div>
      <div className={cx("w-full min-w-0", className)} {...props} />
    </div>
  );
}
