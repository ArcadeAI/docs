import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { readToolkitData } from "../../app/_lib/toolkit-data";
import { listToolkitRoutes } from "../../app/_lib/toolkit-static-params";

import { toolkitDataToSearchMarkdown } from "./pagefind-toolkit-content";

const DEFAULT_OUTPUT_ROOT = join(process.cwd(), "public", "toolkit-markdown");

export type GenerateToolkitMarkdownOptions = {
  outputRoot?: string;
  routes?: Array<{ category: string; toolkitId: string }>;
  readToolkitDataFn?: typeof readToolkitData;
  listToolkitRoutesFn?: typeof listToolkitRoutes;
  toMarkdown?: (toolkit: Awaited<ReturnType<typeof readToolkitData>>) => string;
  failOnEmptyRoutes?: boolean;
};

type GenerateResult = {
  outputRoot: string;
  written: number;
  skipped: number;
};

const shouldFailOnEmptyRoutes = (flag?: boolean): boolean =>
  flag ?? Boolean(process.env.CI || process.env.VERCEL);

async function ensureCleanOutput(outputRoot: string) {
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });
}

export async function generateToolkitMarkdown(
  options: GenerateToolkitMarkdownOptions = {}
): Promise<GenerateResult> {
  const outputRoot = options.outputRoot ?? DEFAULT_OUTPUT_ROOT;
  const routes =
    options.routes ??
    (await (options.listToolkitRoutesFn ?? listToolkitRoutes)());
  const failOnEmpty = shouldFailOnEmptyRoutes(options.failOnEmptyRoutes);

  if (routes.length === 0) {
    const message = "No toolkit routes found. Skipping markdown generation.";
    if (failOnEmpty) {
      throw new Error(message);
    }
    console.warn(message);
    return { outputRoot, written: 0, skipped: 0 };
  }

  await ensureCleanOutput(outputRoot);

  let written = 0;
  let skipped = 0;

  for (const route of routes) {
    const data = await (options.readToolkitDataFn ?? readToolkitData)(
      route.toolkitId
    );
    if (!data) {
      skipped += 1;
      continue;
    }

    const markdown = (options.toMarkdown ?? toolkitDataToSearchMarkdown)(data);
    const outputDir = join(outputRoot, route.category);
    const outputPath = join(outputDir, `${route.toolkitId}.md`);

    await mkdir(outputDir, { recursive: true });
    await writeFile(outputPath, markdown, "utf-8");
    written += 1;
  }

  if (written === 0 && failOnEmpty) {
    throw new Error(
      "No toolkit markdown generated. Check toolkit-docs-generator/data/toolkits output."
    );
  }

  console.log(`Generated ${written} toolkit markdown files.`);
  return { outputRoot, written, skipped };
}

async function main() {
  await generateToolkitMarkdown();
}

main().catch((error) => {
  console.error("Failed to generate toolkit markdown:", error);
  process.exitCode = 1;
});
