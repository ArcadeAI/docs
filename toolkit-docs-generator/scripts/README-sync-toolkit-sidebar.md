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
3. Creates or updates `_meta.tsx` files for each category folder.
4. Skips toolkits without a recognized integration category.
5. Updates the main integrations `_meta.tsx`.

## When to run

Run this script when:

- Adding a new toolkit JSON file to `toolkit-docs-generator/data/toolkits/`
- Removing a toolkit JSON file
- Updating toolkit categories in the design system
- Regenerating toolkit documentation

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
