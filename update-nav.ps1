$basePath = "c:\Users\mdara\OneDrive\Desktop\DarkOps HQ\Github Repos\aizoniq-website"
cd $basePath

$htmlFiles = @(
  "pages/services/services.html",
  "pages/features/features.html",
  "pages/pricing/pricing.html",
  "pages/blog/blog.html",
  "pages/faq/faq.html",
  "pages/case-studies/case-studies.html",
  "pages/advanced-ai/advanced-services.html",
  "pages/portfolio/portfolio.html",
  "pages/about/about.html",
  "pages/contact/contact.html"
)

$replacements = @(
  @{old='href="index.html"'; new='href="../../index.html"'},
  @{old='href="services.html'; new='href="../../services.html'},
  @{old='href="features.html'; new='href="../../features.html'},
  @{old='href="advanced-services.html'; new='href="../../advanced-services.html'},
  @{old='href="pricing.html'; new='href="../../pricing.html'},
  @{old='href="blog.html'; new='href="../../blog.html'},
  @{old='href="faq.html'; new='href="../../faq.html'},
  @{old='href="portfolio.html'; new='href="../../portfolio.html'},
  @{old='href="about.html'; new='href="../../about.html'},
  @{old='href="contact.html'; new='href="../../contact.html'},
  @{old='href="case-studies.html'; new='href="../../case-studies.html'}
)

foreach ($file in $htmlFiles) {
  if (Test-Path $file) {
    $content = Get-Content $file -Raw
    
    foreach ($replacement in $replacements) {
      $content = $content -replace [regex]::Escape($replacement.old), $replacement.new
    }
    
    Set-Content $file -Value $content
    Write-Host "✅ Updated $file"
  }
}

Write-Host "✨ All navigation links updated successfully!"
