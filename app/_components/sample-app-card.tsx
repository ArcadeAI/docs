"use client";
import { Card, CardContent } from "@arcadeai/design-system";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import posthog from "posthog-js";

type SampleAppCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  blank?: boolean;
  tags?: string[];
  date?: string;
};

export function SampleAppCard({
  title,
  description,
  href,
  blank = false,
  tags = [],
  date,
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
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px 0 rgba(238, 23, 94, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        className="group block h-full cursor-pointer"
        href={href}
        onClick={handleClick}
        target={blank ? "_blank" : undefined}
      >
        <Card className="h-full border-gray-200 bg-white/80 backdrop-blur-xs transition-all hover:border-[#ee175e]/30 dark:border-gray-700 dark:bg-[rgba(17,17,17,0.8)]">
          <CardContent className="p-0">
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
              <div className="mt-4 flex items-center font-medium text-[#ee175e] text-sm">
                {blank ? (
                  <>
                    Try it out
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    View project
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
