import { stableStringify } from "../merger/data-merger.js";
import type { CustomSections, MergedToolkit } from "../types/index.js";

const customSectionsFromToolkit = (toolkit: MergedToolkit): CustomSections => ({
  documentationChunks: toolkit.documentationChunks ?? [],
  customImports: toolkit.customImports ?? [],
  subPages: toolkit.subPages ?? [],
  toolChunks: Object.fromEntries(
    (toolkit.tools ?? [])
      .filter((tool) => tool.documentationChunks?.length)
      .map((tool) => [tool.name, tool.documentationChunks])
  ),
});

export const getChangedToolkitIdsFromCustomSections = (
  current: Readonly<Record<string, CustomSections>>,
  previous: ReadonlyMap<string, MergedToolkit>
): string[] => {
  const ids = new Set([
    ...Object.keys(current).map((id) => id.toLowerCase()),
    ...[...previous.keys()].map((id) => id.toLowerCase()),
  ]);
  const currentById = new Map(
    Object.entries(current).map(([id, sections]) => [
      id.toLowerCase(),
      sections,
    ])
  );
  return [...ids].filter((id) => {
    const currentSections = currentById.get(id) ?? {
      documentationChunks: [],
      customImports: [],
      subPages: [],
      toolChunks: {},
    };
    const previousToolkit = [...previous.entries()].find(
      ([previousId]) => previousId.toLowerCase() === id
    )?.[1];
    const previousSections = previousToolkit
      ? customSectionsFromToolkit(previousToolkit)
      : {
          documentationChunks: [],
          customImports: [],
          subPages: [],
          toolChunks: {},
        };
    return (
      stableStringify(currentSections) !== stableStringify(previousSections)
    );
  });
};
