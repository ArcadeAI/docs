import type React from "react";

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
    <div className="mt-5 mb-6 rounded-lg border-4 border-neutral-dark-medium p-6 text-text-color shadow-lg sm:p-3">
      <p className="my-1.5 text-base text-text-color sm:text-sm">
        <strong className="text-text-color">Description: </strong> {description}
      </p>
      <p className="my-1.5 text-base text-text-color sm:text-sm">
        <strong className="text-text-color">Author: </strong> {author}
      </p>
      <p className="my-1.5 text-base text-text-color sm:text-sm">
        <strong className="text-text-color">Code: </strong>
        <a
          className="text-brand-accent no-underline underline-offset-0.5 hover:underline"
          href={codeLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </p>
      <p className="my-1.5 text-base text-text-color sm:text-sm">
        <strong className="text-text-color">Auth: </strong>
        {authType.toLowerCase() === "oauth2" ? (
          <>
            User authorization
            {authProviderName && authProviderDocsUrl && (
              <>
                {" "}
                via the{" "}
                <a
                  className="text-brand-accent no-underline underline-offset-0.5 hover:underline"
                  href={authProviderDocsUrl}
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
        <p className="my-1.5 text-base text-text-color sm:text-sm">
          <strong className="text-text-color">Note: </strong>
          {note}
        </p>
      )}
    </div>
  );
};

export default ToolInfo;
