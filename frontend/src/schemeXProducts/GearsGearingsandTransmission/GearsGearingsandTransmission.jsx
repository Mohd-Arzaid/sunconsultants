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

const GearsGearingsandTransmission = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Scheme X Certification for Gears, Gearing, and Transmission
          Elements
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification is mandatory for manufacturers dealing with All types of gears and gearing, toothed wheels, chain sprocket, transmission elements, ball or roller screws, gear boxes and speed changers."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Gears, Gearing, and Transmission Elements, BIS Scheme X Certification for Gears, Gearing, and Transmission Elements, Scheme X certification for Gears, Gearing, and Transmission Elements, BIS for Gears, Gearing, and Transmission Elements, OTR for Gears, Gearing, and Transmission Elements"
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
          content="BIS Scheme X Certification for Gears, Gearings, and Transmission Elements in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Gears, Gearings, and Transmission Elements in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-gears-gearings-and-transmission-elements"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Gears, Gearings, and Transmission Elements in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Gears, Gearings, and Transmission Elements in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-gears-gearings-and-transmission-elements"
        />
      </Helmet>

      <GearsGearingsandTransmissionBreadcrumb />
      <GearsGearingsandTransmissionMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default GearsGearingsandTransmission;

const GearsGearingsandTransmissionBreadcrumb = () => {
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
                  BIS Scheme X Certification for Gears, Gearings, and
                  Transmission Elements
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <GearsGearingsandTransmissionMainContentLeft />

        {/* Right Side Content */}
        {/* <GearsGearingsandTransmissionMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Gears, Gearings, and Transmission
          Elements
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-gears-and-gearing-toothed-wheels-chain-sprocket.png"
            alt="BIS Scheme X Certification For Gears Gearing And Transmission Elements"
            title="BIS Scheme X license for gears and gearing, toothed wheels, chain sprocket"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In the industry’s changing world, the safety and quality of mechanical
          components is very important. According to the Bureau of Indian
          Standards, all machinery and electrical components manufactured in
          India must comply with the safety and standards set by the BIS and
          detailed in the Machinery and Electrical Equipment Safety (Omnibus
          Technical Regulation) Order, 2024. The Order includes mechanical
          modules, components and assembly components such as gears, gearing
          elements, and the various parts of transmissions that are essential to
          the workings of machinery in any industry.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          All manufacturers, domestic or foreign, are required to fulfill the
          standard requirements of Scheme X Certification by 1st September 2026
          as set by the order and instituted by the Ministry of Heavy
          Industries. All manufacturers in the industry of gears and gearboxes
          and all their associated transmission elements need to comply with
          this regulation so that they can access the market and set standards
          for the industry.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This blog contains all the vital information for the certification of
          gears, gearboxes, and associated transmission parts incorporation
          along with why it is valuable, its reach, the certification
          advantages, and the necessary paperwork.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why Scheme X is Important for Gears, Gearing, and Transmission
          Elements
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          These mechanical parts are important in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Cars, trucks, and trains</li>
          <li>Flight and defense equipment</li>
          <li>Manufacturing machines and robotics</li>
          <li>Energy and Power Generation Systems</li>
          <li>Marine (heavy and light engineering industry.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Without Gears, Gearing and Transmission Elements BIS, hazards are
          high:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Gear failures resulting in breakdowns and expensive downtime</li>
          <li>Health risks in transportation and heavy industries</li>
          <li>Ineffective energy transfer and energy dissipation</li>
          <li>
            Limited accessibility of public tenders and procurement
            opportunities
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Finally, the Scheme X certification of Gears, Gearing, and
          Transmission Elements provides increased durability, minimised
          operational risk and is consistent with domestic standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What Is BIS Scheme X Certification For Gears, Gearing And Transmission
          Elements?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Gears, Gearing, and Transmission
          Elements is part of the BIS Conformity Assessment Regulations, 2018.
          It defines strict benchmarks for design, material quality, and
          operational performance.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Salient Features of Scheme X Certification are:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Compulsory for all manufacturers (Indian and abroad)</li>
          <li>Suitable for different gears, shafts and transmission parts</li>
          <li>Runs out product testing at BIS-approved labs</li>
          <li>Includes factory audits to validate quality control</li>
          <li>
            Entitles to use the BIS Standard Mark once the product is certified
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR for Gears, Gearing, and Transmission Elements
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries adopted the Omnibus Technical
          Regulation (OTR) 2024 on Gears, Gearing, and Transmission Elements.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Date of Compliance: All producers and importers are required to hold
          certification by 1st September 2026. After this day, uncertified goods
          can no longer be made, imported or sold in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Gears, Gearing and Transmission
          Elements
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Safety and Reliability: It avoids unsupervised failure of vital
            systems-application.
          </li>
          <li>
            Market Competitiveness: Certified companies enjoy preference in both
            public and private tenders.
          </li>
          <li>
            Customer Confidence: Buyers have faith in products with official BIS
            recognition.
          </li>
          <li>
            Legal Compliance: No penalties with the OTR for Gears, Gearing and
            Transmission Parts.
          </li>
          <li>
            Global Market Entry: Enabling foreign manufacturers to enter the
            Indian market with ease.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Gears Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Gears and Parts of Transmission included
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Scheme X certification applies to a variety of Gears, Gearing And
          Transmission Elements such as the following :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Spur, helical, bevel and worm wheel gears</li>
          <li>Gear shafts and couplings</li>
          <li>Gear boxes and transmission parts</li>
          <li>Components of chain and belt drive</li>
          <li>
            Gear used in aerospace and robotics, high-end automobiles,
            motorcycles.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          All types shall conform to Indian Standards (IS codes) like IS
          16819:2018/ISO 12100:2010 (Safety of Machinery General Principles for
          Design- Risk Assessment and Risk Reduction). Each type of product
          shall conform to the appropriate Indian Standard with regard to its
          design and performance.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure of BIS Certification for Gears, Gearing and Transmission
          Elements
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Identify Applicable Standards: Consult IS codes applicable to your
          gear / transmission products.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Product Testing: Develop material and performance testing in
            BIS-accredited labs.
          </li>
          <li>
            Factory Audit: BIS arrives for Q.S. audit on the production site.
          </li>
          <li>
            Submit Documentation: Share technical details, testing papers, and
            quality manuals.
          </li>
          <li>
            Grant of License: BIS, after checking the documents for accuracy,
            grants certification and allows use of the Standard Mark.
          </li>
          <li>
            Ongoing Compliance: Frequent audits and re-testing to maintain the
            validity of certification.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Non-compliance to the BIS Certification of Gears, Gearing and
          Transmission Elements under the OTR for Gears, Gearing and
          Transmission Elements shall lead to:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Ban on sale and fabrication of non–certified items</li>
          <li>Confiscation of goods and monetary fines</li>
          <li>Unqualified for government tenders and contracts</li>
          <li>Reputational harm over the long term</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X Certification for Gears, Gearing and Transmission
          Elements, notified under the OTR for Gears, Gearing and Transmission
          Elements (2024) would be a key move toward improving the quality and
          safety standards of engineering and manufacturing structures in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Manufacturers and importers of Gears, Gearing, and Power Transmission
          Solutions seeking sales in the Indian market will find their profits
          will increase and will open doors to market gains by applying Scheme X
          certification for Gears, Gearing, and Power Transmission Systems.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const GearsGearingsandTransmissionMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Gears, Gearings, and Transmission Elements";

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
