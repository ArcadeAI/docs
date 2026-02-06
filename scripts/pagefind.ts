import fs from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import glob from "fast-glob";
import { createIndex } from "pagefind";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Directory containing pre-generated clean markdown files
const CLEAN_MARKDOWN_DIR = path.join(__dirname, "..", "public", "_markdown");

/**
 * Converts clean markdown to HTML for Pagefind indexing.
 * This function expects pre-cleaned markdown (no MDX syntax).
 */
async function markdownToHtml(markdownContent: string): Promise<string> {
  try {
    const result = await remark()
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(markdownContent);

    return String(result);
  } catch (error) {
    console.warn(
      `Warning: Failed to convert markdown to HTML, using plain text: ${error}`
    );
    return markdownContent;
  }
}

/**
 * Checks if clean markdown files exist and returns the appropriate source directory
 */
async function getMarkdownSource(language: string): Promise<{
  dir: string;
  pattern: string;
  isClean: boolean;
}> {
  const cleanDir = path.join(CLEAN_MARKDOWN_DIR, language);

  try {
    await fs.access(cleanDir);
    const files = await fs.readdir(cleanDir);
    if (files.length > 0) {
      return { dir: cleanDir, pattern: "**/*.md", isClean: true };
    }
  } catch {
    // Clean markdown directory doesn't exist
  }

  // Fallback to raw MDX (with warning)
  console.warn(
    `⚠️  Clean markdown not found for ${language}, falling back to raw MDX`
  );
  console.warn(
    `   Run "pnpm run generate:markdown" first to generate clean files`
  );
  return {
    dir: path.join(__dirname, "..", "app", language),
    pattern: "**/*.mdx",
    isClean: false,
  };
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
  const source = await getMarkdownSource(language);

  console.log(
    `Adding directory: ${source.dir} (${source.isClean ? "clean markdown" : "raw MDX"})`
  );

  for (const entry of glob.sync(source.pattern, { cwd: source.dir })) {
    const filePath = path.join(source.dir, entry);

    // Build URL from file path
    // Clean markdown: "home/quickstart.md" -> "/en/home/quickstart"
    // Raw MDX: "home/quickstart/page.mdx" -> "/en/home/quickstart"
    let urlPath: string;
    if (source.isClean) {
      urlPath = entry.replace(/\.md$/, "");
    } else {
      urlPath = entry.split("/page.mdx")[0];
    }
    const url = `/${language}/${urlPath}`;

    const markdownContent = await fs.readFile(filePath, "utf-8");
    const htmlContent = await markdownToHtml(markdownContent);

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
}

console.log(`Added ${page_count} pages`);

await index.writeFiles({
  outputPath: path.join(__dirname, "..", "public", "_pagefind"),
});
