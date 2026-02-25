import { readdir, rm } from "fs/promises";
import { basename, join } from "path";

/**
 * Delete toolkit JSON files from outputDir whose toolkit ID (the file's
 * base name without `.json`, lowercased) is in excludedIds.
 *
 * Never deletes `index.json`.
 * Returns the sorted list of deleted file names.
 */
export const removeExcludedToolkitFiles = async (
  outputDir: string,
  excludedIds: Set<string>
): Promise<string[]> => {
  if (excludedIds.size === 0) {
    return [];
  }

  const files = await readdir(outputDir);
  const deleted: string[] = [];

  for (const file of files) {
    if (!file.endsWith(".json") || file === "index.json") {
      continue;
    }

    const toolkitId = basename(file, ".json").toLowerCase();
    if (excludedIds.has(toolkitId)) {
      await rm(join(outputDir, file), { force: true });
      deleted.push(file);
    }
  }

  return deleted.sort();
};
