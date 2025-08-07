import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import React from "react";

import { config } from "@config";
import Linkedin from "./icons/linkedin";

const ArcadeLogo = () => {
  return (
    <div>
      <img
        className="w-42 pr-4 grayscale dark:hidden"
        loading="lazy"
        src={"/images/logo/arcade-logo.png"}
        alt=" Arcade Logo"
      />
      <img
        className="hidden w-42 pr-4 grayscale dark:block"
        loading="lazy"
        src={"/images/logo/arcade-title-dark.png"}
        alt="Arcade Logo"
      />
    </div>
  );
};

const Socials = () => {
  return (
    <div className="mt-4 flex gap-6">
      <a
        target="_blank"
        href={config.company.github}
        title="View Engine Github"
        rel="noreferrer"
      >
        <SiGithub className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out hover:text-gray-900" />
      </a>
      <a
        target="_blank"
        href={config.company.discord}
        title="Join us in Discord"
        rel="noreferrer"
      >
        <SiDiscord className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out hover:text-gray-900" />
      </a>
      <a
        target="_blank"
        href={config.company.linkedIn}
        title="View Arcade-ai LinkedIn"
        rel="noreferrer"
      >
        <Linkedin className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out hover:text-gray-900" />
      </a>
      <a
        target="_blank"
        href={`mailto:${config.company.email}`}
        title="Send us an email"
        rel="noreferrer"
      >
        <Mail className="h-6 w-6 text-gray-400 transition-colors duration-150 ease-in-out hover:text-gray-900" />
      </a>
    </div>
  );
};

type Resource = {
  url: string;
  title: string;
  external: boolean;
};

type ResourceColProps = {
  title: string;
  resources: Resource[];
};

const ResourceCol: React.FC<ResourceColProps> = ({ title, resources }) => {
  return (
    <div className="mb-6 pr-14 md:mb-0">
      <h3 className="pb-1 text-base font-semibold text-black dark:text-white">
        {title}
      </h3>
      <ul role="list" className="mt-2 list-none space-y-4 p-0">
        {resources &&
          resources.map((resource) => (
            <li key={resource.url}>
              <a
                target={resource.external ? "_blank" : "_self"}
                href={resource.url}
                rel="noreferrer"
                className="text-gray-500 no-underline transition-colors duration-150 ease-in-out hover:text-gray-900"
              >
                {resource.title} {resource.external ? "" : ""}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

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
          <a href={config.company.url} className="flex flex-col items-start">
            <ArcadeLogo />
            <span className="mt-2 text-base transition-colors duration-150 ease-in-out hover:text-gray-900 dark:hover:text-gray-300">
              Making AI take action
            </span>
          </a>
          <Socials />
        </div>
        <div className="flex w-full flex-col gap-4 md:mt-0 md:flex-row md:gap-8">
          <ResourceCol title={"Project"} resources={projectResources} />
          <ResourceCol title={"Resources"} resources={resources} />
          <ResourceCol title={"Feedback"} resources={feedbackResources} />
        </div>
      </div>
      <div className="mt-16 flex flex-row items-center justify-between border-t border-black/10 pt-8 sm:mt-20 lg:mt-24 dark:border-white/10">
        <div className="text-xs leading-5 text-gray-400">
          <p>&copy; 2024 &mdash; present Arcade AI, Inc.</p>
        </div>
        <div>
          <a
            href="https://www.arcade.dev/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="text-xs leading-5 text-gray-400 no-underline transition-colors duration-150 ease-in-out hover:text-gray-600 hover:underline dark:hover:text-gray-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export { Footer };
