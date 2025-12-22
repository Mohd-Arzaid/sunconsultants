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
 * Blog data containing all available blog posts
 * Each blog has an id, color theme, title, description and slug for routing
 */
const blogs = [
  {
    id: 1,
    color: "#8B5CF6", // Purple
    title: "BIS Certification for Tin Ingot under IS 26:2024",
    description:
      "Everything manufacturers need to know about the mandatory BIS certification for tin ingots from 17th October 2025. Learn about the application process, required documents, costs, and compliance requirements.",
    slug: "bis-certificate-for-tin-ingots",
  },
  {
    id: 2,
    color: "#10B981", // Green
    title: "BIS Certification for Refined Zinc under IS 209:2024",
    description:
      "Complete guide for manufacturers on obtaining BIS certification for refined zinc. Understand the certification process, documentation requirements, and compliance deadlines under IS 209:2024.",
    slug: "bis-certificate-for-refined-zinc",
  },
  {
    id: 3,
    color: "#8B5CF6", // Purple
    title: "BIS Certificate for Bunk Beds – IS 17636:2022",
    description:
      "Get BIS Certificate for bunk beds under IS 17636:2022. Complete guide covering process, documents, testing requirements, cost, timeline, and compliance for BIS Certification in India. Mandatory for all manufacturers and importers.",
    slug: "blogs/ISI-products/bunk-beds-IS-17636:2022",
  },
  {
    id: 4,
    color: "#C86A31",
    title: "BIS Certificate for Storage Unit – IS 17634:2022",
    description:
      "Get BIS Certificate for Storage Unit under IS 17634:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for cabinets, wardrobes, and storage furniture.",
    slug: "/blogs/ISI-products/storage-unit-IS-17634:2022",
  },
  {
    id: 5,
    color: "#f7b186",
    title: "BIS Certification in Indonesia",
    description:
      "In today’s global economy, international trade is no longer just about finding buyers and setting up supply chains. It is increasingly about compliance",
    slug: "bis-certification-in-indonesia",
  },
  {
    id: 6,
    color: "#3B82F6", // Blue
    title: "BIS Certification in the Netherlands",
    description:
      "BIS Certification in Netherlands is a regulatory necessity, a mark of trust, credibility, and commitment to quality for Dutch manufacturers aiming to enter and thrive in the Indian market.",
    slug: "bis-certification-in-netherlands",
  },
  {
    id: 7,
    color: "#EC4899", // Pink
    title: "BIS Certification in Korea",
    description:
      "Complete guide for Korean manufacturers exporting to India. Learn about BIS FMCS certification process, required documents, AIR appointment, and how to ensure regulatory compliance for entering the Indian market.",
    slug: "bis-certification-in-korea",
  },
  {
    id: 8,
    color: "#F59E0B", // Amber
    title: "BIS Certification in Japan",
    description:
      "Essential guide for Japanese manufacturers exporting to India. Understand BIS FMCS certification, factory audits, product testing, AIR services, and how to navigate Indian regulatory compliance for market entry.",
    slug: "bis-certification-in-japan",
  },
  {
    id: 9,
    color: "#EF4444", // Red
    title: "BIS Certification in Italy",
    description:
      "Comprehensive guide for Italian exporters on BIS FMCS certification. Learn about compliance requirements, documentation, factory audits, AIR services, and how to successfully enter the Indian market.",
    slug: "bis-certification-in-italy",
  },
  {
    id: 10,
    color: "#DC2626", // Red (Spanish color)
    title: "BIS Certification in Spain",
    description:
      "Securing BIS certification in Spain is a mandatory requirement for the manufacturers looking to export or sell their products in the Indian market.",
    slug: "bis-certification-in-spain",
  },
  {
    id: 11,
    color: "#0055A4", // Blue (French color)
    title: "BIS Certification in France",
    description:
      "BIS certification in France is a legal requirement for the manufacturers looking to export or sell their products in the Indian market.",
    slug: "bis-certification-in-france",
  },
  {
    id: 12,
    color: "#000000", // Black
    title: "BIS Certification in Germany",
    description:
      "Essential guide for German manufacturers exporting to India. Learn about BIS FMCS certification, ISI Mark requirements, factory inspections, and how German exporters can achieve regulatory compliance for Indian market access.",
    slug: "bis-certification-in-germany",
  },
  {
    id: 13,
    color: "#1E40AF", // Blue (USA flag color)
    title: "BIS Certification in USA",
    description:
      "Comprehensive guide for U.S. manufacturers exporting to India. Learn about BIS FMCS certification, ISI Mark requirements, AIR appointment, factory inspections, and regulatory compliance for successful Indian market entry.",
    slug: "bis-certification-in-usa",
  },
  {
    id: 15,
    color: "#eb15ce",
    title: "BIS Certification in Vietnam",
    description:
      "In the evolving landscape of international trade, maintaining quality and compliance with global standards has become indispensable for businesses aiming to expand beyond domestic borders. For Vietnamese exporters targeting the Indian market",
    slug: "bis-certification-in-vietnam",
  },
  {
    id: 16,
    color: "#f7f714",
    title: "BIS Certification in Thailand",
    description:
      "India and Thailand share a long-standing trade relationship, marked by mutual economic growth and cultural exchange. Over the years, Thailand has become one of the key trading partners for India in Southeast Asia. From electrical goods, machinery",
    slug: "bis-certification-in-thailand",
  },
  {
    id: 17,
    color: "#10B981", // Green
    title: "BIS Certificate for Work Chairs – IS 17631:2022",
    description:
      "Get BIS Certificate for Work Chairs under IS 17631:2022. Complete compliance guide covering process, documents, testing requirements, fees, timeline, and benefits for BIS Certification in India. Mandatory for all manufacturers and importers.",
    slug: "blogs/ISI-products/work-chairs-IS-17631:2022",
  },
  {
    id: 18,
    color: "#EF4444", // Red
    title: "BIS Certificate for Chair & Stools – IS 17632:2022",
    description:
      "Get BIS Certificate for Chair & Stool under IS 17632:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for general purpose chairs and stools.",
    slug: "blogs/ISI-products/chairs-and-stools-IS-17632:2022",
  },
  {
    id: 19,
    color: "#F59E0B", // Amber/Orange
    title: "BIS Certificate for Tables & Desks – IS 17633:2022",
    description:
      "Get BIS Certificate for Tables & Desks under IS 17633:2022. Complete guide covering process, documents, testing requirements, cost, timeline, and compliance for BIS Certification in India. Mandatory for all manufacturers and importers.",
    slug: "blogs/ISI-products/tables-&-desks-IS-17633:2022",
  },
  {
    id: 20,
    color: "#3B82F6", // Blue
    title: "BIS Certificate for Beds – IS 17635:2022",
    description:
      "Get BIS Certificate for beds under IS 17635:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for manufacturers and importers.",
    slug: "blogs/ISI-products/beds-IS-17635:2022",
  },
  {
    id: 21,
    color: "#EC4899", // Pink
    title: "BIS Certificate for Welded Pipes & Tubes – IS 17876:2022",
    description:
      "Get BIS Certificate for Welded Pipes & Tubes under IS 17876:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for stainless steel welded pipes and tubes.",
      slug: "blogs/ISI-products/welded-pipes-&-tubes-IS-17876:2024",
  },
  {
    id: 22,
    color: "#8B5CF6", // Purple
    title: "BIS Certificate for Seamless Pipes & Tubes – IS 17875:2022",
    description:
      "Get BIS Certificate for Seamless Pipes & Tubes under IS 17875:2022. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for seamless steel pipes and tubes.",
    slug: "blogs/ISI-products/seamless-pipes-&-tubes-IS-17875:2022",
  },
  {
    id: 23,
    color: "#F59E0B", // Amber/Orange
    title: "BIS Certificate for Flashlight – IS 2083:2024",
    description:
      "Get BIS Certificate for Flashlight under IS 2083:2024. Process, documents, testing, cost & timeline for BIS Certification in India. Complete guide covering mandatory compliance requirements for flashlights and torches.",
    slug: "blogs/ISI-products/flashlight-IS-2083:2024",
  },
];

// =============================
// HELPER COMPONENTS
// =============================

/**
 * Navigation breadcrumb component
 * Displays the current page location in the site hierarchy
 */
const LatestBlogsBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    Latest Blogs
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Search input component for filtering blogs
 * Provides real-time search functionality with magnifying glass icon
 */
const LatestBlogsSearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="mb-12 md:mb-20 max-w-2xl mx-auto">
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search Latest Blogs
        </label>
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for Latest Blogs"
          className="w-full pl-11 md:pl-12 placeholder:font-geist placeholder:text-[17px] sm:placeholder:text-[18px] pr-4 py-3 md:py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
        />
      </div>
    </div>
  );
};

/**
 * Individual blog card component
 * Displays blog information with color-coded header and hover effects
 */
const BlogCardItem = ({ color, title, description, slug }) => {
  const detailUrl = `/${slug}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] h-full flex flex-col">
      {/* Color-coded header bar */}
      <div className="h-3 md:h-4" style={{ backgroundColor: color }}></div>

      <div className="p-5 md:p-8 flex flex-col flex-grow">
        {/* Blog title - clickable */}
        <Link to={detailUrl}>
          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-4 min-h-[4rem] flex items-start cursor-pointer hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>

        {/* Blog description */}
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
 * Blog cards grid component with search and pagination logic
 * Handles filtering, pagination calculation, and no-results state
 */
const LatestBlogsCard = ({ searchQuery, currentPage, itemsPerPage }) => {
  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(searchLower) ||
      blog.description.toLowerCase().includes(searchLower)
    );
  });

  // Calculate pagination indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      {currentItems.length > 0 ? (
        currentItems.map((blog) => (
          <BlogCardItem
            key={blog.id}
            color={blog.color}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
          />
        ))
      ) : (
        /* No results state */
        <div className="col-span-2 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                No blogs found matching your search criteria.
              </p>
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                Try searching with different keywords or browse all our latest
                blogs.
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
const LatestBlogsPagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
}) => {
  // Filter blogs to get correct total count for pagination
  const filteredBlogs = blogs.filter((blog) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(searchLower) ||
      blog.description.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

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
              className={`h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all ${
                currentPage === pageNum
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
const LatestBlogsPaginationWrapper = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
}) => {
  // Calculate if pagination should be shown
  const filteredBlogs = blogs.filter((blog) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(searchLower) ||
      blog.description.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const showPagination = totalPages > 1;

  return (
    <div
      className={
        showPagination
          ? "pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center"
          : "pt-4 pb-6 md:pt-6 md:pb-8"
      }
    >
      <LatestBlogsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        searchQuery={searchQuery}
      />
    </div>
  );
};

/**
 * Main content component containing page header, search, and blog grid
 * Manages search and pagination state for the entire blogs section
 */
const LatestBlogsMainContent = () => {
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
            Latest Blogs
          </h1>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest blogs and articles from our experts
          </p>
        </div>

        {/* Search functionality */}
        <LatestBlogsSearchBar
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />

        {/* Blog cards grid */}
        <LatestBlogsCard
          searchQuery={searchQuery}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>

      {/* Pagination controls */}
      <LatestBlogsPaginationWrapper
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
 * Latest Blogs Page Component
 * Main page component that orchestrates the entire latest blogs section
 * Combines breadcrumb navigation, main content, contact section, and footer
 */
const LatestBlogs = () => {
  return (
    <div className="relative">
      <LatestBlogsBreadcrumb />
      <LatestBlogsMainContent />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default LatestBlogs;
