#!/usr/bin/env python
"""
A script to update image references in documentation markdown files.

This script searches for markdown files (with .md extension) in the given directory (default: source) and updates
any image reference in a figure block from .png, .jpg, or .jpeg to .webp. For example, it will change:

```{figure} ../../_static/solo_app/User/User-Detail/accounts-tab-column-names.jpeg
:width: 100%
:align: center
:name: user-user-accounts-tab-column-names

User, User Homepage, Accounts Tab, Column Names
```

into:

```{figure} ../../_static/solo_app/User/User-Detail/accounts-tab-column-names.webp
:width: 100%
:align: center
:name: user-user-accounts-tab-column-names

User, User Homepage, Accounts Tab, Column Names
```

Usage: python update_image_references.py [directory]
If no directory is provided, it defaults to 'source'.
"""

import os
import sys
import re


def update_image_references(directory):
    """Search for markdown files in the specified directory and update figure image references to use .webp extension."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.md'):
                full_path = os.path.join(root, file)
                try:
                    with open(full_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    # Regex pattern to match a line starting with ```{figure} followed by whitespace and then a file path
                    # that ends with .png, .jpg, or .jpeg. We use a positive lookahead to ensure we match the extension.
                    new_content = re.sub(r'(```\{figure\}\s+.*?)(\.(?:png|jpe?g))(?=\s)', r'\1.webp', content, flags=re.IGNORECASE)
                    if new_content != content:
                        with open(full_path, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated image reference in: {full_path}")
                except Exception as e:
                    print(f"Error processing {full_path}: {e}")


if __name__ == "__main__":
    # Default directory is 'source' but can be overridden by command line argument
    directory = sys.argv[1] if len(sys.argv) > 1 else os.path.join('source')
    if not os.path.isdir(directory):
        print(f"Directory not found: {directory}")
        sys.exit(1)
    update_image_references(directory)
