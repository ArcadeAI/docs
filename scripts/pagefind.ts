import fs from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import glob from "fast-glob";
import { createIndex } from "pagefind";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import { listToolkitRoutes } from "@/app/_lib/toolkit-static-params";
import { toolkitDataToSearchMarkdown } from "../toolkit-docs-generator/scripts/pagefind-toolkit-content";
import {
  extractFrontmatterTitle,
  markdownToHtml,
  stripMdxSyntax,
} from "./pagefind-helpers";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { index } = await createIndex();
if (!index) {
  throw new Error("Failed to create index");
}

console.log("\r\n🔍 BUILDING SEARCH INDEX\r\n");

// valid languages are those in the app directory that do not start with an underscore and are not "api"
const appDir = path.join(__dirname, "..", "app");
const entries = await fs.readdir(appDir);
const languages = await Promise.all(
  entries.map(async (dir: string) => {
    if (dir.startsWith("_") || dir === "api") {
      return null;
    }
    const entryPath = path.join(appDir, dir);
    const stats = await fs.stat(entryPath);
    return stats.isDirectory() ? dir : null;
  })
).then((results) => results.filter((dir): dir is string => dir !== null));

let page_count = 0;

console.log("Building search index for languages: ", languages.join(", "));

for (const language of languages) {
  const sourceDir = path.join(__dirname, "..", "app", language);
  console.log(`Adding directory: ${sourceDir} (raw MDX)`);

  for (const entry of glob.sync("**/*.mdx", { cwd: sourceDir })) {
    // Skip dynamic templates (we index concrete toolkit pages separately).
    if (
      entry.includes("resources/integrations") &&
      entry.includes("[toolkitId]/page.mdx")
    ) {
      continue;
    }

    const filePath = path.join(sourceDir, entry);

    // Build URL from file path
    // Raw MDX: "home/quickstart/page.mdx" -> "/en/home/quickstart"
    const urlPath = entry.split("/page.mdx")[0];
    const url = `/${language}/${urlPath}`;

    const rawContent = await fs.readFile(filePath, "utf-8");
    const title = extractFrontmatterTitle(rawContent);
    const cleaned = stripMdxSyntax(rawContent);
    const html = await markdownToHtml(cleaned);

    const { errors, file } = await index.addHTMLFile({
      url,
      content: `<html lang='${language}'><body>${title ? `<h1>${title}</h1>` : ""}${html}</body></html>`,
    });

    const fileInfo = file
      ? ` (${file.uniqueWords} words${file.meta?.title ? `, title: ${file.meta.title}` : ""})`
      : "";
    console.log(`Adding page: ${url}${fileInfo}`);

    if (errors.length > 0) {
      console.error(`Error adding page: ${url}`);
      console.error(errors);
    }

    page_count += 1;
  }

  // Index toolkit docs pages (rendered from JSON), so search can find tools.
  // These pages live under /en/resources/integrations/<category>/<toolkitId>.
  if (language === "en") {
    const toolkitRoutes = await listToolkitRoutes();
    for (const route of toolkitRoutes) {
      const toolkitData = await readToolkitData(route.toolkitId);
      if (!toolkitData) {
        continue;
      }

      const url = `/en/resources/integrations/${route.category}/${route.toolkitId}`;
      const markdown = toolkitDataToSearchMarkdown(toolkitData);
      const html = await markdownToHtml(markdown);

      const { errors, file } = await index.addHTMLFile({
        url,
        content: `<html lang='en'><body>${html}</body></html>`,
      });

      const fileInfo = file
        ? ` (${file.uniqueWords} words${file.meta?.title ? `, title: ${file.meta.title}` : ""})`
        : "";
      console.log(`Adding page: ${url}${fileInfo}`);

      if (errors.length > 0) {
        console.error(`Error adding page: ${url}`);
        console.error(errors);
      }

      page_count += 1;
    }
  }
}

console.log(`Added ${page_count} pages`);

await index.writeFiles({
  outputPath: path.join(__dirname, "..", "public", "_pagefind"),
});
