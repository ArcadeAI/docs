import type { Toolkit } from "@arcadeai/design-system";

const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]+/g;

export type ToolkitSlugSource = {
  id: string;
  docsLink?: string | null;
};

/**
 * Toolkit with an optional docsLink property.
 * The design-system `Toolkit` type doesn't include `docsLink` in its
 * type definitions, but some entries carry it at runtime. This type
 * makes the property explicit so both server and client code can share it.
 */
export type ToolkitWithDocsLink = Toolkit & { docsLink?: string | null };

export function normalizeToolkitId(value: string): string {
  return value.toLowerCase().replace(TOOLKIT_ID_NORMALIZER, "");
}

const extractSlugFromPath = (path: string): string | null => {
  const segments = path.split("/").filter(Boolean);
  return segments.at(-1) ?? null;
};

export function getToolkitSlug({ id, docsLink }: ToolkitSlugSource): string {
  if (docsLink) {
    try {
      const url = new URL(docsLink);
      const slug = extractSlugFromPath(url.pathname);
      if (slug) {
        return slug;
      }
    } catch {
      const slug = extractSlugFromPath(docsLink);
      if (slug) {
        return slug;
      }
    }
  }

  return normalizeToolkitId(id);
}
