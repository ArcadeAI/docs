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

// Types
export * from "./types";

// Constants
export * from "./constants";

// Components
export {
  DocumentationChunkRenderer,
  hasChunksAt,
} from "./components/DocumentationChunkRenderer";
export { AvailableToolsTable } from "./components/AvailableToolsTable";
export { DynamicCodeBlock } from "./components/DynamicCodeBlock";
export { ParametersTable } from "./components/ParametersTable";
export { ScopesDisplay } from "./components/ScopesDisplay";
export { ToolSection } from "./components/ToolSection";
export { ToolkitHeader } from "./components/ToolkitHeader";
export { ToolkitPage } from "./components/ToolkitPage";
