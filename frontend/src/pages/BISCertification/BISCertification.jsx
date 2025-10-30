import { Separator } from "@/components/ui/separator";
import { useState, useEffect, useRef, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import { ISIMarkAndBISCommonTable } from "../ISIMarkAndBISCommonTable/ISIMarkAndBISCommonTable";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterEng from "@/components/manual/Footer/FooterEng";
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const BISImage = "/services-images/BIS.jpg";
const CDSCO = "/services-images/CDSCO.jpg";
const BISCRS = "/services-images/BISCRS.jpg";
const PlasticWasteManagement = "/services-images/PlasticWasteManagement.jpg";
const EPRCertificate = "/services-images/EPRCertificate.jpg";
const LMPC = "/services-images/LMPC.jpg";
const ISIMarkImage = "/services-images/ISIMark.jpg";

const BISCertification = () => {
  return (
    <div className="relative w-full">
      <BISCertificationMetaTags />
      <BISCertificationBreadcrumb />
      <BISCertificationHero />
      <BISCertificationIndex />
      <BISCertificationContent />
      <BISCertificationFaq />
      <ISIMarkAndBISCommonTable />
      <div id="services">
        <BISCertificationServices />
      </div>
      <FooterEng />
    </div>
  );
};

export default BISCertification;

const BISCertificationMetaTags = () => {
  const title = "BIS Certification Types, Process, Documents, Fee";
  const description =
    "BIS certification refers to the process of obtaining a quality standard certificate from the Bureau of Indian Standards (BIS) for manufacturing and selling various products in India.";
  const keywords =
    "BIS Certification, BIS Certification Process, BIS Registration, BIS Registration Process, BIS Certification Scheme, Product Certification Scheme, Mandatory Certification Scheme, BIS Mandatory Products List, ISI Mark, BIS FMCS, BIS Hallmarking Scheme, Eco Mark Scheme, BIS Certification Consultant, ISI Certification Consultant, BIS ISI Mark Consultant, What is BIS Certification, BIS Certification Download, BIS Certification Cost, India BIS Certification, BIS Certification Full Form, BIS Certification India, Indian BIS Certification, BIS Certification Means, BIS Certification Check, BIS License Online in India, BIS Certification Online, BIS Certificate, BIS Certificate Online.";
  const canonicalUrl = window.location.href;
  const author = "Sun Certifications India";
  const publisher =
    "Dhruv Aggarwal, Head of Operations at Sun Certification India";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

const BISCertificationBreadcrumb = () => {
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
                  <BreadcrumbPage className="whitespace-nowrap">
                    BIS Certification India for Importers and Manufacturers
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

const BISCertificationHero = () => {
  return (
    <section
      className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]"
      aria-label="BIS Certification Hero"
    >
      {/* Background gradient */}
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>

      {/* Decorative elements */}
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        {/* Left Side */}
        <article className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              BIS Certification India
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            for Importers and Manufacturers
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            BIS certification ensures product quality and safety in India. It is
            mandatory for many products and requires testing, documentation, and
            approval.
          </p>

          <nav className="flex items-center -mt-2">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#125E5A]/30 group-hover:border-[#125E5A] transition-all duration-300 mr-3">
                <div className="w-3 h-3 border-t-2 border-r-2 border-[#125E5A] rotate-45 translate-x-[-1px]"></div>
              </div>
              <span className="font-geist text-[#125E5A] text-[18px] font-medium group-hover:translate-x-1 transition-all duration-300">
                View Services
              </span>
            </div>
          </nav>
        </article>

        {/* Right Side */}
        <BISCertificationContactForm />
      </div>
    </section>
  );
};

const BISCertificationContactForm = () => {
  const [loading, setLoading] = useState(false);

  // Function to get page name based on URL
  const getPageName = () => {
    const path = window.location.pathname;
    // Service pages
    if (path.includes("/what-is-bis-certificate-indian-bis"))
      return "BIS Certification - English Page";
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    productName: "",
    message: "",
    pageUrl: window.location.href,
    pageName: getPageName(),
  });

  const { fullName, email, phoneNumber, companyName, productName, message } =
    formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log("Form Data:", formData);

    // Full name validation
    const nameRegex = /^[a-zA-Z\s.'-]{2,50}$/;
    if (!nameRegex.test(fullName)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid full name.",
        description: "Name should only contain letters and spaces.",
      });
      setLoading(false);
      return;
    }

    // Email validation - allow any domain
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid email address.",
        description: "Check if your email format is correct",
      });
      setLoading(false);
      return;
    }

    // Phone number validation
    const phoneRegex = /^\+?[0-9\s-]{8,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid phone number",
        description: "Phone number must be (8-15 digits)",
      });
      setLoading(false);
      return;
    }

    //  console.log(BASE_URL);
    try {
      const response = await axios.post(
        `${BASE_URL}/appointment/submit-appointment`,
        formData
      );

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast({
        title: "Contact form submitted successfully!",
        description:
          "Thank you for contacting us. Our team will get back to you soon.",
      });

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        productName: "",
        message: "",
        pageUrl: window.location.href,
        pageName: getPageName(),
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast({
        variant: "destructive",
        title: errorMessage || "Failed to submit contact form details!",
        description:
          "Something went wrong. Please check your details and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 w-full md:w-[580px] h-auto md:h-[435px] flex flex-col">
      <div className="flex w-full items-center gap-3">
        <span className="uppercase font-poppins font-semibold text-[18px] md:text-[20px] text-[#008080]">
          Contact Us
        </span>
        <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
      </div>

      <h3 className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Book an Appointment
      </h3>

      <p className="font-medium font-poppins text-[18px] md:text-[20px] text-[#996C6C]">
        Want to contact our team and schedule a call?
        <span className="text-black"> Try Now</span>
      </p>

      <form onSubmit={handleFormSubmit} className="flex flex-col mt-5 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleOnChange}
            placeholder="Full Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Email Address *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleOnChange}
            placeholder="Contact Number *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleOnChange}
            placeholder="Company Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <Input
            disabled={loading}
            required
            type="text"
            name="productName"
            value={productName}
            onChange={handleOnChange}
            placeholder="Product Name *"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />

          <Input
            disabled={loading}
            required
            type="text"
            name="message"
            value={message}
            onChange={handleOnChange}
            placeholder="Required Certification*"
            className="disabled:opacity-100 w-full focus-visible:ring-1 focus-visible:ring-[#BDBDBD] focus-visible:ring-offset-0 bg-[#F9F9F9] border-2 border-[#BDBDBD] rounded-[12px] h-[54px] md:h-[58px] text-[#7E7E7E]/90 font-poppins font-semibold text-[15px] md:text-[16px] leading-[24px] tracking-wide px-5 placeholder:text-[#7E7E7E]/90 placeholder:font-poppins placeholder:font-semibold placeholder:leading-[24px] placeholder:tracking-wide"
          />
        </div>

        <Button
          disabled={loading}
          type="submit"
          className="disabled:opacity-100 mt-1 w-[218px] h-[50px] md:h-[60px] bg-[#1A8781] hover:bg-[#1A8781]/90 rounded-[5px] text-[15px] md:text-[15px] font-poppins tracking-wide leading-[28px] shadow-elegant transition-all duration-300 hover:translate-y-[-2px]"
        >
          {loading ? (
            <div className="flex gap-3 items-center justify-center">
              <ClockLoader size={22} color="#fff" />
              <span>Sending</span>
            </div>
          ) : (
            <div className="flex gap-3 items-center justify-center">
              <span>Book Appointment</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};

const BISCertificationIndex = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "schemes",
      "process",
      "documents",
      "cost",
      "air",
      "conclusion",
      "faqs",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    schemes: "Schemes",
    process: "Process",
    documents: "Documents",
    cost: "Cost",
    air: "Air",
    conclusion: "Conclusion",
    faqs: "FAQs",
  };

  const handleItemClick = (item) => {
    const element = document.getElementById(
      item.toLowerCase().replace(/\s+/g, "-")
    );
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(item);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const rect = stickyRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 44);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = SECTIONS[i];
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;

          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy(); // Initial check

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [SECTIONS]);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center justify-between px-4 h-20">
        <div className="text-base font-semibold font-geist tracking-wider uppercase text-blue-900">
          {MENU_ITEMS[activeSection]}
        </div>
        <button
          ref={toggleButtonRef}
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-blue-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <div
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 cursor-pointer transition-colors ${
                  item === activeSection
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                <div className="font-geist tracking-wider uppercase">
                  {MENU_ITEMS[item]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-12 h-full max-w-[88rem] mx-auto">
        {SECTIONS.map((item) => (
          <div
            key={item}
            onClick={() => handleItemClick(item)}
            className="relative cursor-pointer group whitespace-nowrap px-2"
          >
            <div
              className={`text-base font-semibold font-geist tracking-wider uppercase transition-colors duration-300 ${
                item === activeSection
                  ? "text-blue-900"
                  : "text-blue-950 group-hover:text-blue-900"
              }`}
            >
              {MENU_ITEMS[item]}
            </div>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 transition-transform duration-300 ${
                item === activeSection
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BISCertificationContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        {/* Left Side */}
        <BISCertificationContentLeft />
        {/* Right Side */}
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const BISCertificationContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <OverviewSection />
        <div className="service-left-content-divider" />
        <SchemesSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <DocumentsSection />
        <div className="service-left-content-divider" />
        <CostSection />
        <div className="service-left-content-divider" />
        <AIRSection />
        <div className="service-left-content-divider" />
        <ConclusionSection />
        <div className="service-left-content-divider" />
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      {/* Overview */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overview</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h1 className="service-left-content-heading-two">
        BIS ISI Mark Certification for Indian Manufacturers
      </h1>

      <div className="flex justify-center mt-[20px] md:mt-[26px]">
        <img
          src="/services-main-images/IndianBisCertification.png"
          alt="Indian BIS Certification"
          title="BIS Certificate for Indian manufactures"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      <h2 className="service-left-content-heading-three">
        Introduction: Why BIS Certification Matters
      </h2>

      <p className="service-left-content-paragraph">
        Take for instance, a manufacturer from Germany who has invented a unique
        electronic device and is planning to sell it in the fast paced Indian
        Market. The device is unique, and safe and has also gained approvals in
        Europe. However, when the device is brought to the port in India, the
        customs officers hold the device. The question is, "Why?" The answer is,
        the device is supposed to have a BIS certification, which is a crucial
        part to sell electronic products in India.
      </p>

      <p className="service-left-content-paragraph">
        Many global and Indian manufacturers deal with the same instances every
        year. For Indian consumers, the BIS mark on a product is not just a
        logo, it is a mark of trust that the product has been tested for
        quality, safety, and reliability. For a business, it is the gateway to
        one of the largest markets in the entire world.
      </p>

      <p className="service-left-content-paragraph">
        This article will answer all the queries on BIS certification, its
        necessity, processes, benefits, schemes, costs, and the system and its
        navigation available to both foreign and domestic manufacturers.
      </p>

      <h2 className="service-left-content-heading-three">
        What is BIS Certification for Manufacturers and Importers?
      </h2>

      <p className="service-left-content-paragraph">
        BIS Certification is a quality assurance and safety certification
        provided by the Bureau of Indian Standards (BIS), the national
        certification body of India under the Ministry of Consumer Affairs. The
        BIS certification ensures that a product conforms to the Indian
        Standards (IS) in regard to performance, safety, and quality.
      </p>
      <p className="service-left-content-paragraph">
        When a product fulfills these quality standards requirements, the Bureau
        of Indian Standards issues a BIS license or BIS certificate, signifying
        the product is eligible to bear the ISI mark (for domestic schemes) or a
        CRS mark with a unique registration number (under BIS Compulsory
        Registration Scheme).
      </p>
      <p className="service-left-content-paragraph">
        For many Indian manufacturers and importers securing BIS certification
        is a must. It covers a wide range of products including electrical
        appliances, cement and steel products, package drinking water,
        electronics like mobile phones, LED lights, power banks, precious metal
        jewelry (through hallmarking) and many more. The manufacturers and
        importers of these mandatory products cannot legally sell or distribute
        goods in India without BIS recognition.
      </p>

      <h2 className="service-left-content-heading-three">
        A Brief History of BIS in India
      </h2>

      <p className="service-left-content-paragraph">
        The Bureau of Indian Standards (BIS) was formed in 1986 taking over the
        Indian Standards Institution (ISI) which was formed in 1947. BIS is now
        considered to be a quality guardian for standards in India and has
        aligned their practices to international levels and made the necessary
        amendments for the Indian conditions.
      </p>

      <h3 className="service-left-content-heading-three">
        Remarkable Milestones
      </h3>

      <PointsListWithoutHeading
        points={[
          "In 1947 the ISI was founded to support quality control systems after the country gained independence.",
          "In 1955 the ISI mark was awarded, becoming one of the most famous quality symbols in India.",
          "In 1986, the BIS Act was passed, replacing ISI with the Bureau of Indian Standards.",
          "In 2016 and 2018, further amendments enriched the BIS's responsibilities, making hallmarking and product certification more thorough.",
        ]}
      />

      <p className="service-left-content-paragraph">
        Currently, BIS guarantees the safety, reliability, and standardization
        of thousands of tools and machinery for Indian users across multiple
        industries.
      </p>

      <h2 className="service-left-content-heading-three">
        Why is BIS Certification mandatory in India?
      </h2>
      <p className="service-left-content-paragraph">
        The Indian market is enormous, ever-changing, and sensitive to price
        shifts. However, this openness also leaves the market exposed to cheap
        and unsafe goods. In this context, BIS certification acts as a
        protective barrier.
      </p>
      <PointsListWithoutHeading
        points={[
          "Consumer Safety - protects people from potential accidents, health issues, and deceit.",
          "Market Regulation - ensures that non-conforming products do not enter the Indian market.",
          "Trust and Confidence - bolsters consumer belief in local and international products.",
          "Global Alignment - assists foreign companies in aligning with India's regulatory structure.",
          "Fair Competition - every market participant, irrespective of size, is assured of competing purely on quality.",
        ]}
      />
      <p className="service-left-content-paragraph">
        BIS certification for packaged drinking water is an example of where
        lacking certification could pose health issues. Other equally lacking
        standards of product certification for heaters, toasters, and other
        electric appliances can lead to fires. Therefore, by having a BIS
        certification, the government makes sure these challenges are addressed.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      {/* Process */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Process</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Certification Process
      </h2>

      <p className="service-left-content-paragraph">
        The BIS certification process follows a structured flow:
      </p>

      <PointsListWithoutHeading
        points={[
          "Identify Relevant Standard: Select applicable Indian Standard (IS).",
          "Application Submission: File with BIS and enclose any pertinent documents.",
          "Product Testing: Testing done in approved BIS labs.",
          "Factory Inspection: Facilities are inspected by BIS officers.",
          "BIS License: certificate is awarded for successful assessment evaluation.",
          "Surveillance: sustained compliance along with license changes is the new norm.",
        ]}
      />
    </div>
  );
};

const DocumentsSection = () => {
  return (
    <div id="documents" className="flex flex-col scroll-mt-20">
      {/* Documents */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Documents</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        Documents Required for BIS Certification
      </h2>

      <p className="service-left-content-paragraph">
        A strong documentation package ensures smooth processing. Key
        requirements include:
      </p>

      <PointsListWithoutHeading
        points={[
          "Business license or company registration documents.",
          "Manufacturing process flow chart.",
          "List of machinery and equipment.",
          "Product details and technical specifications.",
          "Test reports from BIS-recognized labs.",
          "Quality control manual.",
          "Trademark certificate.",
        ]}
      />

      <h3 className="service-left-content-heading-three mt-5">
        For foreign manufacturers:
      </h3>

      <PointsListWithoutHeading
        points={[
          "Appointment of an Authorized Indian Representative (AIR).",
          "Proof of representation and identity documents.",
        ]}
      />
    </div>
  );
};

const CostSection = () => {
  return (
    <div id="cost" className="flex flex-col scroll-mt-20">
      {/* Cost */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Cost</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Certification Cost
      </h2>

      <div className="mt-[16px] md:mt-[24px]">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg">
          <TableHeader className="bg-[#F9F7F2]">
            <TableRow className="bg-[#1A8781]/10">
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Cost Component
              </TableHead>
              <TableHead className="px-6 py-3 text-left text-xs md:text-base font-geist font-medium text-gray-700 uppercase tracking-wider rounded-tr-lg">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Application Fee
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                One-time, non-refundable fee depending on product type
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Testing Charges
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Based on complexity; paid to BIS-recognized labs
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Annual License Fee
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Paid annually to maintain BIS license
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Inspection/Factory Audit Charges
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Charged if BIS officials visit factory (domestic or
                international travel extra)
              </TableCell>
            </TableRow>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Consultancy Charges (if applicable)
              </TableCell>
              <TableCell className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-geist text-[#42434d]">
                Optional, for end-to-end compliance help from consultants
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

const AIRSection = () => {
  return (
    <div id="air" className="flex flex-col scroll-mt-20">
      {/* AIR */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">AIR</span>
        <Separator className="service-left-content-separator" />
      </div>
      <h2 className="service-left-content-heading-two">
        Role of Authorized Indian Representative (AIR)
      </h2>

      <p className="service-left-content-paragraph">
        For foreign manufacturers, the Authorized Indian Representative (AIR) is
        critical.
      </p>

      <PointsListWithoutHeading
        points={[
          "Handles all communication with BIS.",
          "Gathers and submits documents, then facilitates the inspection process.",
          "Ensures compliance regarding certification, before, and after.",
          "Must be an Indian citizen or an organization with a registered local address.",
        ]}
      />

      <p className="service-left-content-paragraph">
        In the absence of an AIR, obtaining BIS certification for foreign
        companies is impossible.
      </p>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div id="conclusion" className="flex flex-col scroll-mt-20">
      {/* Conclusion */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Conclusion</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">Conclusion</h2>

      <p className="service-left-content-paragraph">
        Having a BIS certification is a necessity for doing business in India.
        It is no longer an optional certification in business. It is crucial for
        business success and building trust. BIS is essential for safety and
        success in India. For manufacturers and importers, it offers an easy and
        safe business setup environment. Legal issues and fines are no longer a
        concern. With a BIS mark, consumer trust is guaranteed.
      </p>

      <p className="service-left-content-paragraph">
        India is one of the biggest growing economies in the world and gaining
        access to sell there can help an exporter grow. No matter if you are a
        manufacturer in India or abroad, the BIS license is needed to
        manufacture or sell products in the Indian market. It's required, and it
        unlocks business prospects with India's growing population. It's an
        investment in safety, consumer trust, brand reputation, credibility, and
        long-term growth.
      </p>
    </div>
  );
};

const SchemesSection = () => {
  return (
    <div id="schemes" className="flex flex-col scroll-mt-20">
      {/* Schemes */}
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Schemes</span>
        <Separator className="service-left-content-separator" />
      </div>

      <h2 className="service-left-content-heading-two">
        BIS Certification Schemes
      </h2>

      <p className="service-left-content-paragraph">
        BIS has numerous certification schemes designed for varied industries
        and product types. Each is designed to address the particular needs of
        the industry and the product.
      </p>

      <PointsListWithoutHeading
        points={[
          "FMCS – Foreign Manufacturers Certification Scheme",
          "ISI Mark Scheme (Domestic Manufacturers)",
          "Scheme X under Indian BIS",
          "CRS – Compulsory Registration Scheme",
          "Hallmarking Scheme (Jewellery & Precious Metals)",
          "Eco Mark Certification",
          "Management Systems Certification Scheme (MSCS)",
          "LRS (Lab Recognition Scheme)",
        ]}
        linkMap={{
          "FMCS – Foreign Manufacturers Certification Scheme":
            "a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis",
          "ISI Mark Scheme (Domestic Manufacturers)":
            "a-guide-to-bis-certification-indian-bis",
          "Scheme X under Indian BIS":
            "indian-bis-certification-under-scheme-x",
          "CRS – Compulsory Registration Scheme":
            "what-is-crs-bis-or-crs-registration",
        }}
      />

      <h3 className="service-left-content-heading-three">
        ISI Mark Scheme (Domestic Manufacturers)
      </h3>

      <p className="service-left-content-paragraph">
        For Indian manufacturers, getting a BIS licence is a prerequisite for
        ensuring legal sales of their products within the country. This
        certification is issued by the Bureau of Indian Standards (BIS) to
        certify satisfaction of Indian Standards pertaining to quality, safety
        and performance benchmarks for the products. This includes factory
        audits, product testing and compliance checks with the BIS parameters.
        Once the product is passed, the manufacturers are allowed to put the ISI
        mark on the product. This mark is a trade mark for the manufacturer and
        helps the customer identify a genuine, ISI certified product.
      </p>

      <p className="service-left-content-paragraph">
        Regardless of whether it is for electronics, steel, cement, plastic, or
        construction materials, obtaining a BIS certificate is essential for
        gaining market access. Unlike gaining consumer confidence, a BIS
        certificate enhances the reputation of Indian manufacturers, enables
        them to participate in government contracts, and opens up a host of
        other business opportunities. Most importantly, the absence of BIS
        certification can have damaging repercussions, ranging from legal fines
        and product recall to a complete ban of sale in India. Therefore, BIS
        compliance is more than a legal requirement, it is a targeted strategy
        for expanding and maintaining consumer confidence.
      </p>

      <p className="service-left-content-paragraph">
        For Indian manufacturers, the ISI mark scheme is the most prestigious
        mark. Under the scheme, Indian manufacturers are required to have their
        products tested at BIS recognized testing facilities. Manufacturing
        sites are subject to inspection and testing. Compliant products are
        granted approval to use the ISI mark. It is an offence to supply
        products like cement, LPG cylinders, electrical cables, packaged
        drinking water and more, without the ISI mark.
      </p>

      <h3 className="service-left-content-heading-three">
        FMCS – Foreign Manufacturers Certification Scheme
      </h3>

      <p className="service-left-content-paragraph">
        The Foreign Manufacturers Certification Scheme (FMCS) is a scheme
        developed by the Bureau of Indian Standards for foreign companies
        wishing to enter the Indian Market. This scheme guarantees the safety,
        quality, and performance assurance of the products manufactured abroad
        complying with the required Indian standards. As per FMCS, foreign
        companies wishing to sell products in India must first acquire a Bureau
        of Indian Standards certificate or a license. Like Indian manufacturers,
        foreign manufacturers are also required to secure a BIS license to use
        ISI mark on their product. The desirable ISI mark is given after
        extensive evaluation that includes factory and rigorous product sample
        testing against the Indian Standards.
      </p>

      <p className="service-left-content-paragraph">
        A foreign manufacturer is required to appoint an Authorized Indian
        Representative (AIR), who is responsible for communication and
        coordination, as the first point of contact with the Bureau of Indian
        Standards (BIS) for the scheme. It includes the filing of an
        application, in depth compliance evaluation, and the assumption of all
        necessary obligations to achieve compliance within the deadlines. As a
        result of following the FMCS guidelines, foreign companies are able to
        enter the Indian market, as well as acquire goodwill with the customers.
        Any product with an ISI mark shows a high level of quality, safety, and
        reliability assurance in India.
      </p>

      <p className="service-left-content-paragraph">
        No foreign products which fall under the regulated categories are
        allowed to enter India without the FMCS certification.
      </p>

      <h3 className="service-left-content-heading-three">
        Scheme X (Omnibus Technical Regulation)
      </h3>

      <p className="service-left-content-paragraph">
        Schome X, or the Omnibus Technical Regulation, is another BIS
        certification Scheme designed by the Bureau of Indian Standards to help
        simplify the compliance procedures of industries in mechanical and
        electrical domains. Unlike the other certification schemes, Scheme X
        focuses on reducing documentation, assessments, and approvals while
        ensuring that products adhere to the Indian Standards. The products with
        the standard mark are of exceptional quality and safety and can be sold
        after undergoing type testing, factory inspections, and simple
        certification of mandatory requirements.
      </p>

      <p className="service-left-content-paragraph">
        The scheme X covers heavy machinery and electrical equipment safety
        guidelines for products such as pumps, cranes, transformers, machine
        tools and other heavy engineering products. These are the most pertinent
        industries and all where reliability and safety is a necessity. Scheme X
        is convenient as it shortens the time and costs of the complex BIS
        certification. It aims to streamline the compliance process in order to
        facilitate quicker clearance for marketing and enhanced reputation
        without compromising the quality and safety standards. The enduring and
        traditional reputation of the Bureau of Indian Standards enables easier
        international trade, indispensable for companies to meet compliance
        requirements and boost competitiveness.
      </p>

      <p className="service-left-content-paragraph">
        BIS Scheme X is mandatory to access the Indian heavy machine industry.
        This new scheme is important for improved market competition, innovation
        and compliance to regulations which are streamlined through this
        simplified yet robust structure.
      </p>

      <h3 className="service-left-content-heading-three">
        Compulsory Registration Scheme (CRS)
      </h3>

      <p className="service-left-content-paragraph">
        The Bureau of Indian Standards (BIS) has developed a BIS certification
        program called the Compulsory Registration Scheme (CRS) aimed at
        regulating IT and electronic products in India. It focuses on assessing
        the safety and quality of high-risk products like LED lights, mobile
        phones, laptops, power banks, and other consumer electronics against
        Indian Standards. CRS, in contrast to the ISI scheme, does not issue an
        ISI mark, but certified products, in compliance with the scheme, bear a
        CRS mark with a unique registration number. All electronics and IT
        products need to be tested in the BIS-recognized laboratories and
        formally registered with BIS CRS, used to ensure compliance before they
        can be sold or imported into India.
      </p>

      <p className="service-left-content-paragraph">
        This scheme is essential for protecting Indian consumers from unsafe,
        substandard, or counterfeit electronics, particularly in the case of the
        rapidly growing digital market. Both Indian and foreign manufacturers
        need to acquire CRS certification. The foreign companies must appoint an
        Authorized Indian Representative AIR to ensure compliance. The BIS
        continually updates the list of products covered under the CRS to
        include new products and technologies and emerging safety issues. For
        manufacturers, obtaining BIS registration under CRS is an added
        advantage since it helps in regulatory compliance and it also increases
        customer's trust, company's reputation, and market access in the
        electronics industry in India.
      </p>

      <h3 className="service-left-content-heading-three">Hallmarking Scheme</h3>

      <p className="service-left-content-paragraph">
        In India, hallmarking of gold and silver jewellery is compulsory under
        the Hallmarking Scheme and regulated by the Bureau of Indian Standards
        (BIS) which guarantees the purity and genuineness of the jewellery.
        Precious Metal articles are tested at BIS approved Assaying and
        Hallmarking Centres (AHC) and are then stamped with hallmark signs. This
        process is only completed if the articles fulfill the Indian Standards
        laid out at the start. Jewelers must first acquire a BIS license which
        allows them to sell hallmarked jewellery. This is the only way to do so
        legally. The jeweler is obliged to undergo and complete product testing,
        BIS audits, and continuous compliance monitoring to sell hallmarked
        jewellery. The process, in the end, protects the consumer and ensures
        the purity, weight and quality and limits malpractice as well as fraud
        in the jewellery market.
      </p>

      <p className="service-left-content-paragraph">
        For Indian consumers, gold and silver are not just ornaments but also
        major investments, which makes trust and transparency essential. The
        hallmarking jewelry is a mark of assurance for the common citizen in the
        country that every piece of jewelry for sale has gone through extensive
        testing against various national benchmarks and fair trading practices.
        Jewelers can showcase their credibility and market reputation by
        hallmarking jewelry. The inability to comply with the rules set brings
        punishment which can include suspension of license. For hallmarking
        under BIS, it serves as a fulfillment of principle-based and legal
        obligations. This not only increases consumer satisfaction but also
        enhances the Indian jewellery market as a whole. This is also the case
        for smaller retailers as well as larger scale manufacturers.
      </p>

      <h3 className="service-left-content-heading-three">
        Eco Mark Certification
      </h3>

      <p className="service-left-content-paragraph">
        The Eco Mark is an innovation-centered recognition scheme created by the
        Bureau of Indian Standards (BIS) aimed at the promotion of eco-friendly
        goods. Unlike the traditional certification which concerns itself
        prominently with safety and quality parameters, the Eco Mark is awarded
        to goods which conform to Indian Standards and which show at least some
        reduced level of the adverse environmental impact during any one or more
        of the various stages of the life cycle of the goods. Eco Mark
        certification is awarded only after considerable testing and the proving
        of criteria - compliance which includes emission levels, non-toxicity,
        the rate of biodegrade, capacity to recycle and overall interactions
        with the system. Eco Mark, just like the ISI mark, is an emblem of
        assurance from the government which has been granted the status of a
        certification mark, albeit with more pronounced goals of environmental
        sustainability.
      </p>

      <p className="service-left-content-paragraph">
        The BIS licence with Eco Mark certifies that a company engages in
        responsible manufacturing and cares about the environment. It ensures
        compliance with the law and creates a competitive advantage with
        protective consumers and sustainability-oriented businesses. Eco Mark
        helps for the industry to trust and adopt green practices and for the
        consumers to trust that the products they buy are safe and
        environmentally responsible. Eco Mark supports India's vision for
        enhanced quality protection with environmental protection under BIS.
      </p>

      <h3 className="service-left-content-heading-three">
        Management Systems Certification Scheme (MSCS)
      </h3>

      <p className="service-left-content-paragraph">
        The Management Systems Certification Scheme (MSCS) initiated by the
        Bureau of Indian Standards (BIS) is a stepwise procedure which evaluates
        and recognizes concerned firms for the implementation of internationally
        accepted and recognized management systems. MSCS framework consists of
        ISO Standards like ISO 9001 Quality Management, ISO 14001 Environment
        Management, ISO 45001 Occupational Health and Safety Management System
        and others. MSCS certifies the firm for the legal operations,
        consistency, and continuous improvement of the operations. Certified
        firms go through numerous assessments and audits which helps them build
        trust among the customers, regulators, and stakeholders which
        strengthens the guarantee of safety, quality, and sustainability.
      </p>

      <p className="service-left-content-paragraph">
        BIS is the national standards body of India and is the certifying body
        for the enhancement of the organization's reputation and credibility
        domestically and outside India. MSCS besides fostering accountability
        through periodic supervision and recertification also frees up a
        business to actively support public led programs like Make in India and
        Atmanirbhar Bharat. Besides legal obligation, the scheme also helps in
        cultivating a culture of integrity, efficiency and fair trading. MSCS
        encourages the trade and investment by the certified companies and BIS
        plays a crucial part in the development of the quality ecosystem of the
        country.
      </p>

      <h3 className="service-left-content-heading-three">
        LRS – Lab Recognition Scheme
      </h3>

      <p className="service-left-content-paragraph">
        Under the Bureau of Indian Standards (BIS), the Lab Recognition Scheme
        (LRS) is an integral part of a system that guarantees the dependability
        and overall competency of laboratories that test and certify products
        for BIS approval. Such labs are critically appraised on diverse
        attributes which include technical knowledge, quality of the workforce,
        infrastructure, and the overall competency and satisfaction of the lab
        with the ISO/ IEC 17025 standard. These labs, once approved, are
        permitted to perform testing on the product for which conformity
        assessment is done as part of various BIS certification programs such as
        the ISI Mark Scheme and the Compulsory Registration Scheme (CRS). It is
        clear that for manufacturers, in particular for importers and exporters,
        the reports obtained from an LRS approved lab are a critical requirement
        to achieve a BIS certificate that is a legal requirement for certain
        products.
      </p>

      <p className="service-left-content-paragraph">
        The LRS is empowering India's assurance systems by maintaining equity in
        testing outcomes and ensuring that all outcomes are consistent and
        globally benchmarked, while accrediting only reliable and sound
        laboratories. To uphold integrity and transparency, BIS performs regular
        audits, proficiency tests, and surveillance of recognized schematic
        labs. Recognition of this certification enables BIS to improve trust
        from consumers while making the certification process more efficient for
        industries, as only safe, compliant, and high-quality products will be
        offered in the Indian market. For organizations that aim to receive BIS
        certification, collaboration with LRS-approved labs is the most
        essential to achieve compliance and market access.
      </p>

      <h3 className="service-left-content-heading-three">
        Products That Require BIS Certification
      </h3>

      <p className="service-left-content-paragraph">
        BIS certification applies to a wide variety of products. Examples
        include:
      </p>

      <PointsListWithoutHeading
        points={[
          "Electrical & Electronics – LED lights, mobile phones, adapters, laptops.",
          "Construction Materials – Cement, steel bars, structural products.",
          "Consumer Goods – Packaged drinking water, cooking gas cylinders.",
          "Jewelry & Precious Metals – Gold and silver articles under hallmarking.",
          "Industrial Equipment – Pumps, transformers, machine tools.",
        ]}
      />

      <p className="service-left-content-paragraph">
        The list continues to grow as new risks and technologies emerge.
      </p>

      <h3 className="service-left-content-heading-three">
        Benefits of BIS Certification
      </h3>

      <p className="service-left-content-paragraph">
        For companies, the BIS certificate offers much more than mere compliance
        with the law.
      </p>

      <PointsListWithoutHeading
        points={[
          "Legal compliance: no fines, no bans, no seizure.",
          "Market access: needed for selling regulated products in India.",
          "Consumer trust: builds with the well-recognized ISI mark as a sign of proof.",
          "Competitive advantage: as certified companies easily differentiate from uncertified competitors.",
          "Export facilitation: many international buyers understand and appreciate BIS certification.",
          "Participation in Tenders: many government projects award contracts for goods which are BIS certified.",
        ]}
      />
    </div>
  );
};

const BISCertificationFaq = () => {
  const faqData = [
    {
      question: "What is BIS certification in India?",
      answer:
        "BIS certification is a quality assurance certification issued by the Bureau of Indian Standards (BIS) to ensure that products comply with Indian standards for safety, performance, and quality. It is mandatory for various product categories and helps in consumer protection and regulatory compliance.",
    },
    {
      question: "Why do I need a BIS certificate?",
      answer:
        "A BIS certificate is essential to legally manufacture, import, distribute, or sell certain products in India. It assures consumers that the product meets the safety and quality guidelines of Indian standards.",
    },
    {
      question: "What is the ISI mark under BIS certification?",
      answer:
        "The ISI mark is a certification symbol provided under the BIS certification scheme. It indicates that a product complies with Indian standards and has been certified by the Indian BIS through proper testing and registration.",
    },
    {
      question: "Who issues BIS licenses in India?",
      answer:
        "BIS licenses are issued by the Bureau of Indian Standards (Indian BIS), the national standards body under the Ministry of Consumer Affairs, Food and Public Distribution.",
    },
    {
      question: "What are the different types of BIS certification schemes?",
      answer:
        "The major BIS certification schemes include the ISI mark scheme, Compulsory Registration Scheme (CRS), Foreign Manufacturers Certification Scheme (FMCS), Hallmarking for jewelry, Eco Mark certification, and what is Scheme X for industrial machinery.",
    },
    {
      question: "What is Scheme X under BIS certification?",
      answer:
        "Scheme X is a simplified BIS certification process applicable to industrial products like pumps, transformers, machine tools, and cranes. It ensures quicker approval without compromising compliance to Indian standards.",
    },
    {
      question: "Which products require BIS certification in India?",
      answer:
        "Products like electrical appliances, electronics, kitchenware, cement, steel, gold jewelry, mobile phones, and transformers require BIS certification as per the Indian BIS mandate.",
    },
    {
      question: "Is BIS registration mandatory for all products?",
      answer:
        "No, BIS registration is mandatory only for products listed in the compulsory certification scheme. However, voluntary BIS certification is also available to enhance product credibility.",
    },
    {
      question: "How long is a BIS licence valid?",
      answer:
        "A BIS licence is typically valid for one to two years and must be renewed before its expiry to continue using the ISI mark or maintain BIS registration status.",
    },
    {
      question: "What are the steps to get BIS certification in India?",
      answer:
        "The BIS certification process includes identifying applicable Indian standards, submitting an application, product testing, factory inspection, and issuance of a BIS certificate upon approval.",
    },
    {
      question: "Can foreign manufacturers apply for a BIS license?",
      answer:
        "Yes, under the Foreign Manufacturers Certification Scheme (FMCS), foreign companies can apply for a BIS license to sell products in India. They must appoint an Authorized Indian Representative (AIR).",
    },
    {
      question: "What is the role of the AIR in BIS certification?",
      answer:
        "An AIR (Authorized Indian Representative) acts as a liaison between the foreign manufacturer and the Indian BIS. They are responsible for documentation, communication, and compliance with BIS certification requirements.",
    },
    {
      question: "How can I apply for BIS registration online?",
      answer:
        "You can apply for BIS registration online through the official BIS portal. The process involves form submission, uploading documents, test reports, and payment of fees.",
    },
    {
      question: "What documents are required for a BIS certificate?",
      answer:
        "Documents needed include business license, product specifications, manufacturing process, lab test reports, factory layout, quality manual, and authorization forms (for foreign manufacturers).",
    },
    {
      question: "How much does BIS certification cost in India?",
      answer:
        "The cost of BIS certification depends on product type, testing requirements, scheme type (ISI, CRS, FMCS), and whether the applicant is domestic or foreign. Costs include application fees, testing charges, and inspection expenses.",
    },
    {
      question: "Is the ISI mark mandatory for all BIS-certified products?",
      answer:
        "No, only products under the ISI scheme are required to carry the ISI mark. Products under CRS or Hallmarking schemes follow different labeling protocols as per BIS registration norms.",
    },
    {
      question: "Can I get BIS certification for eco-friendly products?",
      answer:
        "Yes, products that meet environmental standards can get BIS certification under the Eco Mark scheme, which ensures compliance with Indian standards for environmental safety.",
    },
    {
      question:
        "What is the difference between BIS certification and BIS registration?",
      answer:
        "BIS certification generally refers to the approval under ISI, FMCS, or Hallmarking schemes, while BIS registration is commonly associated with the CRS scheme for electronic products.",
    },
    {
      question: "What is the Compulsory Registration Scheme (CRS)?",
      answer:
        "CRS is a BIS registration program for IT and electronic goods like LED lights, mobile phones, and power banks. It ensures product compliance with safety-related Indian standards.",
    },
    {
      question: "Do ISI mark and BIS certificate mean the same thing?",
      answer:
        "Not exactly. The ISI mark is the symbol granted to certified products under the BIS certification scheme. A BIS certificate is the legal document issued to the manufacturer.",
    },
    {
      question: "Can one BIS license cover multiple products?",
      answer:
        "No, a separate BIS licence is required for each product type and each manufacturing location, even if the products are similar.",
    },
    {
      question: "What happens if I sell products without BIS certification?",
      answer:
        "Selling products that require BIS certification without a valid BIS licence is illegal in India and can lead to penalties, product recalls, or bans.",
    },
    {
      question: "How long does it take to get BIS certification?",
      answer:
        "The BIS certification process generally takes 30 to 90 days, depending on the product type, testing requirements, and whether the applicant is domestic or foreign.",
    },
    {
      question: "Is BIS certification accepted globally?",
      answer:
        "While BIS certification is specific to India, it enhances global credibility by showcasing compliance with stringent Indian standards. Some BIS-certified products are also accepted under mutual recognition agreements.",
    },
    {
      question: "How often do I need to renew my BIS license?",
      answer:
        "BIS licenses must be renewed annually or biennially. Manufacturers must maintain compliance with Indian standards and pass surveillance audits to renew their BIS certificate.",
    },
  ];

  return (
    <section
      id="faqs"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 pt-5 pb-9 md:pb-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          FAQs – BIS Certification in India
        </h2>

        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can't find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>
        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <h3>
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="font-geist text-[14px] md:text-[18px] text-[#5e5f6e]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const BISCertificationServices = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12  md:pb-16  overflow-x-hidden ">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <h2 className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist  text-center text-[#1E1E1E] ">
              Our Services
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India's Best Certificate Consultant
              </span>
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
            </div>
          </BoxReveal>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-10 px-4 md:px-0 gap-y-12 md:gap-y-24">
          <Link
            to="/a-guide-to-bis-certification-for-foreign-manufacturers-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block hover:scale-105 transition-all duration-300"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Mark (ISI License) for Foreign Manufacture
            </p>
          </Link>

          <Link
            to="/cdsco-registration-certification"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={CDSCO}
                alt="CDSCO"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              CDSCO Registration Certification
            </p>
          </Link>

          <Link
            to="/what-is-crs-bis-or-crs-registration"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISCRS}
                alt="BISCRS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS (CRS) Registration
            </p>
          </Link>

          <Link
            to="/epr-certificate-for-plastic-waste-management-pwm"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={PlasticWasteManagement}
                alt="PlasticWasteManagement"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              Plastic Waste Management
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-epr-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={EPRCertificate}
                alt="EPRCertificate"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              EPR Certificate certifications
            </p>
          </Link>

          <Link
            to="/a-guide-on-how-to-obtain-lmpc-certificate"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={LMPC}
                alt="LMPC"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              LMPC Certificate certifications
            </p>
          </Link>

          <Link
            to="/what-is-bis-certificate-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={BISImage}
                alt="BIS"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              BIS Registration Certificate
            </p>
          </Link>

          <Link
            to="/a-guide-to-bis-certification-indian-bis"
            className="relative col-span-1 h-[145px] md:h-[240px] bg-[#B5DDEB] rounded-[15px] md:rounded-[20px] shadow-2xl shadow-blue-500/20 flex items-center justify-center md:block"
          >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <img
                src={ISIMarkImage}
                alt="ISIMark"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI MARK (BIS) for Indian Manufactures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const PointsListWithoutHeading = ({ points, linkMap }) => {
  return (
    <div className="mt-[18px] md:mt-[18px]">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
              <Check size={12} className="text-[#020817]" />
            </div>
            {linkMap && linkMap[point] ? (
              <Link
                to={`/${linkMap[point]}`}
                className="font-geist text-sm md:text-lg text-[#0b6b67] hover:text-[#084c49] underline underline-offset-4 tracking-wide text-left max-w-full leading-loose flex-1"
              >
                {point}
              </Link>
            ) : (
              <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
                {point}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
