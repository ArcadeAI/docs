# Slice 2: Apply authority and migrate content

## Contract

Make file deletion observable and prevent recovery behavior from resurrecting prose. Convert the checked-in JSON corpus to MDX atomically.

## API seam

- Curation diff compares the union of current sources and previous artifacts.
- Last-known-good recovery overlays current `CustomSections`, including empty arrays, on preserved artifacts.
- The extraction script emits the checked-in MDX directory layout.

## Verification

- Deleting the final file marks its toolkit changed.
- Missing toolkit curation clears previous toolkit and tool chunks.
- Recovery preserves upstream data but retains the current empty curation projection.
- Force regeneration includes authored MDX without previous output.
- The full checked-in curation tree compiles.

## Delegated decisions

Mechanical filenames may vary if they remain stable and descriptive.
