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
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng"

const TinIngotBlog = () => {
    return (
        <div className="relative w-full">
            <Helmet>
                <title>BIS Certificate for Tin Ingot Under IS 26:2024</title>

                {/* Meta Description */}
                <meta name="description" content="BIS Certification for Tin Ingot under IS 26:2024 becomes mandatory from 17th October 2025. Learn what is BIS Certificate, BIS application process, required documents, BIS certificate cost, and how to get BIS certification in India with expert consultants." />

                {/* Meta Keywords */}
                <meta name="keywords" content="BIS Certification, BIS Certificate India, BIS for Tin Ingots, IS 26:2024" />
                <meta name="author" content="Sun Certifications India" />
                <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Tin Ingot BIS Certification under IS 26:2024 – Mandatory from 17th October 2025 | Complete Guide" />
                <meta property="og:description" content="From 17th October 2025, BIS Certification under IS 26:2024 is mandatory for all Tin Ingot manufacturers in India. Discover the BIS application process, documents, costs, and how consultants can help you get certified on time." />
                <meta property="og:url" content="https://bis-certifications.com/bis-certificate-for-tin-ingots" />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta name="twitter:title" content="Tin Ingot BIS Certification Mandatory from 17th Oct 2025 | IS 26:2024 Explained" />
                <meta name="twitter:description" content="From 17th October 2025, BIS Certification under IS 26:2024 is mandatory for all Tin Ingot manufacturers in India. Discover the BIS application process, documents, costs, and how consultants can help you get certified on time." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://bis-certifications.com/bis-certificate-for-tin-ingots" />
            </Helmet>

            <TinIngotBlogBreadcrumb />

            <TinIngotBlogMainContent />

            <Services />
            <VideoSection />
            <Footer />
        </div>
    )
}

export default TinIngotBlog

const TinIngotBlogBreadcrumb = () => {
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
                                        <Link to="/Blogs">
                                            Latest Blogs
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="flex-shrink-0">
                                    <SlashIcon />
                                </BreadcrumbSeparator>

                                <BreadcrumbItem className="flex-shrink-0">
                                    <BreadcrumbPage className="whitespace-nowrap">
                                        BIS Certification for Tin Ingot under IS 26:2024
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

const TinIngotBlogMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">

                {/* Left Side Content */}
                <TinIngotBlogMainContentLeft />

                {/* Right Side Content */}
                {/* <LatestBlogContentRight /> */}
                <ServicesRightSideContentEng />
            </div>
        </div>
    )
}


const TinIngotBlogMainContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">

            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">

                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    BIS Certification for Tin Ingot under IS 26:2024: Everything Manufacturers Need to Know
                </h1>

                {/* Introduction Paragraph 1 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    From 17th October 2025, the Bureau of Indian Standard (BIS) has made it mandatory for all manufacturers of Refined Zinc to obtain BIS Certification under IS 209:2024. This move is a part of the government&apos;s ongoing efforts to ensure product quality, safety, and compliance across industries. Whether you are a large-scale manufacturer or a small-scale producer, obtaining a BIS Certificate is now compulsory to continue manufacturing, selling, or distributing refined zinc in the Indian market.
                </p>

                {/* Introduction Paragraph 2 */}
                <p className="text-gray-600 text-base font-geist mb-6">
                    In this blog, we&apos;ll cover everything you need to know about BIS Certification for Refined Zinc —from its meaning, application process, required documents, costs involved, and the role of BIS consultants in India.
                </p>

                {/* What is BIS Certificate Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    What is BIS Certificate?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    A BIS Certificate is an official recognition granted by the Bureau of Indian Standard to manufacturers who comply with the specified Indian standards of quality and safety.
                </p>

                {/* Bullet Points */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
                    <li>
                        <span className="font-medium text-[#1e1e1e]">BIS Certification full form:</span> Bureau of Indian Standard Certification.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">BIS Certificate Meaning:</span> It proves that a product meets the standards of safety, reliability, and quality as defined by the BIS.
                    </li>
                    <li>
                        For refined zinc, this certification ensures that manufacturers adhere to the quality parameters defined under IS 209:2024.
                    </li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Without this certification, selling or distributing refined zinc in India will not be permitted after the compliance deadline.
                </p>



                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Next Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    Why Tin Ingots Need BIS Certification Now
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The introduction of IS 26:2024 underlines the government&apos;s intention to streamline product quality across industries. Tin ingots are widely used in:
                </p>

                {/* Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Electronics</li>
                    <li>Automotive components</li>
                    <li>Packaging</li>
                    <li>Industrial manufacturing</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Since these applications demand high purity and consistency, mandatory certification ensures manufacturers maintain strict quality control.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The BIS Notification about this change emphasizes that no manufacturer can market tin ingots without a BIS license after 17th October 2025.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* BIS Certification Process Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    BIS Certification Process for Tin Ingots
                </h2>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Getting certified may sound complex, but the BIS Certification process is structured and straightforward if followed step by step.
                </p>

                {/* Step 1 */}
                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 1: BIS Application
                </h3>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Manufacturers must first submit a BIS application either physically or via the BIS apply online portal.
                </p>

                {/* Step 2 */}
                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 2: Submission of Documents
                </h3>

                <p className="text-gray-600 text-base font-geist mb-4">
                    You&apos;ll need to submit all required BIS Certificate Documents such as:
                </p>

                {/* Document Requirements */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Manufacturing unit details</li>
                    <li>Product specifications and technical data</li>
                    <li>Factory license and GST registration</li>
                    <li>Test reports from BIS-approved labs</li>
                    <li>List of raw materials and suppliers</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    These Documents for BIS Certification form the backbone of your application.
                </p>

                {/* Step 3 */}
                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 3: Product Testing
                </h3>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The BIS requires manufacturers to test tin ingots at BIS-recognized laboratories. The results must meet the criteria under IS 26:2024.
                </p>

                {/* Step 4 */}
                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 4: Inspection by BIS Officer
                </h3>

                <p className="text-gray-600 text-base font-geist mb-6">
                    A BIS official will visit the manufacturing unit to verify compliance with standards.
                </p>

                {/* Step 5 */}
                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 5: Grant of BIS Certificate
                </h3>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Once everything is verified, BIS grants the certification, allowing you to continue producing and selling tin ingots in India.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    This structured BIS Certificate Process ensures only high-quality tin ingots reach the market.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* BIS Certificate Registration Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    BIS Certificate Registration and Online Application
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Thanks to digitalization, manufacturers can now easily BIS apply online through the official BIS portal. Online registration speeds up the BIS Certificate Registration process and minimizes manual paperwork.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Whether you&apos;re a domestic producer or an importer, registering online is the most efficient way to get approval.
                </p>

                {/* Cost of BIS Certification Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    Cost of BIS Certification
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    One of the most common concerns for businesses is the Cost of BIS Certificate. While charges vary depending on the product, here are the typical expenses:
                </p>

                {/* Cost Details */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>BIS license cost: Includes application fees, audit charges, and registration fees, also covers product testing, consultant services, and government fees.</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    For small-scale manufacturers, hiring BIS Consultants in India can help minimize unnecessary expenses and ensure faster approval.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* BIS Consultants Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    BIS Consultants in Delhi and Across India
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Many manufacturers find the BIS process confusing, especially when dealing with multiple forms and strict deadlines. This is where BIS Consultants in Delhi and other cities step in.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    A professional BIS Agent or consultant can:
                </p>

                {/* Consultant Services */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Guide through the BIS Certification Process</li>
                    <li>Help prepare accurate BIS Certification Documents</li>
                    <li>Assist in filing the BIS Application</li>
                    <li>Provide support during audits and inspections</li>
                    <li>Ensure timely approval before the compliance deadline</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Hiring experienced BIS Consultants in India not only saves time but also reduces the risk of application rejection.
                </p>

                {/* Key Takeaways Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    Key Takeaways from BIS Notification
                </h2>

                {/* Key Points */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
                    <li>BIS Notification states that Tin Ingots must comply with IS 26:2024 from 17th October 2025.</li>
                    <li>Applicable to all scale manufacturers, big or small.</li>
                    <li>Non-compliance can lead to penalties, cancellation of business licenses, or restrictions on sales.</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Manufacturers should act early to avoid last-minute rush.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Conclusion Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    Conclusion
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The mandatory BIS Certification for Tin Ingots under IS 26:2024 is a crucial step in ensuring product quality and consumer safety. From understanding What is BIS Certificate to navigating the BIS Certificate Process and managing the Cost of BIS Certification, every manufacturer must stay informed and prepared.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Hiring experienced BIS Consultants in India or a reliable BIS Agent can simplify the process, help avoid errors, and ensure you meet the BIS Notification deadline without delays.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    If you are a tin ingot manufacturer, don&apos;t wait until October 2025. Start your BIS Certificate Registration today and stay compliant with the Bureau of Indian Standard regulations.
                </p>

                {/* Featured Image */}
                <div className="mb-6 flex justify-center">
                    <img
                        src="/blogImages/BISCertificationforTinIngots.png"
                        alt="BIS Certification for Tin Ingots IS 26:2004 mandatory from 17 October 2025 for micro, small, medium, large manufacturers and importers. Sun Certifications India consultancy services for BIS certificate, ISI mark and Bureau of Indian Standards compliance in India."
                        title="BIS Certification for Tin Ingots IS 26:2004"
                        className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
                    />
                </div>

                {/* PDF Viewer Section */}
                <div className="mt-8 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
                    <iframe
                        src="/BIS-Product-Pdf/IS-26-2024-Sun-Certifications-India.pdf"
                        title="BIS Certificate for Tin Ingot - IS 26:2024 PDF"
                        className="w-full h-[800px] bg-white"
                        style={{
                            boxShadow:
                                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                    />
                </div>

                <AboutAuthor />

            </div>
        </div>
    )
}

const LatestBlogContentRight = () => {
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
    const currentPageName = "Tin Ingot Blog Page";

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