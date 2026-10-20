/**
 * Pure helpers for scripts/update-internal-links.ts (kept separate so they can
 * be unit-tested without running the script).
 */

// Top-level regex patterns
const LOCALE_PREFIX_REGEX = /^\/:locale/;
const SPECIAL_REGEX_CHARS_REGEX = /[.*+?^${}()|[\]\\]/g;

export interface Redirect {
  destination: string;
  source: string;
}

export function isRootPath(path: string): boolean {
  return path === "" || path === "/";
}

/**
 * Filter redirects to only those that can be auto-updated
 */
export function getUpdatableRedirects(redirectList: Redirect[]): Redirect[] {
  return redirectList.filter((r) => {
    if (r.source.includes(":path*") || r.destination.includes(":path*")) {
      return false;
    }

    const sourceWithoutLocale = r.source.replace(LOCALE_PREFIX_REGEX, "");
    const destWithoutLocale = r.destination.replace(LOCALE_PREFIX_REGEX, "");

    if (sourceWithoutLocale.includes(":") || destWithoutLocale.includes(":")) {
      return false;
    }

    // A bare locale root (e.g. `/:locale` -> `/:locale/home`) has no path to
    // match; the patterns below would match every `](`, `href="` and backtick
    // pair and inject the destination into unrelated text and code fences.
    if (isRootPath(sourceWithoutLocale)) {
      return false;
    }

    if (
      r.destination.includes("REPLACE_WITH") ||
      r.destination.includes("TODO")
    ) {
      return false;
    }

    return true;
  });
}

/**
 * Convert redirect to link patterns (without :locale prefix)
 */
export function redirectToLinkPatterns(redirect: Redirect): {
  oldPath: string;
  newPath: string;
} {
  return {
    newPath: redirect.destination.replace(LOCALE_PREFIX_REGEX, ""),
    oldPath: redirect.source.replace(LOCALE_PREFIX_REGEX, ""),
  };
}

/**
 * Escape special regex characters
 */
export function escapeRegex(str: string): string {
  return str.replace(SPECIAL_REGEX_CHARS_REGEX, "\\$&");
}

/**
 * Update links in file content
 */
export function updateLinksInContent(
  content: string,
  oldPath: string,
  newPath: string
): string {
  let updated = content;

  // Markdown links: [text](/old-path) -> [text](/new-path)
  // Using replacer function to avoid special replacement pattern interpretation
  // (e.g., $1, $2, $& in newPath would be incorrectly expanded if using string)
  const markdownLinkRegex = new RegExp(
    `(\\]\\()${escapeRegex(oldPath)}([)"#\\s])`,
    "g"
  );
  updated = updated.replace(
    markdownLinkRegex,
    (_, p1, p2) => `${p1}${newPath}${p2}`
  );

  // JSX href with double quotes: href="/old-path"
  const jsxDoubleQuoteRegex = new RegExp(
    `(href=")${escapeRegex(oldPath)}(["#])`,
    "g"
  );
  updated = updated.replace(
    jsxDoubleQuoteRegex,
    (_, p1, p2) => `${p1}${newPath}${p2}`
  );

  // JSX href with single quotes: href='/old-path'
  const jsxSingleQuoteRegex = new RegExp(
    `(href=')${escapeRegex(oldPath)}(['#])`,
    "g"
  );
  updated = updated.replace(
    jsxSingleQuoteRegex,
    (_, p1, p2) => `${p1}${newPath}${p2}`
  );

  // Paths in backticks (code blocks showing links)
  const backtickRegex = new RegExp(`(\`)${escapeRegex(oldPath)}(\`|[#])`, "g");
  updated = updated.replace(
    backtickRegex,
    (_, p1, p2) => `${p1}${newPath}${p2}`
  );

  return updated;
}
