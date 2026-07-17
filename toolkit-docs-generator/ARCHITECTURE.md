# Toolkit docs generator architecture

This document explains how the toolkit docs generator assembles JSON output and how that output is rendered in the docs site.

## Overview

The generator builds toolkit JSON files from multiple sources and writes them to an output directory. The docs site reads these JSON files and renders them into pages at build time.

The generator does **not** render HTML. It produces structured JSON and optional markdown snippets that the app renders later.

## Data flow

1. Fetch tool definitions from the Engine API or Arcade API.
2. Load toolkit metadata from the design system or mock metadata.
3. Load custom sections from JSON files (optional).
4. Merge all data into `MergedToolkit` objects.
5. Write a JSON file per toolkit and an `index.json` file.
6. Optionally verify output and compute diffs.

## Core components

### Data sources

- `EngineApiSource` fetches tool metadata from the Engine API.
- `ArcadeApiSource` fetches tool metadata from the Arcade API.
- `DesignSystemMetadataSource` loads toolkit metadata from `@arcadeai/design-system`.
- `CustomSectionsFileSource` loads custom documentation chunks from a JSON file.
- `CombinedToolkitDataSource` merges tools and metadata into one interface.

### Merger

`DataMerger` creates `MergedToolkit` objects by combining tools, metadata, and custom sections.

It also:
- Computes tool signatures for change detection.
- Generates optional tool examples and summaries with LLMs.
- Tracks warnings and failed tools.

### Generator

`JsonGenerator` writes the final output:

- `<toolkitId>.json` for each toolkit
- `index.json` for lookup and metadata

It can also verify output consistency with `OutputVerifier`.

### Diffing

`ToolkitDiff` compares new output to previous output. It reports:
- new toolkits
- removed toolkits
- modified toolkits
- version-only changes

## Rendering in the docs site

The generator output is consumed by the Next.js app:

- The app loads JSON from `toolkit-docs-generator/data/toolkits/`.
- `generateStaticParams` enumerates the toolkit routes and disables unknown dynamic parameters.
- Custom documentation chunks are rendered as MDX in the UI.

If you need HTML output, add a separate build step in the app. The generator intentionally avoids HTML to keep the pipeline deterministic.

## Vercel build

The generator does not run during a Vercel build. The generation workflow commits
the JSON files and navigation changes through a pull request. Vercel then runs the
root `pnpm build` command and compiles the committed files with Next.js.

`app/_lib/toolkit-static-params.ts` enumerates routes from `index.json` and the
per-toolkit files. `app/_lib/toolkit-data.ts` reads the same files for page
rendering and the `/api/toolkit-data/[toolkitId]` route. The root layout reads
request headers, so Vercel reports the docs routes as dynamic even though the
toolkit parameter set is fixed at build time.

## Search indexing

Search uses an external Algolia crawler. There is no Pagefind or local search
index build step in this repository. After deployment, the crawler indexes the
rendered site. `app/_components/algolia-search.tsx` queries that index with the
public, read-only values configured through these Vercel environment variables:

- `NEXT_PUBLIC_ALGOLIA_APP_ID`
- `NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY`
- `NEXT_PUBLIC_ALGOLIA_INDEX_NAME`

## Key files

- `src/sources/engine-api.ts` — tool metadata from Engine API
- `src/sources/toolkit-data-source.ts` — unified data source
- `src/merger/data-merger.ts` — merge pipeline
- `src/generator/json-generator.ts` — output writer
- `src/generator/output-verifier.ts` — output validation
- `src/diff/toolkit-diff.ts` — change detection
- `src/cli/index.ts` — CLI entry point
