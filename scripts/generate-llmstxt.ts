import { execSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import glob from "fast-glob";
import OpenAI from "openai";
import pc from "picocolors";
import { getToolkitCanonicalPath } from "../app/_lib/toolkit-static-params";

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
// Matches a Next.js dynamic route segment, e.g. "[toolkitId]".
const DYNAMIC_SEGMENT_REGEX = /\[[^/]+\]/;
const TITLE_H1_REGEX = /^#\s+(.+)$/m;
const EN_LOCALE_PREFIX_REGEX = /^en\//;
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
 * Discovers all pages in the documentation
 */
async function discoverPages(): Promise<PageMetadata[]> {
  console.log(pc.blue("📄 Discovering pages from raw MDX..."));
  return discoverMdxPages();
}

/**
 * Discovers pages from raw MDX files (fallback)
 */
async function discoverMdxPages(): Promise<PageMetadata[]> {
  const mdxFiles = glob
    .sync("app/en/**/*.mdx", {
      cwd: process.cwd(),
      ignore: ["**/node_modules/**", "**/_*.mdx"],
    })
    // Skip dynamic-route templates (e.g. ".../[toolkitId]/page.mdx"): their
    // path isn't a real URL, so they'd produce dead "[toolkitId]" links.
    .filter((filePath) => !DYNAMIC_SEGMENT_REGEX.test(filePath));

  const pages: PageMetadata[] = [];

  for (const filePath of mdxFiles) {
    const fullPath = path.join(process.cwd(), filePath);
    const content = await fs.readFile(fullPath, "utf-8");

    // Convert file path to URL
    const relativePath = filePath
      .replace(APP_EN_PREFIX_REGEX, "")
      .replace(PAGE_MDX_SUFFIX_REGEX, "")
      .replace(MDX_SUFFIX_REGEX, "");

    const url = `${BASE_URL}/en/${relativePath}`;

    pages.push({
      path: filePath,
      url,
      content,
    });
  }

  console.log(pc.green(`✓ Found ${pages.length} pages (raw MDX)`));
  return pages;
}

const TOOLKIT_DATA_DIR = path.join(
  process.cwd(),
  "toolkit-docs-generator",
  "data",
  "toolkits"
);
const MAX_TOOLKIT_DESCRIPTION = 280;
const MARKDOWN_LINK_REGEX = /\[([^\]]+)\]\([^)]+\)/g;
const MARKDOWN_NOISE_REGEX = /[#*`>]/g;
const WHITESPACE_REGEX = /\s+/g;

type ToolkitData = {
  id?: string;
  label?: string;
  description?: string;
  summary?: string;
  tools?: unknown[];
  metadata?: {
    category?: string;
    docsLink?: string;
    isHidden?: boolean;
    isComingSoon?: boolean;
  };
};

/**
 * Builds a concise, deterministic description for a toolkit from its own
 * metadata (no OpenAI): its summary/description with markdown stripped, or a
 * label + tool-count fallback.
 */
function buildToolkitDescription(data: ToolkitData): string {
  const source = (data.summary || data.description || "").trim();
  if (source) {
    const cleaned = source
      .replace(MARKDOWN_LINK_REGEX, "$1")
      .replace(MARKDOWN_NOISE_REGEX, " ")
      .replace(WHITESPACE_REGEX, " ")
      .trim();
    if (cleaned.length <= MAX_TOOLKIT_DESCRIPTION) {
      return cleaned;
    }
    const truncated = cleaned.slice(0, MAX_TOOLKIT_DESCRIPTION);
    const lastSpace = truncated.lastIndexOf(" ");
    const cut = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
    return `${cut.trim()}…`;
  }
  const label = data.label || data.id || "This";
  const toolCount = Array.isArray(data.tools) ? data.tools.length : 0;
  return toolCount > 0
    ? `${label} MCP server documentation and its ${toolCount} Arcade tools.`
    : `${label} MCP server documentation.`;
}

/**
 * Discovers toolkit (integration) pages from generated toolkit data. These are
 * dynamic routes, so the MDX glob can't find them; build them straight from the
 * toolkit JSON, reusing the app's canonical path logic so URLs match the real
 * pages. Descriptions are templated (no OpenAI call).
 */
async function discoverToolkitPages(): Promise<
  Array<PageMetadata & { title: string; description: string }>
> {
  let entries: string[];
  try {
    entries = await fs.readdir(TOOLKIT_DATA_DIR);
  } catch {
    console.warn(pc.yellow("⚠ No toolkit data dir; skipping toolkit pages"));
    return [];
  }

  const pages: Array<PageMetadata & { title: string; description: string }> =
    [];
  const seenUrls = new Set<string>();

  for (const entry of entries) {
    if (!entry.endsWith(".json") || entry === "index.json") {
      continue;
    }
    try {
      const filePath = path.join(TOOLKIT_DATA_DIR, entry);
      const data = JSON.parse(
        await fs.readFile(filePath, "utf-8")
      ) as ToolkitData;
      if (!data.id || data.metadata?.isHidden || data.metadata?.isComingSoon) {
        continue;
      }
      const url = `${BASE_URL}${getToolkitCanonicalPath({
        id: data.id,
        category: data.metadata?.category,
        docsLink: data.metadata?.docsLink,
      })}`;
      if (seenUrls.has(url)) {
        continue;
      }
      seenUrls.add(url);
      pages.push({
        path: path.relative(process.cwd(), filePath),
        url,
        content: "",
        title: (data.label || data.id).trim(),
        description: buildToolkitDescription(data),
      });
    } catch {
      // Ignore malformed toolkit data files.
    }
  }

  console.log(pc.green(`✓ Found ${pages.length} toolkit pages`));
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
      : deriveTitleFromPath(page.path);

    // Prepare content for summarization (remove code blocks and imports).
    let contentForSummary = page.content.replace(
      /```[\s\S]*?```/g,
      "[code block]"
    );
    contentForSummary = contentForSummary.replace(
      /import\s+.*from\s+['"].*['"]/g,
      ""
    );

    contentForSummary = contentForSummary.slice(0, MAX_CONTENT_LENGTH);

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
      : deriveTitleFromPath(page.path);
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
    // Determine section from URL path (strip base URL and locale)
    const urlPath = page.url
      .replace(`${BASE_URL}/`, "")
      .replace(EN_LOCALE_PREFIX_REGEX, "");
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
    } else if (parts[0] === "resources" && parts[1] === "integrations") {
      sectionName = "Integrations";
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
 * Derives a readable title from a page's file path, used when the MDX has no
 * H1. For ".../<slug>/page.mdx" this title-cases the parent directory
 * (e.g. "examples" -> "Examples") instead of the literal filename "page".
 */
function deriveTitleFromPath(filePath: string): string {
  const base = path.basename(filePath, ".mdx");
  const slug = base === "page" ? path.basename(path.dirname(filePath)) : base;
  return formatSectionName(slug);
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
  lines.push("> Arcade is the enterprise-ready actions runtime for AI agents.");
  lines.push("");
  lines.push(
    "Arcade is the enterprise-ready actions runtime for AI agents. We enforce your security policies on every action, execute reliably across any system, and govern agents centrally in production. Configure once and use any model, framework, and client — deploy the first agent the same way you deploy the hundredth."
  );
  lines.push("");
  lines.push(
    "Arcade delivers three capabilities. Enforce (Agent Authorization): deploy agents your security team approves — Arcade handles OAuth and manages user tokens, API keys, and secrets, then enforces your existing IdP, DLP, SIEM, and compliance policies plus per-action authorization at runtime. Execute (Agent-Optimized Tools): the largest catalog of agent-optimized tools — 7,500+ across 81 MCP servers, built for reliable execution at scale, not thin API wrappers. Govern (Agent Lifecycle Governance): a central control plane with a shared registry, version control, visibility filtering, and OpenTelemetry audit logs."
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
  existingSummaries: Map<string, { title: string; description: string }>,
  toolkitPages: Array<PageMetadata & { title: string; description: string }>
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

    // Create a set of current page URLs for quick lookup. Include toolkit pages
    // so they aren't mistaken for deleted pages (they aren't in `pages`).
    const currentPageUrls = new Set(
      [...pages, ...toolkitPages].map((page) => page.url)
    );

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

    // Toolkit pages are rebuilt every run (no OpenAI). Flag a change if any is
    // new or its title/description differs from the previous output.
    for (const toolkitPage of toolkitPages) {
      const existing = existingSummaries.get(toolkitPage.url);
      if (
        !existing ||
        existing.title !== toolkitPage.title ||
        existing.description !== toolkitPage.description
      ) {
        hasChanges = true;
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

    // Step 1: Discover all pages (MDX pages, plus toolkit pages from data)
    const pages = await discoverPages();
    const toolkitPages = await discoverToolkitPages();

    // Step 2: Determine which pages need summarization and identify deleted pages
    const { pagesToSummarize, pagesToKeep, hasChanges } =
      determinePagesToSummarize(
        pages,
        previousMetadata,
        existingSummaries,
        toolkitPages
      );

    // Step 3: Summarize changed/new pages using OpenAI
    const summarizedPages = await summarizePagesInBatches(
      pagesToSummarize,
      pagesToKeep
    );

    // Toolkit pages already have templated title/description (no OpenAI).
    const allPages = [...summarizedPages, ...toolkitPages];

    // Step 4: Organize into sections
    console.log(pc.blue("\n📂 Organizing sections..."));
    const sections = organizeSections(allPages);
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
