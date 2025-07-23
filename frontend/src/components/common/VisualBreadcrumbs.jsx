import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import {
  generateBreadcrumbTrail,
  shouldShowBreadcrumbs,
} from "../../utils/breadcrumbUtils";
import PropTypes from "prop-types";
import { BlurIn } from "@/components/ui/blur-in";
import { getBreadcrumbTheme } from "./BreadcrumbThemes";

/**
 * Visual Breadcrumbs Component
 * Renders beautiful, interactive breadcrumb navigation for users
 */
const VisualBreadcrumbs = ({ customTitle = null, customPath = null, className = "" }) => {
  const location = useLocation();
  const params = useParams();

  // Use custom path if provided, otherwise use current location
  const pathname = customPath || location.pathname;

  // Get theme based on current page
  const theme = getBreadcrumbTheme(pathname);

  // Check if breadcrumbs should be shown for this page
  if (!shouldShowBreadcrumbs(pathname)) {
    return null;
  }

  // Generate breadcrumb trail for display
  let breadcrumbTrail = [];
  try {
    breadcrumbTrail = generateBreadcrumbTrail(pathname, params, customTitle);
  } catch (error) {
    console.warn("Visual breadcrumb generation error:", error);
    // Fallback breadcrumb trail
    breadcrumbTrail = [
      {
        name: "Home",
        url: "/",
        position: 1,
      },
      {
        name: customTitle || "Page",
        url: pathname,
        position: 2,
      },
    ];
  }

  // Don't render if we only have home (should not happen due to shouldShowBreadcrumbs check)
  if (breadcrumbTrail.length <= 1) {
    return null;
  }

  // Handle long breadcrumb trails (more than 4 items)
  const shouldCollapse = breadcrumbTrail.length > 4;
  let displayTrail = breadcrumbTrail;

  if (shouldCollapse) {
    // Show: Home > ... > SecondLast > Last
    displayTrail = [
      breadcrumbTrail[0], // Home
      null, // Ellipsis placeholder
      breadcrumbTrail[breadcrumbTrail.length - 2], // Second to last
      breadcrumbTrail[breadcrumbTrail.length - 1], // Last
    ];
  }

  return (
    <BlurIn duration={0.5} className={`w-full ${className}`}>
      <div className={`w-full ${theme.container} backdrop-blur-sm shadow-sm`}>
        <div className="max-w-[84rem] w-full mx-auto px-4 md:px-8 py-3 md:py-4">
          <Breadcrumb>
            <BreadcrumbList className="text-sm md:text-base breadcrumb-animate-in breadcrumb-mobile-compact">
              {displayTrail.map((item, index) => {
                // Handle ellipsis
                if (item === null) {
                  return (
                    <React.Fragment key={`ellipsis-${index}`}>
                      <BreadcrumbItem>
                        <BreadcrumbEllipsis className={`${theme.ellipsis} transition-colors`} />
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                    </React.Fragment>
                  );
                }

                const isLast = index === displayTrail.length - 1;
                const isHome = item.position === 1;

                return (
                  <React.Fragment key={item.url}>
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className={`${theme.currentPage} shadow-sm font-semibold`}>
                          {isHome && <Home className="h-4 w-4 mr-1" />}
                          <span className="max-w-[200px] md:max-w-none truncate">
                            {item.name}
                          </span>
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink 
                          to={item.url}
                          className={`${theme.linkText} ${theme.linkBg} hover:shadow-sm transition-all duration-300 group breadcrumb-glow-hover`}
                        >
                          {isHome && (
                            <Home className="h-4 w-4 mr-1 transition-colors" />
                          )}
                          <span className="max-w-[150px] md:max-w-none truncate">
                            {item.name}
                          </span>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {!isLast && (
                      <BreadcrumbSeparator className={`${theme.separator} mx-1 transform transition-transform duration-200 hover:scale-110`} />
                    )}
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </BlurIn>
  );
};

VisualBreadcrumbs.propTypes = {
  customTitle: PropTypes.string,
  customPath: PropTypes.string,
  className: PropTypes.string,
};

export default VisualBreadcrumbs;