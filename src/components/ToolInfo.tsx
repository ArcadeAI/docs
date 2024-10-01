import React from 'react';
import styles from './ToolInfo.module.css';

interface ToolInfoProps {
    description: string;
    author: string;
    codeLink: string;
    authType: string;
    versions: string[];
}

const ToolInfo: React.FC<ToolInfoProps> = ({ description, author, codeLink, authType, versions }) => {
    return (
        <div className={styles.toolInfo}>
            <p><strong>Description: </strong> {description}</p>
            <p><strong>Author: </strong> {author}</p>
            <p><strong>Code: </strong> <a href={codeLink} target="_blank" rel="noopener noreferrer">Github</a></p>
            <p><strong>Auth Type: </strong> {authType}</p>
            <p><strong>Versions: </strong> {versions.join(', ')}</p>
        </div>
    );
};

export default ToolInfo;
