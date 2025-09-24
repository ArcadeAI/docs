"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@arcadeai/design-system";
import { motion } from "motion/react";
import Link from "next/link";

type QuickStartCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  code?: string;
};

export function QuickStartCard({
  icon: Icon,
  title,
  description,
  href,
  code,
}: QuickStartCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px 0 rgba(238, 23, 94, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full border-gray-800 bg-[rgba(17,17,17,0.8)] backdrop-blur-xs transition-all hover:border-[#ee175e]/30">
        <Link className="block h-full" href={href}>
          <CardHeader className="flex flex-row items-center gap-3 p-6">
            <div className="rounded-full bg-[#ee175e]/10 p-2">
              <Icon className="h-5 w-5 text-[#ee175e]" />
            </div>
            <CardTitle className="text-white text-xl tracking-tight">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
            {code && (
              <pre className="mt-1 rounded-md bg-gray-900 p-1 text-gray-300 text-sm">
                <code>{code}</code>
              </pre>
            )}
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
}
