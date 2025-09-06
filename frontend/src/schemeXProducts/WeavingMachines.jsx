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
  
  const WeavingMachines = () => {
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
  
        <WeavingMachinesBreadcrumb />
        <WeavingMachinesMainContent />
        <Services />
        <VideoSection />
        <Footer />
      </div>
    );
  };
  
  export default WeavingMachines;
  
  const WeavingMachinesBreadcrumb = () => {
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
                  BIS Scheme X Certification of Weaving Machines
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    );
  };
  
  const WeavingMachinesMainContent = () => {
    return (
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
          {/* Left Side Content */}
          <WeavingMachinesMainContentLeft />
  
          {/* Right Side Content */}
          <WeavingMachinesMainContentRight />
        </div>
      </div>
    );
  };
  
 

const WeavingMachinesMainContentLeft = () => {
    return (
      <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
        {/* Blog Content */}
        <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
          {/* Main Heading */}
          <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
            BIS Scheme X Certification of Weaving Machines
          </h1>
  
          {/* Introduction Paragraph 1 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            India's textile and apparel industry is among the country's largest supporters of manufacturing, exports, and jobs. At the core of this industry are weaving machines, necessary for making fabric for clothes, home furnishings, and industrial use. As domestic demand continues to increase and with the country's heavy export focus, there is a need to guarantee quality and safety standards of weaving machines within the country.
          </p>
  
          {/* Introduction Paragraph 2 */}
          <p className="text-gray-600 text-base font-geist mb-4">
            To ensure this, the Bureau of Indian Standards (BIS), the National Standards Body of India, has been set up and it is the BIS that has been formulating and implementing the product certification schemes in India under which the product is certified. This standard ensures that machines which enter the Indian market meet Indian Standards for performance, durability and safety.
          </p>
  
          {/* Introduction Paragraph 3 */}
          <p className="text-gray-600 text-base font-geist mb-6">
            In this article, we will explain the significance of the BIS Scheme X Certificate for weaving machines, the process of compliance under the OTR for weaving machines and how to get BIS certification in India, BIS Registration for Weaving Machines and labeling of the ISI mark for Weaving Machines.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Why BIS is Important Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Why BIS for Weaving Machines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Weaving machines are used across:
          </p>
  
          {/* Usage Areas */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Textile mills and garment factories</li>
            <li>Home furnishing production units</li>
            <li>Industrial fabric manufacturing</li>
            <li>Export-focused textile plants</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Deprived of BIS for Weaving Machines, unbranded machinery can result in :
          </p>
  
          {/* Problems with Non-Certified Equipment */}
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Inferior fabric and defects.</li>
            <li>Breakagedown Rate, a measure of mechanical problems and time out of action</li>
            <li>Increased costs of operation, waste and waste management</li>
            <li>Breach of government and export contracts</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            The BIS mark on Weaving Machines gives confidence to the consumer and inspector that the product is up to Indian standards.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* What is BIS Scheme X Certification Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            What is BIS Scheme X Certification for Weaving Machines?
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            BIS Scheme X Certification for Weaving Machines is part of BIS Conformity Assessment Regulations, 2018, that aims to regulate quality in important machinery.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Some of the Features of Scheme X certification for Weaving Machines:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Mandatory for both Indian and Foreign Manufacturing supplying to India</li>
            <li>Covers various weaving machines with respect to which Indian Standards are in force</li>
            <li>Calls for machine testing, factory inspections and audits that continue over time</li>
            <li>Permits the use of official BIS mark for Weaving Machines</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* OTR Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            BIS OTR for Weaving Machines
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Scheme X Certification will be mandatory under the Omnibus Technical Regulation (OTR) 2024 for Weaving Machines, published by the Ministry of Heavy Industries.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            Deadline: 1st September, 2026 Application for grant of a BIS Licence for Weaving Machines shall be mandatory for all manufacturers and importers. Post deadline, un-registered weaving machines can't be sold, imported or delivered for commercial use in India.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Advantages Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Advantages of BIS Certification for Weaving Machines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-6">
            <li>Product Quality Assurance: Certified machineries ensures uninterrupted production and optimal efficiency of fabric.</li>
            <li>Market Access & Tenders: BIS license for Weaving Machines is generally compulsory in government tenders and big supply orders.</li>
            <li>Buyer Confidence: The BIS mark for Weaving Machines ensures trust in the domestic and overseas market.</li>
            <li>Legal & Regulatory Compliance: Ensures compliance of Indian regulations under the OTR for Weaving Machines.</li>
            <li>Competitive Advantage: Certified machinery is rare in an extremely competitive textile equipment industry.</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Types of Weaving Machines Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Types of Weaving Machines Under Scheme X Certification
          </h2>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            The Weaving Machines receive the Scheme X certification:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
            <li>Power looms</li>
            <li>Rapier looms</li>
            <li>Air jet looms</li>
            <li>Water jet looms</li>
            <li>Shuttle looms</li>
            <li>Automatic looms</li>
            <li>Industrial specialized weaving machinery</li>
          </ul>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            All those must be in accordance with applicable Indian Standard (IS Codes) like IS 17361(Part 6): 2020 / ISO 11111: (Part 6) : 2005 (Textile Machinery Safety Requirements Part 6 Fabric Manufacturing Machinery). All types shall conform to relevant Indian Standards (IS codes) based on design, performance, safety and energy conservation.
          </p>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Process Section */}
          <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Process for BIS License for Weaving Machines
          </h2>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
            <li>Identify Applicable Standards: Locate the IS number of your type of weaving machine.</li>
            <li>Product Testing: Machines are tested in laboratories accredited by BIS for safety and efficiency.</li>
            <li>Factory Inspection: Inspectors of BIS do a thorough examination of the process of manufacturing and quality control system.</li>
            <li>Application Submission: Submit documents such as technical details, test reports and quality manuals.</li>
            <li>Issue of BIS Licence for Weaving Machines: With the approval, the manufacturers would be able to mark BIS on the product.</li>
            <li>Ongoing Compliance: Audits and testing are conducted on a regular basis to make sure we continue to meet our standards.</li>
          </ul>
  
          <duv className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
            Penalties for Non-Compliance
          </duv>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            Non-compliance of BIS Certification for Weaving Machines within OTR will result:
          </p>
  
          <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-6">
            <li>Prohibition of uncertified machines from being sold or imported</li>
            <li>Heavy fines and product seizures.</li>
            <li>Disqualification in government works/tenders</li>
            <li>Long term damage to brand and market reputation</li>
          </ul>
  
          {/* Separator Line */}
          <div className="h-px w-full bg-gray-300 my-6"></div>
  
          {/* Conclusion Section */}
          <div className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
            Conclusion
          </div>
  
          <p className="text-gray-600 text-base font-geist mb-4">
            The roll out of BIS Scheme X Certification for Weaving Machines through OTR for Weaving Machines (2024) is a major milestone in having a textile industry in India that uses safe, quality and reliable machinery.
          </p>
  
          <p className="text-gray-600 text-base font-geist mb-6">
            For the manufacturers/importers, acquiring a BIS License for Weaving Machines and marking products with the BIS effigy is not only a mandatory compliance but also adds value to the product for marketing. It consolidates market reliability and guarantees compliance, it also in intermediate terms impels competitiveness within the domestic and international markets for textiles.
          </p>
  
          <AboutAuthor />
        </div>
      </div>
    );
  };
  

  
  const WeavingMachinesMainContentRight = () => {
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