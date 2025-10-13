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
import { Helmet } from "react-helmet-async";
import AboutAuthor from "@/components/common/AboutAuthor";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";

const BunkBedsBlog = () => {
  return (
    <div className="relative w-full">
      <Helmet>
        <title>BIS Certificate for Bunk Beds Under IS 17636:2022</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="BIS License for Bunk Beds under IS 17636:2022. Learn what is BIS Certificate, BIS application process, required documents, BIS certificate cost, and how to get BIS certificate in India with expert consultants."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="BIS Certification, BIS Certificate India, BIS License for Bunks Beds , IS 17636:2022"
        />
        <meta name="author" content="Sun Certifications India" />
        <meta name="publisher" content="Dhruv Aggarwal, Head of Operations at Sun Certification India" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Bunk Beds BIS Certification under IS 17636:2022 - Complete Guide"
        />
        <meta
          property="og:description"
          content="BIS License for Bunk Beds under IS 17636:2022. Learn what is BIS Certificate, BIS application process, required documents, BIS certificate cost, and how to get BIS certificate in India with expert consultants."
        />
        <meta
          property="og:url"
          content="https://bis-certifications.com/bis-license-for-bunk-beds-Indian-bis"
        />
        <meta property="og:site_name" content="Sun Certifications India" />
        <meta property="og:type" content="article" />

        {/* Twitter Tags */}
        <meta
          name="twitter:title"
          content="BIS Certification for Bunk Beds Under |IS 17636:2022 | Completely Explained"
        />
        <meta
          name="twitter:description"
          content="BIS License for Bunk Beds under IS 17636:2022. Learn what is BIS Certificate, BIS application process, required documents, BIS certificate cost, and how to get BIS certificate in India with expert consultants."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://bis-certifications.com/bis-license-for-bunk-beds-Indian-bis"
        />
      </Helmet>

      <BunkBedsBlogBreadcrumb />

      <BunkBedsBlogMainContent />

      <Services />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default BunkBedsBlog;

const BunkBedsBlogBreadcrumb = () => {
  return (
    <div className="absolute md:top-5 top-3 left-0 w-full z-30">
      <div className="max-w-[80rem] mx-auto px-4">
        <div className="w-full overflow-x-auto scrollbar-hide font-inter">
          <div className="w-fit min-w-full">
            <Breadcrumb>
              <BreadcrumbList className="flex-nowrap">
                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbLink asChild>
                    <Link to="/Blogs">Latest Blogs</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="flex-shrink-0">
                  <SlashIcon />
                </BreadcrumbSeparator>

                <BreadcrumbItem className="flex-shrink-0">
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certification for Bunk Beds in India
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  );
};

const BunkBedsBlogMainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12 pt-[60px] md:pt-[75px]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side Content */}
        <BunkBedsBlogMainContentLeft />

        {/* Right Side Content */}
        {/* <BunkBedsBlogContentRight /> */}
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const BunkBedsBlogMainContentLeft = () => {
  return (
    <div className="flex-1 overflow-y-auto pt-2 px-2  -mt-2 -mx-2 ">
      {/* Blog Content */}
      <div className="p-6 mb-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 shadow-[0_1px_5px_-4px_rgba(19,19,22,0.7),0_4px_8px_rgba(32,42,54,0.05)] ring-1 ring-gray-900/[0.075] transition-shadow hover:shadow-[0_1px_7px_-4px_rgba(19,19,22,0.8),0_4px_11px_rgba(32,42,54,0.05)] hover:ring-gray-900/[0.125]">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#1e1e1e] mb-4">
          BIS Certification for Bunk Beds in India: Complete Guide for
          Manufacturers
        </h1>

        {/* Introduction Paragraph 1 */}
        <p className="text-gray-600 text-base font-geist mb-4">
          The furniture industry in India is rapidly growing, and bunk beds are
          becoming increasingly popular in schools, hostels, and modern homes.
          However, with rising demand comes the need for quality, safety, and
          reliability. To ensure consumer safety, the Bureau of Indian Standards
          (BIS) has made it mandatory for bunk bed manufacturers to obtain a BIS
          Certificate before selling their products in India.
        </p>

        {/* Introduction Paragraph 2 */}
        <p className="text-gray-600 text-base font-geist mb-6">
          Whether you are a small-scale producer or a large furniture
          manufacturer, obtaining a BIS License (BIS Licence) is now essential.
          In this article, we’ll explain What is BIS, the BIS Certification
          process, required BIS Certification Documents, the cost of BIS
          Certification, and the role of professional BIS Consultants in India.
        </p>

        {/* What is BIS Certificate Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS full form is Bureau of Indian Standards. It is the national
          standards body of India responsible for developing and maintaining
          product quality benchmarks.
        </p>

        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          What is BIS Certificate?
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          A BIS Certificate is an official recognition granted by BIS to
          manufacturers who comply with the prescribed BIS Standards.
        </p>

        {/* Bullet Points */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>
            <span className="font-medium text-[#1e1e1e]">
              BIS Certificate Meaning:{" "}
            </span>{" "}
            It proves that a product is safe, durable, and manufactured
            according to Indian Standards.
          </li>
          <li>
            For bunk beds, this includes tests for strength, durability,
            stability, and safety.
          </li>
          <li>
            Only after receiving the BIS Mark (ISI mark) can a bunk bed be
            legally sold in India.
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          The BIS Logo or BIS Certification Mark is placed on products that
          successfully pass certification, giving customers confidence in their
          quality.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Next Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Why Bunk Beds Under IS 17636:2022 Require BIS Certification in India
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          Bunk beds, if not manufactured properly, can pose safety hazards such
          as collapsing, tipping over, or causing injuries due to sharp edges.
          To minimize risks, the BIS Notification mandates that every bunk bed
          sold in India must meet the latest BIS Standards.
        </p>
        {/* bullet ponits heading */}
        <p className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          This ensures:
        </p>

        {/* Bullet Points */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-2 mb-4">
          <li>Consumer safety in schools, hostels, and homes</li>
          <li>Uniform product quality across manufacturers</li>
          <li>Legal compliance under Indian regulations</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Without a valid BIS License, manufacturers cannot sell or distribute
          bunk beds in the Indian market.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* BIS Certification Process Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Certification Process for Bunk Beds Under IS 17636:2022
        </h2>

        <p className="text-gray-600 text-base font-geist mb-6">
          The BIS Product Certification process involves several steps:
        </p>

        {/* Step 1 */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Step 1: BIS Application
        </h3>

        <p className="text-gray-600 text-base font-geist mb-6">
          Manufacturers must start by filing a BIS Application either offline or
          through the BIS Certificate online portal.
        </p>

        {/* Step 2 */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Step 2: Submission of BIS Certification Documents
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          Manufacturers must provide the following Documents for BIS
          Certification:
        </p>

        {/* Document Requirements */}
        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Company registration certificate</li>
          <li>Factory license and GST details</li>
          <li>Manufacturing process details</li>
          <li>Technical specifications of bunk beds</li>
          <li>Raw material information</li>
          <li>Test reports from recognized labs</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          These BIS Certificate Documents are essential for approval.
        </p>

        {/* Step 3 */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Step 3: Product Testing
        </h3>

        <p className="text-gray-600 text-base font-geist mb-6">
          Bunk beds must be tested in BIS-recognized laboratories to verify
          compliance with BIS Standards (load capacity, stability, finishing,
          safety).
        </p>

        {/* Step 4 */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Step 4: Factory Inspection
        </h3>

        <p className="text-gray-600 text-base font-geist mb-6">
          A BIS officer conducts a physical inspection of the manufacturing unit
          to ensure compliance.
        </p>

        {/* Step 5 */}
        <h3 className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          Step 5: Grant of BIS Certificate
        </h3>

        <p className="text-gray-600 text-base font-geist mb-4">
          After successful verification, BIS issues the BIS License, allowing
          the manufacturer to use the BIS Logo (ISI Mark) on bunk beds.
        </p>

        <p className="text-gray-600 text-base font-geist mb-6">
          This structured BIS Certificate Process ensures only high-quality and
          safe bunk beds reach the market.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* BIS Certificate Registration Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Cost of BIS Certification
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          One of the most common questions manufacturers ask is: How much is the
          BIS Certification cost?
        </p>

        <p className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          The Cost of BIS Certification in India varies depending on:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Product category</li>
          <li>Application fees</li>
          <li>Product testing charges</li>
          <li>Inspection fees</li>
          <li>Renewal charges</li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-6">
          Typically, the BIS License cost includes application fees, testing
          expenses, and audit charges. For smaller manufacturers, hiring a BIS
          Registration Consultant can help reduce the overall BIS Certificate
          cost by avoiding errors and rejections.
        </p>

        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* Cost of BIS Certification Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          BIS Consultants in India
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certification process in India can feel complicated,
          especially for first-time applicants. This is where BIS Certification
          Consultants play a vital role.
        </p>

        <p className="text-lg font-geist font-medium text-[#1e1e1e] mb-3">
          A BIS Consultant in Delhi or other cities can assist by:
        </p>

        <ul className="list-disc list-inside text-base font-geist text-gray-600 space-y-1 mb-4">
          <li>Preparing BIS Certification Documents</li>
          <li>Guiding on the BIS Certificate Registration process</li>
          <li>Filing the BIS Application correctly</li>
          <li>Coordinating with BIS officials during inspections</li>
          <li>
            Ensuring timely approval of your Bureau of Indian Standards License
          </li>
        </ul>

        <p className="text-gray-600 text-base font-geist mb-4">
          Whether you are a local producer or an importer, hiring a professional BIS Agent or consultant ensures smooth and hassle-free certification.
        </p>



        {/* Separator Line */}
        <div className="h-px w-full bg-gray-300 my-6"></div>

        {/* BIS Consultants Section */}
        <h2 className="text-xl font-geist font-medium text-[#1e1e1e] mb-4">
          Conclusion
        </h2>

        <p className="text-gray-600 text-base font-geist mb-4">
          The BIS Certificate in India is no longer optional for bunk bed manufacturers—it is a mandatory compliance requirement. By obtaining a Bureau of Indian Standards License, manufacturers can ensure product safety, gain customer trust, and avoid penalties.
        </p>

        <p className="text-gray-600 text-base font-geist mb-4">
          If you’re wondering how to get BIS Certification in India, the answer is simple: follow the proper BIS Certification Process or hire experienced BIS Consultants in India to handle the work for you.
        </p>



        <p className="text-gray-600 text-base font-geist mb-6">
          Start your BIS Certificate Registration today and ensure your bunk beds proudly carry the BIS Certification Mark (BIS Logo), guaranteeing quality and safety for consumers across India..
        </p>




        {/* Featured Image */}
        <div className="mb-6 flex justify-center">
          <img
            src="/blogImages/BISCertificationforBunkBeds-IS18508.png"
            alt="BIS Certificate for Bunk Beds IS 17636:2022"
            title="BIS Certification for Bunk Beds IS 17636:2022"
            className="w-full max-w-md h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <AboutAuthor />
      </div>
    </div>
  );
};

const BunkBedsBlogContentRight = () => {
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
  const currentPageName = "Refined Zinc Blog Page";

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