"use client";

import { cn } from "@arcadeai/design-system/lib/utils";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowRightIcon,
  ChatGPTIcon,
  ClaudeIcon,
  CopyIcon,
  LinkArrowIcon,
} from "@/components/chrome/icons";
import { Select } from "@/components/chrome/select";

interface PageActionsProps {
  /** Kept for callers that pass it; the menu has no GitHub entry. */
  githubUrl?: string;
  /** URL that returns the page as Markdown (app/llms.mdx or /api/toolkit-data). */
  markdownUrl: string;
}

type CopyState = "idle" | "copying" | "copied" | "failed";

const COPY_FEEDBACK_DELAY_MS = 2000;

const LABELS: Record<CopyState, string> = {
  copied: "Copied",
  copying: "Copying…",
  failed: "Failed to copy",
  idle: "Copy page",
};

function StateIcon({ state }: { state: CopyState }) {
  if (state === "copying") {
    return (
      <svg
        aria-hidden="true"
        className="animate-spin"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="16"
      >
        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
      </svg>
    );
  }
  if (state === "copied") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        stroke="var(--color-green-600)"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
        width="16"
      >
        <path
          d="M20 6L9 17l-5-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (state === "failed") {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        stroke="var(--color-red-600)"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="16"
      >
        <circle cx="12" cy="12" r="10" />
        <line strokeLinecap="round" x1="15" x2="9" y1="9" y2="15" />
        <line strokeLinecap="round" x1="9" x2="15" y1="9" y2="15" />
      </svg>
    );
  }
  return <CopyIcon width="16" />;
}

function stateColor(state: CopyState): string | undefined {
  if (state === "copied") {
    return "var(--color-green-600)";
  }
  if (state === "failed") {
    return "var(--color-red-600)";
  }
}

function Item({
  description,
  icon,
  isExternal,
  title,
}: {
  description: string;
  icon: ReactNode;
  isExternal?: boolean;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div className="flex flex-col">
        <span className="flex gap-1 font-medium">
          {title}
          {isExternal ? <LinkArrowIcon height="1em" /> : null}
        </span>
        <span className="text-xs">{description}</span>
      </div>
    </div>
  );
}

const OPTIONS = [
  {
    id: "copy",
    name: (
      <Item
        description="Copy page as Markdown for LLMs"
        icon={<CopyIcon width="16" />}
        title="Copy page"
      />
    ),
  },
  {
    id: "chatgpt",
    name: (
      <Item
        description="Ask questions about this page"
        icon={<ChatGPTIcon width="16" />}
        isExternal
        title="Open in ChatGPT"
      />
    ),
  },
  {
    id: "claude",
    name: (
      <Item
        description="Ask questions about this page"
        icon={<ClaudeIcon width="16" />}
        isExternal
        title="Open in Claude"
      />
    ),
  },
];

/**
 * "Copy page" split button shown at the top right of a page. The main button
 * copies the page as Markdown; the menu also offers to open the page in
 * ChatGPT or Claude.
 */
export function PageActions({ markdownUrl }: PageActionsProps) {
  const [state, setState] = useState<CopyState>("idle");
  const isFetchingRef = useRef<boolean>(false);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(feedbackTimerRef.current), []);

  const handleCopy = useCallback(async () => {
    if (isFetchingRef.current) {
      return;
    }
    clearTimeout(feedbackTimerRef.current);
    isFetchingRef.current = true;
    setState("copying");

    let success = false;
    try {
      const response = await fetch(markdownUrl, {
        headers: { Accept: "text/markdown" },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch markdown: ${response.status}`);
      }
      await navigator.clipboard.writeText(await response.text());
      success = true;
    } catch {
      success = false;
    }

    isFetchingRef.current = false;
    setState(success ? "copied" : "failed");
    feedbackTimerRef.current = setTimeout(() => {
      setState("idle");
    }, COPY_FEEDBACK_DELAY_MS);
  }, [markdownUrl]);

  const handleChange = useCallback(
    (value: string) => {
      if (value === "copy") {
        handleCopy();
        return;
      }
      const url =
        value === "chatgpt"
          ? "chatgpt.com/?hints=search&prompt"
          : "claude.ai/new?q";
      const query = `Read from ${window.location.href} so I can ask questions about it.`;
      window.open(`https://${url}=${encodeURIComponent(query)}`, "_blank");
    },
    [handleCopy]
  );

  return (
    <div className="nextra-border float-end inline-flex items-stretch overflow-hidden rounded-[6px] border">
      <button
        className={cn(
          "cursor-pointer transition focus-visible:nextra-focus",
          "flex items-center gap-2 ps-2 pe-1 font-medium text-sm",
          "hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-primary-100/5 dark:hover:text-gray-50"
        )}
        onClick={handleCopy}
        style={{ color: stateColor(state) }}
        type="button"
      >
        <StateIcon state={state} />
        {LABELS[state]}
      </button>
      <Select
        anchor="bottom end"
        className="rounded-none"
        onChange={handleChange}
        options={OPTIONS}
        selectedOptionName={<ArrowRightIcon className="rotate-90" width="12" />}
        value=""
      />
    </div>
  );
}
