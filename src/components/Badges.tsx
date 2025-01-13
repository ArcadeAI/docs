import React from "react";
import styles from "./Badges.module.css";

interface BadgesProps {
  repo: string; // Format: "org/repo"
}

const Badges: React.FC<BadgesProps> = ({ repo }) => {
  const [, repoName] = repo.split("/");

  const badges = [
    {
      href: `https://pypi.org/project/${repoName}/`,
      src: `https://img.shields.io/pypi/v/${repoName}`,
      alt: "PyPI Version",
    },
    {
      href: `https://pypi.org/project/${repoName}/`,
      src: `https://img.shields.io/pypi/l/${repoName}`,
      alt: "License",
    },
    {
      href: `https://pypi.org/project/${repoName}/`,
      src: `https://img.shields.io/pypi/pyversions/${repoName}`,
      alt: "Python Versions",
    },
    {
      href: `https://pypi.org/project/${repoName}/`,
      src: `https://img.shields.io/pypi/wheel/${repoName}`,
      alt: "Wheel Status",
    },
    {
      href: `https://pypi.org/project/${repoName}/`,
      src: `https://img.shields.io/pypi/dm/${repoName}`,
      alt: "Downloads",
    },
  ];

  return (
    <div className={styles.badgesContainer}>
      {badges.map((badge, index) => (
        <a
          key={index}
          href={badge.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={badge.src} alt={badge.alt} className={styles.badge} />
        </a>
      ))}
    </div>
  );
};

export default Badges;
