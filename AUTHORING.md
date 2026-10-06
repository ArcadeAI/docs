# Authoring guidelines

These are the guidelines for writing documentation for Arcade, to help keep the tone and style consistent across the docs. The first half covers writing; the second half covers how a page is put together in this repo (Fumadocs + MDX).

## Writing style

- **Clarity and simplicity**: Write in short, concise sentences. Focus on simple language and avoid unnecessary jargon. The topic is complex enough; keep the language simple wherever possible!
- **Action-oriented**: Use verbs that guide the reader through tasks step by step, such as "Install," "Run," "Initialize," or "Authorize."
- **Sentence case**: Use sentence case for titles and headings.

## Voice and tone

- **Active voice**: Write in an active voice to make the instructions direct and easy to follow. Example: “Install Arcade” rather than “Arcade should be installed.”
- **Friendly and supportive**: Assume the reader is unfamiliar with Arcade but is eager to learn. Keep the tone positive, friendly, and approachable.
- **Persona-aware**: Arcade docs serve **agent developers** (Get Started, Build) and **platform operators** (Operate). Open each page by naming who it is for. For agent developers, use code-centric explanations and assume basic Python knowledge. For platform operators, emphasize deployment, identity, and governance; link out to Build when code samples belong there.
- **Encouraging exploration**: Use phrases that invite readers to try things out and explore the capabilities of Arcade. Example: “Let’s try…” or “You can explore…”

## Examples and code

- **Code first**: Provide code snippets upfront and supplement them with explanations afterward. Code should be clear and easy to copy/paste without unnecessary formatting.
- **Contextual comments**: Use comments in the code snippets to explain key parts, but keep them brief. Only highlight what’s essential for the user to know in that specific step.
- **Appropriate indentation**: Use 4 spaces for indentation in Python code. Use 2 spaces for indentation in other languages.

## Naming and terminology

- **Arcade**: Always refer to the product as "Arcade" in both titles and body text. Do not abbreviate or shorten the product name. Do not append "AI" to the product name.
- **Engine**: Refer to "the Arcade Engine" when the deployment option is irrelevant. Otherwise, refer to "the Arcade Cloud Engine" or "a self-hosted Arcade Engine."
- **MCP Servers**: MCP-Servers are collections of tools, either built by Arcade or a third party developer. For MCP Servers built by Arcade, refer to "the Arcade [Toolkit name] toolkit." For example, "the Arcade GitHub toolkit."

## Where pages live

All content is MDX under `content/docs/`. The file path is the URL:

| File | URL |
| --- | --- |
| `content/docs/build/tools.mdx` | `/en/build/tools` |
| `content/docs/build/tools/index.mdx` | `/en/build/tools` (use this form when the page has child pages) |
| `content/docs/index.mdx` | `/en` |

Toolkit (MCP server) reference pages at `/en/resources/integrations/<category>/<toolkit>` are not MDX files; they are generated from `toolkit-docs-generator/data/toolkits/*.json`. Edit their prose through `toolkit-docs-generator/curation/`.

Internal links keep their current form (`/build/tools` or `/en/build/tools`); `proxy.ts` redirects locale-less paths. When you delete or move a page, add an entry to `redirects.ts` (`bun run check-redirects --auto-fix` drafts it for you).

## Frontmatter

Every page starts with a YAML frontmatter block. `title` is required; it is rendered as the page heading and used as the sidebar label, so **do not repeat it as a `# Heading` in the body**.

```mdx
---
title: Call a tool from an agent
description: Give an agent its first Arcade tool in five minutes.
---
```

Optional fields:

| Field | Purpose |
| --- | --- |
| `description` | Shown under the title and used for `<meta name="description">`. Strongly recommended. |
| `metaTitle` | Overrides the `<title>` tag when it should differ from the heading (for example, a longer SEO title). |
| `sidebarTitle` | Shorter label for the sidebar when `title` is long. |
| `full: true` | Full-width layout (no table of contents column). |
| `toc: false` | Hide the table of contents. |
| `breadcrumb: false` | Hide the breadcrumb. |
| `icon` | Lucide icon name for a top-level page (for example `Home`). |

## Sidebar order: `meta.json`

Each folder in `content/docs/` has a `meta.json` that controls its sidebar entry and the order of its children:

```json
{
  "title": "Get Started",
  "icon": "BookOpen",
  "pages": [
    "index",
    "quickstarts",
    "---Frameworks---",
    "agent-frameworks",
    "[Arcade Dashboard](https://api.arcade.dev/dashboard)",
    "..."
  ]
}
```

- A bare entry (`"quickstarts"`) must match a sibling `quickstarts.mdx`, `quickstarts/index.mdx`, or `quickstarts/` folder.
- `"---Title---"` renders a separator; `"[Title](href)"` renders a link; `"..."` appends every unlisted sibling alphabetically; `"!slug"` hides a sibling.
- Unless the file contains `"..."`, every sibling page must be listed (`bun run check-meta` enforces both rules, and the pre-commit hook runs it on staged `meta.json` files).
- Page titles come from each page's frontmatter, and folder titles from the folder's own `meta.json` — not from the parent.
- `icon` names are [Lucide](https://lucide.dev/icons) icons; only top-level folders set one.
- The nine `content/docs/resources/integrations/<category>/meta.json` files are generated by `bun run sync-toolkit-sidebar`; do not edit them by hand.

## Components

These components are available in every MDX file without an import: `Callout`, `Tabs`/`Tabs.Tab`, `Steps`, `Cards`/`Cards.Card`, `GuideOverview` (with `.Outcomes`, `.Prerequisites`, `.YouWillLearn`), `SignupLink`, `DashboardLink`, `GlossaryTerm`, `ContactEmail`, `ToolCard`, `SampleAppCard`, `ToggleContent`, `SubpageList`, `ErrorHierarchy`, `ErrorCard`, `AgentFrameworkTabs`, `CheatSheetGrid`, `CheatSheetSection`, `InfoBox`, `MCPClientGrid`, and `Image`.

```mdx
<Callout type="info">Use `type` of `default`, `info`, `warning`, `error`, or `important`.</Callout>

<Tabs items={["Python", "JavaScript"]} storageKey="language">
  <Tabs.Tab>Python content</Tabs.Tab>
  <Tabs.Tab>JavaScript content</Tabs.Tab>
</Tabs>

<Steps>
### Install the SDK
...
### Call a tool
...
</Steps>
```

`Steps` numbers its `###` headings automatically. `SubpageList` lists the current folder's children: `<SubpageList basePath="/build/tools" />`.

Page-specific components live in `components/pages/<section>/` and are imported with `@/components/pages/<section>/<name>`; shared components with `@/components/<name>`.

## Code blocks

Use fenced code blocks with a language. Fumadocs code-fence meta:

````mdx
```python title="main.py" lineNumbers {3,5-7}
from arcadepy import Arcade
```
````

- `title="path/to/file"` shows a filename header (was `filename=` in Nextra).
- `lineNumbers` shows line numbers (was `showLineNumbers`).
- `{1,3-5}` highlights lines (was `highlightLines={...}`).

## Before you submit

```bash
bun run vale:check      # style rules
bun run check-meta      # meta.json entries match files
bun run test            # links, frontmatter, sitemap, and more
```
