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

const BASE_URL = "https://docs.arcade.dev";
const OUTPUT_PATH = path.join(process.cwd(), "public", "llms.txt");

// Regex patterns used in path processing
const APP_EN_PREFIX_REGEX = /^app\/en\//;
const PAGE_MDX_SUFFIX_REGEX = /\/page\.mdx$/;
const MDX_SUFFIX_REGEX = /\.mdx$/;
const TITLE_H1_REGEX = /^#\s+(.+)$/m;
const EN_LOCALE_PREFIX_REGEX = /^en\//;
const MD_EXTENSION_REGEX = /\.md$/;

// Constants for content processing
const MAX_CONTENT_LENGTH = 4000;
const BATCH_DELAY_MS = 1000;

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
function generateLlmsTxt(sections: Section[]): string {
  const lines: string[] = [];

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
    // Step 1: Discover all pages
    const pages = await discoverPages();

    // Step 2: Summarize each page using OpenAI
    console.log(pc.blue("\n📝 Summarizing pages with OpenAI..."));
    const summarizedPages: Array<
      PageMetadata & { title: string; description: string }
    > = [];

    // Process in batches to avoid rate limits
    const batchSize = 5;
    for (let i = 0; i < pages.length; i += batchSize) {
      const batch = pages.slice(i, i + batchSize);
      const batchResults = await Promise.all(batch.map(summarizePage));

      for (let j = 0; j < batch.length; j += 1) {
        summarizedPages.push({
          ...batch[j],
          ...batchResults[j],
        });
      }

      console.log(
        pc.gray(
          `  Processed ${Math.min(i + batchSize, pages.length)}/${pages.length} pages`
        )
      );

      // Add a small delay between batches
      if (i + batchSize < pages.length) {
        await new Promise((resolve) => setTimeout(resolve, BATCH_DELAY_MS));
      }
    }

    console.log(pc.green(`✓ Summarized ${summarizedPages.length} pages`));

    // Step 3: Organize into sections
    console.log(pc.blue("\n📂 Organizing sections..."));
    const sections = organizeSections(summarizedPages);
    console.log(pc.green(`✓ Created ${sections.length} sections`));

    // Step 4: Generate llms.txt content
    console.log(pc.blue("\n✍️  Generating llms.txt content..."));
    const content = generateLlmsTxt(sections);

    // Step 5: Write to file
    await fs.writeFile(OUTPUT_PATH, content, "utf-8");
    console.log(pc.green(`✓ Generated llms.txt at ${OUTPUT_PATH}`));

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
