import importlib
import inspect
import logging
import os
import re
import sys
from enum import Enum
from pathlib import Path
from types import ModuleType
from typing import Optional

if sys.version_info >= (3, 11):
    import tomllib
else:
    tomllib = None

from arcade_core.auth import AuthProviderType
from arcade_core.catalog import ToolCatalog
from arcade_core.schema import ToolDefinition, ToolRequirements
from rich.console import Console

from arcade_cli.utils import discover_toolkits


def print_debug_func(debug: bool, console: Console, message: str, style: str = "dim") -> None:
    if not debug:
        return
    console.print(message, style=style)


def standardize_dir_path(dir_path: str) -> str:
    dir_path = dir_path.rstrip("/") + "/"
    return os.path.expanduser(dir_path)


def resolve_api_key(cli_input_value: str | None, env_var_name: str) -> str | None:
    if cli_input_value:
        return cli_input_value
    elif os.getenv(env_var_name):
        return os.getenv(env_var_name)
    else:
        return None


def write_file(path: str, content: str) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)


def read_toolkit_metadata(toolkit_dir: str) -> tuple[str, str]:
    """Read toolkit metadata from pyproject.toml.
    
    Returns:
        Tuple of (package_name, toolkit_name) where toolkit_name is from entry points.
    """
    pyproject_path = os.path.join(toolkit_dir, "pyproject.toml")

    if tomllib is not None:
        with open(pyproject_path, "rb") as f:
            data = tomllib.load(f)
            package_name = None
            toolkit_name = None
            
            if "project" in data and "name" in data["project"]:
                package_name = data["project"]["name"]
            
            # Try to get toolkit name from entry points
            if "project" in data and "entry-points" in data["project"]:
                entry_points = data["project"]["entry-points"]
                if "arcade_toolkits" in entry_points:
                    toolkit_name = entry_points["arcade_toolkits"].get("toolkit_name")
            
            if package_name:
                return (package_name, toolkit_name or package_name)
    else:
        # Fallback to regex for Python < 3.11
        with open(pyproject_path) as f:
            content = f.read()
            package_name = None
            toolkit_name = None
            
            # Get package name
            project_section_match = re.search(r"\[project\](.*?)(?=\n\[|$)", content, re.DOTALL)
            if project_section_match:
                project_content = project_section_match.group(1)
                name_match = re.search(r'name\s*=\s*["\']([^"\']+)["\']', project_content)
                if name_match:
                    package_name = name_match.group(1).strip()
            
            # Try to get toolkit name from entry points
            entry_points_match = re.search(r'\[project\.entry-points\.arcade_toolkits\](.*?)(?=\n\[|$)', content, re.DOTALL)
            if entry_points_match:
                entry_points_content = entry_points_match.group(1)
                toolkit_name_match = re.search(r'toolkit_name\s*=\s*["\']([^"\']+)["\']', entry_points_content)
                if toolkit_name_match:
                    toolkit_name = toolkit_name_match.group(1).strip()
            
            if package_name:
                return (package_name, toolkit_name or package_name)

    raise ValueError(f"Could not find package name in '{pyproject_path}'")


def pascal_to_snake_case(text: str) -> str:
    return re.sub(r"(?<!^)(?=[A-Z])", "_", text).lower()


def get_list_of_tools(toolkit_name: str, toolkit_dir: Optional[str] = None) -> list[ToolDefinition]:
    """Get list of tools for a toolkit.
    
    Args:
        toolkit_name: Name of the toolkit to load tools for.
        toolkit_dir: Optional directory path to the toolkit. If provided and entry point
                     discovery fails, will try to load tools directly from source.
    """
    tools = []
    toolkits = discover_toolkits()

    for toolkit in toolkits:
        if toolkit.name.casefold() == toolkit_name.casefold():
            for module_name, module_tools in toolkit.tools.items():
                try:
                    module = importlib.import_module(module_name)
                    for tool_name in module_tools:
                        try:
                            tool_func = getattr(module, tool_name)
                            tool = ToolCatalog.create_tool_definition(
                                tool_func, toolkit.name, toolkit.version, toolkit.description
                            )
                            tools.append(tool)
                        except Exception as e:
                            # Skip individual tool errors but continue with others
                            logging.warning(f"Failed to load tool '{tool_name}' from '{module_name}': {e}")
                            continue
                except Exception as e:
                    # Skip module import errors but continue with other modules
                    logging.warning(f"Failed to import module '{module_name}' for toolkit '{toolkit_name}': {e}")
                    continue

    # If no tools found and toolkit_dir is provided, try loading directly from source
    if not tools and toolkit_dir:
        try:
            from arcade_core.discovery import analyze_files_for_tools
            
            toolkit_path = Path(toolkit_dir)
            # Find all Python files with @tool decorator, excluding template files and venv
            tool_files = []
            exclude_dirs = {".venv", "venv", "__pycache__", ".git", "node_modules"}
            exclude_patterns = ["{{", "template", "eval_"]
            
            for py_file in toolkit_path.rglob("*.py"):
                # Skip files in excluded directories
                if any(excluded in str(py_file) for excluded in exclude_dirs):
                    continue
                
                # Skip template files
                if any(pattern in py_file.name for pattern in exclude_patterns):
                    continue
                
                try:
                    content = py_file.read_text(encoding="utf-8")
                    # Skip files with template syntax
                    if "{{" in content or "}}" in content:
                        continue
                    if "@tool" in content:
                        tool_files.append(py_file)
                except Exception:
                    continue
            
            if tool_files:
                # Filter to only files in the actual package directory (not in .venv or site-packages)
                package_tool_files = [
                    f for f in tool_files 
                    if ".venv" not in str(f) and "site-packages" not in str(f)
                ]
                
                if package_tool_files:
                    try:
                        if analyze_files_for_tools(package_tool_files):
                            # Add toolkit directory to sys.path temporarily
                            toolkit_parent = str(toolkit_path.parent)
                            if toolkit_parent not in sys.path:
                                sys.path.insert(0, toolkit_parent)
                            
                            # Try to reload toolkit discovery after adding to path
                            logging.info(f"Found tools in source files, retrying toolkit discovery for {toolkit_name}")
                            # Force a reload of the toolkit discovery
                            if 'arcade_cli.utils' in sys.modules:
                                importlib.reload(sys.modules['arcade_cli.utils'])
                            
                            # Try discovery again
                            toolkits = discover_toolkits()
                            for toolkit in toolkits:
                                if toolkit.name.casefold() == toolkit_name.casefold():
                                    for module_name, module_tools in toolkit.tools.items():
                                        try:
                                            module = importlib.import_module(module_name)
                                            for tool_name in module_tools:
                                                try:
                                                    tool_func = getattr(module, tool_name)
                                                    tool = ToolCatalog.create_tool_definition(
                                                        tool_func, toolkit.name, toolkit.version, toolkit.description
                                                    )
                                                    tools.append(tool)
                                                except Exception as e:
                                                    logging.warning(f"Failed to load tool '{tool_name}' from '{module_name}': {e}")
                                                    continue
                                        except Exception as e:
                                            logging.warning(f"Failed to import module '{module_name}' for toolkit '{toolkit_name}': {e}")
                                            continue
                    except Exception as e:
                        logging.warning(f"Failed to analyze files for tools: {e}")
        except Exception as e:
            logging.warning(f"Failed to load tools directly from source: {e}")

    if not tools:
        raise ValueError(
            f"Tools not found for the toolkit '{toolkit_name}'. Make sure to have the toolkit "
            "installed in your current Python environment."
        )

    return tools


def get_all_enumerations(toolkit_root_dir: str) -> dict[str, type[Enum]]:
    enums = {}
    toolkit_path = Path(toolkit_root_dir)

    # Get the toolkit package name from the directory
    # Prefer directories that start with "arcade_" or match common patterns
    toolkit_package_name = None
    candidate_packages = []

    for item in toolkit_path.iterdir():
        if item.is_dir() and not item.name.startswith(".") and (item / "__init__.py").exists():
            # Skip common non-toolkit directories
            if item.name in ["tests", "test", "docs", "examples", "scripts"]:
                continue
            candidate_packages.append(item.name)

    # Prefer packages starting with "arcade_" or the toolkit name
    for pkg in candidate_packages:
        if pkg.startswith("arcade_"):
            toolkit_package_name = pkg
            break

    # If no arcade_ package found, use the first candidate
    if not toolkit_package_name and candidate_packages:
        toolkit_package_name = candidate_packages[0]

    if not toolkit_package_name:
        return enums

    # Add toolkit root to sys.path temporarily to enable proper imports
    toolkit_root_str = str(toolkit_path.resolve())
    if toolkit_root_str not in sys.path:
        sys.path.insert(0, toolkit_root_str)

    try:
        for py_file in toolkit_path.rglob("*.py"):
            if ".venv" in py_file.parts or "venv" in py_file.parts:
                continue

            # Build the module path relative to the toolkit package
            try:
                rel_path = py_file.relative_to(toolkit_path)
                parts = list(rel_path.parts)

                # Skip if not inside the toolkit package
                if not parts or parts[0] != toolkit_package_name:
                    continue

                # Convert file path to module name
                if parts[-1] == "__init__.py":
                    module_path_parts = parts[:-1]
                else:
                    module_path_parts = parts[:-1] + [py_file.stem]

                if not module_path_parts:
                    continue

                module_name = ".".join(module_path_parts)

                # Import the module properly
                module = importlib.import_module(module_name)

                for name, obj in inspect.getmembers(module):
                    if (
                        name not in enums
                        and inspect.isclass(obj)
                        and issubclass(obj, Enum)
                        and obj is not Enum
                    ):
                        enums[name] = obj
            except (ImportError, ValueError, AttributeError):
                # Skip modules that can't be imported
                continue
    finally:
        # Remove toolkit root from sys.path
        if toolkit_root_str in sys.path:
            sys.path.remove(toolkit_root_str)

    return enums


def get_toolkit_auth_type(tool_req: ToolRequirements | None) -> str:
    if tool_req.authorization:
        if tool_req.authorization.provider_type == AuthProviderType.oauth2.value:
            return 'authType="OAuth2"'
        else:
            return f'authType="{tool_req.authorization.provider_type}"'
    elif tool_req.secrets:
        return 'authType="API Key"'
    return 'authType="None"'


def find_enum_by_options(
    enums: dict[str, type[Enum]], options: list[str]
) -> tuple[str, type[Enum]]:
    options_set = set(options)
    for enum_name, enum_class in enums.items():
        enum_member_values = [member.value for member in enum_class]
        if set(enum_member_values) == options_set:
            return enum_name, enum_class
    raise ValueError(f"No enum found for options: {options_set}")


def is_well_known_provider(
    provider_id: str | None,
    auth_module: ModuleType,
) -> bool:
    if provider_id is None:
        return False

    for _, obj in inspect.getmembers(auth_module, inspect.isclass):
        if not issubclass(obj, auth_module.OAuth2) or obj is auth_module.OAuth2:
            continue
        try:
            instance = obj()
        except AttributeError:
            continue
        provider_id_matches = (
            hasattr(instance, "provider_id") and instance.provider_id == provider_id
        )
        if provider_id_matches:
            return True

    return False


def clean_fully_qualified_name(fully_qualified_name: str) -> str:
    return fully_qualified_name.split("@")[0]


def has_wrapper_tools_directory(toolkit_package_path: str) -> bool:
    has_dir = os.path.exists(os.path.join(toolkit_package_path, "wrapper_tools"))
    if has_dir:
        return True

    # Check one level deep
    for dir_name in os.listdir(toolkit_package_path):
        if os.path.exists(os.path.join(toolkit_package_path, dir_name, "wrapper_tools")):
            return True

    return False


def find_pyproject_toml(toolkit_package_path: str) -> str:
    for root, _, files in os.walk(toolkit_package_path):
        for file in files:
            if file == "pyproject.toml":
                return os.path.join(root, file)

    raise ValueError(f"No pyproject.toml found in {toolkit_package_path}")


def get_pyproject_description(pyproject_path: str) -> str:
    if tomllib is not None:
        with open(pyproject_path, "rb") as f:
            data = tomllib.load(f)
            if "project" in data and "description" in data["project"]:
                return data["project"]["description"]
    else:
        # Fallback to regex for Python < 3.11
        with open(pyproject_path) as f:
            content = f.read()
            project_section_match = re.search(r"\[project\](.*?)(?=\n\[|$)", content, re.DOTALL)
            if project_section_match:
                project_content = project_section_match.group(1)
                description_match = re.search(
                    r'description\s*=\s*["\']([^"\']+)["\']', project_content
                )
                if description_match:
                    return description_match.group(1).strip()

    raise ValueError(f"Could not find description in '{pyproject_path}'")
