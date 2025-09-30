export type FileType = "mdx" | "meta" | "tsx" | "layout";

export type CacheMetadata = {
  version: string;
  created: string;
  updated: string;
};

export type CacheEntries = Record<string, string>;

export type Cache = {
  _metadata: CacheMetadata;
  data: Record<string, CacheEntries>;
};

export type OpenAiClient = {
  client: import("openai").default;
  model: string;
};

export type TranslateParams = {
  openai: OpenAiClient;
  locale: string;
  type: FileType;
  input: string;
};

export type TranslationOptions = {
  force: boolean;
  only: string | null;
  dryRun?: boolean;
};
