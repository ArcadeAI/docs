import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

import { readToolkitData } from "@/app/_lib/toolkit-data";
import { listToolkitRoutes } from "@/app/_lib/toolkit-static-params";

import { toolkitDataToSearchMarkdown } from "./pagefind-toolkit-content";

const OUTPUT_ROOT = join(process.cwd(), "public", "toolkit-markdown");

async function ensureCleanOutput() {
  await rm(OUTPUT_ROOT, { recursive: true, force: true });
  await mkdir(OUTPUT_ROOT, { recursive: true });
}

async function writeToolkitMarkdown() {
  const routes = await listToolkitRoutes();
  let written = 0;

  for (const route of routes) {
    const data = await readToolkitData(route.toolkitId);
    if (!data) {
      continue;
    }

    const markdown = toolkitDataToSearchMarkdown(data);
    const outputDir = join(OUTPUT_ROOT, route.category);
    const outputPath = join(outputDir, `${route.toolkitId}.md`);

    await mkdir(outputDir, { recursive: true });
    await writeFile(outputPath, markdown, "utf-8");
    written += 1;
  }

  console.log(`Generated ${written} toolkit markdown files.`);
}

async function main() {
  await ensureCleanOutput();
  await writeToolkitMarkdown();
}

main().catch((error) => {
  console.error("Failed to generate toolkit markdown:", error);
  process.exitCode = 1;
});
