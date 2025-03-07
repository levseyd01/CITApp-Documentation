#!/usr/bin/env python
"""
A simple test script to update image references in a single markdown file.
This will convert figure and lazyfigure references from .png, .jpg, or .jpeg to .webp.

Usage: python test_update_single_file.py [file_path]
"""

import os
import sys
import re

def update_image_references_in_file(file_path):
    """Update figure and lazyfigure image references in a single file to use .webp extension."""
    print(f"Processing file: {file_path}")
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if this file contains any potential matches
        if ('```{figure}' in content or '```{lazyfigure}' in content) and \
           ('.png' in content.lower() or '.jpg' in content.lower() or '.jpeg' in content.lower()):
            print(f"Found potential image references")
            
            # Regex pattern to match figure and lazyfigure directives
            pattern = r'```\{(figure|lazyfigure)\}\s+(.*?)(\.(?:png|jpe?g))'
            replacement = r'```{\1} \2.webp'
            
            # Find all matches
            matches = re.findall(pattern, content, flags=re.IGNORECASE)
            if matches:
                print(f"Found {len(matches)} matches:")
                for match in matches:
                    print(f"  - Directive: {match[0]}, Path: {match[1]}, Extension: {match[2]}")
                
                # Perform the substitution
                new_content = re.sub(pattern, replacement, content, flags=re.IGNORECASE)
                
                if new_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated image references in the file")
                    return True
                else:
                    print("No changes were made (regex didn't match)")
            else:
                print("No matches found using regex")
        else:
            print("No potential image references found in the file")
    
    except Exception as e:
        print(f"Error processing file: {e}")
    
    return False

if __name__ == "__main__":
    print("Script started!")
    
    # Get the file path from command line or use default
    default_file_path = r"c:\Users\levse_72sr8bn\OneDrive\Work_Desktop\Documentation\CITApp-Documentation-Nondev\CITApp-Documentation\source\Dashboard\dashboard.md"
    file_path = sys.argv[1] if len(sys.argv) > 1 else default_file_path
    
    if not os.path.isfile(file_path):
        print(f"File not found: {file_path}")
        sys.exit(1)
    
    result = update_image_references_in_file(file_path)
    print(f"Result: {'Updated' if result else 'No updates needed'}")
    print("Script finished!")
