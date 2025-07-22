import { useLocation, useParams, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  generateBreadcrumbTrail,
  shouldShowBreadcrumbs,
} from "../../utils/breadcrumbUtils";
import PropTypes from "prop-types";

/**
 * Visual Breadcrumbs Component
 * Renders a user-facing breadcrumb navigation trail
 * Uses the same logic as SEOBreadcrumbs but renders visible UI elements
 */
const VisualBreadcrumbs = ({ 
  customTitle = null, 
  customPath = null, 
  className = "",
  showHome = true,
  separator = "chevron" // "chevron" | "slash" | "arrow"
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
    
    // Filter out home if showHome is false
    if (!showHome) {
      breadcrumbTrail = breadcrumbTrail.filter(item => item.url !== "/");
    }
  } catch (error) {
    console.warn("Visual breadcrumb generation error:", error);
    // Fallback breadcrumb trail
    breadcrumbTrail = [
      ...(showHome ? [{ name: "Home", url: "/", position: 1 }] : []),
      { 
        name: customTitle || "Page", 
        url: pathname, 
        position: showHome ? 2 : 1 
      }
    ];
  }

  // Don't render if we only have one item (current page) and showHome is false
  if (breadcrumbTrail.length <= 1 && !showHome) {
    return null;
  }

  // Separator component
  const SeparatorIcon = () => {
    switch (separator) {
      case "slash":
        return <span className="text-slate-400 mx-2">/</span>;
      case "arrow":
        return <span className="text-slate-400 mx-2">→</span>;
      case "chevron":
      default:
        return <ChevronRight className="h-4 w-4 text-slate-400 mx-2" />;
    }
  };

  const baseClasses = "flex items-center space-x-1 text-sm text-slate-600 bg-slate-50 px-4 py-2 rounded-md border border-slate-200";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <nav 
      aria-label="Breadcrumb navigation"
      className={combinedClasses}
    >
      <ol className="flex items-center space-x-1">
        {breadcrumbTrail.map((item, index) => {
          const isLast = index === breadcrumbTrail.length - 1;
          const isHome = item.url === "/";
          
          return (
            <li key={item.url || index} className="flex items-center">
              {/* Breadcrumb item */}
              {isLast ? (
                // Current page - not clickable
                <span 
                  className="font-medium text-slate-900 flex items-center"
                  aria-current="page"
                >
                  {isHome && <Home className="h-4 w-4 mr-1" />}
                  <span className="truncate max-w-[200px]">
                    {item.name}
                  </span>
                </span>
              ) : (
                // Clickable breadcrumb link
                <Link
                  to={item.url}
                  className="hover:text-slate-900 transition-colors duration-200 flex items-center group"
                  title={item.name}
                >
                  {isHome && (
                    <Home className="h-4 w-4 mr-1 group-hover:text-blue-600 transition-colors" />
                  )}
                  <span className="truncate max-w-[200px] group-hover:underline">
                    {item.name}
                  </span>
                </Link>
              )}
              
              {/* Separator */}
              {!isLast && <SeparatorIcon />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

VisualBreadcrumbs.propTypes = {
  customTitle: PropTypes.string,
  customPath: PropTypes.string,
  className: PropTypes.string,
  showHome: PropTypes.bool,
  separator: PropTypes.oneOf(["chevron", "slash", "arrow"]),
};

export default VisualBreadcrumbs;