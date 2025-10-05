"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@arcadeai/design-system";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type FrameworkCardProps = {
  title: string;
  description: string;
  href: string;
};

export function FrameworkCard({
  title,
  description,
  href,
}: FrameworkCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px 0 rgba(238, 23, 94, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full border-gray-800 bg-white/80 backdrop-blur-xs transition-all hover:border-[#ee175e]/30 dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]">
        <Link className="block h-full" href={href}>
          <CardHeader className="p-6 pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-900 text-lg tracking-tight dark:text-white">
                {title}
              </CardTitle>
              <ArrowRight className="h-4 w-4 text-[#ee175e]" />
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
              {description}
            </p>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
}
