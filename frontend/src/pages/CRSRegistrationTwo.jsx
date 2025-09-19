/* eslint-disable react/prop-types */
import ServiceContactForm from "@/common/ServiceContactForm"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Check, SlashIcon } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react";
import ServiceContentRight from "@/components/manual/CDSCOContentRight";
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    TableHead,
} from "@/components/ui/table"

const CRSRegistrationTwo = () => {
    return (
        <div className="relative">
            {/* CRS Registration Meta Tags */}
            <CRSRegistrationMetaTags />
            {/* CRS Registration Breadcrumb */}
            <CRSRegistrationBreadcrumb />
            {/* CRS Registration Hero Section */}
            <CRSRegistrationHero />
            {/* CRS Registration Index Section */}
            <CRSRegistrationIndex />
            {/* CRS Registration Main Content Section */}
            <CRSRegistrationMainContent />
        </div>
    )
}

export default CRSRegistrationTwo

const CRSRegistrationMetaTags = () => {
    const breadcrumbStructuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": window.location.origin + "/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "BIS CRS Registration",
                "item": window.location.href
            }
        ]
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>BIS Registration - Compulsory Registration Scheme (CRS)</title>
            <meta name="description" content="BIS registration is getting a license from the BIS for Electronic and IT Products that conforms with the applicable Indian Standards under CRS scheme." />
            <meta name="keywords" content="BIS Certificate, BIS Registration Process, BIS Registration, BIS online registration process, BIS Certification for electronic products, BIS registration process in india, BIS Registration for Electronics Products, Compulsory registration scheme" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="BIS Registration - Compulsory Registration Scheme (CRS)" />
            <meta property="og:description" content="BIS registration is getting a license from the BIS for Electronic and IT Products that conforms with the applicable Indian Standards under CRS scheme." />
            <meta property="og:type" content="website" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:title" content="BIS Registration - Compulsory Registration Scheme (CRS)" />
            <meta name="twitter:description" content="BIS registration is getting a license from the BIS for Electronic and IT Products that conforms with the applicable Indian Standards under CRS scheme." />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Breadcrumb Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbStructuredData)}
            </script>
        </Helmet>
    )
}

const CRSRegistrationBreadcrumb = () => {
    return (
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
                                <BreadcrumbPage>BIS CRS Registration</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    )
}

const CRSRegistrationHero = () => {
    return (
        <main className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
            {/* Background gradient */}
            <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

            {/* Decorative elements */}
            <div
                className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
                style={{ animationDelay: "1s" }}
            ></div>

            <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
                {/* Left Side */}
                <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
                    <div className="inline-flex items-center">
                        <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
                        <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
                            Certified Expertise
                        </span>
                    </div>

                    <h1 className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
                        <span className="relative">
                            BIS CRS Registration
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>
                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        Mandatory for electronic products to ensure safety & quality. Get BIS approval with expert assistance!
                    </p>

                    <div className="flex items-center -mt-2">
                        <div
                            className="flex items-center cursor-pointer group"
                            onClick={() => {
                                const servicesSection = document.getElementById("services");
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }
                            }}
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
                            </div>
                            <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                                View Services
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <ServiceContactForm />
            </div>
        </main>
    )
}

const CRSRegistrationIndex = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const SECTIONS = [
        "overview",
        "eligibility",
        "documents",
        "registration",
        "financial",
        "elabelling",
        "expertise",
        "faqs",
    ];

    const MENU_ITEMS = {
        overview: "Overview",
        eligibility: "Eligibility",
        documents: "Documents",
        registration: "Registration",
        financials: "Financials",
        elabelling: "E-Labelling",
        expertise: "Expertise",
        faqs: "FAQs",
    };

    const handleItemClick = (item) => {
        const element = document.getElementById(
            item.toLowerCase().replace(/\s+/g, "-")
        );
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setActiveSection(item);
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (stickyRef.current) {
                const rect = stickyRef.current.getBoundingClientRect();
                setIsSticky(rect.top <= 44);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        SECTIONS.forEach((section) => {
            const element = document.getElementById(
                section.toLowerCase().replace(/\s+/g, "-")
            );
            if (element) {
                sectionObserver.observe(element);
            }
        });

        return () => sectionObserver.disconnect();
    }, []);

    return (
        <div
            ref={stickyRef}
            className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
                }`}
        >
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-between px-4 h-20">
                <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
                    {MENU_ITEMS[activeSection]}
                </div>
                <button
                    ref={toggleButtonRef}
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-md hover:bg-blue-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-900"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div
                    ref={mobileMenuRef}
                    className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
                >
                    <div className="flex flex-col py-2">
                        {SECTIONS.map((item) => (
                            <div
                                key={item}
                                onClick={() => handleItemClick(item)}
                                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
                                    ? "bg-blue-50 text-blue-900 font-semibold"
                                    : "text-blue-950 hover:bg-blue-50"
                                    }`}
                            >
                                <div className="font-geist tracking-wider uppercase">
                                    {MENU_ITEMS[item]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
                {SECTIONS.map((item) => (
                    <div
                        key={item}
                        onClick={() => handleItemClick(item)}
                        className="relative cursor-pointer group whitespace-nowrap px-2"
                    >
                        <div
                            className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${item === activeSection
                                ? "text-blue-900"
                                : "text-blue-950 group-hover:text-blue-900"
                                }`}
                        >
                            {MENU_ITEMS[item]}
                        </div>
                        <div
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${item === activeSection
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                                }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

const CRSRegistrationMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                {/* Left Side */}
                <CRSRegistrationMainContentLeft />
                {/* Right Side */}
                <ServiceContentRight />
            </div>
        </div>
    )
}

const CRSRegistrationMainContentLeft = () => {
    return (
        <div className="flex-1">
            <div className="flex flex-col gap-[20px] md:gap-[40px]">
                <div className="flex flex-col gap-2">

                    <h2 className="crs-heading-two">
                        What is BIS Registration?
                    </h2>

                    <p className="crs-paragraph">
                        The Bureau of Indian Standards (BIS) is the national standardization body in India and works under the Ministry of Consumer Affairs, Food and Public Distribution Government of India. BIS is responsible for maintaining the quality, safety, and performance benchmarks for various products and services in India as per the relevant Indian Standards (IS).
                    </p>

                    <p className="crs-paragraph">
                        BIS is responsible for supervising and implementing various schemes in India. The Compulsory Registration Scheme (CRS) is a very prominent and mandatory certification scheme of BIS covering various categories of electronic and IT products.
                    </p>

                    <p className="crs-paragraph">
                        The performance and safety of Indian products is an important issue for India. BIS CRS Certification guarantees that electronics and IT products are compliant with Indian standards, and helps safeguard consumers against non-compliant and substandard products.
                    </p>

                </div>

                {/* Overview Section */}
                <CRSRegistrationMainContentLeftOverviewSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Eligibility Section */}
                <CRSRegistrationMainContentLeftEligibilitySection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Documents Section */}
                <CRSRegistrationMainContentLeftDocumentsSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* Registration Section */}
                <CRSRegistrationMainContentLeftRegistrationSection />




            </div>
        </div>
    )
}

const CRSRegistrationMainContentLeftOverviewSection = () => {
    return (
        <div id="overview" className="flex flex-col scroll-mt-20">
            {/* Overview */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">
                    Overview
                </span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                What is a Compulsory Registration Scheme (CRS)?
            </h2>

            <p className="crs-paragraph">
                The Compulsory Registration Scheme (CRS) is a BIS product registration scheme that was launched in 2012 and was primarily focused on electronic products. Over the years, as more products have been released CRS has been expanded to include a wider range of product categories, which include electrical products such as appliances, solar equipment, batteries and more. CRS registration is mandatory for products specified under Quality Control Orders (QCOs) issued by different ministries.
            </p>

            <p className="crs-paragraph">
                Any product that falls under the mandatory CRS scheme has to be sold, imported, or distributed in India only after obtaining registration with BIS.
            </p>


            <h3 className="crs-heading-three">
                History of CRS Certification in India
            </h3>

            <p className="crs-paragraph">
                In 2012, the first QCO under the CRS scheme was released and focused on electronic and IT equipment. Since then, additional QCOs have been issued in the following sectors:
            </p>

            <PointsListWithoutHeading
                points={[
                    "Consumer Electronics",
                    "Lightings & LEDs",
                    "Batteries & Cells",
                    "Wireless Communication Devices",
                    "Solar Panels and Components",
                    "Electrical Appliances for Households",
                ]}
            />

            <p className="crs-paragraph">
                The list for CRS Certification is rapidly expanding, so it is very important for manufacturers to be proactive and aware of recent updates.
            </p>


            <h2 className="crs-heading-three">
                CRS Registration vs ISI Mark: What&apos;s the Difference?
            </h2>

            {/* Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                                    Feature
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    CRS Registration
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] tracking-wide leading-loose">
                                    ISI Mark
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Nature
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Compulsory (only for QCO-listed products)
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Voluntary or Compulsory (based on product)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Product Scope
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Electronics, IT, Electrical, Batteries, etc.
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Food, cement, steel, electricals, etc.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Application
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Online, BIS CRS portal
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Manual + Online, BIS ISI system
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Flexibility
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Only for QCO-covered goods
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Can be voluntary for non-QCO goods
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Labelling
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Requires BIS CRS logo and registration number
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Requires ISI logo with standard code
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <h3 className="crs-heading-three">
                Why You Need to Know the BIS CRS Framework
            </h3>

            <p className="crs-paragraph">
                If you are a producer in India, or a foreign company trying to enter the Indian market, knowing the BIS CRS steps is a must. It helps you to:
            </p>

            <PointsListWithoutHeading
                points={[
                    "Avoid penalties for non-compliance.",
                    "Prepare production schedules (considering lab testing time).",
                    "Facilitate easier customs processing.",
                    "Earn the Indian customer's long-term brand trust.",
                ]}
            />
        </div>
    )
}

const CRSRegistrationMainContentLeftEligibilitySection = () => {
    return (
        <div id="eligibility" className="flex flex-col scroll-mt-20">
            {/* Eligibility */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">
                    Eligibility
                </span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                Eligibility Criteria for BIS CRS Registration
            </h2>

            <p className="crs-paragraph">
                Who Can Apply for BIS Certification Under CRS?
            </p>

            <p className="crs-paragraph">
                In India, a BIS certificate under the Compulsory Registration Scheme (CRS) can only be granted to manufacturers who meet the requirements set out by the Bureau of Indian Standards. This is to ensure only authentic manufacturers gain the privilege of being able to Register as well as affix the BIS CRS logo on their products.
            </p>

            <div className="crs-heading-three">
                Eligibility Criteria Checklist
            </div>

            {/* Eligibility Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                                    Requirement
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    Description
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Applicant must be a Manufacturer
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Only the original manufacturer (not trader or reseller) of the product is eligible to apply.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Location Can Be Indian or Foreign
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Both Indian manufacturers and international brands can apply.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    AIR (Authorized Indian Representative)
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Foreign manufacturers must appoint an AIR — either their Indian branch or a formally authorized third party.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Test Reports from BIS-Approved Labs
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    The product must be tested at a BIS-recognized lab and meet the Indian Standard (IS) applicable.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Proper Documentation
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    All required documents must be submitted in prescribed formats (details in next section).
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    One Registration Per Brand & Location
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    A separate application must be filed for each product type, manufacturing location, and brand name.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>


            <h2 className="crs-heading-three">
                Who is an Authorized Indian Representative (AIR)?
            </h2>

            <p className="crs-paragraph">
                For foreign manufacturers, one of the obligations is to appoint an Authorized Indian Representative (AIR) for communication and representation in India.
            </p>

            <div className="crs-heading-three">
                Responsibilities of the AIR:
            </div>

            <PointsListWithoutHeading
                points={[
                    "Acts as the legal representative for the foreign applicant",
                    "Communicates and manages all obligations with BIS on behalf of the manufacturer",
                    "Legally liable for all compliance and documentation",
                    "Cannot be an agent or distributor unless clearly authorized by the manufacturer",
                ]}
            />

            <p className="crs-paragraph">
                As part of the agreement, the AIR must submit a signed agreement from both sides along with a proof of Indian address.
            </p>

            <div className="crs-heading-three">
                Real life Scenario:
            </div>

            <p className="crs-paragraph">
                Company ABC is planning to introduce a new model of a power bank in India.
            </p>

            <PointsListWithoutHeading
                points={[
                    "Company ABC is the manufacturer.",
                    "They have the product tested in one of the BIS accredited labs in India.",
                    "Their branch office in Delhi serves as the registered AIR.",
                    "They upload the application to the BIS portal along with the required documentation.",
                ]}
            />

            <p className="crs-paragraph">
                The outcome is a BIS certificate is issued under CRS.
            </p>
        </div>
    )
}

const CRSRegistrationMainContentLeftDocumentsSection = () => {
    return (
        <div id="documents" className="flex flex-col scroll-mt-20">
            {/* Documents */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">
                    Documents
                </span>
                <Separator className="crs-separator" />
            </div>


            <h2 className="crs-heading-two">
                Documents Required for BIS CRS Registration
            </h2>

            <div className="crs-heading-three">
                List of documents required to obtain BIS CRS registration.
            </div>

            <p className="crs-paragraph">
                Filling out the BIS CRS application for registration is entirely digital, however, it still requires fully completed documents to obtain approval. Every minute mistake and a failure to adhere to any aspect, such as the document type, improper formats, or wrong file types can cause the application to get rejected or delayed.
            </p>

            <p className="crs-paragraph">
                For proper and faster processing of the BIS documents, it is necessary to have the proper documents with you each step of the way. Having the proper documents ready ensures that your bis certificate gets processed on time and stays legally clear from any compliance audits, customs inspections, or marketplace approvals.
            </p>

            <div className="crs-heading-three">
                Documents Checklist for BIS CRS Registration
            </div>

            {/* Documents Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[250px] border-r border-gray-300 tracking-wide leading-loose">
                                    Document
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[200px] border-r border-gray-300 tracking-wide leading-loose">
                                    Who Submits?
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    Notes
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Manufacturer&apos;s Address Proof
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Manufacturer
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Factory lease, utility bill, or license
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Test Report from BIS-Approved Lab
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Manufacturer/Lab
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Must be recent (within 90 days) and reference IS code
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Undertakings (as per BIS Format)
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Applicant
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Includes liability, compliance, and product responsibility
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Trademark Certificate
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Manufacturer
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Required if brand is registered
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    AIR Agreement (For foreign applicants)
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Foreign Manufacturer & AIR
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Signed and notarized
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Affidavit
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Manufacturer or AIR
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Format downloadable from BIS portal
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Fee Receipt
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Applicant
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Payment proof of government fee
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Authorization Letter
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Manufacturer
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Authorizes AIR to act on their behalf
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Company Registration Certificate
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Manufacturer
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Proof of business registration (GST, ROC, etc.)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Product Labels/Markings
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left border-r border-gray-200 tracking-wide leading-loose max-w-full">
                                    Manufacturer
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Must show BIS logo, IS standard, and registration space
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>
    )
}

const CRSRegistrationMainContentLeftRegistrationSection = () => {
    return (
        <div id="registration" className="flex flex-col scroll-mt-20">
            {/* Registration */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">
                    Registration Process
                </span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                BIS CRS Registration Process
            </h2>

            <p className="crs-paragraph">
                BIS CRS Registration is a totally online process through the BIS Registration Portal. It does not solely procedures that include the uploading of documents. It also requires special attention of a technical nature, the understanding of the regulations, as well as total compliance with the Indian Standard (IS).
            </p>

            <p className="crs-paragraph">
                BIS CRS Process, We&apos;re calling it Certification and Registration System (CRS) for now, and here's how the journey for BIS Certification unfolds.
            </p>

            <div className="crs-heading-three">
                Step 1: Product Testing at BIS Authorized Lab
            </div>

            <PointsListWithoutHeading
                points={[
                    "Select a lab from the BIS approved list",
                    "Submit a sample of the product for which the testing is to be performed for relevant IS",
                    "Obtain the test report for the sample as per BIS test report format",
                ]}
            />



            <div className="crs-heading-three">
                Step 2: Document Preparation
            </div>

            <PointsListWithoutHeading
                points={[
                    "Collect the requisite documents, as already outlined",
                    "Make sure the documents are properly named, formatted, signed and dated",
                    "Develop a product label which is a mock sticker that contains a space for a BIS logo and space for IS standard",
                ]}
            />



            <div className="crs-heading-three">
                Step 3: Filling the Online Application
            </div>

            <PointsListWithoutHeading
                points={[
                    "Go to the BIS CRS Portal (https://www.bis.org.in/) and login or register",
                    "Complete the product, model number, brand, and manufacturing unit of the AIR, if necessary",
                    "Follow the steps for the payment of the Government fee",
                ]}
            />



            <div className="crs-heading-three">
                Step 4: BIS&apos;s Review of the Application
            </div>

            <PointsListWithoutHeading
                points={[
                    "BIS checks the supporting documents and lab reports",
                    "If needed, a clarification is raised through the portal",
                    "Respond with the right documents or logical explanations",
                ]}
            />

            <p className="crs-paragraph">
                If it is a clarification query, it must be answered within 30 days, or the application goes to archive files, which means rejected.
            </p>


            <div className="crs-heading-three">
                Step 5: Grant of BIS Registration
            </div>

            <PointsListWithoutHeading
                points={[
                    "BIS Certificate will be issued if BIS officials are satisfied with the results of the assessments they conducted",
                ]}
            />

            <p className="crs-paragraph">
                Your certificate will include:
            </p>

            <PointsListWithoutHeading
                points={[
                    "BIS registration number",
                    "Brand name",
                    "Model of the product",
                    "IS Standard Code",
                ]}
            />

            <PointsListWithoutHeading
                points={[
                    "Your product label must contain or have e-labelling of the  certificate's details.",
                ]}
            />











        </div>
    )
}

const PointsListWithoutHeading = ({
    points,
}) => {
    return (
        <div className="mt-[18px] md:mt-[18px]">
            <ul className="flex flex-col gap-3 list-none">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
                            <Check size={12} className="text-[#020817]" />
                        </div>
                        <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
                            {point}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};