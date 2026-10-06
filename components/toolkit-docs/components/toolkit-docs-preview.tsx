import { readToolkitData } from "@/lib/toolkit-data";
import type { ToolkitData } from "../types";
import { ToolkitPage } from "./toolkit-page";

interface ToolkitDocsPreviewProps {
  fallbackData?: ToolkitData;
  toolkitId: string;
}

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
