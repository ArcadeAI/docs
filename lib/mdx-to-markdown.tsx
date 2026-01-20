/**
 * MDX to Markdown converter
 *
 * Compiles MDX content, renders it with markdown-friendly components,
 * then converts the resulting HTML to clean Markdown using the unified ecosystem.
 */

import { pathToFileURL } from "node:url";
import { compile, run } from "@mdx-js/mdx";
import type { ReactNode } from "react";
import { createElement, Fragment } from "react";
import { Fragment as JsxFragment, jsx, jsxs } from "react/jsx-runtime";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import { unified } from "unified";

// Regex patterns (at top level for performance)
const FILE_EXTENSION_REGEX = /\.[^.]+$/;
const UNDERSCORE_DASH_REGEX = /[_-]/g;
const FRONTMATTER_REGEX = /^---\n([\s\S]*?)\n---\n?/;
const TITLE_REGEX = /title:\s*(?:"([^"]*)"|'([^']*)'|([^\n]+))/;
const DESCRIPTION_REGEX = /description:\s*(?:"([^"]*)"|'([^']*)'|([^\n]+))/;

// Types for mdast table nodes
type MdastTableCell = { type: "tableCell"; children: unknown[] };
type MdastTableRow = { type: "tableRow"; children: MdastTableCell[] };
type HtmlNode = {
  type: string;
  tagName?: string;
  children?: HtmlNode[];
  properties?: Record<string, unknown>;
};
type StateAll = (node: HtmlNode) => unknown[];

/** Extract cells from a table row element */
function extractCellsFromRow(
  state: { all: StateAll },
  row: HtmlNode
): MdastTableCell[] {
  const cells: MdastTableCell[] = [];
  for (const cell of row.children || []) {
    if (
      cell.type === "element" &&
      (cell.tagName === "th" || cell.tagName === "td")
    ) {
      cells.push({ type: "tableCell", children: state.all(cell) });
    }
  }
  return cells;
}

/** Extract rows from a table section (thead, tbody, tfoot) or direct tr children */
function extractRowsFromTableSection(
  state: { all: StateAll },
  section: HtmlNode
): MdastTableRow[] {
  const rows: MdastTableRow[] = [];
  for (const child of section.children || []) {
    if (child.type === "element" && child.tagName === "tr") {
      const cells = extractCellsFromRow(state, child);
      if (cells.length > 0) {
        rows.push({ type: "tableRow", children: cells });
      }
    }
  }
  return rows;
}

/** Check if element is a table section (thead, tbody, tfoot) */
function isTableSection(tagName: string | undefined): boolean {
  return tagName === "thead" || tagName === "tbody" || tagName === "tfoot";
}

// Dynamic import to avoid Next.js RSC restrictions
let renderToStaticMarkup: typeof import("react-dom/server").renderToStaticMarkup;
async function getRenderer() {
  if (!renderToStaticMarkup) {
    const reactDomServer = await import("react-dom/server");
    renderToStaticMarkup = reactDomServer.renderToStaticMarkup;
  }
  return renderToStaticMarkup;
}

/**
 * Convert HTML to Markdown using unified ecosystem (rehype-remark)
 * This is more reliable than turndown for complex HTML structures
 */
async function htmlToMarkdown(html: string): Promise<string> {
  const result = await unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeRemark, {
      handlers: {
        // Custom handler for video elements
        video: (_state, node) => {
          const src = (node.properties?.src as string) || "";
          const filename =
            src.split("/").pop()?.replace(FILE_EXTENSION_REGEX, "") || "Video";
          const title = filename.replace(UNDERSCORE_DASH_REGEX, " ");
          return {
            type: "paragraph",
            children: [
              {
                type: "link",
                url: src,
                children: [{ type: "text", value: `Video: ${title}` }],
              },
            ],
          };
        },
        // Custom handler for audio elements
        audio: (_state, node) => {
          const src = (node.properties?.src as string) || "";
          const filename =
            src.split("/").pop()?.replace(FILE_EXTENSION_REGEX, "") || "Audio";
          const title = filename.replace(UNDERSCORE_DASH_REGEX, " ");
          return {
            type: "paragraph",
            children: [
              {
                type: "link",
                url: src,
                children: [{ type: "text", value: `Audio: ${title}` }],
              },
            ],
          };
        },
        // Custom handler for iframe elements
        iframe: (_state, node) => {
          const src = (node.properties?.src as string) || "";
          const title =
            (node.properties?.title as string) || "Embedded content";
          return {
            type: "paragraph",
            children: [
              {
                type: "link",
                url: src,
                children: [{ type: "text", value: title }],
              },
            ],
          };
        },
        // Custom handler for HTML tables - convert to markdown tables
        // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Table parsing requires nested logic
        table: (state, node) => {
          const rows: MdastTableRow[] = [];

          for (const child of node.children || []) {
            if (child.type !== "element") {
              continue;
            }
            if (isTableSection(child.tagName)) {
              rows.push(
                ...extractRowsFromTableSection(state, child as HtmlNode)
              );
            } else if (child.tagName === "tr") {
              const cells = extractCellsFromRow(state, child as HtmlNode);
              if (cells.length > 0) {
                rows.push({ type: "tableRow", children: cells });
              }
            }
          }

          const colCount = rows[0]?.children?.length || 0;
          return {
            type: "table",
            align: new Array<null>(colCount).fill(null),
            children: rows,
          };
        },
        // These are handled by the table handler above, but we still need to define them
        // to prevent "unknown node" errors when encountered outside tables
        thead: (state, node) => {
          const rows: unknown[] = [];
          for (const child of node.children || []) {
            if (child.type === "element" && child.tagName === "tr") {
              rows.push(...state.all(child));
            }
          }
          return rows;
        },
        tbody: (state, node) => {
          const rows: unknown[] = [];
          for (const child of node.children || []) {
            if (child.type === "element" && child.tagName === "tr") {
              rows.push(...state.all(child));
            }
          }
          return rows;
        },
        tfoot: (state, node) => {
          const rows: unknown[] = [];
          for (const child of node.children || []) {
            if (child.type === "element" && child.tagName === "tr") {
              rows.push(...state.all(child));
            }
          }
          return rows;
        },
        tr: (state, node) => {
          const cells: { type: "tableCell"; children: unknown[] }[] = [];
          for (const child of node.children || []) {
            if (
              child.type === "element" &&
              (child.tagName === "th" || child.tagName === "td")
            ) {
              cells.push({
                type: "tableCell",
                children: state.all(child),
              });
            }
          }
          return {
            type: "tableRow",
            children: cells,
          };
        },
        th: (state, node) => ({
          type: "tableCell",
          children: state.all(node),
        }),
        td: (state, node) => ({
          type: "tableCell",
          children: state.all(node),
        }),
        // Custom handler for callout divs - render as paragraph with bold label
        // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Callout parsing logic
        div: (state, node) => {
          const className =
            (node.properties?.className as string[])?.join(" ") || "";

          // Check if this is a callout
          if (
            className.includes("callout") ||
            className.includes("admonition") ||
            className.includes("warning") ||
            className.includes("info") ||
            className.includes("error") ||
            className.includes("tip")
          ) {
            let label = "";
            if (className.includes("warning")) {
              label = "Warning";
            } else if (className.includes("error")) {
              label = "Error";
            } else if (className.includes("tip")) {
              label = "Tip";
            } else if (className.includes("info")) {
              label = "Note";
            }

            // Process children and prepend bold label
            const children = state.all(node);
            if (label && children.length > 0) {
              // Add bold label to the first paragraph's children
              const firstChild = children[0];
              if (firstChild && firstChild.type === "paragraph") {
                return [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "strong",
                        children: [{ type: "text", value: `${label}:` }],
                      },
                      { type: "text", value: " " },
                      ...(firstChild.children || []),
                    ],
                  },
                  ...children.slice(1),
                ];
              }
            }
            return children;
          }

          // Default: just return children (strip the div wrapper)
          return state.all(node);
        },
      },
    })
    .use(remarkGfm) // Enable GFM for tables, strikethrough, etc.
    .use(remarkStringify, {
      bullet: "-",
      fences: true,
      listItemIndent: "one",
    })
    .process(html);

  return String(result);
}

// ============================================
// Markdown-Friendly Component Implementations
// ============================================

// Simple wrapper that just renders children
function PassThrough({ children }: { children?: ReactNode }) {
  return createElement(Fragment, null, children);
}

// Tabs - render all tab content with headers
function MarkdownTabs({
  children,
  items,
}: {
  children?: ReactNode;
  items?: string[];
}) {
  // If we have items array, children are the tab panels
  if (items && Array.isArray(items)) {
    const childArray = Array.isArray(children) ? children : [children];
    return createElement(
      "div",
      null,
      childArray.map((child, i) =>
        createElement(
          "div",
          { key: i },
          createElement("h4", null, items[i] || `Option ${i + 1}`),
          child
        )
      )
    );
  }
  return createElement("div", null, children);
}

// Tab content - just render the content
function MarkdownTab({ children }: { children?: ReactNode }) {
  return createElement("div", null, children);
}

// Assign Tab to Tabs for Tabs.Tab syntax
MarkdownTabs.Tab = MarkdownTab;

// Steps - render as numbered sections
function MarkdownSteps({ children }: { children?: ReactNode }) {
  return createElement("div", { className: "steps" }, children);
}

// Callout - render as a styled div that turndown will convert
function MarkdownCallout({
  children,
  type = "info",
}: {
  children?: ReactNode;
  type?: string;
}) {
  return createElement("div", { className: `callout ${type}` }, children);
}

// Cards - render as sections
function MarkdownCards({ children }: { children?: ReactNode }) {
  return createElement("div", null, children);
}

function MarkdownCard({
  children,
  title,
  href,
}: {
  children?: ReactNode;
  title?: string;
  href?: string;
}) {
  if (href) {
    return createElement(
      "div",
      null,
      title && createElement("h4", null, createElement("a", { href }, title)),
      children
    );
  }
  return createElement(
    "div",
    null,
    title && createElement("h4", null, title),
    children
  );
}

MarkdownCards.Card = MarkdownCard;

// FileTree - render as a code block
function MarkdownFileTree({ children }: { children?: ReactNode }) {
  return createElement("pre", null, createElement("code", null, children));
}

// Link components - render as standard links
function _MarkdownLink({
  children,
  href,
}: {
  children?: ReactNode;
  href?: string;
}) {
  return createElement("a", { href }, children);
}

// ============================================
// HTML Element Handlers
// ============================================

// Video - convert to a descriptive link
function MarkdownVideo({
  src,
  title,
  children,
}: {
  src?: string;
  title?: string;
  children?: ReactNode;
}) {
  if (!src) {
    return createElement(Fragment, null, children);
  }
  const filename =
    src.split("/").pop()?.replace(FILE_EXTENSION_REGEX, "") || "Video";
  const videoTitle = title || filename.replace(UNDERSCORE_DASH_REGEX, " ");
  return createElement("p", null, `[Video: ${videoTitle}](${src})`);
}

// Audio - convert to a descriptive link
function MarkdownAudio({
  src,
  title,
  children,
}: {
  src?: string;
  title?: string;
  children?: ReactNode;
}) {
  if (!src) {
    return createElement(Fragment, null, children);
  }
  const filename =
    src.split("/").pop()?.replace(FILE_EXTENSION_REGEX, "") || "Audio";
  const audioTitle = title || filename.replace(UNDERSCORE_DASH_REGEX, " ");
  return createElement("p", null, `[Audio: ${audioTitle}](${src})`);
}

// Image - keep as img for turndown to handle
function MarkdownImage({
  src,
  alt,
  title,
}: {
  src?: string;
  alt?: string;
  title?: string;
}) {
  return createElement("img", { src, alt: alt || title || "" });
}

// Iframe - convert to link
function MarkdownIframe({ src, title }: { src?: string; title?: string }) {
  if (!src) {
    return null;
  }
  const label = title || "Embedded content";
  return createElement("p", null, `[${label}](${src})`);
}

// HR - render as markdown horizontal rule
function MarkdownHr() {
  return createElement("hr", null);
}

// BR - render as line break
function MarkdownBr() {
  return createElement("br", null);
}

// Container elements - just pass through children (strips the wrapper)
function MarkdownPassthrough({ children }: { children?: ReactNode }) {
  return createElement(Fragment, null, children);
}

// Figure/Figcaption - extract content
function MarkdownFigure({ children }: { children?: ReactNode }) {
  return createElement("figure", null, children);
}

function MarkdownFigcaption({ children }: { children?: ReactNode }) {
  return createElement("figcaption", null, children);
}

// Details/Summary - convert to blockquote-style
function MarkdownDetails({ children }: { children?: ReactNode }) {
  return createElement("blockquote", null, children);
}

function MarkdownSummary({ children }: { children?: ReactNode }) {
  return createElement("strong", null, children);
}

// Table elements - pass through for turndown
function MarkdownTable({ children }: { children?: ReactNode }) {
  return createElement("table", null, children);
}

function MarkdownThead({ children }: { children?: ReactNode }) {
  return createElement("thead", null, children);
}

function MarkdownTbody({ children }: { children?: ReactNode }) {
  return createElement("tbody", null, children);
}

function MarkdownTr({ children }: { children?: ReactNode }) {
  return createElement("tr", null, children);
}

function MarkdownTh({ children }: { children?: ReactNode }) {
  return createElement("th", null, children);
}

function MarkdownTd({ children }: { children?: ReactNode }) {
  return createElement("td", null, children);
}

// Definition lists
function MarkdownDl({ children }: { children?: ReactNode }) {
  return createElement("dl", null, children);
}

function MarkdownDt({ children }: { children?: ReactNode }) {
  return createElement("dt", null, createElement("strong", null, children));
}

function MarkdownDd({ children }: { children?: ReactNode }) {
  return createElement("dd", null, children);
}

// Code block elements - preserve language and content
function MarkdownPre({
  children,
  ...props
}: {
  children?: ReactNode;
  [key: string]: unknown;
}) {
  // Extract data-language if present (MDX sometimes uses this)
  const lang = props["data-language"] || "";
  return createElement("pre", { "data-language": lang }, children);
}

function MarkdownCode({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  // Preserve the language class for turndown
  return createElement(
    "code",
    { className: className || "", ...props },
    children
  );
}

// GuideOverview custom component
function MarkdownGuideOverview({ children }: { children?: ReactNode }) {
  return createElement("div", null, children);
}

function MarkdownGuideOverviewItem({
  children,
  title,
  href,
}: {
  children?: ReactNode;
  title?: string;
  href?: string;
}) {
  return createElement(
    "div",
    null,
    title &&
      createElement(
        "h4",
        null,
        href ? createElement("a", { href }, title) : title
      ),
    children
  );
}

function MarkdownGuideOverviewOutcomes({ children }: { children?: ReactNode }) {
  return createElement(Fragment, null, children);
}

function MarkdownGuideOverviewPrerequisites({
  children,
}: {
  children?: ReactNode;
}) {
  return createElement(
    "div",
    null,
    createElement("strong", null, "Prerequisites:"),
    children
  );
}

MarkdownGuideOverview.Item = MarkdownGuideOverviewItem;
MarkdownGuideOverview.Outcomes = MarkdownGuideOverviewOutcomes;
MarkdownGuideOverview.Prerequisites = MarkdownGuideOverviewPrerequisites;

// CheatSheet components
function MarkdownCheatSheetGrid({ children }: { children?: ReactNode }) {
  return createElement(Fragment, null, children);
}

function MarkdownCheatSheetSection({
  children,
  title,
  icon,
}: {
  children?: ReactNode;
  title?: string;
  icon?: string;
}) {
  return createElement(
    "div",
    null,
    title && createElement("h3", null, icon ? `${icon} ${title}` : title),
    children
  );
}

function MarkdownInfoBox({
  children,
  type = "info",
}: {
  children?: ReactNode;
  type?: string;
}) {
  // Use a div with callout class so the callout handler processes it
  // The div handler in htmlToMarkdown will add the bold label
  return createElement("div", { className: `callout ${type}` }, children);
}

function MarkdownCommandItem({ children }: { children?: ReactNode }) {
  return createElement("div", null, children);
}

function MarkdownCommandList({ children }: { children?: ReactNode }) {
  return createElement("div", null, children);
}

function MarkdownCommandBlock({ children }: { children?: ReactNode }) {
  return createElement("div", null, children);
}

// GlossaryTerm - just render the text
function MarkdownGlossaryTerm({
  children,
  term,
}: {
  children?: ReactNode;
  term?: string;
}) {
  return createElement("strong", { title: term }, children);
}

// DashboardLink - render as a link
function MarkdownDashboardLink({
  children,
  href,
}: {
  children?: ReactNode;
  href?: string;
}) {
  const dashboardUrl = href || "https://api.arcade.dev/dashboard";
  return createElement("a", { href: dashboardUrl }, children);
}

// SignupLink - render as a link
function MarkdownSignupLink({
  children,
}: {
  children?: ReactNode;
  linkLocation?: string;
}) {
  return createElement(
    "a",
    { href: "https://api.arcade.dev/dashboard/signup" },
    children
  );
}

// Generic catch-all for unknown components
function _MarkdownGeneric({ children }: { children?: ReactNode }) {
  return createElement("div", null, children);
}

// ToolCard - render as a link with summary
function MarkdownToolCard({
  name,
  summary,
  link,
  category: _category,
}: {
  name?: string;
  image?: string;
  summary?: string;
  link?: string;
  category?: string;
}) {
  return createElement(
    "li",
    null,
    createElement("a", { href: link }, name),
    summary ? ` - ${summary}` : ""
  );
}

// MCPClientGrid - render as a list of MCP clients
function MarkdownMCPClientGrid() {
  const mcpClients = [
    {
      key: "cursor",
      name: "Cursor",
      description: "AI-powered code editor with built-in MCP support",
    },
    {
      key: "claude-desktop",
      name: "Claude Desktop",
      description: "Anthropic's desktop app for Claude with MCP integration",
    },
    {
      key: "visual-studio-code",
      name: "Visual Studio Code",
      description: "Microsoft's code editor with MCP extensions",
    },
  ];

  return createElement(
    "ul",
    null,
    ...mcpClients.map((client, i) =>
      createElement(
        "li",
        { key: i },
        createElement(
          "a",
          { href: `/guides/tool-calling/mcp-clients/${client.key}` },
          client.name
        ),
        ` - ${client.description}`
      )
    )
  );
}

// ContactCards - render contact information
function MarkdownContactCards() {
  const contacts = [
    {
      title: "Email Support",
      description:
        "Get help with technical issues, account questions, and general inquiries.",
      href: "mailto:support@arcade.dev",
    },
    {
      title: "Contact Sales",
      description:
        "Discuss enterprise plans, pricing, and how Arcade can help your organization.",
      href: "mailto:sales@arcade.dev",
    },
    {
      title: "Discord Community",
      description:
        "Join for real-time help, connect with developers, and stay updated.",
      href: "https://discord.gg/GUZEMpEZ9p",
    },
    {
      title: "GitHub Issues & Discussions",
      description: "Report bugs, request features, and contribute to Arcade.",
      href: "https://github.com/ArcadeAI/arcade-mcp",
    },
    {
      title: "Security Research",
      description: "Report security vulnerabilities responsibly.",
      href: "/guides/security/security-research-program",
    },
    {
      title: "System Status",
      description: "Check the current status of Arcade's services.",
      href: "https://status.arcade.dev",
    },
  ];

  return createElement(
    "ul",
    null,
    ...contacts.map((contact, i) =>
      createElement(
        "li",
        { key: i },
        createElement("a", { href: contact.href }, contact.title),
        ` - ${contact.description}`
      )
    )
  );
}

// SubpageList - render list of subpages (uses provided meta)
function MarkdownSubpageList({
  basePath,
  meta,
}: {
  basePath?: string;
  meta?: Record<string, string | { title: string } | unknown>;
}) {
  if (!(meta && basePath)) {
    return null;
  }

  const subpages = Object.entries(meta).filter(
    ([key]) => key !== "index" && key !== "*"
  );

  return createElement(
    "ul",
    null,
    ...subpages.map(([key, title], i) => {
      let linkText: string;
      if (typeof title === "string") {
        linkText = title;
      } else if (
        typeof title === "object" &&
        title !== null &&
        "title" in title
      ) {
        linkText = (title as { title: string }).title;
      } else {
        linkText = String(title);
      }
      return createElement(
        "li",
        { key: i },
        createElement("a", { href: `${basePath}/${key}` }, linkText)
      );
    })
  );
}

// ============================================
// Landing Page Component - renders as markdown-friendly content
// ============================================
function MarkdownLandingPage() {
  return createElement(
    "div",
    null,
    // Hero
    createElement("h1", null, "MCP Runtime for AI agents that get things done"),
    createElement(
      "p",
      null,
      "Arcade handles OAuth, manages user tokens, and gives you 100+ pre-built integrations so your agents can take real action in production."
    ),
    createElement("hr", null),

    // Get Started links
    createElement("h2", null, "Get Started"),
    createElement(
      "ul",
      null,
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/get-started/quickstarts/call-tool-agent" },
          "Get Started with Arcade"
        )
      ),
      createElement(
        "li",
        null,
        createElement("a", { href: "/resources/integrations" }, "Explore Tools")
      )
    ),

    // Get Tools Section
    createElement("h2", null, "Get Tools"),
    createElement(
      "ul",
      null,
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations" },
          "Pre-built Integrations"
        ),
        " - Browse 100+ ready-to-use integrations for Gmail, Slack, GitHub, and more."
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/create-tools/tool-basics/build-mcp-server" },
          "Build Custom Tools"
        ),
        " - Create your own MCP servers and custom tools with our SDK."
      )
    ),

    // Use Arcade Section
    createElement("h2", null, "Use Arcade"),
    createElement(
      "ul",
      null,
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/tool-calling/mcp-clients" },
          "Connect to Your IDE"
        ),
        " - Add tools to Cursor, VS Code, Claude Desktop, or any MCP client."
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/agent-frameworks" },
          "Power Your Agent"
        ),
        " - Integrate with LangChain, OpenAI Agents, CrewAI, Vercel AI, and more."
      )
    ),

    // Popular Integrations
    createElement("h2", null, "Popular Integrations"),
    createElement(
      "p",
      null,
      "Pre-built MCP servers ready to use with your agents. ",
      createElement("a", { href: "/resources/integrations" }, "See all 100+")
    ),
    createElement(
      "ul",
      null,
      // Row 1
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/google-sheets" },
          "Google Sheets"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/jira" },
          "Jira"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/gmail" },
          "Gmail"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/confluence" },
          "Confluence"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/social-communication/slack" },
          "Slack"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/google-docs" },
          "Google Docs"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/google-slides" },
          "Google Slides"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/crm/hubspot" },
          "HubSpot"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/linear" },
          "Linear"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/google-drive" },
          "Google Drive"
        )
      ),
      // Row 2
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/development/github" },
          "GitHub"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/social-communication/x" },
          "X"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          {
            href: "/resources/integrations/social-communication/microsoft-teams",
          },
          "MS Teams"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/outlook-mail" },
          "Outlook"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/payments/stripe" },
          "Stripe"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/notion" },
          "Notion"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/asana" },
          "Asana"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/social-communication/reddit" },
          "Reddit"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/search/youtube" },
          "YouTube"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/resources/integrations/productivity/dropbox" },
          "Dropbox"
        )
      )
    ),

    // Framework Compatibility
    createElement("h2", null, "Works With Your Stack"),
    createElement(
      "p",
      null,
      "Arcade integrates with popular agent frameworks and LLM providers."
    ),
    createElement(
      "ul",
      null,
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/agent-frameworks/langchain/use-arcade-tools" },
          "LangChain"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/agent-frameworks/openai-agents/use-arcade-tools" },
          "OpenAI Agents"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/agent-frameworks/crewai/use-arcade-tools" },
          "CrewAI"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/agent-frameworks/vercelai" },
          "Vercel AI"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/agent-frameworks/google-adk/use-arcade-tools" },
          "Google ADK"
        )
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/guides/agent-frameworks/mastra/use-arcade-tools" },
          "Mastra"
        )
      )
    ),

    // How Arcade Works
    createElement("h2", null, "How Arcade Works"),
    createElement(
      "p",
      null,
      "Three core components that power your AI agents."
    ),
    createElement(
      "ul",
      null,
      createElement(
        "li",
        null,
        createElement(
          "strong",
          null,
          createElement("a", { href: "/get-started/about-arcade" }, "Runtime")
        ),
        " - Your MCP server and agentic tool provider. Manages authentication, tool registration, and execution."
      ),
      createElement(
        "li",
        null,
        createElement(
          "strong",
          null,
          createElement(
            "a",
            { href: "/resources/integrations" },
            "Tool Catalog"
          )
        ),
        " - Catalog of pre-built tools and integrations. Browse 100+ ready-to-use MCP servers."
      ),
      createElement(
        "li",
        null,
        createElement(
          "strong",
          null,
          createElement(
            "a",
            { href: "/guides/tool-calling/custom-apps/auth-tool-calling" },
            "Agent Authorization"
          )
        ),
        " - Let agents act on behalf of users. Handle OAuth, API keys, and tokens for tools like Gmail and Google Drive."
      )
    ),

    // Sample Applications
    createElement("h2", null, "Sample Applications"),
    createElement(
      "p",
      null,
      "See Arcade in action with these example applications."
    ),
    createElement(
      "ul",
      null,
      createElement(
        "li",
        null,
        createElement("a", { href: "https://chat.arcade.dev/" }, "Arcade Chat"),
        " - A chatbot that can help you with your daily tasks."
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "https://github.com/ArcadeAI/ArcadeSlackAgent" },
          "Archer"
        ),
        " - A bot for Slack that can act on your behalf."
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "https://github.com/dforwardfeed/slack-AIpodcast-summaries" },
          "YouTube Podcast Summarizer"
        ),
        " - A Slack bot that extracts and summarizes YouTube transcripts."
      )
    ),
    createElement(
      "p",
      null,
      createElement("a", { href: "/resources/examples" }, "See all examples")
    ),

    // Connect IDE callout
    createElement("h2", null, "Connect Your IDE with Arcade's LLMs.txt"),
    createElement(
      "p",
      null,
      "Give Cursor, Claude Code, and other AI IDEs access to Arcade's documentation so they can write integration code for you. ",
      createElement(
        "a",
        { href: "/get-started/setup/connect-arcade-docs" },
        "Learn more"
      )
    ),

    // Quick Links
    createElement("h2", null, "Quick Links"),
    createElement(
      "ul",
      null,
      createElement(
        "li",
        null,
        createElement("a", { href: "/references/api" }, "API Reference")
      ),
      createElement(
        "li",
        null,
        createElement(
          "a",
          { href: "/references/cli-cheat-sheet" },
          "CLI Cheat Sheet"
        )
      ),
      createElement(
        "li",
        null,
        createElement("a", { href: "/resources/faq" }, "FAQ")
      ),
      createElement(
        "li",
        null,
        createElement("a", { href: "/references/changelog" }, "Changelog")
      )
    )
  );
}

// ============================================
// MCP Servers Component - renders MCP server list as markdown
// ============================================
function MarkdownMcpServers() {
  // All available MCP servers (alphabetically sorted)
  const allMcpServers = [
    {
      label: "Airtable API",
      href: "/resources/integrations/productivity/airtable-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Arcade Engine API",
      href: "/resources/integrations/development/arcade-engine-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "Asana",
      href: "/resources/integrations/productivity/asana",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Asana API",
      href: "/resources/integrations/productivity/asana-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Ashby API",
      href: "/resources/integrations/productivity/ashby-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Box API",
      href: "/resources/integrations/productivity/box-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Bright Data",
      href: "/resources/integrations/development/brightdata",
      type: "community",
      category: "development",
    },
    {
      label: "Calendly API",
      href: "/resources/integrations/productivity/calendly-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Clickhouse",
      href: "/resources/integrations/databases/clickhouse",
      type: "community",
      category: "databases",
    },
    {
      label: "ClickUp",
      href: "/resources/integrations/productivity/clickup",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "ClickUp API",
      href: "/resources/integrations/productivity/clickup-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Close.io",
      href: "/resources/integrations/productivity/closeio",
      type: "community",
      category: "productivity",
    },
    {
      label: "Confluence",
      href: "/resources/integrations/productivity/confluence",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Cursor Agents API",
      href: "/resources/integrations/development/cursor-agents-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "Customer.io API",
      href: "/resources/integrations/customer-support/customerio-api",
      type: "arcade_starter",
      category: "customer-support",
    },
    {
      label: "Customer.io Pipelines API",
      href: "/resources/integrations/customer-support/customerio-pipelines-api",
      type: "arcade_starter",
      category: "customer-support",
    },
    {
      label: "Customer.io Track API",
      href: "/resources/integrations/customer-support/customerio-track-api",
      type: "arcade_starter",
      category: "customer-support",
    },
    {
      label: "Datadog API",
      href: "/resources/integrations/development/datadog-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "Discord",
      href: "/resources/integrations/social-communication/discord",
      type: "auth",
      category: "social",
    },
    {
      label: "Dropbox",
      href: "/resources/integrations/productivity/dropbox",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "E2B",
      href: "/resources/integrations/development/e2b",
      type: "arcade",
      category: "development",
    },
    {
      label: "Exa API",
      href: "/resources/integrations/search/exa-api",
      type: "arcade_starter",
      category: "search",
    },
    {
      label: "Figma API",
      href: "/resources/integrations/productivity/figma-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Firecrawl",
      href: "/resources/integrations/development/firecrawl",
      type: "arcade",
      category: "development",
    },
    {
      label: "Freshservice API",
      href: "/resources/integrations/customer-support/freshservice-api",
      type: "arcade_starter",
      category: "customer-support",
    },
    {
      label: "GitHub",
      href: "/resources/integrations/development/github",
      type: "arcade",
      category: "development",
    },
    {
      label: "GitHub API",
      href: "/resources/integrations/development/github-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "Gmail",
      href: "/resources/integrations/productivity/gmail",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Google Calendar",
      href: "/resources/integrations/productivity/google-calendar",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Google Contacts",
      href: "/resources/integrations/productivity/google-contacts",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Google Docs",
      href: "/resources/integrations/productivity/google-docs",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Google Drive",
      href: "/resources/integrations/productivity/google-drive",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Google Finance",
      href: "/resources/integrations/search/google_finance",
      type: "arcade",
      category: "search",
    },
    {
      label: "Google Flights",
      href: "/resources/integrations/search/google_flights",
      type: "arcade",
      category: "search",
    },
    {
      label: "Google Hotels",
      href: "/resources/integrations/search/google_hotels",
      type: "arcade",
      category: "search",
    },
    {
      label: "Google Jobs",
      href: "/resources/integrations/search/google_jobs",
      type: "arcade",
      category: "search",
    },
    {
      label: "Google Maps",
      href: "/resources/integrations/search/google_maps",
      type: "arcade",
      category: "search",
    },
    {
      label: "Google News",
      href: "/resources/integrations/search/google_news",
      type: "arcade",
      category: "search",
    },
    {
      label: "Google Search",
      href: "/resources/integrations/search/google_search",
      type: "arcade",
      category: "search",
    },
    {
      label: "Google Sheets",
      href: "/resources/integrations/productivity/google-sheets",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Google Shopping",
      href: "/resources/integrations/search/google_shopping",
      type: "arcade",
      category: "search",
    },
    {
      label: "Google Slides",
      href: "/resources/integrations/productivity/google-slides",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "HubSpot",
      href: "/resources/integrations/sales/hubspot",
      type: "arcade",
      category: "sales",
    },
    {
      label: "HubSpot Automation API",
      href: "/resources/integrations/sales/hubspot-automation-api",
      type: "arcade_starter",
      category: "sales",
    },
    {
      label: "HubSpot CMS API",
      href: "/resources/integrations/sales/hubspot-cms-api",
      type: "arcade_starter",
      category: "sales",
    },
    {
      label: "HubSpot Conversations API",
      href: "/resources/integrations/sales/hubspot-conversations-api",
      type: "arcade_starter",
      category: "sales",
    },
    {
      label: "HubSpot CRM API",
      href: "/resources/integrations/sales/hubspot-crm-api",
      type: "arcade_starter",
      category: "sales",
    },
    {
      label: "HubSpot Events API",
      href: "/resources/integrations/sales/hubspot-events-api",
      type: "arcade_starter",
      category: "sales",
    },
    {
      label: "HubSpot Marketing API",
      href: "/resources/integrations/sales/hubspot-marketing-api",
      type: "arcade_starter",
      category: "sales",
    },
    {
      label: "HubSpot Meetings API",
      href: "/resources/integrations/sales/hubspot-meetings-api",
      type: "arcade_starter",
      category: "sales",
    },
    {
      label: "HubSpot Users API",
      href: "/resources/integrations/sales/hubspot-users-api",
      type: "arcade_starter",
      category: "sales",
    },
    {
      label: "Imgflip",
      href: "/resources/integrations/entertainment/imgflip",
      type: "arcade",
      category: "entertainment",
    },
    {
      label: "Intercom API",
      href: "/resources/integrations/customer-support/intercom-api",
      type: "arcade_starter",
      category: "customer-support",
    },
    {
      label: "Jira",
      href: "/resources/integrations/productivity/jira",
      type: "auth",
      category: "productivity",
    },
    {
      label: "Linear",
      href: "/resources/integrations/productivity/linear",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "LinkedIn",
      href: "/resources/integrations/social-communication/linkedin",
      type: "arcade",
      category: "social",
    },
    {
      label: "Luma API",
      href: "/resources/integrations/productivity/luma-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Mailchimp API",
      href: "/resources/integrations/productivity/mailchimp-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Microsoft SharePoint",
      href: "/resources/integrations/productivity/sharepoint",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Microsoft Teams",
      href: "/resources/integrations/social-communication/microsoft-teams",
      type: "arcade",
      category: "social",
    },
    {
      label: "Miro API",
      href: "/resources/integrations/productivity/miro-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "MongoDB",
      href: "/resources/integrations/databases/mongodb",
      type: "community",
      category: "databases",
    },
    {
      label: "Notion",
      href: "/resources/integrations/productivity/notion",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Obsidian",
      href: "/resources/integrations/productivity/obsidian",
      type: "community",
      category: "productivity",
    },
    {
      label: "Outlook Calendar",
      href: "/resources/integrations/productivity/outlook-calendar",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "Outlook Mail",
      href: "/resources/integrations/productivity/outlook-mail",
      type: "arcade",
      category: "productivity",
    },
    {
      label: "PagerDuty API",
      href: "/resources/integrations/development/pagerduty-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "Postgres",
      href: "/resources/integrations/databases/postgres",
      type: "community",
      category: "databases",
    },
    {
      label: "PostHog API",
      href: "/resources/integrations/development/posthog-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "Reddit",
      href: "/resources/integrations/social-communication/reddit",
      type: "arcade",
      category: "social",
    },
    {
      label: "Salesforce",
      href: "/resources/integrations/sales/salesforce",
      type: "arcade",
      category: "sales",
    },
    {
      label: "Slack",
      href: "/resources/integrations/social-communication/slack",
      type: "arcade",
      category: "social",
    },
    {
      label: "Slack API",
      href: "/resources/integrations/social-communication/slack-api",
      type: "arcade_starter",
      category: "social",
    },
    {
      label: "Spotify",
      href: "/resources/integrations/entertainment/spotify",
      type: "arcade",
      category: "entertainment",
    },
    {
      label: "SquareUp API",
      href: "/resources/integrations/productivity/squareup-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Stripe",
      href: "/resources/integrations/payments/stripe",
      type: "arcade",
      category: "payments",
    },
    {
      label: "Stripe API",
      href: "/resources/integrations/payments/stripe_api",
      type: "arcade_starter",
      category: "payments",
    },
    {
      label: "TickTick API",
      href: "/resources/integrations/productivity/ticktick-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Trello API",
      href: "/resources/integrations/productivity/trello-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "Twilio",
      href: "/resources/integrations/social-communication/twilio",
      type: "verified",
      category: "social",
    },
    {
      label: "Twitch",
      href: "/resources/integrations/entertainment/twitch",
      type: "auth",
      category: "entertainment",
    },
    {
      label: "Vercel API",
      href: "/resources/integrations/development/vercel-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "Walmart",
      href: "/resources/integrations/search/walmart",
      type: "arcade",
      category: "search",
    },
    {
      label: "Weaviate API",
      href: "/resources/integrations/development/weaviate-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "X",
      href: "/resources/integrations/social-communication/x",
      type: "arcade",
      category: "social",
    },
    {
      label: "Xero API",
      href: "/resources/integrations/productivity/xero-api",
      type: "arcade_starter",
      category: "productivity",
    },
    {
      label: "YouTube",
      href: "/resources/integrations/search/youtube",
      type: "arcade",
      category: "search",
    },
    {
      label: "Zendesk",
      href: "/resources/integrations/customer-support/zendesk",
      type: "arcade",
      category: "customer-support",
    },
    {
      label: "Zoho Books API",
      href: "/resources/integrations/payments/zoho-books-api",
      type: "arcade_starter",
      category: "payments",
    },
    {
      label: "Zoho Creator API",
      href: "/resources/integrations/productivity/zoho-creator-api",
      type: "arcade_starter",
      category: "development",
    },
    {
      label: "Zoom",
      href: "/resources/integrations/social-communication/zoom",
      type: "arcade",
      category: "social",
    },
  ];

  const typeLabels: Record<string, string> = {
    arcade: "Arcade Optimized",
    arcade_starter: "Arcade Starter",
    verified: "Verified",
    community: "Community",
    auth: "Auth Provider",
  };

  const categoryLabels: Record<string, string> = {
    productivity: "Productivity",
    development: "Development",
    social: "Social",
    search: "Search",
    sales: "Sales",
    payments: "Payments",
    entertainment: "Entertainment",
    databases: "Databases",
    "customer-support": "Customer Support",
  };

  return createElement(
    "div",
    null,
    createElement(
      "p",
      null,
      "Registry of all MCP Servers available in the Arcade ecosystem. ",
      createElement(
        "a",
        { href: "/guides/create-tools/tool-basics/build-mcp-server" },
        "Build your own MCP Server"
      ),
      "."
    ),
    createElement(
      "ul",
      null,
      ...allMcpServers.map((server, i) =>
        createElement(
          "li",
          { key: i },
          createElement("a", { href: server.href }, server.label),
          ` - ${typeLabels[server.type] || server.type}, ${categoryLabels[server.category] || server.category}`
        )
      )
    )
  );
}

// All available markdown-friendly components
const markdownComponents: Record<
  string,
  React.ComponentType<Record<string, unknown>>
> = {
  // Nextra components
  Tabs: MarkdownTabs,
  "Tabs.Tab": MarkdownTab,
  Tab: MarkdownTab,
  Steps: MarkdownSteps,
  Callout: MarkdownCallout,
  Cards: MarkdownCards,
  "Cards.Card": MarkdownCard,
  Card: MarkdownCard,
  FileTree: MarkdownFileTree,

  // Custom components
  GuideOverview: MarkdownGuideOverview,
  "GuideOverview.Item": MarkdownGuideOverviewItem,
  "GuideOverview.Outcomes": MarkdownGuideOverviewOutcomes,
  "GuideOverview.Prerequisites": MarkdownGuideOverviewPrerequisites,
  CheatSheetGrid: MarkdownCheatSheetGrid,
  CheatSheetSection: MarkdownCheatSheetSection,
  InfoBox: MarkdownInfoBox,
  CommandItem: MarkdownCommandItem,
  CommandList: MarkdownCommandList,
  CommandBlock: MarkdownCommandBlock,
  GlossaryTerm: MarkdownGlossaryTerm,
  DashboardLink: MarkdownDashboardLink,
  SignupLink: MarkdownSignupLink,
  ToolCard: MarkdownToolCard,
  MCPClientGrid: MarkdownMCPClientGrid,
  ContactCards: MarkdownContactCards,
  SubpageList: MarkdownSubpageList,

  // Page-level components
  LandingPage: MarkdownLandingPage,
  Toolkits: MarkdownMcpServers,

  // HTML-like components (uppercase - for custom components)
  Video: MarkdownVideo,
  Audio: MarkdownAudio,
  Image: MarkdownImage,

  // ============================================
  // Lowercase HTML element overrides
  // MDX passes these through as intrinsic elements
  // ============================================

  // Media elements - convert to links
  video: MarkdownVideo,
  audio: MarkdownAudio,
  img: MarkdownImage,
  iframe: MarkdownIframe,
  embed: MarkdownPassthrough,
  object: MarkdownPassthrough,
  source: MarkdownPassthrough,
  track: MarkdownPassthrough,
  picture: MarkdownPassthrough,

  // Structural/semantic elements - strip wrapper, keep children
  div: MarkdownPassthrough,
  span: MarkdownPassthrough,
  section: MarkdownPassthrough,
  article: MarkdownPassthrough,
  aside: MarkdownPassthrough,
  header: MarkdownPassthrough,
  footer: MarkdownPassthrough,
  main: MarkdownPassthrough,
  nav: MarkdownPassthrough,
  address: MarkdownPassthrough,
  hgroup: MarkdownPassthrough,

  // Figure elements
  figure: MarkdownFigure,
  figcaption: MarkdownFigcaption,

  // Interactive elements
  details: MarkdownDetails,
  summary: MarkdownSummary,
  dialog: MarkdownPassthrough,

  // Self-closing elements
  hr: MarkdownHr,
  br: MarkdownBr,
  wbr: MarkdownPassthrough,

  // Table elements - pass through for turndown
  table: MarkdownTable,
  thead: MarkdownThead,
  tbody: MarkdownTbody,
  tfoot: MarkdownTbody,
  tr: MarkdownTr,
  th: MarkdownTh,
  td: MarkdownTd,
  caption: MarkdownPassthrough,
  colgroup: MarkdownPassthrough,
  col: MarkdownPassthrough,

  // Code elements - preserve language info
  pre: MarkdownPre,
  code: MarkdownCode,

  // Definition lists
  dl: MarkdownDl,
  dt: MarkdownDt,
  dd: MarkdownDd,

  // Form elements - strip (not useful in markdown)
  form: MarkdownPassthrough,
  input: MarkdownPassthrough,
  button: MarkdownPassthrough,
  select: MarkdownPassthrough,
  option: MarkdownPassthrough,
  optgroup: MarkdownPassthrough,
  textarea: MarkdownPassthrough,
  label: MarkdownPassthrough,
  fieldset: MarkdownPassthrough,
  legend: MarkdownPassthrough,
  datalist: MarkdownPassthrough,
  output: MarkdownPassthrough,
  progress: MarkdownPassthrough,
  meter: MarkdownPassthrough,

  // Script/style elements - remove entirely
  script: () => null,
  style: () => null,
  noscript: MarkdownPassthrough,
  template: MarkdownPassthrough,
  slot: MarkdownPassthrough,

  // Canvas/SVG - remove (not representable in markdown)
  canvas: () => null,
  svg: () => null,

  // Misc inline elements - pass through
  abbr: MarkdownPassthrough,
  bdi: MarkdownPassthrough,
  bdo: MarkdownPassthrough,
  cite: MarkdownPassthrough,
  data: MarkdownPassthrough,
  dfn: MarkdownPassthrough,
  kbd: MarkdownPassthrough,
  mark: MarkdownPassthrough,
  q: MarkdownPassthrough,
  rb: MarkdownPassthrough,
  rp: MarkdownPassthrough,
  rt: MarkdownPassthrough,
  rtc: MarkdownPassthrough,
  ruby: MarkdownPassthrough,
  s: MarkdownPassthrough,
  samp: MarkdownPassthrough,
  small: MarkdownPassthrough,
  sub: MarkdownPassthrough,
  sup: MarkdownPassthrough,
  time: MarkdownPassthrough,
  u: MarkdownPassthrough,
  var: MarkdownPassthrough,

  // Map/area elements
  map: MarkdownPassthrough,
  area: MarkdownPassthrough,

  // Fallbacks
  wrapper: PassThrough,
};

/**
 * Strip import and export statements from MDX content
 * This allows us to compile MDX without needing to resolve external modules
 */
function stripImportsAndExports(content: string): string {
  let result = content;

  // Remove import statements (various formats)
  // import X from 'module'
  result = result.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, "");
  // import 'module'
  result = result.replace(/^import\s+['"].*?['"];?\s*$/gm, "");
  // import { X } from 'module' (multiline)
  result = result.replace(
    /^import\s*\{[\s\S]*?\}\s*from\s*['"].*?['"];?\s*$/gm,
    ""
  );

  // Remove export statements
  result = result.replace(
    /^export\s+(const|let|var|function|default)\s+[\s\S]*?(?=\n(?:import|export|#|\n|$))/gm,
    ""
  );

  return result;
}

/**
 * Convert MDX content to clean Markdown
 */
export async function mdxToMarkdown(
  mdxContent: string,
  pagePath: string
): Promise<string> {
  // Extract frontmatter first
  const frontmatterMatch = mdxContent.match(FRONTMATTER_REGEX);
  let frontmatter = "";
  let contentWithoutFrontmatter = mdxContent;

  if (frontmatterMatch) {
    frontmatter = frontmatterMatch[0];
    contentWithoutFrontmatter = mdxContent.slice(frontmatterMatch[0].length);
  }

  try {
    // Strip imports before compilation so MDX doesn't try to resolve them
    const strippedContent = stripImportsAndExports(contentWithoutFrontmatter);

    // Compile MDX to JavaScript
    // Include remarkGfm to properly parse GFM tables, strikethrough, etc. in the MDX source
    const compiled = await compile(strippedContent, {
      outputFormat: "function-body",
      development: false,
      remarkPlugins: [remarkGfm],
    });

    // Run the compiled code to get the component
    // Use process.cwd() as baseUrl since we're not resolving any imports
    const { default: MDXContent } = await run(String(compiled), {
      Fragment: JsxFragment,
      jsx,
      jsxs,
      baseUrl: pathToFileURL(process.cwd()).href,
    });

    // Render with markdown-friendly components
    const element = createElement(MDXContent, {
      components: markdownComponents,
    });

    // Convert React element to HTML string
    const render = await getRenderer();
    const html = render(element);

    // Convert HTML to Markdown using unified ecosystem
    let markdown = await htmlToMarkdown(html);

    // Clean up excessive whitespace
    markdown = markdown.replace(/\n{3,}/g, "\n\n").trim();

    // If result is empty, provide fallback
    if (!markdown || markdown.length < 10) {
      const title = extractTitle(frontmatter);
      const description = extractDescription(frontmatter);
      const htmlUrl = `https://docs.arcade.dev${pagePath}`;
      return `${frontmatter}# ${title}

${description}

This page contains interactive content. Visit the full page at: ${htmlUrl}
`;
    }

    return `${frontmatter}${markdown}\n`;
  } catch (_error) {
    return fallbackMdxToMarkdown(mdxContent, pagePath);
  }
}

/**
 * Extract title from frontmatter
 */
function extractTitle(frontmatter: string): string {
  const match = frontmatter.match(TITLE_REGEX);
  return (
    match?.[1] || match?.[2] || match?.[3]?.trim() || "Arcade Documentation"
  );
}

/**
 * Extract description from frontmatter
 */
function extractDescription(frontmatter: string): string {
  const match = frontmatter.match(DESCRIPTION_REGEX);
  return match?.[1] || match?.[2] || match?.[3]?.trim() || "";
}

/**
 * Fallback: Simple regex-based MDX to Markdown conversion
 * Used when MDX compilation fails
 */
function fallbackMdxToMarkdown(content: string, pagePath: string): string {
  let result = content;

  // Extract frontmatter
  const frontmatterMatch = result.match(FRONTMATTER_REGEX);
  let frontmatter = "";
  if (frontmatterMatch) {
    frontmatter = frontmatterMatch[0];
    result = result.slice(frontmatterMatch[0].length);
  }

  // Remove imports
  result = result.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, "");
  result = result.replace(/^import\s+['"].*?['"];?\s*$/gm, "");
  result = result.replace(
    /^import\s*\{[\s\S]*?\}\s*from\s*['"].*?['"];?\s*$/gm,
    ""
  );

  // Remove exports
  result = result.replace(
    /^export\s+(const|let|var|function|default)\s+[\s\S]*?(?=\n(?:import|export|#|\n|$))/gm,
    ""
  );

  // Remove self-closing JSX components (uppercase)
  result = result.replace(/<([A-Z][a-zA-Z0-9.]*)[^>]*\/>/g, "");

  // Remove self-closing HTML elements (lowercase) - but convert video/img to links
  result = result.replace(
    /<video[^>]*src=["']([^"']+)["'][^>]*\/?>/gi,
    "\n\n[Video]($1)\n\n"
  );
  result = result.replace(
    /<img[^>]*src=["']([^"']+)["'][^>]*\/?>/gi,
    "![]($1)"
  );
  result = result.replace(/<[a-z][a-zA-Z0-9]*[^>]*\/>/g, "");

  // Extract content from JSX with children (process iteratively for nesting)
  let prev = "";
  while (prev !== result) {
    prev = result;
    // Uppercase components
    result = result.replace(
      /<([A-Z][a-zA-Z0-9.]*)[^>]*>([\s\S]*?)<\/\1>/g,
      "$2"
    );
    // Lowercase HTML elements (div, span, etc.)
    result = result.replace(
      /<(div|span|section|article|aside|header|footer|main|nav|video|figure|figcaption)[^>]*>([\s\S]*?)<\/\1>/gi,
      "$2"
    );
  }

  // Remove JSX expressions
  result = result.replace(/\{[^}]+\}/g, "");

  // Clean up
  result = result.replace(/\n{3,}/g, "\n\n").trim();

  if (!result || result.length < 10) {
    const title = extractTitle(frontmatter);
    const description = extractDescription(frontmatter);
    const htmlUrl = `https://docs.arcade.dev${pagePath}`;
    return `${frontmatter}# ${title}

${description}

This page contains interactive content. Visit the full page at: ${htmlUrl}
`;
  }

  return `${frontmatter}${result}\n`;
}
