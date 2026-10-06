# Sync toolkit sidebar script

This script synchronizes the sidebar navigation with available toolkit JSON data files.

## Usage

```bash
# Run the sync (updates sidebar navigation)
bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts

# Dry run (shows what would change without making changes)
bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --dry-run

# Verbose output
bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --verbose

# Both flags
bun toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --dry-run --verbose
```

## What it does

1. Reads toolkit JSON files from `toolkit-docs-generator/data/toolkits/`.
2. Maps toolkits to categories using the design system catalog.
3. Adds the partner integrations from `data/partner-toolkits.ts`.
4. Creates or updates the Fumadocs `meta.json` file in each category folder
   under `content/docs/resources/integrations/<category>/`.
5. Skips toolkits without a recognized integration category.
6. Checks that the main integrations `meta.json` lists every active category.
   That file is hand-authored (it also carries the overview page and the
   feedback section), so the script reports a missing category instead of
   rewriting the file.

## Output format

Each category `meta.json` is a Fumadocs folder meta file:

```json
{
  "title": "Search Tools",
  "pages": [
    "---Optimized---",
    "[Glean](/en/resources/integrations/search/glean)",
    "---Starter---",
    "[Exa API](/en/resources/integrations/search/exa-api)",
    "---Partners---",
    "nimble",
    "tavily"
  ]
}
```

- `---Title---` entries are section separators.
- `[Label](href)` entries are links. Generated toolkit pages are rendered from
  JSON by `lib/toolkit-route.tsx`, not from MDX files in the folder, so they
  have to be listed as links.
- Bare slugs (`nimble`, `tavily`) are authored MDX pages in the same folder.
  Fumadocs reads their title from the page frontmatter.

## When to run

Run this script when:

- Adding a new toolkit JSON file to `toolkit-docs-generator/data/toolkits/`
- Removing a toolkit JSON file
- Updating toolkit categories in the design system
- Adding or removing a partner in `data/partner-toolkits.ts`
- Regenerating toolkit documentation

## Partner integrations

Partner integrations (remote MCP Servers offered by Arcade partners) have
hand-authored pages and no toolkit JSON file. This script reads them from
`data/partner-toolkits.ts`, the same list the integrations catalog renders its
cards from. Each one lands in a `Partners` section at the end of its category
sidebar, listed by the last segment of its `relativeDocsLink`, which must match
the MDX file name in the category folder.

This script rewrites every category `meta.json` from scratch, so the next run
drops a partner entry that someone typed into one of those files by hand. Add
the partner to `data/partner-toolkits.ts` and re-run the script instead.
`tests/partner-integration-nav.test.ts` fails when a partner has no page or no
sidebar entry. The script also refuses to run when a partner and a toolkit
resolve to the same slug in the same category, since one URL cannot serve both
a generated page and an MDX page.

## Category mapping

Toolkits are mapped to categories based on `@arcadeai/design-system` and
`INTEGRATION_CATEGORIES` in `toolkit-docs-generator/src/shared/toolkit-primitives.ts`:

| Category | Display name |
| --- | --- |
| productivity | Productivity & Docs |
| development | Developer Tools |
| social | Social & Communication |
| databases | Databases |
| customer-support | Customer Support |
| search | Search Tools |
| sales | Sales |
| entertainment | Entertainment |
| payments | Payments & Finance |

Toolkits with an unrecognized category fail loudly instead of being routed to a
catch-all bucket.

## Removing empty categories

Pass `--remove-empty-sections` to delete a category folder that no longer has
any toolkits. Only a folder that holds nothing but the generated `meta.json` is
removed; a folder that still contains authored MDX files is reported and left
in place.

## Testing

```bash
# Run tests
bunx vitest run toolkit-docs-generator/tests/scripts/sync-toolkit-sidebar.test.ts

# Watch mode
bunx vitest watch toolkit-docs-generator/tests/scripts/sync-toolkit-sidebar.test.ts
```

## Output

The script prints a summary of changes:

```text
=== Toolkit Sidebar Sync Results ===

Total toolkits: 124
Partner integrations: 2

Categories created (1):
  + sales

Categories updated (7):
  ~ productivity
  ~ development
  ~ customer-support
  ~ search
  ~ social
  ~ payments
  ~ entertainment

====================================
```
