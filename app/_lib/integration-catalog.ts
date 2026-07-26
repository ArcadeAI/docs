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
 *
 * A "coming soon" catalog entry that now has a generated data file has real
 * published docs, so it is promoted to a live, clickable card using the data
 * file's docsLink and category (the design-system entry may lag until its next
 * release).
 */
export const getToolkitsWithDocsLinks = async (): Promise<
  ToolkitWithDocsLink[]
> => {
  const dataById = new Map<string, { docsLink?: string; category?: string }>();

  await Promise.all(
    TOOLKITS.map(async (toolkit) => {
      const data = await readToolkitData(toolkit.id);
      if (data?.metadata) {
        dataById.set(normalizeToolkitId(toolkit.id), {
          docsLink: data.metadata.docsLink ?? undefined,
          category: data.metadata.category ?? undefined,
        });
      }
    })
  );

  const dsToolkits: ToolkitWithDocsLink[] = TOOLKITS.map((toolkit) => {
    const data = dataById.get(normalizeToolkitId(toolkit.id));
    const existing = getToolkitDocsLink(toolkit);
    const isComingSoon =
      "isComingSoon" in toolkit && Boolean(toolkit.isComingSoon);

    if (isComingSoon && data?.docsLink) {
      return {
        ...toolkit,
        isComingSoon: false,
        ...(data.category ? { category: data.category } : {}),
        docsLink: data.docsLink,
      };
    }

    const docsLink = existing ?? data?.docsLink;
    return docsLink ? { ...toolkit, docsLink } : toolkit;
  });

  return [...dsToolkits, ...PARTNER_TOOLKITS];
};
