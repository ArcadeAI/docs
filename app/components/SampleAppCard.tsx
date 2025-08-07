import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface SampleAppCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  blank?: boolean;
}

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
        <Card className="group h-full overflow-hidden border-gray-800 bg-[rgba(17,17,17,0.8)] backdrop-blur-sm transition-all hover:border-[#ee175e]/30">
          <CardContent className="p-0">
            <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
              <Image
                src={image}
                alt={title}
                fill
                className="scale-110 object-cover transition-transform duration-300"
              />
            </div>
            <div className="space-y-2 p-6">
              <h3 className="text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[#ee175e]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
