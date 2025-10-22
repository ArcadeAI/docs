import asyncio
import os
import subprocess
from functools import partial

import openai
from InquirerPy import inquirer
from rich.console import Console

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


def run() -> None:
    """Interactive command to generate documentation for a server."""
    console.print("\n[bold cyan]📚 Arcade Documentation Generator[/bold cyan]\n")

    server_name = inquirer.text(
        message="Server name:",
        validate=lambda x: len(x) > 0,
    ).execute()

    server_dir = inquirer.filepath(
        message="Server directory path:",
        validate=lambda x: os.path.isdir(x),
        only_directories=True,
    ).execute()

    # Install the server package in editable mode using uv pip with --python flag
    console.print(f"\n[cyan]Installing server from {server_dir}...[/cyan]")
    try:
        import sys
        # Use uv pip with --python to target the current virtual environment
        subprocess.run(
            ["uv", "pip", "install", "--python", sys.executable, "-e", server_dir],
            check=True,
            capture_output=True,
            text=True,
        )
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
    run()
