import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolkitPage } from "@/app/_components/toolkit-docs";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import { getToolkitSlug, normalizeToolkitId } from "@/app/_lib/toolkit-slug";
import {
  getToolkitStaticParamsForCategory,
  type IntegrationCategory,
} from "@/app/_lib/toolkit-static-params";

type ToolkitDocsParams = {
  toolkitId: string;
};

export function createToolkitDocsPage(category: IntegrationCategory) {
  const dataCache = new Map<string, ReturnType<typeof readToolkitData>>();

  const getToolkitData = async (toolkitId: string) => {
    const cacheKey = normalizeToolkitId(toolkitId);
    const cached = dataCache.get(cacheKey);
    if (cached) {
      return await cached;
    }

    // Pass the original toolkitId (not normalized) so readToolkitData's
    // findToolkitDataBySlug fallback can match hyphenated slugs like "posthog-api".
    const promise = readToolkitData(toolkitId);
    dataCache.set(cacheKey, promise);
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

    // Canonicalize to the toolkit's preferred slug so any alias that resolves
    // to the same content (e.g. a normalized id vs. its docsLink slug) points
    // search engines at one URL.
    const canonicalSlug = getToolkitSlug({
      id: data.id,
      docsLink: data.metadata?.docsLink,
    });

    return {
      title: data.label || data.id,
      description: data.description || "Generated MCP server documentation.",
      alternates: {
        canonical: `/en/resources/integrations/${category}/${canonicalSlug}`,
      },
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
