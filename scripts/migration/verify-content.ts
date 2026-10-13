/**
 * Proves the content migration is complete and faithful.
 *
 *   bun scripts/migration/verify-content.ts [--source=/path/to/nextra/docs]
 *
 * Checks:
 *   1. Every `app/en/**\/page.mdx` (excluding `[toolkitId]`) maps to exactly one
 *      target MDX file at the planned path, and no extra MDX exists in content/docs.
 *   2. After normalizing both sides (strip frontmatter, strip MDX-level imports,
 *      apply fence meta rewrites, strip the leading H1, collapse blank lines) the
 *      bodies are identical.
 *   3. The target frontmatter has a `title`; when the source had a leading H1 the
 *      title equals its text and the target body no longer starts with an H1.
 *   4. For every `_meta.tsx` (ignoring the nine integration categories and the
 *      `[toolkitId]` folders) the set of sidebar entries matches `meta.json`
 *      `pages` (separators as `---Title---`, hrefs as `[Title](href)`, hidden
 *      entries omitted, `...`/`!x` ignored).
 *
 * Prints a table of mismatches and exits non-zero on any.
 */

import { existsSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import fg from "fast-glob";
import { parse as parseYaml } from "yaml";
import {
  CONTENT_DIR,
  evaluateMeta,
  findLeadingH1,
  INTEGRATION_CATEGORIES,
  INTEGRATIONS_REL,
  isFolder,
  isIntegrationCategoryDir,
  iterateDirs,
  normalizeBody,
  readSourceTree,
  resolveSourceRoot,
  type SourceDir,
  splitFrontmatter,
  targetMdxRel,
} from "./lib";

const SOURCE_ROOT = resolveSourceRoot();

type Mismatch = { kind: string; where: string; detail: string };
const mismatches: Mismatch[] = [];

/**
 * Intentional deviations from the 1:1 Nextra mapping, declared per workstream
 * in scripts/migration/overrides/*.json (one file per owner, merged here):
 *   moved:      { "<default target rel>": "<new target rel>" }  page relocated (redirect expected)
 *   deleted:    [ "<default target rel>" ]                       page removed (redirect expected)
 *   enhanced:   [ "<target rel>" ]                               body intentionally differs; existence only
 *   extraPages: [ "<target rel>" ]                               new pages with no Nextra source
 *   metaFree:   [ "<dir rel>" ]                                  meta.json intentionally restructured
 */
interface Overrides {
  moved: Record<string, string>;
  deleted: Set<string>;
  enhanced: Set<string>;
  extraPages: Set<string>;
  metaFree: Set<string>;
}
function loadOverrides(): Overrides {
  const out: Overrides = { moved: {}, deleted: new Set(), enhanced: new Set(), extraPages: new Set(), metaFree: new Set() };
  const dir = join(import.meta.dirname, "overrides");
  if (!existsSync(dir)) {
    return out;
  }
  for (const file of fg.sync("*.json", { cwd: dir })) {
    const o = JSON.parse(readFileSync(join(dir, file), "utf8")) as Partial<{
      moved: Record<string, string>; deleted: string[]; enhanced: string[]; extraPages: string[]; metaFree: string[];
    }>;
    Object.assign(out.moved, o.moved ?? {});
    for (const k of ["deleted", "enhanced", "extraPages", "metaFree"] as const) {
      for (const v of o[k] ?? []) out[k].add(v);
    }
  }
  return out;
}
const overrides = loadOverrides();
/** Target path for a source page, honouring overrides. */
function resolvedTargetRel(dir: SourceDir): string {
  const rel = targetMdxRel(dir);
  return overrides.moved[rel] ?? rel;
}
const fail = (kind: string, where: string, detail: string) => mismatches.push({ kind, where, detail });

let pagesChecked = 0;
let metaChecked = 0;

function firstDiff(a: string, b: string): string {
  const al = a.split("\n");
  const bl = b.split("\n");
  const n = Math.max(al.length, bl.length);
  for (let i = 0; i < n; i++) {
    if (al[i] !== bl[i]) {
      return `line ${i + 1}: source=${JSON.stringify(al[i] ?? "<EOF>").slice(0, 100)} target=${JSON.stringify(bl[i] ?? "<EOF>").slice(0, 100)}`;
    }
  }
  return "identical";
}

function verifyPage(dir: SourceDir) {
  const srcPath = join(dir.abs, "page.mdx");
  const defaultRel = targetMdxRel(dir);
  if (overrides.deleted.has(defaultRel)) {
    pagesChecked++;
    return;
  }
  const rel = resolvedTargetRel(dir);
  const dstPath = join(CONTENT_DIR, rel);
  const where = `app/en/${dir.rel ? `${dir.rel}/` : ""}page.mdx -> content/docs/${rel}`;
  pagesChecked++;
  if (!existsSync(dstPath)) {
    fail("missing-page", where, "target file does not exist");
    return;
  }
  if (overrides.enhanced.has(rel)) {
    return;
  }
  const src = readFileSync(srcPath, "utf8");
  const dst = readFileSync(dstPath, "utf8");

  const s = normalizeBody(src);
  const d = normalizeBody(dst);
  if (s.body !== d.body) {
    fail("body-differs", where, firstDiff(s.body, d.body));
  }

  const dstLines = dst.split("\n");
  const { frontmatter, bodyStart } = splitFrontmatter(dstLines);
  if (!frontmatter) {
    fail("no-frontmatter", where, "target has no frontmatter");
    return;
  }
  const fm = parseYaml(frontmatter.join("\n")) as Record<string, unknown> | null;
  if (!fm || typeof fm.title !== "string" || !fm.title.trim()) {
    fail("no-title", where, "target frontmatter lacks a title");
  }
  if (s.leadingH1) {
    if (fm?.title !== s.leadingH1) {
      fail("title-not-h1", where, `title=${JSON.stringify(fm?.title)} h1=${JSON.stringify(s.leadingH1)}`);
    }
    if (findLeadingH1(dstLines.slice(bodyStart), 0)) {
      fail("h1-kept", where, "target body still starts with an H1");
    }
    const srcFm = parseYaml(splitFrontmatter(src.split("\n")).frontmatter?.join("\n") ?? "") as Record<string, unknown> | null;
    const origTitle = srcFm?.title;
    if (typeof origTitle === "string" && origTitle !== s.leadingH1 && fm?.metaTitle !== origTitle) {
      fail("metaTitle-missing", where, `expected metaTitle=${JSON.stringify(origTitle)} got ${JSON.stringify(fm?.metaTitle)}`);
    }
  }
  if (d.leadingH1) {
    fail("h1-in-target", where, `target body has leading H1 ${JSON.stringify(d.leadingH1)}`);
  }
  const removedPatterns: [RegExp, string][] = [
    [/^import .*nextra\/components/m, "nextra/components import kept"],
    [/^import meta from ['"]\.\/_meta['"]/m, "./_meta import kept"],
    [/meta=\{meta\}/, "meta={meta} prop kept"],
    [/^import .*@\/app\/_components/m, "@/app/_components import kept"],
  ];
  for (const [re, msg] of removedPatterns) {
    if (re.test(dst)) {
      fail("rewrite-missed", where, msg);
    }
  }
}

async function verifyMeta(dir: SourceDir, parentHidden: Set<string>) {
  if (!(dir.metaFile && isFolder(dir)) || isIntegrationCategoryDir(dir.rel) || overrides.metaFree.has(dir.rel)) {
    return;
  }
  metaChecked++;
  const metaJsonPath = join(CONTENT_DIR, dir.rel, "meta.json");
  const where = `app/en/${dir.rel ? `${dir.rel}/` : ""}_meta.tsx -> content/docs/${dir.rel ? `${dir.rel}/` : ""}meta.json`;
  if (!existsSync(metaJsonPath)) {
    fail("missing-meta", where, "meta.json does not exist");
    return;
  }
  const evaluated = await evaluateMeta(dir.metaFile);
  const expected: string[] = [];
  for (const e of evaluated.entries) {
    if (e.type === "separator") {
      expected.push(`---${e.title ?? ""}---`);
    } else if (e.display === "hidden") {
      parentHidden.add(e.key);
    } else if ((e.key === "index" && dir.hasPage) || dir.children.some((c) => c.name === e.key)) {
      expected.push(e.key);
    } else if (e.href) {
      expected.push(`[${e.title ?? e.key}](${e.href})`);
    } else {
      expected.push(e.key);
    }
  }
  const json = JSON.parse(readFileSync(metaJsonPath, "utf8")) as { title?: string; pages?: string[] };
  const actual = (json.pages ?? []).filter((p) => p !== "..." && !p.startsWith("!"));
  if (JSON.stringify(expected) !== JSON.stringify(actual)) {
    fail("meta-pages", where, `expected ${JSON.stringify(expected)} got ${JSON.stringify(actual)}`);
  }
  for (const h of parentHidden) {
    if (actual.includes(h)) {
      fail("meta-hidden", where, `hidden entry ${h} is listed`);
    }
  }
  if (!(json.pages ?? []).includes("...")) {
    const unlisted = dir.children.map((c) => c.name).filter((n) => !actual.includes(n) && !parentHidden.has(n));
    if (unlisted.length) {
      fail("meta-unlisted", where, `children not in pages and no "...": ${unlisted.join(", ")}`);
    }
  }
}

async function main() {
  const tree = readSourceTree(SOURCE_ROOT);
  const expectedTargets = new Set<string>();
  for (const dir of iterateDirs(tree)) {
    if (dir.hasPage) {
      if (!overrides.deleted.has(targetMdxRel(dir))) {
        expectedTargets.add(resolvedTargetRel(dir));
      }
      verifyPage(dir);
    }
    await verifyMeta(dir, new Set());
  }

  // Extra MDX in target that has no source page
  const actualTargets = fg.sync("**/*.mdx", { cwd: CONTENT_DIR });
  for (const t of actualTargets) {
    if (!(expectedTargets.has(t) || overrides.extraPages.has(t))) {
      fail("extra-page", `content/docs/${t}`, "no corresponding app/en/**/page.mdx");
    }
  }
  // A page must not exist both as leaf and as folder index
  for (const t of expectedTargets) {
    const twin = t.endsWith("/index.mdx") ? t.replace(/\/index\.mdx$/, ".mdx") : t.replace(/\.mdx$/, "/index.mdx");
    if (existsSync(join(CONTENT_DIR, twin))) {
      fail("duplicate-page", `content/docs/${t}`, `also exists as ${twin}`);
    }
  }
  // The nine category meta.json files must not be ours to create, but must be present for the build.
  for (const cat of INTEGRATION_CATEGORIES) {
    const p = join(CONTENT_DIR, INTEGRATIONS_REL, cat, "meta.json");
    if (!existsSync(p)) {
      console.warn(`note: ${relative(process.cwd(), p)} not present yet (generated by the toolkit workstream)`);
    }
  }

  console.log(`pages checked: ${pagesChecked}, target mdx: ${actualTargets.length}, meta files checked: ${metaChecked}`);
  if (mismatches.length === 0) {
    console.log("OK: content migration verified, no mismatches.");
    return;
  }
  const w1 = Math.max(...mismatches.map((m) => m.kind.length), 4);
  const w2 = Math.min(Math.max(...mismatches.map((m) => m.where.length), 5), 110);
  console.log(`\n${"KIND".padEnd(w1)}  ${"WHERE".padEnd(w2)}  DETAIL`);
  for (const m of mismatches) {
    console.log(`${m.kind.padEnd(w1)}  ${m.where.slice(0, w2).padEnd(w2)}  ${m.detail}`);
  }
  console.log(`\n${mismatches.length} mismatch(es).`);
  process.exit(1);
}

await main();
