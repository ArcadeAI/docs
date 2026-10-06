"use client";
import {
  Badge,
  ByocBadge,
  Card,
  CardHeader,
  CardTitle,
  ProBadge,
  type ToolkitType,
} from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import { Handshake, Package } from "lucide-react";
import Link from "next/link";
import posthog from "posthog-js";
import type React from "react";
import { useCallback, useState } from "react";
import { ComingSoonModal } from "./coming-soon-modal";
import { TOOL_CARD_TYPE_CONFIG } from "./type-config";

interface ToolCardProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  iconUrl?: string;
  isByoc?: boolean;
  isComingSoon?: boolean;
  isPartner?: boolean;
  isPro?: boolean;
  link?: string;
  name: string;
  type: ToolkitType;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  name: toolName,
  icon: ToolkitIcon,
  iconUrl,
  link,
  type,
  isComingSoon = false,
  isByoc = false,
  isPro = false,
  isPartner = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    className,
    label,
    icon: IconComponent,
    color,
  } = TOOL_CARD_TYPE_CONFIG[type];
  const showHeaderBadges = isByoc || isPro || isPartner || isComingSoon;

  const trackToolCardClick = useCallback(() => {
    posthog.capture("Tool card clicked", {
      is_byoc: isByoc,
      is_coming_soon: isComingSoon,
      is_partner: isPartner,
      is_pro: isPro,
      tool_link: link,
      tool_name: toolName,
      tool_type: type,
    });
  }, [isByoc, isComingSoon, isPartner, isPro, link, toolName, type]);

  const handleCardClick = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      trackToolCardClick();
      if (isComingSoon) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    },
    [isComingSoon, trackToolCardClick]
  );

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardClick(e);
      }
    },
    [handleCardClick]
  );

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  let iconNode: React.ReactNode;
  if (ToolkitIcon) {
    iconNode = <ToolkitIcon className="size-9" />;
  } else if (iconUrl) {
    iconNode = (
      <img
        alt={`${toolName} icon`}
        className="size-9"
        height={36}
        src={iconUrl}
        width={36}
      />
    );
  } else {
    iconNode = <Package className="size-9 text-gray-400 dark:text-gray-500" />;
  }

  const cardContent = (
    <Card
      className={cn(
        "flex h-full flex-col gap-1.5 border bg-white/90 py-3 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-900/80",
        className,
        isComingSoon && "relative"
      )}
    >
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex items-center space-x-5">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
              {iconNode}
            </div>
            <div>
              <CardTitle className="mb-0.5 text-base text-gray-900 dark:text-gray-50">
                {toolName}
              </CardTitle>
              <div className="flex items-center text-gray-600 text-xs dark:text-gray-400">
                <IconComponent className={`h-3 w-3 ${color} mr-1`} />
                {label}
              </div>
            </div>
          </div>
          {showHeaderBadges ? (
            <div
              className={cn(
                "mt-1",
                "sm:mt-1.5",
                "flex",
                "items-center",
                "gap-1.5"
              )}
            >
              {isComingSoon ? (
                <Badge
                  className="shrink-0 whitespace-nowrap border-gray-400 bg-gray-200/70 text-gray-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-300"
                  variant="outline"
                >
                  Coming soon
                </Badge>
              ) : null}
              {isByoc ? <ByocBadge className="gap-1.5 rounded-md" /> : null}
              {isPro ? <ProBadge className="gap-1.5 rounded-md" /> : null}
              {isPartner ? (
                <Badge
                  className="shrink-0 gap-1.5 whitespace-nowrap rounded-md border-pink-400/50 bg-pink-500/10 text-pink-700 dark:border-pink-400/50 dark:bg-pink-400/10 dark:text-pink-300"
                  variant="outline"
                >
                  <Handshake className="h-3 w-3" />
                  Partner
                </Badge>
              ) : null}
            </div>
          ) : null}
        </div>
      </CardHeader>
    </Card>
  );

  return (
    <>
      {isComingSoon || !link ? (
        <button
          aria-label={`${toolName} - Coming Soon`}
          className="w-full cursor-pointer text-left"
          onClick={handleCardClick}
          onKeyDown={handleCardKeyDown}
          type="button"
        >
          {cardContent}
        </button>
      ) : (
        <Link href={link} onClick={trackToolCardClick}>
          {cardContent}
        </Link>
      )}

      {isComingSoon ? (
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          toolkitName={toolName}
        />
      ) : null}
    </>
  );
};
