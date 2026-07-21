import type { Toolkit } from "@arcadeai/design-system";
import { TOOLKITS } from "@arcadeai/design-system/metadata/toolkits";
import { PARTNER_TOOLKITS } from "@/app/_data/partner-toolkits";
import { normalizeCategory } from "./toolkit-category";
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
 *
 * Toolkit JSON wins for both fields when present — same precedence as
 * `listToolkitRoutes` / `getToolkitSlug`.
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
      // Preserve explicit empty strings so JSON wins over design-system values
      // the same way route helpers use `??` (empty → others / no docsLink slug).
      if (data.metadata?.docsLink !== undefined) {
        docsLinkById.set(key, data.metadata.docsLink);
      }
      if (data.metadata?.category !== undefined) {
        categoryById.set(key, data.metadata.category);
      }
    })
  );

  const dsToolkits: ToolkitWithDocsLink[] = TOOLKITS.map((toolkit) => {
    const key = normalizeToolkitId(toolkit.id);
    const existingDocsLink = getToolkitDocsLink(toolkit);
    // JSON first so card slugs match generated routes when DS metadata is stale.
    const docsLink = docsLinkById.has(key)
      ? docsLinkById.get(key)
      : existingDocsLink;
    const category = normalizeCategory(
      categoryById.has(key) ? categoryById.get(key) : toolkit.category
    );

    return {
      ...toolkit,
      category,
      ...(docsLink ? { docsLink } : {}),
    };
  });

  return [
    ...dsToolkits,
    ...PARTNER_TOOLKITS.map((toolkit) => ({
      ...toolkit,
      category: normalizeCategory(toolkit.category),
    })),
  ];
};
