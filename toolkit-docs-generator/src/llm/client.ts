import Anthropic from "@anthropic-ai/sdk";
import OpenAI from "openai";
import { type RetryOptions, withRetry } from "../utils/retry";

export type LlmProvider = "openai" | "anthropic";

export interface LlmRequest {
  readonly maxTokens?: number;
  readonly model: string;
  readonly prompt: string;
  readonly system?: string;
  readonly temperature?: number;
}

export interface LlmClient {
  readonly generateText: (request: LlmRequest) => Promise<string>;
  readonly provider: LlmProvider;
}

export interface LlmClientRetryConfig {
  /** Initial retry delay in ms (default: 1000) */
  readonly initialDelayMs?: number;
  /** Maximum number of retries (default: 3) */
  readonly maxRetries?: number;
  /** Callback for retry events */
  readonly onRetry?:
    | ((attempt: number, error: Error, delayMs: number) => void)
    | undefined;
}

export interface OpenAiClientConfig {
  readonly apiKey: string;
  readonly baseUrl?: string;
  readonly retry?: LlmClientRetryConfig;
}

export class OpenAiClient implements LlmClient {
  readonly provider = "openai" as const;
  private readonly client: OpenAI;
  private readonly retryOptions: RetryOptions;

  constructor(config: OpenAiClientConfig) {
    this.client = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseUrl,
    });
    this.retryOptions = {
      initialDelayMs: config.retry?.initialDelayMs ?? 1000,
      maxRetries: config.retry?.maxRetries ?? 3,
      onRetry: config.retry?.onRetry,
    };
  }

  async generateText(request: LlmRequest): Promise<string> {
    return withRetry(async () => {
      const payload: OpenAI.Responses.ResponseCreateParamsNonStreaming = {
        input: request.prompt,
        model: request.model,
      };

      if (request.system !== undefined) {
        payload.instructions = request.system;
      }
      if (request.temperature !== undefined) {
        payload.temperature = request.temperature;
      }
      if (request.maxTokens !== undefined) {
        payload.max_output_tokens = request.maxTokens;
      }

      const response = await this.client.responses.create(payload);

      if (!response.output_text) {
        throw new Error("OpenAI response missing output_text");
      }

      return response.output_text.trim();
    }, this.retryOptions);
  }
}

export interface AnthropicClientConfig {
  readonly apiKey: string;
  readonly baseUrl?: string;
  readonly retry?: LlmClientRetryConfig;
}

export class AnthropicClient implements LlmClient {
  readonly provider = "anthropic" as const;
  private readonly client: Anthropic;
  private readonly retryOptions: RetryOptions;

  constructor(config: AnthropicClientConfig) {
    this.client = new Anthropic({
      apiKey: config.apiKey,
      baseURL: config.baseUrl,
    });
    this.retryOptions = {
      initialDelayMs: config.retry?.initialDelayMs ?? 1000,
      maxRetries: config.retry?.maxRetries ?? 3,
      onRetry: config.retry?.onRetry,
    };
  }

  async generateText(request: LlmRequest): Promise<string> {
    return withRetry(async () => {
      const payload: Anthropic.MessageCreateParamsNonStreaming = {
        max_tokens: request.maxTokens ?? 512,
        messages: [{ content: request.prompt, role: "user" }],
        model: request.model,
      };

      if (request.temperature !== undefined) {
        payload.temperature = request.temperature;
      }
      if (request.system !== undefined) {
        payload.system = request.system;
      }

      const response = await this.client.messages.create(payload);

      const content = response.content
        .map((item) => ("text" in item ? item.text : ""))
        .join("")
        .trim();

      if (!content) {
        throw new Error("Anthropic response missing text content");
      }

      return content;
    }, this.retryOptions);
  }
}

export type LlmClientConfig =
  | { provider: "openai"; config: OpenAiClientConfig }
  | { provider: "anthropic"; config: AnthropicClientConfig };

export const createLlmClient = (config: LlmClientConfig): LlmClient => {
  if (config.provider === "openai") {
    return new OpenAiClient(config.config);
  }

  return new AnthropicClient(config.config);
};

export type { RetryOptions } from "../utils/retry";
