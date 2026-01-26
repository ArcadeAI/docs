# Toolkit Docs Generator - Project Planning

> A Node.js/TypeScript CLI tool for generating toolkit documentation JSON from multiple data sources.

## Executive Summary

This tool replaces the Python-based `make_toolkit_docs` with a TypeScript implementation that:
- Fetches tool data from the Engine API
- Merges with Design System metadata
- Generates documentation JSON files
- Uses LLM for example inputs and toolkit summaries
- Provides easy-to-swap data source abstractions

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              CLI ENTRY POINT                                    │
│                         npx toolkit-docs-generator                              │
└─────────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           DATA SOURCE LAYER                                     │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐             │
│  │  Engine API      │  │  Design System   │  │  Custom Sections │             │
│  │  Fetcher         │  │  Fetcher         │  │  Loader          │             │
│  │                  │  │                  │  │                  │             │
│  │  IToolDataSource │  │  IMetadataSource │  │  ICustomSections │             │
│  └────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘             │
│           │                     │                     │                        │
│           └─────────────────────┼─────────────────────┘                        │
│                                 │                                              │
└─────────────────────────────────┼──────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           DATA MERGER                                           │
│                                                                                 │
│   • Combines data from all sources                                             │
│   • Normalizes IDs and handles case sensitivity                                │
│   • Computes derived fields (all_scopes, auth_type)                           │
│   • Validates merged data                                                      │
└─────────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           LLM SERVICE                                           │
│                                                                                 │
│   • Generate toolkit summaries (new toolkits)                                  │
│   • Generate example inputs per tool                                           │
│   • Configurable providers (OpenAI, Anthropic, etc.)                          │
└─────────────────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           JSON GENERATOR                                        │
│                                                                                 │
│   • Outputs per-toolkit JSON files                                             │
│   • Generates index file                                                       │
│   • Validates output schema                                                    │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Design Decisions

### 1. Data Source Abstraction (Provider Pattern)

The tool uses interfaces to abstract data sources, making it easy to swap implementations:

```typescript
// Abstract interface - can be implemented by different sources
interface IToolDataSource {
  fetchToolsByToolkit(toolkitId: string): Promise<ToolDefinition[]>;
  fetchAllTools(): Promise<ToolDefinition[]>;
}

// Engine API implementation
class EngineApiSource implements IToolDataSource { ... }

// JSON file implementation (for testing or offline use)
class JsonFileSource implements IToolDataSource { ... }

// Future: Single source when Engine supports metadata
class EnhancedEngineSource implements IToolDataSource { ... }
```

### 2. Functional Programming Approach

- Pure functions for data transformation
- Immutable data structures
- Composition over inheritance
- Pipeline pattern for data processing

### 3. Performance Considerations

- Parallel fetching of independent data sources
- Streaming JSON output for large datasets
- Caching layer for repeated requests
- Batch LLM requests with concurrency control

### 4. Testing Philosophy (CRITICAL)

**Avoid mocks whenever possible.** Use in-memory implementations instead.

```typescript
// ✅ GOOD: Use real implementation with test data
const source = new InMemoryToolDataSource(testFixtures.tools);
const result = await source.fetchToolsByToolkit('Github');
expect(result).toHaveLength(5);

// ❌ BAD: Don't mock the interface
const mockSource = vi.fn().mockResolvedValue(tools);
```

**Testing Rules:**
- Use `InMemoryToolDataSource`, `InMemoryMetadataSource`, `InMemoryCustomSectionsSource` for testing
- Store realistic test fixtures in `tests/fixtures/`
- Focus on behavior testing, not implementation details
- Aim for >80% code coverage
- Only mock external HTTP calls when absolutely necessary

### 5. CLI Input Format

The CLI accepts providers with optional versions:

```bash
# Single provider with version
toolkit-docs-generator generate --providers "Github:1.0.0"

# Multiple providers with versions
toolkit-docs-generator generate --providers "Github:1.0.0,Slack:2.1.0,Linear:1.5.0"

# Provider without version (uses latest)
toolkit-docs-generator generate --providers "Github,Slack"

# All providers
toolkit-docs-generator generate-all
```

### 6. Verification Commands

Before committing, ALWAYS run:

```bash
pnpm lint        # Check code style
pnpm typecheck   # Verify types
pnpm test        # Run all tests
pnpm check       # Run all checks (lint + typecheck + test)
```

---

## Detailed Tickets

### Phase 1: Foundation

#### TICKET-001: Project Setup and Configuration

**Priority**: P0 (Blocker)
**Estimate**: 2 hours
**Dependencies**: None

**Description**:
Initialize the TypeScript project with proper tooling and configuration.

**Acceptance Criteria**:
- [ ] Initialize Node.js project with `pnpm`
- [ ] Configure TypeScript with strict mode
- [ ] Set up ESLint with functional programming rules
- [ ] Configure Prettier for code formatting
- [ ] Add Jest for testing
- [ ] Create folder structure:
  ```
  toolkit-docs-generator/
  ├── src/
  │   ├── cli/           # CLI commands and interface
  │   ├── sources/       # Data source implementations
  │   ├── merger/        # Data merging logic
  │   ├── llm/           # LLM service
  │   ├── generator/     # JSON generation
  │   ├── types/         # TypeScript type definitions
  │   └── utils/         # Shared utilities
  ├── tests/
  ├── package.json
  ├── tsconfig.json
  └── README.md
  ```
- [ ] Add `bin` entry for CLI executable
- [ ] Set up build pipeline with `tsup` or `esbuild`

**Technical Notes**:
```json
{
  "devDependencies": {
    "typescript": "^5.7.0",
    "@types/node": "^22.0.0",
    "tsup": "^8.0.0",
    "eslint": "^9.0.0",
    "prettier": "^3.4.0",
    "jest": "^30.0.0",
    "@typescript-eslint/eslint-plugin": "^8.0.0"
  },
  "dependencies": {
    "commander": "^13.0.0",
    "zod": "^3.24.0",
    "openai": "^4.80.0",
    "chalk": "^5.4.0",
    "ora": "^8.2.0"
  }
}
```

---

#### TICKET-002: Define Core Type Definitions

**Priority**: P0 (Blocker)
**Estimate**: 3 hours
**Dependencies**: TICKET-001

**Description**:
Create comprehensive TypeScript type definitions for all data structures used throughout the system.

**Acceptance Criteria**:
- [ ] Define `ToolDefinition` type matching Engine API response
- [ ] Define `ToolkitMetadata` type matching Design System
- [ ] Define `MergedToolkit` type for output format
- [ ] Define `MergedTool` type with all fields
- [ ] Define `DocumentationChunk` type for custom content
- [ ] Define `ExampleInput` type for LLM-generated inputs
- [ ] Add Zod schemas for runtime validation
- [ ] Export all types from `types/index.ts`

**Type Definitions**:

```typescript
// src/types/tool.ts
import { z } from 'zod';

export const ToolParameterSchema = z.object({
  name: z.string(),
  type: z.string(),
  innerType: z.string().optional(),
  required: z.boolean(),
  description: z.string().nullable(),
  enum: z.array(z.string()).nullable(),
  inferrable: z.boolean().default(true),
});

export const ToolAuthSchema = z.object({
  providerId: z.string().nullable(),
  providerType: z.string(),
  scopes: z.array(z.string()),
});

export const ToolOutputSchema = z.object({
  type: z.string(),
  description: z.string().nullable(),
});

export const ToolDefinitionSchema = z.object({
  name: z.string(),
  qualifiedName: z.string(),
  fullyQualifiedName: z.string(),
  description: z.string().nullable(),
  parameters: z.array(ToolParameterSchema),
  auth: ToolAuthSchema.nullable(),
  secrets: z.array(z.string()),
  output: ToolOutputSchema.nullable(),
});

export type ToolParameter = z.infer<typeof ToolParameterSchema>;
export type ToolAuth = z.infer<typeof ToolAuthSchema>;
export type ToolOutput = z.infer<typeof ToolOutputSchema>;
export type ToolDefinition = z.infer<typeof ToolDefinitionSchema>;
```

```typescript
// src/types/metadata.ts
export const ToolkitMetadataSchema = z.object({
  id: z.string(),
  label: z.string(),
  category: z.enum([
    'productivity', 'social', 'development', 'entertainment',
    'search', 'payments', 'sales', 'databases', 'customer-support'
  ]),
  iconUrl: z.string(),
  isBYOC: z.boolean(),
  isPro: z.boolean(),
  type: z.enum(['arcade', 'arcade_starter', 'verified', 'community', 'auth']),
  docsLink: z.string(),
  isComingSoon: z.boolean(),
  isHidden: z.boolean(),
});

export type ToolkitMetadata = z.infer<typeof ToolkitMetadataSchema>;
```

```typescript
// src/types/documentation.ts
export const DocumentationChunkSchema = z.object({
  type: z.enum(['callout', 'markdown', 'code', 'warning', 'info']),
  location: z.enum(['description', 'parameters', 'auth', 'secrets', 'output']),
  position: z.enum(['before', 'after', 'replace']),
  content: z.string(),
});

export type DocumentationChunk = z.infer<typeof DocumentationChunkSchema>;
```

```typescript
// src/types/merged.ts
export const MergedToolSchema = z.object({
  name: z.string(),
  qualifiedName: z.string(),
  fullyQualifiedName: z.string(),
  description: z.string().nullable(),
  parameters: z.array(ToolParameterSchema),
  auth: ToolAuthSchema.nullable(),
  secrets: z.array(z.string()),
  output: ToolOutputSchema.nullable(),
  documentationChunks: z.array(DocumentationChunkSchema).default([]),
  exampleInputs: z.record(z.unknown()).optional(),
});

export const MergedToolkitSchema = z.object({
  id: z.string(),
  label: z.string(),
  version: z.string(),
  description: z.string().nullable(),
  summary: z.string().optional(), // LLM-generated
  metadata: ToolkitMetadataSchema.omit({ id: true, label: true }),
  auth: z.object({
    type: z.enum(['oauth2', 'api_key', 'none']),
    providerId: z.string().nullable(),
    allScopes: z.array(z.string()),
  }).nullable(),
  tools: z.array(MergedToolSchema),
  documentationChunks: z.array(DocumentationChunkSchema).default([]),
  customImports: z.array(z.string()).default([]),
  subPages: z.array(z.string()).default([]),
});

export type MergedTool = z.infer<typeof MergedToolSchema>;
export type MergedToolkit = z.infer<typeof MergedToolkitSchema>;
```

---

#### TICKET-003: Implement Data Source Interfaces

**Priority**: P0 (Blocker)
**Estimate**: 2 hours
**Dependencies**: TICKET-002

**Description**:
Define the abstract interfaces for all data sources. These interfaces enable the provider pattern for easy source swapping.

**Acceptance Criteria**:
- [ ] Create `IToolDataSource` interface for tool data
- [ ] Create `IMetadataSource` interface for toolkit metadata
- [ ] Create `ICustomSectionsSource` interface for extracted docs content
- [ ] Define error types for each source
- [ ] Add JSDoc documentation

**Interface Definitions**:

```typescript
// src/sources/interfaces.ts

export interface FetchOptions {
  toolkitId?: string;
  version?: string;
  providerId?: string;
}

export interface IToolDataSource {
  /**
   * Fetch tools for a specific toolkit
   */
  fetchToolsByToolkit(toolkitId: string): Promise<ToolDefinition[]>;
  
  /**
   * Fetch all tools from the source
   */
  fetchAllTools(options?: FetchOptions): Promise<ToolDefinition[]>;
  
  /**
   * Check if the source is available
   */
  isAvailable(): Promise<boolean>;
}

export interface IMetadataSource {
  /**
   * Get metadata for a specific toolkit
   */
  getToolkitMetadata(toolkitId: string): Promise<ToolkitMetadata | null>;
  
  /**
   * Get all toolkit metadata
   */
  getAllToolkitsMetadata(): Promise<ToolkitMetadata[]>;
  
  /**
   * List all available toolkit IDs
   */
  listToolkitIds(): Promise<string[]>;
}

export interface ICustomSectionsSource {
  /**
   * Get custom documentation sections for a toolkit
   */
  getCustomSections(toolkitId: string): Promise<CustomSections | null>;
  
  /**
   * Get all custom sections
   */
  getAllCustomSections(): Promise<Record<string, CustomSections>>;
}

export interface CustomSections {
  documentationChunks: DocumentationChunk[];
  customImports: string[];
  subPages: string[];
  toolChunks: Record<string, DocumentationChunk[]>; // Per-tool chunks
}
```

---

### Phase 2: Data Sources Implementation

#### TICKET-004: Implement Engine API Data Source

**Priority**: P0 (Blocker)
**Estimate**: 4 hours
**Dependencies**: TICKET-003

**Description**:
Implement the Engine API fetcher that retrieves tool definitions from the Arcade Engine API.

**Acceptance Criteria**:
- [ ] Implement `EngineApiSource` class
- [ ] Support authentication with API key
- [ ] Handle pagination (if needed)
- [ ] Transform API response to internal types
- [ ] Add retry logic with exponential backoff
- [ ] Add request caching (optional, configurable)
- [ ] Handle rate limiting gracefully
- [ ] Add comprehensive error handling
- [ ] Write unit tests with mocked API

**Implementation**:

```typescript
// src/sources/engine-api.ts
import { z } from 'zod';

export interface EngineApiConfig {
  baseUrl: string;
  apiKey: string;
  timeout?: number;
  retries?: number;
}

// API response schema (matches Engine API format)
const ApiToolParameterSchema = z.object({
  name: z.string(),
  required: z.boolean(),
  description: z.string().nullable(),
  value_schema: z.object({
    val_type: z.string(),
    inner_val_type: z.string().nullable(),
    enum: z.array(z.string()).nullable(),
  }),
  inferrable: z.boolean().default(true),
});

const ApiToolSchema = z.object({
  fully_qualified_name: z.string(),
  qualified_name: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  toolkit: z.object({
    name: z.string(),
    version: z.string(),
    description: z.string().nullable(),
  }),
  input: z.object({
    parameters: z.array(ApiToolParameterSchema),
  }),
  output: z.object({
    available_modes: z.array(z.string()).optional(),
    description: z.string().nullable(),
    value_schema: z.object({
      val_type: z.string(),
    }).nullable(),
  }).nullable(),
  requirements: z.object({
    authorization: z.object({
      id: z.string(),
      provider_id: z.string().nullable(),
      provider_type: z.string(),
      scopes: z.array(z.string()).nullable(),
    }).nullable(),
    secrets: z.array(z.string()).nullable(),
  }).nullable(),
});

export class EngineApiSource implements IToolDataSource {
  private readonly config: Required<EngineApiConfig>;
  private cache: Map<string, ToolDefinition[]> = new Map();

  constructor(config: EngineApiConfig) {
    this.config = {
      timeout: 30000,
      retries: 3,
      ...config,
    };
  }

  async fetchAllTools(options?: FetchOptions): Promise<ToolDefinition[]> {
    const url = new URL('/v1/tools', this.config.baseUrl);
    
    if (options?.toolkitId) {
      url.searchParams.set('toolkit', options.toolkitId);
    }
    if (options?.version) {
      url.searchParams.set('version', options.version);
    }
    if (options?.providerId) {
      url.searchParams.set('provider', options.providerId);
    }

    const response = await this.fetchWithRetry(url.toString());
    const data = await response.json();
    
    // Handle paginated response
    const tools = this.collectAllPages(data);
    return tools.map(this.transformTool);
  }

  async fetchToolsByToolkit(toolkitId: string): Promise<ToolDefinition[]> {
    const cacheKey = `toolkit:${toolkitId}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const tools = await this.fetchAllTools({ toolkitId });
    this.cache.set(cacheKey, tools);
    return tools;
  }

  async isAvailable(): Promise<boolean> {
    try {
      const response = await fetch(`${this.config.baseUrl}/health`, {
        signal: AbortSignal.timeout(5000),
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  private transformTool(apiTool: z.infer<typeof ApiToolSchema>): ToolDefinition {
    return {
      name: apiTool.name,
      qualifiedName: apiTool.qualified_name,
      fullyQualifiedName: apiTool.fully_qualified_name,
      description: apiTool.description,
      parameters: apiTool.input.parameters.map(p => ({
        name: p.name,
        type: p.value_schema.val_type,
        innerType: p.value_schema.inner_val_type ?? undefined,
        required: p.required,
        description: p.description,
        enum: p.value_schema.enum,
        inferrable: p.inferrable,
      })),
      auth: apiTool.requirements?.authorization ? {
        providerId: apiTool.requirements.authorization.provider_id,
        providerType: apiTool.requirements.authorization.provider_type,
        scopes: apiTool.requirements.authorization.scopes ?? [],
      } : null,
      secrets: apiTool.requirements?.secrets ?? [],
      output: apiTool.output ? {
        type: apiTool.output.value_schema?.val_type ?? 'unknown',
        description: apiTool.output.description,
      } : null,
    };
  }

  private async fetchWithRetry(url: string, attempt = 0): Promise<Response> {
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
        },
        signal: AbortSignal.timeout(this.config.timeout),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      return response;
    } catch (error) {
      if (attempt < this.config.retries) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        return this.fetchWithRetry(url, attempt + 1);
      }
      throw error;
    }
  }
}
```

---

#### TICKET-005: Implement Design System Metadata Source

**Priority**: P0 (Blocker)
**Estimate**: 3 hours
**Dependencies**: TICKET-003

**Description**:
Implement the metadata source that reads from the `@arcadeai/design-system` npm package, which is already a dependency in the docs project.

**Acceptance Criteria**:
- [ ] Implement `DesignSystemSource` class
- [ ] Import `TOOLKIT_CATALOGUE` from design system
- [ ] Normalize toolkit IDs for matching
- [ ] Handle missing toolkits gracefully
- [ ] Add fallback metadata for unknown toolkits
- [ ] Write unit tests

**Implementation**:

```typescript
// src/sources/design-system.ts
import { TOOLKIT_CATALOGUE, TOOLKITS, type Toolkit } from '@arcadeai/design-system';

export class DesignSystemSource implements IMetadataSource {
  private readonly catalogue: Record<string, Toolkit>;
  private readonly normalizedIndex: Map<string, Toolkit>;

  constructor() {
    this.catalogue = TOOLKIT_CATALOGUE;
    this.normalizedIndex = this.buildNormalizedIndex();
  }

  private buildNormalizedIndex(): Map<string, Toolkit> {
    const index = new Map<string, Toolkit>();
    for (const toolkit of Object.values(this.catalogue)) {
      const normalizedId = this.normalizeId(toolkit.id);
      index.set(normalizedId, toolkit);
    }
    return index;
  }

  private normalizeId(id: string): string {
    return id.toLowerCase().replace(/[-_]/g, '');
  }

  async getToolkitMetadata(toolkitId: string): Promise<ToolkitMetadata | null> {
    // Try exact match first
    const toolkit = this.catalogue[toolkitId];
    if (toolkit) {
      return this.transformMetadata(toolkit);
    }

    // Try normalized match
    const normalizedId = this.normalizeId(toolkitId);
    const normalizedToolkit = this.normalizedIndex.get(normalizedId);
    if (normalizedToolkit) {
      return this.transformMetadata(normalizedToolkit);
    }

    return null;
  }

  async getAllToolkitsMetadata(): Promise<ToolkitMetadata[]> {
    return Object.values(this.catalogue).map(this.transformMetadata);
  }

  async listToolkitIds(): Promise<string[]> {
    return Object.keys(this.catalogue);
  }

  private transformMetadata(toolkit: Toolkit): ToolkitMetadata {
    return {
      id: toolkit.id,
      label: toolkit.label,
      category: toolkit.category,
      iconUrl: toolkit.publicIconUrl,
      isBYOC: toolkit.isBYOC,
      isPro: toolkit.isPro,
      type: toolkit.type,
      docsLink: toolkit.docsLink,
      isComingSoon: toolkit.isComingSoon,
      isHidden: toolkit.isHidden,
    };
  }
}

// Factory function for functional approach
export const createDesignSystemSource = (): IMetadataSource => {
  return new DesignSystemSource();
};
```

---

#### TICKET-006: Implement Custom Sections Source

**Priority**: P1 (High)
**Estimate**: 3 hours
**Dependencies**: TICKET-003

**Description**:
Implement the custom sections source that loads extracted documentation chunks from the JSON file produced by the extraction script (TOO-313).

**Acceptance Criteria**:
- [ ] Implement `CustomSectionsSource` class
- [ ] Load from JSON file
- [ ] Support file watching for development
- [ ] Handle missing file gracefully
- [ ] Validate loaded data with Zod
- [ ] Write unit tests

**Implementation**:

```typescript
// src/sources/custom-sections.ts
import { readFile, access } from 'fs/promises';
import { watch, type FSWatcher } from 'fs';
import { z } from 'zod';

const CustomSectionsFileSchema = z.record(
  z.object({
    documentationChunks: z.array(DocumentationChunkSchema).default([]),
    customImports: z.array(z.string()).default([]),
    subPages: z.array(z.string()).default([]),
    toolChunks: z.record(z.array(DocumentationChunkSchema)).default({}),
  })
);

export interface CustomSectionsConfig {
  filePath: string;
  watchChanges?: boolean;
}

export class CustomSectionsSource implements ICustomSectionsSource {
  private data: Record<string, CustomSections> = {};
  private watcher?: FSWatcher;
  private readonly config: Required<CustomSectionsConfig>;

  constructor(config: CustomSectionsConfig) {
    this.config = {
      watchChanges: false,
      ...config,
    };
  }

  async initialize(): Promise<void> {
    await this.loadData();

    if (this.config.watchChanges) {
      this.watcher = watch(this.config.filePath, async () => {
        await this.loadData();
      });
    }
  }

  async destroy(): Promise<void> {
    this.watcher?.close();
  }

  private async loadData(): Promise<void> {
    try {
      await access(this.config.filePath);
      const content = await readFile(this.config.filePath, 'utf-8');
      const parsed = JSON.parse(content);
      this.data = CustomSectionsFileSchema.parse(parsed);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        console.warn(`Custom sections file not found: ${this.config.filePath}`);
        this.data = {};
      } else {
        throw error;
      }
    }
  }

  async getCustomSections(toolkitId: string): Promise<CustomSections | null> {
    // Try exact match
    if (this.data[toolkitId]) {
      return this.data[toolkitId];
    }

    // Try normalized match
    const normalizedId = toolkitId.toLowerCase().replace(/[-_]/g, '');
    const entry = Object.entries(this.data).find(
      ([key]) => key.toLowerCase().replace(/[-_]/g, '') === normalizedId
    );

    return entry ? entry[1] : null;
  }

  async getAllCustomSections(): Promise<Record<string, CustomSections>> {
    return { ...this.data };
  }
}

// Factory function
export const createCustomSectionsSource = async (
  filePath: string
): Promise<ICustomSectionsSource> => {
  const source = new CustomSectionsSource({ filePath });
  await source.initialize();
  return source;
};
```

---

#### TICKET-007: Implement JSON File Data Source (Alternative)

**Priority**: P2 (Medium)
**Estimate**: 2 hours
**Dependencies**: TICKET-003

**Description**:
Implement an alternative data source that reads tool definitions from JSON files. This enables offline use, testing, and serves as a fallback when the Engine API is unavailable.

**Acceptance Criteria**:
- [ ] Implement `JsonFileSource` class implementing `IToolDataSource`
- [ ] Support single file and directory of files
- [ ] Validate JSON structure
- [ ] Add caching
- [ ] Write unit tests

**Implementation**:

```typescript
// src/sources/json-file.ts
import { readFile, readdir } from 'fs/promises';
import { join, basename } from 'path';

export interface JsonFileConfig {
  path: string;
  isDirectory?: boolean;
}

export class JsonFileSource implements IToolDataSource {
  private cache: Map<string, ToolDefinition[]> = new Map();
  private readonly config: Required<JsonFileConfig>;

  constructor(config: JsonFileConfig) {
    this.config = {
      isDirectory: false,
      ...config,
    };
  }

  async fetchAllTools(): Promise<ToolDefinition[]> {
    if (this.config.isDirectory) {
      return this.loadFromDirectory();
    }
    return this.loadFromFile(this.config.path);
  }

  async fetchToolsByToolkit(toolkitId: string): Promise<ToolDefinition[]> {
    if (this.cache.has(toolkitId)) {
      return this.cache.get(toolkitId)!;
    }

    const allTools = await this.fetchAllTools();
    const filtered = allTools.filter(
      tool => tool.qualifiedName.split('.')[0].toLowerCase() === toolkitId.toLowerCase()
    );
    
    this.cache.set(toolkitId, filtered);
    return filtered;
  }

  async isAvailable(): Promise<boolean> {
    try {
      await access(this.config.path);
      return true;
    } catch {
      return false;
    }
  }

  private async loadFromFile(filePath: string): Promise<ToolDefinition[]> {
    const content = await readFile(filePath, 'utf-8');
    const data = JSON.parse(content);
    
    // Handle both array format and { items: [] } format
    const tools = Array.isArray(data) ? data : data.items ?? [];
    return tools.map(tool => ToolDefinitionSchema.parse(tool));
  }

  private async loadFromDirectory(): Promise<ToolDefinition[]> {
    const files = await readdir(this.config.path);
    const jsonFiles = files.filter(f => f.endsWith('.json'));
    
    const allTools: ToolDefinition[] = [];
    for (const file of jsonFiles) {
      const tools = await this.loadFromFile(join(this.config.path, file));
      allTools.push(...tools);
    }
    
    return allTools;
  }
}
```

---

### Phase 3: Data Merger

#### TICKET-008: Implement Data Merger

**Priority**: P0 (Blocker)
**Estimate**: 5 hours
**Dependencies**: TICKET-004, TICKET-005, TICKET-006

**Description**:
Implement the core data merger that combines data from all sources into the unified `MergedToolkit` format.

**Acceptance Criteria**:
- [ ] Implement `DataMerger` class/functions
- [ ] Merge tools with metadata by toolkit ID
- [ ] Compute `allScopes` union for each toolkit
- [ ] Determine `authType` from tool requirements
- [ ] Merge custom sections at appropriate positions
- [ ] Handle missing data from any source gracefully
- [ ] Log warnings for unmatched data
- [ ] Write comprehensive unit tests

**Implementation**:

```typescript
// src/merger/data-merger.ts
import { pipe } from '../utils/fp';

export interface MergerConfig {
  toolSource: IToolDataSource;
  metadataSource: IMetadataSource;
  customSectionsSource: ICustomSectionsSource;
}

export interface MergeResult {
  toolkit: MergedToolkit;
  warnings: string[];
}

/**
 * Group tools by toolkit name
 */
const groupToolsByToolkit = (
  tools: ToolDefinition[]
): Map<string, ToolDefinition[]> => {
  const groups = new Map<string, ToolDefinition[]>();
  
  for (const tool of tools) {
    const toolkitName = tool.qualifiedName.split('.')[0];
    const existing = groups.get(toolkitName) ?? [];
    groups.set(toolkitName, [...existing, tool]);
  }
  
  return groups;
};

/**
 * Compute unified scopes from all tools
 */
const computeAllScopes = (tools: ToolDefinition[]): string[] => {
  const scopeSet = new Set<string>();
  
  for (const tool of tools) {
    if (tool.auth?.scopes) {
      tool.auth.scopes.forEach(scope => scopeSet.add(scope));
    }
  }
  
  return Array.from(scopeSet).sort();
};

/**
 * Determine auth type from tools
 */
const determineAuthType = (
  tools: ToolDefinition[]
): 'oauth2' | 'api_key' | 'none' => {
  const toolWithAuth = tools.find(t => t.auth !== null);
  
  if (!toolWithAuth?.auth) {
    // Check if any tool requires secrets
    const hasSecrets = tools.some(t => t.secrets.length > 0);
    return hasSecrets ? 'api_key' : 'none';
  }
  
  return toolWithAuth.auth.providerType === 'oauth2' ? 'oauth2' : 'api_key';
};

/**
 * Get provider ID from tools
 */
const getProviderId = (tools: ToolDefinition[]): string | null => {
  const toolWithAuth = tools.find(t => t.auth?.providerId);
  return toolWithAuth?.auth?.providerId ?? null;
};

/**
 * Merge a single toolkit
 */
export const mergeToolkit = async (
  toolkitId: string,
  tools: ToolDefinition[],
  metadata: ToolkitMetadata | null,
  customSections: CustomSections | null
): Promise<MergeResult> => {
  const warnings: string[] = [];
  
  if (!metadata) {
    warnings.push(`No metadata found for toolkit: ${toolkitId}`);
  }
  
  const firstTool = tools[0];
  const version = firstTool?.fullyQualifiedName.split('@')[1] ?? '0.0.0';
  
  const mergedTools: MergedTool[] = tools.map(tool => ({
    name: tool.name,
    qualifiedName: tool.qualifiedName,
    fullyQualifiedName: tool.fullyQualifiedName,
    description: tool.description,
    parameters: tool.parameters,
    auth: tool.auth,
    secrets: tool.secrets,
    output: tool.output,
    documentationChunks: customSections?.toolChunks[tool.name] ?? [],
    exampleInputs: undefined, // To be filled by LLM service
  }));
  
  const toolkit: MergedToolkit = {
    id: toolkitId,
    label: metadata?.label ?? toolkitId,
    version,
    description: firstTool?.description ?? null,
    metadata: metadata ? {
      category: metadata.category,
      iconUrl: metadata.iconUrl,
      isBYOC: metadata.isBYOC,
      isPro: metadata.isPro,
      type: metadata.type,
      docsLink: metadata.docsLink,
      isComingSoon: metadata.isComingSoon,
      isHidden: metadata.isHidden,
    } : getDefaultMetadata(),
    auth: {
      type: determineAuthType(tools),
      providerId: getProviderId(tools),
      allScopes: computeAllScopes(tools),
    },
    tools: mergedTools,
    documentationChunks: customSections?.documentationChunks ?? [],
    customImports: customSections?.customImports ?? [],
    subPages: customSections?.subPages ?? [],
  };
  
  return { toolkit, warnings };
};

/**
 * Main merger function
 */
export const createDataMerger = (config: MergerConfig) => {
  return {
    async mergeToolkit(toolkitId: string): Promise<MergeResult> {
      const [tools, metadata, customSections] = await Promise.all([
        config.toolSource.fetchToolsByToolkit(toolkitId),
        config.metadataSource.getToolkitMetadata(toolkitId),
        config.customSectionsSource.getCustomSections(toolkitId),
      ]);
      
      return mergeToolkit(toolkitId, tools, metadata, customSections);
    },
    
    async mergeAllToolkits(): Promise<MergeResult[]> {
      const tools = await config.toolSource.fetchAllTools();
      const grouped = groupToolsByToolkit(tools);
      
      const results: MergeResult[] = [];
      
      for (const [toolkitId, toolkitTools] of grouped) {
        const [metadata, customSections] = await Promise.all([
          config.metadataSource.getToolkitMetadata(toolkitId),
          config.customSectionsSource.getCustomSections(toolkitId),
        ]);
        
        const result = await mergeToolkit(
          toolkitId,
          toolkitTools,
          metadata,
          customSections
        );
        results.push(result);
      }
      
      return results;
    },
  };
};

/**
 * Default metadata for toolkits not in Design System
 */
const getDefaultMetadata = () => ({
  category: 'development' as const,
  iconUrl: '',
  isBYOC: false,
  isPro: false,
  type: 'arcade' as const,
  docsLink: '',
  isComingSoon: false,
  isHidden: false,
});
```

---

### Phase 4: LLM Service

#### TICKET-009: Implement LLM Service Base

**Priority**: P1 (High)
**Estimate**: 4 hours
**Dependencies**: TICKET-002

**Description**:
Implement the LLM service base that provides abstraction for different LLM providers and handles common concerns like rate limiting and retries.

**Acceptance Criteria**:
- [ ] Create `ILLMProvider` interface
- [ ] Implement `OpenAIProvider` class
- [ ] Add rate limiting / concurrency control
- [ ] Add retry logic with exponential backoff
- [ ] Support different models (gpt-4o, gpt-4o-mini)
- [ ] Add cost tracking (optional)
- [ ] Write unit tests with mocked responses

**Implementation**:

```typescript
// src/llm/interfaces.ts
export interface LLMMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMConfig {
  model: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ILLMProvider {
  generate(messages: LLMMessage[], config?: Partial<LLMConfig>): Promise<string>;
  generateJSON<T>(messages: LLMMessage[], schema: z.ZodSchema<T>, config?: Partial<LLMConfig>): Promise<T>;
}

// src/llm/openai-provider.ts
import OpenAI from 'openai';

export interface OpenAIProviderConfig {
  apiKey: string;
  model?: string;
  maxConcurrency?: number;
  retries?: number;
}

export class OpenAIProvider implements ILLMProvider {
  private client: OpenAI;
  private semaphore: Semaphore;
  private readonly config: Required<OpenAIProviderConfig>;

  constructor(config: OpenAIProviderConfig) {
    this.config = {
      model: 'gpt-4o-mini',
      maxConcurrency: 5,
      retries: 3,
      ...config,
    };
    this.client = new OpenAI({ apiKey: this.config.apiKey });
    this.semaphore = new Semaphore(this.config.maxConcurrency);
  }

  async generate(
    messages: LLMMessage[],
    config?: Partial<LLMConfig>
  ): Promise<string> {
    return this.semaphore.acquire(async () => {
      const response = await this.client.chat.completions.create({
        model: config?.model ?? this.config.model,
        messages,
        temperature: config?.temperature ?? 0,
        max_tokens: config?.maxTokens ?? 512,
      });

      return response.choices[0]?.message?.content ?? '';
    });
  }

  async generateJSON<T>(
    messages: LLMMessage[],
    schema: z.ZodSchema<T>,
    config?: Partial<LLMConfig>,
    retries = 0
  ): Promise<T> {
    const response = await this.generate(messages, config);
    
    try {
      // Try to extract JSON from response
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }
      
      const parsed = JSON.parse(jsonMatch[0]);
      return schema.parse(parsed);
    } catch (error) {
      if (retries < this.config.retries) {
        return this.generateJSON(messages, schema, config, retries + 1);
      }
      throw error;
    }
  }
}

// Simple semaphore implementation
class Semaphore {
  private permits: number;
  private queue: (() => void)[] = [];

  constructor(permits: number) {
    this.permits = permits;
  }

  async acquire<T>(fn: () => Promise<T>): Promise<T> {
    if (this.permits > 0) {
      this.permits--;
    } else {
      await new Promise<void>(resolve => this.queue.push(resolve));
    }

    try {
      return await fn();
    } finally {
      this.permits++;
      const next = this.queue.shift();
      if (next) next();
    }
  }
}
```

---

#### TICKET-010: Implement Example Inputs Generator

**Priority**: P1 (High)
**Estimate**: 4 hours
**Dependencies**: TICKET-009

**Description**:
Implement the LLM-based example inputs generator that creates realistic sample inputs for each tool. This mirrors the functionality in the Python `docs_builder.py`.

**Acceptance Criteria**:
- [ ] Create `ExampleInputsGenerator` class
- [ ] Generate valid JSON inputs based on parameter schema
- [ ] Handle enums by selecting valid values
- [ ] Handle optional vs required parameters
- [ ] Generate realistic values based on parameter names/descriptions
- [ ] Batch multiple tools for efficiency
- [ ] Write unit tests

**Implementation**:

```typescript
// src/llm/example-inputs.ts

export interface ExampleInputsConfig {
  llmProvider: ILLMProvider;
  includeOptionalParams?: boolean;
}

export class ExampleInputsGenerator {
  private readonly config: Required<ExampleInputsConfig>;

  constructor(config: ExampleInputsConfig) {
    this.config = {
      includeOptionalParams: true,
      ...config,
    };
  }

  async generateForTool(tool: ToolDefinition): Promise<Record<string, unknown>> {
    const systemPrompt = `You are a helpful assistant expert in generating data for documenting sample scripts for calling tools.

When given a tool signature with typed arguments, you must return exactly one JSON object (no markdown, no extra text) where each key is an argument name, and each value is a sample value that would make sense in a sample script.

Rules:
- Generate realistic but concise values
- For file content arguments, use short placeholders like "[file_content]"
- For base64 arguments, use a placeholder like "[base64_data]"
- For IDs, use realistic-looking sample values like "proj_123" or "user_456"
- Not every optional argument needs to be included
- If the description says "either X or Y", only include one
- RESPOND ONLY WITH VALID JSON, NO OTHER TEXT`;

    const toolSignature = this.buildToolSignature(tool);
    
    const messages: LLMMessage[] = [
      { role: 'system', content: systemPrompt },
      {
        role: 'user',
        content: `Generate sample inputs for this tool:\n\n${JSON.stringify(toolSignature, null, 2)}`,
      },
    ];

    const schema = z.record(z.unknown());
    
    try {
      return await this.config.llmProvider.generateJSON(messages, schema);
    } catch (error) {
      console.warn(`Failed to generate inputs for ${tool.name}:`, error);
      return this.generateFallbackInputs(tool);
    }
  }

  async generateForTools(tools: ToolDefinition[]): Promise<Map<string, Record<string, unknown>>> {
    const results = new Map<string, Record<string, unknown>>();
    
    // Process in parallel with the LLM provider's built-in rate limiting
    const promises = tools.map(async tool => {
      const inputs = await this.generateForTool(tool);
      results.set(tool.name, inputs);
    });
    
    await Promise.all(promises);
    return results;
  }

  private buildToolSignature(tool: ToolDefinition): object {
    return {
      tool_name: tool.name,
      tool_description: tool.description,
      tool_args: tool.parameters.map(p => ({
        arg_name: p.name,
        arg_description: p.description,
        is_arg_required: p.required,
        arg_type: p.type,
        ...(p.enum ? { enum: { accepted_values: p.enum } } : {}),
      })),
    };
  }

  private generateFallbackInputs(tool: ToolDefinition): Record<string, unknown> {
    const inputs: Record<string, unknown> = {};
    
    for (const param of tool.parameters) {
      if (!param.required && !this.config.includeOptionalParams) {
        continue;
      }
      
      inputs[param.name] = this.generateFallbackValue(param);
    }
    
    return inputs;
  }

  private generateFallbackValue(param: ToolParameter): unknown {
    if (param.enum && param.enum.length > 0) {
      return param.enum[0];
    }
    
    switch (param.type) {
      case 'string':
        return `sample_${param.name}`;
      case 'integer':
      case 'number':
        return 1;
      case 'boolean':
        return true;
      case 'array':
        return [];
      case 'object':
        return {};
      default:
        return null;
    }
  }
}
```

---

#### TICKET-011: Implement Toolkit Summary Generator

**Priority**: P1 (High)
**Estimate**: 3 hours
**Dependencies**: TICKET-009

**Description**:
Implement the LLM-based toolkit summary generator for new toolkits. This creates the descriptive paragraph that appears at the top of toolkit documentation pages.

**Acceptance Criteria**:
- [ ] Create `ToolkitSummaryGenerator` class
- [ ] Generate concise, informative summaries
- [ ] Follow Arcade documentation style (see `.cursorrules`)
- [ ] Handle existing summaries (skip if present)
- [ ] Write unit tests

**Implementation**:

```typescript
// src/llm/toolkit-summary.ts

export class ToolkitSummaryGenerator {
  private readonly llmProvider: ILLMProvider;

  constructor(llmProvider: ILLMProvider) {
    this.llmProvider = llmProvider;
  }

  async generateSummary(
    toolkitName: string,
    tools: Array<{ name: string; description: string | null }>
  ): Promise<string> {
    const systemPrompt = `You are a helpful assistant writing documentation for Arcade, an AI platform for developers.

When given an MCP Server name and a list of tools, generate a short, descriptive paragraph about the server and what it enables users to do.

Style guidelines:
- Use clear, simple language
- Be action-oriented
- Focus on capabilities and use cases
- Use bullet points for listing main features
- Keep it concise (2-4 sentences intro + bullet list)

Example output for Asana:
"The Arcade Asana MCP Server provides a pre-built set of tools for interacting with Asana. These tools make it easy to build agents and AI apps that can:

- Manage teams, projects, and workspaces.
- Create, update, and search for tasks.
- Retrieve data about tasks, projects, workspaces, users, etc.
- Manage task attachments."`;

    const toolsList = tools
      .map(t => [t.name, t.description ?? 'No description'])
      .slice(0, 30); // Limit to avoid token issues

    const messages: LLMMessage[] = [
      { role: 'system', content: systemPrompt },
      {
        role: 'user',
        content: `Generate a description for the ${toolkitName} MCP Server.

Tools:
${JSON.stringify(toolsList, null, 2)}`,
      },
    ];

    return this.llmProvider.generate(messages, { maxTokens: 512 });
  }
}
```

---

### Phase 5: JSON Generator

#### TICKET-012: Implement JSON Output Generator

**Priority**: P0 (Blocker)
**Estimate**: 4 hours
**Dependencies**: TICKET-008

**Description**:
Implement the JSON output generator that produces per-toolkit JSON files and an index file.

**Acceptance Criteria**:
- [ ] Create `JsonGenerator` class
- [ ] Output one JSON file per toolkit
- [ ] Generate index file with toolkit list
- [ ] Validate output against schema
- [ ] Support different output modes (single file, per-toolkit)
- [ ] Add pretty-print option
- [ ] Write unit tests

**Implementation**:

```typescript
// src/generator/json-generator.ts
import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';

export interface GeneratorConfig {
  outputDir: string;
  prettyPrint?: boolean;
  generateIndex?: boolean;
}

export interface GeneratorResult {
  filesWritten: string[];
  errors: string[];
}

export class JsonGenerator {
  private readonly config: Required<GeneratorConfig>;

  constructor(config: GeneratorConfig) {
    this.config = {
      prettyPrint: true,
      generateIndex: true,
      ...config,
    };
  }

  async generateToolkitFile(toolkit: MergedToolkit): Promise<string> {
    const fileName = `${toolkit.id.toLowerCase()}.json`;
    const filePath = join(this.config.outputDir, fileName);
    
    await mkdir(dirname(filePath), { recursive: true });
    
    const content = this.config.prettyPrint
      ? JSON.stringify(toolkit, null, 2)
      : JSON.stringify(toolkit);
    
    await writeFile(filePath, content, 'utf-8');
    return filePath;
  }

  async generateAll(toolkits: MergedToolkit[]): Promise<GeneratorResult> {
    const filesWritten: string[] = [];
    const errors: string[] = [];

    // Generate per-toolkit files
    for (const toolkit of toolkits) {
      try {
        const filePath = await this.generateToolkitFile(toolkit);
        filesWritten.push(filePath);
      } catch (error) {
        errors.push(`Failed to write ${toolkit.id}: ${error}`);
      }
    }

    // Generate index file
    if (this.config.generateIndex) {
      try {
        const indexPath = await this.generateIndexFile(toolkits);
        filesWritten.push(indexPath);
      } catch (error) {
        errors.push(`Failed to write index: ${error}`);
      }
    }

    return { filesWritten, errors };
  }

  private async generateIndexFile(toolkits: MergedToolkit[]): Promise<string> {
    const index = {
      generated_at: new Date().toISOString(),
      version: '1.0.0',
      toolkits: toolkits.map(t => ({
        id: t.id,
        label: t.label,
        version: t.version,
        category: t.metadata.category,
        toolCount: t.tools.length,
        authType: t.auth?.type ?? 'none',
      })),
    };

    const filePath = join(this.config.outputDir, 'index.json');
    const content = this.config.prettyPrint
      ? JSON.stringify(index, null, 2)
      : JSON.stringify(index);
    
    await writeFile(filePath, content, 'utf-8');
    return filePath;
  }
}
```

---

### Phase 6: CLI Interface

#### TICKET-013: Implement CLI Interface

**Priority**: P0 (Blocker)
**Estimate**: 5 hours
**Dependencies**: TICKET-008, TICKET-012

**Description**:
Implement the CLI interface using Commander.js with commands for generating documentation.

**Acceptance Criteria**:
- [ ] Create main CLI entry point
- [ ] Implement `generate` command for single toolkit
- [ ] Implement `generate-all` command for all toolkits
- [ ] Implement `validate` command for output validation
- [ ] Add interactive mode for toolkit selection
- [ ] Add progress indicators
- [ ] Support environment variables for configuration
- [ ] Add `--help` documentation
- [ ] Write integration tests

**Implementation**:

```typescript
// src/cli/index.ts
#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import { createInterface } from 'readline';

const program = new Command();

program
  .name('toolkit-docs-generator')
  .description('Generate documentation JSON for Arcade toolkits')
  .version('1.0.0');

program
  .command('generate <toolkit>')
  .description('Generate documentation for a single toolkit')
  .option('-o, --output <dir>', 'Output directory', './output')
  .option('--api-url <url>', 'Engine API base URL', process.env.ENGINE_API_URL)
  .option('--api-key <key>', 'Engine API key', process.env.ENGINE_API_KEY)
  .option('--openai-key <key>', 'OpenAI API key', process.env.OPENAI_API_KEY)
  .option('--skip-examples', 'Skip LLM example generation', false)
  .option('--skip-summary', 'Skip LLM summary generation', false)
  .option('--custom-sections <file>', 'Custom sections JSON file')
  .option('--verbose', 'Verbose output', false)
  .action(async (toolkit, options) => {
    await runGenerate(toolkit, options);
  });

program
  .command('generate-all')
  .description('Generate documentation for all toolkits')
  .option('-o, --output <dir>', 'Output directory', './output')
  .option('--api-url <url>', 'Engine API base URL', process.env.ENGINE_API_URL)
  .option('--api-key <key>', 'Engine API key', process.env.ENGINE_API_KEY)
  .option('--openai-key <key>', 'OpenAI API key', process.env.OPENAI_API_KEY)
  .option('--skip-examples', 'Skip LLM example generation', false)
  .option('--skip-summary', 'Skip LLM summary generation', false)
  .option('--custom-sections <file>', 'Custom sections JSON file')
  .option('--concurrency <n>', 'Max parallel toolkits', '3')
  .option('--verbose', 'Verbose output', false)
  .action(async (options) => {
    await runGenerateAll(options);
  });

program
  .command('validate <file>')
  .description('Validate a generated JSON file')
  .action(async (file) => {
    await runValidate(file);
  });

program
  .command('list-toolkits')
  .description('List available toolkits from the Design System')
  .option('--category <cat>', 'Filter by category')
  .action(async (options) => {
    await runListToolkits(options);
  });

async function runGenerate(toolkitId: string, options: any) {
  const spinner = ora('Initializing...').start();
  
  try {
    // Validate required options
    if (!options.apiUrl || !options.apiKey) {
      spinner.fail('Missing required options: --api-url and --api-key');
      process.exit(1);
    }

    // Initialize sources
    spinner.text = 'Connecting to data sources...';
    
    const toolSource = new EngineApiSource({
      baseUrl: options.apiUrl,
      apiKey: options.apiKey,
    });
    
    const metadataSource = createDesignSystemSource();
    
    const customSectionsSource = options.customSections
      ? await createCustomSectionsSource(options.customSections)
      : createEmptyCustomSectionsSource();
    
    // Create merger
    const merger = createDataMerger({
      toolSource,
      metadataSource,
      customSectionsSource,
    });

    // Merge data
    spinner.text = `Merging data for ${toolkitId}...`;
    const result = await merger.mergeToolkit(toolkitId);
    
    // Log warnings
    if (result.warnings.length > 0) {
      spinner.warn(`Warnings:\n${result.warnings.join('\n')}`);
    }

    // Generate examples if requested
    if (!options.skipExamples && options.openaiKey) {
      spinner.text = 'Generating example inputs...';
      const llmProvider = new OpenAIProvider({ apiKey: options.openaiKey });
      const exampleGenerator = new ExampleInputsGenerator({ llmProvider });
      
      const examples = await exampleGenerator.generateForTools(
        result.toolkit.tools.map(t => ({
          name: t.name,
          description: t.description,
          parameters: t.parameters,
        } as ToolDefinition))
      );
      
      // Merge examples into toolkit
      for (const tool of result.toolkit.tools) {
        tool.exampleInputs = examples.get(tool.name);
      }
    }

    // Generate summary if needed
    if (!options.skipSummary && options.openaiKey && !result.toolkit.summary) {
      spinner.text = 'Generating toolkit summary...';
      const llmProvider = new OpenAIProvider({ apiKey: options.openaiKey });
      const summaryGenerator = new ToolkitSummaryGenerator(llmProvider);
      
      result.toolkit.summary = await summaryGenerator.generateSummary(
        result.toolkit.label,
        result.toolkit.tools.map(t => ({
          name: t.name,
          description: t.description,
        }))
      );
    }

    // Generate output
    spinner.text = 'Writing output file...';
    const generator = new JsonGenerator({ outputDir: options.output });
    const filePath = await generator.generateToolkitFile(result.toolkit);
    
    spinner.succeed(`Generated ${chalk.green(filePath)}`);
    
    // Print summary
    console.log(chalk.dim(`
  Toolkit: ${result.toolkit.label}
  Tools: ${result.toolkit.tools.length}
  Auth: ${result.toolkit.auth?.type ?? 'none'}
  Scopes: ${result.toolkit.auth?.allScopes.length ?? 0}
`));
    
  } catch (error) {
    spinner.fail(`Failed: ${error}`);
    process.exit(1);
  }
}

async function runGenerateAll(options: any) {
  const spinner = ora('Initializing...').start();
  
  try {
    // Similar to runGenerate but for all toolkits
    // ... implementation
    
    spinner.succeed('Generation complete');
  } catch (error) {
    spinner.fail(`Failed: ${error}`);
    process.exit(1);
  }
}

async function runValidate(file: string) {
  // ... implementation
}

async function runListToolkits(options: any) {
  const source = createDesignSystemSource();
  const metadata = await source.getAllToolkitsMetadata();
  
  const filtered = options.category
    ? metadata.filter(m => m.category === options.category)
    : metadata;
  
  console.log(chalk.bold(`\nAvailable Toolkits (${filtered.length}):\n`));
  
  for (const toolkit of filtered) {
    const flags = [
      toolkit.isBYOC && chalk.yellow('BYOC'),
      toolkit.isPro && chalk.magenta('PRO'),
      toolkit.isComingSoon && chalk.cyan('SOON'),
    ].filter(Boolean).join(' ');
    
    console.log(`  ${chalk.green(toolkit.id.padEnd(25))} ${toolkit.category.padEnd(15)} ${flags}`);
  }
}

program.parse();
```

---

### Phase 7: Testing and Documentation

#### TICKET-014: Write Unit Tests

**Priority**: P1 (High)
**Estimate**: 6 hours
**Dependencies**: All implementation tickets

**Acceptance Criteria**:
- [ ] Unit tests for all data sources
- [ ] Unit tests for data merger
- [ ] Unit tests for LLM service (with mocks)
- [ ] Unit tests for JSON generator
- [ ] Unit tests for CLI commands
- [ ] Test coverage > 80%

---

#### TICKET-015: Write Integration Tests

**Priority**: P1 (High)
**Estimate**: 4 hours
**Dependencies**: TICKET-014

**Acceptance Criteria**:
- [ ] End-to-end test with mock API
- [ ] Test with real Design System data
- [ ] Test CLI commands with fixtures
- [ ] Snapshot tests for output JSON

---

#### TICKET-016: Write Documentation

**Priority**: P1 (High)
**Estimate**: 3 hours
**Dependencies**: All implementation tickets

**Acceptance Criteria**:
- [ ] README.md with quick start
- [ ] CLI usage documentation
- [ ] Configuration reference
- [ ] Architecture diagram
- [ ] Contributing guide

---

## Dependency Graph

```
TICKET-001 (Setup)
    │
    ├─► TICKET-002 (Types)
    │       │
    │       ├─► TICKET-003 (Interfaces)
    │       │       │
    │       │       ├─► TICKET-004 (Engine API Source)
    │       │       │       │
    │       │       ├─► TICKET-005 (Design System Source) ──┐
    │       │       │       │                               │
    │       │       ├─► TICKET-006 (Custom Sections) ───────┼─► TICKET-008 (Merger)
    │       │       │       │                               │       │
    │       │       └─► TICKET-007 (JSON File Source) ──────┘       │
    │       │                                                       │
    │       └─► TICKET-009 (LLM Base) ──────────────────────────────┤
    │               │                                               │
    │               ├─► TICKET-010 (Example Inputs) ────────────────┤
    │               │                                               │
    │               └─► TICKET-011 (Summary Generator) ─────────────┤
    │                                                               │
    └───────────────────────────────────────────────────────────────┴─► TICKET-012 (JSON Generator)
                                                                            │
                                                                            │
                                                                            ▼
                                                                      TICKET-013 (CLI)
                                                                            │
                                                                            ├─► TICKET-014 (Unit Tests)
                                                                            │       │
                                                                            │       └─► TICKET-015 (Integration Tests)
                                                                            │
                                                                            └─► TICKET-016 (Documentation)
```

---

## Execution Order

### Sprint 1 (Week 1): Foundation
1. TICKET-001: Project Setup
2. TICKET-002: Type Definitions
3. TICKET-003: Interfaces

### Sprint 2 (Week 1-2): Data Sources
4. TICKET-004: Engine API Source
5. TICKET-005: Design System Source
6. TICKET-006: Custom Sections Source
7. TICKET-007: JSON File Source (parallel)

### Sprint 3 (Week 2): Core Logic
8. TICKET-008: Data Merger
9. TICKET-009: LLM Base

### Sprint 4 (Week 2-3): LLM Features
10. TICKET-010: Example Inputs Generator
11. TICKET-011: Summary Generator

### Sprint 5 (Week 3): Output & CLI
12. TICKET-012: JSON Generator
13. TICKET-013: CLI Interface

### Sprint 6 (Week 3-4): Quality
14. TICKET-014: Unit Tests
15. TICKET-015: Integration Tests
16. TICKET-016: Documentation

---

## Environment Variables

```bash
# Required
ENGINE_API_URL=https://api.arcade.dev
ENGINE_API_KEY=your-api-key

# Optional
OPENAI_API_KEY=your-openai-key    # For LLM features
OUTPUT_DIR=./output                # Default output directory
CUSTOM_SECTIONS_FILE=./custom_sections.json
```

---

## CLI Usage Examples

```bash
# Generate docs for a single toolkit
npx toolkit-docs-generator generate Github -o ./output

# Generate docs for all toolkits
npx toolkit-docs-generator generate-all --concurrency 5

# Generate without LLM features (faster)
npx toolkit-docs-generator generate Github --skip-examples --skip-summary

# List available toolkits
npx toolkit-docs-generator list-toolkits --category development

# Validate generated JSON
npx toolkit-docs-generator validate ./output/github.json
```

---

## Future Enhancements

1. **Watch mode**: Auto-regenerate on source changes
2. **Diff mode**: Show what changed between generations
3. **GitHub Action**: CI/CD integration
4. **API endpoint**: Serve generated data via HTTP
5. **Single source mode**: When Engine API supports all metadata
