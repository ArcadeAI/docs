import { Terminal, Globe } from "lucide-react";
import {
  SiPython,
  SiTypescript,
  SiOpenai,
} from "@icons-pack/react-simple-icons";
import { IntegrationCard } from "@/components/IntegrationCard";
import { useRouter } from "next/router";

const integrations = [
  {
    id: "cli",
    icon: Terminal,
    title: "Interactive CLI",
    description: "The fastest way to get started with Arcade AI",
  },
  {
    id: "python",
    icon: SiPython,
    title: "Python",
    description: "Integrate Arcade AI into your Python apps seamlessly",
  },
  {
    id: "typescript",
    icon: SiTypescript,
    title: "TypeScript",
    description: "Build powerful apps with our TypeScript SDK",
  },
  {
    id: "rest",
    icon: Globe,
    title: "REST API",
    description: "Use Arcade AI's REST API with any language",
  },
  {
    id: "openai",
    icon: SiOpenai,
    title: "OpenAI",
    description: "Works with any OpenAI library out of the box",
  },
] as const;

export default function GettingStarted() {
  const router = useRouter();

  const activeLang = router.query.lang || "cli";

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-base text-zinc-400 sm:text-lg">
            Choose your preferred way to start building with Arcade AI
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
                console.log(integration.id);
                router.push(`/home/quickstart?lang=${integration.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
