import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Footer from "@/common/Footer";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
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

const MinistryUpdates = () => {
  return (
    <div className="relative">
      <Helmet>
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
                name: "DRAFT BIS Notifications",
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
                  <BreadcrumbPage>DRAFT BIS Notifications</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <BISMinistryUpdatesMainContent />
      <Footer />
    </div>
  );
};

export default MinistryUpdates;

const BISMinistryUpdatesMainContent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className=" bg-[#f9f7f2]">
      <div className="max-w-[88rem] mx-auto px-4 pt-12 pb-8 md:px-12 md:py-12">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1e1e1e] mb-3 md:mb-4">
            DRAFT BIS Notifications
          </h1>
          <p className="text-base md:text-lg font-geist text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest Quality Control Order notifications and
            certification requirements
          </p>
        </div>

        {/* Search Bar */}
        <div className=" mb-12 md:mb-20 max-w-2xl mx-auto">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for BIS Notifications"
              className="w-full pl-11 md:pl-12 placeholder:font-geist  placeholder:text-[17px] sm:placeholder:text-[18px] pr-4 py-3 md:py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
          </div>
        </div>

        {/* Notifications */}
        <BISNotificationCard searchQuery={searchQuery} />
      </div>

      <div className="pb-8 md:pb-12 flex items-center justify-center">
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

const BISNotificationCard = ({ searchQuery }) => {
  const notifications = [
    {
      id: 1,
      color: "#1A8781",
      tagType: "New Standard",
      date: "March 15, 2023",
      title: "BIS Certification for Electronic Products",
      description:
        "New BIS certification requirements for electronic products have been published. These focus on improved safety standards and quality assurance protocols.",
    },
    {
      id: 2,
      color: "#C86A31",
      tagType: "Update",
      date: "February 28, 2023",
      title: "Revised BIS Standards for Steel Products",
      description:
        "The existing BIS standards for steel products have been revised with updated technical specifications and compliance requirements for manufacturers.",
    },
    {
      id: 3,
      color: "#5B63E6",
      tagType: "Draft",
      date: "April 10, 2023",
      title: "Proposed BIS Standards for Solar Panels",
      description:
        "A new draft BIS standard for solar panels has been issued for public consultation. Stakeholders are invited to provide feedback before implementation.",
    },
    {
      id: 4,
      color: "#1A8781",
      tagType: "New Standard",
      date: "March 22, 2023",
      title: "BIS Certification for Medical Devices",
      description:
        "New BIS certification requirements for medical devices have been announced. Companies have until October 2023 to ensure compliance with the new standards.",
    },
    {
      id: 5,
      color: "#C86A31",
      tagType: "Update",
      date: "May 5, 2023",
      title: "Amended BIS Standards for Textiles",
      description:
        "Amendments to the BIS standards for textiles have been released, focusing on enhanced quality parameters and testing methods.",
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      notification.title.toLowerCase().includes(searchLower) ||
      notification.description.toLowerCase().includes(searchLower) ||
      notification.tagType.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
      {filteredNotifications.length > 0 ? (
        filteredNotifications.map((notification) => (
          <BISNotificationCardItem
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
                No BIS notifications found matching your Search Criteria.
              </p>
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                Don't worry! We're here to help you find what you're looking
                for.
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

const BISNotificationCardItem = ({
  color,
  tagType,
  date,
  title,
  description,
}) => {
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
              BIS Document
            </span>
          </div>

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
        </div>
      </div>
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Previous Button */}
      <button className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200">
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center justify-center gap-2">
        <button className="h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all  bg-[#1A8781] text-white">
          1
        </button>
        <button className="h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all  text-gray-700 hover:bg-gray-200">
          2
        </button>
        <button className="h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all  text-gray-700 hover:bg-gray-200">
          3
        </button>
      </div>

      {/* Next Button */}
      <button className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-300 text-gray-700 hover:border-[#1A8781] hover:text-[#1A8781] transition-all duration-200">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};
