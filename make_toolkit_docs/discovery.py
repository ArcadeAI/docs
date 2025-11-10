"""Directory discovery logic for finding toolkits and servers."""

import logging
from pathlib import Path

from rich.console import Console


def find_tool_files_recursive(search_path: Path, depth: int = 0, max_depth: int = 3) -> list[Path]:
    """Recursively find Python files up to max_depth.

    Args:
        search_path: The directory to search in.
        depth: Current recursion depth.
        max_depth: Maximum recursion depth.

    Returns:
        List of Python file paths found.
    """
    tool_files_found = []

    if depth > max_depth:
        return tool_files_found

    try:
        for item in search_path.iterdir():
            if item.name.startswith(".") or item.name in {"__pycache__", "venv", ".venv"}:
                continue

            if item.is_file() and item.suffix == ".py":
                tool_files_found.append(item)
            elif item.is_dir():
                tool_files_found.extend(find_tool_files_recursive(item, depth + 1, max_depth))
    except (PermissionError, OSError):
        pass

    return tool_files_found


def validate_toolkits_directory(directory: Path, analyze_files_for_tools) -> bool:
    """Check if a directory contains valid toolkits with tools.

    Args:
        directory: The directory to validate.
        analyze_files_for_tools: Function from arcade_core.discovery to analyze files.

    Returns:
        True if the directory contains valid toolkits, False otherwise.
    """
    try:
        for toolkit_subdir in directory.iterdir():
            if not toolkit_subdir.is_dir() or toolkit_subdir.name.startswith("."):
                continue

            tool_files = find_tool_files_recursive(toolkit_subdir)
            if tool_files and analyze_files_for_tools(tool_files):
                return True
    except (PermissionError, OSError):
        pass

    return False


def find_toolkits_directories(console: Console, max_depth: int = 5) -> list[str]:
    """Scan the filesystem starting from home directory to find 'toolkits' directories
    and 'starter-tools/servers' directories.

    Uses arcade_core.discovery to validate that directories contain actual tools.

    Args:
        console: Rich console for output.
        max_depth: Maximum depth to search (default: 5 levels from home).

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

    def walk_directory(path: Path, current_depth: int):
        if current_depth > max_depth:
            return

        try:
            for entry in path.iterdir():
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
                    # Check for 'toolkits' directories
                    if entry.name.lower() == "toolkits":
                        if validate_toolkits_directory(entry, analyze_files_for_tools):
                            candidates.append(str(entry))
                            console.print(f"  ✓ Found: {entry}", style="green")
                    # Check for 'starter-tools/servers' pattern
                    elif entry.name.lower() == "starter-tools":
                        servers_path = entry / "servers"
                        if servers_path.exists() and servers_path.is_dir():
                            if validate_toolkits_directory(servers_path, analyze_files_for_tools):
                                candidates.append(str(servers_path))
                                console.print(f"  ✓ Found: {servers_path}", style="green")
                    else:
                        walk_directory(entry, current_depth + 1)
        except (PermissionError, OSError):
            pass

    walk_directory(home, 1)

    return candidates
