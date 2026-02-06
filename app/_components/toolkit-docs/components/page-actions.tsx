"use client";

import { Check, Copy, ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

const GITHUB_JSON_BASE_URL =
  "https://github.com/ArcadeAI/docs/blob/main/toolkit-docs-generator/data/toolkits";
const COPY_FEEDBACK_MS = 2000;

/**
 * Builds the GitHub URL for editing the toolkit JSON file.
 */
function buildGithubEditUrl(toolkitId: string): string {
  const jsonFileName = `${toolkitId.toLowerCase()}.json`;
  return `${GITHUB_JSON_BASE_URL}/${jsonFileName}`;
}

type EditJsonOnGithubProps = {
  toolkitId: string;
};

/**
 * EditJsonOnGithub
 *
 * Renders a link to edit the toolkit JSON file on GitHub.
 */
export function EditJsonOnGithub({ toolkitId }: EditJsonOnGithubProps) {
  const editUrl = buildGithubEditUrl(toolkitId);

  return (
    <a
      className="flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground"
      href={editUrl}
      rel="noopener noreferrer"
      target="_blank"
      title="Edit the toolkit JSON file on GitHub"
    >
      Edit content in GitHub
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

/**
 * CopyPageButton
 *
 * Simple button that copies the generated markdown content on click.
 * Styled to match Nextra's native copy button.
 */
function CopyPageButton() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopy = useCallback(async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/markdown${pathname}.md`);
      if (!response.ok) {
        throw new Error("Failed to fetch markdown");
      }
      const content = await response.text();
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    } catch {
      // Silent fail - user can retry
    } finally {
      setLoading(false);
    }
  }, [pathname, loading]);

  return (
    <button
      className="inline-flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-800/50 px-3 py-1.5 font-medium text-sm text-neutral-200 transition-colors hover:bg-neutral-700/50 disabled:opacity-50"
      disabled={loading}
      onClick={handleCopy}
      type="button"
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      {copied ? "Copied!" : "Copy page"}
    </button>
  );
}

type PageActionsBarProps = {
  toolkitId: string;
};

/**
 * PageActionsBar
 *
 * Renders the page actions bar with copy button and edit link.
 */
export function PageActionsBar({ toolkitId }: PageActionsBarProps) {
  return (
    <div
      className="mb-4 flex flex-wrap items-center justify-end gap-4"
      data-toolkit-page-actions
    >
      <CopyPageButton />
      <EditJsonOnGithub toolkitId={toolkitId} />
    </div>
  );
}

export default PageActionsBar;
