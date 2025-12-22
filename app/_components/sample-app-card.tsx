"use client";
import { Card, CardContent } from "@arcadeai/design-system";
import Link from "next/link";

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
  image,
  href,
  blank = false,
  tags = [],
  date,
}: SampleAppCardProps) {
  return (
    <Link href={href} target={blank ? "_blank" : undefined}>
      <Card className="flex h-full flex-col gap-1.5 border border-gray-600/20 bg-white/90 py-3 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-gray-600/[0.03] hover:shadow-lg dark:bg-gray-900/80">
        <CardContent className="p-0">
          <div className="space-y-2 p-6">
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
                {tags.map((tag, index) => {
                  const getTagColor = (tag: string) => {
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

                    if (languages.includes(tag)) {
                      return "bg-gradient-to-br from-emerald-600 to-emerald-800";
                    }
                    if (frameworks.includes(tag)) {
                      return "bg-gradient-to-br from-blue-600 to-blue-800";
                    }
                    if (integrations.includes(tag)) {
                      return "bg-gradient-to-br from-yellow-600 to-yellow-800";
                    }
                    return "bg-gradient-to-br from-gray-600 to-gray-800";
                  };

                  return (
                    <span
                      className={`inline-flex w-fit shrink-0 items-center justify-center overflow-hidden whitespace-nowrap rounded-md border-0 border-transparent px-2 py-1 font-semibold text-[0.725rem] text-white uppercase leading-4 tracking-wide shadow-md ${getTagColor(tag)}`}
                      key={index}
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
  );
}
