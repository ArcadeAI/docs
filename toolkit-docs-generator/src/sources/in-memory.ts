/**
 * In-memory implementations of data sources for testing
 *
 * These implementations use real data structures and logic,
 * avoiding mocks while enabling isolated testing.
 */
import type {
  CustomSections,
  ToolDefinition,
  ToolkitMetadata,
} from "../types/index.js";
import { normalizeId } from "../utils/fp.js";
import type { ICustomSectionsSource } from "./interfaces.js";
import type {
  FetchOptions,
  IMetadataSource,
  IToolDataSource,
} from "./internal.js";

// ============================================================================
// In-Memory Tool Data Source
// ============================================================================

/**
 * In-memory implementation of IToolDataSource for testing
 *
 * Use this instead of mocking the interface. Simply provide
 * realistic test data in the constructor.
 *
 * @example
 * ```typescript
 * const source = new InMemoryToolDataSource([
 *   { name: 'CreateIssue', qualifiedName: 'Github.CreateIssue', ... },
 *   { name: 'SetStarred', qualifiedName: 'Github.SetStarred', ... },
 * ]);
 * const tools = await source.fetchToolsByToolkit('Github');
 * ```
 */
export class InMemoryToolDataSource implements IToolDataSource {
  private readonly tools: readonly ToolDefinition[];

  constructor(tools: readonly ToolDefinition[]) {
    this.tools = tools;
  }

  async fetchToolsByToolkit(
    toolkitId: string
  ): Promise<readonly ToolDefinition[]> {
    const normalizedId = normalizeId(toolkitId);
    return this.tools.filter((tool) => {
      const toolToolkitId = tool.qualifiedName.split(".")[0];
      return toolToolkitId && normalizeId(toolToolkitId) === normalizedId;
    });
  }

  async fetchAllTools(
    options?: FetchOptions
  ): Promise<readonly ToolDefinition[]> {
    let result = [...this.tools];

    if (options?.toolkitId) {
      const normalizedId = normalizeId(options.toolkitId);
      result = result.filter((tool) => {
        const toolToolkitId = tool.qualifiedName.split(".")[0];
        return toolToolkitId && normalizeId(toolToolkitId) === normalizedId;
      });
    }

    if (options?.version) {
      result = result.filter((tool) => {
        const version = tool.fullyQualifiedName.split("@")[1];
        return version === options.version;
      });
    }

    if (options?.providerId) {
      result = result.filter(
        (tool) => tool.auth?.providerId === options.providerId
      );
    }

    return result;
  }

  async isAvailable(): Promise<boolean> {
    return true;
  }
}

// ============================================================================
// In-Memory Metadata Source
// ============================================================================

/**
 * In-memory implementation of IMetadataSource for testing
 *
 * @example
 * ```typescript
 * const source = new InMemoryMetadataSource([
 *   { id: 'Github', label: 'GitHub', category: 'development', ... },
 *   { id: 'Slack', label: 'Slack', category: 'social', ... },
 * ]);
 * const metadata = await source.getToolkitMetadata('Github');
 * ```
 */
export class InMemoryMetadataSource implements IMetadataSource {
  private readonly metadata: ReadonlyMap<string, ToolkitMetadata>;

  constructor(toolkits: readonly ToolkitMetadata[]) {
    const map = new Map<string, ToolkitMetadata>();
    for (const toolkit of toolkits) {
      // Store by exact ID
      map.set(toolkit.id, toolkit);
      // Also store by normalized ID for case-insensitive lookup
      map.set(normalizeId(toolkit.id), toolkit);
    }
    this.metadata = map;
  }

  async getToolkitMetadata(toolkitId: string): Promise<ToolkitMetadata | null> {
    // Try exact match first
    const exact = this.metadata.get(toolkitId);
    if (exact) return exact;

    // Try normalized match
    const normalized = this.metadata.get(normalizeId(toolkitId));
    return normalized ?? null;
  }

  async getAllToolkitsMetadata(): Promise<readonly ToolkitMetadata[]> {
    // Return unique toolkits (filter out normalized duplicates)
    const seen = new Set<string>();
    const result: ToolkitMetadata[] = [];

    for (const [key, value] of this.metadata) {
      // Only include if this is the original ID (not normalized)
      if (key === value.id && !seen.has(value.id)) {
        seen.add(value.id);
        result.push(value);
      }
    }

    return result;
  }

  async listToolkitIds(): Promise<readonly string[]> {
    const metadata = await this.getAllToolkitsMetadata();
    return metadata.map((m) => m.id);
  }
}

// ============================================================================
// In-Memory Custom Sections Source
// ============================================================================

/**
 * In-memory implementation of ICustomSectionsSource for testing
 *
 * @example
 * ```typescript
 * const source = new InMemoryCustomSectionsSource({
 *   Github: {
 *     documentationChunks: [{ type: 'warning', ... }],
 *     customImports: [],
 *     subPages: [],
 *     toolChunks: {},
 *   },
 * });
 * const sections = await source.getCustomSections('Github');
 * ```
 */
export class InMemoryCustomSectionsSource implements ICustomSectionsSource {
  private readonly sections: ReadonlyMap<string, CustomSections>;

  constructor(sections: Readonly<Record<string, CustomSections>>) {
    const map = new Map<string, CustomSections>();
    for (const [key, value] of Object.entries(sections)) {
      map.set(key, value);
      map.set(normalizeId(key), value);
    }
    this.sections = map;
  }

  async getCustomSections(toolkitId: string): Promise<CustomSections | null> {
    const exact = this.sections.get(toolkitId);
    if (exact) return exact;

    const normalized = this.sections.get(normalizeId(toolkitId));
    return normalized ?? null;
  }

  async getAllCustomSections(): Promise<
    Readonly<Record<string, CustomSections>>
  > {
    const result: Record<string, CustomSections> = {};
    const seen = new Set<string>();

    for (const [key, value] of this.sections) {
      // Only include original keys
      if (!seen.has(normalizeId(key))) {
        seen.add(normalizeId(key));
        result[key] = value;
      }
    }

    return result;
  }
}

// ============================================================================
// Empty Custom Sections Source
// ============================================================================

/**
 * Empty implementation that always returns null/empty
 * Useful when custom sections are not needed
 */
export class EmptyCustomSectionsSource implements ICustomSectionsSource {
  async getCustomSections(_toolkitId: string): Promise<CustomSections | null> {
    return null;
  }

  async getAllCustomSections(): Promise<
    Readonly<Record<string, CustomSections>>
  > {
    return {};
  }
}

// ============================================================================
// Factory Functions
// ============================================================================

/**
 * Create an in-memory tool data source from test fixtures
 */
export const createInMemoryToolDataSource = (
  tools: readonly ToolDefinition[]
): IToolDataSource => new InMemoryToolDataSource(tools);

/**
 * Create an in-memory metadata source from test fixtures
 */
export const createInMemoryMetadataSource = (
  toolkits: readonly ToolkitMetadata[]
): IMetadataSource => new InMemoryMetadataSource(toolkits);

/**
 * Create an in-memory custom sections source from test fixtures
 */
export const createInMemoryCustomSectionsSource = (
  sections: Readonly<Record<string, CustomSections>>
): ICustomSectionsSource => new InMemoryCustomSectionsSource(sections);

/**
 * Create an empty custom sections source
 */
export const createEmptyCustomSectionsSource = (): ICustomSectionsSource =>
  new EmptyCustomSectionsSource();
