import type { Dictionaries, Dictionary, Locale } from "./i18n-config";

// Client-safe dictionary loader (without server-only restriction)
const dictionaries: Dictionaries = {
  en: () => import("./en"),
  es: () => import("./es"),
  "pt-BR": () => import("./pt-BR"),
};

export async function getDictionaryClient(locale: string): Promise<Dictionary> {
  const localeKey: Locale = (Object.keys(dictionaries) as Locale[]).includes(
    locale as Locale
  )
    ? (locale as Locale)
    : "en";
  const { default: dictionary } = await dictionaries[localeKey]();

  return dictionary;
}
