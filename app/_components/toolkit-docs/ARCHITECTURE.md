# Toolkit Docs Components Architecture

This document describes how the toolkit documentation components work, including data flow, rendering, and static HTML generation.

## Overview

The toolkit docs system renders documentation pages for MCP Server integrations (Gmail, Slack, GitHub, etc.) from JSON data files. It supports:

- Static generation at build time
- Dynamic preview mode for testing
- Custom documentation chunks injection
- Tool selection and filtering

## Directory Structure

```
app/
├── _components/toolkit-docs/          # Shared components
│   ├── components/                    # UI components
│   │   ├── available-tools-table.tsx  # Tools listing with search/filter
│   │   ├── data-table.tsx             # Generic data table
│   │   ├── documentation-chunk-renderer.tsx  # MDX chunk renderer
│   │   ├── dynamic-code-block.tsx     # Language-switching code blocks
│   │   ├── parameters-table.tsx       # Tool parameters display
│   │   ├── scopes-display.tsx         # OAuth scopes display
│   │   ├── tool-section.tsx           # Individual tool section
│   │   ├── toolkit-header.tsx         # Page header with badges
│   │   └── toolkit-page.tsx           # Main page layout
│   ├── types/index.ts                 # TypeScript type definitions
│   ├── constants.ts                   # Shared constants
│   └── index.ts                       # Public exports
├── _lib/
│   ├── toolkit-data.ts                # JSON data loading
│   └── toolkit-static-params.ts       # Static params generation
├── api/
│   ├── toolkit-data/[toolkitId]/      # Toolkit data API
│   └── markdown/[[...slug]]/          # Markdown serving API
└── en/resources/integrations/
    ├── _lib/toolkit-docs-page.tsx     # Page factory function
    ├── [category]/[toolkitId]/        # Dynamic route pages
    └── preview/[toolkitId]/           # Preview mode pages
```

## Data Flow

### 1. JSON Data Files

Toolkit data is stored in `data/toolkits/`:

```
data/toolkits/
├── index.json           # Index of all toolkits
├── gmail.json           # Gmail toolkit data
├── slack.json           # Slack toolkit data
└── ...
```

Each toolkit JSON file contains:

```typescript
interface ToolkitData {
  id: string;                    // e.g., "gmail"
  name: string;                  // e.g., "Gmail"
  version: string;               // e.g., "1.0.0"
  description: string;           // Toolkit description
  category: string;              // e.g., "productivity"
  auth?: {                       // Authentication info
    type: string;
    providerId: string;
    scopes: string[];
  };
  tools: Tool[];                 // Array of tools
  documentationChunks?: DocumentationChunk[];  // Custom docs
}
```

### 2. Data Loading (`toolkit-data.ts`)

```typescript
// Load a single toolkit
const data = await readToolkitData("gmail");

// Load the index
const index = await readToolkitIndex();
```

Key features:
- **Normalization**: Toolkit IDs are normalized (lowercase, alphanumeric only)
- **Validation**: Basic runtime validation of JSON structure
- **Error handling**: Returns `null` on failure (file not found, parse error)

### 3. Static Params Generation (`toolkit-static-params.ts`)

At build time, Next.js calls `generateStaticParams()` to get all toolkit routes:

```typescript
export async function getToolkitStaticParamsForCategory(
  category: IntegrationCategory
): Promise<Array<{ toolkitId: string }>> {
  const routes = await listToolkitRoutes();
  return routes
    .filter((route) => route.category === category)
    .map(({ slug }) => ({ toolkitId: slug }));
}
```

This enables static HTML generation for all toolkit pages.

## Component Architecture

### ToolkitPage (Main Layout)

The root component that orchestrates the page:

```tsx
<ToolkitPage data={toolkitData}>
  {/* Renders: */}
  {/* - ToolkitHeader (name, badges, description) */}
  {/* - AvailableToolsTable (searchable tool list) */}
  {/* - ToolSection for each tool */}
  {/* - Table of Contents sidebar */}
</ToolkitPage>
```

Features:
- Intersection Observer for active section tracking
- Tool selection state management
- Responsive layout with sticky sidebar

### ToolSection (Individual Tool)

Renders a single tool with all its details:

```tsx
<ToolSection tool={tool} showSelection={true}>
  {/* Renders: */}
  {/* - Tool header with copy button */}
  {/* - Description (with custom chunks) */}
  {/* - Parameters table */}
  {/* - Requirements (secrets, OAuth) */}
  {/* - Output schema */}
  {/* - Code example */}
</ToolSection>
```

### DocumentationChunkRenderer (Custom Content)

Allows injecting custom documentation at specific locations:

```tsx
<DocumentationChunkRenderer
  chunks={tool.documentationChunks}
  location="parameters"    // Where to inject
  position="after"         // before | after | replace
/>
```

Supported chunk types:
- `markdown`: Raw MDX content
- `callout`: Callout boxes (info, warning, error)
- `code`: Code blocks

The renderer:
1. Filters chunks by location and position
2. Compiles MDX at runtime using `@mdx-js/mdx`
3. Caches compiled components (LRU, max 100 entries)

### DynamicCodeBlock (Code Examples)

Shows code examples with language switching:

```tsx
<DynamicCodeBlock codeExample={tool.codeExample} />
```

Features:
- Python/JavaScript toggle
- Theme-aware syntax highlighting
- Copy to clipboard

## Static HTML Generation

### Build Process

1. **Index Generation**: `toolkit-docs-generator` creates JSON files in `data/toolkits/`
2. **Static Params**: Next.js calls `generateStaticParams()` for each category
3. **Page Rendering**: Each toolkit page is pre-rendered to HTML
4. **Markdown Export**: Static markdown files are generated in `public/toolkit-markdown/`

### Page Factory (`toolkit-docs-page.tsx`)

Creates page components for each category:

```typescript
export function createToolkitDocsPage(category: IntegrationCategory) {
  return {
    generateMetadata,      // SEO metadata
    generateStaticParams,  // Static routes
    Page,                  // React component
  };
}
```

Each category folder uses this factory:

```typescript
// app/en/resources/integrations/productivity/[toolkitId]/page-impl.tsx
const { generateMetadata, generateStaticParams, Page } = 
  createToolkitDocsPage("productivity");

export { generateMetadata, generateStaticParams };
export default Page;
```

### Dynamic Route Configuration

```typescript
// Disable dynamic params - only pre-rendered routes allowed
export const dynamicParams = false;
```

This ensures:
- All valid routes are generated at build time
- Invalid toolkit IDs return 404
- No server-side rendering at runtime

## API Routes

### `/api/toolkit-data/[toolkitId]`

Returns toolkit JSON data:

```
GET /api/toolkit-data/gmail
→ { id: "gmail", name: "Gmail", tools: [...] }
```

Used by:
- Preview mode for live data loading
- Client-side data fetching (if needed)

### `/api/markdown/[[...slug]]`

Serves markdown content for any page:

```
GET /api/markdown/en/resources/integrations/productivity/gmail.md
→ Raw markdown content
```

Features:
- Path sanitization (prevents traversal attacks)
- Falls back to MDX files if toolkit markdown not found
- Cache headers for performance

## Preview Mode

The preview system allows testing toolkit docs before publishing:

```
/en/resources/integrations/preview/[toolkitId]
```

It:
1. Fetches data from `/api/toolkit-data/[toolkitId]`
2. Renders the same components as production
3. Redirects to the actual page if toolkit is published

## Performance Considerations

### Caching

- **MDX Cache**: LRU cache (max 100 entries) for compiled MDX components
- **HTTP Cache**: API routes return `Cache-Control` headers
- **Static Generation**: Pages are pre-rendered at build time

### Optimizations

- **Intersection Observer**: Lazy updates for active section tracking
- **Pagination**: Tools table paginates large lists (25/50/100/200 per page)
- **Memoization**: Heavy computations wrapped in `useMemo`

## Type Safety

All components use TypeScript with strict typing:

```typescript
// types/index.ts
export interface ToolkitData { ... }
export interface Tool { ... }
export interface DocumentationChunk { ... }
export interface ToolSectionProps { ... }
```

Runtime validation in `toolkit-data.ts` ensures JSON matches expected structure.

## Error Handling

- **Missing Data**: Components handle `null`/`undefined` gracefully
- **Invalid Routes**: `notFound()` returns 404 for unknown toolkits
- **MDX Errors**: `DocumentationChunkRenderer` shows error message on parse failure
- **API Errors**: Routes return appropriate HTTP status codes
