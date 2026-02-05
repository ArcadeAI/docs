import { TOOLKITS } from "@arcadeai/design-system";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import {
  normalizeToolkitId,
  type ToolkitWithDocsLink,
} from "@/app/_lib/toolkit-slug";
import ToolkitsClient from "./toolkits-client";

/**
 * Safely extract a docsLink from a toolkit entry.
 * The design-system Toolkit type doesn't declare `docsLink`, but some
 * runtime entries carry it. We use a runtime property check to be safe.
 */
const getToolkitDocsLink = (toolkit: unknown): string | undefined => {
  if (
    typeof toolkit === "object" &&
    toolkit !== null &&
    "docsLink" in toolkit
  ) {
    const value = (toolkit as ToolkitWithDocsLink).docsLink;
    return value ?? undefined;
  }
  return;
};

const getToolkitsWithDocsLinks = async (): Promise<ToolkitWithDocsLink[]> => {
  const docsLinkById = new Map<string, string>();

  await Promise.all(
    TOOLKITS.map(async (toolkit) => {
      if (getToolkitDocsLink(toolkit)) {
        return;
      }

      const data = await readToolkitData(toolkit.id);
      if (data?.metadata?.docsLink) {
        docsLinkById.set(
          normalizeToolkitId(toolkit.id),
          data.metadata.docsLink
        );
      }
    })
  );

  return TOOLKITS.map((toolkit) => {
    const existing = getToolkitDocsLink(toolkit);
    const docsLink =
      existing ?? docsLinkById.get(normalizeToolkitId(toolkit.id));

    return docsLink ? { ...toolkit, docsLink } : toolkit;
  });
};

export default async function Toolkits() {
  const toolkits = await getToolkitsWithDocsLinks();
  return <ToolkitsClient toolkits={toolkits} />;
}
