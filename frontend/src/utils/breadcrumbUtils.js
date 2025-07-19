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

  // General service pages (currently inactive but keeping for future)
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
  // FIXED: Corrected SchemeX URL
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
  "de": "German",
  "es": "Spanish", 
  "fr": "French",
  "id": "Indonesian",
  "it": "Italian",
  "ja": "Japanese",
  "ko": "Korean",
  "nl": "Dutch",
  "th": "Thai",
  "vi": "Vietnamese"
};

// Multi-language page name mappings
const MULTILANG_PAGE_MAPPINGS = {
  "leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis": "BIS Certification for Foreign Manufacturers",
  "guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio": "BIS Certification for Foreign Manufacturers", 
  "guide-certification-bis-pour-fabricants-etrangers-bis-inde": "BIS Certification for Foreign Manufacturers",
  "panduan-sertifikasi-bis-untuk-produsen-asing-bis-india": "BIS Certification for Foreign Manufacturers",
  "guida-alla-certificazione-bis-per-produttori-stranieri-bis-indiano": "BIS Certification for Foreign Manufacturers",
  "bis-nintei-gaikoku-seizousha-no-tame-no-gaido-india-no-bis": "BIS Certification for Foreign Manufacturers",
  "indo-bis-waeoe-jejo-eopeul-wihan-bis-injeung-gaideu": "BIS Certification for Foreign Manufacturers",
  "gids-voor-bis-certificering-voor-buitenlandse-fabrikanten-indiaas-bis": "BIS Certification for Foreign Manufacturers",
  "khumanam-kanraprong-bis-samrab-puuphlit-thangchat-bis-india": "BIS Certification for Foreign Manufacturers",
  "huong-dan-chung-nhan-bis-cho-nha-san-xuat-nuoc-ngoai-bis-an-do": "BIS Certification for Foreign Manufacturers",
  
  "was-ist-das-bis-zertifikat-indisches-bis": "What is BIS Certificate",
  "que-es-el-certificado-bis-bis-indio": "What is BIS Certificate",
  "quest-ce-que-le-certificat-bis-indien": "What is BIS Certificate",
  "apa-itu-sertifikat-bis-bis-india": "What is BIS Certificate",
  "cose-il-certificato-bis-indiano": "What is BIS Certificate",
  "bis-shomeisho-toha-nani-ka-indo-no-bis": "What is BIS Certificate",
  "bis-jeungmyeongseo-ga-mueos-indo-bis": "What is BIS Certificate",
  "wat-is-het-bis-certificaat-indiaas-bis": "What is BIS Certificate",
  "bis-certificate-khue-a-rai-bis-india": "What is BIS Certificate",
  "chung-chi-bis-la-gi-bis-an-do": "What is BIS Certificate",
  
  "was-ist-crs-bis-oder-crs-registrierung": "What is CRS BIS Registration",
  "que-es-crs-bis-o-registro-crs": "What is CRS BIS Registration",
  "quest-ce-que-le-crs-bis-ou-lenregistrement-crs": "What is CRS BIS Registration",
  "apa-itu-crs-bis-atau-registrasi-crs": "What is CRS BIS Registration",
  "cose-il-crs-bis-o-registrazione-crs": "What is CRS BIS Registration",
  "crs-bis-toha-nani-ka-crs-toroku": "What is CRS BIS Registration",
  "crs-bis-i-mueos-inga-crs-deunglog": "What is CRS BIS Registration",
  "wat-is-crs-bis-of-crs-registratie": "What is CRS BIS Registration",
  "crs-bis-khue-a-rai-rab-phit-thab-crs": "What is CRS BIS Registration",
  "crs-bis-la-gi-hoac-dang-ky-crs": "What is CRS BIS Registration",
  
  "leitfaden-zur-bis-zertifizierung-indisches-bis": "BIS Certification Guide",
  "guia-certificacion-bis-bis-indio": "BIS Certification Guide",
  "guide-certification-bis-bis-indien": "BIS Certification Guide",
  "panduan-sertifikasi-bis-bis-india": "BIS Certification Guide",
  "guida-alla-certificazione-bis-bis-indiano": "BIS Certification Guide",
  "bis-nintei-gaido-india-no-bis": "BIS Certification Guide",
  "bis-injeung-gaideu-indo-bis": "BIS Certification Guide",
  "gids-voor-bis-certificering-indiaas-bis": "BIS Certification Guide",
  "khumanam-kanraprong-bis-bis-india": "BIS Certification Guide",
  "huong-dan-chung-nhan-bis-bis-an-do": "BIS Certification Guide",
  
  "indische-bis-zertifizierung-nach-schema-x": "Indian BIS Certification Under Scheme X",
  "certificacion-bis-india-bajo-esquema-x": "Indian BIS Certification Under Scheme X",
  "certification-bis-indienne-selon-schema-x": "Indian BIS Certification Under Scheme X",
  "sertifikasi-bis-india-di-bawah-skema-x": "Indian BIS Certification Under Scheme X",
  "certificazione-bis-indiana-secondo-schema-x": "Indian BIS Certification Under Scheme X",
  "indo-no-bis-nintei-sukimu-x": "Indian BIS Certification Under Scheme X",
  "indo-bis-injeung-scheme-x-haenghaeng": "Indian BIS Certification Under Scheme X",
  "indiaas-bis-certificaat-volgens-schema-x": "Indian BIS Certification Under Scheme X",
  "bis-prathiap-india-taem-dai-tae-skema-x": "Indian BIS Certification Under Scheme X",
  "chung-nhan-bis-an-do-theo-scheme-x": "Indian BIS Certification Under Scheme X"
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
      { name: "Home", url: "/", position: 1 },
    ],
    getName: (params, customTitle) => {
      const langName = LANGUAGE_MAPPINGS[params.lang] || params.lang.toUpperCase();
      if (customTitle) return `${customTitle} (${langName})`;
      
      // Use mapped page name if available, otherwise convert slug to readable name
      const mappedName = MULTILANG_PAGE_MAPPINGS[params.page];
      if (mappedName) {
        return `${mappedName} (${langName})`;
      }
      
      // Fallback: Convert page slug to readable name
      const pageName = params.page
        ?.replace(/[-_]/g, " ")
        ?.replace(/\b\w/g, (l) => l.toUpperCase());
      return `${pageName} (${langName})`;
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
    const currentName = customTitle || pattern.getName({ lang, page }, customTitle);
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
  if (pathname.includes("/bis-qco-updates/") && pathname !== "/bis-qco-updates") {
    const notificationName = pathname.split("/bis-qco-updates/")[1];
    const pattern = DYNAMIC_ROUTE_PATTERNS["/bis-qco-updates/:notificationName"];
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

export default {
  generateBreadcrumbStructuredData,
  generateBreadcrumbTrail,
  shouldShowBreadcrumbs,
};

/**
 * Test function to validate breadcrumb coverage
 * This helps ensure all sitemap URLs have proper breadcrumbs
 */
export const testBreadcrumbCoverage = () => {
  const testUrls = [
    "/",
    "/about", 
    "/contact",
    "/webinar",
    "/videos-about-bis-certification",
    "/indian-bis-certification-under-scheme-x",
    "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    "/what-is-bis-certificate-indian-bis",
    "/bis-qco-updates",
    "/bis-qco-updates/bis-certificate-for-work-chairs",
    "/de/leitfaden-zur-bis-zertifizierung-fuer-auslaendische-hersteller-indisches-bis",
    "/es/guia-certificacion-bis-para-fabricantes-extranjeros-bis-indio",
    "/fr/guide-certification-bis-pour-fabricants-etrangers-bis-inde",
    "/privacy-policy",
    "/terms-and-conditions"
  ];

  const results = testUrls.map(url => {
    try {
      const breadcrumb = generateBreadcrumbStructuredData(url);
      return {
        url,
        success: true,
        breadcrumbCount: breadcrumb.itemListElement.length,
        breadcrumb
      };
    } catch (error) {
      return {
        url,
        success: false,
        error: error.message
      };
    }
  });

  console.log("Breadcrumb Coverage Test Results:", results);
  return results;
};
