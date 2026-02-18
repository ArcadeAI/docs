import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);

export type DesignSystemModule = Record<string, unknown>;

export async function loadDesignSystemModule(): Promise<DesignSystemModule | null> {
  try {
    const designSystemEntry = require.resolve("@arcadeai/design-system");
    return (await import(
      pathToFileURL(designSystemEntry).href
    )) as DesignSystemModule;
  } catch {
    return null;
  }
}
