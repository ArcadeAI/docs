"use client";
import { Card, CardContent } from "@arcadeai/design-system";
import { cn } from "@arcadeai/design-system/lib/utils";
import type { LucideIcon } from "lucide-react";

type IntegrationCardProps = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  isActive?: boolean;
  onClick: () => void;
};

export function IntegrationCard({
  icon: Icon,
  title,
  description,
  isActive = false,
  onClick,
}: IntegrationCardProps) {
  return (
    <Card
      className={cn(
        "group relative cursor-pointer overflow-hidden transition-all hover:shadow-md",
        isActive
          ? "border-primary/50 bg-primary/5"
          : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent transition-opacity",
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
      />
      <CardContent className="flex flex-col items-start space-y-2 p-4">
        <Icon
          className={cn("mb-1 h-6 w-6 text-white", isActive && "text-primary")}
        />
        <h3 className="font-medium text-sm text-white">{title}</h3>
        <p className="text-xs text-zinc-400">{description}</p>
      </CardContent>
    </Card>
  );
}
