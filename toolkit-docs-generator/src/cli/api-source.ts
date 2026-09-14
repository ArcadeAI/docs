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
  const hasApiUrl = resolveApiBaseUrl(options.apiUrl) !== undefined;

  if (hasApiUrl) {
    return "public-catalog";
  }

  return "mock";
};

/**
 * Treat a blank value as absent.
 *
 * An unset GitHub Actions secret still reaches the job as `""`, and `??` would
 * accept that as a real base URL and build a relative `/public/tool_catalog`
 * that fetch cannot parse. The nightly wires PUBLIC_CATALOG_URL from an
 * optional secret, so this is the normal case, not an edge case.
 */
const blankToUndefined = (value: string | undefined): string | undefined => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
};

/**
 * The catalog now lives on the experience API, whose paths hang off `/api`
 * rather than the engine's `/v1`. An engine host would build a URL that 404s,
 * so ARCADE_API_URL and ENGINE_API_URL are deliberately not consulted here.
 */
export const resolveApiBaseUrlFromEnv = (): string | undefined =>
  blankToUndefined(process.env.PUBLIC_CATALOG_URL);

/** The configured base URL, or undefined when neither flag nor env supplies one. */
export const resolveApiBaseUrl = (
  apiUrl: string | undefined
): string | undefined => blankToUndefined(apiUrl) ?? resolveApiBaseUrlFromEnv();

export const resolveApiSource = (options: ApiSourceOptions): ApiSource => {
  if (options.apiSource) {
    return resolveExplicitApiSource(options.apiSource);
  }

  return resolveAutoDetectedApiSource(options);
};
