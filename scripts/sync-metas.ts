/*
  Arcade docs utility: scaffold folder-based routes from Nextra _meta files

  - Traverses all _meta.ts and _meta.tsx under a root (default: app/en)
  - Processes from deepest to shallowest directories
  - For each entry in a _meta file:
      • key: "Title" → create <dir>/<key>/page.mdx with frontmatter title
      • key: { title: "Title" } → same as above
      • key with { type: "page" } or with href: ... → skip (external link)
      • "-- Group": { type: "separator", title: "Group" } → create folder for group,
        subsequent items are created inside that folder until the next separator
  - If a sibling <key>.mdx exists, it will be moved into <key>/page.mdx
*/

import { promises as fs } from "node:fs";
import path from "node:path";
import fg from "fast-glob";
import pc from "picocolors";

type PathLike = string;

const ROOT = path.resolve(
  process.argv[2] ?? path.join(process.cwd(), "app", "en")
);

// Hoisted regexes (general)
const RE_GROUP_PREFIX = /^--\s*/;
const RE_NON_ALNUM = /[^a-z0-9]+/g;
const RE_EDGE_DASHES = /^-+|-+$/g;
const RE_MULTI_DASH = /-{2,}/g;
const RE_DASH_UNDERSCORE = /[-_]/g;
const RE_WORD_START = /\b\w/g;

function slugify(input: string): string {
  return input
    .trim()
    .replace(RE_GROUP_PREFIX, "")
    .toLowerCase()
    .replace(RE_NON_ALNUM, "-")
    .replace(RE_EDGE_DASHES, "")
    .replace(RE_MULTI_DASH, "-");
}

function titleize(slug: string): string {
  const base = slug
    .replace(RE_GROUP_PREFIX, "")
    .replace(RE_DASH_UNDERSCORE, " ")
    .trim();
  return base.replace(RE_WORD_START, (c) => c.toUpperCase());
}

async function fileExists(p: PathLike) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function ensureDir(p: PathLike) {
  await fs.mkdir(p, { recursive: true });
}

// Hoisted regexes for parsing
const RE_BLOCK_COMMENTS = /\/\*[\s\S]*?\*\//g;
const RE_SPLIT_LINES = /\r?\n/;
const RE_LINE_COMMENTS = /\/\/.*$/;
const RE_SIMPLE_MAP =
  /^(?:["']?)([^"':]+)(?:["']?)\s*:\s*(?:["'])([^"']+)(?:["'])\s*,?/;
const RE_OBJ_START = /^(?:["']?)([^"':]+)(?:["']?)\s*:\s*\{\s*$/;
const RE_OPEN_BRACE = /\{/g;
const RE_CLOSE_BRACE = /\}/g;
const RE_TYPE_SEPARATOR = /type\s*:\s*["']separator["']/i;
const RE_TYPE_PAGE = /type\s*:\s*["']page["']/i;
const RE_HREF = /href\s*:\s*["'][^"']+["']/;
const RE_TITLE = /title\s*:\s*(["'])([\s\S]*?)\1/;

function accumulateObjectText(lines: string[], startIndex: number) {
  let i = startIndex;
  const buf: string[] = [];
  let braceDepth = 1;
  while (i < lines.length && braceDepth > 0) {
    const inner = lines[i];
    i++;
    const cleaned = inner.replace(RE_LINE_COMMENTS, "");
    buf.push(cleaned);
    braceDepth += (cleaned.match(RE_OPEN_BRACE) ?? []).length;
    braceDepth -= (cleaned.match(RE_CLOSE_BRACE) ?? []).length;
  }
  return { text: buf.join("\n"), nextIndex: i };
}

function parseSimple(line: string) {
  const m = line.match(RE_SIMPLE_MAP);
  if (!m) {
    return null;
  }
  const key = m[1].trim();
  const title = m[2].trim();
  if (key.startsWith("-- ")) {
    return { kind: "separator" as const, key, title };
  }
  return { kind: "item" as const, key, title, isExternal: false };
}

function parseObject(line: string, lines: string[], nextIndex: number) {
  const m = line.match(RE_OBJ_START);
  if (!m) {
    return null;
  }
  const key = m[1].trim();
  const { text: objText, nextIndex: idx } = accumulateObjectText(
    lines,
    nextIndex
  );
  const isSeparator = RE_TYPE_SEPARATOR.test(objText) || key.startsWith("-- ");
  const isExternal = RE_TYPE_PAGE.test(objText) || RE_HREF.test(objText);
  const mTitle = objText.match(RE_TITLE);
  const title = mTitle ? mTitle[2].trim() : titleize(key);
  if (isSeparator) {
    return {
      entry: { kind: "separator" as const, key, title },
      nextIndex: idx,
    };
  }
  return {
    entry: { kind: "item" as const, key, title, isExternal },
    nextIndex: idx,
  };
}

function extractEntries(metaSource: string) {
  // Strip block comments and keep line order for separators
  const withoutBlockComments = metaSource.replace(RE_BLOCK_COMMENTS, "");
  const lines = withoutBlockComments.split(RE_SPLIT_LINES);

  type Entry =
    | { kind: "separator"; key: string; title: string }
    | { kind: "item"; key: string; title: string; isExternal: boolean };

  const entries: Entry[] = [];
  let i = 0;
  while (i < lines.length) {
    let line = lines[i];
    line = line.replace(RE_LINE_COMMENTS, "").trim();
    i++;
    if (!line) {
      continue;
    }

    const simple = parseSimple(line);
    if (simple) {
      entries.push(simple as Entry);
      continue;
    }

    const obj = parseObject(line, lines, i);
    if (obj) {
      entries.push(obj.entry as Entry);
      i = obj.nextIndex;
      // fallthrough
    }
  }
  return entries;
}

async function handleItem(
  baseDir: string,
  currentGroupDir: string | null,
  key: string,
  title: string
) {
  const parentDir = currentGroupDir ?? baseDir;
  const keySlug = slugify(key);
  const pageDir = path.join(parentDir, keySlug);
  const flatMdx = path.join(parentDir, `${keySlug}.mdx`);
  const pageMdx = path.join(pageDir, "page.mdx");

  await ensureDir(pageDir);

  if (await fileExists(flatMdx)) {
    await fs.rename(flatMdx, pageMdx).catch(async (err) => {
      if (err && !(await fileExists(pageMdx))) {
        throw err;
      }
    });
  }

  if (await fileExists(pageMdx)) {
    console.log(pc.dim(`• Skipped (exists) ${path.relative(ROOT, pageMdx)}`));
    return;
  }

  const frontmatter = `---\ntitle: "${title.replace(/"/g, '\\"')}"\n---\n\n`;
  const body = `# ${title}\n\nStart here. You can explore and add content for ${title}.\n`;
  await fs.writeFile(pageMdx, frontmatter + body, "utf8");
  console.log(pc.green(`✔ Created ${path.relative(ROOT, pageMdx)}`));
}

async function scaffoldForMeta(metaPath: string) {
  const baseDir = path.dirname(metaPath);
  const src = await fs.readFile(metaPath, "utf8");
  const entries = extractEntries(src);

  let currentGroupDir: string | null = null;
  for (const entry of entries) {
    if (entry.kind === "separator") {
      const groupSlug = slugify(entry.title || entry.key);
      currentGroupDir = path.join(baseDir, groupSlug);
      await ensureDir(currentGroupDir);
    } else if (!entry.isExternal) {
      await handleItem(baseDir, currentGroupDir, entry.key, entry.title);
    }
  }
}

async function main() {
  console.log(pc.cyan(`Scanning for _meta files under ${ROOT}`));
  const metas = await fg(["**/_meta.ts", "**/_meta.tsx"], {
    cwd: ROOT,
    dot: false,
    absolute: true,
    ignore: ["**/node_modules/**"],
  });

  // Sort deepest first
  metas.sort((a, b) => b.split(path.sep).length - a.split(path.sep).length);

  for (const meta of metas) {
    console.log(
      pc.bold(pc.magenta(`\n→ Processing ${path.relative(ROOT, meta)}`))
    );
    try {
      await scaffoldForMeta(meta);
    } catch (err) {
      console.error(pc.red(`Failed to process ${meta}`));
      console.error(err);
    }
  }
  console.log(pc.green("\nDone."));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
