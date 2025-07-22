import { useLocation, useParams, Link } from "react-router-dom";
import { ChevronLeft, Home, MoreHorizontal } from "lucide-react";
import {
  generateBreadcrumbTrail,
  shouldShowBreadcrumbs,
} from "../../utils/breadcrumbUtils";
import PropTypes from "prop-types";

/**
 * Compact Breadcrumbs Component
 * Mobile-optimized breadcrumb navigation that shows only parent and current page
 * Includes a back button for better mobile UX
 */
const CompactBreadcrumbs = ({ 
  customTitle = null, 
  customPath = null, 
  className = "",
  showBackButton = true,
  maxItems = 2
}) => {
  const location = useLocation();
  const params = useParams();

  // Use custom path if provided, otherwise use current location
  const pathname = customPath || location.pathname;

  // Check if breadcrumbs should be shown for this page
  if (!shouldShowBreadcrumbs(pathname)) {
    return null;
  }

  // Generate breadcrumb trail with proper error handling
  let breadcrumbTrail = [];
  try {
    breadcrumbTrail = generateBreadcrumbTrail(pathname, params, customTitle);
  } catch (error) {
    console.warn("Compact breadcrumb generation error:", error);
    // Fallback breadcrumb trail
    breadcrumbTrail = [
      { name: "Home", url: "/", position: 1 },
      { 
        name: customTitle || "Page", 
        url: pathname, 
        position: 2 
      }
    ];
  }

  // Don't render if we only have home page
  if (breadcrumbTrail.length <= 1) {
    return null;
  }

  // Get the items to display (last maxItems)
  const displayItems = breadcrumbTrail.slice(-maxItems);
  const hasHiddenItems = breadcrumbTrail.length > maxItems;
  
  // Get parent page for back button
  const parentPage = breadcrumbTrail.length > 1 
    ? breadcrumbTrail[breadcrumbTrail.length - 2]
    : null;

  const baseClasses = "flex items-center justify-between w-full text-sm bg-white border-b border-slate-200 px-4 py-3";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <nav 
      aria-label="Compact breadcrumb navigation"
      className={combinedClasses}
    >
      {/* Left side - Back button */}
      {showBackButton && parentPage && (
        <Link
          to={parentPage.url}
          className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
          aria-label={`Go back to ${parentPage.name}`}
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="font-medium">Back</span>
        </Link>
      )}

      {/* Right side - Breadcrumb trail */}
      <div className="flex items-center space-x-2 ml-auto">
        {/* Show ellipsis if there are hidden items */}
        {hasHiddenItems && (
          <div className="flex items-center text-slate-400">
            <MoreHorizontal className="h-4 w-4" />
            <span className="mx-2">/</span>
          </div>
        )}
        
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isHome = item.url === "/";
          
          return (
            <div key={item.url || index} className="flex items-center">
              {/* Breadcrumb item */}
              {isLast ? (
                // Current page - not clickable
                <span 
                  className="font-medium text-slate-900 flex items-center"
                  aria-current="page"
                >
                  {isHome && <Home className="h-4 w-4 mr-1" />}
                  <span className="truncate max-w-[150px]">
                    {item.name}
                  </span>
                </span>
              ) : (
                // Clickable breadcrumb link
                <Link
                  to={item.url}
                  className="text-slate-600 hover:text-slate-900 transition-colors flex items-center"
                  title={item.name}
                >
                  {isHome && <Home className="h-4 w-4 mr-1" />}
                  <span className="truncate max-w-[120px]">
                    {item.name}
                  </span>
                </Link>
              )}
              
              {/* Separator */}
              {!isLast && (
                <span className="text-slate-400 mx-2">/</span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

CompactBreadcrumbs.propTypes = {
  customTitle: PropTypes.string,
  customPath: PropTypes.string,
  className: PropTypes.string,
  showBackButton: PropTypes.bool,
  maxItems: PropTypes.number,
};

export default CompactBreadcrumbs;