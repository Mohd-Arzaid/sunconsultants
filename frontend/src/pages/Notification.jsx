import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
// import Footer from "@/common/Footer";
import { ChevronLeft, ChevronRight, FileText, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Services } from "./Home";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { MailPlus } from "lucide-react";
import Logo from "../assets/images/Logo.png";


const Notification = () => {
  return (
    <>
      <NotificationMainContent />
      <Services />
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="relative ">
        <div className="w-full max-w-[768px] px-4 pb-12  pt-8 md:pt-0 md:pb-16 mx-auto">
          <h3 className="text-center font-geist text-3xl md:text-[48px] text-[#181818] leading-tight md:leading-[48px] font-semibold">
            Want to know more?
          </h3>

          <div className="text-center mt-[16px] text-base md:text-[20px] leading-normal md:leading-[28px] font-geist text-[#52525b]">
            Email us at{" "}
            <span className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4">
              info@suncertifications.co.in
            </span>{" "}
            or use one of the options below. We usually get back within 24 hours.
          </div>

          <div className="flex items-center my-6 md:my-[30px]">
            <div className="h-px w-full bg-neutral-300  grow"></div>
            <span className="text-neutral-600 block px-4  font-geist text-center text-lg md:text-xl">
              or
            </span>
            <div className="h-px w-full bg-neutral-300 grow"></div>
          </div>

          <div className="flex justify-center w-full">
            <div className="flex gap-6 flex-wrap items-center justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-600 hover:text-neutral-900 transition-colors"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>

              <a
                href="tel:+919876543210"
                rel="noreferrer noopener"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-7 text-neutral-600 hover:text-neutral-900 transition-colors"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.9-4-8.9-9-8.9v2c3.9 0 7 3.1 7 6.9zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"></path>
                </svg>
                <span className="sr-only">Call</span>
              </a>
            </div>


          </div>
        </div>
      </div>

      <div className="bg-[#b9deeb] pt-10 md:pt-16 pb-6">
        <div className="max-w-[88rem] mx-auto px-4 md:px-12">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0 md:h-[360px] ">
            {/* Company Logo */}
            <div className="flex flex-col gap-[20px] md:gap-[25px]">
              <div
                className=" selection:bg-emerald-600 flex md:space-x-2.5 
                 text-2xl font-bold text-center text-neutral-600"
              >
                <img
                  src={Logo}
                  alt="logo"
                  className="hidden md:block w-10 h-10 md:w-12 md:h-12"
                />
                <Link to="/" className="text-center">
                  <h1 className="font-roboto text-black uppercase tracking-wider text-xl font-bold">
                    Sun Certifications India
                  </h1>
                  <p className="text-foreground/80 text-xs uppercase font-normal">
                    Your Complete Certification Partner
                  </p>
                </Link>
              </div>

              <div className="flex flex-col gap-[15px]">
                <div className="text-neutral-900 text-base md:text-lg  font-geist font-medium">
                  Subscribe to our newsletter
                </div>

                <div className="relative">
                  <input
                    className="w-full bg-[white] disabled:cursor-not-allowed rounded focus:outline-none focus:outline-transparent ring-1 ring-inset focus:ring-2 focus:ring-inset 
                  text-sm md:text-base py-2 px-3 h-9 text-neutral-700
                  ring-neutral-300
                  placeholder:text-neutral-400
                  focus:ring-neutral-700
                  pr-24 
                  border border-[#7eafd9]
                  "
                    placeholder="enter your email"
                  />
                  <button className="flex items-center justify-center h-7 px-2 py-1.5 gap-x-1 text-[13px] md:text-[15px] whitespace-nowrap font-medium font-geist border rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 absolute right-1 top-1 border-none bg-white">
                    <div className="text-[#2a5075]">Notify me</div>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex md:gap-[50px] gap-6 ">
              <div className="flex   w-full md:w-[240px] flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Address
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Delhi M-15, Phase-1, Badli Industrial Estate, Delhi-110042
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Our Services
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link to="/services/tec" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    TEC
                  </Link>
                  <Link to="/services/isi-mark-indian" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    ISI MARK
                  </Link>
                  <Link to="/services/ce-certification" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    CE CERTIFICATION
                  </Link>
                  <Link to="/services/epr-registration" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    EPR
                  </Link >
                  <Link to="/services/rohs" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    ROHS
                  </Link>

                  <Link to="/services/wpc" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    WPC
                  </Link >

                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  Company
                </span>
                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link to="/about" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    About
                  </Link>
                  <Link to="/contact" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Contact Us
                  </Link>
                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Clients
                  </span>
                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    FAQ's
                  </span>
                  <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Sitemap
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                  News & Notifications
                </span>

                <div className="flex flex-col transition-colors gap-[10px]">
                  <Link to="/latest-notifications" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Blogs
                  </Link>
                  <Link to="/latest-notifications" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Latest Updates
                  </Link>
                  <Link to="/ministry-updates" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Ministry Updates
                  </Link>
                  <Link to="/webinar" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Webinar Updates
                  </Link>
                  <Link to="/international-audits" className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                    Gallery
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border border-[#7eafd9] mt-8 md:mt-0"></div>
          <div className="flex flex-col md:flex-row  items-center mt-6 md:mt-4 mb-4 gap-4 md:gap-0 md:justify-between">
            <div className="flex gap-3 flex-wrap items-center justify-center">
              <a
                href="https://github.com/Mohd-Arzaid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
              </a>

              <a
                href="https://x.com/__Arzaid__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
              </a>

              <a
                href="mailto:arzaid010103@gmail.com?body=Hello"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailPlus className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
              </a>

              <a
                href="https://instagram.com/arzaid._.xd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogoIcon className="h-5 w-6 md:h-6 md:w-8 text-[#2a5075] duration-200 hover:-translate-y-2 cursor-pointer" />
              </a>
            </div>

            <button
              className="flex items-center justify-center h-9 px-4 py-2 gap-x-1 rounded-full border border-[#7eafd9] bg-gray-50 hover:bg-[#E3EFF4] transition-all duration-200 
"
            >
              <span className="text-[13px] md:text-[15px] text-[#2a5075] font-geist leading-[20px] font-medium">
                English (US)
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="shrink-0 !size-3 md:!size-4 text-[#2a5075]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
              </svg>
            </button>

            <span className="text-[#2a5075] font-geist text-[13px] md:text-base text-center">
              Copyright © 2025 Sun Certifications India. All Rights Reserved.
            </span>

            <div className="md:hidden flex items-center gap-2">
              <span className="text-[#2a5075] font-geist text-[13px] md:text-base">
                Privacy Policy
              </span>
              <div className="size-1.5 md:size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>
              <span className="text-[#2a5075] font-geist text-[13px] md:text-base">
                Terms of Service
              </span>
            </div>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <span className="hidden md:block text-[#2a5075] font-geist">
              Privacy Policy
            </span>

            <div className="hidden md:block size-2 shrink-0 rounded-full bg-[#7eafd9]"></div>

            <span className="hidden md:block text-[#2a5075] font-geist">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
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
    pdfUrl: "/pdf/sample.pdf"
  },

  {
    id: 2,
    color: "#C86A31",
    tagType: "Update",
    date: "February 28, 2023",
    title: "Electronic Goods Certification Revision",
    description:
      "The existing Quality Control Order for electronic goods has been revised with updated technical specifications and compliance requirements for manufacturers and importers.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 3,
    color: "#5B63E6",
    tagType: "Draft",
    date: "April 10, 2023",
    title: "Pharmaceutical Products Draft QCO",
    description:
      "A new draft Quality Control Order for pharmaceutical products has been issued for public consultation. Stakeholders are invited to provide feedback before implementation.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 4,
    color: "#1A8781",
    tagType: "Draft",
    date: "March 22, 2023",
    title: "Textile Products Standards Implementation",
    description:
      "The implementation timeline for the Textile Products Quality Control Order has been announced. Companies have until October 2023 to ensure compliance with the new standards.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 5,
    color: "#C86A31",
    tagType: "Update",
    date: "May 5, 2023",
    title: "Automotive Components QCO Amendment",
    description:
      "Amendments to the Automotive Components Quality Control Order have been released, focusing on enhanced safety features and emissions control components for all vehicle categories.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 6,
    color: "#5B63E6",
    tagType: "Draft",
    date: "April 28, 2023",
    title: "Food Processing Equipment Standards",
    description:
      "New draft standards for food processing equipment certification have been published. The proposed regulations aim to improve hygiene standards and material safety for consumer protection.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 7,
    color: "#1A8781",
    tagType: "New QCO",
    date: "June 12, 2023",
    title: "Solar Panel Quality Control Requirements",
    description:
      "The Ministry has issued a new Quality Control Order for solar panels and photovoltaic systems. The standards focus on efficiency ratings, durability, and safety compliance for domestic and commercial installations.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 8,
    color: "#C86A31",
    tagType: "Update",
    date: "May 19, 2023",
    title: "Toys and Children's Products Safety Standards",
    description:
      "Updated certification requirements for toys and children's products have been announced. The revised standards include stricter testing for hazardous materials and enhanced durability requirements.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 9,
    color: "#5B63E6",
    tagType: "Draft",
    date: "June 3, 2023",
    title: "Construction Materials Quality Control Proposal",
    description:
      "A comprehensive draft for construction materials certification has been released for industry feedback. The proposed regulations cover cement, steel reinforcement, and structural components.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 10,
    color: "#1A8781",
    tagType: "New QCO",
    date: "June 30, 2023",
    title: "Personal Protective Equipment Standards",
    description:
      "New Quality Control Order for personal protective equipment (PPE) has been implemented. The regulations establish mandatory testing and certification procedures for all PPE manufactured or imported into the country.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 11,
    color: "#C86A31",
    tagType: "Update",
    date: "July 15, 2023",
    title: "Agricultural Machinery QCO Revision",
    description:
      "Updated standards for agricultural machinery and equipment have been released. The revision focuses on safety features, efficiency metrics, and environmental compliance for farming equipment.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 12,
    color: "#5B63E6",
    tagType: "Draft",
    date: "July 28, 2023",
    title: "Renewable Energy Equipment Standards",
    description:
      "New draft QCO for renewable energy equipment has been published. The standards cover wind turbines, hydroelectric components, and related infrastructure requirements.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 13,
    color: "#1A8781",
    tagType: "New QCO",
    date: "August 10, 2023",
    title: "Industrial Safety Equipment Certification",
    description:
      "Comprehensive QCO for industrial safety equipment has been implemented. The order establishes mandatory testing protocols for safety gear used in hazardous environments.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 14,
    color: "#C86A31",
    tagType: "Update",
    date: "August 25, 2023",
    title: "Telecommunications Equipment Standards",
    description:
      "Revised QCO for telecommunications equipment has been announced. The update includes new specifications for 5G infrastructure and network security requirements.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 15,
    color: "#5B63E6",
    tagType: "Draft",
    date: "September 5, 2023",
    title: "Smart Home Devices Certification",
    description:
      "Draft QCO for smart home devices and IoT equipment has been released. The proposed standards focus on data security, interoperability, and energy efficiency.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 16,
    color: "#1A8781",
    tagType: "New QCO",
    date: "September 20, 2023",
    title: "Medical Laboratory Equipment Standards",
    description:
      "New QCO for medical laboratory equipment has been implemented. The standards establish requirements for accuracy, calibration, and quality control in diagnostic equipment.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 17,
    color: "#C86A31",
    tagType: "Update",
    date: "October 8, 2023",
    title: "Food Packaging Materials Revision",
    description:
      "Updated QCO for food packaging materials has been released. The revision includes new requirements for recyclable materials and food safety compliance.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 18,
    color: "#5B63E6",
    tagType: "Draft",
    date: "October 25, 2023",
    title: "Electric Vehicle Components Standards",
    description:
      "Draft QCO for electric vehicle components has been published. The proposed standards cover battery systems, charging infrastructure, and safety requirements.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 19,
    color: "#1A8781",
    tagType: "New QCO",
    date: "November 12, 2023",
    title: "Industrial Automation Equipment",
    description:
      "New QCO for industrial automation equipment has been implemented. The standards establish requirements for robotics, control systems, and safety protocols.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 20,
    color: "#C86A31",
    tagType: "Update",
    date: "November 28, 2023",
    title: "Building Materials Certification",
    description:
      "Revised QCO for building materials has been announced. The update includes new requirements for sustainable materials and energy efficiency standards.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 21,
    color: "#5B63E6",
    tagType: "Draft",
    date: "December 5, 2023",
    title: "Waste Management Equipment",
    description:
      "Draft QCO for waste management equipment has been released. The proposed standards cover recycling machinery, waste processing systems, and environmental compliance.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 22,
    color: "#1A8781",
    tagType: "New QCO",
    date: "December 15, 2023",
    title: "Digital Payment Systems",
    description:
      "New QCO for digital payment systems and equipment has been implemented. The standards establish security requirements and interoperability protocols.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 23,
    color: "#C86A31",
    tagType: "Update",
    date: "January 10, 2024",
    title: "Educational Equipment Standards",
    description:
      "Updated QCO for educational equipment has been released. The revision includes new requirements for digital learning tools and laboratory equipment.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 24,
    color: "#5B63E6",
    tagType: "Draft",
    date: "January 25, 2024",
    title: "Sports Equipment Certification",
    description:
      "Draft QCO for sports equipment has been published. The proposed standards cover safety requirements and performance metrics for various sports gear.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 25,
    color: "#1A8781",
    tagType: "New QCO",
    date: "February 8, 2024",
    title: "Maritime Equipment Standards",
    description:
      "New QCO for maritime equipment has been implemented. The standards establish requirements for navigation systems, safety equipment, and vessel components.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 26,
    color: "#C86A31",
    tagType: "Update",
    date: "February 20, 2024",
    title: "Aviation Components Revision",
    description:
      "Revised QCO for aviation components has been announced. The update includes new specifications for aircraft parts and maintenance equipment.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 27,
    color: "#5B63E6",
    tagType: "Draft",
    date: "March 5, 2024",
    title: "Railway Infrastructure Equipment",
    description:
      "Draft QCO for railway infrastructure equipment has been released. The proposed standards cover signaling systems, track components, and safety equipment.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 28,
    color: "#1A8781",
    tagType: "New QCO",
    date: "March 18, 2024",
    title: "Mining Equipment Standards",
    description:
      "New QCO for mining equipment has been implemented. The standards establish safety requirements and performance metrics for mining machinery.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 29,
    color: "#C86A31",
    tagType: "Update",
    date: "March 30, 2024",
    title: "Chemical Processing Equipment",
    description:
      "Updated QCO for chemical processing equipment has been released. The revision includes new safety protocols and environmental compliance requirements.",
    pdfUrl: "/pdf/sample.pdf"
  },
  {
    id: 30,
    color: "#5B63E6",
    tagType: "Draft",
    date: "April 12, 2024",
    title: "Defense Equipment Standards",
    description:
      "Draft QCO for defense equipment has been published. The proposed standards cover security requirements and technical specifications for defense systems.",
    pdfUrl: "/pdf/sample.pdf"
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

const NotificationCardItem = ({ color, tagType, date, title, description, pdfUrl }) => {
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
            download
            className="flex items-center gap-2 cursor-pointer group"
          >
            <FileText size={18} style={{ color: color }} />
            <span className="text-base font-geist font-medium underline decoration-gray-200 decoration-2 underline-offset-[0.27em] transition-colors group-hover:decoration-gray-950 text-gray-600">
              Official Document
            </span>
          </a>

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
            className={`h-10 w-10 rounded-full flex items-center justify-center font-geist font-medium transition-all ${currentPage === index + 1
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