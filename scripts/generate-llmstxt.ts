import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import glob from "fast-glob";
import OpenAI from "openai";
import pc from "picocolors";

type PageMetadata = {
  path: string;
  url: string;
  content: string;
};

type Section = {
  name: string;
  pages: Array<{
    title: string;
    url: string;
    description: string;
  }>;
};

type LlmsTxtMetadata = {
  gitSha: string;
  generationDate: string;
};

const BASE_URL = "https://docs.arcade.dev";
const OUTPUT_PATH = path.join(process.cwd(), "public", "llms.txt");

// Regex patterns used in path processing
const APP_EN_PREFIX_REGEX = /^app\/en\//;
const PAGE_MDX_SUFFIX_REGEX = /\/page\.mdx$/;
const MDX_SUFFIX_REGEX = /\.mdx$/;
const TITLE_H1_REGEX = /^#\s+(.+)$/m;
const EN_LOCALE_PREFIX_REGEX = /^en\//;
const MD_EXTENSION_REGEX = /\.md$/;
const METADATA_REGEX =
  /^<!--\s*git-sha:\s*([^\s]+)\s+generation-date:\s*([^\s]+)\s*-->/;
const LINK_REGEX = /- \[([^\]]+)\]\(([^)]+)\):\s*(.+)$/gm;

// Constants for content processing
const MAX_CONTENT_LENGTH = 4000;
const BATCH_DELAY_MS = 1000;
const SHA_SHORT_LENGTH = 7;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Gets the current git SHA
 */
function getCurrentGitSha(): string {
  try {
    return execSync("git rev-parse HEAD", { encoding: "utf-8" }).trim();
  } catch (_error) {
    console.error(
      pc.red("✗ Could not get git SHA. Make sure you're in a git repository.")
    );
    throw new Error("Failed to get git SHA");
  }
}

/**
 * Parses metadata from existing llms.txt file
 */
async function parseLlmsTxtMetadata(): Promise<LlmsTxtMetadata | null> {
  try {
    const content = await fs.readFile(OUTPUT_PATH, "utf-8");
    const metadataMatch = content.match(METADATA_REGEX);
    if (metadataMatch) {
      return {
        gitSha: metadataMatch[1],
        generationDate: metadataMatch[2],
      };
    }
  } catch (_error) {
    // File doesn't exist or can't be read - that's okay
  }
  return null;
}

/**
 * Gets changed files since the last git SHA
 */
function getChangedFilesSince(lastSha: string): Set<string> {
  try {
    // Get files that were added, modified, or deleted
    const added = execSync(
      `git diff --name-only --diff-filter=A ${lastSha} HEAD`,
      {
        encoding: "utf-8",
      }
    )
      .trim()
      .split("\n")
      .filter((line) => line.length > 0);

    const modified = execSync(
      `git diff --name-only --diff-filter=M ${lastSha} HEAD`,
      { encoding: "utf-8" }
    )
      .trim()
      .split("\n")
      .filter((line) => line.length > 0);

    const deleted = execSync(
      `git diff --name-only --diff-filter=D ${lastSha} HEAD`,
      {
        encoding: "utf-8",
      }
    )
      .trim()
      .split("\n")
      .filter((line) => line.length > 0);

    const allChanged = new Set([...added, ...modified, ...deleted]);
    return allChanged;
  } catch (_error) {
    console.warn(
      pc.yellow(
        `⚠ Could not get changed files since ${lastSha}, processing all files`
      )
    );
    return new Set();
  }
}

/**
 * Extracts existing page summaries from llms.txt
 */
async function extractExistingSummaries(): Promise<
  Map<string, { title: string; description: string }>
> {
  const summaries = new Map<string, { title: string; description: string }>();
  try {
    const content = await fs.readFile(OUTPUT_PATH, "utf-8");
    // Match markdown links with descriptions: - [title](url): description
    let match: RegExpExecArray | null;
    // biome-ignore lint/suspicious/noAssignInExpressions: needed for regex.exec loop
    while ((match = LINK_REGEX.exec(content)) !== null) {
      const title = match[1];
      const url = match[2];
      const description = match[3].trim();
      summaries.set(url, { title, description });
    }
  } catch (_error) {
    // File doesn't exist or can't be read - that's okay
  }
  return summaries;
}

/**
 * Discovers all MDX pages in the documentation
 */
async function discoverPages(): Promise<PageMetadata[]> {
  console.log(pc.blue("📄 Discovering MDX pages..."));

  const mdxFiles = glob.sync("app/en/**/*.mdx", {
    cwd: process.cwd(),
    ignore: ["**/node_modules/**", "**/_*.mdx"],
  });

  const pages: PageMetadata[] = [];

  for (const filePath of mdxFiles) {
    const fullPath = path.join(process.cwd(), filePath);
    const content = await fs.readFile(fullPath, "utf-8");

    // Convert file path to URL (with .md extension for raw markdown access)
    const relativePath = filePath
      .replace(APP_EN_PREFIX_REGEX, "")
      .replace(PAGE_MDX_SUFFIX_REGEX, "")
      .replace(MDX_SUFFIX_REGEX, "");

    // Add locale prefix and .md extension for raw markdown access
    const url = `${BASE_URL}/en/${relativePath}.md`;

    pages.push({
      path: filePath,
      url,
      content,
    });
  }

  console.log(pc.green(`✓ Found ${pages.length} pages`));
  return pages;
}

/**
 * Summarizes a page using OpenAI
 */
async function summarizePage(
  page: PageMetadata
): Promise<{ title: string; description: string }> {
  try {
    // Extract title from content (first H1)
    const titleMatch = page.content.match(TITLE_H1_REGEX);
    const title = titleMatch
      ? titleMatch[1].trim()
      : path.basename(page.path, ".mdx");

    // Prepare content for summarization (remove code blocks for better summarization)
    const contentForSummary = page.content
      .replace(/```[\s\S]*?```/g, "[code block]")
      .replace(/import\s+.*from\s+['"].*['"]/g, "")
      .slice(0, MAX_CONTENT_LENGTH);

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a technical documentation summarizer. Create a single, concise description (max 3 sentences) that captures the main purpose of this documentation page. Focus on what the page helps users accomplish or learn.",
        },
        {
          role: "user",
          content: `Summarize this documentation page:\n\nTitle: ${title}\n\nContent:\n${contentForSummary}`,
        },
      ],
      temperature: 0.3,
      max_tokens: 50,
    });

    const description =
      response.choices[0]?.message?.content?.trim() || "Documentation page";

    return { title, description };
  } catch (error) {
    console.error(pc.red(`✗ Error summarizing ${page.path}:`), error);
    // Fallback to extracting title from content
    const titleMatch = page.content.match(TITLE_H1_REGEX);
    const title = titleMatch
      ? titleMatch[1].trim()
      : path.basename(page.path, ".mdx");
    return {
      title,
      description: "Documentation page",
    };
  }
}

/**
 * Organizes pages into sections based on their path
 */
function organizeSections(
  pages: Array<PageMetadata & { title: string; description: string }>
): Section[] {
  const sectionMap = new Map<string, Section>();

  for (const page of pages) {
    // Determine section from URL path (strip base URL, locale, and .md extension)
    const urlPath = page.url
      .replace(`${BASE_URL}/`, "")
      .replace(EN_LOCALE_PREFIX_REGEX, "")
      .replace(MD_EXTENSION_REGEX, "");
    const parts = urlPath.split("/");

    let sectionName: string;
    if (parts[0] === "home") {
      // Organize home pages by subcategory
      if (parts.length > 1) {
        sectionName = formatSectionName(parts[1]);
      } else {
        sectionName = "Getting Started";
      }
    } else if (parts[0] === "mcp-servers") {
      // Organize MCP servers by category
      if (parts.length > 1) {
        sectionName = `MCP Servers - ${formatSectionName(parts[1])}`;
      } else {
        sectionName = "MCP Servers";
      }
    } else if (parts[0] === "references") {
      sectionName = "API Reference";
    } else {
      sectionName = "Documentation";
    }

    if (!sectionMap.has(sectionName)) {
      sectionMap.set(sectionName, {
        name: sectionName,
        pages: [],
      });
    }

    const section = sectionMap.get(sectionName);
    if (section) {
      section.pages.push({
        title: page.title,
        url: page.url,
        description: page.description,
      });
    }
  }

  // Sort sections and pages within sections
  const sections = Array.from(sectionMap.values())
    .sort((a, b) => {
      // Custom sorting: Getting Started first, then alphabetical
      if (a.name === "Getting Started") {
        return -1;
      }
      if (b.name === "Getting Started") {
        return 1;
      }
      return a.name.localeCompare(b.name);
    })
    .map((section) => ({
      ...section,
      pages: section.pages.sort((a, b) => a.title.localeCompare(b.title)),
    }));

  return sections;
}

/**
 * Formats a section name from a path segment
 */
function formatSectionName(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Generates the llms.txt file content
 */
function generateLlmsTxt(
  sections: Section[],
  metadata: LlmsTxtMetadata
): string {
  const lines: string[] = [];

  // Metadata comment (hidden in markdown but parseable)
  lines.push(
    `<!-- git-sha: ${metadata.gitSha} generation-date: ${metadata.generationDate} -->`
  );
  lines.push("");

  // Header
  lines.push("# Arcade");
  lines.push("");
  lines.push("> Arcade is the only runtime for MCP");
  lines.push("");
  lines.push(
    "As the MCP runtime, Arcade is the only one able to deliver secure agent authorization, high-accuracy tools, and centralized governance. Deploy multi-user AI agents that take actions across any system with granular permissions and complete visibility. No complex infrastructure required. Ship faster and scale with control."
  );
  lines.push("");
  lines.push(
    "Arcade delivers three core capabilities: Deploy agents even your security team will love with authorization-first architecture. Unlock highest accuracy actions across all MCP tools with agent-optimized integrations and the Arcade TDK. Maintain centralized control over production MCP without slowing down AI development. Access 1000s of pre-built MCP servers or bring your own, with unified governance across all tools."
  );
  lines.push("");

  // Main sections
  const mainSections = sections.filter((s) => !s.name.startsWith("Optional"));
  for (const section of mainSections) {
    lines.push(`## ${section.name}`);
    lines.push("");
    for (const page of section.pages) {
      lines.push(`- [${page.title}](${page.url}): ${page.description}`);
    }
    lines.push("");
  }

  // Optional section (if needed)
  const optionalSections = sections.filter((s) =>
    s.name.startsWith("Optional")
  );
  if (optionalSections.length > 0) {
    lines.push("## Optional");
    lines.push("");
    for (const section of optionalSections) {
      for (const page of section.pages) {
        lines.push(`- [${page.title}](${page.url}): ${page.description}`);
      }
    }
    lines.push("");
  }

  return lines.join("\n");
}

/**
 * Determines which pages need summarization based on changes
 */
function determinePagesToSummarize(
  pages: PageMetadata[],
  previousMetadata: LlmsTxtMetadata | null,
  existingSummaries: Map<string, { title: string; description: string }>
): {
  pagesToSummarize: PageMetadata[];
  pagesToKeep: Array<PageMetadata & { title: string; description: string }>;
  hasChanges: boolean;
} {
  const pagesToSummarize: PageMetadata[] = [];
  const pagesToKeep: Array<
    PageMetadata & { title: string; description: string }
  > = [];
  let hasChanges = false;

  if (previousMetadata && previousMetadata.gitSha !== "unknown") {
    // Get changed files since last generation
    const changedFiles = getChangedFilesSince(previousMetadata.gitSha);
    console.log(
      pc.blue(
        `\n📊 Found ${changedFiles.size} changed files since last generation`
      )
    );

    // Create a set of current page URLs for quick lookup
    const currentPageUrls = new Set(pages.map((page) => page.url));

    // Identify deleted pages (pages that exist in previous llms.txt but not in current filesystem)
    const deletedPageUrls = Array.from(existingSummaries.keys()).filter(
      (url) => !currentPageUrls.has(url)
    );

    if (deletedPageUrls.length > 0) {
      hasChanges = true;
      console.log(
        pc.yellow(
          `\n🗑️  Found ${deletedPageUrls.length} deleted pages (will be removed from output)`
        )
      );
    }

    // Filter pages based on changes
    for (const page of pages) {
      const url = page.url;
      const existingSummary = existingSummaries.get(url);

      // Check if this page's file was changed
      const isChanged = changedFiles.has(page.path);

      if (isChanged || !existingSummary) {
        // Need to summarize this page
        pagesToSummarize.push(page);
        hasChanges = true;
      } else {
        // Keep existing summary
        pagesToKeep.push({
          ...page,
          title: existingSummary.title,
          description: existingSummary.description,
        });
      }
    }

    console.log(
      pc.green(
        `✓ ${pagesToKeep.length} pages unchanged, ${pagesToSummarize.length} pages to summarize${deletedPageUrls.length > 0 ? `, ${deletedPageUrls.length} pages deleted` : ""}`
      )
    );
  } else {
    // No previous generation or can't determine, summarize all pages
    console.log(
      pc.yellow("⚠ No previous generation found, summarizing all pages")
    );
    pagesToSummarize.push(...pages);
    hasChanges = true; // Always regenerate if no previous metadata
  }

  return { pagesToSummarize, pagesToKeep, hasChanges };
}

/**
 * Summarizes pages in batches
 */
async function summarizePagesInBatches(
  pagesToSummarize: PageMetadata[],
  pagesToKeep: Array<PageMetadata & { title: string; description: string }>
): Promise<Array<PageMetadata & { title: string; description: string }>> {
  const summarizedPages: Array<
    PageMetadata & { title: string; description: string }
  > = [...pagesToKeep];

  if (pagesToSummarize.length === 0) {
    return summarizedPages;
  }

  console.log(pc.blue("\n📝 Summarizing pages with OpenAI..."));
  // Process in batches to avoid rate limits
  const batchSize = 5;
  for (let i = 0; i < pagesToSummarize.length; i += batchSize) {
    const batch = pagesToSummarize.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(summarizePage));

    for (let j = 0; j < batch.length; j += 1) {
      summarizedPages.push({
        ...batch[j],
        ...batchResults[j],
      });
    }

    console.log(
      pc.gray(
        `  Processed ${Math.min(i + batchSize, pagesToSummarize.length)}/${pagesToSummarize.length} pages`
      )
    );

    // Add a small delay between batches
    if (i + batchSize < pagesToSummarize.length) {
      await new Promise((resolve) => setTimeout(resolve, BATCH_DELAY_MS));
    }
  }

  console.log(pc.green(`✓ Summarized ${pagesToSummarize.length} pages`));
  return summarizedPages;
}

/**
 * Main execution function
 */
async function main() {
  console.log(pc.bold(pc.blue("\n🚀 Generating llms.txt file...\n")));

  // Check for OpenAI API key
  if (!process.env.OPENAI_API_KEY) {
    console.error(pc.red("✗ OPENAI_API_KEY environment variable is required"));
    process.exit(1);
  }

  try {
    // Step 0: Get current git SHA and check for previous generation
    const currentSha = getCurrentGitSha();
    const previousMetadata = await parseLlmsTxtMetadata();
    const existingSummaries = await extractExistingSummaries();

    console.log(pc.blue(`📌 Current git SHA: ${currentSha}`));
    if (previousMetadata) {
      console.log(
        pc.gray(
          `   Previous generation: ${previousMetadata.generationDate} (SHA: ${previousMetadata.gitSha.substring(0, SHA_SHORT_LENGTH)})`
        )
      );
    }

    // Step 1: Discover all pages
    const pages = await discoverPages();

    // Step 2: Determine which pages need summarization and identify deleted pages
    const { pagesToSummarize, pagesToKeep, hasChanges } =
      determinePagesToSummarize(pages, previousMetadata, existingSummaries);

    // Step 3: Summarize changed/new pages using OpenAI
    const summarizedPages = await summarizePagesInBatches(
      pagesToSummarize,
      pagesToKeep
    );

    // Step 4: Organize into sections
    console.log(pc.blue("\n📂 Organizing sections..."));
    const sections = organizeSections(summarizedPages);
    console.log(pc.green(`✓ Created ${sections.length} sections`));

    // Step 5: Generate llms.txt content
    console.log(pc.blue("\n✍️  Generating llms.txt content..."));
    // Only update metadata if there are changes, otherwise keep previous metadata
    const metadata: LlmsTxtMetadata = hasChanges
      ? {
          gitSha: currentSha,
          generationDate: new Date().toISOString(),
        }
      : previousMetadata || {
          gitSha: currentSha,
          generationDate: new Date().toISOString(),
        };
    const content = generateLlmsTxt(sections, metadata);

    // Step 6: Write to file
    await fs.writeFile(OUTPUT_PATH, content, "utf-8");
    if (hasChanges) {
      console.log(pc.green(`✓ Generated llms.txt at ${OUTPUT_PATH}`));
    } else {
      console.log(
        pc.gray(
          "✓ No changes detected, llms.txt unchanged (SHA and date preserved)"
        )
      );
    }

    console.log(pc.bold(pc.green("\n✨ Done!\n")));
  } catch (error) {
    console.error(pc.red("\n✗ Error generating llms.txt:"), error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as generateLlmsTxt };
