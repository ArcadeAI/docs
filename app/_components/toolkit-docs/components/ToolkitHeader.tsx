"use client";

import {
  Badge,
  ByocBadge,
  getToolkitIconByName,
  ProBadge,
} from "@arcadeai/design-system";
import type React from "react";

import type { ToolkitHeaderProps, ToolkitType } from "../types";

/**
 * Configuration for toolkit type badges
 */
const TYPE_CONFIG: Record<
  Exclude<ToolkitType, "auth">,
  { label: string; color: string }
> = {
  arcade: { label: "Arcade", color: "text-brand-accent" },
  arcade_starter: { label: "Starter", color: "text-gray-500" },
  verified: { label: "Verified", color: "text-green-600" },
  community: { label: "Community", color: "text-purple-600" },
};

/**
 * Renders toolkit type, BYOC, and Pro badges
 */
function ToolkitBadges({
  type,
  isByoc,
  isPro,
}: {
  type: ToolkitType;
  isByoc: boolean;
  isPro: boolean;
}) {
  const typeInfo = type !== "auth" ? TYPE_CONFIG[type] : null;

  const showBadges = isPro || isByoc || typeInfo;

  if (!showBadges) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5">
      {typeInfo && (
        <Badge
          className="gap-1 border-gray-300 bg-gray-100 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
          variant="outline"
        >
          <span className={typeInfo.color}>{typeInfo.label}</span>
        </Badge>
      )}
      {isByoc && <ByocBadge className="gap-1.5 rounded-md" />}
      {isPro && <ProBadge className="gap-1.5 rounded-md" />}
    </div>
  );
}

/**
 * ToolkitHeader
 *
 * Renders the header section for a toolkit documentation page, including:
 * - Toolkit icon (from Design System)
 * - Toolkit name badges (type, BYOC, Pro)
 * - Description
 * - Author
 * - Auth provider link
 *
 * @example
 * ```tsx
 * <ToolkitHeader
 *   id="Github"
 *   label="GitHub"
 *   description="GitHub repository and collaboration tools"
 *   metadata={toolkitData.metadata}
 *   auth={toolkitData.auth}
 * />
 * ```
 */
export function ToolkitHeader({
  id,
  label,
  description,
  metadata,
  auth,
  version,
  author = "Arcade",
}: ToolkitHeaderProps): React.ReactElement {
  // Get the icon component from Design System
  const IconComponent = getToolkitIconByName(label);

  // Determine auth display
  const authProviderName = auth?.providerId
    ? auth.providerId.charAt(0).toUpperCase() + auth.providerId.slice(1)
    : null;
  const authDocsUrl = auth?.providerId
    ? `/references/auth-providers/${auth.providerId.toLowerCase()}`
    : null;
  const authProviderLink =
    authProviderName && authDocsUrl ? (
      <a
        className="text-brand-accent no-underline underline-offset-0.5 hover:underline"
        href={authDocsUrl}
      >
        {authProviderName} auth provider
      </a>
    ) : null;

  return (
    <div
      className="mt-5 mb-6 rounded-lg border-4 border-neutral-dark-medium p-6 text-text-color shadow-lg sm:p-3"
      data-testid="toolkit-header"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        {/* Icon */}
        {IconComponent && (
          <div className="flex items-center justify-center sm:justify-start">
            <div className="rounded-lg bg-neutral-light p-3 dark:bg-neutral-dark-medium">
              <IconComponent className="h-16 w-16 shrink-0" />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Badges */}
          <ToolkitBadges
            isByoc={metadata.isBYOC}
            isPro={metadata.isPro}
            type={metadata.type}
          />

          {/* Description */}
          {description && (
            <p className="my-1.5 text-base text-text-color sm:text-sm">
              <strong className="text-text-color">Description: </strong>
              {description}
            </p>
          )}

          {/* Author */}
          <p className="my-1.5 text-base text-text-color sm:text-sm">
            <strong className="text-text-color">Author: </strong>
            {author}
          </p>

          {/* Version (optional) */}
          {version && (
            <p className="my-1.5 text-base text-text-color sm:text-sm">
              <strong className="text-text-color">Version: </strong>
              {version}
            </p>
          )}

          {/* Code link */}
          {id && (
            <p className="my-1.5 text-base text-text-color sm:text-sm">
              <strong className="text-text-color">Code: </strong>
              <a
                className="text-brand-accent no-underline underline-offset-0.5 hover:underline"
                href={`https://github.com/arcadeai/arcade_${id.toLowerCase()}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          )}

          {/* Auth info */}
          <p className="my-1.5 text-base text-text-color sm:text-sm">
            <strong className="text-text-color">Auth: </strong>
            {auth?.type === "oauth2" ? (
              <>
                User authorization
                {authProviderLink && <> via the {authProviderLink}</>}
              </>
            ) : auth?.type === "api_key" ? (
              "API key authentication"
            ) : auth?.type === "mixed" ? (
              <>
                User authorization
                {authProviderLink && <> via the {authProviderLink}</>} and API
                key authentication
              </>
            ) : (
              "No authentication required"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToolkitHeader;
