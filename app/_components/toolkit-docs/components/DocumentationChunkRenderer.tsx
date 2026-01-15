"use client";

import { Callout } from "nextra/components";
import type React from "react";
import ReactMarkdown from "react-markdown";

import type {
  DocumentationChunk,
  DocumentationChunkLocation,
  DocumentationChunkPosition,
  DocumentationChunkRendererProps,
} from "../types";

/**
 * Maps chunk types to Nextra Callout types
 */
const CALLOUT_TYPE_MAP: Record<string, "default" | "info" | "warning" | "error"> = {
  callout: "default",
  info: "info",
  tip: "info",
  warning: "warning",
  error: "error",
};

/**
 * Maps chunk variants to Nextra Callout types
 */
const VARIANT_TYPE_MAP: Record<string, "default" | "info" | "warning" | "error"> = {
  default: "default",
  info: "info",
  success: "info",
  warning: "warning",
  destructive: "error",
};

/**
 * Renders markdown content from a string.
 */
function MarkdownContent({ content }: { content: string }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

/**
 * Renders a single documentation chunk
 */
function ChunkContent({ chunk }: { chunk: DocumentationChunk }) {
  const { type, content, title, variant } = chunk;

  // Handle code blocks
  if (type === "code") {
    return (
      <pre className="my-3 overflow-x-auto rounded-md bg-gray-900 p-4">
        <code className="font-mono text-sm text-gray-100">{content}</code>
      </pre>
    );
  }

  // Handle plain markdown
  if (type === "markdown") {
    return (
      <div className="my-3">
        <MarkdownContent content={content} />
      </div>
    );
  }

  // Handle callout types (callout, info, tip, warning)
  // Determine the callout type from chunk type or variant
  let calloutType: "default" | "info" | "warning" | "error" = "default";

  if (variant && VARIANT_TYPE_MAP[variant]) {
    calloutType = VARIANT_TYPE_MAP[variant];
  } else if (CALLOUT_TYPE_MAP[type]) {
    calloutType = CALLOUT_TYPE_MAP[type];
  }

  return (
    <Callout type={calloutType} title={title}>
      <MarkdownContent content={content} />
    </Callout>
  );
}

/**
 * DocumentationChunkRenderer
 *
 * A generic component for rendering custom documentation content at specified
 * injection points. Filters chunks by location and position, then renders
 * the appropriate component based on chunk type.
 *
 * @example
 * ```tsx
 * <DocumentationChunkRenderer
 *   chunks={tool.documentationChunks}
 *   location="parameters"
 *   position="after"
 * />
 * ```
 *
 * Supported chunk types:
 * - `callout`: Default callout box
 * - `info`: Blue info callout
 * - `tip`: Blue tip callout
 * - `warning`: Yellow warning callout
 * - `markdown`: Raw markdown content
 * - `code`: Code block
 */
export function DocumentationChunkRenderer({
  chunks,
  location,
  position,
  className,
}: DocumentationChunkRendererProps): React.ReactElement | null {
  // Filter chunks that match the specified location and position
  const matchingChunks = chunks.filter(
    (chunk) => chunk.location === location && chunk.position === position
  );

  // Return null if no matching chunks
  if (matchingChunks.length === 0) {
    return null;
  }

  return (
    <div className={className} data-testid="documentation-chunk-renderer">
      {matchingChunks.map((chunk, index) => (
        <ChunkContent
          chunk={chunk}
          key={`${chunk.location}-${chunk.position}-${index}`}
        />
      ))}
    </div>
  );
}

/**
 * Helper function to check if chunks exist for a given location and position
 * Useful for conditional rendering
 */
export function hasChunksAt(
  chunks: DocumentationChunk[],
  location: DocumentationChunkLocation,
  position: DocumentationChunkPosition
): boolean {
  return chunks.some(
    (chunk) => chunk.location === location && chunk.position === position
  );
}

export default DocumentationChunkRenderer;
