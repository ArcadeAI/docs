/**
 * A fumadocs `loader` source built straight from the files under
 * `content/docs`, for tests that need the real page tree (URLs, paths, sidebar
 * order) without compiling MDX.
 *
 * `lib/source.ts` feeds `loader()` the generated `.source/server.ts`, which
 * imports every page as `*.mdx?collection=docs`. Compiling those in Vitest
 * drags each page's component graph into the test process, and some of it
 * (for example `@arcadeai/design-system`) touches `document` at module load.
 * This helper hands the same `loader` (same `baseUrl`) virtual files read from
 * disk instead, so `source.getPages()` yields identical `url`/`path` values.
 *
 * Use it with `vi.mock("@/lib/source", ...)`:
 *
 *   vi.mock("@/lib/source", async () => {
 *     const { createFsSource } = await import("./helpers/fs-source");
 *     return { source: createFsSource() };
 *   });
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import fg from "fast-glob";
import {
  loader,
  type MetaData,
  type PageData,
  type VirtualFile,
} from "fumadocs-core/source";
import { parse as parseYaml } from "yaml";
import { CONTENT_ROOT } from "./content-paths";

const FRONTMATTER_REGEX = /^---\r?\n([\s\S]*?)\r?\n---/;

type Frontmatter = Partial<PageData> & { metaTitle?: string };

function readFrontmatter(absolutePath: string): Frontmatter {
  const content = readFileSync(absolutePath, "utf-8");
  const raw = FRONTMATTER_REGEX.exec(content)?.[1];
  if (!raw) {
    return {};
  }
  const parsed: unknown = parseYaml(raw);
  return typeof parsed === "object" && parsed !== null
    ? (parsed as Frontmatter)
    : {};
}

/** Virtual files for every `*.mdx` page and `meta.json` under content/docs. */
export function readContentFiles(): VirtualFile[] {
  const pages = fg
    .sync("**/*.{md,mdx}", { cwd: CONTENT_ROOT })
    .map((path): VirtualFile => {
      const absolutePath = join(CONTENT_ROOT, path);
      const frontmatter = readFrontmatter(absolutePath);
      return {
        absolutePath,
        data: {
          description: frontmatter.description,
          icon: frontmatter.icon,
          title: frontmatter.title,
        },
        path,
        type: "page",
      };
    });

  const metas = fg
    .sync("**/meta.json", { cwd: CONTENT_ROOT })
    .map((path): VirtualFile => {
      const absolutePath = join(CONTENT_ROOT, path);
      return {
        absolutePath,
        data: JSON.parse(readFileSync(absolutePath, "utf-8")) as MetaData,
        path,
        type: "meta",
      };
    });

  return [...pages, ...metas];
}

/** A `loader()` over the content directory with the same `baseUrl` as lib/source.ts. */
export function createFsSource() {
  return loader({
    baseUrl: "/en",
    source: { files: readContentFiles() },
  });
}
