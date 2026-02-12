import { type ChildProcess, spawn } from "node:child_process";
import fs from "node:fs/promises";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import glob from "fast-glob";
import pc from "picocolors";
import TurndownService from "turndown";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration constants
const SERVER_PORT = 3456;
const SERVER_URL = `http://localhost:${SERVER_PORT}`;
const OUTPUT_DIR = path.join(__dirname, "..", "public", "_markdown");
const MAX_RETRIES = 30;
const RETRY_DELAY_MS = 1000;
const BATCH_SIZE = 10;
const SERVER_CLEANUP_DELAY_MS = 500;
const HTTP_NOT_FOUND = 404;
const MIN_INTEGRATION_LINKS = 10;
const MAX_DOTFILE_LENGTH = 20;
const MAX_CHILD_TEXT_LENGTH = 50;
const PARENT_SEARCH_DEPTH = 4;
const LABEL_SEARCH_DEPTH = 3;

// Regex patterns at module level for performance
const FILENAME_PATTERN =
  /^[\w.-]+\.(py|ts|js|tsx|jsx|json|yaml|yml|toml|env|md|html|css|sql|sh|bash|go|rs|java|rb|php|swift|kt|cs|cpp|c|h|xml|ini|cfg|conf)$/i;
const DOTFILE_PATTERN = /^\.[a-z]+$/i;
const LANGUAGE_CLASS_PATTERN = /language-(\w+)/;
const ARTICLE_PATTERN = /<article[^>]*>([\s\S]*?)<\/article>/i;
const MAIN_PATTERN = /<main[^>]*>([\s\S]*?)<\/main>/i;
const BODY_PATTERN = /<body[^>]*>([\s\S]*?)<\/body>/i;
const PAGE_MDX_PATTERN = /\/page\.mdx$/;
const MDX_PATTERN = /\.mdx$/;

// Validation regex patterns
const IMPORT_STATEMENT_PATTERN = /^import\s+/m;
const STEPS_COMPONENT_PATTERN = /<Steps>|<\/Steps>/g;
const TABS_COMPONENT_PATTERN = /<Tabs[\s>]/g;
const CALLOUT_COMPONENT_PATTERN = /<Callout[\s>]/g;
const GUIDE_OVERVIEW_PATTERN = /<GuideOverview[\s>]/g;

// HTML element patterns that should be removed during cleaning
const HTML_SCRIPT_PATTERN = /<script[\s>]/gi;
const HTML_STYLE_PATTERN = /<style[\s>]/gi;
const HTML_SVG_PATTERN = /<svg[\s>]/gi;
const HTML_NAV_PATTERN = /<nav[\s>]/gi;
const HTML_FOOTER_PATTERN = /<footer[\s>]/gi;
const HTML_ASIDE_PATTERN = /<aside[\s>]/gi;

// Meta tag extraction patterns
const TITLE_PATTERN = /<title[^>]*>([^<]*)<\/title>/i;
const META_DESCRIPTION_PATTERN =
  /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i;
const META_DESCRIPTION_ALT_PATTERN =
  /<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i;
const TITLE_SUFFIX_PATTERN = /\s*[|–-]\s*Arcade.*$/i;

// Initialize Turndown with options for clean markdown
const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

/**
 * Recursively finds a CODE element inside a node
 */
function findCodeElement(node: Node): Element | null {
  if (node.nodeName === "CODE") {
    return node as Element;
  }
  for (const child of Array.from(node.childNodes)) {
    const found = findCodeElement(child);
    if (found) {
      return found;
    }
  }
  return null;
}

/**
 * Recursively finds an element with matching text content
 */
function findElementWithText(node: Node, patterns: string[]): string | null {
  const text = node.textContent?.toLowerCase().trim() || "";
  for (const pattern of patterns) {
    if (text === pattern.toLowerCase()) {
      return pattern;
    }
  }
  for (const child of Array.from(node.childNodes)) {
    const found = findElementWithText(child, patterns);
    if (found) {
      return found;
    }
  }
  return null;
}

/**
 * Maps label text to language identifier
 */
function labelToLanguage(label: string): string {
  const map: Record<string, string> = {
    terminal: "bash",
    bash: "bash",
    shell: "bash",
    sh: "bash",
    zsh: "bash",
    python: "python",
    py: "python",
    typescript: "typescript",
    ts: "typescript",
    javascript: "javascript",
    js: "javascript",
    json: "json",
    env: "bash",
    yaml: "yaml",
    yml: "yaml",
    html: "html",
    css: "css",
    sql: "sql",
    graphql: "graphql",
    rust: "rust",
    go: "go",
    java: "java",
    ruby: "ruby",
    php: "php",
    csharp: "csharp",
    "c#": "csharp",
    cpp: "cpp",
    "c++": "cpp",
    c: "c",
    swift: "swift",
    kotlin: "kotlin",
    markdown: "markdown",
    md: "markdown",
    toml: "toml",
    ini: "ini",
    xml: "xml",
  };
  return map[label.toLowerCase()] || "";
}

/**
 * Language labels that appear as orphan text before code blocks
 */
const LANGUAGE_LABELS = new Set([
  "terminal",
  "bash",
  "shell",
  "sh",
  "zsh",
  "python",
  "py",
  "typescript",
  "ts",
  "javascript",
  "js",
  "json",
  "yaml",
  "yml",
  "toml",
  "env",
  "ini",
  "xml",
  "html",
  "css",
  "sql",
  "graphql",
  "rust",
  "go",
  "java",
  "ruby",
  "php",
  "c#",
  "csharp",
  "c++",
  "cpp",
  "c",
  "swift",
  "kotlin",
  "markdown",
  "md",
]);

/**
 * Gets comment prefix for a language
 */
function getCommentPrefix(language: string): string {
  const hashComment = ["bash", "python", "ruby", "yaml", "toml", "shell"];
  const slashComment = [
    "typescript",
    "javascript",
    "java",
    "go",
    "rust",
    "swift",
    "kotlin",
    "csharp",
    "cpp",
    "c",
  ];

  if (hashComment.includes(language)) {
    return "# ";
  }
  if (slashComment.includes(language)) {
    return "// ";
  }
  if (language === "html" || language === "xml") {
    return "<!-- ";
  }
  if (language === "css") {
    return "/* ";
  }
  return "# "; // default
}

/**
 * Gets comment suffix for a language (for languages that need closing)
 */
function getCommentSuffix(language: string): string {
  if (language === "html" || language === "xml") {
    return " -->";
  }
  if (language === "css") {
    return " */";
  }
  return "";
}

/**
 * Checks if text matches a filename pattern
 */
function isFilename(text: string): boolean {
  const trimmed = text.trim();
  // Match common filename patterns like main.py, example.ts
  if (FILENAME_PATTERN.test(trimmed)) {
    return true;
  }
  // Match dotfiles like .env, .gitignore
  if (
    DOTFILE_PATTERN.test(trimmed) &&
    trimmed.length > 1 &&
    trimmed.length < MAX_DOTFILE_LENGTH
  ) {
    return true;
  }
  return false;
}

/**
 * Recursively searches for filename text in a node tree
 */
function findFilenameInNode(node: Node): string | null {
  // Check if this node's text content is a filename
  const text = node.textContent?.trim() || "";
  if (isFilename(text)) {
    return text;
  }

  // Check child nodes
  for (const child of Array.from(node.childNodes)) {
    // Only check text nodes or elements with short text content
    const childText = child.textContent?.trim() || "";
    if (childText.length < MAX_CHILD_TEXT_LENGTH && isFilename(childText)) {
      return childText;
    }
  }

  return null;
}

/**
 * Finds filename text near a code block element
 * Looks for patterns like "main.py", "example.ts", ".env" etc.
 */
function findFilename(node: Node): string | null {
  // Look in parent structure for filename-like text
  let parent = (node as Element).parentElement;
  let depth = 0;
  while (parent && depth < PARENT_SEARCH_DEPTH) {
    const filename = findFilenameInNode(parent);
    if (filename) {
      return filename;
    }
    parent = parent.parentElement;
    depth += 1;
  }
  return null;
}

// Custom rules for better code block handling
// Nextra wraps code in: <pre><div>buttons</div><code class="nextra-code">...</code></pre>
// Language labels appear in parent structure (e.g., "Terminal", "Python", "TypeScript")
turndown.addRule("fencedCodeBlock", {
  filter: (node) => {
    if (node.nodeName !== "PRE") {
      return false;
    }
    // Find CODE element anywhere inside PRE (not just as first child)
    const codeElement = findCodeElement(node);
    return codeElement !== null;
  },
  replacement: (_content, node) => {
    const codeElement = findCodeElement(node);
    if (!codeElement) {
      return _content;
    }
    let code = codeElement.textContent || "";

    // Try to extract language from various sources
    let language = "";

    // 1. Check code element class (e.g., "language-typescript")
    const codeClassName = codeElement.getAttribute("class") || "";
    const langMatch = codeClassName.match(LANGUAGE_CLASS_PATTERN);
    if (langMatch) {
      language = langMatch[1];
    }

    // 2. Look for language label in parent structure
    // Nextra code blocks have labels like "Terminal", "Python", etc.
    if (!language) {
      const labels = [
        "Terminal",
        "Bash",
        "Shell",
        "Python",
        "TypeScript",
        "JavaScript",
        "JSON",
        "YAML",
        "TOML",
        "ENV",
        "HTML",
        "CSS",
        "SQL",
        "GraphQL",
        "Rust",
        "Go",
        "Java",
        "Ruby",
        "PHP",
        "C#",
        "C++",
        "C",
        "Swift",
        "Kotlin",
        "Markdown",
        "XML",
      ];

      // Check parent and grandparent for label text
      let parent = (node as Element).parentElement;
      let depth = 0;
      while (parent && !language && depth < LABEL_SEARCH_DEPTH) {
        const foundLabel = findElementWithText(parent, labels);
        if (foundLabel) {
          language = labelToLanguage(foundLabel);
          break;
        }
        parent = parent.parentElement;
        depth += 1;
      }
    }

    // 3. Try to find filename and add as comment
    const filename = findFilename(node);
    if (filename) {
      const prefix = getCommentPrefix(language || "bash");
      const suffix = getCommentSuffix(language || "bash");
      code = `${prefix}${filename}${suffix}\n${code}`;
    }

    return `\n\n\`\`\`${language}\n${code}\n\`\`\`\n\n`;
  },
});

// Remove copy buttons and other interactive elements
turndown.addRule("removeButtons", {
  filter: (node) => {
    if (node.nodeName === "BUTTON") {
      return true;
    }
    if (node.nodeName === "DIV") {
      const className = node.getAttribute("class");
      if (className?.includes("copy-button")) {
        return true;
      }
    }
    return false;
  },
  replacement: () => "",
});

// Remove orphan language labels and filenames that appear before code blocks
// These are standalone paragraphs containing just "Terminal", "Python", "main.py", etc.
turndown.addRule("removeOrphanLabels", {
  filter: (node) => {
    if (
      node.nodeName !== "P" &&
      node.nodeName !== "SPAN" &&
      node.nodeName !== "DIV"
    ) {
      return false;
    }
    const text = node.textContent?.trim() || "";
    // Check if it's just a language label
    if (LANGUAGE_LABELS.has(text.toLowerCase())) {
      return true;
    }
    // Check if it's a filename (will be added as comment in code block)
    if (isFilename(text)) {
      return true;
    }
    return false;
  },
  replacement: () => "",
});

// Clean up links - collapse whitespace in link text
turndown.addRule("cleanLinks", {
  filter: "a",
  replacement: (content, node) => {
    const element = node as Element;
    let href = element.getAttribute("href");
    if (!href) {
      return content;
    }
    // Collapse multiple whitespace/newlines into single space and trim
    const cleanedContent = content.replace(/\s+/g, " ").trim();
    // Skip empty links
    if (!cleanedContent) {
      return "";
    }

    // Add .md extension to internal links (so they point to markdown, not HTML)
    // Internal links start with / but not // (protocol-relative)
    // Don't add .md if it already has an extension or is an anchor-only link
    if (
      href.startsWith("/") &&
      !href.startsWith("//") &&
      !href.includes(".") &&
      !href.startsWith("/#")
    ) {
      // Handle links with anchors (e.g., /page#section -> /page.md#section)
      const hashIndex = href.indexOf("#");
      if (hashIndex > 0) {
        href = `${href.slice(0, hashIndex)}.md${href.slice(hashIndex)}`;
      } else {
        href += ".md";
      }
    }

    // Check if this is a standalone link (in a grid/list of links)
    // by looking at the parent and sibling structure
    const parent = element.parentNode;
    const isInParagraph = parent?.nodeName === "P";
    const isInlineLink = isInParagraph && parent?.childNodes.length > 1;

    // For standalone links (like card grids), add newline for readability
    // For inline links (in paragraphs with other text), don't add newline
    if (isInlineLink) {
      return `[${cleanedContent}](${href})`;
    }
    return `[${cleanedContent}](${href})\n`;
  },
});

/**
 * Waits for the server to be ready
 */
async function waitForServer(url: string): Promise<void> {
  console.log(pc.blue(`⏳ Waiting for server at ${url}...`));

  let retries = 0;
  while (retries < MAX_RETRIES) {
    try {
      const response = await fetch(url);
      if (response.ok || response.status === HTTP_NOT_FOUND) {
        console.log(pc.green("✓ Server is ready"));
        return;
      }
    } catch {
      // Server not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    retries += 1;
  }

  throw new Error(
    `Server at ${url} did not become ready after ${MAX_RETRIES} retries`
  );
}

/**
 * Starts the Next.js production server
 */
function startServer(): ChildProcess {
  console.log(pc.blue("🚀 Starting production server..."));

  // Use npx to run next start directly with port argument
  const server = spawn(
    "npx",
    ["next", "start", "--port", String(SERVER_PORT)],
    {
      cwd: path.join(__dirname, ".."),
      stdio: ["ignore", "pipe", "pipe"],
      detached: false,
    }
  );

  // Log server output for debugging
  server.stdout?.on("data", (data: Buffer) => {
    const output = data.toString();
    if (output.includes("Ready") || output.includes("started")) {
      console.log(pc.gray(`  Server: ${output.trim()}`));
    }
  });

  server.stderr?.on("data", (data: Buffer) => {
    const output = data.toString();
    // Filter out noisy warnings
    if (!output.includes("ExperimentalWarning")) {
      console.error(pc.yellow(`  Server stderr: ${output.trim()}`));
    }
  });

  return server;
}

/**
 * Extracts frontmatter data from HTML meta tags
 */
function extractFrontmatter(html: string): {
  title: string;
  description: string;
} {
  // Extract title
  const titleMatch = html.match(TITLE_PATTERN);
  let title = titleMatch?.[1]?.trim() || "";
  // Remove common suffixes like "| Arcade Docs" or " - Arcade"
  title = title.replace(TITLE_SUFFIX_PATTERN, "").trim();

  // Extract description (try both attribute orders)
  let description = "";
  const descMatch = html.match(META_DESCRIPTION_PATTERN);
  if (descMatch) {
    description = descMatch[1].trim();
  } else {
    const descAltMatch = html.match(META_DESCRIPTION_ALT_PATTERN);
    if (descAltMatch) {
      description = descAltMatch[1].trim();
    }
  }

  return { title, description };
}

/**
 * Formats frontmatter as YAML
 */
function formatFrontmatter(title: string, description: string): string {
  if (!(title || description)) {
    return "";
  }

  const lines = ["---"];
  if (title) {
    // Escape quotes in YAML values
    const escapedTitle = title.replace(/"/g, '\\"');
    lines.push(`title: "${escapedTitle}"`);
  }
  if (description) {
    const escapedDesc = description.replace(/"/g, '\\"');
    lines.push(`description: "${escapedDesc}"`);
  }
  lines.push("---", "");

  return lines.join("\n");
}

/**
 * Extracts the main content from the HTML page
 */
function extractContent(html: string): string {
  // Nextra wraps the main content in an <article> element
  // We need to extract just the article content, not the nav/sidebar/footer

  // Try to find the article element
  const articleMatch = html.match(ARTICLE_PATTERN);
  if (articleMatch) {
    return articleMatch[1];
  }

  // Fallback: try to find main content area
  const mainMatch = html.match(MAIN_PATTERN);
  if (mainMatch) {
    return mainMatch[1];
  }

  console.warn(
    pc.yellow("  ⚠ Could not find article/main element, using body")
  );
  // Last resort: use body content
  const bodyMatch = html.match(BODY_PATTERN);
  return bodyMatch ? bodyMatch[1] : html;
}

/**
 * Cleans up the extracted HTML before conversion
 */
function cleanHtml(html: string): string {
  let cleaned = html;

  // Remove script tags
  cleaned = cleaned.replace(/<script[\s\S]*?<\/script>/gi, "");

  // Remove style tags
  cleaned = cleaned.replace(/<style[\s\S]*?<\/style>/gi, "");

  // Remove SVG icons (they don't convert well)
  cleaned = cleaned.replace(/<svg[\s\S]*?<\/svg>/gi, "");

  // Remove navigation elements
  cleaned = cleaned.replace(/<nav[\s\S]*?<\/nav>/gi, "");

  // Remove footer elements
  cleaned = cleaned.replace(/<footer[\s\S]*?<\/footer>/gi, "");

  // Remove aside elements (typically sidebars)
  cleaned = cleaned.replace(/<aside[\s\S]*?<\/aside>/gi, "");

  // Remove elements with common non-content classes
  cleaned = cleaned.replace(
    /<[^>]*(class="[^"]*(?:sidebar|nav|toc|breadcrumb)[^"]*")[^>]*>[\s\S]*?<\/[^>]+>/gi,
    ""
  );

  return cleaned;
}

/**
 * Post-processes the markdown output
 */
function cleanMarkdown(markdown: string): string {
  let cleaned = markdown;

  // Remove excessive blank lines (more than 2 consecutive)
  cleaned = cleaned.replace(/\n{4,}/g, "\n\n\n");

  // Remove trailing whitespace from lines
  cleaned = cleaned.replace(/[ \t]+$/gm, "");

  // Ensure file ends with single newline
  cleaned = `${cleaned.trimEnd()}\n`;

  return cleaned;
}

/**
 * Fetches and converts a single page
 */
async function processPage(
  url: string,
  outputPath: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return { success: false, error: `HTTP ${response.status}` };
    }

    const html = await response.text();

    // Extract frontmatter from meta tags before processing content
    const { title, description } = extractFrontmatter(html);
    const frontmatter = formatFrontmatter(title, description);

    const content = extractContent(html);
    const cleanedHtml = cleanHtml(content);
    const markdown = turndown.turndown(cleanedHtml);
    const cleanedMarkdown = cleanMarkdown(markdown);

    // Combine frontmatter with markdown content
    const finalMarkdown = frontmatter + cleanedMarkdown;

    // Create directory if needed
    await fs.mkdir(path.dirname(outputPath), { recursive: true });

    // Write the markdown file
    await fs.writeFile(outputPath, finalMarkdown, "utf-8");

    return { success: true };
  } catch (error) {
    return { success: false, error: String(error) };
  }
}

/**
 * Discovers all MDX pages and their corresponding routes
 */
async function discoverPages(): Promise<
  Array<{ route: string; language: string; outputPath: string }>
> {
  const appDir = path.join(__dirname, "..", "app");
  const entries = await fs.readdir(appDir);

  // Find all language directories
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

  console.log(pc.blue(`📁 Found languages: ${languages.join(", ")}`));

  const pages: Array<{ route: string; language: string; outputPath: string }> =
    [];

  for (const language of languages) {
    const searchPath = path.join(appDir, language);
    const mdxFiles = glob.sync("**/*.mdx", {
      cwd: searchPath,
      ignore: [
        "**/_*.mdx",
        // Skip dynamic route templates — they render from JSON, not static MDX
        "**/\\[*\\]/**",
      ],
    });

    for (const entry of mdxFiles) {
      // Convert file path to route
      // e.g., "home/quickstart/page.mdx" -> "/en/home/quickstart"
      const routePath = entry
        .replace(PAGE_MDX_PATTERN, "")
        .replace(MDX_PATTERN, "");
      const route = `/${language}/${routePath}`;
      const outputPath = path.join(OUTPUT_DIR, language, `${routePath}.md`);

      pages.push({ route, language, outputPath });
    }
  }

  return pages;
}

/**
 * Validates that the integrations page has proper links
 */
async function validateIntegrationsPage(errors: string[]): Promise<void> {
  const integrationsPath = path.join(
    OUTPUT_DIR,
    "en",
    "resources",
    "integrations.md"
  );
  try {
    const content = await fs.readFile(integrationsPath, "utf-8");
    const integrationLinkPattern =
      /\]\(\/en\/resources\/integrations\/[^)]+\)/g;
    const matches = content.match(integrationLinkPattern) || [];

    if (matches.length < MIN_INTEGRATION_LINKS) {
      errors.push(
        `Integrations page should have many integration links, found only ${matches.length}. ` +
          "This suggests the <Toolkits /> component content was not properly rendered."
      );
    } else {
      console.log(
        pc.green(
          `  ✓ Integrations page contains ${matches.length} integration links`
        )
      );
    }

    if (content.includes("<Toolkits") || content.includes("import ")) {
      errors.push(
        "Integrations page still contains raw MDX syntax (<Toolkits /> or import statements)"
      );
    } else {
      console.log(pc.green("  ✓ Integrations page has no raw MDX syntax"));
    }
  } catch (error) {
    errors.push(`Could not read integrations page: ${error}`);
  }
}

/**
 * Validates that the quickstart page has no raw MDX syntax
 */
async function validateQuickstartPage(errors: string[]): Promise<void> {
  const quickstartPath = path.join(
    OUTPUT_DIR,
    "en",
    "get-started",
    "quickstarts",
    "mcp-server-quickstart.md"
  );
  try {
    const content = await fs.readFile(quickstartPath, "utf-8");
    const mdxPatterns = [
      { pattern: IMPORT_STATEMENT_PATTERN, name: "import statements" },
      { pattern: STEPS_COMPONENT_PATTERN, name: "<Steps> component" },
      { pattern: TABS_COMPONENT_PATTERN, name: "<Tabs> component" },
      { pattern: CALLOUT_COMPONENT_PATTERN, name: "<Callout> component" },
      { pattern: GUIDE_OVERVIEW_PATTERN, name: "<GuideOverview> component" },
    ];

    const foundPatterns = mdxPatterns.filter(({ pattern }) =>
      pattern.test(content)
    );
    for (const { name } of foundPatterns) {
      errors.push(`Quickstart page still contains ${name}`);
    }

    if (foundPatterns.length === 0) {
      console.log(pc.green("  ✓ Quickstart page has no raw MDX syntax"));
    }

    if (content.includes("arcade new") && content.includes("uv tool install")) {
      console.log(
        pc.green("  ✓ Quickstart page contains expected code examples")
      );
    } else {
      errors.push("Quickstart page is missing expected code examples");
    }
  } catch (error) {
    errors.push(`Could not read quickstart page: ${error}`);
  }
}

/**
 * Validates that the home page has HTML elements properly cleaned
 */
async function validateHtmlCleaning(errors: string[]): Promise<void> {
  const homePath = path.join(OUTPUT_DIR, "en", "home.md");
  try {
    const content = await fs.readFile(homePath, "utf-8");
    const htmlPatterns = [
      { pattern: HTML_SCRIPT_PATTERN, name: "<script>" },
      { pattern: HTML_STYLE_PATTERN, name: "<style>" },
      { pattern: HTML_SVG_PATTERN, name: "<svg>" },
      { pattern: HTML_NAV_PATTERN, name: "<nav>" },
      { pattern: HTML_FOOTER_PATTERN, name: "<footer>" },
      { pattern: HTML_ASIDE_PATTERN, name: "<aside>" },
    ];

    const foundTags = htmlPatterns.filter(({ pattern }) =>
      pattern.test(content)
    );
    for (const { name } of foundTags) {
      errors.push(`Home page still contains ${name} HTML element`);
    }

    if (foundTags.length === 0) {
      console.log(pc.green("  ✓ Home page has HTML elements properly cleaned"));
    }
  } catch (error) {
    errors.push(`Could not read home page: ${error}`);
  }
}

/**
 * Validates that the generated markdown files contain expected content
 */
async function validateGeneratedContent(): Promise<{
  passed: boolean;
  errors: string[];
}> {
  const errors: string[] = [];

  console.log(pc.blue("\n🧪 Running validation tests...\n"));

  await validateIntegrationsPage(errors);
  await validateQuickstartPage(errors);
  await validateHtmlCleaning(errors);

  return { passed: errors.length === 0, errors };
}

/**
 * Processes all pages in parallel batches
 */
async function processAllPages(
  pages: Array<{ route: string; language: string; outputPath: string }>
): Promise<{ successCount: number; errorCount: number }> {
  let successCount = 0;
  let errorCount = 0;
  let batchStart = 0;

  while (batchStart < pages.length) {
    const batch = pages.slice(batchStart, batchStart + BATCH_SIZE);
    const results = await Promise.all(
      batch.map(async (page) => {
        const url = `${SERVER_URL}${page.route}`;
        const result = await processPage(url, page.outputPath);
        return { page, result };
      })
    );

    for (const { page, result } of results) {
      if (result.success) {
        successCount += 1;
        console.log(pc.gray(`  ✓ ${page.route}`));
      } else {
        errorCount += 1;
        console.log(pc.red(`  ✗ ${page.route}: ${result.error}`));
      }
    }
    batchStart += BATCH_SIZE;
  }

  return { successCount, errorCount };
}

/**
 * Cleans up the server process
 */
async function cleanupServer(server: ChildProcess): Promise<void> {
  console.log(pc.blue("🛑 Stopping server..."));
  server.kill("SIGTERM");

  await new Promise((resolve) => setTimeout(resolve, SERVER_CLEANUP_DELAY_MS));

  if (!server.killed) {
    server.kill("SIGKILL");
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log(pc.bold(pc.blue("\n🔄 Generating clean markdown files...\n")));

  let server: ChildProcess | null = null;

  try {
    const pages = await discoverPages();
    console.log(pc.green(`✓ Found ${pages.length} pages to process`));

    server = startServer();
    await waitForServer(`${SERVER_URL}/en/home`);

    console.log(pc.blue("\n📝 Converting pages to markdown...\n"));
    const { successCount, errorCount } = await processAllPages(pages);

    console.log(pc.bold(pc.blue("\n📊 Results:")));
    console.log(pc.green(`  ✓ Successfully converted: ${successCount}`));
    if (errorCount > 0) {
      console.log(pc.red(`  ✗ Errors: ${errorCount}`));
    }
    console.log(pc.gray(`  📁 Output directory: ${OUTPUT_DIR}`));

    const validation = await validateGeneratedContent();
    if (!validation.passed) {
      console.log(pc.bold(pc.red("\n⚠️  Validation errors:")));
      for (const error of validation.errors) {
        console.log(pc.red(`  • ${error}`));
      }
      console.log(
        pc.yellow(
          "\nNote: Some validation failures may indicate the HTML extraction needs adjustment."
        )
      );
    }

    console.log(pc.bold(pc.green("\n✨ Done!\n")));
  } catch (error) {
    console.error(pc.red("\n✗ Error generating markdown:"), error);
    process.exit(1);
  } finally {
    if (server) {
      await cleanupServer(server);
    }
  }

  // Explicitly exit to ensure the process terminates
  // (event listeners on the spawned server may keep the event loop alive)
  process.exit(0);
}

// Run if called directly
main();
