/**
 * Shared helpers for tests that walk the Fumadocs content tree.
 *
 * Layout:
 *   content/docs/<path>.mdx        -> /en/<path>
 *   content/docs/<path>/index.mdx  -> /en/<path>
 *   content/docs/index.mdx         -> /en
 *   content/docs/**\/meta.json      -> sidebar order (`pages` array)
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import fg from "fast-glob";

export const CONTENT_ROOT_RELATIVE = "content/docs";
export const CONTENT_ROOT = join(process.cwd(), "content", "docs");
export const LOCALE_PREFIX = "/en";

const MDX_EXTENSION_REGEX = /\.mdx?$/;
const INDEX_FILE_REGEX = /(^|\/)index\.mdx?$/;
const LEADING_SLASH_REGEX = /^\/+/;
const TRAILING_SLASH_REGEX = /\/+$/;
const LOCALE_PREFIX_REGEX = /^\/(en|es|pt-BR)(?=\/|$)/;
const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---/;
const QUOTED_VALUE_REGEX = /^(["'])(.*)\1$/;

/** Strip a leading locale and surrounding slashes: "/en/a/b/" -> "a/b". */
export function toContentRelativePath(urlPath: string): string {
  return urlPath
    .replace(LOCALE_PREFIX_REGEX, "")
    .replace(LEADING_SLASH_REGEX, "")
    .replace(TRAILING_SLASH_REGEX, "");
}

/**
 * Absolute file paths that would serve a URL, in order of preference.
 * Accepts "/en/a/b", "/a/b", or "a/b".
 */
export function contentFileCandidates(urlPath: string): string[] {
  const rel = toContentRelativePath(urlPath);
  if (!rel) {
    return [join(CONTENT_ROOT, "index.mdx"), join(CONTENT_ROOT, "index.md")];
  }
  const base = join(CONTENT_ROOT, rel);
  return [
    `${base}.mdx`,
    join(base, "index.mdx"),
    `${base}.md`,
    join(base, "index.md"),
  ];
}

/** The content file that serves a URL, or null when none exists. */
export function resolveContentFile(urlPath: string): string | null {
  return contentFileCandidates(urlPath).find((p) => existsSync(p)) ?? null;
}

/** True when an MDX page serves the URL. */
export function contentPageExists(urlPath: string): boolean {
  return resolveContentFile(urlPath) !== null;
}

/**
 * Convert a content file path (absolute or repo-relative) to its URL path
 * with the `/en` locale prefix, e.g. "content/docs/build/tools.mdx" -> "/en/build/tools".
 */
export function contentFileToUrl(filePath: string): string {
  const rel = (
    filePath.startsWith(sep) || filePath.startsWith("/")
      ? relative(CONTENT_ROOT, filePath)
      : relative(CONTENT_ROOT_RELATIVE, filePath)
  )
    .split(sep)
    .join("/")
    .replace(INDEX_FILE_REGEX, "")
    .replace(MDX_EXTENSION_REGEX, "");
  return rel ? `${LOCALE_PREFIX}/${rel}` : LOCALE_PREFIX;
}

/** Every MDX/MD content file, as repo-relative paths. */
export async function listContentFiles(): Promise<string[]> {
  return await fg(`${CONTENT_ROOT_RELATIVE}/**/*.{md,mdx}`, {
    cwd: process.cwd(),
  });
}

/**
 * Child page slugs of a content directory: `<slug>.mdx` files (excluding
 * `index`) plus sub-directories. Mirrors what a `meta.json` `pages` entry can
 * refer to.
 */
export function listChildSlugs(dir: string): string[] {
  if (!existsSync(dir)) {
    return [];
  }
  const slugs = new Set<string>();
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) {
      continue;
    }
    if (entry.isDirectory()) {
      slugs.add(entry.name);
      continue;
    }
    if (MDX_EXTENSION_REGEX.test(entry.name)) {
      const slug = entry.name.replace(MDX_EXTENSION_REGEX, "");
      if (slug !== "index") {
        slugs.add(slug);
      }
    }
  }
  return [...slugs].sort();
}

export interface MetaJson {
  icon?: string;
  pages?: string[];
  title?: string;
  [key: string]: unknown;
}

/** Parse `<dir>/meta.json`; returns null when it does not exist. */
export function readMetaJson(dir: string): MetaJson | null {
  const file = join(dir, "meta.json");
  if (!existsSync(file)) {
    return null;
  }
  return JSON.parse(readFileSync(file, "utf-8")) as MetaJson;
}

/** The `pages` array of `<dir>/meta.json` (empty when absent). */
export function readMetaPages(dir: string): string[] {
  return readMetaJson(dir)?.pages ?? [];
}

const LINK_ENTRY_REGEX = /^(?:\[[^\]]*\])?\[([^\]]*)\]\(([^)]*)\)$/;
const SEPARATOR_ENTRY_REGEX = /^---(.*)---$/;

/** Parse a `[Title](href)` (or `[Icon][Title](href)`) meta.json entry. */
export function parseLinkEntry(
  entry: string
): { title: string; href: string } | null {
  const match = LINK_ENTRY_REGEX.exec(entry);
  return match ? { href: match[2], title: match[1] } : null;
}

/** Parse a `---Title---` meta.json separator entry. */
export function parseSeparatorEntry(entry: string): { title: string } | null {
  const match = SEPARATOR_ENTRY_REGEX.exec(entry);
  return match ? { title: match[1] } : null;
}

/** Raw frontmatter block of an MDX file, or "" when none. */
export function readFrontmatter(content: string): string {
  return FRONTMATTER_REGEX.exec(content)?.[1] ?? "";
}

/** Body of an MDX file with the frontmatter block removed. */
export function stripFrontmatter(content: string): string {
  return content.replace(FRONTMATTER_REGEX, "");
}

/**
 * Read a scalar frontmatter value by key (quoted or bare), or null.
 * Good enough for `title`/`description`; not a YAML parser.
 */
export function readFrontmatterValue(
  content: string,
  key: string
): string | null {
  const prefix = `${key}:`;
  for (const line of readFrontmatter(content).split("\n")) {
    if (!line.startsWith(prefix)) {
      continue;
    }
    const raw = line.slice(prefix.length).trim();
    return raw.replace(QUOTED_VALUE_REGEX, "$2");
  }
  return null;
}
