/**
 * Static Markdown Generation Script
 *
 * Generates pre-rendered markdown files from MDX pages for LLM consumption.
 * Outputs to public/en/ so files are served directly by Next.js/CDN.
 *
 * Usage: pnpm dlx tsx scripts/generate-markdown.ts
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import fastGlob from "fast-glob";
import { mdxToMarkdown } from "../lib/mdx-to-markdown";

const OUTPUT_DIR = join(process.cwd(), "public");
const SEPARATOR_WIDTH = 50;
const RESOURCE_FILE_REGEX =
  /\.(png|jpg|jpeg|gif|svg|webp|mp4|webm|pdf|zip|tar|gz)$/i;

/**
 * Rewrite internal links to point to .md files
 * - /references/foo → /en/references/foo.md
 * - /en/references/foo → /en/references/foo.md
 * - External links, anchors, and resource links are unchanged
 */
function rewriteLinksToMarkdown(markdown: string): string {
  // Match markdown links: [text](url)
  return markdown.replace(
    /\[([^\]]*)\]\(([^)]+)\)/g,
    (match, text, url: string) => {
      // Skip external links
      if (
        url.startsWith("http://") ||
        url.startsWith("https://") ||
        url.startsWith("mailto:")
      ) {
        return match;
      }

      // Skip anchor-only links
      if (url.startsWith("#")) {
        return match;
      }

      // Skip resource links (images, videos, files)
      if (
        RESOURCE_FILE_REGEX.test(url) ||
        url.startsWith("/images/") ||
        url.startsWith("/videos/") ||
        url.startsWith("/files/")
      ) {
        return match;
      }

      // Skip if already has .md extension
      if (url.endsWith(".md")) {
        return match;
      }

      // Handle anchor in URL
      let anchor = "";
      let pathPart = url;
      const anchorIndex = url.indexOf("#");
      if (anchorIndex !== -1) {
        anchor = url.slice(anchorIndex);
        pathPart = url.slice(0, anchorIndex);
      }

      // Add /en prefix if not present (internal doc links)
      if (pathPart.startsWith("/") && !pathPart.startsWith("/en/")) {
        pathPart = `/en${pathPart}`;
      }

      // Add .md extension
      const newUrl = `${pathPart}.md${anchor}`;
      return `[${text}](${newUrl})`;
    }
  );
}

async function generateMarkdownFiles() {
  console.log("Generating static markdown files...\n");

  // Find all MDX pages
  const mdxFiles = await fastGlob("app/en/**/page.mdx", {
    cwd: process.cwd(),
    absolute: false,
  });

  console.log(`Found ${mdxFiles.length} MDX files\n`);

  let successCount = 0;
  let errorCount = 0;
  const errors: { file: string; error: string }[] = [];

  for (const mdxFile of mdxFiles) {
    try {
      // Read MDX content
      const mdxPath = join(process.cwd(), mdxFile);
      const mdxContent = await readFile(mdxPath, "utf-8");

      // Compute paths
      // app/en/references/auth-providers/page.mdx → /en/references/auth-providers
      const relativePath = mdxFile
        .replace("app/", "/")
        .replace("/page.mdx", "");

      // Convert to markdown
      let markdown = await mdxToMarkdown(mdxContent, relativePath);

      // Rewrite links to point to .md files
      markdown = rewriteLinksToMarkdown(markdown);

      // Output path: public/en/references/auth-providers.md
      const outputPath = join(OUTPUT_DIR, `${relativePath}.md`);

      // Ensure directory exists
      await mkdir(dirname(outputPath), { recursive: true });

      // Write markdown file
      await writeFile(outputPath, markdown, "utf-8");

      successCount += 1;
      process.stdout.write(`✓ ${relativePath}.md\n`);
    } catch (error) {
      errorCount += 1;
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      errors.push({ file: mdxFile, error: errorMessage });
      process.stdout.write(`✗ ${mdxFile}: ${errorMessage}\n`);
    }
  }

  console.log(`\n${"=".repeat(SEPARATOR_WIDTH)}`);
  console.log(`Generated: ${successCount} files`);
  if (errorCount > 0) {
    console.log(`Errors: ${errorCount} files`);
    console.log("\nFailed files:");
    for (const { file, error } of errors) {
      console.log(`  - ${file}: ${error}`);
    }
  }
  console.log("=".repeat(SEPARATOR_WIDTH));

  // Exit with error code if any files failed
  if (errorCount > 0) {
    process.exit(1);
  }
}

// Run the script
generateMarkdownFiles().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
