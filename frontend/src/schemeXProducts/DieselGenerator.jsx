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

const DieselGenerator = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Scheme X Certification for Diesel Generators</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="The BIS Scheme X Certification for diesel generators and their components is a pivotal regulatory move aimed at standardizing and safeguarding the quality and safety in India."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Diesel Generators, BIS Scheme X Certification for Diesel Generators, Scheme X certification for Diesel Generators, BIS for Diesel Generators, OTR for Diesel Generators"
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
          content="BIS Scheme X Certification for Diesel Generators in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for diesel generators in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-diesel-generators"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Diesel Generators in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for diesel generators in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-diesel-generators"
        />
      </Helmet>

      <DieselGeneratorBreadcrumb />
      <DieselGeneratorMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default DieselGenerator;

const DieselGeneratorBreadcrumb = () => {
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
                  BIS Scheme X Certification for Diesel Generators
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const DieselGeneratorMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <DieselGeneratorMainContentLeft />

        {/* Right Side Content */}
        <DieselGeneratorMainContentRight />
      </div>
    </div>
  );
};

const DieselGeneratorMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X CERTIFICATION FOR DIESEL GENERATOR
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Diesel-Generator.png"
            alt="BIS Scheme X Certification For Diesel Generators"
            title="BIS Scheme X license for Diesel Generator"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Diesel Generators are used in commercial establishments, industries,
          hospitals, infrastructure projects, residential projects and in many
          more places as a secondary source of power. As economic assets with
          the responsibility of guaranteeing the continuity of electric supply,
          it is important for the machines to be safe, efficient and meeting
          national standards.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In an effort to do so, the BIS Certification of the Diesel Generator
          is included in the Scheme X Certification of the Bureau of Indian
          Standards (BIS). This scheme has been put in place to make sure that
          both national and global manufacturers meet the tough and strict
          Indian Standards before they sell their products in India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This post details the significance of the BIS Scheme X Certification
          of Diesel Generators, the OTR mandate of 2024 and how manufacturers
          can avail certification.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Importance of BIS for Diesel Generators
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Diesel generators are used in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Factories and work sites</li>
          <li>Hospitals and emergency responders</li>
          <li>Data centers and IT hubs</li>
          <li>Commercial and residential buildings</li>
          <li>Public Works and Utilities</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The risks are huge if the diesel gensets not properly certified:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Meter failures (mechanical and electrical) resulting in lack of
            supply
          </li>
          <li>High risk of fire and safety hazards in non-compliant units</li>
          <li>Emissions too high and energy inefficient</li>
          <li>Legal barriers, lock out from tenders</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The Diesel Generators can easily meet the Scheme X certification which
          allows the manufacturers to sell products that are safe, reliable and
          eco-friendly for use in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X Certification of Diesel Generators?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X Certification for Diesel Generators is an official
          certification process and is a system established by the BIS
          Conformity Assessment Regulations 2018. It mandates rigorous testing
          and quality assessment to validate adherence to Indian Standards.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Highlights of the Scheme X Certification:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            All manufacturers - Indian as well as foreign - Mandatory
            requirement
          </li>
          <li>
            Applicable for all types of diesel generators with different
            capacity
          </li>
          <li>Inclusive of product testing in BIS authorised labs</li>
          <li>
            Factory Audit, Workshop Visiting and Production Process Checking, to
            independently conduct on-site factory inspection to ensure quality
            and safety standards.
          </li>
          <li>Offers the licence to use the BIS Standard Mark when licensed</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Diesel Generators (DGs)
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries has issued a notification for the OTR
          for Diesel Generators in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date of Enforcement: All producers and importers shall get
          certification till 1st September 2026. From this date, production,
          sale, or import of uncertified diesel gen sets will be prohibited in
          India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Diesel Generators
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Safety Assurance: Minimizes mechanical failure, based on fire
            prevention technology to prevent fire, short circuit, and accidents.
          </li>
          <li>
            Environmental Compliance: Ensures energy-saving and
            emission-reducing standards are followed.
          </li>
          <li>
            Market Access: OTR for Diesel Generators - Certification is
            mandatory for sale in India
          </li>
          <li>
            Customer Trust: The BIS Standard Mark ensures high reliability and
            safety.
          </li>
          <li>
            Tender Eligibility: For Government / PSU contracts, products have to
            be certified.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Diesel Generators Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Diesel Generators Covered under Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Diesel Generators Certification scheme X includes the following
          groups:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Mobile home generators using diesel</li>
          <li>Commercial diesel genset (high capacity)</li>
          <li>Emergency and standby power supply generators</li>
          <li>
            Noiseless Diesel Generator Sets for Commercial (Application and
            Urban Use)
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Each sub type shall conform to the applicable Indian Standards (IS
          codes) such as IS 16819:2018 / ISO 12100:2010 (Safety of Machinery
          General Principles of Design - Risk Assessment & Risk Reduction). Each
          type shall meet its own Indian Standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure for BIS Certification of Diesel Generators
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Applicable Standards: Find out the IS codes for the type of
            generator.
          </li>
          <li>
            Product Testing: Carry out safety, performance and emission tests at
            BIS recognised laboratories.
          </li>
          <li>
            Factory Audit: BIS officers examine the process of controlling
            quality of manufacturing.
          </li>
          <li>
            Documentation Submission: Make available specifications, test
            results, and compliance documentation.
          </li>
          <li>
            Grant of License: When approved, BIS issues a license and permits
            the use of the Standard Mark.
          </li>
          <li>
            Ongoing Compliance: Audits and product inspections are conducted to
            ensure the certification remains valid.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Failure to adhere to the BIS Certification for Diesel Generators of
          the OTR for Diesel Generators may result in:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>
            Prohibiting the sale, import and manufacture of Non-certified
            Equipment.
          </li>
          <li>Goods being seized and financial penalties</li>
          <li>Ineligibility for government contracts</li>
          <li>Permanent reputational and financial damages</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Diesel Generators as per OTR for
          Diesel Generators (2024) is an important milestone in the journey for
          enhancement of product safety, reliability and efficiency in the
          Indian power-backup industry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For the manufacturers/importers, the Scheme X certification for Diesel
          Generators is not just a legal necessity, it is a competitive edge
          that reflects credibility, adherence and market confidence.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const DieselGeneratorMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Diesel Generators";

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
