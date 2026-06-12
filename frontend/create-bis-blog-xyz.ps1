# Creates BISCertificationforXYZ.jsx from BISCertificationforCrossRecessedTappingScrew.jsx
# Run from frontend root: powershell -ExecutionPolicy Bypass -File .\create-bis-blog-xyz.ps1

$ErrorActionPreference = "Stop"

$sourceFile = Join-Path $PSScriptRoot "src\blogs\BISCertificationforCrossRecessedTappingScrew.jsx"
$oldName    = "BISCertificationforCrossRecessedTappingScrew"
$newName    = "BISCertificationforCycleandRickshawPneumaticTyresIs2414"
$destFile   = Join-Path $PSScriptRoot "src\blogs\$newName.jsx"

if (-not (Test-Path $sourceFile)) {
    Write-Error "Source file not found: $sourceFile"
    exit 1
}

if (Test-Path $destFile) {
    Write-Error "Destination already exists: $destFile`nDelete it first or rename before running again."
    exit 1
}

$response = Read-Host "Create $newName.jsx from template? (y/n)"
if ($response -notmatch '^[yY]') {
    Write-Host "Cancelled."
    exit 0
}

Copy-Item $sourceFile $destFile

$content = Get-Content $destFile -Raw -Encoding UTF8
$content = $content.Replace($oldName, $newName)
[System.IO.File]::WriteAllText($destFile, $content, [System.Text.UTF8Encoding]::new($false))

Write-Host ""
Write-Host "Done: $destFile"
Write-Host "Component renamed: $oldName -> $newName"
Write-Host "Blog content unchanged (same as source)."
