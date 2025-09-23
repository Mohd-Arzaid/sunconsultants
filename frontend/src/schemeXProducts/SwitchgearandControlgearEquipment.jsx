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

const SwitchgearandControlgearEquipment = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Scheme X Certification for Switchgear and Controlgear Equipment up
          to 1000 Volts
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification for switchgear and controlgear equipment up to 1000V and their assemblies/sub-assemblies/components is mandatory to ensure quality and safety in India."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Switchgear and Controlgear Equipment, BIS Scheme X Certification for Switchgear and Controlgear Equipment, Scheme X certification for Switchgear and Controlgear Equipment, BIS for Switchgear and Controlgear Equipment, OTR for Switchgear and Controlgear Equipment"
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
          content="BIS Scheme X Certification for Switchgear and Controlgear Equipment up to 1000 Volts in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for switchgear and controlgear equipment up to 1000V in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Switchgear and Controlgear Equipment up to 1000 Volts in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for switchgear and controlgear equipment up to 1000V in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-up-to-1000-volts"
        />
      </Helmet>

      <SwitchgearandControlgearEquipmentBreadcrumb />
      <SwitchgearandControlgearEquipmentMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default SwitchgearandControlgearEquipment;

const SwitchgearandControlgearEquipmentBreadcrumb = () => {
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
                  BIS Certification for Switchgear and Controlgear Equipment up
                  to 1000 Volts
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentMainContentLeft />

        {/* Right Side Content */}
        {/* <SwitchgearandControlgearEquipmentMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Switchgear and Controlgear Equipment up to 1000
          Volts
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-and-control-gear-equipment.png"
            alt="BIS Scheme X Certification For Switchgear And Controlgear Equipment Up To 1000 Volts"
            title="BIS license for switch gear and control gear equipment volts"
            className="w-full h-auto rounded-lg shadow-md"
          />

        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In this era of automation and electrification, instrument switches and
          control switches are integral components of secure and effective
          electrical systems. From home wiring to sophisticated industrial
          systems, these devices manage the protection, control, and isolation
          of power flow. Because of the important position these devices hold,
          the Bureau of Indian Standards (BIS) has instituted compulsory
          certification of such devices under Scheme X to make sure they fulfill
          the set safety and performance benchmarks in India.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries, under the Omnibus Technical
          Regulation Order, 2024, has enforced mandatory BIS certification for
          all switchgear and controlgear equipment (≤ 1000V) sold, imported, and
          manufactured in India from 1st September 2026 onwards. To counter the
          non-compliant and unsafe electrical equipment, as well as to raise the
          standards of products offered in the market, the BIS, under Scheme X
          Certification, has made certification obligatory, for these devices
          operating at or below 1000 volts.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This blog outlines the certification procedure along with its merits,
          scope, purpose, supporting evidence, and essential documentation,
          vital to Scheme X certification for all types of switchgear and
          controlgear equipment operating (or)their
          assemblies/sub-assemblies/components operating at voltages not
          exceeding 1000 volts.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS for Switchgear and Controlgear Equipment Matters
        </h2>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Switchgear and controlgear up to 1000 volts are essential in:
        </h3>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Domestic and commercial electrical distribution installations</li>
          <li>Power management systems for industry</li>
          <li>Renewable energy facilities (solar/wind plants)</li>
          <li>Public infrastructure projects</li>
          <li>Safety-critical applications requiring circuit protection</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without proper certification, risks include:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Risk of electric shock or fire</li>
          <li>Equipment breakdown and expensive downtime</li>
          <li>Violation of Indian safety norms</li>
          <li>
            Ban from tenders and projects that require certified equipment
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The Scheme X certification for Switchgear and Controlgear Equipment
          ensures these products meet performance, safety, and durability
          standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X Certification of Switchgear and Controlgear?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Switchgear and Controlgear
          Equipment is part of the BIS Conformity Assessment Regulations, 2018.
          It enforces mandatory product testing, factory inspections, and
          compliance with applicable Indian Standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">Key Features:</p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicable to all Indian as well as foreign manufacturers</li>
          <li>
            Covers a variety of devices: circuit-breakers, disconnectors,
            disconnector switches, fuse-combination units and control devices up
            to 1000V.
          </li>
          <li>Requires laboratory testing in BIS-recognized facilities</li>
          <li>Includes production and quality system audits</li>
          <li>
            Entitles to use the Standard Mark on the product upon certification
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Switchgear and Controlgear Equipment
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries has introduced the Omnibus Technical
          Regulation (OTR) for Switchgear and Controlgear Equipment in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline for Compliance: Manufacturers and importers are required to
          obtain certification by 1st September 2026. Following this date such
          uncertified switchgear and controlgear equipment cannot be placed on
          the market, imported or manufactured in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Switchgear and Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Electrical Safety: Guard against short-circuits, overloads, and
            potential fire hazards.
          </li>
          <li>
            Regulatory Compliance: Compulsory by the OTR for Switchgear and
            Controlgear Devices.
          </li>
          <li>
            Market Acceptance: Registered products are acceptable for all
            government and private projects.
          </li>
          <li>
            Customer Confidence: The BIS Standard Mark on the Switchgear and
            Controlgear provides the confidence of quality and safety to the
            customer.
          </li>
          <li>
            Competitive Edge: Improves brand reputation and opens doors for new
            businesses.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Process of BIS Certification of Switchgear and Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Applicable Indian Standards: Identify the IS codes related
            to switchgear and controlgear up to 1000 volts.
          </li>
          <li>
            Product Testing: Perform safety, performance, and endurance tests at
            BIS approved labs.
          </li>
          <li>
            Factory Audit: BIS inspectors verifies factories and quality control
            systems.
          </li>
          <li>
            Documentation Submission: All detailed specification, test report
            and compliance file support.
          </li>
          <li>
            Grant of BIS License: If accepted, BIS issues a license for the use
            of the Standard Mark.
          </li>
          <li>
            Ongoing Compliance: Audits to the standard and product testing at
            regular intervals ensure the certification remains valid.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Non compliance with BIS Certification for Switchgear and Controlgear
          Equipment under OTR scheme has following consequences:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Banning the manufacture, import or sale of any product that is not
            certified
          </li>
          <li>Non-compliant equipment will be seized; and fine.</li>
          <li>Ineligibility in government tender</li>
          <li>Harm to business relations and the confidence in the market.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Switchgear and Controlgear
          Equipment notified under the OTR for Switchgear and Controlgear
          Equipment (2024), is a key tool to guarantee safe, reliable and
          efficient management of power in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For manufacturers and importers, for whom the Scheme X of
          certification of Switchgear and Controlgear Equipment is not only a
          legal obligation it is also a strategic investment, ensuring access to
          market, credibility of brand and confidence of customers in general.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentMainContentRight = () => {
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
