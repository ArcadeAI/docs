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
      // Flush events immediately in serverless environments
      flushAt: 1,
      flushInterval: 0,
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
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
  { pattern: /GPTBot/i, provider: "OpenAI", type: "GPTBot" },
  { pattern: /ChatGPT-User/i, provider: "OpenAI", type: "ChatGPT-User" },
  { pattern: /OAI-SearchBot/i, provider: "OpenAI", type: "OAI-SearchBot" },

  // Anthropic
  { pattern: /ClaudeBot/i, provider: "Anthropic", type: "ClaudeBot" },
  { pattern: /Claude-User/i, provider: "Anthropic", type: "Claude-User" },
  {
    pattern: /Claude-SearchBot/i,
    provider: "Anthropic",
    type: "Claude-SearchBot",
  },
  { pattern: /anthropic/i, provider: "Anthropic", type: "Anthropic-Agent" },

  // Perplexity
  { pattern: /PerplexityBot/i, provider: "Perplexity", type: "PerplexityBot" },
  {
    pattern: /Perplexity-User/i,
    provider: "Perplexity",
    type: "Perplexity-User",
  },

  // Google
  { pattern: /Google-Extended/i, provider: "Google", type: "Google-Extended" },
  { pattern: /Googlebot/i, provider: "Google", type: "Googlebot" },

  // Amazon
  { pattern: /Amazonbot/i, provider: "Amazon", type: "Amazonbot" },
  { pattern: /amazonq/i, provider: "Amazon", type: "Amazon-Q" },
  { pattern: /amazon-q/i, provider: "Amazon", type: "Amazon-Q" },

  // Apple
  {
    pattern: /Applebot-Extended/i,
    provider: "Apple",
    type: "Applebot-Extended",
  },

  // Meta
  { pattern: /meta-externalagent/i, provider: "Meta", type: "Meta-Agent" },

  // ByteDance
  { pattern: /Bytespider/i, provider: "ByteDance", type: "Bytespider" },

  // Cohere
  { pattern: /cohere-ai/i, provider: "Cohere", type: "Cohere-AI" },

  // Common Crawl
  { pattern: /CCBot/i, provider: "CommonCrawl", type: "CCBot" },

  // Developer tools
  { pattern: /cursor/i, provider: "Cursor", type: "Cursor" },
  { pattern: /github.copilot/i, provider: "GitHub", type: "GitHub-Copilot" },
  { pattern: /copilot/i, provider: "GitHub", type: "Copilot" },
  { pattern: /codeium/i, provider: "Codeium", type: "Codeium" },
  { pattern: /tabnine/i, provider: "Tabnine", type: "Tabnine" },

  // Other AI services
  { pattern: /gemini/i, provider: "Google", type: "Gemini" },
  { pattern: /bard/i, provider: "Google", type: "Bard" },
  { pattern: /phind/i, provider: "Phind", type: "Phind" },
  { pattern: /you\.com/i, provider: "You.com", type: "You.com" },
  { pattern: /ai21/i, provider: "AI21", type: "AI21" },
  { pattern: /huggingface/i, provider: "HuggingFace", type: "HuggingFace" },

  // Agent frameworks
  { pattern: /langchain/i, provider: "LangChain", type: "LangChain" },
  { pattern: /llamaindex/i, provider: "LlamaIndex", type: "LlamaIndex" },
  { pattern: /autogpt/i, provider: "AutoGPT", type: "AutoGPT" },
  { pattern: /agentgpt/i, provider: "AgentGPT", type: "AgentGPT" },
  { pattern: /babyagi/i, provider: "BabyAGI", type: "BabyAGI" },

  // Doc AI tools
  { pattern: /kapa\.ai/i, provider: "Kapa", type: "Kapa.ai" },
  { pattern: /mendable/i, provider: "Mendable", type: "Mendable" },
  { pattern: /inkeep/i, provider: "Inkeep", type: "Inkeep" },
  { pattern: /glean/i, provider: "Glean", type: "Glean" },
];

export interface AIAgentClassification {
  agentProvider: string | null;
  agentType: string | null;
  isAIAgent: boolean;
}

export function classifyAIAgent(userAgent: string): AIAgentClassification {
  for (const classifier of AI_AGENT_CLASSIFIERS) {
    if (classifier.pattern.test(userAgent)) {
      return {
        agentProvider: classifier.provider,
        agentType: classifier.type,
        isAIAgent: true,
      };
    }
  }
  return {
    agentProvider: null,
    agentType: null,
    isAIAgent: false,
  };
}

export interface ServerPageViewEvent {
  acceptHeader?: string;
  acceptLanguage?: string;
  distinctId: string;
  ip?: string;
  pathname: string;
  referer?: string;
  userAgent: string;
}

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

      // Mark as server-side capture
      $lib: "posthog-node",
      $pathname: event.pathname,
      $referrer: event.referer,
      $useragent: event.userAgent,
      ai_agent_provider: classification.agentProvider,
      ai_agent_type: classification.agentType,

      // AI agent classification
      is_ai_agent: classification.isAIAgent,

      // Request metadata
      request_accept_header: event.acceptHeader,
      request_accept_language: event.acceptLanguage,
      request_source: "server",
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
