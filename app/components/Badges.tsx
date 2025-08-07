import React from "react";

interface BadgesProps {
  repo: string; // Format: "org/repo"
}

const Badges: React.FC<BadgesProps> = ({ repo }) => {
  let packageName;
  if (repo.startsWith("arcadeai")) {
    packageName = repo.split("/")[1].replace("-", "_");
  } else {
    packageName = repo.split("/")[1].replace("-", "_");
  }
  const badges = [
    {
      href: `https://pypi.org/project/${packageName}/`,
      src: `https://img.shields.io/pypi/v/${packageName}`,
      alt: "PyPI Version",
    },
    {
      href: `https://github.com/arcadeai/arcade-ai/blob/main/LICENSE`,
      src: `https://img.shields.io/badge/License-MIT-yellow.svg`,
      alt: "License",
    },
    {
      href: `https://pypi.org/project/${packageName}/`,
      src: `https://img.shields.io/pypi/pyversions/${packageName}`,
      alt: "Python Versions",
    },
    {
      href: `https://pypi.org/project/${packageName}/`,
      src: `https://img.shields.io/pypi/wheel/${packageName}`,
      alt: "Wheel Status",
    },
    {
      href: `https://pypi.org/project/${packageName}/`,
      src: `https://img.shields.io/pypi/dm/${packageName}`,
      alt: "Downloads",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-1 sm:gap-1 md:gap-1.5">
      {badges.map((badge, index) => (
        <a
          key={index}
          href={badge.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={badge.src}
            alt={badge.alt}
            className="h-auto max-h-6 sm:max-h-4.5 md:max-h-5"
          />
        </a>
      ))}
    </div>
  );
};

export default Badges;
