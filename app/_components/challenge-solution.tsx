"use client";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@arcadeai/design-system";
import { ArrowDown, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

type ChallengeSolutionProps = {
  challenge: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  solution: {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
  };
};

export function ChallengeSolution({
  challenge,
  solution,
}: ChallengeSolutionProps) {
  return (
    <motion.div
      className="group"
      whileHover={{
        scale: 1.01,
        boxShadow: "0 0 20px 0 rgba(238, 23, 94, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="h-full overflow-hidden border-zinc-700 bg-[rgba(17,17,17,0.8)] backdrop-blur-xs">
        <CardHeader className="flex flex-row items-center gap-3 border-gray-800 border-b bg-[rgba(25,25,25,0.5)] p-6">
          <div className="rounded-full bg-primary/10 p-2.5">
            <challenge.icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-white text-xl tracking-tight">
            {challenge.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-6 p-6">
            <div>
              <Badge className="bg-gray-800/50 text-gray-300" variant="outline">
                Challenge
              </Badge>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {challenge.description}
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute z-10 rounded-full bg-gray-700 p-2 shadow-md">
                <ArrowDown className="h-4 w-4 text-gray-300" />
              </div>
              <hr className="w-full border-gray-700 border-dashed" />
            </div>
            <div>
              <Badge
                className="mb-4 bg-primary/80 text-zinc-200"
                variant="default"
              >
                Arcade Solution
              </Badge>
              <div className="flex items-center gap-4 font-medium text-base text-white">
                <solution.icon className="h-4 w-4 text-gray-300" />
                <span>{solution.title}</span>
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed">
                {solution.description}
              </p>
              <Button
                asChild
                className="h-auto p-0 pt-1.5 text-zinc-400 hover:text-zinc-300"
                variant="link"
              >
                <Link
                  className="flex items-center gap-1.5"
                  href={solution.href}
                >
                  Learn more <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
