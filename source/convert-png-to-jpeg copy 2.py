#!/usr/bin/env python3
import os
import re
import sys

def replace_png_references(root_dir, file_extensions):
    """
    Recursively walk through 'root_dir' and replace all '.png' references
    with '.jpeg' in files whose extensions match 'file_extensions'.

    :param root_dir: The directory to walk through (e.g., current directory).
    :param file_extensions: A tuple of file extensions (e.g., ('.md',)).
    """
    # Pattern to match '.png' (word boundary so we don't catch partial matches like .png2)
    pattern = re.compile(r'\.png\b')

    for subdir, _, files in os.walk(root_dir):
        for filename in files:
            # Check if file ends with one of the given extensions
            if filename.lower().endswith(file_extensions):
                file_path = os.path.join(subdir, filename)

                # Read the file contents
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Replace '.png' with '.jpeg'
                new_content = pattern.sub('.jpeg', content)

                # Write changes back if any replacement was made
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated references in: {file_path}")

def main():
    root_dir = "."
    file_extensions = (".md",)

    # If arguments are provided, override defaults
    args = sys.argv[1:]
    if len(args) >= 2:
        root_dir = args[0]
        file_extensions = tuple(args[1:])

    replace_png_references(root_dir, file_extensions)

    

if __name__ == "__main__":
    main()
