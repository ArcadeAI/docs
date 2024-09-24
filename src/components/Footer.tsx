import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    )
}

const Socials = () => {
    return (
        <div className={styles.socials}>
            <a target="_blank" href={config.company.github} title="View Engine Github">
                <FontAwesomeIcon className={styles.social} icon={faGithub} />
            </a>
            <a target="_blank" href={config.company.discord} title="Join us in Discord">
                <FontAwesomeIcon className={styles.social} icon={faDiscord} />
            </a>
            <a target="_blank" href={config.company.linkedIn}
                title="View Arcade-ai LinkedIn">
                <FontAwesomeIcon className={styles.social} icon={faLinkedin} />
            </a>
            <a target="_blank" href={`mailto:${config.company.email}`} title="Send us an email">
                <FontAwesomeIcon className={styles.social} icon={faEnvelope} />
            </a>
        </div>
    )
}

type Resource = {
    url: string;
    title: string;
    external: boolean;
}

type ResourceColProps = {
    title: string;
    resources: Resource[];
};

const ResourceCol: React.FC<ResourceColProps> = ({ title, resources }) => {
    return (
        <div>
            <h3 className="text-sm font-semibold leading-6 text-black dark:text-white">{title}</h3>
            <ul role="list" className="mt-6 space-y-4">
                {resources && resources.map(resource => (
                    <li className="px-2 py-1 text-sm font-medium transition duration-150 ease-in-out rounded-md outline-none text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 !p-0" key={resource.url}>
                        <a target={resource.external ? "_blank" : "_parent"} href={resource.url}>
                            {resource.title} {resource.external ? "↗" : ""}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Footer: React.FC = () => {
    const projectResources: Resource[] = [
        {
            url: "/engine/github",
            title: "GitHub",
            external: true,
        },
        {
            url: "/engine/dockerhub",
            title: "DockerHub",
            external: true,
        },
    ]

    const resources: Resource[] = [
        {
            url: "/",
            title: "Get Started",
            external: false,
        },
        {
            url: "/engine/releases",
            title: "Releases",
            external: true,
        },
        {
            url: "/engine/examples",
            title: "Examples",
            external: true,
        },
    ]

    const feedbackResources: Resource[] = [
        {
            url: "/discord",
            title: "Join Discord",
            external: true,
        },
    ]

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
                <div className={"grid grid-cols-1 gap-8 mt-16 xl:col-span-2 xl:mt-0"}>
                    <div className={"md:grid md:grid-cols-3 md:gap-8"}>
                        <ResourceCol title={"Project"} resources={projectResources} />
                        <ResourceCol title={"Resources"} resources={resources} />
                        <ResourceCol title={"Feedback"} resources={feedbackResources} />
                    </div>
                </div>
            </div>
            <div className={styles.copyrightContent}>
                <div className={styles.copyright}>
                    <p>&copy; 2023 &mdash; present Arcade AI.
                    </p>
                </div>
            </div>
        </div>
    )
}

export { Footer };
