import type { DocumentationChunk } from "../types";

const DEFAULT_CHUNK_PRIORITY = 100;
const HEADER_PREFIX_REGEX = /^#+\s*/;

type SortableDocumentationChunk = Pick<
  DocumentationChunk,
  "header" | "priority"
> &
  Partial<Pick<DocumentationChunk, "content">>;

function compareByHeader<T extends SortableDocumentationChunk>(
  left: T,
  right: T
): number | null {
  const leftHeader = (left.header ?? "")
    .replace(HEADER_PREFIX_REGEX, "")
    .trim();
  const rightHeader = (right.header ?? "")
    .replace(HEADER_PREFIX_REGEX, "")
    .trim();

  if (leftHeader && rightHeader) {
    return leftHeader.localeCompare(rightHeader);
  }
  if (leftHeader) {
    return -1;
  }
  if (rightHeader) {
    return 1;
  }
  return null;
}

export function sortDocumentationChunks<T extends SortableDocumentationChunk>(
  chunks: readonly T[]
): T[] {
  return [...chunks].sort((left, right) => {
    const priorityDifference =
      (left.priority ?? DEFAULT_CHUNK_PRIORITY) -
      (right.priority ?? DEFAULT_CHUNK_PRIORITY);
    if (priorityDifference !== 0) {
      return priorityDifference;
    }

    const headerDifference = compareByHeader(left, right);
    if (headerDifference !== null) {
      return headerDifference;
    }

    return (left.content ?? "").localeCompare(right.content ?? "");
  });
}
