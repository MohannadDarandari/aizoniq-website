# 🚀 دليل رفع الموقع - AIZONIQ

## 📋 قبل الرفع - Checklist

### ✅ الملفات الأساسية
- [ ] جميع صفحات HTML (5 صفحات)
- [ ] ملفات CSS (3 ملفات)
- [ ] ملفات JavaScript (2 ملفات)
- [ ] SEO files (sitemap.xml, robots.txt, manifest.json)
- [ ] .htaccess

### ✅ المحتوى
- [ ] تحديث رقم التلفون في contact.html
- [ ] تحديث الإيميل في جميع الصفحات
- [ ] تحديث عنوان المكتب
- [ ] إضافة صور حقيقية في assets/images/
- [ ] تحديث روابط السوشال ميديا

### ✅ التحسينات
- [ ] ضغط الصور (استخدم TinyPNG)
- [ ] اختبار الفورم
- [ ] اختبار على الموبايل
- [ ] مراجعة النصوص والأخطاء الإملائية

---

## 🌐 طريقة 1: رفع على Namecheap cPanel

### الخطوة 1: تسجيل الدخول
1. ادخل على حسابك في Namecheap
2. اختر "Hosting List" من القائمة
3. اضغط "Manage" على الدومين الخاص بك
4. اضغط "Go to cPanel"

### الخطوة 2: File Manager
1. في cPanel، ابحث عن "File Manager"
2. افتح مجلد `public_html`
3. **احذف جميع الملفات الموجودة** (عادة ملفات تجريبية)

### الخطوة 3: رفع الملفات
1. اضغط "Upload" في الأعلى
2. اسحب كل ملفات الموقع (أو اختر Select File)
3. انتظر حتى يكتمل الرفع

### الخطوة 4: التأكد من الهيكل
يجب أن يكون الهيكل كالتالي:
```
public_html/
├── index.html
├── services.html
├── portfolio.html
├── about.html
├── contact.html
├── css/
│   ├── style.css
│   ├── services.css
│   └── contact.css
├── js/
│   ├── main.js
│   └── contact.js
├── assets/
│   ├── images/
│   └── icons/
├── sitemap.xml
├── robots.txt
├── manifest.json
└── .htaccess
```

### الخطوة 5: تفعيل SSL (مهم!)
1. ارجع للوحة cPanel
2. ابحث عن "SSL/TLS Status"
3. فعّل SSL Certificate (مجاني من Let's Encrypt)
4. انتظر 5-10 دقائق

### الخطوة 6: اختبار الموقع
1. اكتب الدومين في المتصفح: `https://yourdomain.com`
2. اختبر جميع الصفحات
3. اختبر الفورم في صفحة Contact
4. اختبر على الموبايل

---

## 🔧 طريقة 2: رفع عبر FTP (أسرع للتحديثات)

### الخطوة 1: احصل على معلومات FTP
من cPanel:
- اضغط "FTP Accounts"
- انسخ:
  - FTP Host: `ftp.yourdomain.com`
  - Username: `your-username@yourdomain.com`
  - Password: (إنشئ كلمة مرور قوية)

### الخطوة 2: برنامج FileZilla
1. حمّل FileZilla من: https://filezilla-project.org/
2. ثبّت البرنامج
3. افتح FileZilla

### الخطوة 3: الاتصال
```
Host: ftp.yourdomain.com
Username: your-username@yourdomain.com
Password: your-password
Port: 21
```
اضغط "Quickconnect"

### الخطوة 4: رفع الملفات
1. في الجانب الأيسر: اختر مجلد الموقع على جهازك
2. في الجانب الأيمن: افتح مجلد `public_html`
3. اسحب الملفات من اليسار لليمين

---

## 🎯 طريقة 3: استخدام Git/GitHub (للمحترفين)

### الخطوة 1: إنشاء Repository
```powershell
cd C:\aizoniq-website
git init
git add .
git commit -m "Initial commit - AIZONIQ website"
```

### الخطوة 2: رفع على GitHub
```powershell
# أنشئ repo جديد على GitHub ثم:
git remote add origin https://github.com/username/aizoniq.git
git branch -M main
git push -u origin main
```

### الخطوة 3: Deploy على Netlify (مجاني)
1. سجل في https://netlify.com
2. اضغط "New site from Git"
3. اختر GitHub repo
4. Deploy!
5. ربط الدومين المخصص من Namecheap

---

## 📧 إعداد البريد الإلكتروني للفورم

### خيار 1: FormSpree (الأسهل - مجاني)
1. سجل في https://formspree.io
2. انسخ Form ID
3. في `contact.js` غيّر الكود:

```javascript
async function sendFormData(data) {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return response;
}
```

### خيار 2: EmailJS (مجاني)
1. سجل في https://emailjs.com
2. اتبع التعليمات
3. استخدم مكتبتهم

### خيار 3: Backend مخصص (PHP)
إنشاء ملف `send-email.php`:
```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your-email@domain.com";
    $subject = "New Contact Form Submission";
    $message = $_POST['message'];
    $headers = "From: " . $_POST['email'];
    
    mail($to, $subject, $message, $headers);
    echo json_encode(["success" => true]);
}
?>
```

---

## 🔍 SEO Setup بعد الرفع

### 1. Google Search Console
1. سجل في https://search.google.com/search-console
2. اضف موقعك
3. تحقق من الملكية (HTML tag method)
4. ارفع sitemap.xml: `https://yourdomain.com/sitemap.xml`

### 2. Google Analytics
1. سجل في https://analytics.google.com
2. انشئ Property جديد
3. انسخ Tracking ID
4. ضع الكود قبل `</head>` في كل صفحة:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 3. Google Business Profile
1. سجل في https://business.google.com
2. أضف معلومات الشركة
3. تحقق من العنوان
4. أضف صور للمكتب

---

## ✅ الاختبارات النهائية

### 1. اختبار الأداء
- Google PageSpeed Insights: https://pagespeed.web.dev/
- هدف: 90+ على Mobile و Desktop

### 2. اختبار SEO
- https://www.seobility.net/en/seocheck/
- هدف: 85%+

### 3. اختبار الأمان
- https://securityheaders.com/
- تأكد SSL يشتغل

### 4. اختبار التوافق
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

### 5. اختبار الروابط
- https://www.deadlinkchecker.com/
- تأكد كل الروابط تشتغل

---

## 🆘 حل المشاكل الشائعة

### ❌ المشكلة: "403 Forbidden"
**الحل:** تأكد أن `index.html` في مجلد `public_html` مباشرة

### ❌ المشكلة: الصور ما تظهر
**الحل:** 
- تأكد المسارات صحيحة: `assets/images/filename.jpg`
- تأكد رفعت مجلد assets كامل

### ❌ المشكلة: CSS ما يشتغل
**الحل:**
- امسح الـ cache: Ctrl+Shift+R
- تأكد المسارات: `css/style.css`

### ❌ المشكلة: الفورم ما يرسل
**الحل:**
- استخدم FormSpree أو EmailJS
- أو اتصل بالـ support لإعداد PHP mail

### ❌ المشكلة: الموقع بطيء
**الحل:**
- ضغط الصور
- فعّل .htaccess caching
- استخدم CDN مثل Cloudflare (مجاني)

---

## 📞 الدعم الفني

### Namecheap Support
- Live Chat: متوفر 24/7
- Submit Ticket: من لوحة التحكم
- Knowledge Base: https://www.namecheap.com/support/

### مشكلة محددة؟
راسلني وأساعدك! 💪

---

## 🎉 بعد نشر الموقع

### التسويق:
- [ ] شارك الموقع على السوشال ميديا
- [ ] أرسل لعملائك
- [ ] اعمل Google Ads campaign
- [ ] SEO content marketing

### الصيانة:
- [ ] باك اب أسبوعي
- [ ] تحديث المحتوى شهرياً
- [ ] مراقبة Analytics
- [ ] الرد على الرسائل

---

**مبروك! موقعك أونلاين 🚀**

آخر تحديث: نوفمبر 2025
