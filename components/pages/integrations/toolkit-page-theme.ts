/**
 * Shared Nextra theme config for all toolkit [toolkitId] pages.
 * Toolkit pages render their own breadcrumb and TOC, so Nextra's
 * built-in versions are disabled. copyPage stays enabled so the
 * sitewide CopyPageOverride can intercept and serve clean markdown.
 */
export const toolkitPageTheme = {
  breadcrumb: false,
  toc: false,
  copyPage: true,
} as const;
