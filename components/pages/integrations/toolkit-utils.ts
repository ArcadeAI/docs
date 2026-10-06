import { TOOLKIT_CATALOGUE } from "@arcadeai/design-system";

/**
 * Normalize string for comparison (remove hyphens and underscores)
 */
export const normalizeString = (str: string) =>
  str.toLowerCase().replace(/[-_]/g, "");

/**
 * Find toolkit from pathname
 * e.g., /en/resources/integrations/productivity/gmail -> Gmail toolkit
 * e.g., /en/resources/integrations/productivity/gmail/reference -> Gmail toolkit
 */
export const findToolkitFromPath = (pathname: string | null) => {
  if (!pathname) {
    return null;
  }

  const pathSegments = pathname.split("/").filter(Boolean);
  // URL structure can be:
  // - /en/resources/integrations/{category}/{toolkit}
  // - /en/resources/integrations/{category}/{toolkit}/reference
  const lastSegment = pathSegments.at(-1);
  const toolkitSlug =
    lastSegment === "reference" ? pathSegments.at(-2) : lastSegment;

  if (!toolkitSlug) {
    return null;
  }

  return (
    Object.values(TOOLKIT_CATALOGUE).find(
      (t) => normalizeString(t.id) === normalizeString(toolkitSlug)
    ) || null
  );
};
