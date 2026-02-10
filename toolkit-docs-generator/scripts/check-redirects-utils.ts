/**
 * Utility functions for check-redirects.ts
 * Extracted for testability.
 */

import { existsSync } from "node:fs";

// Regex patterns
export const APP_LOCALE_PREFIX_REGEX = /^app\/[a-z]{2}\//;
export const PAGE_FILE_SUFFIX_REGEX = /\/?page\.mdx?$/;
export const LOCALE_PREFIX_REGEX = /^\/:locale\/?/;
export const PAGE_FILE_MATCH_REGEX = /page\.mdx?$/;
export const LOCALE_PATH_PREFIX_REGEX = /^\/:locale\//;
export const WILDCARD_PATH_REGEX = /\/:path\*.*$/;
export const MDX_EXTENSION_REGEX = /\.mdx$/;
export const DYNAMIC_ROUTE_REGEX = /\[[^\]]+\]/;
export const REDIRECT_REGEX =
  /\{\s*source:\s*["']([^"']+)["']\s*,\s*destination:\s*["']([^"']+)["']/g;
export const REVERSED_REDIRECT_REGEX =
  /\{\s*destination:\s*["']([^"']+)["']\s*,\s*source:\s*["']([^"']+)["']/g;

export type Redirect = {
  source: string;
  destination: string;
  permanent?: boolean;
};

export type DynamicRouteMove = {
  oldPath: string;
  newPath: string;
  oldUrl: string;
  newUrl: string;
};

/**
 * Convert file path to URL path
 * e.g., app/en/guides/foo/page.mdx -> /:locale/guides/foo
 */
export function fileToUrl(filePath: string): string {
  const urlPath = filePath
    .replace(APP_LOCALE_PREFIX_REGEX, "")
    .replace(PAGE_FILE_SUFFIX_REGEX, "");

  return urlPath ? `/:locale/${urlPath}` : "/:locale";
}

/**
 * Convert URL path to file path
 * e.g., /:locale/guides/foo -> app/en/guides/foo/page.mdx
 */
export function urlToFile(urlPath: string): string {
  const pathWithoutLocale = urlPath.replace(LOCALE_PREFIX_REGEX, "");
  return pathWithoutLocale
    ? `app/en/${pathWithoutLocale}/page.mdx`
    : "app/en/page.mdx";
}

/**
 * Convert a file path containing a dynamic route to a URL pattern.
 * Replaces [param] with :param and [...param] with :param*
 * e.g., app/en/resources/[toolkitId]/page.mdx -> /:locale/resources/:toolkitId
 */
export function dynamicFileToUrlPattern(filePath: string): string {
  const urlPath = filePath
    .replace(APP_LOCALE_PREFIX_REGEX, "")
    .replace(PAGE_FILE_SUFFIX_REGEX, "");

  // Replace [...param] with :param* (catch-all routes)
  // Replace [param] with :param (dynamic segments)
  const patternPath = urlPath
    .replace(/\[\.\.\.([^\]]+)\]/g, ":$1*")
    .replace(/\[([^\]]+)\]/g, ":$1");

  return patternPath ? `/:locale/${patternPath}` : "/:locale";
}

/**
 * Check if a dynamic route exists that could serve this URL path.
 * e.g., for /resources/integrations/productivity/gmail,
 * check if /resources/integrations/productivity/[toolkitId]/page.mdx exists
 *
 * @param urlPath - The URL path to check
 * @param checkExists - Function to check if a file exists (defaults to fs.existsSync)
 */
export function dynamicRouteExists(
  urlPath: string,
  checkExists: (path: string) => boolean = existsSync
): boolean {
  const pathWithoutLocale = urlPath.replace(LOCALE_PREFIX_REGEX, "");
  const segments = pathWithoutLocale.split("/").filter(Boolean);

  // Try replacing segments with common dynamic route patterns
  const dynamicPatterns = ["[toolkitId]", "[slug]", "[id]", "[...slug]"];

  for (let i = segments.length - 1; i >= 0; i--) {
    for (const pattern of dynamicPatterns) {
      const testSegments = [...segments];
      testSegments[i] = pattern;
      const testPath = `app/en/${testSegments.join("/")}/page.mdx`;
      if (checkExists(testPath)) {
        return true;
      }
      const testPathMd = testPath.replace(MDX_EXTENSION_REGEX, ".md");
      if (checkExists(testPathMd)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Check if a page exists on disk
 *
 * @param urlPath - The URL path to check
 * @param checkExists - Function to check if a file exists (defaults to fs.existsSync)
 */
export function pageExists(
  urlPath: string,
  checkExists: (path: string) => boolean = existsSync
): boolean {
  if (urlPath.includes(":path*") || urlPath.includes(":path")) {
    return true;
  }

  const filePath = urlToFile(urlPath);
  if (checkExists(filePath)) {
    return true;
  }

  const mdPath = filePath.replace(MDX_EXTENSION_REGEX, ".md");
  if (checkExists(mdPath)) {
    return true;
  }

  // Check if a dynamic route could serve this URL
  if (dynamicRouteExists(urlPath, checkExists)) {
    return true;
  }

  return false;
}

/**
 * Parse git diff output for renamed dynamic route page files.
 * Detects when a page.mdx inside a dynamic route folder is moved.
 */
export function parseDynamicRouteMoves(output: string): DynamicRouteMove[] {
  const moves: DynamicRouteMove[] = [];

  for (const line of output.split("\n")) {
    if (!line) {
      continue;
    }
    const parts = line.split("\t");
    const status = parts[0];

    // Only look at renames (R followed by similarity percentage)
    if (!status?.startsWith("R")) {
      continue;
    }

    const oldPath = parts[1];
    const newPath = parts[2];

    if (!(oldPath && newPath)) {
      continue;
    }

    // Check if either path contains a dynamic route segment
    const oldHasDynamic = DYNAMIC_ROUTE_REGEX.test(oldPath);
    const newHasDynamic = DYNAMIC_ROUTE_REGEX.test(newPath);

    // We care about moves where the URL pattern changes
    if (!PAGE_FILE_MATCH_REGEX.test(oldPath)) {
      continue;
    }

    const oldUrl = dynamicFileToUrlPattern(oldPath);
    const newUrl = dynamicFileToUrlPattern(newPath);

    // Skip if the URL pattern hasn't actually changed
    if (oldUrl === newUrl) {
      continue;
    }

    // Record the move if either path has a dynamic route
    // or if the directory structure changed significantly
    if (oldHasDynamic || newHasDynamic) {
      moves.push({ oldPath, newPath, oldUrl, newUrl });
    }
  }

  return moves;
}

/**
 * Check if a wildcard redirect already covers a dynamic route move
 */
export function isMoveCoveredByRedirect(
  move: DynamicRouteMove,
  redirects: Redirect[]
): boolean {
  // Check for exact match or wildcard that covers the path
  for (const redirect of redirects) {
    // Exact pattern match
    if (redirect.source === move.oldUrl) {
      return true;
    }

    // Check if a wildcard redirect covers this path
    if (redirect.source.includes(":path*")) {
      const prefix = redirect.source
        .replace(WILDCARD_PATH_REGEX, "")
        .replace(LOCALE_PATH_PREFIX_REGEX, "");
      const movePrefix = move.oldUrl.replace(LOCALE_PATH_PREFIX_REGEX, "");

      if (movePrefix.startsWith(`${prefix}/`) || movePrefix === prefix) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Execute regex and collect all matches
 */
export function collectRegexMatches(
  regex: RegExp,
  content: string,
  sourceIndex: number,
  destIndex: number
): Array<{ source: string; destination: string }> {
  const results: Array<{ source: string; destination: string }> = [];
  regex.lastIndex = 0;

  let match = regex.exec(content);
  while (match !== null) {
    results.push({
      source: match[sourceIndex],
      destination: match[destIndex],
    });
    match = regex.exec(content);
  }

  return results;
}

/**
 * Parse redirects from next.config.ts content
 */
export function parseRedirects(content: string): Redirect[] {
  const results: Redirect[] = [];

  // Collect standard format: { source: "...", destination: "..." }
  const standardMatches = collectRegexMatches(REDIRECT_REGEX, content, 1, 2);
  for (const m of standardMatches) {
    results.push(m);
  }

  // Collect reversed format: { destination: "...", source: "..." }
  const reversedMatches = collectRegexMatches(
    REVERSED_REDIRECT_REGEX,
    content,
    2,
    1
  );
  for (const m of reversedMatches) {
    results.push(m);
  }

  return results;
}

/**
 * Check if a wildcard redirect covers a path
 */
export function checkWildcardMatch(
  path: string,
  redirectList: Redirect[]
): boolean {
  const pathWithoutLocale = path.replace(LOCALE_PATH_PREFIX_REGEX, "");

  for (const redirect of redirectList) {
    if (redirect.source.includes(":path*")) {
      const prefix = redirect.source
        .replace(WILDCARD_PATH_REGEX, "")
        .replace(LOCALE_PATH_PREFIX_REGEX, "");

      if (
        pathWithoutLocale.startsWith(`${prefix}/`) ||
        pathWithoutLocale === prefix
      ) {
        return true;
      }
    }
  }

  return false;
}
