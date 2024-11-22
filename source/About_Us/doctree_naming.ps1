# Define the path to the "sections" folder
$folderPath = "sections"

# Get all files in the folder
$files = Get-ChildItem -Path $folderPath

# Iterate through each file and append the file name to "sections/"
foreach ($file in $files) {
    $filePath = "sections/$($file.Name)"
    Write-Output $filePath
}
