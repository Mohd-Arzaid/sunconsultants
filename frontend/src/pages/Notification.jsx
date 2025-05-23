import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Footer from "@/common/Footer";
import { ChevronLeft, ChevronRight, FileText, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <>
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
            <label htmlFor="search" className="sr-only">Search notifications</label>
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
        <NotificationCard searchQuery={searchQuery} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      </div>

      <div className="pb-8 md:pb-12 flex items-center justify-center">
        {/* Pagination */}
        <Pagination 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          totalItems={notifications.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

// Move notifications array outside component
const notifications = [
  {
    id: 1,
    color: "#1A8781",
    tagType: "New QCO",
    date: "March 15, 2023",
    title: "Medical Devices Quality Control Order 2023",
    description:
      "New regulations for medical device manufacturing and certification requirements have been published. These focus on improved safety standards and quality assurance protocols.",
  },
  {
    id: 2,
    color: "#C86A31",
    tagType: "Update",
    date: "February 28, 2023",
    title: "Electronic Goods Certification Revision",
    description:
      "The existing Quality Control Order for electronic goods has been revised with updated technical specifications and compliance requirements for manufacturers and importers.",
  },
  {
    id: 3,
    color: "#5B63E6",
    tagType: "Draft",
    date: "April 10, 2023",
    title: "Pharmaceutical Products Draft QCO",
    description:
      "A new draft Quality Control Order for pharmaceutical products has been issued for public consultation. Stakeholders are invited to provide feedback before implementation.",
  },
  {
    id: 4,
    color: "#1A8781",
    tagType: "Draft",
    date: "March 22, 2023",
    title: "Textile Products Standards Implementation",
    description:
      "The implementation timeline for the Textile Products Quality Control Order has been announced. Companies have until October 2023 to ensure compliance with the new standards.",
  },
  {
    id: 5,
    color: "#C86A31",
    tagType: "Update",
    date: "May 5, 2023",
    title: "Automotive Components QCO Amendment",
    description:
      "Amendments to the Automotive Components Quality Control Order have been released, focusing on enhanced safety features and emissions control components for all vehicle categories.",
  },
  {
    id: 6,
    color: "#5B63E6",
    tagType: "Draft",
    date: "April 28, 2023",
    title: "Food Processing Equipment Standards",
    description:
      "New draft standards for food processing equipment certification have been published. The proposed regulations aim to improve hygiene standards and material safety for consumer protection.",
  },
  {
    id: 7,
    color: "#1A8781",
    tagType: "New QCO",
    date: "June 12, 2023",
    title: "Solar Panel Quality Control Requirements",
    description:
      "The Ministry has issued a new Quality Control Order for solar panels and photovoltaic systems. The standards focus on efficiency ratings, durability, and safety compliance for domestic and commercial installations.",
  },
  {
    id: 8,
    color: "#C86A31",
    tagType: "Update",
    date: "May 19, 2023",
    title: "Toys and Children's Products Safety Standards",
    description:
      "Updated certification requirements for toys and children's products have been announced. The revised standards include stricter testing for hazardous materials and enhanced durability requirements.",
  },
  {
    id: 9,
    color: "#5B63E6",
    tagType: "Draft",
    date: "June 3, 2023",
    title: "Construction Materials Quality Control Proposal",
    description:
      "A comprehensive draft for construction materials certification has been released for industry feedback. The proposed regulations cover cement, steel reinforcement, and structural components.",
  },
  {
    id: 10,
    color: "#1A8781",
    tagType: "New QCO",
    date: "June 30, 2023",
    title: "Personal Protective Equipment Standards",
    description:
      "New Quality Control Order for personal protective equipment (PPE) has been implemented. The regulations establish mandatory testing and certification procedures for all PPE manufactured or imported into the country.",
  },
  {
    id: 11,
    color: "#C86A31",
    tagType: "Update",
    date: "July 15, 2023",
    title: "Agricultural Machinery QCO Revision",
    description:
      "Updated standards for agricultural machinery and equipment have been released. The revision focuses on safety features, efficiency metrics, and environmental compliance for farming equipment.",
  },
  {
    id: 12,
    color: "#5B63E6",
    tagType: "Draft",
    date: "July 28, 2023",
    title: "Renewable Energy Equipment Standards",
    description:
      "New draft QCO for renewable energy equipment has been published. The standards cover wind turbines, hydroelectric components, and related infrastructure requirements.",
  },
  {
    id: 13,
    color: "#1A8781",
    tagType: "New QCO",
    date: "August 10, 2023",
    title: "Industrial Safety Equipment Certification",
    description:
      "Comprehensive QCO for industrial safety equipment has been implemented. The order establishes mandatory testing protocols for safety gear used in hazardous environments.",
  },
  {
    id: 14,
    color: "#C86A31",
    tagType: "Update",
    date: "August 25, 2023",
    title: "Telecommunications Equipment Standards",
    description:
      "Revised QCO for telecommunications equipment has been announced. The update includes new specifications for 5G infrastructure and network security requirements.",
  },
  {
    id: 15,
    color: "#5B63E6",
    tagType: "Draft",
    date: "September 5, 2023",
    title: "Smart Home Devices Certification",
    description:
      "Draft QCO for smart home devices and IoT equipment has been released. The proposed standards focus on data security, interoperability, and energy efficiency.",
  },
  {
    id: 16,
    color: "#1A8781",
    tagType: "New QCO",
    date: "September 20, 2023",
    title: "Medical Laboratory Equipment Standards",
    description:
      "New QCO for medical laboratory equipment has been implemented. The standards establish requirements for accuracy, calibration, and quality control in diagnostic equipment.",
  },
  {
    id: 17,
    color: "#C86A31",
    tagType: "Update",
    date: "October 8, 2023",
    title: "Food Packaging Materials Revision",
    description:
      "Updated QCO for food packaging materials has been released. The revision includes new requirements for recyclable materials and food safety compliance.",
  },
  {
    id: 18,
    color: "#5B63E6",
    tagType: "Draft",
    date: "October 25, 2023",
    title: "Electric Vehicle Components Standards",
    description:
      "Draft QCO for electric vehicle components has been published. The proposed standards cover battery systems, charging infrastructure, and safety requirements.",
  },
  {
    id: 19,
    color: "#1A8781",
    tagType: "New QCO",
    date: "November 12, 2023",
    title: "Industrial Automation Equipment",
    description:
      "New QCO for industrial automation equipment has been implemented. The standards establish requirements for robotics, control systems, and safety protocols.",
  },
  {
    id: 20,
    color: "#C86A31",
    tagType: "Update",
    date: "November 28, 2023",
    title: "Building Materials Certification",
    description:
      "Revised QCO for building materials has been announced. The update includes new requirements for sustainable materials and energy efficiency standards.",
  },
  {
    id: 21,
    color: "#5B63E6",
    tagType: "Draft",
    date: "December 5, 2023",
    title: "Waste Management Equipment",
    description:
      "Draft QCO for waste management equipment has been released. The proposed standards cover recycling machinery, waste processing systems, and environmental compliance.",
  },
  {
    id: 22,
    color: "#1A8781",
    tagType: "New QCO",
    date: "December 15, 2023",
    title: "Digital Payment Systems",
    description:
      "New QCO for digital payment systems and equipment has been implemented. The standards establish security requirements and interoperability protocols.",
  },
  {
    id: 23,
    color: "#C86A31",
    tagType: "Update",
    date: "January 10, 2024",
    title: "Educational Equipment Standards",
    description:
      "Updated QCO for educational equipment has been released. The revision includes new requirements for digital learning tools and laboratory equipment.",
  },
  {
    id: 24,
    color: "#5B63E6",
    tagType: "Draft",
    date: "January 25, 2024",
    title: "Sports Equipment Certification",
    description:
      "Draft QCO for sports equipment has been published. The proposed standards cover safety requirements and performance metrics for various sports gear.",
  },
  {
    id: 25,
    color: "#1A8781",
    tagType: "New QCO",
    date: "February 8, 2024",
    title: "Maritime Equipment Standards",
    description:
      "New QCO for maritime equipment has been implemented. The standards establish requirements for navigation systems, safety equipment, and vessel components.",
  },
  {
    id: 26,
    color: "#C86A31",
    tagType: "Update",
    date: "February 20, 2024",
    title: "Aviation Components Revision",
    description:
      "Revised QCO for aviation components has been announced. The update includes new specifications for aircraft parts and maintenance equipment.",
  },
  {
    id: 27,
    color: "#5B63E6",
    tagType: "Draft",
    date: "March 5, 2024",
    title: "Railway Infrastructure Equipment",
    description:
      "Draft QCO for railway infrastructure equipment has been released. The proposed standards cover signaling systems, track components, and safety equipment.",
  },
  {
    id: 28,
    color: "#1A8781",
    tagType: "New QCO",
    date: "March 18, 2024",
    title: "Mining Equipment Standards",
    description:
      "New QCO for mining equipment has been implemented. The standards establish safety requirements and performance metrics for mining machinery.",
  },
  {
    id: 29,
    color: "#C86A31",
    tagType: "Update",
    date: "March 30, 2024",
    title: "Chemical Processing Equipment",
    description:
      "Updated QCO for chemical processing equipment has been released. The revision includes new safety protocols and environmental compliance requirements.",
  },
  {
    id: 30,
    color: "#5B63E6",
    tagType: "Draft",
    date: "April 12, 2024",
    title: "Defense Equipment Standards",
    description:
      "Draft QCO for defense equipment has been published. The proposed standards cover security requirements and technical specifications for defense systems.",
  }
];

const NotificationCard = ({ searchQuery, currentPage, itemsPerPage }) => {
  const filteredNotifications = notifications.filter((notification) => {
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
  const currentItems = filteredNotifications.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
      {currentItems.length > 0 ? (
        currentItems.map((notification) => (
          <NotificationCardItem
            key={notification.id}
            color={notification.color}
            tagType={notification.tagType}
            date={notification.date}
            title={notification.title}
            description={notification.description}
          />
        ))
      ) : (
        <div className="col-span-2 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                No notifications found matching your Search Criteria.
              </p>
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                Don't worry! We're here to help you find what you're looking for.
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
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

const NotificationCardItem = ({ color, tagType, date, title, description }) => {
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
          <div className="flex items-center gap-2">
            <FileText size={18} style={{ color: color }} />
            <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors hover:decoration-gray-950 text-gray-600">
              Official Document
            </span>
          </div>

          <Link to="/latest-notification">
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

const Pagination = ({ currentPage, setCurrentPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4" role="navigation" aria-label="Pagination">
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
                ? 'bg-[#1A8781] text-white'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            aria-label={`Page ${index + 1}`}
            aria-current={currentPage === index + 1 ? 'page' : undefined}
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