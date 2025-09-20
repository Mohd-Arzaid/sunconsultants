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
import CDSCOContentRight from "@/components/manual/CDSCOContentRight";

const PowerSemiconductors = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Scheme X Certification for Power Semiconductor Converters
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification applies to all types of power semiconductor converters and their assemblies/sub-assemblies/components to ensure quality and safety in India"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Power Semiconductor Converters, BIS Scheme X Certification for Power Semiconductor Converters, Scheme X certification for Power Semiconductor Converters, BIS for Power Semiconductor Converters, OTR for Power Semiconductor Converters"
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
          content="BIS Scheme X Certification for Power Semiconductor Converters in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Power Semiconductor Converters in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-power-semiconductor-converters"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Power Semiconductor Converters in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Power Semiconductor Converters in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-power-semiconductor-converters"
        />
      </Helmet>

      <PowerSemiconductorsBreadcrumb />
      <PowerSemiconductorsMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default PowerSemiconductors;

const PowerSemiconductorsBreadcrumb = () => {
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
                  BIS Scheme X for Power Semiconductors Converters
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PowerSemiconductorsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PowerSemiconductorsMainContentLeft />

        {/* Right Side Content */}
        {/* <PowerSemiconductorsMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const PowerSemiconductorsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X for Power Semiconductors Converters
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Power-Semiconductor-Converter.png"
            alt="BIS Scheme X Certification For Power Semiconductor Converters"
            title="BIS Scheme X license for Power Semiconductor Converter"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Power semiconductor converters allow the effective execution and
          modification of electrical power from one form to the other across
          various applications. These applications range from renewables,
          electric vehicles, industrial automation, and consumer electronics.
          They serve as the base for the electrical and electronic devices and
          equipment. Due to the importance and growing significance of the
          devices in the energy and industrial sectors of the country, the
          Bureau of Indian Standards (BIS) has incorporated the power
          semiconductor converters certification under the Scheme X
          certification framework.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          As per the order given by the Ministry of Heavy Industries, there is
          an expectation from all types of manufacturers, regardless of whether
          they operate locally or abroad, to comply with the BIS certification
          for the Power Semiconductor Converters and their sub-assemblies and
          components, by September 1, 2026. BIS Scheme X certification for the
          Power Semiconductor Converters is a regulatory certification scheme, a
          step towards the enhancement of Indian manufacturing through improved
          safety, quality and globally competitive standards.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This blog will help in providing the necessary information about
          documentation regarding the Scheme X certification for all
          sub-assemblies, components and/ or types of Power Semiconductor
          Converters, their scope and importance, the process of certification,
          advantages, and other information.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Significance of BIS for Power Semiconductor Converters
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Applications of power semiconductor converters include:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Solar and wind power projects</li>
          <li>EV charging stations & drives</li>
          <li>Factory automation and robotics</li>
          <li>Consumer electronics and PSU</li>
          <li>Transmission & Distribution network</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without certification, risks include:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Electrical malfunction and over heating</li>
          <li>Unsafe conditions and equipment malfunctions</li>
          <li>Reduced energy efficiency</li>
          <li>
            Negative bidding outcomes from government projects and tenders
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Power Semiconductor Converters having Scheme X certification indicates
          these products adhere to the stringent Indian Standards of
          performance, safety and reliability.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X Certificate of Power Semiconductor Converters?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Power Semiconductor Converters is
          under the BIS Conformity Assessment Regulations, 2018. It ensures that
          products undergo robust testing, inspections, and compliance checks
          before hitting the Indian market.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Key Features:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Compulsory for all foreign and Indian manufacturers</li>
          <li>
            Includes a comprehensive introduction to power semiconductor
            devices, gate drive design, and passive components.
          </li>
          <li>Product testing is mandatory at BIS-accredited laboratories</li>
          <li>
            Ejection from municipal works, and projects and tenders of the
            Government.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The certification ensures that Power Semiconductor Converters comply
          with stringent Indian Standards for performance, safety and
          durability.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X Certification for Power Semiconductor Converters?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X Certification For Power Semiconductor Converters is
          covered under the BIS Conformity Assessment Regulations, 2018. It
          showcases that a product would require stringent testing, inspection
          and compliance in India before being brought to the market here.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Key Features:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Compulsory for Indian and foreign producers</li>
          <li>
            Spanning a broad range of power semiconductor applications (AC-DC,
            DC-DC, DC-AC and AC-AC)
          </li>
          <li>
            Mandates strength and safety certification by BIS approved labs
          </li>
          <li>Includes factory and quality system audits</li>
          <li>
            Provides the right to use the BIS Standard Mark if the product is
            also BIS-licensed.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Power Semiconductor Converters
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The new Omnibus Technical Regulation (OTR) 2024 for Power
          Semiconductor Converters has been published by the Ministry of Heavy
          Industries. This OTR order mandates Scheme X certification for these
          products to ensure quality and consumer safety.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Compliance Date: All manufacturers and importers must be certified
          till September 1, 2026. Post this boundary date, non-certified
          converters cannot be made, sold, or imported in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Power Semiconductor Converters
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Product Safety: Reduces the risk of overheating, fire accidents, and
            short-circuits.
          </li>
          <li>
            Energy Efficiency: Guarantees optimised performance and conformance
            with energy-saving standards.
          </li>
          <li>
            Market Access: OTR for Power Semiconductor Converters requires
            certification for market access in India.
          </li>
          <li>
            Competitive Advantage: Government and private tenders prefer
            certified products.
          </li>
          <li>
            Customer Trust: The BIS Standard Mark indicates reliability, safety,
            and quality.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure for BIS Registration for Power Semiconductor Converters
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Applicable IS Standards: Identify the applicable Indian
            Standards for the kind of converter.
          </li>
          <li>
            Product Testing: Any performance or safety tests will have to be
            performed in BIS accredited labs.
          </li>
          <li>
            Factory Inspection: BIS auditors check production lines, quality
            control and safety operations.
          </li>
          <li>
            Documentation Submission: Provide us with Technical Specifications,
            Test Reports, And Compliance Records.
          </li>
          <li>
            Grant of License: Upon approval, BIS grants a license to use the
            Standard Mark.
          </li>
          <li>
            Continuous Compliance: Regular Audits and Sample Testing ensure
            maintain Certification.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance with the BIS Certification for Power Semiconductor
          Converters under the OTR for Power Semiconductor Converters can lead
          to:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>No sale, manufacture, or import of non-certified products</li>
          <li>Confiscation of goods and pecuniary penalties</li>
          <li>
            Exclusion from the participation in the government tenders,
            contracts
          </li>
          <li>Reputational damage in the Indian market</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Power Semiconductor Converters,
          mandated under the OTR for Power Semiconductor Converters (2024),
          represents a game-changer regulation mandating safe, efficient and
          high-quality products in India's rapidly-expanding energy and
          electronics markets.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For the maker / manufacturer and importers, having a Scheme X
          certification for Power Semiconductor Converters is not just mandatory
          – it is an opportunity to gain customer confidence, compliance and
          access to a larger market.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const PowerSemiconductorsMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Power Semiconductor Converters";

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
