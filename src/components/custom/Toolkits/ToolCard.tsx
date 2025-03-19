import {
  Card,
  CardContent as CardContentUI,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BadgeCheck, CheckCircle, Key, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ComingSoonModal } from "./ComingSoonModal";

type ToolkitType = "arcade" | "verified" | "community" | "auth";

interface ToolCardProps {
  name: string;
  image: string;
  summary: string;
  link: string;
  type: ToolkitType;
  isComingSoon?: boolean;
}

const typeConfig: Record<
  ToolkitType,
  { className: string; label: string; icon: React.ElementType; color: string }
> = {
  arcade: {
    className:
      "border-emerald-600/20 hover:border-primary bg-emerald-600/[0.02] hover:bg-emerald-600/[0.03]",
    label: "Arcade Toolkit",
    icon: BadgeCheck,
    color: "text-emerald-400",
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
    label: "Auth Integration",
    icon: Key,
    color: "text-purple-400",
  },
};

export const ToolCard: React.FC<ToolCardProps> = ({
  name,
  image,
  summary,
  link,
  type,
  isComingSoon = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { className, label, icon: Icon, color } = typeConfig[type];

  const handleCardClick = (e: React.MouseEvent) => {
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

    // Simple hash function to get a number from the name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = (hash << 5) - hash + name.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }

    // Use absolute value to ensure positive index
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  // Get the first two letters of the name
  const firstTwoChars = name.substring(0, 2).toUpperCase();

  // Get color based on the name
  const bgColor = getColorFromName(name);

  const cardContent = (
    <Card
      className={cn(
        "flex h-full flex-col transition-all duration-300",
        "border hover:shadow-lg",
        "bg-gray-900/80 backdrop-blur-sm",
        className,
        isComingSoon && "relative",
      )}
    >
      <CardHeader className="flex-grow space-y-0 p-4">
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
                  src={`/images/icons/${image}.png`}
                  alt={`${name} logo`}
                  width={40}
                  height={40}
                  priority
                  className="object-cover"
                  onError={handleImageError}
                />
              )}
            </div>
            <div>
              <CardTitle className="text-base text-gray-50">{name}</CardTitle>
              <div className="flex items-center text-xs text-gray-400">
                <Icon className={`h-3 w-3 ${color} mr-1`} />
                {label}
              </div>
            </div>
          </div>
          {isComingSoon && (
            <Badge
              variant="outline"
              className="shrink-0 whitespace-nowrap border-gray-700 bg-gray-800/70 text-gray-300"
            >
              Coming Soon
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContentUI className="space-y-2 p-4 pt-0">
        <div className="text-xs leading-relaxed text-gray-300">{summary}</div>
      </CardContentUI>
    </Card>
  );

  return (
    <>
      {isComingSoon ? (
        <div onClick={handleCardClick} className="cursor-pointer">
          {cardContent}
        </div>
      ) : (
        <Link href={link}>{cardContent}</Link>
      )}

      {isComingSoon && (
        <ComingSoonModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          toolkitName={name}
        />
      )}
    </>
  );
};
