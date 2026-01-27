# Merge Custom Sections Script

This script merges custom documentation sections extracted from MDX files into the generated toolkit JSON files.

## Overview

The script:
1. Creates a backup of `data/toolkits/` to `data/toolkits.backup/`
2. Reads custom sections from `extract-custom-sections/custom_sections.json`
3. Merges the following fields into each toolkit JSON:
   - `documentationChunks` - Custom markdown/callout sections
   - `customImports` - Custom React component imports
   - `subPages` - Additional pages (like install guides)
4. Writes updated JSON files back to `data/toolkits/`

## Usage

### Preview changes (dry run)

See what would be merged without modifying any files:

```bash
npm run merge-custom-sections -- --dry-run
```

### Apply changes

Merge custom sections into toolkit JSON files:

```bash
npm run merge-custom-sections
```

### Restore from backup

If something goes wrong, restore the original files:

```bash
npm run merge-custom-sections -- --restore
```

## How It Works

### Toolkit Matching

The script matches custom sections to toolkit JSON files using:
1. Exact match with `toolkitId` field
2. Normalized label match (lowercase, no spaces, no special chars)
3. Reading each JSON file and checking `id` or `label` fields

For example:
- Custom section for "X (formerly Twitter)" matches `x.json`
- Custom section for "Slack" matches `slack.json`
- Custom section for "GitHub" matches `github.json`

### Merging Logic

The script **appends** custom sections to existing fields:
- Existing `documentationChunks` are preserved
- New chunks from custom sections are added to the end
- Same for `customImports` and `subPages`

### Backup

Before making any changes, the script:
- Copies `data/toolkits/` to `data/toolkits.backup/`
- If a backup already exists, it's removed and recreated
- The backup remains available for restore operations

## Input File Structure

`extract-custom-sections/custom_sections.json`:

```json
{
  "toolkits": {
    "Zoom": {
      "toolkitId": "Zoom",
      "category": "social-communication",
      "customImports": [],
      "documentationChunks": [
        {
          "type": "markdown",
          "location": "auth",
          "position": "after",
          "content": "Custom content here...",
          "header": "## Auth"
        }
      ],
      "subPages": [
        {
          "type": "install",
          "content": "# Install Guide...",
          "relativePath": "install/page.mdx"
        }
      ]
    }
  }
}
```

## Output

The script updates each matching JSON file in `data/toolkits/`:

```json
{
  "id": "Zoom",
  "label": "Zoom",
  "version": "1.0.0",
  "tools": [...],
  "documentationChunks": [
    // ... existing chunks
    // ... newly merged chunks from custom_sections.json
  ],
  "customImports": [
    // ... newly merged imports
  ],
  "subPages": [
    // ... newly merged sub-pages
  ]
}
```

## Error Handling

The script will:
- ✅ Continue processing if a toolkit can't be matched
- ✅ Skip toolkits with no custom sections to merge
- ❌ Exit with error if required directories/files are missing
- 📊 Show a summary at the end with counts of processed/skipped/failed toolkits

## Examples

### Dry run output:

```
🔧 Merge Custom Sections Script

📦 Creating backup: /path/to/data/toolkits.backup
[DRY RUN] Would create backup

📖 Reading custom sections...
   Found 42 toolkits with custom sections

📝 Processing: Zoom (ID: Zoom)
   Found file: zoom.json
   Merging:
      - 1 documentation chunks
      - 1 sub-pages
   [DRY RUN] Would write merged JSON

...

📊 Summary
✅ Successfully processed: 38
⚠️  Skipped (no match or no content): 4
❌ Errors: 0

⚠️  DRY RUN MODE - No files were modified
   Run without --dry-run to apply changes
```

### Actual merge output:

```
🔧 Merge Custom Sections Script

📦 Creating backup: /path/to/data/toolkits.backup
✅ Backup created successfully

📖 Reading custom sections...
   Found 42 toolkits with custom sections

📝 Processing: Zoom (ID: Zoom)
   Found file: zoom.json
   Merging:
      - 1 documentation chunks
      - 1 sub-pages
   ✅ Merged successfully

...

📊 Summary
✅ Successfully processed: 38
⚠️  Skipped (no match or no content): 4
❌ Errors: 0

✅ Custom sections merged successfully!
   Backup available at: /path/to/data/toolkits.backup
   To restore backup: npm run merge-custom-sections -- --restore
```

## Troubleshooting

### "No matching JSON file found"

The toolkit name in `custom_sections.json` doesn't match any file in `data/toolkits/`. Check:
- Is the toolkit JSON file present?
- Does the filename match the toolkit ID/label?
- Try normalizing both names (lowercase, no spaces) to debug

### "Backup already exists"

The script removes and recreates the backup each time. This is normal behavior.

### Restore doesn't work

Ensure `data/toolkits.backup/` exists. If you deleted it, you'll need to:
1. Regenerate toolkit JSON files from scratch
2. Run the merge script again

## Related Files

- `extract-custom-sections/custom_sections.json` - Input file with custom sections
- `data/toolkits/*.json` - Toolkit JSON files (output)
- `data/toolkits.backup/*.json` - Backup of original files
- `scripts/merge-custom-sections.ts` - This script
