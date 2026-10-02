/**
 * Auth provider pages that exist under app/en/references/auth-providers/,
 * shared by the toolkit page header and the toolkit summary prompt so neither
 * links to a provider that has no page (for example `box`).
 *
 * Those pages are written by hand, so this list is too. A test compares it to
 * the directory and fails when a page is added or removed without updating it.
 *
 * Free of Node built-ins because client components import it.
 */
export const AUTH_PROVIDER_PAGE_IDS: readonly string[] = [
  "airtable",
  "asana",
  "atlassian",
  "attio",
  "calendly",
  "cisco-duo",
  "clickup",
  "discord",
  "dropbox",
  "figma",
  "github",
  "google",
  "hubspot",
  "linear",
  "linkedin",
  "mailchimp",
  "microsoft",
  "microsoft-powerbi",
  "miro",
  "notion",
  "oauth2",
  "pagerduty",
  "reddit",
  "salesforce",
  "servicenow",
  "slack",
  "spotify",
  "square",
  "ticktick",
  "twitch",
  "x",
  "zendesk",
  "zoho",
  "zoom",
];

/**
 * Provider IDs whose page URL redirects to a page with a different name
 * (see redirects.ts), so links built from the ID still work.
 */
export const REDIRECTED_AUTH_PROVIDER_IDS: readonly string[] = ["squareup"];

export function hasAuthProviderPage(providerId: string): boolean {
  const id = providerId.toLowerCase();
  return (
    AUTH_PROVIDER_PAGE_IDS.includes(id) ||
    REDIRECTED_AUTH_PROVIDER_IDS.includes(id)
  );
}
