# Sync Toolkit Sidebar Script

This script synchronizes the sidebar navigation with available toolkit JSON data files.

## Usage

```bash
# Run the sync (updates sidebar navigation)
npx tsx scripts/sync-toolkit-sidebar.ts

# Dry run (shows what would change without making changes)
npx tsx scripts/sync-toolkit-sidebar.ts --dry-run

# Verbose output
npx tsx scripts/sync-toolkit-sidebar.ts --verbose

# Both flags
npx tsx scripts/sync-toolkit-sidebar.ts --dry-run --verbose
```

## What it does

1. **Reads toolkit JSON files** from `data/toolkits/`
2. **Maps toolkits to categories** using the design system's `TOOLKITS` data
3. **Creates/updates `_meta.tsx` files** for each category folder
4. **Handles the "Others" category** for toolkits not in the design system
5. **Removes empty category folders** when all their toolkits are removed
6. **Updates the main `_meta.tsx`** in the integrations directory

## When to run

Run this script when:

- Adding a new toolkit JSON file to `data/toolkits/`
- Removing a toolkit JSON file
- The design system's toolkit categories change
- After regenerating toolkit documentation

## Category mapping

Toolkits are mapped to categories based on the `@arcadeai/design-system` package:

| Category | Display Name |
|----------|--------------|
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
npx vitest run scripts/sync-toolkit-sidebar.test.ts

# Watch mode
npx vitest watch scripts/sync-toolkit-sidebar.test.ts
```

## Output

The script outputs a summary of changes:

```
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

## Integration with CI/CD

You can add this script to your CI/CD pipeline to ensure the sidebar stays in sync:

```yaml
# Example GitHub Actions step
- name: Sync toolkit sidebar
  run: npx tsx scripts/sync-toolkit-sidebar.ts
  
- name: Check for changes
  run: |
    if [[ -n $(git status --porcelain) ]]; then
      echo "Sidebar not in sync! Run: npx tsx scripts/sync-toolkit-sidebar.ts"
      exit 1
    fi
```
