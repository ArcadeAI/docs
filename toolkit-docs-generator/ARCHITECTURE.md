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

- The app loads JSON from `data/toolkits/`.
- Toolkit pages are statically generated using those files.
- Custom documentation chunks are rendered as MDX in the UI.

If you need HTML output, add a separate build step in the app. The generator intentionally avoids HTML to keep the pipeline deterministic.

## Static page generation

Static generation happens in the app, not in this generator.

The generator only provides JSON and markdown content. The app turns those into static HTML during its build.

## Key files

- `src/sources/engine-api.ts` — tool metadata from Engine API
- `src/sources/toolkit-data-source.ts` — unified data source
- `src/merger/data-merger.ts` — merge pipeline
- `src/generator/json-generator.ts` — output writer
- `src/generator/output-verifier.ts` — output validation
- `src/diff/toolkit-diff.ts` — change detection
- `src/cli/index.ts` — CLI entry point
