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

const MachineTools = () => {
    return (
        <div className="relative w-full">
            <Helmet>
                <title>BIS Scheme X Certification for Machine Tools</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="BIS Scheme X Certification is mandatory for machine tools including lathes, milling machines, drilling machines, grinders, CNC systems and tools for working stone, ceramics, concrete and similar materials"
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="BIS Certification for Machine Tools, BIS Scheme X Certification for Machine Tools, Scheme X certification for Machine Tools, BIS for Machine Tools, OTR for Machine Tools"
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
                    content="BIS Scheme X Certification for Machine Tools in India | Complete Guide"
                />
                <meta
                    property="og:description"
                    content="Learn everything about BIS Scheme X Certification for Machine Tools in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
                />
                <meta
                    property="og:url"
                    content="https://bis-certifications.com/bis-scheme-x-certification-for-machine-tools"
                />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta
                    name="twitter:title"
                    content="BIS Scheme X Certification for Machine Tools in India | Complete Guide"
                />
                <meta
                    name="twitter:description"
                    content="Learn everything about BIS Scheme X Certification for Machine Tools in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://bis-certifications.com/bis-scheme-x-certification-for-machine-tools"
                />
            </Helmet>

            <MachineToolsBreadcrumb />
            <MachineToolsMainContent />
            <Services />
            <VideoSection />
            <Footer />
        </div>
    );
};

export default MachineTools;

const MachineToolsBreadcrumb = () => {
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
                                    BIS Scheme X Certification for Machine Tools
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
};

const MachineToolsMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                {/* Left Side Content */}
                <MachineToolsMainContentLeft />

                {/* Right Side Content */}
                <MachineToolsMainContentRight />
            </div>
        </div>
    );
};

const MachineToolsMainContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    BIS Scheme X Certification for Machine Tools
                </h1>

                {/* Introduction Paragraph 1 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    Considering quality and safety as critical, BIS (Bureau of Indian
                    Standards) has been spearheading safety and standards of different
                    industries by Scheme X Certification. This Certificate is of utmost
                    importance toward the manufacturers of machine tools designed to
                    operate on materials like stone, ceramic, concrete, asbestos cement
                    and similar mineral glass and other machining tools. Certification
                    compliance not only fulfills the national safety requirements, but
                    significantly boosts the credibility and marketability of such
                    products.
                </p>

                {/* Introduction Paragraph 2 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    This Scheme X Certification is a requirement under the Machinery &
                    Electrical Equipment Safety (Omnibus Technical Regulation, 2024). The
                    Regulation certifies the manufacturers of the machinery and electrical
                    equipment shall have the Standard Mark on their equipment. The
                    certification includes technical file preparation, factory audits,
                    independent product checking, and licensing, and the final deadline is
                    September 1, 2026.
                </p>

                {/* Introduction Paragraph 3 */}
                <p className="text-gray-600 text-base font-geist mb-6">
                    This blog covers all the necessary information related to Scheme X
                    certification for all types of machine tools for working stone,
                    ceramics, concrete, asbestos cement or like minerals (or) and their
                    assemblies /subassemblies /components, its importance, scope,
                    certification process, advantages, and documentation needed.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Why BIS is Important Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Why BIS Certification for Machine Tools is Important
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Machine tools are indispensable in:
                </p>

                {/* Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Automobile and aircraft part production</li>
                    <li>Shipbuilding and heavy engineering industry</li>
                    <li>The manufacturing of power generation equipment</li>
                    <li>Railways, defense and precision tooling</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Without BIS certification, risks include:
                </p>

                {/* Problems with Non-Certified Equipment */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>Inadequate & inconsistent quality of product</li>
                    <li>Malfunction in equipment and delays in production</li>
                    <li>Risks for operators</li>
                    <li>Legal concerns for Violation of Indian Laws</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    By enforcing compliance, Scheme X Certification safeguards industries
                    against these risks. It also applies to all types of machine tools for
                    working stone, ceramics, concrete, asbestos cement or like minerals
                    (or) and their assemblies /subassemblies /components.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* What is BIS Scheme X Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    What is BIS Scheme X Certification for Machine Tools?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    With the BIS Scheme X Certification under BIS Conformity Assessment
                    Regulations, 2018, such testing, inspection and licensing has become
                    mandatory for the identified product machine tool, prior to its
                    manufacture, import or sale in the country.
                </p>

                <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Key Highlights:
                </h3>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>Applicable for Indian and imported manufacturers</li>
                    <li>
                        Covers machine tools such as lathes, milling machines, drilling
                        machines, grinders, shaping machines, CNC systems, and more
                    </li>
                    <li>Testing is carried out only in BIS-approved labs.</li>
                    <li>Factory audits and quality system reviews are mandatory</li>
                    <li>
                        Only successful applicants get the BIS License to use the Standard
                        Mark on their products
                    </li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* OTR Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    OTR for Machine Tools
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The Ministry of Heavy Industries has released the Omnibus Technical
                    Regulation (OTR) mandating BIS scheme X certification for Machine
                    Tools.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Deadline: All producers and importers will need to have BIS
                    certification by 1st September 2026. From the date of such
                    notification, any un-certified machine tool shall not be capable of
                    being manufactured, sold or imported in India.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Benefits Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Benefits of BIS Certification for Machine Tools
                </h2>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>
                        Quality Assurance: Verified accuracy, the durability of certified
                        tools.
                    </li>
                    <li>
                        Access to Market – essential for entry to public and private sector
                        work.
                    </li>
                    <li>
                        Consumer confidence – The BIS Standard Mark is the assurance of
                        quality & safety of the product.
                    </li>
                    <li>
                        Competitive edge - Authorized manufacturers are preferred for
                        tenders and procurement.
                    </li>
                    <li>
                        Risk Reduction – No equipment failure, increased operator safety,
                        and downtime prevention.
                    </li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Process Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Process of BIS Certification of Machine Tools
                </h2>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
                    <li>
                        Identify Standards – Correlate the type of machine tool and its
                        usage with Indian Standards.
                    </li>
                    <li>
                        Product Testing – Performance, safety and Durability testing in
                        BIS-accredited labs.
                    </li>
                    <li>
                        Factory Audit – Quality control audit of the production of
                        electrical appliances.
                    </li>
                    <li>
                        Documentation: Technical reports, manuals and proof of compliance
                        must be provided.
                    </li>
                    <li>
                        Grant of License – BIS grants a licence (certificate) and permits
                        the use of the Standard Mark.
                    </li>
                    <li>
                        Monitoring – Regular reviews and random inspections are in place to
                        confirm they are adhering to the rules.
                    </li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Scheme X certification is mandatory for all machines for working
                    stone, ceramics, concrete, asbestos cement or similar minerals (or)
                    and their assemblies/subassemblies/parts.
                </p>

                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Penalties for Non-Compliance
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Not abiding by the BIS certification norms under OTR may result in:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>
                        Prohibition against production, importation and trading of
                        non-certified commodities
                    </li>
                    <li>Forfeiture of goods and fines in A.c._MUTINY.</li>
                    <li>Loss of defense and government contracts</li>
                    <li>Permanent brand and reputation harm in the long term</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Conclusion Section */}
                <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Conclusion
                </div>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The BIS Scheme X Certification, required under the OTR 2024, isn't
                    just a regulatory obligation—it is the key to confidence, safety, and
                    success in India's manufacturing industry. Certification is important
                    for Indian & Global Manufacturers for Market Access, Compliance and
                    Long Term Success.
                </p>

                <AboutAuthor />
            </div>
        </div>
    );
};

const MachineToolsMainContentRight = () => {
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
        "SchemeX Product - BIS Certification for Machine Tools";

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