Per-workstream deviations from the 1:1 Nextra → Fumadocs page mapping.
One JSON file per owner (navigation.json, onboarding.json, freshness.json, ...),
merged by `verify-content.ts`. Keys: `moved`, `deleted`, `enhanced`,
`extraPages`, `metaFree` (see the comment in verify-content.ts).
