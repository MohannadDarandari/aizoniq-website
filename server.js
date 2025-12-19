const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const stripe = require('stripe');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Email Configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Stripe Configuration
const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);

// ========== API Routes ==========

// 1. Contact Form Handler
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service || 'General inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Send confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - AIZONIQ',
      html: `
        <h2>Thank you for contacting AIZONIQ!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>AIZONIQ Team</p>
      `
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// 2. Newsletter Subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // In production, connect to Mailchimp or similar
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Newsletter Subscription: ${email}`,
      html: `<p>New subscriber: ${email}</p>`
    });

    res.json({ success: true, message: 'Subscribed to newsletter' });
  } catch (error) {
    console.error('Newsletter error:', error);
    res.status(500).json({ error: 'Subscription failed' });
  }
});

// 3. Create Payment Intent (Stripe)
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, service } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentIntent = await stripeClient.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata: { service: service || 'ai-service' }
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    });
  } catch (error) {
    console.error('Payment intent error:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
});

// 4. Get Services with Pricing
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 'writing',
      name: 'AI Content Writing',
      description: 'High-quality content generation',
      icon: 'fa-pen-fancy',
      features: ['Blog Posts', 'Social Media', 'Product Descriptions', 'Email Campaigns'],
      pricing: {
        starter: { price: 299, credits: 10 },
        professional: { price: 799, credits: 50 },
        enterprise: { price: 2499, credits: 500 }
      }
    },
    {
      id: 'image',
      name: 'AI Image Generation',
      description: 'Create stunning visuals from text',
      icon: 'fa-image',
      features: ['DALL-E Integration', 'Batch Processing', 'Custom Styles', 'Unlimited Variations'],
      pricing: {
        starter: { price: 199, credits: 50 },
        professional: { price: 599, credits: 250 },
        enterprise: { price: 1999, credits: 2000 }
      }
    },
    {
      id: 'chatbot',
      name: 'AI Chatbots',
      description: 'Intelligent conversational AI',
      icon: 'fa-robot',
      features: ['24/7 Support', 'Multi-language', 'Integration Ready', 'Analytics'],
      pricing: {
        starter: { price: 399, setup: 500 },
        professional: { price: 999, setup: 1500 },
        enterprise: { price: 3999, setup: 5000 }
      }
    },
    {
      id: 'analytics',
      name: 'Data Analytics',
      description: 'AI-powered insights',
      icon: 'fa-chart-line',
      features: ['Real-time Analysis', 'Predictive Modeling', 'Custom Reports', 'Dashboard'],
      pricing: {
        starter: { price: 499, setup: 1000 },
        professional: { price: 1499, setup: 2500 },
        enterprise: { price: 4999, setup: 10000 }
      }
    },
    {
      id: 'video',
      name: 'AI Video Creation',
      description: 'Professional video generation',
      icon: 'fa-video',
      features: ['Auto-Editing', 'Effects', 'Subtitles', 'Multiple Formats'],
      pricing: {
        starter: { price: 599, credits: 5 },
        professional: { price: 1499, credits: 25 },
        enterprise: { price: 4999, credits: 100 }
      }
    },
    {
      id: 'custom',
      name: 'Custom AI Solutions',
      description: 'Tailored implementations',
      icon: 'fa-microchip',
      features: ['Consultation', 'Custom Development', 'Training', 'Support'],
      pricing: {
        starter: { price: 999, setup: 2000 },
        professional: { price: 2999, setup: 5000 },
        enterprise: { price: 9999, setup: 20000 }
      }
    }
  ];
  res.json(services);
});

// 5. Get Portfolio/Case Studies
app.get('/api/portfolio', (req, res) => {
  const portfolio = [
    {
      id: 1,
      title: 'E-commerce Content Automation',
      client: 'Fashion Retail Co.',
      category: 'content-writing',
      image: '/assets/portfolio/project1.jpg',
      description: 'Automated product descriptions for 5000+ products',
      results: {
        timeReduction: '85%',
        qualityScore: '94%',
        conversionIncrease: '42%'
      },
      testimonial: 'AIZONIQ reduced our content creation time from 6 months to 3 weeks!',
      technologies: ['GPT-4', 'Automation API']
    },
    {
      id: 2,
      title: 'AI-Powered Customer Support Bot',
      client: 'SaaS Startup',
      category: 'chatbot',
      image: '/assets/portfolio/project2.jpg',
      description: 'Deployed chatbot handling 70% of inquiries automatically',
      results: {
        responseTime: '< 1 second',
        satisfactionRate: '92%',
        costReduction: '65%'
      },
      testimonial: 'Our support costs dropped by 65% while improving customer satisfaction!',
      technologies: ['GPT-4', 'Custom Training', 'Integration']
    },
    {
      id: 3,
      title: 'Data Analytics Dashboard',
      client: 'B2B Analytics Firm',
      category: 'analytics',
      image: '/assets/portfolio/project3.jpg',
      description: 'Predictive analytics for business intelligence',
      results: {
        dataProcessingSpeed: '10x faster',
        insightAccuracy: '96%',
        rOIIncrease: '48%'
      },
      testimonial: 'The insights discovered by their AI system led to a 48% increase in ROI!',
      technologies: ['Machine Learning', 'Advanced Analytics', 'Real-time Processing']
    },
    {
      id: 4,
      title: 'Social Media Content Generation',
      client: 'Digital Marketing Agency',
      category: 'content-writing',
      image: '/assets/portfolio/project4.jpg',
      description: 'Generated 1000+ social posts per month across platforms',
      results: {
        engagementIncrease: '156%',
        reachIncrease: '203%',
        timePerPost: '15 seconds'
      },
      testimonial: 'Their AI writes content that performs better than our in-house team!',
      technologies: ['GPT-4', 'Platform APIs', 'Scheduling']
    },
    {
      id: 5,
      title: 'AI Image Generation for Ads',
      client: 'E-commerce Brand',
      category: 'image-generation',
      image: '/assets/portfolio/project5.jpg',
      description: 'Generated 500+ ad variations for A/B testing',
      results: {
        adVariations: '500+',
        ctRImprovement: '67%',
        productionTime: '80% faster'
      },
      testimonial: 'AI-generated ads outperformed human-designed ones in CTR!',
      technologies: ['DALL-E', 'Midjourney', 'Image Optimization']
    },
    {
      id: 6,
      title: 'Video Content Automation',
      client: 'YouTube Channel',
      category: 'video-creation',
      image: '/assets/portfolio/project6.jpg',
      description: 'Automated video editing and uploading',
      results: {
        videosPerMonth: '100+',
        productionTimeReduction: '90%',
        viewsIncrease: '350%'
      },
      testimonial: 'We now publish 100 videos per month instead of 10!',
      technologies: ['AI Video Editor', 'Script Generation', 'Automation']
    }
  ];
  res.json(portfolio);
});

// 6. Blog Posts
app.get('/api/blog', (req, res) => {
  const posts = [
    {
      id: 1,
      title: 'How AI is Revolutionizing Content Creation',
      slug: 'ai-revolutionizing-content',
      author: 'Sarah Johnson',
      date: '2025-01-10',
      category: 'AI Trends',
      image: '/assets/blog/post1.jpg',
      excerpt: 'Discover how AI-powered tools are changing the content creation landscape...',
      content: 'Full blog post content here...',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'ROI Calculator: AI vs Manual Content',
      slug: 'roi-ai-manual-content',
      author: 'Michael Chen',
      date: '2025-01-08',
      category: 'Business',
      image: '/assets/blog/post2.jpg',
      excerpt: 'See how much you can save by switching to AI-powered content...',
      content: 'Full blog post content here...',
      readTime: '7 min'
    },
    {
      id: 3,
      title: 'The Future of AI Chatbots in Business',
      slug: 'future-ai-chatbots',
      author: 'Emma Williams',
      date: '2025-01-05',
      category: 'Technology',
      image: '/assets/blog/post3.jpg',
      excerpt: 'Exploring the latest advances in conversational AI...',
      content: 'Full blog post content here...',
      readTime: '6 min'
    }
  ];
  res.json(posts);
});

// 7. Chatbot Conversation Logger
app.post('/api/chatbot-conversation', async (req, res) => {
  try {
    const { messages, timestamp } = req.body;
    
    if (!messages || messages.length === 0) {
      return res.status(400).json({ error: 'No messages provided' });
    }

    // Log conversation
    console.log(`📞 Chatbot Conversation - ${new Date().toLocaleString()}`);
    console.log(`Total messages: ${messages.length}`);
    messages.forEach((msg, i) => {
      console.log(`${i + 1}. [${msg.sender}]: ${msg.text}`);
    });

    // In production, save to database
    // await ChatConversation.create({ messages, timestamp });

    res.json({ success: true, message: 'Conversation logged' });
  } catch (error) {
    console.error('Chatbot conversation error:', error);
    res.status(500).json({ error: 'Failed to log conversation' });
  }
});

// 8. Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`🚀 AIZONIQ Backend running on http://localhost:${PORT}`);
});
