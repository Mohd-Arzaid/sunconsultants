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
  
  const Compressors = () => {
    return (
      <div className="relative w-full">
               <Helmet>
          <title>BIS Scheme X Certification for Compressors</title>

          {/* Meta Description */}
          <meta
            name="description"
            content="BIS scheme X certification for compressors, assemblies, or components is mandatory under the Omnibus Technical Regulation Order, 2024 enhancing product safety, standardization in India"
          />

          {/* Meta Keywords */}
          <meta
            name="keywords"
            content="BIS Certification for Compressors, BIS Scheme X Certification for Compressors, Scheme X certification for Compressors, BIS for Compressors, OTR for Compressors"
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
            content="BIS Scheme X Certification for Compressors in India | Complete Guide"
          />
          <meta
            property="og:description"
            content="Learn everything about BIS Scheme X Certification for compressors in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
          />
          <meta
            property="og:url"
            content="https://bis-certifications.com/bis-scheme-x-certification-for-compressors"
          />
          <meta property="og:site_name" content="Sun Certifications India" />
          <meta property="og:type" content="article" />

          {/* Twitter Tags */}
          <meta
            name="twitter:title"
            content="BIS Scheme X Certification for Compressors in India | Complete Guide"
          />
          <meta
            name="twitter:description"
            content="Learn everything about BIS Scheme X Certification for compressors in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
          />

          {/* Canonical URL */}
          <link
            rel="canonical"
            href="https://bis-certifications.com/bis-scheme-x-certification-for-compressors"
          />
        </Helmet>
  
        <CompressorsBreadcrumb />
        <CompressorsMainContent />
        <Services />
        <VideoSection />
        <Footer />
      </div>
    );
  };
  
  export default Compressors;
  
  const CompressorsBreadcrumb = () => {
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
                  BIS Scheme X for Compressors
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    );
  };
  
  const CompressorsMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <CompressorsMainContentLeft />
  
          {/* Right Side Content */}
          <CompressorsMainContentRight />
        </div>
      </div>
    );
  };
  
  // ... existing code ...
  
  // ... existing code ...
  
  // ... existing code ...

const CompressorsMainContentLeft = () => {
    return (
        <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
            {/* Blog Content */}
            <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
                
                {/* Main Heading */}
                <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
                    BIS Scheme X for Compressors
                </h1>

                {/* Introduction Paragraph 1 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    Compressors are important equipment in various industries such as refrigeration, HVAC, petrochemical, manufacturing, food processing and pharmaceutical applications. The burgeoning Indian industry is growing at a brisk pace and quality and safety of compressors is of utmost concern.
                </p>

                {/* Introduction Paragraph 2 */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    To ensure the same, the Bureau of Indian Standards (BIS) has implemented the BIS Certification for Compressors under Scheme X Certification. This certification ensures that every compressor introduced to the Indian region complies with specific safety, performance, and efficiency standards.
                </p>

                {/* Introduction Paragraph 3 */}
                <p className="text-gray-600 text-base font-geist mb-6">
                    In this guide, we provide BIS Scheme X certification for Compressors and OTR for Compressors, and how manufacturers can get the BIS License for Compressors to use the BIS Mark for Compressors in India.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Why BIS is Important Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Why BIS for Compressors is Important
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Compressors are used in:
                </p>

                {/* Usage Areas */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Airconditioning/refrigeration systems</li>
                    <li>Gas transmission lines and storage.</li>
                    <li>Oil & gas process facilities</li>
                    <li>Power generating installations and chemical industrial facilities</li>
                    <li>Production of food and beverages</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Each type should satisfy applicable Indian Standards (IS codes) such as IS 17093:2019.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    In the absence of BIS for Compressors, inferior or unmarked products could lead to:
                </p>

                {/* Problems with Non-Certified Equipment */}
                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>Breakdown, maintenance periods and idle time</li>
                    <li>Wasteful energy production against high energy utility bills</li>
                    <li>Safety risks, such as overheating or leaks</li>
                    <li>Loss of reputation and mon­e­tary dam­age</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Therefore the BIS Mark for Compressors in respect of which ISI certification has been done is an assurance of safety, reliability and quality.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* What is BIS Scheme X Certification Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    What is BIS Scheme X Certification for Compressors?
                </h2>

                <p className="text-gray-600 text-base font-geist mb-6">
                    BIS Scheme X Certification for Compressors is the conformity assessment scheme in India under the BIS Conformity Assessment Regulations, 2018. It is to keep a check that both domestic and foreign manufacturers adhere to the Indian quality.
                </p>

                <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Features of Scheme X Certificate for Compressors:
                </h3>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>Compulsory for all the manufacturers (both Indian and foreign)</li>
                    <li>Covers various types of compressors notified under Indian Standards</li>
                    <li>Features third-party testing, factory inspections and periodic compliance checks</li>
                    <li>Permits use of BIS Mark for Compressors on the products of the licensee as certified products</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* OTR Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    BIS OTR for Compressors
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    The Omnibus Technical Regulation (OTR) for Compressors released by the Ministry of Heavy Industries in 2024 mandates Scheme X Certification for Compressors.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Deadline for Compliance: By 1st September 2026, all the manufacturers and importers are required to have a valid BIS License for Compressors under Scheme – X. Any non-compliance will lead to total prohibition on sales and imports of un-certified compressors in India.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Advantages Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Advantages of BIS Certification for Compressors
                </h2>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>Safety & Performance: Helps to Avoid hazards like leaks, overheat and machine failure.</li>
                    <li>Market Access: Compressors certified by BIS can be used in public tenders and government projects.</li>
                    <li>Consumer Confidence: The BIS Mark for Compressors provides a buyer a confidence that the product is as per Indian Standards.</li>
                    <li>Competitive Advantage: Only certified brands gain more trust and market preference.</li>
                    <li>Accessible Market Entry of International Brands: A BIS License for Compressors facilitates easy access into the Indian market to foreign manufacturers.</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Types of Compressor Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Types of Compressor Covered In BIS Scheme X
                </h2>

                <p className="text-gray-600 text-base font-geist mb-4">
                    BIS Scheme X certification is available for various types of compressors such as:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
                    <li>Positive-Displacement Reciprocating Compressors</li>
                    <li>Rotary Compressors</li>
                    <li>Screw Compressors</li>
                    <li>Turbo Compressors</li>
                    <li>Axial Flow Compressor</li>
                    <li>Industrial and Portable Air Compressors</li>
                    <li>Air conditioning and Refrigeration compressors</li>
                </ul>

                <p className="text-gray-600 text-base font-geist mb-6">
                    The different techniques of compressors shall conform to the respective Indian Standards, which lay down the requirements for the performance, energy consumption, quality of material, and safety.
                </p>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Step-by-Step Process Section */}
                <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
                    Step-by-Step BIS License for Compressors – How to Apply?
                </h2>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
                    <li>Identify Applicable Standards: Find the appropriate IS code of your compressor.</li>
                    <li>Product Testing: Have compulsory performance, safety and energy efficiency tests at BIS-recognised labs'.</li>
                    <li>Factory Inspection: BIS personnel perform on-site visits to verify manufacturing procedures and quality control methods.</li>
                    <li>Documentation & Application: Include Test reports, technical specifications and Quality manuals along with your BIS application.</li>
                    <li>Issue of BIS Licence for Compressors: When accepted, the manufacturer is given the right to use BIS Mark for Compressors.</li>
                    <li>Ongoing Compliance: Regular surveillance audit & product testing is carried out by BIS for continued compliance.</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                 <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>


                <p className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
                    Manufacturers not getting a BIS Certification for Compressors by till 1st September 2026 under the OTR for Compressors will be subject to:
                </p>

                <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
                    <li>Sales/Import of non-type tested compressors not to be allowed</li>
                    <li>Forfeiture of non-compliant goods and business penalties</li>
                    <li>Ban from government tenders and PSU deals</li>
                    <li>Indian market loses confidence</li>
                </ul>

                {/* Separator Line */}
                <div className="h-px w-full bg-gray-300 my-6"></div>

                {/* Conclusion Section */}
                <p className="text-gray-600 text-base font-geist mb-4">
                    <span className="font-medium text-[#1e1e1e]">Conclusion:</span> BIS Scheme X Certification for Pumps and Liquid Elevators with OTR 2024 to be enforced; a milestone in India standardization of Industry.
                </p>

                <p className="text-gray-600 text-base font-geist mb-4">
                    Implementation of BIS Scheme X Certification for Compressors by OBR for Compressors (2024) is a significant step forward for industrial safety, energy efficiency, and quality assurance in India.
                </p>

                <p className="text-gray-600 text-base font-geist mb-6">
                    Manufacturers, importers, and exporters that go through the process of getting BIS Certificate for Compressors, and securing BIS certificate for Compressors earn the right to be a part of this market by ensuring that the products that they are offering to the Indian consumer are deemed safe to use, have less environmental risk and is of good quality.
                </p>

                <AboutAuthor />
            </div>
        </div>
    );
};

// ... existing code ...
  
  // ... existing code ...
  
  // ... existing code ...
  
  const CompressorsMainContentRight = () => {
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
              className={`mt-4 p-3 rounded-lg text-sm font-geist ${
                submitStatus.type === "success"
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
  