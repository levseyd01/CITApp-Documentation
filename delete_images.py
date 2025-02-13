#!/usr/bin/env python
"""
A script to delete all images with extensions .png, .jpg, or .jpeg in a specified directory.

Usage: python delete_images.py [directory]
If no directory is provided, it defaults to 'source/_static/solo_app'.
"""

import os
import sys


def delete_images(directory):
    """Delete all images in the given directory (and subdirectories) with extensions .png, .jpg, or .jpeg."""
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                full_path = os.path.join(root, file)
                try:
                    os.remove(full_path)
                    print(f"Deleted {full_path}")
                except Exception as e:
                    print(f"Error deleting {full_path}: {e}")


if __name__ == "__main__":
    # Default directory is 'source/_static/solo_app' unless overridden
    directory = sys.argv[1] if len(sys.argv) > 1 else os.path.join('source', '_static', 'solo_app')
    if not os.path.isdir(directory):
        print(f"Directory not found: {directory}")
        sys.exit(1)
    delete_images(directory)
