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
  href?: string;
  onClick?: () => void;
  code?: string;
};

export function QuickStartCard({
  icon: Icon,
  title,
  description,
  href,
  onClick,
  code,
}: QuickStartCardProps) {
  const content = (
    <>
      <CardHeader className="flex flex-row items-center gap-3 p-6">
        <div className="rounded-full bg-[#ee175e]/10 p-2">
          <Icon className="h-5 w-5 text-[#ee175e]" />
        </div>
        <CardTitle className="text-gray-900 text-xl tracking-tight dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
          {description}
        </p>
        {code && (
          <pre className="mt-1 rounded-md bg-gray-100 p-1 text-gray-800 text-sm dark:bg-gray-900 dark:text-gray-300">
            <code>{code}</code>
          </pre>
        )}
      </CardContent>
    </>
  );

  let wrapper: JSX.Element | null = null;
  if (onClick) {
    wrapper = (
      <button
        className="block h-full w-full text-left"
        onClick={onClick}
        type="button"
      >
        {content}
      </button>
    );
  } else if (href) {
    wrapper = (
      <Link className="block h-full" href={href}>
        {content}
      </Link>
    );
  } else {
    wrapper = null;
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px 0 rgba(238, 23, 94, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full border-gray-800 bg-white/80 backdrop-blur-xs transition-all hover:border-[#ee175e]/30 dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]">
        {wrapper}
      </Card>
    </motion.div>
  );
}
