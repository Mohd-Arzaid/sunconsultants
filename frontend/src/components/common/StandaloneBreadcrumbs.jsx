import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const StandaloneBreadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Don't show on home page
  if (pathname === "/" || pathname === "") {
    return null;
  }

  // Simple path-to-breadcrumb mapping
  const getBreadcrumbs = (path) => {
    const breadcrumbs = [
      { name: "Home", url: "/", icon: true }
    ];

    // Add current page breadcrumb based on path
    if (path === "/about") {
      breadcrumbs.push({ name: "About Us", url: "/about" });
    } else if (path === "/contact") {
      breadcrumbs.push({ name: "Contact Us", url: "/contact" });
    } else if (path === "/cdsco-registration-certification") {
      breadcrumbs.push({ name: "CDSCO Registration & Certification", url: path });
    } else if (path === "/what-is-bis-certificate-indian-bis") {
      breadcrumbs.push({ name: "BIS Certification", url: path });
    } else if (path === "/bis-qco-updates") {
      breadcrumbs.push({ name: "BIS QCO Updates", url: path });
    } else if (path === "/ministry-updates") {
      breadcrumbs.push({ name: "Ministry Updates", url: path });
    } else if (path === "/clients") {
      breadcrumbs.push({ name: "Our Clients", url: path });
    } else {
      // Generic fallback
      const pathName = path.split("/").filter(Boolean).pop() || "Page";
      const displayName = pathName.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbs.push({ name: displayName, url: path });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <div className="w-full bg-gradient-to-r from-[#EBF3F5]/70 to-[#C5E2F0]/40 border-b border-[#1A8781]/20 backdrop-blur-sm shadow-sm">
      <div className="max-w-[84rem] w-full mx-auto px-4 md:px-8 py-3 md:py-4">
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              const isHome = item.icon;

              return (
                <React.Fragment key={item.url}>
                  <li className="inline-flex items-center gap-1.5">
                    {isLast ? (
                      <span
                        role="link"
                        aria-disabled="true"
                        aria-current="page"
                        className="font-semibold text-[#1E1E1E] bg-gradient-to-r from-[#1A8781]/10 to-[#125E5A]/5 border border-[#1A8781]/30 shadow-sm px-2 py-1 rounded-md"
                      >
                        {isHome && <Home className="h-4 w-4 mr-1 inline" />}
                        <span className="max-w-[200px] md:max-w-none truncate inline-block">
                          {item.name}
                        </span>
                      </span>
                    ) : (
                      <Link
                        to={item.url}
                        className="text-[#42434d] hover:text-[#1A8781] hover:bg-[#EBF3F5]/60 border border-transparent hover:border-[#1A8781]/30 hover:shadow-sm transition-all duration-300 px-2 py-1 rounded-md inline-flex items-center gap-1.5"
                      >
                        {isHome && <Home className="h-4 w-4 mr-1" />}
                        <span className="max-w-[150px] md:max-w-none truncate">
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </li>
                  {!isLast && (
                    <li
                      role="presentation"
                      aria-hidden="true"
                      className="text-[#1A8781]/40 mx-1 transform transition-transform duration-200 hover:scale-110 hover:text-[#1A8781]/70"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default StandaloneBreadcrumbs;