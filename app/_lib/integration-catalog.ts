import type { ToolkitData } from "@/app/_components/toolkit-docs/types";
import { PARTNER_TOOLKITS } from "@/app/_data/partner-toolkits";
import { resolveToolkitDataDir } from "@/toolkit-docs-generator/src/shared/toolkit-data-dir";
import { loadAllToolkitData } from "./toolkit-data";
import type { ToolkitWithDocsLink } from "./toolkit-slug";

/**
 * Engine plumbing the public catalog lists like any other toolkit. Nothing in
 * the catalog separates these from a product, so they are named here. Keep in
 * step with arcade.dev/tools, which hides the same set.
 */
const INTERNAL_TOOLKIT_IDS: ReadonlySet<string> = new Set([
  "Math",
  "ArcadeEngineApi",
]);

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
  ...[...generated]
    .filter((toolkit) => !INTERNAL_TOOLKIT_IDS.has(toolkit.id))
    .map(toCatalogToolkit),
  ...partners,
];

export const getToolkitsWithDocsLinks = async (): Promise<
  ToolkitWithDocsLink[]
> => {
  const { byNormalizedId } = await loadAllToolkitData(resolveToolkitDataDir());
  return toIntegrationCatalog(byNormalizedId.values(), PARTNER_TOOLKITS);
};
