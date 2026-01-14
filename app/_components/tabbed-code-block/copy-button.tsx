"use client";
import { Button } from "@arcadeai/design-system";
import { Check, Copy } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useCallback, useState } from "react";

const COPY_TIMEOUT_MS = 1500;
const CONTENT_PREVIEW_LENGTH = 100;

export function CopyButton({
  content,
  disabled,
}: {
  content: string;
  disabled: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const posthog = usePostHog();

  const handleCopy = useCallback(async () => {
    if (!content) {
      return;
    }
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_TIMEOUT_MS);

      // Track code copy event
      posthog?.capture("code_copied", {
        content_length: content.length,
        content_preview: content.substring(0, CONTENT_PREVIEW_LENGTH),
      });
    } catch {
      // Silent fail
    }
  }, [content, posthog]);

  return (
    <Button
      className="h-7 px-2 text-xs"
      disabled={disabled}
      onClick={handleCopy}
      size="sm"
      variant="ghost"
    >
      {copied ? (
        <>
          <Check className="mr-1 h-3 w-3" />
          Copied
        </>
      ) : (
        <>
          <Copy className="mr-1 h-3 w-3" />
          Copy
        </>
      )}
    </Button>
  );
}
