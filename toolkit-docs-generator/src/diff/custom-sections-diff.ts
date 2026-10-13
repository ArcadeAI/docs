import {
  getCustomSectionsSourceHash,
  stableStringify,
} from "../merger/data-merger";
import type { CustomSections, MergedToolkit } from "../types/index";

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

const findPreviousToolkit = (
  toolkitId: string,
  previous: ReadonlyMap<string, MergedToolkit>
): MergedToolkit | undefined =>
  [...previous.entries()].find(
    ([previousId]) => previousId.toLowerCase() === toolkitId.toLowerCase()
  )?.[1];

const emptyCustomSections = (): CustomSections => ({
  documentationChunks: [],
  customImports: [],
  subPages: [],
  toolChunks: {},
});

/**
 * Return toolkit ids whose authoritative curation differs from the prose
 * embedded in the previous artifact. Missing current entries compare as
 * empty, so deleting the final source file remains observable.
 */
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
  const changed: string[] = [];

  for (const toolkitId of ids) {
    const currentSections = currentById.get(toolkitId) ?? emptyCustomSections();
    const previousToolkit = findPreviousToolkit(toolkitId, previous);
    const previousSections = previousToolkit
      ? customSectionsFromToolkit(previousToolkit)
      : emptyCustomSections();

    const currentHash = getCustomSectionsSourceHash(currentSections);
    const hasChanged = previousToolkit?.curationSourceHash
      ? currentHash !== previousToolkit.curationSourceHash
      : stableStringify(currentSections) !== stableStringify(previousSections);

    if (hasChanged) {
      changed.push(toolkitId.toLowerCase());
    }
  }

  return changed.sort();
};
