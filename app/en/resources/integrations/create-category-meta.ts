import type { MetaRecord } from "nextra";

type ToolkitType =
  | "arcade"
  | "arcade_starter"
  | "community"
  | "verified"
  | "auth";

export type CategoryEntry = {
  slug: string;
  title: string;
  href: string;
  type: ToolkitType;
};

/**
 * Builds a Nextra MetaRecord for an integration category, automatically
 * inserting "Optimized" and "Starter" separator headings based on toolkit type.
 *
 * - "Optimized" group: any entry whose type is not "arcade_starter"
 * - "Starter" group: entries with type "arcade_starter"
 *
 * A separator is only emitted when its group is non-empty, so categories
 * with a single type do not show an unnecessary heading.
 */
export function createCategoryMeta(entries: CategoryEntry[]): MetaRecord {
  const optimized = entries.filter((e) => e.type !== "arcade_starter");
  const starter = entries.filter((e) => e.type === "arcade_starter");

  const result: MetaRecord = {};

  if (optimized.length > 0) {
    result["-- Optimized"] = { type: "separator", title: "Optimized" };
    for (const entry of optimized) {
      result[entry.slug] = { title: entry.title, href: entry.href };
    }
  }

  if (starter.length > 0) {
    result["-- Starter"] = { type: "separator", title: "Starter" };
    for (const entry of starter) {
      result[entry.slug] = { title: entry.title, href: entry.href };
    }
  }

  return result;
}
