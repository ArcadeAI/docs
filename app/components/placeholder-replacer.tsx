'use client';
import { useEffect } from 'react';
import { useOrySession } from '@/lib/ory-session-context';
import { getCookie } from '@/lib/utils';

export function PlaceholderReplacer() {
  const { email, loading } = useOrySession();

  useEffect(() => {
    // Determine the replacement value with fallback priority:
    // 1. If loading, keep original placeholder
    // 2. If Ory email is available, use that (highest priority)
    // 3. If no Ory email but cookie exists, use cookie value
    // 4. Otherwise, use original placeholder
    const getCookieEmail = () => getCookie('last_arcadedev_account_email');

    const replacement = loading
      ? '{arcade_user_id}' // Keep original while loading
      : email || getCookieEmail() || '{arcade_user_id}';

    // Function to replace text in a text node
    const replaceInTextNode = (node: Text) => {
      if (node.nodeValue?.includes('{arcade_user_id}')) {
        const newValue = node.nodeValue.replace(
          /\{arcade_user_id\}/g,
          replacement
        );
        if (node.nodeValue !== newValue) {
          node.nodeValue = newValue;
        }
      }
    };

    // Function to process all text nodes in an element
    const processElement = (element: Element) => {
      // Skip script and style elements
      if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
        return;
      }

      // Walk through all text nodes
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
        acceptNode: (textNode) => {
          // Only process text nodes that might contain our placeholder
          if (textNode.nodeValue?.includes('arcade_user_id')) {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        },
      });

      let currentNode: Node | null;
      // biome-ignore lint/suspicious/noAssignInExpressions: standard walker iteration pattern
      while ((currentNode = walker.nextNode())) {
        replaceInTextNode(currentNode as Text);
      }
    };

    // Initial replacement on mount
    const timeoutId = setTimeout(() => {
      processElement(document.body);
    }, 100); // Small delay to ensure content is rendered

    // Set up MutationObserver for dynamic content with simpler handlers
    const handleChildList = (mutation: MutationRecord) => {
      for (const added of mutation.addedNodes) {
        if (added.nodeType === Node.ELEMENT_NODE) {
          processElement(added as Element);
        } else if (added.nodeType === Node.TEXT_NODE) {
          replaceInTextNode(added as Text);
        }
      }
    };

    const handleCharacterData = (mutation: MutationRecord) => {
      if (mutation.target.nodeType === Node.TEXT_NODE) {
        replaceInTextNode(mutation.target as Text);
      }
    };

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          handleChildList(mutation);
          continue;
        }
        if (mutation.type === 'characterData') {
          handleCharacterData(mutation);
        }
      }
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
