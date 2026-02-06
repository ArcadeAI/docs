---
title: "Run evaluations"
description: "Learn how to run evaluations using Arcade"
---
[Create tools](/en/guides/create-tools/tool-basics.md)
[Evaluate tools](/en/guides/create-tools/evaluate-tools.md)
Run evaluations

# Run evaluations

The `arcade evals` command discovers and executes evaluation suites with support for multiple providers, models, and output formats.

**Backward compatibility**: All new features (multi-provider support, capture mode, output formats) work with existing evaluation suites. No code changes required.

## Basic usage

Run all evaluations in the current directory:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals .
```

The command searches for files starting with `eval_` and ending with `.py`.

Show detailed results with critic feedback:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --details
```

Filter to show only failures:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --only-failed
```

## Multi-provider support

### Single provider with default model

Use OpenAI with default model (`gpt-4o`):

```bash
# results.txtresults.mdresults.htmlresults.json
export OPENAI_API_KEY=sk-...
arcade evals .
```

Use Anthropic with default model (`claude-sonnet-4-5-20250929`):

```bash
# results.txtresults.mdresults.htmlresults.json
export ANTHROPIC_API_KEY=sk-ant-...
arcade evals . --use-provider anthropic
```

### Specific models

Specify one or more models for a provider:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --use-provider "openai:gpt-4o,gpt-4o-mini"
```

### Multiple providers

Compare performance across providers (space-separated):

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . \
  --use-provider "openai:gpt-4o anthropic:claude-sonnet-4-5-20250929" \
  --api-key openai:sk-... \
  --api-key anthropic:sk-ant-...
```

When you specify multiple models, results show side-by-side comparisons.

## API keys

 are resolved in the following order:

Priority

Format

1\. Explicit flag

`--api-key provider:key` (can repeat)

2\. Environment

`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`

3\. `.env` file

`OPENAI_API_KEY=...`, `ANTHROPIC_API_KEY=...`

Create a `.env` file in your  directory to avoid setting keys in every terminal session.

**Examples:**

```bash
# results.txtresults.mdresults.htmlresults.json
# Single provider
arcade evals . --api-key openai:sk-...

# Multiple providers
arcade evals . \
  --api-key openai:sk-... \
  --api-key anthropic:sk-ant-...
```

## Capture mode

Record  calls without scoring to bootstrap test expectations:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --capture --output captures/baseline.json
```

Include conversation  in captured output:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --capture --include-context --output captures/detailed.json
```

Capture mode is useful for:

-   Creating initial test expectations
-   Debugging model behavior
-   Understanding  call patterns

See [Capture mode](/guides/create-tools/evaluate-tools/capture-mode.md) for details.

## Output formats

### Save results to files

Specify output files with extensions - format is auto-detected:

```bash
# results.txtresults.mdresults.htmlresults.json
# Single format
arcade evals . --output results.md

# Multiple formats
arcade evals . --output results.md --output results.html --output results.json

# All formats (no extension)
arcade evals . --output results
```

### Available formats

Extension

Format

Description

`.txt`

Plain text

Pytest-style output

`.md`

Markdown

Tables and collapsible sections

`.html`

HTML

Interactive report

`.json`

JSON

Structured data for programmatic use

(none)

All formats

Generates all four formats

## Command options

### Quick reference

Flag

Short

Purpose

Example

`--use-provider`

`-p`

Select provider/model

`-p "openai:gpt-4o"`

`--api-key`

`-k`

Provider API key

`-k openai:sk-...`

`--capture`

\-

Record without scoring

`--capture`

`--details`

`-d`

Show critic feedback

`--details`

`--only-failed`

`-f`

Filter failures

`--only-failed`

`--output`

`-o`

Output file(s)

`-o results.md`

`--include-context`

\-

Add messages to output

`--include-context`

`--max-concurrent`

`-c`

Parallel limit

`-c 10`

`--debug`

\-

Debug info

`--debug`

### `--use-provider`, `-p`

Specify provider(s) and model(s) (space-separated):

```bash
# results.txtresults.mdresults.htmlresults.json
--use-provider "<provider>[:<models>] [<provider2>[:<models2>]]"
```

**Supported providers:**

-   `openai` (default: `gpt-4o`)
-   `anthropic` (default: `claude-sonnet-4-5-20250929`)

Anthropic model names include date stamps. Check [Anthropic’s model documentation](https://docs.anthropic.com/en/docs/about-claude/models)  for the latest model versions.

**Examples:**

```bash
# results.txtresults.mdresults.htmlresults.json
# Default model for provider
arcade evals . -p anthropic

# Specific model
arcade evals . -p "openai:gpt-4o-mini"

# Multiple models from same provider
arcade evals . -p "openai:gpt-4o,gpt-4o-mini"

# Multiple providers (space-separated)
arcade evals . -p "openai:gpt-4o anthropic:claude-sonnet-4-5-20250929"
```

### `--api-key`, `-k`

Provide  explicitly (repeatable):

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . -k openai:sk-... -k anthropic:sk-ant-...
```

### `--capture`

Enable capture mode to record  calls without scoring:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --capture
```

### `--include-context`

Include system messages and conversation history in output:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --include-context --output results.md
```

### `--output`, `-o`

Specify output file(s). Format is auto-detected from extension:

```bash
# results.txtresults.mdresults.htmlresults.json
# Single format
arcade evals . -o results.md

# Multiple formats (repeat flag)
arcade evals . -o results.md -o results.html

# All formats (no extension)
arcade evals . -o results
```

### `--details`, `-d`

Show detailed results including critic feedback:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --details
```

### `--only-failed`, `-f`

Show only failed test cases:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --only-failed
```

### `--max-concurrent`, `-c`

Set maximum concurrent evaluations:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --max-concurrent 10
```

Default is 1 concurrent evaluation.

### `--debug`

Show debug information for troubleshooting:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --debug
```

Displays detailed error traces and connection information.

## Understanding results

Results are formatted based on evaluation type (regular, multi-model, or comparative) and selected flags.

### Summary format

Results show overall performance:

PLAINTEXT

```
# results.txtresults.mdresults.htmlresults.json
Summary -- Total: 5 -- Passed: 4 -- Failed: 1
```

**How flags affect output:**

-   `--details`: Adds per-critic breakdown for each case
-   `--only-failed`: Filters to show only failed cases (summary shows original totals)
-   `--include-context`: Includes system messages and conversation history
-   Multiple models: Switches to comparison table format
-   Comparative tracks: Shows side-by-side track comparison

### Case results

Each case displays status and score:

PLAINTEXT

```
# results.txtresults.mdresults.htmlresults.json
PASSED Get weather for city -- Score: 1.00
FAILED Weather with invalid city -- Score: 0.65
```

### Detailed feedback

Use `--details` to see critic-level analysis:

PLAINTEXT

```
# results.txtresults.mdresults.htmlresults.json
Details:
  location:
    Match: False, Score: 0.00/0.70
    Expected: Seattle
    Actual: Seatle
  units:
    Match: True, Score: 0.30/0.30
```

### Multi-model results

When using multiple models, results show comparison tables:

PLAINTEXT

```
# results.txtresults.mdresults.htmlresults.json
Case: Get weather for city
  Model: gpt-4o -- Score: 1.00 -- PASSED
  Model: gpt-4o-mini -- Score: 0.95 -- WARNED
```

## Advanced usage

### High concurrency for fast execution

Increase concurrent evaluations:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --max-concurrent 20
```

High concurrency may hit API rate limits. Start with default (1) and increase gradually.

### Save comprehensive results

Generate all formats with full details:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --details --include-context --output results
```

This creates:

-   `results.txt`
-   `results.md`
-   `results.html`
-   `results.json`

## Troubleshooting

### Missing dependencies

If you see `ImportError: MCP SDK is required`, install the full package:

```bash
# results.txtresults.mdresults.htmlresults.json
pip install 'arcade-mcp[evals]'
```

For Anthropic support:

```bash
# results.txtresults.mdresults.htmlresults.json
pip install anthropic
```

### Tool name mismatches

 names are normalized (dots become underscores). Check your tool definitions if you see unexpected names.

### API rate limits

Reduce `--max-concurrent` value:

```bash
# results.txtresults.mdresults.htmlresults.json
arcade evals . --max-concurrent 2
```

### No evaluation files found

Ensure your evaluation files:

-   Start with `eval_`
-   End with `.py`
-   Contain functions decorated with `@tool_eval()`

## Next steps

-   Explore [capture mode](/guides/create-tools/evaluate-tools/capture-mode.md)
     for recording  calls
-   Learn about [comparative evaluations](/guides/create-tools/evaluate-tools/comparative-evaluations.md)
     for comparing  sources

Last updated on February 6, 2026

[Create an evaluation suite](/en/guides/create-tools/evaluate-tools/create-evaluation-suite.md)
[Capture mode](/en/guides/create-tools/evaluate-tools/capture-mode.md)
