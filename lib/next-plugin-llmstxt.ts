import type { NextConfig } from "next";

type LlmsTxtPluginOptions = {
  enabled?: boolean;
  generateOnBuild?: boolean;
};

/**
 * Next.js plugin that generates llms.txt at build time
 *
 * This plugin integrates with the Next.js build process to automatically
 * generate an llms.txt file that follows the llms.txt specification.
 *
 * @param options - Plugin configuration options
 * @returns Next.js config wrapper function
 */
export function withLlmsTxt(options: LlmsTxtPluginOptions = {}) {
  const { enabled = true, generateOnBuild = true } = options;

  return (nextConfig: NextConfig = {}): NextConfig => {
    if (!enabled) {
      return nextConfig;
    }

    return {
      ...nextConfig,
      webpack: (config, context) => {
        // Only run during production build or when explicitly enabled
        if (generateOnBuild && !context.isServer) {
          // Add a custom plugin that runs after compilation
          config.plugins = config.plugins || [];
          config.plugins.push({
            apply: (compiler: {
              hooks: {
                afterEmit: {
                  tapPromise: (
                    name: string,
                    callback: () => Promise<void>
                  ) => void;
                };
              };
              options: { name: string };
            }) => {
              compiler.hooks.afterEmit.tapPromise("LlmsTxtPlugin", async () => {
                // Only generate once (not on every rebuild)
                if (compiler.options.name === "client") {
                  try {
                    // Dynamic import to avoid bundling issues
                    const { generateLlmsTxt } = await import(
                      "../scripts/generate-llmstxt.js"
                    );

                    await generateLlmsTxt();
                  } catch (_error) {
                    // Don't fail the build if llms.txt generation fails
                  }
                }
              });
            },
          });
        }

        // Call the original webpack function if it exists
        if (typeof nextConfig.webpack === "function") {
          return nextConfig.webpack(config, context);
        }

        return config;
      },
    };
  };
}
