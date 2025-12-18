"use client";
import { Badge, Card, CardHeader, CardTitle } from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import Link from "next/link";
import type React from "react";

type FrameworkCardProps = {
  name: string;
  icon: string;
  link: string;
  languages?: Array<"TypeScript" | "Python">;
};

export const FrameworkCard: React.FC<FrameworkCardProps> = ({
  name,
  icon,
  link,
  languages = [],
}) => {
  const showLanguageBadges = languages.length > 0;

  const cardContent = (
    <Card
      className={cn(
        "flex h-full flex-col gap-1.5 border border-gray-600/20 bg-gray-600/2 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-gray-600/3 hover:shadow-lg dark:bg-gray-900/80"
      )}
    >
      <CardHeader>
        <div className="mb-3 flex items-center space-x-5">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
            <img alt={`${name} logo`} className="size-9" src={icon} />
          </div>
          <div>
            <CardTitle className="mb-0.5 text-base text-gray-900 dark:text-gray-50">
              {name}
            </CardTitle>
            <div className="text-gray-600 text-xs dark:text-gray-400">
              Agent Framework
            </div>
          </div>
        </div>
        {showLanguageBadges && (
          <div className="flex items-center gap-1.5">
            {languages.map((language) => (
              <Badge
                className="inline-flex w-fit shrink-0 cursor-pointer items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-md border-0 border-transparent bg-gradient-to-br from-emerald-600 to-emerald-800 px-2 py-0.5 font-semibold text-[0.725rem] text-white uppercase leading-4 tracking-wide shadow-md focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 [&>svg]:h-3 [&>svg]:w-3"
                key={language}
                variant="outline"
              >
                {language}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>
    </Card>
  );

  return <Link href={link}>{cardContent}</Link>;
};
