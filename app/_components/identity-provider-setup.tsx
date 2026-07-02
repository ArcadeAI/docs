import type React from "react";

type IdentityProviderSetupProps = {
  /** Where the user enters the OIDC credentials, e.g. "in the deployment form" or "in your Helm values". */
  credentialInput?: string;
  /** Describes where the redirect URIs come from, e.g. "shown in the deployment outputs". */
  redirectSource?: string;
};

/**
 * Shared "set up your identity provider" step used by every platform deployment
 * guide (Azure, AWS, and Helm). Renders the body only — each guide supplies its
 * own heading so it appears in the page table of contents.
 */
const IdentityProviderSetup: React.FC<IdentityProviderSetupProps> = ({
  credentialInput = "in the deployment form",
  redirectSource = "shown in the deployment outputs",
}) => (
  <>
    <p>
      Arcade signs users in through your OpenID Connect (OIDC) identity
      provider. The provider authenticates dashboard users and backs the tokens
      that MCP gateways validate, so you set it up before you deploy.
    </p>
    <ol>
      <li>
        Register an application with your identity provider. Arcade works with{" "}
        <a href="/references/auth-providers">
          Microsoft Entra ID, Okta, Auth0, or Keycloak
        </a>
        , or any standards-compliant OIDC provider.
      </li>
      <li>
        Copy the application's <strong>client ID</strong>, generate a{" "}
        <strong>client secret</strong>, and note the <strong>issuer URL</strong>
        . For Microsoft Entra ID, use the v2.0 issuer{" "}
        <code>https://login.microsoftonline.com/&lt;tenant-id&gt;/v2.0</code>.
      </li>
      <li>
        Provide the client ID, client secret, and issuer {credentialInput}.
      </li>
      <li>
        After you deploy, register the redirect URIs {redirectSource} on the
        application, then sign in to the dashboard.
      </li>
    </ol>
  </>
);

export default IdentityProviderSetup;
