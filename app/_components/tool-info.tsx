"use client";
import {
  Badge,
  ByocBadge,
  getToolkitIconByName,
  ProBadge,
} from "@arcadeai/design-system";
import { usePathname } from "next/navigation";
import type React from "react";
import { findToolkitFromPath } from "../en/resources/integrations/components/toolkit-utils";
import { TYPE_CONFIG } from "../en/resources/integrations/components/type-config";

type ToolInfoProps = {
  description: string;
  author: string;
  codeLink: string;
  authType: "oauth2";
  authProviderName?: string;
  authProviderDocsUrl?: string;
  versions: string[];
  note?: string;
};

// Render toolkit badges
const ToolkitBadges: React.FC<{
  typeInfo: { label: string; icon: React.ElementType; color: string } | null;
  isByoc: boolean;
  isPro: boolean;
}> = ({ typeInfo, isByoc, isPro }) => {
  const TypeIcon = typeInfo?.icon;

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
};

const ToolInfo: React.FC<ToolInfoProps> = ({
  description,
  author,
  codeLink,
  authType,
  authProviderName,
  authProviderDocsUrl,
  note,
}) => {
  const pathname = usePathname();

  const resolvedAuthDocsUrl =
    authProviderName && !authProviderDocsUrl
      ? `/references/auth-providers/${authProviderName.toLowerCase()}`
      : authProviderDocsUrl;

  const toolkit = findToolkitFromPath(pathname);
  const toolkitName = toolkit?.label;
  const IconComponent = toolkitName ? getToolkitIconByName(toolkitName) : null;

  const isPro = toolkit?.isPro ?? false;
  const isByoc = toolkit?.isBYOC ?? false;
  const toolkitType = toolkit?.type;

  const typeInfo =
    toolkitType && toolkitType !== "auth" ? TYPE_CONFIG[toolkitType] : null;
  const showBadges = isPro || isByoc || typeInfo;

  return (
    <div className="mt-5 mb-6 rounded-lg border-4 border-neutral-dark-medium p-6 text-text-color shadow-lg sm:p-3">
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        {IconComponent && (
          <div className="flex items-center justify-center sm:justify-start">
            <div className="rounded-lg bg-neutral-light p-3 dark:bg-neutral-dark-medium">
              <IconComponent className="h-16 w-16 shrink-0" />
            </div>
          </div>
        )}
        <div className="min-w-0 flex-1">
          {showBadges && (
            <ToolkitBadges isByoc={isByoc} isPro={isPro} typeInfo={typeInfo} />
          )}
          <p className="my-1.5 text-base text-text-color sm:text-sm">
            <strong className="text-text-color">Description: </strong>{" "}
            {description}
          </p>
          <p className="my-1.5 text-base text-text-color sm:text-sm">
            <strong className="text-text-color">Author: </strong> {author}
          </p>
          {codeLink && (
            <p className="my-1.5 text-base text-text-color sm:text-sm">
              <strong className="text-text-color">Code: </strong>
              <a
                className="text-brand-accent no-underline underline-offset-0.5 hover:underline"
                href={codeLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </p>
          )}
          <p className="my-1.5 text-base text-text-color sm:text-sm">
            <strong className="text-text-color">Auth: </strong>
            {authType.toLowerCase() === "oauth2" ? (
              <>
                User authorization
                {authProviderName && resolvedAuthDocsUrl && (
                  <>
                    {" "}
                    via the{" "}
                    <a
                      className="text-brand-accent no-underline underline-offset-0.5 hover:underline"
                      href={resolvedAuthDocsUrl}
                    >
                      {authProviderName} auth provider
                    </a>
                  </>
                )}
              </>
            ) : (
              authType
            )}
          </p>
          {note && (
            <p className="my-1.5 text-base text-text-color sm:text-sm">
              <strong className="text-text-color">Note: </strong>
              {note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolInfo;
