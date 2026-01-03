import { TOOLKIT_CATALOGUE } from "@arcadeai/design-system";

/**
 * Normalize string for comparison (remove hyphens and underscores)
 */
export const normalizeString = (str: string) =>
  str.toLowerCase().replace(/[-_]/g, "");

/**
 * Find toolkit from pathname
 * e.g., /en/mcp-servers/productivity/gmail -> Gmail toolkit
 */
export const findToolkitFromPath = (pathname: string | null) => {
  if (!pathname) {
    return null;
  }

  const pathSegments = pathname.split("/").filter(Boolean);
  const toolkitSlug = pathSegments.at(-1);

  if (!toolkitSlug) {
    return null;
  }

  return (
    Object.values(TOOLKIT_CATALOGUE).find(
      (t) => normalizeString(t.id) === normalizeString(toolkitSlug)
    ) || null
  );
};
