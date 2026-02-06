import fs from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import glob from "fast-glob";
import { createIndex } from "pagefind";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import { readToolkitData } from "@/app/_lib/toolkit-data";
import { listToolkitRoutes } from "@/app/_lib/toolkit-static-params";
import { toolkitDataToSearchMarkdown } from "../toolkit-docs-generator/scripts/pagefind-toolkit-content";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Regex patterns for cleaning MDX content
const FRONTMATTER_REGEX = /^---\n[\s\S]*?\n---\n?/m;
const IMPORT_REGEX = /^import\s+.*?from\s+['"].*?['"];?\n?/gm;
const EXPORT_REGEX = /^export\s+(?:const|function|class|default|{).*?;?\n?/gm;
const JSX_SELF_CLOSING_REGEX = /<[A-Z]\w*(?:\s+[^>]*)?\/>/g;
const JSX_COMPONENT_REGEX = /<[A-Z]\w*(?:\s+[^>]*)?>[\s\S]*?<\/[A-Z]\w*>/g;
const JSX_CUSTOM_COMPONENT_REGEX =
  /<[A-Z][\w.]*(?:\s+[^>]*)?>[\s\S]*?<\/[A-Z][\w.]*>/g;

/**
 * Converts MDX content to simple HTML by stripping MDX-specific syntax
 * and converting markdown to HTML. Skips what can't be rendered.
 */
async function markdownToHtml(mdxContent: string): Promise<string> {
  try {
    let content = mdxContent;

    // Remove frontmatter (---\n...\n---)
    content = content.replace(FRONTMATTER_REGEX, "");

    // Remove import statements
    content = content.replace(IMPORT_REGEX, "");

    // Remove export statements (but keep default exports that might be content)
    content = content.replace(EXPORT_REGEX, "");

    // Remove JSX components (both self-closing and with children)
    // This regex matches <Component /> and <Component>...</Component>
    content = content.replace(JSX_SELF_CLOSING_REGEX, "");
    content = content.replace(JSX_COMPONENT_REGEX, "");

    // Remove remaining JSX-like tags that might be custom components
    content = content.replace(JSX_CUSTOM_COMPONENT_REGEX, "");

    // Convert markdown to HTML using remark/rehype (same ecosystem as Nextra)
    const result = await remark()
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(content);

    return String(result);
  } catch (error) {
    // If markdown parsing fails, return the cleaned content as plain text
    // This ensures we still index the content even if HTML conversion fails
    console.warn(
      `Warning: Failed to convert markdown to HTML, using plain text: ${error}`
    );
    // Return the cleaned content (without MDX syntax) as fallback
    let cleaned = mdxContent;
    cleaned = cleaned.replace(FRONTMATTER_REGEX, "");
    cleaned = cleaned.replace(IMPORT_REGEX, "");
    cleaned = cleaned.replace(EXPORT_REGEX, "");
    cleaned = cleaned.replace(JSX_SELF_CLOSING_REGEX, "");
    cleaned = cleaned.replace(JSX_COMPONENT_REGEX, "");
    cleaned = cleaned.replace(JSX_CUSTOM_COMPONENT_REGEX, "");
    return cleaned;
  }
}

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
  const searchPath = path.join(__dirname, "..", "app", language);

  console.log(`Adding directory: ${searchPath}`);

  for (const entry of glob.sync("**/*.mdx", { cwd: searchPath })) {
    // Skip dynamic templates (we index concrete toolkit pages separately).
    if (
      entry.includes("resources/integrations") &&
      entry.includes("[toolkitId]/page.mdx")
    ) {
      continue;
    }

    const filePath = path.join(searchPath, entry);
    const url = `/${language}/${entry.split("/page.mdx")[0]}`;
    const mdxContent = await fs.readFile(filePath, "utf-8");
    const htmlContent = await markdownToHtml(mdxContent);

    const { errors, file } = await index.addHTMLFile({
      url,
      content: `<html lang='${language}'><body>${htmlContent}</body></html>`,
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
      const htmlContent = await markdownToHtml(markdown);

      const { errors, file } = await index.addHTMLFile({
        url,
        content: `<html lang='en'><body>${htmlContent}</body></html>`,
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
