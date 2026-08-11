# MDX curation source

## Goal

Make Markdown and MDX files the durable source for hand-authored toolkit prose while keeping generated toolkit JSON as the application contract.

## Next agent prompt

Last updated: 2026-08-11.

Implement the slices in order. Keep the curation directory globally authoritative, preserve previous JSON only for generated enrichment, and update this section before ending a pass.

- [x] Compile checked-in MDX into `CustomSections` ([slice 1](./slices/01-compile-mdx.md)).
- [x] Apply deletion-safe authority and migrate the corpus ([slice 2](./slices/02-authority-and-migration.md)).
- [x] Include curated chunks in the secondary Markdown projection ([slice 3](./slices/03-markdown-projection.md)).

## Source contract

```text
curation/<toolkit-id>/
  chunks/*.mdx
  pages/**/*.mdx
```

Chunk files use strict frontmatter for `type`, `location`, `position`, and optional chunk metadata. An optional fully qualified `tool` field targets one tool. The file body is the authored content.

Page files use a required `type` field. Their path below `pages/` becomes `relativePath`, and their body becomes the page content.

## Invariants

- A configured curation root is authoritative for every toolkit.
- A missing toolkit directory means empty curation. Deleting the final file clears prior prose.
- A missing configured root, invalid frontmatter, malformed MDX, unsafe page path, or leftover JSON file fails the run.
- Previous generated JSON may supply summaries, examples, secret metadata, and last-known-good upstream data. It never restores authored chunks, imports, or subpages over current curation.
- The compiler preserves normalized source-path order. Renderers apply chunk priority at presentation time.
- Generated toolkit JSON remains the only input to the docs app and Markdown serializer.
- MDX source is never silently rewritten. Secret-coherence scans may warn about curated prose, but automated edits apply only to generated summaries.

## Non-goals

- Add toolkit subpage routes.
- Keep JSON or aggregate-file curation compatibility.
- Rename the unreleased `--custom-sections` option.
- Add automated writeback into source MDX.
- Modify PR #1113 in this branch; it must consume this compiler when rebased.

## Verification

- Focused source, diff, merger, workflow, and Markdown serializer tests.
- Full curation-tree compilation.
- Typecheck and lint.
- Re-extraction reproduces all authored chunks and subpages from committed toolkit artifacts.
