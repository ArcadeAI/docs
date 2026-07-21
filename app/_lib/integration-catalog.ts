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

type JsonToolkitMetadata = {
  docsLink?: string | null;
  category?: string | null;
};

/**
 * Apply toolkit JSON metadata onto a design-system catalog entry.
 *
 * Presence is nullish (`typeof === "string"`), not truthy — an explicit empty
 * string in JSON must win over DS fields, matching `resolveToolkitRoute`'s `??`
 * so card URLs stay aligned with `listValidIntegrationLinks`.
 */
export const mergeToolkitCatalogFields = (
  toolkit: Toolkit,
  jsonMetadata?: JsonToolkitMetadata
): ToolkitWithDocsLink => {
  const existingDocsLink = getToolkitDocsLink(toolkit);
  const docsLink =
    typeof jsonMetadata?.docsLink === "string"
      ? jsonMetadata.docsLink
      : existingDocsLink;
  const category = normalizeCategory(
    typeof jsonMetadata?.category === "string"
      ? jsonMetadata.category
      : toolkit.category
  );

  return {
    ...toolkit,
    category,
    ...(docsLink !== undefined && docsLink !== null ? { docsLink } : {}),
  };
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
  const metadataById = new Map<string, JsonToolkitMetadata>();

  await Promise.all(
    TOOLKITS.map(async (toolkit) => {
      const data = await readToolkitData(toolkit.id);
      if (!data?.metadata) {
        return;
      }

      metadataById.set(normalizeToolkitId(toolkit.id), {
        docsLink: data.metadata.docsLink,
        category: data.metadata.category,
      });
    })
  );

  const dsToolkits: ToolkitWithDocsLink[] = TOOLKITS.map((toolkit) =>
    mergeToolkitCatalogFields(
      toolkit,
      metadataById.get(normalizeToolkitId(toolkit.id))
    )
  );

  return [...dsToolkits, ...PARTNER_TOOLKITS];
};
