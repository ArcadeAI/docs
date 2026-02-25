---
title: "Windows environment setup"
description: "Install and use Arcade CLI on Windows"
---
[Setup](/en/get-started/setup/api-keys.md)
Windows environment setup

# Windows environment setup

Set up Arcade CLI on Windows using `uv` (recommended), with optional `pip` fallback guidance.

## Before you start

-   Windows with PowerShell
-   Python 3.10 or later
-   Internet access for package download

Validate which commands exist on your machine:

### PowerShell

```python
uv --version
python --version
py --version
Get-Command arcade -ErrorAction SilentlyContinue
```

### Bash

```bash
uv --version
python3 --version
command -v arcade || true
```

If both `python` and `py` are missing, the pip-only instructions will fail until Python is installed and added to `PATH`.

## Install `uv`

Use one of the following methods.

### PowerShell

```bash
irm https://astral.sh/uv/install.ps1 | iex
uv --version
```

If `uv` is still not found in the same shell session:

```bash
$env:Path = "$env:USERPROFILE\.local\bin;$env:Path"
uv --version
```

### Bash

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="$HOME/.local/bin:$PATH"
uv --version
```

## Optional binary package managers on Windows

`winget`, `scoop`, and `choco` are optional convenience methods. Keep them secondary to official install instructions.

### winget

```bash
winget --version
winget install --id=astral-sh.uv -e
```

### scoop

```bash
scoop --version
scoop install main/uv
```

### chocolatey

```bash
choco --version
choco install uv
```

## Install Arcade CLI with `uv` (recommended)

### Global install

### PowerShell

```bash
uv tool install --upgrade arcade-mcp
arcade -v
Get-Command arcade
```

### Bash

```bash
uv tool install --upgrade arcade-mcp
arcade -v
command -v arcade
```

### Virtual environment install

### PowerShell

```python
uv venv ".venv"
uv pip install --python ".venv\Scripts\python.exe" arcade-mcp
& ".venv\Scripts\arcade.exe" -v
```

Optional activation:

```bash
. ".venv\Scripts\Activate.ps1"
arcade -v
```

### Bash

```bash
uv venv .venv
uv pip install --python .venv/bin/python arcade-mcp
.venv/bin/arcade -v
```

Optional activation:

```bash
source .venv/bin/activate
arcade -v
```

## Install without `uv` (pip fallback)

Use this only if `uv` is unavailable.

### PowerShell

```python
python -m venv ".venv"
. ".venv\Scripts\Activate.ps1"
python -m pip install --upgrade pip
python -m pip install arcade-mcp
arcade -v
```

Global  install:

```python
python -m pip install --user arcade-mcp
arcade -v
```

### Bash

```python
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install arcade-mcp
arcade -v
```

\-level install:

```bash
python3 -m pip install --user arcade-mcp
arcade -v
```

## Validate your installation

Run these after install:

### PowerShell

```bash
arcade -v
arcade --help
arcade mcp --help
```

If validating a venv without activation:

```bash
& ".venv\Scripts\arcade.exe" -v
```

### Bash

```bash
arcade -v
arcade --help
arcade mcp --help
```

If validating a venv without activation:

```bash
.venv/bin/arcade -v
```

## Troubleshoot Windows setup

### `uv` not found

```bash
$env:Path = "$env:USERPROFILE\.local\bin;$env:Path"
uv --version
```

### `arcade` resolves to a venv instead of global install

```bash
Get-Command arcade
```

If this points to `.venv\Scripts\arcade.exe`, open a new shell or deactivate the venv before validating global install.

### Execution policy blocks `Activate.ps1`

```bash
Get-ExecutionPolicy -List | Format-Table -AutoSize
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
. ".venv\Scripts\Activate.ps1"
```

### Install takes longer than expected

The first install can download many dependencies. This is normal on fresh environments.

### Docs mention `brew install` commands

Some Arcade docs include `brew` commands for macOS examples. On native Windows, prefer `winget`, `scoop`, or `choco`.

If you are following a guide that uses Homebrew, treat it as optional unless you are using WSL or Git Bash with Homebrew.

## Next steps

-   [Get an API key](/get-started/setup/api-keys.md)

-   [Run the MCP server quickstart](/get-started/quickstarts/mcp-server-quickstart.md)

-   [Browse the Arcade CLI reference](/references/arcade-cli.md)


Last updated on February 10, 2026

[Connect Arcade docs to your IDE](/en/get-started/setup/connect-arcade-docs.md)
[Call tools in agents](/en/get-started/quickstarts/call-tool-agent.md)
