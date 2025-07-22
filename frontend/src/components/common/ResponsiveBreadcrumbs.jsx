import VisualBreadcrumbs from "./VisualBreadcrumbs";
import CompactBreadcrumbs from "./CompactBreadcrumbs";
import PropTypes from "prop-types";

/**
 * Responsive Breadcrumbs Component
 * Automatically switches between full breadcrumbs (desktop) and compact breadcrumbs (mobile)
 * Provides optimal user experience across all device sizes
 */
const ResponsiveBreadcrumbs = ({ 
  customTitle = null, 
  customPath = null, 
  className = "",
  showHome = true,
  separator = "chevron",
  showBackButton = true,
  maxCompactItems = 2
}) => {
  return (
    <>
      {/* Desktop/Tablet Breadcrumbs */}
      <div className="hidden md:block">
        <VisualBreadcrumbs
          customTitle={customTitle}
          customPath={customPath}
          className={className}
          showHome={showHome}
          separator={separator}
        />
      </div>

      {/* Mobile Breadcrumbs */}
      <div className="block md:hidden">
        <CompactBreadcrumbs
          customTitle={customTitle}
          customPath={customPath}
          className={className}
          showBackButton={showBackButton}
          maxItems={maxCompactItems}
        />
      </div>
    </>
  );
};

ResponsiveBreadcrumbs.propTypes = {
  customTitle: PropTypes.string,
  customPath: PropTypes.string,
  className: PropTypes.string,
  showHome: PropTypes.bool,
  separator: PropTypes.oneOf(["chevron", "slash", "arrow"]),
  showBackButton: PropTypes.bool,
  maxCompactItems: PropTypes.number,
};

export default ResponsiveBreadcrumbs;