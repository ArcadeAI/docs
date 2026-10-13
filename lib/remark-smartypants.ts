import type { Root } from "mdast";
import { visit } from "unist-util-visit";

/**
 * Typographic punctuation, as Nextra applied it through `remark-smartypants`
 * (retext-smartypants): straight quotes become curly, `--` an em dash and
 * `...` an ellipsis, in prose only (never in code). Ported here because the
 * production pages are rendered with it and the package is not a dependency.
 *
 * Like the original, quotes are resolved over the text of the whole page
 * joined together, so a quote that opens before a link or bold run and closes
 * after it is paired correctly; inline code counts as a word.
 */

type TokenType = "word" | "space" | "punctuation";

interface Token {
  type: TokenType;
  value: string;
}

interface Literal {
  type: string;
  value: string;
}

const WORD_CHAR = /[\p{L}\p{N}\p{M}]/u;
const SPACE_CHAR = /\s/u;
const DECADE = /^\d\ds$/;
const DASHES = /(?<!-)--(?!-)/g;
const ELLIPSIS = /(?<!\.)\.\.\.(?!\.)/g;
const SENTENCE_END = new Set([".", "?", "!"]);
const IGNORED_JSX_PARENTS = new Set(["style", "script"]);
const OPENING = { "'": "‘", '"': "“" } as const;
const CLOSING = { "'": "’", '"': "”" } as const;

function charType(char: string): TokenType {
  if (WORD_CHAR.test(char)) {
    return "word";
  }
  return SPACE_CHAR.test(char) ? "space" : "punctuation";
}

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  for (const char of text) {
    const type = charType(char);
    const last = tokens.at(-1);
    if (last && last.type === type && type !== "punctuation") {
      last.value += char;
    } else {
      tokens.push({ type, value: char });
    }
  }
  return tokens;
}

function isQuote(value: string | undefined): value is '"' | "'" {
  return value === '"' || value === "'";
}

/** The retext-smartypants quote rules, in their original order. */
function educateQuote(tokens: Token[], index: number): void {
  const node = tokens[index];
  const value = node?.value;
  if (!(node && isQuote(value))) {
    return;
  }
  const previous = tokens[index - 1];
  const next = tokens[index + 1];
  const nextNext = tokens[index + 2];

  if (
    next &&
    nextNext &&
    next.type === "punctuation" &&
    nextNext.type !== "word"
  ) {
    node.value = CLOSING[value];
  } else if (
    next &&
    nextNext &&
    isQuote(next.value) &&
    nextNext.type === "word"
  ) {
    node.value = OPENING[value];
    next.value = OPENING[next.value];
  } else if (next && DECADE.test(next.value)) {
    node.value = CLOSING[value];
  } else if (previous && SENTENCE_END.has(previous.value)) {
    // A quote right after sentence-ending punctuation closes it. retext sees
    // this through sentence boundaries; the joined text has none where a
    // table cell or heading follows the paragraph.
    node.value = CLOSING[value];
  } else if (previous && previous.type !== "word" && next?.type === "word") {
    node.value = OPENING[value];
  } else if (previous && previous.type === "word") {
    node.value = CLOSING[value];
  } else if (
    !next ||
    next.type === "space" ||
    (value === "'" && next.value === "s")
  ) {
    node.value = CLOSING[value];
  } else {
    node.value = OPENING[value];
  }
}

export function educateQuotes(text: string): string {
  const tokens = tokenize(text);
  for (let index = 0; index < tokens.length; index += 1) {
    educateQuote(tokens, index);
  }
  return tokens.map((token) => token.value).join("");
}

function isVisited(node: { type: string }, parent: unknown): boolean {
  if (!parent) {
    return false;
  }
  const { type, name } = parent as { type?: string; name?: unknown };
  if (
    type === "mdxJsxTextElement" &&
    !(typeof name === "string" && !IGNORED_JSX_PARENTS.has(name))
  ) {
    return false;
  }
  return (
    node.type === "text" ||
    node.type === "inlineCode" ||
    node.type === "paragraph"
  );
}

export function remarkSmartypants(): (tree: Root) => void {
  return (tree: Root) => {
    let allText = "";
    const nodes: { type: string; value?: string }[] = [];

    visit(tree, (node, _index, parent) => {
      if (!isVisited(node, parent)) {
        return;
      }
      if (node.type === "paragraph") {
        // A separator, so a quote that starts a paragraph reads as opening.
        allText += " ";
      } else {
        const { value } = node as Literal;
        allText += node.type === "text" ? value : "A".repeat(value.length);
      }
      nodes.push(node as { type: string; value?: string });
    });

    const educated = educateQuotes(allText);
    let start = 0;
    for (const node of nodes) {
      if (node.type === "paragraph" || node.value === undefined) {
        start += 1;
        continue;
      }
      const end = start + node.value.length;
      if (node.type === "text") {
        node.value = educated
          .slice(start, end)
          .replace(DASHES, "—")
          .replace(ELLIPSIS, "…");
      }
      start = end;
    }
  };
}
