import { readFile } from "fs/promises";

/**
 * Read a plain-text ignore list file.
 *
 * Format: one toolkit ID per line. Empty lines and lines starting with "#"
 * are ignored. IDs are normalized to lowercase for case-insensitive matching.
 *
 * Returns null when the file does not exist (the flag is optional).
 * Throws on unexpected I/O errors.
 */
export const readIgnoreList = async (
  filePath: string
): Promise<Set<string> | null> => {
  let content: string;

  try {
    content = await readFile(filePath, "utf-8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    throw error;
  }

  const ids = new Set<string>();
  for (const raw of content.split("\n")) {
    const line = raw.trim();
    if (line.length === 0 || line.startsWith("#")) {
      continue;
    }
    ids.add(line.toLowerCase());
  }

  return ids;
};
