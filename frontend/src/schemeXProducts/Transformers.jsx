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

const Transformers = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Scheme X Certification for Transformers</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification for Transformers specifies the quality and safety standards for transforming manufacturing and importing transformers into India."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Transformers, BIS Scheme X Certification for Transformers, Scheme X certification for Transformers, BIS for Transformers, OTR for Transformers"
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
          content="BIS Scheme X Certification for Transformers in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Transformers in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-transformers"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Transformers in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Transformers in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-transformers"
        />
      </Helmet>

      <TransformersBreadcrumb />
      <TransformersMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Transformers;

const TransformersBreadcrumb = () => {
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
                  BIS Scheme X Certification for Transformers
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const TransformersMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <TransformersMainContentLeft />

        {/* Right Side Content */}
        <TransformersMainContentRight />
      </div>
    </div>
  );
};

const TransformersMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Transformers
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-licence-for-Transformers.png"
            alt="BIS Scheme X Certification For Transformers"
            title="BIS Scheme X licence for Transformers"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Transformers are an integral component of any power transmission and
          distribution network. Regardless of its application in industrial,
          commercial or utility operations, a transformer is and should always
          remain a piece of equipment with the utmost safety and operational
          performance due to the critical nature of its functioning. To enhance
          safety, reliability, and standardization in the electrical equipment
          industry in India, the Bureau of Indian Standards (BIS) has made BIS
          certification for all types of transformers and their assemblies,
          sub-assemblies, components, and sub-components mandatory under Scheme
          X Certification.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries has, through the Omnibus Technical
          Regulation Order of 2024, specified a deadline for all manufacturers,
          irrespective of the country of origin, to achieve BIS certification
          under Scheme X for transformers and similar equipment by September
          1st, 2026. BIS Scheme X Certification for transformers is a step
          towards improving the quality, consistency, reliability, and the
          electrical safety of products in India. For manufacturers, importers,
          or OEM suppliers of transformers with components, these standards are
          more than a compliance obligation.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This blog captures all relevant information relating to the scope,
          importance, and advantages of the certification, the process, and the
          documentation needed for Scheme X certification for All types of
          Transformers and (or) their assemblies, sub-assemblies, components,
          and or assemblies.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why Scheme X is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why Scheme X for Transformers is Important
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Transformers are widely used in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Generation facilities</li>
          <li>Networks for transmission and distribution</li>
          <li>Factories and production buildings</li>
          <li>Renewables projects (solar / wind / hydro)</li>
          <li>Commercial properties / residential estates</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without proper compliance, transformers may cause:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Overheat, fire and electric shock.</li>
          <li>Losses and waste of power during transmission</li>
          <li>Blackouts due to system breakdowns</li>
          <li>Rejected in Public tenders, government projects</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The Scheme X certification for Transformers ensures high safety,
          energy efficiency, and product reliability.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is Scheme X Certification for Transformers?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Transformers is a legal framework
          under the BIS Conformity Assessment Regulations, 2018. It mandates
          stringent testing and inspection and insists on a higher-level of
          documentation to ascertain the quality along the Indian Standards.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Key Features of Scheme X Certification:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>For all manufacturers, Indian and foreign.</li>
          <li>
            Includes distribution transformers, power transformers, and
            special-purpose transformers
          </li>
          <li>
            Performance, efficiency and safety testing in BIS-approved labs is
            obligatory
          </li>
          <li>
            Factory audited for examined Manufacturing processes and quality
            systems
          </li>
          <li>Provides a license for the use of the BIS Standard Mark.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Transformers
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries has introduced the Omnibus Technical
          Regulation (OTR) for Transformers, in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Compliance Date: All manufacturers and importers must be certified by
          September 1, 2026. After which, non-certified transformers cannot be
          made, brought to the country or sold in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS for Transformers
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Safety & Reliability: Verifies transformers comply with electrical
            safety and fire-prevention requirements.
          </li>
          <li>
            Energy Efficiency: Encourages less power loss and better power
            performance.
          </li>
          <li>
            Market Compliance: Complies with transformer regulatory
            requirements, as listed in the OTR.
          </li>
          <li>
            Tender Eligibility: Certified products are eligible for Government
            and PSU tenders.
          </li>
          <li>
            Customer Confidence: The BIS Standard Marking ensures product
            quality and durability.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Transformers Section */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Transformers Covered
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS scheme X Certification for Transformers applies to:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>
            Distribution Transformers (for use in local grids and residential
            supply)
          </li>
          <li>
            Power Transformers (at the level of high-voltage transmission
            network)
          </li>
          <li>
            Special Purpose Transformers (industrial, railway and renewable
            projects applications)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Each type shall meet the relevant IS (see note) SO code such as IS
          16819:2018/ISO 12100:2010 (safety of machinery General principles for
          design – Risk assessment and risk reduction). All types have to
          conform to the respective IS codes for certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Process of BIS Certification for Transformers
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Applicable Standards: Please refer to IS code for various
            types of transformer.
          </li>
          <li>
            Product Testing: Conduct safety, energy efficiency and performance
            checks in BIS-approved laboratories.
          </li>
          <li>
            Factory Audit: BIS personnel observe the manufacturer's production
            and quality control systems.
          </li>
          <li>
            Documentation Submission: Submit specification, test reports and
            compliance data.
          </li>
          <li>
            Grant of License: BIS provides license to use the Standard Mark when
            all provisions are met.
          </li>
          <li>
            Ongoing Compliance: Regular testing and review are conducted to
            maintain certification validity.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Failure to conform to BIS / OTR for Transformers BIS Certification for
          Transformers under the OTR for Transformers would mean the following:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Prohibition of sale manufactures and import of non-certified
            transformers.
          </li>
          <li>
            Mandatory seizing of non-conforming products and stiff penalties.
          </li>
          <li>Disqualification from government and PSU tenders</li>
          <li>Long-tail reputational, financial damages</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Transformers as will be required
          under OTR for Transformers (2024) is an important step in the
          upgradation of India's power infrastructure with reliable, efficient &
          safe products.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For manufacturers and importers, the Scheme X certification for
          Transformers is not just an obligatory certification but also a
          strategic tool for gaining trust in the Indian market and sustaining
          long-term success in the country's power industry.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const TransformersMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Transformers";

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
