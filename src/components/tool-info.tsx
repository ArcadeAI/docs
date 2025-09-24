import type React from "react";
import styles from "./ToolInfo.module.css";

type ToolInfoProps = {
  description: string;
  author: string;
  codeLink: string;
  authType: "oauth2";
  authProviderName?: string;
  authProviderDocsUrl?: string;
  versions: string[];
  note?: string;
};

const ToolInfo: React.FC<ToolInfoProps> = ({
  description,
  author,
  codeLink,
  authType,
  authProviderName,
  authProviderDocsUrl,
  note,
}) => {
  authProviderDocsUrl =
    authProviderName && !authProviderDocsUrl
      ? `/home/auth-providers/${authProviderName.toLowerCase()}`
      : authProviderDocsUrl;
  return (
    <div className={styles.toolInfo}>
      <p>
        <strong>Description: </strong> {description}
      </p>
      <p>
        <strong>Author: </strong> {author}
      </p>
      {codeLink && (
        <p>
          <strong>Code: </strong>
          <a href={codeLink} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
        </p>
      )}
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
      {note && (
        <p>
          <strong>Note: </strong>
          {note}
        </p>
      )}
    </div>
  );
};

export default ToolInfo;
