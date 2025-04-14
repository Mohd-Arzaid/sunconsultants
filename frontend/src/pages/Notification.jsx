import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { ChevronLeft, ChevronRight, FileText } from "lucide-react";

const Notification = () => {
  return (
    <>
      <NotificationMainContent />
    </>
  );
};

export default Notification;

const NotificationMainContent = () => {
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
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for Government Notification/QCO Updates"
              className="w-full pl-11 md:pl-12 placeholder:font-geist  placeholder:text-[17px] sm:placeholder:text-[18px] pr-4 py-3 md:py-4 rounded-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border-2 border-transparent bg-white focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all duration-200"
            />
          </div>
        </div>

        {/* Notifications */}
        <NotificationCard />
      </div>

      <div className="pb-8 md:pb-12 flex items-center justify-center">
        {/* Pagination */}
        <Pagination />
      </div>
    </div>
  );
};

const NotificationCard = () => {
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ">
      {notifications.map((notification) => (
        <NotificationCardItem
          key={notification.id}
          color={notification.color}
          tagType={notification.tagType}
          date={notification.date}
          title={notification.title}
          description={notification.description}
        />
      ))}
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
