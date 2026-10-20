"use client";

import {
  type ComponentProps,
  type MouseEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { CODE_BORDER } from "./elements";
import { CheckIcon, CopyIcon, WordWrapIcon } from "./icons";

const COPIED_TIMEOUT_MS = 2000;
const WORD_WRAP_ATTRIBUTE = "data-nextra-word-wrap";

function OutlineButton({ className, ...props }: ComponentProps<"button">) {
  return (
    <button
      className={[
        "cursor-pointer transition focus-visible:nextra-focus",
        CODE_BORDER,
        "rounded-[.375rem] p-1.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type="button"
      {...props}
    />
  );
}

/** Nextra `CopyToClipboard`: copies the text of the sibling `pre code`. */
export function CopyToClipboard({ className }: { className?: string }) {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }
    const timerId = setTimeout(() => setCopied(false), COPIED_TIMEOUT_MS);
    return () => clearTimeout(timerId);
  }, [isCopied]);

  const handleClick = useCallback(
    async (event: MouseEvent<HTMLButtonElement>) => {
      const container = event.currentTarget.parentElement?.parentElement;
      const content = container?.querySelector("pre code")?.textContent || "";
      setCopied(true);
      try {
        await navigator.clipboard.writeText(content);
      } catch {
        // Clipboard unavailable (insecure context or denied permission).
      }
    },
    []
  );

  const IconToUse = isCopied ? CheckIcon : CopyIcon;
  return (
    <OutlineButton
      className={className}
      onClick={handleClick}
      title="Copy code"
    >
      <IconToUse className="nextra-copy-icon" height="1em" />
    </OutlineButton>
  );
}

function toggleWordWrap() {
  const root = document.documentElement;
  if (root.hasAttribute(WORD_WRAP_ATTRIBUTE)) {
    root.removeAttribute(WORD_WRAP_ATTRIBUTE);
  } else {
    root.setAttribute(WORD_WRAP_ATTRIBUTE, "");
  }
}

/** Nextra `ToggleWordWrapButton`: only shown below the `md` breakpoint. */
export function ToggleWordWrapButton() {
  return (
    <OutlineButton
      className="md:hidden"
      onClick={toggleWordWrap}
      title="Toggle word wrap"
    >
      <WordWrapIcon height="1em" />
    </OutlineButton>
  );
}
