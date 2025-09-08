import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
    SlashIcon,
    PhoneCall,
    User,
    Phone,
    Mail,
    MessageCircle,
    SendHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Services } from "@/components/manual/Services";
import VideoSection from "@/components/manual/home-page-sections/VideoSection";
import Footer from "@/common/Footer";
import AboutAuthor from "@/components/common/AboutAuthor";
import { Helmet } from "react-helmet-async";

const MetalCuttingMachines = () => {
    return (
        <div className="relative w-full">
            <Helmet>
                <title>
                    BIS Scheme X Certification for Metal Cutting Machine Tools
                </title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="BIS certification is now mandatory for all types of metal cutting machine tools and/or their assemblies, sub-assemblies, and components falling under HS codes 8456 to 8461"
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="BIS Certification for Metal Cutting Machine, BIS Scheme X Certification for Metal Cutting Machine, Scheme X certification for Metal Cutting Machine, BIS for Metal Cutting Machine, OTR for Metal Cutting Machine"
                />
                <meta name="author" content="Sun Certifications India" />
                <meta
                    name="publisher"
                    content="Dhruv Aggarwal, Head of Operations at Sun Certification India"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph Tags */}
                <meta
                    property="og:title"
                    content="BIS Scheme X Certification for Metal Cutting Machine Tools in India | Complete Guide"
                />
                <meta
                    property="og:description"
                    content="Learn everything about BIS Scheme X Certification for Metal Cutting Machine Tools in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
                />
                <meta
                    property="og:url"
                    content="https://bis-certifications.com/bis-scheme-x-certification-for-metal-cutting-machine-tools"
                />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta
                    name="twitter:title"
                    content="BIS Scheme X Certification for Metal Cutting Machine Tools in India | Complete Guide"
                />
                <meta
                    name="twitter:description"
                    content="Learn everything about BIS Scheme X Certification for Metal Cutting Machine Tools in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://bis-certifications.com/bis-scheme-x-certification-for-metal-cutting-machine-tools"
                />
            </Helmet>

            <MetalCuttingMachinesBreadcrumb />
            <MetalCuttingMachinesMainContent />
            <Services />
            <VideoSection />
            <Footer />
        </div>
    );
};

export default MetalCuttingMachines;

const MetalCuttingMachinesBreadcrumb = () => {
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
                                <BreadcrumbLink asChild>
                                    <Link to="/SchemeX-Products">SchemeX Products</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    BIS Certification for Metal Cutting Machines
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
};

const MetalCuttingMachinesMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                {/* Left Side Content */}
                <MetalCuttingMachinesMainContentLeft />

                {/* Right Side Content */}
                <MetalCuttingMachinesMainContentRight />
            </div>
        </div>
    );
};

// ... existing code ...

const MetalCuttingMachinesMainContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    BIS Certification for Metal Cutting Machines
                </h1>

                {/* Introduction Paragraph 1 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    The Indian manufacturing sector is undergoing a positive change by focusing on safety, quality, and standardization. Tools and equipment used to cut or shape metal are used in the manufacturing and fabrication industries. A critical development in this journey is the necessary BIS Scheme X Certification for all types of metal cutting machine tools and their assemblies, subassemblies, and components under HS Codes 8456 to 8461 associated with machine tools. This is a new development brought in by the Bureau of Indian Standards (BIS) under the Machinery and Electrical Equipment Safety Order 2024. The Ministry of Heavy Industry has issued the Omnibus Technical Regulation covering metal cutting machines with the aim to bring the Indian industrial machine standard to the level of the global market.

                </p>

                {/* Introduction Paragraph 2 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    The BIS Scheme X Certification is compulsory for both domestic and imported equipment and components from 1st September 2026, as stipulated in the Omnibus Technical Regulation (OTR) Order.  The end goal is to have Indian standards of safety, durability and operational accuracy which are on par with the rest of the world.

                </p>

                {/* Introduction Paragraph 3 */}
                <p className="text-gray-600 text-base font-geist mb-6">
                    This blog covers all the necessary information related to Scheme X certification for all types of metal cutting machine tools and their assemblies, sub-assemblies, and components, its importance, scope, certification process, advantages, and documentation needed
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Why BIS is Important Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Why is BIS Mandatory for Metal Cutting Machines?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Metal cutting machines are applied in:
                </p>

                {/* Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Auto and auto components manufacturing</li>
                    <li>Aviation and defense industry</li>
                    <li>Heavy engineering and construction</li>
                    <li>Electronics and electrical industries</li>
                    <li>Tool die making and die casting.</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Businesses that lack BIS for Metal Cutting Machines can be exposed to:
                </p>

                {/* Problems with Non-Certified Equipment */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>Machining accuracy is poor, and yield is low</li>
                    <li>
                        Machinery failure and loss of production Up-time vs Down-time.
                    </li>
                    <li>Potential dangers to the operator</li>
                    <li>Exclusion from public tenders and regulated businesses</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The BIS mark assures you that the Metal cutting machines are in
                    compliance with the quality norms set by the bureau.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* What is BIS Scheme X Certification Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    What is BIS Scheme X Certification for Metal Cutting Machines?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The BIS Scheme X Certification for Metal Cutting Machines comes under
                    the BIS Conformity Assessment Regulations, 2018 which have been
                    formulated to ensure that the product meets necessary quality
                    standards which is the need of the current day for industrial
                    equipments.
                </p>

                <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Key Features of Scheme X certification for Metal Cutting Machines
                </h3>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>Compulsory for both Indian and foreign manufacturers</li>
                    <li>
                        Applicable for a variety of metal metal cutting machines notified
                        under Indian Standards
                    </li>
                    <li>Involves lab testing, factory inspections and regular audits</li>
                    <li>Authorises display of BIS Mark for metal cutting m/cs.</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* OTR Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Mandatory BIS OTR for Metal Cutting Machines
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The Orders of the Department for Heavy Industries regarding the
                    Omnibus Technical Regulation (OTR) for Metal Cutting Machines in 2024
                    have made certification mandatory.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Deadline: BIS License shall be mandatory for all the manufacturers and
                    importers of metal cutting machines with effect from 1st September,
                    2026. From this date, machines which are not certified cannot be
                    offered for sale, imported or installed in India.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Advantages Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Advantages of BIS Certification for Metal Cutting Machines
                </h2>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>
                        Product Reliability: Machines are certified for accuracy, durability
                        and consistent performance.
                    </li>
                    <li>
                        Market Competitiveness: A BIS Licence for Metal Cutting Machines is
                        mandatory to get multiple Industrial and Government orders.
                    </li>
                    <li>
                        Customer Confidence: The BIS mark for Metal Cutting Machines
                        inspires confidence in the buyer.
                    </li>
                    <li>
                        Legal Compliance: Conforming to OTR for Metal Cutting Machines and
                        BIS.
                    </li>
                    <li>
                        Global Advantage: Easier access for foreign manufacturers to the
                        Indian market.
                    </li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Types of Metal Cutting Machines Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Types of Metal Cutting Machines Included Within the Scheme X Approval
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The Scheme X certificate covers the following type for Metal Cutting
                    Machines but not limited to:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>CNC turning lathes and turning centers</li>
                    <li>Milling machines</li>
                    <li>Drilling machines</li>
                    <li>Grinding machine</li>
                    <li>CNC cutting machines</li>
                    <li>Laser cutting machinery or machines</li>
                    <li>Plasma cutting Machines</li>
                    <li>Machines for water-jet cutting</li>
                    <li>Band saw and hacksaw machines</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    All these types of metal cutting machines must follow relevant Indian
                    Standards (IS codes) such as IS 17277 (Part 1): 2019 / ISO 16092-1:
                    2017 (Machine Tools Safety Presses Part 1 General Safety
                    Requirements). Every model of machine has to meet its own IS code on
                    safety, energy efficiency and accuracy.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Process Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Procedure for BIS License for Metal Cutting Machines
                </h2>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
                    <li>
                        Identify Applicable IS Standards: Choose the right standard
                        according to machine type.
                    </li>
                    <li>
                        Product Testing: Hand over machines for experimentation in the
                        laboratory of the government recognised BIS laboratory.
                    </li>
                    <li>
                        Factory Audit: On-the-spot-visits are conducted by BIS officials to
                        ensure appropriate quality production.
                    </li>
                    <li>
                        Documentation Submission: Supply technical manuals, test reports and
                        quality assurance documents.
                    </li>
                    <li>
                        Grant of BIS Licence for Metal Cutting Machines: Manufacturers can
                        now affix BIS mark under the product certification in accordance
                        with the above standard.
                    </li>
                    <li>
                        Ongoing Compliance: Periodic surveillance and audits are conducted
                        to guarantee ongoing compliance with BIS.
                    </li>
                </ul>

                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Penalties for Non-Compliance
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The non-compliance of BIS Certification to Metal Cutting Machines
                    under the OTR for Metal Cutting Machines can result:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>Ban on sale/import of non-certified machine</li>
                    <li>High fines and product seizure</li>
                    <li>Exclusion from government contracts</li>
                    <li>Long term brand and business reputation harm</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Conclusion Section */}
                <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Conclusion
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    BIS Scheme X Certification for Metal Cutting Machines in OTR for Metal
                    Cutting Machines (2024) has a vital role to play in India&apos;s
                    industrial accuracy, safety and reliability.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    For manufacturers and importers, having a BIS License for Metal
                    Cutting Machines and affixing the BIS mark on Metal Cutting Machines
                    is not merely a compliance measure, it is a strategic investment that
                    offers a compounding return in the form of product excellence,
                    consumer confidence and market superiority.
                </p>

                <AboutAuthor />
            </div>
        </div>
    );
};

// ... existing code ...

const MetalCuttingMachinesMainContentRight = () => {
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
    const currentPageName =
        "SchemeX Product - BIS Certification for Pumps & Liquid Elevators";

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
    );
};