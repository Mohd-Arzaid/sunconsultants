import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Check, SlashIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import ScrollToTopButton from "@/components/common/ScrollToTop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ClockLoader } from "react-spinners";
import axios from "axios";
import { BoxReveal } from "@/components/magicui/box-reveal";
import FooterEng from "@/components/manual/Footer/FooterEng";
import ServiceAuthorEng from "@/components/manual/ServiceAuthor/ServiceAuthorEng";
import ServicesRightSideContentEng from "@/components/manual/ServicesRightSideContent/ServicesRightSideContentEng";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const CANONICAL_URL =
  "https://bis-certifications.com/icat-certificate-india";
const FAQ_PAGE_URL = `${CANONICAL_URL}#faq`;

const ICAT_FAQS = [
  {
    question: "What is ICAT Certification in India?",
    answer:
      "ICAT Certification in India is an approval issued by the International Centre for Automotive Technology to ensure that vehicles and automotive components comply with Indian safety, emission, and performance standards. It is mandatory for certain products before they can be sold or registered in India.",
  },
  {
    question: "Is ICAT Certificate mandatory for all automotive products?",
    answer:
      "No, the ICAT Certificate is not mandatory for all products, but it is required for many vehicles and components regulated under CMVR and AIS standards. Manufacturers and importers must verify whether their specific product category requires ICAT Certification.",
  },
  {
    question: "What is the ICAT Certificate process?",
    answer:
      "The ICAT Certificate process involves application submission, document verification, product testing, compliance evaluation, and final certification. Each step ensures that the product meets Indian automotive standards before approval is granted.",
  },
  {
    question: "How much does ICAT Certification cost in India?",
    answer:
      "The ICAT Certification cost varies depending on product type, testing requirements, and complexity. It can range from ₹50,000 for simple components to over ₹25 lakhs for full vehicle certification, including testing and documentation expenses.",
  },
  {
    question: "How long does it take to get ICAT Approval?",
    answer:
      "The timeline for ICAT Approval depends on product complexity and testing requirements. Typically, it takes 4 to 12 weeks, but complex vehicle certifications may take longer due to extensive testing and validation processes.",
  },
  {
    question: "Who needs ICAT Registration?",
    answer:
      "ICAT Registration is required for automotive manufacturers, importers, OEMs, and component suppliers who want to sell or distribute regulated automotive products in India. It ensures compliance with national safety and emission standards.",
  },
  {
    question: "What is the difference between ICAT Certificate and homologation?",
    answer:
      "The ICAT Certificate is a part of the homologation process. Homologation refers to the complete approval process of a vehicle, while the ICAT Certificate is the official document issued after successful testing and compliance verification.",
  },
  {
    question: "Can imported vehicles get ICAT Certification?",
    answer:
      "Yes, imported vehicles must undergo ICAT Certification to ensure they meet Indian regulatory standards. Without ICAT Approval, imported vehicles cannot be registered or legally sold in India.",
  },
  {
    question: "Why should I hire ICAT Consultants in India?",
    answer:
      "ICAT Consultants help simplify the certification process by managing documentation, coordinating testing, and ensuring compliance. They reduce delays, minimize errors, and help businesses obtain ICAT Approval faster and more efficiently.",
  },
  {
    question: "What documents are required for ICAT Certification?",
    answer:
      "Typical documents include technical specifications, product drawings, test reports, manufacturing details, and compliance declarations. The exact requirements vary based on the product type and certification scope.",
  },
];

const getIcatFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": FAQ_PAGE_URL,
  mainEntity: ICAT_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const ICATCertificateinIndia = () => {
  return (
    <div className="relative">
      <MetaTags />
      <FAQSchemaInjector />
      <ICATRatingSchema />
      <BreadcrumbContent />
      <HeroSection />
      <IndexSection />
      <MainContent />
      <ServiceFaq />
      <div id="services">
        <Services />
      </div>
      <FooterEng />
      <ScrollToTopButton />
    </div>
  );
};

export default ICATCertificateinIndia;

const MetaTags = () => {
  const title =
    "ICAT Certificate in India: Process, Cost, Audit & Complete Guide";
  const description =
    "Complete details on ICAT Certificate in India including ICAT Certification process, cost, audit, requirements, and approval.";
  const keywords =
    "ICAT Certificate, ICAT Certification, ICAT License, ICAT Licence, ICAT Audit, ICAT Certification Cost, ICAT Approval, ICAT Certification Process, ICAT Certification Requirements";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "ICAT Certificate in India: Process, Cost, Audit & Complete Guide";
  const ogDescription = description;

  const breadcrumbStructuredData = {
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
        name: "ICAT Certificate in India: Complete Information",
        item: CANONICAL_URL,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    headline: "ICAT Certificate in India: Complete Information",
    description: description,
    image: "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
    author: {
      "@type": "Person",
      name: "Dhruv Aggarwal",
      url: "https://www.linkedin.com/in/dhruv-aggarwal-44b116155",
    },
    publisher: {
      "@type": "Organization",
      name: "Sun Certifications India",
      logo: {
        "@type": "ImageObject",
        url: "https://bis-certifications.com/company-logo/company-logo.webp",
      },
    },
    datePublished: "2025-09-15",
    dateModified: "2026-05-28",
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="publisher" content={publisher} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="og:site_name" content="Sun Certifications India" />
      <meta property="og:type" content="article" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={CANONICAL_URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
    </Helmet>
  );
};

const FAQSchemaInjector = () => {
  const faqSchema = useMemo(() => getIcatFaqSchema(), []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "icat-faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("icat-faq-schema");
      if (el) el.remove();
    };
  }, [faqSchema]);

  return null;
};

const ICATRatingSchema = () => {
  const ratingSchema = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "ICAT Certificate Consultant",
      image:
        "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
      description:
        "Professional ICAT Certificate and ICAT Certification assistance for automotive manufacturers, importers, and OEMs in India.",
      brand: {
        "@type": "Brand",
        name: "Sun Certifications India",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "58042",
        reviewCount: "58042",
      },
    }),
    []
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "icat-rating-schema";
    script.textContent = JSON.stringify(ratingSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("icat-rating-schema");
      if (el) el.remove();
    };
  }, [ratingSchema]);

  return null;
};

const BreadcrumbContent = () => {
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
                    ICAT Certificate in India: Complete Information
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

const HeroSection = () => {
  return (
    <div className="relative pt-[60px] md:pt-[104px] pb-[30px] md:pb-[106px] overflow-x-hidden bg-[#F9F7F2]">
      <div className="hidden md:block absolute inset-0 rounded-bl-full z-10 transform translate-x-1/2 custom-radial-gradient-cdsco"></div>
      <div
        className="absolute top-[20%] z-[10] right-[15%] w-[20px] h-[20px] rounded-full bg-[#1A8781]/30 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-[84rem] gap-[40px] md:gap-[90px] flex flex-col md:flex-row items-center justify-center h-full w-full mx-auto px-4 md:px-0">
        <div className="relative flex flex-col gap-6 md:gap-8 w-full md:w-[533px] items-start">
          <div className="inline-flex items-center">
            <div className="h-[3px] w-[40px] bg-[#1A8781] mr-4"></div>
            <span className="text-[#1A8781] font-poppins text-sm font-medium tracking-wider uppercase">
              Certified Expertise
            </span>
          </div>

          <div className="leading-[1.2] md:leading-[70px] z-[10] font-playfair font-bold text-[40px] md:text-[52px] text-[#1E1E1E] -mt-2">
            <span className="relative">
              ICAT
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Certificate
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            ICAT Certificate validates automotive products for safety, emission,
            and performance compliance—essential for manufacturers, importers, and
            OEMs entering the Indian market.
          </p>

          <div className="flex items-center -mt-2">
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
          </div>
        </div>

        <ContactUsForm />
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const getPageName = () => {
    const path = window.location.pathname;
    if (path.includes("/icat-certificate-india"))
      return "ICAT Certificate in India: Complete Information - English Page";
    return "ICAT Certificate in India: Complete Information";
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

      <div className="text-[30px] md:text-[48px] font-inter font-bold text-[#1E1E1E]">
        Book an Appointment
      </div>

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

const IndexSection = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const stickyRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const SECTIONS = useMemo(
    () => [
      "overview",
      "importance",
      "scope",
      "icat-services",
      "consultant",
      "process",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    importance: "Importance",
    scope: "Scope",
    "icat-services": "Services",
    consultant: "Consultant",
    process: "Process",
  };

  const handleItemClick = (item) => {
    const element = document.getElementById(item);
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

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
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [SECTIONS]);

  return (
    <div
      ref={stickyRef}
      className={`sticky top-0 md:top-[44px] z-[50] transition-colors duration-300 w-full h-auto md:h-20 ${
        isSticky ? "bg-white/70 backdrop-blur-lg" : "bg-[#B9DEEB]"
      }`}
    >
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

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200"
        >
          <div className="flex flex-col py-2">
            {SECTIONS.map((item) => (
              <button
                key={item}
                onClick={() => handleItemClick(item)}
                className={`px-4 py-3 text-left text-sm font-semibold font-geist tracking-wider uppercase transition-colors ${
                  item === activeSection
                    ? "text-blue-900 bg-blue-50"
                    : "text-blue-950 hover:bg-blue-50"
                }`}
              >
                {MENU_ITEMS[item]}
              </button>
            ))}
          </div>
        </div>
      )}

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

const MainContent = () => {
  return (
    <div className="max-w-[88rem] mx-auto px-4 py-8 md:px-12 md:py-12">
      <div className="flex flex-col md:flex-row gap-6 md:gap-[48px] w-full">
        <MainContentLeft />
        <ServicesRightSideContentEng />
      </div>
    </div>
  );
};

const MainSectionHeading = ({ children }) => (
  <h2 className="service-left-content-heading-two mt-4 md:mt-6 mb-2 md:mb-3">
    {children}
  </h2>
);

const TopicHeading = ({ children }) => (
  <h2 className="service-left-content-heading-three mt-8 md:mt-10">
    {children}
  </h2>
);

const SubHeading = ({ children }) => (
  <h3 className="service-left-content-heading-three mt-5 md:mt-6">
    {children}
  </h3>
);

const MainContentLeft = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-[20px] md:gap-[40px]">
        <div className="flex flex-col gap-2">
          <h1 className="service-left-content-heading-two mt-0 mb-2 md:mb-3">
            ICAT Certificate in India: Complete Information
          </h1>

          <p className="service-left-content-paragraph">
            If you&apos;re involved in manufacturing, importing, or selling
            automotive products in India, compliance is not optional—it&apos;s
            mandatory. One of the most critical yet often misunderstood
            requirements is the ICAT Certificate.
          </p>

          <p className="service-left-content-paragraph">
            Many businesses struggle with questions like:
          </p>

          <PointsListWithoutHeading
            points={[
              "What is ICAT Certificate?",
              "Do I need ICAT Certification?",
              "What is the ICAT Certificate process?",
              "How much does ICAT Certification cost?",
              "Is ICAT approval mandatory for my product?",
            ]}
          />

          <p className="service-left-content-paragraph">
            This confusion can delay product launches, increase compliance risks,
            and even lead to regulatory penalties.
          </p>

          <p className="service-left-content-paragraph">
            This comprehensive guide solves all your concerns. It explains
            everything about ICAT Certification in India, including its meaning,
            scope, services, process, cost, and the role of ICAT consultants—so
            you can confidently navigate the certification process and ensure full
            regulatory compliance.
          </p>
        </div>
        <div className="service-left-content-divider" />
        <OverviewSection />
        <div className="service-left-content-divider" />
        <ImportanceSection />
        <div className="service-left-content-divider" />
        <ScopeSection />
        <div className="service-left-content-divider" />
        <ServicesSection />
        <div className="service-left-content-divider" />
        <ConsultantSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <ServiceAuthorEng />
      </div>
    </div>
  );
};

const OverviewSection = () => {
  return (
    <div id="overview" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Overview</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>What is ICAT Certificate?</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The ICAT Certificate is an official approval issued by the International
        Centre for Automotive Technology (ICAT), which validates that a vehicle or
        automotive component complies with Indian regulatory standards.
      </p>

      <SubHeading>ICAT Full Form</SubHeading>
      <p className="service-left-content-paragraph">
        ICAT – International Centre for Automotive Technology
      </p>
      <p className="service-left-content-paragraph">
        ICAT is one of India&apos;s premier automotive testing and certification
        bodies, operating under the National Automotive Testing and R&amp;D
        Infrastructure Project (NATRiP), governed by the Ministry of Heavy
        Industries.
      </p>

      <SubHeading>Key Highlights of ICAT Certification</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Ensures compliance with Automotive Industry Standards (AIS) and Central Motor Vehicle Rules (CMVR)",
          "Mandatory for certain automotive products before entering the Indian market",
          "Applicable to manufacturers, importers, and OEMs",
          "Covers testing, validation, and certification",
        ]}
      />

      <SubHeading>What Does ICAT Certification Cover?</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Vehicle homologation",
          "Component testing",
          "Emission compliance",
          "Safety validation",
          "Performance testing",
        ]}
      />

      <p className="service-left-content-paragraph">
        In simple terms, the ICAT Certificate acts as a quality and safety
        assurance document for automotive products in India.
      </p>
    </div>
  );
};

const ImportanceSection = () => {
  return (
    <div id="importance" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Importance</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>
        Why ICAT Certification is Important in India
      </MainSectionHeading>

      <p className="service-left-content-paragraph">
        The Indian automotive industry is heavily regulated to ensure road safety,
        environmental protection, and product reliability. This makes ICAT
        Certification crucial for businesses.
      </p>

      <SubHeading>1. Legal Compliance</SubHeading>
      <p className="service-left-content-paragraph">
        Without proper ICAT Approval, many automotive products cannot be legally
        sold or registered in India. It ensures compliance with CMVR and AIS
        norms.
      </p>

      <SubHeading>2. Market Entry Requirement</SubHeading>
      <p className="service-left-content-paragraph">
        If you&apos;re launching a new vehicle or component, ICAT Registration is
        often a prerequisite for entering the Indian market.
      </p>

      <SubHeading>3. Safety Assurance</SubHeading>
      <p className="service-left-content-paragraph">ICAT testing verifies:</p>
      <PointsListWithoutHeading
        points={[
          "Structural integrity",
          "Brake performance",
          "Crash safety",
          "Emission levels",
        ]}
      />
      <p className="service-left-content-paragraph">
        This ensures public safety and reduces liability risks.
      </p>

      <SubHeading>4. Builds Brand Credibility</SubHeading>
      <p className="service-left-content-paragraph">
        An ICAT License enhances your brand image by demonstrating compliance
        with national standards.
      </p>

      <SubHeading>5. Facilitates OEM Partnerships</SubHeading>
      <p className="service-left-content-paragraph">
        Automotive OEMs prefer suppliers with valid ICAT Certification, making it
        easier to secure business deals.
      </p>

      <SubHeading>6. Smooth Product Approval Process</SubHeading>
      <p className="service-left-content-paragraph">
        Having an ICAT certificate simplifies approvals from government
        authorities and RTOs.
      </p>
    </div>
  );
};

const ScopeSection = () => {
  return (
    <div id="scope" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Scope</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Scope of ICAT Certification in India</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The scope of ICAT Certification in India is broad and covers multiple
        automotive segments.
      </p>

      <SubHeading>1. Vehicles</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Passenger vehicles",
          "Commercial vehicles",
          "Two-wheelers and three-wheelers",
          "Electric vehicles (EVs)",
        ]}
      />

      <SubHeading>2. Automotive Components</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Tyres",
          "Batteries",
          "Lighting systems",
          "Braking systems",
          "Engine parts",
        ]}
      />

      <SubHeading>3. EV Components</SubHeading>
      <PointsListWithoutHeading
        points={["Battery packs", "Charging systems", "Controllers"]}
      />

      <SubHeading>4. Import Certification</SubHeading>
      <p className="service-left-content-paragraph">
        Imported automotive products must undergo ICAT Registration to ensure
        compliance with Indian regulations.
      </p>

      <SubHeading>5. Homologation Services</SubHeading>
      <p className="service-left-content-paragraph">
        Homologation is the process of certifying that a vehicle model meets all
        regulatory standards. ICAT plays a major role in this process.
      </p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div id="icat-services" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Services</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Types of ICAT Services</MainSectionHeading>

      <p className="service-left-content-paragraph">
        ICAT offers a wide range of services beyond just certification.
        Understanding these services helps businesses choose the right compliance
        pathway.
      </p>

      <SubHeading>1. Homologation Services</SubHeading>
      <p className="service-left-content-paragraph">
        This is the most critical service under ICAT Certification.
      </p>
      <PointsListWithoutHeading
        points={[
          "Type approval for vehicles",
          "CMVR compliance testing",
          "Certification for production models",
        ]}
      />

      <SubHeading>2. Component Testing</SubHeading>
      <p className="service-left-content-paragraph">
        ICAT tests automotive components for:
      </p>
      <PointsListWithoutHeading
        points={["Durability", "Performance", "Safety compliance"]}
      />
      <p className="service-left-content-paragraph">
        This is essential for obtaining an ICAT Certificate for Automotive
        Manufacturers.
      </p>

      <SubHeading>3. Emission Testing</SubHeading>
      <p className="service-left-content-paragraph">
        Ensures compliance with Bharat Stage (BS) emission norms.
      </p>
      <PointsListWithoutHeading
        points={[
          "Exhaust emission testing",
          "Fuel efficiency analysis",
          "EV emission equivalence checks",
        ]}
      />

      <SubHeading>4. Noise &amp; Vibration Testing</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Noise pollution measurement",
          "Vibration analysis for safety and comfort",
        ]}
      />

      <SubHeading>5. Electric Vehicle Testing</SubHeading>
      <p className="service-left-content-paragraph">
        With the rise of EVs, ICAT provides:
      </p>
      <PointsListWithoutHeading
        points={[
          "Battery testing",
          "Thermal runaway analysis",
          "Charging system validation",
        ]}
      />

      <SubHeading>6. Material Testing</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Strength and durability checks",
          "Environmental resistance testing",
        ]}
      />

      <SubHeading>7. Calibration Services</SubHeading>
      <p className="service-left-content-paragraph">
        Ensures testing equipment accuracy for manufacturers.
      </p>
    </div>
  );
};

const ConsultantSection = () => {
  return (
    <div id="consultant" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Consultant</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Role of ICAT Consultants</MainSectionHeading>

      <p className="service-left-content-paragraph">
        Navigating the ICAT Certificate process can be complex, especially for new
        manufacturers or importers. This is where ICAT Consultants in India play a
        vital role.
      </p>

      <SubHeading>Why You Need an ICAT Consultant</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Regulatory requirements are technical and evolving",
          "Documentation can be extensive",
          "Testing procedures require precision",
        ]}
      />

      <SubHeading>Key Services Offered by ICAT Consultants</SubHeading>

      <SubHeading>1. Documentation Support</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Application filing",
          "Technical document preparation",
          "Compliance mapping",
        ]}
      />

      <SubHeading>2. Product Assessment</SubHeading>
      <p className="service-left-content-paragraph">
        Consultants evaluate your product before submission to identify compliance
        gaps.
      </p>

      <SubHeading>3. Liaison with ICAT Authorities</SubHeading>
      <p className="service-left-content-paragraph">
        They act as a bridge between your company and ICAT for faster approvals.
      </p>

      <SubHeading>4. Testing Coordination</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Scheduling tests",
          "Monitoring results",
          "Managing retesting if required",
        ]}
      />

      <SubHeading>5. Cost Optimization</SubHeading>
      <p className="service-left-content-paragraph">
        Experienced consultants help reduce the ICAT Certification cost by avoiding
        delays and errors.
      </p>

      <SubHeading>6. End-to-End Certification Support</SubHeading>
      <p className="service-left-content-paragraph">
        From application to final ICAT License, consultants handle everything.
      </p>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <div id="process" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Process</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>ICAT Certification Process</MainSectionHeading>

      <p className="service-left-content-paragraph">
        Understanding the ICAT Certificate process is essential for smooth
        approval.
      </p>

      <SubHeading>Step 1: Application Submission</SubHeading>
      <p className="service-left-content-paragraph">Submit an application with:</p>
      <PointsListWithoutHeading
        points={[
          "Product details",
          "Technical specifications",
          "Manufacturer information",
        ]}
      />

      <SubHeading>Step 2: Document Verification</SubHeading>
      <p className="service-left-content-paragraph">
        ICAT reviews all submitted documents for completeness and compliance.
      </p>

      <SubHeading>Step 3: Sample Testing</SubHeading>
      <p className="service-left-content-paragraph">
        Products are tested in ICAT labs for:
      </p>
      <PointsListWithoutHeading
        points={["Safety", "Performance", "Emissions"]}
      />

      <SubHeading>Step 4: Evaluation &amp; Compliance Check</SubHeading>
      <p className="service-left-content-paragraph">
        Test results are analyzed against regulatory standards.
      </p>

      <SubHeading>Step 5: Grant of ICAT Certificate</SubHeading>
      <p className="service-left-content-paragraph">
        Upon successful evaluation, the ICAT Certificate is issued.
      </p>

      <TopicHeading>ICAT Certification Cost in India</TopicHeading>

      <p className="service-left-content-paragraph">
        The ICAT Certification cost depends on several factors.
      </p>

      <SubHeading>Key Cost Factors</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Type of product (vehicle/component)",
          "Number of variants",
          "Testing complexity",
          "Number of tests required",
          "Retesting (if applicable)",
        ]}
      />

      <SubHeading>Additional Costs</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Documentation fees",
          "Consultant charges",
          "Sample transportation",
          "Retesting fees",
        ]}
      />

      <p className="service-left-content-paragraph">
        Working with experienced ICAT Consultants in India can help optimize the
        ICAT Certification fee.
      </p>

      <TopicHeading>Conclusion</TopicHeading>

      <p className="service-left-content-paragraph">
        The ICAT Certificate is not just a regulatory requirement—it&apos;s a
        critical gateway to entering and succeeding in India&apos;s automotive
        market. Whether you are a manufacturer, importer, or supplier, obtaining
        ICAT Certification ensures compliance, safety, and credibility.
      </p>

      <p className="service-left-content-paragraph">
        However, the process can be complex and time-consuming without the right
        expertise. By understanding the ICAT Certificate process, cost structure,
        and scope—and by working with experienced ICAT Consultants in India—you
        can streamline approvals and accelerate your market entry.
      </p>
    </div>
  );
};

const PointsListWithoutHeading = ({ points }) => {
  return (
    <div className="mt-[18px] md:mt-[18px]">
      <ul className="flex flex-col gap-3 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-green-500/10 p-1.5 rounded-full flex-shrink-0 flex items-center justify-center min-w-[24px] min-h-[24px] mt-0.5">
              <Check size={12} className="text-[#020817]" />
            </div>
            <p className="font-geist text-sm md:text-lg text-[#42434d] tracking-wide text-left max-w-full leading-loose flex-1">
              {point}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceFaq = () => {
  return (
    <section
      id="faq"
      className="my-2 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-[88rem] mx-auto px-4 py-8 md:p-12">
        <h2 className="text-[32px] md:text-[48px] text-center font-geist font-semibold text-[#181818]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#52525b] text-center text-[16px] md:text-[20px] font-geist">
          Can&apos;t find the answer you are looking for?{" "}
          <a
            href="/contact"
            className="text-[#27272a] font-geist text-[20px] font-medium underline underline-offset-4 hover:text-[#1A8781] transition-colors"
          >
            Reach out to us!
          </a>
        </p>

        <div className="w-full max-w-[1104px] mt-[16px] md:mt-[24px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {ICAT_FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="font-geist text-[16px] md:text-[18px] text-[#3f3f46] font-medium">
                  <div className="flex-1 text-left">
                    <span className="mr-2 font-semibold">{index + 1}.</span>
                    {faq.question}
                  </div>
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

const Services = () => {
  return (
    <div className="pt-6 md:pt-8 pb-12 md:pb-16 overflow-x-hidden">
      <div className="max-w-[80rem] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="text-[30px] md:text-[48px] font-bold font-geist md:font-geist text-center text-[#1E1E1E]">
              Our Services
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#B6B4DF"} duration={0.5}>
            <div className="hidden md:flex items-center w-[608.46px] gap-3 h-[35px] mx-auto justify-center">
              <Separator className="w-[94.46px] h-[2px] bg-[#008080]" />
              <span className="uppercase font-poppins font-semibold text-[20px] text-[#008080]">
                India&apos;s Best Certificate Consultant
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
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
                src="/services-images/CDSCO.jpg"
                alt="CDSCO Logo"
                title="CDSCO Logo"
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
                src="/services-images/BISCRS.jpg"
                alt="BISCRS Logo"
                title="BISCRS Logo"
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
                src="/services-images/PlasticWasteManagement.jpg"
                alt="Plastic Waste Management Logo"
                title="Plastic Waste Management Logo"
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
                src="/services-images/EPRCertificate.jpg"
                alt="EPR Certificate Logo"
                title="EPR Certificate Logo"
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
                src="/services-images/LMPC.jpg"
                alt="LMPC Logo"
                title="LMPC Logo"
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
                src="/services-images/BIS.jpg"
                alt="BIS Logo"
                title="BIS Logo"
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
                src="/services-images/ISIMark.jpg"
                alt="ISI Mark Logo"
                title="ISI Mark Logo"
                className="w-[75px] h-[75px] md:w-[130px] md:h-[130px] rounded-full object-contain"
              />
            </div>
            <p className="text-sm md:text-xl w-full mt-8 md:mt-28 px-3 md:px-0 text-center font-geist md:font-roboto tracking-wide font-semibold text-black leading-tight md:leading-normal">
              ISI Mark Certification
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
