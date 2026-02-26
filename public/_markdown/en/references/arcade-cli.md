---
title: "Arcade CLI"
description: "Learn how to install and use the Arcade CLI"
---
Arcade CLI

# The Arcade CLI

The Arcade CLI is a command-line tool that allows you to manage your Arcade deployments, generate, test, and manage your  servers, and more.

## Install the Arcade CLI

In your terminal, run the following command to install the published `arcade-mcp` package from PyPI:

### uv

```bash
uv tool install arcade-mcp
```

This will install the Arcade CLI as a [uv tool](https://docs.astral.sh/uv/guides/tools/#installing-tools) , making it available system wide.

### pip

```bash
pip install arcade-mcp
```

Using Windows and PowerShell? Follow the [Windows environment setup](/get-started/setup/windows-environment.md) guide for install options with and without `uv`.

## Upgrade the Arcade CLI

To upgrade to the latest version of the Arcade CLI, run the appropriate command for your package manager:

### uv

```bash
uv tool upgrade arcade-mcp
```

### pip

```bash
pip install --upgrade arcade-mcp
```

After upgrading, verify the installation:

```bash
arcade --version
```

If you previously had the `arcade-ai` package installed, you should uninstall it first. The old `arcade-ai` CLI has been replaced by `arcade-mcp`. See the [migration guide](/guides/create-tools/migrate-toolkits.md) for details on migrating from legacy toolkits.

### Re-authenticate after upgrading

After upgrading, you may need to refresh your credentials:

```bash
arcade logout
arcade login
```

## Usage

```bash
 Usage: arcade [OPTIONS] COMMAND [ARGS]...

 Arcade CLI - Build, deploy, and manage MCP servers and AI tools. Create
 new projects, run servers with multiple transports, configure clients,
 and deploy to Arcade Cloud.

╭─ Options ──────────────────────────────────────────────────────────────╮
│ --version  -v        Print version and exit.                           │
│ --help     -h        Show this message and exit.                       │
╰────────────────────────────────────────────────────────────────────────╯
╭─ User ─────────────────────────────────────────────────────────────────╮
│ login      Log in to Arcade                                            │
│ logout     Log out of Arcade                                           │
│ whoami     Show current login status and active context                │
│ dashboard  Open the Arcade Dashboard in a web browser                  │
│ org        Manage organizations (list, set active)                     │
│ project    Manage projects (list, set active)                          │
╰────────────────────────────────────────────────────────────────────────╯
╭─ Build ────────────────────────────────────────────────────────────────╮
│ new    Create a new server package directory. Example usage: arcade    │
│        new my_mcp_server                                               │
│ show   Show the installed tools or details of a specific tool          │
│ evals  Run tool calling evaluations                                    │
╰────────────────────────────────────────────────────────────────────────╯
╭─ Run ──────────────────────────────────────────────────────────────────╮
│ mcp     Run MCP servers with different transports                      │
│ deploy  Deploy MCP servers to Arcade                                   │
╰────────────────────────────────────────────────────────────────────────╯
╭─ Manage ───────────────────────────────────────────────────────────────╮
│ configure  Configure MCP clients to connect to your server             │
│ server     Manage deployments of tool servers (logs, list, etc)        │
│ secret     Manage tool secrets in the cloud (set, unset, list)         │
╰────────────────────────────────────────────────────────────────────────╯

 Pro tip: use --help after any command to see command-specific options.
```

You can learn more about any of the commands by running `arcade <command> --help`, for example, `arcade new --help`.

## `arcade login`

```bash
 Usage: arcade login [OPTIONS]

 Log in to Arcade

╭─ Options ──────────────────────────────────────────────────────────────╮
│ --host   -h      TEXT     The Arcade Coordinator host to log in to.    │
│                           [default: cloud.arcade.dev]                  │
│ --port   -p      INTEGER  The port of the Arcade Coordinator host (if  │
│                           running locally).                            │
│                           [default: None]                              │
│ --debug  -d               Show debug information                       │
│ --help                    Show this message and exit.                  │
╰────────────────────────────────────────────────────────────────────────╯
```

## `arcade logout`

```bash
 Usage: arcade logout [OPTIONS]

 Log out of Arcade

╭─ Options ──────────────────────────────────────────────────────────────╮
│ --debug  -d        Show debug information                              │
│ --help   -h        Show this message and exit.                         │
╰────────────────────────────────────────────────────────────────────────╯
```

## `arcade whoami`

```bash
 Usage: arcade whoami [OPTIONS]

 Show current login status and active context

╭─ Options ──────────────────────────────────────────────────────────────╮
│ --debug  -d        Show debug information                              │
│ --help   -h        Show this message and exit.                         │
╰────────────────────────────────────────────────────────────────────────╯
```

## `arcade dashboard`

```bash
 Usage: arcade dashboard [OPTIONS]

 Open the Arcade Dashboard in a web browser

╭─ Options ──────────────────────────────────────────────────────────────╮
│ --host    -h      TEXT     The Arcade Engine host that serves the      │
│                            dashboard.                                  │
│                            [default: api.arcade.dev]                   │
│ --port    -p      INTEGER  The port of the Arcade Engine.              │
│                            [default: None]                             │
│ --local   -l               Open the local dashboard instead of the     │
│                            default remote dashboard.                   │
│ --tls                      Whether to force TLS for the connection to  │
│                            the Arcade Engine.                          │
│ --no-tls                   Whether to disable TLS for the connection   │
│                            to the Arcade Engine.                       │
│ --debug   -d               Show debug information                      │
│ --help                     Show this message and exit.                 │
╰────────────────────────────────────────────────────────────────────────╯
```

## `arcade org`

```bash
 Usage: arcade org [OPTIONS] COMMAND [ARGS]...

 Manage organizations (list, set active)

╭─ Options ──────────────────────────────────────────────────────────────╮
│ --host    -h      TEXT     The Arcade Coordinator host.                │
│                            [default: cloud.arcade.dev]                 │
│ --port    -p      INTEGER  The port of the Arcade Coordinator host.    │
│                            [default: None]                             │
│ --tls                      Whether to force TLS for the connection to  │
│                            Arcade Coordinator.                         │
│ --no-tls                   Whether to disable TLS for the connection   │
│                            to Arcade Coordinator.                      │
│ --help                     Show this message and exit.                 │
╰────────────────────────────────────────────────────────────────────────╯
╭─ Commands ─────────────────────────────────────────────────────────────╮
│ list  List organizations you belong to                                 │
│ set   Set the active organization                                      │
╰────────────────────────────────────────────────────────────────────────╯
```

## `arcade project`

```bash
 Usage: arcade project [OPTIONS] COMMAND [ARGS]...

 Manage projects (list, set active)

╭─ Options ──────────────────────────────────────────────────────────────╮
│ --host    -h      TEXT     The Arcade Coordinator host.                │
│                            [default: cloud.arcade.dev]                 │
│ --port    -p      INTEGER  The port of the Arcade Coordinator host.    │
│                            [default: None]                             │
│ --tls                      Whether to force TLS for the connection to  │
│                            Arcade Coordinator.                         │
│ --no-tls                   Whether to disable TLS for the connection   │
│                            to Arcade Coordinator.                      │
│ --help                     Show this message and exit.                 │
╰────────────────────────────────────────────────────────────────────────╯
╭─ Commands ─────────────────────────────────────────────────────────────╮
│ list  List projects in the active organization                         │
│ set   Set the active project                                           │
╰────────────────────────────────────────────────────────────────────────╯
```

## `arcade new`

```bash
 Usage: arcade new [OPTIONS] SERVER_NAME

 Create a new server package directory. Example usage: arcade new
 my_mcp_server

╭─ Arguments ──────────────────────────────────────────────────────────────╮
│ *    server_name      TEXT  The name of the server to create             │
│                             [default: None]                              │
│                             [required]                                   │
╰──────────────────────────────────────────────────────────────────────────╯
╭─ Options ────────────────────────────────────────────────────────────────╮
│ --dir            TEXT  tools directory path                              │
│                        [default: current directory]                      │
│ --debug  -d            Show debug information                            │
│ --full   -f            Create a starter MCP server (pyproject.toml,      │
│                        server.py, .env.example)                          │
│ --help   -h            Show this message and exit.                       │
╰──────────────────────────────────────────────────────────────────────────╯
```

## `arcade show`

```bash
 Usage: arcade show [OPTIONS]

 Show the installed tools or details of a specific tool

╭─ Options ────────────────────────────────────────────────────────────────╮
│ --server  -T      TEXT     The server to show the tools of               │
│                            [default: None]                               │
│ --tool    -t      TEXT     The specific tool to show details for         │
│                            [default: None]                               │
│ --host    -h      TEXT     The Arcade Engine address to show the         │
│                            tools/servers of.                             │
│                            [default: api.arcade.dev]                     │
│ --local   -l               Show the local environment's catalog instead  │
│                            of an Arcade Engine's catalog.                │
│ --port    -p      INTEGER  The port of the Arcade Engine.                │
│                            [default: None]                               │
│ --tls                      Whether to force TLS for the connection to    │
│                            the Arcade Engine. If not specified, the      │
│                            connection will use TLS if the engine URL     │
│                            uses a 'https' scheme.                        │
│ --no-tls                   Whether to disable TLS for the connection to  │
│                            the Arcade Engine.                            │
│ --full    -f               Show full server response structure including │
│                            error, logs, and authorization fields (only   │
│                            applies when used with -t/--tool).            │
│ --debug   -d               Show debug information                        │
│ --help                     Show this message and exit.                   │
╰──────────────────────────────────────────────────────────────────────────╯
```

## `arcade evals`

```bash
 Usage: arcade evals [OPTIONS] [DIRECTORY]

 Run tool calling evaluations

╭─ Arguments ──────────────────────────────────────────────────────────────╮
│   directory      [DIRECTORY]  Directory containing evaluation files      │
│                               [default: .]                               │
╰──────────────────────────────────────────────────────────────────────────╯
╭─ Options ────────────────────────────────────────────────────────────────╮
│ --details              -d                Show detailed results            │
│ --only-failed          -f                Show only failed cases           │
│ --capture                                Record tool calls without scoring│
│ --include-context                        Include conversation context     │
│ --output               -o      TEXT      Output file(s) (repeatable)      │
│ --use-provider          -p      TEXT      Provider and models (repeatable)│
│ --api-key               -k      TEXT      Provider API key (repeatable)   │
│ --max-concurrent        -c      INTEGER   Maximum number of concurrent    │
│                                          evaluations (default: 1)         │
│                                          [default: 1]                     │
│ --num-runs              -n      INTEGER   Number of runs per case          │
│                                          [default: 1]                     │
│ --seed                         TEXT      Seed policy for OpenAI runs      │
│                                          [default: constant]              │
│ --multi-run-pass-rule           TEXT      Pass/warn aggregation rule       │
│                                          [default: last]                  │
│ --debug                               Show debug information             │
│ --help              -h                Show this message and exit.        │
╰──────────────────────────────────────────────────────────────────────────╯
```

## `arcade mcp`

```bash
Usage: arcade mcp [OPTIONS] [TRANSPORT]

 Run MCP servers with different transports

╭─ Arguments ────────────────────────────────────────────────────────────────────────╮
│   transport      [TRANSPORT]  Transport type: stdio, http                          │
│                               [default: http]                                      │
╰────────────────────────────────────────────────────────────────────────────────────╯
╭─ Options ──────────────────────────────────────────────────────────────────────────╮
│ --host                              TEXT     Host to bind to (HTTP mode only)      │
│                                              [default: 127.0.0.1]                  │
│ --port                              INTEGER  Port to bind to (HTTP mode only)      │
│                                              [default: 8000]                       │
│ --tool-package,--package    -p      TEXT     Specific tool package to load (e.g.,  │
│                                              'github' for arcade-github)           │
│                                              [default: None]                       │
│ --discover-installed,--all                   Discover all installed arcade tool    │
│                                              packages                              │
│ --show-packages                              Show loaded packages during discovery │
│ --reload                                     Enable auto-reload on code changes    │
│                                              (HTTP mode only)                      │
│ --debug                                      Enable debug mode with verbose        │
│                                              logging                               │
│ --otel-enable                                Send logs to OpenTelemetry            │
│ --env-file                          TEXT     Path to environment file              │
│                                              [default: None]                       │
│ --name                              TEXT     Server name                           │
│                                              [default: None]                       │
│ --version                           TEXT     Server version                        │
│                                              [default: None]                       │
│ --cwd                               TEXT     Working directory to run from         │
│                                              [default: None]                       │
│ --help                      -h               Show this message and exit.           │
╰────────────────────────────────────────────────────────────────────────────────────╯
```

## `arcade deploy`

```python
 Usage: arcade deploy [OPTIONS]

 Deploy MCP servers to Arcade

╭─ Options ──────────────────────────────────────────────────────────────────────────╮
│ --entrypoint  -e      TEXT  Relative path to the Python file that runs the MCPApp  │
│                             instance (relative to project root). This file must    │
│                             execute the run() method on your MCPApp instance when  │
│                             invoked directly.                                      │
│                             [default: server.py]                                   │
│ --debug       -d            Show debug information                                 │
│ --help                      Show this message and exit.                            │
╰────────────────────────────────────────────────────────────────────────────────────╯
╭─ Advanced ─────────────────────────────────────────────────────────────────────────╮
│ --skip-validate,--yolo                           Skip running the server locally   │
│                                                  for health/metadata checks. When  │
│                                                  set, you must provide             │
│                                                  --server-name and                 │
│                                                  --server-version. Secret handling │
│                                                  is controlled by --secrets.       │
│ --server-name           -n      TEXT             Explicit server name to use when  │
│                                                  --skip-validate is set. Only used │
│                                                  when --skip-validate is set.      │
│                                                  [default: None]                   │
│ --server-version        -v      TEXT             Explicit server version to use    │
│                                                  when --skip-validate is set. Only │
│                                                  used when --skip-validate is set. │
│                                                  [default: None]                   │
│ --secrets               -s      [auto|all|skip]  How to upsert secrets before      │
│                                                  deploy: auto (default): During    │
│                                                  validation, discover required     │
│                                                  secret KEYS and upsert only       │
│                                                  those. If --skip-validate is set, │
│                                                  auto becomes skip. all: Upsert    │
│                                                  every key/value pair from your    │
│                                                  server's .env file regardless of  │
│                                                  what the server needs. skip: Do   │
│                                                  not upsert any secrets (assumes   │
│                                                  they are already present in       │
│                                                  Arcade).                          │
│                                                  [default: auto]                   │
╰────────────────────────────────────────────────────────────────────────────────────╯
```

## `arcade configure`

```python
 Usage: arcade configure [OPTIONS] CLIENT:{claude|cursor|vscode}

 Configure MCP clients to connect to your server

╭─ Arguments ────────────────────────────────────────────────────────────────────────╮
│ *    client      CLIENT:{claude|cursor|vscode}  The MCP client to configure        │
│                                                 (claude, cursor, vscode)           │
│                                                 [default: None]                    │
│                                                 [required]                         │
╰────────────────────────────────────────────────────────────────────────────────────╯
╭─ Options ──────────────────────────────────────────────────────────────────────────╮
│ --transport  -t      [stdio|http]  The transport to use for the MCP server         │
│                                    configuration                                   │
│                                    [default: stdio]                                │
│ --debug      -d                    Show debug information                          │
│ --help                             Show this message and exit.                     │
╰────────────────────────────────────────────────────────────────────────────────────╯
╭─ Stdio Options ────────────────────────────────────────────────────────────────────╮
│ --entrypoint  -e      TEXT  The name of the Python file in the current directory   │
│                             that runs the server. This file must run the server    │
│                             when invoked directly. Only used for stdio servers.    │
│                             [default: server.py]                                   │
╰────────────────────────────────────────────────────────────────────────────────────╯
╭─ Configuration File Options ───────────────────────────────────────────────────────╮
│ --name    -n      TEXT  Optional name of the server to set in the configuration    │
│                         file (defaults to the name of the current directory)       │
│                         [default: None]                                            │
│ --config  -c      PATH  Optional path to a specific MCP client config file         │
│                         (overrides default path)                                   │
│                         [default: None]                                            │
╰────────────────────────────────────────────────────────────────────────────────────╯
╭─ HTTP Options ─────────────────────────────────────────────────────────────────────╮
│ --host  -h      [local|arcade]  The host of the HTTP server to configure. Use      │
│                                 'local' to connect to a local MCP server or        │
│                                 'arcade' to connect to an Arcade Cloud MCP server. │
│                                 [default: local]                                   │
│ --port  -p      INTEGER         Port for local HTTP servers                        │
│                                 [default: 8000]                                    │
╰────────────────────────────────────────────────────────────────────────────────────╯
```

## `arcade server`

```bash
Usage: arcade server [OPTIONS] COMMAND [ARGS]...

 Manage deployments of tool servers (logs, list, etc)

╭─ Options ──────────────────────────────────────────────────────────────────────────╮
│ --host    -h      TEXT     The Arcade Engine host.                                 │
│                            [default: api.arcade.dev]                               │
│ --port    -p      INTEGER  The port of the Arcade Engine host.                     │
│                            [default: None]                                         │
│ --tls                      Whether to force TLS for the connection to the Arcade   │
│                            Engine.                                                 │
│ --no-tls                   Whether to disable TLS for the connection to the Arcade │
│                            Engine.                                                 │
│ --help                     Show this message and exit.                             │
╰────────────────────────────────────────────────────────────────────────────────────╯
╭─ Commands ─────────────────────────────────────────────────────────────────────────╮
│ list     List all workers                                                          │
│ enable   Enable a worker                                                           │
│ disable  Disable a worker                                                          │
│ rm       Remove a worker                                                           │
│ logs     Get logs for a worker                                                     │
╰────────────────────────────────────────────────────────────────────────────────────╯
```

## `arcade secret`

```bash
Usage: arcade secret [OPTIONS] COMMAND [ARGS]...

 Manage tool secrets in the cloud (set, unset, list)

╭─ Options ──────────────────────────────────────────────────────────────────────────╮
│ --host    -h      TEXT     The Arcade Engine host.                                 │
│                            [default: api.arcade.dev]                               │
│ --port    -p      INTEGER  The port of the Arcade Engine host.                     │
│                            [default: None]                                         │
│ --tls                      Whether to force TLS for the connection to the Arcade   │
│                            Engine.                                                 │
│ --no-tls                   Whether to disable TLS for the connection to the Arcade │
│                            Engine.                                                 │
│ --help                     Show this message and exit.                             │
╰────────────────────────────────────────────────────────────────────────────────────╯
╭─ Commands ─────────────────────────────────────────────────────────────────────────╮
│ set    Set tool secret(s) using KEY=VALUE pairs or from .env file                  │
│ list   List all tool secrets in Arcade Cloud                                       │
│ unset  Delete tool secret(s) by key names                                          │
╰────────────────────────────────────────────────────────────────────────────────────╯
```

Last updated on January 30, 2026

[Telemetry](/en/references/mcp/telemetry.md)
[CLI Cheat Sheet](/en/references/cli-cheat-sheet.md)
