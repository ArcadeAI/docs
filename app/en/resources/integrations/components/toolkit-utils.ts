import { TOOLKIT_CATALOGUE } from "@arcadeai/design-system";

/**
 * Normalize string for comparison (remove hyphens and underscores)
 */
export const normalizeString = (str: string) =>
  str.toLowerCase().replace(/[-_]/g, "");

/**
 * Find toolkit from pathname
 * e.g., /en/resources/integrations/productivity/gmail/reference -> Gmail toolkit
 */
export const findToolkitFromPath = (pathname: string | null) => {
  if (!pathname) {
    return null;
  }

  const pathSegments = pathname.split("/").filter(Boolean);
  // URL structure: /en/resources/integrations/{category}/{toolkit}/reference
  // The toolkit name is the second-to-last segment
  const toolkitSlug = pathSegments.at(-2);

  if (!toolkitSlug) {
    return null;
  }

  return (
    Object.values(TOOLKIT_CATALOGUE).find(
      (t) => normalizeString(t.id) === normalizeString(toolkitSlug)
    ) || null
  );
};
