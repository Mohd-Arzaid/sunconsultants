import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Footer from "@/common/Footer";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Send,
  SlashIcon,
} from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import AboutContact from "@/components/manual/about/AboutContact";
import PropTypes from "prop-types";

const MinistryUpdates = () => {
  const baseUrl = "https://bis-certifications.com";
  const currentUrl = `${baseUrl}/ministry-updates`;

  return (
    <div className="relative">
      <Helmet>
        <title>
          Ministry Updates & QCO Withdraw Orders - Sun Certifications
        </title>
        <meta
          name="description"
          content="Stay informed with the latest Ministry updates and Quality Control Order (QCO) withdraw notifications. Get comprehensive details on regulatory changes and compliance requirements."
        />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ministry Updates & QCO Withdraw Orders - Sun Certifications"
        />
        <meta
          property="og:description"
          content="Stay informed with the latest Ministry updates and Quality Control Order (QCO) withdraw notifications. Get comprehensive details on regulatory changes and compliance requirements."
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
          content="Ministry Updates & QCO Withdraw Orders - Sun Certifications"
        />
        <meta
          name="twitter:description"
          content="Stay informed with the latest Ministry updates and Quality Control Order (QCO) withdraw notifications. Get comprehensive details on regulatory changes and compliance requirements."
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
              "headline": "Ministry Updates & QCO Withdraw Orders",
              "description": "Stay informed with the latest Ministry updates and Quality Control Order (QCO) withdraw notifications. Get comprehensive details on regulatory changes and compliance requirements.",
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

        {/* JSON-LD Breadcrumb structured data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://bis-certifications.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Ministry Updates",
                item: "https://bis-certifications.com/ministry-updates",
              },
            ],
          })}
        </script>
      </Helmet>

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
                  <BreadcrumbPage>Ministry Updates</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <MinistryUpdatesMainContent />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default MinistryUpdates;

const MinistryUpdatesMainContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <div className=" bg-[#f9f7f2]">
      <div className=" max-w-[88rem] mx-auto px-4 py-12 md:px-12 md:py-12">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="font-playfair text-2xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            Ministry Updates
          </h1>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest Quality Control Order withdraw
            notifications and regulatory changes
          </p>
        </div>

        {/* Search Bar */}
        <div className=" mb-12 md:mb-20 max-w-2xl mx-auto">
          <div className="relative">
            <label htmlFor="search" className="sr-only">
              Search ministry updates
            </label>
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for Ministry Updates/QCO Withdraw Orders"
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

      <div className="pt-8 pb-12 md:pt-12 md:pb-16 px-4 flex items-center justify-center">
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
  const notifications = [
    {
      id: 1,
      color: "#1A8781",
      tagType: "BIS Update",
      date: "December 16, 2025",
      displayDate: "16 Dec 2025",
      title: "BIS Removes Mandatory In-House Laboratory Requirement for Manufacturers",
      description:
        "BIS has officially removed the mandatory in-house laboratory requirement for most products under BIS certification. Manufacturers can now use external BIS-recognised or ISO 17025 accredited labs.",
      link: "/ministry-updates/bis-in-house-lab-requirement",
    },
    {
      id: 0,
      color: "#5B63E6",
      tagType: "BIS Update",
      date: "January 20, 2025",
      displayDate: "20 Jan 2025",
      title: "BIS Lifts Restrictions for ASEAN & Overseas Manufacturers",
      description:
        "BIS has removed country-specific restrictions on ASEAN and overseas manufacturers, enabling faster BIS certification and smoother entry into India. Pending applications are now being cleared.",
      link: "/ministry-updates/bis-certification-update-asean-manufacturers",
    },
    {
      id: 2,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "November 15, 2024",
      displayDate: "12 Nov 2025",
      title: "Refined Zinc QCO Withdraw Order",
      description:
        "Quality Control Order for Refined Zinc has been withdrawn. Learn about the implications and requirements for manufacturers and importers.",
      link: "/ministry-updates/refined-zinc-qco-withdraw-order",
    },
    {
      id: 2,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "November 10, 2024",
      displayDate: "12 Nov 2025",
      title: "Aluminium and Aluminium Alloys QCO Withdraw Order",
      description:
        "The Quality Control Order for Aluminium and Aluminium Alloys has been officially withdrawn. Get complete details about the order withdrawal.",
      link: "/ministry-updates/aluminium-and-aluminium-alloys-qco-withdraw-order",
    },
    {
      id: 3,
      color: "#5B63E6",
      tagType: "QCO Withdraw",
      date: "November 8, 2024",
      displayDate: "12 Nov 2025",
      title: "Copper QCO Withdraw Order",
      description:
        "Ministry of Consumer Affairs has withdrawn the Quality Control Order for Copper products. Read the complete notification and its impact.",
      link: "/ministry-updates/copper-qco-withdraw-order",
    },
    {
      id: 4,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "November 5, 2024",
      displayDate: "12 Nov 2025",
      title: "Tin Ingot QCO Withdraw Order",
      description:
        "The Quality Control Order for Tin Ingots has been withdrawn. Check out the detailed order notification and compliance requirements.",
      link: "/ministry-updates/tin-ingot-qco-withdraw-order",
    },
    {
      id: 5,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "November 1, 2024",
      displayDate: "12 Nov 2025",
      title: "Refined Nickel QCO Withdraw Order",
      description:
        "Quality Control Order for Refined Nickel products has been officially withdrawn. Stay informed about the regulatory changes.",
      link: "/ministry-updates/refined-nickel-qco-withdraw-order",
    },
    {
      id: 6,
      color: "#5B63E6",
      tagType: "QCO Withdraw",
      date: "October 28, 2024",
      displayDate: "12 Nov 2025",
      title: "Nickel Powder QCO Withdraw Order",
      description:
        "The QCO for Nickel Powder has been withdrawn by the Ministry. Access complete details and documentation regarding this order.",
      link: "/ministry-updates/nickel-qco-withdraw-order",
    },
    {
      id: 7,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "October 25, 2024",
      displayDate: "12 Nov 2025",
      title: "Petrochemical and Polymer Products QCO Withdraw Order",
      description:
        "Quality Control Order for Petrochemical and Polymer Products has been withdrawn. Read the comprehensive notification and guidelines.",
      link: "/ministry-updates/petrochemical-and-polymer-products-qco-withdraw-order",
    },
    {
      id: 8,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "January 16, 2026",
      displayDate: "16 Jan 2026",
      title: "Machinery & Electrical Equipment Safety (OTR) Order Withdrawn",
      description:
        "The Ministry of Heavy Industries has withdrawn the Machinery and Electrical Equipment Safety (Omnibus Technical Regulation) Order, 2024. Learn about the impact on BIS Scheme X certification.",
      link: "/ministry-updates/scheme-x-qco-withdraw-order",
      pdfLink: "/pdf/withdrawal_of_the_machinery_and_electrical_equipment_safety_omnibus_technical_regulation_order_2024.pdf",
    },
    {
      id: 10,
      color: "#5B63E6",
      tagType: "QCO Amendment",
      date: "January 15, 2025",
      displayDate: "19 Nov 2025",
      title: "Steel Products Amendment 2025",
      description:
        "The Ministry of Steel has released the Steel and Steel Products (Quality Control) Amendment Order, 2025, extending enforcement of select IS standards by 1 to 3 years. Explore the updated list of steel products and compliance timelines.",
      link: "/ministry-updates/steel-products-amendment-2025",
    },
    {
      id: 11,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "December 24, 2021",
      displayDate: "24 Dec 2021",
      title: "Toluene QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Toluene (Quality Control) Order, 2021, removing the BIS certification requirement under IS 537:2011. Know the reasons and industry impact.",
      link: "/ministry-updates/toluene-qco-withdraw-order",
    },
    {
      id: 12,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "December 24, 2021",
      displayDate: "24 Dec 2021",
      title: "Methyl Acrylate, Ethyl Acrylate QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Methyl Acrylate, Ethyl Acrylate (Quality Control) Order, 2021, removing the BIS certification requirement under IS 14707:1999 & IS 14708:1999. Learn about the implications for manufacturers and importers.",
      link: "/ministry-updates/methyl-acrylate-ethyl-acrylate-qco-withdraw-order",
    },
    {
      id: 13,
      color: "#5B63E6",
      tagType: "QCO Withdraw",
      date: "December 24, 2021",
      displayDate: "30 Nov 2025",
      title: "Vinyl Acetate Monomer QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Vinyl Acetate Monomer (Quality Control) Order, 2021, removing the BIS certification requirement under IS 12345:1988. Know the reasons and industry impact.",
      link: "/ministry-updates/vinyl-acetate-monomer-qco-withdraw-order",
    },
    {
      id: 13,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "September 13, 2021",
      displayDate: "13 Sep 2021",
      title: "Vinyl Chloride Monomer QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Vinyl Chloride Monomer (Quality Control) Order, 2021, removing the BIS certification requirement under IS 17442:2020. Know the reasons and industry impact.",
      link: "/ministry-updates/vinyl-chloride-monomer-qco-withdraw-order",
    },
  ];

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
    } catch {
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
      notification.description.toLowerCase().includes(searchLower)
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      {currentItems.length > 0 ? (
        currentItems.map((notification) => (
          <NotificationCardItem
            key={notification.id}
            color={notification.color}
            tagType={notification.tagType}
            title={notification.title}
            description={notification.description}
            displayDate={notification.displayDate}
            link={notification.link}
          />
        ))
      ) : (
        <div className="col-span-2 text-center ">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                No ministry updates found matching your Search Criteria.
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
  title,
  description,
  displayDate,
  link,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] h-full flex flex-col">
      {/* Color-coded header bar */}
      <div className="h-3 md:h-4" style={{ backgroundColor: color }}></div>

      <div className="p-5 md:p-8 flex flex-col flex-grow">
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
            {displayDate}
          </span>
        </div>

        {/* Product title - clickable */}
        <Link to={link}>
          <h3 className="font-playfair text-2xl font-bold text-[#1E1E1E] mb-3 min-h-[4rem] flex items-start cursor-pointer hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>

        {/* Product description */}
        <p className="font-geist text-gray-600 mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Read more button with dynamic color styling */}
        <div className="flex justify-end pt-4 border-t-2 border-gray-300 mt-auto">
          <Link to={link} className="relative">
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

NotificationCardItem.propTypes = {
  color: PropTypes.string.isRequired,
  tagType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  displayDate: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  searchQuery,
}) => {
  const notifications = [
    {
      id: 1,
      color: "#1A8781",
      tagType: "BIS Update",
      date: "December 16, 2025",
      displayDate: "16 Dec 2025",
      title: "BIS Removes Mandatory In-House Laboratory Requirement for Manufacturers",
      description:
        "BIS has officially removed the mandatory in-house laboratory requirement for most products under BIS certification. Manufacturers can now use external BIS-recognised or ISO 17025 accredited labs.",
      link: "/ministry-updates/bis-in-house-lab-requirement",
    },
    {
      id: 0,
      color: "#5B63E6",
      tagType: "BIS Update",
      date: "January 20, 2025",
      displayDate: "20 Jan 2025",
      title: "BIS Lifts Restrictions for ASEAN & Overseas Manufacturers",
      description:
        "BIS has removed country-specific restrictions on ASEAN and overseas manufacturers, enabling faster BIS certification and smoother entry into India. Pending applications are now being cleared.",
      link: "/ministry-updates/bis-certification-update-asean-manufacturers",
    },
    {
      id: 2,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "November 15, 2024",
      displayDate: "12 Nov 2025",
      title: "Refined Zinc QCO Withdraw Order",
      description:
        "Quality Control Order for Refined Zinc has been withdrawn. Learn about the implications and requirements for manufacturers and importers.",
      link: "/ministry-updates/refined-zinc-qco-withdraw-order",
    },
    {
      id: 2,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "November 10, 2024",
      displayDate: "12 Nov 2025",
      title: "Aluminium and Aluminium Alloys QCO Withdraw Order",
      description:
        "The Quality Control Order for Aluminium and Aluminium Alloys has been officially withdrawn. Get complete details about the order withdrawal.",
      link: "/ministry-updates/aluminium-and-aluminium-alloys-qco-withdraw-order",
    },
    {
      id: 3,
      color: "#5B63E6",
      tagType: "QCO Withdraw",
      date: "November 8, 2024",
      displayDate: "12 Nov 2025",
      title: "Copper QCO Withdraw Order",
      description:
        "Ministry of Consumer Affairs has withdrawn the Quality Control Order for Copper products. Read the complete notification and its impact.",
      link: "/ministry-updates/copper-qco-withdraw-order",
    },
    {
      id: 4,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "November 5, 2024",
      displayDate: "12 Nov 2025",
      title: "Tin Ingot QCO Withdraw Order",
      description:
        "The Quality Control Order for Tin Ingots has been withdrawn. Check out the detailed order notification and compliance requirements.",
      link: "/ministry-updates/tin-ingot-qco-withdraw-order",
    },
    {
      id: 5,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "November 1, 2024",
      displayDate: "12 Nov 2025",
      title: "Refined Nickel QCO Withdraw Order",
      description:
        "Quality Control Order for Refined Nickel products has been officially withdrawn. Stay informed about the regulatory changes.",
      link: "/ministry-updates/refined-nickel-qco-withdraw-order",
    },
    {
      id: 6,
      color: "#5B63E6",
      tagType: "QCO Withdraw",
      date: "October 28, 2024",
      displayDate: "12 Nov 2025",
      title: "Nickel Powder QCO Withdraw Order",
      description:
        "The QCO for Nickel Powder has been withdrawn by the Ministry. Access complete details and documentation regarding this order.",
      link: "/ministry-updates/nickel-qco-withdraw-order",
    },
    {
      id: 7,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "October 25, 2024",
      displayDate: "12 Nov 2025",
      title: "Petrochemical and Polymer Products QCO Withdraw Order",
      description:
        "Quality Control Order for Petrochemical and Polymer Products has been withdrawn. Read the comprehensive notification and guidelines.",
      link: "/ministry-updates/petrochemical-and-polymer-products-qco-withdraw-order",
    },
    {
      id: 8,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "January 16, 2026",
      displayDate: "16 Jan 2026",
      title: "Machinery & Electrical Equipment Safety (OTR) Order Withdrawn",
      description:
        "The Ministry of Heavy Industries has withdrawn the Machinery and Electrical Equipment Safety (Omnibus Technical Regulation) Order, 2024. Learn about the impact on BIS Scheme X certification.",
      link: "/ministry-updates/scheme-x-qco-withdraw-order",
      pdfLink: "/pdf/withdrawal_of_the_machinery_and_electrical_equipment_safety_omnibus_technical_regulation_order_2024.pdf",
    },
    {
      id: 9,
      color: "#1A8781",
      tagType: "QCO Amendment",
      date: "January 15, 2025",
      displayDate: "19 Nov 2025",
      title: "Steel Products Amendment 2025",
      description:
        "The Ministry of Steel has released the Steel and Steel Products (Quality Control) Amendment Order, 2025, extending enforcement of select IS standards by 1 to 3 years. Explore the updated list of steel products and compliance timelines.",
      link: "/ministry-updates/steel-products-amendment-2025",
    },
    {
      id: 10,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "December 24, 2021",
      displayDate: "30 Nov 2025",
      title: "Toluene QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Toluene (Quality Control) Order, 2021, removing the BIS certification requirement under IS 537:2011. Know the reasons and industry impact.",
      link: "/ministry-updates/toluene-qco-withdraw-order",
    },
    {
      id: 11,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "December 24, 2021",
      displayDate: "30 Nov 2025",
      title: "Methyl Acrylate, Ethyl Acrylate QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Methyl Acrylate, Ethyl Acrylate (Quality Control) Order, 2021, removing the BIS certification requirement under IS 14707:1999 & IS 14708:1999. Learn about the implications for manufacturers and importers.",
      link: "/ministry-updates/methyl-acrylate-ethyl-acrylate-qco-withdraw-order",
    },
    {
      id: 13,
      color: "#5B63E6",
      tagType: "QCO Withdraw",
      date: "December 24, 2021",
      displayDate: "30 Nov 2025",
      title: "Vinyl Acetate Monomer QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Vinyl Acetate Monomer (Quality Control) Order, 2021, removing the BIS certification requirement under IS 12345:1988. Know the reasons and industry impact.",
      link: "/ministry-updates/vinyl-acetate-monomer-qco-withdraw-order",
    },
    {
      id: 14,
      color: "#1A8781",
      tagType: "QCO Withdraw",
      date: "September 13, 2021",
      displayDate: "13 Sep 2021",
      title: "Vinyl Chloride Monomer QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Vinyl Chloride Monomer (Quality Control) Order, 2021, removing the BIS certification requirement under IS 17442:2020. Know the reasons and industry impact.",
      link: "/ministry-updates/vinyl-chloride-monomer-qco-withdraw-order",
    },
    {
      id: 15,
      color: "#C86A31",
      tagType: "QCO Withdraw",
      date: "September 13, 2021",
      displayDate: "13 Sep 2021",
      title: "Ethylene Dichloride QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the Ethylene Dichloride (Quality Control) Order, 2021, removing the BIS certification requirement under IS 869:2020. Know the reasons and industry impact.",
      link: "/ministry-updates/ethylene-dichloride-qco-withdraw-order",
    },
    {
      id: 15,
      color: "#5B63E6",
      tagType: "QCO Withdraw",
      date: "September 13, 2021",
      displayDate: "13 Sep 2021",
      title: "P-Xylene QCO Withdraw Order",
      description:
        "The Government of India has withdrawn the P-Xylene (Quality Control) Order, 2021, removing the BIS certification requirement under IS 17370:2020. Know the reasons and industry impact.",
      link: "/ministry-updates/p-xylene-qco-withdraw-order",
    },
  ];

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
    } catch {
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
      notification.description.toLowerCase().includes(searchLower)
    );
  });

  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Don't show pagination if there are no pages
  if (totalPages <= 1) {
    return null;
  }

  // Generate smart page numbers for pagination
  const generatePageNumbers = () => {
    const maxVisiblePages = 5; // Show max 5 page numbers
    const delta = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - delta);
    let endPage = Math.min(totalPages, currentPage + delta);

    // Adjust if we're near the beginning or end
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
      {/* Page Numbers */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
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

      {/* Page Info */}
      <div className="text-center">
        <span className="text-sm text-gray-500 font-geist font-medium">
          Page {currentPage} of {totalPages}
        </span>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  searchQuery: PropTypes.string.isRequired,
};
