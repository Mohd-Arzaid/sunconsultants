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
  // "/schemeX": {
  //   name: "Scheme X Certification",
  //   url: "/schemeX",
  //   position: 2,
  //   parents: ["/"],
  // },
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

  // Handle dynamic routes
  if (pathname.includes("/bis-qco-updates/") && params.notificationName) {
    const pattern =
      DYNAMIC_ROUTE_PATTERNS["/bis-qco-updates/:notificationName"];
    const parents = pattern.getParents(params);
    const currentName = customTitle || pattern.getName(params);
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
          name: "Page",
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
