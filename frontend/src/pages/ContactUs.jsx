// =============================================
// REACT HOOKS
// =============================================
import { useState } from "react";

// =============================================
// REACT ROUTER
// =============================================
import { Link } from "react-router-dom";

// =============================================
// EXTERNAL LIBRARIES
// =============================================
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { ClockLoader } from "react-spinners";

// =============================================
// UI COMPONENTS
// =============================================
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// =============================================
// ICONS
// =============================================
import { Send, SlashIcon } from "lucide-react";

// =============================================
// CUSTOM COMPONENTS
// =============================================
import Footer from "@/common/Footer";

// =============================================
// HOOKS AND UTILITIES
// =============================================
import { toast } from "@/hooks/use-toast";

// =============================================
// CONFIGURATION
// =============================================
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

// =============================================
// UTILITY/HELPER COMPONENTS (Simple UI Components)
// =============================================

/**
 * SEO Breadcrumb Component - Renders structured data for search engines
 */
const SEOBreadcrumbData = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bis-certifications.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: "https://bis-certifications.com/contact",
          },
        ],
      })}
    </script>
  </Helmet>
);

/**
 * Navigation Breadcrumb Component - Displays page navigation path
 */
const NavigationBreadcrumb = () => (
  <div className="absolute md:top-5 top-3 left-0 w-full">
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
              <BreadcrumbPage>Contact Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  </div>
);

/**
 * Decorative Elements Component - Floating animations for visual appeal
 */
const DecorativeElements = () => (
  <div
    className="hidden md:block absolute top-[20%] z-10 right-[15%] w-[20px] h-[20px] rounded-full bg-blue-800/30 animate-float"
    style={{ animationDelay: "1s" }}
  />
);

/**
 * Page Header Component - Title and subtitle with separators
 */
const PageHeader = () => (
  <div className="w-full md:w-[600px] flex flex-col items-center justify-center">
    <h1 className="text-[32px] md:text-[48px] font-geist font-bold text-[#1E1E1E] text-center">
      Contact US
    </h1>
    <div className="flex w-full items-center justify-center gap-2 md:gap-3 mt-2 md:mt-0">
      <Separator className="hidden md:block w-[94.46px] h-[2px] bg-[#008080]" />
      <span className="uppercase font-poppins font-semibold text-[14px] md:text-[18px] text-[#008080] text-center">
        Get In Touch , We&apos;re Here to Assist You
      </span>
      <Separator className="hidden md:block w-[94.46px] h-[2px] bg-[#008080]" />
    </div>
  </div>
);

/**
 * Hero Image Component - Right side contact image
 */
const HeroImage = () => (
  <div className="z-20 w-full md:w-[580px] flex flex-col order-1 md:order-2">
    <img
      src="https://almondztrade.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontact_banner.7c465060.png&w=1920&q=75"
      alt="Software Solutions"
      className="w-full h-auto"
    />
  </div>
);

/**
 * Submit Button Component - Handles loading state and submission
 */
// eslint-disable-next-line react/prop-types
const SubmitButton = ({ loading }) => (
  <button
    type="submit"
    disabled={loading}
    className="flex justify-center font-geist text-white bg-blue-800 items-center gap-3 boxshadowbtn h-[50px] md:h-[58px] disabled:opacity-100"
  >
    {loading ? (
      <div className="flex gap-3 items-center justify-center">
        <ClockLoader size={22} color="#fff" />
        <span>Sending</span>
      </div>
    ) : (
      <div className="flex gap-3 items-center justify-center">
        <Send />
        <span>SUBMIT</span>
      </div>
    )}
  </button>
);

/**
 * Contact Info Section Component - Email and phone information
 */
const ContactInfoSection = () => (
  <div className="w-full h-auto md:h-[196px] bg-[#B9DEEB] py-8 md:py-0">
    <div className="max-w-[84rem] h-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0 gap-8 md:gap-0">
      {/* Get In Touch Section */}
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
          Get In Touch With Us
        </h4>
        <p className="font-geist text-[16px] md:text-[20px] font-medium text-center">
          <span className="text-[#1E40AF]">We&apos;re always happy</span> to
          Assist You
        </p>
      </div>

      {/* Vertical Separator */}
      <Separator
        orientation="vertical"
        className="bg-[#005065] h-[3px] md:h-[109px] w-full md:w-[3px] rounded-xl hidden md:block"
      />
      <Separator
        orientation="horizontal"
        className="bg-[#005065] h-[3px] w-full rounded-xl md:hidden"
      />

      {/* Email Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
          Email
        </h4>
        <p className="font-geist text-[#3C3C48] text-[16px] md:text-[20px] font-medium text-center">
          admin@bis-certifications.com
        </p>
      </div>

      {/* Vertical Separator */}
      <Separator
        orientation="vertical"
        className="bg-[#005065] h-[3px] md:h-[109px] w-full md:w-[3px] rounded-xl hidden md:block"
      />
      <Separator
        orientation="horizontal"
        className="bg-[#005065] h-[3px] w-full rounded-xl md:hidden"
      />

      {/* Phone Section */}
      <div className="w-full flex flex-col items-center justify-center">
        <h4 className="font-geist text-[24px] md:text-[30px] leading-tight text-[#1E1E1E] font-bold text-center">
          Phone Number
        </h4>
        <p className="font-geist text-[#3C3C48] text-[16px] md:text-[20px] font-medium text-center">
          +91-8010505057
        </p>
      </div>
    </div>
  </div>
);

// =============================================
// COMPLEX COMPONENTS (Components with State/Logic)
// =============================================

/**
 * Contact Form Component - Handles form state, validation, and submission
 */
const ContactForm = () => {
  // =============================================
  // STATE MANAGEMENT
  // =============================================
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    pageUrl: window.location.href,
    pageName: "Contact Page",
  });

  const { fullName, email, phoneNumber, message } = formData;

  // =============================================
  // VALIDATION PATTERNS
  // =============================================
  const validationPatterns = {
    name: /^[a-zA-Z\s.'-]{2,50}$/,
    phone: /^\+?[0-9\s-]{8,15}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  };

  // =============================================
  // FORM HANDLERS
  // =============================================
  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    // Full name validation
    if (!validationPatterns.name.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Please Enter a valid Full Name.",
        description: "Name Should only Contain Letters and Spaces.",
      });
      return false;
    }

    // Phone number validation
    if (!validationPatterns.phone.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Please Enter a Valid Phone Number",
        description: "Phone Number Should be (8-15 digits)",
      });
      return false;
    }

    // Email validation
    if (!validationPatterns.email.test(email)) {
      toast({
        variant: "destructive",
        title: "Please Enter a valid Email Address.",
        description: "Check if Your Email Format is Correct",
      });
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
      pageUrl: window.location.href,
      pageName: "Contact Page",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form data
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/contact/submit-contact`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      // Success notification
      toast({
        title: "Contact form submit successfully!",
        description:
          "Thank you for Contacting Us. Our Team will Reach out to you Shortly.",
      });

      // Reset form on success
      resetForm();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";

      toast({
        variant: "destructive",
        title: errorMessage || "Failed to submit contact form details!",
        description:
          "Something Went Wrong. Please Check Your Details and Try Again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // =============================================
  // FORM FIELD STYLES (Reusable styles object)
  // =============================================
  const inputStyles = `
    font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] 
    focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] 
    rounded-[12px] h-[50px] md:h-[58px] placeholder:text-[#7E7E7E]/90 
    text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold 
    font-semibold placeholder:text-[14px] text-[14px] md:placeholder:text-[16px] 
    md:text-[16px] placeholder:leading-[24px] leading-[24px] 
    placeholder:tracking-wide tracking-wide px-5 disabled:opacity-100
  `;

  const textareaStyles = `
    font-poppins focus-visible:ring-1 w-full focus-visible:ring-[#BDBDBD] 
    focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] 
    rounded-[12px] h-48 md:h-64 placeholder:text-[#7E7E7E]/90 
    text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold 
    font-semibold placeholder:text-[14px] text-[14px] md:placeholder:text-[16px] 
    md:text-[16px] placeholder:leading-[24px] leading-[24px] 
    placeholder:tracking-wide tracking-wide p-5 resize-none disabled:opacity-100
  `;

  // =============================================
  // COMPONENT RENDER
  // =============================================
  return (
    <div className="w-full md:w-[600px] flex flex-col items-center justify-center order-2 md:order-1">
      <PageHeader />

      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col mt-4 gap-5 w-full"
      >
        <Input
          name="fullName"
          value={fullName}
          onChange={handleInputChange}
          disabled={loading}
          placeholder="Please Enter Your Full Name *"
          className={inputStyles}
        />

        <Input
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
          disabled={loading}
          placeholder="Please Enter Your Phone Number *"
          className={inputStyles}
        />

        <Input
          name="email"
          value={email}
          onChange={handleInputChange}
          disabled={loading}
          placeholder="Please Enter Your Email Address *"
          className={inputStyles}
        />

        <Textarea
          name="message"
          value={message}
          onChange={handleInputChange}
          disabled={loading}
          placeholder="Which Certification is required ? *"
          className={textareaStyles}
        />

        <SubmitButton loading={loading} />
      </form>
    </div>
  );
};

// =============================================
// MAIN COMPONENT (Entry Point)
// =============================================

/**
 * ContactUs Main Component - Entry point that orchestrates the entire contact page
 * Combines SEO, navigation, form, and footer components
 */
const ContactUs = () => {
  return (
    <>
      {/* SEO and Structured Data */}
      <SEOBreadcrumbData />

      {/* Main Content Section */}
      <main className="w-full pt-[30px] md:pt-[50px] pb-[50px] md:pb-[90px] relative overflow-hidden bg-gradient-to-b from-white to-[#D2DCFF]">
        {/* Navigation Breadcrumb */}
        <NavigationBreadcrumb />

        {/* Decorative Background Elements */}
        <DecorativeElements />

        {/* Main Content Container */}
        <div className="max-w-[84rem] z-[100] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
          {/* Contact Form Section */}
          <ContactForm />

          {/* Hero Image Section */}
          <HeroImage />
        </div>
      </main>

      {/* Contact Information Section */}
      <ContactInfoSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;
