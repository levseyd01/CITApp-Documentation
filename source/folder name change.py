import os


def rename_files(path):
    """
    Rename files in the given path by replacing spaces with underscores.

    Parameters:
    - path: A string specifying the path where the files are located.

    Returns:
    - A list of tuples containing the original and new names of renamed files.
    """
    renamed_files = []

    # Check each item in the specified directory
    for item in os.listdir(path):
        item_path = os.path.join(path, item)

        # Check if the item is a file and its name contains spaces
        if os.path.isfile(item_path) and ' ' in item:
            new_name = item.replace(' ', '_')
            new_path = os.path.join(path, new_name)

            # Rename the file
            os.rename(item_path, new_path)
            renamed_files.append((item, new_name))

    return renamed_files

# Example usage (commented out to prevent execution):
print(rename_files('Shareholder_Services'))

# Note: Replace '/path/to/directory' with the actual path where you want to rename files.
