import { TOOLKITS } from "@arcadeai/design-system";
import { notFound, redirect } from "next/navigation";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import { getToolkitSlug, normalizeToolkitId } from "@/app/_lib/toolkit-slug";

export default async function ToolkitPreviewRedirectPage({
  params,
}: {
  params: Promise<{ toolkitId: string }>;
}) {
  const { toolkitId } = await params;
  const normalizedId = normalizeToolkitId(toolkitId);

  const toolkit = TOOLKITS.find(
    (entry) => normalizeToolkitId(entry.id) === normalizedId
  );
  if (toolkit) {
    const slug = getToolkitSlug({
      id: toolkit.id,
      docsLink: "docsLink" in toolkit ? toolkit.docsLink : undefined,
    });
    redirect(`/en/resources/integrations/${toolkit.category}/${slug}`);
  }

  // Fallback: if this toolkit isn't present in the design system, try the JSON.
  const data = await readToolkitData(normalizedId);
  if (!data) {
    notFound();
  }

  redirect(
    `/en/resources/integrations/${data.metadata.category || "others"}/${getToolkitSlug(
      {
        id: data.id,
        docsLink: data.metadata?.docsLink,
      }
    )}`
  );
}
