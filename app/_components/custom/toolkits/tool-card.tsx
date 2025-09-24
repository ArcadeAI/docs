"use client";
import {
  Badge,
  Card,
  CardContent as CardContentUi,
  CardHeader,
  CardTitle,
} from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import { BadgeCheck, CheckCircle, Key, Terminal, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { ComingSoonModal } from "./coming-soon-modal";

type ToolkitType =
  | "arcade"
  | "arcade_starter"
  | "verified"
  | "community"
  | "auth";

type ToolCardProps = {
  name: string;
  image: string;
  summary: string;
  link: string;
  type: ToolkitType;
  isComingSoon?: boolean;
};

const typeConfig: Record<
  ToolkitType,
  { className: string; label: string; icon: React.ElementType; color: string }
> = {
  arcade: {
    className:
      "border-emerald-600/20 hover:border-primary bg-emerald-600/[0.02] hover:bg-emerald-600/[0.03]",
    label: "Arcade Optimized Toolkit",
    icon: BadgeCheck,
    color: "text-emerald-400",
  },
  // biome-ignore lint/style/useNamingConvention: this is ok
  arcade_starter: {
    className:
      "border-orange-600/20 hover:border-primary bg-orange-600/[0.02] hover:bg-orange-600/[0.03]",
    label: "Arcade Starter Toolkit",
    icon: Terminal,
    color: "text-orange-400",
  },
  verified: {
    className:
      "border-blue-600/20 hover:border-primary bg-blue-600/[0.02] hover:bg-blue-600/[0.03]",
    label: "Verified Toolkit",
    icon: CheckCircle,
    color: "text-blue-400",
  },
  community: {
    className:
      "border-orange-600/20 hover:border-primary bg-orange-600/[0.02] hover:bg-orange-600/[0.03]",
    label: "Community Toolkit",
    icon: Users,
    color: "text-orange-400",
  },
  auth: {
    className:
      "border-purple-600/20 hover:border-primary bg-purple-600/[0.02] hover:bg-purple-600/[0.03]",
    label: "Auth Provider",
    icon: Key,
    color: "text-purple-400",
  },
};

export const ToolCard: React.FC<ToolCardProps> = ({
  name: toolName,
  image,
  summary,
  link,
  type,
  isComingSoon = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { className, label, icon: IconComponent, color } = typeConfig[type];

  const handleCardClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (isComingSoon) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Generate a consistent color based on the tool name
  const getColorFromName = (name: string) => {
    // Predefined attractive colors (tailwind colors at 500-600 level)
    const colors = [
      "bg-red-500",
      "bg-orange-500",
      "bg-amber-500",
      "bg-yellow-500",
      "bg-lime-500",
      "bg-green-500",
      "bg-emerald-500",
      "bg-teal-500",
      "bg-cyan-500",
      "bg-sky-500",
      "bg-blue-500",
      "bg-indigo-500",
      "bg-violet-500",
      "bg-purple-500",
      "bg-fuchsia-500",
      "bg-pink-500",
      "bg-rose-500",
    ];

    // Constants for hash calculation
    const hashMultiplier = 31;
    const maxSafeInteger = 2_147_483_647;

    // Simple hash function to get a number from the name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = (hash * hashMultiplier + name.charCodeAt(i)) % maxSafeInteger;
    }

    // Use absolute value to ensure positive index
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  // Get the first two letters of the name
  const firstTwoChars = toolName.substring(0, 2).toUpperCase();

  // Get color based on the name
  const bgColor = getColorFromName(toolName);

  const cardContent = (
    <Card
      className={cn(
        "flex h-full flex-col gap-1.5 border bg-gray-900/80 py-3 backdrop-blur-sm transition-all duration-300 hover:shadow-lg",
        className,
        isComingSoon && "relative"
      )}
    >
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex items-center space-x-5">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
              {!image || imageError ? (
                <div
                  className={`flex h-full w-full items-center justify-center ${bgColor} font-medium text-white`}
                >
                  {firstTwoChars}
                </div>
              ) : (
                <Image
                  alt={`${toolName} logo`}
                  className="object-cover"
                  height={40}
                  onError={handleImageError}
                  priority
                  src={`/images/icons/${image}`}
                  width={40}
                />
              )}
            </div>
            <div>
              <CardTitle className="text-base text-gray-50">
                {toolName}
              </CardTitle>
              <div className="flex items-center text-gray-400 text-xs">
                <IconComponent className={`h-3 w-3 ${color} mr-1`} />
                {label}
              </div>
            </div>
          </div>
          {isComingSoon && (
            <Badge
              className="shrink-0 whitespace-nowrap border-gray-700 bg-gray-800/70 text-gray-300"
              variant="outline"
            >
              Coming Soon
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContentUi>
        <div className="text-gray-300 text-xs leading-relaxed">{summary}</div>
      </CardContentUi>
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
