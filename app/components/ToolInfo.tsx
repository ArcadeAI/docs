import React from "react";

interface ToolInfoProps {
  description: string;
  author: string;
  codeLink: string;
  authType: "oauth2";
  authProviderName?: string;
  authProviderDocsUrl?: string;
  versions: string[];
  note?: string;
}

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
    <div className="border-neutral-dark-medium text-text-color mt-5 mb-6 rounded-lg border-4 p-6 shadow-lg sm:p-3">
      <p className="text-text-color my-1.5 text-base sm:text-sm">
        <strong className="text-text-color">Description: </strong> {description}
      </p>
      <p className="text-text-color my-1.5 text-base sm:text-sm">
        <strong className="text-text-color">Author: </strong> {author}
      </p>
      <p className="text-text-color my-1.5 text-base sm:text-sm">
        <strong className="text-text-color">Code: </strong>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-accent underline-offset-0.5 no-underline hover:underline"
        >
          GitHub
        </a>
      </p>
      <p className="text-text-color my-1.5 text-base sm:text-sm">
        <strong className="text-text-color">Auth: </strong>
        {authType.toLowerCase() === "oauth2" ? (
          <>
            User authorization
            {authProviderName && authProviderDocsUrl && (
              <>
                {" "}
                via the{" "}
                <a
                  href={authProviderDocsUrl}
                  className="text-brand-accent underline-offset-0.5 no-underline hover:underline"
                >
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
        <p className="text-text-color my-1.5 text-base sm:text-sm">
          <strong className="text-text-color">Note: </strong>
          {note}
        </p>
      )}
    </div>
  );
};

export default ToolInfo;
