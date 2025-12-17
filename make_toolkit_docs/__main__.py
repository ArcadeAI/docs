import asyncio
import importlib.metadata
import logging
import os
import subprocess
import sys
from functools import partial
from pathlib import Path
from typing import Optional, Tuple

import openai
from dotenv import load_dotenv
from InquirerPy import inquirer
from rich.console import Console
import typer

from discovery import find_toolkits_directories
from docs_builder import (
    build_example_path,
    build_examples,
    build_toolkit_mdx,
    build_toolkit_mdx_file_path,
)
from utils import (
    get_all_enumerations,
    get_list_of_tools,
    has_wrapper_tools_directory,
    print_debug_func,
    read_toolkit_metadata,
    resolve_api_key,
    standardize_dir_path,
    write_file,
)

console = Console()
ENV_FILE = Path(__file__).parent / ".env"


def save_toolkits_dir(toolkits_dir: str) -> None:
    """Save toolkits directory to .env file."""
    # Read existing .env content
    existing_content = {}
    if ENV_FILE.exists():
        with open(ENV_FILE) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    key, value = line.split("=", 1)
                    existing_content[key] = value

    # Update or add TOOLKITS_DIR
    existing_content["TOOLKITS_DIR"] = toolkits_dir

    # Write back to .env
    with open(ENV_FILE, "w") as f:
        for key, value in existing_content.items():
            f.write(f"{key}={value}\n")


def get_toolkits_dir(provided_dir: Optional[str] = None, interactive: bool = True) -> str:
    """Get or prompt for the toolkits directory path.

    First tries to use saved directory, then auto-discovers, then prompts manually.

    Args:
        provided_dir: If provided, use this directory directly.
        interactive: Whether to use interactive prompts.

    Returns:
        Path to the toolkits directory.
    """
    # If directory is provided via CLI, use it directly
    if provided_dir:
        if os.path.isdir(provided_dir):
            return provided_dir
        else:
            console.print(f"❌ Provided directory does not exist: {provided_dir}", style="bold red")
            sys.exit(1)

    toolkits_dir = os.getenv("TOOLKITS_DIR")

    # Try using saved directory
    if toolkits_dir and os.path.isdir(toolkits_dir):
        if not interactive:
            return toolkits_dir

        use_saved = inquirer.confirm(
            message=f"Use saved toolkits directory: {toolkits_dir}?",
            default=True,
        ).execute()

        if use_saved:
            return toolkits_dir

    # Try auto-discovery
    console.print("\n[cyan]Searching for toolkits directories...[/cyan]")
    discovered = find_toolkits_directories(console)

    if discovered:
        if len(discovered) == 1:
            # Only one found, use it directly
            toolkits_dir = discovered[0]
            console.print(f"\n✓ Using discovered directory: {toolkits_dir}", style="green")
            save_toolkits_dir(toolkits_dir)
            return toolkits_dir
        else:
            # Multiple found, let user choose
            toolkits_dir = inquirer.select(
                message="Multiple toolkits directories found. Select one:",
                choices=[*discovered, "Enter path manually"],
            ).execute()

            if toolkits_dir != "Enter path manually":
                save_toolkits_dir(toolkits_dir)
                return toolkits_dir

    # Fall back to manual entry
    if not interactive:
        console.print(f"❌ No toolkits directories found. Please provide --toolkits-dir or set TOOLKITS_DIR environment variable.", style="bold red")
        sys.exit(1)

    console.print("\n[yellow]No toolkits directories found automatically.[/yellow]")

    while True:
        toolkits_dir = inquirer.filepath(
            message="Path to toolkits directory:",
            validate=lambda x: os.path.isdir(x),
            only_directories=True,
        ).execute()

        available_toolkits = get_available_toolkits(toolkits_dir)
        if not available_toolkits:
            console.print(
                f"❌ No valid toolkits found in {toolkits_dir}. "
                "A valid toolkit must contain at least one Python file with the @tool decorator.",
                style="bold red",
            )
        else:
            save_toolkits_dir(toolkits_dir)
            return toolkits_dir


def get_available_toolkits(toolkits_dir: str) -> list[str]:
    """Get list of valid toolkits in the toolkits directory.

    A valid toolkit is a directory that contains at least one Python file
    with the @tool decorator.

    Args:
        toolkits_dir: Path to the toolkits directory.

    Returns:
        List of toolkit names (directory names).
    """
    toolkits_path = Path(toolkits_dir)
    available_toolkits = []

    for directory in toolkits_path.iterdir():
        if not directory.is_dir() or directory.name.startswith("."):
            continue

        # Check if this directory contains any Python files with @tool decorator
        has_tool = False
        for py_file in directory.rglob("*.py"):
            try:
                content = py_file.read_text(encoding="utf-8")
                if "@tool" in content:
                    has_tool = True
                    break
            except Exception:
                # Skip files that can't be read
                continue

        if has_tool:
            available_toolkits.append(directory.name)

    return available_toolkits


def get_selected_toolkit(
    console: Console,
    toolkit_path: Optional[str] = None,
    toolkit_name: Optional[str] = None,
    toolkits_dir: Optional[str] = None,
    interactive: bool = True,
) -> Optional[Tuple[str, str]]:
    """Prompt user to select a toolkit from the configured toolkits directory.

    Args:
        console: Rich console for output.
        toolkit_path: Direct path to a specific toolkit (if provided, use this).
        toolkit_name: Name of the toolkit (if provided with toolkits_dir, use this).
        toolkits_dir: Parent directory containing toolkits.
        interactive: Whether to use interactive prompts.

    Returns:
        Tuple of (toolkit_dir, toolkit_name) if successful, None otherwise.
    """
    # If toolkit_path is provided directly, use it
    if toolkit_path:
        if not os.path.isdir(toolkit_path):
            console.print(f"❌ Toolkit path does not exist: {toolkit_path}", style="bold red")
            return None
        toolkit_name_from_path = Path(toolkit_path).name
        return (toolkit_path, toolkit_name_from_path)

    # Otherwise, get toolkits directory
    if not toolkits_dir:
        toolkits_dir = get_toolkits_dir(interactive=interactive)

    # Get list of available toolkits in the directory
    available_toolkits = get_available_toolkits(toolkits_dir)

    if not available_toolkits:
        console.print(f"❌ No valid toolkits found in {toolkits_dir}", style="bold red")
        return None

    # If toolkit_name is provided, use it directly
    if toolkit_name:
        if toolkit_name not in available_toolkits:
            console.print(
                f"❌ Toolkit '{toolkit_name}' not found in {toolkits_dir}. "
                f"Available toolkits: {', '.join(sorted(available_toolkits))}",
                style="bold red",
            )
            return None
        selected_toolkit = toolkit_name
    elif interactive:
        # Ask user to select a toolkit with fuzzy search
        selected_toolkit = inquirer.fuzzy(
            message="Select a toolkit (type to filter):",
            choices=sorted(available_toolkits),
            max_height="70%",
        ).execute()
    else:
        console.print(
            f"❌ Must provide --toolkit-name or --toolkit-path when running non-interactively",
            style="bold red",
        )
        return None

    toolkits_path = Path(toolkits_dir)
    server_dir = str(toolkits_path / selected_toolkit)
    server_name = selected_toolkit

    return (server_dir, server_name)


def run(
    toolkit_path: Optional[str] = typer.Option(None, "--toolkit-path", "-p", help="Direct path to the toolkit directory"),
    toolkit_name: Optional[str] = typer.Option(None, "--toolkit-name", "-n", help="Name of the toolkit (requires --toolkits-dir)"),
    toolkits_dir: Optional[str] = typer.Option(None, "--toolkits-dir", "-d", help="Path to directory containing multiple toolkits"),
    docs_section: Optional[str] = typer.Option(None, "--docs-section", "-s", help="Documentation section (e.g., 'productivity', 'development')"),
    openai_api_key: Optional[str] = typer.Option(None, "--openai-api-key", "-k", help="OpenAI API key (or set OPENAI_API_KEY env var)"),
    skip_examples: bool = typer.Option(False, "--skip-examples", help="Skip generating tool call examples"),
    max_concurrency: int = typer.Option(5, "--max-concurrency", "-c", help="Max concurrency for OpenAI API requests"),
) -> None:
    """Interactive command to generate documentation for a server."""
    load_dotenv(ENV_FILE)

    # Determine if we're running interactively
    interactive = not any([toolkit_path, toolkit_name, toolkits_dir, docs_section])

    console.print("\n[bold cyan]📚 Arcade Documentation Generator[/bold cyan]\n")

    result = get_selected_toolkit(
        console=console,
        toolkit_path=toolkit_path,
        toolkit_name=toolkit_name,
        toolkits_dir=toolkits_dir,
        interactive=interactive,
    )
    if result is None:
        return

    server_dir, server_name = result

    console.print(f"\n[cyan]Installing server from {server_dir}...[/cyan]")
    try:
        # First try normal installation
        result = subprocess.run(
            ["uv", "pip", "install", "--python", sys.executable, "-e", server_dir],
            check=False,
            capture_output=True,
            text=True,
        )

        if result.returncode != 0:
            # If that fails, try installing without dependencies first, then install deps from PyPI
            console.print("[yellow]Standard installation failed (likely due to local path dependencies), trying alternative method...[/yellow]")
            # Try installing with --no-deps first
            subprocess.run(
                ["uv", "pip", "install", "--python", sys.executable, "--no-deps", "-e", server_dir],
                check=True,
                capture_output=True,
                text=True,
            )
            # Install common dependencies from PyPI
            console.print("[cyan]Installing dependencies from PyPI...[/cyan]")
            common_deps = [
                "arcade-tdk>=3.0.0,<4.0.0",
                "arcade-core>=3.0.0,<4.0.0",  # Needed for toolkit discovery
                "httpx[http2]>=0.27.2,<1.0.0",
                "jsonschema>=4.0.0,<5.0.0",
            ]
            subprocess.run(
                ["uv", "pip", "install", "--python", sys.executable] + common_deps,
                check=False,  # Don't fail if some deps can't be installed
                capture_output=True,
                text=True,
            )

        reload_cache()

        console.print("[green]✓[/green] Server installed successfully\n")
    except subprocess.CalledProcessError as e:
        console.print(
            f"❌ Failed to install server: {e.stderr}\n"
            f"Note: If the server has local path dependencies, you may need to install them separately.",
            style="bold red",
        )
        return

    # Get the actual toolkit name from entry points
    try:
        _, entry_point_toolkit_name = read_toolkit_metadata(server_dir)
        actual_toolkit_name = entry_point_toolkit_name if entry_point_toolkit_name else server_name
    except Exception:
        actual_toolkit_name = server_name

    # Validate installation by checking if tools can be loaded
    console.print("[cyan]Verifying installation...[/cyan]")

    # Try multiple possible toolkit names
    toolkit_names_to_try = [actual_toolkit_name, server_name]
    if actual_toolkit_name != server_name:
        toolkit_names_to_try.append(server_name)

    tools = None
    successful_toolkit_name = None
    for toolkit_name_attempt in toolkit_names_to_try:
        try:
            tools = get_list_of_tools(toolkit_name_attempt, toolkit_dir=server_dir)
            if tools:
                successful_toolkit_name = toolkit_name_attempt
                break
        except Exception as e:
            console.print(f"[dim]Tried '{toolkit_name_attempt}': {e}[/dim]")
            continue

    if not tools:
        console.print(
            f"❌ No tools found for toolkit. Tried: {', '.join(toolkit_names_to_try)}\n"
            "The package may need time to be recognized. Try running the command again.",
            style="bold red",
        )
        return

    console.print(f"[green]✓[/green] Found {len(tools)} tools using toolkit name '{successful_toolkit_name}'\n")

    docs_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

    mcp_servers_path = os.path.join(docs_dir, "app", "en", "mcp-servers")
    available_sections = []
    if os.path.exists(mcp_servers_path):
        available_sections = [
            d for d in os.listdir(mcp_servers_path)
            if os.path.isdir(os.path.join(mcp_servers_path, d)) and not d.startswith(".")
        ]

    if not available_sections:
        console.print(f"❌ No sections found in {mcp_servers_path}", style="bold red")
        return

    # Get docs section
    if not docs_section:
        if interactive:
            docs_section = inquirer.select(
                message="Docs section:",
                choices=available_sections,
            ).execute()
        else:
            console.print(
                f"❌ Must provide --docs-section when running non-interactively. "
                f"Available sections: {', '.join(sorted(available_sections))}",
                style="bold red",
            )
            return
    elif docs_section not in available_sections:
        console.print(
            f"❌ Invalid docs section: {docs_section}. "
            f"Available sections: {', '.join(sorted(available_sections))}",
            style="bold red",
        )
        return

    if not docs_section:
        console.print("❌ No section selected", style="bold red")
        return

    # Get OpenAI API key
    if not openai_api_key:
        openai_api_key = os.environ.get("OPENAI_API_KEY")
        if not openai_api_key and interactive:
            openai_api_key = inquirer.secret(
                message="OpenAI API key:",
                validate=lambda x: len(x) > 0,
            ).execute()

    skip_tool_call_examples = skip_examples
    if interactive and not skip_examples:
        skip_tool_call_examples = not inquirer.confirm(
            message="Generate tool call examples in Python and JavaScript?",
            default=True,
        ).execute()

    # Only ask for max concurrency if we're generating examples and interactive
    if interactive and not skip_tool_call_examples:
        max_concurrency = int(inquirer.number(
            message="Max concurrency for OpenAI API requests:",
            default=max_concurrency,
            min_allowed=1,
            max_allowed=20,
        ).execute())

    console.print("\n[bold green]✓[/bold green] Starting documentation generation...\n")

    try:
        success = generate_mcp_server_docs(
            console=console,
            toolkit_name=server_name,
            toolkit_dir=server_dir,
            docs_dir=docs_dir,
            docs_section=docs_section,
            openai_model="gpt-4o-mini",
            openai_api_key=openai_api_key,
            tool_call_examples=not skip_tool_call_examples,
            debug=True,
            max_concurrency=max_concurrency,
            tools=tools,
        )
    except Exception as error:
        import traceback
        traceback.print_exc()
        console.print(
            f"Failed to generate documentation for '{server_name}' in '{docs_dir}' ({type(error).__name__}: {error!s})",
            style="bold red",
        )
        success = False

    if success:
        console.print(
            f"Generated documentation for '{server_name}' in '{docs_dir}'",
            style="bold green",
        )
    else:
        console.print(
            f"Failed to generate documentation for '{server_name}' in '{docs_dir}'",
            style="bold red",
        )


def reload_cache() -> None:
    """Reload the import cache to pick up newly installed packages."""
    # Clear all import caches to pick up newly installed packages
    if hasattr(importlib.metadata, '_cache'):
        importlib.metadata._cache.clear()

    # Clear distributions cache
    try:
        importlib.metadata.distributions.cache_clear()
    except AttributeError:
        pass

    # Clear entry points cache
    try:
        importlib.metadata.entry_points.cache_clear()
    except AttributeError:
        pass

    # Also clear sys.meta_path caches if they exist
    for finder in sys.meta_path:
        if hasattr(finder, 'invalidate_caches'):
            finder.invalidate_caches()

    # Force reload of sys.path to pick up new .egg-link or .pth files
    import site
    importlib.reload(site)


def generate_mcp_server_docs(
    console: Console,
    toolkit_name: str,
    toolkit_dir: str,
    docs_section: str,
    docs_dir: str,
    openai_model: str,
    openai_api_key: Optional[str] = None,
    tool_call_examples: bool = True,
    debug: bool = False,
    max_concurrency: int = 5,
    tools: Optional[list] = None,
) -> bool:
    openai.api_key = resolve_api_key(openai_api_key, "OPENAI_API_KEY")

    if not openai.api_key:
        console.print(
            "❌ Provide --openai-api-key argument or set the OPENAI_API_KEY environment variable",
            style="red",
        )
        return False

    print_debug = partial(print_debug_func, debug, console)

    docs_dir = standardize_dir_path(docs_dir)
    toolkit_dir = standardize_dir_path(toolkit_dir)
    is_wrapper_toolkit = has_wrapper_tools_directory(toolkit_dir)

    print_debug("Reading server metadata")
    pip_package_name, entry_point_toolkit_name = read_toolkit_metadata(toolkit_dir)
    # Use entry point toolkit name if available, otherwise fall back to provided toolkit_name
    actual_toolkit_name = entry_point_toolkit_name if entry_point_toolkit_name else toolkit_name

    # Use provided tools or fetch them
    if tools is None:
        print_debug(f"Getting list of tools for {actual_toolkit_name} from the local Python environment")
        tools = get_list_of_tools(actual_toolkit_name, toolkit_dir=toolkit_dir)

    print_debug(f"Found {len(tools)} tools")

    print_debug("Getting all enumerations potentially used in tool argument specs")
    enums = get_all_enumerations(toolkit_dir)

    toolkit_mdx_file_path = build_toolkit_mdx_file_path(docs_section, docs_dir, toolkit_name)
    print_debug(f"Building {toolkit_mdx_file_path} file")
    toolkit_mdx = build_toolkit_mdx(
        toolkit_package_name=toolkit_name,
        toolkit_dir=toolkit_dir,
        tools=tools,
        docs_section=docs_section,
        enums=enums,
        pip_package_name=pip_package_name,
        openai_model=openai_model,
        is_wrapper_toolkit=is_wrapper_toolkit,
    )
    write_file(toolkit_mdx_file_path, toolkit_mdx)

    if tool_call_examples:
        print_debug("Building tool-call examples in Python and JavaScript")

        examples = asyncio.run(
            build_examples(
                print_debug=print_debug,
                tools=tools,
                openai_model=openai_model,
                max_concurrency=max_concurrency,
            )
        )

        for filename, example in examples:
            example_path = build_example_path(filename, docs_dir, toolkit_name)
            write_file(example_path, example)

    print_debug(f"Done generating docs for {toolkit_name}")

    return True


if __name__ == "__main__":
    app = typer.Typer()
    app.command()(run)

    try:
        app()
    except KeyboardInterrupt:
        console.print("\n\n❌ Cancelled by user", style="bold red")
        sys.exit(1)
