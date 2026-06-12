# Renames a blog image in public/blogImages/ to PascalCase (no spaces).
# Run from frontend root: powershell -ExecutionPolicy Bypass -File .\rename-blog-image.ps1
# Example: "BIS License for Cabinet Hinges.webp" -> "BISLicenseforCabinetHinges.webp"

$ErrorActionPreference = "Stop"

$sourceFileName = "BIS License for Cycle and Rickshaw Pneumatic Tyres.webp"
$destFileName   = "BISLicenseforCycleandRickshawPneumaticTyres.webp"

$imagesDir  = Join-Path $PSScriptRoot "public\blogImages"
$sourcePath = Join-Path $imagesDir $sourceFileName
$destPath   = Join-Path $imagesDir $destFileName

if (-not (Test-Path $sourcePath)) {
    Write-Error "Source image not found: $sourcePath"
    exit 1
}

if (Test-Path $destPath) {
    Write-Error "Destination already exists: $destPath`nDelete it first or choose a different name."
    exit 1
}

$response = Read-Host "Rename '$sourceFileName' to '$destFileName'? (y/n)"
if ($response -notmatch '^[yY]') {
    Write-Host "Cancelled."
    exit 0
}

Rename-Item -Path $sourcePath -NewName $destFileName

Write-Host ""
Write-Host "Done: $destPath"
