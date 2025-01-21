import React from "react";
import styles from "./ToolInfo.module.css";

interface ToolInfoProps {
  description: string;
  author: string;
  codeLink: string;
  authType: "oauth2";
  authProviderName?: string;
  authProviderDocsUrl?: string;
  versions: string[];
}

const ToolInfo: React.FC<ToolInfoProps> = ({
  description,
  author,
  codeLink,
  authType,
  authProviderName,
  authProviderDocsUrl,
}) => {
  return (
    <div className={styles.toolInfo}>
      <p>
        <strong>Description: </strong> {description}
      </p>
      <p>
        <strong>Author: </strong> {author}
      </p>
      <p>
        <strong>Code: </strong>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
      <p>
        <strong>Auth: </strong>
        {authType.toLowerCase() === "oauth2" ? (
          <>
            User authorization
            {authProviderName && authProviderDocsUrl && (
              <>
                {" "}
                via the{" "}
                <a href={authProviderDocsUrl}>
                  {authProviderName} auth provider
                </a>
              </>
            )}
          </>
        ) : (
          authType
        )}
      </p>
    </div>
  );
};

export default ToolInfo;
