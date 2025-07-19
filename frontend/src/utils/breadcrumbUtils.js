// Breadcrumb structured data utility for SEO
// Generates JSON-LD breadcrumb schema without rendering visible UI components

const SITE_STRUCTURE = {
  // Home page
  "/": {
    name: "Home",
    url: "/",
    position: 1,
  },

  // Main pages
  "/about": {
    name: "About Us",
    url: "/about",
    position: 2,
    parents: ["/"],
  },
  "/contact": {
    name: "Contact Us",
    url: "/contact",
    position: 2,
    parents: ["/"],
  },
  "/clients": {
    name: "Our Clients",
    url: "/clients",
    position: 2,
    parents: ["/"],
  },
  "/sitemap": {
    name: "Sitemap",
    url: "/sitemap",
    position: 2,
    parents: ["/"],
  },
  "/privacy-policy": {
    name: "Privacy Policy",
    url: "/privacy-policy",
    position: 2,
    parents: ["/"],
  },
  "/terms-and-conditions": {
    name: "Terms and Conditions",
    url: "/terms-and-conditions",
    position: 2,
    parents: ["/"],
  },
  "/404": {
    name: "Page Not Found",
    url: "/404",
    position: 2,
    parents: ["/"],
  },

  // Update pages
  "/bis-qco-updates": {
    name: "BIS QCO Updates",
    url: "/bis-qco-updates",
    position: 2,
    parents: ["/"],
  },
  "/ministry-updates": {
    name: "Ministry Updates",
    url: "/ministry-updates",
    position: 2,
    parents: ["/"],
  },
  "/international-audits": {
    name: "International Audits",
    url: "/international-audits",
    position: 2,
    parents: ["/"],
  },
  "/seminars-and-exhibitions": {
    name: "Seminars and Exhibitions",
    url: "/seminars-and-exhibitions",
    position: 2,
    parents: ["/"],
  },
  "/webinar": {
    name: "Webinar",
    url: "/webinar",
    position: 2,
    parents: ["/"],
  },
  "/videos-about-bis-certification": {
    name: "Videos About BIS Certification",
    url: "/videos-about-bis-certification",
    position: 2,
    parents: ["/"],
  },

  // General service pages
  "/cdsco-registration-certification": {
    name: "CDSCO Registration & Certification",
    url: "/cdsco-registration-certification",
    position: 2,
    parents: ["/"],
  },
  "/bee-certification": {
    name: "BEE Certification",
    url: "/bee-certification",
    position: 2,
    parents: ["/"],
  },
  "/ce-certification": {
    name: "CE Certification",
    url: "/ce-certification",
    position: 2,
    parents: ["/"],
  },
  "/emi-emc-certification": {
    name: "EMI EMC Certification",
    url: "/emi-emc-certification",
    position: 2,
    parents: ["/"],
  },
  "/cb-certification": {
    name: "CB Certification",
    url: "/cb-certification",
    position: 2,
    parents: ["/"],
  },

  // BIS service pages - FIXED URLs
  "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis": {
    name: "BIS Certification for Foreign Manufacturers",
    url: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    position: 2,
    parents: ["/"],
  },
  "/what-is-bis-certificate-indian-bis": {
    name: "What is BIS Certificate",
    url: "/what-is-bis-certificate-indian-bis",
    position: 2,
    parents: ["/"],
  },
  "/a-guide-to-bis-certification-indian-bis": {
    name: "BIS Certification Guide",
    url: "/a-guide-to-bis-certification-indian-bis",
    position: 2,
    parents: ["/"],
  },
  "/what-is-crs-bis-or-crs-registration": {
    name: "CRS BIS Registration",
    url: "/what-is-crs-bis-or-crs-registration",
    position: 2,
    parents: ["/"],
  },
  "/indian-bis-certification-under-scheme-x": {
    name: "Indian BIS Certification Under Scheme X",
    url: "/indian-bis-certification-under-scheme-x",
    position: 2,
    parents: ["/"],
  },

  // EPR service pages
  "/a-guide-on-how-to-obtain-epr-certificate": {
    name: "EPR Certificate Guide",
    url: "/a-guide-on-how-to-obtain-epr-certificate",
    position: 2,
    parents: ["/"],
  },
  "/epr-certificate-for-plastic-waste-management-pwm": {
    name: "EPR Certificate for Plastic Waste Management",
    url: "/epr-certificate-for-plastic-waste-management-pwm",
    position: 2,
    parents: ["/"],
  },
  "/epr-certificate-for-battery-waste-management-bwm": {
    name: "EPR Certificate for Battery Waste Management",
    url: "/epr-certificate-for-battery-waste-management-bwm",
    position: 2,
    parents: ["/"],
  },

  // Other certification pages
  "/a-guide-on-how-to-obtain-lmpc-certificate": {
    name: "LMPC Certificate Guide",
    url: "/a-guide-on-how-to-obtain-lmpc-certificate",
    position: 2,
    parents: ["/"],
  },
  "/what-is-legal-metrology-or-lmpc-certificate": {
    name: "Legal Metrology LMPC Certificate",
    url: "/what-is-legal-metrology-or-lmpc-certificate",
    position: 2,
    parents: ["/"],
  },
  "/information-about-peso-certification-peso-license-india": {
    name: "PESO Certification & License",
    url: "/information-about-peso-certification-peso-license-india",
    position: 2,
    parents: ["/"],
  },
  "/information-about-tec-certificate-mtcte": {
    name: "TEC Certificate MTCTE",
    url: "/information-about-tec-certificate-mtcte",
    position: 2,
    parents: ["/"],
  },
  "/information-about-wpc-certificate-eta-approval": {
    name: "WPC Certificate ETA Approval",
    url: "/information-about-wpc-certificate-eta-approval",
    position: 2,
    parents: ["/"],
  },
  "/restriction-of-hazardous-substance-rohs-certificate": {
    name: "RoHS Certificate",
    url: "/restriction-of-hazardous-substance-rohs-certificate",
    position: 2,
    parents: ["/"],
  },
  "/lhscable": {
    name: "LHS Cable Certification",
    url: "/lhscable",
    position: 2,
    parents: ["/"],
  },
};

// Language mappings for multi-language support
const LANGUAGE_MAPPINGS = {
  de: "German",
  es: "Spanish",
  fr: "French",
  id: "Indonesian",
  it: "Italian",
  ja: "Japanese",
  ko: "Korean",
  nl: "Dutch",
  th: "Thai",
  vi: "Vietnamese",
};

// Translated "Home" text for each language
const HOME_TRANSLATIONS = {
  de: "Startseite",
  es: "Inicio",
  fr: "Accueil",
  id: "Beranda",
  it: "Home",
  ja: "ホーム",
  ko: "홈",
  nl: "Home",
  th: "หน้าแรก",
  vi: "Trang chủ",
};

// Multi-language page name mappings (translated names)
const MULTILANG_PAGE_MAPPINGS = {
  // German translations
  "leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis":
    "BIS-Zertifizierung für ausländische Hersteller",
  "was-ist-das-bis-zertifikat-indisches-bis": "Was ist das BIS-Zertifikat",
  "was-ist-crs-bis-oder-crs-registrierung": "Was ist CRS BIS Registrierung",
  "leitfaden-zur-bis-zertifizierung-indisches-bis":
    "Leitfaden zur BIS-Zertifizierung",
  "indische-bis-zertifizierung-nach-schema-x":
    "Indische BIS-Zertifizierung nach Schema X",

  // Spanish translations
  "guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio":
    "Certificación BIS para Fabricantes Extranjeros",
  "que-es-el-certificado-bis-bis-indio": "Qué es el Certificado BIS",
  "que-es-crs-bis-o-registro-crs": "Qué es CRS BIS o Registro CRS",
  "guia-certificacion-bis-bis-indio": "Guía de Certificación BIS",
  "certificacion-bis-india-bajo-esquema-x":
    "Certificación BIS India bajo Esquema X",

  // French translations
  "guide-certification-bis-pour-fabricants-etrangers-bis-inde":
    "Certification BIS pour Fabricants Étrangers",
  "quest-ce-que-le-certificat-bis-indien": "Qu'est-ce que le Certificat BIS",
  "quest-ce-que-le-crs-bis-ou-lenregistrement-crs":
    "Qu'est-ce que le CRS BIS ou l'Enregistrement CRS",
  "guide-certification-bis-bis-indien": "Guide de Certification BIS",
  "certification-bis-indienne-selon-schema-x":
    "Certification BIS Indienne selon Schéma X",

  // Indonesian translations
  "panduan-sertifikasi-bis-untuk-produsen-asing-bis-india":
    "Sertifikasi BIS untuk Produsen Asing",
  "apa-itu-sertifikat-bis-bis-india": "Apa itu Sertifikat BIS",
  "apa-itu-crs-bis-atau-registrasi-crs": "Apa itu CRS BIS atau Registrasi CRS",
  "panduan-sertifikasi-bis-bis-india": "Panduan Sertifikasi BIS",
  "sertifikasi-bis-india-di-bawah-skema-x":
    "Sertifikasi BIS India di bawah Skema X",

  // Italian translations
  "guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano":
    "Certificazione BIS per Produttori Stranieri",
  "cose-il-certificato-bis-indiano": "Cos'è il Certificato BIS",
  "cose-il-crs-bis-o-registrazione-crs": "Cos'è il CRS BIS o Registrazione CRS",
  "guida-alla-certificazione-bis-bis-indiano": "Guida alla Certificazione BIS",
  "certificazione-bis-indiana-secondo-schema-x":
    "Certificazione BIS Indiana secondo Schema X",

  // Japanese translations
  "bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis":
    "外国メーカー向けBIS認定",
  "bis-shomeisho-toha-nani-ka-indo-no-bis": "BIS証明書とは",
  "crs-bis-toha-nani-ka-crs-toroku": "CRS BIS登録とは",
  "bis-nintei-gaido-india-no-bis": "BIS認定ガイド",
  "indo-no-bis-nintei-sukimu-x": "インドのBIS認定スキームX",

  // Korean translations
  "indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu":
    "외국 제조업체를 위한 BIS 인증",
  "bis-jeungmyeongseo-ga-mueos-indo-bis": "BIS 증명서가 무엇",
  "crs-bis-i-mueos-inga-crs-deunglog": "CRS BIS가 무엇인가 CRS 등록",
  "bis-injeung-gaideu-indo-bis": "BIS 인증 가이드",
  "indo-bis-injeung-scheme-x-haenghaeng": "인도 BIS 인증 Scheme X 행행",

  // Dutch translations
  "gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis":
    "BIS Certificering voor Buitenlandse Fabrikanten",
  "wat-is-het-bis-certificaat-indiaas-bis": "Wat is het BIS Certificaat",
  "wat-is-crs-bis-of-crs-registratie": "Wat is CRS BIS of CRS Registratie",
  "gids-voor-bis-certificering-indiaas-bis": "Gids voor BIS Certificering",
  "indiaas-bis-certificaat-volgens-schema-x":
    "Indiaans BIS Certificaat volgens Schema X",

  // Thai translations
  "khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india":
    "การรับรองBISสำหรับผู้ผลิตต่างชาติ",
  "bis-certificate-khue-a-rai-bis-india": "ใบรับรองBISคืออะไร",
  "crs-bis-khue-a-rai-rab-phit-thab-crs": "CRS BISคืออะไรหรือการรับผิดชอบCRS",
  "khumanam-kanraprong-bis-bis-india": "คู่มือการรับรองBIS",
  "bis-prathiap-india-taem-dai-tae-skema-x":
    "การรับรองBISอินเดียแต่มได้แต่สกีมาX",

  // Vietnamese translations
  "huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do":
    "Chứng nhận BIS cho Nhà sản xuất Nước ngoài",
  "chung-chi-bis-la-gi-bis-an-do": "Chứng chỉ BIS là gì",
  "crs-bis-la-gi-hoac-dang-ky-crs": "CRS BIS là gì hoặc Đăng ký CRS",
  "huong-dan-chung-nhan-bis-bis-an-do": "Hướng dẫn Chứng nhận BIS",
  "chung-nhan-bis-an-do-theo-scheme-x": "Chứng nhận BIS Ấn Độ theo Scheme X",
};

// Dynamic route patterns for nested pages
const DYNAMIC_ROUTE_PATTERNS = {
  "/bis-qco-updates/:notificationName": {
    getParents: (params) => [
      { name: "Home", url: "/", position: 1 },
      { name: "BIS QCO Updates", url: "/bis-qco-updates", position: 2 },
    ],
    getName: (params) =>
      `BIS Certificate for ${params.notificationName
        ?.replace(/[-_]/g, " ")
        ?.replace(/\b\w/g, (l) => l.toUpperCase())}`,
    getPosition: () => 3,
  },
  "/:lang/:page": {
    getParents: (params) => [
      {
        name: HOME_TRANSLATIONS[params.lang] || "Home",
        url: "/",
        position: 1,
      },
    ],
    getName: (params, customTitle) => {
      if (customTitle) return customTitle;

      // Use translated page name if available
      const translatedName = MULTILANG_PAGE_MAPPINGS[params.page];
      if (translatedName) {
        return translatedName;
      }

      // Fallback: Convert page slug to readable name
      const pageName = params.page
        ?.replace(/[-_]/g, " ")
        ?.replace(/\b\w/g, (l) => l.toUpperCase());
      return pageName;
    },
    getPosition: () => 2,
  },
};

/**
 * Generate breadcrumb structured data for SEO
 */
export const generateBreadcrumbStructuredData = (
  pathname,
  params = {},
  customTitle = null
) => {
  const baseUrl = "https://bis-certifications.com";

  // Handle multi-language routes (/:lang/page-name)
  const langMatch = pathname.match(/^\/([a-z]{2})\/(.+)$/);
  if (langMatch) {
    const [, lang, page] = langMatch;
    const pattern = DYNAMIC_ROUTE_PATTERNS["/:lang/:page"];
    const parents = pattern.getParents({ lang, page });
    const currentName =
      customTitle || pattern.getName({ lang, page }, customTitle);
    const currentPosition = pattern.getPosition();

    const breadcrumbList = [
      ...parents.map((parent) => ({
        "@type": "ListItem",
        position: parent.position,
        name: parent.name,
        item: `${baseUrl}${parent.url}`,
      })),
      {
        "@type": "ListItem",
        position: currentPosition,
        name: currentName,
        item: `${baseUrl}${pathname}`,
      },
    ];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbList,
    };
  }

  // Handle BIS notification detail pages
  if (
    pathname.includes("/bis-qco-updates/") &&
    pathname !== "/bis-qco-updates"
  ) {
    const notificationName = pathname.split("/bis-qco-updates/")[1];
    const pattern =
      DYNAMIC_ROUTE_PATTERNS["/bis-qco-updates/:notificationName"];
    const parents = pattern.getParents({ notificationName });
    const currentName = customTitle || pattern.getName({ notificationName });
    const currentPosition = pattern.getPosition();

    const breadcrumbList = [
      ...parents.map((parent) => ({
        "@type": "ListItem",
        position: parent.position,
        name: parent.name,
        item: `${baseUrl}${parent.url}`,
      })),
      {
        "@type": "ListItem",
        position: currentPosition,
        name: currentName,
        item: `${baseUrl}${pathname}`,
      },
    ];

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbList,
    };
  }

  // Handle static routes
  const currentPage = SITE_STRUCTURE[pathname];

  if (!currentPage) {
    // Default breadcrumb for unknown pages
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: customTitle || "Page",
          item: `${baseUrl}${pathname}`,
        },
      ],
    };
  }

  // Build breadcrumb trail
  const breadcrumbList = [];

  // Add parent pages
  if (currentPage.parents) {
    currentPage.parents.forEach((parentPath, index) => {
      const parent = SITE_STRUCTURE[parentPath];
      if (parent) {
        breadcrumbList.push({
          "@type": "ListItem",
          position: index + 1,
          name: parent.name,
          item: `${baseUrl}${parent.url}`,
        });
      }
    });
  }

  // Add current page
  breadcrumbList.push({
    "@type": "ListItem",
    position: currentPage.position,
    name: customTitle || currentPage.name,
    item: `${baseUrl}${currentPage.url}`,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbList,
  };
};

/**
 * Generate breadcrumb trail for display purposes (optional)
 */
export const generateBreadcrumbTrail = (
  pathname,
  params = {},
  customTitle = null
) => {
  const structuredData = generateBreadcrumbStructuredData(
    pathname,
    params,
    customTitle
  );
  return structuredData.itemListElement.map((item) => ({
    name: item.name,
    url: item.item.replace("https://bis-certifications.com", ""),
    position: item.position,
  }));
};

/**
 * Check if a page should have breadcrumbs
 */
export const shouldShowBreadcrumbs = (pathname) => {
  // Always show breadcrumbs for pages that are not the home page
  if (pathname === "/") return false;
  return true;
};

/**
 * Test function to validate breadcrumb coverage for all sitemap URLs
 */
export const testBreadcrumbCoverage = () => {
  const testResults = [];

  // Test static pages
  Object.keys(SITE_STRUCTURE).forEach((path) => {
    const result = generateBreadcrumbStructuredData(path);
    testResults.push({
      path,
      type: "static",
      breadcrumbCount: result.itemListElement.length,
      success: result.itemListElement.length >= 2,
    });
  });

  // Test multi-language pages
  Object.keys(MULTILANG_PAGE_MAPPINGS).forEach((page) => {
    Object.keys(LANGUAGE_MAPPINGS).forEach((lang) => {
      const path = `/${lang}/${page}`;
      const result = generateBreadcrumbStructuredData(path);
      testResults.push({
        path,
        type: "multilang",
        breadcrumbCount: result.itemListElement.length,
        success: result.itemListElement.length >= 2,
      });
    });
  });

  // Test BIS notification pages (sample)
  const sampleNotifications = [
    "bis-certificate-for-work-chairs",
    "bis-certificate-for-tables-and-desks",
    "bis-certificate-for-water-storage-tanks",
  ];

  sampleNotifications.forEach((notification) => {
    const path = `/bis-qco-updates/${notification}`;
    const result = generateBreadcrumbStructuredData(path);
    testResults.push({
      path,
      type: "notification",
      breadcrumbCount: result.itemListElement.length,
      success: result.itemListElement.length >= 3,
    });
  });

  const summary = {
    total: testResults.length,
    successful: testResults.filter((r) => r.success).length,
    failed: testResults.filter((r) => !r.success).length,
    coverage: `${Math.round(
      (testResults.filter((r) => r.success).length / testResults.length) * 100
    )}%`,
  };

  console.log("Breadcrumb Coverage Test Results:", summary);
  return { results: testResults, summary };
};

export default {
  generateBreadcrumbStructuredData,
  generateBreadcrumbTrail,
  shouldShowBreadcrumbs,
  testBreadcrumbCoverage,
};
