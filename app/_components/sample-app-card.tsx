"use client";
import { Card, CardContent } from "@arcadeai/design-system";
import { motion } from "motion/react";
import Link from "next/link";
import posthog from "posthog-js";

type SampleAppCardProps = {
  title: string;
  description: string;
  image?: string;
  href: string;
  blank?: boolean;
  tags?: string[];
  date?: string;
  // When there's no `image`, render a generated gradient header with a monogram
  // so cards still have a visual anchor. Opt-in so other usages stay unchanged.
  fallbackVisual?: boolean;
};

// Tinted gradients that read well on both light and dark surfaces.
const FALLBACK_GRADIENTS = [
  "from-emerald-500/30 to-teal-600/10",
  "from-violet-500/30 to-fuchsia-600/10",
  "from-amber-500/30 to-orange-600/10",
  "from-sky-500/30 to-blue-600/10",
  "from-rose-500/30 to-pink-600/10",
  "from-lime-500/30 to-green-600/10",
];
const MONOGRAM_WORDS = 2;
const WHITESPACE = /\s+/;

function monogram(title: string): string {
  return title
    .trim()
    .split(WHITESPACE)
    .slice(0, MONOGRAM_WORDS)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

function gradientFor(title: string): string {
  const sum = [...title].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return FALLBACK_GRADIENTS[sum % FALLBACK_GRADIENTS.length];
}

export function SampleAppCard({
  title,
  description,
  image,
  href,
  blank = false,
  tags = [],
  date,
  fallbackVisual = false,
}: SampleAppCardProps) {
  const handleClick = () => {
    posthog.capture("Sample app clicked", {
      app_title: title,
      app_href: href,
      tags,
      opens_in_new_tab: blank,
    });
  };

  return (
    <motion.div
      className="transition-shadow hover:shadow-[0_0_20px_0_oklch(from_var(--primary)_l_c_h_/_0.1)]"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        className="group block h-full cursor-pointer"
        href={href}
        onClick={handleClick}
        target={blank ? "_blank" : undefined}
      >
        <Card className="h-full border-gray-200 bg-white/80 backdrop-blur-xs transition-all hover:border-primary/30 dark:border-gray-700 dark:bg-[rgba(17,17,17,0.8)]">
          <CardContent className="p-0">
            {image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-gray-100 dark:bg-gray-800">
                <img
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  height={360}
                  src={image}
                  width={640}
                />
              </div>
            )}
            {!image && fallbackVisual && (
              <div
                className={`relative flex aspect-[16/7] w-full items-center justify-center overflow-hidden rounded-t-lg bg-gradient-to-br ${gradientFor(title)}`}
              >
                <span className="font-semibold text-3xl text-gray-900/40 transition-transform duration-300 group-hover:scale-110 dark:text-white/60">
                  {monogram(title)}
                </span>
              </div>
            )}
            <div className="space-y-2 p-4 min-[1062px]:p-6">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-gray-900 text-xl tracking-tight dark:text-white">
                  {title}
                </h3>
                {date && (
                  <span className="whitespace-nowrap font-medium text-gray-500 text-xs dark:text-gray-400">
                    {date}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
                {description}
              </p>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {tags.map((tag) => {
                    const getTagColor = (tagName: string) => {
                      const languages = [
                        "JavaScript",
                        "Python",
                        "TypeScript",
                        "Java",
                        "Go",
                        "Rust",
                      ];
                      const frameworks = [
                        "Langchain",
                        "mastra",
                        "CrewAI",
                        "LangGraph",
                        "OpenAI",
                        "Anthropic",
                        "Next.js",
                      ];
                      const integrations = [
                        "Slack",
                        "GitHub",
                        "Gmail",
                        "Discord",
                        "Notion",
                        "Linear",
                        "Jira",
                        "Weaviate",
                        "Email",
                        "Stytch",
                      ];

                      if (languages.includes(tagName)) {
                        return "bg-gradient-to-br from-emerald-600 to-emerald-800";
                      }
                      if (frameworks.includes(tagName)) {
                        return "bg-gradient-to-br from-blue-600 to-blue-800";
                      }
                      if (integrations.includes(tagName)) {
                        return "bg-gradient-to-br from-yellow-600 to-yellow-800";
                      }
                      return "bg-gradient-to-br from-gray-600 to-gray-800";
                    };

                    return (
                      <span
                        className={`inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 border-transparent px-2 py-1 font-semibold text-[0.725rem] text-white uppercase leading-4 tracking-wide shadow-md ${getTagColor(tag)}`}
                        key={tag}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
