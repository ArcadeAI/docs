import asyncio
import importlib.metadata
import logging
import os
import subprocess
import sys
from functools import partial
from pathlib import Path

import openai
from dotenv import load_dotenv
from InquirerPy import inquirer
from rich.console import Console

from make_toolkit_docs.docs_builder import (
    build_example_path,
    build_examples,
    build_toolkit_mdx,
    build_toolkit_mdx_file_path,
)
from make_toolkit_docs.utils import (
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


def find_toolkits_directories(max_depth: int = 5) -> list[str]:
    """Scan the filesystem starting from home directory to find 'toolkits' directories.

    Uses arcade_core.discovery to validate that directories contain actual tools.

    Args:
        max_depth: Maximum depth to search (default: 5 levels from home)

    Returns:
        List of valid toolkits directory paths.
    """
    try:
        from loguru import logger
        logger.disable("arcade_core.discovery")
    except ImportError:
        logging.getLogger("arcade_core.discovery").setLevel(logging.WARNING)

    from arcade_core.discovery import analyze_files_for_tools

    home = Path.home()
    candidates = []

    console.print("🔍 Scanning for toolkits directories...", style="cyan")

    # Walk the filesystem up to max_depth levels
    def walk_directory(path: Path, current_depth: int):
        if current_depth > max_depth:
            return

        try:
            for entry in path.iterdir():
                # Skip hidden directories and common large directories
                if entry.name.startswith(".") or entry.name in {
                    "node_modules",
                    "venv",
                    ".venv",
                    "__pycache__",
                    "Library",
                    "Applications",
                }:
                    continue

                if entry.is_dir():
                    # Check if this directory is named "toolkits"
                    if entry.name.lower() == "toolkits":
                        # Check each subdirectory within toolkits for tools
                        has_any_tools = False
                        try:
                            for toolkit_subdir in entry.iterdir():
                                if not toolkit_subdir.is_dir() or toolkit_subdir.name.startswith("."):
                                    continue

                                # Search for Python files with @tool decorator up to 3 levels deep
                                tool_files_found = []

                                def find_tool_files_recursive(search_path: Path, depth: int = 0, max_depth: int = 3):
                                    """Recursively find Python files up to max_depth."""
                                    if depth > max_depth:
                                        return

                                    try:
                                        for item in search_path.iterdir():
                                            if item.name.startswith(".") or item.name in {"__pycache__", "venv", ".venv"}:
                                                continue

                                            if item.is_file() and item.suffix == ".py":
                                                tool_files_found.append(item)
                                            elif item.is_dir():
                                                find_tool_files_recursive(item, depth + 1, max_depth)
                                    except (PermissionError, OSError):
                                        pass

                                find_tool_files_recursive(toolkit_subdir)

                                if tool_files_found:
                                    tools_found = analyze_files_for_tools(tool_files_found)
                                    if tools_found:
                                        has_any_tools = True
                                        break  # Found at least one toolkit with tools
                        except (PermissionError, OSError):
                            pass

                        if has_any_tools:
                            candidates.append(str(entry))
                            console.print(
                                f"  ✓ Found: {entry}",
                                style="green",
                            )
                    else:
                        # Continue searching subdirectories
                        walk_directory(entry, current_depth + 1)
        except (PermissionError, OSError):
            # Skip directories we can't access
            pass

    walk_directory(home, 1)

    return candidates


def get_toolkits_dir() -> str:
    """Get or prompt for the toolkits directory path.

    First tries to use saved directory, then auto-discovers, then prompts manually.

    Returns:
        Path to the toolkits directory.
    """
    toolkits_dir = os.getenv("TOOLKITS_DIR")

    # Try using saved directory
    if toolkits_dir and os.path.isdir(toolkits_dir):
        use_saved = inquirer.confirm(
            message=f"Use saved toolkits directory: {toolkits_dir}?",
            default=True,
        ).execute()

        if use_saved:
            return toolkits_dir

    # Try auto-discovery
    console.print("\n[cyan]Searching for toolkits directories...[/cyan]")
    discovered = find_toolkits_directories()

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
                choices=discovered + ["Enter path manually"],
            ).execute()

            if toolkits_dir != "Enter path manually":
                save_toolkits_dir(toolkits_dir)
                return toolkits_dir

    # Fall back to manual entry
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


def get_selected_toolkit(console: Console) -> tuple[str, str] | None:
    """Prompt user to select a toolkit from the configured toolkits directory.

    Returns:
        Tuple of (toolkit_dir, toolkit_name) if successful, None otherwise.
    """
    toolkits_dir = get_toolkits_dir()

    # Get list of available toolkits in the directory
    available_toolkits = get_available_toolkits(toolkits_dir)

    if not available_toolkits:
        console.print(f"❌ No valid toolkits found in {toolkits_dir}", style="bold red")
        return None

    # Ask user to select a toolkit with fuzzy search
    selected_toolkit = inquirer.fuzzy(
        message="Select a toolkit (type to filter):",
        choices=sorted(available_toolkits),
        max_height="70%",
    ).execute()

    toolkits_path = Path(toolkits_dir)
    server_dir = str(toolkits_path / selected_toolkit)
    server_name = selected_toolkit

    return (server_dir, server_name)


def run() -> None:
    """Interactive command to generate documentation for a server."""
    load_dotenv(ENV_FILE)

    console.print("\n[bold cyan]📚 Arcade Documentation Generator[/bold cyan]\n")

    result = get_selected_toolkit(console)
    if result is None:
        return

    server_dir, server_name = result

    console.print(f"\n[cyan]Installing server from {server_dir}...[/cyan]")
    try:
        subprocess.run(
            ["uv", "pip", "install", "--python", sys.executable, "-e", server_dir],
            check=True,
            capture_output=True,
            text=True,
        )

        # Clear the importlib.metadata cache so it picks up newly installed packages
        if hasattr(importlib.metadata, '_cache'):
            importlib.metadata._cache.clear()

        # Also clear sys.meta_path caches if they exist
        for finder in sys.meta_path:
            if hasattr(finder, 'invalidate_caches'):
                finder.invalidate_caches()

        console.print("[green]✓[/green] Server installed successfully\n")
    except subprocess.CalledProcessError as e:
        console.print(
            f"❌ Failed to install server: {e.stderr}",
            style="bold red",
        )
        return

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

    docs_section = inquirer.select(
        message="Docs section:",
        choices=available_sections,
    ).execute()

    if not docs_section:
        console.print("❌ No section selected", style="bold red")
        return

    openai_api_key = os.environ.get("OPENAI_API_KEY")
    if not openai_api_key:
        openai_api_key = inquirer.secret(
            message="OpenAI API key:",
            validate=lambda x: len(x) > 0,
        ).execute()

    skip_tool_call_examples = not inquirer.confirm(
        message="Generate tool call examples in Python and JavaScript?",
        default=True,
    ).execute()

    max_concurrency = int(inquirer.number(
        message="Max concurrency for OpenAI API requests:",
        default=5,
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


def generate_mcp_server_docs(
    console: Console,
    toolkit_name: str,
    toolkit_dir: str,
    docs_section: str,
    docs_dir: str,
    openai_model: str,
    openai_api_key: str | None = None,
    tool_call_examples: bool = True,
    debug: bool = False,
    max_concurrency: int = 5,
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
    pip_package_name = read_toolkit_metadata(toolkit_dir)

    print_debug(f"Getting list of tools for {toolkit_name} from the local Python environment")
    tools = get_list_of_tools(toolkit_name)

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
    try:
        run()
    except KeyboardInterrupt:
        console.print("\n\n❌ Cancelled by user", style="bold red")
        sys.exit(1)
