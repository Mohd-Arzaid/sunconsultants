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

const Centrifuges = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>
          BIS Scheme X Certification for Centrifuges Machinery
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS Scheme X certification for centrifuges, filtering or purifying machinery for liquid and gas, and/or their assemblies, sub-assemblies, and components, is a crucial regulatory milestone for the industrial machinery sector"
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification for Centrifuges, BIS Scheme X Certification for Centrifuges, Scheme X certification for Centrifuges, BIS for Centrifuges, OTR for Centrifuges"
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
          content="BIS Scheme X Certification for Centrifuges in India | Complete Guide"
        />
        <meta
          property="og:description"
          content="Learn everything about BIS Scheme X Certification for centrifuges in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Scheme X Certification for Centrifuges in India | Complete Guide"
        />
        <meta
          name="twitter:description"
          content="Learn everything about BIS Scheme X Certification for centrifuges in India. Understand OTR 2024 compliance, BIS License process, ISI mark requirements, and how to get certified before the September 2026 deadline"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-scheme-x-certification-for-centrifuges-and-filtering-or-purifying-machinery"
        />
      </Helmet>

      <CentrifugesBreadcrumb />
      <CentrifugesMainContent />
      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Centrifuges;

const CentrifugesBreadcrumb = () => {
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
                  BIS Certification for Centrifuges
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

const CentrifugesMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <CentrifugesMainContentLeft />

        {/* Right Side Content */}
        <CentrifugesMainContentRight />
      </div>
    </div>
  );
};

// ... existing code ...

// ... existing code ...

const CentrifugesMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Scheme X Certification for Centrifuges and Filtering or Purifying Machinery
        </h1>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          In the present era of industry, centrifuges and filtration systems play a core role in sustaining the cleanliness and operational efficiency of a myriad of sectors, such as chemical and pharmaceutical manufacturing, oil and gas, food processing, mining, and wastewater treatment, among many others. Machines that perform separation, filtration, and purification of liquids and gases highly influence process efficiency and ecological protection.

        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          To ensure the quality, safety and performance of such critical machines, the Bureau of Indian Standards (BIS) has made it mandatory for all types of centrifuges, and liquid and gas filtering or purifying machines, along with any assemblies, sub-assemblies and components, to be certified under the BIS Scheme X
        </p>

        {/* Introduction Paragraph 3 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          This policy is part of the Omnibus Technical Regulation Order, 2024, issued by the Ministry of Heavy Industries, and has a deadline of compliance by 1st September 2026.
          This blog serves the purpose of educating manufacturers, importers, and stakeholders in the industry about the BIS certification process regarding centrifuges and filtration machinery and the solutions for compliance as outlined in the regulations of BIS Scheme X.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Significance Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Significance of BIS for Centrifuges
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Centrifuges are used in:
        </p>

        {/* Usage Areas */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Pharmaceuticals and Bio-technology sector</li>
          <li>Food processing and drinks making</li>
          <li>Oil refineries and petrochemical industries</li>
          <li>Medical laboratories</li>
          <li>Environmental and water treatment</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Absence of BIS for Centrifuges could lead to use of inferior quality
          or uncertified Centrifuge which can result:
        </p>

        {/* Problems with Non-Certified Equipment */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Mechanical breakdown risks</li>
          <li>Possibility of contamination in fragile sectors</li>
          <li>Lost time and lost revenue</li>
          <li>Low efficiency and increased energy use.</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          A BIS certified centrifuge with BIS mark for Centrifuges implies
          security, quality, and trust.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* What is BIS Scheme X Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is the BIS Scheme X Certificate for Centrifuges?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          BIS Scheme X Certification of Centrifuges is the compulsory
          certification scheme under the BIS Conformity Assessment Regulations,
          2018.
        </p>

        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Scheme X Certification for Centrifuges: Main features:
        </h3>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>Applicable on Indian as well as foreign manufacturers</li>
          <li>
            Applies to all types of centrifuges found in industrial and R&D labs
          </li>
          <li>
            Decent amounts of product testing, audits, and compliance validation
            are a must
          </li>
          <li>
            Allows manufacturers to apply for BIS registration on the basis of
            certification for Centrifuges mentioned above.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* OTR Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS OTR for Centrifuges
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The OTR for Centrifuges was gazetted by the Ministry of Heavy
          Industries in 2024, which requires Scheme X certification.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Deadline: All manufacturers and importers would be required to get a
          valid BIS License of Centrifuges under Scheme X by 1st September 2026.
          “This will stop uncertified centrifuges from being sold, imported or
          participated in tenders across the country," said by government
          officials.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Advantages Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Advantages of BIS Certification for Centrifuges
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Safety & Compliance: Avoids accidents due to mechanical breakdown at
            high speeds.
          </li>
          <li>
            Quality & Reliability: Certified Centrifuges perform with decimation
            accuracy and precision.
          </li>
          <li>
            Market Access: A BIS Centrifuge Licence is typically required for
            procurement by public bodies.
          </li>
          <li>
            Consumer Trust: BIS mark for Centrifuges gives customers about
            product quality and durability.
          </li>
          <li>
            Competitive Advantage: BIS-certified brands/ manufacturers are
            preferred in controlled markets and for government tenders.
          </li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Types of Centrifuge Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Types of Centrifuge Under BIS Certification Scheme
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The Scheme X accreditation for Centrifuges covers various types such
          as:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Laboratory Centrifuges</li>
          <li>Industrial Separators</li>
          <li>Centrifuge, Refrigerated</li>
          <li>Ultracentrifuges</li>
          <li>Gas Centrifuges</li>
          <li>Basket Centrifuges</li>
          <li>Decanter Centrifuges</li>
          <li>Continuous and Batch Centrifuges</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          All these types shall fulfill the applicable Indian Standards (IS
          codes) like IS 16819:2018/ISO 12100:2010 (Safety of Machinery General
          Principles for Design - Risk Assessment and Risk Reduction). All
          varieties should meet the appropriate Indian Standards (IS codes) for
          quality, safety, and energy efficiency.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Process of BIS Certification for Centrifuges
        </h2>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
          <li>
            Identify Relevant Standards: Refer IS codes relevant for your type
            of Centrifuge.
          </li>
          <li>
            Product Testing: Perform industry standard required performance and
            safety testing, at BIS-accredited labs.
          </li>
          <li>
            Factory Inspection: Check quality assurance systems in production
            sites by BIS officials.
          </li>
          <li>
            Application & Documentation: Provide technical requirements, quality
            handbook and test reports.
          </li>
          <li>
            Issue of BIS Licence for Centrifuges: You can put the BIS mark after
            it is approved.
          </li>
          <li>
            Ongoing Compliance: BIS checks and conducts unscheduled audits for
            compliance to standards.
          </li>
        </ul>

        <div className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Penalties for Non-Compliance
        </div>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers who do not have all models centrifuges certified with
          BIS Certification for Centrifuges by 1st September 2026 run the risk
          of:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
          <li>Sales/imports prohibited of uncertified centrifuges</li>
          <li>Forfeiture of non-complying equipment and monetary penalties</li>
          <li>It will make you ineligible for any government or PSU tenders</li>
          <li>Brand Equity permanently affected in India</li>
        </ul>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Conclusion Section */}
        <p className="text-gray-600 text-base font-geist mb-4">
          <span className="font-medium text-[#1e1e1e]">Conclusion:</span> BIS Scheme X Certification for Pumps and Liquid Elevators with OTR 2024 to be enforced; a milestone in India standardization of Industry.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          The implementation of BIS Scheme X Certification for Centrifuges in
          OTR 2024 is a step to bring in safety, efficiency and quality into the
          industrial and laboratory sector in India.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          Manufacturers, Importers and Exporters are taking advantage of this
          process by securing BIS Certification for Centrifuges, by obtaining
          BIS License for Centrifuges, and placing the BIS mark for Centrifuges
          on their product, demonstrating that their product meets the local
          market regulatory systems and the requirements of customers.
        </p>

        <AboutAuthor />
      </div>
    </div>
  );
};

// ... existing code ...

// ... existing code ...

const CentrifugesMainContentRight = () => {
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
