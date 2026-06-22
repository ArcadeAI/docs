import type { Toolkit } from "@arcadeai/design-system";
import { TOOLKITS } from "@arcadeai/design-system/metadata/toolkits";
import { PARTNER_TOOLKITS } from "@/app/_data/partner-toolkits";
import { readToolkitData } from "./toolkit-data";
import { normalizeToolkitId, type ToolkitWithDocsLink } from "./toolkit-slug";

const getToolkitDocsLink = (toolkit: Toolkit): string | undefined => {
  if ("docsLink" in toolkit) {
    const value = (toolkit as ToolkitWithDocsLink).docsLink;
    return value ?? undefined;
  }
  return;
};

/**
 * The full integrations catalog the index renders: design-system toolkits
 * (enriched with a `docsLink` from their data file when the catalog entry
 * lacks one, so the card's slug matches the generated page) plus docs-local
 * partner toolkits.
 */
export const getToolkitsWithDocsLinks = async (): Promise<
  ToolkitWithDocsLink[]
> => {
  const docsLinkById = new Map<string, string>();

  await Promise.all(
    TOOLKITS.map(async (toolkit) => {
      const existing = getToolkitDocsLink(toolkit);
      if (existing) {
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

  const dsToolkits: ToolkitWithDocsLink[] = TOOLKITS.map((toolkit) => {
    const existing = getToolkitDocsLink(toolkit);
    const docsLink =
      existing ?? docsLinkById.get(normalizeToolkitId(toolkit.id));

    return docsLink ? { ...toolkit, docsLink } : toolkit;
  });

  return [...dsToolkits, ...PARTNER_TOOLKITS];
};
