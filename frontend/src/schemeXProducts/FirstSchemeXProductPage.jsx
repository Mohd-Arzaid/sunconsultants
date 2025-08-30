import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { SlashIcon, PhoneCall, User, Phone, Mail, MessageCircle, SendHorizontal } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Services } from "@/components/manual/Services"
import VideoSection from "@/components/manual/home-page-sections/VideoSection"
import Footer from "@/common/Footer"
import AboutAuthor from "@/components/common/AboutAuthor"
import { Helmet } from "react-helmet-async"

const FirstSchemeXProductPage = () => {
    return (
        <div className="relative w-full">
            <Helmet>
                <title>BIS Scheme X Certification for Pumps and Liquid Elevators</title>

                {/* Meta Description */}
                <meta name="description" content="BIS Scheme X certification for pumps and liquid elevators under the Omnibus Technical Regulation Order, 2024 mandates that all types of pumps and liquid elevators must conform to Scheme X Certification by September 2026" />

                {/* Meta Keywords */}
                <meta name="keywords" content="BIS Certification for Pumps, BIS Scheme X Certification for Pumps, Scheme X certification for Pumps, BIS for Pumps, BIS Certification for Pumps and Liquid Elevators, OTR for Pumps" />
                <meta name="author" content="Sun Certifications India" />
                <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="BIS Scheme X Certification for Pumps & Liquid Elevators in India | Complete Guide" />
                <meta property="og:description" content="Learn everything about BIS Scheme X Certification for Pumps and Liquid Elevators in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline" />
                <meta property="og:url" content="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators" />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta name="twitter:title" content="BIS Scheme X Certification for Pumps & Liquid Elevators in India | Complete Guide" />
                <meta name="twitter:description" content="Learn everything about BIS Scheme X Certification for Pumps and Liquid Elevators in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://bis-certifications.com/bis-scheme-x-certification-for-pumps-and-liquid-elevators" />
            </Helmet>

            <FirstSchemeXProductPageBreadcrumb />
            <FirstSchemeXProductPageMainContent />
            <Services />
            <VideoSection />
            <Footer />
        </div>
    )
}

export default FirstSchemeXProductPage


const FirstSchemeXProductPageBreadcrumb = () => {
    return (
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
            <div className="max-w-[80rem] mx-auto px-4">
                <div className="w-full overflow-x-auto scrollbar-hide font-inter">
                    <div className="w-fit min-w-full">
                        <Breadcrumb>
                            <BreadcrumbList className="flex-nowrap">
                                <BreadcrumbItem className="flex-shrink-0">
                                    <BreadcrumbLink asChild>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="flex-shrink-0">
                                    <SlashIcon />
                                </BreadcrumbSeparator>

                                <BreadcrumbItem className="flex-shrink-0">
                                    <BreadcrumbLink asChild>
                                        <Link to="/SchemeX-Products">
                                            SchemeX Products
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="flex-shrink-0">
                                    <SlashIcon />
                                </BreadcrumbSeparator>

                                <BreadcrumbItem className="flex-shrink-0">
                                    <BreadcrumbPage className="whitespace-nowrap">
                                        BIS Scheme X Certification for Pumps and Liquid Elevators
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FirstSchemeXProductPageMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">

                {/* Left Side Content */}
                <FirstSchemeXProductPageMainContentLeft />

                {/* Right Side Content */}
                <FirstSchemeXProductPageMainContentRight />
            </div>
        </div>
    )
}

const FirstSchemeXProductPageMainContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">

            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">

                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    BIS Scheme X Certification for Pumps and Liquid Elevators in India
                </h1>

                {/* Introduction Paragraph 1 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    Rapid Industrial and infrastructure growth in India requires machineries which work more and ensure the fulfillment of national and international demand. Pumps and liquid elevators are crucial for water resources, agriculture, construction, energy, industry and many others. A defective piece of equipment can risk safety, disrupt operation and create financial loss if not manufactured to the right specifications with quality control in place.
                </p>

                {/* Introduction Paragraph 2 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    To bring this under control, the BIS (Bureau of Indian Standards) had launched the Scheme X certification, which necessitates every pump and liquid elevator to satisfy the national quality standard before it is sold in India.
                </p>

                {/* Introduction Paragraph 3 */}
                <p className="text-gray-600 text-base font-geist mb-6">
                    In this post, we intend to cover the significance of BIS Certification for Pumps, the significance of the Omnibus Technical Regulation (OTR) 2024, and the process for achieving a BIS License for Pumps under Scheme X for aspiring manufacturers.
                </p>

                {/* Why Pumps and Elevators Matter Section */}
                <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Why Pumps and Elevators of Liquid Matter
                </div>

                {/* Pumps Subsection */}
                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Pumps
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Pumps are indispensable devices for conveying fluids or slurries across various industries. They are widely used in:
                </p>

                {/* Pumps Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Farm and irrigation system</li>
                    <li>Public water supply and domestic use</li>
                    <li>Sewerage and effluent treatment works</li>
                    <li>Oil & gas pipelines</li>
                    <li>Air conditioning and industrial cooling systems</li>
                </ul>

                {/* Liquid Elevators Subsection */}
                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Liquid Elevators
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Lifting pumps, Vertical liquid elevators for lifting liquids serve for pumping:
                </p>

                {/* Liquid Elevators Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>High mass, pumped water distribution systems</li>
                    <li>Industrial silos/storage tanks</li>
                    <li>In the Energy, Chemical and Process industry</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Since they are common, cheap pumps or liquid lifters can cause:
                </p>

                {/* Problems with Poor Quality Equipment */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Mechanical breakdown</li>
                    <li>Electrical hazards</li>
                    <li>Seepage and corrosion</li>
                    <li>Accidents caused by safety risks above and economic losses</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    This is why BIS for Pumps and Liquid Elevators is a much-needed protection for manufacturers and buyers alike.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* What is BIS and What is Scheme X Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    What is BIS and What is Scheme X?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The Bureau of Indian Standards (BIS) is the national standards body of India to certify the quality and safety of products. To control vital plants and machinery, the BIS has made it mandatory to obtain the Scheme X Certification from March 16, 2022 under the BIS Conformity Assessment Regulations, 2018.
                </p>

                {/* Scheme X Key Highlights */}
                <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Scheme X Certification for Pumps Key Highlights
                </h3>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>Compulsory for Indian and foreign manufacturers both</li>
                    <li>Is applicable to pumps, motors and liquid elevators covered under Indian Standards</li>
                    <li>Includes laboratory tests, factory inspections, consistent checks of compliance</li>
                    <li>Adds on legal powers in granting the use of BIS mark for Pumps by manufacturers as evidence of certification.</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* OTR Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Omnibus Technical Regulation (OTR) For Pumps
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The OTR 2024 was announced by the Ministry of Heavy Industries, which mandated all pumps and liquid elevators to adhere to Scheme X Certification.
                </p>

                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Deadline for Compliance:
                </div>

                <p className="text-gray-600 text-base font-geist mb-6">
                    On or before 1st September, 2026, all manufacturers and importers shall obtain a valid BIS License for Pumps under Scheme X. Non-compliance can lead to heavy fines, as well as closure of sales and exclusion from public tenders.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Importance Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Why is BIS certification for Pumps & Liquid Elevators important?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    1. Safety Assurance: Insures that the equipment is designed and built for the rigors of operations and not to:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Electrical faults</li>
                    <li>Leakage and rusting</li>
                    <li>Breakdowns and machine failures</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    2. Market Advantage
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>BIS certified pumps are often needed for public projects, government tenders etc.</li>
                    <li>Provides competitive advantage compared to non-certified products.</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    3. Consumer Trust: ISI mark on Pumps give Reassurance to the Purchaser about the Quality and Guarantees Efficiency of the Product.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    4. Global Brands Easily Enter Marketplace: Foreign OEMs get easy access into India&apos;s regulated market upon fulfillment of Scheme X norms.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Types of Pumps Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Types of Pump Under BIS Scheme X Registration
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    BIS Scheme X contains a variety of pump types including;
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Centrifugal Pumps</li>
                    <li>Submersible Pumps</li>
                    <li>Booster Pumps</li>
                    <li>Multistage Pumps</li>
                    <li>Positive Displacement Pumps</li>
                    <li>Vertical Turbine Pumps</li>
                    <li>Chemical Process Pumps</li>
                    <li>Diaphragm Pumps</li>
                    <li>Slurry Pumps</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                Each type must comply with relevant Indian Standards (IS codes) such as IS 16819:2018/ISO 12100:2010 (Safety of Machinery General Principles for Design- Risk Assessment and Risk Reduction).
                </p>

                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    For liquid elevators, certification covers:
                </div>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>Flow rate and head height</li>
                    <li>Material compatibility</li>
                    <li>Energy efficiency</li>
                    <li>Operational safety</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* How to Get BIS Scheme X Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    How to Get BIS Scheme X for Pumps?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Identify Applicable Standards: Quotation must specify the appropriate IS codes (for instance, IS 9079 for submersible pumps).
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Product Testing: Mandate testing on performance and safety at BIS-accepted laboratories.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Factory Inspection: BIS authorities inspect the production site to verify the implementation of quality control procedures.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Documentation & Application: Technical specifications, test reports and quality manuals are to be accompanied with the BIS application form.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Issue of BIS Certificate for Pumps: Manufacturers on approval are given the licence to apply the BIS mark under Scheme X.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Ongoing Surveillance: BIS performs regular audits and random inspections of products to ensure ongoing compliance.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Penalties Section */}
                <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Penalties for Non-Compliance
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Manufacturers failing to get BIS certification, as on 1st September 2026, will be subjected to:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>Sales/imports of uncertified pumps to be prohibited</li>
                    <li>Confiscation of articles and fines.</li>
                    <li>Disqualification from government and PSU orders</li>
                    <li>Long term damage to reputation in INDIA</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Conclusion Section */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    <span className="font-medium text-[#1e1e1e]">Conclusion:</span> BIS Scheme X Certification for Pumps and Liquid Elevators with OTR 2024 to be enforced; a milestone in India standardization of Industry.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    For those with manufacturing, importing or exporting business, BIS registration for pumps is not merely a statutory compliance process to fulfill, but also a strategic decision towards ensuring safety&apos;s dominance over potential risks, building consumer faith and an entry into the expanded market of India.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Pump and Liquid Elevator&apos;s BIS Certification is a long term investment to establish the credential and market of your Product.
                </p>

                <AboutAuthor />

            </div>
        </div>
    )
}


const FirstSchemeXProductPageMainContentRight = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    // Get current page URL and name for form submission
    const currentUrl = window.location.href;
    const currentPageName = "SchemeX Product - BIS Certification for Pumps & Liquid Elevators";

    // Add BASE_URL like other forms
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Use BASE_URL like other forms
            const response = await fetch(`${BASE_URL}/contact/submit-contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    pageUrl: currentUrl,
                    pageName: currentPageName,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({ type: "success", message: result.message });
                setFormData({
                    fullName: "",
                    phoneNumber: "",
                    email: "",
                    message: "",
                });
            } else {
                setSubmitStatus({ type: "error", message: result.message });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setSubmitStatus({
                type: "error",
                message: "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col gap-6 w-full md:w-[360px] ">
            <div className="w-full md:w-[360px] md:sticky md:top-[128px] md:self-start  p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
                {/* Header */}
                <div className="flex gap-2 items-center">
                    <PhoneCall className="text-[#232327]" />
                    <div className="text-xl font-geist font-semibold text-[#232327]">
                        Request a Free Callback
                    </div>
                </div>

                {/* Intro Text */}
                <p className="mt-3 text-sm text-gray-600 font-geist">
                    Leave your details below and our experts will call you back within 24
                    hours to discuss your regulatory compliance needs.
                </p>

                {/* Status Message */}
                {submitStatus && (
                    <div
                        className={`mt-4 p-3 rounded-lg text-sm font-geist ${submitStatus.type === "success"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                            }`}
                    >
                        {submitStatus.message}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
                    {/* Name Field */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="Your Name*"
                            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* Phone Field */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                            placeholder="Phone Number*"
                            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Email Address*"
                            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                            <MessageCircle className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Required Certification*"
                            rows="3"
                            required
                            className="w-full py-2.5 pl-10 pr-3 font-geist bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        ></textarea>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-5 font-geist bg-[#212126] hover:bg-[#212126]/90 text-white group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="relative z-10 flex items-center">
                            {isSubmitting ? "Submitting..." : "Request Callback"}
                            <SendHorizontal className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute top-0 left-0 w-0 h-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </Button>
                </form>

                {/* Privacy Note */}
                <p className="mt-3 text-xs text-center text-gray-500 font-geist">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                    </a>{" "}
                    and consent to being contacted.
                </p>
            </div>
        </div>
    )
}