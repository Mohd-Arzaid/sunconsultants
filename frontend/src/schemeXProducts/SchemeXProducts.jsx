/* eslint-disable react/prop-types */

// =============================
// IMPORTS
// =============================

// React & React Hooks
import { useState } from "react";

// React Router
import { Link } from "react-router-dom";

// External Libraries - UI Icons
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SlashIcon, ChevronLeft, ChevronRight } from "lucide-react";

// UI Components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

// Custom Components
import AboutContact from "@/components/manual/about/AboutContact";
import Footer from "@/common/Footer";

// =============================
// DATA
// =============================

/**
 * SchemeX Products data containing BIS certification information
 * Each product has an id, color theme, title, description and slug for routing
 */
const products = [
  {
    id: 1,
    color: "#3B82F6", // Blue
    title: "BIS Scheme X Registration for Pumps and Liquid Elevators in India",
    description:
      "BIS Scheme X certification is mandatory for all pumps and liquid elevators sold in India, ensuring national quality standards and safety compliance. This comprehensive guide covers the significance of BIS certification, OTR 2024 requirements, certification process, applicable pump types (centrifugal, submersible, booster, multistage, positive displacement, vertical turbine, chemical process, diaphragm, and slurry pumps), factory inspection procedures, documentation requirements, and compliance deadlines. Learn about the September 1, 2026 deadline, penalties for non-compliance, and how BIS certification provides market advantage, consumer trust, and access to government tenders for both Indian and foreign manufacturers.",
    slug: "bis-scheme-x-certification-for-pumps-and-liquid-elevators",
  },
  {
    id: 2,
    color: "#10B981", // Green
    title: "BIS Scheme X Certification For Packing Machinery",
    description:
      "BIS Scheme X Certification makes packing machines safe, reliable, and compulsory in India from Sept 2026 for sales and imports.",
    slug: "bis-scheme-x-certification-for-packing-machinery",
  },

  {
    id: 3,
    color: "#F59E0B", // Amber/Orange
    title: "BIS Certification for Centrifuges",
    description:
      "Get BIS Certification for Centrifuges under Scheme X to ensure safety, quality, and compliance. Mandatory from Sept 2026 for all manufacturers & importers.",
    slug: "bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery",
  },
  {
    id: 4,
    color: "#0EA5E9", // Emerald Green
    title: "BIS Scheme X for Compressors",
    description:
      "BIS Certification for Compressors under Scheme X ensures safety, quality & compliance. Mandatory in India from Sept 2026.",
    slug: "bis-scheme-x-certification-for-compressors",
  },
  {
    id: 5,
    color: "#1A8781",
    title: "BIS Scheme X Certification for Heat Treatment Equipment",
    description:
      "BIS Certification for Heat Treatment Equipment is mandatory by Sept 2026 for safe, efficient, and compliant market access in Indi",
    slug: "bis-scheme-x-certification-for-heat-treatment-equipment",

  },
  {
    id: 6,
    color: "#E879F9",
    title: "BIS Certification for Construction Machinery",
    description:
      "BIS Certification (Scheme X) is mandatory for construction machinery in India from 1st Sept 2026, ensuring safety, quality, and compliance.",
    slug: "bis-scheme-x-certification-for-construction-machinery",

  },
  {
    id: 7,
    color: "#0EA5E9",
    title: "BIS Scheme X Certification of Weaving Machines",
    description:
      "BIS Scheme X for Weaving Machines – Mandatory from Sept 2026 for quality, safety & market access.",
    slug: "bis-scheme-x-certification-for-weaving-machines-looms",

  },
  {
    id: 8,
    color: "#479F9A",
    title: "BIS Certification for Metal Cutting Machines",
    description:
      "BIS Certification for Metal Cutting Machines mandatory from Sept 2026 to ensure safety, quality & compliance.",
    slug: "bis-scheme-x-certification-for-metal-cutting-machine-tools",

  },
  {
    id: 9,
    color: "#979F9A",
    title: "BIS Scheme X for Cranes",
    description:
      "BIS Certification for Cranes is mandatory from Sept 2026. Learn Scheme X, OTR rules, process, benefits, and compliance for all crane types.",
    slug: "bis-scheme-x-certification-for-cranes",

  },
  {
    id: 10,
    color: "#E879F9",
    title: "BIS Scheme X Certification for Embroidery Machines",
    description:
      "BIS Certification for Embroidery Machines is mandatory from Sept 2026. Learn Scheme X, OTR rules, benefits, and process for BIS License.",
    slug: "bis-scheme-x-certification-for-embroidery-machinery",

  },
  {
    id: 11,
    color: "#ed1313",
    title: "BIS Scheme X Certification for Gears, Gearing, and Transmission Elements",
    description:
      "BIS Certification for Gears and Transmission Elements is mandatory from Sept 2026. Learn Scheme X rules, OTR mandate, benefits, and process.",
    slug: "bis-scheme-x-certification-for-gears-gearing-and-transmission-elements",

  },
  {
    id: 12,
    color: "#79f9e4",
    title: "BIS Scheme X CERTIFICATION FOR DIESEL GENERATOR",
    description:
      "BIS Certification for Diesel Generators is mandatory from Sept 2026. Learn Scheme X rules, OTR compliance, benefits, and certification process.",
    slug: "bis-scheme-x-certification-for-diesel-generators",

  },
  {
    id: 13,
    color: "#79f9e4",
    title: "BIS Scheme X CERTIFICATION FOR DIESEL GENERATOR",
    description:
      "BIS Certification for Diesel Generators is mandatory from Sept 2026. Learn Scheme X rules, OTR compliance, benefits, and certification process.",
    slug: "bis-scheme-x-certification-for-diesel-generators",

  },
];

// =============================
// HELPER COMPONENTS
// =============================

/**
 * Navigation breadcrumb component
 * Displays the current page location in the site hierarchy
 */
const SchemeXProductsBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-fit font-inter">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>SchemeX Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

/**
 * Search input component for filtering products
 * Provides real-time search functionality with magnifying glass icon
 */
const SchemeXProductsSearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="mb-12 md:mb-20 max-w-2xl mx-auto">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search SchemeX Products
        </label>
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for SchemeX Products"
          className="w-full pl-11 md:pl-12 placeholder:font-geist placeholder:text-[17px] sm:placeholder:text-[18px] pr-4 py-3 md:py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
        />
      </div>
    </div>
  );
};

/**
 * Individual product card component
 * Displays product information with color-coded header and hover effects
 */
const ProductCardItem = ({ color, title, description, slug }) => {
  const detailUrl = `/${slug}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] h-full flex flex-col">
      {/* Color-coded header bar */}
      <div className="h-3 md:h-4" style={{ backgroundColor: color }}></div>

      <div className="p-5 md:p-8 flex flex-col flex-grow">
        {/* Product title - clickable */}
        <Link to={detailUrl}>
          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-4 min-h-[4rem] flex items-start cursor-pointer hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>

        {/* Product description */}
        <p className="font-geist text-gray-600 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Read more button with dynamic color styling */}
        <div className="flex justify-end pt-4 border-t-2 border-gray-300 mt-auto">
          <Link to={detailUrl} className="relative">
            <Button
              variant="outline"
              className="transition-all duration-200 hover:shadow-md"
              style={{
                borderColor: color,
                color: color,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = color;
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = color;
              }}
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// =============================
// COMPLEX COMPONENTS
// =============================

/**
 * Product cards grid component with search and pagination logic
 * Handles filtering, pagination calculation, and no-results state
 */
const SchemeXProductsCard = ({ searchQuery, currentPage, itemsPerPage }) => {
  // Filter products based on search query
  const filteredProducts = products.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.title.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    );
  });

  // Calculate pagination indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      {currentItems.length > 0 ? (
        currentItems.map((product) => (
          <ProductCardItem
            key={product.id}
            color={product.color}
            title={product.title}
            description={product.description}
            slug={product.slug}
          />
        ))
      ) : (
        /* No results state */
        <div className="col-span-2 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                No products found matching your search criteria.
              </p>
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                Try searching with different keywords or browse all our SchemeX
                products.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Advanced pagination component with smart page number generation
 * Includes previous/next buttons, ellipsis for long page lists, and page info
 */
const SchemeXProductsPagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
}) => {
  // Filter products to get correct total count for pagination
  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      product.title.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Page change handler with smooth scroll to top
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Don't render pagination if only one page or less
  if (totalPages <= 1) {
    return null;
  }

  // Generate smart page numbers with ellipsis for better UX
  const generatePageNumbers = () => {
    const maxVisiblePages = 5;
    const delta = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - delta);
    let endPage = Math.min(totalPages, currentPage + delta);

    // Adjust range if we're near beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    const pages = [];

    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Pagination controls */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Page number buttons */}
        {pageNumbers.map((pageNum, index) => {
          if (pageNum === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex items-center justify-center h-10 w-10 text-gray-400 font-medium text-base"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={pageNum}
              onClick={() => handlePageChange(pageNum)}
              className={`h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all ${currentPage === pageNum
                ? "bg-[#1A8781] text-white"
                : "text-gray-700 hover:bg-gray-200"
                }`}
              aria-label={`Page ${pageNum}`}
              aria-current={currentPage === pageNum ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Page information display */}
      <div className="text-center">
        <span className="text-sm text-gray-500 font-geist font-medium">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

/**
 * Wrapper component for pagination with conditional rendering
 * Manages pagination visibility and responsive spacing
 */
const SchemeXProductsPaginationWrapper = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
}) => {
  // Calculate if pagination should be shown
  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      product.title.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const showPagination = totalPages > 1;

  return (
    <div
      className={
        showPagination
          ? "pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center"
          : "pt-4 pb-6 md:pt-6 md:pb-8"
      }
    >
      <SchemeXProductsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        searchQuery={searchQuery}
      />
    </div>
  );
};

/**
 * Main content component containing page header, search, and product grid
 * Manages search and pagination state for the entire products section
 */
const SchemeXProductsMainContent = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Search handler - resets pagination on new search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#f9f7f2]">
      <div className="max-w-[88rem] mx-auto px-4 py-12 md:px-12 md:py-12">
        {/* Page header section */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="font-playfair text-2xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            SchemeX Products
          </h1>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
            Comprehensive BIS Scheme X certification guides for pumps and liquid
            elevators
          </p>
        </div>

        {/* Search functionality */}
        <SchemeXProductsSearchBar
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />

        {/* Product cards grid */}
        <SchemeXProductsCard
          searchQuery={searchQuery}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {/* Pagination controls */}
      <SchemeXProductsPaginationWrapper
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        searchQuery={searchQuery}
      />
    </div>
  );
};

// =============================
// MAIN COMPONENT
// =============================

/**
 * SchemeX Products Page Component
 * Main page component that orchestrates the entire SchemeX products section
 * Combines breadcrumb navigation, main content, contact section, and footer
 */
const SchemeXProducts = () => {
  return (
    <div className="relative">
      <SchemeXProductsBreadcrumb />
      <SchemeXProductsMainContent />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default SchemeXProducts;
