/**
 * Public source interfaces for the toolkit docs generator
 *
 */

import type { CustomSections } from "../types/index.js";

// ============================================================================
// Custom Sections Source Interface
// ============================================================================

/**
 * Interface for fetching custom documentation sections
 *
 * Implementations:
 * - CustomSectionsFileSource: Loads from extracted JSON file
 * - EmptyCustomSectionsSource: Returns empty sections (for new toolkits)
 */
export interface ICustomSectionsSource {
  /**
   * Get custom sections for a specific toolkit
   * @param toolkitId - The toolkit identifier
   */
  readonly getCustomSections: (
    toolkitId: string
  ) => Promise<CustomSections | null>;

  /**
   * Get all custom sections
   */
  readonly getAllCustomSections: () => Promise<
    Readonly<Record<string, CustomSections>>
  >;
}
