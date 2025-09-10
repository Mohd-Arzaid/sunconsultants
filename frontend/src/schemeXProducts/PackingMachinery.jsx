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

const PackingMachinery = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Scheme X Certification For Packing Machinery</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X Certification for all types of machinery for filling, closing, sealing, labelling bottles, packing or wrapping, and (or) their assemblies/subassemblies /components marks a significant step towards standardizing safety and quality in India's manufacturing sector."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Packing Machinery, BIS Scheme X Certification for Packing Machinery, Scheme X certification for Packing Machinery, BIS for Packing Machinery, OTR for Packing Machinery "
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
          content="BIS Scheme X Certification for Packing Machinery in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for packing machinery in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-packing-machinery"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Packing Machinery in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for packing machinery in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-packing-machinery"
        />
      </Helmet>

      <PackingMachineryBreadcrumb />
      <PackingMachineryMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default PackingMachinery;

const PackingMachineryBreadcrumb = () => {
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
                  BIS Scheme X Certification for Packing Machinery
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const PackingMachineryMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <PackingMachineryMainContentLeft />

        {/* Right Side Content */}
        {/* <PackingMachineryMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const PackingMachineryMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Packing Machinery
        </h1>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In today&apos;s world of industrial manufacturing, the use of machinery for the safe and efficient packaging of goods is critical in protecting products for sales at retail locations. Appreciating the seriousness of these machines, the Bureau of Indian Standards (BIS) has recognized the need for BIS Scheme X Certification for filling closing, sealing, and labeling machines along with packing and wrapping machines and all their assemblies, sub-assemblies, and other components, complying with Machinery and Electrical Equipment Safety (Omnibus Technical Regulation) Order, 2024. The goal is to ensure quality control, safety, and conformity of the industry to defined standards.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The Order of 2024 Omnibus Technical Regulation on Scheme X was published by the Ministry of Heavy Industries to support its objectives. This Order states that all manufacturers, including foreign manufacturers, are to complete the India standard requirement for Scheme X Certification by September 1 2026. This regulation applies to all machines used in filling, closing, sealing, labeling, and packing or wrapping the bottles along with their assemblies, sub-assemblies, and components. This ensures the machinery used in the food processing, pharmaceuticals, and consumer product sectors must comply with the defined standards of safety, quality, and other crucial requirements.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In this blog, we describe the significance of Scheme X certification for Packing Machinery, Role of OTR for Packing Machinery and the process for obtaining a BIS License and the BIS Standard Mark for Packing Machinery.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS Certification Matters Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS Certification for Packing Machinery Matters
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Packaging machinery is employed in all businesses for the following:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Food and Beverage packaging</li>
          <li>Drills Medicines and medical products</li>
          <li>Packaging used in chemical and industrial industries</li>
          <li>Consumer and retail products</li>
          <li>Packaging solutions for the export market</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          In the absence of BIS for Packing Machinery: Products not certified by
          BIS may lead to:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Failures in packaging, product integrity and contamination</li>
          <li>Safety hazards in food and pharma segments.</li>
          <li>Inefficient operation and downtime</li>
          <li>Failure to follow the government buying rules</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The BIS mark on Packing Machinery assures the buyer of its Quality,
          Safety and long life.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is X-Scheme Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is X-Scheme Certification for Packaging Machinery?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          Packing Machinery is part II of Scheme X certification, under BIS
          Conformity Assessment Regulations 2018 and compliance with this is
          mandatory for Indian as well as foreign manufacturers.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Salient Features of BIS Scheme X Certification for Packing Machinery:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Suitable for any packing machine (manual, semi-automatic &
            automatic)
          </li>
          <li>
            Need to test products, auditors for factories and control quality.
          </li>
          <li>Compulsory for sales and imports in India</li>
          <li>
            Grants permission to use the BIS mark for Packing Machinery on
            certified equipment
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          OTR for Packing Machines
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The compliance framework for the manufacturer is prescribed under the
          Omnibus Technical Regulation (OTR) for Packing Machinery, issued by
          the Ministry of Heavy Industries in 2024.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: All packing machinery shall be covered with BIS Scheme X
          Certificate and all packing machinery shall get BIS License for
          Packing Machinery by 01.09.2026. The packaging machine that is not
          certified, on and from 1st September 2026, cannot be made, sold and
          imported in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Scheme X for Packing Machinery
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Safety & Hygiene: Packing machinery that is certified also avoids
            contamination problems (food and pharma).
          </li>
          <li>
            Quality Assurance: Keeps machines running smoothly and efficiently.
          </li>
          <li>
            Market Advantage: A BIS Packaging Machineries License is a commonly
            required licensing requirement for government tenders.
          </li>
          <li>
            Consumer Trust: The BIS (Bureau of Indian Standards) mark for
            Packing Machinery reflects quality & ensures a level of credibility.
          </li>
          <li>
            Global Market Access: Foreign brands have easy access to India's
            regulated market through product registration.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Packing Machinery Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Packing Machinery under Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification for Packing Machinery covers a wide
          variety of packaging machines.
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Food and beverage packing machines</li>
          <li>Blister and strip packaging machines for pharma</li>
          <li>Wrapping, sealing, and filling machines</li>
          <li>Cartoning and labeling machines</li>
          <li>Vacuum and shrink packaging systems</li>
          <li>Bulk and industrial packaging machinery</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Each kind of packaging machinery shall meet the requirements of the
          appropriate Indian Standards (IS codes) including IS 16819 :2018/ISO
          12100 : 2010 Safety of Machinery General Principles for Design- Risk
          Assessment and Risk Reduction).
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Machine type should meet appropriate Indian Standards for performance,
          safety, cleanliness and efficiency.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Process for BIS License for Packing Machine
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identify Applicable Standards: Identify suitable IS codes for your
            class of packing machinery.
          </li>
          <li>
            Testing at BIS-Recognized Labs: Compulsory performance, hygiene and
            safety tests.
          </li>
          <li>
            Factory Inspection: BIS personnel perform manufacturing site audits
            in person.
          </li>
          <li>
            Application & Documentation: Uploading of test reports, tech specs
            and quality manuals.
          </li>
          <li>
            Issue of BIS Licence on Packing Machines: Can be used henceforth
            after obtaining the approval for Packing Machinery after leaving the
            factory premises.
          </li>
          <li>
            Ongoing Compliance: Throughout random BIS checks and monitoring
            process along with checking samples of products from shelves
            maintain consistency round the clock.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you do not meet the OTR for Packing Machinery and are not certified
          by 1st September 2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Prohibition on manufacture/import of non-certified equipment</li>
          <li>Severe fines, product confiscation</li>
          <li>Barred from PSU projects and public tenders</li>
          <li>Sustained brand disrepute and loss of credibility</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">Conclusion:</span> BIS Scheme X Certification for Pumps and Liquid Elevators with OTR 2024 to be enforced; a milestone in India standardization of Industry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Scheme X Certification of Packing Machinery under OTR for
          Packing Machinery (2024) is a key initiative towards safety and
          quality standardization in the country's industrial packaging space.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Importers/exporters and manufacturers are already benefiting from BIS
          License for packing Machinery and BIS marking as a strategic tool
          which markets access and trustworthiness and helps them to stand up in
          a hyper regulated market.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const PackingMachineryMainContentRight = () => {
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
    "SchemeX Product - BIS Scheme X Certification for Packing Machinery";

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
