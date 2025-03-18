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
  { id: "search", name: "Search" },
];

export const tools: Tool[] = [
  {
    name: "Gmail",
    image: "gmail",
    summary:
      "Send, write, draft, delete, trash, and search Gmail emails with your agents.",
    link: "/toolkits/productivity/google/gmail",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Slack",
    image: "slack",
    summary:
      "Send and receive messages to Slack channels and users with agents",
    link: "/toolkits/social-communication/slack",
    category: "social",
    type: "arcade",
  },
  {
    name: "X",
    image: "twitter",
    summary:
      "Integrate agents with X (Twitter), including tweets, users, and more",
    link: "/toolkits/social-communication/x",
    category: "social",
    type: "arcade",
  },
  {
    name: "LinkedIn",
    image: "linkedin",
    summary:
      "Connect and interact with LinkedIn's professional network through your agents",
    link: "/toolkits/social-communication/linkedin",
    category: "social",
    type: "arcade",
  },
  {
    name: "Google Calendar",
    image: "google_calendar",
    summary:
      "Create, update, delete, and search events in Google Calendar with your agents.",
    link: "/toolkits/productivity/google/calendar",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Google Contacts",
    image: "google_contacts",
    summary: "Create and search contacts in Google Contacts with your agents.",
    link: "/toolkits/productivity/google/contacts",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Google Drive",
    image: "google_drive",
    summary: "List documents in Google Drive with your agents.",
    link: "/toolkits/productivity/google/drive",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Google Docs",
    image: "google_docs",
    summary:
      "Create, edit, and get information about Google Docs documents with your agents.",
    link: "/toolkits/productivity/google/docs",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "GitHub",
    image: "github",
    summary:
      "Interact with private and public GitHub repositories, issues, pull requests, and more",
    link: "/toolkits/development/github/github",
    category: "development",
    type: "arcade",
  },
  {
    name: "Code Runner",
    image: "e2b",
    summary: "Execute and test code in a secure sandbox environment",
    link: "/toolkits/development/code-sandbox",
    category: "development",
    type: "arcade",
  },
  {
    name: "Web",
    image: "web",
    summary: "Browse and interact with web pages programmatically",
    link: "/toolkits/development/web/web",
    category: "development",
    type: "arcade",
  },
  {
    name: "Google Finance",
    image: "google_finance",
    summary: "Get stock data from Google Finance",
    link: "/toolkits/search/google_finance",
    category: "search",
    type: "arcade",
  },
  {
    name: "Google Flights",
    image: "google_flights",
    summary: "Search for flights",
    link: "/toolkits/search/google_flights",
    category: "search",
    type: "arcade",
  },
  {
    name: "Google Hotels",
    image: "google_hotels",
    summary: "Search for hotels",
    link: "/toolkits/search/google_hotels",
    category: "search",
    type: "arcade",
  },
  {
    name: "Google Search",
    image: "google_search",
    summary: "Perform Google searches and retrieve relevant information",
    link: "/toolkits/search/google_search",
    category: "search",
    type: "arcade",
  },
  {
    name: "Google Maps",
    image: "google_maps",
    summary: "Get directions between two locations with Google Maps",
    link: "/toolkits/search/google_maps",
    category: "search",
    type: "arcade",
  },
  {
    name: "Google Jobs",
    image: "google_jobs",
    summary: "Search for job openings with Google Jobs.",
    link: "/toolkits/search/google_jobs",
    category: "search",
    type: "arcade",
  },
  {
    name: "Spotify",
    image: "spotify",
    summary: "Control music playback and manage playlists on Spotify",
    link: "/toolkits/entertainment/spotify",
    category: "entertainment",
    type: "arcade",
  },
  {
    name: "Notion",
    image: "notion",
    summary: "Create, read, and search Notion pages",
    link: "/toolkits/productivity/notion/readme",
    category: "productivity",
    type: "arcade",
  },
  {
    name: "Twilio",
    image: "twilio",
    summary: "Send SMS and WhatsApp messages through Twilio's platform",
    link: "/toolkits/social-communication/twilio/readme",
    category: "social",
    type: "verified",
  },
  {
    name: "Close.io",
    image: "closeio",
    summary: "Manage leads, contacts, and deals in Close.io CRM",
    link: "/toolkits/productivity/closeio",
    category: "productivity",
    type: "community",
  },
  {
    name: "Obsidian",
    image: "obsidian",
    summary: "Create, edit, and manage Obsidian notes",
    link: "/toolkits/productivity/obsidian",
    category: "productivity",
    type: "community",
  },
  {
    name: "Zoom",
    image: "zoom",
    summary: "Join and manage Zoom meetings with your agents",
    link: "/toolkits/social-communication/zoom",
    category: "social",
    type: "arcade",
  },
  {
    name: "Jira",
    image: "atlassian",
    summary: "Manage Jira projects, issues, and more with your agents",
    link: "/toolkits/productivity/jira",
    category: "productivity",
    type: "auth",
  },
  {
    name: "Confluence",
    image: "atlassian",
    summary: "Manage Confluence pages and spaces with your agents",
    link: "/toolkits/productivity/confluence",
    category: "productivity",
    type: "auth",
  },
  {
    name: "Outlook",
    image: "msft",
    summary: "Manage Outlook emails, calendar, and contacts with your agents",
    link: "/toolkits/productivity/outlook",
    category: "productivity",
    type: "auth",
  },
  {
    name: "OneDrive",
    image: "msft",
    summary: "Manage OneDrive files and folders with your agents",
    link: "/toolkits/productivity/onedrive",
    category: "productivity",
    type: "auth",
  },
  {
    name: "Dropbox",
    image: "dropbox",
    summary: "Manage Dropbox files and folders with your agents",
    link: "/toolkits/productivity/dropbox",
    category: "productivity",
    type: "auth",
  },
  {
    name: "Discord",
    image: "discord",
    summary: "Manage Discord servers, channels, and more with your agents",
    link: "/toolkits/social-communication/discord",
    category: "social",
    type: "auth",
  },
  {
    name: "Reddit",
    image: "reddit",
    summary: "Interact with Reddit with your agents",
    link: "/toolkits/social-communication/reddit",
    category: "social",
    type: "auth",
  },
  {
    name: "Twitch",
    image: "twitch",
    summary: "Create clips, get videos, and more from Twitch with your agents",
    link: "/toolkits/entertainment/twitch",
    category: "entertainment",
    type: "auth",
  },
];
