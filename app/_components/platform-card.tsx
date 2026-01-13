"use client";
import { Card, CardHeader, CardTitle } from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import Link from "next/link";
import type React from "react";

type PlatformCardProps = {
  name: string;
  icon: string;
  link: string;
  type: "Agent Framework" | "MCP Client";
};

export const PlatformCard: React.FC<PlatformCardProps> = ({
  name,
  icon,
  link,
  type,
}) => {
  const cardContent = (
    <Card
      className={cn(
        "flex h-full flex-col gap-1.5 border border-gray-600/20 bg-gray-600/2 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-gray-600/3 hover:shadow-lg dark:bg-gray-900/80"
      )}
    >
      <CardHeader>
        <div className="flex items-center space-x-5">
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
            <img
              alt={`${name} logo`}
              className="size-9"
              height={36}
              src={icon}
              width={36}
            />
          </div>
          <div>
            <CardTitle className="mb-0.5 text-base text-gray-900 dark:text-gray-50">
              {name}
            </CardTitle>
            <div className="text-gray-600 text-xs dark:text-gray-400">
              {type}
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );

  return <Link href={link}>{cardContent}</Link>;
};
