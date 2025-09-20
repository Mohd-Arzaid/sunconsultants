/* eslint-disable react/prop-types */
import ServiceContactForm from "@/common/ServiceContactForm"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Check, Search, SlashIcon } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { useState, useRef, useEffect, useMemo } from "react";
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
import Footer from "@/common/Footer"
import ScrollToTopButton from "@/components/common/ScrollToTop"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Services from "@/components/manual/Services"
import AboutAuthor from "@/components/common/AboutAuthor"

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
            {/* Footer Section */}
            <Footer />
            {/* Scroll To Top Button Section */}
            <ScrollToTopButton />
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

    const SECTIONS = useMemo(() => [
        "overview",
        "eligibility",
        "documents",
        "registration",
        "fees",
        "elabelling",
    ], []);

    const MENU_ITEMS = {
        overview: "Overview",
        eligibility: "Eligibility",
        documents: "Documents",
        registration: "Registration",
        fees: "Registration Fees",
        elabelling: "E-Labelling",
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
        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY + 200; // Offset for header

            for (let i = SECTIONS.length - 1; i >= 0; i--) {
                const section = SECTIONS[i];
                const element = document.getElementById(section);

                if (element) {
                    const offsetTop = element.offsetTop;

                    if (scrollPosition >= offsetTop) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        handleScrollSpy(); // Initial check

        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, [SECTIONS]);

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
        <div>
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}
                    <CRSRegistrationMainContentLeft />
                    {/* Right Side */}
                    <ServiceContentRight />
                </div>
            </div>
            <CRSRegistrationServiceFaq />
            <CISProductTable />
            <div id="services">
                <Services />
            </div>
        </div>
    )
}

const CRSRegistrationServiceFaq = () => {
    const [showAllFaqs, setShowAllFaqs] = useState(false);

    const allFaqs = [
        {
            id: "item-1",
            question: "1. What is BIS registration?",
            answer:
                "BIS certification is a compliance process governed by the Bureau of Indian Standards, which verifies that a product meets the applicable Indian Standards (IS) for quality, safety, and reliability.",
        },
        {
            id: "item-2",
            question: "2. What is CRS registration under BIS?",
            answer:
                "CRS stands for Compulsory Registration Scheme. It is a mandatory registration process for specific product categories such as electronics, electricals, batteries, and solar items. Products under CRS must be tested and registered with BIS before they can be sold in India.",
        },
        {
            id: "item-3",
            question: "3. Is BIS certification mandatory in India?",
            answer:
                "Yes. For all products listed under the CRS product list (currently 80+ items), BIS registration is mandatory for manufacturing, importing, or selling in India.",
        },
        {
            id: "item-4",
            question: "4. What is the difference between BIS CRS and ISI mark?",
            answer:
                "BIS CRS: For electronics and IT goods, only for mandatory products notified under QCO. <br />ISI mark: Used for a broader range of products, may be voluntary or mandatory depending on the product category.",
        },
        {
            id: "item-5",
            question: "5. Who can apply for BIS CRS registration?",
            answer:
                "Only manufacturers can apply. This includes both Indian and foreign manufacturers. Foreign brands must appoint an Authorized Indian Representative (AIR).",
        },
        {
            id: "item-6",
            question: "6. What is the role of an AIR?",
            answer:
                "An Authorized Indian Representative (AIR) is legally responsible for filing the BIS application on behalf of a foreign manufacturer. They act as the official liaison between BIS and the overseas applicant.",
        },
        {
            id: "item-7",
            question: "7. How long does BIS CRS registration take?",
            answer:
                "The process typically takes 3–4 weeks, assuming all documents and test reports are submitted correctly and no objections are raised by BIS.",
        },
        {
            id: "item-8",
            question: "8. How much does BIS CRS certificate cost?",
            answer:
                "Costs include: <br />Testing Charges: ₹10,000–₹20,000 + GST <br />Government Fee: ₹53,000 + GST per test report <br />Additional Charges: Affidavit, courier, AIR documentation, etc. <br />Discount applicable for Indian MSME registered manufacturers",
        },
        {
            id: "item-9",
            question: "9. What is the validity of BIS CRS certificates?",
            answer:
                "The initial BIS license is valid for 2 years. It can be renewed for up to 5 years if the product and manufacturing details remain unchanged.",
        },
        {
            id: "item-10",
            question: "10. Can BIS certification be obtained voluntarily?",
            answer:
                "No. Under CRS, you cannot apply voluntarily for products that are not listed under QCOs. Voluntary certification is only applicable for non-CRS products via the ISI scheme.",
        },
        {
            id: "item-11",
            question: "11. Where can I find the BIS CRS product list?",
            answer:
                'You can visit the official BIS website <a href="https://www.crsbis.in/BIS/publicdashAction.do" target="_blank" rel="noopener noreferrer" className="text-[#1A8781] underline">https://www.crsbis.in/BIS/publicdashAction.do</a> and navigate to the "Products under CRS" section to view the complete list of covered products.',
        },
        {
            id: "item-12",
            question: "12. Can the BIS mark be displayed electronically?",
            answer:
                "Yes, through e-labelling, but it must meet strict BIS rules: Label info must be embedded in firmware <br />Easy access within 4 steps in device menu <br />Physical packaging must still carry regulatory info",
        },
        {
            id: "item-13",
            question:
                "13. What happens if I don't get BIS registration for a mandatory product?",
            answer:
                "Severe penalties, including: <br />Product seizure <br />Customs rejections <br />Legal fines <br />Delisting from e-commerce portals <br />Permanent ban from Indian market",
        },
        {
            id: "item-14",
            question: "14. Can one BIS certificate cover multiple models or brands?",
            answer:
                "No. Each brand, and factory location must be certified separately. Multiple models may be added using additional reports, but only under the same application and brand.",
        },
        {
            id: "item-15",
            question: "15. How can Sun Certifications India help me?",
            answer:
                "We offer: <br />Full documentation support <br />Lab coordination <br />BIS portal application handling <br />Query resolution and BIS follow-ups <br />Renewal and labeling guidance <br />Compliance assurance for foreign brands via AIR services",
        },
    ];

    const visibleFaqs = showAllFaqs ? allFaqs : allFaqs.slice(0, 5);

    return (
        <div id="faqs" className="my-2 scroll-mt-20">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
                <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
                    Frequently Asked Questions
                </h2>
                <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
                    Can&apos;t find the answer you are looking for?{" "}
                    <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
                        Reach out to us!
                    </span>
                </p>

                <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {visibleFaqs.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                    <h3>{faq.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    {/* Show More/Show Less Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={() => setShowAllFaqs(!showAllFaqs)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A8781] text-white font-geist font-medium text-[16px] rounded-lg hover:bg-[#125E5A] transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            {showAllFaqs ? (
                                <>
                                    <svg
                                        className="w-5 h-5 transform rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    Show Less FAQs
                                </>
                            ) : (
                                <>
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    Show More FAQs
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const productsData = [
    {
        id: 1,
        product: "AMPLIFIERS WITH INPUT POWER 2000W AND ABOVE",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 2,
        product: "AUTOMATIC DATA PROCESSING MACHINE",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 3,
        product: "ELECTRONIC CLOCKS WITH MAINS POWER",
        isNumber: "IS 302-2-26:2014",
        date: "03 July 2013",
    },
    {
        id: 4,
        product: "ELECTRONIC GAMES (VIDEO)",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 5,
        product: "ELECTRONIC MUSICAL SYSTEMS WITH INPUT POWER 200W AND ABOVE",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 6,
        product: "LAPTOP/NOTEBOOK/TABLET",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 7,
        product: "MICROWAVE OVENS",
        isNumber: "IS 302-2-25:2014",
        date: "03 July 2013",
    },
    {
        id: 8,
        product:
            "OPTICAL DISC PLAYERS WITH BUILT IN AMPLIFIERS OF INPUT POWER 200W AND ABOVE",
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 9,
        product: 'PLASMA/LCD/LED TELEVISIONS OF SCREEN SIZE 32"; AND ABOVE',
        isNumber: "IS 616:2017",
        date: "03 July 2013",
    },
    {
        id: 10,
        product: "PRINTERS, PLOTTERS",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 11,
        product: "SCANNERS",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 12,
        product: "SET TOP BOX",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 13,
        product: "TELEPHONE ANSWERING MACHINES",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 14,
        product:
            'VISUAL DISPLAY UNITS, VIDEOS MONITORS OF SCREEN SIZE 32" AND ABOVE',
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 15,
        product: "WIRELESS KEYBOARDS",
        isNumber: "IS 13252(Part 1):2010",
        date: "03 July 2013",
    },
    {
        id: 16,
        product: "CASH REGISTERS",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 17,
        product: "COPYING MACHINES/DUPLICATORS",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 18,
        product: "PASSPORT READER",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 19,
        product: "POINT OF SALE TERMINALS",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 20,
        product: "MAIL PROCESSING MACHINES/POSTAGE MACHINES/FRANKING MACHINES",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 21,
        product: "POWER BANKS FOR USE IN PORTABLE APPLICATIONS",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 22,
        product: "SMART CARD READER",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 May 2015",
    },
    {
        id: 23,
        product: "MOBILE PHONES",
        isNumber: "IS 13252(Part 1):2010",
        date: "13 September 2015",
    },
    {
        id: 24,
        product: "SELF-BALLASTED LED LAMPS FOR GENERAL LIGHTING SERVICES",
        isNumber: "IS 16102(Part 1):2012",
        date: "13 September 2015",
    },
    {
        id: 25,
        product: "DC OR AC SUPPLIED ELECTRONIC CONTROLGEAR FOR LED MODULES",
        isNumber: "IS 15885(Part 2/Sec 13):2012",
        date: "01 December 2015",
    },
    {
        id: 26,
        product: "POWER ADAPTORS FOR AUDIO,VIDEO & SIMILAR ELECTRONIC APPARATUS",
        isNumber: "IS 616:2010",
        date: "01 December 2015",
    },
    {
        id: 27,
        product: "POWER ADAPTORS FOR IT EQUIPMENTS",
        isNumber: "IS 13252(Part 1):2010",
        date: "01 December 2015",
    },
    {
        id: 28,
        product: "FIXED GENERAL PURPOSE LED LUMINAIRES",
        isNumber: "IS 10322(Part 5/Sec 1):2012",
        date: "01 March 2016",
    },
    {
        id: 29,
        product: "UPS/INVERTORS OF RATING <= 5KVA",
        isNumber: "IS 16242(Part 1):2014",
        date: "01 March 2016",
    },
    {
        id: 30,
        product:
            "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 1 NICKEL SYSTEMS",
        isNumber: "IS 16046(Part 1): 2018",
        date: "01 June 2016",
    },
    {
        id: 31,
        product:
            "SEALED SECONDARY CELLS/BATTERIES CONTAINING ALKALINE OR OTHER NON-ACID ELECTROLYTES FOR USE IN PORTABLE APPLICATIONS PART 2 LITHIUM SYSTEMS",
        isNumber: "IS 16046(Part 2): 2018",
        date: "01 June 2016",
    },
    {
        id: 32,
        product: "INDIAN LANGUAGE SUPPORT FOR MOBILE PHONE HANDSETS",
        isNumber: "IS 16333 (Part 3) : 2022",
        date: "01 May 2018",
    },
    {
        id: 33,
        product: "Recessed LED Luminaries",
        isNumber: "IS 10322 (Part 5/Section 2) : 2012",
        date: "23 May 2018",
    },
    {
        id: 34,
        product: "LED Luminaires for Road and Street lighting",
        isNumber: "IS 10322 (Part 5/Section 3) : 2012",
        date: "23 May 2018",
    },
    {
        id: 35,
        product: "LED Flood Lights",
        isNumber: "IS 10322 (Part 5/Section 5) : 2013",
        date: "23 May 2018",
    },
    {
        id: 36,
        product: "LED Hand lamps",
        isNumber: "IS 10322 (Part 5/Section 6) : 2013",
        date: "23 May 2018",
    },
    {
        id: 37,
        product: "LED Lighting Chains",
        isNumber: "IS 10322 (Part 5/Section 7) : 2017",
        date: "23 May 2018",
    },
    {
        id: 38,
        product: "LED Luminaires for Emergency Lighting",
        isNumber: "IS 10322 (Part 5/Section 8) : 2013",
        date: "23 May 2018",
    },
    {
        id: 39,
        product: "UPS/Inverters of rating <= 10kVA",
        isNumber: "IS 16242 (Part 1) : 2014",
        date: "23 May 2018",
    },
    {
        id: 40,
        product: "Plasma/ LCD/LED Television of screen size up-to 32",
        isNumber: "IS 616 : 2017",
        date: "23 May 2018",
    },
    {
        id: 41,
        product: "Visual Display Units, Video Monitors of screen size upto 32",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 42,
        product: "CCTV Cameras/CCTV Recorders",
        isNumber:
            "IS 13252 (Part 1) : 2010, Essential Requirement(s) for Security of CCTV",
        date: "23 May 2018",
    },
    {
        id: 43,
        product: "Adapters for household and similar electrical appliances",
        isNumber: "IS 302 (Part 1) : 2008",
        date: "23 May 2018",
    },
    {
        id: 44,
        product:
            "USB driven Barcode readers, barcode scanners, Iris scanners, Optical fingerprint scanners",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 45,
        product: "Smart watches",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "23 May 2018",
    },
    {
        id: 46,
        product:
            "Crystalline Silicon Terrestrial Photovoltaic (PV) modules (Si wafer based)",
        isNumber:
            "IS 14286 : 2010/ IEC 61215 : 2005, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
        date: "31 March 2019",
    },
    {
        id: 47,
        product:
            "Thin-Film Terrestrial Photovoltaic (PV) Modules (a-Si, CiGs and CdTe)",
        isNumber:
            "IS 16077 : 2013/ IEC 61646 : 2008, IS/IEC 61730 (Part 1) : 2004 & IS/IEC 61730 (Part 2) : 2004",
        date: "31 March 2019",
    },
    {
        id: 48,
        product: "Power converters for use in photovoltaic power system",
        isNumber: "IS 16221 (Part 2) : 2015 / IEC 62109-2 : 2011",
        date: "30 June 2021",
    },
    {
        id: 49,
        product: "Utility-Interconnected Photovoltaic inverters",
        isNumber:
            "IS 16221 (Part 2):2015/IEC 62109-2 :2011 & IS 16169 :2014/IEC 62116 :2008",
        date: "30 June 2021",
    },
    {
        id: 50,
        product: "Storage battery",
        isNumber: "IS 16270 : 2014",
        date: "01 January 2019",
    },
    {
        id: 51,
        product: "Independent LED Modules for General Lighting",
        isNumber: "IS 16103 (Part 1) : 2012",
        date: "01 April 2021",
    },
    {
        id: 52,
        product: "Lighting Chain (Rope Lights)",
        isNumber: "IS 10322 (Part 5/Sec 9) : 2017",
        date: "01 April 2021",
    },
    {
        id: 53,
        product: "Keyboard",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 54,
        product: "Induction Stove",
        isNumber: "IS 302-2-6 : 2009",
        date: "01 April 2021",
    },
    {
        id: 55,
        product: "Automatic Teller Cash dispensing machines",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 56,
        product: "USB Type External Hard Disk Drive",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 57,
        product: "Wireless Headphone and Earphone",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 58,
        product:
            "USB Type External Solid-State Storage Devices (above 256 GB capacity)",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 59,
        product: "Electronic Musical System with input power below 200 Watts",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 60,
        product:
            "Standalone Switch Mode Power Supplies (SMPS) with output voltage 48V (max)",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 April 2021",
    },
    {
        id: 61,
        product: "Television other than Plasma/ LCD/LED TVs",
        isNumber: "IS 616 : 2017",
        date: "01 April 2021",
    },
    {
        id: 62,
        product: "Rice Cooker",
        isNumber: "IS 302-2-15 : 2009",
        date: "01 April 2021",
    },
    {
        id: 63,
        product: "Wireless Microphone",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 64,
        product: "Digital Camera",
        isNumber: "IS 13252 (Part 1) : 2010",
        date: "01 October 2021",
    },
    {
        id: 65,
        product: "Video Camera",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 66,
        product: "Webcam (Finished Product)",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 67,
        product: "Smart Speakers (with and without Display)",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 68,
        product: "Dimmers for LED products",
        isNumber: "IS 60669-2-1: 2008",
        date: "01 October 2021",
    },
    {
        id: 69,
        product: "Bluetooth Speakers",
        isNumber: "IS 616 : 2017",
        date: "01 October 2021",
    },
    {
        id: 70,
        product: "Ortho Phosphoric Acid",
        isNumber: "IS 798 : 2020",
        date: "12 December 2021",
    },
    {
        id: 71,
        product: "Polyphosphoric Acid",
        isNumber: "IS 17439:2020",
        date: "24 December 2021",
    },
    {
        id: 72,
        product: "Cotton Bales",
        isNumber: "IS 12171:2019",
        date: "03 March 2023",
    },
    {
        id: 73,
        product: "Trimethyl Phosphite Technical Grade",
        isNumber: "IS 17412:2020",
        date: "03 March 2023",
    },
    {
        id: 74,
        product: "Television Sets",
        isNumber: "IS 18112:2022",
        date: "26 April 2023",
    },
];

export const CISProductTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    const filteredProducts = productsData.filter(
        (product) =>
            product.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.isNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const scrollToTable = () => {
        const tableSection = document.querySelector('.product-table-section');
        if (tableSection) {
            tableSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            scrollToTable();
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            scrollToTable();
        }
    };

    return (
        <section className="w-full pb-12 product-table-section">
            <div className="max-w-[88rem] mx-auto px-4 md:px-12">
                <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-normal mb-4">
                    Official Product List Under BIS CRS Registration
                </h2>

                <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose mb-8">
                    The following table lists products that require BIS CRS registration
                    in India along with their applicable Indian Standard (IS) numbers and
                    implementation dates.
                </p>

                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for Products by name or IS number..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-12 text-base font-geist text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1A8781] focus:border-transparent transition-shadow hover:shadow-md"
                    />
                </div>

                <div className="rounded-md border bg-white shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[80px] border-r border-gray-300">
                                    S.No
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                                    Product
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg w-[180px] border-r border-gray-300">
                                    IS No.
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-left text-base md:text-lg">
                                    Date of Implementation
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentProducts.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.product}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left border-r border-gray-200">
                                        {item.isNumber}
                                    </TableCell>
                                    <TableCell className="font-geist text-base md:text-lg text-left">
                                        {item.date}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex items-center">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 font-geist text-sm">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};



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


                {/* Divider */}
                <div className="crs-divider" />

                {/* Fees Section */}
                <CRSRegistrationMainContentLeftFeesSection />

                {/* Divider */}
                <div className="crs-divider" />

                {/* E-Labelling  */}
                <CRSRegistrationMainContentLeftELabellingSection />

                {/* Divider */}
                <div className="crs-divider" />
                <AboutAuthor />
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
                    "Earn the Indian customer&apos;s long-term brand trust.",
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
                BIS CRS Process, We&apos;re calling it Certification and Registration System (CRS) for now, and here&apos;s how the journey for BIS Certification unfolds.
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
                    "Your product label must contain or have e-labelling of the  certificate&apos;s details.",
                ]}
            />


            <div className="crs-heading-three">
                Step 6: Labeling and Distribution
            </div>


            <PointsListWithoutHeading
                points={[
                    "BIS certified products must carry:",
                    "BIS CRS logo  ",
                    "IS code that relates to the product",
                    "BIS registration number",
                    "The registration number and BIS logo must be printed or digitally embedded according to the BIS regulations.",
                ]}
            />


            <h3 className="crs-heading-three">
                Approximate Timeline
            </h3>

            {/* Timeline Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    Activity
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    Estimated Time
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Product Testing
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    7-10 working days
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Document Collection
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2-3 days
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Application Submission
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    1 day
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    BIS Review + Query Resolution
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    10-15 working days
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Final Certificate Issue
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2-4 working days
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    TOTAL
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full font-semibold">
                                    ~4 weeks
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

        </div>
    )
}


const CRSRegistrationMainContentLeftFeesSection = () => {
    return (
        <div id="fees" className="flex flex-col scroll-mt-20">
            {/* Fees */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">
                    Registration Fees
                </span>
                <Separator className="crs-separator" />
            </div>

            <h2 className="crs-heading-two">
                BIS CRS Registration Fees, Validity & Renewal Guidelines
            </h2>

            <p className="crs-paragraph">
                Getting a BIS certificate under the CRS, the applicant is required to pay the government charges as well as the payment for the product to be tested. Even though the process is online and the interface is streamlined, many applicants face delays on their requests and rejections due to underpayment and applications misfiled.
            </p>

            <h3 className="crs-heading-three">
                Fee Structure for CRS Registration
            </h3>

            {/* Fee Structure Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    Fee Type
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    Amount
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Government Fee
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ₹53,000 + 18% GST per test report
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Testing Charges
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ₹10,000 – ₹20,000 + 18% GST (varies by product/lab)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Additional Report in Same App
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ₹20,000 + 18% GST per report
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Renewal Fee
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    ₹53,000 + 18% GST
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>

            <p className="crs-paragraph italic text-center">
                <em>Prices subject to update — confirm on the BIS portal or with your consultant.</em>
            </p>

            <h3 className="crs-heading-three">
                CRS Certificate Validity & Renewal
            </h3>

            {/* Certificate Validity & Renewal Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    Parameter
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    Details
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Initial Validity
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    2 Years
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Renewal Duration
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Upto 5 Years (if no product changes)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Renewal Process
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Online, based on new affidavit + renewal fee
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Re-testing Required?
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Not unless product specs/IS standard changes
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>


        </div>
    )
}


const CRSRegistrationMainContentLeftELabellingSection = () => {
    return (
        <div id="elabelling" className="flex flex-col scroll-mt-20">
            {/* E-Labelling */}
            <div className="flex w-full items-center gap-3">
                <span className="crs-index-heading">E-Labelling</span>
                <Separator className="crs-separator" />
            </div>

            <div className="crs-heading-two">
                E-Labelling Guidelines for CRS Certified Products
            </div>

            <div className="crs-heading-three">
                What is E-Labelling?
            </div>

            <p className="crs-paragraph">
                E-labelling is the practice of showing regulatory information within a device electronically instead of printing and affixing it to the device. Under the Compulsory Registration Scheme (CRS) of BIS, specified products, especially compact or digital devices, are able to display the BIS certificate details, standard mark and IS code through the software interface or digital packaging.
            </p>

            <div className="crs-heading-three">
                BIS Guidelines on E-Labelling: Electronic E-Labelling (BIS CMD 3/8:1/6975. dated 03/12/2015)
            </div>

            <h3 className="crs-heading-three">
                Requirements for E-Labelling:
            </h3>

            {/* E-Labelling Requirements Table */}
            <div className="mt-[16px] md:mt-[24px] mb-[16px] md:mb-[20px] overflow-x-auto">
                <div className="rounded-md border bg-white shadow-sm min-w-full">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#F9F7F2] hover:bg-[#F9F7F2]/80">
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left w-[300px] border-r border-gray-300 tracking-wide leading-loose">
                                    Rule
                                </TableHead>
                                <TableHead className="font-semibold font-geist text-sm md:text-lg text-left tracking-wide leading-loose">
                                    Description
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Physical Label on Packaging
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Product box or external packaging must display the BIS CRS logo and registration details.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Removable Labels for Bulk Packaging
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    If products are shipped in bulk, a removable adhesive label on the outer package is acceptable.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    No Tools Needed for Access
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Users must be able to access the e-label info without needing tools or accessories (e.g., SIM card removal not allowed).
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Secure Programming
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    E-label info must be embedded in firmware/software, locked from modification by any third party.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Menu-Based Access
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Users must access the info in no more than 4 steps through the device&apos;s menu interface.
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium font-geist text-sm md:text-lg text-left border-r border-gray-200 bg-gray-50 tracking-wide leading-loose max-w-full">
                                    Instructions Required
                                </TableCell>
                                <TableCell className="font-geist text-sm md:text-lg text-left tracking-wide leading-loose max-w-full">
                                    Instructions on how to access e-label details must be provided.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>


            <p className="crs-paragraph">
                How Sun Certifications India Can Help You with BIS Registration under CRS Scheme
            </p>

            <div className="crs-heading-three">
                Why Choose a BIS Consultant?
            </div>


            <p className="crs-paragraph">
                The entire BIS CRS registration is very technical and exhaustive with regard to rules and the volume of documentation. In the absence of a thorough understanding of the Indian Standards, recent QCOs, the structure of the test report, and the workflows in the portal interface, applicants stand to lose substantially in terms of the subsequent actions of delays, rejection, or long-standing active non-compliance. This is where Sun Certifications India comes in with a reputable and reliable associate to assist the applicant in every detail of the compulsory certification scheme.
            </p>

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