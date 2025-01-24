import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BadgeCheck, CheckCircle, Users } from "lucide-react";

type ToolkitType = "arcade" | "verified" | "community";

interface ToolCardProps {
  name: string;
  image: string;
  summary: string;
  link: string;
  type: ToolkitType;
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
    label: "Verified",
    icon: CheckCircle,
    color: "text-blue-400",
  },
  community: {
    className:
      "border-orange-600/20 hover:border-primary bg-orange-600/[0.02] hover:bg-orange-600/[0.03]",
    label: "Community",
    icon: Users,
    color: "text-orange-400",
  },
};

export const ToolCard: React.FC<ToolCardProps> = ({
  name,
  image,
  summary,
  link,
  type,
}) => {
  const { className, label, icon: Icon, color } = typeConfig[type];

  return (
    <Link href={link}>
      <Card
        className={cn(
          "flex h-full flex-col transition-all duration-300",
          "border hover:shadow-lg",
          "bg-gray-900/80 backdrop-blur-sm",
          className,
        )}
      >
        <CardHeader className="flex-grow space-y-0 p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-5">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src={`/images/icons/${image}.png`}
                  alt={`${name} logo`}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <CardTitle className="text-base text-gray-50">{name}</CardTitle>
                <div className="flex items-center text-xs text-gray-400">
                  <Icon className={`h-3 w-3 ${color} mr-1`} />
                  {label}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-2 p-4 pt-0">
          <div className="text-xs leading-relaxed text-gray-300">{summary}</div>
        </CardContent>
      </Card>
    </Link>
  );
};
