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
  // Handle edge case: if ID is exactly "api", don't produce double underscore.
  if (id.endsWith("api") && !id.endsWith("_api") && id !== "api") {
    return `${PACKAGE_PREFIX}${id.slice(0, -3)}_api`;
  }

  return `${PACKAGE_PREFIX}${id}`;
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

// =============================================================================
// Tool Metadata Style Maps
// =============================================================================

/**
 * Tailwind classes for each operation enum value.
 * Fallback to TOOL_METADATA_FALLBACK_STYLE for unknown values.
 */
export const TOOL_METADATA_OPERATION_STYLES: Record<string, string> = {
  read: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  create: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  update: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  delete: "border-rose-500/40 bg-rose-500/10 text-rose-300",
  opaque: "border-violet-500/40 bg-violet-500/10 text-violet-300",
};

/**
 * Tailwind classes for each service domain enum value.
 * Fallback to TOOL_METADATA_FALLBACK_STYLE for unknown values.
 */
export const TOOL_METADATA_SERVICE_DOMAIN_STYLES: Record<string, string> = {
  calendar: "border-blue-400/40 bg-blue-400/10 text-blue-300",
  cloud_storage: "border-sky-500/40 bg-sky-500/10 text-sky-300",
  code_sandbox: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  crm: "border-indigo-500/40 bg-indigo-500/10 text-indigo-300",
  customer_support: "border-teal-500/40 bg-teal-500/10 text-teal-300",
  documents: "border-lime-500/40 bg-lime-500/10 text-lime-300",
  ecommerce: "border-orange-500/40 bg-orange-500/10 text-orange-300",
  email: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  financial_data: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300",
  geospatial: "border-green-500/40 bg-green-500/10 text-green-300",
  messaging: "border-sky-500/40 bg-sky-500/10 text-sky-300",
  music_streaming: "border-pink-500/40 bg-pink-500/10 text-pink-300",
  payments: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  presentations: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  project_management: "border-cyan-400/40 bg-cyan-400/10 text-cyan-300",
  social_media: "border-violet-500/40 bg-violet-500/10 text-violet-300",
  source_code: "border-slate-500/40 bg-slate-500/10 text-slate-300",
  spreadsheets: "border-lime-400/40 bg-lime-400/10 text-lime-300",
  travel: "border-rose-400/40 bg-rose-400/10 text-rose-300",
  video_conferencing:
    "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300",
  video_hosting: "border-red-500/40 bg-red-500/10 text-red-300",
  web_scraping: "border-zinc-500/40 bg-zinc-500/10 text-zinc-300",
};

/**
 * Fallback style for enum values not found in the maps above.
 */
export const TOOL_METADATA_FALLBACK_STYLE =
  "border-muted/60 bg-muted/20 text-muted-foreground";
