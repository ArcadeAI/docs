import type { Toolkit } from "@arcadeai/design-system";
import { TOOLKITS } from "@arcadeai/design-system/metadata/toolkits";
import { PARTNER_TOOLKITS } from "@/app/_data/partner-toolkits";
import { normalizeToolkitId } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";
import { readToolkitData } from "./toolkit-data";
import type { ToolkitWithDocsLink } from "./toolkit-slug";

const getToolkitDocsLink = (toolkit: Toolkit): string | undefined => {
  if ("docsLink" in toolkit) {
    const value = (toolkit as ToolkitWithDocsLink).docsLink;
    return value ?? undefined;
  }
  return;
};

/**
 * Toolkits that have launched but are still flagged `isComingSoon` in the
 * design-system catalog. Remove an entry once DS ships the flag as `false`.
 */
const LAUNCHED_TOOLKIT_IDS = new Set(["workday"]);

const clearLaunchedComingSoon = (toolkit: Toolkit): Toolkit =>
  LAUNCHED_TOOLKIT_IDS.has(normalizeToolkitId(toolkit.id))
    ? { ...toolkit, isComingSoon: false }
    : toolkit;

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

  const dsToolkits: ToolkitWithDocsLink[] = TOOLKITS.map((dsToolkit) => {
    const toolkit = clearLaunchedComingSoon(dsToolkit);
    const existing = getToolkitDocsLink(toolkit);
    const docsLink =
      existing ?? docsLinkById.get(normalizeToolkitId(toolkit.id));

    return docsLink ? { ...toolkit, docsLink } : toolkit;
  });

  return [...dsToolkits, ...PARTNER_TOOLKITS];
};
