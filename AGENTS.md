# Agent Instructions

When working on documentation in this repo, follow the writing standards in [STYLEGUIDE.md](./STYLEGUIDE.md).

## Quick Reference

- Run `pnpm vale:check` to check all docs for style issues
- Run `pnpm vale:fix <file>` to fix issues with AI assistance (optional, requires API key)
- Run `pnpm vale:sync` to update Vale style packages

## Automated Style Reviews

This repo has automated style review workflows that run on PRs:

### Style Review (on PR open/update)

When you open or update a PR with changes to `app/en/**/*.md` or `app/en/**/*.mdx`, the style review workflow:

1. Runs Vale on changed files
2. Sends issues to an LLM for suggested fixes
3. Posts GitHub review comments with clickable "Apply suggestion" blocks

Each suggestion shows the Vale rule name (e.g., `Arcade.WordList`) and the fix. Authors can apply suggestions with one click or ignore them.

### Editorial Review (after merge)

After a PR is merged, the editorial review workflow:

1. Analyzes changed docs against [STYLEGUIDE.md](./STYLEGUIDE.md)
2. If structural improvements are needed, creates a follow-up PR
3. Assigns the follow-up PR to the original author

The follow-up PR contains document-level improvements like adding prerequisites sections or reorganizing content. Authors can accept, modify, or close it.

**Note:** Editorial PRs (branches starting with `style/editorial-`) skip both workflows to prevent loops.

## Local Development

### Setup

The scripts support both Anthropic (Claude) and OpenAI (GPT-4). Set either key in `.env.local`:

```bash
# Option 1: Anthropic (preferred)
ANTHROPIC_API_KEY=sk-ant-...

# Option 2: OpenAI
OPENAI_API_KEY=sk-...
```

If both keys are present, Anthropic is used by default.

### Commands

```bash
pnpm vale:check           # Check all docs for style issues
pnpm vale:fix <file>      # Interactive AI-powered fixes
pnpm vale:review --pr N   # Run style review locally on PR #N
pnpm vale:editorial --pr N # Run editorial review locally on merged PR #N
```

### Without an API Key

If you don't have an API key, `vale:fix` will still:
- Run Vale and show you all style issues
- Tell you which files have problems
- Flag any toxic language issues that must be fixed

You can then fix issues manually using the detailed output from `vale <file>`.
