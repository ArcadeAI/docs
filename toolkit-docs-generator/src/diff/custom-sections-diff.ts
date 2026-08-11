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
 * Return toolkit ids whose curation files differ from the prose embedded in
 * the previous artifact.
 *
 * Only toolkits with a curation file are considered. A missing file means
 * "not curated" and matches merge semantics (carry-forward), so those
 * toolkits are not flagged here.
 */
export const getChangedToolkitIdsFromCustomSections = (
  current: Readonly<Record<string, CustomSections>>,
  previous: ReadonlyMap<string, MergedToolkit>
): string[] => {
  const changed: string[] = [];

  for (const [toolkitId, currentSections] of Object.entries(current)) {
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

  return changed;
};
