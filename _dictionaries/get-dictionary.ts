import "server-only";
import type { Dictionaries, Dictionary, Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and TypeScript support
// We also get the default import for cleaner types
const dictionaries: Dictionaries = {
  en: () => import("./en"),
  es: () => import("./es"),
  "pt-BR": () => import("./pt-BR"),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const localeKey: Locale = (Object.keys(dictionaries) as Locale[]).includes(
    locale as Locale
  )
    ? (locale as Locale)
    : "en";
  const { default: dictionary } = await dictionaries[localeKey]();

  return dictionary;
}
