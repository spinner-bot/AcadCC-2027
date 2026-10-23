$ErrorActionPreference = "Stop"
$html = Join-Path $PSScriptRoot "..\docs\inquiry-portal.html"
if (-not (Test-Path -LiteralPath $html)) {
    throw "Inquiry portal not found: $html"
}
Start-Process -FilePath $html
