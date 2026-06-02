import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { SlashIcon, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import AboutContact from "@/components/manual/about/AboutContact";
import Footer from "@/common/Footer";

const indiaNo1Pages = [
  {
    id: 1,
    color: "#0284C7",
    title:
      "All India first BIS License for Respiratory Protective Devices under IS 19089:2025",
    description:
      "Get complete information about BIS Certification for Respiratory Protective Devices under IS 19089:2025. Learn about ISI Mark requirements, Indian Standards, scope, compliance, and the All India First BIS License granted for Respiratory Protective Devices in India.",
    slug: "all-india-first/bis-license-for-respiratory-protective-devices-is-19089-2025",
    date: "29 May 2026",
  },
];

const IndiaNo1Breadcrumb = () => {
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
                    India No 1
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

const IndiaNo1SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="mb-12 md:mb-20 max-w-2xl mx-auto">
      <div className="relative">
        <label htmlFor="india-no-1-search" className="sr-only">
          Search India No 1 Pages
        </label>
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
        <input
          id="india-no-1-search"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for India No 1 Pages"
          className="w-full pl-11 md:pl-12 placeholder:font-geist placeholder:text-[17px] sm:placeholder:text-[18px] pr-4 py-3 md:py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
        />
      </div>
    </div>
  );
};

const IndiaNo1CardItem = ({ color, title, description, slug, date }) => {
  const detailUrl = `/${slug}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] h-full flex flex-col">
      <div className="h-3 md:h-4" style={{ backgroundColor: color }}></div>

      <div className="p-5 md:p-8 flex flex-col flex-grow">
        {date && (
          <div className="flex items-center justify-end mb-4">
            <span className="text-gray-500 font-geist text-sm flex gap-2 items-center justify-center">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
              {date}
            </span>
          </div>
        )}
        <Link to={detailUrl}>
          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-4 min-h-[4rem] flex items-start cursor-pointer hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>
        <p className="font-geist text-gray-600 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>
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
                e.currentTarget.style.backgroundColor = color;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = color;
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

const IndiaNo1Card = ({ filteredPages, currentPage, itemsPerPage }) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPages.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      {currentItems.length > 0 ? (
        currentItems.map((page) => (
          <IndiaNo1CardItem
            key={page.slug}
            color={page.color}
            title={page.title}
            description={page.description}
            slug={page.slug}
            date={page.date}
          />
        ))
      ) : (
        <div className="col-span-2 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                No pages found matching your search criteria.
              </p>
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                Try searching with different keywords or browse all India No 1
                pages.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const IndiaNo1Pagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  filteredPages,
}) => {
  const totalPages = Math.ceil(filteredPages.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  const generatePageNumbers = () => {
    const maxVisiblePages = 5;
    const delta = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - delta);
    let endPage = Math.min(totalPages, currentPage + delta);

    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }

    const pages = [];

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

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
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
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
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="text-center">
        <span className="text-sm text-gray-500 font-geist font-medium">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

const IndiaNo1PaginationWrapper = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  filteredPages,
}) => {
  const totalPages = Math.ceil(filteredPages.length / itemsPerPage);
  const showPagination = totalPages > 1;

  return (
    <div
      className={
        showPagination
          ? "pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center"
          : "pt-4 pb-6 md:pt-6 md:pb-8"
      }
    >
      <IndiaNo1Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        filteredPages={filteredPages}
      />
    </div>
  );
};

const IndiaNo1MainContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const filteredPages = useMemo(() => {
    if (!normalizedSearchQuery) return indiaNo1Pages;

    return indiaNo1Pages.filter((page) => {
      return (
        page.title.toLowerCase().includes(normalizedSearchQuery) ||
        page.description.toLowerCase().includes(normalizedSearchQuery)
      );
    });
  }, [normalizedSearchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#f9f7f2]">
      <div className="max-w-[88rem] mx-auto px-4 py-12 md:px-12 md:py-12">
        <div className="text-center mb-6 md:mb-10">
          <h1 className="font-playfair text-2xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            All India First Licenses
          </h1>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
          Explore India's First Licenses and Access Expert Resources, Insights, and Guidance.
          </p>
        </div>
        <IndiaNo1SearchBar
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />
        <IndiaNo1Card
          filteredPages={filteredPages}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>
      <IndiaNo1PaginationWrapper
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        filteredPages={filteredPages}
      />
    </div>
  );
};

const Indiano1FrontSection = () => {
  return (
    <div className="relative">
      <IndiaNo1Breadcrumb />
      <IndiaNo1MainContent />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default Indiano1FrontSection;
