# Sync toolkit sidebar script

This script synchronizes the sidebar navigation with available toolkit JSON data files.

## Usage

```bash
# Run the sync (updates sidebar navigation)
npx tsx .github/scripts/sync-toolkit-sidebar.ts

# Dry run (shows what would change without making changes)
npx tsx .github/scripts/sync-toolkit-sidebar.ts --dry-run

# Verbose output
npx tsx .github/scripts/sync-toolkit-sidebar.ts --verbose

# Both flags
npx tsx .github/scripts/sync-toolkit-sidebar.ts --dry-run --verbose
```

## What it does

1. Reads toolkit JSON files from `toolkit-docs-generator/data/toolkits/`.
2. Maps toolkits to categories using the design system catalog.
3. Creates or updates `_meta.tsx` files for each category folder.
4. Handles the "Others" category for toolkits not in the design system.
5. Updates the main integrations `_meta.tsx`.

## When to run

Run this script when:

- Adding a new toolkit JSON file to `toolkit-docs-generator/data/toolkits/`
- Removing a toolkit JSON file
- Updating toolkit categories in the design system
- Regenerating toolkit documentation

## Category mapping

Toolkits are mapped to categories based on `@arcadeai/design-system`:

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
| others | Others |

Toolkits not found in the design system are placed in the "Others" category.

## Testing

```bash
# Run tests
npx vitest run .github/scripts/__tests__/sync-toolkit-sidebar.test.ts

# Watch mode
npx vitest watch .github/scripts/__tests__/sync-toolkit-sidebar.test.ts
```

## Output

The script prints a summary of changes:

```text
=== Toolkit Sidebar Sync Results ===

Total toolkits: 96

Categories created (1):
  + others

Categories updated (7):
  ~ productivity
  ~ development
  ~ customer-support
  ~ search
  ~ sales
  ~ social
  ~ payments

====================================
```
