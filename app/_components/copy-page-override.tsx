"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

const COPY_FEEDBACK_DELAY_MS = 2000;
const COPY_BUTTON_TEXT = "Copy page";
const COPIED_TEXT = "Copied";
const DROPDOWN_IDENTIFIER = "Markdown for LLMs";

/**
 * This component overrides the default nextra-theme-docs "Copy page" button behavior
 * to fetch clean markdown from our API instead of copying raw MDX source.
 */
export function CopyPageOverride() {
  const pathname = usePathname();

  const fetchAndCopyMarkdown = useCallback(async (): Promise<boolean> => {
    try {
      const markdownUrl = `/api/markdown${pathname}.md`;
      const response = await fetch(markdownUrl);

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

  useEffect(() => {
    const isCopyButton = (button: HTMLButtonElement): boolean => {
      const text = button.textContent || "";
      return text.includes(COPY_BUTTON_TEXT) || text.includes(COPIED_TEXT);
    };

    const updateButtonFeedback = (button: HTMLButtonElement): void => {
      const textNodes = button.querySelectorAll("*");
      for (const node of textNodes) {
        if (node.textContent === COPY_BUTTON_TEXT) {
          node.textContent = COPIED_TEXT;
          setTimeout(() => {
            node.textContent = COPY_BUTTON_TEXT;
          }, COPY_FEEDBACK_DELAY_MS);
          return;
        }
      }
    };

    const handleButtonClick = async (event: MouseEvent): Promise<void> => {
      const target = event.target as HTMLElement;
      const button = target.closest("button") as HTMLButtonElement | null;

      if (!(button && isCopyButton(button))) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const success = await fetchAndCopyMarkdown();
      if (success) {
        updateButtonFeedback(button);
      }
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

      await fetchAndCopyMarkdown();
      document.body.click();
    };

    document.addEventListener("click", handleButtonClick, true);
    document.addEventListener("click", handleDropdownClick, true);

    return () => {
      document.removeEventListener("click", handleButtonClick, true);
      document.removeEventListener("click", handleDropdownClick, true);
    };
  }, [fetchAndCopyMarkdown]);

  return null;
}
