import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolkitPage } from "@/app/_components/toolkit-docs";
import { readToolkitData, toToolkitSummary } from "@/app/_lib/toolkit-data";
import {
  getToolkitCanonicalPath,
  getToolkitStaticParamsForCategory,
} from "@/app/_lib/toolkit-static-params";
import type { IntegrationCategory } from "@/toolkit-docs-generator/src/shared/toolkit-primitives";

type ToolkitDocsParams = {
  toolkitId: string;
};

export function createToolkitDocsPage(category: IntegrationCategory) {
  // readToolkitData is itself backed by a shared, process-wide cache (see
  // loadAllToolkitData in app/_lib/toolkit-data.ts), so generateMetadata and
  // Page below calling it separately for the same toolkitId costs one map
  // lookup each rather than a second file read — no per-factory cache needed
  // here.
  const getToolkitData = (toolkitId: string) => readToolkitData(toolkitId);

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

    // Canonicalize to the toolkit's own category + slug, not the URL it was
    // reached through. The dynamic [toolkitId] route accepts any category, so a
    // wrong-category alias (e.g. development/pagerduty-api for a customer-support
    // toolkit) must point at the one generated, index-linked page.
    const canonical = getToolkitCanonicalPath({
      id: data.id,
      category: data.metadata?.category,
      docsLink: data.metadata?.docsLink,
    });

    const metadata: Metadata = {
      title: data.label || data.id,
      description: data.description || "Generated MCP server documentation.",
      alternates: { canonical },
    };

    // Hidden toolkits stay reachable via the dynamic route (and render as
    // non-clickable cards in the index), but must not be indexed — otherwise
    // their self-canonical is flagged as an orphan with no incoming links.
    if (data.metadata?.isHidden) {
      metadata.robots = { index: false };
    }

    return metadata;
  };

  const Page = async ({ params }: { params: Promise<ToolkitDocsParams> }) => {
    const { toolkitId } = await params;
    const data = await getToolkitData(toolkitId);

    if (!data) {
      notFound();
    }

    // Pass a summary (per-tool detail stripped) so the heavy fields never enter
    // the initial Flight payload — detail is fetched on expand. See MARTECH-17.
    return <ToolkitPage data={toToolkitSummary(data)} />;
  };

  return { generateMetadata, generateStaticParams, Page };
}
