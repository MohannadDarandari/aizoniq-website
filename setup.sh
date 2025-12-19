#!/usr/bin/env bash
# Aizoniq Website - Quick Setup Script
# This script helps you get started quickly

echo "🎉 Welcome to Aizoniq Website Setup!"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Check npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found."
    exit 1
fi

echo "✅ npm found: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "📝 Next steps:"
echo ""
echo "1️⃣  Create .env file in project root with:"
echo "   VITE_API_URL=http://localhost:5000"
echo "   EMAIL_USER=your-email@gmail.com"
echo "   EMAIL_PASSWORD=your-app-password"
echo "   STRIPE_SECRET_KEY=sk_test_XXXXX"
echo ""
echo "2️⃣  In Terminal 1, start backend:"
echo "   node server.js"
echo ""
echo "3️⃣  In Terminal 2, start frontend:"
echo "   python -m http.server 8000"
echo ""
echo "4️⃣  Open in browser:"
echo "   http://localhost:8000"
echo ""
echo "📖 For detailed setup instructions, see: docs/SETUP.md"
echo ""
echo "🎊 Happy coding!"
