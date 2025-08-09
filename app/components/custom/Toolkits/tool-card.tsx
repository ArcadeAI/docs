'use client';
import {
  Badge,
  Card,
  CardContent as CardContentUI,
  CardHeader,
  CardTitle,
} from '@arcadeai/design-system';
import { BadgeCheck, CheckCircle, Key, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ComingSoonModal } from './coming-soon-modal';

type ToolkitType = 'arcade' | 'verified' | 'community' | 'auth';

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
      'border-emerald-600/20 hover:border-primary bg-emerald-600/2 hover:bg-emerald-600/3',
    label: 'Arcade Toolkit',
    icon: BadgeCheck,
    color: 'text-emerald-400',
  },
  verified: {
    className:
      'border-blue-600/20 hover:border-primary bg-blue-600/2 hover:bg-blue-600/3',
    label: 'Verified Toolkit',
    icon: CheckCircle,
    color: 'text-blue-400',
  },
  community: {
    className:
      'border-orange-600/20 hover:border-primary bg-orange-600/2 hover:bg-orange-600/3',
    label: 'Community Toolkit',
    icon: Users,
    color: 'text-orange-400',
  },
  auth: {
    className:
      'border-purple-600/20 hover:border-primary bg-purple-600/2 hover:bg-purple-600/3',
    label: 'Auth Integration',
    icon: Key,
    color: 'text-purple-400',
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
  const getColorFromName = (toolName: string) => {
    // Predefined attractive colors (tailwind colors at 500-600 level)
    const colors = [
      'bg-red-500',
      'bg-orange-500',
      'bg-amber-500',
      'bg-yellow-500',
      'bg-lime-500',
      'bg-green-500',
      'bg-emerald-500',
      'bg-teal-500',
      'bg-cyan-500',
      'bg-sky-500',
      'bg-blue-500',
      'bg-indigo-500',
      'bg-violet-500',
      'bg-purple-500',
      'bg-fuchsia-500',
      'bg-pink-500',
      'bg-rose-500',
    ];

    // Simple hash function to get a number from the name
    let hash = 0;
    for (let i = 0; i < toolName.length; i++) {
      // biome-ignore lint/nursery/noBitwiseOperators: hashing uses bitwise intentionally
      hash = (hash << 5) - hash + toolName.charCodeAt(i);
      // biome-ignore lint/style/useShorthandAssign: keep explicit form for clarity
      // biome-ignore lint/nursery/noBitwiseOperators: convert to 32bit integer using bitwise
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
        'flex h-full flex-col transition-all duration-300',
        'border hover:shadow-lg',
        'bg-gray-900/80 backdrop-blur-xs',
        className,
        isComingSoon && 'relative'
      )}
    >
      <CardHeader className="grow space-y-0 p-4">
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
                  alt={`${name} logo`}
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
              <CardTitle className="text-base text-gray-50">{name}</CardTitle>
              <div className="flex items-center text-gray-400 text-xs">
                <Icon className={`h-3 w-3 ${color} mr-1`} />
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
      <CardContentUI className="space-y-2 p-4 pt-0">
        <div className="text-gray-300 text-xs leading-relaxed">{summary}</div>
      </CardContentUI>
    </Card>
  );

  return (
    <>
      {isComingSoon ? (
        <button
          className="w-full text-left"
          onClick={handleCardClick}
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
          toolkitName={name}
        />
      )}
    </>
  );
};
