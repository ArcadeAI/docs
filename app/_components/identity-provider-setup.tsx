import { Callout } from "nextra/components";
import type React from "react";

type IdentityProviderSetupProps = {
  /** Where the user enters the OIDC credentials, e.g. "in the deployment form" or "in your Helm values". */
  credentialInput?: string;
  /** Where the deployed hostname / redirect URI comes from, e.g. "the deployment output". */
  hostnameSource?: string;
};

/**
 * Shared "set up your identity provider" step used by every platform deployment
 * guide (Azure, AWS, GCP, and Helm). Renders the body only — each guide supplies
 * its own heading so it appears in the page table of contents.
 */
const IdentityProviderSetup: React.FC<IdentityProviderSetupProps> = ({
  credentialInput = "in the deployment form",
  hostnameSource = "the deployment output",
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
        After the deployment finishes, register the redirect URI from{" "}
        {hostnameSource} — typically{" "}
        <code>
          https://coordinator.&lt;your-hostname&gt;/signin/oidc/callback
        </code>{" "}
        — as a redirect (reply) URI on the application, then sign in to the
        dashboard.
      </li>
    </ol>
    <Callout type="warning">
      If sign-in fails with{" "}
      <code>
        AADSTS500113: No reply address is registered for the application
      </code>
      , the redirect URI has not been added to your identity provider
      application yet. Add it and try again.
    </Callout>
  </>
);

export default IdentityProviderSetup;
