#!/usr/bin/env python
"""
A script to replace MyST figure directives with lazyfigure directives throughout .md files.

This script searches for markdown files (with .md extension) in the given directory (default: 'source')
and replaces any instance of:

```{figure} ...

with

```{lazyfigure} ...

Usage:
    python update_figure_to_lazyfigure.py [directory]

If no directory is provided, it defaults to 'source'.
"""

import os
import sys
import re

def update_directives(directory):
    """Search for .md files and replace ```{figure} with ```{lazyfigure}."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.md'):
                full_path = os.path.join(root, file)
                try:
                    with open(full_path, 'r', encoding='utf-8') as f:
                        content = f.read()

                    # Simple approach: direct string replacement
                    # new_content = content.replace("```{figure}", "```{lazyfigure}")

                    # Alternatively, if you want to ensure we only catch lines that begin with
                    # ```{figure} and not random code blocks that might contain figure, use a regex:
                    new_content = re.sub(r"```{figure}(\s+)", r"```{lazyfigure}\1", content)

                    if new_content != content:
                        with open(full_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated figure directive in: {full_path}")
                except Exception as e:
                    print(f"Error processing {full_path}: {e}")

if __name__ == "__main__":
    # Default directory is 'source' but can be overridden by command line argument
    directory = sys.argv[1] if len(sys.argv) > 1 else 'source'

    if not os.path.isdir(directory):
        print(f"Directory not found: {directory}")
        sys.exit(1)

    update_directives(directory)