"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const COPY_FEEDBACK_DELAY_MS = 2000;
const COPY_BUTTON_TEXT = "Copy page";
const COPIED_TEXT = "Copied";
const COPYING_TEXT = "Copying\u2026";
const COPY_FAILED_TEXT = "Failed to copy";
const DROPDOWN_IDENTIFIER = "Markdown for LLMs";

const ICON_COPY = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5"></path></svg>`;

const ICON_SPINNER = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" class="x:animate-spin"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path></svg>`;

const ICON_CHECK = `<svg viewBox="0 0 24 24" fill="none" stroke="var(--color-green-600)" stroke-width="2.5" width="16"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

const ICON_ERROR = `<svg viewBox="0 0 24 24" fill="none" stroke="var(--color-red-600)" stroke-width="2" width="16"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15" stroke-linecap="round"></line><line x1="9" y1="9" x2="15" y2="15" stroke-linecap="round"></line></svg>`;

function findButtonTextNode(button: HTMLButtonElement): Text | null {
  for (const node of button.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
      return node as Text;
    }
  }
  return null;
}

function setButtonIcon(button: HTMLButtonElement, iconHTML: string): void {
  const svg = button.querySelector("svg");
  if (svg) {
    svg.outerHTML = iconHTML;
  }
}

function getCopyButton(): HTMLButtonElement | null {
  for (const button of document.querySelectorAll("button")) {
    const text = button.textContent || "";
    if (
      text.includes(COPY_BUTTON_TEXT) ||
      text.includes(COPIED_TEXT) ||
      text.includes(COPYING_TEXT) ||
      text.includes(COPY_FAILED_TEXT)
    ) {
      return button;
    }
  }
  return null;
}

/**
 * This component overrides the default nextra-theme-docs "Copy page" button behavior
 * to fetch markdown from our API instead of copying raw MDX source.
 */
export function CopyPageOverride() {
  const pathname = usePathname();
  const isFetchingRef = useRef(false);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const setButtonState = useCallback(
    (button: HTMLButtonElement, text: string) => {
      const textNode = findButtonTextNode(button);
      if (textNode) {
        textNode.textContent = text;
      }

      if (text === COPYING_TEXT) {
        setButtonIcon(button, ICON_SPINNER);
        button.style.color = "";
      } else if (text === COPIED_TEXT) {
        setButtonIcon(button, ICON_CHECK);
        button.style.color = "var(--color-green-600)";
      } else if (text === COPY_FAILED_TEXT) {
        setButtonIcon(button, ICON_ERROR);
        button.style.color = "var(--color-red-600)";
      } else {
        setButtonIcon(button, ICON_COPY);
        button.style.color = "";
      }
    },
    []
  );

  const fetchAndCopyMarkdown = useCallback(async (): Promise<boolean> => {
    try {
      const response = await fetch(pathname, {
        headers: { Accept: "text/markdown" },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch markdown: ${response.status}`);
      }

      const markdown = await response.text();
      await navigator.clipboard.writeText(markdown);
      return true;
    } catch {
      return false;
    }
  }, [pathname]);

  const handleCopy = useCallback(
    async (button: HTMLButtonElement) => {
      if (isFetchingRef.current) {
        return;
      }

      clearTimeout(feedbackTimerRef.current);
      isFetchingRef.current = true;
      setButtonState(button, COPYING_TEXT);

      const success = await fetchAndCopyMarkdown();

      isFetchingRef.current = false;
      setButtonState(button, success ? COPIED_TEXT : COPY_FAILED_TEXT);

      feedbackTimerRef.current = setTimeout(() => {
        setButtonState(button, COPY_BUTTON_TEXT);
      }, COPY_FEEDBACK_DELAY_MS);
    },
    [fetchAndCopyMarkdown, setButtonState]
  );

  useEffect(() => {
    const isCopyButton = (button: HTMLButtonElement): boolean => {
      const text = button.textContent || "";
      return (
        text.includes(COPY_BUTTON_TEXT) ||
        text.includes(COPIED_TEXT) ||
        text.includes(COPYING_TEXT) ||
        text.includes(COPY_FAILED_TEXT)
      );
    };

    const handleButtonClick = async (event: MouseEvent): Promise<void> => {
      const target = event.target as HTMLElement;
      const button = target.closest("button") as HTMLButtonElement | null;

      if (!(button && isCopyButton(button))) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      await handleCopy(button);
    };

    const handleDropdownClick = async (event: MouseEvent): Promise<void> => {
      const target = event.target as HTMLElement;
      const option = target.closest('[role="option"]');
      const optionText = option?.textContent || "";

      const isDropdownCopyOption =
        optionText.includes(COPY_BUTTON_TEXT) &&
        optionText.includes(DROPDOWN_IDENTIFIER);

      if (!isDropdownCopyOption) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      document.body.click();

      const button = getCopyButton();
      if (button) {
        await handleCopy(button);
      }
    };

    document.addEventListener("click", handleButtonClick, true);
    document.addEventListener("click", handleDropdownClick, true);

    return () => {
      document.removeEventListener("click", handleButtonClick, true);
      document.removeEventListener("click", handleDropdownClick, true);
    };
  }, [handleCopy]);

  return null;
}
