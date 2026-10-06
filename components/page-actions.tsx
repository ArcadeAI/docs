import {
  MarkdownCopyButton,
  ViewOptionsPopover,
} from "fumadocs-ui/layouts/docs/page";

interface PageActionsProps {
  /** Source file on GitHub, for the "Edit on GitHub" / "Open in" options. */
  githubUrl?: string;
  /** URL that returns the page as Markdown (app/llms.mdx or /api/toolkit-data). */
  markdownUrl: string;
}

/**
 * "Copy page" + "Open in ChatGPT/Claude/..." actions shown under the title.
 * Replaces the Nextra copy-button override: the Markdown now comes from a
 * dedicated route instead of scraping the rendered page.
 */
export function PageActions({ markdownUrl, githubUrl }: PageActionsProps) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-2 border-b pb-6">
      <MarkdownCopyButton markdownUrl={markdownUrl} />
      <ViewOptionsPopover githubUrl={githubUrl} markdownUrl={markdownUrl} />
    </div>
  );
}
