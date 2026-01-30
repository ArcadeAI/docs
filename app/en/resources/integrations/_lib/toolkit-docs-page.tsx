import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolkitPage } from "@/app/_components/toolkit-docs";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import {
  getToolkitStaticParamsForCategory,
  type IntegrationCategory,
  normalizeToolkitId,
} from "@/app/_lib/toolkit-static-params";

type ToolkitDocsParams = {
  toolkitId: string;
};

export function createToolkitDocsPage(category: IntegrationCategory) {
  const dataCache = new Map<string, ReturnType<typeof readToolkitData>>();

  const getToolkitData = async (toolkitId: string) => {
    const normalizedId = normalizeToolkitId(toolkitId);
    const cached = dataCache.get(normalizedId);
    if (cached) {
      return await cached;
    }

    const promise = readToolkitData(normalizedId);
    dataCache.set(normalizedId, promise);
    return await promise;
  };

  const generateStaticParams = async () =>
    await getToolkitStaticParamsForCategory(category);

  const generateMetadata = async ({
    params,
  }: {
    params: Promise<ToolkitDocsParams>;
  }): Promise<Metadata> => {
    const { toolkitId } = await params;
    const data = await getToolkitData(toolkitId);
    if (!data) {
      return {};
    }

    return {
      title: data.label || data.id,
      description: data.description || "Generated MCP server documentation.",
    };
  };

  const Page = async ({ params }: { params: Promise<ToolkitDocsParams> }) => {
    const { toolkitId } = await params;
    const data = await getToolkitData(toolkitId);

    if (!data) {
      notFound();
    }

    return <ToolkitPage data={data} />;
  };

  return { generateMetadata, generateStaticParams, Page };
}
