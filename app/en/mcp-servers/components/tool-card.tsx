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
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { ComingSoonModal } from "./coming-soon-modal";
import { TOOL_CARD_TYPE_CONFIG } from "./type-config";

type ToolCardProps = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  type: ToolkitType;
  isComingSoon?: boolean;
  isByoc?: boolean;
  isPro?: boolean;
};

export const ToolCard: React.FC<ToolCardProps> = ({
  name: toolName,
  icon: ToolkitIcon,
  link,
  type,
  isComingSoon = false,
  isByoc = false,
  isPro = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    className,
    label,
    icon: IconComponent,
    color,
  } = TOOL_CARD_TYPE_CONFIG[type];
  const showHeaderBadges = isByoc || isPro || isComingSoon;

  const handleCardClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (isComingSoon) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
              <ToolkitIcon className="size-9" />
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
          {showHeaderBadges && (
            <div
              className={cn(
                "mt-1",
                "sm:mt-1.5",
                "flex",
                "items-center",
                "gap-1.5"
              )}
            >
              {isComingSoon && (
                <Badge
                  className="shrink-0 whitespace-nowrap border-gray-400 bg-gray-200/70 text-gray-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-300"
                  variant="outline"
                >
                  Coming soon
                </Badge>
              )}
              {isByoc && <ByocBadge className="gap-1.5 rounded-md" />}
              {isPro && <ProBadge className="gap-1.5 rounded-md" />}
            </div>
          )}
        </div>
      </CardHeader>
    </Card>
  );

  return (
    <>
      {isComingSoon ? (
        <button
          aria-label={`${toolName} - Coming Soon`}
          className="w-full cursor-pointer text-left"
          onClick={handleCardClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCardClick(e);
            }
          }}
          type="button"
        >
          {cardContent}
        </button>
      ) : (
        <Link href={link}>{cardContent}</Link>
      )}

      {isComingSoon && (
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          toolkitName={toolName}
        />
      )}
    </>
  );
};
