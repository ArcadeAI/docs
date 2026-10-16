import { uniqueTokens } from "./tokenize";

const ESCAPE_REGEX = /[.*+?^${}()|[\]\\]/g;

export type HighlightPart = {
  text: string;
  match: boolean;
};

export function escapeRegExp(value: string): string {
  return value.replace(ESCAPE_REGEX, "\\$&");
}

/**
 * Split `text` into runs that do / do not match a query token so the search
 * UI can highlight hits without dangerouslySetInnerHTML.
 */
export function highlightQuery(text: string, query: string): HighlightPart[] {
  if (!text) {
    return [];
  }

  const tokens = uniqueTokens(query);
  if (tokens.length === 0) {
    return [{ text, match: false }];
  }

  const pattern = new RegExp(`(${tokens.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(pattern);
  const tokenSet = new Set(tokens);

  return parts
    .filter((part) => part.length > 0)
    .map((part) => ({
      text: part,
      match: tokenSet.has(part.toLowerCase()),
    }));
}
