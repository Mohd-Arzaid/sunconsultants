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

const RotaryElectricalMachines = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Scheme X Certification for Rotary Electrical Machines</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification for Rotary electrical machines, such as Generators, etc., and (or) their assemblies /sub-assemblies /components is a pivotal regulatory move towards quality and safety of essential industrial equipment."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Rotary Electrical Machines, BIS Scheme X Certification for Rotary Electrical Machines, Scheme X certification for Rotary Electrical Machines, BIS for Rotary Electrical Machines, OTR for Rotary Electrical Machines"
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
          content="BIS Scheme X Certification for Rotary Electrical Machines in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Rotary Electrical Machines in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-rotary-electrical-machines"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Rotary Electrical Machines in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Rotary Electrical Machines in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-rotary-electrical-machines"
        />
      </Helmet>

      <RotaryElectricalMachinesBreadcrumb />
      <RotaryElectricalMachinesMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default RotaryElectricalMachines;

const RotaryElectricalMachinesBreadcrumb = () => {
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
                  BIS Scheme X Certification for Rotary Electrical Machines
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const RotaryElectricalMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <RotaryElectricalMachinesMainContentLeft />

        {/* Right Side Content */}
        {/* <RotaryElectricalMachinesMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const RotaryElectricalMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Rotary Electrical Machines
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Rotary-electrical-machines.png"
            alt="BIS Scheme X Certification For Rotary Electrical Machines"
            title="BIS Scheme X license for Rotary electrical machines"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Generators, motors, and alternators as rotary electrical machines are
          essential types of machinery used in numerous important activities
          such as running industries, generating power, and even meeting the
          information technology infrastructure and other needs at a global
          level. These machines work hand-in-hand in sectors like power and
          transport, manufacturing, as well as commercial complexes because they
          either change mechanical energy to electrical or the other way round.
          Such machines are critical and hence, their quality, reliability, and
          safety are important. In India, BIS has addressed this issue with
          Scheme X certification for rotary electrical machines and their
          assemblies and components along with other electrical equipment.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In the Omnibus Technical Regulation Order 2024, the Ministry of Heavy
          Industries has stated that all manufacturers, whether foreign or
          local, that produce rotary machines and all other related equipment,
          must comply with Scheme X Certification by the date of 1st September
          2026. This regulatory set mentions all arrays of rotary electrical
          machines including generators, alternators, synchronous and
          asynchronous motors, and all of the machines' assemblies,
          subassemblies, and components.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This blog discusses the importance, scope, certification procedures,
          benefits, and other related documentation of Scheme X certification
          for all types of rotary electrical machines.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Importance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importance of BIS For Rotary Electrical Machines
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Rotary electrical machines are widely used in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Generating and distribution of electricity</li>
          <li>Industrial automation and equipment</li>
          <li>Transportation (railroads, boats, electric cars)</li>
          <li>Oil, gas, and energy sectors</li>
          <li>Electrical appliances for consumer and commercial use</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Some of the possible risks of no certification include:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Electrical hazards, short-circuits and fire-hazards</li>
          <li>Mechanical breakdowns and expensive downtime</li>
          <li>Wastage of energy</li>
          <li>Prohibition from government tendering and projects</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The Scheme X certification for Rotary Electrical Machines guarantees
          that these products satisfy rigorous quality, efficiency & safety
          standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X Certification for Rotary Electrical Machines?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Rotary Electrical Machine is a
          government regulation scheme under the BIS Conformity Assessment
          Regulation, 2018. It certifies goods for Indian Standards before they
          enter the Indian market.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Some of the features of Scheme X Certification:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Must for All Manufactures (Domestic & Foreign)</li>
          <li>
            Includes motors, generators, alternators, and other rotary electric
            machines
          </li>
          <li>Needs testing in BIS recognized labs</li>
          <li>Factory audit to ensure quality control</li>
          <li>
            It allows the use of BIS Standard Mark on the product after
            certification.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Rotary Machines
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Omnibus Technical Regulation (OTR) for Rotary Electrical Machines
          has been announced by the Ministry of Heavy Industries in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Compliance Date: As per this OTR scheme, all manufacturers and
          importers of Rotary Electrical Machines must be certified under BIS
          Scheme X certification by September 1, 2026. After this deadline,
          uncertified rotary electrical machines cannot be sold, manufactured,
          or imported in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Rotary Electrical Machine
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Product Safety & Reliability: Ensures safety with electrical and
            mechanical standards.
          </li>
          <li>
            Regulatory Compliance: Meets the requirement as far as the OTR for
            Rotary Electrical Machines.
          </li>
          <li>
            Market Competitiveness: Certification is an advantage in government
            and private procurement.
          </li>
          <li>
            Consumer Trust: The BIS Standard Mark ensures quality and safety for
            use.
          </li>
          <li>
            Global Market Access: Assists foreign brands to easily penetrate the
            strictly regulated market of India.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Machinery Section */}
        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Rotary Electrical Machines Included
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X certification for Rotary Electrical Machines covers a wide
          variety of equipment as listed below;
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>AC and DC motors</li>
          <li>Generators and alternators</li>
          <li>Turbo–generators and hydro–generators</li>
          <li>
            Special types of Rotary machines employed in Industries and
            Utilities
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          All types are required to be in accordance with appropriate Indian
          Standards (IS codes) like IS 16819:2018/ ISO 12100:2010 (Safety of
          Machinery General Principles for Design- Risk Assessment and Risk
          Reduction). All machine types have to comply with the corresponding
          Indian Standards to be approved.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Process of BIS Certification for Rotary Electrical Machine
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Standards: Go through IS codes applicable to the type of
            the machine.
          </li>
          <li>
            Product Testing: Perform performance, safety & efficiency testing in
            BIS-approved labs.
          </li>
          <li>
            Factory Inspection: Review of the BIS officials on the manufacturing
            plant and quality assurance systems.
          </li>
          <li>
            Documentation Submission: Submit technical documentation,
            specifications and bill of material.
          </li>
          <li>
            Grant of License: If the application is approved, BIS grants the
            certification and permits the use of the BIS Standard Mark.
          </li>
          <li>
            Continuous Compliance: Regular testing and audits to keep
            certification current.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers not following the BIS Certification for Rotary
          Electrical Machines covered under the OTR for Rotary Electrical
          Machines are subject to:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Prohibition on the sale or import of uncertified articles</li>
          <li>Confiscation of articles and substantial fines</li>
          <li>Elimination from government work or projects and bidding</li>
          <li>Economic losses and reputational damage</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Rotary Electrical Machines, in line
          with OTR for Rotary Electrical Machines (2024), is a vital step to
          strengthen industrial safety, energy conservation and their
          performance in India's electrical machinery industry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For manufacturers and importers, Scheme X certification for Rotary
          Electrical Machines is not just a box-ticking exercise, it is
          important to ride on this certification and position itself
          strategically advantageous tobe seen as credible to the customer as
          part of their growth story.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const RotaryElectricalMachinesMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Rotary Electrical Machines";

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
