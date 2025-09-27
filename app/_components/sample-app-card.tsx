"use client";
import { Card, CardContent } from "@arcadeai/design-system";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type SampleAppCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  blank?: boolean;
};

export function SampleAppCard({
  title,
  description,
  image,
  href,
  blank = false,
}: SampleAppCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 20px 0 rgba(238, 23, 94, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} target={blank ? "_blank" : undefined}>
        <Card className="group h-full overflow-hidden border-gray-200 bg-white/90 backdrop-blur-xs transition-all hover:border-[#ee175e]/30 dark:border-gray-800 dark:bg-[rgba(17,17,17,0.8)]">
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-zinc-900">
              <Image
                alt={title}
                className="scale-110 object-cover transition-transform duration-300"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={image}
              />
            </div>
            <div className="space-y-2 p-6">
              <h3 className="font-semibold text-gray-900 text-xl tracking-tight transition-colors group-hover:text-[#ee175e] dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
