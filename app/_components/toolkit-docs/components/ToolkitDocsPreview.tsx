import type { ToolkitData } from "../types";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import { ToolkitPage } from "./ToolkitPage";

type ToolkitDocsPreviewProps = {
  toolkitId: string;
  fallbackData?: ToolkitData;
};

export async function ToolkitDocsPreview({
  toolkitId,
  fallbackData,
}: ToolkitDocsPreviewProps) {
  const toolkitData = (await readToolkitData(toolkitId)) ?? fallbackData;

  if (!toolkitData) {
    return (
      <p className="text-muted-foreground text-sm">
        Toolkit data not found for {toolkitId}.
      </p>
    );
  }

  return <ToolkitPage data={toolkitData} />;
}
