---
title: "Arcade CLI cheat sheet"
description: "Quick reference for all Arcade CLI commands, perfect for printing."
---
CLI Cheat Sheet

# Arcade CLI cheat sheet

**📄 Print-friendly!** Use your browser’s print function (Ctrl/Cmd + P) to get a landscape-oriented version perfect for events and quick reference. The layout will automatically adjust for optimal printing.

🚀Getting Started

Install Arcade CLI globally using `uv` (recommended) or `pip`.

```bash
uv tool install arcade-mcp    # Recommended
pip install arcade-mcp        # Alternative
```

Upgrade to the latest version:

```bash
uv tool upgrade arcade-mcp    # Recommended
pip install --upgrade arcade-mcp  # Alternative
```

Verify installation:

```bash
arcade --version
```

Create and run your first server:

```bash
arcade new my_server
cd my_server
arcade mcp http
```

Get help on any command:

```bash
arcade --help
arcade <command> --help
```

Use `uv` for faster installs and better dependency management

Using Windows and PowerShell? See [Windows environment setup](/get-started/setup/windows-environment.md) for install options with and without `uv`.

🔐Authentication

Authenticate with Arcade Cloud for deployments and secrets management.

Command

Description

`arcade login`

Opens browser for OAuth authentication

`arcade login --host <url>`

Login to custom Arcade instance

`arcade logout`

Clear local credentials

`arcade whoami`

Show logged-in user and active context

`arcade dashboard`

Open Arcade web UI in browser

`arcade dashboard --local`

Open local dashboard

Credentials are stored in `~/.arcade/credentials.yaml` (or `%USERPROFILE%\.arcade\credentials.yaml` on Windows).

🏢Organizations & Projects

Organizations group  and team members. Projects contain servers, secrets, and configurations.

```bash
# List all organizations
arcade org list

# Switch active organization
arcade org set <org_id>
```

Switching organization also resets your active  to that org’s default.

 contain servers, secrets, and configurations.

```bash
# List projects in active org
arcade project list

# Switch active project
arcade project set <id>
```

All deploy/secret commands use your active project .

Use `arcade whoami` to see current org/.

✨Create New Server

Scaffold a new  server  with boilerplate code.

### Minimal Template (Quick Start)

```bash
arcade new my_server
```

Creates **pyproject.toml**, **src/my\_server/**init**.py**, **src/my\_server/server.py**.

### Full Template (Production)

```bash
arcade new my_server --full
```

Creates: **pyproject.toml**, **my\_server/** (package with ), **tests/**, **evals/**, **Makefile**, **.pre-commit-config.yaml**, **.ruff.toml**, **LICENSE**, **README.md**.

### Options

Flag

Description

`--dir <path>`

Output directory (default: current)

`--full`, `-f`

Create full starter project

⚡Run MCP Server

Start your server locally for development and testing.

### Transport Types

```bash
# For MCP clients (Claude, Cursor)
arcade mcp stdio

# For web/API testing
arcade mcp http
```

### Examples

```bash
arcade mcp http --port 8080 --reload --debug
arcade mcp stdio --tool-package github
arcade mcp http --discover-installed --show-packages
```

Use `--reload` for faster development iteration

🔍Show & Inspect Tools

View available  and their schemas from local or remote servers.

```bash
# List all tools
arcade show

# Show local tools only
arcade show --local

# Show tool details
arcade show -t <tool_name>

# Full response structure
arcade show -t <tool> --full

# Filter by server
arcade show -T <server_name>
```

### Options

Flag

Description

`-t`, `--tool <name>`

Show specific tool details

`-T`, `--server <name>`

Filter by server

`--local`, `-l`

Show local catalog only

`--full`, `-f`

Show complete response (auth, logs)

🔧Configure Clients

Auto-configure  clients to connect to your server.

### Supported Clients

Client

Command

Claude Desktop
(`stdio` only)

`arcade configure claude`

Cursor IDE
(`stdio` or `http`)

`arcade configure cursor`

VS Code
(`stdio` or `http`)

`arcade configure vscode`

Claude Desktop only supports `stdio` transport via configuration file.

### Options

Flag

Description

Default

`--transport <type>`

`stdio` or `http`

`stdio`

`--host <target>`

`local` or `arcade`

`local`

`--port <port>`

Port for HTTP transport

`8000`

`--name <name>`

Server name in config

directory name

`--entrypoint <file>`

Entry file for stdio

`server.py`

☁️Deploy to Cloud

Deploy your  server to Arcade Cloud for production use.

```bash
arcade deploy
```

### Options

Flag

Description

Default

`-e`, `--entrypoint <file>`

Python file that runs MCPApp

`server.py`

`--server-name <name>`

Explicit server name

auto-detected

`--server-version <ver>`

Explicit server version

auto-detected

`--skip-validate`

Skip local health checks

off

`--secrets <mode>`

Secret sync mode (see below)

`auto`

### Secrets Handling

Mode

Description

`auto`

Sync only required secret keys (default)

`all`

Sync entire .env file

`skip`

Don’t sync any secrets

Run from your project root (where `pyproject.toml` is located).

🖥️Server Management

Manage deployed servers in Arcade Cloud.

```bash
# List all servers
arcade server list

# Get server details
arcade server get <name>

# Enable a server
arcade server enable <name>

# Disable a server
arcade server disable <name>

# Delete a server (permanent!)
arcade server delete <name>
```

Delete is permanent and cannot be undone

📋Server Logs

View and stream logs from deployed servers.

```bash
# View recent logs (last 1h)
arcade server logs <name>

# Stream live logs
arcade server logs <name> -f    # Stream live logs
```

### Time Range Options

Flag

Description

Example

`-s`, `--since <time>`

Start time (default: 1h)

`1h`, `30m`, `2d`, `2024-01-15T10:00:00Z`

`-u`, `--until <time>`

End time (default: now)

`30m`, `2024-01-15T12:00:00Z`

```bash
arcade server logs myserver --since 2h --until 30m
arcade server logs myserver --since 2024-01-15T10:00:00Z
```

🔑Secrets Management

Store API keys and sensitive configuration for your deployed servers. Secrets are encrypted and scoped to your active .

### List Secrets

```bash
arcade secret list
```

Shows: Key, Type, Description, Last accessed.

### Set Secrets

```bash
arcade secret set KEY=value
arcade secret set KEY1=v1 KEY2=v2
```

### From `.env` File

```bash
arcade secret set --from-env
arcade secret set --from-env -f .env.prod
```

### Delete Secrets

```bash
arcade secret unset KEY1 KEY2
```

Use `arcade secret set --from-env` to sync local .env to Arcade Cloud before deploying.

📊Evaluations

Test \-calling accuracy with evaluation suites.

### Basic Usage

```bash
# Run all evals in current directory
arcade evals

# Run specific directory
arcade evals ./evals/

# Show detailed results
arcade evals -d

# Filter failed tests only
arcade evals --only-failed
```

### Capture Mode

Record  calls without scoring to bootstrap test expectations:

```bash
# Basic capture
arcade evals --capture

# Capture with context
arcade evals --capture --include-context

# Save to file
arcade evals --capture -o captures.json
```

### Provider Selection

```bash
# Use specific provider
arcade evals -p openai

# Use specific model
arcade evals -p openai:gpt-4o

# Multiple providers
arcade evals -p openai:gpt-4o -p anthropic:claude-sonnet-4-5-20250929

# With API key
arcade evals -k openai:sk-...
```

### Output Formats

```bash
# Save as JSON
arcade evals -o results.json

# Multiple formats
arcade evals -o report.html -o report.md

# All formats
arcade evals -o results
```

### Common Workflows

```bash
# Debug failures
arcade evals --only-failed -d

# Full report with context
arcade evals -d --include-context -o report.html

# Multi-run stability check
arcade evals --num-runs 5 --seed random --multi-run-pass-rule majority -o stability.html

# Parallel execution
arcade evals --max-concurrent 5

# Capture baseline
arcade evals --capture -o baseline.json
```

### Key Flags

Flag

Short

Description

`--details`

`-d`

Show detailed results

`--only-failed`

`-f`

Filter failed tests

`--output`

`-o`

Output file(s)

`--use-provider`

`-p`

Select provider/model

`--api-key`

`-k`

Provider API key

`--num-runs`

`-n`

Runs per case

`--seed`

Seed policy for OpenAI runs

`--multi-run-pass-rule`

Pass rule for multi-run

`--capture`

Capture mode

`--include-context`

Add system messages

`--max-concurrent`

`-c`

Parallel runs

Use `--capture` to generate expected  calls, then run normal evals to validate.

⚙️MCP Server Options

—host

Bind address (127.0.0.1)

—port

Port number (8000)

—reload

Auto-reload on changes

—debug

Verbose logging

—tool-package

Load specific package

—discover-installed

Find arcade-\* packages

—show-packages

List loaded packages

—env-file

Path to .env file

—name

Server name

—version

Server version

—otel-enable

Send logs to OTel

🚩Global Flags

Available on most commands:

Flag

Description

`-h`, `--help`

Show command help

`-v`, `--version`

Show CLI version

`-d`, `--debug`

Enable debug output

`--host <url>`

Arcade Engine host

`--port <port>`

Arcade Engine port

`--tls`

Force TLS connection

`--no-tls`

Disable TLS connection

Use `--debug` when troubleshooting issues

🌐Environment Variables

Set these in your shell or `.env` file:

Variable

Description

`OPENAI_API_KEY`

OpenAI API key (for evals)

`ANTHROPIC_API_KEY`

Anthropic API key (for evals)

`ARCADE_API_BASE_URL`

Override Arcade API URL

```bash
# In shell
export OPENAI_API_KEY=sk-...

# Or in .env file
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
```

PowerShell session example:

```powershell
$env:OPENAI_API_KEY="sk-..."
$env:ANTHROPIC_API_KEY="sk-ant-..."
```

📂Project Structure

### Minimal Template (`arcade new my_server`)

my\_server/
├── pyproject.toml          # Dependencies & metadata
└── src/my\_server/
├── **init**.py
└── server.py           # MCPApp entry point

### Full Template (`arcade new my_server --full`)

my\_server/
├── pyproject.toml          # Dependencies & metadata
├── .pre-commit-config.yaml # Git hooks
├── .ruff.toml              # Linter config
├── Makefile                # Common commands
├── LICENSE
├── README.md
├── my\_server/              # Package directory
│   ├── **init**.py
│   └── /
│       ├── **init**.py
│       └── hello.py        # Example tool
├── tests/
│   ├── **init**.py
│   └── test\_my\_server.py
└── evals/
└── eval\_my\_server.py   # Evaluation suites

Add `.env` (local secrets) and `.env.example` (template) to your .

🔧Troubleshooting

### Common Issues

Error

Solution

”Not logged in”

Run `arcade login`

”Legacy credentials”

Run `arcade logout` then `arcade login`

”Module not found”

Run `uv pip install arcade-mcp[evals]`

”Server not healthy”

Check `arcade server logs <name> -f`

”No tools found”

Verify `--tool-package` or `--discover-installed`

”Command not found after upgrade”

Re-authenticate: `arcade logout && arcade login`

### After Upgrading

If you encounter issues after upgrading the CLI:

```bash
arcade logout          # Clear old credentials
arcade login           # Re-authenticate
arcade whoami          # Verify login status
```

### Debug Tips

```bash
arcade --debug <command>      # Verbose output
arcade server logs <name> -f  # Stream live logs
arcade show --local           # Verify local tools
```

💡Pro Tips

-   Use `--reload` during development for faster iteration
-   Use `stdio` transport for Claude Desktop and Cursor
-   Use `http` transport for web testing and debugging
-   Always set secrets before deploying servers
-   Run evaluations before every deploy
-   Use `--full` template for production
-   Check logs immediately after deploying
-   Use `--debug` flag to see detailed request info
-   Keep `.env.example` updated for your team
-   Use project  when working with multiple

📝Typical Workflow

Standard development cycle for building  servers:

1.  **`arcade login`** — Authenticate with Arcade Cloud
2.  **`arcade new my_server`** — Create  (Minimal template)
3.  **Edit `src/my_server/server.py`** — Add your
4.  **`arcade mcp http --reload`** — Run locally with hot reload
5.  **`arcade configure cursor`** — Connect your IDE
6.  **Test  in IDE** — Verify functionality
7.  **`arcade evals`** — Run evaluation suites
8.  **`arcade secret set --from-env`** — Sync secrets
9.  **`arcade deploy`** — Deploy to cloud (requires `server.py` entrypoint)
10.  **`arcade server logs -f`** — Monitor logs

Last updated on February 12, 2026

[Arcade CLI](/en/references/arcade-cli.md)
[Contextual Access Webhook API](/en/references/contextual-access-webhook-api.md)
