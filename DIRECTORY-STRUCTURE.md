# 🏗️ aizoniq Website - Directory Structure

## Overview
The website has been reorganized for better maintainability and scalability. Each page is housed in its own dedicated directory with all related assets.

## Directory Structure

```
aizoniq-website/
├── pages/                           # All page content
│   ├── home/                        # Homepage
│   │   └── index.html              # Main homepage (serves as root)
│   ├── services/                    # Services page
│   │   └── services.html           
│   ├── features/                    # Features showcase
│   │   └── features.html           
│   ├── pricing/                     # Pricing plans
│   │   └── pricing.html            
│   ├── blog/                        # Blog/Resources
│   │   └── blog.html               
│   ├── faq/                         # FAQ section
│   │   └── faq.html                
│   ├── case-studies/                # Case studies
│   │   └── case-studies.html       
│   ├── advanced-ai/                 # Advanced AI services
│   │   └── advanced-services.html  
│   ├── portfolio/                   # Portfolio showcase
│   │   └── portfolio.html          
│   ├── about/                       # About page
│   │   └── about.html              
│   └── contact/                     # Contact page
│       └── contact.html            
│
├── shared/                          # Shared resources for all pages
│   ├── css/                         # Stylesheets
│   │   ├── style.css               # Main styles
│   │   ├── design-system.css       # Design variables & utilities
│   │   ├── animated.css            # Animations
│   │   ├── svg-icons.css           # SVG icon styling
│   │   ├── services.css            # Services page styles
│   │   ├── pricing.css             # Pricing page styles
│   │   ├── blog.css                # Blog page styles
│   │   ├── features.css            # Features page styles
│   │   ├── case-studies.css        # Case studies styles
│   │   ├── faq.css                 # FAQ page styles
│   │   ├── contact.css             # Contact form styles
│   │   ├── chatbot.css             # Chatbot styling
│   │   └── [other CSS files]
│   │
│   ├── js/                          # JavaScript files
│   │   ├── i18n.js                 # Internationalization (1200+ lines)
│   │   ├── init.js                 # Initialization script
│   │   ├── main.js                 # Main functionality
│   │   ├── blog.js                 # Blog functionality
│   │   ├── pricing.js              # Pricing toggle logic
│   │   ├── contact.js              # Contact form handling
│   │   ├── faq.js                  # FAQ search & filtering
│   │   ├── chatbot.js              # Chatbot AI
│   │   └── analytics.js            # Analytics tracking
│   │
│   └── components/                  # Reusable components
│       └── [component files]
│
├── assets/                          # Static assets
│   ├── images/                      # Image files
│   │   └── [image files]
│   ├── icons/                       # Icon files
│   │   ├── favicon.ico
│   │   ├── README.md
│   │   └── [icon files]
│   └── [other assets]
│
├── Root Level (Redirect Files)
│   ├── index.html                   # Redirect to pages/home/index.html
│   ├── services.html                # Redirect to pages/services/services.html
│   ├── features.html                # Redirect to pages/features/features.html
│   ├── pricing.html                 # Redirect to pages/pricing/pricing.html
│   ├── blog.html                    # Redirect to pages/blog/blog.html
│   ├── faq.html                     # Redirect to pages/faq/faq.html
│   ├── case-studies.html            # Redirect to pages/case-studies/case-studies.html
│   ├── advanced-services.html       # Redirect to pages/advanced-ai/advanced-services.html
│   ├── portfolio.html               # Redirect to pages/portfolio/portfolio.html
│   ├── about.html                   # Redirect to pages/about/about.html
│   ├── contact.html                 # Redirect to pages/contact/contact.html
│   ├── manifest.json                # PWA manifest
│   ├── robots.txt                   # SEO robots config
│   ├── sitemap.xml                  # XML sitemap
│   ├── package.json                 # Node dependencies
│   ├── server.js                    # Express server
│   └── .env                         # Environment variables
│
├── docs/                            # Documentation
├── server/                          # Server configuration
├── public/                          # Public assets
├── src/                             # Source code (if applicable)
│
└── Configuration Files
    ├── .gitignore                   # Git ignore rules
    ├── .env                         # Environment variables
    ├── README.md                    # Main README
    └── [other config files]
```

## How It Works

### Navigation & Redirects
- Users access pages via root-level redirects (e.g., `website.com/services.html`)
- These redirect to the actual page location (e.g., `website.com/pages/services/services.html`)
- All internal links in pages point to root-level redirects for consistency
- All asset paths point to the shared directories (e.g., `../../shared/css/style.css`)

### File Paths Reference
Each page HTML file uses relative paths to access shared resources:

```html
<!-- CSS files -->
<link rel="stylesheet" href="../../shared/css/style.css">
<link rel="stylesheet" href="../../shared/css/design-system.css">

<!-- JavaScript files -->
<script src="../../shared/js/i18n.js"></script>
<script src="../../shared/js/init.js"></script>

<!-- Assets -->
<link rel="icon" href="../../assets/favicon.ico">
<img src="../../assets/images/logo.png">
```

### Navigation Links
All navigation links point to root-level redirect files:

```html
<!-- Navigation Links -->
<a href="../../index.html">Home</a>
<a href="../../services.html">Services</a>
<a href="../../pricing.html">Pricing</a>
```

## Development Guidelines

### Adding a New Page
1. Create a new folder in `pages/` with the page name
2. Create the HTML file inside that folder
3. Reference shared CSS/JS using relative paths: `../../shared/css/` and `../../shared/js/`
4. Create a redirect file in the root directory
5. Add navigation links pointing to the redirect file

### Updating Shared Resources
- CSS changes: Edit files in `shared/css/`
- JavaScript changes: Edit files in `shared/js/`
- These changes automatically apply to all pages

### Adding Page-Specific Styles
If a page needs specific styles:
1. Create `pages/[pagename]/styles.css`
2. Include it in the HTML: `<link rel="stylesheet" href="[pagename]-styles.css">`
3. Note: This is optional - most styles should be in shared folders

## Benefits of This Structure

✅ **Organized**: Each page has its own dedicated space
✅ **Maintainable**: Shared resources are centralized for easy updates
✅ **Scalable**: Easy to add new pages following the same pattern
✅ **SEO-Friendly**: Root-level HTML files maintain SEO structure
✅ **Backward Compatible**: Old links still work via redirects
✅ **Clean**: No scattered files or confusing dependencies
✅ **Professional**: Industry-standard page organization

## File Statistics

- **Total Pages**: 11 (Home, Services, Features, Pricing, Blog, FAQ, Case Studies, Advanced AI, Portfolio, About, Contact)
- **Shared CSS Files**: 16 files (~5000+ lines total)
- **Shared JS Files**: 9 files (~2000+ lines total)
- **Total Translation Keys**: 400+ (Bilingual: Arabic & English)
- **Design System Variables**: 30+ CSS custom properties
- **Total Lines of Code**: 10,000+

## Navigation Map

```
Home (index.html)
├── Services (services.html)
├── Features (features.html)
├── Pricing (pricing.html)
│   └── Billing Toggle (Monthly/Annual)
├── Blog (blog.html)
│   ├── Article Filtering
│   ├── Search Functionality
│   └── Newsletter
├── FAQ (faq.html)
│   ├── General
│   ├── Services
│   ├── Pricing
│   ├── Technical
│   └── Support
├── Case Studies (case-studies.html)
│   ├── 6 Real-world examples
│   ├── Metrics & Results
│   └── Testimonials
├── Advanced AI (advanced-services.html)
├── Portfolio (portfolio.html)
├── About (about.html)
│   └── Team Information
└── Contact (contact.html)
    └── Contact Form
```

## Deployment Considerations

1. **Web Server**: Ensure the server supports HTML redirects
2. **CDN**: Cache shared resources in `shared/` directories
3. **Performance**: All pages load shared CSS/JS from same location
4. **SEO**: 301 redirects maintain SEO value
5. **SSL**: Ensure HTTPS is enabled for all redirect chains

---

**Last Updated**: December 28, 2025
**Version**: 2.0 - Organized Structure
