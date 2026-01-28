/**
 * Toolkit documentation constants
 *
 * Centralized configuration for URLs, badges, labels, and other constants
 * used throughout the toolkit documentation components.
 */

// =============================================================================
// External URLs
// =============================================================================

/**
 * GitHub organization URL
 */
export const GITHUB_ORG_URL = "https://github.com/arcadeai";

/**
 * GitHub repository URL pattern for toolkit code
 * Use: `${GITHUB_ORG_URL}/arcade_${toolkitId.toLowerCase()}`
 */
export const GITHUB_REPO_PREFIX = "arcade_";

/**
 * License file URL
 */
export const LICENSE_URL = `${GITHUB_ORG_URL}/arcade-ai/blob/main/LICENSE`;

/**
 * PyPI base URL
 */
export const PYPI_BASE_URL = "https://pypi.org/project";

/**
 * Shields.io base URL for badges
 */
export const SHIELDS_IO_BASE_URL = "https://img.shields.io";

/**
 * Arcade Dashboard URLs
 */
export const ARCADE_DASHBOARD = {
  baseUrl: "https://app.arcade.dev",
  playgroundExecute: "https://app.arcade.dev/playground/execute",
  login: "https://app.arcade.dev/login",
} as const;

// =============================================================================
// Internal Routes
// =============================================================================

/**
 * Auth provider documentation base path
 */
export const AUTH_PROVIDER_DOCS_PATH = "/references/auth-providers";

// =============================================================================
// Package Naming
// =============================================================================

/**
 * Package name prefix for PyPI packages
 */
export const PACKAGE_PREFIX = "arcade_";

/**
 * Generate PyPI package name from toolkit ID
 */
export function getPackageName(toolkitId: string): string {
  const id = toolkitId
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");

  // Many "*Api" toolkits publish as "<name>_api" (not "<name>api").
  if (id.endsWith("api") && !id.endsWith("_api")) {
    return `${PACKAGE_PREFIX}${id.slice(0, -3)}_api`;
  }

  return `${PACKAGE_PREFIX}${id}`;
}

/**
 * Generate GitHub repository URL from toolkit ID
 */
export function getGitHubRepoUrl(toolkitId: string): string {
  const id = toolkitId.toLowerCase();
  const repoId =
    id.endsWith("api") && !id.endsWith("_api") && !id.endsWith("-api")
      ? `${id.slice(0, -3)}_api`
      : id;
  return `${GITHUB_ORG_URL}/${GITHUB_REPO_PREFIX}${repoId}`;
}

/**
 * Generate PyPI project URL from package name
 */
export function getPyPIUrl(packageName: string): string {
  return `${PYPI_BASE_URL}/${packageName}/`;
}

/**
 * Generate auth provider docs URL from provider ID
 */
export function getAuthProviderDocsUrl(providerId: string): string {
  return `${AUTH_PROVIDER_DOCS_PATH}/${providerId.toLowerCase()}`;
}

// =============================================================================
// Badges Configuration
// =============================================================================

export type BadgeConfig = {
  alt: string;
  src: string | ((packageName: string) => string);
  href: string | ((packageName: string) => string);
};

/**
 * PyPI badge configurations
 */
export const PYPI_BADGES: BadgeConfig[] = [
  {
    alt: "PyPI Version",
    src: (pkg) => `${SHIELDS_IO_BASE_URL}/pypi/v/${pkg}`,
    href: (pkg) => getPyPIUrl(pkg),
  },
  {
    alt: "Python Versions",
    src: (pkg) => `${SHIELDS_IO_BASE_URL}/pypi/pyversions/${pkg}`,
    href: (pkg) => getPyPIUrl(pkg),
  },
  {
    alt: "Wheel Status",
    src: (pkg) => `${SHIELDS_IO_BASE_URL}/pypi/wheel/${pkg}`,
    href: (pkg) => getPyPIUrl(pkg),
  },
  {
    alt: "Downloads",
    src: (pkg) => `${SHIELDS_IO_BASE_URL}/pypi/dm/${pkg}`,
    href: (pkg) => getPyPIUrl(pkg),
  },
];

/**
 * License badge configuration
 */
export const LICENSE_BADGE: BadgeConfig = {
  alt: "License",
  src: `${SHIELDS_IO_BASE_URL}/badge/License-MIT-yellow.svg`,
  href: LICENSE_URL,
};

// =============================================================================
// Default Values
// =============================================================================

/**
 * Default toolkit author
 */
export const DEFAULT_AUTHOR = "Arcade";

// =============================================================================
// Auth Type Labels
// =============================================================================

export const AUTH_TYPE_LABELS = {
  oauth2: "User authorization",
  api_key: "API key authentication",
  mixed: "User authorization",
  mixedSuffix: "and API key authentication",
  none: "No authentication required",
} as const;

// =============================================================================
// UI Constants
// =============================================================================

/**
 * Scrolling cell animation settings
 */
export const SCROLLING_CELL = {
  pixelsPerSecond: 50,
  delayMs: 300,
  minDurationMs: 1000,
  returnDurationMs: 300,
  extraPadding: 16,
} as const;

/**
 * Icon sizes used throughout components
 */
export const ICON_SIZES = {
  toolkitHeader: "h-20 w-20",
  toolkitHeaderSmall: "h-16 w-16",
  badge: "h-3.5 w-3.5",
  stat: "h-4 w-4",
  inline: "h-3 w-3",
} as const;
