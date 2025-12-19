# Setup & Installation Guide

## 🎯 Prerequisites

### Required Software
- **Node.js** v14+ ([Download](https://nodejs.org/))
- **npm** v6+ (included with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **Code Editor** (VS Code recommended, [Download](https://code.visualstudio.com/))
- **Chrome/Firefox/Safari** (for testing)

### Check Versions
```bash
node --version    # Should be v14.0.0 or higher
npm --version     # Should be v6.0.0 or higher
git --version     # Should be installed
```

---

## 📥 Installation Steps

### 1. Clone Repository

```bash
# Using HTTPS
git clone https://github.com/username/aizoniq-website.git

# Using SSH (if configured)
git clone git@github.com:username/aizoniq-website.git

# Navigate to project
cd aizoniq-website
```

### 2. Install Dependencies

```bash
# Install npm packages
npm install

# This installs:
# - express (web server)
# - cors (cross-origin)
# - nodemailer (email)
# - stripe (payments)
# - dotenv (environment variables)
```

**Expected Output**:
```
added 50+ packages, and audited 51 packages in 5s
```

### 3. Create Environment File

Create `.env` file in project root:

```bash
# Using VS Code
# File → New File → .env

# Or using terminal (Mac/Linux)
touch .env

# Or using terminal (Windows PowerShell)
New-Item -Name ".env" -ItemType "file"
```

### 4. Configure Environment Variables

Edit `.env` with your settings:

```env
# ============================================
# Frontend (Vite/Browser)
# ============================================
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_STRIPE_KEY=pk_test_XXXXXXXXXXXXXXXX
VITE_ADMIN_EMAIL=admin@aizoniq.com

# ============================================
# Backend (Node.js)
# ============================================
NODE_ENV=development

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Stripe Secret Key
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXX

# Admin
ADMIN_EMAIL=admin@aizoniq.com
```

### 5. Configure Email (Gmail Setup)

#### Enable Gmail App Password

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click "Security" in left menu
3. Enable "2-Step Verification" if not already enabled
4. Go back to Security → App passwords
5. Select "Mail" and "Windows Computer"
6. Google generates a 16-character password
7. Copy this password to `EMAIL_PASSWORD` in `.env`

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

### 6. Configure Stripe (Optional)

1. Create account at [stripe.com](https://stripe.com)
2. Go to Dashboard → API Keys
3. Copy Test Mode keys
4. Add to `.env`:

```env
VITE_STRIPE_KEY=pk_test_XXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXX
```

### 7. Configure Google Analytics (Optional)

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property for your website
3. Copy Measurement ID (G-XXXXXXXXXX)
4. Add to `.env`:

```env
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## 🚀 Running the Application

### Terminal 1: Start Backend Server

```bash
# Start Express server on port 5000
node server.js

# Expected output:
# Server running on port 5000 ✓
# Email service: Ready
# Stripe service: Ready
```

### Terminal 2: Start Frontend Server

**Option A: Using Python (Recommended)**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Expected output:
# Serving HTTP on 0.0.0.0 port 8000 ...
```

**Option B: Using Node HTTP Server**
```bash
# Install globally (one-time)
npm install -g http-server

# Run from project directory
http-server

# Expected output:
# Hit CTRL-C to stop the server
# http://127.0.0.1:8080 - GET /
```

**Option C: Using VS Code Live Server Extension**
1. Install "Live Server" extension
2. Right-click index.html
3. Select "Open with Live Server"
4. Browser opens automatically

---

## ✅ Verification

### Check Backend Running

```bash
# In a new terminal
curl http://localhost:5000/api/services

# Expected response: JSON with services
```

### Check Frontend Running

1. Open browser: `http://localhost:8000`
2. You should see Aizoniq homepage
3. Check console for errors (F12 → Console)

### Test Chatbot
1. Look for 💬 button (bottom right)
2. Click to open chat
3. Type a message
4. Bot should respond

### Test Contact Form
1. Go to Contact page
2. Fill in all fields
3. Click Send Message
4. Should see success notification
5. Check backend terminal for email log

### Test Analytics
1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Look for Google Analytics requests
5. Should see requests to `google-analytics.com`

---

## 🔧 Troubleshooting

### "Cannot find module" Error

```bash
# Make sure npm packages are installed
npm install

# Check if node_modules folder exists
ls node_modules    # Mac/Linux
dir node_modules   # Windows

# If not, reinstall
rm -rf node_modules
npm install
```

### Backend Won't Start

```bash
# Check if port 5000 is available
# Error: listen EADDRINUSE: address already in use :::5000

# Kill process using port 5000
# Mac/Linux
lsof -i :5000
kill -9 <PID>

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Then restart: node server.js
```

### Frontend Shows "Cannot GET"

- Make sure you're in project root directory
- Make sure http server is running
- Try accessing directly: `http://localhost:8000/index.html`

### Forms Not Submitting

1. Check backend server is running
2. Check API URL in `.env`: `VITE_API_URL=http://localhost:5000`
3. Check Network tab (F12) for errors
4. Check backend terminal for error logs

### Chatbot Not Appearing

1. Check if `#chatbot-widget` div exists in HTML
2. Check browser console (F12) for JavaScript errors
3. Check if main.js is loaded
4. Make sure chatbot CSS is loaded

### Gmail Not Sending Emails

1. Check EMAIL_USER and EMAIL_PASSWORD in `.env`
2. Make sure Gmail app password is correct (16 characters)
3. Check if 2-Step Verification is enabled on Gmail
4. Check backend terminal for error logs
5. Check spam folder for test emails

### Analytics Not Tracking

1. Check if GA ID is in `.env`: `VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX`
2. Check if Analytics is enabled in config
3. Check browser console for errors
4. Check Google Analytics dashboard for events
5. Note: May take 24-48 hours to show in dashboard

---

## 📁 Project Structure After Setup

```
aizoniq-website/
├── src/
│   ├── config/
│   ├── api/
│   ├── components/
│   ├── features/
│   ├── utils/
│   └── main.js
├── css/
├── js/
├── assets/
├── docs/
├── .env                    ← Created
├── .gitignore
├── node_modules/           ← Created by npm install
├── package.json
├── server.js
└── *.html
```

---

## 🔐 Security Best Practices

### .env File

**IMPORTANT**: Never commit `.env` to Git

```bash
# .env is already in .gitignore
# But make sure it's there:
cat .gitignore | grep .env

# If not, add it
echo ".env" >> .gitignore
```

### API Keys

- Don't share your `.env` file
- Don't commit secrets to Git
- Use different keys for development and production
- Rotate keys periodically

### Gmail App Password

- Generate app-specific password (not your main password)
- Only use for this app
- Can revoke anytime from Google account

### Stripe Keys

- Use test keys for development
- Never use production keys in .env
- Stripe test mode is free and safe to use

---

## 📦 Useful npm Commands

```bash
# Install all dependencies
npm install

# Check for outdated packages
npm outdated

# Update all packages
npm update

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix

# Clear npm cache
npm cache clean --force

# List installed packages
npm list

# Search for a package
npm search package-name
```

---

## 🚀 Next Steps

### 1. Customize Content
- Edit HTML files with your content
- Update logo and images
- Change colors in CSS

### 2. Configure Services
- Edit services list in server.js
- Add your actual services
- Update pricing

### 3. Add Blog Posts
- Add articles to blog API (server.js)
- Create blog.html markup
- Test blog feature

### 4. Test Payment Flow
- Use Stripe test card: 4242 4242 4242 4242
- Fill any future date for expiry
- Use any CVC code
- Payment should process in test mode

### 5. Deploy to Production
- Push to GitHub
- Connect to Cloudflare Pages
- Set environment variables
- Auto-deploys on push

---

## 📞 Support Resources

### Documentation
- [README.md](./README.md) - Project overview
- [STRUCTURE.md](./STRUCTURE.md) - Folder organization
- [COMPONENTS.md](./COMPONENTS.md) - Component guide
- [API.md](./API.md) - API reference
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System design

### External Resources
- [Node.js Docs](https://nodejs.org/docs/)
- [Express Docs](https://expressjs.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript Info](https://javascript.info/)
- [Gmail App Passwords](https://myaccount.google.com/apppasswords)
- [Stripe API Docs](https://stripe.com/docs/api)
- [Google Analytics](https://analytics.google.com/)

### Troubleshooting Guides
- [Node.js Troubleshooting](https://nodejs.org/en/docs/guides/nodejs-performance/)
- [Express Error Handling](https://expressjs.com/en/guide/error-handling.html)
- [CORS Issues](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

---

## ✨ Common Customizations

### Change Port Numbers

**Backend** (server.js):
```javascript
const PORT = process.env.PORT || 5000;  // Change 5000
```

**Frontend** (Python):
```bash
python -m http.server 3000  # Change 8000 to 3000
```

### Change API URL

**.env file**:
```env
VITE_API_URL=http://localhost:3000  # Change port
```

### Disable Features

**src/config/config.js**:
```javascript
FEATURES: {
  CHATBOT: false,    // Disable chatbot
  BLOG: false,       // Disable blog
  // ... etc
}
```

### Change Theme Colors

**css/style.css**:
```css
:root {
  --primary-color: #FF6B6B;     /* Change primary color */
  --secondary-color: #4ECDC4;   /* Change secondary color */
}
```

---

## 📝 Checklist

Before deploying, verify:
- [ ] Node.js v14+ installed
- [ ] npm install completed
- [ ] .env file created with all keys
- [ ] Backend starts: `node server.js`
- [ ] Frontend server running
- [ ] Homepage loads at localhost:8000
- [ ] Chatbot appears
- [ ] Contact form can submit
- [ ] No console errors
- [ ] .env added to .gitignore
- [ ] All sensitive data in .env (not in code)

---

## 🎉 Congratulations!

Your Aizoniq website is ready to use and customize!

**Next**: Read [README.md](./README.md) for features overview or [COMPONENTS.md](./COMPONENTS.md) to learn about components.

---

**Last Updated**: January 2024
