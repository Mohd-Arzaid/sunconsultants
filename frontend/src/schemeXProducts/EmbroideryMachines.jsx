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

const EmbroideryMachines = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Scheme X Certification for Embroidery Machinery</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X certification for embroidery machinery, manufacturers ensure their products are legally compliant, technically superior, and trusted by customers"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Embroidery Machines, BIS Scheme X Certification for Embroidery Machines, Scheme X certification for Embroidery Machines, BIS for Embroidery Machines, OTR for Embroidery Machines"
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
          content="BIS Scheme X Certification for Embroidery Machinery in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for Embroidery Machinery in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-embroidery-machinery"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Embroidery Machinery in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for Embroidery Machinery in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-embroidery-machinery"
        />
      </Helmet>

      <EmbroideryMachinesBreadcrumb />
      <EmbroideryMachinesMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default EmbroideryMachines;

const EmbroideryMachinesBreadcrumb = () => {
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
                  BIS Scheme X Certification for Embroidery Machines
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const EmbroideryMachinesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <EmbroideryMachinesMainContentLeft />

        {/* Right Side Content */}
        {/* <EmbroideryMachinesMainContentRight /> */}
        <CDSCOContentRight />
      </div>
    </div>
  );
};

const EmbroideryMachinesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Embroidery Machines
        </h1>

        {/* Main Image */}
        <div className="mb-6">
          <img
            src="/schemXproductImages/BIS-license-machinery-for-making-embroidery.png"
            alt="BIS Scheme X Certification For Embroidery Machinery"
            title="BIS Scheme X License For Embroidery Machinery"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The embroidery sector is an important part of India&apos;s textile and
          apparel industry producing value-added fabrics for fashion, home and
          exports. Computerized multi-head embroidery machines or industrial
          machines are indispensable for getting high quality in embroidered
          products as they offer efficiency and precision in embroidery.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure safety, stability and performance, BIS (The Bureau of Indian
          Standards) has enforced mandatory certification for Embroidery
          Machines under the certification scheme X from BIS. This ensures that
          only the machines which comply with Indian Standards are permitted
          into the Indian market.
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          In the present article, we will discuss the importance of BIS Scheme X
          Approval for Embroidery Machines, regulations under the OTR (Order of
          the Textile Rules) for Embroidery Machines, and process for obtaining
          BIS License for Embroidery Machines.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Why BIS is Important Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why BIS for Embroidery Sewing Machines is Important
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Embroidery machines are used:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Clothing and garment factories</li>
          <li>
            Production of home textiles (curtains, bed linens, cushion covers)
          </li>
          <li>Tailored embroidery and couture houses</li>
          <li>Export-driven textile mills</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          The risks without BIS for Embroidery Machines are:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Poor stitches quality and broken thread.</li>
          <li>Excessive mechanical down time of the machine</li>
          <li>Safety risks in industrial environments</li>
          <li>Exclusion from both domestic and export markets</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The BIS mark for Embroidery Machines is a guarantee to the Customers
          that your product is rigorously tested and certified following all the
          necessary guidelines of BIS.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Scheme X for Embroidery Machines?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Framework for BIS Scheme X Certification for Embroidery Machines
          is based on the parameters mentioned under BIS Conformity Assessment
          Regulations, 2018 (which are developed for compliance in quality
          management amongst the industrial equipment suppliers).
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Important Features of the scheme X certification for Embroidery
          Machines:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Mandatory for Indian as well as foreign manufacturers</li>
          <li>Includes testing, safety check, and efficiency verification</li>
          <li>Regular factory visits and quality audits needed</li>
          <li>
            Allows affixing the BIS mark under a license for Embroidery Machines
            for product which is certified
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Embroidery Machines
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Ministry of Heavy Industries had introduced the Omnibus Technical
          Regulation (OTR) 2024 for Embroidery Machines which mandates the
          certification for all machines which fall under the category of
          embroidery machines.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: All manufacturers and importers are required to get BIS
          License for Embroidery Machines to be sold or imported in India by 1st
          September 2026 to avoid any penalty or prosecution. Post that, the non
          certified embroidery machines cannot be traded or used for commercial
          purposes in India.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Embroidery Machines
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Product Safety & Reliability: Certifiable machines perform to
            expected and safety standards.
          </li>
          <li>
            Market Acceptance: BIS License for Embroidery Machines is compulsory
            for government tenders and quantity deals.
          </li>
          <li>
            Buyer Confidence: Embroidery Machines are BIS Marked which confirms
            its quality and standard.
          </li>
          <li>
            Regulatory Compliance: Complies with OTR for Embroidery Machines and
            does not incur penalty.
          </li>
          <li>
            Export Advantage: Indian buyers get peace of mind with certified
            machines and international firms gain easier access to India.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Embroidery Machines Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Embroidery Machines Covered Under Scheme X
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Scheme X certification for Embroidery Machines is applicable for:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Embroidery machines with multi-heads</li>
          <li>Machine-driven computerized embroidery</li>
          <li>Embroidery machines with one head</li>
          <li>Machines for chain stitch embroidering</li>
          <li>Schiffli embroidery machines</li>
          <li>Specialized textile embroidery equipment</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Each category can comply with the related IS standard (IS codes), such
          as IS 17361 (Part 1): 2020 / ISO 11111 (Part 1) : 2016 (Textile
          Machinery Safety Requirements Part 1 Common Requirements). All of them
          necessarily have to conform to their respective as per IS codes for
          design, durability, safety and economy in operation.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Procedure for BIS License for Embroidery Machines
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            Identify Relevant Standards: Look for the IS codes relevant to your
            machine model of embroidery.
          </li>
          <li>
            Product Testing: Machines are tested at BIS-accredited labs for
            safety and performance.
          </li>
          <li>
            Factory Inspection: BIS auditors come to the factory to evaluate the
            quality control.
          </li>
          <li>
            Documentation & Application: Provide BIS with technical reports,
            manuals and quality documents.
          </li>
          <li>
            BIS Licence for Embroidery Machines: On acceptance, the
            manufacturers shall have the options to mark their products with the
            BIS mark.
          </li>
          <li>
            Ongoing Compliance: Routine inspections and retesting assures
            ongoing compliance.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          The consequences of not having BIS Certification for Embroidery
          Machines under OTR for Embroidery Machines are from 1st September
          2026:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Restrictions on sale/import of non-certified machines</li>
          <li>Fines, penalties and potential product seizures</li>
          <li>Ineligibility for significant government and export contracts</li>
          <li>For long time brand reputation to be damaged</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Implication of BIS Scheme X Certification for Embroidery Machines in
          OTR for Embroidery Machines (2024) is a landmark move for the Indian
          textile and embroidered sector.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          From the point of view of Manufacturer and Import of Embroidery
          Machines to get BIS Registration for Embroidery Machines and put a BIS
          Mark for Embroidery Machines is not only a compliance to requirement
          of law but also has a tremendous buy-in for the product quality,
          Market faith & Competitive edge for the textile industry in India
          incessantly growing textile Industry.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

const EmbroideryMachinesMainContentRight = () => {
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
    "SchemeX Product - BIS Certification for Embroidery Machines";

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
