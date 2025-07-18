// Breadcrumb structured data utility for SEO
// Generates JSON-LD breadcrumb schema without rendering visible UI components
// Updated with comprehensive site structure analysis

const SITE_STRUCTURE = {
  // Home page (excluded from breadcrumbs per Google guidelines)
  "/": {
    name: "Home",
    url: "/",
    position: 1,
  },

  // ============= MAIN INFORMATIONAL PAGES =============
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

  // ============= NEWS & UPDATES PAGES =============
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
    name: "Webinars",
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

  // ============= REGULATORY CERTIFICATION PAGES =============
  "/cdsco-registration-certification": {
    name: "CDSCO Registration & Certification",
    url: "/cdsco-registration-certification",
    position: 2,
    parents: ["/"],
  },
  "/indian-bis-certification-under-scheme-x": {
    name: "BIS Certification Under Scheme X",
    url: "/indian-bis-certification-under-scheme-x", 
    position: 2,
    parents: ["/"],
  },
  "/bee-certification": {
    name: "BEE Star Rating Certification",
    url: "/bee-certification",
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

  // ============= INTERNATIONAL CERTIFICATION PAGES =============
  "/ce-certification": {
    name: "CE Marking Certification",
    url: "/ce-certification",
    position: 2,
    parents: ["/"],
  },
  "/emi-emc-certification": {
    name: "EMI EMC Testing & Certification", 
    url: "/emi-emc-certification",
    position: 2,
    parents: ["/"],
  },
  "/cb-certification": {
    name: "CB Scheme Certification",
    url: "/cb-certification",
    position: 2,
    parents: ["/"],
  },
  "/restriction-of-hazardous-substance-rohs-certificate": {
    name: "RoHS Compliance Certificate",
    url: "/restriction-of-hazardous-substance-rohs-certificate",
    position: 2,
    parents: ["/"],
  },

  // ============= BIS CERTIFICATION GUIDE PAGES =============
  "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis": {
    name: "BIS Certification for Foreign Manufacturers",
    url: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
    position: 2,
    parents: ["/"],
  },
  "/what-is-bis-certificate-indian-bis": {
    name: "What is BIS Certificate & ISI Mark",
    url: "/what-is-bis-certificate-indian-bis",
    position: 2,
    parents: ["/"],
  },
  "/a-guide-to-bis-certification-indian-bis": {
    name: "Complete Guide to BIS Certification",
    url: "/a-guide-to-bis-certification-indian-bis", 
    position: 2,
    parents: ["/"],
  },
  "/what-is-crs-bis-or-crs-registration": {
    name: "CRS BIS Registration Process",
    url: "/what-is-crs-bis-or-crs-registration",
    position: 2,
    parents: ["/"],
  },
  "/lhs-cable-certification": {
    name: "LHS Cable Certification",
    url: "/lhs-cable-certification",
    position: 2,
    parents: ["/"],
  },

  // ============= EPR & WASTE MANAGEMENT PAGES =============
  "/a-guide-on-how-to-obtain-epr-certificate": {
    name: "EPR Certificate Complete Guide",
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

  // ============= LEGAL METROLOGY PAGES =============
  "/a-guide-on-how-to-obtain-lmpc-certificate": {
    name: "LMPC Certificate Complete Guide",
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

  // ============= ERROR & UTILITY PAGES =============
  // Note: 404 page should not be in site structure (not indexable)
};

// Enhanced dynamic route patterns for nested pages and multilingual support
const DYNAMIC_ROUTE_PATTERNS = {
  // BIS QCO Updates detail pages
  "/bis-qco-updates/:notificationName": {
    getParents: (params) => [
      { name: "Home", url: "/", position: 1 },
      { name: "BIS QCO Updates", url: "/bis-qco-updates", position: 2 },
    ],
    getName: (params, customTitle) => {
      if (customTitle) return customTitle;
      
      // Enhanced name generation for better SEO
      const formattedName = params.notificationName
        ?.replace(/^bis-certificate-for-/, "") // Remove prefix
        ?.replace(/[-_]/g, " ") // Replace hyphens/underscores with spaces
        ?.replace(/\b\w/g, (l) => l.toUpperCase()) // Capitalize each word
        ?.replace(/\bBis\b/g, "BIS") // Fix BIS capitalization
        ?.replace(/\bIsi\b/g, "ISI") // Fix ISI capitalization
        ?.replace(/\bEpr\b/g, "EPR") // Fix EPR capitalization
        ?.replace(/\bPvc\b/g, "PVC") // Fix PVC capitalization
        ?.replace(/\bHdpe\b/g, "HDPE") // Fix HDPE capitalization
        ?.replace(/\bPp\b/g, "PP"); // Fix PP capitalization
        
      return `BIS Certificate for ${formattedName}`;
    },
    getPosition: () => 3,
  },

  // Support for potential multilingual routes (for future expansion)
  "/:lang/bis-qco-updates/:notificationName": {
    getParents: (params) => [
      { name: "Home", url: `/${params.lang}`, position: 1 },
      { name: "BIS QCO Updates", url: `/${params.lang}/bis-qco-updates`, position: 2 },
    ],
    getName: (params, customTitle) => {
      if (customTitle) return customTitle;
      const formattedName = params.notificationName
        ?.replace(/^bis-certificate-for-/, "")
        ?.replace(/[-_]/g, " ")
        ?.replace(/\b\w/g, (l) => l.toUpperCase());
      return `BIS Certificate for ${formattedName}`;
    },
    getPosition: () => 3,
  },
};

/**
 * Enhanced breadcrumb structured data generator with improved SEO optimization
 * @param {string} pathname - The current page pathname
 * @param {object} params - Dynamic route parameters
 * @param {string} customTitle - Custom title override
 * @param {string} baseUrl - Base URL for the site
 * @returns {object} JSON-LD structured data for breadcrumbs
 */
export const generateBreadcrumbStructuredData = (
  pathname,
  params = {},
  customTitle = null,
  baseUrl = "https://bis-certifications.com"
) => {
  // Handle dynamic routes with enhanced pattern matching
  for (const [pattern, config] of Object.entries(DYNAMIC_ROUTE_PATTERNS)) {
    const patternRegex = new RegExp(
      "^" + pattern.replace(/:[\w]+/g, "([^/]+)") + "$"
    );
    const match = pathname.match(patternRegex);
    
    if (match) {
      const paramNames = (pattern.match(/:[\w]+/g) || []).map(p => p.substring(1));
      const matchedParams = { ...params };
      
      // Extract parameters from URL if not provided
      paramNames.forEach((paramName, index) => {
        if (!matchedParams[paramName]) {
          matchedParams[paramName] = match[index + 1];
        }
      });
      
      const parents = config.getParents(matchedParams);
      const currentName = config.getName(matchedParams, customTitle);
      const currentPosition = config.getPosition();

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
  }

  // Handle static routes with enhanced fallback
  const currentPage = SITE_STRUCTURE[pathname];

  if (!currentPage) {
    // Enhanced default breadcrumb for unknown pages
    const pageName = customTitle || 
      pathname.split('/').pop()?.replace(/[-_]/g, ' ')?.replace(/\b\w/g, l => l.toUpperCase()) || 
      "Page";
      
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
          name: pageName,
          item: `${baseUrl}${pathname}`,
        },
      ],
    };
  }

  // Build breadcrumb trail with validation
  const breadcrumbList = [];

  // Add parent pages with validation
  if (currentPage.parents && Array.isArray(currentPage.parents)) {
    currentPage.parents.forEach((parentPath, index) => {
      const parent = SITE_STRUCTURE[parentPath];
      if (parent && parent.name && parent.url) {
        breadcrumbList.push({
          "@type": "ListItem",
          position: index + 1,
          name: parent.name,
          item: `${baseUrl}${parent.url}`,
        });
      }
    });
  }

  // Add current page with custom title support
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
 * Generate breadcrumb trail for display purposes with enhanced formatting
 * @param {string} pathname - The current page pathname
 * @param {object} params - Dynamic route parameters  
 * @param {string} customTitle - Custom title override
 * @param {string} baseUrl - Base URL for the site
 * @returns {array} Array of breadcrumb items for display
 */
export const generateBreadcrumbTrail = (
  pathname,
  params = {},
  customTitle = null,
  baseUrl = "https://bis-certifications.com"
) => {
  const structuredData = generateBreadcrumbStructuredData(
    pathname,
    params,
    customTitle,
    baseUrl
  );
  
  return structuredData.itemListElement.map((item) => ({
    name: item.name,
    url: item.item.replace(baseUrl, ""),
    position: item.position,
    isActive: item.position === structuredData.itemListElement.length,
  }));
};

/**
 * Enhanced check for breadcrumb display with SEO considerations
 * @param {string} pathname - The current page pathname
 * @returns {boolean} Whether breadcrumbs should be displayed
 */
export const shouldShowBreadcrumbs = (pathname) => {
  // Google guidelines: Don't show breadcrumbs on home page
  if (pathname === "/" || pathname === "") return false;
  
  // Don't show on error pages (404 should not be directly accessible)
  if (pathname === "/404") return false;
  
  // Show breadcrumbs for all other pages for better SEO and UX
  return true;
};

/**
 * Get the page depth for SEO analysis
 * @param {string} pathname - The current page pathname
 * @param {object} params - Dynamic route parameters
 * @returns {number} The depth of the page in site hierarchy
 */
export const getPageDepth = (pathname, params = {}) => {
  const structuredData = generateBreadcrumbStructuredData(pathname, params);
  return structuredData.itemListElement.length;
};

/**
 * Validate breadcrumb structure for SEO compliance
 * @param {object} breadcrumbData - The breadcrumb structured data
 * @returns {object} Validation result with warnings/errors
 */
export const validateBreadcrumbStructure = (breadcrumbData) => {
  const warnings = [];
  const errors = [];
  
  if (!breadcrumbData.itemListElement || breadcrumbData.itemListElement.length === 0) {
    errors.push("No breadcrumb items found");
    return { isValid: false, warnings, errors };
  }
  
  if (breadcrumbData.itemListElement.length === 1) {
    warnings.push("Single item breadcrumb (consider if necessary)");
  }
  
  // Check for proper position sequence
  const positions = breadcrumbData.itemListElement.map(item => item.position);
  const isSequential = positions.every((pos, index) => pos === index + 1);
  
  if (!isSequential) {
    errors.push("Breadcrumb positions are not sequential");
  }
  
  // Check for required properties
  breadcrumbData.itemListElement.forEach((item, index) => {
    if (!item.name) errors.push(`Item ${index + 1} missing name`);
    if (!item.item) errors.push(`Item ${index + 1} missing item URL`);
    if (!item.position) errors.push(`Item ${index + 1} missing position`);
  });
  
  return {
    isValid: errors.length === 0,
    warnings,
    errors,
    itemCount: breadcrumbData.itemListElement.length
  };
};

// Export all utilities
export default {
  generateBreadcrumbStructuredData,
  generateBreadcrumbTrail,
  shouldShowBreadcrumbs,
  getPageDepth,
  validateBreadcrumbStructure,
  SITE_STRUCTURE, // Export for testing/debugging
};

// Named exports for convenient importing
export {
  generateBreadcrumbStructuredData,
  generateBreadcrumbTrail, 
  shouldShowBreadcrumbs,
  getPageDepth,
  validateBreadcrumbStructure,
};
