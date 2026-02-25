import { TOOLKITS, type Toolkit } from "@arcadeai/design-system";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import { normalizeToolkitId } from "@/app/_lib/toolkit-slug";
import ToolkitsClient from "./toolkits-client";

type ToolkitWithDocsLink = Toolkit & { docsLink?: string | null };

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
