import {
  SiDiscord,
  SiGithub,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import React from "react";

import { config } from "@config";
import styles from "./Footer.module.css";

const ArcadeLogo = () => {
  return (
    <div className={styles.companyLogo}>
      <img
        className={"dark:hidden"}
        loading="lazy"
        src={"/images/logo/arcade-logo.png"}
        alt=" Arcade Logo"
      />
      <img
        className={"hidden dark:block"}
        loading="lazy"
        src={"/images/logo/arcade-title-dark.png"}
        alt="Arcade Logo"
      />
    </div>
  );
};

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a
        target="_blank"
        href={config.company.github}
        title="View Engine Github"
        rel="noreferrer"
      >
        <SiGithub className={styles.social} />
      </a>
      <a
        target="_blank"
        href={config.company.discord}
        title="Join us in Discord"
        rel="noreferrer"
      >
        <SiDiscord className={styles.social} />
      </a>
      <a
        target="_blank"
        href={config.company.linkedIn}
        title="View Arcade-ai LinkedIn"
        rel="noreferrer"
      >
        <SiLinkedin className={styles.social} />
      </a>
      <a
        target="_blank"
        href={`mailto:${config.company.email}`}
        title="Send us an email"
        rel="noreferrer"
      >
        <Mail className={styles.social} />
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
    <div className={styles.resourceCol}>
      <h3 className={styles.resourceTitle}>{title}</h3>
      <ul role="list" className={styles.resourceLinks}>
        {resources &&
          resources.map((resource) => (
            <li className={styles.resourceLink} key={resource.url}>
              <a
                target={resource.external ? "_blank" : "_self"}
                href={resource.url}
                rel="noreferrer"
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
      url: "/engine/dockerhub",
      title: "DockerHub",
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
  ];

  return (
    <div className={styles.content}>
      <div className={styles.sections}>
        <div className={styles.company}>
          <a href={config.company.url}>
            <ArcadeLogo />
            <span className={styles.companyCredo}>Making AI take action</span>
          </a>
          <Socials />
        </div>
        <div className={styles.resources}>
          <ResourceCol title={"Project"} resources={projectResources} />
          <ResourceCol title={"Resources"} resources={resources} />
          <ResourceCol title={"Feedback"} resources={feedbackResources} />
        </div>
      </div>
      <div className={styles.copyrightContent}>
        <div className={styles.copyright}>
          <p>&copy; 2024 &mdash; present Arcade.</p>
        </div>
      </div>
    </div>
  );
};

export { Footer };
