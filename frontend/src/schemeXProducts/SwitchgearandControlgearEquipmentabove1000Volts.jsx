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

const SwitchgearandControlgearEquipmentabove1000Volts = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Scheme X Certification for Switchgear and Controlgear Equipment
          above 1000 Volts
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification for switchgear and controlgear equipment above 1000V. Explore mandatory compliance, testing, process steps, benefits, and more."
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
          content="BIS Scheme X Certification for Switchgear and Controlgear Equipment above 1000 Volts in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Switchgear and Controlgear Equipment in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Switchgear and Controlgear Equipment above 1000 Volts in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Switchgear and Controlgear Equipment in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-switchgear-and-controlgear-equipment-above-1000-volts"
        />
      </Helmet>

      <SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb />
      <SwitchgearandControlgearEquipmentabove1000VoltsMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default SwitchgearandControlgearEquipmentabove1000Volts;

const SwitchgearandControlgearEquipmentabove1000VoltsBreadcrumb = () => {
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
                  BIS Scheme X Certification for Switchgear and Controlgear
                  Equipment above 1000 Volts
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentabove1000VoltsMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft />

        {/* Right Side Content */}
        {/* <SwitchgearandControlgearEquipmentabove1000VoltsMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentabove1000VoltsMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Switchgear and Controlgear Equipment
          above 1000 Volts
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-for-switch-gear-exceeding-1000-volts.png"
            alt="BIS Scheme X Certification For Switchgear And Controlgear Equipment Above 1000 Volts"
            title="BIS license for switch gear exceeding 1000 volts"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          High-voltage switchgear and controlgear integrate seamlessly with
          energy distributions and operational processes in contemporary
          civilization's ever-growing electrification endeavors. These systems
          are designed to ensure the safe control and distribution of
          electricity of more than 1000 volts and are invaluable in critical
          areas of power demand for risk management and power continuity
          systems. With the increase in concerns for safety and standardization
          of equipment, the Bureau of Indian Standards (BIS) has taken concrete
          steps to control the industry with the Scheme X Certification.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The Omnibus Technical Regulation Order which is a part of this law,
          has made the Scheme X Certification mandatory for all manufacturers of
          high voltage equipment schematic for use in the energy sector and
          industries. These manufacturers, both domestic and international, will
          be subjected to this regulation starting from the 1st of September
          2026.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This blog covers all the necessary information related to Scheme X
          certification for All types of switchgear and control gear equipment
          operating at voltages exceeding 1000 volts and (or) their assemblies
          /sub-assemblies /components, its importance, scope, certification
          process, advantages, and documentation needed.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why is BIS Certification for Switchgear and Controlgear Important?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          High-voltage switchgear and controlgear are widely used in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Power generation facilities</li>
          <li>Transmission and distribution substations</li>
          <li>Metro and railway electrification systems</li>
          <li>Oil & gas and heavy industries</li>
          <li>Renewable energy parks (solar, wind, hydro)</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without proper certification, risks include:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Fire hazards and arc flash accidents</li>
          <li>Equipment malfunctions leading to widespread blackouts</li>
          <li>Violations of Indian safety standards</li>
          <li>
            Disqualification from government and large-scale private contracts
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The Scheme X Certification is a guarantee that the crucial systems are
          insulated in accordance with the most stringent safety & quality
          norms. It is also applicable to the assemblies (BS8867) associated
          with these types of equipment which are operating at voltages above
          1000V as appropriate.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X Certification for switchgear and controlgear?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X Certificate is set under the BIS Conformity Assessment
          Regulations, 2018, to ensure that testing, inspection and licensing of
          switchgear and controlgear required before product can enter into the
          Indian market.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Key Features:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Mandatory for Indian and foreign companies</li>
          <li>
            Includes all high-voltage switchgear and controlgear at or above
            1000 volts
          </li>
          <li>Requires testing in BIS-accredited laboratories</li>
          <li>Plant and quality system audits are included</li>
          <li>
            Provides a BIS License to use the Standard Mark on specified
            equipment
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR for Switchgear and Controlgear Equipment
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries introduced the Omnibus Technical
          Regulation (OTR) for Switchgear and Controlgear Equipment in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: All manufacturers and importers must be BIS certified by 1st
          September, 2026. Post this date, non-type approved equipment cannot be
          made, sold or imported in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Benefits Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Switchgear and Controlgear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Electrical Safety – Protects against faults, arc flashes, and system
            breakdowns.
          </li>
          <li>
            Regulatory Compliance – A mandatory requirement for market entry
            under the OTR.
          </li>
          <li>
            Market Access – Certified products qualify for public and private
            infrastructure projects.
          </li>
          <li>
            Credibility & Trust – The BIS Standard Mark reflects adherence to
            quality and reliability.
          </li>
          <li>
            Operational Efficiency – Ensures robust, uninterrupted performance
            of high-voltage networks
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure for BIS Certification of Switchgear and Control Gear
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Standards – Find out the relevant Indian standard for your
            product.
          </li>
          <li>
            Product Testing – Perform all the required performance and safety
            tests in BIS-approved labs.
          </li>
          <li>
            Factory Check – BIS auditors ensure processes and quality control at
            the factory.
          </li>
          <li>
            Documentation Submission – Submit test test reports; specifications
            standards; compliance records.
          </li>
          <li>
            License Grant: BIS shall grant License to use the Standard Mark.
          </li>
          <li>
            Post-certification Monitoring: Continuous inspection and spot checks
            guarantee compliance.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          This process applies equally to all types of switch gear and control
          gear equipment operating at voltages exceeding 1000 volts and (or)
          their assemblies /sub-assemblies /components.
        </p>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The failure to be certified under the OTR model may result:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            The prohibition of selling, importing or manufacturing non certified
            equipment
          </li>
          <li>Confiscation of goods and heavy fines</li>
          <li>Banning for government tenders and contracts</li>
          <li>
            Reputation and Financial Damage: Significant reputational and
            financial damage
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-6">
          The BIS Scheme X Certification, mandated under the OTR 2024, ensures
          that India's high-voltage power infrastructure is built on safe,
          reliable, and compliant equipment. For manufacturers and importers,
          achieving certification is not only about meeting regulations—it is
          about earning customer trust, unlocking market opportunities, and
          supporting India's energy and infrastructure growth.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const SwitchgearandControlgearEquipmentabove1000VoltsMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Switchgear and Controlgear Equipment above 1000 Volts";

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
