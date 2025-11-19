# 🎨 دليل التخصيص - AIZONIQ Website

دليل شامل لتخصيص الموقع حسب احتياجاتك

---

## 🎯 تغيير الألوان الرئيسية

### 1. افتح ملف `css/style.css`
### 2. ابحث عن `:root` في بداية الملف
### 3. غيّر الألوان:

```css
:root {
    /* ألوان رئيسية */
    --primary-color: #6366f1;      /* اللون الأساسي - غيّره لأي لون تبي */
    --secondary-color: #8b5cf6;    /* اللون الثانوي */
    --accent-color: #ec4899;       /* لون التمييز */
    
    /* ألوان الخلفية */
    --dark-bg: #0a0a0f;           /* خلفية داكنة */
    --darker-bg: #050508;         /* أغمق */
    --card-bg: #13131a;           /* خلفية الكروت */
    
    /* ألوان النصوص */
    --text-primary: #ffffff;       /* نص أبيض */
    --text-secondary: #a1a1aa;     /* نص رمادي */
    --text-muted: #71717a;         /* نص باهت */
}
```

### أمثلة ألوان جاهزة:

**Theme 1: Blue Professional**
```css
--primary-color: #2563eb;
--secondary-color: #3b82f6;
--accent-color: #06b6d4;
```

**Theme 2: Green Tech**
```css
--primary-color: #059669;
--secondary-color: #10b981;
--accent-color: #34d399;
```

**Theme 3: Orange Energy**
```css
--primary-color: #ea580c;
--secondary-color: #f97316;
--accent-color: #fb923c;
```

**Theme 4: Purple Luxury**
```css
--primary-color: #7c3aed;
--secondary-color: #8b5cf6;
--accent-color: #a78bfa;
```

---

## 📝 تغيير النصوص والمحتوى

### 1. الصفحة الرئيسية (index.html)

#### Hero Section - العنوان الرئيسي:
```html
<!-- ابحث عن: -->
<h1 class="hero-title">
    Transform Your Business with
    <span class="gradient-text">Intelligent AI Solutions</span>
</h1>

<!-- غيّره إلى: -->
<h1 class="hero-title">
    اسم شركتك أو عنوانك المميز
    <span class="gradient-text">نصك هنا</span>
</h1>
```

#### الوصف:
```html
<!-- ابحث عن: -->
<p class="hero-description">
    Unlock unlimited potential with AIZONIQ's cutting-edge...
</p>

<!-- غيّره بالوصف الخاص بك -->
```

#### الإحصائيات:
```html
<!-- ابحث عن: -->
<h3 class="stat-number" data-count="500">0</h3>
<p class="stat-label">Projects Completed</p>

<!-- غيّر الرقم والنص: -->
<h3 class="stat-number" data-count="YOUR_NUMBER">0</h3>
<p class="stat-label">نصك هنا</p>
```

### 2. صفحة الخدمات (services.html)

#### الأسعار:
```html
<!-- ابحث عن: -->
<div class="price-tag">Starting at <span>$299</span>/month</div>

<!-- غيّر السعر: -->
<div class="price-tag">يبدأ من <span>999 ريال</span>/شهرياً</div>
```

### 3. صفحة التواصل (contact.html)

#### معلومات الاتصال:
```html
<!-- رقم التلفون: -->
<a href="tel:+1234567890">+1 (234) 567-890</a>
<!-- غيّره إلى: -->
<a href="tel:+966XXXXXXXXX">+966 XX XXX XXXX</a>

<!-- الإيميل: -->
<a href="mailto:hello@aizoniq.com">hello@aizoniq.com</a>
<!-- غيّره إلى: -->
<a href="mailto:info@yourdomain.com">info@yourdomain.com</a>

<!-- العنوان: -->
<p>123 AI Street, Tech City<br>San Francisco, CA 94102</p>
<!-- غيّره إلى: -->
<p>عنوانك هنا<br>المدينة، الدولة</p>
```

---

## 🖼️ تغيير الشعار (Logo)

### الطريقة الحالية (نص):
```html
<div class="logo">
    <a href="index.html">
        <span class="logo-ai">AI</span><span class="logo-zoniq">ZONIQ</span>
    </a>
</div>
```

### الطريقة بالصورة:
1. ضع ملف الشعار في `assets/images/logo.png`
2. غيّر الكود في جميع الصفحات:

```html
<div class="logo">
    <a href="index.html">
        <img src="assets/images/logo.png" alt="شعار الشركة" style="height: 40px;">
    </a>
</div>
```

---

## 📸 إضافة الصور

### 1. صور Portfolio
في `portfolio.html`، ابحث عن:
```html
<div class="placeholder-image" style="background: linear-gradient(...);">
    <i class="fas fa-robot"></i>
</div>
```

استبدل بـ:
```html
<img src="assets/images/project-1.jpg" alt="اسم المشروع">
```

### 2. صور الفريق
في `about.html`:
```html
<div class="member-image">
    <img src="https://i.pravatar.cc/400?img=12" alt="Sarah Johnson">
</div>
```

استبدل بـ:
```html
<div class="member-image">
    <img src="assets/images/team-ceo.jpg" alt="اسم المدير">
</div>
```

### 3. Favicon
في `<head>` لكل صفحة:
```html
<link rel="icon" type="image/png" href="assets/images/favicon.png">
```

---

## 🔗 تحديث روابط السوشال ميديا

ابحث في الـ Footer عن:
```html
<div class="social-links">
    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
</div>
```

غيّر `#` بروابطك:
```html
<a href="https://twitter.com/yourhandle" aria-label="Twitter">
<a href="https://linkedin.com/company/yourcompany" aria-label="LinkedIn">
<a href="https://instagram.com/yourhandle" aria-label="Instagram">
<a href="https://facebook.com/yourpage" aria-label="Facebook">
```

---

## ⚙️ تخصيص الخطوط (Fonts)

### الخطوط الحالية:
- **Inter** - للنصوص العادية
- **Space Grotesk** - للعناوين

### تغيير الخطوط:
1. روح Google Fonts: https://fonts.google.com
2. اختر خطك المفضل
3. غيّر في `<head>`:

```html
<!-- الكود الحالي: -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

<!-- غيّره بخطك الجديد مثل: -->
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;900&display=swap" rel="stylesheet">
```

4. في `css/style.css`:
```css
body {
    font-family: 'Tajawal', sans-serif; /* بدل Inter */
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Cairo', sans-serif; /* بدل Space Grotesk */
}
```

---

## 📧 إعداد نموذج التواصل

### خيار 1: FormSpree (الأسهل)
1. سجل في https://formspree.io
2. انشئ فورم جديد
3. انسخ Form ID
4. في `js/contact.js`، غيّر:

```javascript
async function sendFormData(data) {
    try {
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
```

5. في `initContactForm()` استخدم الدالة:
```javascript
setTimeout(async () => {
    try {
        await sendFormData(data);
        showSuccess();
    } catch (error) {
        showError('حدث خطأ. حاول مرة أخرى.');
    }
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
    form.reset();
}, 2000);
```

---

## 🌐 تحويل الموقع للعربي

### 1. غيّر اتجاه الصفحة:
في كل ملف HTML:
```html
<html lang="ar" dir="rtl">
```

### 2. في `css/style.css`، أضف في البداية:
```css
[dir="rtl"] body {
    direction: rtl;
    text-align: right;
}

[dir="rtl"] .nav-menu {
    flex-direction: row-reverse;
}

[dir="rtl"] .btn {
    flex-direction: row-reverse;
}
```

### 3. غيّر جميع النصوص للعربي

---

## 🎭 إضافة أقسام جديدة

### مثال: قسم "عملاؤنا"
```html
<section class="clients-section section-padding">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <span class="section-badge">عملاؤنا</span>
            <h2>يثقون بنا</h2>
        </div>
        
        <div class="clients-logos">
            <img src="assets/images/client-1.png" alt="Client 1">
            <img src="assets/images/client-2.png" alt="Client 2">
            <!-- ... المزيد -->
        </div>
    </div>
</section>
```

### الـ CSS:
```css
.clients-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
    align-items: center;
}

.clients-logos img {
    max-width: 120px;
    opacity: 0.6;
    transition: opacity 0.3s;
}

.clients-logos img:hover {
    opacity: 1;
}
```

---

## 💡 نصائح إضافية

### 1. الاختبار قبل الرفع:
```powershell
# افتح الموقع محلياً
cd C:\aizoniq-website
python -m http.server 8000
# افتح: http://localhost:8000
```

### 2. النسخ الاحتياطي:
اعمل نسخة من المجلد كامل قبل أي تعديل كبير

### 3. التعديل التدريجي:
غيّر شيء واحد وجرّبه، ثم انتقل للتالي

### 4. استخدم DevTools:
اضغط F12 في المتصفح لفحص العناصر والتجربة

---

## 🆘 مشاكل شائعة وحلولها

### المشكلة: التعديلات ما تظهر
**الحل:** امسح الـ cache (Ctrl + Shift + R)

### المشكلة: الألوان ما تتغير
**الحل:** تأكد أنك غيّرت في ملف `css/style.css` الصحيح

### المشكلة: الصور ما تظهر
**الحل:** تأكد من المسار الصحيح: `assets/images/filename.jpg`

---

**محتاج مساعدة؟** اسأل وأنا جاهز! 💪

آخر تحديث: نوفمبر 2025
