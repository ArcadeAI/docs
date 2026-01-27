"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToolkitPage } from "@/app/_components/toolkit-docs/components/toolkit-page";
import type { ToolkitData } from "@/app/_components/toolkit-docs/types";

export function ToolkitPreviewContent() {
  const params = useParams();
  const toolkitId = params.toolkitId as string;
  const [data, setData] = useState<ToolkitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`/api/toolkit-data/${toolkitId}`);
        if (!response.ok) {
          throw new Error(`Toolkit not found: ${toolkitId}`);
        }
        const toolkitData = await response.json();
        setData(toolkitData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load toolkit");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [toolkitId]);

  if (loading) {
    return <p className="text-muted-foreground">Loading toolkit data...</p>;
  }

  if (error || !data) {
    return (
      <p className="text-red-500">
        {error || `Toolkit "${toolkitId}" not found.`}
      </p>
    );
  }

  return <ToolkitPage data={data} />;
}
