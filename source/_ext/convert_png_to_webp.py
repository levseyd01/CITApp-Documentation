#!/usr/bin/env python
"""
A script to convert all PNG and JPEG images in the _static directory to WebP format.

Usage: python convert_png_to_webp.py [directory]
If no directory is provided, it defaults to the _static directory relative to the script's location.

Requirements:
    pip install pillow
"""

import os
import sys
from PIL import Image


def convert_png_to_webp(directory):
    """Convert all PNG and JPEG images in the given directory (and subdirectories) to WebP format."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                full_path = os.path.join(root, file)
                try:
                    with Image.open(full_path) as im:
                        # Convert the image to WebP and save with the same name (but new extension)
                        new_file = os.path.splitext(full_path)[0] + '.webp'
                        im.save(new_file, 'WEBP')
                        print(f"Converted {full_path} to {new_file}")
                except Exception as e:
                    print(f"Error processing {full_path}: {e}")


if __name__ == "__main__":
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Default directory is '../_static' relative to the script location
    # This resolves to the _static folder from the _ext folder
    default_static_dir = os.path.normpath(os.path.join(script_dir, '..', '_static'))
    
    # Allow directory override via command line argument
    directory = sys.argv[1] if len(sys.argv) > 1 else default_static_dir
    
    if not os.path.isdir(directory):
        print(f"Directory not found: {directory}")
        sys.exit(1)
    
    print(f"Processing images in: {directory}")
    convert_png_to_webp(directory)
