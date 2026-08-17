# Toolkit curation format

Everything under `toolkit-docs-generator/curation/` is hand-authored prose the
generator folds into toolkit JSON. This is the format reference: file kinds,
frontmatter keys, where each one puts content on the page, and how the pipeline
fails. For a walkthrough of adding curation, see the `curate-toolkit-docs`
skill in `.claude/skills/`.

Behavior below comes from `src/sources/markdown-curation.ts` (compiles the
directory), `src/shared/toolkit-schemas.ts` (schemas),
`src/merger/data-merger.ts` (attaches curation to toolkits and tools), and, in
the app, `toolkit-page.tsx`, `tool-section.tsx`, and
`documentation-chunk-renderer.tsx` under `app/_components/toolkit-docs/`.

## Directory layout

One directory per toolkit, named for the toolkit ID, matched case- and
punctuation-insensitively: `curation/googleflights/` serves `GoogleFlights`.

```text
curation/
  <toolkit>/
    chunks/*.mdx     injectable blocks on the toolkit or a tool page
    imports/*.mdx    one ESM import declaration each
    pages/**/*.mdx   standalone subpages
```

Only `.md` and `.mdx` files in those three directories are read. Other files
are ignored. A `.json` file anywhere under `curation/` fails the run.

## File kinds

Every file needs YAML frontmatter and a non-empty body. Bodies compile through
`@mdx-js/mdx` at generation time, so a syntax error fails the run instead of
reaching the site.

| Kind | Frontmatter | Body | Lands in |
| --- | --- | --- | --- |
| `chunks/*.mdx` | `type`, `location`, `position` required; `tool`, `title`, `variant`, `header`, `priority` optional | Markdown or MDX | `documentationChunks` on the toolkit, or on one tool when `tool:` is set |
| `imports/*.mdx` | `type: import` only | Exactly one ESM `import` declaration, and the body must start with `import` | `customImports` on the toolkit |
| `pages/**/*.mdx` | `type` only, any non-empty string | Markdown or MDX | `subPages`, with the path below `pages/` as `relativePath` |

Chunks are the common case — a block of prose slotted into a named place:

```mdx
---
type: markdown
location: auth
position: after
header: "## Auth setup"
---

## Auth setup

Connect your Google account before calling these tools.
```

**Imports and pages reach the JSON but nothing in the app reads them.** They
are validated and carried through, and then: the chunk renderer strips
`import` and `export` lines from chunk bodies and supplies a fixed component
set instead (see [Components](#components)), and a subpage produces no route.
Don't add either expecting it to render.

For pages, `type` is a free-form label (existing examples use `install` and
`environment-variables`) and the path below `pages/` becomes `relativePath` —
`curation/jira/pages/environment-variables/page.mdx` yields
`"environment-variables/page.mdx"`. Path segments cannot be empty, `.`, or
`..`, and two pages cannot normalize to the same lowercase path.

## Frontmatter reference

Unknown keys are rejected, so a typo like `postion:` fails the run instead of
being silently dropped. No `language`, `slug`, or `order` key exists.

| Key | Required | Allowed values | Effect |
| --- | --- | --- | --- |
| `type` | yes | `callout`, `markdown`, `code`, `warning`, `info`, `tip`, `section` | Picks the render path. See [Types](#types). |
| `location` | yes | `header`, `description`, `parameters`, `auth`, `secrets`, `output`, `footer`, `before_available_tools`, `after_available_tools`, `custom_section` | Names the slot. See [Locations](#locations). |
| `position` | yes | `before`, `after`, `replace` | Sub-slot within the location. `replace` also suppresses the default content, but only in some slots. |
| `tool` | no | `Toolkit.ToolName` | Promotes the chunk to one tool. Must be fully qualified and name the same toolkit as the directory. |
| `title` | no | any string | Callout heading. Only appears on the callout render path. |
| `variant` | no | `default`, `destructive`, `warning`, `info`, `success` | Overrides the callout color chosen from `type`. `destructive` renders as error, `success` as info. |
| `header` | no | any string, conventionally `"## Heading"` | Sets the block's anchor ID and adds a section-nav entry. Prints nothing — repeat the heading in the body if you want one visible. |
| `priority` | no | number, default `100` | Orders chunks within one location and position. Lower renders first. |

### Types

`type` picks the render path, and two of the three paths ignore it:

| Chunk | Rendered as |
| --- | --- |
| `type: code` | Raw `<pre><code>`, not MDX-compiled, no syntax highlighting, and no language field exists. Prefer a fenced code block in a `markdown` chunk. |
| `type: markdown` | An MDX section with GitHub-flavored Markdown, so tables work. |
| Any other type whose body contains a JSX tag, `<details>`, or `<summary>` | Also an MDX section, with the callout wrapper skipped. |
| Any other type with plain prose | Wrapped in a Nextra callout, body still MDX-compiled. Color comes from `variant` if set, else from `type`: `warning` warns, `info` and `tip` inform, `callout` is default gray. |

`section` has no case of its own, so a plain-prose `section` chunk renders as a
**default callout** — rarely what an author wants for a heading-and-bullets
block, and what every existing plain-Markdown `section` chunk currently does.
Use `type: markdown` for prose that should sit flat on the page.

### Locations

A location names a slot, not an insertion point relative to a particular piece
of text, and the usable set differs between toolkit and tool level. A chunk in
a slot nothing renders is compiled, validated, written to the JSON, and never
displayed.

#### Toolkit level (no `tool:` key)

These render top to bottom in exactly this order:

| # | `location` | `position` | Notes |
| --- | --- | --- | --- |
| 1 | `header` | `before` | First thing after the title, icon, and stats. |
| 2 | `description` | `before` | |
| 3 | `description` | `after` | |
| 4 | `header` | `replace` | Renders in place, suppressing nothing. |
| 5 | `header` | `after` | |
| — | | | *The generated toolkit summary.* |
| 6–7 | `auth` | `before`, `after` | |
| 8–9 | `before_available_tools` | `before`, `after` | |
| 10–11 | `custom_section` | `before`, `after` | |
| — | | | *The "Available tools" heading and table.* |
| 12–13 | `after_available_tools` | `before`, `after` | |
| — | | | *Every tool's expanded section.* |
| 14 | `footer` | `before` | |
| — | | | *The "Get Building" footer, unless a `footer` + `replace` chunk exists.* |
| 15 | `footer` | `replace` | The only toolkit-level `replace` that suppresses anything. |
| 16 | `footer` | `after` | |

All four `header` and `description` slots therefore land above the generated
summary in the fixed order shown. `description` + `after` does not follow the
description text, it precedes the summary.

Two groups render nowhere at toolkit level. First, `replace` on `description`,
`auth`, `before_available_tools`, `after_available_tools`, or `custom_section`.
Second, `parameters`, `secrets`, and `output` in any position, which are
tool-level only.

#### Tool level (`tool: Toolkit.ToolName`)

All three positions work in every slot, and `replace` suppresses the default
block:

| `location` | Renders around, and `replace` suppresses |
| --- | --- |
| `description` | The tool's description text |
| `parameters` | The parameters table |
| `secrets` | The secrets list |
| `auth` | The OAuth scopes list |
| `output` | The output type block |

Tool chunks are subject to the page's progressive disclosure: nothing renders
until the reader expands the tool, and `parameters`, `secrets`, `auth`, and
`output` additionally wait on the lazily fetched tool detail. **An `auth` chunk
only renders when the tool has OAuth scopes and the reader has clicked through
to the scope details**, so it never appears on a tool with no scopes — put auth
prose everyone should see in a toolkit-level `auth` chunk. `header`, `footer`,
`before_available_tools`, `after_available_tools`, and `custom_section` render
nowhere at tool level.

### Ordering

Filenames do not control display order, which surprises people, because every
existing file is numbered. The compiler sorts chunks by source path, so `001-`,
`002-` prefixes set the JSON array order — then the renderer ignores that and
sorts each location-and-position slot independently by `priority` ascending
(default `100`), then `header` alphabetically with headerless chunks last, then
body text as a tiebreak. Use `priority` to order within a slot. Keep the
numeric prefixes for readability, but don't rely on them.

The section nav is built from every toolkit-level chunk with a `header`, sorted
by that same priority-then-header rule across all locations at once, so a
low-`priority` chunk in a late slot can appear early in the nav while rendering
late on the page.

### Components

Chunk bodies may use `Callout`, `Steps`, `Tabs`, `TabbedCodeBlock`,
`TableOfContents`, `ToolFooter`, `SignupLink`, and `DataTable` without
importing them. The renderer strips `import` and `export` lines and injects
that fixed set, so anything else — a component from an `imports/*.mdx` file, or
one imported inline — is undefined at render time and the block fails with
"Failed to render section" on the page. To add a component, extend
`MDX_COMPONENTS` in `documentation-chunk-renderer.tsx`.

## Authoritative directory

When `--custom-sections` points at a curation directory, that directory is the
only source of authored prose for **every** toolkit:

- A toolkit with no directory has no authored prose. Its previously generated
  JSON is not consulted for one.
- Deleting the last curation file for a toolkit clears that toolkit's prose on
  the next run. There is no separate "remove this" step.
- Renaming a chunk file changes nothing but array order, since rendering is
  keyed on frontmatter.

Curation edits also count for `--skip-unchanged`: the generator fingerprints
the compiled curation, so editing a chunk regenerates that toolkit even when
its tools didn't change.

## Failure modes

The compiler fails the whole run rather than skipping a bad file or falling
back to stale content, and every message names the offending path.

| What went wrong | Message |
| --- | --- |
| No YAML frontmatter | `Curation document must start with YAML frontmatter (<path>)` |
| Frontmatter is not valid YAML | `Curation frontmatter is invalid (<path>): <detail>` |
| Missing, unknown, or wrongly typed key | `Curation chunk frontmatter has invalid schema (<path>): <detail>` |
| Same, but in a page or an import | `Curation page frontmatter has invalid schema (<path>)`, `Curation import frontmatter has invalid schema (<path>)` |
| Body is empty or whitespace | `Curation document body is empty (<path>)` |
| Body does not compile as MDX | `Curation document has invalid MDX (<path>): <detail>` |
| An import body is not an `import` declaration | `Curation import must be an ESM import (<path>)` |
| `tool:` is unqualified or names another toolkit | `Curation tool target must be fully qualified and match toolkit <id> (<path>)` |
| `tool:` names a tool the toolkit lacks | `Curation for <id> targets unknown tool(s): <names>` |
| A page path has an empty, `.`, or `..` segment | `Curation page path is unsafe (<path>)` |
| Two pages differ only by case | `Curation contains duplicate page paths (<path>)` |
| A symlink anywhere under the root | `Curation directory may not contain symlinks (<path>)` |
| Two toolkit directories normalize to one ID | `Curation toolkit directories normalize to the same ID: <a>, <b>` |
| A leftover `.json` curation file | `JSON curation is no longer supported; convert this file to Markdown (<path>)` |
| `--custom-sections` path is missing | `Configured curation directory does not exist: <path>` |
| `--custom-sections` points at a file | `Configured curation path is not a directory: <path>` |

Only the unknown-`tool:` error needs the live tool list. Everything else is
detectable offline.

## Checking your work

```bash
cd toolkit-docs-generator
../node_modules/.bin/tsx src/cli/index.ts validate-curation
../node_modules/.bin/tsx src/cli/index.ts validate-curation --toolkit GoogleFlights
```

This needs no credentials. It reports per-toolkit counts, prints each failing
toolkit with its message, and exits non-zero on failure. It runs the same
compiler generation uses, so a pass means kinds, frontmatter, and MDX are all
valid. It cannot check `tool:` targets.

Invoke `tsx` by path, not through `pnpm exec`, which resets the working
directory to the repo root and breaks the relative path. `pnpm dlx tsx` also
works.

Seeing a chunk on a page needs generated JSON. Either wait for the automated
generation PR, or generate that one toolkit with Engine credentials and run
`pnpm dev` from the repo root:

```bash
../node_modules/.bin/tsx src/cli/index.ts generate \
  --providers "GoogleFlights" \
  --tool-metadata-url "$ENGINE_API_URL" \
  --tool-metadata-key "$ENGINE_API_KEY" \
  --custom-sections ./curation \
  --skip-examples --skip-summary --skip-secret-coherence \
  --output data/toolkits
```
