import { Discord, Github } from "@arcadeai/design-system";
import { Mail } from "lucide-react";
import type React from "react";
import { urlConfig } from "@/config";
import Linkedin from "./icons/linkedin";

const ArcadeLogo = () => (
  <div>
    <img
      alt=" Arcade Logo"
      className="w-42 pr-4 grayscale dark:hidden"
      height={40}
      loading="lazy"
      src={"/images/logo/arcade-logo.png"}
      width={168}
    />
    <img
      alt="Arcade Logo"
      className="hidden w-42 pr-4 grayscale dark:block"
      height={40}
      loading="lazy"
      src={"/images/logo/arcade-title-dark.png"}
      width={168}
    />
  </div>
);

const Socials = () => (
  <div className="mt-4 flex gap-6">
    <a
      href={urlConfig.company.github}
      rel="noreferrer"
      target="_blank"
      title="View Engine Github"
    >
      <Github className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out hover:text-gray-900" />
    </a>
    <a
      href={urlConfig.company.discord}
      rel="noreferrer"
      target="_blank"
      title="Join us in Discord"
    >
      <Discord
        className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out hover:text-gray-900 [&>path]:fill-current"
        fill="currentColor"
      />
    </a>
    <a
      href={urlConfig.company.linkedIn}
      rel="noreferrer"
      target="_blank"
      title="View Arcade-ai LinkedIn"
    >
      <Linkedin className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out hover:text-gray-900" />
    </a>
    <a
      href={`mailto:${urlConfig.company.email}`}
      rel="noreferrer"
      target="_blank"
      title="Send us an email"
    >
      <Mail className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out hover:text-gray-900" />
    </a>
  </div>
);

type Resource = {
  url: string;
  title: string;
  external: boolean;
};

type ResourceColProps = {
  title: string;
  resources: Resource[];
};

const ResourceCol: React.FC<ResourceColProps> = ({ title, resources }) => (
  <div className="mb-6 pr-14 md:mb-0">
    <h3 className="pb-1 font-semibold text-base text-black dark:text-white">
      {title}
    </h3>
    <ul className="mt-2 list-none space-y-4 p-0">
      {resources?.map((resource) => (
        <li key={resource.url}>
          <a
            className="text-gray-500 no-underline transition-colors duration-150 ease-in-out hover:text-primary"
            href={resource.url}
            rel="noreferrer"
            target={resource.external ? "_blank" : "_self"}
          >
            {resource.title} {resource.external ? "" : ""}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const projectResources: Resource[] = [
    {
      url: "https://github.com/ArcadeAI/arcade-ai",
      title: "GitHub",
      external: true,
    },
    {
      url: "https://github.com/orgs/ArcadeAI/packages",
      title: "GitHub Container Registry",
      external: true,
    },
  ];

  const resources: Resource[] = [
    {
      url: "/",
      title: "Documentation",
      external: false,
    },
    {
      url: "https://github.com/ArcadeAI/arcade-ai/releases",
      title: "Releases",
      external: true,
    },
    {
      url: "https://github.com/ArcadeAI/arcade-ai/tree/main/examples",
      title: "Examples",
      external: true,
    },
  ];

  const feedbackResources: Resource[] = [
    {
      url: "/discord",
      title: "Discord",
      external: true,
    },
    {
      url: "https://github.com/ArcadeAI/arcade-ai/issues/new/choose",
      title: "Report an issue on GitHub",
      external: true,
    },
  ];

  return (
    <div className="flex w-full flex-col p-4 text-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-40 lg:gap-24">
        <div className="flex flex-col items-start">
          <a className="flex flex-col items-start" href={urlConfig.company.url}>
            <ArcadeLogo />
            <span className="mt-2 text-base transition-colors duration-150 ease-in-out hover:text-gray-900 dark:hover:text-gray-300">
              Making AI take action
            </span>
          </a>
          <Socials />
        </div>
        <div className="flex w-full flex-col gap-4 md:mt-0 md:flex-row md:gap-8">
          <ResourceCol resources={projectResources} title={"Project"} />
          <ResourceCol resources={resources} title={"Resources"} />
          <ResourceCol resources={feedbackResources} title={"Feedback"} />
        </div>
      </div>
      <div className="mt-16 flex flex-row items-center justify-between border-black/10 border-t pt-8 sm:mt-20 lg:mt-24 dark:border-white/10">
        <div className="text-gray-400 text-xs leading-5">
          <p>&copy; 2024 &mdash; present Arcade AI, Inc.</p>
        </div>
        <div>
          <a
            className="text-gray-400 text-xs leading-5 no-underline transition-colors duration-150 ease-in-out hover:text-gray-600 hover:underline dark:hover:text-gray-300"
            href="https://www.arcade.dev/privacy-policy"
            rel="noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export { Footer };
