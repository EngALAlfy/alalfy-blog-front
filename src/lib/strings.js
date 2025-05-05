// src/lib/strings.js

const strings = {
  // Site-wide strings
  site: {
    name: 'ALALFY DEV',
    tagline: 'اكتشف أحدث المقالات والرؤى والقصص من مجتمعنا',
    language: 'ar',
    direction: 'rtl',
  },
  
  // Pages metadata
  pages: {
    home: {
      title: 'الصفحة الرئيسية | مدونة',
      description: 'مرحبا بكم في مدونتنا! اكتشف أحدث المقالات والرؤى والقصص من مجتمعنا. ابق على اطلاع بمحتوىنا الجديد واستكشف الموضوعات المختلفة التي تلهم وإبلاغ.',
    },
    blog: {
      title: 'المدونة | مدونة',
      description: 'تصفح جميع مقالاتنا ومشاركاتنا. اكتشف محتوى جديد ومثير في مجموعة متنوعة من الموضوعات.',
    },
    about: {
      title: 'من نحن | مدونة',
      description: 'تعرف علينا أكثر وعلى رؤيتنا ومهمتنا وفريقنا.',
    },
    contact: {
      title: 'اتصل بنا | مدونة',
      description: 'تواصل معنا للاستفسارات والأسئلة والتعاون.',
    },
    error: {
      title: 'خطأ | مدونة',
      notFound: 'الصفحة غير موجودة',
      goHome: 'العودة للصفحة الرئيسية',
    },
  },
  
  // Layout components
  layout: {
    header: {
      navItems: [
        { label: 'الرئيسية', path: '/' },
        { label: 'المدونة', path: '/blog' },
        { label: 'الفئات', path: '/categories' },
        { label: 'من نحن', path: '/about' },
        { label: 'اتصل بنا', path: '/contact' },
      ],
      searchPlaceholder: 'ابحث هنا...',
      searchButton: 'بحث',
    },
    footer: {
      contactInfo: {
        location: 'Cairo',
        country: 'Cairo, EG',
        phone: '+20 11 53263 994',
        phoneLabel: 'Phone:',
        email: 'islam@alalfy.com',
        emailLabel: 'Email:',
      },
      socialLinks: {
        facebook: 'https://www.facebook.com/EngineerMix',
        linkedin: 'https://www.linkedin.com/in/islam-hassan-alalfy-2b2234167',
        instagram: 'https://www.instagram.com/yotech_org/',
        github: 'https://github.com/EngALAlfy',
      },
      sections: {
        usefulLinks: {
          title: 'Useful Links',
          links: [
            { label: 'Home', path: '/' },
            { label: 'About us', path: '/about' },
            { label: 'Services', path: 'https://yotech.org/ar/home#services' },
          ]
        },
        ourServices: {
          title: 'Our Services',
          links: [
            { label: 'Web Design', path: 'https://yotech.org/ar/home#services' },
            { label: 'Web Development', path: 'https://yotech.org/ar/home#services' },
            { label: 'Server Management', path: 'https://yotech.org/ar/home#services' },
            { label: 'Hosting', path: 'https://yotech.org/ar/home#services' },
            { label: 'App Development', path: 'https://yotech.org/ar/home#services' },
          ]
        },
        categories: {
          title: 'Categories',
          links: [
            { label: 'Alalfy Portfolio', path: '#' },
          ]
        },
        ourWebsites: {
          title: 'Our websites',
          links: [
            { label: 'Alalfy Portfolio', path: 'https://alalfy.com/' },
            { label: 'Our website 1', path: 'https://profile.alalfy.com/ts/t2/' },
            { label: 'Our website 2', path: 'https://profile.alalfy.com/ts/t1/' },
            { label: 'Alalfy CV', path: 'https://alalfy.com/storage/uploads/cv.pdf' },
            { label: 'YoStore online store', path: 'https://store.yotech.org/' },
          ]
        }
      },
      copyright: {
        text: '© Copyright',
        rightsReserved: 'All Rights Reserved',
        by: 'By',
        authorLink: 'https://alalfy.com/',
        authorName: 'Alalfy.com'
      }
    },
    scrollTopButton: {
      ariaLabel: 'العودة إلى الأعلى',
    },
    preloader: {
      loadingText: 'جار التحميل...',
    },
  },
  
  // Home page components
  components: {
    // BlogHero component
    blogHero: {
      featuredLabel: 'مميز',
      readMore: 'اقرأ المزيد',
      viewAllArticles: 'عرض جميع المقالات',
    },
    // FeaturedPosts component
    featuredPosts: {
      title: 'المقالات المميزة',
      subtitle: 'اكتشف أفضل المقالات في مدونتنا',
      readMore: 'اقرأ المزيد',
    },
    // CategorySection component
    categorySection: {
      title: 'تصفح حسب الفئة',
      subtitle: 'اكتشف المقالات حسب اهتماماتك',
      viewMore: 'عرض المزيد',
      categories: {
        technology: 'التكنولوجيا',
        health: 'الصحة',
        lifestyle: 'نمط الحياة',
        travel: 'السفر',
        business: 'الأعمال',
        education: 'التعليم',
      },
    },
    // CallToAction component
    callToAction: {
      title: 'انضم إلينا اليوم',
      description: 'سجل للحصول على آخر المقالات وأفضل المحتوى',
      buttonText: 'سجل الآن',
    },
    // LatestPosts component
    latestPosts: {
      title: 'أحدث المقالات',
      subtitle: 'آخر ما تم نشره على المدونة',
      readMore: 'اقرأ المزيد',
      viewAll: 'عرض الكل',
    },
    // NewsletterSection component
    newsletter: {
      title: 'اشترك في النشرة الإخبارية',
      description: 'احصل على آخر المقالات والتحديثات مباشرة إلى صندوق الوارد الخاص بك',
      buttonText: 'اشتراك',
      placeholderText: 'أدخل بريدك الإلكتروني',
      successMessage: 'شكراً لاشتراكك في النشرة الإخبارية!',
      errorMessage: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    },
  },
  
  // Blog page components
  blog: {
    pageTitle: 'المدونة',
    filterBy: 'تصفية حسب:',
    filters: {
      all: 'الكل',
      latest: 'الأحدث',
      popular: 'الأكثر شعبية',
    },
    searchResults: 'نتائج البحث عن:',
    noResults: 'لا توجد نتائج',
    readTime: '{time} دقائق للقراءة',
  },
  
  // Article page components
  article: {
    publishedAt: 'نشر في',
    updatedAt: 'تم التحديث في',
    readTime: '{time} دقائق للقراءة',
    author: 'الكاتب',
    share: 'مشاركة:',
    tags: 'الوسوم:',
    relatedArticles: 'مقالات ذات صلة',
    comments: {
      title: 'التعليقات',
      writeComment: 'اكتب تعليقاً',
      namePlaceholder: 'الاسم',
      emailPlaceholder: 'البريد الإلكتروني',
      commentPlaceholder: 'التعليق',
      submit: 'إرسال',
      replyTo: 'الرد على {name}',
    },
  },
  
  // Contact page
  contact: {
    title: 'اتصل بنا',
    subtitle: 'نحن هنا للإجابة على جميع استفساراتك',
    form: {
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      submit: 'إرسال',
      success: 'تم إرسال رسالتك بنجاح. سنرد عليك قريباً.',
      error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    },
    info: {
      address: 'العنوان',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      hours: 'ساعات العمل',
    },
  },
  
  // Common UI elements
  ui: {
    buttons: {
      submit: 'إرسال',
      cancel: 'إلغاء',
      search: 'بحث',
      readMore: 'اقرأ المزيد',
      loadMore: 'تحميل المزيد',
      back: 'رجوع',
      share: 'مشاركة',
    },
    pagination: {
      prev: 'السابق',
      next: 'التالي',
    },
    notifications: {
      success: 'تمت العملية بنجاح',
      error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
      warning: 'تحذير',
      info: 'معلومات',
    },
    validation: {
      required: 'هذا الحقل مطلوب',
      email: 'يرجى إدخال بريد إلكتروني صالح',
      minLength: 'يجب أن يكون الحقل {min} أحرف على الأقل',
      maxLength: 'يجب أن يكون الحقل {max} أحرف كحد أقصى',
    },
    loading: 'جار التحميل...',
  },
};

export default strings;