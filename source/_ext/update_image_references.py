#!/usr/bin/env python
"""
A script to update image references in documentation markdown files.

This script searches for markdown files (with .md extension) in the given directory (default: source) and updates
any image reference in a figure or lazyfigure block from .png, .jpg, or .jpeg to .webp. For example, it will change:

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

And similarly for lazyfigure:

```{lazyfigure} ../../_static/solo_app/Universal/file-explorer-filename-png.jpeg
:width: 400px
:align: center
:name: file-explorer-filename-png

File Explorer, File Name Selected
```

into:

```{lazyfigure} ../../_static/solo_app/Universal/file-explorer-filename-png.webp
:width: 400px
:align: center
:name: file-explorer-filename-png

File Explorer, File Name Selected
```

Usage: python update_image_references.py [directory]
If no directory is provided, it defaults to the parent directory of the script (which is the 'source' directory).
"""

import os
import sys
import re


def update_image_references(directory):
    """Search for markdown files in the specified directory and update figure and lazyfigure image references to use .webp extension."""
    total_files = 0
    total_updated = 0
    
    print(f"Starting update_image_references function...")
    print(f"Searching for markdown files in: {directory}")
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.md'):
                total_files += 1
                full_path = os.path.join(root, file)
                
                # Print every 10 files to avoid excessive output
                if total_files % 10 == 0:
                    print(f"Processing file #{total_files}: {full_path}")
                
                try:
                    with open(full_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Check if this file contains any potential matches before doing regex
                    if '```{figure}' in content or '```{lazyfigure}' in content:
                        # Look for PNG, JPG, or JPEG in the file content
                        if '.png' in content.lower() or '.jpg' in content.lower() or '.jpeg' in content.lower():
                            print(f"Found potential image references in: {full_path}")
                            
                            # Regex pattern to match a line starting with ```{figure} or ```{lazyfigure} followed by whitespace
                            # and then a file path that ends with .png, .jpg, or .jpeg.
                            # We're explicit about capturing the directive, path, and extension
                            pattern = r'```\{(figure|lazyfigure)\}\s+(.*?)(\.(?:png|jpe?g))'
                            replacement = r'```{\1} \2.webp'
                            
                            # Count matches before substitution
                            matches = re.findall(pattern, content, flags=re.IGNORECASE)
                            if matches:
                                print(f"Found {len(matches)} matches in {full_path}")
                                for match in matches:
                                    print(f"  - Directive: {match[0]}, Path: {match[1]}, Extension: {match[2]}")
                            
                            new_content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
                            
                            if new_content != content:
                                total_updated += 1
                                with open(full_path, 'w', encoding='utf-8') as f:
                                    f.write(new_content)
                                print(f"Updated image reference in: {full_path}")
                except Exception as e:
                    print(f"Error processing {full_path}: {e}")
    
    print(f"\nSummary:")
    print(f"Total markdown files processed: {total_files}")
    print(f"Files with updated references: {total_updated}")
    
    if total_updated == 0:
        print("\nNo files were updated. This could be because:")
        print("- All image references are already using .webp extension")
        print("- No matching figure/lazyfigure directives were found")
        print("- The image references don't match the expected pattern")
        print("\nTo debug, check a few markdown files manually to verify the format of your image references.")


if __name__ == "__main__":
    print("Script started!")
    
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Default directory is the parent directory of the script (which is the 'source' directory)
    default_source_dir = os.path.normpath(os.path.join(script_dir, '..'))
    
    # Allow directory override via command line argument
    directory = sys.argv[1] if len(sys.argv) > 1 else default_source_dir
    
    print(f"Script directory: {script_dir}")
    print(f"Target directory: {directory}")
    
    if not os.path.isdir(directory):
        print(f"Directory not found: {directory}")
        sys.exit(1)
    
    print(f"Processing markdown files in: {directory}")
    update_image_references(directory)
    
    print("Script finished!")
