# Agent Instructions

When working on documentation in this repo, follow the writing standards in [STYLEGUIDE.md](./STYLEGUIDE.md).

## Quick Reference

- Run `pnpm vale:check` to check all docs for style issues
- Run `pnpm vale:fix <file>` to fix issues with AI assistance (optional, requires API key)
- Run `pnpm vale:sync` to update Vale style packages

## AI-Powered Fixes (Optional)

The `vale:fix` command can use AI to automatically suggest fixes for style issues. This is **completely optional** — you can always fix issues manually.

### Setup

The script supports both Anthropic (Claude) and OpenAI (GPT-4o). Set either key in `.env.local`:

```bash
# Option 1: Anthropic (preferred)
ANTHROPIC_API_KEY=sk-ant-...

# Option 2: OpenAI (if you already have one for llms.txt)
OPENAI_API_KEY=sk-...
```

If both keys are present, Anthropic is used by default.

### Without an API Key

If you don't have an API key, `vale:fix` will still:
- Run Vale and show you all style issues
- Tell you which files have problems
- Flag any toxic language issues that must be fixed

You can then fix issues manually using the detailed output from `vale <file>`.

### Cost

- **Claude Sonnet**: ~$3 per million input tokens
- **GPT-4o**: ~$2.50 per million input tokens

A typical doc file fix costs less than $0.01. The script always asks for confirmation before making changes.
