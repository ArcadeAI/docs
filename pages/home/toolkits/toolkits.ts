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
  { id: "communication", name: "Communication" },
  { id: "documents", name: "Documents" },
  { id: "development", name: "Development" },
  { id: "analytics", name: "Analytics" },
  { id: "automation", name: "Automation" },
];

export const tools: Tool[] = [
  {
    name: "Gmail",
    image: "gmail",
    summary:
      "Send, write, draft, delete, trash, and search Gmail emails with your agents.",
    link: "/integrations/toolkits/communication/gmail",
    category: "communication",
    type: "arcade",
  },
  {
    name: "Slack",
    image: "slack",
    summary:
      "Send and receive messages to Slack channels and users with agents",
    link: "/integrations/toolkits/communication/slack",
    category: "communication",
    type: "verified",
  },
  {
    name: "Twilio",
    image: "twilio",
    summary: "Send SMS and WhatsApp messages via Twilio",
    link: "/integrations/toolkits/communication/twilio",
    category: "communication",
    type: "community",
  },
  {
    name: "X",
    image: "twitter",
    summary:
      "Integrate agents with X (Twitter), including tweets, users, and more",
    link: "/integrations/toolkits/social_media/x",
    category: "communication",
    type: "arcade",
  },
  {
    name: "Google Calendar",
    image: "google_calendar",
    summary:
      "Create, update, delete, and search events in Google Calendar with your agents.",
    link: "/integrations/toolkits/calendar/google_calendar",
    category: "documents",
    type: "verified",
  },
  {
    name: "Google Docs",
    image: "google_docs",
    summary:
      "Create, edit, and get information about Google Docs documents with your agents.",
    link: "/integrations/toolkits/documents/google_docs",
    category: "documents",
    type: "community",
  },
  {
    name: "Google Drive",
    image: "google_drive",
    summary: "List documents in Google Drive with your agents.",
    link: "/integrations/toolkits/documents/google_drive",
    category: "documents",
    type: "arcade",
  },
  {
    name: "Notion",
    image: "notion",
    summary: "Search, create and manage Notion pages and databases",
    link: "/integrations/toolkits/documents/notion",
    category: "documents",
    type: "verified",
  },
  {
    name: "Code Sandbox",
    image: "e2b",
    summary: "Run code in a sandboxed environment",
    link: "/integrations/toolkits/development/code-sandbox",
    category: "development",
    type: "community",
  },
  {
    name: "GitHub",
    image: "github",
    summary:
      "Interact with private and public GitHub repositories, issues, pull requests, and more",
    link: "/integrations/toolkits/development/github",
    category: "development",
    type: "verified",
  },
  {
    name: "Google Analytics",
    image: "google_analytics",
    summary: "Fetch and analyze website traffic data from Google Analytics",
    link: "/integrations/toolkits/analytics/google_analytics",
    category: "analytics",
    type: "arcade",
  },
  {
    name: "Zapier",
    image: "zapier",
    summary: "Create and manage automated workflows between your favorite apps",
    link: "/integrations/toolkits/automation/zapier",
    category: "automation",
    type: "verified",
  },
  {
    name: "IFTTT",
    image: "ifttt",
    summary: "Connect apps and devices for seamless automation",
    link: "/integrations/toolkits/automation/ifttt",
    category: "automation",
    type: "community",
  },
];
