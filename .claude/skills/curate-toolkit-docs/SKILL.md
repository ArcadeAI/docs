---
name: curate-toolkit-docs
description: Add or edit hand-authored prose on an Arcade toolkit reference page by writing curation files under toolkit-docs-generator/curation/. Use when asked to document a toolkit's auth setup, explain an enum or parameter, add a warning to a tool, or fix wording on a toolkit page — anything where the text belongs to a specific toolkit or tool rather than a standalone docs page.
---

# Curating toolkit docs

Toolkit reference pages are generated. Editing the JSON under
`toolkit-docs-generator/data/toolkits/` does nothing durable — the next
generation run overwrites it. Hand-written prose lives in
`toolkit-docs-generator/curation/<toolkit>/` and is folded into the JSON on
every run.

`toolkit-docs-generator/CURATION.md` is the format reference. This is the
procedure.

## Step 1: confirm curation is the right home

Curation is for prose bound to one toolkit or one tool: auth setup, enum value
tables, parameter caveats, per-tool warnings. If the content is a standalone
guide or concept explanation — anything a reader would reach from the sidebar
on its own — it belongs in `app/en/` as a normal MDX page instead. Stop and
write that page.

## Step 2: read the neighbors

```bash
ls toolkit-docs-generator/curation/
cat toolkit-docs-generator/curation/googleflights/chunks/*.mdx
```

Directory names are lowercase and stripped of punctuation: `GoogleFlights` →
`googleflights`. Create one if the toolkit has none. Toolkits in the same family
usually share a pattern, and most existing auth prose is close to what you need.

## Step 3: pick the file kind

Use `chunks/*.mdx` — a block injected into the toolkit page or one tool's
section. That's the right answer in almost every case. The other two kinds,
`imports/*.mdx` and `pages/**/*.mdx`, are validated and carried into the JSON
but nothing in the app reads them, so don't reach for either expecting it to
render.

Name the file with a numeric prefix and a slug matching the neighbors, for
example `003-auth-after-markdown.mdx`. The number is for humans and does not
control display order.

## Step 4: choose `location` and `position`

Toolkit-level (no `tool:` key):

| You want it | Use |
| --- | --- |
| Right under the title, above the generated summary | `location: header`, `position: before` |
| Auth setup, after the summary | `location: auth`, `position: after` |
| A reference section between the summary and the tools table | `location: custom_section`, `position: after` |
| Just above the tools table | `location: before_available_tools`, `position: after` |
| Below the tools table, above the per-tool sections | `location: after_available_tools`, `position: after` |

`position` is a slot name, not a spatial relationship — `description` + `after`
still renders above the generated summary. Check the ordering table in
`CURATION.md` before assuming a combination does what its name suggests. Some
render nowhere at all, and the compiler accepts them silently.

Tool-level: add `tool: Toolkit.ToolName`, fully qualified, same toolkit as the
directory. Then `location` is one of `description`, `parameters`, `secrets`,
`auth`, or `output`, and `position: replace` suppresses that default block. One
pitfall: a tool-level `auth` chunk only renders for tools that have OAuth
scopes, and only after the reader expands the scope details. If the prose
matters to every reader, make it a toolkit-level `auth` chunk.

## Step 5: write the file

```mdx
---
type: markdown
location: custom_section
position: after
header: "## GoogleFlightsTravelClass"
---

## GoogleFlightsTravelClass

Cabin class for the search.

- **`ECONOMY`**: Economy cabin.
- **`BUSINESS`**: Business cabin.
```

Rules that bite:

- `type: markdown` renders flat. `callout`, `warning`, `info`, and `tip` wrap
  the body in a callout box, and so does `section` despite its name — use
  `markdown` for flat prose.
- `header` sets the anchor and section-nav entry but prints nothing. Repeat the
  heading in the body, as in the example.
- Order within a slot comes from `priority` (lower first, default `100`), not
  from filenames.
- `Callout`, `Steps`, `Tabs`, `TabbedCodeBlock`, `TableOfContents`,
  `ToolFooter`, `SignupLink`, and `DataTable` work without importing. Any other
  component fails to render.
- Unknown frontmatter keys fail the run. There is no `language`, `slug`, or
  `order` key.
- Follow `STYLEGUIDE.md`: sentence case headings, active voice, "Arcade
  Engine", "MCP server", "tool".

To delete prose, delete the file — the curation directory is authoritative, so
removing the last file for a toolkit clears its prose on the next run.

## Step 6: verify before committing

Always run this. No credentials needed:

```bash
cd toolkit-docs-generator
../node_modules/.bin/tsx src/cli/index.ts validate-curation --toolkit <ToolkitId>
```

Errors name the exact file and reason. Then `pnpm vale:check` from the repo
root.

If you used `tool:`, confirm the value against the generated JSON, where
`qualifiedName` is exactly the format the frontmatter wants. A wrong value
fails the generation workflow, not your local check.

```bash
grep -o '"qualifiedName": "[^"]*"' toolkit-docs-generator/data/toolkits/googleflights.json
```

## Step 7: set expectations in the PR

The rendered page will not change in the PR's preview deploy — curation only
reaches the site when the generation workflow next runs and opens its automated
docs PR. Say so in the description so a reviewer doesn't hunt for a visual
diff. A local preview needs generated JSON, which needs Engine credentials —
see the last section of `CURATION.md`.
