/**
 * Nextra -> Fumadocs content codemod.
 *
 *   bun scripts/migration/migrate-content.ts [--source=/path/to/nextra/docs]
 *
 * Reads `<source>/app/en/**` and writes:
 *   - content/docs/**            (page.mdx -> index.mdx | <name>.mdx, _meta.tsx -> meta.json)
 *   - components/pages/**        (page-local tsx/ts/css that lived beside page.mdx)
 *   - public/**                  (verbatim copy)
 *
 * It is re-runnable: it wipes what it owns first. It never touches the nine
 * `content/docs/resources/integrations/<category>/meta.json` files nor
 * `components/pages/integrations/**` (toolkit workstream).
 *
 * Follows MIGRATION_PLAN.md "Content conventions" to the letter; the MDX body
 * is kept byte-identical apart from the listed rewrites. Run
 * `bun scripts/migration/verify-content.ts` afterwards to prove it.
 */

import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { parse as parseYaml, stringify as stringifyYaml } from "yaml";
import {
  CONTENT_DIR,
  collectMdxStatements,
  type EvaluatedMeta,
  evaluateMeta,
  findLeadingH1,
  forEachMdxLine,
  INTEGRATION_CATEGORIES,
  INTEGRATIONS_REL,
  isFolder,
  isIntegrationCategoryDir,
  type MetaEntry,
  NEXTRA_COMPAT_MODULES,
  PAGE_COMPONENTS_DIR,
  readSourceTree,
  removeLines,
  removeStatementLines,
  resolveSourceRoot,
  rewriteFenceMeta,
  rewriteSpecifier,
  type SourceDir,
  stripSubpageListMetaProp,
  TARGET_ROOT,
  targetMdxRel,
  themeToFrontmatter,
} from "./lib";

const SOURCE_ROOT = resolveSourceRoot();
const APP_EN = join(SOURCE_ROOT, "app", "en");

// ---------------------------------------------------------------------------
// Report accumulators
// ---------------------------------------------------------------------------

const report = {
  pages: 0,
  metaFiles: 0,
  localFiles: 0,
  assets: 0,
  sidebarTitles: [] as { page: string; title: string; sidebarTitle: string }[],
  metaTitles: [] as { page: string; title: string; metaTitle: string }[],
  fallbackTitles: [] as { page: string; title: string }[],
  danglingKeys: [] as { meta: string; key: string }[],
  skippedMeta: [] as string[],
  categoryTitles: [] as { category: string; title: string }[],
  rewrittenImports: new Map<string, Set<string>>(),
  droppedImports: new Map<string, number>(),
  unresolvedImports: [] as { page: string; spec: string }[],
};

function note(map: Map<string, Set<string>>, key: string, value: string) {
  const set = map.get(key) ?? new Set<string>();
  set.add(value);
  map.set(key, set);
}

// ---------------------------------------------------------------------------
// Clean what we own
// ---------------------------------------------------------------------------

function cleanTargets() {
  if (existsSync(CONTENT_DIR)) {
    for (const entry of readdirSync(CONTENT_DIR, { withFileTypes: true })) {
      const p = join(CONTENT_DIR, entry.name);
      if (entry.name === "resources" && entry.isDirectory()) {
        cleanResources(p);
        continue;
      }
      rmSync(p, { recursive: true, force: true });
    }
  }
  mkdirSync(CONTENT_DIR, { recursive: true });

  if (existsSync(PAGE_COMPONENTS_DIR)) {
    for (const entry of readdirSync(PAGE_COMPONENTS_DIR)) {
      if (entry === "integrations") {
        continue;
      }
      rmSync(join(PAGE_COMPONENTS_DIR, entry), { recursive: true, force: true });
    }
  }
  mkdirSync(PAGE_COMPONENTS_DIR, { recursive: true });
}

function cleanResources(resourcesDir: string) {
  for (const entry of readdirSync(resourcesDir, { withFileTypes: true })) {
    const p = join(resourcesDir, entry.name);
    if (entry.name === "integrations" && entry.isDirectory()) {
      for (const sub of readdirSync(p, { withFileTypes: true })) {
        const sp = join(p, sub.name);
        if (sub.isDirectory() && (INTEGRATION_CATEGORIES as readonly string[]).includes(sub.name)) {
          // Keep only the generated meta.json; our MDX pages (nimble/tavily) are regenerated.
          for (const f of readdirSync(sp)) {
            if (f !== "meta.json") {
              rmSync(join(sp, f), { recursive: true, force: true });
            }
          }
          continue;
        }
        rmSync(sp, { recursive: true, force: true });
      }
      continue;
    }
    rmSync(p, { recursive: true, force: true });
  }
}

// ---------------------------------------------------------------------------
// Frontmatter
// ---------------------------------------------------------------------------

type FrontmatterInput = {
  original: Record<string, unknown>;
  h1: string | null;
  sidebarEntry: MetaEntry | undefined;
  theme: Record<string, unknown> | undefined;
  slug: string;
  pageLabel: string;
};

function buildFrontmatter(input: FrontmatterInput): Record<string, unknown> {
  const { original, h1, sidebarEntry, theme, slug, pageLabel } = input;
  const originalTitle = typeof original.title === "string" ? original.title : undefined;

  let title: string;
  let metaTitle: string | undefined;
  if (h1) {
    title = h1;
    if (originalTitle && originalTitle !== h1) {
      metaTitle = originalTitle;
      report.metaTitles.push({ page: pageLabel, title, metaTitle });
    }
  } else if (originalTitle) {
    title = originalTitle;
  } else if (sidebarEntry?.title) {
    title = sidebarEntry.title;
    report.fallbackTitles.push({ page: pageLabel, title });
  } else {
    title = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    report.fallbackTitles.push({ page: pageLabel, title });
  }

  let sidebarTitle: string | undefined;
  if (sidebarEntry?.title && sidebarEntry.title !== title) {
    sidebarTitle = sidebarEntry.title;
    report.sidebarTitles.push({ page: pageLabel, title, sidebarTitle });
  }

  const out: Record<string, unknown> = { title };
  if (metaTitle) {
    out.metaTitle = metaTitle;
  }
  if (sidebarTitle) {
    out.sidebarTitle = sidebarTitle;
  }
  if (original.description !== undefined) {
    out.description = original.description;
  }
  if (sidebarEntry?.icon) {
    out.icon = sidebarEntry.icon;
  }
  Object.assign(out, themeToFrontmatter(theme));
  for (const [k, v] of Object.entries(original)) {
    if (!(k in out) && k !== "title") {
      out[k] = v;
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
// MDX page transform
// ---------------------------------------------------------------------------

type PageContext = {
  dir: SourceDir;
  sidebarEntry: MetaEntry | undefined;
  theme: Record<string, unknown> | undefined;
};

function transformPage(ctx: PageContext): string {
  const { dir } = ctx;
  const srcPath = join(dir.abs, "page.mdx");
  const source = readFileSync(srcPath, "utf8");
  const lines = source.split("\n");
  const pageLabel = `app/en/${dir.rel ? `${dir.rel}/` : ""}page.mdx`;

  // 1. frontmatter
  let original: Record<string, unknown> = {};
  let bodyStart = 0;
  if (lines[0] === "---") {
    const end = lines.indexOf("---", 1);
    if (end > 0) {
      const parsed = parseYaml(lines.slice(1, end).join("\n"));
      original = parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>) : {};
      bodyStart = end + 1;
    }
  }
  let body = lines.slice(bodyStart);

  // 2. leading H1 -> title
  const h1 = findLeadingH1(body, 0);
  if (h1) {
    body = removeLines(body, [h1.index]);
  }
  const frontmatter = buildFrontmatter({
    original,
    h1: h1?.text ?? null,
    sidebarEntry: ctx.sidebarEntry,
    theme: ctx.theme,
    slug: dir.name,
    pageLabel,
  });

  // 3. MDX-level imports
  const statements = collectMdxStatements(body, 0).filter((s) => s.kind === "import");
  const toDrop: typeof statements = [];
  for (const stmt of statements) {
    const specMatch = /(from\s+|^import\s+)(["'])([^"']+)\2/m.exec(stmt.text);
    if (!specMatch) {
      continue;
    }
    const spec = specMatch[3];
    const rewritten = rewriteSpecifier(spec, dir.rel);
    if (rewritten === null) {
      toDrop.push(stmt);
      report.droppedImports.set(spec, (report.droppedImports.get(spec) ?? 0) + 1);
      continue;
    }
    if (rewritten !== spec) {
      note(report.rewrittenImports, spec, rewritten);
      const newText = stmt.text.replace(specMatch[0], `${specMatch[1]}${specMatch[2]}${rewritten}${specMatch[2]}`);
      const newLines = newText.split("\n");
      body.splice(stmt.start, stmt.end - stmt.start + 1, ...newLines);
    }
    if (rewritten.startsWith("@/") || rewritten.startsWith(".")) {
      report.unresolvedImports.push({ page: pageLabel, spec: rewritten });
    }
  }
  body = removeStatementLines(body, toDrop);

  // 4. fence meta + SubpageList meta prop
  const out: string[] = [];
  forEachMdxLine(body, 0, (line, _i, state) => {
    if (state.fence === "open") {
      out.push(rewriteFenceMeta(line));
    } else if (state.inFence) {
      out.push(line);
    } else {
      out.push(stripSubpageListMetaProp(line));
    }
  });
  body = out;

  while (body.length && body[0].trim() === "") {
    body.shift();
  }
  const fmText = stringifyYaml(frontmatter, { lineWidth: 0 }).trimEnd();
  return `---\n${fmText}\n---\n\n${body.join("\n")}`;
}

// ---------------------------------------------------------------------------
// meta.json
// ---------------------------------------------------------------------------

function buildPages(dir: SourceDir, meta: EvaluatedMeta): string[] {
  const pages: string[] = [];
  const listed = new Set<string>();
  const hidden: string[] = [];
  const metaLabel = `app/en/${dir.rel ? `${dir.rel}/` : ""}_meta.tsx`;
  for (const entry of meta.entries) {
    if (entry.type === "separator") {
      pages.push(`---${entry.title ?? ""}---`);
      continue;
    }
    if (entry.display === "hidden") {
      hidden.push(entry.key);
      listed.add(entry.key);
      continue;
    }
    const exists =
      (entry.key === "index" && dir.hasPage) || dir.children.some((c) => c.name === entry.key);
    if (exists) {
      pages.push(entry.key);
      listed.add(entry.key);
      continue;
    }
    if (entry.href) {
      pages.push(`[${entry.title ?? entry.key}](${entry.href})`);
      continue;
    }
    report.danglingKeys.push({ meta: metaLabel, key: entry.key });
    pages.push(entry.key);
    listed.add(entry.key);
  }
  const unlisted = dir.children.filter((c) => !listed.has(c.name));
  if (unlisted.length) {
    for (const h of hidden) {
      pages.push(`!${h}`);
    }
    pages.push("...");
  }
  return pages;
}

function writeJson(path: string, data: Record<string, unknown>) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`);
}

// ---------------------------------------------------------------------------
// Page-local components
// ---------------------------------------------------------------------------

function rewriteTsImports(code: string, ownerRel: string, meta: EvaluatedMeta | null, outDir: string): string {
  return code.replace(
    /^(import\s[\s\S]*?from\s+)(["'])([^"']+)\2(;?)/gm,
    (full, head: string, quote: string, spec: string, semi: string) => {
      if (spec === "nextra/components") {
        const names = /\{([^}]*)\}/.exec(head)?.[1] ?? "";
        return names
          .split(",")
          .map((n) => n.trim())
          .filter(Boolean)
          .map((n) => {
            const mod = NEXTRA_COMPAT_MODULES[n];
            if (!mod) {
              throw new Error(`No compat module for nextra component ${n} in ${ownerRel}`);
            }
            return `import { ${n} } from ${quote}${mod}${quote}${semi}`;
          })
          .join("\n");
      }
      if (spec === "./_meta" || spec === "./_meta.tsx") {
        if (!meta) {
          throw new Error(`${ownerRel} imports ./_meta but the folder has no _meta.tsx`);
        }
        // Emit the evaluated Nextra meta as a plain object next to the component.
        const plain: Record<string, Record<string, string>> = {};
        for (const e of meta.entries) {
          plain[e.key] = e.title ? { title: e.title } : {};
        }
        writeFileSync(
          join(outDir, "nextra-meta.ts"),
          `// Generated by scripts/migration/migrate-content.ts from app/en/${ownerRel}/_meta.tsx.\n` +
            `const meta: Record<string, { title?: string }> = ${JSON.stringify(plain, null, 2)};\n\nexport default meta;\n`
        );
        report.localFiles++;
        return `${head}${quote}./nextra-meta${quote}${semi}`;
      }
      const rewritten = rewriteSpecifier(spec, ownerRel) ?? spec;
      if (rewritten !== spec) {
        note(report.rewrittenImports, spec, rewritten);
      }
      return `${head}${quote}${rewritten}${quote}${semi}`;
    }
  );
}

function copyLocalFiles(dir: SourceDir, meta: EvaluatedMeta | null) {
  if (!dir.localFiles.length) {
    return;
  }
  const outDir = join(PAGE_COMPONENTS_DIR, dir.rel);
  mkdirSync(outDir, { recursive: true });
  for (const file of dir.localFiles) {
    const src = readFileSync(join(dir.abs, file), "utf8");
    const out = /\.tsx?$/.test(file) ? rewriteTsImports(src, dir.rel, meta, outDir) : src;
    writeFileSync(join(outDir, file), out);
    report.localFiles++;
  }
}

// ---------------------------------------------------------------------------
// Walk
// ---------------------------------------------------------------------------

const metaCache = new Map<string, EvaluatedMeta>();
async function metaFor(dir: SourceDir): Promise<EvaluatedMeta | null> {
  if (!dir.metaFile) {
    return null;
  }
  const cached = metaCache.get(dir.metaFile);
  if (cached) {
    return cached;
  }
  const evaluated = await evaluateMeta(dir.metaFile);
  metaCache.set(dir.metaFile, evaluated);
  return evaluated;
}

function mergeTheme(
  star: Record<string, unknown> | undefined,
  own: Record<string, unknown> | undefined
): Record<string, unknown> | undefined {
  if (!(star || own)) {
    return undefined;
  }
  return { ...(star ?? {}), ...(own ?? {}) };
}

async function emitDir(dir: SourceDir, parentMeta: EvaluatedMeta | null, parentEntry: MetaEntry | undefined) {
  const meta = await metaFor(dir);
  const folder = isFolder(dir);

  // Page
  if (dir.hasPage) {
    const sidebarEntry = folder ? meta?.entries.find((e) => e.key === "index") : parentEntry;
    const theme = folder
      ? mergeTheme(meta?.star?.theme, sidebarEntry?.theme)
      : mergeTheme(parentMeta?.star?.theme, parentEntry?.theme);
    const content = transformPage({ dir, sidebarEntry, theme });
    const outPath = join(CONTENT_DIR, targetMdxRel(dir));
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, content);
    report.pages++;
  } else if (dir.metaFile && !folder) {
    report.skippedMeta.push(dir.metaFile);
  }

  // meta.json
  if (folder) {
    if (dir.rel === "") {
      if (meta) {
        writeJson(join(CONTENT_DIR, "meta.json"), { pages: buildPages(dir, meta) });
        report.metaFiles++;
      }
    } else if (isIntegrationCategoryDir(dir.rel)) {
      if (parentEntry?.title) {
        report.categoryTitles.push({ category: dir.name, title: parentEntry.title });
      }
    } else {
      const data: Record<string, unknown> = {};
      if (parentEntry?.title) {
        data.title = parentEntry.title;
      }
      if (parentEntry?.icon) {
        data.icon = parentEntry.icon;
      }
      if (meta) {
        data.pages = buildPages(dir, meta);
      }
      if (Object.keys(data).length) {
        writeJson(join(CONTENT_DIR, dir.rel, "meta.json"), data);
        report.metaFiles++;
      }
    }
  }

  // Page-local components
  copyLocalFiles(dir, meta);

  // Children
  for (const child of dir.children) {
    const entry = meta?.entries.find((e) => e.key === child.name);
    await emitDir(child, meta, entry);
  }
}

// ---------------------------------------------------------------------------
// public/
// ---------------------------------------------------------------------------

function copyPublic() {
  const src = join(SOURCE_ROOT, "public");
  const dst = join(TARGET_ROOT, "public");
  rmSync(dst, { recursive: true, force: true });
  cpSync(src, dst, { recursive: true });
  const count = (d: string): number =>
    readdirSync(d, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(join(d, e.name)) : 1), 0);
  report.assets = count(dst);
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Source: ${APP_EN}`);
  console.log(`Target: ${TARGET_ROOT}`);
  cleanTargets();
  const tree = readSourceTree(SOURCE_ROOT);
  await emitDir(tree, null, undefined);
  copyPublic();

  console.log("\n== Summary ==");
  console.log(`pages written:        ${report.pages}`);
  console.log(`meta.json written:    ${report.metaFiles}`);
  console.log(`page-local files:     ${report.localFiles}`);
  console.log(`public assets copied: ${report.assets}`);

  console.log(`\n== sidebarTitle set (${report.sidebarTitles.length}) ==`);
  for (const s of report.sidebarTitles) {
    console.log(`  ${s.page}: title=${JSON.stringify(s.title)} sidebarTitle=${JSON.stringify(s.sidebarTitle)}`);
  }
  console.log(`\n== metaTitle kept (${report.metaTitles.length}) ==`);
  for (const s of report.metaTitles) {
    console.log(`  ${s.page}: title=${JSON.stringify(s.title)} metaTitle=${JSON.stringify(s.metaTitle)}`);
  }
  console.log(`\n== title fallbacks (no H1, no frontmatter title) (${report.fallbackTitles.length}) ==`);
  for (const s of report.fallbackTitles) {
    console.log(`  ${s.page}: ${JSON.stringify(s.title)}`);
  }
  console.log(`\n== category titles NOT written (toolkit workstream owns these meta.json) ==`);
  for (const c of report.categoryTitles) {
    console.log(`  ${INTEGRATIONS_REL}/${c.category}: ${JSON.stringify(c.title)}`);
  }
  if (report.danglingKeys.length) {
    console.log("\n== dangling _meta keys (no page/folder, no href) ==");
    for (const d of report.danglingKeys) {
      console.log(`  ${d.meta}: ${d.key}`);
    }
  }
  if (report.skippedMeta.length) {
    console.log("\n== _meta.tsx on leaf pages (ignored) ==");
    for (const s of report.skippedMeta) {
      console.log(`  ${s}`);
    }
  }
  console.log("\n== import rewrites ==");
  for (const [from, tos] of [...report.rewrittenImports].sort()) {
    console.log(`  ${from} -> ${[...tos].join(", ")}`);
  }
  console.log("\n== dropped imports ==");
  for (const [spec, n] of report.droppedImports) {
    console.log(`  ${spec} (${n})`);
  }
  console.log("\n== MDX-level local imports remaining (must resolve in target) ==");
  const specs = new Map<string, string[]>();
  for (const u of report.unresolvedImports) {
    specs.set(u.spec, [...(specs.get(u.spec) ?? []), basename(dirname(u.page))]);
  }
  for (const [spec, pages] of [...specs].sort()) {
    console.log(`  ${spec}  (${pages.length} page${pages.length === 1 ? "" : "s"})`);
  }
}

await main();
