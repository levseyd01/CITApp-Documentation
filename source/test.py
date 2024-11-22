import os

# Define the path to the directory containing the files you want to rename
directory_path = 'About_Us'

# List of new file names
new_names = [
    "Index",
    "About Us",
    "Company News",
    "Our Clients",
    "Join Our Team",
    "Professional Partners",
    "Terms of Service",
    "Copyright",
    "Privacy",
]
print("length of new names", len(new_names))
# Append ".rst" to each name in the list
new_names = [name + ".rst" for name in new_names]

# Get a list of files in the directory
files = os.listdir(directory_path)

print("len(files)",len(files))
# Check if the number of files matches the number of new names
if len(files) != len(new_names):
    print("The number of files does not match the number of new names provided.")
else:
    # Iterate over the files and rename them sequentially
    for file, new_name in zip(sorted(files), new_names):

       try:
           os.rename(os.path.join(directory_path, file), os.path.join(directory_path, new_name))

       except FileExistsError:
           print(f"File {new_name} already exists.")
           continue
         #   print(f"File {file} is already named correctly.")



    print("Files have been renamed successfully.")
