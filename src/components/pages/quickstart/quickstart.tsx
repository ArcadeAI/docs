import { IntegrationCard } from "@/components/IntegrationCard";
import {
  IconType,
  SiOpenai,
  SiPython,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Globe, LucideIcon } from "lucide-react";
import { useRouter } from "next/router";

interface Integration {
  id: string;
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  href?: string;
}

const integrations: Integration[] = [
  {
    id: "python",
    icon: SiPython,
    title: "Python",
    description: "Integrate Arcade into your Python apps seamlessly",
  },
  {
    id: "typescript",
    icon: SiTypescript,
    title: "TypeScript",
    description: "Build powerful apps with our TypeScript / JavaScript SDK",
  },
  {
    id: "openai",
    icon: SiOpenai,
    title: "OpenAI",
    description: "Works with any OpenAI library out of the box",
  },
  {
    id: "rest",
    icon: Globe,
    title: "REST API",
    description: "Use Arcade's REST API with any language",
    href: "https://reference.arcade.dev",
  },
] as const;

export default function GettingStarted() {
  const router = useRouter();

  const activeLang = router.query.lang || "python";

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-base text-zinc-400 sm:text-lg">
            Choose your preferred way to start building with Arcade
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {integrations.map((integration) => (
            <IntegrationCard
              key={integration.id}
              id={integration.id}
              icon={integration.icon}
              title={integration.title}
              description={integration.description}
              isActive={activeLang === integration.id}
              onClick={() => {
                if (integration.href) {
                  window.open(integration.href, "_blank");
                  return;
                }
                router.push(`/home/quickstart?lang=${integration.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
