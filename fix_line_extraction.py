#!/usr/bin/env python3
"""
Script to fix line extraction vs highlighting.
- {1-3} = highlight lines 1-3 in full file (Nextra syntax)
- #L1-L3 = show only lines 1-3 from file (extract specific lines)
"""

import os
import re
import glob
from pathlib import Path


def read_file_content(file_path, line_range=None):
    """Read file content, optionally with line range."""
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()

        if line_range:
            start, end = line_range
            return "".join(lines[start - 1 : end])
        else:
            return "".join(lines)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None


def extract_file_reference(match_text):
    """Extract file path and line range from file= reference."""
    full_match = match_text

    # Extract file path
    file_match = re.search(r"file=<rootDir>/([^#\s]+)", full_match)
    if not file_match:
        return None

    file_path = file_match.group(1)

    # Extract line range if present (e.g., #L1-L3)
    line_range = None
    line_match = re.search(r"#L(\d+)-L(\d+)", full_match)
    if line_match:
        start_line = int(line_match.group(1))
        end_line = int(line_match.group(2))
        line_range = (start_line, end_line)

    # Extract specific lines if present (e.g., {3-5,7-9})
    specific_lines = None
    specific_match = re.search(r"\{([^}]+)\}", full_match)
    if specific_match:
        specific_lines = specific_match.group(1)

    return {
        "file_path": file_path,
        "line_range": line_range,
        "specific_lines": specific_lines,
        "full_match": full_match,
    }


def convert_to_nextra_syntax(ref_info):
    """Convert file reference to Nextra syntax with proper line handling."""
    # Extract language from the code block
    lang_match = re.search(r"```([a-zA-Z]*)", ref_info["full_match"])
    language = lang_match.group(1) if lang_match else ""

    # Construct full path to example file
    example_path = os.path.join(
        "/Users/sdserranog/Downloads/Team/docs", ref_info["file_path"]
    )

    if not os.path.exists(example_path):
        print(f"Warning: Example file not found: {example_path}")
        return ref_info["full_match"]  # Return original if file not found

    # Handle different cases:
    # 1. #L1-L3 = extract only those lines
    # 2. {1-3} = highlight those lines in full file

    if ref_info["line_range"]:
        # Case 1: #L1-L3 - extract only those lines
        file_content = read_file_content(example_path, ref_info["line_range"])
        if not file_content:
            return ref_info["full_match"]
        return f"```{language}\n{file_content.rstrip()}\n```"

    elif ref_info["specific_lines"]:
        # Case 2: {1-3} - highlight those lines in full file
        file_content = read_file_content(example_path)
        if not file_content:
            return ref_info["full_match"]
        return f"```{language} {{{ref_info['specific_lines']}}}\n{file_content.rstrip()}\n```"

    else:
        # Case 3: No line specification - show full file
        file_content = read_file_content(example_path)
        if not file_content:
            return ref_info["full_match"]
        return f"```{language}\n{file_content.rstrip()}\n```"


def process_mdx_file(mdx_path):
    """Process a single MDX file to convert file= references to Nextra syntax."""
    print(f"Processing {mdx_path}")

    try:
        with open(mdx_path, "r", encoding="utf-8") as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {mdx_path}: {e}")
        return False

    # Find all file= references
    pattern = r"```[a-zA-Z]*\s+file=<rootDir>/[^`]+```"
    matches = list(re.finditer(pattern, content))

    if not matches:
        return True

    # Process matches in reverse order to maintain line numbers
    for match in reversed(matches):
        ref_info = extract_file_reference(match.group(0))
        if not ref_info:
            continue

        # Convert to Nextra syntax
        new_code_block = convert_to_nextra_syntax(ref_info)

        # Replace in content
        content = content[: match.start()] + new_code_block + content[match.end() :]

    # Write back to file
    try:
        with open(mdx_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Successfully processed {mdx_path}")
        return True
    except Exception as e:
        print(f"Error writing {mdx_path}: {e}")
        return False


def main():
    """Main function to process all MDX files."""
    # Find all MDX files that contain file= references
    mdx_files = []

    # Search for files with file= references
    for root, dirs, files in os.walk("/Users/sdserranog/Downloads/Team/docs"):
        for file in files:
            if file.endswith(".mdx"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                        if "file=<rootDir>/examples/" in content:
                            mdx_files.append(file_path)
                except:
                    continue

    print(f"Found {len(mdx_files)} MDX files with file= references")

    # Process each file
    success_count = 0
    for mdx_file in mdx_files:
        if process_mdx_file(mdx_file):
            success_count += 1

    print(f"Successfully processed {success_count}/{len(mdx_files)} files")


if __name__ == "__main__":
    main()
