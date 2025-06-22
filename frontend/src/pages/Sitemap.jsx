import {
    InstagramLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { MailPlus, Search } from "lucide-react";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { notifications } from "./Notification";

// Function to convert title to URL slug (same as in Notification.jsx)
const getUrlSlug = (title) => {
    // Remove common prefixes like "BIS certification for", "BIS Notification for", etc.
    let cleanTitle = title
        .replace(/^BIS\s+(certification|notification)\s+for\s+/i, '') // Remove "BIS certification for" or "BIS Notification for"
        .replace(/^QCO\s+notification\s+for\s+/i, '') // Remove "QCO notification for"
        .trim();

    // Convert to kebab-case
    return cleanTitle
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/\s+/g, "-")      // Replace spaces with hyphens
        .replace(/-+/g, "-")       // Replace multiple hyphens with single hyphen
        .trim();                   // Remove leading/trailing spaces
};

// Generate notification pages from actual notifications array
const notificationPages = notifications.map((notification) => ({
    name: notification.title,
    path: `/latest-notification/bis-certificate-for-${getUrlSlug(notification.title)}`
}));

// Define sitemap sections and their pages
const sitemapSections = [
    {
        title: "Main Pages",
        pages: [
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
        ],
    },
    {
        title: "Services",
        pages: [
            {
                name: "BIS Mark (Foreign)",
                path: "/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
            },
            {
                name: "CRS Registration",
                path: "/what-is-crs-bis-or-crs-registration",
            },
            { name: "CE Certification", path: "/ce-certification" },
            {
                name: "ISI Mark (Indian)",
                path: "/a-guide-to-bis-certification-indian-bis",
            },
            {
                name: "EPR Registration",
                path: "/a-guide-on-how-to-obtain-epr-certificate",
            },
            {
                name: "ROHS",
                path: "/restriction-of-hazardous-substance-rohs-certificate",
            },
            {
                name: "BIS Certification",
                path: "/what-is-bis-certificate-indian-bis",
            },
            {
                name: "Plastic Waste",
                path: "/epr-certificate-for-plastic-waste-management-pwm",
            },
            { name: "EMI/EMC", path: "/emi-emc-certification" },
            { name: "CDSCO Registration", path: "/cdsco-registration-certification" },
            {
                name: "Battery Waste",
                path: "/epr-certificate-for-battery-waste-management-bwm",
            },
            { name: "TEC", path: "/information-about-tec-certificate-mtcte" },
            {
                name: "LMPC Registration",
                path: "/a-guide-on-how-to-obtain-lmpc-certificate",
            },
            {
                name: "PESO",
                path: "/information-about-peso-certification-peso-license-india",
            },
            { name: "BEE", path: "/bee-certification" },
            {
                name: "Legal Metrology",
                path: "/what-is-legal-metrology-or-lmpc-certificate",
            },
            { name: "WPC", path: "/information-about-wpc-certificate-eta-approval" },
            { name: "CB Certification", path: "/cb-certification" },
            { name: "Scheme X", path: "/schemeX" },
        ],
    },
    {
        title: "Updates",
        pages: [
            { name: "Latest Notifications", path: "/latest-notifications" },
            { name: "Ministry Updates", path: "/ministry-updates" },
            { name: "Upcoming Webinars", path: "/webinar" },
        ],
    },
    {
        title: "Gallery",
        pages: [
            { name: "International Audits", path: "/international-audits" },
            { name: "Seminars & Exhibitions", path: "/seminars-and-exhibitions" },
        ],
    },
    {
        title: "Latest Notifications",
        pages: notificationPages,
    },
];

const Sitemap = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Filter sections based on search term
    const filteredSections = useMemo(() => {
        if (!searchTerm.trim()) return sitemapSections;

        return sitemapSections
            .map((section) => ({
                ...section,
                pages: section.pages.filter((page) =>
                    page.name.toLowerCase().includes(searchTerm.toLowerCase())
                ),
            }))
            .filter((section) => section.pages.length > 0);
    }, [searchTerm]);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-white pt-10">
                <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                    <h1 className="text-4xl md:text-5xl font-geist font-semibold text-neutral-800 text-center tracking-tight">
                        Sitemap
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-lg text-center md:text-xl text-neutral-500 font-geist leading-relaxed">
                        Explore our comprehensive collection of pages and resources,
                        designed to help you navigate through our services and information
                        with ease.
                    </p>

                    {/* Search Bar */}
                    <div className="mt-8 max-w-md mx-auto">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 h-5 w-5" />
                            <input
                                type="text"
                                placeholder="Search pages..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent font-geist text-neutral-700 placeholder-neutral-400"
                            />
                        </div>
                        {searchTerm && (
                            <p className="mt-2 text-sm text-neutral-500 font-geist text-center">
                                {filteredSections.reduce(
                                    (total, section) => total + section.pages.length,
                                    0
                                )}{" "}
                                results found
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/* Sitemap Content */}
            <div className="max-w-[88rem] mx-auto px-4 md:px-12 pt-10 md:pt-10 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {filteredSections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md border border-black/40 hover:shadow-lg transition-shadow duration-200 flex flex-col h-[500px]"
                        >
                            <div className="p-6 pb-4 border-b border-gray-100">
                                <h2 className="text-xl md:text-2xl font-geist font-semibold text-neutral-800 flex items-center justify-between">
                                    {section.title}
                                    <span className="text-sm font-normal text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                                        {section.pages.length}
                                    </span>
                                </h2>
                            </div>
                            <div className="flex-1 overflow-hidden">
                                <div className="h-full overflow-y-auto p-6 pt-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
                                    <ul className="space-y-3">
                                        {section.pages.map((page, pageIndex) => (
                                            <li key={pageIndex}>
                                                <a
                                                    href={page.path}
                                                    className="text-neutral-600 hover:text-neutral-700 font-geist text-base md:text-lg transition-colors duration-200 flex items-start group"
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-slate-900 mr-4 mt-2 group-hover:scale-125 transition-transform duration-200 shrink-0"></span>
                                                    <span className="leading-relaxed group-hover:translate-x-1 transition-transform duration-200">
                                                        {page.name}
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Scroll indicator for long lists */}
                                    {section.pages.length > 8 && (
                                        <div className="text-center mt-4 text-xs text-neutral-400 font-geist">
                                            Scroll to see more items
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional Information */}
            {/* <div className=" text-center">
                <p className="text-gray-600 font-geist text-lg md:text-xl">
                    Can&apos;t find what you&apos;re looking for?{" "}
                    <Link to="/contact" className="text-gray-900 hover:text-gray-700 underline underline-offset-4 transition-colors duration-200">
                        Contact us
                    </Link>
                </p>
            </div> */}

            <Footer />
        </div>
    );
};

export default Sitemap;

const Footer = () => {
    return (
        <footer>
            <div className="relative ">
                <div className="w-full max-w-[768px] px-4 pb-12  pt-8 md:pt-10 md:pb-16 mx-auto">
                    <h3 className="text-center font-geist text-3xl md:text-[48px] text-[#181818] leading-tight md:leading-[48px] font-semibold">
                        Want to know more?
                    </h3>

                    <div className="text-center mt-[16px] text-base md:text-[20px] leading-normal md:leading-[28px] font-geist text-[#52525b]">
                        Email us at{" "}
                        <span className="font-medium font-geist text-[#27272a] leading-[28px] underline underline-offset-4">
                            admin@indiancertifications.com
                        </span>{" "}
                        or use one of the options below. We usually get back within 24
                        hours.
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
                                href="https://wa.me/918010505057"
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

                            <a href="tel:+918010505057" rel="noreferrer noopener">
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

                            <a
                                href="https://www.linkedin.com/in/dhruv-aggarwal-44b116155/"
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
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                </svg>
                                <span className="sr-only">LinkedIn</span>
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
                                    <h1 className="font-roboto text-black uppercase tracking-wide leading-normal text-[14px] md:text-xl font-bold">
                                        Sun Certifications India
                                    </h1>
                                    <p className="text-foreground/90 text-[10px] md:text-[13px] leading-none uppercase font-normal">
                                        Simplifying Certifications
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
                                    <Link
                                        to="/services/tec"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        TEC
                                    </Link>
                                    <Link
                                        to="/services/isi-mark-indian"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        ISI MARK
                                    </Link>
                                    <Link
                                        to="/services/ce-certification"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        CE CERTIFICATION
                                    </Link>
                                    <Link
                                        to="/services/epr-registration"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        EPR
                                    </Link>
                                    <Link
                                        to="/services/rohs"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        ROHS
                                    </Link>

                                    <Link
                                        to="/services/wpc"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        WPC
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[15px]">
                                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                                    Company
                                </span>
                                <div className="flex flex-col transition-colors gap-[10px]">
                                    <Link
                                        to="/about"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        Contact Us
                                    </Link>
                                    <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                                        Clients
                                    </span>
                                    <span className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base">
                                        FAQ&apos;s
                                    </span>
                                    <Link
                                        to="/sitemap"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        Sitemap
                                    </Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-[15px]">
                                <span className="text-neutral-900 text-[16px] md:text-[18px] font-geist font-medium">
                                    News & Notifications
                                </span>

                                <div className="flex flex-col transition-colors gap-[10px]">
                                    <Link
                                        to="/latest-notifications"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        Blogs
                                    </Link>
                                    <Link
                                        to="/latest-notifications"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        Latest Updates
                                    </Link>
                                    <Link
                                        to="/ministry-updates"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        Ministry Updates
                                    </Link>
                                    <Link
                                        to="/webinar"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
                                        Webinar Updates
                                    </Link>
                                    <Link
                                        to="/international-audits"
                                        className="text-foreground/60 hover:text-foreground/80 transition-colors underline-offset-[3.5px] break-words hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground-800 font-geist text-sm md:text-base"
                                    >
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
                                href="mailto:admin@indiancertifications.com?body=Hello"
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
    );
};
