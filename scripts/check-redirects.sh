#!/bin/bash
#
# Check that deleted markdown files have corresponding redirects in next.config.ts
# Usage: ./scripts/check-redirects.sh [base_branch]
#
# This script compares the current branch to main (or specified base branch)
# and ensures any deleted .md/.mdx files have redirect entries.
#
# Features:
# - Detects deleted markdown files without redirects
# - Interactive mode: prompts for redirect destinations when run in a terminal
# - Validates existing redirects for circular references and invalid destinations
#

set -e

BASE_BRANCH="${1:-main}"
CONFIG_FILE="next.config.ts"
EXIT_CODE=0

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if running interactively
IS_INTERACTIVE=false
if [ -t 0 ] && [ -t 1 ]; then
    IS_INTERACTIVE=true
fi

echo "Checking for deleted markdown files without redirects..."
echo "Comparing current branch to: $BASE_BRANCH"
echo ""

# Ensure we have the base branch available for comparison
if ! git rev-parse --verify "$BASE_BRANCH" >/dev/null 2>&1; then
    echo "Fetching $BASE_BRANCH branch..."
    if ! git fetch origin "$BASE_BRANCH:$BASE_BRANCH" 2>/dev/null; then
        echo -e "${RED}ERROR: Could not fetch base branch '$BASE_BRANCH'${NC}"
        echo "Please ensure you have network access and the branch exists."
        exit 1
    fi
fi

# Verify base branch is now available
if ! git rev-parse --verify "$BASE_BRANCH" >/dev/null 2>&1; then
    echo -e "${RED}ERROR: Base branch '$BASE_BRANCH' is not available${NC}"
    echo "Cannot compare branches. Please check your git configuration."
    exit 1
fi

# Verify we can actually diff against the base branch
# This catches cases where rev-parse succeeds but diff fails (unrelated histories, corrupted refs, etc.)
if ! git diff --name-status "$BASE_BRANCH"...HEAD >/dev/null 2>&1; then
    echo -e "${RED}ERROR: Cannot compare current branch to '$BASE_BRANCH'${NC}"
    echo "The branches may have unrelated histories or the ref may be corrupted."
    echo "Try running: git fetch origin $BASE_BRANCH:$BASE_BRANCH"
    exit 1
fi

# Get list of deleted/renamed page files (comparing to base branch)
# Include both committed changes and uncommitted working tree changes
# D = deleted, R = renamed (old path needs redirect too)
# Only match page.md or page.mdx files (actual routable pages in Next.js App Router)
# For renames (R100<TAB>old-path<TAB>new-path), we need to check the OLD path (field 2),
# not the new path. Extract field 2 first, then filter for page files.
# Note: The diff command was already validated above, so failures here are from the grep/cut pipeline
# which legitimately returns empty when no files match (hence || true is safe here)
COMMITTED_DELETES=$(git diff --name-status "$BASE_BRANCH"...HEAD | grep -E "^D|^R" | cut -f2 | grep -E 'page\.(md|mdx)$' || true)
UNCOMMITTED_DELETES=$(git diff --name-status HEAD | grep -E "^D|^R" | cut -f2 | grep -E 'page\.(md|mdx)$' || true)

# Combine and deduplicate
DELETED_FILES=$(echo -e "${COMMITTED_DELETES}\n${UNCOMMITTED_DELETES}" | sort -u | grep -v '^$' || true)

# Function to convert file path to URL path
# e.g., app/en/guides/foo/page.mdx -> /:locale/guides/foo
# e.g., app/en/page.mdx -> /:locale (root page)
file_to_url() {
    local file_path="$1"
    # Remove app/en/ prefix and page.mdx or page.md suffix (with or without leading /)
    # Using separate sed commands for portability (BSD vs GNU sed)
    local url_path=$(echo "$file_path" | sed -E 's|^app/[a-z]{2}/||' | sed -E 's|/?page\.mdx$||' | sed -E 's|/?page\.md$||')
    # Handle root page case (empty url_path after stripping)
    if [ -z "$url_path" ]; then
        echo "/:locale"
    else
        echo "/:locale/$url_path"
    fi
}

# Function to convert URL path to file path for validation
# e.g., /:locale/guides/foo -> app/en/guides/foo/page.mdx
url_to_file() {
    local url_path="$1"
    # Remove /:locale/ prefix and add app/en/ prefix
    local file_path=$(echo "$url_path" | sed 's|^/:locale/||')
    echo "app/en/$file_path/page.mdx"
}

# Function to check if a page exists (considering both new and existing files)
page_exists() {
    local url_path="$1"
    local file_path=$(url_to_file "$url_path")

    # Check if file exists on disk
    if [ -f "$file_path" ]; then
        return 0
    fi

    # Also check for .md extension
    local md_path=$(echo "$file_path" | sed 's|\.mdx$|.md|')
    if [ -f "$md_path" ]; then
        return 0
    fi

    # Check if it's a wildcard destination (valid by definition)
    if [[ "$url_path" == *":path*"* ]]; then
        return 0
    fi

    return 1
}

# Read the config file content
CONFIG_CONTENT=$(cat "$CONFIG_FILE" 2>/dev/null || echo "")

# ============================================================
# PART 1: Validate existing redirects in the config
# ============================================================
echo -e "${BLUE}Validating existing redirects in $CONFIG_FILE...${NC}"
echo ""

declare -a INVALID_REDIRECTS=()

# Extract redirect pairs using a more robust method
# Join lines and extract source/destination pairs
REDIRECT_PAIRS=$(cat "$CONFIG_FILE" | tr '\n' ' ' | grep -oE '\{[^}]*source:[^}]*destination:[^}]*\}' || true)

while IFS= read -r redirect_block; do
    [ -z "$redirect_block" ] && continue

    # Extract source and destination from the block
    source_path=$(echo "$redirect_block" | sed -n 's/.*source:[[:space:]]*"\([^"]*\)".*/\1/p')
    dest_path=$(echo "$redirect_block" | sed -n 's/.*destination:[[:space:]]*"\([^"]*\)".*/\1/p')

    [ -z "$source_path" ] && continue
    [ -z "$dest_path" ] && continue

    # Check for placeholder text
    if [[ "$dest_path" == *"REPLACE_WITH"* ]] || [[ "$dest_path" == *"TODO"* ]] || [[ "$dest_path" == *"FIXME"* ]]; then
        echo -e "${RED}✗ Invalid redirect: $source_path${NC}"
        echo -e "  ${YELLOW}Destination contains placeholder text: $dest_path${NC}"
        INVALID_REDIRECTS+=("$source_path -> $dest_path (placeholder text)")
        EXIT_CODE=1
    # Check for circular redirect
    elif [ "$source_path" = "$dest_path" ]; then
        echo -e "${RED}✗ Circular redirect: $source_path${NC}"
        echo -e "  ${YELLOW}Source and destination are the same!${NC}"
        INVALID_REDIRECTS+=("$source_path -> $dest_path (circular)")
        EXIT_CODE=1
    # Check if destination exists (skip wildcards and other dynamic segments)
    # Skip paths with :path* or :path wildcards
    # Skip paths with dynamic segments OTHER than :locale (check after stripping /:locale/)
    elif [[ "$dest_path" != *":path*"* ]] && [[ "$dest_path" != *":path"* ]]; then
        # Strip the /:locale/ prefix and check for remaining dynamic segments
        dest_without_locale=$(echo "$dest_path" | sed 's|^/:locale/||')
        if [[ "$dest_without_locale" != *":"* ]]; then
            if ! page_exists "$dest_path"; then
                echo -e "${RED}✗ Invalid redirect: $source_path${NC}"
                echo -e "  ${YELLOW}Destination does not exist: $dest_path${NC}"
                INVALID_REDIRECTS+=("$source_path -> $dest_path (destination not found)")
                EXIT_CODE=1
            fi
        fi
    fi
done <<< "$REDIRECT_PAIRS"

if [ ${#INVALID_REDIRECTS[@]} -eq 0 ]; then
    echo -e "${GREEN}✓ All existing redirects are valid.${NC}"
fi
echo ""

# ============================================================
# PART 2: Check for deleted files without redirects
# ============================================================

if [ -z "$DELETED_FILES" ]; then
    echo -e "${GREEN}✓ No deleted markdown files found.${NC}"
    exit $EXIT_CODE
fi

echo "Found deleted markdown files:"
echo "$DELETED_FILES"
echo ""

# Check if next.config.ts was modified (committed or uncommitted)
CONFIG_MODIFIED_COMMITTED=$(git diff --name-only "$BASE_BRANCH"...HEAD 2>/dev/null | grep -c "$CONFIG_FILE" || true)
CONFIG_MODIFIED_UNCOMMITTED=$(git diff --name-only HEAD 2>/dev/null | grep -c "$CONFIG_FILE" || true)
CONFIG_MODIFIED=$((${CONFIG_MODIFIED_COMMITTED:-0} + ${CONFIG_MODIFIED_UNCOMMITTED:-0}))

# Arrays to track missing redirects
declare -a MISSING_REDIRECTS=()
declare -a SUGGESTED_ENTRIES=()

# Function to check if a wildcard redirect covers this path
check_wildcard_match() {
    local path="$1"
    # Extract path segments (remove /:locale/ prefix for matching)
    local path_without_locale=$(echo "$path" | sed 's|^/:locale/||')

    # Look for wildcard patterns that could match
    # Pattern: source: "/:locale/some/path/:path*"
    while IFS= read -r line; do
        # Extract the source pattern
        local source_pattern=$(echo "$line" | sed -n 's/.*source:.*"\(.*\)".*/\1/p')
        [ -z "$source_pattern" ] && continue

        # Check if it's a wildcard pattern
        if [[ "$source_pattern" == *":path*"* ]]; then
            # Convert wildcard to prefix (remove :path* and everything after)
            local prefix=$(echo "$source_pattern" | sed 's|/:path\*.*||' | sed 's|^/:locale/||')

            # Check if our path starts with this prefix
            if [[ "$path_without_locale" == "$prefix"/* ]] || [[ "$path_without_locale" == "$prefix" ]]; then
                return 0  # Match found
            fi
        fi
    done <<< "$(echo "$CONFIG_CONTENT" | grep 'source:')"

    return 1  # No match
}

# Function to prompt for a destination path
prompt_for_destination() {
    local source_path="$1"
    local destination=""

    # All informational messages go to stderr so only the destination goes to stdout
    echo "" >&2
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}" >&2
    echo -e "${YELLOW}Redirect needed for: $source_path${NC}" >&2
    echo "" >&2
    echo "Where should this URL redirect to?" >&2
    echo "  - Enter a path like: /:locale/get-started/quickstarts" >&2
    echo "  - Or press Enter to skip (you'll need to add it manually)" >&2
    echo "" >&2
    read -p "> " destination

    if [ -z "$destination" ]; then
        echo -e "${YELLOW}Skipped. You'll need to add this redirect manually.${NC}" >&2
        return 1
    fi

    # Validate the destination
    if [[ "$destination" != "/:locale/"* ]]; then
        echo -e "${YELLOW}Note: Adding /:locale/ prefix to your path${NC}" >&2
        destination="/:locale/$destination"
    fi

    # Check if destination exists
    if ! page_exists "$destination"; then
        echo -e "${YELLOW}Warning: Destination '$destination' does not appear to exist.${NC}" >&2
        read -p "Use it anyway? (y/n) " confirm
        if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
            return 1
        fi
    fi

    # Return the destination (only this goes to stdout for capture)
    echo "$destination"
    return 0
}

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
    search_pattern=$(echo "$url_path" | sed 's/[[\.*^$()+?{|]/\\&/g')

    # Check if this path exists as a redirect source in the config (exact or wildcard)
    if echo "$CONFIG_CONTENT" | grep -q "source:.*\"$search_pattern\""; then
        echo -e "${GREEN}✓ Redirect exists for: $url_path${NC}"
    elif check_wildcard_match "$url_path"; then
        echo -e "${GREEN}✓ Redirect exists for: $url_path (via wildcard)${NC}"
    else
        echo -e "${RED}✗ Missing redirect for: $url_path${NC}"
        MISSING_REDIRECTS+=("$url_path")

        # If interactive, prompt for destination
        if [ "$IS_INTERACTIVE" = true ]; then
            destination=$(prompt_for_destination "$url_path")
            if [ $? -eq 0 ] && [ -n "$destination" ]; then
                SUGGESTED_ENTRIES+=("        {
          source: \"$url_path\",
          destination: \"$destination\",
          permanent: true,
        },")
            else
                SUGGESTED_ENTRIES+=("        {
          source: \"$url_path\",
          destination: \"/:locale/REPLACE_WITH_NEW_PATH\",
          permanent: true,
        },")
            fi
        else
            # Non-interactive: use placeholder
            SUGGESTED_ENTRIES+=("        {
          source: \"$url_path\",
          destination: \"/:locale/REPLACE_WITH_NEW_PATH\",
          permanent: true,
        },")
        fi

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

    if [ "$IS_INTERACTIVE" = false ]; then
        echo "Replace 'REPLACE_WITH_NEW_PATH' with the actual destination path."
        echo "If the content was removed entirely, redirect to a relevant parent page."
        echo ""
    fi

    if [ "$CONFIG_MODIFIED" -eq "0" ]; then
        echo -e "${YELLOW}Note: next.config.ts was not modified in this branch.${NC}"
    fi
fi

if [ ${#INVALID_REDIRECTS[@]} -gt 0 ]; then
    echo ""
    echo -e "${RED}══════════════════════════════════════════════════════════════${NC}"
    echo -e "${RED}ERROR: Found ${#INVALID_REDIRECTS[@]} invalid redirect(s) in config!${NC}"
    echo -e "${RED}══════════════════════════════════════════════════════════════${NC}"
    echo ""
    for invalid in "${INVALID_REDIRECTS[@]}"; do
        echo "  - $invalid"
    done
    echo ""
    echo "Please fix these redirects before merging."
fi

if [ $EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}══════════════════════════════════════════════════════════════${NC}"
    echo -e "${GREEN}SUCCESS: All redirects are valid!${NC}"
    echo -e "${GREEN}══════════════════════════════════════════════════════════════${NC}"
fi

exit $EXIT_CODE
