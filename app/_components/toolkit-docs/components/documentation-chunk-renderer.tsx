"use client";

import { evaluate } from "@mdx-js/mdx";
import { Callout, Steps, Tabs } from "nextra/components";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

import { SignupLink } from "../../analytics";
import TabbedCodeBlock from "../../tabbed-code-block";
import TableOfContents from "../../table-of-contents";
import ToolFooter from "../../tool-footer";
import type {
  DocumentationChunk,
  DocumentationChunkLocation,
  DocumentationChunkPosition,
  DocumentationChunkRendererProps,
} from "../types";
import DataTable from "./data-table";

/**
 * Maps chunk types to Nextra Callout types
 */
const CALLOUT_TYPE_MAP: Record<
  string,
  "default" | "info" | "warning" | "error"
> = {
  callout: "default",
  info: "info",
  tip: "info",
  warning: "warning",
  error: "error",
};

/**
 * Maps chunk variants to Nextra Callout types
 */
const VARIANT_TYPE_MAP: Record<
  string,
  "default" | "info" | "warning" | "error"
> = {
  default: "default",
  info: "info",
  success: "info",
  warning: "warning",
  destructive: "error",
};

// Regex patterns for detecting JSX/HTML content
const COMPONENT_TAG_REGEX = /<[A-Z][a-zA-Z]*[\s>]/;
const DETAILS_TAG_REGEX = /<details/;
const SUMMARY_TAG_REGEX = /<summary/;

/**
 * Checks if content contains JSX/HTML tags
 */
function hasJSXContent(content: string): boolean {
  // Check for common JSX/HTML patterns
  return (
    COMPONENT_TAG_REGEX.test(content) || // Component tags like <Callout>
    DETAILS_TAG_REGEX.test(content) || // HTML details tag
    SUMMARY_TAG_REGEX.test(content)
  ); // HTML summary tag
}

/**
 * Strip top-level MDX import/export lines from a content block.
 */
function stripMdxImports(content: string): string {
  const lines = content.split("\n");
  const result: string[] = [];
  let inCodeFence = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      inCodeFence = !inCodeFence;
      result.push(line);
      continue;
    }

    if (
      !inCodeFence &&
      (trimmed.startsWith("import ") || trimmed.startsWith("export "))
    ) {
      continue;
    }

    result.push(line);
  }

  return result.join("\n");
}

const MDX_COMPONENTS = {
  Callout,
  Steps,
  Tabs,
  TabbedCodeBlock,
  TableOfContents,
  ToolFooter,
  SignupLink,
  DataTable,
};

const mdxCache = new Map<
  string,
  React.ComponentType<{ components?: typeof MDX_COMPONENTS }>
>();

/**
 * Renders MDX content from a string with custom components.
 */
function MdxContent({ content }: { content: string }) {
  const source = useMemo(() => stripMdxImports(content), [content]);
  const [Component, setComponent] = useState<React.ComponentType<{
    components?: typeof MDX_COMPONENTS;
  }> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (mdxCache.has(source)) {
      setComponent(() => mdxCache.get(source) ?? null);
      return;
    }

    let cancelled = false;
    setError(null);
    setComponent(null);

    evaluate(source, {
      ...runtime,
      remarkPlugins: [remarkGfm],
    })
      .then((result) => {
        if (cancelled) {
          return;
        }
        mdxCache.set(source, result.default);
        setComponent(() => result.default);
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to render MDX");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [source]);

  if (error) {
    return (
      <div className="my-3 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-red-300 text-sm">
        Failed to render section: {error}
      </div>
    );
  }

  if (!Component) {
    return null;
  }

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <Component components={MDX_COMPONENTS} />
    </div>
  );
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
        <code className="font-mono text-gray-100 text-sm">{content}</code>
      </pre>
    );
  }

  // Render complex MDX content directly
  if (type === "markdown" || hasJSXContent(content)) {
    return (
      <div className="my-3">
        <MdxContent content={content} />
      </div>
    );
  }

  // Handle callout types (callout, info, tip, warning, error)
  // Determine the callout type from chunk type or variant
  let calloutType: "default" | "info" | "warning" | "error" = "default";

  if (variant && VARIANT_TYPE_MAP[variant]) {
    calloutType = VARIANT_TYPE_MAP[variant];
  } else if (CALLOUT_TYPE_MAP[type]) {
    calloutType = CALLOUT_TYPE_MAP[type];
  }

  return (
    <Callout title={title} type={calloutType}>
      <MdxContent content={content} />
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
