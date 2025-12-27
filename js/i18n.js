/**
 * Simple i18n System - Bilingual Support (AR/EN)
 */

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.portfolio': 'المحفظة',
    'nav.about': 'عننا',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',

    // Hero Section
    'hero.badge': 'أهلاً بك في مستقبل الذكاء الاصطناعي',
    'hero.title': 'حول أعمالك باستخدام',
    'hero.titleHighlight': 'حلول الذكاء الاصطناعي الذكية',
    'hero.description': 'اكتشف الإمكانات غير المحدودة مع خدمات الذكاء الاصطناعي المتقدمة من AIZONIQ. من إنشاء المحتوى المؤتمت إلى تحليل البيانات المتقدم، نحضر قوة الذكاء الاصطناعي إلى متناول يدك.',
    'hero.exploreServices': 'استكشف الخدمات',
    'hero.viewWork': 'شاهد أعمالنا',

    // Hero Stats
    'stats.projects': 'مشروع مكتمل',
    'stats.clients': 'عميل سعيد',
    'stats.solutions': 'حل ذكي',
    'stats.success': 'نسبة النجاح %',

    // Services Overview
    'services.badge': 'ما نقدمه',
    'services.title': 'خدمات الذكاء الاصطناعي الشاملة',
    'services.description': 'اكتشف مجموعتنا الكاملة من حلول الذكاء الاصطناعي المصممة لرفع مستوى أعمالك',

    // Service Cards
    'service.writing': 'كتابة المحتوى بالذكاء الاصطناعي',
    'service.writing.desc': 'إنشاء محتوى عالي الجودة وجذاب في ثوان باستخدام أدوات الكتابة المتقدمة',
    'service.image': 'توليد الصور بالذكاء الاصطناعي',
    'service.image.desc': 'إنشاء صور فريدة ومذهلة من أوصاف نصية باستخدام نماذج الذكاء الاصطناعي الحديثة',
    'service.chatbot': 'روبوتات الحوار الذكية',
    'service.chatbot.desc': 'نشر ذكاء محادثة يفهم ويتفاعل مع عملائك 24/7',
    'service.analytics': 'تحليل البيانات',
    'service.analytics.desc': 'تحويل البيانات الخام إلى رؤى قابلة للتنفيذ باستخدام تحليلات قوية',
    'service.video': 'إنشاء الفيديو بالذكاء الاصطناعي',
    'service.video.desc': 'إنتاج محتوى فيديو احترافي مع تحرير وتأثيرات بمساعدة الذكاء الاصطناعي',
    'service.custom': 'حلول الذكاء الاصطناعي المخصصة',
    'service.custom.desc': 'نماذج وتكاملات ذكاء اصطناعي مصممة خصيصاً لاحتياجات عملك الفريدة',
    'service.learnMore': 'اعرف المزيد',

    // Why Choose Us
    'why.badge': 'لماذا AIZONIQ',
    'why.title': 'الذكاء خلف نجاحك',
    'why.description': 'نجمع بين تكنولوجيا الذكاء الاصطناعي المتطورة مع الخبرة البشرية لتقديم حلول تحقق نتائج حقيقية',

    'why.fast': 'سريع جداً',
    'why.fast.desc': 'احصل على النتائج في ثوان، وليس أياماً. حلول الذكاء الاصطناعي لدينا تعمل بسرعة الفكر',
    'why.secure': 'آمن وخاص',
    'why.secure.desc': 'بيانات عملائك محمية بأعلى معايير الأمان والخصوصية',
    'why.scalable': 'قابل للتوسع',
    'why.scalable.desc': 'من الشركات الناشئة إلى المؤسسات الكبرى، نحن ننمو معك',
    'why.support': 'دعم متميز',
    'why.support.desc': 'فريق الدعم المخصص لدينا متاح دائماً لمساعدتك',
    'why.scalable': 'حلول قابلة للتوسع',
    'why.scalable.desc': 'من الشركات الناشئة إلى المؤسسات، يكبر معك ذكاؤنا',

    // Scroll Indicator
    'scroll.explore': 'اسحب لاستكشاف',

    // Portfolio Page
    'portfolio.badge': 'أعمالنا',
    'portfolio.title': 'المحفظة ودراسات الحالة',
    'portfolio.description': 'اكتشف كيف ساعدنا الشركات على التحول باستخدام حلول الذكاء الاصطناعي',

    // About Page
    'about.badge': 'عن AIZONIQ',
    'about.title': 'الريادة في ثورة الذكاء الاصطناعي',
    'about.description': 'نحن في مهمة لجعل الذكاء الاصطناعي في متناول الجميع وله تأثير على الشركات في جميع أنحاء العالم',

    // Contact Page
    'contact.badge': 'احصل على التواصل',
    'contact.title': 'دعونا نبني شيء رائع',
    'contact.description': 'هل لديك مشروع في الأفق؟ دعنا نناقش كيف يمكن لحلول الذكاء الاصطناعي لدينا أن تساعدك على تحقيق أهدافك',

    // Additional
    'footer.description': 'تمكين الشركات بحلول الذكاء الاصطناعي المتقدمة. حول عملياتك، ارفع مستوى علامتك التجارية، وقد تكون رائداً في صناعتك.',
    'footer.services': 'الخدمات',
    'footer.company': 'الشركة',
    'footer.newsletter': 'النشرة البريدية',
    'footer.subscribe': 'اشترك للحصول على أحدث رؤى الذكاء الاصطناعي والتحديثات',
    'footer.email.placeholder': 'أدخل بريدك الإلكتروني',

    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة الكوكيز',

    // Services Page
    'service.writing.lead': 'إنشاء محتوى عالي الجودة وجذاب في ثوان باستخدام أدوات الكتابة المتقدمة المدعومة بـ GPT-4 ونماذج اللغة المخصصة.',
    'service.writing.feature1': 'مقالات المدونة والمقالات',
    'service.writing.feature1.desc': 'محتوى طويل الشكل محسّن لـ SEO يحتل ترتيب عالي ويجذب القراء',
    'service.writing.feature2': 'محتوى وسائل التواصل الاجتماعي',
    'service.writing.feature2.desc': 'منشورات فيروسية مصممة لكل منصة',
    'service.writing.feature3': 'أوصاف المنتجات',
    'service.writing.feature3.desc': 'نسخ مقنعة تحول الزوار إلى مشترين',
    'service.writing.feature4': 'حملات البريد الإلكتروني',
    'service.writing.feature4.desc': 'سلاسل بريد إلكتروني شخصية تزيد من المشاركة',
    'service.writing.stat1': 'أسرع 10 مرات',
    'service.writing.stat1.desc': 'من الكتابة اليدوية',
    'service.writing.stat2': 'جودة 95%',
    'service.writing.stat2.desc': 'رضا العملاء',

    // Portfolio Page
    'portfolio.item1.title': 'مساعد التجارة الإلكترونية بالذكاء الاصطناعي',
    'portfolio.item1.desc': 'طورنا روبوت محادثة ذكي زاد من مشاركة العملاء بنسبة 250% وقلل من تذاكر الدعم بنسبة 80%',
    'portfolio.item1.metric1': '250%',
    'portfolio.item1.metric1.label': 'زيادة المشاركة',
    'portfolio.item1.metric2': '80%',
    'portfolio.item1.metric2.label': 'تقليل التذاكر',
    'portfolio.item1.metric3': '2 مليون دولار+',
    'portfolio.item1.metric3.label': 'تأثير الإيرادات',

    'portfolio.item2.title': 'منصة تحليل التنبؤات',
    'portfolio.item2.desc': 'بنينا نظام تعلم آلي يتنبأ باتجاهات السوق بدقة 92%',
    'portfolio.item2.metric1': '92%',
    'portfolio.item2.metric1.label': 'دقة التنبؤ',
    'portfolio.item2.metric2': '45%',
    'portfolio.item2.metric2.label': 'زيادة العائد',
    'portfolio.item2.metric3': '24/7',
    'portfolio.item2.metric3.label': 'تحليل فوري',

    'portfolio.item3.title': 'نظام توليد المحتوى',
    'portfolio.item3.desc': 'أنشأنا محرك محتوى ذكي ينتج مقالات محسّنة لـ SEO بنطاق كبير',
    'portfolio.item3.metric1': '10 مرات',
    'portfolio.item3.metric1.label': 'إنتاجية المحتوى',
    'portfolio.item3.metric2': '95%',
    'portfolio.item3.metric2.label': 'درجة الجودة',
    'portfolio.item3.metric3': '300%',
    'portfolio.item3.metric3.label': 'نمو حركة المستخدمين',

    'portfolio.clients': 'الشركات التي تثق بنا',
    'portfolio.clientsDesc': 'نحن فخورون بالعمل مع قادة الصناعة والشركات الناشئة المبتكرة',
    'portfolio.cta': 'هل أنت مستعد لإنشاء قصة نجاحك؟',
    'portfolio.ctaDesc': 'دعنا نبني شيء رائع معاً',
    'portfolio.caseStudy': 'عرض دراسة الحالة',

    // Contact Page
    'contact.form.firstName': 'الاسم الأول',
    'contact.form.lastName': 'الاسم الأخير',
    'contact.form.email': 'عنوان البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.company': 'اسم الشركة',
    'contact.form.service': 'الخدمة المهتم بها',
    'contact.form.budget': 'ميزانية المشروع',
    'contact.form.message': 'أخبرنا عن مشروعك',
    'contact.form.selectService': 'اختر خدمة',
    'contact.form.selectBudget': 'اختر نطاق الميزانية',
    'contact.form.service1': 'كتابة المحتوى بالذكاء الاصطناعي',
    'contact.form.service2': 'توليد الصور بالذكاء الاصطناعي',
    'contact.form.service3': 'روبوتات الحوار الذكية',
    'contact.form.service4': 'تحليل البيانات',
    'contact.form.service5': 'إنشاء الفيديو',
    'contact.form.service6': 'حلول الذكاء الاصطناعي المخصصة',
    'contact.form.service7': 'استشارة عامة',
    'contact.form.budget1': 'أقل من 5000 دولار',
    'contact.form.budget2': '5000 - 10000 دولار',
    'contact.form.budget3': '10000 - 25000 دولار',
    'contact.form.budget4': '25000 - 50000 دولار',
    'contact.form.budget5': 'أكثر من 50000 دولار',
    'contact.form.terms': 'أوافق على سياسة الخصوصية وشروط الخدمة',
    'contact.form.submit': 'إرسال الرسالة',
    
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.desc': 'ملء النموذج وسيتواصل معك فريقنا في غضون 24 ساعة',
    'contact.info.phone': 'الهاتف',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.office': 'المكتب',
    'contact.info.hours': 'ساعات العمل',
    'contact.info.hoursMon': 'الإثنين - الجمعة: 9صباحاً - 6مساءً (توقيت المحيط الهادئ)',
    'contact.info.hoursWeek': 'نهايات الأسبوع: بموعد محدد',
    'contact.info.social': 'تواصل معنا',
    'contact.info.response': 'عادة ما نرد خلال ساعتين إلى 4 ساعات خلال ساعات العمل',

    // Testimonials (Arabic)
    'testimonial1.quote': 'كشف نظام تحليل البيانات الخاص بهم عن رؤى لم نكن نعرفها. زدنا عائدنا على الاستثمار بنسبة 45% في ثلاثة أشهر فقط',
    'testimonial1.name': 'إيما ويليامز',
    'testimonial1.title': 'مدير التشغيل، Growth Ventures',
    'testimonial2.quote': 'روبوت الدردشة الذي بنوه لنا يتعامل مع 80% من استفسارات العملاء تلقائياً. يمكن لفريق الدعم الآن التركيز على المشاكل المعقدة',
    'testimonial2.name': 'مايكل تشن',
    'testimonial2.title': 'الرئيس التنفيذي، Digital Solutions Inc',
    'testimonial3.quote': 'حول AIZONIQ استراتيجية المحتوى الخاصة بنا تماماً. نحن الآن ننتج 10 مرات من المحتوى في نصف الوقت، والجودة ممتازة',
    'testimonial3.name': 'مهند درندري',
    'testimonial3.title': 'الرئيس التنفيذي والمؤسس',

    // CTA Sections (Arabic)
    'cta.ready': 'هل أنت مستعد لتحويل أعمالك؟',
    'cta.join': 'انضم إلى مئات الشركات التي تستخدم AIZONIQ لأتمتة والابتكار والهيمنة على صناعاتهم',
    'cta.explore': 'استكشف جميع الخدمات',
    'cta.start': 'ابدأ رحلتك مع الذكاء الاصطناعي',
    'cta.guarantee': 'ضمان استرجاع الأموال 30 يوماً',
    'cta.consultation': 'استشارة مجانية مدرجة',
    'cta.credit': 'لا يلزم بطاقة ائتمان',

    // Image Generation Service (Arabic)
    'service.image.lead': 'قم بإنشاء صور مذهلة وفريدة من أوصاف نصية باستخدام نماذج الذكاء الاصطناعي الحديثة. مثالي للتسويق والتصميم والمشاريع الإبداعية.',
    'service.image.feature1': 'النص إلى الصورة',
    'service.image.feature1.desc': 'إنشاء صور من مطالبات نصية مفصلة',
    'service.image.feature2': 'نقل النمط',
    'service.image.feature2.desc': 'تطبيق أي أسلوب فني على صورك',
    'service.image.feature3': 'إزالة الخلفية',
    'service.image.feature3.desc': 'تحسين صور المنتج فوراً',
    'service.image.feature4': 'معالجة الدفعات',
    'service.image.feature4.desc': 'إنشاء مئات الاختلافات في المرة الواحدة',

    // Chatbot Service (Arabic)
    'service.chatbot.lead': 'نشر ذكاء محادثة مذكي يفهم عملاءك ويوفر ردود فورية ومفيدة متاحة 24/7.',
    'service.chatbot.feature1': 'متاح 24/7',
    'service.chatbot.feature1.desc': 'دائماً جاهز لمساعدة عملائك',
    'service.chatbot.feature2': 'متعدد اللغات',
    'service.chatbot.feature2.desc': 'التواصل بأي لغة',
    'service.chatbot.feature3': 'التكامل السلس',
    'service.chatbot.feature3.desc': 'يعمل مع أنظمتك الموجودة',
    'service.chatbot.feature4': 'نظام التعلم',
    'service.chatbot.feature4.desc': 'يتحسن مع كل تفاعل',

    // Analytics Service (Arabic)
    'service.analytics.lead': 'حول البيانات الخام إلى رؤى قابلة للتنفيذ باستخدام تحليلات الذكاء الاصطناعي المتقدمة. اتخذ قرارات أذكى مدعومة بالبيانات.',
    'service.analytics.feature1': 'التحليلات التنبؤية',
    'service.analytics.feature1.desc': 'التنبؤ باتجاهات وسلوك المستهلكين',
    'service.analytics.feature2': 'لوحات المراقبة الفورية',
    'service.analytics.feature2.desc': 'مراقبة المقاييس أثناء حدوثها',
    'service.analytics.feature3': 'الكشف عن الشذوذ',
    'service.analytics.feature3.desc': 'تحديد المشاكل قبل تفاقمها',
    'service.analytics.feature4': 'التقارير المخصصة',
    'service.analytics.feature4.desc': 'احصل على رؤى مصممة لاحتياجاتك',

    // Video Service (Arabic)
    'service.video.lead': 'إنتاج محتوى فيديو احترافي مع المساعدة الآلية للتحرير والمؤثرات والأتمتة. من المفاهيم إلى النسخ النهائية في دقائق.',
    'service.video.feature1': 'التحرير التلقائي',
    'service.video.feature1.desc': 'كشف المشاهد وقطعها بذكاء',
    'service.video.feature2': 'أصوات الذكاء الاصطناعي',
    'service.video.feature2.desc': 'تعليقات صوتية طبيعية بأي لغة',
    'service.video.feature3': 'توليد التأثيرات',
    'service.video.feature3.desc': 'تأثيرات واحتياطيات احترافية',
    'service.video.feature4': 'أتمتة الترجمات',
    'service.video.feature4.desc': 'إنشاء ترجمات متعددة اللغات تلقائياً',

    // Custom AI Service (Arabic)
    'service.custom.lead': 'احصل على حلول ذكاء اصطناعي مصممة خصيصاً لاحتياجات عملك الفريدة. من الاستشارة إلى النشر.',
    'service.custom.feature1': 'نماذج مخصصة',
    'service.custom.feature1.desc': 'مدربة على بيانات محددة لديك',
    'service.custom.feature2': 'التكامل الكامل',
    'service.custom.feature2.desc': 'تكامل API والنظام السلس',
    'service.custom.feature3': 'الدعم المستمر',
    'service.custom.feature3.desc': 'فريق مخصص لنجاحك',
    'service.custom.feature4': 'التحسين المستمر',
    'service.custom.feature4.desc': 'تحديثات وتحسينات منتظمة',

    // Additional (Arabic)
    'tag.ai': 'الذكاء الاصطناعي',
    'tag.ecommerce': 'التجارة الإلكترونية',
    'tag.finance': 'المالية',
    'tag.marketing': 'التسويق',
    'tag.content': 'محتوى الذكاء الاصطناعي',
    'tag.data': 'تحليل البيانات',
    'trustedBy': 'موثوق بهم من قبل',

    // FAQ Section (Arabic)
    'faq.badge': 'أسئلة شائعة',
    'faq.title': 'الأسئلة المتكررة',
    'faq.description': 'إجابات سريعة للأسئلة الشائعة حول خدماتنا',
    
    'faq.q1.title': 'كم من الوقت يستغرق للبدء؟',
    'faq.q1.answer': 'يمكن بدء معظم المشاريع في غضون 48 ساعة من استشارتنا الأولية. سنناقش متطلباتك، نقدم عرضاً، وبمجرد الموافقة، نبدأ فوراً.',
    
    'faq.q2.title': 'ما هيكل التسعير الخاص بك؟',
    'faq.q2.answer': 'نقدم أسعاراً مرنة بناءً على احتياجاتك المحددة - اشتراكات شهرية، أسعار قائمة على المشروع، أو حزم مخصصة للمشاريع الضخمة. اتصل بنا للحصول على عرض أسعار مفصل.',
    
    'faq.q3.title': 'هل تقدمون دعماً مستمراً؟',
    'faq.q3.answer': 'نعم! جميع حزمنا تشمل دعماً مستمراً وتحديثات منتظمة وتحسيناً. نحن ملتزمون بنجاحك على المدى الطويل.',
    
    'faq.q4.title': 'هل يمكنك التكامل مع الأنظمة الموجودة؟',
    'faq.q4.answer': 'بالتأكيد! حلول الذكاء الاصطناعي لدينا مصممة للتكامل السلس مع أدواتك وأنظمتك وسير عملك الموجود من خلال APIs والتكاملات المخصصة.',
    
    'faq.q5.title': 'هل بياناتي آمنة؟',
    'faq.q5.answer': 'الأمان هو أولويتنا الأساسية. نستخدم التشفير من مستوى المشاريع الضخمة، نتوافق مع معايير GDPR و SOC 2، ولا نشارك بياناتك مع أطراف ثالثة.',
    
    'faq.q6.title': 'ماذا لو لم أكن راضياً؟',
    'faq.q6.answer': 'نقدم ضمان استعادة الأموال لمدة 30 يوماً. إذا لم تكن راضياً تماماً عن خدماتنا، سنرد استثمارك، بدون أسئلة.',

    // About Page Additional (Arabic)
    'about.story.title': 'بناء مستقبل ذكاء الأعمال',
    'about.story.p1': 'تأسست AIZONIQ في عام 2023 من رؤية بسيطة: جعل الذكاء الاصطناعي متاحاً وسهل الوصول للشركات من جميع الأحجام. ما بدأ كفريق صغير من المتحمسين للذكاء الاصطناعي نما ليصبح وكالة خدمات ذكاء اصطناعي رائدة.',
    'about.story.p2': 'نعتقد أن الذكاء الاصطناعي لا يجب أن يقتصر على عمالقة التكنولوجيا. كل شركة تستحق الأدوات والخبرة لتسخير قوة الذكاء الاصطناعي التحويلية. لذلك جعلنا مهمتنا تقديم حلول ذكاء اصطناعي من مستوى المشاريع الضخمة مع خدمة شخصية وأسعار شفافة.',
    'about.story.p3': 'اليوم، ساعدنا أكثر من 250 شركة عبر صناعات مختلفة على أتمتة العمليات والحصول على رؤى أعمق وفتح تدفقات إيرادات جديدة من خلال تطبيق ذكاء اصطناعي ذكي.',
    
    'about.stats.founded': 'التأسيس',
    'about.stats.team': 'أعضاء الفريق',
    'about.stats.countries': 'الدول',
    'about.stats.awards': 'الجوائز',
    
    'about.values.title': 'ما يحركنا',
    'about.values.description': 'المبادئ التي توجه كل ما نفعله',
    'about.values.success': 'نجاح العميل',
    'about.values.success.desc': 'نجاحك هو نجاحنا. نحن ملتزمون بتقديم نتائج قابلة للقياس تحقق تأثيراً حقيقياً في الأعمال.',
    'about.values.integrity': 'النزاهة والثقة',
    'about.values.integrity.desc': 'نعمل بشفافية كاملة، مع الحفاظ على أعلى المعايير الأخلاقية في جميع تطبيقات الذكاء الاصطناعي لدينا.',
    'about.values.growth': 'النمو المستمر',
    'about.values.growth.desc': 'نستثمر في التعلم والتطوير، مما يضمن بقاء فريقنا في طليعة الابتكار في مجال الذكاء الاصطناعي.',
    'about.values.collaboration': 'التعاون',
    'about.values.collaboration.desc': 'نعمل بشكل وثيق مع العملاء كشركاء، فهم احتياجاتهم الفريدة وإنشاء حلول معاً.',
    'about.values.global': 'التأثير العالمي',
    'about.values.global.desc': 'نعتقد أن الذكاء الاصطناعي يجب أن يفيد الجميع، العمل على خلق تغيير إيجابي على نطاق عالمي.',
    
    'about.team.title': 'العقول خلف AIZONIQ',
    'about.team.description': 'خبراء ومهندسون واستراتيجيون من المستوى العالمي',
    'about.team.member1': 'مهند درندري',
    'about.team.member1.role': 'الرئيس التنفيذي والمؤسس',
    'about.team.member1.bio': 'مهندس الذكاء الاصطناعي متخصص في التعلم العميق والتعلم الآلي. خبرة في تحليل البيانات، بناء اللوحات الذكية، وتطوير حلول الأتمتة الذكية.',
    'about.team.member2': 'مايكل تشن',
    'about.team.member2.role': 'المدير التقني والمؤسس المشارك',
    'about.team.member2.bio': '15 سنة في الذكاء الاصطناعي. قاد الذكاء الاصطناعي في Meta سابقاً.',
    'about.team.member3': 'إيما ويليامز',
    'about.team.member3.role': 'رئيسة استراتيجية الذكاء الاصطناعي',
    'about.team.member3.bio': 'استشارية ذكاء اصطناعي متخصصة في تحول الأعمال.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero Section
    'hero.badge': 'Welcome to the Future of AI',
    'hero.title': 'Transform Your Business with',
    'hero.titleHighlight': 'Intelligent AI Solutions',
    'hero.description': 'Unlock unlimited potential with AIZONIQ\'s cutting-edge artificial intelligence services. From automated content creation to advanced data analytics, we bring the power of AI to your fingertips.',
    'hero.exploreServices': 'Explore Services',
    'hero.viewWork': 'View Our Work',

    // Hero Stats
    'stats.projects': 'Projects Completed',
    'stats.clients': 'Happy Clients',
    'stats.solutions': 'AI Solutions',
    'stats.success': 'Success Rate %',

    // Services Overview
    'services.badge': 'What We Offer',
    'services.title': 'Comprehensive AI Services',
    'services.description': 'Discover our full range of AI-powered solutions designed to elevate your business',

    // Service Cards
    'service.writing': 'AI Content Writing',
    'service.writing.desc': 'Generate high-quality, engaging content in seconds with our advanced AI writing tools',
    'service.image': 'AI Image Generation',
    'service.image.desc': 'Create stunning, unique visuals from text descriptions using state-of-the-art AI models',
    'service.chatbot': 'AI Chatbots',
    'service.chatbot.desc': 'Deploy intelligent conversational AI that understands and engages your customers 24/7',
    'service.analytics': 'Data Analytics',
    'service.analytics.desc': 'Transform raw data into actionable insights with AI-powered analytics and visualization',
    'service.video': 'AI Video Creation',
    'service.video.desc': 'Produce professional video content with AI-assisted editing, effects, and automation',
    'service.custom': 'Custom AI Solutions',
    'service.custom.desc': 'Tailored AI models and integrations designed specifically for your unique business needs',
    'service.learnMore': 'Learn More',

    // Why Choose Us
    'why.badge': 'Why AIZONIQ',
    'why.title': 'The Intelligence Behind Your Success',
    'why.description': 'We combine cutting-edge AI technology with human expertise to deliver solutions that drive real results',

    'why.fast': 'Lightning Fast',
    'why.fast.desc': 'Get results in seconds, not days. Our AI solutions work at the speed of thought',
    'why.secure': 'Secure & Private',
    'why.secure.desc': 'Your data is protected with industry-leading security and privacy standards',
    'why.scalable': 'Highly Scalable',
    'why.scalable.desc': 'From startups to enterprises, we grow with you',
    'why.support': 'Expert Support',
    'why.support.desc': 'Our dedicated support team is always ready to help',

    // Scroll Indicator
    'scroll.explore': 'Scroll to explore',

    // Portfolio Page
    'portfolio.badge': 'Our Work',
    'portfolio.title': 'Portfolio & Case Studies',
    'portfolio.description': 'Discover how we\'ve helped businesses transform with AI-powered solutions',

    // About Page
    'about.badge': 'About AIZONIQ',
    'about.title': 'Pioneering the AI Revolution',
    'about.description': 'We\'re on a mission to make artificial intelligence accessible and impactful for businesses worldwide',

    // Contact Page
    'contact.badge': 'Get In Touch',
    'contact.title': 'Let\'s Build Something Amazing',
    'contact.description': 'Have a project in mind? Let\'s discuss how our AI solutions can help you achieve your goals',

    // Additional
    'footer.description': 'Empowering businesses with cutting-edge artificial intelligence solutions. Transform your operations, elevate your brand, and lead your industry.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.newsletter': 'Newsletter',
    'footer.subscribe': 'Subscribe to get the latest AI insights and updates',
    'footer.email.placeholder': 'Enter your email',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',

    // Services Page - Content Writing
    'service.writing.lead': 'Generate high-quality, engaging content in seconds with our advanced AI writing tools powered by GPT-4 and custom language models.',
    'service.writing.feature1': 'Blog Posts & Articles',
    'service.writing.feature1.desc': 'SEO-optimized long-form content that ranks and engages',
    'service.writing.feature2': 'Social Media Content',
    'service.writing.feature2.desc': 'Viral-worthy posts tailored to each platform',
    'service.writing.feature3': 'Product Descriptions',
    'service.writing.feature3.desc': 'Compelling copy that converts browsers into buyers',
    'service.writing.feature4': 'Email Campaigns',
    'service.writing.feature4.desc': 'Personalized email sequences that drive engagement',
    'service.writing.stat1': '10x Faster',
    'service.writing.stat1.desc': 'Than manual writing',
    'service.writing.stat2': '95% Quality',
    'service.writing.stat2.desc': 'Client satisfaction',

    // Portfolio Page
    'portfolio.item1.title': 'E-Commerce AI Assistant',
    'portfolio.item1.desc': 'Developed an intelligent chatbot that increased customer engagement by 250% and reduced support tickets by 80%',
    'portfolio.item1.metric1': '250%',
    'portfolio.item1.metric1.label': 'Engagement Increase',
    'portfolio.item1.metric2': '80%',
    'portfolio.item1.metric2.label': 'Ticket Reduction',
    'portfolio.item1.metric3': '$2M+',
    'portfolio.item1.metric3.label': 'Revenue Impact',

    'portfolio.item2.title': 'Predictive Analytics Platform',
    'portfolio.item2.desc': 'Built a machine learning system that forecasts market trends with 92% accuracy',
    'portfolio.item2.metric1': '92%',
    'portfolio.item2.metric1.label': 'Prediction Accuracy',
    'portfolio.item2.metric2': '45%',
    'portfolio.item2.metric2.label': 'ROI Increase',
    'portfolio.item2.metric3': '24/7',
    'portfolio.item2.metric3.label': 'Real-time Analysis',

    'portfolio.item3.title': 'Content Generation System',
    'portfolio.item3.desc': 'Created an AI content engine that produces SEO-optimized articles at scale',
    'portfolio.item3.metric1': '10x',
    'portfolio.item3.metric1.label': 'Content Output',
    'portfolio.item3.metric2': '95%',
    'portfolio.item3.metric2.label': 'Quality Score',
    'portfolio.item3.metric3': '300%',
    'portfolio.item3.metric3.label': 'Traffic Growth',

    'portfolio.clients': 'Companies That Trust Us',
    'portfolio.clientsDesc': 'We\'re proud to work with industry leaders and innovative startups',
    'portfolio.cta': 'Ready to Create Your Success Story?',
    'portfolio.ctaDesc': 'Let\'s build something amazing together',
    'portfolio.caseStudy': 'View Case Study',

    // Contact Page
    'contact.form.firstName': 'First Name',
    'contact.form.lastName': 'Last Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company Name',
    'contact.form.service': 'Service Interested In',
    'contact.form.budget': 'Project Budget',
    'contact.form.message': 'Tell us about your project',
    'contact.form.selectService': 'Select a service',
    'contact.form.selectBudget': 'Select budget range',
    'contact.form.service1': 'AI Content Writing',
    'contact.form.service2': 'AI Image Generation',
    'contact.form.service3': 'AI Chatbots',
    'contact.form.service4': 'Data Analytics',
    'contact.form.service5': 'Video Creation',
    'contact.form.service6': 'Custom AI Solutions',
    'contact.form.service7': 'General Consultation',
    'contact.form.budget1': 'Under $5,000',
    'contact.form.budget2': '$5,000 - $10,000',
    'contact.form.budget3': '$10,000 - $25,000',
    'contact.form.budget4': '$25,000 - $50,000',
    'contact.form.budget5': '$50,000+',
    'contact.form.terms': 'I agree to the Privacy Policy and Terms of Service',
    'contact.form.submit': 'Send Message',
    
    'contact.info.title': 'Contact Information',
    'contact.info.desc': 'Fill out the form and our team will get back to you within 24 hours',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.office': 'Office',
    'contact.info.hours': 'Business Hours',
    'contact.info.hoursMon': 'Monday - Friday: 9AM - 6PM PST',
    'contact.info.hoursWeek': 'Weekend: By Appointment',
    'contact.info.social': 'Connect With Us',
    'contact.info.response': 'We typically respond within 2-4 hours during business hours',

    // Testimonials
    'testimonial1.quote': 'Their data analytics AI revealed insights we never knew existed. We increased our ROI by 45% in just three months',
    'testimonial1.name': 'Emma Williams',
    'testimonial1.title': 'COO, Growth Ventures',
    'testimonial2.quote': 'The AI chatbot they built for us handles 80% of customer inquiries automatically. Our support team can finally focus on complex issues',
    'testimonial2.name': 'Michael Chen',
    'testimonial2.title': 'CEO, Digital Solutions Inc',
    'testimonial3.quote': 'AIZONIQ transformed our content strategy completely. We\'re now producing 10x more content in half the time, and the quality is outstanding',
    'testimonial3.name': 'Mohannad Darandari',
    'testimonial3.title': 'CEO & Founder',

    // CTA Sections
    'cta.ready': 'Ready to Transform Your Business?',
    'cta.join': 'Join hundreds of companies already using AIZONIQ to automate, innovate, and dominate their industries',
    'cta.explore': 'Explore All Services',
    'cta.start': 'Start Your AI Journey',
    'cta.guarantee': 'day money-back guarantee-30',
    'cta.consultation': 'Free consultation included',
    'cta.credit': 'No credit card required',

    // Image Generation Service
    'service.image.lead': 'Create stunning, unique visuals from text descriptions using our state-of-the-art AI models. Perfect for marketing, design, and creative projects.',
    'service.image.feature1': 'Text-to-Image',
    'service.image.feature1.desc': 'Generate images from detailed text prompts',
    'service.image.feature2': 'Style Transfer',
    'service.image.feature2.desc': 'Apply any artistic style to your images',
    'service.image.feature3': 'Background Removal',
    'service.image.feature3.desc': 'Perfect your product photos instantly',
    'service.image.feature4': 'Batch Processing',
    'service.image.feature4.desc': 'Generate hundreds of variations at once',

    // Chatbot Service
    'service.chatbot.lead': 'Deploy intelligent conversational AI that understands your customers and provides instant, helpful responses available 24/7.',
    'service.chatbot.feature1': '24/7 Availability',
    'service.chatbot.feature1.desc': 'Always ready to assist your customers',
    'service.chatbot.feature2': 'Multi-Language',
    'service.chatbot.feature2.desc': 'Communicate in any language',
    'service.chatbot.feature3': 'Seamless Integration',
    'service.chatbot.feature3.desc': 'Works with your existing systems',
    'service.chatbot.feature4': 'Learning System',
    'service.chatbot.feature4.desc': 'Improves with every interaction',

    // Analytics Service  
    'service.analytics.lead': 'Transform raw data into actionable insights with advanced AI analytics. Make smarter decisions backed by data.',
    'service.analytics.feature1': 'Predictive Analytics',
    'service.analytics.feature1.desc': 'Forecast trends and customer behavior',
    'service.analytics.feature2': 'Real-time Dashboards',
    'service.analytics.feature2.desc': 'Monitor metrics as they happen',
    'service.analytics.feature3': 'Anomaly Detection',
    'service.analytics.feature3.desc': 'Identify issues before they escalate',
    'service.analytics.feature4': 'Custom Reports',
    'service.analytics.feature4.desc': 'Get insights tailored to your needs',

    // Video Service
    'service.video.lead': 'Produce professional video content with AI-assisted editing, effects, and automation. From concepts to final cuts in minutes.',
    'service.video.feature1': 'Auto-Editing',
    'service.video.feature1.desc': 'Intelligent scene detection and cutting',
    'service.video.feature2': 'AI Voices',
    'service.video.feature2.desc': 'Natural sounding voiceovers in any language',
    'service.video.feature3': 'Effect Generation',
    'service.video.feature3.desc': 'Professional effects and transitions',
    'service.video.feature4': 'Subtitle Automation',
    'service.video.feature4.desc': 'Auto-generate multilingual subtitles',

    // Custom AI Service
    'service.custom.lead': 'Get AI solutions tailored specifically to your unique business needs. From consultation to deployment.',
    'service.custom.feature1': 'Custom Models',
    'service.custom.feature1.desc': 'Trained on your specific data',
    'service.custom.feature2': 'Full Integration',
    'service.custom.feature2.desc': 'Seamless API and system integration',
    'service.custom.feature3': 'Ongoing Support',
    'service.custom.feature3.desc': 'Dedicated team for your success',
    'service.custom.feature4': 'Continuous Improvement',
    'service.custom.feature4.desc': 'Regular updates and optimization',

    // Additional
    'tag.ai': 'AI',
    'tag.ecommerce': 'E-commerce',
    'tag.finance': 'Finance',
    'tag.marketing': 'Marketing',
    'tag.content': 'Content AI',
    'tag.data': 'Data Analytics',
    'trustedBy': 'Trusted By',

    // FAQ Section (English)
    'faq.badge': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Quick answers to common questions about our services',
    
    'faq.q1.title': 'How long does it take to get started?',
    'faq.q1.answer': 'Most projects can begin within 48 hours after our initial consultation. We\'ll discuss your requirements, provide a proposal, and once approved, we start immediately.',
    
    'faq.q2.title': 'What is your pricing structure?',
    'faq.q2.answer': 'We offer flexible pricing based on your specific needs - monthly subscriptions, project-based pricing, or custom enterprise packages. Contact us for a detailed quote.',
    
    'faq.q3.title': 'Do you offer ongoing support?',
    'faq.q3.answer': 'Yes! All our packages include ongoing support, regular updates, and optimization. We\'re committed to your long-term success.',
    
    'faq.q4.title': 'Can you integrate with existing systems?',
    'faq.q4.answer': 'Absolutely! Our AI solutions are designed to integrate seamlessly with your existing tools, platforms, and workflows through APIs and custom integrations.',
    
    'faq.q5.title': 'Is my data secure?',
    'faq.q5.answer': 'Security is our top priority. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and never share your data with third parties.',
    
    'faq.q6.title': 'What if I\'m not satisfied?',
    'faq.q6.answer': 'We offer a 30-day money-back guarantee. If you\'re not completely satisfied with our services, we\'ll refund your investment, no questions asked.',

    // About Page Additional (English)
    'about.story.title': 'Building the Future of Business Intelligence',
    'about.story.p1': 'Founded in 2023, AIZONIQ emerged from a simple vision: to democratize artificial intelligence and make it accessible to businesses of all sizes. What started as a small team of AI enthusiasts has grown into a premier AI services agency.',
    'about.story.p2': 'We believe that AI shouldn\'t be confined to tech giants. Every business deserves the tools and expertise to harness the transformative power of artificial intelligence. That\'s why we\'ve made it our mission to deliver enterprise-grade AI solutions with personalized service and transparent pricing.',
    'about.story.p3': 'Today, we\'ve helped over 250 companies across various industries automate operations, gain deeper insights, and unlock new revenue streams through intelligent AI implementation.',
    
    'about.stats.founded': 'Founded',
    'about.stats.team': 'Team Members',
    'about.stats.countries': 'Countries',
    'about.stats.awards': 'Awards',
    
    'about.values.title': 'What Drives Us',
    'about.values.description': 'The principles that guide everything we do',
    'about.values.success': 'Client Success',
    'about.values.success.desc': 'Your success is our success. We\'re committed to delivering measurable results that drive real business impact.',
    'about.values.integrity': 'Integrity & Trust',
    'about.values.integrity.desc': 'We operate with complete transparency, maintaining the highest ethical standards in all our AI implementations.',
    'about.values.growth': 'Continuous Growth',
    'about.values.growth.desc': 'We invest in learning and development, ensuring our team stays at the forefront of AI innovation.',
    'about.values.collaboration': 'Collaboration',
    'about.values.collaboration.desc': 'We work closely with clients as partners, understanding their unique needs and co-creating solutions.',
    'about.values.global': 'Global Impact',
    'about.values.global.desc': 'We believe AI should benefit everyone, working to create positive change on a global scale.',
    
    'about.team.title': 'The Minds Behind AIZONIQ',
    'about.team.description': 'World-class AI experts, engineers, and strategists',
    'about.team.member1': 'Mohannad Darandari',
    'about.team.member1.role': 'CEO & Founder',
    'about.team.member1.bio': 'AI Engineer with expertise in deep learning and machine learning. Specialized in data analytics, intelligent dashboards, and developing advanced automation solutions.',
    'about.team.member2': 'Michael Chen',
    'about.team.member2.role': 'CTO & Co-Founder',
    'about.team.member2.bio': '15 years in AI. Previously led AI at Meta.',
    'about.team.member3': 'Emma Williams',
    'about.team.member3.role': 'Head of AI Strategy',
    'about.team.member3.bio': 'AI consultant with expertise in business transformation.'
  }
};

class I18n {
  constructor() {
    this.currentLanguage = localStorage.getItem('aizoniq_language') || 'ar';
    this.initializeLanguage();
    this.setupLanguageToggle();
  }

  init() {
    // Initialize i18n system
    this.initializeLanguage();
  }

  initializeLanguage() {
    // تطبيق اللغة والاتجاه عند البداية
    document.documentElement.lang = this.currentLanguage;
    document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    this.applyLanguage();
  }

  setLanguage(lang) {
    if (lang === 'ar' || lang === 'en') {
      this.currentLanguage = lang;
      localStorage.setItem('aizoniq_language', lang);
      
      // تحديث اللغة والاتجاه
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      
      // تحديث جميع الترجمات
      this.applyLanguage();
      this.updateToggleButton();
      
      // إرسال حدث عند تغيير اللغة
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
    }
  }

  get(key) {
    return translations[this.currentLanguage][key] || key;
  }

  isRTL() {
    return this.currentLanguage === 'ar';
  }

  applyLanguage() {
    // تحديث جميع العناصر التي لديها data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const text = this.get(key);
      
      // معالجة خاصة للـ inputs
      if (element.tagName === 'INPUT') {
        element.placeholder = text;
      } else if (element.tagName === 'A') {
        // للـ links - تحديث النص المباشر فقط
        if (element.childNodes.length === 0) {
          element.textContent = text;
        } else {
          element.textContent = '';
          element.appendChild(document.createTextNode(text));
        }
      } else {
        // للعناصر الأخرى - تحديث فقط النص المباشر
        // الحفاظ على العناصر الفرعية مثل الأيقونات
        const firstChild = element.firstChild;
        if (firstChild && firstChild.nodeType === 3) {
          // إذا كان أول عنصر فرعي هو text node، قم بتحديثه
          firstChild.textContent = text;
        } else if (!firstChild) {
          // إذا لم يكن هناك عناصر فرعية
          element.textContent = text;
        } else {
          // إذا كان هناك عناصر فرعية، أضف النص قبلها
          element.insertBefore(document.createTextNode(text), firstChild);
        }
      }
    });
  }

  setupLanguageToggle() {
    // الانتظار لتحميل الـ DOM بالكامل
    const setupToggle = () => {
      const toggleBtn = document.getElementById('language-toggle');
      if (toggleBtn) {
        // إضافة مستمع للنقر على الزر
        toggleBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.setLanguage(this.currentLanguage === 'ar' ? 'en' : 'ar');
        });
        // تحديث نص الزر الابتدائي
        this.updateToggleButton();
      } else {
        // إعادة محاولة إذا لم يتم العثور على الزر بعد
        setTimeout(setupToggle, 100);
      }
    };
    setupToggle();
  }

  updateToggleButton() {
    const toggleBtn = document.getElementById('language-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = this.currentLanguage === 'ar' ? 'EN' : 'AR';
    }
  }
}

// Initialize and export
const i18n = new I18n();
