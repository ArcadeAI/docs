// ========== ERROR CLASSES ==========
class CustomError extends Error {
  constructor(name: string, message: string) {
    super(message);
    this.name = name;
  }
}

export class ValidationError extends CustomError {
  constructor(message: string) {
    super("ValidationError", message);
  }
}

export class TranslationError extends CustomError {
  readonly file: string;
  readonly locale: string;
  readonly cause?: Error;

  constructor(message: string, file: string, locale: string, cause?: Error) {
    super("TranslationError", message);
    this.file = file;
    this.locale = locale;
    this.cause = cause;
  }
}

export class SecurityError extends CustomError {
  constructor(message: string) {
    super("SecurityError", message);
  }
}

// ========== VALIDATION SCHEMAS ==========
import { z } from "zod";

export const EnvSchema = z.object({
  // biome-ignore lint/style/useNamingConvention: environment variable name
  OPENAI_API_KEY: z.string().min(1, "OPENAI_API_KEY is required"),
  // biome-ignore lint/style/useNamingConvention: environment variable name
  OPENAI_MODEL: z.string().optional().default("gpt-4o-mini"),
  // biome-ignore lint/style/useNamingConvention: environment variable name
  I18N_CONCURRENCY: z.string().optional(),
  // biome-ignore lint/style/useNamingConvention: environment variable name
  I18N_LOCALES: z.string().optional(),
});

// ========== CONSTANTS ==========
export const DEFAULT_CONCURRENCY = 5;
export const MAX_RECOMMENDED_CONCURRENCY = 20;
export const MAX_BATCH_SIZE = 10;
export const targetLocales = ["es", "pt-BR"] as const;

// ========== TYPE DEFINITIONS ==========
export type Locale = "es" | "pt-BR";

export type FileType = "mdx" | "meta" | "tsx" | "layout";

export type PerFileEntry = {
  rel: string;
  src: string;
  hash: string;
  srcPath: string;
  tgtPath: string;
  fileType: FileType;
  targetExists: boolean;
  cachedHash?: string;
  size: number;
};

export type CacheShape = {
  _metadata: {
    version: string;
    created: string;
    updated: string;
  };
  data: Record<string, Record<string, string>>;
};

export type SelectOptions = {
  forceAll: boolean;
  forceFile: string | null;
};

export type BatchTranslationItem = {
  fileIndex: number;
  fileName: string;
  content: string;
  fileType: FileType;
};

export type BatchTranslationResult = {
  translations: Array<{
    fileIndex: number;
    content: string;
  }>;
};

export type ProcessingResult = {
  success: boolean;
  error?: string;
  file: string;
  hash?: string;
};

export type ProgressStats = {
  total: number;
  completed: number;
  successes: number;
  failures: number;
  elapsed: number;
  remaining: number;
};

export type TranslationProvider = {
  translate(params: {
    content: string;
    locale: string;
    filePath: string;
    fileType: FileType;
  }): Promise<string>;

  translateBatch(params: {
    items: Array<{
      fileIndex: number;
      fileName: string;
      content: string;
      fileType: FileType;
    }>;
    locale: string;
    fileType: FileType;
  }): Promise<{ translations: Array<{ fileIndex: number; content: string }> }>;

  translateStreaming(params: {
    content: string;
    locale: string;
    filePath: string;
    fileType: FileType;
    onProgress?: (chunk: string) => void;
  }): Promise<string>;
};

export type FileTypeHandler = {
  fileType: FileType;
  extensions: Set<string>;
  systemPrompt: (locale: string) => string;
  preprocessContent: (content: string) => string;
  postprocessContent: (content: string) => string;
  validateOutput: (content: string) => boolean;
};

export type TranslationProcessor = {
  setDryRun(dryRun: boolean): void;
  initialize(): Promise<void>;
  processLocale(
    locale: string,
    sourceFiles: string[],
    options: { forceAll: boolean; forceFile: string | null }
  ): Promise<{
    okCount: number;
    failCount: number;
    results: ProcessingResult[];
  }>;
};
