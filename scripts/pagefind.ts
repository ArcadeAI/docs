import fs from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import glob from "fast-glob";
import { createIndex } from "pagefind";

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
  const searchPath = path.join(__dirname, "..", "app", language);

  console.log(`Adding directory: ${searchPath}`);

  for (const entry of glob.sync("**/*.mdx", { cwd: searchPath })) {
    const filePath = path.join(searchPath, entry);
    const url = `/${language}/${entry.split("/page.mdx")[0]}`;
    console.log(`Adding page: ${url}`);
    const content = await fs.readFile(filePath, "utf-8");
    await index.addCustomRecord({
      url,
      content,
      language,
      sort: {
        weight: filePath.includes("mcp-servers") ? "10" : "50",
      },
    });

    page_count += 1;
  }
}

console.log(`Added ${page_count} pages`);

await index.writeFiles({
  outputPath: path.join(__dirname, "..", "public", "_pagefind"),
});
