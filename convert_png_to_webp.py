#!/usr/bin/env python
"""
A script to convert all JPEG images in a specified directory (default: source/_static/solo_app) to WebP format.

Usage: python convert_png_to_webp.py [directory]
If no directory is provided, it defaults to 'source/_static/solo_app'.

Requirements:
    pip install pillow
"""

import os
import sys
from PIL import Image


def convert_png_to_webp(directory):
    """Convert all JPEG images in the given directory (and subdirectories) to WebP format."""
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
    # Default directory is 'source/_static/solo_app' but can be overridden by command line argument
    directory = sys.argv[1] if len(sys.argv) > 1 else os.path.join('source', '_static', 'solo_app')
    if not os.path.isdir(directory):
        print(f"Directory not found: {directory}")
        sys.exit(1)
    convert_png_to_webp(directory)
