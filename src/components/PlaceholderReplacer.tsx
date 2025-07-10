import { useEffect } from "react";
import { useOrySession } from "@/lib/OrySessionContext";

export function PlaceholderReplacer() {
  const { email, loading } = useOrySession();

  useEffect(() => {
    // Determine the replacement value
    const replacement = loading
      ? "{arcade_user_id}" // Keep original while loading
      : email || "{arcade_user_id}";

    // Function to replace text in a text node
    const replaceInTextNode = (node: Text) => {
      if (node.nodeValue && node.nodeValue.includes("{arcade_user_id}")) {
        const newValue = node.nodeValue.replace(
          /\{arcade_user_id\}/g,
          replacement,
        );
        if (node.nodeValue !== newValue) {
          node.nodeValue = newValue;
        }
      }
    };

    // Function to process all text nodes in an element
    const processElement = (element: Element) => {
      // Skip script and style elements
      if (element.tagName === "SCRIPT" || element.tagName === "STYLE") {
        return;
      }

      // Walk through all text nodes
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          // Only process text nodes that might contain our placeholder
          if (node.nodeValue && node.nodeValue.includes("arcade_user_id")) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        },
      });

      let node;
      while ((node = walker.nextNode())) {
        replaceInTextNode(node as Text);
      }
    };

    // Initial replacement on mount
    const timeoutId = setTimeout(() => {
      processElement(document.body);
    }, 100); // Small delay to ensure content is rendered

    // Set up MutationObserver for dynamic content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              processElement(node as Element);
            } else if (node.nodeType === Node.TEXT_NODE) {
              replaceInTextNode(node as Text);
            }
          });
        } else if (
          mutation.type === "characterData" &&
          mutation.target.nodeType === Node.TEXT_NODE
        ) {
          replaceInTextNode(mutation.target as Text);
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      characterDataOldValue: true,
    });

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [email, loading]);

  // This component doesn't render anything
  return null;
}
