import "server-only";
import type { Dictionary } from "./i18n-config";

export async function getDictionary(_locale?: string): Promise<Dictionary> {
  const { default: dictionary } = await import("./en");
  return dictionary;
}
