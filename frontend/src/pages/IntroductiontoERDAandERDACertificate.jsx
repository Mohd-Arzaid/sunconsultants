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
  "https://bis-certifications.com/erda-certificate-india";
const FAQ_PAGE_URL = `${CANONICAL_URL}#faq`;

const ERDA_FAQS = [
  {
    question: "What is ERDA Certificate?",
    answer:
      "An ERDA Certificate is a testing and validation document issued after electrical products successfully meet required safety and performance standards. It ensures that the product complies with Indian and international regulations and is safe for use in real-world applications.",
  },
  {
    question: "What is the ERDA Full Form?",
    answer:
      "The ERDA Full Form is Electrical Research and Development Association. It is an organization that provides testing, certification, and research services for electrical and power equipment in India.",
  },
  {
    question: "How to get ERDA Certificate in India?",
    answer:
      "To get an ERDA Certificate, you must submit an application, provide product samples, undergo testing, and meet all compliance requirements. Once the product passes all tests, ERDA issues the certification confirming product quality and safety.",
  },
  {
    question: "What does ERDA do?",
    answer:
      "ERDA conducts testing, certification, research, and consultancy services for electrical products. It helps manufacturers ensure compliance with safety standards and improve product reliability through advanced laboratory testing and technical expertise.",
  },
  {
    question: "What is ERDA Approval meaning?",
    answer:
      "ERDA Approval means that a product has successfully passed all required tests conducted by ERDA and meets applicable standards. It serves as proof of quality, safety, and compliance for electrical equipment.",
  },
  {
    question: "What is ERDA Certification Cost?",
    answer:
      "ERDA Certification Cost varies depending on product type, complexity, and testing requirements. It typically ranges from ₹50,000 to several lakhs, depending on the scope of testing and technical evaluation involved.",
  },
  {
    question: "What is ERDA Certificate Validity?",
    answer:
      "ERDA Certificate Validity usually depends on product type and applicable standards. It remains valid unless there are changes in product design, manufacturing process, or regulatory requirements that require re-testing.",
  },
  {
    question: "Is ERDA Certification mandatory in India?",
    answer:
      "ERDA Certification is not universally mandatory but is often required in government tenders, utility projects, and high-risk electrical applications where product safety and performance validation are critical.",
  },
  {
    question: "What are ERDA Certification Requirements?",
    answer:
      "ERDA Certification Requirements include product specifications, technical documents, test samples, and compliance details. Proper documentation and adherence to standards are essential for successful certification.",
  },
  {
    question: "Why should I hire ERDA Consultants?",
    answer:
      "Hiring ERDA Consultants simplifies the certification process by ensuring proper documentation, reducing delays, and increasing approval chances. They provide expert guidance and help businesses achieve certification efficiently.",
  },
];

const getErdaFaqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": FAQ_PAGE_URL,
  mainEntity: ERDA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

const IntroductiontoERDAandERDACertificate = () => {
  return (
    <div className="relative">
      <MetaTags />
      <FAQSchemaInjector />
      <ERDARatingSchema />
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

export default IntroductiontoERDAandERDACertificate;

const MetaTags = () => {
  const title =
    "ERDA Certificate in India: Process, Cost, Audit & Complete Guide";
  const description =
    "Complete details on ERDA Certificate in India including ERDA Certification process, cost, audit, requirements, and approval.";
  const keywords =
    "ERDA Certificate, ERDA Certification, ERDA License, ERDA Licence, ERDA Audit, ERDA Certification Cost, ERDA Approval, ERDA Certification Process, ERDA Certification Requirements";
  const author = "Dhruv Aggarwal";
  const publisher = "Sun Certifications India";
  const ogTitle =
    "ERDA Certificate in India: Process, Cost, Audit & Complete Guide";
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
        name: "Introduction to ERDA and ERDA Certificate",
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
    headline: "Introduction to ERDA and ERDA Certificate",
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
  const faqSchema = useMemo(() => getErdaFaqSchema(), []);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "erda-faq-schema";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("erda-faq-schema");
      if (el) el.remove();
    };
  }, [faqSchema]);

  return null;
};

const ERDARatingSchema = () => {
  const ratingSchema = useMemo(
    () => ({
      "@context": "https://schema.org/",
      "@type": "Product",
      name: "ERDA Certificate Consultant",
      image:
        "https://bis-certifications.com/services-main-images/CRSRegistration.webp",
      description:
        "Professional ERDA Certificate and ERDA Certification assistance for electrical product manufacturers and exporters in India.",
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
    script.id = "erda-rating-schema";
    script.textContent = JSON.stringify(ratingSchema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("erda-rating-schema");
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
                    Introduction to ERDA and ERDA Certificate
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
              ERDA
              <span className="absolute -bottom-2 left-0 w-[120px] h-[8px] bg-[#1A8781]/10 rounded-full"></span>
            </span>{" "}
            Certificate
          </div>

          <p className="font-poppins text-[18px] md:text-[20px] z-[10] leading-[1.6] md:leading-[40px] text-[#332156] max-w-[490px] -mt-2">
            ERDA Certificate and ERDA License help electrical manufacturers
            validate product safety, meet compliance standards, and gain market
            credibility in India and abroad.
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
    if (path.includes("/erda-certificate-india"))
      return "Introduction to ERDA and ERDA Certificate - English Page";
    return "Introduction to ERDA and ERDA Certificate";
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
      "process",
      "erda-services",
      "requirements",
      "consultant",
    ],
    []
  );

  const MENU_ITEMS = {
    overview: "Overview",
    importance: "Importance",
    process: "Process",
    "erda-services": "Services",
    requirements: "Requirements",
    consultant: "Consultant",
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
            Introduction to ERDA and ERDA Certificate
          </h1>

          <p className="service-left-content-paragraph">
            The ERDA full form is Electrical Research and Development Association.
            It is one of India&apos;s most important organizations working in the
            electrical sector, focusing on testing, certification, and research.
            ERDA was established to ensure that electrical products used in
            industries and households meet safety and quality standards. It is
            supported by the Government of India and major electrical companies,
            making it a trusted authority in the field.
          </p>

          <p className="service-left-content-paragraph">
            ERDA acts as a backbone for the electrical industry by ensuring that
            every product is safe, efficient, and reliable before it reaches
            consumers. Its services help manufacturers improve quality and gain
            trust in both national and international markets.
          </p>

          <p className="service-left-content-paragraph">
            In India&apos;s rapidly growing electrical and power sector, ensuring
            product safety, reliability, and compliance is no longer optional—it
            is mandatory. Manufacturers, exporters, and suppliers of electrical
            equipment often face a critical challenge: how to prove product quality
            and meet regulatory expectations without delays or rejections.
          </p>

          <p className="service-left-content-paragraph">
            This is where ERDA Certificate and ERDA License play a crucial role.
          </p>

          <p className="service-left-content-paragraph">
            The Electrical Research and Development Association (ERDA) provides
            advanced testing, certification, and research services that help
            businesses validate product performance and comply with national and
            international standards. Whether you are dealing with transformers,
            switchgear, cables, or power equipment, obtaining an ERDA License /
            ERDA Certificate can significantly enhance credibility and market
            acceptance.
          </p>
        </div>
        <div className="service-left-content-divider" /> 
        <OverviewSection />
        <div className="service-left-content-divider" />
        <ImportanceSection />
        <div className="service-left-content-divider" />
        <ProcessSection />
        <div className="service-left-content-divider" />
        <ServicesSection />
        <div className="service-left-content-divider" />
        <RequirementsSection />
        <div className="service-left-content-divider" />
        <ConsultantSection />
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

      <MainSectionHeading>What is ERDA Certificate</MainSectionHeading>

      <p className="service-left-content-paragraph">
        An ERDA certificate is an official proof that a product has been tested
        and approved by ERDA. It confirms that the product meets all required
        safety, quality, and performance standards. This certificate is extremely
        important for manufacturers because it allows them to sell their products
        in the market with confidence.
      </p>

      <p className="service-left-content-paragraph">
        The ERDA certificate is not just a document; it represents trust,
        reliability, and compliance. It assures customers and authorities that the
        product is safe to use and meets all regulatory requirements.
      </p>

      <SubHeading>Issued after successful testing</SubHeading>
      <p className="service-left-content-paragraph">
        The ERDA certificate is only given when a product passes all tests
        conducted in ERDA laboratories, ensuring it meets required standards.
      </p>

      <SubHeading>Confirms safety and compliance</SubHeading>
      <p className="service-left-content-paragraph">
        It proves that the product is safe for use and follows all necessary
        regulations.
      </p>

      <SubHeading>Required for industrial acceptance</SubHeading>
      <p className="service-left-content-paragraph">
        Many industries and government projects require an ERDA certificate before
        using any electrical product.
      </p>

      <SubHeading>Builds trust among customers</SubHeading>
      <p className="service-left-content-paragraph">
        Customers feel more confident buying products that are ERDA certified
        because they know they are tested and reliable.
      </p>

      <SubHeading>Important for exports</SubHeading>
      <p className="service-left-content-paragraph">
        An ERDA certificate helps companies enter international markets as it is
        recognized globally.
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
        Why ERDA Certification is Important in India
      </MainSectionHeading>

      <p className="service-left-content-paragraph">
        With increasing regulatory scrutiny and rising competition, obtaining an
        ERDA Certificate is becoming essential rather than optional.
      </p>

      <SubHeading>1. Ensures Product Safety and Compliance</SubHeading>
      <p className="service-left-content-paragraph">
        Electrical products can pose serious risks if not tested properly. ERDA
        Certification ensures compliance with safety standards, reducing hazards
        like short circuits, overheating, or failure.
      </p>

      <SubHeading>2. Mandatory for Certain Sectors</SubHeading>
      <p className="service-left-content-paragraph">
        In industries like power transmission, utilities, and infrastructure, ERDA
        Approval is often required before product deployment.
      </p>

      <SubHeading>3. Enhances Market Credibility</SubHeading>
      <p className="service-left-content-paragraph">
        Having an ERDA License signals that your product has been independently
        tested, increasing trust among buyers and stakeholders.
      </p>

      <SubHeading>4. Supports Government and Tender Requirements</SubHeading>
      <p className="service-left-content-paragraph">
        Many tenders and procurement processes require an ERDA Test Certificate
        as a qualification criterion.
      </p>

      <SubHeading>5. Facilitates Export Opportunities</SubHeading>
      <p className="service-left-content-paragraph">
        Global buyers prefer products backed by recognized testing bodies like
        ERDA, making exports smoother.
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

      <MainSectionHeading>ERDA Certification Process</MainSectionHeading>

      <p className="service-left-content-paragraph">
        The ERDA certification process is detailed and systematic. It ensures
        that every product is thoroughly checked before approval. This process
        involves multiple steps, including application, testing, evaluation, and
        certification.
      </p>

      <p className="service-left-content-paragraph">
        The goal of ERDA certification is to maintain high-quality standards and
        ensure that only safe products are available in the market.
      </p>

      <SubHeading>Application submission</SubHeading>
      <p className="service-left-content-paragraph">
        The company submits an application with product details and required
        documents to initiate the certification process.
      </p>

      <SubHeading>Documentation verification</SubHeading>
      <p className="service-left-content-paragraph">
        ERDA checks all documents to ensure that the product meets basic
        requirements before testing begins.
      </p>

      <SubHeading>Laboratory testing</SubHeading>
      <p className="service-left-content-paragraph">
        The product is tested under various conditions to check its performance,
        safety, and durability.
      </p>

      <SubHeading>Evaluation and analysis</SubHeading>
      <p className="service-left-content-paragraph">
        Experts analyze test results to determine whether the product meets
        standards.
      </p>

      <SubHeading>Issuance of ERDA certificate</SubHeading>
      <p className="service-left-content-paragraph">
        If the product passes all tests, the ERDA certificate is issued.
      </p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div id="erda-services" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Services</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>Types of ERDA Services</MainSectionHeading>

      <p className="service-left-content-paragraph">
        ERDA offers a wide range of services that go beyond just certification.
      </p>

      <SubHeading>1. Testing Services</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Type testing",
          "Routine testing",
          "Special testing",
          "Short circuit testing",
        ]}
      />
      <p className="service-left-content-paragraph">
        These tests result in an ERDA Test Certificate, which is crucial for
        compliance.
      </p>

      <SubHeading>2. Certification Services</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Product certification",
          "Quality validation",
          "Performance verification",
        ]}
      />

      <SubHeading>3. ERDA NABL Certificate Testing</SubHeading>
      <p className="service-left-content-paragraph">
        ERDA labs are NABL accredited, meaning results are highly reliable and
        recognized across industries.
      </p>

      <SubHeading>4. Research &amp; Development</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Product innovation support",
          "Design validation",
          "Failure analysis",
        ]}
      />

      <SubHeading>5. Consultancy Services</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Guidance on ERDA Certification Requirements",
          "Documentation support",
        ]}
      />
    </div>
  );
};

const RequirementsSection = () => {
  return (
    <div id="requirements" className="flex flex-col scroll-mt-20">
      <div className="flex w-full items-center gap-3">
        <span className="service-left-content-index-heading">Requirements</span>
        <Separator className="service-left-content-separator" />
      </div>

      <MainSectionHeading>ERDA Certification Requirements</MainSectionHeading>

      <p className="service-left-content-paragraph">
        To obtain an ERDA Certificate, you need:
      </p>

      <PointsListWithoutHeading
        points={[
          "Product specifications",
          "Technical drawings",
          "Test samples",
          "Quality control documents",
          "Manufacturing details",
        ]}
      />

      <p className="service-left-content-paragraph">
        Meeting these ERDA Certification Requirements ensures faster approval.
      </p>

      <TopicHeading>ERDA Certification Cost</TopicHeading>

      <p className="service-left-content-paragraph">
        The ERDA Certification Cost depends on multiple factors:
      </p>

      <PointsListWithoutHeading
        points={[
          "Type of product",
          "Number of tests required",
          "Complexity of testing",
          "Sample quantity",
        ]}
      />
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

      <MainSectionHeading>Role of ERDA Consultants</MainSectionHeading>

      <p className="service-left-content-paragraph">
        Navigating the ERDA Certification Process can be complex, especially for
        first-time applicants. This is where ERDA Consultants come in.
      </p>

      <SubHeading>What ERDA Consultants Do</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Assess product readiness",
          "Guide on applicable standards",
          "Prepare documentation",
          "Coordinate with ERDA labs",
          "Track application progress",
          "Resolve technical queries",
        ]}
      />

      <SubHeading>Why You Should Hire ERDA Certificate Consultants</SubHeading>
      <PointsListWithoutHeading
        points={[
          "Saves time and reduces errors",
          "Ensures faster approval",
          "Minimizes rejection risks",
          "Provides expert guidance",
        ]}
      />

      <p className="service-left-content-paragraph">
        Professional ERDA Certificate Consultants act as a bridge between your
        business and certification authorities, making the process smooth and
        efficient.
      </p>

      <TopicHeading>Conclusion</TopicHeading>

      <p className="service-left-content-paragraph">
        In today&apos;s competitive and compliance-driven market, obtaining an
        ERDA Certificate is a strategic investment rather than just a regulatory
        step. It not only ensures product safety and quality but also enhances
        brand credibility, market acceptance, and business growth.
      </p>

      <p className="service-left-content-paragraph">
        Whether you are a manufacturer, exporter, or supplier, understanding the
        ERDA Certification Process, requirements, and benefits can give you a
        strong edge. With the right approach—and possibly the support of
        experienced ERDA Consultants—you can secure your ERDA License / ERDA
        Licence smoothly and unlock new opportunities in the electrical industry.
      </p>

      <p className="service-left-content-paragraph">
        If your goal is long-term success, trust, and compliance—ERDA
        Certification is the way forward.
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
            {ERDA_FAQS.map((faq, index) => (
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
