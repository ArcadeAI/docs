import fs from "node:fs";
import path from "node:path";

export type GlossaryTerm = {
  term: string;
  aliases: string[];
  definition: string;
  section: string;
  link: string;
  isSubTerm: boolean;
  parentTerm?: string;
};

// Regex patterns for parsing markdown headers
const SECTION_HEADER_REGEX = /^## /;
const MAIN_TERM_HEADER_REGEX = /^### /;
const SUB_TERM_HEADER_REGEX = /^#### /;
const ACRONYM_REGEX = /^([A-Z]+)\s*\(([^)]+)\)/;
const QUOTED_TERM_REGEX = /^['"](.+)['"]$/;

/**
 * Parse the glossary MDX file and extract all terms with their definitions
 */
// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: parsing markdown structure requires complex logic
export function parseGlossary(glossaryPath: string): GlossaryTerm[] {
  const absolutePath = path.isAbsolute(glossaryPath)
    ? glossaryPath
    : path.join(process.cwd(), glossaryPath);

  const content = fs.readFileSync(absolutePath, "utf-8");
  const terms: GlossaryTerm[] = [];

  // Split content by lines
  const lines = content.split("\n");

  let currentSection = "";
  let currentTerm: string | null = null;
  let currentParentTerm: string | null = null;
  let currentDefinition: string[] = [];
  let isSubTerm = false;
  let inCodeBlock = false;

  for (const line of lines) {
    // Track code blocks to skip them
    if (line.trim().startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) {
      continue;
    }

    // Check for section headers (## Section)
    if (line.startsWith("## ") && !line.startsWith("### ")) {
      // Save previous term if exists
      if (currentTerm) {
        terms.push(
          createGlossaryTerm(
            currentTerm,
            currentDefinition,
            currentSection,
            isSubTerm,
            currentParentTerm
          )
        );
      }

      currentSection = line.replace(SECTION_HEADER_REGEX, "").trim();
      currentTerm = null;
      currentDefinition = [];
      isSubTerm = false;
      currentParentTerm = null;
      continue;
    }

    // Check for main term headers (### Term)
    if (line.startsWith("### ")) {
      // Save previous term if exists
      if (currentTerm) {
        terms.push(
          createGlossaryTerm(
            currentTerm,
            currentDefinition,
            currentSection,
            isSubTerm,
            currentParentTerm
          )
        );
      }

      currentTerm = line.replace(MAIN_TERM_HEADER_REGEX, "").trim();
      currentDefinition = [];
      isSubTerm = false;
      currentParentTerm = null;
      continue;
    }

    // Check for sub-term headers (#### Sub-term)
    if (line.startsWith("#### ")) {
      // Save previous term if exists
      if (currentTerm) {
        terms.push(
          createGlossaryTerm(
            currentTerm,
            currentDefinition,
            currentSection,
            isSubTerm,
            currentParentTerm
          )
        );
      }

      const parentTerm = currentTerm;
      currentTerm = line.replace(SUB_TERM_HEADER_REGEX, "").trim();
      currentDefinition = [];
      isSubTerm = true;
      currentParentTerm = parentTerm;
      continue;
    }

    // Collect definition content
    if (
      currentTerm &&
      line.trim() &&
      !line.startsWith("#") &&
      !(
        line.trim().startsWith("```") ||
        line.trim().startsWith("graph ") ||
        line.trim().startsWith("_Learn more")
      )
    ) {
      currentDefinition.push(line.trim());
    }
  }

  // Save the last term
  if (currentTerm) {
    terms.push(
      createGlossaryTerm(
        currentTerm,
        currentDefinition,
        currentSection,
        isSubTerm,
        currentParentTerm
      )
    );
  }

  return terms;
}

/**
 * Create a glossary term object with all metadata
 */
// biome-ignore lint/nursery/useMaxParams: all parameters necessary for term metadata
function createGlossaryTerm(
  term: string,
  definitionLines: string[],
  section: string,
  isSubTerm: boolean,
  parentTerm: string | null
): GlossaryTerm {
  // Clean up the term (remove quotes, parentheses content for main term)
  const cleanTerm = term.replace(/^['"]|['"]$/g, "");

  // Extract aliases
  const aliases = generateAliases(cleanTerm);

  // Create definition from collected lines
  const definition = definitionLines.join(" ").trim();

  // Generate anchor link
  const anchor = cleanTerm
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

  const link = `/home/glossary#${anchor}`;

  return {
    term: cleanTerm,
    aliases,
    definition,
    section,
    link,
    isSubTerm,
    parentTerm: parentTerm || undefined,
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
    const unquoted = quotedMatch[1];
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
