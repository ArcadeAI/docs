import { ToolkitType } from "@/components/custom/Toolkits/Toolkits";

export interface Tool {
  name: string;
  image: string;
  summary: string;
  link: string;
  type: ToolkitType;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: "all", name: "All Tools" },
  { id: "productivity", name: "Productivity & Docs" },
  { id: "social", name: "Social & Communication" },
  { id: "developer", name: "Developer Tools" },
  { id: "integrations", name: "Apps & Services" },
  { id: "automation", name: "Smart Automation" },
];

export const tools: Tool[] = [
  {
    name: "Gmail",
    image: "gmail",
    summary:
      "Send, write, draft, delete, trash, and search Gmail emails with your agents.",
    link: "/integrations/toolkits/communication/gmail",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Slack",
    image: "slack",
    summary:
      "Send and receive messages to Slack channels and users with agents",
    link: "/integrations/toolkits/communication/slack",
    category: "social",
    type: "arcade",
  },
  {
    name: "X",
    image: "twitter",
    summary:
      "Integrate agents with X (Twitter), including tweets, users, and more",
    link: "/integrations/toolkits/social_media/x",
    category: "social",
    type: "arcade",
  },
  {
    name: "LinkedIn",
    image: "linkedin",
    summary:
      "Connect and interact with LinkedIn's professional network through your agents",
    link: "/integrations/toolkits/social_media/linkedin",
    category: "social",
    type: "arcade",
  },
  {
    name: "Google Calendar",
    image: "google_calendar",
    summary:
      "Create, update, delete, and search events in Google Calendar with your agents.",
    link: "/integrations/toolkits/calendar/google_calendar",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Google Drive",
    image: "google_drive",
    summary: "List documents in Google Drive with your agents.",
    link: "/integrations/toolkits/documents/google_drive",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Google Docs",
    image: "google_docs",
    summary:
      "Create, edit, and get information about Google Docs documents with your agents.",
    link: "/integrations/toolkits/documents/google_docs",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "GitHub",
    image: "github",
    summary:
      "Interact with private and public GitHub repositories, issues, pull requests, and more",
    link: "/integrations/toolkits/development/github",
    category: "developer",
    type: "arcade",
  },
  {
    name: "Code Runner",
    image: "e2b",
    summary: "Execute and test code in a secure sandbox environment",
    link: "/integrations/toolkits/development/code-runner",
    category: "developer",
    type: "arcade",
  },
  {
    name: "Web",
    image: "web",
    summary: "Browse and interact with web pages programmatically",
    link: "/integrations/toolkits/web/browser",
    category: "developer",
    type: "arcade",
  },
  {
    name: "Search",
    image: "serpapi",
    summary: "Perform web searches and retrieve relevant information",
    link: "/integrations/toolkits/web/search",
    category: "developer",
    type: "arcade",
  },
  {
    name: "Spotify",
    image: "spotify",
    summary: "Control music playback and manage playlists on Spotify",
    link: "/integrations/toolkits/entertainment/spotify",
    category: "integrations",
    type: "arcade",
  },
  {
    name: "Notion",
    image: "notion",
    summary: "Create, edit, and manage Notion pages and databases",
    link: "/integrations/toolkits/documents/notion",
    category: "productivity",
    type: "verified",
  },
  {
    name: "Twilio",
    image: "twilio",
    summary: "Send SMS and WhatsApp messages through Twilio's platform",
    link: "/integrations/toolkits/communication/twilio",
    category: "social",
    type: "verified",
  },
  {
    name: "Govee",
    image: "govee",
    summary: "Control Govee smart lights",
    link: "/integrations/toolkits/iot/govee",
    category: "automation",
    type: "community",
  },
  {
    name: "Close.io",
    image: "closeio",
    summary: "Manage leads, contacts, and deals in Close.io CRM",
    link: "/integrations/toolkits/crm/closeio",
    category: "integrations",
    type: "community",
  },
];
