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

const ConstructionMachinery = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Scheme X Certification for Construction Machinery</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification is mandatory for construction, earthmoving, and mining machinery to ensure safety, quality, and standardization in critical industrial sectors"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Construction Machinery, BIS Scheme X Certification for Construction Machinery, Scheme X certification for Construction Machinery, BIS for Construction Machinery, OTR for Construction Machinery"
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
          content="BIS Scheme X Certification for Construction Machinery in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Construction Machinery in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-construction-machinery"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Construction Machinery in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Construction Machinery in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-construction-machinery"
        />
      </Helmet>

      <ConstructionMachineryBreadcrumb />
      <ConstructionMachineryMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default ConstructionMachinery;

const ConstructionMachineryBreadcrumb = () => {
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
                  BIS Scheme X for Construction Machinery
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const ConstructionMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <ConstructionMachineryMainContentLeft />

        {/* Right Side Content */}
        {/* <ConstructionMachineryMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const ConstructionMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Construction Machinery
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-Scheme-X-License-for-Construction-Machinery.png"
            alt="BIS Scheme X Certification For Construction Machinery"
            title="BIS Scheme X License for Construction Machinery"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          Excavators, loaders, bulldozers, concrete mixers and road rollers are
          the main construction machines used in India&apos;s infrastructure
          construction. The higher demand for safe and reliable machinery stems
          from huge investments in highways, smart city, factory, and housing.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The Bureau of Indian Standards (BIS) has made BIS Certification
          Compulsory under the Scheme-X for Construction Machineries to provide
          quality, service and safety assurance. It ensures that a device
          conforms to the Indian Standards before being made available for sale
          or imported in India.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Here in this article, you are going to learn about BIS Scheme X
          Certification for Construction Machinery, The requirement of OTR for
          Construction Machinery, and the process of obtaining BIS Licence for
          Construction Machinery and the BIS mark for Construction Machinery.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS for Construction Machinery Important
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Building machinery is applied in infrastructure growth and giant
          construction development websites.
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Road and highway development</li>
          <li>Real estate and housing projects</li>
          <li>Mining and quarrying</li>
          <li>Industrial construction and heavy engineering</li>
          <li>Ports, airports, and metro projects</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The consequences of absence of BIS for Construction Equipment are
          follows:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Equipment failure and expensive downtime</li>
          <li>Higher probabilities of accidents and risk of hazards</li>
          <li>Non-compliance with government tenders</li>
          <li>Increased maintenance and operating costs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The BIS mark for Construction Machinery indicates that the product is
          safe, reliable and in compliance with Indian Standards.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X Certification for Construction Machinery?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X certification is covered by the Bureau of Indian
          Standards (BIS) Conformity Assessment Requirements (2018) which
          provides guidelines for product In this scheme, the BIS decides the
          quality of the product and makes sure it is mitigating the human
          health hazards from.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Key Features- Scheme X Certification for Construction Equipment:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Mandatory for domestic and foreign manufacturers</li>
          <li>
            Includes all types of heavy machinery and construction equipment
          </li>
          <li>
            Product testing a must, factory visits mandatory and compliance
            audits must be conducted regularly
          </li>
          <li>
            Authorises the use the use of BIS mark for Construction Machinery
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Construction Equipment
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Scheme X certification will become mandatory as part of the 2024
          Omnibus Technical Regulation (OTR) for Construction Machinery
          announced by the Ministry of Heavy Industries.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: All manufacturers and importers should get a BIS License for
          Construction Machinery under Scheme X before 01st September, 2026.
          From this date on uncertified equipment may not be produced,
          transported nor sold for public infrastructure programmes.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Benefits of BIS Certification for Construction Equipment or Machinery
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Safety & Reliability: Reduces the risk of mechanical failure or
            accidents on construction sites.
          </li>
          <li>
            Market Access & Tender Eligibility: BIS Certified Products are
            eligible to Government and PSU Tenders.
          </li>
          <li>
            Consumer & Contractor Confidence: Construction Machinery BIS mark
            ensures safe and quality products for all its buyers.
          </li>
          <li>
            Global Market Entry: A BIS License for Construction Machinery can be
            beneficial for foreign companies for easy access to Indian markets.
          </li>
          <li>
            Legal Compliance: Impunity from fines, prohibitions and sanctions
            under the OTR of Construction Machinery.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Construction Equipment Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Construction Equipment covered under Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          BIS Scheme X certification for Construction Machinery is applicable to
          different categories of equipment such as :
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Excavators and Backhoe Loaders</li>
          <li>Bulldozers and Road Rollers</li>
          <li>Cranes used in construction sites</li>
          <li>Concrete Mixers and Batching Plants</li>
          <li>Asphalt Plants and Pavers</li>
          <li>Piling and Drilling Machinery</li>
          <li>Material Handling and Earthmoving Equipment</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Each category has to meet the relevant Indian Standards (IS Codes) as
          per IS 17055 (Part 7):2020, IS 17055 (Part 8):2020 and IS 17055 (Part
          12):2020 in terms of design, safety, performance, etc.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure for BIS Licence for Construction Equipment
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Applicable Standards: Find what IS code is for your type of
            Construction Machinery.
          </li>
          <li>
            Product Testing: Perform safety and performance tests in BIS
            recognized labs.
          </li>
          <li>
            Factory Inspection: BIS auditors examine literal QC and production
            processes.
          </li>
          <li>
            Application & Documentation: Provide reports, specs, and manuals for
            review.
          </li>
          <li>
            BIS Licence for Construction Machinery: On inclusion, manufacturers
            are permitted to put the BIS mark for Construction Machinery.
          </li>
          <li>
            Ongoing Compliance: Frequent inspections and monitoring maintain
            ongoing compliance.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mass failure or nonissuance of BIS Certificate of Construction
          Machinery till 1st September 2026 in terms of the OTR for Construction
          Machinery will have the following implications:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Prohibition of sale and import of uncertified equipment</li>
          <li>Large fines and product detentions</li>
          <li>Disqualification from government projects and awards</li>
          <li>
            Unlimited potential damage to reputation for many years to come
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Mandatory implementation of BIS Scheme X Certification for
          Construction Machinery under OTR for Construction Machinery (2024) is
          a significant step towards safety, efficiency as well as
          standardisation in the indigenous industry of India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          For construction machinery manufacturers, importers, and exporters,
          obtaining a BIS License for Construction Machinery and affixing the
          BIS mark for Construction Machinery is not just a compliance
          requirement, it&apos;s a strategic move to expand to new markets,
          penetrate the booming Indian construction market, and build your
          reputation over the long-term.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const ConstructionMachineryMainContentRight = () => {
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
