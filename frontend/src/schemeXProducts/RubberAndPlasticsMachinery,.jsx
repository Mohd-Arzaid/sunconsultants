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

const RubberAndPlasticsMachinery = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Scheme X Certification for Rubber and Plastics Machinery
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification is mandatory for rubber and plastic machinery, assemblies, sub-assemblies and components under Scheme X to ensure quality, safety, and customer trust."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Rubber and Plastics Machinery, BIS Scheme X Certification for Rubber and Plastics Machinery, Scheme X certification for Rubber and Plastics Machinery, BIS for Rubber and Plastics Machinery, OTR for Rubber and Plastics Machinery"
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
          content="BIS Scheme X Certification for Rubber and Plastics Machinery in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Rubber and Plastics Machinery in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-rubber-and-plastics-machinery"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Rubber and Plastics Machinery in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Rubber and Plastics Machinery in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-rubber-and-plastics-machinery"
        />
      </Helmet>

      <RubberAndPlasticsMachineryBreadcrumb />
      <RubberAndPlasticsMachineryMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default RubberAndPlasticsMachinery;

const RubberAndPlasticsMachineryBreadcrumb = () => {
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
                  BIS Scheme X Certification for Rubber and Plastics Machinery
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RubberAndPlasticsMachineryMainContentLeft />

        {/* Right Side Content */}
        {/* <RubberAndPlasticsMachineryMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Rubber and Plastics Machinery
        </h1>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The industrial sectors of India are changing quickly, leading to
          increased demand for standardized, safe, and high-performance
          machinery. Specifically, machinery for working with rubber and
          plastics is crucial to a variety of industries, including automotive,
          construction, packaging, and consumer goods. To better improve product
          safety, product consumer protection, and to facilitate quality
          assurance, the Bureau of Indian Standards (BIS) has put in place a
          regulatory framework which mandates a certification for the Scheme X
          Compliance.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries, under the Omnibus Technical
          Regulation (OTR) Order, 2024, requires all manufacturers, whether
          domestic or international, to obtain BIS certification under Scheme X
          for certain categories of machinery. This covers all types of
          machinery for working with rubber and plastics and their assemblies,
          subassemblies, and components.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This blog outlines the importance and relevance of the Scheme X
          Certification, the certification process, and the benefits associated
          with the required documentation for the rubber and plastic machinery
          and all their assemblies, sub-assemblies, and components.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importance of BIS for Rubber and Plastics Machinery
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Rubber and Plastics Machinery is widely used in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Automotive components manufacturing (tire, hose, seal, dashboard)
          </li>
          <li>Plastic packaging and consumer products</li>
          <li>Medical supplies and pharmaceutical packaging</li>
          <li>Construction and infrastructure building materials</li>
          <li>Electrical and electronic components</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Absence of BIS for Rubber and Plastics Machinery, industries may face:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Operating inefficiencies and frequent failures</li>
          <li>Safety hazards for operators and end-users</li>
          <li>Low-quality product yield</li>
          <li>Disqualification for government tenders or big projects</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          BIS Scheme X certification for Rubber and Plastics Machinery ensures
          that machines are in compliance to stringent Indian Standards, making
          machines safer, more durable and market ready.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X for Rubber and Plastics Machinery?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X Certification for Rubber and Plastics Machinery In India
          comes under the BIS Conformity Assessment Regulations, 2018. It
          establishes performance and safety criteria for rubber and plastics
          processing machinery.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Key Features of Scheme X Certification:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Compulsory for Indian and foreign manufacturers</li>
          <li>
            Coves a broad range of rubber and plastics machinery as per notified
            IS codes
          </li>
          <li>
            Requires testing of products, audits of manufacturing processes and
            continuing surveillance.
          </li>
          <li>Use of the BIS standard mark when it is certified.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          This certificate guarantees machine safety, energy efficiency and a
          reliable production for both industry and end-users.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Rubber and Plastics Machinery OTR
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          The Ministry of Heavy Industries launched the Omnibus Technical
          Regulation for Rubber & Plastics Machinery (OTR) 2024. The deadline by
          which all manufacturers and importers need to be certified is 1st
          September 2026. After this date, unapproved machines cannot be made,
          imported or vended in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Rubber machinery and Plastics
          Machinery
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Quality Assurance: Complies with Indian Standards on performance and
            durability.
          </li>
          <li>
            Market Competitiveness: A certified product is prioritized for both
            public and private sector procurement.
          </li>
          <li>
            Customer Trust: There is greater trust of the buyers when they buy
            machines with BIS Certification for Rubber and Plastics Machinery.
          </li>
          <li>
            Legal Compliance: You will not be subject to penalties or
            restrictions after complying with the OTR for Rubber and Plastics
            Machinery.
          </li>
          <li>
            Global Advantage: International OEMs with certification find the
            path to the Indian market easier.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Rubber and Plastic Machinery covered under Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Scheme X certification for Rubber and Plastics Machinery covers a
          wide range of equipment, including:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Machines for molding by injecting.</li>
          <li>Attribution of extruders and blow forming machines</li>
          <li>Rubber mixing mills & internal mixers</li>
          <li>Calendaring machines</li>
          <li>Presses for Compression Molding</li>
          <li>Recycling and granulating machine</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Each category shall conform to the applicable Indian Standards (IS
          Codes) like IS/ISO 20430: 2020 (Plastics and Rubber Machines-Injection
          Moulding Machines- Safety Requirements). Every machine type has to
          meet the applicable Indian Standards in terms of safety, performance,
          and reliability.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Process for BIS Certification for Rubber and Plastics Machinery
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Applicable Standards: Choose IS codes pertinent to the type
            of machinery.
          </li>
          <li>Product Testing: Test in a BIS-approved laboratory.</li>
          <li>
            Factory Audit: BIS inspectors check the manufacturing and quality
            system for compliance.
          </li>
          <li>
            Documentation Submission: Provide technical standards, test reports
            and quality manuals.
          </li>
          <li>
            Certification Approval: BIS grants certification, allowing use of
            standard marks by manufacturers.
          </li>
          <li>
            Ongoing Surveillance: Scheduled reviews and re-testing maintains
            continual compliance.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance with BIS Requirement of Rubber and Plastics Machinery
          in the OTR for Rubber and Plastics Machinery entails that :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>No sales/imports of non-certified equipment</li>
          <li>Severe fines or product seizures</li>
          <li>Debarment from public procurement and tenders</li>
          <li>Damage to reputation in the profession</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The addition of the BIS Scheme X Certification for Rubber and Plastics
          Machinery to the OTR for Rubber and Plastics Machinery (2024) is a
          significant move to ensure conformity to quality and safety of
          machines.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For manufacturers and importers, achieving certification isn't only
          about regulatory compliance – it's a strategic investment to build
          brand reputation, ensure reliability, and access to India's
          fast-growing market.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const RubberAndPlasticsMachineryMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Rubber and Plastics Machinery";

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