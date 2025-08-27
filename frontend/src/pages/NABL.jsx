import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Check } from "lucide-react";
import Footer from "@/common/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTop";

import Services from "../components/manual/Services";
import AboutAuthor from "../components/common/AboutAuthor";
// import NABLWhatsappForm from "@/components/common/NABLWhatsappForm";
import NABLWhatsappForm from "@/common/NABLWhatsappForm"
import ServiceContentRightNABL from "@/components/manual/ServiceContentRightNABL"



const NABL = () => {
    return (
        <>
            <Helmet>
                <title>
                    Complete Guide to NABL Accreditation - Process, Benefits,
                    Documentation
                </title>
                <meta
                    name="description"
                    content="Boost your lab's credibility and quality with NABL Accreditation. Learn about the benefits, detailed application process, and get expert assistance from Corpseed for hassle-free certification."
                />
                <meta
                    name="keywords"
                    content="NABL accreditation , NABL certificate , Lab accreditation"
                />
                <meta name="author" content="Sun Certifications India" />
                <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph Tags */}
                <meta
                    property="og:title"
                    content="NABL Accreditation: Your Trusted Path to Certified Excellence"
                />
                <meta
                    property="og:description"
                    content="Unlock unparalleled quality and credibility for your testing or calibration lab. Explore our comprehensive guide to NABL Accreditation, understand its immense benefits, the detailed application process."
                />
                <meta property="og:type" content="article" />
                <meta
                    property="og:url"
                    content="https://bis-certifications.com/nabl-certification-india"
                />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="Navigating NABL Certification? We make it simple! Get expert assistance for your testing & calibration lab's accreditation journey with us."
                />
                <meta
                    name="twitter:description"
                    content="Unlock unparalleled quality and credibility for your testing or calibration lab. Explore our comprehensive guide to NABL Accreditation, understand its immense benefits, the detailed application process."
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://bis-certifications.com/nabl-certification-india"
                />

                <meta name="robots" content="index, follow" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        serviceType: "NABL Accreditation",
                        provider: {
                            "@type": "Organization",
                            name: "Sun Certifications India",
                            url: "https://bis-certifications.com/nabl-certification-india",
                            logo: "https://suncertifications.com/logo.png",
                        },
                        areaServed: {
                            "@type": "Country",
                            name: "India",
                        },
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "NABL Accreditation Services",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Testing Laboratory Accreditation",
                                        description: "NABL accreditation for testing laboratories",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Calibration Laboratory Accreditation",
                                        description:
                                            "NABL accreditation for calibration laboratories",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Medical Laboratory Accreditation",
                                        description: "NABL accreditation for medical laboratories",
                                    },
                                },
                            ],
                        },
                    })}
                </script>
            </Helmet>

            <main className="w-full">
                <NABLHero />
                <NABLIndex />
                <NABLContent />
                <Footer />
                <ScrollToTopButton />

            </main>
        </>
    );
};

export default NABL;

const NABLHero = () => {
    return (
        <main className="relative pt-[30px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
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
                            NABL Lab
                            <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
                        </span>{" "}
                        Accreditation Made Easy
                    </h1>

                    <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
                        A complete yet concise guide to NABL accreditation for testing,
                        calibration, and medical labs in India.
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

                {/* Right Side from */}
                <NABLWhatsappForm />
            </div>
        </main>
    );
};

const NABLIndex = () => {
    // Observe each section
    const SECTIONS = [
        "overview",
        "Eligibility",
        "Documents",
        "Procedure",
        "verification",
        "faqs",
    ];

    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState("Overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const stickyRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    const handleItemClick = (item) => {
        const element = document.getElementById(item.toLowerCase());
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
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        if (entry.target.id === "faqs") {
                            setActiveSection("FAQs");
                        } else {
                            const sectionName =
                                entry.target.id.charAt(0).toUpperCase() +
                                entry.target.id.slice(1);
                            setActiveSection(sectionName);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        SECTIONS.forEach((section) => {
            const element = document.getElementById(section.toLowerCase());
            if (element) {
                sectionObserver.observe(element);
            }
        });

        return () => sectionObserver.disconnect();
    }, []);

    return (
        <div
            ref={stickyRef}
            className={`sticky  top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
                }`}
        >
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-between px-4 h-20">
                <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
                    {activeSection}
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
                        {[
                            "Overview",
                            "Standardization",
                            "Documents",
                            "Procedure",
                            "Consulting",
                            "FAQs",
                        ].map((item) => (
                            <div
                                key={item}
                                onClick={() => handleItemClick(item)}
                                className={`px-4 py-3 cursor-pointer transition-colors ${item === activeSection
                                        ? "bg-blue-50 text-blue-900 font-semibold"
                                        : "text-blue-950 hover:bg-blue-50"
                                    }`}
                            >
                                <div className="font-geist tracking-wider uppercase">
                                    {item}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto overflow-x-auto">
                {[
                    "Overview",
                    "Eligibility",
                    "Documents",
                    "Procedure",
                    "Consulting",
                    "FAQs",
                ].map((item) => (
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
                            {item}
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
    );
};

const NABLContent = () => {
    return (
        <div className="">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
                <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                    {/* Left Side */}

                    <NABLContentLeft />

                    {/* Right Side */}
                    <ServiceContentRightNABL whatsappMode={true} />
                </div>
            </div>
            <ServiceFaq />
            <div id="services">
                <Services />
            </div>
        </div>
    );
};

const ServiceFaq = () => {
    return (
        <div id="faqs" className="py-2 bg-gray-50 scroll-mt-20">
            <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
                <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
                    Frequently Asked Questions
                </h2>
                <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
                    Can't find the answer you are looking for?{" "}
                    <span className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4">
                        Reach out to us!
                    </span>
                </p>

                <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                1. What is NABL Accreditation?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                NABL Accreditation is a formal recognition provided by the
                                National Accreditation Board for Testing and Calibration
                                Laboratories to laboratories that demonstrate technical
                                competence and adherence to international standards like ISO/IEC
                                17025.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                2. Who needs NABL Accreditation?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                Any testing, calibration, medical laboratory, or proficiency
                                testing provider (PTP) seeking national and international
                                credibility, compliance, and recognition should pursue NABL
                                accreditation.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                3. What are the main standards under NABL?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                • ISO/IEC 17025:2017 (Testing & Calibration Labs)
                                <br />
                                • ISO 15189:2012 (Medical Labs)
                                <br />
                                • ISO/IEC 17043:2010 (PTPs)
                                <br />• ISO 17034:2016 (RMPs)
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                4. Is NABL accreditation mandatory in India?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                While not legally mandatory, many regulatory authorities and
                                clients require NABL accreditation for compliance and
                                reliability in test results.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                5. What is the validity of NABL accreditation?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                NABL accreditation is typically valid for two years, subject to
                                periodic surveillance assessments and continuous compliance.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                6. How long does it take to get NABL accredited?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                The process usually takes between 6 to 12 months, depending on
                                readiness, documentation, corrective actions, and audit
                                timelines.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                7. What is a Conformity Assessment Body (CAB)?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                A CAB is an organization performing testing, calibration,
                                medical diagnostics, or producing reference materials or
                                proficiency testing programs.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-8">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                8. What is the role of ISO/IEC 17025 in NABL?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                ISO/IEC 17025 is the primary international standard used to
                                assess the technical competence of testing and calibration labs
                                under NABL.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-9">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                9. What are the key documents needed for NABL application?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                Important documents include:
                                <br />
                                • NABL 100 (General Info)
                                <br />
                                • NABL 151, 152, 153 (Lab-specific criteria)
                                <br />
                                • NABL 155 (Application)
                                <br />
                                • NABL 160 (Quality system guidelines)
                                <br />• NABL 219 (Assessment forms)
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-10">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                10. What is a Quality Manual?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                A Quality Manual outlines the lab's commitment to quality,
                                structure, documented procedures, and compliance with ISO
                                standards.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                11. What is a shadow audit?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                A shadow audit (or pre-certification audit) is a mock assessment
                                conducted to identify gaps and non-conformities before the final
                                NABL audit.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                12. What is method validation in ISO/IEC 17025?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                Method validation ensures that testing methods used by the lab
                                are accurate, reliable, and suitable for the intended purpose.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                13. What is UOM and why is it important?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                Unit of Measurement (UOM) standardizes how measurements are
                                expressed and ensures consistency and traceability across labs.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                14. What is a management review meeting (MRM)?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                MRM is a formal meeting required under ISO standards to evaluate
                                the effectiveness of the quality system and plan for continual
                                improvement.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                15. What is internal audit under NABL?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                An internal audit is a self-assessment process where the lab
                                checks its own compliance with NABL standards before the
                                external audit.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                16. What happens if non-conformities (NCs) are found during the
                                audit?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                The CAB must take corrective actions within 60 days and provide
                                evidence to the NABL to proceed toward accreditation.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                17. How often is surveillance conducted after accreditation?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                Surveillance is typically conducted annually or as scheduled by
                                NABL to ensure continued compliance with the accreditation
                                standards.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                18. Can I appeal a decision if NABL rejects my application?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                Yes, decisions can be appealed to the Director of NABL, and you
                                may be given a chance to reapply or address discrepancies.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-11">
                            <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                                19. Will my lab be listed publicly once accredited?
                            </AccordionTrigger>
                            <AccordionContent className="font-geist text-[16px] md:text-[18px] text-[#5e5f6e]">
                                Yes, accredited labs are listed in the NABL online directory,
                                which improves visibility and trust among clients and
                                regulators.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

const PointsListTwo = ({ points, heading }) => {
    return (
        <div className="flex flex-col w-full">
            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                {heading}
            </h3>
            <ul className="flex flex-col mt-[16px] md:mt-[20px] gap-2">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <div className="bg-green-500/10 p-2 rounded-full">
                            <Check size={12} className="text-[#020817]" />
                        </div>
                        <h3 className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-normal">
                            {point}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const NABLContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
            <div className="flex flex-col  gap-[20px] md:gap-[40px]">
                <section
                    className="flex flex-col gap-2 md:gap-4 mb-6"
                    aria-label="BIS Certificate for Foreign Manufacturers"
                >
                    <article className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none md:leading-[1.1] my-3 md:my-0">
                        NABL Accreditation
                    </article>

                    <div className="mt-[16px] md:mt-[8px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The National Accreditation Board for Testing and Calibration
                        Laboratories (NABL) is an autonomous body that provides formal
                        recognition of the technical competence of laboratories in the
                        fields of testing, calibration, medical diagnostics, and proficiency
                        testing providers (PTPs) as per internationally accepted standards.
                    </div>
                </section>
                {/* Overview Section */}
                <OverviewSection />
                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

                <EligibilitySection />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

                <DocumentsSection />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

                <ProcedureSection />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

                <ConsultingSection />
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

                <ReviewSection />

                <AboutAuthor />
            </div>
        </div>
    );
};

const OverviewSection = () => {
    return (
        <section id="overview" className="flex flex-col scroll-mt-20">
            {/* Overview */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
                    Overview
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}

            <h1 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
                National Accreditation Board for Testing and Calibration Laboratories
                (NABL)
            </h1>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                The National Accreditation Board for Testing and Calibration
                Laboratories (NABL) is an autonomous body under the Department of
                Science and Technology, Government of India, responsible for providing
                accreditation to laboratories that demonstrate technical competence in
                accordance with internationally recognized standards.
            </p>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                NABL accredits Testing Laboratories, Calibration Laboratories, Medical
                Laboratories, Proficiency Testing Providers (PTPs), and Reference
                Material Producers (RMPs) across a defined scope of activities.
            </p>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                Registered under the Societies Act, NABL facilitates third-party
                assessments for laboratories to verify their quality systems and
                technical capabilities, thereby supporting government bodies,
                industries, and associations in ensuring reliable testing and
                calibration outcomes.
            </p>

            <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                {/* Points */}
                <div className="w-full md:w-auto">
                    <PointsListTwo
                        points={[
                            "APLAC (Asia Pacific Laboratory Accreditation Cooperation)",
                            "ILAC (International Laboratory Accreditation Cooperation)",
                        ]}
                        heading="NABL holds Mutual Recognition Arrangements (MRAs) with global bodies such as:"
                    />
                </div>
            </div>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                These MRAs enable international acceptance of accredited laboratory
                results, enhancing global trade and compliance.
            </p>

            <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                NABL Accreditation: Ensuring Technical Competence Through Global
                Standards
            </h2>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                Accreditation is the formal attestation by a third-party authority that
                a Conformity Assessment Body (CAB)—such as a testing laboratory, medical
                lab, Proficiency Testing Provider (PTP), or Reference Material Producer
                (RMP)—is technically competent to perform specific tests, calibrations,
                or assessments.
            </p>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                As India's trade and industrial sectors become increasingly globalized,
                the Government of India's liberalized policies have led to a growing
                demand for internationally accepted quality assurance. Laboratories and
                testing facilities are now required to demonstrate technical
                capabilities that align with global standards of competence.
            </p>
            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                The National Accreditation Board for Testing and Calibration
                Laboratories (NABL) plays a key role in this framework. It provides
                third-party accreditation to CABs, affirming their compliance with
                international standards and their ability to deliver reliable,
                high-quality results.
            </p>

            <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                {/* Points */}
                <div className="w-full md:w-auto">
                    <PointsListTwo
                        points={[
                            "Testing and Medical Laboratories: Assessed for specific testing capabilities.",
                            "Proficiency Testing Providers (PTPs): Recognized for their ability to evaluate the performance of other labs through inter-lab comparisons.",
                            "Reference Material Producers (RMPs): Accredited to produce materials with known properties, which are used to validate test results and calibrate instruments.",
                        ]}
                        heading="This includes:"
                    />
                </div>
            </div>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                In all cases, accreditation is based on rigorous evaluation by
                independent experts and follows globally recognized protocols such as
                ISO/IEC 17025, ISO 15189, ISO/IEC 17043, and ISO 17034.
            </p>

            <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                Scope of NABL Accreditation
            </h2>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                The National Accreditation Board for Testing and Calibration
                Laboratories (NABL) offers accreditation across a wide range of
                scientific, technical, and medical disciplines. Conformity Assessment
                Bodies (CABs) must apply for accreditation under the specific discipline
                relevant to their operations. For detailed eligibility and requirements,
                applicants should refer to the applicable NABL-specific criteria
                documents.
            </p>

            <div className="flex flex-col md:flex-row mt-[16px] md:mt-[24px] gap-6 md:gap-10">
                {/* Points */}
                <div className="w-full md:w-auto">
                    <PointsListTwo
                        points={[
                            "Testing Laboratories",
                            "Calibration Laboratories",
                            "Biological Testing",
                            "Chemical Testing",
                            "Radiological Testing",
                            "Mechanical Testing",
                            "Thermal Testing",
                            "Optical Testing",
                            "Fluid-Flow Testing",
                            "Photometry Testing",
                            "Electro-Technical Testing",
                            "Electrical Testing",
                            "Electronics Testing",
                        ]}
                        heading="NABL currently provides accreditation in the following domains:"
                    />
                </div>
            </div>

            <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                Benefits of NABL Accreditation
            </h2>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                Obtaining NABL accreditation provides formal recognition of a
                laboratory's technical competence based on internationally accepted
                standards. This recognition delivers a wide range of benefits to
                laboratories, clients, and end-users alike:
            </p>

            {/*  table  */}

            <div className="mt-[24px] md:mt-[32px] overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold font-geist text-[16px] md:text-[18px] text-[#131316]">
                                Benefit
                            </th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold font-geist text-[16px] md:text-[18px] text-[#131316]">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium font-geist text-[14px] md:text-[16px] text-[#131316]">
                                Enhanced Credibility
                            </td>
                            <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d] leading-relaxed">
                                Accreditation assures stakeholders of the lab's technical
                                proficiency, leading to greater confidence in test, calibration,
                                or diagnostic reports.
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium font-geist text-[14px] md:text-[16px] text-[#131316]">
                                Improved Operational Efficiency
                            </td>
                            <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d] leading-relaxed">
                                Encourages better quality management systems, helping
                                laboratories evaluate and enhance their processes and
                                competencies.
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium font-geist text-[14px] md:text-[16px] text-[#131316]">
                                Increased Customer Confidence
                            </td>
                            <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d] leading-relaxed">
                                Accreditation signals reliability, leading to greater customer
                                trust and satisfaction—potentially attracting more business.
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium font-geist text-[14px] md:text-[16px] text-[#131316]">
                                Wider Market Access
                            </td>
                            <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d] leading-relaxed">
                                NABL-accredited labs are searchable through the official NABL
                                Directory, making them more discoverable to businesses and
                                regulatory bodies.
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium font-geist text-[14px] md:text-[16px] text-[#131316]">
                                Boosted Domestic & International Acceptance
                            </td>
                            <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d] leading-relaxed">
                                Accredited lab results are more likely to be accepted globally,
                                reducing the need for duplicate testing.
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium font-geist text-[14px] md:text-[16px] text-[#131316]">
                                Cost & Time Savings
                            </td>
                            <td className="border border-gray-300 px-4 py-3 font-geist text-[14px] md:text-[16px] text-[#42434d] leading-relaxed">
                                With fewer re-tests required, both clients and laboratories save
                                on time and financial resources.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

const EligibilitySection = () => {
    return (
        <section id="eligibility" className="flex flex-col scroll-mt-20">
            {/* Standardization */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
                    Eligibility
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}
            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
                Eligibility Criteria for NABL Accreditation
            </h2>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                To be eligible for accreditation from the National Accreditation Board
                for Testing and Calibration Laboratories (NABL), an institution must
                fulfill specific technical and procedural requirements. These ensure
                that the Conformity Assessment Body (CAB) operates with internationally
                recognized quality and competency standards.
            </p>

            <h2 className="mt-[12px] md:mt-[20px] font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                Basic Eligibility Requirements:
            </h2>

            <div className="mt-[16px] md:mt-[24px] space-y-6">
                {/* 1. CAB Status */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                        1. CAB Status:
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The applicant must be a functioning Conformity Assessment Body (CAB)
                        actively engaged in relevant services such as:
                    </p>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "Laboratory Testing",
                                "Calibration",
                                "Food Testing",
                                "Research & Development",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* 2. Designated Representative */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                        2. Designated Representative:
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        A qualified representative must be formally appointed to coordinate
                        the NABL application process. This person should be well-versed in
                        the CAB's existing quality systems.
                    </p>
                </div>

                {/* 3. Quality Management System */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                        3. Quality Management System:
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The CAB must have a documented Quality Manual that complies with one
                        of the following international standards:
                    </p>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "ISO/IEC 17025:2017 (for testing & calibration labs)",
                                "ISO 15189:2012 (for medical laboratories)",
                                "ISO/IEC 17043:2010 (for Proficiency Testing Providers)",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* 4. Trained Personnel */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                        4. Trained Personnel:
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The CAB must appoint a Quality/Technical Manager who has undergone a
                        minimum of 4 days of formal training in:
                    </p>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "Internal Audit Procedures",
                                "Quality Management System Requirements",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* 5. Quality Implementation */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                        5. Quality Implementation:
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The quality system described in the manual must be fully implemented
                        within the organization prior to applying.
                    </p>
                </div>

                {/* 6. On-Site Testing/Calibration */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                        6. On-Site Testing/Calibration:
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        For on-site testing and calibration labs, the CAB must meet
                        additional requirements as defined in NABL 130.
                    </p>
                </div>

                {/* 7. Proficiency Testing (PT) Participation */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                        7. Proficiency Testing (PT) Participation:
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The CAB must demonstrate participation in at least one of the
                        following:
                    </p>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "Proficiency Testing Program (PTP) conducted by NABL or an approved international body",
                                "Inter-Laboratory Comparison (ILC) if no PTP is available, with a minimum of one test parameter included",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* 8. Internal Audit & Management Review */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                        8. Internal Audit & Management Review:
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The CAB must conduct at least:
                    </p>
                    <div className="ml-4">
                        <PointsListTwo
                            points={["One Internal Audit", "One Management Review"]}
                            heading=""
                        />
                    </div>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        before submitting the NABL application
                    </p>
                </div>
            </div>
        </section>
    );
};

const DocumentsSection = () => {
    return (
        <section id="documents" className="flex flex-col scroll-mt-20">
            {/* Authority */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
                    Documents
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}
            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
                Essential Documents Required for NABL Accreditation
            </h2>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                To initiate and complete the NABL accreditation process, laboratories
                and Conformity Assessment Bodies (CABs) must prepare and submit a series
                of specific documents aligned with the type of service they provide.
                Below is a categorized list of all key NABL documents:
            </p>

            <div className="mt-[24px] md:mt-[32px] space-y-8">
                {/* For Medical Laboratories */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        For Medical Laboratories
                    </h3>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "NABL 112 – Criteria for Accreditation of Medical Laboratories",
                                "NABL 153 – Specific Requirements for Medical Laboratories",
                                "NABL 155 – Application Form and Checklist for Medical Laboratories",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* For Calibration Laboratories */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        For Calibration Laboratories
                    </h3>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "NABL 126 – Specific Criteria for Medical Device Calibration",
                                "NABL 152 – Guidelines for Calibration Laboratories",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* For Testing Laboratories */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        For Testing Laboratories
                    </h3>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "NABL 151 – Requirements and Criteria for Testing Laboratories",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* For PTPs and RMPs */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        For PTPs and RMPs
                    </h3>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "NABL 180 – Accreditation Criteria for Proficiency Testing Providers (PTPs)",
                                "NABL 190 – Accreditation Criteria for Reference Material Producers (RMPs)",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* General and Supporting Documents */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        General and Supporting Documents
                    </h3>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "NABL 100 – General Information Brochure about NABL",
                                "NABL 160 – Guidelines for Managing the Laboratory Quality System Manual",
                                "NABL 219 – Assessment Forms and Checklist for ISO/IEC 17025:2017 Accredited Labs",
                            ]}
                            heading=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProcedureSection = () => {
    return (
        <section id="procedure" className="flex flex-col scroll-mt-20">
            {/* Registration */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
                    Procedure
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}
            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
                Step-by-Step Methodology to Implement ISO/IEC 17025 for NABL
                Accreditation
            </h2>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                Implementing ISO/IEC 17025, or other applicable international standards,
                is a crucial step in achieving NABL accreditation for your laboratory or
                Conformity Assessment Body (CAB). Below is a streamlined guide to the
                entire process:
            </p>

            <div className="mt-[24px] md:mt-[32px] space-y-8">
                {/* Step 1: Submit the Application */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        Step 1: Submit the Application
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The CAB must submit an application to NABL in triplicate (3 copies).
                        Two of these copies must include the Quality Manual, which should be
                        prepared in accordance with one of the following standards,
                        depending on the CAB's function:
                    </p>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "ISO/IEC 17025:2017 (Testing & Calibration Labs)",
                                "ISO 15189:2012 (Medical Labs)",
                                "ISO/IEC 17043:2010 (Proficiency Testing Providers)",
                                "ISO 17034:2016 (Reference Material Producers)",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* Step 2: Pay the Applicable Fees */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        Step 2: Pay the Applicable Fees
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The required fees are outlined in NABL 100. If the CAB prefers not
                        to disclose certain information, valid reasons must be submitted in
                        writing along with the application.
                    </p>
                </div>

                {/* Step 3: Acknowledgement & UIN Issuance */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        Step 3: Acknowledgement & UIN Issuance
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        Upon receiving the application and fee, the NABL Secretariat issues
                        a Unique Identification Number (UIN). This number must be used in
                        all future communication with NABL.
                    </p>
                </div>

                {/* Step 4: Pre-Assessment Visit */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        Step 4: Pre-Assessment Visit
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        If the application is in order, a Lead Assessor is appointed to
                        conduct a Pre-Assessment Visit to the CAB's premises. This visit:
                    </p>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "Evaluates readiness and quality system implementation",
                                "Identifies any discrepancies",
                                "Determines the need for further assessments",
                            ]}
                            heading=""
                        />
                    </div>
                </div>

                {/* Step 5: Submission of Pre-Assessment Report */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        Step 5: Submission of Pre-Assessment Report
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        The Lead Assessor submits a comprehensive Pre-Assessment Report to
                        the NABL Secretariat. A copy is maintained in the official document
                        management system, and another is sent to the CAB.
                    </p>
                </div>

                {/* Step 6: Full Assessment by NABL Team */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold font-geist text-[18px] md:text-[22px] text-[#131316]">
                        Step 6: Full Assessment by NABL Team
                    </h3>
                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        Once initial issues are resolved, NABL forms an Assessment Team,
                        comprising:
                    </p>
                    <div className="ml-4">
                        <PointsListTwo
                            points={[
                                "The Lead Assessor",
                                "Subject-specific Technical Experts",
                                "Relevant domain professionals",
                            ]}
                            heading=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ConsultingSection = () => {
    return (
        <section id="consulting" className="flex flex-col scroll-mt-20">
            {/* Verification */}
            <div className="flex w-full items-center gap-3">
                <span className="uppercase font-semibold font-geist text-[16px] md:text-[20px] text-gray-700">
                    Consulting
                </span>
                <Separator className="w-[94.46px] h-[1.5px] bg-gray-700" />
            </div>

            {/* Title */}
            <h2 className="text-[28px] md:text-[40px] font-roboto font-bold text-[#131316] leading-none  md:leading-[1.1] my-3 md:my-0">
                Why Choose Sun Certifications India for NABL Accreditation Services?
            </h2>

            <p className="mt-[16px] md:mt-[16px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                At Sun Certifications India, we specialize in providing end-to-end
                support for NABL accreditation through a streamlined and expert-driven
                approach. Our comprehensive consulting services ensure your organization
                meets international quality and technical standards with ease.
            </p>

            <div className="mt-[24px] md:mt-[32px] space-y-8">
                {/* Our NABL Consulting Includes */}
                <div className="flex flex-col gap-6">
                    <h2 className="font-semibold font-geist text-[20px] md:text-[24px] text-[#131316]">
                        Our NABL Consulting Includes:
                    </h2>

                    <div className="space-y-4">
                        {/* Training & Awareness */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                                Training & Awareness-
                            </h3>
                            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                Empowering your team with in-depth knowledge of ISO/IEC
                                standards and quality protocols
                            </p>
                        </div>

                        {/* Documentation Support */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                                Documentation Support-
                            </h3>
                            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                Assisting in preparing quality manuals, SOPs, and compliance
                                documentation
                            </p>
                        </div>

                        {/* Implementation Assistance */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                                Implementation Assistance-
                            </h3>
                            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                Guiding you through the practical application of quality systems
                            </p>
                        </div>

                        {/* Internal Audit Preparation */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                                Internal Audit Preparation-
                            </h3>
                            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                Helping you conduct internal audits aligned with NABL
                                requirements
                            </p>
                        </div>

                        {/* Accreditation Process Management */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                                Accreditation Process Management-
                            </h3>
                            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                Full support during the application, assessment, and follow-up
                                phases
                            </p>
                        </div>
                    </div>
                </div>

                {/* Documentation Support Under Quality Management System (QMS) */}
                <div className="flex flex-col gap-6">
                    <h2 className="font-semibold font-geist text-[20px] md:text-[24px] text-[#131316]">
                        Documentation Support Under Quality Management System (QMS)-
                    </h2>

                    <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                        As part of our QMS implementation assistance, we help organizations
                        prepare and structure essential documentation required for NABL
                        accreditation. Our support includes:
                    </p>

                    <div className="space-y-6">
                        {/* Quality Manual */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                                Quality Manual-
                            </h3>
                            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                Comprehensive documentation outlining your organization's
                                quality policies, objectives, and system structure in alignment
                                with ISO/IEC standards.
                            </p>
                        </div>

                        {/* Procedures & Functional Formats */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                                Procedures & Functional Formats
                            </h3>
                            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                Detailed Standard Operating Procedures (SOPs), test methods,
                                system workflows, and format templates necessary for consistent
                                and compliant operations.
                            </p>
                        </div>

                        {/* Work/Test Instructions */}
                        <div className="flex flex-col gap-3">
                            <h3 className="font-semibold font-geist text-[16px] md:text-[20px] text-[#131316]">
                                Work/Test Instructions
                            </h3>
                            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                                Clear and practical instructions for performing routine tests or
                                operational tasks to ensure accuracy, repeatability, and staff
                                consistency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-[24px] md:mt-[32px] font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose">
                Our expert team ensures that all documentation meets NABL requirements
                and international standards, providing you with a solid foundation for
                successful accreditation and ongoing compliance.
            </p>
        </section>
    );
};

const ReviewSection = () => {
    return (
        <section>
            <span className="font-geist text-[20px] md:text-[25px] font-semibold text-[#131316] tracking-normal">
                What did you think of this content?
            </span>
            <div className="flex flex-col md:flex-row items-start md:items-center mt-2 justify-between gap-4 md:gap-0">
                <div className="flex gap-6">
                    <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-blue-600 transition-colors group">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
                        >
                            <path
                                fillOpacity="0.15"
                                strokeWidth="0"
                                className="group-hover:text-blue-500 transition-colors duration-200"
                                d="M2.75 9.75h3l3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011h-3v-7.5Z"
                            />
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className="group-hover:text-blue-500 transition-colors duration-200"
                                d="M5.75 9.75h-3v7.5h3m0-7.5 3-7h.5a2 2 0 0 1 2 2v4l4.002-.011a2 2 0 0 1 1.987 2.233l-.53 4.5a2 2 0 0 1-1.986 1.767l-8.973.011m0-7.5v7.5"
                            />
                        </svg>

                        <span>It was helpful</span>
                    </button>

                    <button className="flex cursor-pointer items-center gap-3 font-geist text-sm md:text-lg text-[#42434d] hover:text-red-600 transition-colors group">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group"
                        >
                            <path
                                fillOpacity="0.15"
                                strokeWidth="0"
                                className="group-hover:text-red-500 transition-colors duration-200"
                                d="M2.75 10.25h3l3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75h-3v7.5Z"
                            />
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className="group-hover:text-red-500 transition-colors duration-200"
                                d="M5.75 10.25h-3v-7.5h3m0 7.5 3 7h.5a2 2 0 0 0 2-2v-4l4.002.011a2 2 0 0 0 1.987-2.233l-.53-4.5a2 2 0 0 0-1.986-1.767L5.75 2.75m0 7.5v-7.5"
                            />
                        </svg>

                        <span>It was not helpful</span>
                    </button>
                </div>

                <p className="font-geist text-[14px] md:text-[17px] text-[#5e5f6e] tracking-normal">
                    Last updated on Mar 19, 2025
                </p>
            </div>
        </section>
    );
};