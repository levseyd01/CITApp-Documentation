from PIL import Image
import os

def convert_png_to_jpeg(directory, recursive=True):
    """
    Converts all PNG files in the specified directory (and optionally subdirectories) to JPEG.

    Args:
        directory (str): The root directory to search for PNG files.
        recursive (bool): Whether to include subdirectories (default: True).
    """
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.png'):
                png_path = os.path.join(root, file)
                jpeg_path = os.path.splitext(png_path)[0] + '.jpeg'

                try:
                    with Image.open(png_path) as img:
                        rgb_img = img.convert('RGB')  # Convert PNG to RGB for JPEG compatibility
                        rgb_img.save(jpeg_path, 'JPEG', quality=90)

                    print(f"Converted: {png_path} -> {jpeg_path}")

                except Exception as e:
                    print(f"Failed to convert {png_path}: {e}")

        if not recursive:
            break

if __name__ == "__main__":
    # Specify the directory containing PNG files
    directory_to_convert = ".."

    # Call the function
    convert_png_to_jpeg(directory_to_convert, recursive=True)
