import type { ToolkitData } from "@/components/toolkit-docs/types";
import { PARTNER_TOOLKITS } from "@/data/partner-toolkits";
import { resolveToolkitDataDir } from "@/toolkit-docs-generator/src/shared/toolkit-data-dir";
import { loadAllToolkitData } from "./toolkit-data";
import type { ToolkitWithDocsLink } from "./toolkit-slug";

const toCatalogToolkit = ({
  id,
  label,
  metadata,
}: ToolkitData): ToolkitWithDocsLink => ({
  id,
  label,
  isBYOC: metadata.isBYOC,
  isPro: metadata.isPro,
  publicIconUrl: metadata.iconUrl,
  docsLink: metadata.docsLink,
  relativeDocsLink: new URL(metadata.docsLink).pathname,
  type: metadata.type,
  category: metadata.category,
  isComingSoon: metadata.isComingSoon,
  isHidden: metadata.isHidden,
});

/**
 * The integrations index: every toolkit the public catalog publishes, plus
 * docs-local partner toolkits.
 *
 * `generated` is the nightly output of toolkit-docs-generator, which reads the
 * same public catalog arcade.dev/tools is built from, so both list the same
 * toolkits with the same badges.
 */
export const toIntegrationCatalog = (
  generated: Iterable<ToolkitData>,
  partners: readonly ToolkitWithDocsLink[]
): ToolkitWithDocsLink[] => [
  ...[...generated].map(toCatalogToolkit),
  ...partners,
];

export const getToolkitsWithDocsLinks = async (): Promise<
  ToolkitWithDocsLink[]
> => {
  const { byNormalizedId } = await loadAllToolkitData(resolveToolkitDataDir());
  return toIntegrationCatalog(byNormalizedId.values(), PARTNER_TOOLKITS);
};
