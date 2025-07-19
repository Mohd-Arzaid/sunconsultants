import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { generateBreadcrumbStructuredData, shouldShowBreadcrumbs } from '../../utils/breadcrumbUtils';
import PropTypes from 'prop-types';

/**
 * SEO Breadcrumbs Component
 * Renders JSON-LD structured data for breadcrumb navigation
 * Does NOT render any visible UI elements - purely for SEO purposes
 */
const SEOBreadcrumbs = ({ customTitle = null, customPath = null }) => {
  const location = useLocation();
  const params = useParams();
  
  // Use custom path if provided, otherwise use current location
  const pathname = customPath || location.pathname;
  
  // Check if breadcrumbs should be shown for this page
  if (!shouldShowBreadcrumbs(pathname)) {
    return null;
  }
  
  // Generate structured data with proper error handling
  let structuredData;
  try {
    structuredData = generateBreadcrumbStructuredData(pathname, params, customTitle);
    
    // Validate that all items have proper names
    if (structuredData?.itemListElement) {
      structuredData.itemListElement = structuredData.itemListElement.map(item => ({
        ...item,
        name: item.name || "Page", // Fallback if name is missing
        item: item.item || `https://bis-certifications.com${pathname}` // Ensure item URL exists
      }));
    }
  } catch (error) {
    console.warn('Breadcrumb generation error:', error);
    // Fallback structured data
    structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://bis-certifications.com/"
        },
        {
          "@type": "ListItem", 
          position: 2,
          name: customTitle || "Page",
          item: `https://bis-certifications.com${pathname}`
        }
      ]
    };
  }
  
  return (
    <Helmet>
      <script type="application/ld+json" data-seo-breadcrumbs="true">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    </Helmet>
  );
};

SEOBreadcrumbs.propTypes = {
  customTitle: PropTypes.string,
  customPath: PropTypes.string
};

export default SEOBreadcrumbs; 