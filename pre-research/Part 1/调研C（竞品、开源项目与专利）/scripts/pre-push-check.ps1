$ErrorActionPreference = "Stop"

$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Errors = [System.Collections.Generic.List[string]]::new()
$Warnings = [System.Collections.Generic.List[string]]::new()

function Add-Error([string]$Message) {
    $script:Errors.Add($Message)
}

function Add-Warning([string]$Message) {
    $script:Warnings.Add($Message)
}

function Get-RelativePath([string]$Base, [string]$Path) {
    $basePath = [System.IO.Path]::GetFullPath($Base).TrimEnd([char[]]@('\', '/'))
    $fullPath = [System.IO.Path]::GetFullPath($Path)
    if (-not $fullPath.StartsWith($basePath, [System.StringComparison]::OrdinalIgnoreCase)) {
        return $fullPath.Replace("\", "/")
    }
    return $fullPath.Substring($basePath.Length).TrimStart([char[]]@('\', '/')).Replace("\", "/")
}

$Required = @(
    ".gitignore",
    "README.md",
    "MANIFEST.json",
    "presentation/index.html",
    "presentation/styles.css",
    "presentation/app.js"
)
foreach ($relative in $Required) {
    if (-not (Test-Path -LiteralPath (Join-Path $Root $relative))) {
        Add-Error "Missing required file: $relative"
    }
}

$ReportDirectory = Join-Path $Root "report"
if (-not (Test-Path -LiteralPath $ReportDirectory)) {
    Add-Error "Missing required directory: report"
} else {
    $ReportFiles = @(Get-ChildItem -LiteralPath $ReportDirectory -File -ErrorAction SilentlyContinue)
    if (-not ($ReportFiles | Where-Object { $_.Extension -eq ".html" })) {
        Add-Error "Missing required report: report/*.html"
    }
    if (-not ($ReportFiles | Where-Object { $_.Extension -eq ".md" })) {
        Add-Error "Missing required report: report/*.md"
    }
}

$ForbiddenDirectories = @(
    ".git", ".codex-build", "node_modules", "__pycache__", ".pytest_cache",
    ".venv", "venv", "_preview", "qa"
)
$ForbiddenExtensions = @(
    ".ppt", ".pptx", ".doc", ".docx", ".xls", ".xlsx", ".pdf", ".zip",
    ".7z", ".rar", ".tmp", ".temp", ".log", ".ndjson", ".png", ".jpg",
    ".jpeg", ".gif", ".webp", ".bmp", ".tif", ".tiff", ".ico", ".mp4",
    ".mov", ".avi", ".mkv", ".mp3", ".wav", ".flac", ".exe", ".dll",
    ".so", ".dylib", ".bin", ".class", ".jar", ".wasm", ".ttf", ".otf",
    ".woff", ".woff2", ".eot", ".db", ".sqlite", ".sqlite3"
)
$ForbiddenNames = @(".DS_Store", "Thumbs.db", "Desktop.ini")
$AllowedExtensions = @(
    ".md", ".txt", ".html", ".css", ".js", ".json", ".csv", ".ps1", ".sh",
    ".bat", ".yml", ".yaml", ".xml", ".svg"
)
$AllowedNames = @(".gitignore")
$BinarySignatures = @(
    @{ Hex = "504b0304"; Label = "ZIP/OOXML" },
    @{ Hex = "25504446"; Label = "PDF" },
    @{ Hex = "d0cf11e0"; Label = "OLE Office" },
    @{ Hex = "89504e47"; Label = "PNG" },
    @{ Hex = "ffd8ff"; Label = "JPEG" },
    @{ Hex = "47494638"; Label = "GIF" },
    @{ Hex = "52494646"; Label = "RIFF" },
    @{ Hex = "7f454c46"; Label = "ELF" },
    @{ Hex = "4d5a"; Label = "Windows PE" }
)
$MaxFileBytes = 5MB

$Items = Get-ChildItem -LiteralPath $Root -Recurse -Force
foreach ($item in $Items) {
    $relative = Get-RelativePath $Root $item.FullName

    if (($item.Attributes -band [System.IO.FileAttributes]::ReparsePoint) -ne 0) {
        Add-Error "Symlink or junction is not allowed: $relative"
    }
    if ($item.PSIsContainer -and $ForbiddenDirectories -contains $item.Name) {
        Add-Error "Build or cache directory is not allowed: $relative"
    }
    if ($item.PSIsContainer) {
        continue
    }
    if ($ForbiddenExtensions -contains $item.Extension.ToLowerInvariant()) {
        Add-Error "Binary or temporary file is not allowed: $relative"
        continue
    }
    if ($ForbiddenNames -contains $item.Name -or $item.Name.StartsWith("~$")) {
        Add-Error "System or Office temporary file is not allowed: $relative"
    }
    if ($item.Length -gt $MaxFileBytes) {
        Add-Error ("File exceeds 5 MB: {0} ({1:N2} MB)" -f $relative, ($item.Length / 1MB))
    }

    $allowedByName = $AllowedNames -contains $item.Name
    $allowedByExtension = $AllowedExtensions -contains $item.Extension.ToLowerInvariant()
    if (-not $allowedByName -and -not $allowedByExtension) {
        Add-Error "Non-text format is not allowed: $relative"
        continue
    }

    $bytes = [System.IO.File]::ReadAllBytes($item.FullName)
    if ([Array]::IndexOf($bytes, [byte]0) -ne -1) {
        Add-Error "NUL byte found; file is binary: $relative"
        continue
    }
    $headerLength = [Math]::Min(4, $bytes.Length)
    $header = ($bytes[0..($headerLength - 1)] | ForEach-Object { $_.ToString("x2") }) -join ""
    foreach ($signature in $BinarySignatures) {
        if ($header.StartsWith($signature.Hex, [System.StringComparison]::OrdinalIgnoreCase)) {
            Add-Error "Binary signature $($signature.Label): $relative"
            break
        }
    }
    try {
        [void][System.Text.UTF8Encoding]::new($false, $true).GetString($bytes)
    } catch {
        Add-Error "File is not valid UTF-8 text: $relative"
    }
}

$TextExtensions = @(
    ".md", ".txt", ".html", ".css", ".js", ".json", ".csv", ".ps1", ".sh", ".bat", ".yml", ".yaml"
)
$SecretPatterns = @(
    "-----BEGIN (RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----",
    "ghp_[A-Za-z0-9]{36}",
    "github_pat_[A-Za-z0-9_]{20,}",
    "AKIA[0-9A-Z]{16}",
    "(?i)(password|passwd|pwd)\s*[:=]\s*['""]?[^\s'""]{6,}",
    "(?i)(api[_-]?key|secret|token)\s*[:=]\s*['""]?[A-Za-z0-9_\-]{12,}"
)
$SelfFiles = @(
    "scripts/pre-push-check.ps1",
    "scripts/pre-push-check.sh"
)

foreach ($file in $Items | Where-Object { -not $_.PSIsContainer }) {
    $relative = Get-RelativePath $Root $file.FullName
    if ($TextExtensions -notcontains $file.Extension.ToLowerInvariant()) {
        continue
    }
    if ($SelfFiles -contains $relative) {
        continue
    }
    $content = Get-Content -LiteralPath $file.FullName -Raw -ErrorAction Stop
    foreach ($pattern in $SecretPatterns) {
        if ($content -match $pattern) {
            Add-Error "Possible secret or credential: $relative"
            break
        }
    }
}

$FileCount = @($Items | Where-Object { -not $_.PSIsContainer }).Count
Write-Host "Root: $Root"
Write-Host "File count: $FileCount"
Write-Host ".gitignore: $(if (Test-Path -LiteralPath (Join-Path $Root '.gitignore')) { 'OK' } else { 'MISSING' })"

foreach ($warning in $Warnings) {
    Write-Host "[WARN] $warning" -ForegroundColor Yellow
}
foreach ($errorMessage in $Errors) {
    Write-Host "[ERROR] $errorMessage" -ForegroundColor Red
}

if ($Errors.Count -gt 0) {
    Write-Host "Pre-push check failed. Fix the errors above before pushing." -ForegroundColor Red
    exit 1
}

Write-Host "Pre-push check passed: UTF-8 text only; no binary, oversized, symlink, or credential issue found." -ForegroundColor Green
exit 0
