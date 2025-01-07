import os

# Specify the directory where the .png files are located
directory = ".."

# Walk through all files in the directory and subdirectories
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".png"):
            file_path = os.path.join(root, file)
            try:
                os.remove(file_path)
                print(f"Deleted: {file_path}")
            except Exception as e:
                print(f"Error deleting {file_path}: {e}")
