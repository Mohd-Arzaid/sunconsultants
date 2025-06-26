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
  
  // Generate structured data
  const structuredData = generateBreadcrumbStructuredData(pathname, params, customTitle);
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

SEOBreadcrumbs.propTypes = {
  customTitle: PropTypes.string,
  customPath: PropTypes.string
};

export default SEOBreadcrumbs; 