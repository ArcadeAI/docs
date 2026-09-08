export type ApiSource = "public-catalog" | "mock";

type ApiSourceOptions = {
  apiSource?: string;
  apiUrl?: string;
};

const EXPLICIT_API_SOURCES: Record<string, ApiSource> = {
  "public-catalog": "public-catalog",
  public: "public-catalog",
  mock: "mock",
};

const resolveExplicitApiSource = (apiSource: string): ApiSource => {
  const resolved = EXPLICIT_API_SOURCES[apiSource.toLowerCase()];
  if (resolved) {
    return resolved;
  }

  throw new Error(
    `Invalid --api-source "${apiSource}". Use "public-catalog" or "mock".`
  );
};

const resolveAutoDetectedApiSource = (options: ApiSourceOptions): ApiSource => {
  const hasApiUrl = !!(options.apiUrl ?? resolveApiBaseUrlFromEnv());

  if (hasApiUrl) {
    return "public-catalog";
  }

  return "mock";
};

export const resolveApiBaseUrlFromEnv = (): string | undefined =>
  process.env.ARCADE_API_URL ?? process.env.ENGINE_API_URL;

export const resolveApiSource = (options: ApiSourceOptions): ApiSource => {
  if (options.apiSource) {
    return resolveExplicitApiSource(options.apiSource);
  }

  return resolveAutoDetectedApiSource(options);
};
