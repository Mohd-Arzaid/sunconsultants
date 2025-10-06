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

const IndonesiaBlog = () => {
    return (
        <div className="relative w-full">
            <Helmet>
                <title>BIS Certification in Indonesia</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="As a leading BIS FMCS consultant in Indonesia, Sun Certification India helps manufacturers of different products listed in the mandatory BIS FMCS scheme in securing a BIS license for their products hassle-free."
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="BIS Certification in Indonesia, BIS Certification Services in Indonesia, FMCS Certification Indonesia, BIS Compliance Indonesia, ISI Mark Certification Indonesia, CRS Certification for Electronics, WPC Approval Indonesia, EPR Authorization, BIS FMCS Indonesia"
                />
                <meta name="author" content="Sun Certifications India" />
                <meta
                    name="publisher"
                    content="Dhruv Aggarwal, Head of Operations at Sun Certification India"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="BIS Certification in Indonesia" />
                <meta
                    property="og:description"
                    content="As a leading BIS FMCS consultant in Indonesia, Sun Certification India helps manufacturers of different products listed in the mandatory BIS FMCS scheme in securing a BIS license for their products hassle-free."
                />
                <meta
                    property="og:url"
                    content="https://bis-certifications.com/bis-certification-in-indonesia"
                />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta name="twitter:title" content="BIS Certification in Indonesia" />
                <meta
                    name="twitter:description"
                    content="As a leading BIS FMCS consultant in Indonesia, Sun Certification India helps manufacturers of different products listed in the mandatory BIS FMCS scheme in securing a BIS license for their products hassle-free."
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://bis-certifications.com/bis-certification-in-indonesia"
                />
            </Helmet>

            <IndonesiaBlogBreadcrumb />

            <IndonesiaBlogMainContent />

            <Services />
            <VideoSection />
            <Footer />
        </div>
    );
};

export default IndonesiaBlog;

const IndonesiaBlogBreadcrumb = () => {
    return (
        <div className="absolute md:top-5 top-3 left-0 w-full z-30">
            <div className="max-w-[80rem] mx-auto px-4">
                <div className="w-full overflow-x-auto scrollbar-hide font-inter">
                    <div className="w-fit min-w-full">
                        <Breadcrumb>
                            <BreadcrumbList className="flex-nowrap">
                                <BreadcrumbItem className="flex-shrink-0">
                                    <BreadcrumbLink asChild>
                                        <Link to="/">Home</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="flex-shrink-0">
                                    <SlashIcon />
                                </BreadcrumbSeparator>

                                <BreadcrumbItem className="flex-shrink-0">
                                    <BreadcrumbLink asChild>
                                        <Link to="/Blogs">Latest Blogs</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="flex-shrink-0">
                                    <SlashIcon />
                                </BreadcrumbSeparator>

                                <BreadcrumbItem className="flex-shrink-0">
                                    <BreadcrumbPage className="whitespace-nowrap">
                                        BIS Certification in Indonesia
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    );
};

const IndonesiaBlogMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                {/* Left Side Content */}
                <IndonesiaBlogMainContentLeft />

                {/* Right Side Content */}
                <IndonesiaBlogContentRight />
            </div>
        </div>
    );
};

const IndonesiaBlogMainContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    BIS Certification in Indonesia
                </h1>

                {/* Introduction Paragraph */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    In today&apos;s global economy, international trade is no longer just
                    about finding buyers and setting up supply chains. It is increasingly
                    about compliance, certification, and meeting the regulatory
                    expectations of the destination country. For manufacturers in
                    Indonesia aiming to expand into India, one of the most critical
                    compliance requirements is the Bureau of Indian Standards (BIS)
                    Certification.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    India, one of the world&apos;s fastest-growing economies, presents a
                    massive opportunity for Indonesian exporters across diverse
                    industries—electronics, automotive, textiles, chemicals, toys, and
                    more. But without BIS certification, products from Indonesia cannot be
                    legally imported, sold, or distributed in the Indian market.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Understanding BIS FMCS Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Understanding BIS FMCS
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The Bureau of Indian Standards (BIS) is India&apos;s national
                    standards body, responsible for maintaining quality, safety, and
                    reliability in products available in the Indian market. BIS
                    certification is mandatory for a wide range of product categories,
                    especially those that directly impact consumer health, safety, and the
                    environment.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    For foreign manufacturers, the certification framework operates under
                    the Foreign Manufacturers Certification Scheme (FMCS). Administered as
                    part of the BIS Act, 2016 and the Conformity Assessment Regulations,
                    2018, FMCS enables overseas manufacturers to obtain a BIS license and
                    mark their products with the ISI mark, demonstrating compliance with
                    Indian standards.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    This ISI mark is more than a symbol—it is an assurance to Indian
                    consumers, regulators, and trade partners that a product meets
                    stringent safety and quality benchmarks. For Indonesian exporters,
                    FMCS certification is both a legal requirement and a strategic
                    advantage, as it provides smooth access to one of the largest consumer
                    markets in the world.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Why BIS Certification is Essential Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Why BIS Certification is Essential for Indonesian Exporters
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Indonesia has built a strong reputation in industries such as
                    electronics, automotive components, textiles, chemicals, furniture,
                    and consumer products. With India emerging as a natural trading
                    partner due to its market size and economic growth, demand for
                    Indonesian goods is rising. However, BIS certification is the gateway
                    to entry.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Without BIS approval, Indonesian products may be blocked at Indian
                    customs, face regulatory penalties, or lose credibility with
                    distributors and end-users. With certification in place, however,
                    Indonesian exporters enjoy legal authorization to sell, smoother
                    customs clearance, and greater consumer trust.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Moreover, in a competitive market like India, carrying the ISI mark
                    enhances brand recognition. It assures Indian buyers that Indonesian
                    goods are not just competitively priced but also meet high safety and
                    quality standards. This creates long-term opportunities for Indonesian
                    companies to establish themselves as reliable and trusted suppliers.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* The Role of AIR Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    The Role of an Authorized Indian Representative (AIR)
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    A unique feature of the BIS FMCS certification process is the
                    requirement for an Authorized Indian Representative (AIR). Since BIS
                    is based in India, it requires a local point of contact who can
                    represent the foreign manufacturer.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The AIR acts as the communication bridge between BIS and the overseas
                    company, handling document submissions, coordinating inspections,
                    managing compliance obligations, and addressing queries from
                    regulators.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    For Indonesian exporters, selecting and managing an AIR can be
                    challenging. This is where Sun Certification India adds value. The Sun
                    Certification India not only guides manufacturers in appointing a
                    competent AIR but also ensures that ongoing regulatory
                    responsibilities are handled smoothly. This reduces risks and avoids
                    delays during the certification process.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Challenges Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Challenges Indonesian Exporters Face with BIS Certification
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Although BIS certification is crucial, the process is often viewed as
                    complicated by foreign manufacturers. Indonesian companies, despite
                    their industrial strengths, frequently encounter obstacles such as:
                </p>

                {/* Bullet Points with h3 */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-3 mb-4">
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Differences between Indonesian/EU standards and Indian standards,
                        </span>{" "}
                        requiring additional testing or design modifications.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Extensive documentation requirements,
                        </span>{" "}
                        where even minor errors or missing details can delay approvals.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Mandatory product testing in BIS-recognized Indian laboratories,
                        </span>{" "}
                        which can be logistically challenging.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Factory inspections by BIS officers,
                        </span>{" "}
                        which require thorough preparation to avoid compliance issues.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Language and procedural barriers,
                        </span>{" "}
                        since regulatory processes in India may differ significantly from
                        those in Indonesia.
                    </li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Without expert guidance, these challenges can lead to rejection,
                    higher costs, and missed business opportunities.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Industries Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Industries in Indonesia That Require BIS Certification
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The demand for BIS certification covers a wide range of sectors where
                    Indonesian manufacturers are already active. Some of the most
                    prominent industries include:
                </p>

                {/* Bullet Points */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Electronics and IT products,
                        </span>{" "}
                        such as smartphones, adapters, LEDs, and batteries, where safety and
                        performance standards are strictly enforced.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Automotive components,
                        </span>{" "}
                        including tires, batteries, and braking systems, where compliance
                        with Indian safety norms is mandatory.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Textiles and furnishings,
                        </span>{" "}
                        especially products like upholstery fabrics and flame-retardant
                        materials that must meet specific Indian standards.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Toys and childcare products,
                        </span>{" "}
                        where safety is paramount, and BIS approval ensures consumer
                        confidence.
                    </li>
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            Chemicals and industrial products,
                        </span>{" "}
                        which often require certification to guarantee safe use and
                        compliance with environmental regulations.
                    </li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    By working with a consultant that understands these industry-specific
                    requirements, Indonesian exporters can avoid costly missteps and
                    ensure compliance on the first attempt.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Long-Term Benefits Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Long-Term Benefits of BIS Certification
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    While many Indonesian exporters see BIS certification as a regulatory
                    hurdle, it actually provides long-term strategic benefits. Once
                    certified, companies gain:
                </p>

                {/* Bullet Points */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
                    <li>
                        Legal entry into one of the world&apos;s fastest-growing markets.
                    </li>
                    <li>
                        Enhanced brand trust among Indian distributors, retailers, and
                        consumers.
                    </li>
                    <li>Competitive advantage over uncertified rivals.</li>
                    <li>Smooth customs clearance and fewer trade disruptions.</li>
                    <li>
                        Increased acceptance on e-commerce platforms and by major Indian
                        retailers.
                    </li>
                    <li>
                        Sustainable business growth, backed by regulatory compliance and
                        consumer confidence.
                    </li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The ISI mark is recognized throughout India as a symbol of safety and
                    reliability. For Indonesian exporters, carrying this mark strengthens
                    credibility and ensures a stronger foothold in the Indian marketplace.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Why Sun Certifications India Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Why Sun Certifications India is the Trusted Partner in Indonesia
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    What sets Sun Certification India apart is its holistic approach. We
                    offer not just about paperwork or testing coordination; it is about
                    enabling Indonesian manufacturers to succeed in India&apos;s dynamic
                    market.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The firm provides strategic advice, prepares businesses for audits,
                    ensures error-free documentation, and manages every regulatory
                    interaction on behalf of its clients. Its transparent pricing model
                    means no hidden costs, while its industry-specific expertise ensures
                    that certification is achieved quickly and effectively.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Most importantly, Sun Certification India continues to support
                    businesses even after certification, helping with renewals, expansions
                    in licensing scope, and regulatory updates. This long-term partnership
                    approach makes it the most reliable BIS FMCS partner in Indonesia.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* How Sun Certifications India Supports Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    How Sun Certifications India Supports Indonesian Businesses
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Sun Certification India has established itself as a trusted partner
                    because of its deep regulatory expertise, hands-on support, and
                    industry-specific approach. We understand the nuances of Indian
                    compliance requirements and offers end-to-end solutions tailored to
                    Indonesian exporters.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    From the initial stage of determining whether a product requires BIS
                    certification to the final step of license issuance, Sun Certification
                    India provides complete assistance. The firm helps with documentation,
                    testing coordination, AIR nomination, factory audit preparation, and
                    even post-certification renewals.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    For Indonesian businesses, this means having a single reliable partner
                    who manages the entire process, eliminates uncertainties, and ensures
                    faster market entry. We have established relationships with BIS
                    authorities and BIS-recognized laboratories that also help in reducing
                    turnaround times.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Conclusion Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Conclusion
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    For Indonesian manufacturers, India is a market full of opportunities.
                    Its growing middle class, rapid industrialization, and expanding
                    retail and e-commerce sectors create enormous potential for exports.
                    But to unlock these opportunities, compliance with Indian standards is
                    non-negotiable.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    BIS certification under the FMCS scheme is the key to entering India
                    successfully. It not only fulfills regulatory requirements but also
                    builds consumer trust, enhances brand credibility, and ensures smooth
                    trade operations.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    By choosing Sun Certification India as their trusted partner,
                    Indonesian businesses can turn the often complex BIS certification
                    journey into a smooth and strategic process. With unmatched expertise,
                    industry-specific guidance, and end-to-end support, Sun Certification
                    India ensures that Indonesian manufacturers are not just certified,
                    but also set up for long-term success in the Indian market.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    For any Indonesian exporter looking to expand into India, BIS
                    certification is not just a compliance step—it is a business enabler.
                    And with Sun Certification India by your side, that journey becomes
                    faster, simpler, and far more effective.
                </p>

                <AboutAuthor />
            </div>
        </div>
    );
};

const IndonesiaBlogContentRight = () => {
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
    const currentPageName = "Indonesia BIS Certification Blog Page";

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