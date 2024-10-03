import React from 'react';
import styles from './Badges.module.css';

interface BadgesProps {
    repo: string; // Format: "org/repo"
}

const Badges: React.FC<BadgesProps> = ({ repo }) => {
    const [org, repoName] = repo.split('/');

    const badges = [
        {
            href: `https://github.com/${org}/${repoName}/releases`,
            src: `https://img.shields.io/github/v/release/${org}/${repoName}`,
            alt: 'Release',
        },
        {
            href: `https://github.com/${org}/${repoName}/blob/main/LICENSE`,
            src: `https://img.shields.io/github/license/${org}/${repoName}`,
            alt: 'License',
        },
        {
            href: `https://github.com/${org}/${repoName}/issues`,
            src: `https://img.shields.io/github/issues/${org}/${repoName}`,
            alt: 'Issues',
        },
        {
            href: `https://pypi.org/project/${repoName}/`,
            src: `https://img.shields.io/pypi/v/${repoName}`,
            alt: 'PyPI',
        },
        {
            href: `https://pypi.org/project/${repoName}/`,
            src: `https://img.shields.io/pypi/dm/${repoName}`,
            alt: 'Downloads',
        },
    ];

    return (
        <div className={styles.badgesContainer}>
            {badges.map((badge, index) => (
                <a key={index} href={badge.href} target="_blank" rel="noopener noreferrer">
                    <img src={badge.src} alt={badge.alt} className={styles.badge} />
                </a>
            ))}
        </div>
    );
};

export default Badges;