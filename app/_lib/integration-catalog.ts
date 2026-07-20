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
 * (enriched with `docsLink` / `category` from their data file when present, so
 * card URLs match generated routes) plus docs-local partner toolkits.
 */
export const getToolkitsWithDocsLinks = async (): Promise<
  ToolkitWithDocsLink[]
> => {
  const docsLinkById = new Map<string, string>();
  const categoryById = new Map<string, string>();

  await Promise.all(
    TOOLKITS.map(async (toolkit) => {
      const data = await readToolkitData(toolkit.id);
      if (!data) {
        return;
      }

      const key = normalizeToolkitId(toolkit.id);
      if (data.metadata?.docsLink) {
        docsLinkById.set(key, data.metadata.docsLink);
      }
      if (data.metadata?.category) {
        categoryById.set(key, data.metadata.category);
      }
    })
  );

  const dsToolkits: ToolkitWithDocsLink[] = TOOLKITS.map((toolkit) => {
    const key = normalizeToolkitId(toolkit.id);
    const existing = getToolkitDocsLink(toolkit);
    const docsLink = existing ?? docsLinkById.get(key);
    // Toolkit JSON is source of truth for category (same as route generation).
    const category = categoryById.get(key) ?? toolkit.category;

    return {
      ...toolkit,
      ...(docsLink ? { docsLink } : {}),
      ...(category ? { category } : {}),
    };
  });

  return [...dsToolkits, ...PARTNER_TOOLKITS];
};
