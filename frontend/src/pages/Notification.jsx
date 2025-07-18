import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Footer from "@/common/Footer";
import { ChevronLeft, ChevronRight, FileText, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { notifications } from "../data/notificationsData.js";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { getNotificationDetailUrl } from "@/utils/urlUtils";
import SEOBreadcrumbs from "../components/common/SEOBreadcrumbs";

const Notification = () => {
  const baseUrl = "https://bis-certifications.com";
  const currentUrl = `${baseUrl}/bis-qco-updates`;

  return (
    <>
      <SEOBreadcrumbs customTitle="BIS QCO Updates - Latest Notifications & Standards" />
      <Helmet>
        <title>
          Latest BIS Notifications & QCO Updates - Sun Certifications
        </title>
        <meta
          name="description"
          content="Stay informed with the latest BIS notifications and updates. Get real-time alerts on Quality Control Orders (QCOs), standards, and key announcements."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Latest BIS Notifications & QCO Updates - Sun Certifications"
        />
        <meta
          property="og:description"
          content="Stay informed with the latest BIS notifications and updates. Get real-time alerts on Quality Control Orders (QCOs), standards, and key announcements."
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta
          property="og:image"
          content={`${baseUrl}/images/bis-certification-banner.jpg`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Latest BIS Notifications & QCO Updates - Sun Certifications"
        />
        <meta
          name="twitter:description"
          content="Stay informed with the latest BIS notifications and updates. Get real-time alerts on Quality Control Orders (QCOs), standards, and key announcements."
        />
        <meta
          name="twitter:image"
          content={`${baseUrl}/images/bis-certification-banner.jpg`}
        />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "headline": "Latest BIS Notifications & QCO Updates",
              "description": "Stay informed with the latest BIS notifications and updates. Get real-time alerts on Quality Control Orders (QCOs), standards, and key announcements.",
              "url": "${currentUrl}",
              "image": "${baseUrl}/images/bis-certification-banner.jpg",
              "publisher": {
                "@type": "Organization",
                "name": "Sun Certifications India",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${baseUrl}/images/logo.png"
                }
              }
            }
          `}
        </script>
      </Helmet>
      <NotificationMainContent />
      <Footer />
    </>
  );
};

export default Notification;

const NotificationMainContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className=" bg-[#f9f7f2]">
      <div className=" max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            DRAFT QCO Notifications
          </h1>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest Quality Control Order notifications and
            certification requirements
          </p>
        </div>

        {/* Search Bar */}
        <div className=" mb-12 md:mb-20 max-w-2xl mx-auto">
          <div className="relative">
            <label htmlFor="search" className="sr-only">
              Search notifications
            </label>
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for Government Notification/QCO Updates"
              className="w-full pl-11 md:pl-12 placeholder:font-geist  placeholder:text-[17px] sm:placeholder:text-[18px] pr-4 py-3 md:py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
          </div>
        </div>

        {/* Notifications */}
        <NotificationCard
          searchQuery={searchQuery}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
      </div>

      <div className="pb-8 md:pb-12 flex items-center justify-center">
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          itemsPerPage={itemsPerPage}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

const NotificationCard = ({ searchQuery, currentPage, itemsPerPage }) => {
  // Function to parse date string into Date object
  const parseDate = (dateString) => {
    try {
      // Handle different date formats
      const cleanDate = dateString.trim();

      // Handle formats like "13 February 2025", "January 6, 2025", etc.
      const date = new Date(cleanDate);

      // If date is invalid, try alternative parsing
      if (isNaN(date.getTime())) {
        // Try to parse formats like "13 February 2025"
        const parts = cleanDate.split(" ");
        if (parts.length === 3) {
          const day = parts[0];
          const month = parts[1];
          const year = parts[2];
          const reformattedDate = `${month} ${day}, ${year}`;
          return new Date(reformattedDate);
        }
      }

      return date;
    } catch (error) {
      console.warn("Failed to parse date:", dateString);
      return new Date(0); // Return epoch date as fallback
    }
  };

  // Sort notifications by date in descending order (newest first)
  const sortedNotifications = [...notifications].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime(); // Descending order
  });

  // Filter sorted notifications based on search query
  const filteredNotifications = sortedNotifications.filter((notification) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      notification.title.toLowerCase().includes(searchLower) ||
      notification.description.toLowerCase().includes(searchLower) ||
      notification.tagType.toLowerCase().includes(searchLower)
    );
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNotifications.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
      {currentItems.length > 0 ? (
        currentItems.map((notification) => (
          <NotificationCardItem
            key={notification.id}
            id={notification.id}
            color={notification.color}
            tagType={notification.tagType}
            date={notification.date}
            title={notification.title}
            description={notification.description}
            pdfUrl={notification.pdfUrl}
          />
        ))
      ) : (
        <div className="col-span-2 text-center ">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                No notifications found matching your Search Criteria.
              </p>
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                Don&apos;t worry! We&apos;re here to help you find what
                you&apos;re looking for.
              </p>

              <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-sm sm:text-base font-geist font-medium rounded-full px-4 sm:px-5 py-3 sm:py-5 border-2 border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Contact Us</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-sm sm:text-base font-geist font-medium rounded-full px-4 sm:px-5 py-3 sm:py-5 border-2 border-[#25D366] text-green-600 hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp</span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-sm sm:text-base font-geist font-medium rounded-full px-4 sm:px-5 py-3 sm:py-5 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Us</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

NotificationCard.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

const NotificationCardItem = ({
  color,
  tagType,
  date,
  title,
  description,
  pdfUrl,
}) => {
  // Function to convert title to URL slug
  const getUrlSlug = (title) => {
    // Remove common prefixes like "BIS certification for", "BIS Notification for", etc.
    let cleanTitle = title
      .replace(/^BIS\s+(certification|notification)\s+for\s+/i, "") // Remove "BIS certification for" or "BIS Notification for"
      .replace(/^QCO\s+notification\s+for\s+/i, "") // Remove "QCO notification for"
      .trim();

    // Convert to kebab-case
    return cleanTitle
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .trim(); // Remove leading/trailing spaces
  };

  const slug = getUrlSlug(title);
  const detailUrl = getNotificationDetailUrl(slug);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)]">
      <div className="h-3 md:h-4" style={{ backgroundColor: color }}></div>
      <div className="p-5 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <span
            className="px-4 py-1.5 font-geist font-medium text-sm rounded-full"
            style={{
              backgroundColor: `${color}10`,
              color: color,
            }}
          >
            {tagType}
          </span>
          <span className="text-gray-500 font-geist text-sm flex gap-2 items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-[#1A8781]"></span>
            {date}
          </span>
        </div>

        <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-3">
          {title}
        </h3>

        <p className="font-geist text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t-2 border-gray-300">
          <a
            href={pdfUrl}
            download={pdfUrl.split("/").pop()} // Gets actual filename
            className="flex items-center gap-2 cursor-pointer group"
          >
            <FileText size={18} style={{ color: color }} />
            <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors group-hover:decoration-gray-950 text-gray-600">
              Official Document
            </span>
          </a>

          <Link to={detailUrl} className="relative">
            <Button
              variant="outline"
              className="transition-all duration-200"
              style={{
                borderColor: color,
                color: color,
                "&:hover": {
                  backgroundColor: color,
                  color: "white",
                },
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

NotificationCardItem.propTypes = {
  color: PropTypes.string.isRequired,
  tagType: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pdfUrl: PropTypes.string.isRequired,
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
}) => {
  // Function to parse date string into Date object (same as above)
  const parseDate = (dateString) => {
    try {
      const cleanDate = dateString.trim();
      const date = new Date(cleanDate);

      if (isNaN(date.getTime())) {
        const parts = cleanDate.split(" ");
        if (parts.length === 3) {
          const day = parts[0];
          const month = parts[1];
          const year = parts[2];
          const reformattedDate = `${month} ${day}, ${year}`;
          return new Date(reformattedDate);
        }
      }

      return date;
    } catch (error) {
      console.warn("Failed to parse date:", dateString);
      return new Date(0);
    }
  };

  // Sort notifications by date in descending order (newest first)
  const sortedNotifications = [...notifications].sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // Filter sorted notifications based on search query to get correct total count
  const filteredNotifications = sortedNotifications.filter((notification) => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      notification.title.toLowerCase().includes(searchLower) ||
      notification.description.toLowerCase().includes(searchLower) ||
      notification.tagType.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Don't show pagination if there are no pages
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div
      className="flex items-center justify-center gap-4"
      role="navigation"
      aria-label="Pagination"
    >
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center justify-center gap-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all ${
              currentPage === index + 1
                ? "bg-[#1A8781] text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            aria-label={`Page ${index + 1}`}
            aria-current={currentPage === index + 1 ? "page" : undefined}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  searchQuery: PropTypes.string,
};
