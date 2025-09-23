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
import CDSCOContentRight from "@/components/manual/ServicesRightSideContent/CDSCOContentRight";

const PublicWorksAndMechanical = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Scheme X Certification for Public Works and Mechanical Appliances
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X certification for machines for public works & building, and mechanical appliances is a strategic move toward ensuring industrial safety, uniform quality, and market access."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Public Works and Mechanical Appliances, BIS Scheme X Certification for Public Works and Mechanical Appliances, Scheme X certification for Public Works and Mechanical Appliances, BIS for Public Works and Mechanical Appliances, OTR for Public Works and Mechanical Appliances"
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
          content="BIS Scheme X Certification for Public Works and Mechanical Appliances in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Public Works and Mechanical Appliances in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Public Works and Mechanical Appliances in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Public Works and Mechanical Appliances in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-public-works-and-mechanical-appliances"
        />
      </Helmet>

      <PublicWorksAndMechanicalBreadcrumb />
      <PublicWorksAndMechanicalMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default PublicWorksAndMechanical;

const PublicWorksAndMechanicalBreadcrumb = () => {
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
                  BIS Scheme X Certification for Public Works and Mechanical
                  Appliances
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PublicWorksAndMechanicalMainContentLeft />

        {/* Right Side Content */}
        {/* <PublicWorksAndMechanicalMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X for Public Works and Mechanical Appliances
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-Machines-for-public-works -&-building.png"
            alt="BIS Scheme X Certification For Public Works And Mechanical Appliances"
            title="BIS license for Machines for public works & building"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          With rapid development of infrastructure and modernization of
          industries, performance and reliable machinery is of utmost
          importance. Machines and mechanical appliances act as the pivot in
          engineering works, manufacturing and construction of public works and
          specialized industries. It is imperative that we safeguard their
          quality, and conformity. It is a legal obligation enforced by the
          Bureau of Indian Standards (BIS) under Scheme X Certification.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          To implement and streamline the enforcement of mandatory standards
          within the confines of various categories of industrial machinery, the
          Omnibus Technical Regulation Order (OTR), 2024 was issued by the
          Ministry of Heavy Industries. This order states that all types of
          machines for public works, construction of buildings, and other
          mechanical appliances, including those that are not expressly
          mentioned in other subdivisions of Chapter 84, are required to obtain
          BIS certification under Scheme X.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This post discusses all types of machines and machinery used for
          public works and the building of construction, mechanical appliances
          with individual functions, their assemblies, subassemblies, the
          importance and scope of the widely talked about scheme, certification
          process and advantages, and also the documents that have to be
          submitted.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Significance of BIS for Public Works & Mechanical Appliances
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          These machines are common in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Construction of public infrastructure (roads, bridges, water
            supplies)
          </li>
          <li>Projects of engineering and heavy construction</li>
          <li>City services and utilities</li>
          <li>Industrial facilities that need machine lifting or processing</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without BIS for Public Works and Mechanical Appliances, the risks
          include:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Breakdown of machine while on important projects</li>
          <li>Occupational and end-user safety considerations</li>
          <li>Higher cost of maintenance and downtime</li>
          <li>Barring from projects funded by the government</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The Scheme X certification for Public Works and Mechanical Appliances
          ensures machinery operates safely, efficiently, and with minimal risk
          of failure.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X certification for Public Works & Mechanical
          Appliances?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X Certification for Public Works and Mechanical Appliances
          is under the BIS Conformity Assessment Regulations, 2018. It is an
          identified means and a regulatory instrument to ensure that industrial
          and infrastructure machinery conforms to Indian Standards.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Key Aspects of Scheme X Qualification:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicable for Indian and foreign manufacturers both</li>
          <li>Includes machines for public works and utilities</li>
          <li>Tests in labs recognized by the BIS.easy to operate.</li>
          <li>
            Factory audits, and regular compliance inspections are included
          </li>
          <li>
            Grants the right to use the BIS Standard Mark after certification
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR for Public Works and Mechanical Equipment
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries has issued the Omnibus Technical
          Regulation (OTR) for Public Works and Mechanical Appliances in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: By 1st September 2026, all manufacturers and importers must
          comply with the Scheme X certification for Public Works and Mechanical
          Appliances. After this date, unregistered machines will not be allowed
          to be manufactured, sold or imported in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS for Public Works and Mechanical Appliances
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Product Safety: Preventing collapse due to mechanical problems and
            reliable operation.
          </li>
          <li>
            Regulatory Compliance: Satisfies the OTR for Public Works and
            Mechanical Appliances.
          </li>
          <li>
            Market Advantage: Certification is often required for public tenders
            and government projects.
          </li>
          <li>
            Customer Confidence: Machines that are officially certified are
            preferred by some of the buyers, as it is an assurance of quality.
          </li>
          <li>
            Reduced Liability: Reduced potential for legal and brand exposure
            with certified products.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Public Works And Mechanical Appliances in OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X for Certification of Public Works and Mechanical
          Appliances covers following product:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Road making and maintaining machines</li>
          <li>Hydraulic and manual lifting machinery</li>
          <li>
            Municipal service appliances (water distribution equipment etc.)
          </li>
          <li>Service and mechanical handling equipment</li>
          <li>
            Equipment specially designed for industrial use in public works and
            services
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          They shall comply with appropriate Indian Standards (IS codes), where
          applicable, including IS 16819:2018/ISO 12100:2010 (Safety of
          Machinery General Principles for Design- Risk Assessment and Risk
          Reduction). All these forms are to be manufactured as per the
          respective Indian Standards for safety, performance and quality.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure for BIS Certification for Public Works and Mechanical
          Appliances
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Applicable Standards: Choose IS codes applicable for your
            machinery.
          </li>
          <li>
            Product Testing: Perform performance and safety tests in
            BIS-approved Labs.
          </li>
          <li>
            Factory Inspection: BIS officials visit production facilities to
            ensure that quality controls are in place.
          </li>
          <li>
            Documentation: Submit application forms, technical reports, and
            quality manuals
          </li>
          <li>
            Grant of License: BIS grants certification and allows use of the BIS
            Standard Mark.
          </li>
          <li>
            Ongoing Compliance: There is on-going testing and audits to ensure
            continual compliance.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The non-compliance of the BIS Certification for Public Works and
          Mechanical Appliances laid down in the OTR for Public Works and
          Mechanical Appliances will entail:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Ban on the selling or importing of uncertified machines</li>
          <li>Heavy fines and confiscation of product</li>
          <li>
            Being barred from government tenders and contracting processes
          </li>
          <li>Reputation heavily tarnished</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X certificate for public works and mechanical appliances
          supported by OTR for public works and mechanical appliances (2024),
          takes the country one step closer to establishing uniform quality
          levels and safety in infrastructure machinery.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For manufacturers and importers, the acquisition of the Scheme X
          certification for Public Works and Mechanical Appliances is more than
          mere compliance – it represents a strategic investment.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const PublicWorksAndMechanicalMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Public Works and Mechanical Appliances";

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
