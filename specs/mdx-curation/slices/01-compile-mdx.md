# Slice 1: Compile MDX curation

## Contract

Replace the JSON reader with one cached compiler that projects the configured directory into existing `CustomSections` values.

## API seam

- `createMarkdownCurationSource(root)` owns traversal, frontmatter parsing, MDX syntax validation, normalization, and deterministic ordering.
- A configured source returns an empty `CustomSections` value for missing toolkits.
- `createEmptyCustomSectionsSource()` remains the signal that no curation source was configured.

## Verification

- Compile toolkit chunks, tool chunks, and nested pages.
- Reject invalid frontmatter, MDX, paths, duplicate normalized toolkits, and JSON files.
- Reject a missing configured root.
- Return empty curation for a missing toolkit.

## Delegated decisions

Internal helper names and diagnostic wording may change. The directory layout and authority semantics may not.
