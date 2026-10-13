import fs from "node:fs";
import path from "node:path";

export interface GlossaryTerm {
  aliases: string[];
  definition: string;
  isSubTerm: boolean;
  link: string;
  parentTerm?: string;
  section: string;
  term: string;
}

// Regex patterns for parsing markdown headers
const SECTION_HEADER_REGEX = /^## /;
const MAIN_TERM_HEADER_REGEX = /^### /;
const SUB_TERM_HEADER_REGEX = /^#### /;
const ACRONYM_REGEX = /^([A-Z]+)\s*\(([^)]+)\)/;
const QUOTED_TERM_REGEX = /^['"](.+)['"]$/;
const SURROUNDING_QUOTES_REGEX = /^['"]|['"]$/g;
const NON_ANCHOR_CHARS_REGEX = /[^a-z0-9\s-]/g;
const WHITESPACE_REGEX = /\s+/g;

interface ParserState {
  definition: string[];
  inCodeBlock: boolean;
  isSubTerm: boolean;
  parentTerm: string | null;
  section: string;
  term: string | null;
}

type TermDraft = Pick<
  ParserState,
  "section" | "parentTerm" | "definition" | "isSubTerm"
> & { term: string };

/**
 * Parse the glossary MDX file and extract all terms with their definitions
 */
export function parseGlossary(glossaryPath: string): GlossaryTerm[] {
  const absolutePath = path.isAbsolute(glossaryPath)
    ? glossaryPath
    : path.join(process.cwd(), glossaryPath);

  const content = fs.readFileSync(absolutePath, "utf-8");
  const terms: GlossaryTerm[] = [];
  const state: ParserState = {
    definition: [],
    inCodeBlock: false,
    isSubTerm: false,
    parentTerm: null,
    section: "",
    term: null,
  };

  for (const line of content.split("\n")) {
    // Track code blocks to skip them
    if (line.trim().startsWith("```")) {
      state.inCodeBlock = !state.inCodeBlock;
      continue;
    }
    if (state.inCodeBlock) {
      continue;
    }
    processLine(line, state, terms);
  }

  // Save the last term
  flushTerm(state, terms);

  return terms;
}

function processLine(line: string, state: ParserState, terms: GlossaryTerm[]) {
  // Section headers (## Section)
  if (line.startsWith("## ") && !line.startsWith("### ")) {
    flushTerm(state, terms);
    state.section = line.replace(SECTION_HEADER_REGEX, "").trim();
    state.term = null;
    state.definition = [];
    state.isSubTerm = false;
    state.parentTerm = null;
    return;
  }

  // Main term headers (### Term)
  if (line.startsWith("### ")) {
    flushTerm(state, terms);
    state.term = line.replace(MAIN_TERM_HEADER_REGEX, "").trim();
    state.definition = [];
    state.isSubTerm = false;
    state.parentTerm = null;
    return;
  }

  // Sub-term headers (#### Sub-term)
  if (line.startsWith("#### ")) {
    flushTerm(state, terms);
    const parentTerm = state.term;
    state.term = line.replace(SUB_TERM_HEADER_REGEX, "").trim();
    state.definition = [];
    state.isSubTerm = true;
    state.parentTerm = parentTerm;
    return;
  }

  if (state.term && isDefinitionLine(line)) {
    state.definition.push(line.trim());
  }
}

function isDefinitionLine(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed || line.startsWith("#")) {
    return false;
  }
  return !(
    trimmed.startsWith("```") ||
    trimmed.startsWith("graph ") ||
    trimmed.startsWith("_Learn more")
  );
}

function flushTerm(state: ParserState, terms: GlossaryTerm[]) {
  if (!state.term) {
    return;
  }
  terms.push(
    createGlossaryTerm({
      definition: state.definition,
      isSubTerm: state.isSubTerm,
      parentTerm: state.parentTerm,
      section: state.section,
      term: state.term,
    })
  );
}

/**
 * Create a glossary term object with all metadata
 */
function createGlossaryTerm(draft: TermDraft): GlossaryTerm {
  // Clean up the term (remove quotes, parentheses content for main term)
  const cleanTerm = draft.term.replace(SURROUNDING_QUOTES_REGEX, "");

  // Extract aliases
  const aliases = generateAliases(cleanTerm);

  // Create definition from collected lines
  const definition = draft.definition.join(" ").trim();

  // Generate anchor link
  const anchor = cleanTerm
    .toLowerCase()
    .replace(NON_ANCHOR_CHARS_REGEX, "")
    .replace(WHITESPACE_REGEX, "-");

  const link = `/resources/glossary#${anchor}`;

  return {
    aliases,
    definition,
    isSubTerm: draft.isSubTerm,
    link,
    parentTerm: draft.parentTerm || undefined,
    section: draft.section,
    term: cleanTerm,
  };
}

/**
 * Generate aliases for a term (singular/plural, case variations, etc.)
 */
function generateAliases(term: string): string[] {
  const aliases = new Set<string>();

  // Add the original term
  aliases.add(term);

  // Add lowercase version
  aliases.add(term.toLowerCase());

  // Handle acronyms with full form (e.g., "MCP (Model Context Protocol)")
  const acronymMatch = term.match(ACRONYM_REGEX);
  if (acronymMatch) {
    aliases.add(acronymMatch[1]); // Acronym only
    aliases.add(acronymMatch[2]); // Full form
    aliases.add(acronymMatch[1].toLowerCase());
    aliases.add(acronymMatch[2].toLowerCase());
  }

  // Handle quoted terms (e.g., 'agent' or "tool")
  const quotedMatch = term.match(QUOTED_TERM_REGEX);
  if (quotedMatch) {
    const [, unquoted] = quotedMatch;
    aliases.add(unquoted);
    aliases.add(unquoted.toLowerCase());
  }

  // Add plural/singular variations
  if (term.endsWith("s") && !term.endsWith("ss")) {
    // If term ends in 's', try removing it for singular
    aliases.add(term.slice(0, -1));
    aliases.add(term.slice(0, -1).toLowerCase());
  } else {
    // Add plural forms
    aliases.add(`${term}s`);
    aliases.add(`${term}s`.toLowerCase());
  }

  // Handle compound terms with spaces
  if (term.includes(" ")) {
    // Add version with different capitalization
    aliases.add(term.toLowerCase());
    aliases.add(term.toUpperCase());

    // Title case
    const titleCase = term
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    aliases.add(titleCase);
  }

  return Array.from(aliases);
}

/**
 * Sort terms by length (longest first) to match longer terms before shorter ones
 * This prevents "Tool" from matching before "Tool Context"
 */
export function sortTermsByLength(terms: GlossaryTerm[]): GlossaryTerm[] {
  return [...terms].sort((a, b) => {
    const maxLengthA = Math.max(...a.aliases.map((alias) => alias.length));
    const maxLengthB = Math.max(...b.aliases.map((alias) => alias.length));
    return maxLengthB - maxLengthA;
  });
}
