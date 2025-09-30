import OpenAi from "openai";
import { buildUserPrompt, getFileTypeHandler } from "../handlers";
import { RATE_LIMIT } from "../lib/constants";
import {
  type FileType,
  TranslationError,
  type TranslationProvider,
} from "../types";
import { getLanguageName, sleep } from "../utils";

/**
 * OpenAI translation provider implementation
 */
// biome-ignore lint/style/useNamingConvention: OpenAI is a proper noun acronym
export class OpenAITranslationProvider implements TranslationProvider {
  private readonly client: OpenAi;
  private readonly model: string;
  private currentConcurrency: number;

  constructor(apiKey: string, model = "gpt-4o-mini") {
    this.client = new OpenAi({ apiKey });
    this.model = model;
    const DefaultConcurrency = 5;
    this.currentConcurrency = DefaultConcurrency; // Default, may be adjusted
  }

  setConcurrency(concurrency: number): void {
    this.currentConcurrency = concurrency;
  }

  translate(params: {
    content: string;
    locale: string;
    filePath: string;
    fileType: FileType;
  }): Promise<string> {
    return this.withRateLimit(() => this.performTranslation(params));
  }

  translateBatch(params: {
    items: Array<{
      fileIndex: number;
      fileName: string;
      content: string;
      fileType: FileType;
    }>;
    locale: string;
    fileType: FileType;
  }): Promise<{ translations: Array<{ fileIndex: number; content: string }> }> {
    return this.withRateLimit(() => this.performBatchTranslation(params));
  }

  translateStreaming(params: {
    content: string;
    locale: string;
    filePath: string;
    fileType: FileType;
    onProgress?: (chunk: string) => void;
  }): Promise<string> {
    return this.withRateLimit(() => this.performStreamingTranslation(params));
  }

  private async withRateLimit<T>(apiCall: () => Promise<T>): Promise<T> {
    let delay = RATE_LIMIT.initialDelayMs;

    for (let attempt = 0; attempt <= RATE_LIMIT.retryCount; attempt++) {
      try {
        if (attempt > 0) {
          await sleep(delay);
          delay = Math.min(
            delay * RATE_LIMIT.delayMultiplier,
            RATE_LIMIT.maxDelayMs
          );

          if (this.currentConcurrency > 1) {
            this.currentConcurrency = Math.max(
              1,
              Math.floor(this.currentConcurrency / 2)
            );
          }
        }

        return await apiCall();
      } catch (error) {
        const isRateLimit =
          error instanceof Error &&
          (error.message.includes("rate limit") ||
            error.message.includes("429"));

        if (isRateLimit && attempt < RATE_LIMIT.retryCount) {
          continue;
        }

        throw error;
      }
    }

    throw new Error(
      `Rate limit exceeded after ${RATE_LIMIT.retryCount} retries`
    );
  }

  private async performTranslation(params: {
    content: string;
    locale: string;
    filePath: string;
    fileType: FileType;
  }): Promise<string> {
    const handler = getFileTypeHandler(params.filePath);
    const systemPrompt = handler.systemPrompt(params.locale);

    let userPrompt: string;
    switch (params.fileType) {
      case "meta":
        userPrompt = `Translate the values only and return the object body.\n\n${params.content}`;
        break;
      case "tsx":
        userPrompt = `Translate user-visible strings only. Keep all code structure intact.\n\nFile: ${params.filePath}\nTarget locale: ${params.locale}\n\n${params.content}`;
        break;
      case "layout":
        userPrompt = `Update the lang attribute for ${params.locale} locale.\n\n${params.content}`;
        break;
      case "mdx":
        userPrompt = buildUserPrompt({
          content: params.content,
          filePath: params.filePath,
          locale: params.locale,
        });
        break;
      default:
        throw new TranslationError(
          `Unsupported file type: ${params.fileType}`,
          params.filePath,
          params.locale
        );
    }

    const response = await this.client.chat.completions.create({
      model: this.model,
      temperature: 0.2,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    if (!response.choices?.[0]?.message?.content) {
      throw new TranslationError(
        "Invalid API response: empty content",
        params.filePath,
        params.locale
      );
    }

    const text = response.choices[0].message.content.trim();
    if (!text) {
      throw new TranslationError(
        "Empty translation response",
        params.filePath,
        params.locale
      );
    }

    return text;
  }

  private async performBatchTranslation(params: {
    items: Array<{
      fileIndex: number;
      fileName: string;
      content: string;
      fileType: FileType;
    }>;
    locale: string;
    fileType: FileType;
  }): Promise<{ translations: Array<{ fileIndex: number; content: string }> }> {
    const handler = getFileTypeHandler(params.items[0]?.fileName || "unknown");
    const systemPrompt = handler.systemPrompt(params.locale);

    const batchContent = params.items
      .map((item, index) => `File ${index}: ${item.fileName}\n${item.content}`)
      .join("\n\n---\n\n");

    const userPrompt = `Translate the following ${params.items.length} files to ${getLanguageName(params.locale)}.\n\nFiles to translate:\n\n${batchContent}`;

    const response = await this.client.chat.completions.create({
      model: this.model,
      temperature: 0.2,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      // biome-ignore lint/style/useNamingConvention: OpenAI API uses snake_case
      response_format: {
        type: "json_schema",
        // biome-ignore lint/style/useNamingConvention: OpenAI API uses snake_case
        json_schema: {
          name: "batch_translations",
          strict: true,
          schema: {
            type: "object",
            properties: {
              translations: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    fileIndex: {
                      type: "number",
                      description:
                        "The zero-based index of the file being translated",
                    },
                    content: {
                      type: "string",
                      description: "The translated content",
                    },
                  },
                  required: ["fileIndex", "content"],
                  additionalProperties: false,
                },
              },
            },
            required: ["translations"],
            additionalProperties: false,
          },
        },
      },
    });

    const text = response.choices?.[0]?.message?.content ?? "";
    if (!text) {
      throw new TranslationError(
        "Empty batch translation response",
        "batch",
        params.locale
      );
    }

    try {
      const parsed = JSON.parse(text) as {
        translations: Array<{ fileIndex: number; content: string }>;
      };
      return parsed;
    } catch (error) {
      throw new TranslationError(
        `Failed to parse structured output: ${error instanceof Error ? error.message : String(error)}`,
        "batch",
        params.locale
      );
    }
  }

  private async performStreamingTranslation(params: {
    content: string;
    locale: string;
    filePath: string;
    fileType: FileType;
    onProgress?: (chunk: string) => void;
  }): Promise<string> {
    const handler = getFileTypeHandler(params.filePath);
    const systemPrompt = handler.systemPrompt(params.locale);

    let userPrompt: string;
    switch (params.fileType) {
      case "meta":
        userPrompt = `Translate the values only and return the object body.\n\n${params.content}`;
        break;
      case "tsx":
        userPrompt = `Translate user-visible strings only. Keep all code structure intact.\n\nFile: ${params.filePath}\nTarget locale: ${params.locale}\n\n${params.content}`;
        break;
      case "layout":
        userPrompt = `Update the lang attribute for ${params.locale} locale.\n\n${params.content}`;
        break;
      case "mdx":
        userPrompt = buildUserPrompt({
          content: params.content,
          filePath: params.filePath,
          locale: params.locale,
        });
        break;
      default:
        throw new TranslationError(
          `Unsupported file type: ${params.fileType}`,
          params.filePath,
          params.locale
        );
    }

    const stream = await this.client.chat.completions.create({
      model: this.model,
      temperature: 0.2,
      stream: true,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    let fullResponse = "";

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        fullResponse += content;
        params.onProgress?.(content);
      }
    }

    if (!fullResponse.trim()) {
      throw new TranslationError(
        "Empty streaming translation response",
        params.filePath,
        params.locale
      );
    }

    return fullResponse.trim();
  }
}
