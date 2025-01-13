import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ChallengeSolutionProps {
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
}

export function ChallengeSolution({
  challenge,
  solution,
}: ChallengeSolutionProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.01,
        boxShadow: "0 0 20px 0 rgba(238, 23, 94, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <Card className="h-full overflow-hidden border-zinc-700 bg-[rgba(17,17,17,0.8)] backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center gap-3 border-b border-gray-800 bg-[rgba(25,25,25,0.5)] p-6">
          <div className="rounded-full bg-primary/10 p-2.5">
            <challenge.icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl tracking-tight text-white">
            {challenge.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-6 p-6">
            <div>
              <Badge variant="outline" className="bg-gray-800/50 text-gray-300">
                Challenge
              </Badge>
              <p className="text-sm leading-relaxed text-zinc-300">
                {challenge.description}
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute z-10 rounded-full bg-gray-700 p-2 shadow-md">
                <ArrowDown className="h-4 w-4 text-gray-300" />
              </div>
              <hr className="w-full border-dashed border-gray-700" />
            </div>
            <div>
              <Badge
                variant="default"
                className="mb-4 bg-primary/80 text-zinc-200"
              >
                Arcade Solution
              </Badge>
              <div className="flex items-center gap-4 text-base font-medium text-white">
                <solution.icon className="h-4 w-4 text-gray-300" />
                <span>{solution.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-200">
                {solution.description}
              </p>
              <Button
                asChild
                variant="link"
                className="h-auto p-0 pt-1.5 text-zinc-400 hover:text-zinc-300"
              >
                <Link
                  href={solution.href}
                  className="flex items-center gap-1.5"
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
