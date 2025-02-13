#!/usr/bin/env python3
import os
import sys


def process_file(filepath):
    """Process a file to update admonition blocks.

    It looks for blocks starting with a line that starts with ":::::{admonition}"
    and then for a subsequent line (in that same block) starting with ":class:" and containing "dropdown".
    If it finds such a line and the very next non-empty line is not ":collapsible: closed", it will insert it.
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    changed = False
    output_lines = []
    in_admonition = False
    
    # Use index based loop to allow lookahead
    i = 0
    while i < len(lines):
        line = lines[i]
        stripped = line.lstrip()
        # Start of admonition block
        if stripped.startswith(":::::{admonition}"):
            in_admonition = True
            output_lines.append(line)
            i += 1
            continue
        
        if in_admonition and stripped.startswith(":class:") and "dropdown" in stripped:
            output_lines.append(line)
            # Look ahead to check if the next non-empty line is already ":collapsible: closed"
            j = i + 1
            already_present = False
            while j < len(lines):
                next_line = lines[j].strip()
                if next_line == "":
                    # blank line, skip over blanks
                    j += 1
                    continue
                elif next_line == ":collapsible: closed":
                    already_present = True
                break
            if not already_present:
                # Insert the new line if not present
                output_lines.append(":collapsible: closed\n")
                print(f"Inserted ':collapsible: closed' in {filepath} after line {i+1}")
                changed = True
            i += 1
            continue
        
        # If we are inside an admonition block and we hit an empty line, we assume it ended.
        if in_admonition and stripped == "":
            in_admonition = False
        
        output_lines.append(line)
        i += 1
    
    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(output_lines)
        print(f"Modified {filepath}")
    else:
        print(f"No changes needed for {filepath}")
    return changed


def process_directory(root_dir, file_extensions=('.md',)):
    """Walk recursively through root_dir, processing files with the given extensions."""
    for dirpath, dirnames, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(file_extensions):
                filepath = os.path.join(dirpath, filename)
                process_file(filepath)


def main():
    if len(sys.argv) < 2:
        root_dir = os.getcwd()
        print(f"No directory provided. Defaulting to current directory: {root_dir}")
    else:
        root_dir = sys.argv[1]
    process_directory(root_dir)


if __name__ == "__main__":
    main()
