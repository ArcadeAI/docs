#!/bin/bash
#
# Check that deleted markdown files have corresponding redirects in next.config.ts
# Usage: ./scripts/check-redirects.sh [base_branch]
#
# This script compares the current branch to main (or specified base branch)
# and ensures any deleted .md/.mdx files have redirect entries.
#

set -e

BASE_BRANCH="${1:-main}"
CONFIG_FILE="next.config.ts"
EXIT_CODE=0

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "Checking for deleted markdown files without redirects..."
echo "Comparing current branch to: $BASE_BRANCH"
echo ""

# Ensure we have the base branch available for comparison
if ! git rev-parse --verify "$BASE_BRANCH" >/dev/null 2>&1; then
    echo "Fetching $BASE_BRANCH branch..."
    git fetch origin "$BASE_BRANCH:$BASE_BRANCH" 2>/dev/null || true
fi

# Get list of deleted markdown files (comparing to base branch)
DELETED_FILES=$(git diff --name-status "$BASE_BRANCH"...HEAD 2>/dev/null | grep "^D" | grep -E '\.(md|mdx)$' | awk '{print $2}' || true)

if [ -z "$DELETED_FILES" ]; then
    echo -e "${GREEN}✓ No deleted markdown files found.${NC}"
    exit 0
fi

echo "Found deleted markdown files:"
echo "$DELETED_FILES"
echo ""

# Check if next.config.ts was modified
CONFIG_MODIFIED=$(git diff --name-only "$BASE_BRANCH"...HEAD 2>/dev/null | grep -c "$CONFIG_FILE" || echo "0")

# Function to convert file path to URL path
# e.g., app/en/guides/foo/page.mdx -> /:locale/guides/foo
file_to_url() {
    local file_path="$1"
    # Remove app/en/ prefix and /page.mdx or /page.md suffix
    # Using separate sed commands for portability (BSD vs GNU sed)
    local url_path=$(echo "$file_path" | sed -E 's|^app/[a-z]{2}/||' | sed -E 's|/page\.mdx$||' | sed -E 's|/page\.md$||')
    # Return with :locale prefix
    echo "/:locale/$url_path"
}

# Read the config file content
CONFIG_CONTENT=$(cat "$CONFIG_FILE" 2>/dev/null || echo "")

# Arrays to track missing redirects
declare -a MISSING_REDIRECTS=()
declare -a SUGGESTED_ENTRIES=()

# Check each deleted file
while IFS= read -r deleted_file; do
    [ -z "$deleted_file" ] && continue

    # Only check files in the app directory (actual page files)
    if [[ ! "$deleted_file" =~ ^app/ ]]; then
        continue
    fi

    # Convert to URL path
    url_path=$(file_to_url "$deleted_file")

    # Create a search pattern for the source in redirects
    # We need to escape special regex characters and check for the path
    search_pattern=$(echo "$url_path" | sed 's/[[\.*^$()+?{|]/\\&/g')

    # Check if this path exists as a redirect source in the config
    if echo "$CONFIG_CONTENT" | grep -q "source:.*\"$search_pattern\""; then
        echo -e "${GREEN}✓ Redirect exists for: $url_path${NC}"
    else
        echo -e "${RED}✗ Missing redirect for: $url_path${NC}"
        MISSING_REDIRECTS+=("$url_path")

        # Generate suggested redirect entry
        SUGGESTED_ENTRIES+=("{
          source: \"$url_path\",
          destination: \"/:locale/REPLACE_WITH_NEW_PATH\",
          permanent: true,
        },")

        EXIT_CODE=1
    fi
done <<< "$DELETED_FILES"

echo ""

# Report results
if [ ${#MISSING_REDIRECTS[@]} -gt 0 ]; then
    echo -e "${RED}══════════════════════════════════════════════════════════════${NC}"
    echo -e "${RED}ERROR: Found ${#MISSING_REDIRECTS[@]} deleted file(s) without redirects!${NC}"
    echo -e "${RED}══════════════════════════════════════════════════════════════${NC}"
    echo ""
    echo "When you delete a markdown file, you must add a redirect in next.config.ts"
    echo "to prevent broken links for users who have bookmarked the old URL."
    echo ""
    echo -e "${YELLOW}Missing redirects for:${NC}"
    for path in "${MISSING_REDIRECTS[@]}"; do
        echo "  - $path"
    done
    echo ""
    echo -e "${YELLOW}Add the following to the redirects array in next.config.ts:${NC}"
    echo ""
    for entry in "${SUGGESTED_ENTRIES[@]}"; do
        echo "$entry"
    done
    echo ""
    echo "Replace 'REPLACE_WITH_NEW_PATH' with the actual destination path."
    echo "If the content was removed entirely, redirect to a relevant parent page."
    echo ""

    if [ "$CONFIG_MODIFIED" -eq "0" ]; then
        echo -e "${YELLOW}Note: next.config.ts was not modified in this branch.${NC}"
    fi
else
    echo -e "${GREEN}══════════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}SUCCESS: All deleted markdown files have corresponding redirects!${NC}"
    echo -e "${GREEN}══════════════════════════════════════════════════════════════${NC}"
fi

exit $EXIT_CODE
