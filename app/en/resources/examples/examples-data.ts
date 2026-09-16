export type ExampleType = "Sample app" | "MCP server";

// Outcome-driven skill levels (beginner -> advanced). The gallery groups
// examples into these buckets so a developer can find the right starting point
// for what they're trying to achieve, not just filter by tech.
export type ExampleLevel = "Connect" | "Automate" | "Orchestrate";

export type LevelMeta = {
  level: ExampleLevel;
  // Short difficulty label shown as a badge.
  tier: string;
  // Plain-English outcome: what you can do after working through this level.
  outcome: string;
};

// Order here defines the order the buckets render in (beginner first).
export const LEVELS: LevelMeta[] = [
  {
    level: "Connect",
    tier: "Beginner",
    outcome:
      "Authorize an agent and make its first real tool call in a live app.",
  },
  {
    level: "Automate",
    tier: "Intermediate",
    outcome:
      "Ship an agent that finishes a real task across your apps, end to end.",
  },
  {
    level: "Orchestrate",
    tier: "Advanced",
    outcome:
      "Go further with multi-agent systems, frameworks, and per-user auth in production.",
  },
];

export type ExampleItem = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  date: string;
  type: ExampleType;
  // Outcome-driven skill level used to group the gallery.
  level: ExampleLevel;
  // Optional cover art (served from /public). Cards fall back to a generated
  // gradient + monogram when this is omitted.
  image?: string;
  // Set on one entry to spotlight it in a large hero above the grid. If more
  // than one is flagged, the newest wins.
  featured?: boolean;
};

// To feature your project, add an entry below following the existing pattern.
// `date` uses "Mon YYYY"; the gallery sorts newest-first within each level.
// `level` places it in a bucket: "Connect" (beginner), "Automate"
// (intermediate), or "Orchestrate" (advanced).
export const EXAMPLES: ExampleItem[] = [
  {
    title: "Baseball dugout",
    description:
      "Ask about any player and the agent researches them, then emails you a full scouting report, all from one conversation.",
    href: "https://github.com/ArcadeAI/baseball-dugout",
    tags: ["JavaScript", "GitHub", "Email"],
    date: "Dec 2025",
    type: "Sample app",
    level: "Automate",
    image: "/images/examples/example-baseball-dugout.jpg",
    featured: true,
  },
  {
    title: "Agent Templates",
    description:
      "Copy-paste starting points for common agent use cases, so you can stand up your first working agent in minutes.",
    href: "https://github.com/ArcadeAI/agent-templates",
    tags: ["Python"],
    date: "Dec 2025",
    type: "Sample app",
    level: "Connect",
    image: "/images/examples/example-agent-templates.jpg",
  },
  {
    title: "OpenAI Agents SDK + Arcade MCP Gateway",
    description:
      "Give an OpenAI Agents SDK app instant, authorized access to hundreds of tools through a single Arcade gateway.",
    href: "https://github.com/ArcadeAI/openaisdk-mcpgateway",
    tags: ["TypeScript", "OpenAI"],
    date: "Nov 2025",
    type: "Sample app",
    level: "Orchestrate",
    image: "/images/examples/example-openai-mcp-gateway.jpg",
  },
  {
    title: "Agent Kitchen Sink",
    description:
      "One TypeScript app that wires up many tools, auth flows, and integrations to show everything an agent can do with Arcade.",
    href: "https://github.com/ArcadeAI/agent-kitchen-sink-typescript",
    tags: ["TypeScript"],
    date: "Nov 2025",
    type: "Sample app",
    level: "Orchestrate",
    image: "/images/examples/example-agent-kitchen-sink.jpg",
  },
  {
    title: "Arcade Custom Verifier for Next.js apps",
    description:
      "Drop-in user verification for Next.js apps, so your own users can securely connect their accounts.",
    href: "https://github.com/ArcadeAI/arcade-custom-verifier-next",
    tags: ["TypeScript", "Next.js"],
    date: "Aug 2025",
    type: "Sample app",
    level: "Connect",
    image: "/images/examples/example-custom-verifier-next.jpg",
  },
  {
    title: "Agency Tutorial with Stytch",
    description:
      "Build an app where agents act for each signed-in user, with Stytch handling login and Arcade handling tool access.",
    href: "https://github.com/ArcadeAI/agency-tutorial-stytch",
    tags: ["TypeScript", "Stytch"],
    date: "Aug 2025",
    type: "Sample app",
    level: "Connect",
    image: "/images/examples/example-agency-stytch.jpg",
  },
  {
    title: "Arcade CLI Agent Template",
    description:
      "A minimal terminal agent you can talk to, so you can start building command-line tools fast.",
    href: "https://github.com/ArcadeAI/cli-agent-template",
    tags: ["TypeScript"],
    date: "Jul 2025",
    type: "Sample app",
    level: "Connect",
    image: "/images/examples/example-cli-agent-template.jpg",
  },
  {
    title: "Megaforce",
    description:
      "Turn one piece of content into platform-ready posts for every social channel, automatically.",
    href: "https://github.com/ArcadeAI/megaforce",
    tags: ["TypeScript"],
    date: "Jul 2025",
    type: "Sample app",
    level: "Automate",
    image: "/images/examples/example-megaforce.jpg",
  },
  {
    title: "Human-in-the-loop (HITL) Agent Frameworks Showdown",
    description:
      "Put a human in the loop before agents act, with the same approval workflow built three ways (LangGraph, OpenAI Agents SDK, Google ADK) so you can compare.",
    href: "https://github.com/ArcadeAI/framework-showdown",
    tags: ["TypeScript"],
    date: "May 2025",
    type: "Sample app",
    level: "Orchestrate",
    image: "/images/examples/example-hitl-showdown.jpg",
  },
  {
    title: "YouTube Transcript Bot",
    description:
      "Drop a YouTube link in Slack and get an instant, searchable summary, with transcripts fetched, summarized, and stored in Weaviate.",
    href: "https://github.com/dforwardfeed/slack-AIpodcast-summaries",
    tags: ["Python", "Langchain", "Slack", "Weaviate"],
    date: "Mar 2025",
    type: "Sample app",
    level: "Automate",
    image: "/images/examples/example-youtube-transcript.jpg",
  },
  {
    title: "Archer: Agentic Slack Assistant",
    description:
      "Run your day from Slack with one assistant that handles Google Calendar, Gmail, GitHub, and web research on your behalf.",
    href: "https://github.com/ArcadeAI/ArcadeSlackAgent",
    tags: ["JavaScript", "Slack"],
    date: "Oct 2024",
    type: "Sample app",
    level: "Automate",
    image: "/images/examples/example-archer-slack.jpg",
  },
  {
    title: "Granola MCP Server",
    description:
      "Give any AI client access to your Granola meeting notes and transcripts through a clean MCP server you can build on.",
    href: "https://github.com/ArcadeAI/granola-mcp-server",
    tags: ["Python"],
    date: "Mar 2026",
    type: "MCP server",
    level: "Connect",
    image: "/images/examples/example-granola-mcp.jpg",
  },
];
