import { Suspense } from "react";
import { getToolkitsWithDocsLinks } from "@/app/_lib/integration-catalog";
import { resolveIndexToolkits } from "@/app/_lib/integration-index";
import { listValidIntegrationLinks } from "@/app/_lib/toolkit-static-params";
import ToolkitsClient from "./toolkits-client";

export default async function Toolkits() {
  const [toolkits, validLinks] = await Promise.all([
    getToolkitsWithDocsLinks(),
    listValidIntegrationLinks(),
  ]);
  // Resolve which cards link to a real page. Doc-less catalog entries are kept
  // but rendered non-clickable; bare duplicates of "-api" toolkits are dropped.
  const resolvedToolkits = resolveIndexToolkits(toolkits, validLinks);
  // Suspense boundary is required because ToolkitsClient calls
  // useSearchParams(); without it, Next.js bails out of static prerendering
  // for the whole page.
  return (
    <Suspense fallback={null}>
      <ToolkitsClient toolkits={resolvedToolkits} />
    </Suspense>
  );
}
