const TOOLKIT_ID_NORMALIZER = /[^a-z0-9]+/g;

export type ToolkitSlugSource = {
  id: string;
  docsLink?: string | null;
};

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
      if (slug) return slug;
    } catch {
      const slug = extractSlugFromPath(docsLink);
      if (slug) return slug;
    }
  }

  return normalizeToolkitId(id);
}
