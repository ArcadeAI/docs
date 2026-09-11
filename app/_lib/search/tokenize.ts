const MIN_TOKEN_LENGTH = 2;
const CAMEL_BOUNDARY_REGEX = /([a-z0-9])([A-Z])/g;
const ACRONYM_BOUNDARY_REGEX = /([A-Z]+)([A-Z][a-z])/g;
const NON_ALNUM_REGEX = /[^a-z0-9]+/g;

/**
 * Split text into lowercase search tokens.
 *
 * CamelCase, snake_case, and dotted names become separate tokens so queries
 * like "create issue" match `Github.CreateIssue`.
 */
export function tokenize(text: string): string[] {
  if (!text) {
    return [];
  }

  const withBoundaries = text
    .replace(ACRONYM_BOUNDARY_REGEX, "$1 $2")
    .replace(CAMEL_BOUNDARY_REGEX, "$1 $2");

  return withBoundaries
    .toLowerCase()
    .split(NON_ALNUM_REGEX)
    .filter((token) => token.length >= MIN_TOKEN_LENGTH);
}

export function uniqueTokens(text: string): string[] {
  return [...new Set(tokenize(text))];
}
