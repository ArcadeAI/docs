import { PostHog } from "posthog-node";

// Server-side PostHog client singleton
let posthogClient: PostHog | null = null;

export function getPostHogServer(): PostHog {
  if (!posthogClient) {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!apiKey) {
      throw new Error("NEXT_PUBLIC_POSTHOG_KEY is not set");
    }
    posthogClient = new PostHog(apiKey, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      // Flush events immediately in serverless environments
      flushAt: 1,
      flushInterval: 0,
    });
  }
  return posthogClient;
}

// AI agent detection patterns with classification
const AI_AGENT_CLASSIFIERS: Array<{
  pattern: RegExp;
  type: string;
  provider: string;
}> = [
  // OpenAI
  { pattern: /GPTBot/i, type: "GPTBot", provider: "OpenAI" },
  { pattern: /ChatGPT-User/i, type: "ChatGPT-User", provider: "OpenAI" },
  { pattern: /OAI-SearchBot/i, type: "OAI-SearchBot", provider: "OpenAI" },

  // Anthropic
  { pattern: /ClaudeBot/i, type: "ClaudeBot", provider: "Anthropic" },
  { pattern: /Claude-User/i, type: "Claude-User", provider: "Anthropic" },
  {
    pattern: /Claude-SearchBot/i,
    type: "Claude-SearchBot",
    provider: "Anthropic",
  },
  { pattern: /anthropic/i, type: "Anthropic-Agent", provider: "Anthropic" },

  // Perplexity
  { pattern: /PerplexityBot/i, type: "PerplexityBot", provider: "Perplexity" },
  {
    pattern: /Perplexity-User/i,
    type: "Perplexity-User",
    provider: "Perplexity",
  },

  // Google
  { pattern: /Google-Extended/i, type: "Google-Extended", provider: "Google" },
  { pattern: /Googlebot/i, type: "Googlebot", provider: "Google" },

  // Amazon
  { pattern: /Amazonbot/i, type: "Amazonbot", provider: "Amazon" },
  { pattern: /amazonq/i, type: "Amazon-Q", provider: "Amazon" },
  { pattern: /amazon-q/i, type: "Amazon-Q", provider: "Amazon" },

  // Apple
  {
    pattern: /Applebot-Extended/i,
    type: "Applebot-Extended",
    provider: "Apple",
  },

  // Meta
  { pattern: /meta-externalagent/i, type: "Meta-Agent", provider: "Meta" },

  // ByteDance
  { pattern: /Bytespider/i, type: "Bytespider", provider: "ByteDance" },

  // Cohere
  { pattern: /cohere-ai/i, type: "Cohere-AI", provider: "Cohere" },

  // Common Crawl
  { pattern: /CCBot/i, type: "CCBot", provider: "CommonCrawl" },

  // Developer tools
  { pattern: /cursor/i, type: "Cursor", provider: "Cursor" },
  { pattern: /github.copilot/i, type: "GitHub-Copilot", provider: "GitHub" },
  { pattern: /copilot/i, type: "Copilot", provider: "GitHub" },
  { pattern: /codeium/i, type: "Codeium", provider: "Codeium" },
  { pattern: /tabnine/i, type: "Tabnine", provider: "Tabnine" },

  // Other AI services
  { pattern: /gemini/i, type: "Gemini", provider: "Google" },
  { pattern: /bard/i, type: "Bard", provider: "Google" },
  { pattern: /phind/i, type: "Phind", provider: "Phind" },
  { pattern: /you\.com/i, type: "You.com", provider: "You.com" },
  { pattern: /ai21/i, type: "AI21", provider: "AI21" },
  { pattern: /huggingface/i, type: "HuggingFace", provider: "HuggingFace" },

  // Agent frameworks
  { pattern: /langchain/i, type: "LangChain", provider: "LangChain" },
  { pattern: /llamaindex/i, type: "LlamaIndex", provider: "LlamaIndex" },
  { pattern: /autogpt/i, type: "AutoGPT", provider: "AutoGPT" },
  { pattern: /agentgpt/i, type: "AgentGPT", provider: "AgentGPT" },
  { pattern: /babyagi/i, type: "BabyAGI", provider: "BabyAGI" },

  // Doc AI tools
  { pattern: /kapa\.ai/i, type: "Kapa.ai", provider: "Kapa" },
  { pattern: /mendable/i, type: "Mendable", provider: "Mendable" },
  { pattern: /inkeep/i, type: "Inkeep", provider: "Inkeep" },
  { pattern: /glean/i, type: "Glean", provider: "Glean" },
];

export type AIAgentClassification = {
  isAIAgent: boolean;
  agentType: string | null;
  agentProvider: string | null;
};

export function classifyAIAgent(userAgent: string): AIAgentClassification {
  for (const classifier of AI_AGENT_CLASSIFIERS) {
    if (classifier.pattern.test(userAgent)) {
      return {
        isAIAgent: true,
        agentType: classifier.type,
        agentProvider: classifier.provider,
      };
    }
  }
  return {
    isAIAgent: false,
    agentType: null,
    agentProvider: null,
  };
}

export type ServerPageViewEvent = {
  distinctId: string;
  pathname: string;
  userAgent: string;
  referer?: string;
  ip?: string;
  acceptHeader?: string;
  acceptLanguage?: string;
};

export async function captureServerPageView(event: ServerPageViewEvent) {
  const posthog = getPostHogServer();
  const classification = classifyAIAgent(event.userAgent);

  // Use distinct event name to avoid double-counting with client-side $pageview
  // This tracks server-side markdown requests (primarily from AI agents)
  posthog.capture({
    distinctId: event.distinctId,
    event: "server_markdown_request",
    properties: {
      $current_url: event.pathname,
      $pathname: event.pathname,
      $referrer: event.referer,
      $useragent: event.userAgent,

      // AI agent classification
      is_ai_agent: classification.isAIAgent,
      ai_agent_type: classification.agentType,
      ai_agent_provider: classification.agentProvider,

      // Request metadata
      request_accept_header: event.acceptHeader,
      request_accept_language: event.acceptLanguage,
      request_source: "server",

      // Mark as server-side capture
      $lib: "posthog-node",
    },
  });

  // Flush immediately for serverless
  await posthog.flush();
}

// Shutdown handler for graceful shutdown
export async function shutdownPostHog() {
  if (posthogClient) {
    await posthogClient.shutdown();
    posthogClient = null;
  }
}
