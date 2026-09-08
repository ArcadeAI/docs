export type ApiSource =
  | "public-catalog"
  | "list-tools"
  | "tool-metadata"
  | "mock";

type ApiSourceOptions = {
  apiSource?: string;
  toolMetadataUrl?: string;
  toolMetadataKey?: string;
};

const EXPLICIT_API_SOURCES: Record<string, ApiSource> = {
  "public-catalog": "public-catalog",
  public: "public-catalog",
  "list-tools": "list-tools",
  engine: "tool-metadata",
  "tool-metadata": "tool-metadata",
  mock: "mock",
};

const resolveExplicitApiSource = (apiSource: string): ApiSource => {
  const resolved = EXPLICIT_API_SOURCES[apiSource.toLowerCase()];
  if (resolved) {
    return resolved;
  }

  throw new Error(
    `Invalid --api-source "${apiSource}". Use "public-catalog", "list-tools", "tool-metadata", or "mock".`
  );
};

const resolveAutoDetectedApiSource = (options: ApiSourceOptions): ApiSource => {
  const hasToolMetadataKey = !!(
    options.toolMetadataKey ?? process.env.ENGINE_API_KEY
  );
  const hasToolMetadataUrl = !!(
    options.toolMetadataUrl ?? process.env.ENGINE_API_URL
  );

  if (hasToolMetadataKey && hasToolMetadataUrl) {
    return "tool-metadata";
  }

  if (hasToolMetadataUrl) {
    return "public-catalog";
  }

  return "mock";
};

export const resolveApiSource = (options: ApiSourceOptions): ApiSource => {
  if (options.apiSource) {
    return resolveExplicitApiSource(options.apiSource);
  }

  return resolveAutoDetectedApiSource(options);
};

export const isDeprecatedApiSource = (apiSource: ApiSource): boolean =>
  apiSource === "tool-metadata" || apiSource === "list-tools";
