export type ApiSource = "list-tools" | "tool-metadata" | "mock";

type ApiSourceOptions = {
  apiSource?: string;
  toolMetadataUrl?: string;
  toolMetadataKey?: string;
};

export const resolveApiSource = (options: ApiSourceOptions): ApiSource => {
  // Explicit source takes precedence
  if (options.apiSource) {
    const source = options.apiSource.toLowerCase();
    if (source === "list-tools") {
      return "list-tools";
    }
    if (source === "engine") {
      return "tool-metadata";
    }
    if (source === "tool-metadata") {
      return "tool-metadata";
    }
    if (source === "mock") {
      return "mock";
    }
    throw new Error(
      `Invalid --api-source "${options.apiSource}". Use "list-tools", "tool-metadata", or "mock".`
    );
  }

  // Auto-detect based on provided Engine credentials only.
  // List-tools endpoint must be explicitly selected via --api-source list-tools.
  const hasToolMetadataKey = !!(
    options.toolMetadataKey ?? process.env.ENGINE_API_KEY
  );
  const hasToolMetadataUrl = !!(
    options.toolMetadataUrl ?? process.env.ENGINE_API_URL
  );

  if (hasToolMetadataKey && hasToolMetadataUrl) {
    return "tool-metadata";
  }
  return "mock";
};
