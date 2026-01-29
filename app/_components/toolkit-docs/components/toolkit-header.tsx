"use client";

import { Badge, ByocBadge, ProBadge } from "@arcadeai/design-system";
import { KeyRound, Wrench } from "lucide-react";
import type React from "react";

import { TYPE_CONFIG } from "../../../en/resources/integrations/components/type-config";
import {
  AUTH_TYPE_LABELS,
  DEFAULT_AUTHOR,
  getAuthProviderDocsUrl,
  getPackageName,
  LICENSE_BADGE,
  PYPI_BADGES,
} from "../constants";
import type { ToolkitHeaderProps, ToolkitType } from "../types";

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
  const TypeIcon = typeInfo?.icon;

  const showBadges = isPro || isByoc || typeInfo;

  if (!showBadges) {
    return null;
  }

  return (
    <div className="mt-3 flex flex-wrap items-center gap-1.5">
      {typeInfo && TypeIcon && (
        <Badge
          className="gap-1 border-gray-300 bg-gray-100 text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
          variant="outline"
        >
          <TypeIcon className={`h-3.5 w-3.5 ${typeInfo.color}`} />
          {typeInfo.label}
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
  author = DEFAULT_AUTHOR,
  toolStats,
}: ToolkitHeaderProps): React.ReactElement {
  // Icon comes from the JSON metadata - the source of truth
  const iconUrl = metadata.iconUrl;
  const packageName = getPackageName(id);

  // Determine auth display
  const authProviderName = auth?.providerId
    ? auth.providerId.charAt(0).toUpperCase() + auth.providerId.slice(1)
    : null;
  const authDocsUrl = auth?.providerId
    ? getAuthProviderDocsUrl(auth.providerId)
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

  // Icon comes from the JSON's iconUrl - always use img tag
  const iconNode = iconUrl ? (
    <div className="flex shrink-0 items-center justify-center">
      <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-lg ring-1 ring-white/10">
        <img
          alt={`${label} icon`}
          className="h-20 w-20"
          height={80}
          src={iconUrl}
          width={80}
        />
      </div>
    </div>
  ) : null;

  const authNode = (() => {
    if (auth?.type === "oauth2") {
      return (
        <>
          {AUTH_TYPE_LABELS.oauth2}
          {authProviderLink && <> via the {authProviderLink}</>}
        </>
      );
    }
    if (auth?.type === "api_key") {
      return AUTH_TYPE_LABELS.api_key;
    }
    if (auth?.type === "mixed") {
      return (
        <>
          {AUTH_TYPE_LABELS.mixed}
          {authProviderLink && <> via the {authProviderLink}</>}{" "}
          {AUTH_TYPE_LABELS.mixedSuffix}
        </>
      );
    }
    return AUTH_TYPE_LABELS.none;
  })();

  return (
    <div
      className="mt-4 mb-6 overflow-hidden rounded-xl bg-neutral-dark/40"
      data-testid="toolkit-header"
    >
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
        {/* Icon - centered vertically */}
        {iconNode}

        {/* Content */}
        <div className="min-w-0 flex-1 space-y-4">
          {/* Badges */}
          <ToolkitBadges
            isByoc={metadata.isBYOC}
            isPro={metadata.isPro}
            type={metadata.type}
          />

          {/* Description */}
          {description && (
            <p className="text-base text-foreground leading-relaxed">
              {description}
            </p>
          )}

          {/* Info Grid */}
          <div className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
            {/* Author */}
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Author:</span>
              <span className="font-medium text-foreground">{author}</span>
            </div>

            {/* Version */}
            {version && (
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Version:</span>
                <code className="font-mono text-foreground text-xs">
                  {version}
                </code>
              </div>
            )}

            {/* Auth info */}
            <div className="flex items-start gap-2 sm:col-span-2">
              <span className="text-muted-foreground">Auth:</span>
              <span className="font-medium text-foreground">{authNode}</span>
            </div>
          </div>

          {/* Tool Stats */}
          {toolStats && (
            <div className="flex flex-wrap items-center gap-4 pt-3 text-sm">
              {/* Total tools */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <Wrench className="h-4 w-4" />
                <span className="font-medium text-foreground">
                  {toolStats.total}
                </span>
                <span>tools</span>
              </div>

              {/* Tools with secrets */}
              {toolStats.withSecrets > 0 && (
                <div className="flex items-center gap-2">
                  <KeyRound className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span className="font-medium text-foreground">
                    {toolStats.withSecrets}
                  </span>
                  <span className="text-muted-foreground">require secrets</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* PyPI Badges */}
      {id && (
        <div className="bg-neutral-dark/20 px-6 py-3">
          <div className="flex flex-wrap justify-center gap-2">
            {PYPI_BADGES.map((badge) => (
              <a
                href={
                  typeof badge.href === "function"
                    ? badge.href(packageName)
                    : badge.href
                }
                key={badge.alt}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  alt={badge.alt}
                  className="h-5 w-auto"
                  height={20}
                  src={
                    typeof badge.src === "function"
                      ? badge.src(packageName)
                      : badge.src
                  }
                  width={80}
                />
              </a>
            ))}
            <a
              href={
                typeof LICENSE_BADGE.href === "function"
                  ? LICENSE_BADGE.href(packageName)
                  : LICENSE_BADGE.href
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                alt={LICENSE_BADGE.alt}
                className="h-5 w-auto"
                height={20}
                src={
                  typeof LICENSE_BADGE.src === "function"
                    ? LICENSE_BADGE.src(packageName)
                    : LICENSE_BADGE.src
                }
                width={80}
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToolkitHeader;
