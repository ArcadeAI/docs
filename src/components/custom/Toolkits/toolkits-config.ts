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
  { id: "development", name: "Developer Tools" },
  { id: "entertainment", name: "Entertainment" },
];

export const tools: Tool[] = [
  {
    name: "Gmail",
    image: "gmail",
    summary:
      "Send, write, draft, delete, trash, and search Gmail emails with your agents.",
    link: "/integrations/toolkits/productivity/google/gmail",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Slack",
    image: "slack",
    summary:
      "Send and receive messages to Slack channels and users with agents",
    link: "/integrations/toolkits/social-communication/slack",
    category: "social",
    type: "arcade",
  },
  {
    name: "X",
    image: "twitter",
    summary:
      "Integrate agents with X (Twitter), including tweets, users, and more",
    link: "/integrations/toolkits/social-communication/x",
    category: "social",
    type: "arcade",
  },
  {
    name: "Google Calendar",
    image: "google_calendar",
    summary:
      "Create, update, delete, and search events in Google Calendar with your agents.",
    link: "/integrations/toolkits/productivity/google/google_calendar",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Google Drive",
    image: "google_drive",
    summary: "List documents in Google Drive with your agents.",
    link: "/integrations/toolkits/productivity/google/google_drive",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Google Docs",
    image: "google_docs",
    summary:
      "Create, edit, and get information about Google Docs documents with your agents.",
    link: "/integrations/toolkits/productivity/google/google_docs",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "GitHub",
    image: "github",
    summary:
      "Interact with private and public GitHub repositories, issues, pull requests, and more",
    link: "/integrations/toolkits/development/github/github",
    category: "development",
    type: "arcade",
  },
  {
    name: "Code Runner",
    image: "e2b",
    summary: "Execute and test code in a secure sandbox environment",
    link: "/integrations/toolkits/development/code-sandbox",
    category: "development",
    type: "arcade",
  },
  {
    name: "Web",
    image: "web",
    summary: "Browse and interact with web pages programmatically",
    link: "/integrations/toolkits/development/web/web",
    category: "development",
    type: "arcade",
  },
  {
    name: "Search",
    image: "serpapi",
    summary: "Perform web searches and retrieve relevant information",
    link: "/integrations/toolkits/development/search",
    category: "development",
    type: "arcade",
  },
  {
    name: "Spotify",
    image: "spotify",
    summary: "Control music playback and manage playlists on Spotify",
    link: "/integrations/toolkits/entertainment/spotify",
    category: "entertainment",
    type: "arcade",
  },
  {
    name: "Notion",
    image: "notion",
    summary: "Create, edit, and manage Notion pages and databases",
    link: "/integrations/toolkits/productivity/notion/readme",
    category: "productivity",
    type: "verified",
  },
  {
    name: "Twilio",
    image: "twilio",
    summary: "Send SMS and WhatsApp messages through Twilio's platform",
    link: "/integrations/toolkits/social-communication/twilio/readme",
    category: "social",
    type: "verified",
  },
];
