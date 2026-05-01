import { TOOLKITS, type Toolkit } from "@arcadeai/design-system";
import { Suspense } from "react";
import { PARTNER_TOOLKITS } from "@/app/_data/partner-toolkits";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import {
  normalizeToolkitId,
  type ToolkitWithDocsLink,
} from "@/app/_lib/toolkit-slug";
import ToolkitsClient from "./toolkits-client";

const getToolkitDocsLink = (toolkit: Toolkit): string | undefined => {
  if ("docsLink" in toolkit) {
    const value = (toolkit as ToolkitWithDocsLink).docsLink;
    return value ?? undefined;
  }
  return;
};

const getToolkitsWithDocsLinks = async (): Promise<ToolkitWithDocsLink[]> => {
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

export default async function Toolkits() {
  const toolkits = await getToolkitsWithDocsLinks();
  // Suspense boundary is required because ToolkitsClient calls
  // useSearchParams(); without it, Next.js bails out of static prerendering
  // for the whole page.
  return (
    <Suspense fallback={null}>
      <ToolkitsClient toolkits={toolkits} />
    </Suspense>
  );
}
