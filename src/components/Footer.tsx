import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { config } from "@config";

import styles from "./Footer.module.css";

const ArcadeLogo = () => {
  return (
    <div className={styles.companyLogo}>
      <img
        className={"dark:hidden"}
        loading="lazy"
        src={"/images/logo/arcade-ai-logo.png"}
        alt="Arcade AI Logo"
      />
      <img
        className={"hidden dark:block"}
        loading="lazy"
        src={"/images/logo/arcadeai-title-dark.png"}
        alt="Arcade AI Logo"
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
      >
        <FontAwesomeIcon className={styles.social} icon={faGithub} />
      </a>
      <a
        target="_blank"
        href={config.company.discord}
        title="Join us in Discord"
      >
        <FontAwesomeIcon className={styles.social} icon={faDiscord} />
      </a>
      <a
        target="_blank"
        href={config.company.linkedIn}
        title="View Arcade-ai LinkedIn"
      >
        <FontAwesomeIcon className={styles.social} icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        href={`mailto:${config.company.email}`}
        title="Send us an email"
      >
        <FontAwesomeIcon className={styles.social} icon={faEnvelope} />
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
          <p>&copy; 2024 &mdash; present Arcade AI.</p>
        </div>
      </div>
    </div>
  );
};

export { Footer };
