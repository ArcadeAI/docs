"use client";

import { ExternalLink } from "lucide-react";

const GITHUB_JSON_BASE_URL =
  "https://github.com/ArcadeAI/docs/blob/main/toolkit-docs-generator/data/toolkits";

function buildGithubEditUrl(toolkitId: string): string {
  const jsonFileName = `${toolkitId.toLowerCase()}.json`;
  return `${GITHUB_JSON_BASE_URL}/${jsonFileName}`;
}

type EditJsonOnGithubProps = {
  toolkitId: string;
};

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

type PageActionsBarProps = {
  toolkitId: string;
};

export function PageActionsBar({ toolkitId }: PageActionsBarProps) {
  return (
    <div
      className="mb-4 flex flex-wrap items-center justify-end gap-4"
      data-toolkit-page-actions
    >
      <EditJsonOnGithub toolkitId={toolkitId} />
    </div>
  );
}

export default PageActionsBar;
