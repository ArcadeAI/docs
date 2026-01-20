#!/bin/bash
#
# Update internal links to use redirect destinations instead of old paths
# Usage: ./scripts/update-internal-links.sh [--dry-run]
#
# This script reads redirects from next.config.ts and updates any internal links
# in MDX/TSX files that point to redirected paths.
#
# Options:
#   --dry-run    Show what would be changed without making changes
#

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

DRY_RUN=false
if [[ "$1" == "--dry-run" ]]; then
    DRY_RUN=true
    echo -e "${BLUE}Running in dry-run mode - no files will be modified${NC}"
    echo ""
fi

CONFIG_FILE="next.config.ts"
UPDATED_COUNT=0

# Temporary file for storing redirects
REDIRECTS_FILE=$(mktemp)
trap "rm -f $REDIRECTS_FILE" EXIT

echo -e "${BLUE}Parsing redirects from $CONFIG_FILE...${NC}"

# Extract redirect pairs from next.config.ts
# Format: source|destination (one per line)
cat "$CONFIG_FILE" | tr '\n' ' ' | grep -oE '\{[^}]*source:[^}]*destination:[^}]*\}' | while read -r redirect_block; do
    source_path=$(echo "$redirect_block" | sed -n 's/.*source:[[:space:]]*"\([^"]*\)".*/\1/p')
    dest_path=$(echo "$redirect_block" | sed -n 's/.*destination:[[:space:]]*"\([^"]*\)".*/\1/p')

    # Skip if either is empty
    [ -z "$source_path" ] && continue
    [ -z "$dest_path" ] && continue

    # Skip wildcard redirects (can't auto-update these)
    [[ "$source_path" == *":path*"* ]] && continue
    [[ "$dest_path" == *":path*"* ]] && continue

    # Skip redirects with other dynamic segments (except :locale)
    source_without_locale=$(echo "$source_path" | sed 's|^/:locale||')
    dest_without_locale=$(echo "$dest_path" | sed 's|^/:locale||')
    [[ "$source_without_locale" == *":"* ]] && continue
    [[ "$dest_without_locale" == *":"* ]] && continue

    # Skip placeholder destinations
    [[ "$dest_path" == *"REPLACE_WITH"* ]] && continue
    [[ "$dest_path" == *"TODO"* ]] && continue

    # Store the redirect (without :locale prefix for matching)
    echo "${source_without_locale}|${dest_without_locale}" >> "$REDIRECTS_FILE"
done

REDIRECT_COUNT=$(wc -l < "$REDIRECTS_FILE" | tr -d ' ')
echo -e "Found ${GREEN}$REDIRECT_COUNT${NC} non-wildcard redirects to check"
echo ""

if [ "$REDIRECT_COUNT" -eq 0 ]; then
    echo -e "${GREEN}No redirects to process.${NC}"
    exit 0
fi

echo -e "${BLUE}Scanning files for internal links to update...${NC}"
echo ""

# Find all MDX and TSX files in app directory
FILES=$(find app -type f \( -name "*.mdx" -o -name "*.tsx" -o -name "*.md" \) 2>/dev/null)

for file in $FILES; do
    file_modified=false

    # Use a temp file for modifications
    temp_file=$(mktemp)
    cp "$file" "$temp_file"

    while IFS='|' read -r source dest; do
        [ -z "$source" ] && continue

        # Simple check: does this file contain the source path?
        if grep -q "$source" "$temp_file"; then
            # Use perl for more reliable cross-platform replacement
            # Replace in these contexts:
            #   ](/source)  ->  ](/dest)
            #   ](/source#  ->  ](/dest#
            #   ](/source"  ->  ](/dest"
            #   ](/source   ->  ](/dest   (space for titles)
            #   href="/source"  ->  href="/dest"
            #   href='/source'  ->  href='/dest'
            #   href="/source#  ->  href="/dest#

            # Escape special regex chars in source for perl
            source_perl=$(printf '%s' "$source" | sed 's/[[\.*^$()+?{|\\]/\\&/g')
            dest_perl=$(printf '%s' "$dest" | sed 's/[&\\]/\\&/g')

            # Perform replacement with perl (handles all link patterns)
            perl -i -pe "s|\Q${source}\E(?=[\"')\s#?])|${dest}|g" "$temp_file" 2>/dev/null || {
                # Fallback to sed if perl fails
                # Markdown links: ](source) -> ](dest)
                sed -i.bak "s|](${source})|](${dest})|g" "$temp_file" 2>/dev/null || true
                sed -i.bak "s|](${source}#|](${dest}#|g" "$temp_file" 2>/dev/null || true
                sed -i.bak "s|](${source}\")|](${dest}\")|g" "$temp_file" 2>/dev/null || true

                # JSX href
                sed -i.bak "s|href=\"${source}\"|href=\"${dest}\"|g" "$temp_file" 2>/dev/null || true
                sed -i.bak "s|href='${source}'|href='${dest}'|g" "$temp_file" 2>/dev/null || true
                sed -i.bak "s|href=\"${source}#|href=\"${dest}#|g" "$temp_file" 2>/dev/null || true

                rm -f "$temp_file.bak" 2>/dev/null || true
            }

            file_modified=true
        fi
    done < "$REDIRECTS_FILE"

    # Check if file was actually modified
    if [ "$file_modified" = true ] && ! diff -q "$file" "$temp_file" > /dev/null 2>&1; then
        if [ "$DRY_RUN" = true ]; then
            echo -e "${YELLOW}Would update:${NC} $file"
            diff "$file" "$temp_file" | head -30 || true
            echo ""
        else
            cp "$temp_file" "$file"
            echo -e "${GREEN}Updated:${NC} $file"
        fi
        ((UPDATED_COUNT++)) || true
    fi

    # Cleanup
    rm -f "$temp_file" "$temp_file.bak" 2>/dev/null || true
done

echo ""
echo -e "${BLUE}========================================================${NC}"
if [ "$DRY_RUN" = true ]; then
    echo -e "${YELLOW}Dry run complete: $UPDATED_COUNT file(s) would be updated${NC}"
    echo -e "Run without --dry-run to apply changes."
else
    if [ "$UPDATED_COUNT" -gt 0 ]; then
        echo -e "${GREEN}Updated $UPDATED_COUNT file(s) with new link paths${NC}"
    else
        echo -e "${GREEN}All internal links are up to date!${NC}"
    fi
fi
echo -e "${BLUE}========================================================${NC}"
