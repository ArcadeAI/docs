# Slice 3: Preserve prose in Markdown output

## Contract

Make the agent-facing and copy-page Markdown representation include the curated chunks already present in generated toolkit JSON.

## API seam

`toToolkitMarkdown()` remains a projection of `ToolkitData`. It does not read source MDX.

## Verification

- Toolkit and tool chunks appear in deterministic order.
- `before`, `after`, and `replace` placement matches the generated sections that the serializer supports.
- Existing parameter, auth, secret, output, and example coverage stays green.

## Delegated decisions

Allowed MDX tags may remain verbatim in textual Markdown output.
