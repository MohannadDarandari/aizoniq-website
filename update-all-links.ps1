# Update all page HTML files to point to root redirects for navigation
# This ensures backward compatibility and proper navigation

$basePath = "c:\Users\mdara\OneDrive\Desktop\DarkOps HQ\Github Repos\aizoniq-website"
cd $basePath

# List of all HTML files to update (excluding the redirect files)
$pageFiles = @(
  "pages\home\index.html",
  "pages\services\services.html",
  "pages\features\features.html",
  "pages\pricing\pricing.html",
  "pages\blog\blog.html",
  "pages\faq\faq.html",
  "pages\case-studies\case-studies.html",
  "pages\advanced-ai\advanced-services.html",
  "pages\portfolio\portfolio.html",
  "pages\about\about.html",
  "pages\contact\contact.html"
)

$replacements = @(
  # Navigation links - Point to root redirects
  @{pattern = 'href="index.html"'; replacement = 'href="../../index.html"'},
  @{pattern = 'href="services.html'; replacement = 'href="../../services.html'},
  @{pattern = 'href="features.html'; replacement = 'href="../../features.html'},
  @{pattern = 'href="pricing.html'; replacement = 'href="../../pricing.html'},
  @{pattern = 'href="blog.html'; replacement = 'href="../../blog.html'},
  @{pattern = 'href="faq.html'; replacement = 'href="../../faq.html'},
  @{pattern = 'href="portfolio.html'; replacement = 'href="../../portfolio.html'},
  @{pattern = 'href="about.html'; replacement = 'href="../../about.html'},
  @{pattern = 'href="contact.html'; replacement = 'href="../../contact.html'},
  @{pattern = 'href="advanced-services.html'; replacement = 'href="../../advanced-services.html'},
  @{pattern = 'href="case-studies.html'; replacement = 'href="../../case-studies.html'}
)

foreach ($file in $pageFiles) {
  if (Test-Path $file) {
    $content = Get-Content $file -Raw
    $originalLength = $content.Length
    
    foreach ($r in $replacements) {
      $content = $content -replace [regex]::Escape($r.pattern), $r.replacement
    }
    
    Set-Content $file -Value $content
    Write-Host "✅ Updated: $file"
  } else {
    Write-Host "⚠️  File not found: $file"
  }
}

Write-Host ""
Write-Host "✨ Navigation update complete!"
Write-Host "All pages now point to root-level redirect files for proper navigation"
