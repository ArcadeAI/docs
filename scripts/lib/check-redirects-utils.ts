/**
 * Shared helpers for scripts/check-redirects.ts.
 *
 * Split out so the logic that maps file paths to URLs, checks whether a
 * page still exists on disk, and matches redirects against moved files can
 * be unit tested without shelling out to git or touching the real
 * filesystem.
 *
 * Content layout (Fumadocs):
 *   content/docs/<path>.mdx        -> /:locale/<path>
 *   content/docs/<path>/index.mdx  -> /:locale/<path>
 *   content/docs/index.mdx         -> /:locale
 *
 * Toolkit (MCP server) pages are not files: `lib/toolkit-route.tsx` renders
 * `/:locale/resources/integrations/<category>/<toolkitId>` from JSON data.
 */

import { existsSync } from "node:fs";

// `permanent` is optional here (unlike redirects.ts's `Redirect`, where it's
// required) because none of these helpers read it — they only match on
// `source`/`destination`. A `redirects.ts` entry satisfies this type as-is.
export interface Redirect {
  destination: string;
  permanent?: boolean;
  source: string;
}

export const CONTENT_ROOT = "content/docs";
export const TOOLKIT_ROUTE_MODULE = "lib/toolkit-route.tsx";

/** Matches a docs content file, e.g. `content/docs/guides/foo.mdx`. */
export const CONTENT_FILE_REGEX = /^content\/docs\/.*\.mdx?$/;

const CONTENT_PREFIX_REGEX = /^content\/docs\//;
const INDEX_FILE_REGEX = /(^|\/)index\.mdx?$/;
const MDX_EXTENSION_REGEX = /\.mdx?$/;
const LOCALE_PREFIX_REGEX = /^\/:locale\/?/;
const LOCALE_PATH_PREFIX_REGEX = /^\/:locale\//;
const WILDCARD_PATH_REGEX = /\/:path\*.*$/;
const DYNAMIC_ROUTE_REGEX = /\[[^\]]+\]/;
const CATCH_ALL_SEGMENT_REGEX = /\[\.\.\.([^\]]+)\]/g;
const DYNAMIC_SEGMENT_REGEX = /\[([^\]]+)\]/g;

const TOOLKIT_ROUTE_PREFIX = ["resources", "integrations"];
const TOOLKIT_ROUTE_SEGMENT_COUNT = 4;

export interface DynamicRouteMove {
  newPath: string;
  newUrl: string;
  oldPath: string;
  oldUrl: string;
}

/**
 * Strip the content root and the `.mdx`/`index.mdx` suffix from a file path,
 * leaving the URL path without a leading slash (empty for the root page).
 */
function fileToRelativeUrlPath(filePath: string): string {
  return filePath
    .replace(CONTENT_PREFIX_REGEX, "")
    .replace(INDEX_FILE_REGEX, "")
    .replace(MDX_EXTENSION_REGEX, "");
}

/**
 * Convert file path to URL path
 * e.g., content/docs/guides/foo.mdx       -> /:locale/guides/foo
 *       content/docs/guides/foo/index.mdx -> /:locale/guides/foo
 */
export function fileToUrl(filePath: string): string {
  const urlPath = fileToRelativeUrlPath(filePath);
  return urlPath ? `/:locale/${urlPath}` : "/:locale";
}

/**
 * Convert URL path to the primary file path (the flat `<path>.mdx` form).
 * e.g., /:locale/guides/foo -> content/docs/guides/foo.mdx
 *
 * A page may also live at `<path>/index.mdx`; use `urlToFileCandidates` when
 * checking existence.
 */
export function urlToFile(urlPath: string): string {
  return urlToFileCandidates(urlPath)[0];
}

/**
 * All file paths that would serve a URL, in order of preference:
 * `<path>.mdx`, `<path>/index.mdx`, then their `.md` variants.
 * e.g., /:locale/guides/foo -> [content/docs/guides/foo.mdx,
 *                              content/docs/guides/foo/index.mdx, ...]
 */
export function urlToFileCandidates(urlPath: string): string[] {
  const pathWithoutLocale = urlPath.replace(LOCALE_PREFIX_REGEX, "");
  if (!pathWithoutLocale) {
    return [`${CONTENT_ROOT}/index.mdx`, `${CONTENT_ROOT}/index.md`];
  }
  const base = `${CONTENT_ROOT}/${pathWithoutLocale}`;
  return [`${base}.mdx`, `${base}/index.mdx`, `${base}.md`, `${base}/index.md`];
}

/**
 * Convert a file path containing a dynamic route to a URL pattern.
 * Replaces [param] with :param and [...param] with :param*
 * e.g., content/docs/resources/[toolkitId].mdx -> /:locale/resources/:toolkitId
 */
export function dynamicFileToUrlPattern(filePath: string): string {
  const urlPath = fileToRelativeUrlPath(filePath);

  // Replace [...param] with :param* (catch-all routes)
  // Replace [param] with :param (dynamic segments)
  const patternPath = urlPath
    .replace(CATCH_ALL_SEGMENT_REGEX, ":$1*")
    .replace(DYNAMIC_SEGMENT_REGEX, ":$1");

  return patternPath ? `/:locale/${patternPath}` : "/:locale";
}

/**
 * Check if the toolkit route could serve this URL path.
 * `lib/toolkit-route.tsx` renders every
 * `/resources/integrations/<category>/<toolkitId>` URL from toolkit JSON, so
 * such a URL stays reachable without an MDX file as long as that module exists.
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

  if (segments.length !== TOOLKIT_ROUTE_SEGMENT_COUNT) {
    return false;
  }
  if (
    segments[0] !== TOOLKIT_ROUTE_PREFIX[0] ||
    segments[1] !== TOOLKIT_ROUTE_PREFIX[1]
  ) {
    return false;
  }

  return checkExists(TOOLKIT_ROUTE_MODULE);
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

  if (
    urlToFileCandidates(urlPath).some((candidate) => checkExists(candidate))
  ) {
    return true;
  }

  // Check if the toolkit route could serve this URL
  return dynamicRouteExists(urlPath, checkExists);
}

/**
 * Parse git diff output for renamed dynamic route content files.
 * Detects when a content file inside a dynamic route folder is moved.
 */
export function parseDynamicRouteMoves(output: string): DynamicRouteMove[] {
  const moves: DynamicRouteMove[] = [];

  for (const line of output.split("\n")) {
    if (!line) {
      continue;
    }
    const [status, oldPath, newPath] = line.split("\t");

    // Only look at renames (R followed by similarity percentage)
    if (!status?.startsWith("R")) {
      continue;
    }

    if (!(oldPath && newPath)) {
      continue;
    }

    // Check if either path contains a dynamic route segment
    const oldHasDynamic = DYNAMIC_ROUTE_REGEX.test(oldPath);
    const newHasDynamic = DYNAMIC_ROUTE_REGEX.test(newPath);

    // We care about moves where the URL pattern changes
    if (!CONTENT_FILE_REGEX.test(oldPath)) {
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
      moves.push({ newPath, newUrl, oldPath, oldUrl });
    }
  }

  return moves;
}

/**
 * Check if a wildcard redirect already covers a dynamic route move
 */
export function isMoveCoveredByRedirect(
  move: DynamicRouteMove,
  redirectList: Redirect[]
): boolean {
  // Check for exact match or wildcard that covers the path
  for (const redirect of redirectList) {
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
