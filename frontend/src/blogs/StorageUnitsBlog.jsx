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
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";

const StorageUnitsBlog = () => {
    return (
        <div className="relative w-full">
            <Helmet>
                <title>BIS Certificate for Storage Units Under IS 17634:2022</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="BIS License for Storage Units under IS 17634:2022. Learn what is BIS Certificate, BIS application process, required documents, BIS certificate cost, and how to get BIS certificate in India with expert consultants."
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="BIS Certification, BIS Certificate India, BIS License for Storage Units , IS 17634:2022"
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
                    content="Storage Units BIS Certification under IS 17634:2022 - Complete Guide"
                />
                <meta
                    property="og:description"
                    content="BIS License for Storage Units under IS 17634:2022. Learn what is BIS Certificate, BIS application process, required documents, BIS certificate cost, and how to get BIS certificate in India with expert consultants."
                />
                <meta
                    property="og:url"
                    content="https://bis-certifications.com/bis-license-for-storage-units-Indian-bis"
                />
                <meta property="og:site_name" content="Sun Certifications India" />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta
                    name="twitter:title"
                    content="BIS Certification for Storage Units Under |IS 17634:2022 | Completely Explained"
                />
                <meta
                    name="twitter:description"
                    content="BIS License for Storage Units under IS 17634:2022. Learn what is BIS Certificate, BIS application process, required documents, BIS certificate cost, and how to get BIS certificate in India with expert consultants."
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://bis-certifications.com/bis-license-for-storage-units-Indian-bis"
                />
            </Helmet>

            <StorageUnitsBlogBreadcrumb />

            <StorageUnitsBlogMainContent />

            <Services />
            <VideoSection />
            <Footer />
        </div>
    );
};

export default StorageUnitsBlog;

const StorageUnitsBlogBreadcrumb = () => {
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
                                        BIS Certification for Storage Units under IS 17634:2022
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

const StorageUnitsBlogMainContent = () => {
    return (
        <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
            <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
                {/* Left Side Content */}
                <StorageUnitsBlogMainContentLeft />

                {/* Right Side Content */}
                {/* <LatestBlogContentRight /> */}
                <ServicesRightSideContentEng />
            </div>
        </div>
    );
};

const StorageUnitsBlogMainContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    BIS Certification for Storage Units under IS 17634:2022 – Complete
                    Guide for Manufacturers
                </h1>

                {/* Introduction Paragraph 1 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    Storage units—ranging from wardrobes and cabinets to filing systems
                    and industrial lockers—are essential furniture items in homes,
                    offices, and commercial establishments. With growing demand in
                    residential real estate, offices, schools, hotels, and retail spaces,
                    the need for safe, durable, and high-quality storage furniture is
                    higher than ever.
                </p>

                {/* Introduction Paragraph 2 */}
                <p className="text-gray-600 text-base font-geist mb-6">
                    To ensure consumer safety and standardized product quality, the Bureau
                    of Indian Standards (BIS) has made it mandatory for storage unit
                    manufacturers to obtain a BIS Certificate under IS 17634:2022.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    This blog will explain everything manufacturers need to know about BIS
                    Certification for storage units—its meaning, process, documents
                    required, cost of BIS Certification, and the role of BIS Consultants
                    in India.
                </p>

                {/* What is BIS Certificate Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    What is BIS?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The BIS full form is Bureau of Indian Standards. It is the national
                    standards body of India, responsible for maintaining product quality
                    and consumer safety through standardization.
                </p>

                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    What is BIS Certificate?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    A BIS Certificate is an official license issued by BIS that confirms a
                    product complies with BIS Standards.
                </p>

                {/* Bullet Points */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
                    <li>
                        <span className="font-medium text-[#1e1e1e]">
                            BIS Certificate Meaning:{" "}
                        </span>{" "}
                        Proof that a product meets the required safety, durability, and
                        performance benchmarks.
                    </li>
                    <li>
                        For storage units, this ensures compliance with IS 17634:2022,
                        covering strength, load capacity, and ergonomic design.
                    </li>
                    <li>
                        Certified products carry the BIS Logo or BIS Mark (ISI Mark), known
                        as the BIS Certification Mark, which assures customers of quality.
                    </li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Without this Bureau of Indian Standards License (BIS License/BIS
                    Licence), manufacturers cannot legally sell storage furniture in
                    India.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Next Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    Overview of IS 17634:2022
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The standard IS 17634:2022 specifies the design, quality, and safety
                    requirements for storage units. It applies to fully manufactured as
                    well as ready-to-assemble products (tested after assembly).
                </p>
                <p className="text-gray-600 text-base font-geist mb-4">
                    Key highlights include:
                </p>

                {/* Usage Areas */}
                <ul className="space-y-1 mb-1">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Structural Integrity & Load Capacity-  Storage units must hold their intended weight without
                                collapsing.
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Material Quality & Safety – Only durable and non-toxic materials are permitted.
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Ergonomic Design – Smooth edges, anti-tipping mechanisms, and secure locks must be provided.
                            </h3>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Testing & Quality Control – Units are tested for strength, load-bearing, and durability before receiving a BIS License.
                            </h3>
                        </div>
                    </li>
                </ul>



                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* BIS Certification Process Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    End-Use Applications of BIS-Certified Storage Units
                </h2>



                <ul className="space-y-1 mb-1">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Residential – Wardrobes, cupboards, kitchen cabinets
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Office – Filing cabinets, drawer units, document storage
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Industrial & Retail – Heavy-duty storage and shelving
                            </h3>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Institutions – School lockers, library cabinets
                            </h3>
                        </div>
                    </li>

                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Hospitality – Storage in hotels, hostels, and commercial spaces
                            </h3>
                        </div>
                    </li>
                </ul>





                {/* Step 3 */}
                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    BIS Certification Process for Storage Units
                </h3>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The BIS Certification Process in India for storage furniture under IS 17634:2022 follows a systematic approach:
                </p>

                {/* Step 4 */}
                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 1: BIS Application
                </h3>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Manufacturers must file a BIS Application either offline or through the BIS Certificate Online portal (BIS apply online).
                </p>

                {/* Step 5 */}
                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 2: Submission of Documents
                </h3>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Manufacturers must prepare all BIS Certification Documents such as:
                </p>


                <ul className="space-y-1 mb-1">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Business license & GST registration
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Factory license & production details
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Product specifications & design details
                            </h3>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                List of raw materials and suppliers
                            </h3>
                        </div>
                    </li>

                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Test reports from BIS-approved labs
                            </h3>
                        </div>
                    </li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    These Documents for BIS Certification are critical for approval.
                </p>

                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 3: Product Testing
                </h3>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Samples of storage units are tested in BIS-recognized laboratories to evaluate design, strength, durability, and load-bearing capacity.
                </p>

                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 4: Factory Inspection
                </h3>

                <p className="text-gray-600 text-base font-geist mb-4">
                    A BIS officer visits the manufacturing unit to verify compliance with BIS Standards.
                </p>

                <h3 className="text-lg font-geist font-semibold text-[#1e1e1e] mb-3">
                    Step 5: Grant of BIS Certificate
                </h3>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Once all checks are complete, BIS issues a BIS License allowing the manufacturer to use the BIS Certification Mark (ISI Logo) on storage units.
                </p>
                <p className="text-gray-600 text-base font-geist mb-4">
                    This BIS Product Certification ensures only safe and reliable storage furniture reaches the Indian market.
                </p>








                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* BIS Certificate Registration Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    Cost of BIS Certification
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The BIS Certificate Cost varies depending on multiple factors such as product category, testing charges, and inspection fees. Typical expenses include:
                </p>

                <ul className="space-y-1 mb-1">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Application fees
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Audit and inspection costs
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Renewal charges for BIS License
                            </h3>
                        </div>
                    </li>



                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    For small manufacturers, hiring a BIS Registration Consultant or a professional BIS Agent helps minimize unnecessary expenses and ensures smooth approval.
                </p>


                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Cost of BIS Certification Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    BIS Consultants in India
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The BIS Certification Process India can be complex for new manufacturers. This is why many businesses rely on BIS Certification Consultants.
                </p>



                <p className="text-gray-600 text-base font-geist mb-6">
                    A BIS Consultant in Delhi or other regions can help with:
                </p>


                <ul className="space-y-1 mb-1">
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Preparing BIS Certificate Documents
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Filing the BIS Application accurately
                            </h3>

                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Coordinating with BIS and labs
                            </h3>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Guiding through inspections and audits
                            </h3>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <div>
                            <h3 className="text-gray-600 text-base font-geist mb-4">
                                Ensuring timely approval of the Bureau of Indian Standards License
                            </h3>
                        </div>
                    </li>

                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    With professional guidance, manufacturers can avoid delays and reduce the overall Cost of BIS Certification.
                </p>







                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* BIS Consultants Section */}
                <h2 className="text-xl font-geist font-bold text-[#1e1e1e] mb-4">
                    Conclusion
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The BIS Certification full form (Bureau of Indian Standards Certification) represents safety, quality, and trust. For manufacturers of storage units, obtaining a BIS License under IS 17634:2022 is not just a regulatory requirement but also a market advantage.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Whether you’re wondering how to get BIS Certification in India or looking for assistance with BIS Certificate Registration, hiring professional BIS Consultants in India is the smartest way forward.
                </p>
                <p className="text-gray-600 text-base font-geist mb-4">
                    Don’t wait until the BIS Notification deadline—start your BIS Certificate Online application today and ensure your products proudly display the BIS Logo (BIS Mark), building trust and credibility in the competitive Indian market.
                </p>


                {/* Featured Image */}
                <div className="mb-6 flex justify-center">
                    <img
                        src="/blogImages/BISLicenseforStorageUnits.png"
                        alt="BIS License for Storage Units IS 17634:2022"
                        title="BIS Certificate for Storage Units IS 17634:2022"
                        className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
                    />
                </div>






                <AboutAuthor />
            </div>
        </div>
    );
};

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
    );
};