# Changelog Generator

Generates a weekly changelog entry from merged PRs across ArcadeAI repos.

## Requirements

- [Bun](https://bun.sh)
- `GITHUB_TOKEN` — GitHub personal access token with repo access
- `OPENAI_API_KEY` — OpenAI API key

## Usage

```bash
bun install
GITHUB_TOKEN=... OPENAI_API_KEY=... bun run generate
```

Or set the env vars in a `.env` file (Bun loads it automatically).

Optionally set `OPENAI_MODEL` to override the default (`gpt-4o-mini`).

To backfill a past Friday, pass `--date=YYYY-MM-DD` (must be a Friday):

```bash
bun run generate --date=2026-04-24
```

The script will only include PRs merged after the most recent changelog entry and on or before the target Friday.
