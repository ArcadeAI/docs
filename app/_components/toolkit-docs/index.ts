/**
 * Toolkit Documentation Components
 *
 * This module provides React components for rendering toolkit documentation
 * from JSON data sources. It enables dynamic documentation generation
 * while preserving the ability to inject custom content.
 *
 * @example
 * ```tsx
 * import { ToolkitHeader, DocumentationChunkRenderer } from '@/app/_components/toolkit-docs';
 * import toolkitData from '@/data/toolkits/github.json';
 *
 * export default function GitHubPage() {
 *   return (
 *     <>
 *       <ToolkitHeader
 *         id={toolkitData.id}
 *         label={toolkitData.label}
 *         description={toolkitData.description}
 *         metadata={toolkitData.metadata}
 *         auth={toolkitData.auth}
 *       />
 *       <DocumentationChunkRenderer
 *         chunks={toolkitData.documentationChunks}
 *         location="header"
 *         position="after"
 *       />
 *     </>
 *   );
 * }
 * ```
 */

export { AvailableToolsTable } from "./components/AvailableToolsTable";
// Components
export {
  DocumentationChunkRenderer,
  hasChunksAt,
} from "./components/documentation-chunk-renderer";
export { DynamicCodeBlock } from "./components/DynamicCodeBlock";
export { ParametersTable } from "./components/parameters-table";
export { ScopesDisplay } from "./components/scopes-display";
export { ToolkitHeader } from "./components/toolkit-header";
export { ToolkitPage } from "./components/toolkit-page";
export { ToolSection } from "./components/tool-section";
// Constants
export * from "./constants";
// Types
export * from "./types";
