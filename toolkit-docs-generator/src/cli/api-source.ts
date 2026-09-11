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

/**
 * Pick a source from the environment when --api-source is omitted.
 *
 * An explicitly configured URL means the caller wants live data. With nothing
 * set, stay on fixtures rather than reaching out to the network behind the
 * caller's back, even though the public catalog needs no credentials and
 * carries its own default URL.
 */
const resolveAutoDetectedApiSource = (options: ApiSourceOptions): ApiSource => {
  const hasApiUrl = !!(options.apiUrl ?? resolveApiBaseUrlFromEnv());

  if (hasApiUrl) {
    return "public-catalog";
  }

  return "mock";
};

/**
 * The catalog now lives on the experience API, whose paths hang off `/api`
 * rather than the engine's `/v1`. An engine host would build a URL that 404s,
 * so ARCADE_API_URL and ENGINE_API_URL are deliberately not consulted here.
 */
export const resolveApiBaseUrlFromEnv = (): string | undefined =>
  process.env.PUBLIC_CATALOG_URL;

export const resolveApiSource = (options: ApiSourceOptions): ApiSource => {
  if (options.apiSource) {
    return resolveExplicitApiSource(options.apiSource);
  }

  return resolveAutoDetectedApiSource(options);
};
