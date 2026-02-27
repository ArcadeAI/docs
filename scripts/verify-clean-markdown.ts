import { existsSync } from "node:fs";
import path from "node:path";
import fg from "fast-glob";
import pc from "picocolors";

const MARKDOWN_DIR = "public/_markdown";
const APP_PREFIX_PATTERN = /^app\//;
const PAGE_MDX_SUFFIX_PATTERN = /\/page\.mdx$/;
const MAX_MISSING_TO_PRINT = 25;

function mdxPathToRelativePath(mdxFile: string): string {
  return mdxFile
    .replace(APP_PREFIX_PATTERN, "")
    .replace(PAGE_MDX_SUFFIX_PATTERN, "");
}

async function main() {
  console.log(pc.bold(pc.blue("\n🔍 Verifying clean markdown completeness...\n")));

  const mdxFiles = await fg("app/**/page.mdx", {
    ignore: [
      "app/_*/**",
      // Skip dynamic routes rendered from data sources.
      "app/**/\\[*\\]/**",
    ],
  });

  if (mdxFiles.length === 0) {
    throw new Error("No MDX pages found to validate.");
  }

  const expectedMarkdownTargets = mdxFiles.map((mdxFile) =>
    path.join(MARKDOWN_DIR, `${mdxPathToRelativePath(mdxFile)}.md`)
  );
  const generatedMarkdownFiles = await fg(`${MARKDOWN_DIR}/**/*.md`);

  if (generatedMarkdownFiles.length === 0) {
    throw new Error(
      "No generated clean markdown files found. Ensure generate:markdown ran successfully."
    );
  }

  const missing = expectedMarkdownTargets.filter(
    (targetPath) => !existsSync(targetPath)
  );

  if (missing.length > 0) {
    console.error(
      pc.red(
        `✗ Missing ${missing.length} generated clean markdown files (showing first ${Math.min(missing.length, MAX_MISSING_TO_PRINT)}):`
      )
    );
    for (const markdownPath of missing.slice(0, MAX_MISSING_TO_PRINT)) {
      const mdxPath = markdownPath
        .replace(/^public\/_markdown\//, "app/")
        .replace(/\.md$/, "/page.mdx");
      console.error(pc.red(`  - ${mdxPath} -> ${markdownPath}`));
    }
    throw new Error(
      "Clean markdown generation is incomplete. Failing postbuild verification."
    );
  }

  console.log(
    pc.green(
      `✓ Verified clean markdown completeness: ${generatedMarkdownFiles.length} generated files for ${expectedMarkdownTargets.length} expected pages`
    )
  );
}

main().catch((error) => {
  console.error(pc.red("\n✗ Clean markdown verification failed"), error);
  process.exit(1);
});
