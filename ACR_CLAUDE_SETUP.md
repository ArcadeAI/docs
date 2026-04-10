# Setup ACR + Claude Code (copy/paste guide)

Run this from your repository root.

```bash
set -euo pipefail

# 1) Install Claude Code CLI (recommended)
curl -fsSL https://claude.ai/install.sh | bash

# Ensure claude is on PATH in this shell
export PATH="$HOME/.local/bin:$PATH"

# 2) Install ACR
if ! command -v go >/dev/null 2>&1; then
  echo "Go is required. Install Go 1.25+ first, then rerun."
  exit 1
fi

go install github.com/richhaase/agentic-code-reviewer/cmd/acr@latest

# Ensure acr is on PATH in this shell
export PATH="$(go env GOPATH)/bin:$PATH"

# 3) Create project-local Claude command + skill
mkdir -p .claude/commands .claude/skills/acr-help

cat > .claude/commands/acr-run.md <<'MD'
---
description: Run ACR locally with Claude reviewers
argument-hint: "[extra-acr-args]"
disable-model-invocation: true
---

Run Agentic Code Reviewer in this repository with Claude for review and summarization.

```bash
acr --reviewer-agent claude --summarizer-agent claude --local --verbose $ARGUMENTS
```

After it completes:
1. Group findings by severity.
2. Start with security, data loss, and crash risks.
3. Include file paths and concrete fixes.
MD

cat > .claude/skills/acr-help/SKILL.md <<'MD'
---
name: acr-help
description: Explain and run ACR with Claude in this repo.
disable-model-invocation: true
argument-hint: "[extra-acr-args]"
allowed-tools: Bash(acr *) Bash(git status) Read Grep Glob
---

Use this skill when the user wants to run ACR and interpret results.

## Quick run

```bash
acr --reviewer-agent claude --summarizer-agent claude --local --verbose $ARGUMENTS
```

## How to use output

1. Fix high-severity findings first.
2. For each finding, provide:
   - Risk
   - File and line
   - Suggested patch
3. If no findings, report: "LGTM locally."

## Useful variants

```bash
# More coverage, avoid rate limits
acr -r 8 -c 3 --reviewer-agent claude --summarizer-agent claude --local

# Compare against develop
acr -b develop --reviewer-agent claude --summarizer-agent claude --local

# Review PR (requires gh auth)
acr --pr 123 --reviewer-agent claude --summarizer-agent claude
```
MD

echo "Setup complete."
echo "Open Claude in this repo and use:"
echo "  /acr-run"
echo "  /acr-help"
```

## Authenticate once

```bash
claude
```

Follow the login flow.

Optional (only for PR posting from ACR):

```bash
gh auth login
```

## Daily usage in Claude

- Run local review:
  - `/acr-run`
- Run with custom flags:
  - `/acr-run -r 8 -c 3 -b develop`
- Show instructions:
  - `/acr-help`
