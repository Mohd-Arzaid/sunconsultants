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
          totalItems={notifications.length}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

// Move notifications array outside component
export const notifications = [
  {
    id: 1,
    color: "#1A8781",
    tagType: "New QCO",
    date: "13 February 2025",
    title: "BIS certification for Work chairs",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of “ Work chairs.",
    pdfUrl: "/pdf/notification_1.pdf",
    location: " New Delhi",
    subHeading: "Work Chairs",
    ISNumber: "IS 17631: 2022",
    Date1: "13th Feb 2026",
    Date2: "13th Aug 2026",
    Date3: "13th Aug 2026",
  },

  {
    id: 2,
    color: "#C86A31",
    tagType: "Update",
    date: "13 February 2025",
    title: "BIS certification for Chairs and stools",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of “ General purpose chairs and stools.",
    pdfUrl: "/pdf/notification_2.pdf",
    location: "New Delhi",
    subHeading: "General purpose chairs and stools",
    ISNumber: "IS 17632: 2022",
    Date1: "13th Feb 2026",
    Date2: "13th Aug 2026",
    Date3: "13th Aug 2026 ",
  },
  {
    id: 3,
    color: "#5B63E6",
    tagType: "New QCO",
    date: "13 February 2025",
    title: "BIS Notification for Tables and desks",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of “ Tables and desks.",
    pdfUrl: "/pdf/notification_3.pdf",
    location: " New Delhi",
    subHeading: "Tables and desks",
    ISNumber: "IS 17633: 2022",
    Date1: "13th Feb 2026",
    Date2: "13th Aug 2026",
    Date3: "13th Aug 2026 ",
  },
  {
    id: 4,
    color: "#1A8781",
    tagType: "New QCO",
    date: "13 February 2025",
    title: "BIS Notification for Storage units",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of “ Storage units.",
    pdfUrl: "/pdf/notification_4.pdf",
    location: " New Delhi",
    subHeading: "Storage units",
    ISNumber: "IS 17634: 2022",
    Date1: "13th Feb 2026",
    Date2: "13th Aug 2026",
    Date3: "13th Aug 2026 ",
  },
  {
    id: 5,
    color: "#C86A31",
    tagType: "Update",
    date: "13 February 2025",
    title: "BIS Notification for Bunk beds",
    description: "QCO notification Bunk beds under IS 17636: 2022 is as below:",
    pdfUrl: "/pdf/notification_5.pdf",
    location: " New Delhi",
    subHeading: "Bunk beds",
    ISNumber: "IS 17636: 2022",
    Date1: "13th Feb 2026",
    Date2: "13th Aug 2026",
    Date3: "13th Aug 2026 ",
  },
  {
    id: 6,
    color: "#5B63E6",
    tagType: "New QCO",
    date: "13 February 2025",
    title: "BIS Notification for Beds",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of “ Beds",
    pdfUrl: "/pdf/notification_6.pdf",
    location: " New Delhi",
    subHeading: "Beds",
    ISNumber: "IS 17635: 2022",
    Date1: "13th Feb 2026",
    Date2: "13th Aug 2026",
    Date3: "13th Aug 2026 ",
  },

  {
    id: 7,
    color: "#1A8781",
    tagType: "Electric Cable",
    date: "January 6, 2025",
    title: "BIS Notification for Solar DC Cable and Fire Survival Cable",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of electric cable for photovoltaic.",
    pdfUrl: "/pdf/notification_7.pdf",
    location: " New Delhi",
    subHeading: "Electric Cable for Photovoltic",
    ISNumber: "IS 17293:2020 ",
    Date1: "24th Feb 2024",
    Date2: "24th Aug 2024 ",
    Date3: "24th Aug 2024 ",
  },

  {
    id: 8,
    color: "#C86A31",
    tagType: "Wrought Aluminium",
    date: "December 25, 2024",
    title:
      "BIS Notification for Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of wrought aluminium and aluminium alloys, forging stock and forgings.",
    pdfUrl: "/pdf/notification_8.pdf",
    location: " New Delhi",
    subHeading:
      "Wrought Aluminium and Aluminium Alloys, Forging Stock and Forgings",
    ISNumber: " IS 734:1975",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 9,
    color: "#5B63E6",
    tagType: "H Acid",
    date: "November 14, 2024",
    title: "BIS Notification for H Acid",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of H Acid.",
    pdfUrl: "/pdf/notification_9.pdf",
    location: " New Delhi",
    subHeading: "H Acid",
    ISNumber: "IS 8637 : 2020",
    Date1: "14th May 2025",
    Date2: "14th May 2025",
    Date3: "14th May 2025",
  },
  {
    id: 10,
    color: "#6C5B7B",
    tagType: "K Acid",
    date: "November 14, 2024",
    title: "BIS Notification for K Acid",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of K Acid.",
    pdfUrl: "/pdf/notification_10.pdf",
    location: " New Delhi",
    subHeading: "K Acid",
    ISNumber: "IS 11557: 1986",
    Date1: "14th May 2025",
    Date2: "14th May 2025",
    Date3: "14th May 2025",
  },
  {
    id: 11,
    color: "#FF6F61",
    tagType: "Vinyl Sulphone",
    date: "November 14, 2024",
    title: "BIS Notification for Vinyl Sulphone",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Vinyl Sulphone.",
    pdfUrl: "/pdf/notification_11.pdf",
    location: " New Delhi",
    subHeading: "Vinyl Sulphone",
    ISNumber: " IS 18340 : 2023",
    Date1: "14th May 2025",
    Date2: "14th May 2025",
    Date3: "14th May 2025",
  },
  {
    id: 12,
    color: "#F38630",
    tagType: "Electric Fence",
    date: "November 14, 2024",
    title: "BIS Notification for Electric Fence Energizers",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Electric Fence Energizers.",
    pdfUrl: "/pdf/notification_12.pdf",
    location: " New Delhi",
    subHeading: "Electric Fence Energizers",
    ISNumber: " IS 302-2-76:1999",
    Date1: "14th May 2025",
    Date2: "14th May 2025",
    Date3: "14th May 2025",
  },
  {
    id: 13,
    color: "#96CEB4",
    tagType: "Washing Machines",
    date: "November 01, 2024",
    title: "BIS Notification for Clothes Washing Machines",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Clothes Washing Machines.",
    pdfUrl: "/pdf/notification_13.pdf",
    location: " New Delhi",
    subHeading: "Clothes Washing Machines",
    ISNumber: "IS 302 (Part 2/Sec 7): 2010",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 14,
    color: "#337AB7",
    tagType: "Plaster Boards",
    date: "November 01, 2024",
    title: "BIS Notification for Gypsum Plaster Boards",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Gypsum Plaster Boards.",
    pdfUrl: "/pdf/notification_14.pdf",
    location: " New Delhi",
    subHeading: "Gypsum Plaster Boards",
    ISNumber: "IS 302 (Part 2/Sec 7): 2010",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 15,
    color: "#FFCC5C",
    tagType: "Irrigation Tubes",
    date: "October 25, 2024",
    title:
      "BIS Notification for Aluminium alloy tubes for irrigation purposes -welded tubes",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminium alloy tubes for irrigation purposes -welded tubes.",
    pdfUrl: "/pdf/notification_15.pdf",
    location: " New Delhi",
    subHeading: "Aluminium alloy tubes for irrigation purposes -welded tubes",
    ISNumber: "IS 7092 (Part 1):1992",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 16,
    color: "#A8A7A7",
    tagType: "Irrigation Tubes",
    date: "October 25, 2024",
    title:
      "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminium alloy tube for irrigation purposes – extruded tube.",
    pdfUrl: "/pdf/notification_16.pdf",
    location: " New Delhi",
    subHeading: "Aluminium alloy tube for irrigation purposes – extruded tube",
    ISNumber: "IS 7092 (Part 2):1987",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 17,
    color: "#D9534F",
    tagType: "Irrigation Tubes",
    date: "October 25, 2024",
    title:
      "BIS Notification for Aluminium alloy tube for irrigation purposes – extruded tube",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminium alloy tube for irrigation purposes – extruded tube.",
    pdfUrl: "/pdf/notification_17.pdf",
    location: " New Delhi",
    subHeading: "Aluminium alloy tube for irrigation purposes – extruded tube",
    ISNumber: "IS 7092 (Part 2):1987",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 18,
    color: "#1A8781",
    tagType: "Aluminium Rod",
    date: "October 25, 2024",
    title:
      "BIS Notification for EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of EC Grade Aluminium Rod.",
    pdfUrl: "/pdf/notification_18.pdf",
    location: " New Delhi",
    subHeading:
      "EC Grade Aluminium Rod produced by Continuous Casting and Rolling",
    ISNumber: "IS 7092 (Part 2):1987",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 19,
    color: "#45ADA8",
    tagType: "Aluminium Bars",
    date: "October 25, 2024",
    title:
      "BIS Notification for Wrought aluminium and aluminium alloy bars, rods and sections",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought aluminium and aluminium alloy bars, rods and sections.",
    pdfUrl: "/pdf/notification_19.pdf",
    location: " New Delhi",
    subHeading: "Wrought aluminium and aluminium alloy bars, rods and sections",
    ISNumber: "IS 7092 (Part 2):1987 ",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 20,
    color: "#FF6F61",
    tagType: "Forging Stock",
    date: "October 25, 2024",
    title:
      "BIS Notification for Wrought aluminium and aluminium alloys, forging stock and forgings",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought aluminium and aluminium alloys, forging stock and forgings.",
    pdfUrl: "/pdf/notification_20.pdf",
    location: " New Delhi",
    subHeading:
      "Wrought aluminium and aluminium alloys, forging stock and forgings",
    ISNumber: "IS 734:1975 ",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 21,
    color: "#96CEB4",
    tagType: "Engineering Plate",
    date: "October 25, 2024",
    title:
      "QCO Notification for Wrought aluminium and aluminium alloy plate for general engineering purposes",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought aluminium and aluminium alloy plate for general engineering purposes.",
    pdfUrl: "/pdf/notification_21.pdf",
    location: " New Delhi",
    subHeading:
      "Wrought aluminium and aluminium alloy plate for general engineering purposes",
    ISNumber: "IS 734:1975 ",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 22,
    color: "#337AB7",
    tagType: "Sheet & Strip",
    date: "October 25, 2024",
    title:
      "BIS Notification for Wrought aluminium and aluminium alloy sheet and strip",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought aluminium and aluminium alloy sheet and strip.",
    pdfUrl: "/pdf/notification_22.pdf",
    location: " New Delhi",
    subHeading: "Wrought aluminium and aluminium alloy sheet and strip",
    ISNumber: "IS 734:1975 ",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 23,
    color: "#F38630",
    tagType: "Aluminium Wire",
    date: "October 25, 2024",
    title: "BIS Notification for Wrought aluminium and aluminium alloy wire",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought aluminium and aluminium alloy wire.",
    pdfUrl: "/pdf/notification_23.pdf",
    location: " New Delhi",
    subHeading: "Wrought aluminium and aluminium alloy wire",
    ISNumber: "IS 739:1992",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 24,
    color: "#6C5B7B",
    tagType: "Rivet Stock",
    date: "October 25, 2024",
    title:
      "BIS Notification for Wrought aluminium and aluminium alloy rivet stock",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought aluminium and aluminium alloy rivet stock.",
    pdfUrl: "/pdf/notification_24.pdf",
    location: " New Delhi",
    subHeading: "Wrought aluminium and aluminium alloy rivet stock",
    ISNumber: "IS 740:1977",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 25,
    color: "#1A8781",
    tagType: "Electrical Aluminium",
    date: "October 25, 2024",
    title:
      "BIS Notification for Wrought aluminium and aluminium alloy for electrical applications",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought aluminium and aluminium alloy for electrical applications.",
    pdfUrl: "/pdf/notification_25.pdf",
    location: " New Delhi",
    subHeading:
      "Wrought aluminium and aluminium alloy for electrical applications",
    ISNumber: "IS 5082:1998",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 26,
    color: "#D9534F",
    tagType: "Aluminium Foil",
    date: "October 25, 2024",
    title: "BIS Notification for Aluminium and aluminium alloy foil",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminium and aluminium alloy foil.",
    pdfUrl: "/pdf/notification_26.pdf",
    location: " New Delhi",
    subHeading: " Aluminium and aluminium alloy foil",
    ISNumber: "IS 16011:2012",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 27,
    color: "#FFCC5C",
    tagType: "Composite Panel",
    date: "October 25, 2024",
    title: "BIS Notification for Aluminium composite panel",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminium composite panel.",
    pdfUrl: "/pdf/notification_27.pdf",
    location: " New Delhi",
    subHeading: "Aluminium composite panel",
    ISNumber: "IS 17682:2021",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 28,
    color: "#A8A7A7",
    tagType: "Extruded Tube",
    date: "October 25, 2024",
    title:
      "BIS Notification for Wrought aluminium and aluminium alloys- Extruded round tube and hollow",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought aluminium and aluminium alloys- Extruded round tube and hollow.",
    pdfUrl: "/pdf/notification_28.pdf",
    location: " New Delhi",
    subHeading:
      "Wrought aluminium and aluminium alloys- Extruded round tube and hollow",
    ISNumber: "IS 1285:2002",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 29,
    color: "#45ADA8",
    tagType: "Electrical Wire",
    date: "October 25, 2024",
    title:
      "BIS Notification for Wrought Aluminium Wire for Electrical Purposes",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrought Aluminium Wire for Electrical Purposes.",
    pdfUrl: "/pdf/notification_29.pdf",
    location: " New Delhi",
    subHeading: "Wrought Aluminium Wire for Electrical Purposes",
    ISNumber: "IS 2067:1975",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 30,
    color: "#FF6F61",
    tagType: "Utensils",
    date: "October 25, 2024",
    title:
      "BIS Notification for Wrought aluminium and aluminium alloys for manufacture of utensils",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminium for Utensils.",
    pdfUrl: "/pdf/notification_30.pdf",
    location: " New Delhi",
    subHeading: "Wrought aluminium and aluminium alloys for manufacture of utensils",
    ISNumber: "IS 21:1992",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025",
  },
  {
    id: 31,
    color: "#96CEB4",
    tagType: "Corrugated Sheet",
    date: "October 25, 2024",
    title: "QCO Notification for Corrugated Aluminium Sheet",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Corrugated Aluminium Sheet.",
    pdfUrl: "/pdf/notification_31.pdf",
    location: " New Delhi",
    subHeading: "Corrugated Aluminium Sheet",
    ISNumber: "IS 1254:2007",
    Date1: "1st April 2025",
    Date2: "1st July 2025",
    Date3: "1st October 2025"
  },
  {
    id: 32,
    color: "#F38630",
    tagType: "Aerospace Forging",
    date: "October 25, 2024",
    title:
      "QCO Notification for Aluminium alloy forging stock and forgings (Alloy 24345) for aerospace applications",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminium alloy forging stock and forgings.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 33,
    color: "#6C5B7B",
    tagType: "Solar Collector",
    date: "October 14, 2024",
    title: "QCO Notification for Solar Flat Plate Collector",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Solar Flat Plate Collector.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 34,
    color: "#1A8781",
    tagType: "Solar Water Heater",
    date: "October 14, 2024",
    title: "QCO Notification for Solar Water Heating System",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Solar Water Heating System.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 35,
    color: "#FF6F61",
    tagType: "Water Tank",
    date: "October 14, 2024",
    title: "QCO Notification for Storage Water Tank",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Storage Water Tank.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 36,
    color: "#337AB7",
    tagType: "Webbing Slings",
    date: "October 03, 2024",
    title: "QCO Notification for Flat woven webbing slings",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Flat webbing slings.",
    pdfUrl: "/pdf/sample.pdf",
  },

  {
    id: 37,
    color: "#6C5B7B",
    tagType: "Manila Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Textiles — Manila Ropes",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Manila Ropes.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 38,
    color: "#FF6F61",
    tagType: "Polyester Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Fibre Ropes — Polyester",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Fibre Ropes — Polyester.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 39,
    color: "#96CEB4",
    tagType: "Synthetic Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Synthetic Fibre Ropes",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Synthetic Fibre Ropes.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 40,
    color: "#F38630",
    tagType: "Polyolefin Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Mixed Polyolefin Fibre Ropes",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Mixed Polyolefin Fibre Ropes.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 41,
    color: "#1A8781",
    tagType: "Steel Wire Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Steel wire ropes – Fibre main cores",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Steel wire ropes – Fibre main cores – Specification.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 42,
    color: "#FFCC5C",
    tagType: "Polyamide Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Fibre Ropes Polyamide",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Fibre Ropes Polyamide 3-, 4-, 8- and 12- Strand Ropes.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 43,
    color: "#D9534F",
    tagType: "Polypropylene Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Fibre Ropes — Polypropylene",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Fibre Ropes — Polypropylene.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 44,
    color: "#45ADA8",
    tagType: "Polyethylene Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Fibre Ropes Polyethylene",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Fibre Ropes Polyethylene.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 45,
    color: "#337AB7",
    tagType: "Dual Fibre Ropes",
    date: "October 03, 2024",
    title: "QCO Notification for Fibre Ropes dual Fibres",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Fibre Ropes dual Fibres.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 46,
    color: "#A8A7A7",
    tagType: "Flat Head Screws",
    date: "September 25, 2024",
    title: "QCO Notification for Countersunk flat head screws ...",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Countersunk flat head screws.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 47,
    color: "#6C5B7B",
    tagType: "Steel Cylinder Pipes",
    date: "September 25, 2024",
    title:
      "QCO Notification for Bar or wire Wrapped Steel Cylinder Pipes with Mortar Lining",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Wrapped Steel Cylinder Pipes.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 48,
    color: "#FF6F61",
    tagType: "Deformed Steel Bars",
    date: "September 25, 2024",
    title:
      "QCO Notification for High Strength deformed stainless steel bars and wires",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Deformed stainless steel bars and wires.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 49,
    color: "#96CEB4",
    tagType: "Pipe Flanges",
    date: "September 25, 2024",
    title: "QCO Notification for Steel Pipe Flanges",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Steel Pipe Flanges.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 50,
    color: "#F38630",
    tagType: "Food-Grade Tubes",
    date: "September 25, 2024",
    title:
      "QCO Notification for Stainless steel tubes for the food and beverage industry",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Stainless steel tubes.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 51,
    color: "#1A8781",
    tagType: "Chipboard Screws",
    date: "September 20, 2024",
    title: "QCO Notification for Chipboard Screws – Specification",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Chipboard Screws – Specification.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 52,
    color: "#FFCC5C",
    tagType: "Wood Screws",
    date: "September 20, 2024",
    title:
      "QCO Notification for Cross-recessed Countersunk Head Wood Screws – Specification",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Cross-recessed Countersunk Head Wood Screws – Specification.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 53,
    color: "#D9534F",
    tagType: "Drilling Screws - Pan Head",
    date: "September 20, 2024",
    title:
      "QCO Notification for Fasteners – Cross Recessed Drilling Screws with Tapping Screw Thread Part 1 Pan Head",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Fasteners – Pan Head Drilling Screws.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 54,
    color: "#45ADA8",
    tagType: "Drilling Screws - Raised Head",
    date: "September 20, 2024",
    title:
      "QCO Notification for Fasteners Cross Recessed Drilling Screws with Tapping Screw Thread Part 3 Raised Countersunk Head",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Raised Countersunk Head Drilling Screws.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 55,
    color: "#337AB7",
    tagType: "Oval Head Screws",
    date: "September 20, 2024",
    title:
      "QCO Notification for Cross Recessed Tapping Screw Part 3 Raised Countersunk Oval Head",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Raised Countersunk Oval Head Screws.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 56,
    color: "#A8A7A7",
    tagType: "Flat Head Screws",
    date: "September 20, 2024",
    title:
      "QCO Notification for Cross Recessed Tapping Screws Part 2 Countersunk Flat Head",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Countersunk Flat Head Screws.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 57,
    color: "#6C5B7B",
    tagType: "Pan Head Screws",
    date: "September 20, 2024",
    title:
      "QCO Notification for Cross Recessed Tapping Screws: Part 1 Pan Head",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Cross Recessed Tapping Screws: Part 1 Pan Head.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 58,
    color: "#FF6F61",
    tagType: "Drilling Screws - Countersunk",
    date: "September 20, 2024",
    title:
      "QCO Notification for Fasteners – Cross Recessed Drilling Screws with Tapping Screw Thread Part 2 Countersunk Head",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Countersunk Head Drilling Screws.",
    pdfUrl: "/pdf/sample.pdf",
  },

  {
    id: 59,
    color: "#6B5B95",
    tagType: "Drilling Screws - Hexagon Washer",
    date: "September 20, 2024",
    title:
      "QCO Notification for Fasteners – Hexagon Washer Head Drilling Screws with Tapping Screw Thread",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Hexagon Washer Head Drilling Screws.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 60,
    color: "#88B04B",
    tagType: "Screws - Countersunk Flat Head",
    date: "September 20, 2024",
    title:
      "QCO Notification for Countersunk Flat Head Screws – Product Grade A Part 1",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Countersunk Flat Head Screws (Common Head Style).",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 61,
    color: "#FFA07A",
    tagType: "Gypsum Based Building Materials",
    date: "September 20, 2024",
    title: "QCO Notification for Gypsum Based Building Materials",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Gypsum Based Building Materials.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 62,
    color: "#00CED1",
    tagType: "Screws - Raised Countersunk Head",
    date: "September 20, 2024",
    title:
      "QCO Notification for Raised Countersunk Head Screws – Product Grade A",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Raised Countersunk Head Screws with Cross Recess.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 63,
    color: "#FFB347",
    tagType: "Screws - Pan Head",
    date: "September 20, 2024",
    title: "QCO Notification for Pan Head Screws – Product Grade A",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Pan Head Screws with Cross Recess.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 64,
    color: "#9ACD32",
    tagType: "Flux Cored Solder Wire",
    date: "September 18, 2024",
    title: "QCO Notification for Flux Cored Solder Wire",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Flux Cored Solder Wire.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 65,
    color: "#E9967A",
    tagType: "Chain Pipe Wrenches",
    date: "September 17, 2024",
    title: "QCO Notification for Chain Pipe Wrenches",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Chain Pipe Wrenches.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 66,
    color: "#20B2AA",
    tagType: "Open Ended Slugging Wrenches",
    date: "September 17, 2024",
    title: "QCO Notification for Open Ended Slugging Wrenches (Spanners)",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Open Ended Slugging Wrenches.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 67,
    color: "#9370DB",
    tagType: "Ring Slugging Wrenches",
    date: "September 17, 2024",
    title: "QCO Notification for Ring Slugging Wrenches (Spanners)",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Ring Slugging Wrenches.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 68,
    color: "#DC143C",
    tagType: "Open-jaw Adjustable Wrenches",
    date: "September 17, 2024",
    title: "QCO Notification for Single-ended Open-jaw Adjustable Wrenches",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Open-jaw Adjustable Wrenches.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 69,
    color: "#00FA9A",
    tagType: "Open-Jaw Wrenches",
    date: "September 17, 2024",
    title: "QCO Notification for Open-Jaw Wrenches",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Open-Jaw Wrenches.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 70,
    color: "#DA70D6",
    tagType: "Ring Wrenches",
    date: "September 17, 2024",
    title: "QCO Notification for Ring Wrenches",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Ring Wrenches.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 71,
    color: "#F08080",
    tagType: "Pipe Wrenches - General Purpose",
    date: "September 17, 2024",
    title: "QCO Notification for Pipe Wrenches General Purpose",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Pipe Wrenches General Purpose.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 72,
    color: "#2E8B57",
    tagType: "Pipe Wrenches - Heavy Duty",
    date: "September 17, 2024",
    title: "QCO Notification for Pipe Wrenches – Heavy Duty",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Pipe Wrenches – Heavy Duty.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 73,
    color: "#8A2BE2",
    tagType: "Cutting Pliers",
    date: "September 17, 2024",
    title: "QCO Notification for Combination Side Cutting Pliers",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Cutting Pliers.",
    pdfUrl: "/pdf/sample.pdf",
  },

  {
    id: 74,
    color: "#FFB347",
    tagType: "Electrical Appliances",
    date: "September 11, 2024",
    title:
      "QCO Notification for Safety of Household, Commercial and Similar Electrical Appliances",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Safety of Household, Commercial and Similar Electrical Appliances.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 75,
    color: "#6B5B95",
    tagType: "Hinges",
    date: "July 26, 2024",
    title: "QCO Notification for Hinges",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Hinges.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 76,
    color: "#00BFFF",
    tagType: "Steel Wires & Ropes",
    date: "July 03, 2024",
    title: "QCO for Steel Wires or Strands, Nylon or Wire Ropes and Wire mesh",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Steel Wires and related products.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 77,
    color: "#DC143C",
    tagType: "Textiles - Packaging",
    date: "June 04, 2024",
    title: "QCO Notification for HDPE/PP Woven Sacks for Packaging Fertilizers",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of HDPE/PP Woven Sacks for fertilizers.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 78,
    color: "#FFD700",
    tagType: "Textiles - Mail Sacks",
    date: "June 04, 2024",
    title:
      "QCO Notification for PP/ HDPE Laminated Woven Sacks for Mail Sorting, Storage, Transport and Distribution",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Mail Sorting & Transport Sacks.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 79,
    color: "#20B2AA",
    tagType: "Cement Packaging",
    date: "June 04, 2024",
    title:
      "QCO Notification for Polypropylene (PP) Woven, Laminated, Block Bottom Valve Sacks for Packaging of 50 kg Cement",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Cement Packaging Sacks.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 80,
    color: "#A0522D",
    tagType: "Chains & Sprockets",
    date: "June 03, 2024",
    title:
      "QCO Notification for Precision Roller and Bush Chains, Attachments and Associated Chains Sprockets",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Chains and Sprockets.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 81,
    color: "#5F9EA0",
    tagType: "Nickel Powder",
    date: "May 03, 2024",
    title: "QCO Notification for Nickel Powder",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Nickel Powder.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 82,
    color: "#9ACD32",
    tagType: "Copper",
    date: "May 03, 2024",
    title: "QCO Notification for Copper",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Copper.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 83,
    color: "#FF69B4",
    tagType: "Aluminium Alloys",
    date: "May 03, 2024",
    title: "QCO Notification for Cast aluminium and its alloys",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Cast Aluminium alloys and its alloys.",
    pdfUrl: "/pdf/sample.pdf",
  },

  {
    id: 84,
    color: "#8A2BE2",
    tagType: "Aluminium",
    date: "May 03, 2024",
    title: "QCO Notification for High purity primary aluminum ingot",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of High purity primary aluminum ingot.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 85,
    color: "#00CED1",
    tagType: "Aluminium",
    date: "May 03, 2024",
    title: "QCO Notification for Aluminum alloy ingots for remelting",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminum alloy ingots for remelting.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 86,
    color: "#FF6347",
    tagType: "Aluminium",
    date: "May 03, 2024",
    title: "QCO Notification for Primary aluminium ingots for remelting",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Primary aluminium ingots for remelting.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 87,
    color: "#DAA520",
    tagType: "Aluminium",
    date: "May 03, 2024",
    title: "QCO Notification for Aluminum ingots billets and wire bars",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Aluminum ingots billets and wire bars.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 88,
    color: "#6495ED",
    tagType: "Furniture Hardware",
    date: "May 02, 2024",
    title: "QCO Notification for Telescopic Ball Bearing Drawer Slides",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Telescopic Ball Bearing Drawer Slides.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 89,
    color: "#FF8C00",
    tagType: "Copper Products",
    date: "April 25, 2024",
    title: "QCO Notification for Copper Products",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Copper Products.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 90,
    color: "#7FFF00",
    tagType: "Agro Textiles",
    date: "March 28, 2024",
    title: "QCO Notification for Agro Textiles",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Agro Textiles.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 91,
    color: "#CD5C5C",
    tagType: "Plywood",
    date: "March 15, 2024",
    title: "QCO Notification for Plywood for general purposes",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Plywood for general purposes.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 92,
    color: "#4169E1",
    tagType: "Plywood",
    date: "March 15, 2024",
    title:
      "QCO Notification for Wooden flush door shutters (solid core type) – Plywood face panels",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Plywood face panels.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 93,
    color: "#DC143C",
    tagType: "Marine Plywood",
    date: "March 15, 2024",
    title: "QCO Notification for Marine plywood",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Marine plywood.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 94,
    color: "#B8860B",
    tagType: "Fire Retardant Plywood",
    date: "March 15, 2024",
    title: "QCO Notification for Fire retardant plywood",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Fire retardant plywood.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 95,
    color: "#40E0D0",
    tagType: "Decorative Plywood",
    date: "March 15, 2024",
    title: "QCO Notification for Veneered decorative plywood",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Veneered decorative plywood.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 96,
    color: "#FF1493",
    tagType: "Board Panels",
    date: "March 15, 2024",
    title: "QCO Notification for Particle board and hardboard face panels",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Particle board and hardboard face panels.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 97,
    color: "#6A5ACD",
    tagType: "Plywood Panels",
    date: "March 15, 2024",
    title: "QCO Notification for Plywood face panels",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Plywood face panels.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 98,
    color: "#00FA9A",
    tagType: "Hardboard Panels",
    date: "March 15, 2024",
    title: "QCO Notification for Fibre Hardboard Face Panels",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Fibre Hardboard Face Panels.",
    pdfUrl: "/pdf/sample.pdf",
  },

  {
    id: 99,
    color: "#4B0082",
    tagType: "Plywood",
    date: "March 15, 2024",
    title: "QCO Notification for Plywood for concrete shuttering works",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Plywood for concrete shuttering works.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 100,
    color: "#5F9EA0",
    tagType: "Plywood",
    date: "March 15, 2024",
    title: "QCO Notification for Structural plywood",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Structural plywood.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 101,
    color: "#FF4500",
    tagType: "Mechanical",
    date: "March 06, 2024",
    title: "QCO Notification for V-Belts",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of V-Belts.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 102,
    color: "#2E8B57",
    tagType: "Construction",
    date: "March 06, 2024",
    title: "QCO Notification for Glass Fibre Reinforced Gypsum Panels",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Glass Fibre Reinforced Gypsum Panels.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 103,
    color: "#FF69B4",
    tagType: "Construction",
    date: "March 06, 2024",
    title:
      "QCO Notification for Reinforced Gypsum Plaster Boards and Ceiling Tiles",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Reinforced Gypsum Plaster Boards and Ceiling Tiles.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 104,
    color: "#D2691E",
    tagType: "Cooling Appliances",
    date: "March 05, 2024",
    title: "QCO Notification for Evaporative Air Coolers (Desert Coolers)",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Evaporative Air Coolers (Desert Coolers).",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 105,
    color: "#708090",
    tagType: "Construction",
    date: "March 05, 2024",
    title: "QCO Notification for Asbestos or Fibre Cement based Products",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Asbestos or Fibre Cement based Products.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 106,
    color: "#A52A2A",
    tagType: "Engines",
    date: "March 05, 2024",
    title: "QCO Notification for Diesel Engines",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Diesel Engines NOx Reduction Agent AUS 32 Specification.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 107,
    color: "#20B2AA",
    tagType: "Electrical",
    date: "March 05, 2024",
    title:
      "QCO Notification for Electrical appliance for commercial dispensing and vending",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Electrical appliance for commercial dispensing and vending.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 108,
    color: "#9370DB",
    tagType: "Electrical",
    date: "March 05, 2024",
    title:
      "QCO Notification for Electrical appliance for domestic clothes washing",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Electrical appliance for domestic clothes washing.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 109,
    color: "#556B2F",
    tagType: "Electrical",
    date: "March 05, 2024",
    title: "QCO Notification for Electrical appliance- Fans",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Electrical appliance- fans for Indian marketplace.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 110,
    color: "#CD853F",
    tagType: "Electrical",
    date: "March 05, 2024",
    title: "QCO Notification for Electric Water Heaters",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Electric Water Heaters.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 111,
    color: "#8FBC8F",
    tagType: "Electrical",
    date: "March 05, 2024",
    title: "QCO Notification for Electrical appliances for skin or hair care",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Electrical Appliances for Skin and Hair care.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 112,
    color: "#C71585",
    tagType: "Kitchen",
    date: "March 05, 2024",
    title: "QCO Notification for Electrical Appliances for Kitchen",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Electrical Appliances for Kitchen.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 113,
    color: "#9ACD32",
    tagType: "Water Meter",
    date: "March 05, 2024",
    title: "QCO Notification Water Meter and Accessories",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Water Meter and Accessories.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 114,
    color: "#FFA07A",
    tagType: "PVC",
    date: "February 26, 2024",
    title: "QCO Notification for Poly Vinyl Chloride (PVC) Homopolymers",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Poly Vinyl Chloride (PVC) Homopolymers.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 115,
    color: "#FFB6C1",
    tagType: "Plastic",
    date: "February 26, 2024",
    title:
      "QCO Notification for Polypropylene (PP) Materials for Moulding and Extrusion",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Polypropylene (PP) Materials for Moulding and Extrusion.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 116,
    color: "#8B0000",
    tagType: "Hygiene",
    date: "February 22, 2024",
    title: "QCO Notification for Baby Diaper",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Baby Diaper for Indian marketplace.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 117,
    color: "#00FF7F",
    tagType: "Hygiene",
    date: "February 22, 2024",
    title: "QCO Notification for Bedsheet and Pillow Cover",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Bedsheet and Pillow Cover.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 118,
    color: "#4682B4",
    tagType: "Hygiene",
    date: "February 22, 2024",
    title: "QCO Notification for Dental bib/Napkins",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Dental bib/Napkins.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 119,
    color: "#FFDEAD",
    tagType: "Appliances",
    date: "February 22, 2024",
    title: "QCO Notification for Self-Contained Drinking Water Cooler",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Self-Contained Drinking Water Cooler.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 120,
    color: "#BC8F8F",
    tagType: "Hygiene",
    date: "February 22, 2024",
    title:
      "QCO Notification for Reusable Sanitary Pad Sanitary Napkin Period Panties",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Reusable Sanitary Pad Sanitary Napkin Period Panties.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 121,
    color: "#00FFFF",
    tagType: "Hygiene",
    date: "February 22, 2024",
    title: "QCO Notification for Sanitary napkins",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Sanitary napkins for Indian marketplace.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 122,
    color: "#DA70D6",
    tagType: "Hygiene",
    date: "February 22, 2024",
    title: "QCO Notification for Shoe covers",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Shoe covers for Indian marketplace.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 124,
    color: "#8B008B",
    tagType: "Electrical",
    date: "January 01, 2024",
    title: "QCO Notification for Electrical Accessories",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Electrical Accessories.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 125,
    color: "#4682B4",
    tagType: "Laboratory",
    date: "January 01, 2024",
    title: "QCO Notification for Laboratory Glassware",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Laboratory Glassware.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 126,
    color: "#CD5C5C",
    tagType: "Automotive",
    date: "December 11, 2023",
    title: "QCO Notification for Cycle and Rickshaw Tyres & Tubes",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Cycle and Rickshaw Tyres & Tubes.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 127,
    color: "#2F4F4F",
    tagType: "Security",
    date: "December 08, 2023",
    title: "QCO Notification for Safe deposit locker Cabinets",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Safe deposit locker Cabinets.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 128,
    color: "#DAA520",
    tagType: "Packaging",
    date: "December 06, 2023",
    title:
      "QCO Notification for HDPE/PP Woven Sacks for Packaging of 25 kg Polymer Materials",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Textiles — HDPE/PP Woven Sacks for Packaging of 25 kg Polymer Materials.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 129,
    color: "#3CB371",
    tagType: "Measurement",
    date: "November 01, 2023",
    title: "QCO Legal Metrology – Material Measures of Length",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Material Measures of Length.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 130,
    color: "#9932CC",
    tagType: "Hardware",
    date: "October 23, 2023",
    title: "QCO Notification for Door Fittings",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Door Fittings.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 131,
    color: "#D2691E",
    tagType: "Packaging",
    date: "October 23, 2023",
    title: "QCO Notification for Drums and Tins",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Drums and Tins.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 132,
    color: "#40E0D0",
    tagType: "Safety",
    date: "October 23, 2023",
    title:
      "QCO Notification Helmet for Police Force, Civil Defence and Personal Protection",
    description:
      "Important update on mandatory BIS Certification for Indian manufacturers and importers of Helmets for Police Force, Civil Defence, and Personal Protection.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 133,
    color: "#DC143C",
    tagType: "Appliances",
    date: "January 20, 2023",
    title: "QCO Notification for Bottled Water Dispensers",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Bottled Water Dispensers.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 134,
    color: "#708090",
    tagType: "Furniture",
    date: "March 22, 2022",
    title:
      "Implementation of IS 17633: 2022 Specification for Tables and Desks",
    description:
      "This is to notify all manufacturers, suppliers, and stakeholders regarding implementation of IS 17633: 2022 Specification for Tables and Desks.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 135,
    color: "#A0522D",
    tagType: "Cookware",
    date: "January 01, 1970",
    title: "QCO Notification for Rubber Gaskets for Pressure Cookers",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Rubber Gaskets for Pressure Cookers.",
    pdfUrl: "/pdf/sample.pdf",
  },
  {
    id: 136,
    color: "#6495ED",
    tagType: "Electrical",
    date: "January 01, 1970",
    title: "QCO Notification for Electric Cable for Photovoltaic",
    description:
      "Important update on mandatory BIS Certification for manufacturers and importers of Electric Cable for Photovoltaic.",
    pdfUrl: "/pdf/sample.pdf",
  },
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
        <div className="col-span-2 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border-2 border-gray-400">
              <p className="text-gray-600 font-geist text-base sm:text-lg">
                No notifications found matching your Search Criteria.
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

const NotificationCardItem = ({
  color,
  tagType,
  date,
  title,
  description,
  pdfUrl,
  id,
}) => {
  // Function to convert title to URL slug
  const getUrlSlug = (title) => {
    // Get the last two words from the title
    const words = title.split(" ");
    const lastTwoWords = words.slice(-2).join(" ");
    // Convert to kebab-case
    return lastTwoWords.toLowerCase().replace(/\s+/g, "-");
  };

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
            download={`notification_${id}.pdf`}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <FileText size={18} style={{ color: color }} />
            <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors group-hover:decoration-gray-950 text-gray-600">
              Official Document
            </span>
          </a>

          <Link to={`/latest-notification/${getUrlSlug(title)}`}>
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

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  itemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

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
            className={`h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all ${currentPage === index + 1
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