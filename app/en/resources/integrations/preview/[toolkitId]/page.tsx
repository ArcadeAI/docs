import { TOOLKITS } from "@arcadeai/design-system";
import { notFound, redirect } from "next/navigation";
import { readToolkitData } from "@/app/_lib/toolkit-data";

const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]+/g;

function normalizeToolkitId(value: string): string {
  return value.toLowerCase().replace(TOOLKIT_ID_NORMALIZER, "");
}

export default async function ToolkitPreviewRedirectPage({
  params,
}: {
  params: Promise<{ toolkitId: string }>;
}) {
  const { toolkitId } = await params;
  const normalizedId = normalizeToolkitId(toolkitId);

  const toolkit = TOOLKITS.find(
    (entry) => entry.id.toLowerCase() === normalizedId
  );
  if (toolkit) {
    redirect(`/en/resources/integrations/${toolkit.category}/${normalizedId}`);
  }

  // Fallback: if this toolkit isn't present in the design system, try the JSON.
  const data = await readToolkitData(normalizedId);
  if (!data) {
    notFound();
  }

  redirect(
    `/en/resources/integrations/${data.metadata.category || "others"}/${normalizedId}`
  );
}
