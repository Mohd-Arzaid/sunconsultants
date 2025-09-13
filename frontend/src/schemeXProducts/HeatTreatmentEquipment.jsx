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

const HeatTreatmentEquipment = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Scheme X Certification for Heat Treatment Equipment</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS scheme X certification mandates that all types of machinery for the treatment of material by a process involving a change of temperature and/or their assemblies/components must be BIS certified"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS certification for heat treatment equipment, BIS Scheme X certification for thermal processing equipment, Scheme X certification for heat treatment equipment, BIS for thermal processing equipment, OTR for Heat Treatment Equipment"
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
          content="BIS Scheme X Certification for Heat Treatment Equipment in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for heat treatment equipment in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-heat-treatment-equipment"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Heat Treatment Equipment in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="BIS scheme X certification mandates that all types of machinery for the treatment of material by a process involving a change of temperature and/or their assemblies/components must be BIS certified"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-heat-treatment-equipment"
        />
      </Helmet>

      <HeatTreatmentEquipmentBreadcrumb />
      <HeatTreatmentEquipmentMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default HeatTreatmentEquipment;

const HeatTreatmentEquipmentBreadcrumb = () => {
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
                  BIS Certification for Heat Treatment Equipment
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const HeatTreatmentEquipmentMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <HeatTreatmentEquipmentMainContentLeft />

        {/* Right Side Content */}
        <HeatTreatmentEquipmentMainContentRight />
      </div>
    </div>
  );
};

// ... existing code ...

// ... existing code ...

const HeatTreatmentEquipmentMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Heat Treatment Equipment
        </h1>

        {/* BIS Scheme X Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-license-for-Heat-treatment-of-material.png"
            title="BIS Scheme X license for treatment of material"
            alt="BIS Scheme X Certification For Heat Treatment Equipment"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Heat Treatment equipment is one of the most critical applications in
          industries like automotive, aerospace, foundry, forging, and heavy
          engineering. These are the devices that change metals&apos; physical
          and mechanical attributes through operations such as annealing,
          quenching, hardening, tempering etc.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Seeing their significance, the Bureau of Indian Standards (BIS) have
          declared the BIS Certification for Heat Treatment Equipment compulsory
          under Scheme X Certification. That makes sure Indian as well as global
          manufacturers adhere to the stringent Indian Standards before
          marketing the equipment in the country.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In this post, we will explain the significance of BIS Scheme X
          Certification for Heat Treatment Equipment, the OTR for Heat Treatment
          Equipment, and the process to get a BIS License for Heat Treatment
          Equipment with the BIS Mark for Heat Treatment Equipment.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS for Heat Treatment Equipment is Mandatory Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS for Heat Treatment Equipment is Mandatory
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Heat treatment furnace is commonly used in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Metal and metallurgical industries</li>
          <li>Automobile and aerospace production</li>
          <li>Tool and die making</li>
          <li>Energy and other heavy machinery industries</li>
          <li>Defence and precision engineering</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          In the absence of BIS for Heat Treatment Equipment poor quality
          machines can cause:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Over heating or improper processing</li>
          <li>End product mechanism and structure failures</li>
          <li>Increased energy usage and lack of efficiency</li>
          <li>Safety hazards to operators</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          BIS Certification not only guarantees that the equipment functions
          properly and safely according to industrial performance demands but
          also meets environmental criteria.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is Scheme X Certification of Heat Treatment Equipment?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Scheme X- Heat Treatment Equipment, is in line with the Ministry of
          Steel, Government of India, which is a mandatory certification scheme
          under India&apos;s BIS Conformity Assessment Regulations, 2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Important Highlights of BIS Scheme X Certification for Heat Treatment
          Equipment:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Required of US and foreign makers</li>
          <li>
            Can be used on most types of heat treatment and firing equipment
          </li>
          <li>
            Including product testing, Factory floor checks and continued
            compliance audits.
          </li>
          <li>Manufacturers authorised to use BIS Standard Mark.</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Heat Treating Equipment
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries in 2024 brought in Omnibus Technical
          Regulation (OTR) for Heat Treatment Equipment, wherein compliance with
          Scheme X was made mandatory.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: All producers and importers need to obtain a valid BIS
          License for Heat Treatment Equipment by 1st September 2026. After this
          date, Non-Certified Heat Treatment equipment will not be eligible for
          selling, importation or bidding in a public tenders.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Heat treatment Equipment
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Operational Safety: Protecting against overheating, uneven treatment
            and equipment breakdown.
          </li>
          <li>
            Product Reliability: Ensures treated items meet hardness,
            durability, and toughness specification
          </li>
          <li>
            Energy Efficiency: Certified equipment is tested for optimal energy
            usage, lowering operational costs.
          </li>
          <li>
            Market Access: BIS Mark for Heat Treatment Equipment is frequently
            compulsory for public purchase and government tenders.
          </li>
          <li>
            Global Advantage: Global trademarks can gain easy access to the
            Indian market by obtaining BIS License for Heat Treatment Equipment.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Heat-Treatment Equipment under Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification on Heat Treatment Equipment includes
          large number of machines such as:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Annealing Furnaces</li>
          <li>Quenching Furnaces</li>
          <li>Hardening andTempering Furnaces</li>
          <li>Rotary Furnaces for Continuous Heat Treatment</li>
          <li>Carburizing and Nitriding Furnaces.</li>
          <li>Induction & Electric Heat Treatment Equipment</li>
          <li>Gas and Oil Fired Heat Treatment Appliances</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Every type needs to adhere to relevant Indian Standards (IS codes)
          like IS 16819:2018/ISO 12100:2010. Performance characteristics,
          material grades and energy conservation features shall conform to
          relevant Indian Standards (IS codes) for each type of equipment.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure for BIS License for Heat Treatment Equipment
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identify Relevant IS Standards: If the draft is in respect of a
            category wise, you verify If the proposed standard corresponds to
            your category of equipment, and which IS No.
          </li>
          <li>
            Testing at BIS-Recognized Labs: Perform performance, safety, and
            efficiency tests.
          </li>
          <li>
            Factory Inspection: BIS examines quality control systems and
            production facilities.
          </li>
          <li>
            Application & Documentation: Furnish results, the tests performed,
            and technical specifications and quality manuals.
          </li>
          <li>
            Issue of BIS Licence: Approval enables the use of the BIS Mark for
            Heat Treatment Equipment.
          </li>
          <li>
            Ongoing Compliance: Audits and inspections are regularly conducted
            to maintain quality standards.
          </li>
        </ul>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          If the OTR of Heat Treatment Equipment is not met by 01 Sep 2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Prohibition of sales/import of non-certified equipment</li>
          <li>fines and product confiscation</li>
          <li>Not eligible for government and PSU tenders</li>
          <li>Loss of brand equity over the long run in the Indian market</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory enforcement of Scheme X Certification for Heat Treatment
          Equipment under the OTR 2024 is a significant milestone in enhancing
          India&apos;s industrial standards.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For manufacturers, importers, and exports of the Heat Treatment
          Equipment the process to get BIS Certification for Heat Treatment
          Equipment, to get BIS License of Heat Treatment Equipment and use BIS
          Standard Mark of Heat Treatment Equipment is not just about
          compliance, it&apos;s about establishing safe products and
          understandable reliable products thoughts are competitive in the
          market under getting a regulated market.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

// ... existing code ...

// ... existing code ...

const HeatTreatmentEquipmentMainContentRight = () => {
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
    "SchemeX Product - BIS-scheme-x-certification-for-heat-treatment-equipment";

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
