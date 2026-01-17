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
import posthog from "posthog-js";

type LogoItem = {
  src: string;
  alt: string;
  invertInLight?: boolean;
  invertInDark?: boolean;
};

type QuickStartCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
  code?: string;
  logos?: LogoItem[];
};

export function QuickStartCard({
  icon: Icon,
  title,
  description,
  href,
  onClick,
  code,
  logos,
}: QuickStartCardProps) {
  const handleCardClick = () => {
    posthog.capture("Quickstart card clicked", {
      card_title: title,
      card_href: href || null,
      has_custom_onclick: !!onClick,
    });
  };

  const isClickable = href || onClick;

  const content = (
    <>
      <CardHeader className="flex flex-row items-center gap-3 p-4 min-[1062px]:p-6">
        <div className="rounded-full bg-[#ee175e]/10 p-2">
          <Icon className="h-5 w-5 text-[#ee175e]" />
        </div>
        <CardTitle className="text-gray-900 text-xl tracking-tight dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 min-[1062px]:p-6 min-[1062px]:pt-0">
        <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
          {description}
        </p>
        {logos && logos.length > 0 && (
          <div className="relative mt-4 overflow-hidden">
            <div className="flex items-center justify-center gap-4 px-6">
              {logos.map((logo) => {
                const getInvertClass = () => {
                  if (logo.invertInLight) {
                    return "invert dark:invert-0";
                  }
                  if (logo.invertInDark) {
                    return "dark:invert";
                  }
                  return "";
                };
                return (
                  <img
                    alt={logo.alt}
                    className={`h-7 w-7 object-contain ${getInvertClass()}`}
                    height={28}
                    key={logo.src}
                    src={logo.src}
                    width={28}
                  />
                );
              })}
            </div>
            {/* Side gradients */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-white to-transparent dark:from-[rgb(17,17,17)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white to-transparent dark:from-[rgb(17,17,17)]"
            />
          </div>
        )}
        {code && (
          <pre className="mt-1 rounded-md bg-gray-100 p-1 text-gray-800 text-sm dark:bg-gray-900 dark:text-gray-300">
            <code>{code}</code>
          </pre>
        )}
        {isClickable && (
          <div className="mt-4 flex items-center justify-end font-medium text-[#ee175e] text-sm">
            Learn more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </CardContent>
    </>
  );

  const handleClick = () => {
    handleCardClick();
    onClick?.();
  };

  let wrapper: React.ReactElement | null = null;
  if (onClick) {
    wrapper = (
      <button
        className="group block h-full w-full cursor-pointer text-left"
        onClick={handleClick}
        type="button"
      >
        {content}
      </button>
    );
  } else if (href) {
    wrapper = (
      <Link
        className="group block h-full cursor-pointer"
        href={href}
        onClick={handleCardClick}
      >
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
      <Card className="h-full border-gray-200 bg-white/80 backdrop-blur-xs transition-all hover:border-[#ee175e]/30 dark:border-gray-700 dark:bg-[rgba(17,17,17,0.8)]">
        {wrapper}
      </Card>
    </motion.div>
  );
}
