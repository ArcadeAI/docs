# Sync toolkit sidebar script

This script synchronizes the sidebar navigation with available toolkit JSON data files.

## Usage

```bash
# Run the sync (updates sidebar navigation)
npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts

# Dry run (shows what would change without making changes)
npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --dry-run

# Verbose output
npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --verbose

# Both flags
npx tsx toolkit-docs-generator/scripts/sync-toolkit-sidebar.ts --dry-run --verbose
```

## What it does

1. Reads toolkit JSON files from `toolkit-docs-generator/data/toolkits/`.
2. Maps toolkits to categories using the design system catalog.
3. Adds the partner integrations from `app/_data/partner-toolkits.ts`.
4. Creates or updates `_meta.tsx` files for each category folder.
5. Skips toolkits without a recognized integration category.
6. Updates the main integrations `_meta.tsx`.

## When to run

Run this script when:

- Adding a new toolkit JSON file to `toolkit-docs-generator/data/toolkits/`
- Removing a toolkit JSON file
- Updating toolkit categories in the design system
- Adding or removing a partner in `app/_data/partner-toolkits.ts`
- Regenerating toolkit documentation

## Partner integrations

Partner integrations (remote MCP Servers offered by Arcade partners) have
hand-authored pages and no toolkit JSON file. This script reads them from
`app/_data/partner-toolkits.ts`, the same list the integrations catalog renders
its cards from. Each one lands in a `Partners` section at the end of its
category sidebar, keyed by the last segment of its `relativeDocsLink`.

This script rewrites every category `_meta.tsx` from scratch, so the next run
drops a partner entry that someone typed into one of those files by hand. Add
the partner to `app/_data/partner-toolkits.ts` and re-run the script instead.
`tests/partner-integration-nav.test.ts` fails when a partner has no page or no
sidebar entry.

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

## Testing

```bash
# Run tests
pnpm vitest run toolkit-docs-generator/tests/scripts/sync-toolkit-sidebar.test.ts

# Watch mode
pnpm vitest watch toolkit-docs-generator/tests/scripts/sync-toolkit-sidebar.test.ts
```

## Output

The script prints a summary of changes:

```text
=== Toolkit Sidebar Sync Results ===

Total toolkits: 96

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
