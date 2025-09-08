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

const Cranes = () => {
    return (
        <div className="relative w-full">

            <Helmet>
                <title>BIS Scheme X Certification for Cranes</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="The Bureau of Indian Standards (BIS) has introduced mandatory Scheme X certification for all types of cranes and their assemblies, sub-assemblies, and components."
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="BIS Certification for Cranes, BIS Scheme X Certification for Cranes, Scheme X certification for Cranes, BIS for Cranes, OTR for Cranes"
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
                    content="BIS Scheme X Certification for Cranes in India | Complete Guide"
                />
                <meta
                    property="og:description"
                    content="Learn everything about BIS Scheme X Certification for Cranes in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
                />
                <meta
                    property="og:url"
                    content="https://bis-certifications.com/bis-scheme-x-certification-for-cranes"
                />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta
                    name="twitter:title"
                    content="BIS Scheme X Certification for Cranes in India | Complete Guide"
                />
                <meta
                    name="twitter:description"
                    content="Learn everything about BIS Scheme X Certification for Cranes in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://bis-certifications.com/bis-scheme-x-certification-for-cranes"
                />
            </Helmet>


            <CranesBreadcrumb />
            <CranesMainContent />
            <Services />
            <VideoSection />
            <Footer />
        </div>
    );
};

export default Cranes;

const CranesBreadcrumb = () => {
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
                                <BreadcrumbPage>BIS Scheme X for Cranes</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        </div>
    );
};

const CranesMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                {/* Left Side Content */}
                <CranesMainContentLeft />

                {/* Right Side Content */}
                <CranesMainContentRight />
            </div>
        </div>
    );
};

// ... existing code ...

const CranesMainContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    BIS Scheme X for Cranes
                </h1>

                {/* Introduction Paragraph 1 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    In the construction industry, cranes are invaluable. They perform heavy lifts, transports, and precision placements with mechanics. They operate in construction sites, ports, docks, manufacturing, and warehouses. Construction sites with heavy construction equipment like cranes can pose potential dangers and risks. This is why the Indian government has implemented strict guidelines and safety measures about crane operations, in order to reduce the severity of injuries and damages these construction equipment may cause.

                </p>

                {/* Introduction Paragraph 2 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    The Indian Bureau of Standards (BIS) aims to safeguard the Indian construction and heavy machinery industry while maintaining its safety on crane equipment. All crane types and their assemblies, sub-assemblies, and components must now be certified and are to be placed under the BIS Scheme X. With this, India aligns the safety of their country with other global counterparts and raises the confidence level in the cranes and machinery, both imported and exported.
                </p>

                {/* Introduction Paragraph 3 */}
                <p className="text-gray-600 text-base font-geist mb-6">
                    According to the Omnibus Technical Regulation issued by the Ministry of Heavy Industries, all manufacturers, domestic or foreign, are required to meet Indian Standards under Scheme X Certification by September 1, 2026, for cranes and assemblies/components.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Why BIS is Important Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Why BIS for Cranes is Important
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Cranes are widely used in:
                </p>

                {/* Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Building & infrastructure works</li>
                    <li>Seaports, shipping yards and other logistics centers</li>
                    <li>Factory and assembly plants</li>
                    <li>Metal mining and heavy material handling</li>
                    <li>Power plants and other industries</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Without BIS for Cranes, uncertified equipment can cause:
                </p>

                {/* Problems with Non-Certified Equipment */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>The mechanical breakdown and accidents.</li>
                    <li>Reduction in availability and increase in maintenance costs</li>
                    <li>Loss of eligibility for government projects</li>
                    <li>Workers and infrastructure are exposed to safety hazards</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The BIS mark for Cranes provides confidence to consumers and
                    regulators alike that a product adheres to India&apos;s robust quality
                    and safety norms.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* What is BIS Scheme X Certification Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    What is BIS Scheme X Certification for Cranes?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Scheme X Certification for Cranes under BIS is obligatory under the
                    BIS Conformity Assessment Regulations, 2018, which mandate product
                    certification for critical machinery.
                </p>

                <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Major Features of Scheme X for Crane:
                </h3>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>Required for both domestic and foreign manufacturers</li>
                    <li>
                        Applicable to all major categories of cranes & notified under Indian
                        Standards
                    </li>
                    <li>
                        Product testing, factory audits and ongoing compliance assessments
                        are mandated
                    </li>
                    <li>
                        Gives licence for the use of BIS mark on Cranes on certified
                        products
                    </li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* OTR Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    BIS OTR for Cranes
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The Omnibus Technical Regulation (OTR) for Cranes, which has been
                    notified by the Ministry of Heavy Industries in 2024, seeks to mandate
                    certification.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Deadline: All Manufacturers / Importers of Cranes need to get a BIS
                    License for Cranes under Scheme X latest by 01st September 2026.
                    Thereafter, non- certified cranes cannot be marketed or imported or
                    used in public tenders in India.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Advantages Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Advantages of BIS Certification to Cranes
                </h2>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>
                        Enhanced Safety: Certified cranes minimize mechanical failures and
                        accidents.
                    </li>
                    <li>
                        Market Advantage: Government bodies and corporate houses give
                        preference for BIS-certified cranes in e-tenders and mass projects.
                    </li>
                    <li>
                        Consumer & Contractor Confidence: BIS mark for Cranes creates faith
                        in quality and reliability.
                    </li>
                    <li>
                        Global Market Entry: For oversea manufactures, BIS License for
                        Cranes allows hassle-free penetration into the regulated Indian
                        market.
                    </li>
                    <li>
                        Compliance with Indian Law: Precludes penalties, forfeitures, and
                        debarment from government contracts.
                    </li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Types of Cranes Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Types of Cranes Included in Scheme X Certification
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Cranes are listed under the Scheme X certification are of various
                    types, e.g.:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Tower Cranes</li>
                    <li>Mobile Cranes</li>
                    <li>Gantry and Goliath Cranes</li>
                    <li>OH/BR Cranes</li>
                    <li>Crawler Cranes</li>
                    <li>Jib Cranes</li>
                    <li>Floating Cranes</li>
                    <li>Industrial and Workshop Cranes</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Each variant should be required to adhere to appropriate Indian
                    Standards (IS codes) like IS 4573:2020 for Power Driven Mobile Cranes
                    Specification and IS/ISO 15442:2012 for Cranes - Safety requirements
                    for loader cranes.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The equipment type shall comply with relevant Indian standards (IS
                    codes) for design, load carrying capacity, safety and performance.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Process Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Procedure to get BIS Licence for Cranes
                </h2>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
                    <li>
                        Identify Relevant IS Standards: Identify the Indian Standard
                        applicable to your crane type.
                    </li>
                    <li>
                        Testing at BIS-Recognized Labs: It is compulsory to perform safety
                        and efficacy testing.
                    </li>
                    <li>
                        Factory Inspection: BIS conducts inspections of production sites and
                        quality systems.
                    </li>
                    <li>
                        Application & Documentation: Present technical reports, test
                        results, and quality manuals.
                    </li>
                    <li>
                        BIS Licence on Cranes: Once approved, the manufacturer has the
                        privilege to apply the BIS mark for Cranes.
                    </li>
                    <li>
                        Ongoing Compliance: Regular audit and inspections ensure on going
                        compliance.
                    </li>
                </ul>

                <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Penalties for Non-Compliance
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    What happens if one does not follow OTR for Cranes and does not get
                    BIS Certification for Cranes by 1st September 2026?
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>Prohibit sales and import of uncertified cranes</li>
                    <li>Product seizures and hefty fines</li>
                    <li>Disqualify from government and PSU tenders</li>
                    <li>Long-term negative brand impact</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Conclusion Section */}
                <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Conclusion
                </div>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The enforcement of BIS Scheme X Certification will be a significant
                    milestone that will enhance safety, reliability and provide common
                    industrial standards in India.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    For Cranes manufacturers, importers, exporters, it is important to
                    have a BIS License for Cranes and can apply for the same through an
                    online application portal for BIS Registration of Cranes in order to
                    comply with the standard, build consumer trust, and also to avoid
                    potential conflicts with BIS or the Indian Government.
                </p>

                <AboutAuthor />
            </div>
        </div>
    );
};

// ... existing code ...

const CranesMainContentRight = () => {
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